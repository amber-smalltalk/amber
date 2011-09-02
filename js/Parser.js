smalltalk.addClass('PPParser', smalltalk.Object, ['memo'], 'Parser');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
self['@memo']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
return self;},
source: unescape('initialize%0A%09memo%20%3A%3D%20Dictionary%20new'),
messageSends: ["new"],
referencedClasses: [smalltalk.Dictionary]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_memo',
smalltalk.method({
selector: 'memo',
category: 'accessing',
fn: function (){
var self=this;
return self['@memo'];
return self;},
source: unescape('memo%0A%09%5Ememo'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_flatten',
smalltalk.method({
selector: 'flatten',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPFlattenParser || PPFlattenParser), "_on_", [self]);
return self;},
source: unescape('flatten%0A%09%5EPPFlattenParser%20on%3A%20self'),
messageSends: ["on:"],
referencedClasses: [smalltalk.PPFlattenParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_withSource',
smalltalk.method({
selector: 'withSource',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPSourceParser || PPSourceParser), "_on_", [self]);
return self;},
source: unescape('withSource%0A%09%5EPPSourceParser%20on%3A%20self'),
messageSends: ["on:"],
referencedClasses: [smalltalk.PPSourceParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'__eq_eq_gt',
smalltalk.method({
selector: '==>',
category: 'operations',
fn: function (aBlock){
var self=this;
return smalltalk.send((smalltalk.PPActionParser || PPActionParser), "_on_block_", [self, aBlock]);
return self;},
source: unescape('%3D%3D%3E%20aBlock%0A%09%5EPPActionParser%20on%3A%20self%20block%3A%20aBlock'),
messageSends: ["on:block:"],
referencedClasses: [smalltalk.PPActionParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'operations',
fn: function (aParser){
var self=this;
return smalltalk.send((smalltalk.PPSequenceParser || PPSequenceParser), "_with_with_", [self, aParser]);
return self;},
source: unescape('%2C%20aParser%0A%09%5EPPSequenceParser%20with%3A%20self%20with%3A%20aParser'),
messageSends: ["with:with:"],
referencedClasses: [smalltalk.PPSequenceParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
category: 'operations',
fn: function (aParser){
var self=this;
return smalltalk.send((smalltalk.PPChoiceParser || PPChoiceParser), "_with_with_", [self, aParser]);
return self;},
source: unescape('/%20aParser%0A%09%5EPPChoiceParser%20with%3A%20self%20with%3A%20aParser'),
messageSends: ["with:with:"],
referencedClasses: [smalltalk.PPChoiceParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_plus',
smalltalk.method({
selector: 'plus',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPRepeatingParser || PPRepeatingParser), "_on_min_", [self, (1)]);
return self;},
source: unescape('plus%0A%09%5EPPRepeatingParser%20on%3A%20self%20min%3A%201'),
messageSends: ["on:min:"],
referencedClasses: [smalltalk.PPRepeatingParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_star',
smalltalk.method({
selector: 'star',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPRepeatingParser || PPRepeatingParser), "_on_min_", [self, (0)]);
return self;},
source: unescape('star%0A%09%5EPPRepeatingParser%20on%3A%20self%20min%3A%200'),
messageSends: ["on:min:"],
referencedClasses: [smalltalk.PPRepeatingParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_not',
smalltalk.method({
selector: 'not',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPNotParser || PPNotParser), "_on_", [self]);
return self;},
source: unescape('not%0A%09%5EPPNotParser%20on%3A%20self'),
messageSends: ["on:"],
referencedClasses: [smalltalk.PPNotParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_optional',
smalltalk.method({
selector: 'optional',
category: 'operations',
fn: function (){
var self=this;
return (($receiver = self).klass === smalltalk.Number) ? $receiver /smalltalk.send((smalltalk.PPEpsilonParser || PPEpsilonParser), "_new", []) : smalltalk.send($receiver, "__slash", [smalltalk.send((smalltalk.PPEpsilonParser || PPEpsilonParser), "_new", [])]);
return self;},
source: unescape('optional%0A%09%5Eself%20/%20PPEpsilonParser%20new'),
messageSends: [unescape("/"), "new"],
referencedClasses: [smalltalk.PPEpsilonParser]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_memoizedParse_',
smalltalk.method({
selector: 'memoizedParse:',
category: 'operations',
fn: function (aStream){
var self=this;
var r=nil;
var start=nil;
var end=nil;
var node=nil;
start=smalltalk.send(aStream, "_position", []);
smalltalk.send(self, "_log_block_", ["memoizedParse", (function(){return r=smalltalk.send(smalltalk.send(self, "_memo", []), "_at_ifPresent_ifAbsent_", [start, (function(value){smalltalk.send(aStream, "_position_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_memo", []), "_at_", [start]), "_second", [])]);return smalltalk.send(value, "_first", []);}), (function(){node=smalltalk.send(self, "_parse_", [aStream]);end=smalltalk.send(aStream, "_position", []);smalltalk.send(smalltalk.send(self, "_memo", []), "_at_put_", [start, smalltalk.send((smalltalk.Array || Array), "_with_with_", [node, end])]);return node;})]);})]);
return r;
return self;},
source: unescape('memoizedParse%3A%20aStream%0A%09%7C%20r%20start%20end%20node%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%20%20%20%20%20%20%20%20self%20log%3A%20%27memoizedParse%27%20block%3A%20%5Br%20%3A%3D%20self%20memo%20at%3A%20start%20%0A%09%20%20%20%20ifPresent%3A%20%5B%3Avalue%20%7C%0A%09%09aStream%20position%3A%20%28self%20memo%20at%3A%20start%29%20second.%0A%09%09value%20first%5D%0A%09%20%20%20%20ifAbsent%3A%20%5B%0A%09%09node%20%3A%3D%20self%20parse%3A%20aStream.%0A%09%09end%20%3A%3D%20aStream%20position.%0A%09%09self%20memo%20at%3A%20start%20put%3A%20%28Array%20with%3A%20node%20with%3A%20end%29.%0A%09%09node%5D%5D.%0A%09%5Er'),
messageSends: ["position", "log:block:", "at:ifPresent:ifAbsent:", "memo", "position:", "second", "at:", "first", "parse:", "at:put:", "with:with:"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
source: unescape('parse%3A%20aStream%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.PPParser);

smalltalk.addMethod(
'_parseAll_',
smalltalk.method({
selector: 'parseAll:',
category: 'parsing',
fn: function (aStream){
var self=this;
var result=nil;
result=smalltalk.send(smalltalk.send((smalltalk.PPSequenceParser || PPSequenceParser), "_with_with_", [self, smalltalk.send((smalltalk.PPEOFParser || PPEOFParser), "_new", [])]), "_memoizedParse_", [aStream]);
return (($receiver = smalltalk.send(result, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(result, "_messageFor_", [smalltalk.send(aStream, "_contents", [])])]);})() : (function(){return smalltalk.send(result, "_first", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(result, "_messageFor_", [smalltalk.send(aStream, "_contents", [])])]);}), (function(){return smalltalk.send(result, "_first", []);})]);
return self;},
source: unescape('parseAll%3A%20aStream%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20%28PPSequenceParser%20with%3A%20self%20with%3A%20PPEOFParser%20new%29%20memoizedParse%3A%20aStream.%0A%09%5Eresult%20isParseFailure%20%0A%09%20%20%20%20ifTrue%3A%20%5Bself%20error%3A%20%28result%20messageFor%3A%20aStream%20contents%29%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bresult%20first%5D'),
messageSends: ["memoizedParse:", "with:with:", "new", "ifTrue:ifFalse:", "isParseFailure", "error:", "messageFor:", "contents", "first"],
referencedClasses: [smalltalk.PPSequenceParser,smalltalk.PPEOFParser]
}),
smalltalk.PPParser);



smalltalk.addClass('PPEOFParser', smalltalk.PPParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return (($receiver = smalltalk.send(aStream, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aStream, "_contents", []), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [unescape("---------------")]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["EOF expected"]), smalltalk.send(aStream, "_position", [])]);})() : (function(){return nil;})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aStream, "_contents", []), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [unescape("---------------")]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["EOF expected"]), smalltalk.send(aStream, "_position", [])]);}), (function(){return nil;})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5EaStream%20atEnd%20%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09PPFailure%20new%20reason%3A%20aStream%20contents%2C%20String%20lf%2C%20%27---------------%27%2C%20String%20lf%2C%20%27EOF%20expected%27%20at%3A%20aStream%20position%5D%0A%09%20%20%20%20ifTrue%3A%20%5Bnil%5D'),
messageSends: ["ifFalse:ifTrue:", "atEnd", "reason:at:", "new", unescape("%2C"), "contents", "lf", "position"],
referencedClasses: [smalltalk.PPFailure,smalltalk.String]
}),
smalltalk.PPEOFParser);



smalltalk.addClass('PPAnyParser', smalltalk.PPParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return (($receiver = smalltalk.send(aStream, "_atEnd", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", ["did not expect EOF", smalltalk.send(aStream, "_position", [])]);})() : (function(){return smalltalk.send(aStream, "_next", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", ["did not expect EOF", smalltalk.send(aStream, "_position", [])]);}), (function(){return smalltalk.send(aStream, "_next", []);})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5EaStream%20atEnd%0A%09%20%20%20%20ifTrue%3A%20%5BPPFailure%20new%0A%09%09%09%20reason%3A%20%27did%20not%20expect%20EOF%27%20at%3A%20aStream%20position%5D%0A%09%20%20%20%20ifFalse%3A%20%5BaStream%20next%5D'),
messageSends: ["ifTrue:ifFalse:", "atEnd", "reason:at:", "new", "position", "next"],
referencedClasses: [smalltalk.PPFailure]
}),
smalltalk.PPAnyParser);



smalltalk.addClass('PPEpsilonParser', smalltalk.PPParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return nil;
return self;},
source: unescape('parse%3A%20aStream%0A%09%5Enil'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPEpsilonParser);



smalltalk.addClass('PPStringParser', smalltalk.PPParser, ['string'], 'Parser');
smalltalk.addMethod(
'_string',
smalltalk.method({
selector: 'string',
category: 'accessing',
fn: function (){
var self=this;
return self['@string'];
return self;},
source: unescape('string%0A%09%5Estring'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPStringParser);

smalltalk.addMethod(
'_string_',
smalltalk.method({
selector: 'string:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@string']=aString;
return self;},
source: unescape('string%3A%20aString%0A%09string%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPStringParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var position=nil;
var result=nil;
position=smalltalk.send(aStream, "_position", []);
result=smalltalk.send(aStream, "_next_", [smalltalk.send(smalltalk.send(self, "_string", []), "_size", [])]);
return (($receiver = smalltalk.send(result, "__eq", [smalltalk.send(self, "_string", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return result;})() : (function(){smalltalk.send(aStream, "_position_", [position]);return (function($rec){smalltalk.send($rec, "_reason_", [smalltalk.send(smalltalk.send(smalltalk.send("Expected ", "__comma", [smalltalk.send(self, "_string", [])]), "__comma", [" but got "]), "__comma", [smalltalk.send(smalltalk.send(result, "_at_", [position]), "_printString", [])])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return result;}), (function(){smalltalk.send(aStream, "_position_", [position]);return (function($rec){smalltalk.send($rec, "_reason_", [smalltalk.send(smalltalk.send(smalltalk.send("Expected ", "__comma", [smalltalk.send(self, "_string", [])]), "__comma", [" but got "]), "__comma", [smalltalk.send(smalltalk.send(result, "_at_", [position]), "_printString", [])])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []));})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20position%20result%20%7C%0A%09position%20%3A%3D%20aStream%20position.%0A%09result%20%3A%3D%20aStream%20next%3A%20self%20string%20size.%0A%09%5Eresult%20%3D%20self%20string%0A%09%20%20%20%20ifTrue%3A%20%5Bresult%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aStream%20position%3A%20position.%0A%09%09PPFailure%20new%20reason%3A%20%27Expected%20%27%2C%20self%20string%2C%20%27%20but%20got%20%27%2C%20%28result%20at%3A%20position%29%20printString%3B%20yourself%5D'),
messageSends: ["position", "next:", "size", "string", "ifTrue:ifFalse:", unescape("%3D"), "position:", "reason:", unescape("%2C"), "printString", "at:", "yourself", "new"],
referencedClasses: [smalltalk.PPFailure]
}),
smalltalk.PPStringParser);



smalltalk.addClass('PPCharacterParser', smalltalk.PPParser, ['regexp'], 'Parser');
smalltalk.addMethod(
'_string_',
smalltalk.method({
selector: 'string:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@regexp']=smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_", [smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [aString]), "__comma", [unescape("%5D")])]);
return self;},
source: unescape('string%3A%20aString%0A%09regexp%20%3A%3D%20RegularExpression%20fromString%3A%20%27%5B%27%2C%20aString%2C%20%27%5D%27'),
messageSends: ["fromString:", unescape("%2C")],
referencedClasses: [smalltalk.RegularExpression]
}),
smalltalk.PPCharacterParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aStream, "_peek", []), "_notNil", []), "_and_", [(function(){return smalltalk.send(self, "_match_", [smalltalk.send(aStream, "_peek", [])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aStream, "_next", []);})() : (function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", ["Could not match", smalltalk.send(aStream, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aStream, "_next", []);}), (function(){return smalltalk.send(smalltalk.send((smalltalk.PPFailure || PPFailure), "_new", []), "_reason_at_", ["Could not match", smalltalk.send(aStream, "_position", [])]);})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5E%28aStream%20peek%20notNil%20and%3A%20%5Bself%20match%3A%20aStream%20peek%5D%29%0A%09%20%20%20%20ifTrue%3A%20%5BaStream%20next%5D%0A%09%20%20%20%20ifFalse%3A%20%5BPPFailure%20new%20reason%3A%20%27Could%20not%20match%27%20at%3A%20aStream%20position%5D'),
messageSends: ["ifTrue:ifFalse:", "and:", "notNil", "peek", "match:", "next", "reason:at:", "new", "position"],
referencedClasses: [smalltalk.PPFailure]
}),
smalltalk.PPCharacterParser);

smalltalk.addMethod(
'_match_',
smalltalk.method({
selector: 'match:',
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.send(aString, "_match_", [self['@regexp']]);
return self;},
source: unescape('match%3A%20aString%0A%09%5EaString%20match%3A%20regexp'),
messageSends: ["match:"],
referencedClasses: []
}),
smalltalk.PPCharacterParser);



smalltalk.addClass('PPListParser', smalltalk.PPParser, ['parsers'], 'Parser');
smalltalk.addMethod(
'_parsers',
smalltalk.method({
selector: 'parsers',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@parsers']) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver;
return self;},
source: unescape('parsers%0A%09%5Eparsers%20ifNil%3A%20%5B%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.PPListParser);

smalltalk.addMethod(
'_parsers_',
smalltalk.method({
selector: 'parsers:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@parsers']=aCollection;
return self;},
source: unescape('parsers%3A%20aCollection%0A%09parsers%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPListParser);

smalltalk.addMethod(
'_copyWith_',
smalltalk.method({
selector: 'copyWith:',
category: 'copying',
fn: function (aParser){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_withAll_", [smalltalk.send(smalltalk.send(self, "_parsers", []), "_copyWith_", [aParser])]);
return self;},
source: unescape('copyWith%3A%20aParser%0A%09%5Eself%20class%20withAll%3A%20%28self%20parsers%20copyWith%3A%20aParser%29'),
messageSends: ["withAll:", "class", "copyWith:", "parsers"],
referencedClasses: []
}),
smalltalk.PPListParser);


smalltalk.addMethod(
'_withAll_',
smalltalk.method({
selector: 'withAll:',
category: 'instance creation',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_parsers_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('withAll%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%0A%09%09parsers%3A%20aCollection%3B%0A%09%09yourself'),
messageSends: ["parsers:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.PPListParser.klass);

smalltalk.addMethod(
'_with_with_',
smalltalk.method({
selector: 'with:with:',
category: 'instance creation',
fn: function (aParser, anotherParser){
var self=this;
return smalltalk.send(self, "_withAll_", [smalltalk.send((smalltalk.Array || Array), "_with_with_", [aParser, anotherParser])]);
return self;},
source: unescape('with%3A%20aParser%20with%3A%20anotherParser%0A%09%20%20%20%20%5Eself%20withAll%3A%20%28Array%20with%3A%20aParser%20with%3A%20anotherParser%29'),
messageSends: ["withAll:", "with:with:"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.PPListParser.klass);


smalltalk.addClass('PPSequenceParser', smalltalk.PPListParser, [], 'Parser');
smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'copying',
fn: function (aRule){
var self=this;
return smalltalk.send(self, "_copyWith_", [aRule]);
return self;},
source: unescape('%2C%20aRule%0A%09%5Eself%20copyWith%3A%20aRule'),
messageSends: ["copyWith:"],
referencedClasses: []
}),
smalltalk.PPSequenceParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var start=nil;
var elements=nil;
var element=nil;
start=smalltalk.send(aStream, "_position", []);
elements=[];
smalltalk.send(smalltalk.send(self, "_parsers", []), "_detect_ifNone_", [(function(each){element=smalltalk.send(each, "_memoizedParse_", [aStream]);smalltalk.send(elements, "_add_", [element]);return smalltalk.send(element, "_isParseFailure", []);}), (function(){return nil;})]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return elements;})() : (function(){smalltalk.send(aStream, "_position_", [start]);return element;})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return elements;}), (function(){smalltalk.send(aStream, "_position_", [start]);return element;})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20start%20elements%20element%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09elements%20%3A%3D%20%23%28%29.%0A%09self%20parsers%20%0A%09%20%20%20%20detect%3A%20%5B%3Aeach%20%7C%0A%09%09element%20%3A%3D%20each%20memoizedParse%3A%20aStream.%0A%09%09elements%20add%3A%20element.%0A%09%09element%20isParseFailure%5D%20%0A%09%20%20%20%20ifNone%3A%20%5B%5D.%0A%09%5Eelement%20isParseFailure%0A%09%20%20%20%20ifFalse%3A%20%5Belements%5D%0A%09%20%20%20%20ifTrue%3A%20%5BaStream%20position%3A%20start.%20element%5D'),
messageSends: ["position", "detect:ifNone:", "parsers", "memoizedParse:", "add:", "isParseFailure", "ifFalse:ifTrue:", "position:"],
referencedClasses: []
}),
smalltalk.PPSequenceParser);



smalltalk.addClass('PPChoiceParser', smalltalk.PPListParser, [], 'Parser');
smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
category: 'copying',
fn: function (aRule){
var self=this;
return smalltalk.send(self, "_copyWith_", [aRule]);
return self;},
source: unescape('/%20aRule%0A%09%5Eself%20copyWith%3A%20aRule'),
messageSends: ["copyWith:"],
referencedClasses: []
}),
smalltalk.PPChoiceParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var result=nil;
smalltalk.send(smalltalk.send(self, "_parsers", []), "_detect_ifNone_", [(function(each){result=smalltalk.send(each, "_memoizedParse_", [aStream]);return smalltalk.send(smalltalk.send(result, "_isParseFailure", []), "_not", []);}), (function(){return nil;})]);
return result;
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20result%20%7C%0A%09self%20parsers%0A%20%20%20%20%09%20%20%20%20detect%3A%20%5B%3Aeach%20%7C%0A%09%09result%20%3A%3D%20each%20memoizedParse%3A%20aStream.%0A%09%09result%20isParseFailure%20not%5D%0A%09%20%20%20%20ifNone%3A%20%5B%5D.%0A%09%5Eresult'),
messageSends: ["detect:ifNone:", "parsers", "memoizedParse:", "not", "isParseFailure"],
referencedClasses: []
}),
smalltalk.PPChoiceParser);



smalltalk.addClass('PPDelegateParser', smalltalk.PPParser, ['parser'], 'Parser');
smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
category: 'accessing',
fn: function (){
var self=this;
return self['@parser'];
return self;},
source: unescape('parser%0A%09%5Eparser'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPDelegateParser);

smalltalk.addMethod(
'_parser_',
smalltalk.method({
selector: 'parser:',
category: 'accessing',
fn: function (aParser){
var self=this;
self['@parser']=aParser;
return self;},
source: unescape('parser%3A%20aParser%0A%09parser%20%3A%3D%20aParser'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPDelegateParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5Eself%20parser%20memoizedParse%3A%20aStream'),
messageSends: ["memoizedParse:", "parser"],
referencedClasses: []
}),
smalltalk.PPDelegateParser);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
category: 'instance creation',
fn: function (aParser){
var self=this;
return (function($rec){smalltalk.send($rec, "_parser_", [aParser]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('on%3A%20aParser%0A%09%20%20%20%20%5Eself%20new%0A%09%09parser%3A%20aParser%3B%0A%09%09yourself'),
messageSends: ["parser:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.PPDelegateParser.klass);


smalltalk.addClass('PPAndParser', smalltalk.PPDelegateParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return smalltalk.send(self, "_basicParse_", [aStream]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5Eself%20basicParse%3A%20aStream'),
messageSends: ["basicParse:"],
referencedClasses: []
}),
smalltalk.PPAndParser);

smalltalk.addMethod(
'_basicParse_',
smalltalk.method({
selector: 'basicParse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var element=nil;
var position=nil;
position=smalltalk.send(aStream, "_position", []);
element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
smalltalk.send(aStream, "_position_", [position]);
return element;
return self;},
source: unescape('basicParse%3A%20aStream%0A%09%7C%20element%20position%20%7C%0A%09position%20%3A%3D%20aStream%20position.%0A%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09aStream%20position%3A%20position.%0A%09%5Eelement'),
messageSends: ["position", "memoizedParse:", "parser", "position:"],
referencedClasses: []
}),
smalltalk.PPAndParser);



smalltalk.addClass('PPNotParser', smalltalk.PPAndParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var element=nil;
element=smalltalk.send(self, "_basicParse_", [aStream]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return smalltalk.send((smalltalk.PPFailure || PPFailure), "_reason_at_", [element, smalltalk.send(aStream, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return smalltalk.send((smalltalk.PPFailure || PPFailure), "_reason_at_", [element, smalltalk.send(aStream, "_position", [])]);})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20element%20%7C%0A%09element%20%3A%3D%20self%20basicParse%3A%20aStream.%0A%09%5Eelement%20isParseFailure%20%0A%09%20%20%20%20ifTrue%3A%20%5Bnil%5D%0A%09%20%20%20%20ifFalse%3A%20%5BPPFailure%20reason%3A%20element%20at%3A%20aStream%20position%5D'),
messageSends: ["basicParse:", "ifTrue:ifFalse:", "isParseFailure", "reason:at:", "position"],
referencedClasses: [smalltalk.PPFailure]
}),
smalltalk.PPNotParser);



smalltalk.addClass('PPActionParser', smalltalk.PPDelegateParser, ['block'], 'Parser');
smalltalk.addMethod(
'_block',
smalltalk.method({
selector: 'block',
category: 'accessing',
fn: function (){
var self=this;
return self['@block'];
return self;},
source: unescape('block%0A%09%5Eblock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPActionParser);

smalltalk.addMethod(
'_block_',
smalltalk.method({
selector: 'block:',
category: 'accessing',
fn: function (aBlock){
var self=this;
self['@block']=aBlock;
return self;},
source: unescape('block%3A%20aBlock%0A%09block%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPActionParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var element=nil;
element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [element]);})() : (function(){return element;})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [element]);}), (function(){return element;})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20element%20%7C%0A%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%5Eelement%20isParseFailure%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20block%20value%3A%20element%5D%0A%09%20%20%20%20ifTrue%3A%20%5Belement%5D'),
messageSends: ["memoizedParse:", "parser", "ifFalse:ifTrue:", "isParseFailure", "value:", "block"],
referencedClasses: []
}),
smalltalk.PPActionParser);


smalltalk.addMethod(
'_on_block_',
smalltalk.method({
selector: 'on:block:',
category: 'instance creation',
fn: function (aParser, aBlock){
var self=this;
return (function($rec){smalltalk.send($rec, "_parser_", [aParser]);smalltalk.send($rec, "_block_", [aBlock]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('on%3A%20aParser%20block%3A%20aBlock%0A%09%20%20%20%20%5Eself%20new%0A%09%09parser%3A%20aParser%3B%0A%09%09block%3A%20aBlock%3B%0A%09%09yourself'),
messageSends: ["parser:", "block:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.PPActionParser.klass);


smalltalk.addClass('PPFlattenParser', smalltalk.PPDelegateParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var start=nil;
var element=nil;
var stop=nil;
start=smalltalk.send(aStream, "_position", []);
element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return element;})() : (function(){return smalltalk.send(smalltalk.send(aStream, "_collection", []), "_copyFrom_to_", [(($receiver = start).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(aStream, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return element;}), (function(){return smalltalk.send(smalltalk.send(aStream, "_collection", []), "_copyFrom_to_", [(($receiver = start).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(aStream, "_position", [])]);})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20start%20element%20stop%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%5Eelement%20isParseFailure%0A%09%20%20%20%20ifTrue%3A%20%5Belement%5D%0A%09%20%20%20%20ifFalse%3A%20%5BaStream%20collection%20%0A%09%09copyFrom%3A%20start%20+%201%20%0A%09%09to%3A%20aStream%20position%5D'),
messageSends: ["position", "memoizedParse:", "parser", "ifTrue:ifFalse:", "isParseFailure", "copyFrom:to:", "collection", unescape("+")],
referencedClasses: []
}),
smalltalk.PPFlattenParser);



smalltalk.addClass('PPSourceParser', smalltalk.PPDelegateParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var start=nil;
var element=nil;
var stop=nil;
var result=nil;
start=smalltalk.send(aStream, "_position", []);
element=smalltalk.send(smalltalk.send(self, "_parser", []), "_memoizedParse_", [aStream]);
return (($receiver = smalltalk.send(element, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return element;})() : (function(){result=smalltalk.send(smalltalk.send(aStream, "_collection", []), "_copyFrom_to_", [(($receiver = start).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(aStream, "_position", [])]);return smalltalk.send((smalltalk.Array || Array), "_with_with_", [element, result]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return element;}), (function(){result=smalltalk.send(smalltalk.send(aStream, "_collection", []), "_copyFrom_to_", [(($receiver = start).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(aStream, "_position", [])]);return smalltalk.send((smalltalk.Array || Array), "_with_with_", [element, result]);})]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20start%20element%20stop%20result%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%5Eelement%20isParseFailure%0A%09%09ifTrue%3A%20%5Belement%5D%0A%09%09ifFalse%3A%20%5Bresult%20%3A%3D%20aStream%20collection%20copyFrom%3A%20start%20+%201%20to%3A%20aStream%20position.%0A%09%09%09Array%20with%3A%20element%20with%3A%20result%5D.'),
messageSends: ["position", "memoizedParse:", "parser", "ifTrue:ifFalse:", "isParseFailure", "copyFrom:to:", "collection", unescape("+"), "with:with:"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.PPSourceParser);



smalltalk.addClass('PPRepeatingParser', smalltalk.PPDelegateParser, ['min'], 'Parser');
smalltalk.addMethod(
'_min',
smalltalk.method({
selector: 'min',
category: 'accessing',
fn: function (){
var self=this;
return self['@min'];
return self;},
source: unescape('min%0A%09%5Emin'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPRepeatingParser);

smalltalk.addMethod(
'_min_',
smalltalk.method({
selector: 'min:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@min']=aNumber;
return self;},
source: unescape('min%3A%20aNumber%0A%09min%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPRepeatingParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
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
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20start%20element%20elements%20failure%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09elements%20%3A%3D%20Array%20new.%0A%09%5B%28elements%20size%20%3C%20self%20min%29%20and%3A%20%5Bfailure%20isNil%5D%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%20%20%20%20element%20isParseFailure%0A%09%09%09ifFalse%3A%20%5Belements%20addLast%3A%20element%5D%0A%09%09%09ifTrue%3A%20%5BaStream%20position%3A%20start.%0A%09%09%09%09%20failure%20%3A%3D%20element%5D%5D.%0A%09%5Efailure%20ifNil%3A%20%5B%0A%09%20%20%20%20%5Bfailure%20isNil%5D%20whileTrue%3A%20%5B%0A%09%09%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%20%09%09element%20isParseFailure%0A%09%09%09%09ifTrue%3A%20%5Bfailure%20%3A%3D%20element%5D%0A%09%09%09%09ifFalse%3A%20%5Belements%20addLast%3A%20element%5D%5D.%0A%09%09%09%09elements%5D%0A%09%09ifNotNil%3A%20%5Bfailure%5D.'),
messageSends: ["position", "new", "whileTrue:", "and:", unescape("%3C"), "size", "min", "isNil", "memoizedParse:", "parser", "ifFalse:ifTrue:", "isParseFailure", "addLast:", "position:", "ifNil:ifNotNil:", "ifTrue:ifFalse:"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.PPRepeatingParser);


smalltalk.addMethod(
'_on_min_',
smalltalk.method({
selector: 'on:min:',
category: 'instance creation',
fn: function (aParser, aNumber){
var self=this;
return (function($rec){smalltalk.send($rec, "_parser_", [aParser]);smalltalk.send($rec, "_min_", [aNumber]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('on%3A%20aParser%20min%3A%20aNumber%0A%09%20%20%20%20%5Eself%20new%0A%09%09parser%3A%20aParser%3B%0A%09%09min%3A%20aNumber%3B%0A%09%09yourself'),
messageSends: ["parser:", "min:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.PPRepeatingParser.klass);


smalltalk.addClass('PPFailure', smalltalk.Object, ['position', 'reason'], 'Parser');
smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return (0);})() : $receiver;
return self;},
source: unescape('position%0A%09%5Eposition%20ifNil%3A%20%5B0%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@position']=aNumber;
return self;},
source: unescape('position%3A%20aNumber%0A%09position%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_reason',
smalltalk.method({
selector: 'reason',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@reason']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
source: unescape('reason%0A%09%5Ereason%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_reason_',
smalltalk.method({
selector: 'reason:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@reason']=aString;
return self;},
source: unescape('reason%3A%20aString%0A%09reason%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_reason_at_',
smalltalk.method({
selector: 'reason:at:',
category: 'accessing',
fn: function (aString, anInteger){
var self=this;
(function($rec){smalltalk.send($rec, "_reason_", [aString]);return smalltalk.send($rec, "_position_", [anInteger]);})(self);
return self;},
source: unescape('reason%3A%20aString%20at%3A%20anInteger%0A%09self%20%0A%09%20%20%20%20reason%3A%20aString%3B%20%0A%09%20%20%20%20position%3A%20anInteger'),
messageSends: ["reason:", "position:"],
referencedClasses: []
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_isParseFailure',
smalltalk.method({
selector: 'isParseFailure',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isParseFailure%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'accessing',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitFailure_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitFailure%3A%20self'),
messageSends: ["visitFailure:"],
referencedClasses: []
}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@reason'], "__comma", [" at "]), "__comma", [smalltalk.send(self['@position'], "_asString", [])]);
return self;},
source: unescape('asString%0A%09%5Ereason%2C%20%27%20at%20%27%2C%20position%20asString'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.PPFailure);


smalltalk.addMethod(
'_reason_at_',
smalltalk.method({
selector: 'reason:at:',
category: 'instance creation',
fn: function (aString, anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_reason_at_", [aString, anInteger]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('reason%3A%20aString%20at%3A%20anInteger%0A%09%20%20%20%20%5Eself%20new%0A%09%09reason%3A%20aString%20at%3A%20anInteger%3B%0A%09%09yourself'),
messageSends: ["reason:at:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.PPFailure.klass);


smalltalk.addClass('SmalltalkParser', smalltalk.Object, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_parser", []), "_parse_", [aStream]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5Eself%20parser%20parse%3A%20aStream'),
messageSends: ["parse:", "parser"],
referencedClasses: []
}),
smalltalk.SmalltalkParser);

smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
category: 'grammar',
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
return self;},
source: unescape('parser%0A%09%7C%20method%20expression%20separator%20comment%20ws%20identifier%20keyword%20className%20string%20symbol%20number%20literalArray%20variable%20reference%20classReference%20literal%20ret%20methodParser%20expressionParser%20keyword%20unarySelector%20binarySelector%20keywordPattern%20unaryPattern%20binaryPattern%20assignment%20temps%20blockParamList%20block%20expression%20expressions%20subexpression%20statements%20sequence%20operand%20unaryMessage%20unarySend%20unaryTail%20binaryMessage%20binarySend%20binaryTail%20keywordMessage%20keywordSend%20keywordPair%20cascade%20message%20jsStatement%20%7C%0A%09%0A%09separator%20%3A%3D%20%28String%20cr%2C%20String%20space%2C%20String%20lf%2C%20String%20tab%29%20asChoiceParser.%0A%09comment%20%3A%3D%20%28%27%22%27%20asCharacterParser%2C%20%28%27%22%27%20asParser%20not%2C%20PPAnyParser%20new%29%20star%2C%20%27%22%27%20asCharacterParser%29%20flatten.%0A%0A%09ws%20%3A%3D%20%28separator%20/%20comment%29%20star.%0A%09%0A%09identifier%20%3A%3D%20%28%27a-z%27%20asCharacterParser%2C%20%27a-zA-Z0-9%27%20asCharacterParser%20star%29%20flatten.%0A%0A%09keyword%20%3A%3D%20%28identifier%2C%20%27%3A%27%20asParser%29%20flatten.%0A%0A%09className%20%3A%3D%20%28%27A-Z%27%20asCharacterParser%2C%20%27a-zA-Z0-9%27%20asCharacterParser%20star%29%20flatten.%0A%0A%09string%20%3A%3D%20%27%27%27%27%20asParser%2C%20%28%27%27%27%27%27%27%20asParser%20/%20%28%27%27%27%27%20asParser%20not%2C%20PPAnyParser%20new%29%29%20star%20flatten%2C%20%27%27%27%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20ValueNode%20new%20value%3A%20%28%28node%20at%3A%202%29%20replace%3A%20%27%27%27%27%27%27%20with%3A%20%27%27%27%27%29%5D.%0A%0A%09symbol%20%3A%3D%20%27%23%27%20asParser%2C%20%27a-zA-Z0-9%27%20asCharacterParser%20plus%20flatten%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20ValueNode%20new%20value%3A%20node%20second%5D.%0A%0A%09number%20%3A%3D%20%28%270-9%27%20asCharacterParser%20plus%2C%20%28%27.%27%20asParser%2C%20%270-9%27%20asCharacterParser%20plus%29%20optional%29%20flatten%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20ValueNode%20new%20value%3A%20node%20asNumber%5D.%0A%0A%09literal%20%3A%3D%20PPDelegateParser%20new.%0A%0A%09literalArray%20%3A%3D%20%27%23%28%27%20asParser%2C%20%28ws%2C%20literal%2C%20ws%29%20star%2C%20%27%29%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20ValueNode%20new%20value%3A%20%28Array%20withAll%3A%20%28node%20second%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%20value%5D%29%29%5D.%0A%0A%09variable%20%3A%3D%20identifier%20%3D%3D%3E%20%5B%3Atoken%20%7C%20VariableNode%20new%20value%3A%20token%5D.%0A%0A%09classReference%20%3A%3D%20className%20%3D%3D%3E%20%5B%3Atoken%20%7C%20ClassReferenceNode%20new%20value%3A%20token%5D.%0A%0A%09reference%20%3A%3D%20variable%20/%20classReference.%0A%0A%09binarySelector%20%3A%3D%20%27+*/%3D%3E%3C%2C@%25%7E%7C%26-%27%20asCharacterParser%20plus%20flatten.%0A%0A%09unarySelector%20%3A%3D%20identifier.%0A%0A%09keywordPattern%20%3A%3D%20%28ws%2C%20keyword%2C%20ws%2C%20identifier%29%20plus%0A%09%09%3D%3D%3E%20%5B%3Anodes%20%7C%20Array%0A%09%09%09%09%20%20with%3A%20%28%28nodes%20collect%3A%20%5B%3Aeach%20%7C%20each%20at%3A%202%5D%29%20join%3A%20%27%27%29%0A%09%09%09%09%20%20with%3A%20%28nodes%20collect%3A%20%5B%3Aeach%20%7C%20each%20at%3A%204%5D%29%5D.%0A%0A%09binaryPattern%20%3A%3D%20ws%2C%20binarySelector%2C%20ws%2C%20identifier%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20Array%20with%3A%20node%20second%20with%3A%20%28Array%20with%3A%20node%20fourth%29%5D.%0A%0A%09unaryPattern%20%3A%3D%20ws%2C%20unarySelector%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20Array%20with%3A%20node%20second%20with%3A%20Array%20new%5D.%0A%09%0A%09expression%20%3A%3D%20PPDelegateParser%20new.%0A%0A%09expressions%20%3A%3D%20expression%2C%20%28%28ws%2C%20%27.%27%20asParser%2C%20ws%2C%20expression%29%20%3D%3D%3E%20%5B%3Anode%20%7C%20node%20fourth%5D%29%20star%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%7C%20result%20%7C%0A%09%09%20%20%20%20result%20%3A%3D%20Array%20with%3A%20node%20first.%0A%09%09%20%20%20%20node%20second%20do%3A%20%5B%3Aeach%20%7C%20result%20add%3A%20each%5D.%0A%09%09%20%20%20%20result%5D.%0A%0A%09assignment%20%3A%3D%20variable%2C%20ws%2C%20%27%3A%3D%27%20asParser%2C%20ws%2C%20expression%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20AssignmentNode%20new%20left%3A%20node%20first%3B%20right%3A%20%28node%20at%3A%205%29%5D.%0A%0A%09ret%20%3A%3D%20%27%5E%27%20asParser%2C%20ws%2C%20expression%2C%20ws%2C%20%27.%27%20asParser%20optional%0A%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%20ReturnNode%20new%0A%09%09%09%20%20%20%20%20addNode%3A%20node%20third%3B%0A%09%09%09%20%20%20%20%20yourself%5D.%0A%0A%09temps%20%3A%3D%20%27%7C%27%20asParser%2C%20%28ws%2C%20identifier%29%20star%2C%20ws%2C%20%27%7C%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20node%20second%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%5D%5D.%0A%0A%09blockParamList%20%3A%3D%20%28%27%3A%27%20asParser%2C%20identifier%2C%20ws%29%20plus%2C%20%27%7C%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20node%20first%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%5D%5D.%0A%0A%09subexpression%20%3A%3D%20%27%28%27%20asParser%2C%20ws%2C%20expression%2C%20ws%2C%20%27%29%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20node%20third%5D.%0A%0A%09statements%20%3A%3D%20%28ret%20%3D%3D%3E%20%5B%3Anode%20%7C%20Array%20with%3A%20node%5D%29%20/%20%28expressions%2C%20ws%2C%20%27.%27%20asParser%2C%20ws%2C%20ret%20%3D%3D%3E%20%5B%3Anode%20%7C%20node%20first%20add%3A%20%28node%20at%3A%205%29%3B%20yourself%5D%29%20/%20%28expressions%20%2C%20%27.%27%20asParser%20optional%20%3D%3D%3E%20%5B%3Anode%20%7C%20node%20first%5D%29.%0A%0A%09sequence%20%3A%3D%20temps%20optional%2C%20ws%2C%20statements%20optional%2C%20ws%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20SequenceNode%20new%0A%09%09%09%09%20temps%3A%20node%20first%3B%0A%09%09%09%09%20nodes%3A%20node%20third%3B%0A%09%09%09%09%20yourself%5D.%0A%0A%09block%20%3A%3D%20%27%5B%27%20asParser%2C%20ws%2C%20blockParamList%20optional%2C%20ws%2C%20sequence%20optional%2C%20ws%2C%20%27%5D%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20BlockNode%20new%0A%09%09%09parameters%3A%20node%20third%3B%0A%09%09%09addNode%3A%20%28node%20at%3A%205%29%20asBlockSequenceNode%5D.%0A%0A%09operand%20%3A%3D%20literal%20/%20reference%20/%20subexpression.%0A%0A%09literal%20parser%3A%20number%20/%20string%20/%20literalArray%20/%20symbol%20/%20block.%0A%0A%09unaryMessage%20%3A%3D%20ws%2C%20unarySelector%2C%20%27%3A%27%20asParser%20not%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20SendNode%20new%20selector%3A%20node%20second%5D.%0A%0A%09unaryTail%20%3A%3D%20PPDelegateParser%20new.%0A%09unaryTail%20parser%3A%20%28unaryMessage%2C%20unaryTail%20optional%0A%09%09%09%20%20%20%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%09%09%20%20%20node%20second%0A%09%09%09%09%09%20%20%20ifNil%3A%20%5Bnode%20first%5D%0A%09%09%09%09%09%20%20%20ifNotNil%3A%20%5Bnode%20second%20valueForReceiver%3A%20node%20first%5D%5D%29.%0A%0A%09unarySend%20%3A%3D%20operand%2C%20unaryTail%20optional%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20node%20second%20%0A%09%09%09ifNil%3A%20%5Bnode%20first%5D%0A%09%09%09ifNotNil%3A%20%5Bnode%20second%20valueForReceiver%3A%20node%20first%5D%5D.%0A%0A%09binaryMessage%20%3A%3D%20ws%2C%20binarySelector%2C%20ws%2C%20%28unarySend%20/%20operand%29%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20SendNode%20new%0A%09%09%09selector%3A%20node%20second%3B%0A%09%09%09arguments%3A%20%28Array%20with%3A%20node%20fourth%29%5D.%0A%0A%09binaryTail%20%3A%3D%20PPDelegateParser%20new.%0A%09binaryTail%20parser%3A%20%28binaryMessage%2C%20binaryTail%20optional%0A%09%09%09%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%09%09%09node%20second%20%0A%09%09%09%09%09%20%20%20%20ifNil%3A%20%5Bnode%20first%5D%0A%09%09%09%09%09%20%20%20%20ifNotNil%3A%20%5B%20node%20second%20valueForReceiver%3A%20node%20first%5D%5D%29.%0A%0A%09binarySend%20%3A%3D%20unarySend%2C%20binaryTail%20optional%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20node%20second%0A%09%09%09ifNil%3A%20%5Bnode%20first%5D%0A%09%09%09ifNotNil%3A%20%5Bnode%20second%20valueForReceiver%3A%20node%20first%5D%5D.%0A%0A%09keywordPair%20%3A%3D%20keyword%2C%20ws%2C%20binarySend.%0A%0A%09keywordMessage%20%3A%3D%20%28ws%2C%20keywordPair%29%20plus%0A%09%09%3D%3D%3E%20%5B%3Anodes%20%7C%0A%09%09%20%20%20%20SendNode%20new%0A%09%09%09selector%3A%20%28%28nodes%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%20first%5D%29%20join%3A%20%27%27%29%3B%0A%09%09%09arguments%3A%20%28nodes%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%20third%5D%29%5D.%0A%0A%09keywordSend%20%3A%3D%20binarySend%2C%20keywordMessage%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20node%20second%20valueForReceiver%3A%20node%20first%5D.%0A%0A%09message%20%3A%3D%20binaryMessage%20/%20unaryMessage%20/%20keywordMessage.%0A%0A%09cascade%20%3A%3D%20%28keywordSend%20/%20binarySend%29%2C%20%28ws%2C%20%27%3B%27%20asParser%2C%20message%29%20plus%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20node%20first%20cascadeNodeWithMessages%3A%20%0A%09%09%09%28node%20second%20collect%3A%20%5B%3Aeach%20%7C%20each%20third%5D%29%5D.%0A%0A%09jsStatement%20%3A%3D%20%27%3C%27%20asParser%2C%20%28%27%3E%3E%27%20asParser%20/%20%28%27%3E%27%20asParser%20not%2C%20PPAnyParser%20new%29%29%20star%20flatten%2C%20%27%3E%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20JSStatementNode%20new%0A%09%09%09source%3A%20node%20second%3B%0A%09%09%09yourself%5D.%0A%0A%09expression%20parser%3A%20assignment%20/%20cascade%20/%20keywordSend%20/%20binarySend%20/%20jsStatement.%0A%0A%09method%20%3A%3D%20%28ws%2C%20%28keywordPattern%20/%20binaryPattern%20/%20unaryPattern%29%2C%20ws%2C%20sequence%20optional%2C%20ws%29%20withSource%0A%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09MethodNode%20new%0A%09%09%20%20%20%20selector%3A%20node%20first%20second%20first%3B%0A%09%09%20%20%20%20arguments%3A%20node%20first%20second%20second%3B%0A%09%09%20%20%20%20addNode%3A%20node%20first%20fourth%3B%0A%09%09%20%20%20%20source%3A%20node%20second%3B%0A%09%09%20%20%20%20yourself%5D.%0A%09%0A%09%5Emethod%2C%20PPEOFParser%20new%20%3D%3D%3E%20%5B%3Anode%20%7C%20node%20first%5D'),
messageSends: ["asChoiceParser", unescape("%2C"), "cr", "space", "lf", "tab", "flatten", "asCharacterParser", "star", "not", "asParser", "new", unescape("/"), unescape("%3D%3D%3E"), "value:", "replace:with:", "at:", "plus", "second", "optional", "asNumber", "withAll:", "collect:", "value", "with:with:", "join:", "with:", "fourth", "first", "do:", "add:", "left:", "right:", "addNode:", "third", "yourself", "temps:", "nodes:", "parameters:", "asBlockSequenceNode", "parser:", "selector:", "ifNil:ifNotNil:", "valueForReceiver:", "arguments:", "cascadeNodeWithMessages:", "source:", "withSource"],
referencedClasses: [smalltalk.String,smalltalk.PPAnyParser,smalltalk.ValueNode,smalltalk.PPDelegateParser,smalltalk.Array,smalltalk.VariableNode,smalltalk.ClassReferenceNode,smalltalk.AssignmentNode,smalltalk.ReturnNode,smalltalk.SequenceNode,smalltalk.BlockNode,smalltalk.SendNode,smalltalk.JSStatementNode,smalltalk.MethodNode,smalltalk.PPEOFParser]
}),
smalltalk.SmalltalkParser);


smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'instance creation',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_parse_", [aStream]);
return self;},
source: unescape('parse%3A%20aStream%0A%09%20%20%20%20%5Eself%20new%0A%09%09parse%3A%20aStream'),
messageSends: ["parse:", "new"],
referencedClasses: []
}),
smalltalk.SmalltalkParser.klass);


smalltalk.addClass('Chunk', smalltalk.Object, ['contents'], 'Parser');
smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@contents']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
source: unescape('contents%0A%09%5Econtents%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Chunk);

smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@contents']=aString;
return self;},
source: unescape('contents%3A%20aString%0A%09contents%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Chunk);

smalltalk.addMethod(
'_isEmptyChunk',
smalltalk.method({
selector: 'isEmptyChunk',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isEmptyChunk%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Chunk);

smalltalk.addMethod(
'_isInstructionChunk',
smalltalk.method({
selector: 'isInstructionChunk',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isInstructionChunk%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Chunk);



smalltalk.addClass('InstructionChunk', smalltalk.Chunk, [], 'Parser');
smalltalk.addMethod(
'_isInstructionChunk',
smalltalk.method({
selector: 'isInstructionChunk',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isInstructionChunk%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.InstructionChunk);



smalltalk.addClass('EmptyChunk', smalltalk.Chunk, [], 'Parser');
smalltalk.addMethod(
'_isEmptyChunk',
smalltalk.method({
selector: 'isEmptyChunk',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isEmptyChunk%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.EmptyChunk);



smalltalk.addClass('ChunkParser', smalltalk.Object, ['parser', 'separator', 'eof', 'ws', 'chunk', 'emptyChunk', 'instructionChunk'], 'Parser');
smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@parser']) == nil || $receiver == undefined) ? (function(){return self['@parser']=(($receiver = (($receiver = (($receiver = smalltalk.send(self, "_instructionChunk", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self, "_emptyChunk", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self, "_emptyChunk", [])])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self, "_chunk", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self, "_chunk", [])])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self, "_eof", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self, "_eof", [])]);})() : $receiver;
return self;},
source: unescape('parser%0A%09%5Eparser%20ifNil%3A%20%5B%0A%09%20%20%20%20parser%20%3A%3D%20self%20instructionChunk%20/%20self%20emptyChunk%20/%20self%20chunk%20/%20self%20eof%5D'),
messageSends: ["ifNil:", unescape("/"), "instructionChunk", "emptyChunk", "chunk", "eof"],
referencedClasses: []
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_eof',
smalltalk.method({
selector: 'eof',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@eof']) == nil || $receiver == undefined) ? (function(){return self['@eof']=smalltalk.send(smalltalk.send(smalltalk.send(self, "_ws", []), "__comma", [smalltalk.send((smalltalk.PPEOFParser || PPEOFParser), "_new", [])]), "__eq_eq_gt", [(function(node){return nil;})]);})() : $receiver;
return self;},
source: unescape('eof%0A%09%5Eeof%20ifNil%3A%20%5Beof%20%3A%3D%20self%20ws%2C%20PPEOFParser%20new%20%3D%3D%3E%20%5B%3Anode%20%7C%20nil%5D%5D'),
messageSends: ["ifNil:", unescape("%3D%3D%3E"), unescape("%2C"), "ws", "new"],
referencedClasses: [smalltalk.PPEOFParser]
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_separator',
smalltalk.method({
selector: 'separator',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@separator']) == nil || $receiver == undefined) ? (function(){return self['@separator']=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.String || String), "_cr", []), "__comma", [smalltalk.send((smalltalk.String || String), "_space", [])]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [smalltalk.send((smalltalk.String || String), "_tab", [])]), "_asChoiceParser", []);})() : $receiver;
return self;},
source: unescape('separator%0A%09%5Eseparator%20ifNil%3A%20%5Bseparator%20%3A%3D%20%28String%20cr%2C%20String%20space%2C%20String%20lf%2C%20String%20tab%29%20asChoiceParser%5D'),
messageSends: ["ifNil:", "asChoiceParser", unescape("%2C"), "cr", "space", "lf", "tab"],
referencedClasses: [smalltalk.String]
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_ws',
smalltalk.method({
selector: 'ws',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@ws']) == nil || $receiver == undefined) ? (function(){return self['@ws']=smalltalk.send(smalltalk.send(self, "_separator", []), "_star", []);})() : $receiver;
return self;},
source: unescape('ws%0A%09%5Ews%20ifNil%3A%20%5Bws%20%3A%3D%20self%20separator%20star%5D'),
messageSends: ["ifNil:", "star", "separator"],
referencedClasses: []
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_chunk',
smalltalk.method({
selector: 'chunk',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@chunk']) == nil || $receiver == undefined) ? (function(){return self['@chunk']=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_ws", []), "__comma", [smalltalk.send(smalltalk.send((($receiver = smalltalk.send(unescape("%21%21"), "_asParser", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(smalltalk.send(unescape("%21"), "_asParser", []), "_not", []), "__comma", [smalltalk.send((smalltalk.PPAnyParser || PPAnyParser), "_new", [])]) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("%21"), "_asParser", []), "_not", []), "__comma", [smalltalk.send((smalltalk.PPAnyParser || PPAnyParser), "_new", [])])]), "_plus", []), "_flatten", [])]), "__comma", [smalltalk.send(unescape("%21"), "_asParser", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send((smalltalk.Chunk || Chunk), "_new", []), "_contents_", [smalltalk.send(smalltalk.send(smalltalk.send(node, "_second", []), "_replace_with_", [unescape("%21%21"), unescape("%21")]), "_trimBoth", [])]);})]);})() : $receiver;
return self;},
source: unescape('chunk%0A%09%5Echunk%20ifNil%3A%20%5Bchunk%20%3A%3D%20self%20ws%2C%20%28%27%21%21%27%20asParser%20/%20%28%27%21%27%20asParser%20not%2C%20PPAnyParser%20new%29%29%20plus%20flatten%2C%20%27%21%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20Chunk%20new%20contents%3A%20%28node%20second%20replace%3A%20%27%21%21%27%20with%3A%20%27%21%27%29%20trimBoth%5D%5D'),
messageSends: ["ifNil:", unescape("%3D%3D%3E"), unescape("%2C"), "ws", "flatten", "plus", unescape("/"), "asParser", "not", "new", "contents:", "trimBoth", "replace:with:", "second"],
referencedClasses: [smalltalk.PPAnyParser,smalltalk.Chunk]
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_emptyChunk',
smalltalk.method({
selector: 'emptyChunk',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@emptyChunk']) == nil || $receiver == undefined) ? (function(){return self['@emptyChunk']=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_separator", []), "_plus", []), "__comma", [smalltalk.send(unescape("%21"), "_asParser", [])]), "__comma", [smalltalk.send(self, "_ws", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send((smalltalk.EmptyChunk || EmptyChunk), "_new", []);})]);})() : $receiver;
return self;},
source: unescape('emptyChunk%0A%09%5EemptyChunk%20ifNil%3A%20%5BemptyChunk%20%3A%3D%20self%20separator%20plus%2C%20%27%21%27%20asParser%2C%20self%20ws%20%3D%3D%3E%20%5B%3Anode%20%7C%20EmptyChunk%20new%5D%5D'),
messageSends: ["ifNil:", unescape("%3D%3D%3E"), unescape("%2C"), "plus", "separator", "asParser", "ws", "new"],
referencedClasses: [smalltalk.EmptyChunk]
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_instructionChunk',
smalltalk.method({
selector: 'instructionChunk',
category: '',
fn: function (){
var self=this;
return (($receiver = self['@instructionChunk']) == nil || $receiver == undefined) ? (function(){return self['@instructionChunk']=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_ws", []), "__comma", [smalltalk.send(unescape("%21"), "_asParser", [])]), "__comma", [smalltalk.send(self, "_chunk", [])]), "__eq_eq_gt", [(function(node){return smalltalk.send(smalltalk.send((smalltalk.InstructionChunk || InstructionChunk), "_new", []), "_contents_", [smalltalk.send(smalltalk.send(node, "_last", []), "_contents", [])]);})]);})() : $receiver;
return self;},
source: unescape('instructionChunk%0A%09%5EinstructionChunk%20ifNil%3A%20%5B%0A%09%20%20%20%20instructionChunk%20%3A%3D%20self%20ws%2C%20%27%21%27%20asParser%2C%20self%20chunk%0A%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%20InstructionChunk%20new%20contents%3A%20node%20last%20contents%5D%5D'),
messageSends: ["ifNil:", unescape("%3D%3D%3E"), unescape("%2C"), "ws", "asParser", "chunk", "contents:", "new", "contents", "last"],
referencedClasses: [smalltalk.InstructionChunk]
}),
smalltalk.ChunkParser);



smalltalk.addClass('Importer', smalltalk.Object, ['chunkParser'], 'Parser');
smalltalk.addMethod(
'_chunkParser',
smalltalk.method({
selector: 'chunkParser',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@chunkParser']) == nil || $receiver == undefined) ? (function(){return self['@chunkParser']=smalltalk.send(smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []), "_parser", []);})() : $receiver;
return self;},
source: unescape('chunkParser%0A%09%5EchunkParser%20ifNil%3A%20%5BchunkParser%20%3A%3D%20ChunkParser%20new%20parser%5D'),
messageSends: ["ifNil:", "parser", "new"],
referencedClasses: [smalltalk.ChunkParser]
}),
smalltalk.Importer);

smalltalk.addMethod(
'_import_',
smalltalk.method({
selector: 'import:',
category: 'fileIn',
fn: function (aStream){
var self=this;
try{var nextChunk=nil;
var result=nil;
(function(){while(!(function(){return smalltalk.send(aStream, "_atEnd", []);})()) {(function(){nextChunk=smalltalk.send(smalltalk.send(self, "_chunkParser", []), "_parse_", [aStream]);(($receiver = nextChunk) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_import_', fn: function(){return self}})})();})() : $receiver;result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [smalltalk.send(nextChunk, "_contents", [])]);return (($receiver = smalltalk.send(nextChunk, "_isInstructionChunk", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_scanFrom_", [aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_scanFrom_", [aStream]);})]);})()}})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_import_'){return e.fn()} throw(e)}},
source: unescape('import%3A%20aStream%0A%20%20%20%20%7C%20nextChunk%20result%20%7C%0A%20%20%20%20%5BaStream%20atEnd%5D%20whileFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20nextChunk%20%3A%3D%20self%20chunkParser%20parse%3A%20aStream.%0A%20%20%20%20%20%20%20%20nextChunk%20ifNil%3A%20%5B%5Eself%5D.%0A%20%20%20%20%20%20%20%20result%20%3A%3D%20Compiler%20new%20loadExpression%3A%20nextChunk%20contents.%0A%20%20%20%20%20%20%20%20nextChunk%20isInstructionChunk%20%0A%20%20%20%20%20%20%20%20%20%20%20%20ifTrue%3A%20%5Bresult%20scanFrom%3A%20aStream%5D%5D'),
messageSends: ["whileFalse:", "atEnd", "parse:", "chunkParser", "ifNil:", "loadExpression:", "new", "contents", "ifTrue:", "isInstructionChunk", "scanFrom:"],
referencedClasses: [smalltalk.Compiler]
}),
smalltalk.Importer);



smalltalk.addClass('Exporter', smalltalk.Object, [], 'Parser');
smalltalk.addMethod(
'_exportCategory_',
smalltalk.method({
selector: 'exportCategory:',
category: 'fileOut',
fn: function (aString){
var self=this;
var stream=nil;
stream=smalltalk.send("", "_writeStream", []);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [aString]);})]), "_do_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self, "_export_", [each])]);})]);
smalltalk.send(self, "_exportCategoryExtensions_on_", [aString, stream]);
return smalltalk.send(stream, "_contents", []);
return self;},
source: unescape('exportCategory%3A%20aString%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09%28Smalltalk%20current%20classes%20%0A%09%20%20%20%20select%3A%20%5B%3Aeach%20%7C%20each%20category%20%3D%20aString%5D%29%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20%28self%20export%3A%20each%29%5D.%0A%09self%20exportCategoryExtensions%3A%20aString%20on%3A%20stream.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "do:", "select:", "classes", "current", unescape("%3D"), "category", "nextPutAll:", "export:", "exportCategoryExtensions:on:", "contents"],
referencedClasses: [smalltalk.Smalltalk]
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_export_',
smalltalk.method({
selector: 'export:',
category: 'fileOut',
fn: function (aClass){
var self=this;
var stream=nil;
stream=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_exportDefinitionOf_on_", [aClass, stream]);
smalltalk.send(self, "_exportMethodsOf_on_", [aClass, stream]);
smalltalk.send(self, "_exportMetaDefinitionOf_on_", [aClass, stream]);
smalltalk.send(self, "_exportMethodsOf_on_", [smalltalk.send(aClass, "_class", []), stream]);
return smalltalk.send(stream, "_contents", []);
return self;},
source: unescape('export%3A%20aClass%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09self%20exportDefinitionOf%3A%20aClass%20on%3A%20stream.%0A%09self%20exportMethodsOf%3A%20aClass%20on%3A%20stream.%0A%09self%20exportMetaDefinitionOf%3A%20aClass%20on%3A%20stream.%0A%09self%20exportMethodsOf%3A%20aClass%20class%20on%3A%20stream.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "exportDefinitionOf:on:", "exportMethodsOf:on:", "exportMetaDefinitionOf:on:", "class", "contents"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportDefinitionOf_on_',
smalltalk.method({
selector: 'exportDefinitionOf:on:',
category: 'private',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addClass%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%27%2C%20")])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D%2C%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", [unescape("%27")])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);})(aStream);
(($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [unescape(".comment%3D")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_escaped", [])]), "__comma", [unescape("%27%29")])]);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [unescape(".comment%3D")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_escaped", [])]), "__comma", [unescape("%27%29")])]);})(aStream);})]);
smalltalk.send(aStream, "_lf", []);
return self;},
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addClass%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%27%27%2C%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%2C%20%5B%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%5D%2C%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aClass%20category%2C%20%27%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%29%3B%27.%0A%09aClass%20comment%20notEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%20%20%20%20%09lf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%09nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27.comment%3D%27%3B%0A%09%09nextPutAll%3A%20%27unescape%28%27%27%27%2C%20aClass%20comment%20escaped%2C%20%27%27%27%29%27%5D.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "lf", "escaped"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportMetaDefinitionOf_on_',
smalltalk.method({
selector: 'exportMetaDefinitionOf:on:',
category: 'private',
fn: function (aClass, aStream){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape(".iVarNames%20%3D%20%5B")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(unescape("%5D%3B"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape(".iVarNames%20%3D%20%5B")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(unescape("%5D%3B"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})]);
return self;},
source: unescape('exportMetaDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aClass%20class%20instanceVariableNames%20isEmpty%20ifFalse%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20class%29%3B%0A%09%09nextPutAll%3A%20%27.iVarNames%20%3D%20%5B%27.%0A%09%20%20%20%20aClass%20class%20instanceVariableNames%0A%09%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%09separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09%20%20%20%20aStream%20nextPutAll%3A%20%27%5D%3B%27%2C%20String%20lf%5D'),
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", unescape("%2C"), "classNameFor:", "do:separatedBy:", "lf"],
referencedClasses: [smalltalk.String]
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportMethodsOf_on_',
smalltalk.method({
selector: 'exportMethodsOf:on:',
category: 'private',
fn: function (aClass, aStream){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return (($receiver = smalltalk.send(smalltalk.send(each, "_category", []), "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})]);})]);
smalltalk.send(aStream, "_lf", []);
return self;},
source: unescape('exportMethodsOf%3A%20aClass%20on%3A%20aStream%0A%09aClass%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%28each%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%0A%09%09%09self%20exportMethod%3A%20each%20of%3A%20aClass%20on%3A%20aStream%5D%5D.%0A%09aStream%20lf'),
messageSends: ["do:", "values", "methodDictionary", "ifFalse:", "match:", "category", "exportMethod:of:on:", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_classNameFor_',
smalltalk.method({
selector: 'classNameFor:',
category: 'private',
fn: function (aClass){
var self=this;
return (($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);})() : (function(){return (($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return (($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})]);
return self;},
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27.klass%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportMethod_of_on_',
smalltalk.method({
selector: 'exportMethod:of:on:',
category: 'private',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addMethod%28")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_selector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("category%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_category", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("source%3A%20unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_source", []), "_escaped", [])]), "__comma", [unescape("%27%29%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("messageSends: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_messageSends", []), "_asJavascript", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("referencedClasses%3A%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aMethod, "_referencedClasses", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [each])])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%2C")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.addMethod%28%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27%27%27%27%2C%20aMethod%20selector%20asSelector%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.method%28%7B%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27selector%3A%20%27%27%27%2C%20aMethod%20selector%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27category%3A%20%27%27%27%2C%20aMethod%20category%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27fn%3A%20%27%2C%20aMethod%20fn%20compiledSource%2C%20%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27source%3A%20unescape%28%27%27%27%2C%20aMethod%20source%20escaped%2C%20%27%27%27%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27messageSends%3A%20%27%2C%20aMethod%20messageSends%20asJavascript%2C%20%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27referencedClasses%3A%20%5B%27.%0A%09%20%20%20%20%09%09aMethod%20referencedClasses%20%0A%09%09%09%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20each%29%5D%0A%09%09%09%09separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09aStream%0A%09%09nextPutAll%3A%20%27%5D%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27%7D%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%29%3B%27%3Blf%3Blf'),
messageSends: ["nextPutAll:", "lf", unescape("%2C"), "asSelector", "selector", "category", "compiledSource", "fn", "escaped", "source", "asJavascript", "messageSends", "do:separatedBy:", "referencedClasses", "classNameFor:"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportCategoryExtensions_on_',
smalltalk.method({
selector: 'exportCategoryExtensions:on:',
category: 'private',
fn: function (aString, aStream){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return (($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "__eq", [smalltalk.send(unescape("*"), "__comma", [aString])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_exportMethod_of_on_", [method, each, aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_exportMethod_of_on_", [method, each, aStream]);})]);})]);})]);
return self;},
source: unescape('exportCategoryExtensions%3A%20aString%20on%3A%20aStream%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09method%20category%20%3D%20%28%27*%27%2C%20aString%29%20ifTrue%3A%20%5B%0A%09%09%09%09self%20exportMethod%3A%20method%20of%3A%20each%20on%3A%20aStream%5D%5D%5D'),
messageSends: ["do:", unescape("%2C"), "classes", "current", "collect:", "class", "values", "methodDictionary", "ifTrue:", unescape("%3D"), "category", "exportMethod:of:on:"],
referencedClasses: [smalltalk.Smalltalk]
}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Parser');
smalltalk.addMethod(
'_exportDefinitionOf_on_',
smalltalk.method({
selector: 'exportDefinitionOf:on:',
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(unescape("%20subclass%3A%20%23"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("%09instanceVariableNames%3A%20%27")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%09category%3A%20%27"), "__comma", [smalltalk.send(aClass, "_category", [])]), "__comma", [unescape("%27%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);
(($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%20commentStamp%21")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%20commentStamp%21")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);})]);
smalltalk.send(aStream, "_lf", []);
return self;},
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09%22Chunk%20format.%22%0A%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%20subclass%3A%20%23%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%09instanceVariableNames%3A%20%27%27%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%09category%3A%20%27%27%27%2C%20aClass%20category%2C%20%27%27%27%21%27%3B%20lf.%0A%20%09aClass%20comment%20notEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%09nextPutAll%3A%20%27%21%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%20commentStamp%21%27%3Blf%3B%0A%09%09nextPutAll%3A%20%28self%20chunkEscape%3A%20aClass%20comment%29%2C%20%27%21%27%3Blf%5D.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", "classNameFor:", "superclass", unescape("%2C"), "lf", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "chunkEscape:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportMethod_of_on_',
smalltalk.method({
selector: 'exportMethod:of:on:',
category: 'not yet classified',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aMethod, "_source", [])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("%21")]);})(aStream);
return self;},
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09lf%3B%20lf%3B%20nextPutAll%3A%20%28self%20chunkEscape%3A%20aMethod%20source%29%3B%20lf%3B%0A%09%09nextPutAll%3A%20%27%21%27'),
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportMethodsOf_on_',
smalltalk.method({
selector: 'exportMethodsOf:on:',
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
smalltalk.send(aClass, "_protocolsDo_", [(function(category, methods){return (($receiver = smalltalk.send(category, "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);})]);})]);
return self;},
source: unescape('exportMethodsOf%3A%20aClass%20on%3A%20aStream%0A%0A%20%20%20aClass%20protocolsDo%3A%20%5B%3Acategory%20%3Amethods%20%7C%0A%09%28category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20%0A%09%09self%0A%09%09%09exportMethods%3A%20methods%0A%09%09%09category%3A%20category%0A%09%09%09of%3A%20aClass%0A%09%09%09on%3A%20aStream%5D%5D'),
messageSends: ["protocolsDo:", "ifFalse:", "match:", "exportMethods:category:of:on:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportMetaDefinitionOf_on_',
smalltalk.method({
selector: 'exportMetaDefinitionOf:on:',
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%20instanceVariableNames%3A%20%27")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%20instanceVariableNames%3A%20%27")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);})]);
return self;},
source: unescape('exportMetaDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%0A%09aClass%20class%20instanceVariableNames%20isEmpty%20ifFalse%3A%20%5B%0A%09%09aStream%20%0A%09%09%20%20%20%20nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%20class%29%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%20instanceVariableNames%3A%20%27%27%27.%0A%09%09aClass%20class%20instanceVariableNames%20%0A%09%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20each%5D%0A%09%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%27%5D.%0A%09%09aStream%09%0A%09%09%20%20%20%20nextPutAll%3A%20%27%27%27%21%27%3B%20lf%3B%20lf%5D'),
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "classNameFor:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_classNameFor_',
smalltalk.method({
selector: 'classNameFor:',
category: 'not yet classified',
fn: function (aClass){
var self=this;
return (($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);})() : (function(){return (($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);}), (function(){return (($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})]);
return self;},
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27%20class%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_chunkEscape_',
smalltalk.method({
selector: 'chunkEscape:',
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_replace_with_", [unescape("%21"), unescape("%21%21")]), "_trimBoth", []);
return self;},
source: unescape('chunkEscape%3A%20aString%0A%09%22Replace%20all%20occurrences%20of%20%21%20with%20%21%21%20and%20trim%20at%20both%20ends.%22%0A%0A%09%5E%28aString%20replace%3A%20%27%21%27%20with%3A%20%27%21%21%27%29%20trimBoth'),
messageSends: ["trimBoth", "replace:with:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportCategoryExtensions_on_',
smalltalk.method({
selector: 'exportCategoryExtensions:on:',
category: 'not yet classified',
fn: function (aString, aStream){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(each, "_protocolsDo_", [(function(category, methods){return (($receiver = smalltalk.send(category, "__eq", [smalltalk.send(unescape("*"), "__comma", [aString])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, each, aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, each, aStream]);})]);})]);})]);
return self;},
source: unescape('exportCategoryExtensions%3A%20aString%20on%3A%20aStream%0A%09%22We%20need%20to%20override%20this%20one%20too%20since%20we%20need%20to%20group%0A%09all%20methods%20in%20a%20given%20protocol%20under%20a%20leading%20methodsFor%3A%20chunk%0A%09for%20that%20class.%22%0A%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20protocolsDo%3A%20%5B%3Acategory%20%3Amethods%20%7C%0A%09%09%09category%20%3D%20%28%27*%27%2C%20aString%29%20ifTrue%3A%20%5B%0A%09%09%09%09self%20exportMethods%3A%20methods%20category%3A%20category%20of%3A%20each%20on%3A%20aStream%5D%5D%5D'),
messageSends: ["do:", unescape("%2C"), "classes", "current", "collect:", "class", "protocolsDo:", "ifTrue:", unescape("%3D"), "exportMethods:category:of:on:"],
referencedClasses: [smalltalk.Smalltalk]
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
'_exportMethods_category_of_on_',
smalltalk.method({
selector: 'exportMethods:category:of:on:',
category: 'not yet classified',
fn: function (methods, category, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%20methodsFor%3A%20%27"), "__comma", [category]), "__comma", [unescape("%27%21")])]);})(aStream);
smalltalk.send(methods, "_do_", [(function(each){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%20%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
source: unescape('exportMethods%3A%20methods%20category%3A%20category%20of%3A%20aClass%20on%3A%20aStream%0A%0A%09aStream%0A%09%09nextPutAll%3A%20%27%21%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%20methodsFor%3A%20%27%27%27%2C%20category%2C%20%27%27%27%21%27.%0A%20%20%20%20%09methods%20do%3A%20%5B%3Aeach%20%7C%0A%09%09self%20exportMethod%3A%20each%20of%3A%20aClass%20on%3A%20aStream%5D.%0A%09aStream%20nextPutAll%3A%20%27%20%21%27%3B%20lf%3B%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "do:", "exportMethod:of:on:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Parser');
smalltalk.addMethod(
'_exportDefinitionOf_on_',
smalltalk.method({
selector: 'exportDefinitionOf:on:',
category: 'private',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addClass%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%27%2C%20")])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D%2C%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", [unescape("%27")])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);})(aStream);
smalltalk.send(aStream, "_lf", []);
return self;},
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addClass%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%27%27%2C%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%2C%20%5B%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%5D%2C%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aClass%20category%2C%20%27%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%29%3B%27.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "lf"],
referencedClasses: []
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
'_exportMethod_of_on_',
smalltalk.method({
selector: 'exportMethod:of:on:',
category: 'private',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addMethod%28")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_selector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%2C")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.addMethod%28%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27%27%27%27%2C%20aMethod%20selector%20asSelector%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.method%28%7B%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27selector%3A%20%27%27%27%2C%20aMethod%20selector%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27fn%3A%20%27%2C%20aMethod%20fn%20compiledSource%3Blf%3B%0A%09%09nextPutAll%3A%20%27%7D%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%29%3B%27%3Blf%3Blf'),
messageSends: ["nextPutAll:", "lf", unescape("%2C"), "asSelector", "selector", "compiledSource", "fn", "classNameFor:"],
referencedClasses: []
}),
smalltalk.StrippedExporter);



