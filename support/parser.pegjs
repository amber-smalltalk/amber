start = method

separator      = [ \t\v\f\u00A0\uFEFF\n\r\u2028\u2029]+
comments       = ('"' [^"]* '"')+
ws             = (separator / comments)*
maybeDotsWs = ("." / separator / comments)*
identifier     = first:[a-zA-Z] others:[a-zA-Z0-9]* {return first + others.join("");}
keyword        = first:identifier last:":" {return first + last;}
selector      = first:[a-zA-Z] others:[a-zA-Z0-9\:]* {return first + others.join("");}
className      = first:[A-Z] others:[a-zA-Z0-9]* {return first + others.join("");}
string         = "'" val:(("''" {return "'";} / [^'])*) "'" {
                     return $globals.ValueNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._value_(val.join(""));
                 }
character      = "$" char:. 
                  {
                      return $globals.ValueNode._new()
                             ._position_((line()).__at(column()))
                             ._source_(text())
                             ._value_(char);
                  }
symbol         = "#" rest:bareSymbol {return rest;}
bareSymbol         = val:(selector / binarySelector / node:string {return node._value();})
                  {
                      return $globals.ValueNode._new()
                             ._position_((line()).__at(column()))
                             ._source_(text())
                             ._value_(val);
                  }
number         = n:(numberExp / hex / float / integer) {
                     return $globals.ValueNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._value_(n);
                 }
numberExp      = n:((float / integer) "e" integer) {return parseFloat(n.join(""));}
hex            = neg:"-"? "16r" num:[0-9a-fA-F]+ {return parseInt(((neg || '') + num.join("")), 16);}
float          = neg:"-"? digits:[0-9]+ "." dec:[0-9]+ {return parseFloat(((neg || '') + digits.join("") + "." + dec.join("")), 10);}
integer        = neg:"-"? digits:[0-9]+ {return (parseInt((neg || '') + digits.join(""), 10));}

literalArray   = "#(" rest:wsLiteralArrayContents ws ")" {
    return rest
        ._position_((line()).__at(column()))
        ._source_(text());
}
bareLiteralArray   = "(" rest:wsLiteralArrayContents ws ")" {
    return rest
        ._position_((line()).__at(column()))
        ._source_(text());
}

literalArrayElement = parseTimeLiteral / bareLiteralArray / bareSymbol
wsLiteralArrayContents   = lits:(ws lit:literalArrayElement {return lit._value();})* {
                     return $globals.ValueNode._new()
                            ._value_(lits);
                 }
dynamicArray   = "{" ws expressions:expressions? maybeDotsWs "}" {
                     return $globals.DynamicArrayNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._nodes_(expressions || []);
                 }
dynamicDictionary = "#{" ws expressions:associations? maybeDotsWs  "}" {
                        return $globals.DynamicDictionaryNode._new()
                               ._position_((line()).__at(column()))
                               ._source_(text())
                               ._nodes_(expressions || []);
                    }
pseudoVariable = val:(
                   'true' {return true;}
                 / 'false' {return false;}
                 / 'nil' {return nil;}) {
                       return $globals.ValueNode._new()
                              ._position_((line()).__at(column()))
                              ._source_(text())
                              ._value_(val);
                   }
parseTimeLiteral        = pseudoVariable / number / literalArray / string / symbol / character
runtimeLiteral        = dynamicDictionary / dynamicArray / block
literal        = runtimeLiteral / parseTimeLiteral


variable       = identifier:identifier {
                     return $globals.VariableNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._value_(identifier);
                 }

reference      = variable

binarySelector = bin:[\\+*/=><,@%~|&-]+ {return bin.join("");}
unarySelector  = identifier

wsKeywordPattern = pairs:(ws key:keyword ws arg:identifier {return {key:key, arg:arg};})+ {
                     var selector = "";
                     var params = [];
                     for(var i = 0; i < pairs.length; i++){
                         selector += pairs[i].key;
                         params.push(pairs[i].arg);
                     }
                     return [selector, params];
                 }
wsBinaryPattern  = ws selector:binarySelector ws arg:identifier {return [selector, [arg]];}
wsUnaryPattern   = ws selector:unarySelector {return [selector, []];}

expression     = assignment / cascade / keywordSend

wsExpressionsRest = ws "." maybeDotsWs expression:expression {return expression;}
expressions    = first:expression others:wsExpressionsRest* { return [first].concat(others); }

assignment     = variable:variable ws ':=' ws expression:expression {
                     return $globals.AssignmentNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._left_(variable)
                            ._right_(expression);
                 }

ret            = '^' ws expression:expression {
                     return $globals.ReturnNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._nodes_([expression]);
                 }
  
temps          = "|" vars:(ws variable:identifier {return variable;})* ws "|" {return vars;}

wsBlockParamList = params:((ws ":" ws param:identifier {return param;})+) ws "|" {return params;}

subexpression  = '(' ws expression:expression ws ')' {return expression;}

statementsWs     = ret:ret maybeDotsWs {return [ret];}
                 / exps:expressions ws "." maybeDotsWs ret:ret maybeDotsWs {
                       var expressions = exps;
                       expressions.push(ret);
                       return expressions;
                   }
                 / expressions:expressions? maybeDotsWs {
                       return expressions || [];
                   }

wsSequenceWs       = (ws js:jsSequence ws { return js; }) / wsStSequenceWs

wsStSequenceWs    = ws temps:temps? maybeDotsWs statements:statementsWs? {
                     return $globals.SequenceNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._temps_(temps || [])
                            ._nodes_(statements || []);
                 }

jsSequence     = jsStatement

block          = '[' params:wsBlockParamList? sequence:wsSequenceWs? ']' {
                     return $globals.BlockNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._parameters_(params || [])
                            ._nodes_([sequence._asBlockSequenceNode()]);
                 }

operand        = literal / reference / subexpression

augment = "(" send:(wsBinaryTail / wsKeywordMessage / wsUnaryTail) messages:(ws ";" mess:wsMessage {return mess;})* ws ")" {
                     if (messages.length) {
                         messages.unshift(send);
                         send = $globals.CascadeNode._new()
                                ._position_((line()).__at(column()))
                                ._source_(text())
                                ._nodes_(messages);
					 }
					 return $globals.BranchSendNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._nodes_([send]);
                 }

wsAugmentTail      = ws message:augment tail:wsAugmentTail? {
                     if(tail) {
                         return tail._valueForReceiver_(message);
                     }
                     else {
                         return message;
                     }
                 }

augmentedOperand = operand:operand tail:wsAugmentTail? {
                     if(tail) {
                         return tail._valueForReceiver_(operand);
                     }
                     else {
                         return operand;
                     }
                 }

wsUnaryMessage   = ws selector:unarySelector !":" {
                     return $globals.SendNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._selector_(selector);
                 }

wsUnaryTail      = message:wsUnaryMessage tail:wsUnaryTail? {
                     if(tail) {
                         return tail._valueForReceiver_(message);
                     }
                     else {
                         return message;
                     }
                 }

unarySend      = receiver:augmentedOperand tail:wsUnaryTail? {
                     if(tail) {
                         return tail._valueForReceiver_(receiver);
                     }
                     else {
                         return receiver;
                     }
                 }

wsBinaryMessage  = ws selector:binarySelector ws arg:unarySend {
                     return $globals.SendNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._selector_(selector)
                            ._arguments_([arg]);
                 }

wsBinaryTail     = message:wsBinaryMessage tail:wsBinaryTail? {
                     if(tail) {
                         return tail._valueForReceiver_(message);
                      }
                     else {
                         return message;
                     }
                 }

binarySend     = receiver:unarySend tail:wsBinaryTail? {
                     if(tail) {
                         return tail._valueForReceiver_(receiver);
                     }
                     else {
                         return receiver;
                     }
                 }


wsKeywordMessage = pairs:(ws key:keyword ws arg:binarySend {return {key:key, arg:arg};})+ {
                     var selector = "";
                     var args = [];
                      for(var i = 0; i < pairs.length; i++) {
                          selector += pairs[i].key;
                          args.push(pairs[i].arg);
                      }
                      return $globals.SendNode._new()
                             ._position_((line()).__at(column()))
                             ._source_(text())
                             ._selector_(selector)
                             ._arguments_(args);
                 }

keywordSend    = receiver:binarySend tail:wsKeywordMessage? {
                     if(tail) {
                         return tail._valueForReceiver_(receiver);
                     }
                     else {
                         return receiver;
                     }
                 }

wsMessage        = wsBinaryMessage / wsUnaryMessage / wsKeywordMessage

cascade        = send:keywordSend & { return send._isSendNode(); } messages:(ws ";" mess:wsMessage {return mess;})+ {
                     messages.unshift(send);
                     return $globals.CascadeNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(text())
                            ._nodes_(messages);
                 }

jsStatement    = "<" val:((">>" {return ">";} / [^>])*) ">" {
                     return $globals.JSStatementNode._new()
                            ._position_((line()).__at(column()))
                            ._source_(val.join(""))
                 }


method         = pattern:(wsKeywordPattern / wsBinaryPattern / wsUnaryPattern) sequence:wsSequenceWs? {
                      return $globals.MethodNode._new()
                             ._position_((line()).__at(column()))
                             ._source_(text())
                             ._selector_(pattern[0])
                             ._arguments_(pattern[1])
                             ._nodes_([sequence]);
                 }


associationSend     = send:binarySend & { return send._isSendNode() && send._selector() === "->" } { return [send._receiver(), send._arguments()[0]]; }

wsAssociationsRest = ws "." maybeDotsWs expression:associationSend {return expression;}
associations    = first:associationSend others:wsAssociationsRest* { return first.concat.apply(first, others); }
