smalltalk.addClass('PPParser', smalltalk.Object, ['memo'], 'Parser');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
self['@memo']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_memo',
smalltalk.method({
selector: 'memo',
fn: function (){
var self=this;
return self['@memo'];
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_flatten',
smalltalk.method({
selector: 'flatten',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPFlattenParser || PPFlattenParser), "_on_", [self]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_withSource',
smalltalk.method({
selector: 'withSource',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPSourceParser || PPSourceParser), "_on_", [self]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'__eq_eq_gt',
smalltalk.method({
selector: '==>',
fn: function (aBlock){
var self=this;
return smalltalk.send((smalltalk.PPActionParser || PPActionParser), "_on_block_", [self, aBlock]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
fn: function (aParser){
var self=this;
return smalltalk.send((smalltalk.PPSequenceParser || PPSequenceParser), "_with_with_", [self, aParser]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
fn: function (aParser){
var self=this;
return smalltalk.send((smalltalk.PPChoiceParser || PPChoiceParser), "_with_with_", [self, aParser]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_plus',
smalltalk.method({
selector: 'plus',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPRepeatingParser || PPRepeatingParser), "_on_min_", [self, (1)]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_star',
smalltalk.method({
selector: 'star',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPRepeatingParser || PPRepeatingParser), "_on_min_", [self, (0)]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_not',
smalltalk.method({
selector: 'not',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPNotParser || PPNotParser), "_on_", [self]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_optional',
smalltalk.method({
selector: 'optional',
fn: function (){
var self=this;
return (($receiver = self).klass === smalltalk.Number) ? $receiver /smalltalk.send((smalltalk.PPEpsilonParser || PPEpsilonParser), "_new", []) : smalltalk.send($receiver, "__slash", [smalltalk.send((smalltalk.PPEpsilonParser || PPEpsilonParser), "_new", [])]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_memoizedParse_',
smalltalk.method({
selector: 'memoizedParse:',
fn: function (aStream){
var self=this;
var start=nil;
var end=nil;
var node=nil;
start=smalltalk.send(aStream, "_position", []);
return smalltalk.send(smalltalk.send(self, "_memo", []), "_at_ifPresent_ifAbsent_", [start, (function(value){smalltalk.send(aStream, "_position_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_memo", []), "_at_", [start]), "_second", [])]);return smalltalk.send(value, "_first", []);}), (function(){node=smalltalk.send(self, "_parse_", [aStream]);end=smalltalk.send(aStream, "_position", []);smalltalk.send(smalltalk.send(self, "_memo", []), "_at_put_", [start, smalltalk.send((smalltalk.Array || Array), "_with_with_", [node, end])]);return node;})]);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_parseAll_',
smalltalk.method({
selector: 'parseAll:',
fn: function (aStream){
var self=this;
var result=nil;
result=smalltalk.send(smalltalk.send((smalltalk.PPSequenceParser || PPSequenceParser), "_with_with_", [self, smalltalk.send((smalltalk.PPEOFParser || PPEOFParser), "_new", [])]), "_memoizedParse_", [aStream]);
return (($receiver = smalltalk.send(result, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(result, "_messageFor_", [smalltalk.send(aStream, "_contents", [])])]);})() : (function(){return smalltalk.send(result, "_first", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(result, "_messageFor_", [smalltalk.send(aStream, "_contents", [])])]);}), (function(){return smalltalk.send(result, "_first", []);})]);
return self;}
}),
smalltalk.PPParser);



smalltalk.addClass('PPEOFParser', smalltalk.PPParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
return (($receiver = smalltalk.send(aStream, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aStream, "_contents", []), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [unescape("---------------")]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["EOF expected"]), smalltalk.send(aStream, "_position", [])]);})() : (function(){return nil;})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aStream, "_contents", []), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [unescape("---------------")]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["EOF expected"]), smalltalk.send(aStream, "_position", [])]);}), (function(){return nil;})]);
return self;}
}),
smalltalk.PPEOFParser);



smalltalk.addClass('PPAnyParser', smalltalk.PPParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
return (($receiver = smalltalk.send(aStream, "_atEnd", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", ["did not expect EOF", smalltalk.send(aStream, "_position", [])]);})() : (function(){return smalltalk.send(aStream, "_next", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", ["did not expect EOF", smalltalk.send(aStream, "_position", [])]);}), (function(){return smalltalk.send(aStream, "_next", []);})]);
return self;}
}),
smalltalk.PPAnyParser);



smalltalk.addClass('PPEpsilonParser', smalltalk.PPParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
return nil;
return self;}
}),
smalltalk.PPEpsilonParser);



smalltalk.addClass('PPStringParser', smalltalk.PPParser, ['string'], 'Parser');
smalltalk.addMethod(
'_string',
smalltalk.method({
selector: 'string',
fn: function (){
var self=this;
return self['@string'];
return self;}
}),
smalltalk.PPStringParser);

smalltalk.addMethod(
'_string_',
smalltalk.method({
selector: 'string:',
fn: function (aString){
var self=this;
self['@string']=aString;
return self;}
}),
smalltalk.PPStringParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
var position=nil;
var result=nil;
position=smalltalk.send(aStream, "_position", []);
result=smalltalk.send(aStream, "_next_", [smalltalk.send(smalltalk.send(self, "_string", []), "_size", [])]);
return (($receiver = smalltalk.send(result, "__eq", [smalltalk.send(self, "_string", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return result;})() : (function(){smalltalk.send(aStream, "_position_", [position]);return (function($rec){smalltalk.send($rec, "_reason_", [smalltalk.send(smalltalk.send(smalltalk.send("Expected ", "__comma", [smalltalk.send(self, "_string", [])]), "__comma", [" but got "]), "__comma", [smalltalk.send(smalltalk.send(result, "_at_", [position]), "_printString", [])])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return result;}), (function(){smalltalk.send(aStream, "_position_", [position]);return (function($rec){smalltalk.send($rec, "_reason_", [smalltalk.send(smalltalk.send(smalltalk.send("Expected ", "__comma", [smalltalk.send(self, "_string", [])]), "__comma", [" but got "]), "__comma", [smalltalk.send(smalltalk.send(result, "_at_", [position]), "_printString", [])])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []));})]);
return self;}
}),
smalltalk.PPStringParser);



smalltalk.addClass('PPCharacterParser', smalltalk.PPParser, ['regexp'], 'Parser');
smalltalk.addMethod(
'_string_',
smalltalk.method({
selector: 'string:',
fn: function (aString){
var self=this;
self['@regexp']=smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_", [smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [aString]), "__comma", [unescape("%5D")])]);
return self;}
}),
smalltalk.PPCharacterParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aStream, "_peek", []), "_notNil", []), "_and_", [(function(){return smalltalk.send(self, "_match_", [smalltalk.send(aStream, "_peek", [])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aStream, "_next", []);})() : (function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", ["Could not match", smalltalk.send(aStream, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aStream, "_next", []);}), (function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", ["Could not match", smalltalk.send(aStream, "_position", [])]);})]);
return self;}
}),
smalltalk.PPCharacterParser);

smalltalk.addMethod(
'_match_',
smalltalk.method({
selector: 'match:',
fn: function (aString){
var self=this;
return smalltalk.send(aString, "_match_", [self['@regexp']]);
return self;}
}),
smalltalk.PPCharacterParser);



smalltalk.addClass('PPListParser', smalltalk.PPParser, ['parsers'], 'Parser');
smalltalk.addMethod(
'_parsers',
smalltalk.method({
selector: 'parsers',
fn: function (){
var self=this;
return (($receiver = self['@parsers']) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver;
return self;}
}),
smalltalk.PPListParser);

smalltalk.addMethod(
'_parsers_',
smalltalk.method({
selector: 'parsers:',
fn: function (aCollection){
var self=this;
self['@parsers']=aCollection;
return self;}
}),
smalltalk.PPListParser);

smalltalk.addMethod(
'_copyWith_',
smalltalk.method({
selector: 'copyWith:',
fn: function (aParser){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_withAll_", [smalltalk.send(smalltalk.send(self, "_parsers", []), "_copyWith_", [aParser])]);
return self;}
}),
smalltalk.PPListParser);


smalltalk.addMethod(
'_withAll_',
smalltalk.method({
selector: 'withAll:',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_parsers_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.PPListParser.klass);

smalltalk.addMethod(
'_with_with_',
smalltalk.method({
selector: 'with:with:',
fn: function (aParser, anotherParser){
var self=this;
return smalltalk.send(self, "_withAll_", [smalltalk.send((smalltalk.Array || Array), "_with_with_", [aParser, anotherParser])]);
return self;}
}),
smalltalk.PPListParser.klass);


smalltalk.addClass('PPSequenceParser', smalltalk.PPListParser, [], 'Parser');
smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
fn: function (aRule){
var self=this;
return smalltalk.send(self, "_copyWith_", [aRule]);
return self;}
}),
smalltalk.PPSequenceParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
var start=nil;
var elements=nil;
var element=nil;
start=smalltalk.send(aStream, "_position", []);
elements=[];
smalltalk.send(smalltalk.send(self, "_parsers", []), "_detect_ifNone_", [(function(each){element=smalltalk.send(each, "_memoizedParse_", [aStream]);smalltalk.send(elements, "_add_", [element]);return smalltalk.send(element, "_isParseFailure", []);}), (function(){return nil;})]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return elements;})() : (function(){smalltalk.send(aStream, "_position_", [start]);return element;})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return elements;}), (function(){smalltalk.send(aStream, "_position_", [start]);return element;})]);
return self;}
}),
smalltalk.PPSequenceParser);



smalltalk.addClass('PPChoiceParser', smalltalk.PPListParser, [], 'Parser');
smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
fn: function (aRule){
var self=this;
return smalltalk.send(self, "_copyWith_", [aRule]);
return self;}
}),
smalltalk.PPChoiceParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
var result=nil;
smalltalk.send(smalltalk.send(self, "_parsers", []), "_detect_ifNone_", [(function(each){result=smalltalk.send(each, "_memoizedParse_", [aStream]);return smalltalk.send(smalltalk.send(result, "_isParseFailure", []), "_not", []);}), (function(){return nil;})]);
return result;
return self;}
}),
smalltalk.PPChoiceParser);



smalltalk.addClass('PPDelegateParser', smalltalk.PPParser, ['parser'], 'Parser');
smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
fn: function (){
var self=this;
return self['@parser'];
return self;}
}),
smalltalk.PPDelegateParser);

smalltalk.addMethod(
'_parser_',
smalltalk.method({
selector: 'parser:',
fn: function (aParser){
var self=this;
self['@parser']=aParser;
return self;}
}),
smalltalk.PPDelegateParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
return self;}
}),
smalltalk.PPDelegateParser);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aParser){
var self=this;
return (function($rec){smalltalk.send($rec, "_parser_", [aParser]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.PPDelegateParser.klass);


smalltalk.addClass('PPAndParser', smalltalk.PPDelegateParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
return smalltalk.send(self, "_basicParse_", [aStream]);
return self;}
}),
smalltalk.PPAndParser);

smalltalk.addMethod(
'_basicParse_',
smalltalk.method({
selector: 'basicParse:',
fn: function (aStream){
var self=this;
var element=nil;
var position=nil;
position=smalltalk.send(aStream, "_position", []);
element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
smalltalk.send(aStream, "_position_", [position]);
return element;
return self;}
}),
smalltalk.PPAndParser);



smalltalk.addClass('PPNotParser', smalltalk.PPAndParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
var element=nil;
element=smalltalk.send(self, "_basicParse_", [aStream]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return smalltalk.send((smalltalk.PPFailure || PPFailure), "_reason_at_", [element, smalltalk.send(aStream, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return smalltalk.send((smalltalk.PPFailure || PPFailure), "_reason_at_", [element, smalltalk.send(aStream, "_position", [])]);})]);
return self;}
}),
smalltalk.PPNotParser);



smalltalk.addClass('PPActionParser', smalltalk.PPDelegateParser, ['block'], 'Parser');
smalltalk.addMethod(
'_block',
smalltalk.method({
selector: 'block',
fn: function (){
var self=this;
return self['@block'];
return self;}
}),
smalltalk.PPActionParser);

smalltalk.addMethod(
'_block_',
smalltalk.method({
selector: 'block:',
fn: function (aBlock){
var self=this;
self['@block']=aBlock;
return self;}
}),
smalltalk.PPActionParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
var element=nil;
element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [element]);})() : (function(){return element;})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [element]);}), (function(){return element;})]);
return self;}
}),
smalltalk.PPActionParser);


smalltalk.addMethod(
'_on_block_',
smalltalk.method({
selector: 'on:block:',
fn: function (aParser, aBlock){
var self=this;
return (function($rec){smalltalk.send($rec, "_parser_", [aParser]);smalltalk.send($rec, "_block_", [aBlock]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.PPActionParser.klass);


smalltalk.addClass('PPFlattenParser', smalltalk.PPDelegateParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
var start=nil;
var element=nil;
var stop=nil;
start=smalltalk.send(aStream, "_position", []);
element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return element;})() : (function(){return smalltalk.send(smalltalk.send(aStream, "_collection", []), "_copyFrom_to_", [(($receiver = start).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(aStream, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return element;}), (function(){return smalltalk.send(smalltalk.send(aStream, "_collection", []), "_copyFrom_to_", [(($receiver = start).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(aStream, "_position", [])]);})]);
return self;}
}),
smalltalk.PPFlattenParser);



smalltalk.addClass('PPSourceParser', smalltalk.PPDelegateParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
var start=nil;
var element=nil;
var stop=nil;
var result=nil;
start=smalltalk.send(aStream, "_position", []);
element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return element;})() : (function(){result=smalltalk.send(smalltalk.send(aStream, "_collection", []), "_copyFrom_to_", [(($receiver = start).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(aStream, "_position", [])]);return smalltalk.send((smalltalk.Array || Array), "_with_with_", [element, result]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return element;}), (function(){result=smalltalk.send(smalltalk.send(aStream, "_collection", []), "_copyFrom_to_", [(($receiver = start).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(aStream, "_position", [])]);return smalltalk.send((smalltalk.Array || Array), "_with_with_", [element, result]);})]);
return self;}
}),
smalltalk.PPSourceParser);



smalltalk.addClass('PPRepeatingParser', smalltalk.PPDelegateParser, ['min'], 'Parser');
smalltalk.addMethod(
'_min',
smalltalk.method({
selector: 'min',
fn: function (){
var self=this;
return self['@min'];
return self;}
}),
smalltalk.PPRepeatingParser);

smalltalk.addMethod(
'_min_',
smalltalk.method({
selector: 'min:',
fn: function (aNumber){
var self=this;
self['@min']=aNumber;
return self;}
}),
smalltalk.PPRepeatingParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
var start=nil;
var element=nil;
var elements=nil;
var failure=nil;
start=smalltalk.send(aStream, "_position", []);
elements=smalltalk.send((smalltalk.Array || Array), "_new", []);
(function(){while((function(){return smalltalk.send((($receiver = smalltalk.send(elements, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(self, "_min", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(self, "_min", [])]), "_and_", [(function(){return smalltalk.send(failure, "_isNil", []);})]);})()) {(function(){element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(elements, "_addLast_", [element]);})() : (function(){smalltalk.send(aStream, "_position_", [start]);return failure=element;})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(elements, "_addLast_", [element]);}), (function(){smalltalk.send(aStream, "_position_", [start]);return failure=element;})]);})()}})();
return (($receiver = failure) == nil || $receiver == undefined) ? (function(){(function(){while((function(){return smalltalk.send(failure, "_isNil", []);})()) {(function(){element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return failure=element;})() : (function(){return smalltalk.send(elements, "_addLast_", [element]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return failure=element;}), (function(){return smalltalk.send(elements, "_addLast_", [element]);})]);})()}})();return elements;})() : (function(){return failure;})();
return self;}
}),
smalltalk.PPRepeatingParser);


smalltalk.addMethod(
'_on_min_',
smalltalk.method({
selector: 'on:min:',
fn: function (aParser, aNumber){
var self=this;
return (function($rec){smalltalk.send($rec, "_parser_", [aParser]);smalltalk.send($rec, "_min_", [aNumber]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.PPRepeatingParser.klass);


smalltalk.addClass('PPFailure', smalltalk.Object, ['position', 'reason'], 'Parser');
smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return (0);})() : $receiver;
return self;}
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
fn: function (aNumber){
var self=this;
self['@position']=aNumber;
return self;}
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_reason',
smalltalk.method({
selector: 'reason',
fn: function (){
var self=this;
return (($receiver = self['@reason']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_reason_',
smalltalk.method({
selector: 'reason:',
fn: function (aString){
var self=this;
self['@reason']=aString;
return self;}
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_reason_at_',
smalltalk.method({
selector: 'reason:at:',
fn: function (aString, anInteger){
var self=this;
(function($rec){smalltalk.send($rec, "_reason_", [aString]);return smalltalk.send($rec, "_position_", [anInteger]);})(self);
return self;}
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_isParseFailure',
smalltalk.method({
selector: 'isParseFailure',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitFailure_", [self]);
return self;}
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@reason'], "__comma", [" at "]), "__comma", [smalltalk.send(self['@position'], "_asString", [])]);
return self;}
}),
smalltalk.PPFailure);


smalltalk.addMethod(
'_reason_at_',
smalltalk.method({
selector: 'reason:at:',
fn: function (aString, anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_reason_at_", [aString, anInteger]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.PPFailure.klass);


smalltalk.addClass('SmalltalkParser', smalltalk.Object, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_parser", []), "_parse_", [aStream]);
return self;}
}),
smalltalk.SmalltalkParser);

smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
fn: function (){
var self=this;
var method=nil;
var expression=nil;
var separator=nil;
var comment=nil;
var ws=nil;
var identifier=nil;
var keyword=nil;
var className=nil;
var string=nil;
var symbol=nil;
var number=nil;
var literalArray=nil;
var variable=nil;
var reference=nil;
var classReference=nil;
var literal=nil;
var ret=nil;
var methodParser=nil;
var expressionParser=nil;
var keyword=nil;
var unarySelector=nil;
var binarySelector=nil;
var keywordPattern=nil;
var unaryPattern=nil;
var binaryPattern=nil;
var assignment=nil;
var temps=nil;
var blockParamList=nil;
var block=nil;
var expression=nil;
var expressions=nil;
var subexpression=nil;
var statements=nil;
var sequence=nil;
var operand=nil;
var unaryMessage=nil;
var unarySend=nil;
var unaryTail=nil;
var binaryMessage=nil;
var binarySend=nil;
var binaryTail=nil;
var keywordMessage=nil;
var keywordSend=nil;
var keywordPair=nil;
var cascade=nil;
var message=nil;
var jsStatement=nil;
separator=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.String || String), "_cr", []), "__comma", [smalltalk.send((smalltalk.String || String), "_space", [])]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [smalltalk.send((smalltalk.String || String), "_tab", [])]), "_asChoiceParser", []);
comment=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%22"), "_asCharacterParser", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%22"), "_asParser", []), "_not", []), "__comma", [smalltalk.send((smalltalk.PPAnyParser || PPAnyParser), "_new", [])]), "_star", [])]), "__comma", [smalltalk.send(unescape("%22"), "_asCharacterParser", [])]), "_flatten", []);
ws=smalltalk.send((($receiver = separator).klass === smalltalk.Number) ? $receiver /comment : smalltalk.send($receiver, "__slash", [comment]), "_star", []);
identifier=smalltalk.send(smalltalk.send(smalltalk.send(unescape("a-z"), "_asCharacterParser", []), "__comma", [smalltalk.send(smalltalk.send(unescape("a-zA-Z0-9"), "_asCharacterParser", []), "_star", [])]), "_flatten", []);
keyword=smalltalk.send(smalltalk.send(identifier, "__comma", [smalltalk.send(":", "_asParser", [])]), "_flatten", []);
className=smalltalk.send(smalltalk.send(smalltalk.send(unescape("A-Z"), "_asCharacterParser", []), "__comma", [smalltalk.send(smalltalk.send(unescape("a-zA-Z0-9"), "_asCharacterParser", []), "_star", [])]), "_flatten", []);
string=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%27"), "_asParser", []), "__comma", [smalltalk.send(smalltalk.send((($receiver = smalltalk.send(unescape("%27%27"), "_asParser", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(smalltalk.send(unescape("%27"), "_asParser", []), "_not", []), "__comma", [smalltalk.send((smalltalk.PPAnyParser || PPAnyParser), "_new", [])]) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("%27"), "_asParser", []), "_not", []), "__comma", [smalltalk.send((smalltalk.PPAnyParser || PPAnyParser), "_new", [])])]), "_star", []), "_flatten", [])]), "__comma", [smalltalk.send(unescape("%27"), "_asParser", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send((smalltalk.ValueNode || ValueNode), "_new", []), "_value_", [smalltalk.send(smalltalk.send(node, "_at_", [(2)]), "_replace_with_", [unescape("%27%27"), unescape("%27")])]);})]);
symbol=smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "_asParser", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("a-zA-Z0-9"), "_asCharacterParser", []), "_plus", []), "_flatten", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send((smalltalk.ValueNode || ValueNode), "_new", []), "_value_", [smalltalk.send(node, "_second", [])]);})]);
number=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("0-9"), "_asCharacterParser", []), "_plus", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(".", "_asParser", []), "__comma", [smalltalk.send(smalltalk.send(unescape("0-9"), "_asCharacterParser", []), "_plus", [])]), "_optional", [])]), "_flatten", []), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send((smalltalk.ValueNode || ValueNode), "_new", []), "_value_", [smalltalk.send(node, "_asNumber", [])]);})]);
literal=smalltalk.send((smalltalk.PPDelegateParser || PPDelegateParser), "_new", []);
literalArray=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23%28"), "_asParser", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [literal]), "__comma", [ws]), "_star", [])]), "__comma", [smalltalk.send(unescape("%29"), "_asParser", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send((smalltalk.ValueNode || ValueNode), "_new", []), "_value_", [smalltalk.send((smalltalk.Array || Array), "_withAll_", [smalltalk.send(smalltalk.send(node, "_second", []), "_collect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_second", []), "_value", []);})])])]);})]);
variable=smalltalk.send(identifier, "__eq_eq_gt", [(function(token){return smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", []), "_value_", [token]);})]);
classReference=smalltalk.send(className, "__eq_eq_gt", [(function(token){return smalltalk.send(smalltalk.send((smalltalk.ClassReferenceNode || ClassReferenceNode), "_new", []), "_value_", [token]);})]);
reference=(($receiver = variable).klass === smalltalk.Number) ? $receiver /classReference : smalltalk.send($receiver, "__slash", [classReference]);
binarySelector=smalltalk.send(smalltalk.send(smalltalk.send(unescape("+*/%3D%3E%3C%2C@%25%7E%7C%26-"), "_asCharacterParser", []), "_plus", []), "_flatten", []);
unarySelector=identifier;
keywordPattern=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [keyword]), "__comma", [ws]), "__comma", [identifier]), "_plus", []), "__eq_eq_gt", [(function(nodes){return smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(smalltalk.send(nodes, "_collect_", [(function(each){return smalltalk.send(each, "_at_", [(2)]);})]), "_join_", [""]), smalltalk.send(nodes, "_collect_", [(function(each){return smalltalk.send(each, "_at_", [(4)]);})])]);})]);
binaryPattern=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [binarySelector]), "__comma", [ws]), "__comma", [identifier]), "__eq_eq_gt", [(function(node){return smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(node, "_second", []), smalltalk.send((smalltalk.Array || Array), "_with_", [smalltalk.send(node, "_fourth", [])])]);})]);
unaryPattern=smalltalk.send(smalltalk.send(ws, "__comma", [unarySelector]), "__eq_eq_gt", [(function(node){return smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(node, "_second", []), smalltalk.send((smalltalk.Array || Array), "_new", [])]);})]);
expression=smalltalk.send((smalltalk.PPDelegateParser || PPDelegateParser), "_new", []);
expressions=smalltalk.send(smalltalk.send(expression, "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [smalltalk.send(".", "_asParser", [])]), "__comma", [ws]), "__comma", [expression]), "__eq_eq_gt", [(function(node){return smalltalk.send(node, "_fourth", []);})]), "_star", [])]), "__eq_eq_gt", [(function(node){var result=nil;
result=smalltalk.send((smalltalk.Array || Array), "_with_", [smalltalk.send(node, "_first", [])]);smalltalk.send(smalltalk.send(node, "_second", []), "_do_", [(function(each){return smalltalk.send(result, "_add_", [each]);})]);return result;})]);
assignment=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(variable, "__comma", [ws]), "__comma", [smalltalk.send(unescape("%3A%3D"), "_asParser", [])]), "__comma", [ws]), "__comma", [expression]), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_left_", [smalltalk.send(node, "_first", [])]);return smalltalk.send($rec, "_right_", [smalltalk.send(node, "_at_", [(5)])]);})(smalltalk.send((smalltalk.AssignmentNode || AssignmentNode), "_new", []));})]);
ret=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%5E"), "_asParser", []), "__comma", [ws]), "__comma", [expression]), "__comma", [ws]), "__comma", [smalltalk.send(smalltalk.send(".", "_asParser", []), "_optional", [])]), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_addNode_", [smalltalk.send(node, "_third", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ReturnNode || ReturnNode), "_new", []));})]);
temps=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%7C"), "_asParser", []), "__comma", [smalltalk.send(smalltalk.send(ws, "__comma", [identifier]), "_star", [])]), "__comma", [ws]), "__comma", [smalltalk.send(unescape("%7C"), "_asParser", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send(node, "_second", []), "_collect_", [(function(each){return smalltalk.send(each, "_second", []);})]);})]);
blockParamList=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(":", "_asParser", []), "__comma", [identifier]), "__comma", [ws]), "_plus", []), "__comma", [smalltalk.send(unescape("%7C"), "_asParser", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send(node, "_first", []), "_collect_", [(function(each){return smalltalk.send(each, "_second", []);})]);})]);
subexpression=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28"), "_asParser", []), "__comma", [ws]), "__comma", [expression]), "__comma", [ws]), "__comma", [smalltalk.send(unescape("%29"), "_asParser", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(node, "_third", []);})]);
statements=(($receiver = (($receiver = smalltalk.send(ret, "__eq_eq_gt", [(function(node){return smalltalk.send((smalltalk.Array || Array), "_with_", [node]);})])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(expressions, "__comma", [ws]), "__comma", [smalltalk.send(".", "_asParser", [])]), "__comma", [ws]), "__comma", [ret]), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send(node, "_at_", [(5)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(node, "_first", []));})]) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(expressions, "__comma", [ws]), "__comma", [smalltalk.send(".", "_asParser", [])]), "__comma", [ws]), "__comma", [ret]), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send(node, "_at_", [(5)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(node, "_first", []));})])])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(expressions, "__comma", [smalltalk.send(smalltalk.send(".", "_asParser", []), "_optional", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(node, "_first", []);})]) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(expressions, "__comma", [smalltalk.send(smalltalk.send(".", "_asParser", []), "_optional", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(node, "_first", []);})])]);
sequence=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(temps, "_optional", []), "__comma", [ws]), "__comma", [smalltalk.send(statements, "_optional", [])]), "__comma", [ws]), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_temps_", [smalltalk.send(node, "_first", [])]);smalltalk.send($rec, "_nodes_", [smalltalk.send(node, "_third", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.SequenceNode || SequenceNode), "_new", []));})]);
block=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%5B"), "_asParser", []), "__comma", [ws]), "__comma", [smalltalk.send(blockParamList, "_optional", [])]), "__comma", [ws]), "__comma", [smalltalk.send(sequence, "_optional", [])]), "__comma", [ws]), "__comma", [smalltalk.send(unescape("%5D"), "_asParser", [])]), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_parameters_", [smalltalk.send(node, "_third", [])]);return smalltalk.send($rec, "_addNode_", [smalltalk.send(smalltalk.send(node, "_at_", [(5)]), "_asBlockSequenceNode", [])]);})(smalltalk.send((smalltalk.BlockNode || BlockNode), "_new", []));})]);
operand=(($receiver = (($receiver = literal).klass === smalltalk.Number) ? $receiver /reference : smalltalk.send($receiver, "__slash", [reference])).klass === smalltalk.Number) ? $receiver /subexpression : smalltalk.send($receiver, "__slash", [subexpression]);
smalltalk.send(literal, "_parser_", [(($receiver = (($receiver = (($receiver = (($receiver = number).klass === smalltalk.Number) ? $receiver /string : smalltalk.send($receiver, "__slash", [string])).klass === smalltalk.Number) ? $receiver /literalArray : smalltalk.send($receiver, "__slash", [literalArray])).klass === smalltalk.Number) ? $receiver /symbol : smalltalk.send($receiver, "__slash", [symbol])).klass === smalltalk.Number) ? $receiver /block : smalltalk.send($receiver, "__slash", [block])]);
unaryMessage=smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [unarySelector]), "__comma", [smalltalk.send(smalltalk.send(":", "_asParser", []), "_not", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send((smalltalk.SendNode || SendNode), "_new", []), "_selector_", [smalltalk.send(node, "_second", [])]);})]);
unaryTail=smalltalk.send((smalltalk.PPDelegateParser || PPDelegateParser), "_new", []);
smalltalk.send(unaryTail, "_parser_", [smalltalk.send(smalltalk.send(unaryMessage, "__comma", [smalltalk.send(unaryTail, "_optional", [])]), "__eq_eq_gt", [(function(node){return (($receiver = smalltalk.send(node, "_second", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(node, "_first", []);})() : (function(){return smalltalk.send(smalltalk.send(node, "_second", []), "_valueForReceiver_", [smalltalk.send(node, "_first", [])]);})();})])]);
unarySend=smalltalk.send(smalltalk.send(operand, "__comma", [smalltalk.send(unaryTail, "_optional", [])]), "__eq_eq_gt", [(function(node){return (($receiver = smalltalk.send(node, "_second", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(node, "_first", []);})() : (function(){return smalltalk.send(smalltalk.send(node, "_second", []), "_valueForReceiver_", [smalltalk.send(node, "_first", [])]);})();})]);
binaryMessage=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [binarySelector]), "__comma", [ws]), "__comma", [(($receiver = unarySend).klass === smalltalk.Number) ? $receiver /operand : smalltalk.send($receiver, "__slash", [operand])]), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(node, "_second", [])]);return smalltalk.send($rec, "_arguments_", [smalltalk.send((smalltalk.Array || Array), "_with_", [smalltalk.send(node, "_fourth", [])])]);})(smalltalk.send((smalltalk.SendNode || SendNode), "_new", []));})]);
binaryTail=smalltalk.send((smalltalk.PPDelegateParser || PPDelegateParser), "_new", []);
smalltalk.send(binaryTail, "_parser_", [smalltalk.send(smalltalk.send(binaryMessage, "__comma", [smalltalk.send(binaryTail, "_optional", [])]), "__eq_eq_gt", [(function(node){return (($receiver = smalltalk.send(node, "_second", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(node, "_first", []);})() : (function(){return smalltalk.send(smalltalk.send(node, "_second", []), "_valueForReceiver_", [smalltalk.send(node, "_first", [])]);})();})])]);
binarySend=smalltalk.send(smalltalk.send(unarySend, "__comma", [smalltalk.send(binaryTail, "_optional", [])]), "__eq_eq_gt", [(function(node){return (($receiver = smalltalk.send(node, "_second", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(node, "_first", []);})() : (function(){return smalltalk.send(smalltalk.send(node, "_second", []), "_valueForReceiver_", [smalltalk.send(node, "_first", [])]);})();})]);
keywordPair=smalltalk.send(smalltalk.send(keyword, "__comma", [ws]), "__comma", [binarySend]);
keywordMessage=smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [keywordPair]), "_plus", []), "__eq_eq_gt", [(function(nodes){return (function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(smalltalk.send(nodes, "_collect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_second", []), "_first", []);})]), "_join_", [""])]);return smalltalk.send($rec, "_arguments_", [smalltalk.send(nodes, "_collect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_second", []), "_third", []);})])]);})(smalltalk.send((smalltalk.SendNode || SendNode), "_new", []));})]);
keywordSend=smalltalk.send(smalltalk.send(binarySend, "__comma", [keywordMessage]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send(node, "_second", []), "_valueForReceiver_", [smalltalk.send(node, "_first", [])]);})]);
message=(($receiver = (($receiver = binaryMessage).klass === smalltalk.Number) ? $receiver /unaryMessage : smalltalk.send($receiver, "__slash", [unaryMessage])).klass === smalltalk.Number) ? $receiver /keywordMessage : smalltalk.send($receiver, "__slash", [keywordMessage]);
cascade=smalltalk.send(smalltalk.send((($receiver = keywordSend).klass === smalltalk.Number) ? $receiver /binarySend : smalltalk.send($receiver, "__slash", [binarySend]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [smalltalk.send(unescape("%3B"), "_asParser", [])]), "__comma", [message]), "_plus", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send(node, "_first", []), "_cascadeNodeWithMessages_", [smalltalk.send(smalltalk.send(node, "_second", []), "_collect_", [(function(each){return smalltalk.send(each, "_third", []);})])]);})]);
jsStatement=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%3C"), "_asParser", []), "__comma", [smalltalk.send(smalltalk.send((($receiver = smalltalk.send(unescape("%3E%3E"), "_asParser", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(smalltalk.send(unescape("%3E"), "_asParser", []), "_not", []), "__comma", [smalltalk.send((smalltalk.PPAnyParser || PPAnyParser), "_new", [])]) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("%3E"), "_asParser", []), "_not", []), "__comma", [smalltalk.send((smalltalk.PPAnyParser || PPAnyParser), "_new", [])])]), "_star", []), "_flatten", [])]), "__comma", [smalltalk.send(unescape("%3E"), "_asParser", [])]), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_source_", [smalltalk.send(node, "_second", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.JSStatementNode || JSStatementNode), "_new", []));})]);
smalltalk.send(expression, "_parser_", [(($receiver = (($receiver = (($receiver = (($receiver = assignment).klass === smalltalk.Number) ? $receiver /cascade : smalltalk.send($receiver, "__slash", [cascade])).klass === smalltalk.Number) ? $receiver /keywordSend : smalltalk.send($receiver, "__slash", [keywordSend])).klass === smalltalk.Number) ? $receiver /binarySend : smalltalk.send($receiver, "__slash", [binarySend])).klass === smalltalk.Number) ? $receiver /jsStatement : smalltalk.send($receiver, "__slash", [jsStatement])]);
method=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ws, "__comma", [(($receiver = (($receiver = keywordPattern).klass === smalltalk.Number) ? $receiver /binaryPattern : smalltalk.send($receiver, "__slash", [binaryPattern])).klass === smalltalk.Number) ? $receiver /unaryPattern : smalltalk.send($receiver, "__slash", [unaryPattern])]), "__comma", [ws]), "__comma", [smalltalk.send(sequence, "_optional", [])]), "__comma", [ws]), "_withSource", []), "__eq_eq_gt", [(function(node){return (function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(smalltalk.send(smalltalk.send(node, "_first", []), "_second", []), "_first", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(smalltalk.send(smalltalk.send(node, "_first", []), "_second", []), "_second", [])]);smalltalk.send($rec, "_addNode_", [smalltalk.send(smalltalk.send(node, "_first", []), "_fourth", [])]);smalltalk.send($rec, "_source_", [smalltalk.send(node, "_second", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.MethodNode || MethodNode), "_new", []));})]);
return smalltalk.send(smalltalk.send(method, "__comma", [smalltalk.send((smalltalk.PPEOFParser || PPEOFParser), "_new", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(node, "_first", []);})]);
return self;}
}),
smalltalk.SmalltalkParser);


smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_parse_", [aStream]);
return self;}
}),
smalltalk.SmalltalkParser.klass);


smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Parser');
smalltalk.addMethod(
'_stream_',
smalltalk.method({
selector: 'stream:',
fn: function (aStream){
var self=this;
self['@stream']=aStream;
return self;}
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_nextChunk',
smalltalk.method({
selector: 'nextChunk',
fn: function (){
var self=this;
try{var char=nil;
var result=nil;
var chunk=nil;
result=smalltalk.send("", "_writeStream", []);
(function(){while((function(){char=smalltalk.send(self['@stream'], "_next", []);return smalltalk.send(char, "_notNil", []);})()) {(function(){(($receiver = smalltalk.send(char, "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(self['@stream'], "_peek", []), "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_next", []);})() : (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_next", []);}), (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(self['@stream'], "_peek", []), "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_next", []);})() : (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_next", []);}), (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})]);})]);return smalltalk.send(result, "_nextPut_", [char]);})()}})();
(function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return nil}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_nextChunk'){return e.fn()} throw(e)}}
}),
smalltalk.ChunkParser);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_stream_", [aStream]);
return self;}
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Importer', smalltalk.Object, [], 'Parser');
smalltalk.addMethod(
'_import_',
smalltalk.method({
selector: 'import:',
fn: function (aStream){
var self=this;
var chunk=nil;
var result=nil;
var parser=nil;
var lastEmpty=nil;
parser=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_on_", [aStream]);
lastEmpty=false;
(function(){while(!(function(){chunk=smalltalk.send(parser, "_nextChunk", []);return smalltalk.send(chunk, "_isNil", []);})()) {(function(){return (($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return lastEmpty=true;})() : (function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [chunk]);return (($receiver = lastEmpty).klass === smalltalk.Boolean) ? ($receiver ? (function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return lastEmpty=true;}), (function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [chunk]);return (($receiver = lastEmpty).klass === smalltalk.Boolean) ? ($receiver ? (function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})]);})]);})()}})();
return self;}
}),
smalltalk.Importer);



smalltalk.addClass('Exporter', smalltalk.Object, [], 'Parser');
smalltalk.addMethod(
'_exportCategory_',
smalltalk.method({
selector: 'exportCategory:',
fn: function (aString){
var self=this;
var stream=nil;
stream=smalltalk.send("", "_writeStream", []);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [aString]);})]), "_do_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self, "_export_", [each])]);})]);
smalltalk.send(self, "_exportCategoryExtensions_on_", [aString, stream]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_export_',
smalltalk.method({
selector: 'export:',
fn: function (aClass){
var self=this;
var stream=nil;
stream=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_exportDefinitionOf_on_", [aClass, stream]);
smalltalk.send(self, "_exportMethodsOf_on_", [aClass, stream]);
smalltalk.send(self, "_exportMetaDefinitionOf_on_", [aClass, stream]);
smalltalk.send(self, "_exportMethodsOf_on_", [smalltalk.send(aClass, "_class", []), stream]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportDefinitionOf_on_',
smalltalk.method({
selector: 'exportDefinitionOf:on:',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addClass%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%27%2C%20")])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D%2C%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", [unescape("%27")])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);})(aStream);
(($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [unescape(".comment%3D")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_escaped", [])]), "__comma", [unescape("%27%29")])]);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [unescape(".comment%3D")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_escaped", [])]), "__comma", [unescape("%27%29")])]);})(aStream);})]);
smalltalk.send(aStream, "_lf", []);
return self;}
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportMetaDefinitionOf_on_',
smalltalk.method({
selector: 'exportMetaDefinitionOf:on:',
fn: function (aClass, aStream){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape(".iVarNames%20%3D%20%5B")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(unescape("%5D%3B"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape(".iVarNames%20%3D%20%5B")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(unescape("%5D%3B"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})]);
return self;}
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportMethodsOf_on_',
smalltalk.method({
selector: 'exportMethodsOf:on:',
fn: function (aClass, aStream){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return (($receiver = smalltalk.send(smalltalk.send(each, "_category", []), "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})]);})]);
smalltalk.send(aStream, "_lf", []);
return self;}
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_classNameFor_',
smalltalk.method({
selector: 'classNameFor:',
fn: function (aClass){
var self=this;
return (($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);})() : (function(){return (($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return (($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})]);
return self;}
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportMethod_of_on_',
smalltalk.method({
selector: 'exportMethod:of:on:',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addMethod%28")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_selector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("category%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_category", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("source%3A%20unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_source", []), "_escaped", [])]), "__comma", [unescape("%27%29%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("messageSends: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_messageSends", []), "_asJavascript", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("referencedClasses%3A%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aMethod, "_referencedClasses", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [each])])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%2C")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;}
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportCategoryExtensions_on_',
smalltalk.method({
selector: 'exportCategoryExtensions:on:',
fn: function (aString, aStream){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return (($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "__eq", [smalltalk.send(unescape("*"), "__comma", [aString])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_exportMethod_of_on_", [method, each, aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_exportMethod_of_on_", [method, each, aStream]);})]);})]);})]);
return self;}
}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Parser');
smalltalk.addMethod(
'_exportDefinitionOf_on_',
smalltalk.method({
selector: 'exportDefinitionOf:on:',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(unescape("%20subclass%3A%20%23"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("%09instanceVariableNames%3A%20%27")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%09category%3A%20%27"), "__comma", [smalltalk.send(aClass, "_category", [])]), "__comma", [unescape("%27%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);
(($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%20commentStamp%21")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%20commentStamp%21")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);})]);
smalltalk.send(aStream, "_lf", []);
return self;}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportMethod_of_on_',
smalltalk.method({
selector: 'exportMethod:of:on:',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aMethod, "_source", [])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("%21")]);})(aStream);
return self;}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportMethodsOf_on_',
smalltalk.method({
selector: 'exportMethodsOf:on:',
fn: function (aClass, aStream){
var self=this;
smalltalk.send(aClass, "_protocolsDo_", [(function(category, methods){return (($receiver = smalltalk.send(category, "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);})]);})]);
return self;}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportMetaDefinitionOf_on_',
smalltalk.method({
selector: 'exportMetaDefinitionOf:on:',
fn: function (aClass, aStream){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%20instanceVariableNames%3A%20%27")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%20instanceVariableNames%3A%20%27")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);})]);
return self;}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_classNameFor_',
smalltalk.method({
selector: 'classNameFor:',
fn: function (aClass){
var self=this;
return (($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);})() : (function(){return (($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);}), (function(){return (($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})]);
return self;}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_chunkEscape_',
smalltalk.method({
selector: 'chunkEscape:',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_replace_with_", [unescape("%21"), unescape("%21%21")]), "_trimBoth", []);
return self;}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportCategoryExtensions_on_',
smalltalk.method({
selector: 'exportCategoryExtensions:on:',
fn: function (aString, aStream){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(each, "_protocolsDo_", [(function(category, methods){return (($receiver = smalltalk.send(category, "__eq", [smalltalk.send(unescape("*"), "__comma", [aString])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, each, aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, each, aStream]);})]);})]);})]);
return self;}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportMethods_category_of_on_',
smalltalk.method({
selector: 'exportMethods:category:of:on:',
fn: function (methods, category, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%20methodsFor%3A%20%27"), "__comma", [category]), "__comma", [unescape("%27%21")])]);})(aStream);
smalltalk.send(methods, "_do_", [(function(each){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%20%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;}
}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Parser');
smalltalk.addMethod(
'_exportDefinitionOf_on_',
smalltalk.method({
selector: 'exportDefinitionOf:on:',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addClass%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%27%2C%20")])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D%2C%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", [unescape("%27")])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);})(aStream);
smalltalk.send(aStream, "_lf", []);
return self;}
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
'_exportMethod_of_on_',
smalltalk.method({
selector: 'exportMethod:of:on:',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addMethod%28")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_selector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%2C")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;}
}),
smalltalk.StrippedExporter);



