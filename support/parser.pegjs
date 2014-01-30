start = method

separator      = [ \t\v\f\u00A0\uFEFF\n\r\u2028\u2029]+
comments       = (["][^"]*["])+
ws             = (separator / comments)*
identifier     = first:[a-zA-Z] others:[a-zA-Z0-9]* {return first + others.join("");}
keyword        = first:identifier last:[:] {return first + last;}
selector      = first:[a-zA-Z] others:[a-zA-Z0-9\:]* {return first + others.join("");}
className      = first:[A-Z] others:[a-zA-Z0-9]* {return first + others.join("");}
string         = ['] val:(("''" {return "'";} / [^'])*) ['] {
                     return globals.ValueNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._value_(val.join("").replace(/\"/ig, '"'));
                 }

symbol         = "#" rest:bareSymbol {return rest;}
bareSymbol         = val:(selector / binarySelector / node:string {return node._value();})
                  {
                      return globals.ValueNode._new()
                             ._position_((line()).__at(column()))
                             ._source_(text())
                             ._value_(val);
                  }
number         = n:(numberExp / hex / float / integer) {
                     return globals.ValueNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._value_(n);
                 }
numberExp      = n:((float / integer) "e" integer) {return parseFloat(n.join(""));}
hex            = neg:[-]? "16r" num:[0-9a-fA-F]+ {return parseInt(((neg || '') + num.join("")), 16);}
float          = neg:[-]?digits:[0-9]+ "." dec:[0-9]+ {return parseFloat(((neg || '') + digits.join("") + "." + dec.join("")), 10);}
integer        = neg:[-]?digits:[0-9]+ {return (parseInt((neg || '') +digits.join(""), 10));}

literalArray   = "#(" rest:literalArrayRest {return rest;}
bareLiteralArray   = "(" rest:literalArrayRest {return rest;}
literalArrayRest   = ws lits:(lit:(parseTimeLiteral / bareLiteralArray / bareSymbol) ws {return lit._value();})* ws ")" {
                     return globals.ValueNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._value_(lits);
                 }
dynamicArray   = "{" ws expressions:expressions? ws "."? "}" {
                     return globals.DynamicArrayNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._nodes_(expressions || []);
                 }
dynamicDictionary = "#{" ws expressions: associations? ws "}" {
                        return globals.DynamicDictionaryNode._new()
                               ._position_((line()).__at(column()))
                               ._source_(text())
                               ._nodes_(expressions || []);
                    }
pseudoVariable = val:(
                   'true' {return true;}
                 / 'false' {return false;}
                 / 'nil' {return nil;}) {
                       return globals.ValueNode._new()
                              ._position_((line()).__at(column()))
                              ._source_(text())
                              ._value_(val);
                   }
parseTimeLiteral        = pseudoVariable / number / literalArray / string / symbol
runtimeLiteral        = dynamicDictionary / dynamicArray / block
literal        = runtimeLiteral / parseTimeLiteral


variable       = identifier:identifier {
                     return globals.VariableNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._value_(identifier);
                 }

reference      = variable

keywordPair    = key:keyword ws arg:binarySend ws {return {key:key, arg: arg};}

binarySelector = bin:[\\+*/=><,@%~|&-]+ {return bin.join("");}
unarySelector  = identifier

keywordPattern = pairs:(ws key:keyword ws arg:identifier {return {key:key, arg: arg};})+ {
                     var keywords = [];
                     var params = [];
                     var i = 0;
                     for(i = 0; i < pairs.length; i++){
                         keywords.push(pairs[i].key);
                     }
                     for(i = 0; i < pairs.length; i++){
                         params.push(pairs[i].arg);
                     }
                     return [keywords.join(""), params];
                 }
binaryPattern  = ws selector:binarySelector ws arg:identifier {return [selector, [arg]];}
unaryPattern   = ws selector:unarySelector {return [selector, []];}

expression     = assignment / cascade / keywordSend / binarySend

expressionList = ws "." ws expression:expression {return expression;}
expressions    = first:expression others:expressionList* { return [first].concat(others); }

assignment     = variable:variable ws ':=' ws expression:expression {
                     return globals.AssignmentNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._left_(variable)
                            ._right_(expression);
                 }

ret            = '^' ws expression:expression ws '.'? {
                     return globals.ReturnNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._nodes_([expression]);
                 }
  
temps          = "|" vars:(ws variable:identifier ws {return variable;})* "|" {return vars;}

blockParamList = params:((ws ":" ws param:identifier {return param;})+) ws "|" {return params;}

subexpression  = '(' ws expression:expression ws ')' {return expression;}

statements     = ret:ret [.]* {return [ret];}
                 / exps:expressions ws [.]+ ws ret:ret [.]* {
                       var expressions = exps;
                       expressions.push(ret);
                       return expressions;
                   }
                 / expressions:expressions? [.]* {
                       return expressions || [];
                   }

sequence       = jsSequence / stSequence

stSequence     = temps:temps? ws statements:statements? ws {
                     return globals.SequenceNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._temps_(temps || [])
                            ._nodes_(statements || []);
                 }

jsSequence     = jsStatement

block          = '[' ws params:blockParamList? ws sequence:sequence? ws ']' {
                     return globals.BlockNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._parameters_(params || [])
                            ._nodes_([sequence._asBlockSequenceNode()]);
                 }

operand        = literal / reference / subexpression



unaryMessage   = ws selector:unarySelector ![:] {
                     return globals.SendNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._selector_(selector);
                 }

unaryTail      = message:unaryMessage ws tail:unaryTail? ws {
                     if(tail) {
                         return tail._valueForReceiver_(message);
                     }
                     else {
                         return message;
                     }
                 }

unarySend      = receiver:operand ws tail:unaryTail? {
                     if(tail) {
                         return tail._valueForReceiver_(receiver);
                     }
                     else {
                         return receiver;
                     }
                 }

binaryMessage  = ws selector:binarySelector ws arg:(unarySend / operand) {
                     return globals.SendNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._selector_(selector)
                            ._arguments_([arg]);
                 }

binaryTail     = message:binaryMessage tail:binaryTail? {
                     if(tail) {
                         return tail._valueForReceiver_(message);
                      }
                     else {
                         return message;
                     }
                 }

binarySend     = receiver:unarySend tail:binaryTail? {
                     if(tail) {
                         return tail._valueForReceiver_(receiver);
                     }
                     else {
                         return receiver;
                     }
                 }


keywordMessage = ws pairs:(pair:keywordPair ws {return pair;})+ {
                     var selector = [];
                     var args = [];
                      for(var i = 0; i < pairs.length; i++) {
                          selector.push(pairs[i].key);
                          args.push(pairs[i].arg);
                      }
                      return globals.SendNode._new()
                             ._position_((line()).__at(column()))
                             ._source_(text())
                             ._selector_(selector.join(""))
                             ._arguments_(args);
                 }

keywordSend    = receiver:binarySend tail:keywordMessage {
                     return tail._valueForReceiver_(receiver);
                 }

message        = binaryMessage / unaryMessage / keywordMessage

cascade        = ws send:(keywordSend / binarySend) messages:(ws ";" ws mess:message ws {return mess;})+ {
                     var cascade = [];
                     cascade.push(send);
                     for(var i = 0; i < messages.length; i++) {
                         cascade.push(messages[i]);
                     }
                     return globals.CascadeNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._receiver_(send._receiver())
                            ._nodes_(cascade);
                 }

jsStatement    = "<" val:((">>" {return ">";} / [^>])*) ">" {
                     return globals.JSStatementNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(val.join(""))
                 }


method         = ws pattern:(keywordPattern / binaryPattern / unaryPattern) ws sequence:sequence? ws {
                      return globals.MethodNode._new()
                             ._position_((line()).__at(column()))
                             ._source_(text())
                             ._selector_(pattern[0])
                             ._arguments_(pattern[1])
                             ._nodes_([sequence]);
                 }


associationSend     = send:binarySend & { return send._selector() === "->" } { return [send._receiver(), send._arguments()[0]]; }

associationList = ws "." ws expression:associationSend {return expression;}
associations    = first:associationSend others:associationList* { return first.concat.apply(first, others); }

