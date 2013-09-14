start = method

separator      = [ \t\v\f\u00A0\uFEFF\n\r\u2028\u2029]+
comments       = (["][^"]*["])+
ws             = (separator / comments)*
identifier     = first:[a-zA-Z] others:[a-zA-Z0-9]* {return first + others.join("");}
varIdentifier  = first:[a-z] others:[a-zA-Z0-9]* {return first + others.join("");}
keyword        = first:identifier last:[:] {return first + last;}
selector      = first:[a-zA-Z] others:[a-zA-Z0-9\:]* {return first + others.join("");}
className      = first:[A-Z] others:[a-zA-Z0-9]* {return first + others.join("");}
string         = ['] val:(("''" {return "'";} / [^'])*) ['] {
                     return smalltalk.ValueNode._new()
                            ._position_((line).__at(column))
                            ._value_(val.join("").replace(/\"/ig, '"'));
                 }

symbol         = "#" rest:bareSymbol {return rest;}
bareSymbol         = val:(selector / binarySelector / node:string {return node._value();})
                  {
                      return smalltalk.ValueNode._new()
                             ._position_((line).__at(column))
                             ._value_(val);
                  }
number         = n:(hex / float / integer) {
                     return smalltalk.ValueNode._new()
                            ._position_((line).__at(column))
                            ._value_(n);
                 }
hex            = neg:[-]? "16r" num:[0-9a-fA-F]+ {return parseInt((neg + num.join("")), 16);}
float          = neg:[-]?digits:[0-9]+ "." dec:[0-9]+ {return parseFloat((neg + digits.join("") + "." + dec.join("")), 10);}
integer        = neg:[-]?digits:[0-9]+ {return (parseInt(neg+digits.join(""), 10));}
literalArray   = "#(" rest:literalArrayRest {return rest;}
bareLiteralArray   = "(" rest:literalArrayRest {return rest;}
literalArrayRest   = ws lits:(lit:(parseTimeLiteral / bareLiteralArray / bareSymbol) ws {return lit._value();})* ws ")" {
                     return smalltalk.ValueNode._new()
                            ._position_((line).__at(column))
                            ._value_(lits);
                 }
dynamicArray   = "{" ws expressions:expressions? ws "."? "}" {
                     return smalltalk.DynamicArrayNode._new()
                            ._position_((line).__at(column))
                            ._nodes_(expressions);
                 }
dynamicDictionary = "#{" ws expressions: expressions? ws "}" {
                        return smalltalk.DynamicDictionaryNode._new()
                               ._position_((line).__at(column))
                               ._nodes_(expressions);
                    }
pseudoVariable = val:(
                   'true' {return true;}
                 / 'false' {return false;}
                 / 'nil' {return nil;}) {
                       return smalltalk.ValueNode._new()
                              ._position_((line).__at(column))
                              ._value_(val);
                   }
parseTimeLiteral        = pseudoVariable / number / literalArray / string / symbol
runtimeLiteral        = dynamicDictionary / dynamicArray / block
literal        = runtimeLiteral / parseTimeLiteral


variable       = identifier:varIdentifier {
                     return smalltalk.VariableNode._new()
                            ._position_((line).__at(column))
                            ._value_(identifier);
                 }
classReference = className:className {
                     return smalltalk.ClassReferenceNode._new()
                            ._position_((line).__at(column))
                            ._value_(className);
                 }

reference      = variable / classReference

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
expressions    = first:expression others:expressionList* {
                     var result = [first];
                     for(var i = 0; i < others.length; i++) {
                         result.push(others[i]);
                     }
                     return result;
                 }

assignment     = variable:variable ws ':=' ws expression:expression {
                     return smalltalk.AssignmentNode._new()
                            ._position_((line).__at(column))
                            ._left_(variable)
                            ._right_(expression);
                 }

ret            = '^' ws expression:expression ws '.'? {
                     return smalltalk.ReturnNode._new()
                            ._position_((line).__at(column))
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
                     return smalltalk.SequenceNode._new()
                            ._position_((line).__at(column))
                            ._temps_(temps || [])
                            ._nodes_(statements || []);
                 }

jsSequence     = jsStatement

block          = '[' ws params:blockParamList? ws sequence:sequence? ws ']' {
                     return smalltalk.BlockNode._new()
                            ._position_((line).__at(column))
                            ._parameters_(params || [])
                            ._nodes_([sequence._asBlockSequenceNode()]);
                 }

operand        = literal / reference / subexpression



unaryMessage   = ws selector:unarySelector ![:] {
                     return smalltalk.SendNode._new()
                            ._position_((line).__at(column))
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
                     return smalltalk.SendNode._new()
                            ._position_((line).__at(column))
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
                      return smalltalk.SendNode._new()
                             ._position_((line).__at(column))
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
                     return smalltalk.CascadeNode._new()
                            ._position_((line).__at(column))
                            ._receiver_(send._receiver())
                            ._nodes_(cascade);
                 }

jsStatement    = "<" val:((">>" {return ">";} / [^>])*) ">" {
                     return smalltalk.JSStatementNode._new()
                            ._position_((line).__at(column))
                            ._source_(val.join(""));
                 }


method         = ws pattern:(keywordPattern / binaryPattern / unaryPattern) ws sequence:sequence? ws {
                      return smalltalk.MethodNode._new()
                             ._position_((line).__at(column))
                             ._selector_(pattern[0])
                             ._arguments_(pattern[1])
                             ._nodes_([sequence]);
                 }

