smalltalk.addClass('PPParser', smalltalk.Object, ['memo'], 'Parser');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
self['@memo']=smalltalk.Dictionary._new();
return self;},
source: unescape('initialize%0A%09memo%20%3A%3D%20Dictionary%20new%0A')}),
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
source: unescape('memo%0A%09%5Ememo%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_onFailure_',
smalltalk.method({
selector: 'onFailure:',
category: 'error handling',
fn: function (aBlock){
var self=this;
return smalltalk.PPFailureActionParser._on_block_(self,aBlock);
return self;},
source: unescape('onFailure%3A%20aBlock%0A%09%5EPPFailureActionParser%20on%3A%20self%20block%3A%20aBlock%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_flatten',
smalltalk.method({
selector: 'flatten',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.PPFlattenParser._on_(self);
return self;},
source: unescape('flatten%0A%09%5EPPFlattenParser%20on%3A%20self%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_withSource',
smalltalk.method({
selector: 'withSource',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.PPSourceParser._on_(self);
return self;},
source: unescape('withSource%0A%09%5EPPSourceParser%20on%3A%20self%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'__eq_eq_gt',
smalltalk.method({
selector: '==>',
category: 'operations',
fn: function (aBlock){
var self=this;
return smalltalk.PPActionParser._on_block_(self,aBlock);
return self;},
source: unescape('%3D%3D%3E%20aBlock%0A%09%5EPPActionParser%20on%3A%20self%20block%3A%20aBlock%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'operations',
fn: function (aParser){
var self=this;
return smalltalk.PPSequenceParser._with_with_(self,aParser);
return self;},
source: unescape('%2C%20aParser%0A%09%5EPPSequenceParser%20with%3A%20self%20with%3A%20aParser%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
category: 'operations',
fn: function (aParser){
var self=this;
return smalltalk.PPChoiceParser._with_with_(self,aParser);
return self;},
source: unescape('/%20aParser%0A%09%5EPPChoiceParser%20with%3A%20self%20with%3A%20aParser%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_plus',
smalltalk.method({
selector: 'plus',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.PPRepeatingParser._on_min_(self,(1));
return self;},
source: unescape('plus%0A%09%5EPPRepeatingParser%20on%3A%20self%20min%3A%201%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_star',
smalltalk.method({
selector: 'star',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.PPRepeatingParser._on_min_(self,(0));
return self;},
source: unescape('star%0A%09%5EPPRepeatingParser%20on%3A%20self%20min%3A%200%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_not',
smalltalk.method({
selector: 'not',
category: 'operations',
fn: function (){
var self=this;
return smalltalk.PPNotParser._on_(self);
return self;},
source: unescape('not%0A%09%5EPPNotParser%20on%3A%20self%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_optional',
smalltalk.method({
selector: 'optional',
category: 'operations',
fn: function (){
var self=this;
return self.__slash(smalltalk.PPEpsilonParser._new());
return self;},
source: unescape('optional%0A%09%5Eself%20/%20PPEpsilonParser%20new%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_memoizedParse_',
smalltalk.method({
selector: 'memoizedParse:',
category: 'operations',
fn: function (aStream){
var self=this;
var start=nil;
var end=nil;
var node=nil;
start=aStream._position();
return self._memo()._at_ifPresent_ifAbsent_(start,(function(value){aStream._position_(self._memo()._at_(start)._second());return value._first();}),(function(){node=self._parse_(aStream);end=aStream._position();self._memo()._at_put_(start,smalltalk.Array._with_with_(node,end));return node;}));
return self;},
source: unescape('memoizedParse%3A%20aStream%0A%09%7C%20start%20end%20node%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09%5Eself%20memo%20at%3A%20start%20%0A%09%20%20%20%20ifPresent%3A%20%5B%3Avalue%20%7C%0A%09%09aStream%20position%3A%20%28self%20memo%20at%3A%20start%29%20second.%0A%09%09value%20first%5D%0A%09%20%20%20%20ifAbsent%3A%20%5B%0A%09%09node%20%3A%3D%20self%20parse%3A%20aStream.%0A%09%09end%20%3A%3D%20aStream%20position.%0A%09%09self%20memo%20at%3A%20start%20put%3A%20%28Array%20with%3A%20node%20with%3A%20end%29.%0A%09%09node%5D%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
self._subclassResponsibility();
return self;},
source: unescape('parse%3A%20aStream%0A%09self%20subclassResponsibility%0A')}),
smalltalk.PPParser);

smalltalk.addMethod(
'_parseAll_',
smalltalk.method({
selector: 'parseAll:',
category: 'parsing',
fn: function (aStream){
var self=this;
var result=nil;
result=smalltalk.PPSequenceParser._with_with_(self,smalltalk.PPEOFParser._new())._memoizedParse_(aStream);
return result._isParseFailure()._ifTrue_ifFalse_((function(){return self._error_(result._messageFor_(aStream._contents()));}),(function(){return result._first();}));
return self;},
source: unescape('parseAll%3A%20aStream%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20%28PPSequenceParser%20with%3A%20self%20with%3A%20PPEOFParser%20new%29%20memoizedParse%3A%20aStream.%0A%09%5Eresult%20isParseFailure%20%0A%09%20%20%20%20ifTrue%3A%20%5Bself%20error%3A%20%28result%20messageFor%3A%20aStream%20contents%29%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bresult%20first%5D%0A')}),
smalltalk.PPParser);



smalltalk.addClass('PPEOFParser', smalltalk.PPParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return aStream._atEnd()._ifFalse_ifTrue_((function(){return smalltalk.PPFailure._new()._reason_at_("EOF expected",aStream._position());}),(function(){return nil;}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%5EaStream%20atEnd%20%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09PPFailure%20new%20reason%3A%20%27EOF%20expected%27%20at%3A%20aStream%20position%5D%0A%09%20%20%20%20ifTrue%3A%20%5Bnil%5D%0A')}),
smalltalk.PPEOFParser);



smalltalk.addClass('PPAnyParser', smalltalk.PPParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return aStream._atEnd()._ifTrue_ifFalse_((function(){return smalltalk.PPFailure._new()._reason_at_("did not expect EOF",aStream._position());}),(function(){return aStream._next();}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%5EaStream%20atEnd%0A%09%20%20%20%20ifTrue%3A%20%5BPPFailure%20new%0A%09%09%09%20reason%3A%20%27did%20not%20expect%20EOF%27%20at%3A%20aStream%20position%5D%0A%09%20%20%20%20ifFalse%3A%20%5BaStream%20next%5D%0A')}),
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
source: unescape('parse%3A%20aStream%0A%09%5Enil%0A')}),
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
source: unescape('string%0A%09%5Estring%0A')}),
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
source: unescape('string%3A%20aString%0A%09string%20%3A%3D%20aString%0A')}),
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
position=aStream._position();
result=aStream._next_(self._string()._size());
return result.__eq(self._string())._ifTrue_ifFalse_((function(){return result;}),(function(){aStream._position_(position);return (function($rec){$rec._reason_("Expected ".__comma(self._string()).__comma(" but got ").__comma(result._at_(position)._printString()));return $rec._yourself();})(smalltalk.PPFailure._new());}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20position%20result%20%7C%0A%09position%20%3A%3D%20aStream%20position.%0A%09result%20%3A%3D%20aStream%20next%3A%20self%20string%20size.%0A%09%5Eresult%20%3D%20self%20string%0A%09%20%20%20%20ifTrue%3A%20%5Bresult%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aStream%20position%3A%20position.%0A%09%09PPFailure%20new%20reason%3A%20%27Expected%20%27%2C%20self%20string%2C%20%27%20but%20got%20%27%2C%20%28result%20at%3A%20position%29%20printString%3B%20yourself%5D%0A')}),
smalltalk.PPStringParser);



smalltalk.addClass('PPCharacterParser', smalltalk.PPParser, ['regexp'], 'Parser');
smalltalk.addMethod(
'_string_',
smalltalk.method({
selector: 'string:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@regexp']=smalltalk.RegularExpression._fromString_(unescape("%5B").__comma(aString).__comma(unescape("%5D")));
return self;},
source: unescape('string%3A%20aString%0A%09regexp%20%3A%3D%20RegularExpression%20fromString%3A%20%27%5B%27%2C%20aString%2C%20%27%5D%27%0A')}),
smalltalk.PPCharacterParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return aStream._peek()._notNil()._and_((function(){return self._match_(aStream._peek());}))._ifTrue_ifFalse_((function(){return aStream._next();}),(function(){return smalltalk.PPFailure._new()._reason_at_("Could not match",aStream._position());}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%5E%28aStream%20peek%20notNil%20and%3A%20%5Bself%20match%3A%20aStream%20peek%5D%29%0A%09%20%20%20%20ifTrue%3A%20%5BaStream%20next%5D%0A%09%20%20%20%20ifFalse%3A%20%5BPPFailure%20new%20reason%3A%20%27Could%20not%20match%27%20at%3A%20aStream%20position%5D%0A')}),
smalltalk.PPCharacterParser);

smalltalk.addMethod(
'_match_',
smalltalk.method({
selector: 'match:',
category: 'private',
fn: function (aString){
var self=this;
return aString._match_(self['@regexp']);
return self;},
source: unescape('match%3A%20aString%0A%09%5EaString%20match%3A%20regexp%0A')}),
smalltalk.PPCharacterParser);



smalltalk.addClass('PPListParser', smalltalk.PPParser, ['parsers'], 'Parser');
smalltalk.addMethod(
'_parsers',
smalltalk.method({
selector: 'parsers',
category: 'accessing',
fn: function (){
var self=this;
return self['@parsers']._ifNil_((function(){return [];}));
return self;},
source: unescape('parsers%0A%09%5Eparsers%20ifNil%3A%20%5B%23%28%29%5D%0A')}),
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
source: unescape('parsers%3A%20aCollection%0A%09parsers%20%3A%3D%20aCollection%0A')}),
smalltalk.PPListParser);

smalltalk.addMethod(
'_copyWith_',
smalltalk.method({
selector: 'copyWith:',
category: 'copying',
fn: function (aParser){
var self=this;
return self._class()._withAll_(self._parsers()._copyWith_(aParser));
return self;},
source: unescape('copyWith%3A%20aParser%0A%09%5Eself%20class%20withAll%3A%20%28self%20parsers%20copyWith%3A%20aParser%29%0A')}),
smalltalk.PPListParser);


smalltalk.addMethod(
'_withAll_',
smalltalk.method({
selector: 'withAll:',
category: 'instance creation',
fn: function (aCollection){
var self=this;
return (function($rec){$rec._parsers_(aCollection);return $rec._yourself();})(self._new());
return self;},
source: unescape('withAll%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%0A%09%09parsers%3A%20aCollection%3B%0A%09%09yourself%0A')}),
smalltalk.PPListParser.klass);

smalltalk.addMethod(
'_with_with_',
smalltalk.method({
selector: 'with:with:',
category: 'instance creation',
fn: function (aParser, anotherParser){
var self=this;
return self._withAll_(smalltalk.Array._with_with_(aParser,anotherParser));
return self;},
source: unescape('with%3A%20aParser%20with%3A%20anotherParser%0A%09%20%20%20%20%5Eself%20withAll%3A%20%28Array%20with%3A%20aParser%20with%3A%20anotherParser%29%0A')}),
smalltalk.PPListParser.klass);


smalltalk.addClass('PPSequenceParser', smalltalk.PPListParser, [], 'Parser');
smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'copying',
fn: function (aRule){
var self=this;
return self._copyWith_(aRule);
return self;},
source: unescape('%2C%20aRule%0A%09%5Eself%20copyWith%3A%20aRule%0A')}),
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
start=aStream._position();
elements=[];
self._parsers()._detect_ifNone_((function(each){element=each._memoizedParse_(aStream);elements._add_(element);return element._isParseFailure();}),(function(){return nil;}));
return element._isParseFailure()._ifFalse_ifTrue_((function(){return elements;}),(function(){aStream._position_(start);return element;}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20start%20elements%20element%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09elements%20%3A%3D%20%23%28%29.%0A%09self%20parsers%20%0A%09%20%20%20%20detect%3A%20%5B%3Aeach%20%7C%0A%09%09element%20%3A%3D%20each%20memoizedParse%3A%20aStream.%0A%09%09elements%20add%3A%20element.%0A%09%09element%20isParseFailure%5D%20%0A%09%20%20%20%20ifNone%3A%20%5B%5D.%0A%09%5Eelement%20isParseFailure%0A%09%20%20%20%20ifFalse%3A%20%5Belements%5D%0A%09%20%20%20%20ifTrue%3A%20%5BaStream%20position%3A%20start.%20element%5D%0A')}),
smalltalk.PPSequenceParser);



smalltalk.addClass('PPChoiceParser', smalltalk.PPListParser, [], 'Parser');
smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
category: 'copying',
fn: function (aRule){
var self=this;
return self._copyWith_(aRule);
return self;},
source: unescape('/%20aRule%0A%09%5Eself%20copyWith%3A%20aRule%0A')}),
smalltalk.PPChoiceParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var result=nil;
self._parsers()._detect_ifNone_((function(each){result=each._memoizedParse_(aStream);return result._isParseFailure()._not();}),(function(){return nil;}));
return result;
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20result%20%7C%0A%09self%20parsers%0A%20%20%20%20%09%20%20%20%20detect%3A%20%5B%3Aeach%20%7C%0A%09%09result%20%3A%3D%20each%20memoizedParse%3A%20aStream.%0A%09%09result%20isParseFailure%20not%5D%0A%09%20%20%20%20ifNone%3A%20%5B%5D.%0A%09%5Eresult%0A')}),
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
source: unescape('parser%0A%09%5Eparser%0A')}),
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
source: unescape('parser%3A%20aParser%0A%09parser%20%3A%3D%20aParser%0A')}),
smalltalk.PPDelegateParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return self._parser()._memoizedParse_(aStream);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5Eself%20parser%20memoizedParse%3A%20aStream%0A')}),
smalltalk.PPDelegateParser);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
category: 'instance creation',
fn: function (aParser){
var self=this;
return (function($rec){$rec._parser_(aParser);return $rec._yourself();})(self._new());
return self;},
source: unescape('on%3A%20aParser%0A%09%20%20%20%20%5Eself%20new%0A%09%09parser%3A%20aParser%3B%0A%09%09yourself%0A')}),
smalltalk.PPDelegateParser.klass);


smalltalk.addClass('PPAndParser', smalltalk.PPDelegateParser, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return self._basicParse_(aStream);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5Eself%20basicParse%3A%20aStream%0A')}),
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
position=aStream._position();
element=self._parser()._memoizedParse_(aStream);
aStream._position_(position);
return element;
return self;},
source: unescape('basicParse%3A%20aStream%0A%09%7C%20element%20position%20%7C%0A%09position%20%3A%3D%20aStream%20position.%0A%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09aStream%20position%3A%20position.%0A%09%5Eelement%0A')}),
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
element=self._basicParse_(aStream);
return element._isParseFailure()._ifTrue_ifFalse_((function(){return nil;}),(function(){return smalltalk.PPFailure._reason_at_(element,aStream._position());}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20element%20%7C%0A%09element%20%3A%3D%20self%20basicParse%3A%20aStream.%0A%09%5Eelement%20isParseFailure%20%0A%09%20%20%20%20ifTrue%3A%20%5Bnil%5D%0A%09%20%20%20%20ifFalse%3A%20%5BPPFailure%20reason%3A%20element%20at%3A%20aStream%20position%5D%0A')}),
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
source: unescape('block%0A%09%5Eblock%0A')}),
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
source: unescape('block%3A%20aBlock%0A%09block%20%3A%3D%20aBlock%0A')}),
smalltalk.PPActionParser);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
var element=nil;
element=self._parser()._memoizedParse_(aStream);
return element._isParseFailure()._ifFalse_ifTrue_((function(){return self._block()._value_(element);}),(function(){return element;}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20element%20%7C%0A%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%5Eelement%20isParseFailure%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20block%20value%3A%20element%5D%0A%09%20%20%20%20ifTrue%3A%20%5Belement%5D%0A')}),
smalltalk.PPActionParser);


smalltalk.addMethod(
'_on_block_',
smalltalk.method({
selector: 'on:block:',
category: 'instance creation',
fn: function (aParser, aBlock){
var self=this;
return (function($rec){$rec._parser_(aParser);$rec._block_(aBlock);return $rec._yourself();})(self._new());
return self;},
source: unescape('on%3A%20aParser%20block%3A%20aBlock%0A%09%20%20%20%20%5Eself%20new%0A%09%09parser%3A%20aParser%3B%0A%09%09block%3A%20aBlock%3B%0A%09%09yourself%0A')}),
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
start=aStream._position();
element=self._parser()._memoizedParse_(aStream);
return element._isParseFailure()._ifTrue_ifFalse_((function(){return element;}),(function(){return aStream._collection()._copyFrom_to_(start.__plus((1)),aStream._position());}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20start%20element%20stop%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%5Eelement%20isParseFailure%0A%09%20%20%20%20ifTrue%3A%20%5Belement%5D%0A%09%20%20%20%20ifFalse%3A%20%5BaStream%20collection%20%0A%09%09copyFrom%3A%20start%20+%201%20%0A%09%09to%3A%20aStream%20position%5D%0A')}),
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
start=aStream._position();
element=self._parser()._memoizedParse_(aStream);
return element._isParseFailure()._ifTrue_ifFalse_((function(){return element;}),(function(){result=aStream._collection()._copyFrom_to_(start.__plus((1)),aStream._position());return smalltalk.Array._with_with_(element,result);}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20start%20element%20stop%20result%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%5Eelement%20isParseFailure%0A%09%09ifTrue%3A%20%5Belement%5D%0A%09%09ifFalse%3A%20%5Bresult%20%3A%3D%20aStream%20collection%20copyFrom%3A%20start%20+%201%20to%3A%20aStream%20position.%0A%09%09%09Array%20with%3A%20element%20with%3A%20result%5D.%0A')}),
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
source: unescape('min%0A%09%5Emin%0A')}),
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
source: unescape('min%3A%20aNumber%0A%09min%20%3A%3D%20aNumber%0A')}),
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
start=aStream._position();
elements=smalltalk.Array._new();
(function(){return elements._size().__lt(self._min())._and_((function(){return failure._isNil();}));})._whileTrue_((function(){element=self._parser()._memoizedParse_(aStream);return element._isParseFailure()._ifFalse_ifTrue_((function(){return elements._addLast_(element);}),(function(){aStream._position_(start);return failure=element;}));}));
return failure._ifNil_ifNotNil_((function(){(function(){return failure._isNil();})._whileTrue_((function(){element=self._parser()._memoizedParse_(aStream);return element._isParseFailure()._ifTrue_ifFalse_((function(){return failure=element;}),(function(){return elements._addLast_(element);}));}));return elements;}),(function(){return failure;}));
return self;},
source: unescape('parse%3A%20aStream%0A%09%7C%20start%20element%20elements%20failure%20%7C%0A%09start%20%3A%3D%20aStream%20position.%0A%09elements%20%3A%3D%20Array%20new.%0A%09%5B%28elements%20size%20%3C%20self%20min%29%20and%3A%20%5Bfailure%20isNil%5D%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%20%20%20%20element%20isParseFailure%0A%09%09%09ifFalse%3A%20%5Belements%20addLast%3A%20element%5D%0A%09%09%09ifTrue%3A%20%5BaStream%20position%3A%20start.%0A%09%09%09%09%20failure%20%3A%3D%20element%5D%5D.%0A%09%5Efailure%20ifNil%3A%20%5B%0A%09%20%20%20%20%5Bfailure%20isNil%5D%20whileTrue%3A%20%5B%0A%09%09%09element%20%3A%3D%20self%20parser%20memoizedParse%3A%20aStream.%0A%09%20%09%09element%20isParseFailure%0A%09%09%09%09ifTrue%3A%20%5Bfailure%20%3A%3D%20element%5D%0A%09%09%09%09ifFalse%3A%20%5Belements%20addLast%3A%20element%5D%5D.%0A%09%09%09%09elements%5D%0A%09%09ifNotNil%3A%20%5Bfailure%5D.%0A')}),
smalltalk.PPRepeatingParser);


smalltalk.addMethod(
'_on_min_',
smalltalk.method({
selector: 'on:min:',
category: 'instance creation',
fn: function (aParser, aNumber){
var self=this;
return (function($rec){$rec._parser_(aParser);$rec._min_(aNumber);return $rec._yourself();})(self._new());
return self;},
source: unescape('on%3A%20aParser%20min%3A%20aNumber%0A%09%20%20%20%20%5Eself%20new%0A%09%09parser%3A%20aParser%3B%0A%09%09min%3A%20aNumber%3B%0A%09%09yourself%0A')}),
smalltalk.PPRepeatingParser.klass);


smalltalk.addClass('PPFailure', smalltalk.Object, ['position', 'reason'], 'Parser');
smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
category: 'accessing',
fn: function (){
var self=this;
return self['@position']._ifNil_((function(){return (0);}));
return self;},
source: unescape('position%0A%09%5Eposition%20ifNil%3A%20%5B0%5D%0A')}),
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
source: unescape('position%3A%20aNumber%0A%09position%20%3A%3D%20aNumber%0A')}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_reason',
smalltalk.method({
selector: 'reason',
category: 'accessing',
fn: function (){
var self=this;
return self['@reason']._ifNil_((function(){return "";}));
return self;},
source: unescape('reason%0A%09%5Ereason%20ifNil%3A%20%5B%27%27%5D%0A')}),
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
source: unescape('reason%3A%20aString%0A%09reason%20%3A%3D%20aString%0A')}),
smalltalk.PPFailure);

smalltalk.addMethod(
'_reason_at_',
smalltalk.method({
selector: 'reason:at:',
category: 'accessing',
fn: function (aString, anInteger){
var self=this;
(function($rec){$rec._reason_(aString);return $rec._position_(anInteger);})(self);
return self;},
source: unescape('reason%3A%20aString%20at%3A%20anInteger%0A%09self%20%0A%09%20%20%20%20reason%3A%20aString%3B%20%0A%09%20%20%20%20position%3A%20anInteger%0A')}),
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
source: unescape('isParseFailure%0A%09%5Etrue%0A')}),
smalltalk.PPFailure);


smalltalk.addMethod(
'_reason_at_',
smalltalk.method({
selector: 'reason:at:',
category: 'instance creation',
fn: function (aString, anInteger){
var self=this;
return (function($rec){$rec._reason_at_(aString,anInteger);return $rec._yourself();})(self._new());
return self;},
source: unescape('reason%3A%20aString%20at%3A%20anInteger%0A%09%20%20%20%20%5Eself%20new%0A%09%09reason%3A%20aString%20at%3A%20anInteger%3B%0A%09%09yourself%0A')}),
smalltalk.PPFailure.klass);


smalltalk.addClass('SmalltalkParser', smalltalk.Object, [], 'Parser');
smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'parsing',
fn: function (aStream){
var self=this;
return self._parser()._parse_(aStream);
return self;},
source: unescape('parse%3A%20aStream%0A%09%5Eself%20parser%20parse%3A%20aStream%0A')}),
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
separator=smalltalk.String._cr().__comma(smalltalk.String._space()).__comma(smalltalk.String._lf()).__comma(smalltalk.String._tab())._asChoiceParser();
comment=unescape("%22")._asCharacterParser().__comma(unescape("%22")._asParser()._not().__comma(smalltalk.PPAnyParser._new())._star()).__comma(unescape("%22")._asCharacterParser())._flatten();
ws=separator.__slash(comment)._star();
identifier=unescape("a-z")._asCharacterParser().__comma(unescape("a-zA-Z0-9")._asCharacterParser()._star())._flatten();
keyword=identifier.__comma(":"._asParser())._flatten();
className=unescape("A-Z")._asCharacterParser().__comma(unescape("a-zA-Z0-9")._asCharacterParser()._star())._flatten();
string=unescape("%27")._asParser().__comma(unescape("%27%27")._asParser().__slash(unescape("%27")._asParser()._not().__comma(smalltalk.PPAnyParser._new()))._star()._flatten()).__comma(unescape("%27")._asParser()).__eq_eq_gt((function(node){return smalltalk.ValueNode._new()._value_(node._at_((2))._replace_with_(unescape("%27%27"),unescape("%27")));}));
symbol=unescape("%23")._asParser().__comma(unescape("a-zA-Z0-9")._asCharacterParser()._plus()._flatten()).__eq_eq_gt((function(node){return smalltalk.ValueNode._new()._value_(node._second());}));
number=unescape("0-9")._asCharacterParser()._plus().__comma("."._asParser().__comma(unescape("0-9")._asCharacterParser()._plus())._optional())._flatten().__eq_eq_gt((function(node){return smalltalk.ValueNode._new()._value_(node._asNumber());}));
literal=smalltalk.PPDelegateParser._new();
literalArray=unescape("%23%28")._asParser().__comma(ws.__comma(literal).__comma(ws)._star()).__comma(unescape("%29")._asParser()).__eq_eq_gt((function(node){return smalltalk.ValueNode._new()._value_(smalltalk.Array._withAll_(node._second()._collect_((function(each){return each._second()._value();}))));}));
variable=identifier.__eq_eq_gt((function(token){return smalltalk.VariableNode._new()._value_(token);}));
classReference=className.__eq_eq_gt((function(token){return smalltalk.ClassReferenceNode._new()._value_(token);}));
reference=variable.__slash(classReference);
binarySelector=unescape("+*/%3D%3E%3C%2C@%25%7E-")._asCharacterParser()._plus()._flatten();
unarySelector=identifier;
keywordPattern=ws.__comma(keyword).__comma(ws).__comma(identifier)._plus().__eq_eq_gt((function(nodes){return smalltalk.Array._with_with_(nodes._collect_((function(each){return each._at_((2));}))._join_(""),nodes._collect_((function(each){return each._at_((4));})));}));
binaryPattern=ws.__comma(binarySelector).__comma(ws).__comma(identifier).__eq_eq_gt((function(node){return smalltalk.Array._with_with_(node._second(),smalltalk.Array._with_(node._fourth()));}));
unaryPattern=ws.__comma(unarySelector).__eq_eq_gt((function(node){return smalltalk.Array._with_with_(node._second(),smalltalk.Array._new());}));
expression=smalltalk.PPDelegateParser._new();
expressions=expression.__comma(ws.__comma("."._asParser()).__comma(ws).__comma(expression).__eq_eq_gt((function(node){return node._fourth();}))._star()).__eq_eq_gt((function(node){var result=nil;
result=smalltalk.Array._with_(node._first());node._second()._do_((function(each){return result._add_(each);}));return result;}));
assignment=reference.__comma(ws).__comma(unescape("%3A%3D")._asParser()).__comma(ws).__comma(expression).__eq_eq_gt((function(node){return (function($rec){$rec._left_(node._first());return $rec._right_(node._at_((5)));})(smalltalk.AssignmentNode._new());}));
ret=unescape("%5E")._asParser().__comma(ws).__comma(expression).__comma(ws).__comma("."._asParser()._optional()).__eq_eq_gt((function(node){return (function($rec){$rec._addNode_(node._third());return $rec._yourself();})(smalltalk.ReturnNode._new());}));
temps=unescape("%7C")._asParser().__comma(ws.__comma(identifier)._star()).__comma(ws).__comma(unescape("%7C")._asParser()).__eq_eq_gt((function(node){return node._second()._collect_((function(each){return each._second();}));}));
blockParamList=":"._asParser().__comma(identifier).__comma(ws)._plus().__comma(unescape("%7C")._asParser()).__eq_eq_gt((function(node){return node._first()._collect_((function(each){return each._second();}));}));
subexpression=unescape("%28")._asParser().__comma(ws).__comma(expression).__comma(ws).__comma(unescape("%29")._asParser()).__eq_eq_gt((function(node){return node._third();}));
statements=ret.__eq_eq_gt((function(node){return smalltalk.Array._with_(node);})).__slash(expressions.__comma(ws).__comma("."._asParser()).__comma(ws).__comma(ret).__eq_eq_gt((function(node){return (function($rec){$rec._add_(node._at_((5)));return $rec._yourself();})(node._first());}))).__slash(expressions.__comma("."._asParser()._optional()).__eq_eq_gt((function(node){return node._first();})));
sequence=temps._optional().__comma(ws).__comma(statements._optional()).__comma(ws).__eq_eq_gt((function(node){return (function($rec){$rec._temps_(node._first());$rec._nodes_(node._third());return $rec._yourself();})(smalltalk.SequenceNode._new());}));
block=unescape("%5B")._asParser().__comma(ws).__comma(blockParamList._optional()).__comma(ws).__comma(sequence._optional()).__comma(ws).__comma(unescape("%5D")._asParser()).__eq_eq_gt((function(node){return (function($rec){$rec._parameters_(node._third());return $rec._addNode_(node._at_((5))._asBlockSequenceNode());})(smalltalk.BlockNode._new());}));
operand=literal.__slash(reference).__slash(subexpression);
literal._parser_(number.__slash(string).__slash(literalArray).__slash(symbol).__slash(block));
unaryMessage=ws.__comma(unarySelector).__comma(":"._asParser()._not()).__eq_eq_gt((function(node){return smalltalk.SendNode._new()._selector_(node._second());}));
unaryTail=smalltalk.PPDelegateParser._new();
unaryTail._parser_(unaryMessage.__comma(unaryTail._optional()).__eq_eq_gt((function(node){return node._second()._ifNil_ifNotNil_((function(){return node._first();}),(function(){return node._second()._valueForReceiver_(node._first());}));})));
unarySend=operand.__comma(unaryTail._optional()).__eq_eq_gt((function(node){return node._second()._ifNil_ifNotNil_((function(){return node._first();}),(function(){return node._second()._valueForReceiver_(node._first());}));}));
binaryMessage=ws.__comma(binarySelector).__comma(ws).__comma(unarySend.__slash(operand)).__eq_eq_gt((function(node){return (function($rec){$rec._selector_(node._second());return $rec._arguments_(smalltalk.Array._with_(node._fourth()));})(smalltalk.SendNode._new());}));
binaryTail=smalltalk.PPDelegateParser._new();
binaryTail._parser_(binaryMessage.__comma(binaryTail._optional()).__eq_eq_gt((function(node){return node._second()._ifNil_ifNotNil_((function(){return node._first();}),(function(){return node._second()._valueForReceiver_(node._first());}));})));
binarySend=unarySend.__comma(binaryTail._optional()).__eq_eq_gt((function(node){return node._second()._ifNil_ifNotNil_((function(){return node._first();}),(function(){return node._second()._valueForReceiver_(node._first());}));}));
keywordPair=keyword.__comma(ws).__comma(binarySend);
keywordMessage=ws.__comma(keywordPair)._plus().__eq_eq_gt((function(nodes){return (function($rec){$rec._selector_(nodes._collect_((function(each){return each._second()._first();}))._join_(""));return $rec._arguments_(nodes._collect_((function(each){return each._second()._third();})));})(smalltalk.SendNode._new());}));
keywordSend=binarySend.__comma(keywordMessage).__eq_eq_gt((function(node){return node._second()._valueForReceiver_(node._first());}));
message=binaryMessage.__slash(unaryMessage).__slash(keywordMessage);
cascade=keywordSend.__slash(binarySend).__comma(ws.__comma(unescape("%3B")._asParser()).__comma(message)._plus()).__eq_eq_gt((function(node){return node._first()._cascadeNodeWithMessages_(node._second()._collect_((function(each){return each._third();})));}));
jsStatement=unescape("%7B")._asParser().__comma(ws).__comma(string).__comma(ws).__comma(unescape("%7D")._asParser()).__eq_eq_gt((function(node){return (function($rec){$rec._source_(node._third());return $rec._yourself();})(smalltalk.JSStatementNode._new());}));
expression._parser_(assignment.__slash(cascade).__slash(keywordSend).__slash(binarySend).__slash(jsStatement));
method=ws.__comma(keywordPattern.__slash(binaryPattern).__slash(unaryPattern)).__comma(ws).__comma(sequence._optional()).__comma(ws)._withSource().__eq_eq_gt((function(node){return (function($rec){$rec._selector_(node._first()._second()._first());$rec._arguments_(node._first()._second()._second());$rec._addNode_(node._first()._fourth());$rec._source_(node._second());return $rec._yourself();})(smalltalk.MethodNode._new());}));
return method.__comma(smalltalk.PPEOFParser._new()).__eq_eq_gt((function(node){return node._first();}));
return self;},
source: unescape('parser%0A%09%7C%20method%20expression%20separator%20comment%20ws%20identifier%20keyword%20className%20string%20symbol%20number%20literalArray%20variable%20reference%20classReference%20literal%20ret%20methodParser%20expressionParser%20keyword%20unarySelector%20binarySelector%20keywordPattern%20unaryPattern%20binaryPattern%20assignment%20temps%20blockParamList%20block%20expression%20expressions%20subexpression%20statements%20sequence%20operand%20unaryMessage%20unarySend%20unaryTail%20binaryMessage%20binarySend%20binaryTail%20keywordMessage%20keywordSend%20keywordPair%20cascade%20message%20jsStatement%20%7C%0A%09%0A%09separator%20%3A%3D%20%28String%20cr%2C%20String%20space%2C%20String%20lf%2C%20String%20tab%29%20asChoiceParser.%0A%09comment%20%3A%3D%20%28%27%22%27%20asCharacterParser%2C%20%28%27%22%27%20asParser%20not%2C%20PPAnyParser%20new%29%20star%2C%20%27%22%27%20asCharacterParser%29%20flatten.%0A%0A%09ws%20%3A%3D%20%28separator%20/%20comment%29%20star.%0A%09%0A%09identifier%20%3A%3D%20%28%27a-z%27%20asCharacterParser%2C%20%27a-zA-Z0-9%27%20asCharacterParser%20star%29%20flatten.%0A%0A%09keyword%20%3A%3D%20%28identifier%2C%20%27%3A%27%20asParser%29%20flatten.%0A%0A%09className%20%3A%3D%20%28%27A-Z%27%20asCharacterParser%2C%20%27a-zA-Z0-9%27%20asCharacterParser%20star%29%20flatten.%0A%0A%09string%20%3A%3D%20%27%27%27%27%20asParser%2C%20%28%27%27%27%27%27%27%20asParser%20/%20%28%27%27%27%27%20asParser%20not%2C%20PPAnyParser%20new%29%29%20star%20flatten%2C%20%27%27%27%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20ValueNode%20new%20value%3A%20%28%28node%20at%3A%202%29%20replace%3A%20%27%27%27%27%27%27%20with%3A%20%27%27%27%27%29%5D.%0A%0A%09symbol%20%3A%3D%20%27%23%27%20asParser%2C%20%27a-zA-Z0-9%27%20asCharacterParser%20plus%20flatten%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20ValueNode%20new%20value%3A%20node%20second%5D.%0A%0A%09number%20%3A%3D%20%28%270-9%27%20asCharacterParser%20plus%2C%20%28%27.%27%20asParser%2C%20%270-9%27%20asCharacterParser%20plus%29%20optional%29%20flatten%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20ValueNode%20new%20value%3A%20node%20asNumber%5D.%0A%0A%09literal%20%3A%3D%20PPDelegateParser%20new.%0A%0A%09literalArray%20%3A%3D%20%27%23%28%27%20asParser%2C%20%28ws%2C%20literal%2C%20ws%29%20star%2C%20%27%29%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20ValueNode%20new%20value%3A%20%28Array%20withAll%3A%20%28node%20second%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%20value%5D%29%29%5D.%0A%0A%09variable%20%3A%3D%20identifier%20%3D%3D%3E%20%5B%3Atoken%20%7C%20VariableNode%20new%20value%3A%20token%5D.%0A%0A%09classReference%20%3A%3D%20className%20%3D%3D%3E%20%5B%3Atoken%20%7C%20ClassReferenceNode%20new%20value%3A%20token%5D.%0A%0A%09reference%20%3A%3D%20variable%20/%20classReference.%0A%0A%09binarySelector%20%3A%3D%20%27+*/%3D%3E%3C%2C@%25%7E-%27%20asCharacterParser%20plus%20flatten.%0A%0A%09unarySelector%20%3A%3D%20identifier.%0A%0A%09keywordPattern%20%3A%3D%20%28ws%2C%20keyword%2C%20ws%2C%20identifier%29%20plus%0A%09%09%3D%3D%3E%20%5B%3Anodes%20%7C%20Array%0A%09%09%09%09%20%20with%3A%20%28%28nodes%20collect%3A%20%5B%3Aeach%20%7C%20each%20at%3A%202%5D%29%20join%3A%20%27%27%29%0A%09%09%09%09%20%20with%3A%20%28nodes%20collect%3A%20%5B%3Aeach%20%7C%20each%20at%3A%204%5D%29%5D.%0A%0A%09binaryPattern%20%3A%3D%20ws%2C%20binarySelector%2C%20ws%2C%20identifier%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20Array%20with%3A%20node%20second%20with%3A%20%28Array%20with%3A%20node%20fourth%29%5D.%0A%0A%09unaryPattern%20%3A%3D%20ws%2C%20unarySelector%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20Array%20with%3A%20node%20second%20with%3A%20Array%20new%5D.%0A%09%0A%09expression%20%3A%3D%20PPDelegateParser%20new.%0A%0A%09expressions%20%3A%3D%20expression%2C%20%28%28ws%2C%20%27.%27%20asParser%2C%20ws%2C%20expression%29%20%3D%3D%3E%20%5B%3Anode%20%7C%20node%20fourth%5D%29%20star%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%7C%20result%20%7C%0A%09%09%20%20%20%20result%20%3A%3D%20Array%20with%3A%20node%20first.%0A%09%09%20%20%20%20node%20second%20do%3A%20%5B%3Aeach%20%7C%20result%20add%3A%20each%5D.%0A%09%09%20%20%20%20result%5D.%0A%0A%09assignment%20%3A%3D%20reference%2C%20ws%2C%20%27%3A%3D%27%20asParser%2C%20ws%2C%20expression%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20AssignmentNode%20new%20left%3A%20node%20first%3B%20right%3A%20%28node%20at%3A%205%29%5D.%0A%0A%09ret%20%3A%3D%20%27%5E%27%20asParser%2C%20ws%2C%20expression%2C%20ws%2C%20%27.%27%20asParser%20optional%0A%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%20ReturnNode%20new%0A%09%09%09%20%20%20%20%20addNode%3A%20node%20third%3B%0A%09%09%09%20%20%20%20%20yourself%5D.%0A%0A%09temps%20%3A%3D%20%27%7C%27%20asParser%2C%20%28ws%2C%20identifier%29%20star%2C%20ws%2C%20%27%7C%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20node%20second%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%5D%5D.%0A%0A%09blockParamList%20%3A%3D%20%28%27%3A%27%20asParser%2C%20identifier%2C%20ws%29%20plus%2C%20%27%7C%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20node%20first%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%5D%5D.%0A%0A%09subexpression%20%3A%3D%20%27%28%27%20asParser%2C%20ws%2C%20expression%2C%20ws%2C%20%27%29%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20node%20third%5D.%0A%0A%09statements%20%3A%3D%20%28ret%20%3D%3D%3E%20%5B%3Anode%20%7C%20Array%20with%3A%20node%5D%29%20/%20%28expressions%2C%20ws%2C%20%27.%27%20asParser%2C%20ws%2C%20ret%20%3D%3D%3E%20%5B%3Anode%20%7C%20node%20first%20add%3A%20%28node%20at%3A%205%29%3B%20yourself%5D%29%20/%20%28expressions%20%2C%20%27.%27%20asParser%20optional%20%3D%3D%3E%20%5B%3Anode%20%7C%20node%20first%5D%29.%0A%0A%09sequence%20%3A%3D%20temps%20optional%2C%20ws%2C%20statements%20optional%2C%20ws%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20SequenceNode%20new%0A%09%09%09%09%20temps%3A%20node%20first%3B%0A%09%09%09%09%20nodes%3A%20node%20third%3B%0A%09%09%09%09%20yourself%5D.%0A%0A%09block%20%3A%3D%20%27%5B%27%20asParser%2C%20ws%2C%20blockParamList%20optional%2C%20ws%2C%20sequence%20optional%2C%20ws%2C%20%27%5D%27%20asParser%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20BlockNode%20new%0A%09%09%09parameters%3A%20node%20third%3B%0A%09%09%09addNode%3A%20%28node%20at%3A%205%29%20asBlockSequenceNode%5D.%0A%0A%09operand%20%3A%3D%20literal%20/%20reference%20/%20subexpression.%0A%0A%09literal%20parser%3A%20number%20/%20string%20/%20literalArray%20/%20symbol%20/%20block.%0A%0A%09unaryMessage%20%3A%3D%20ws%2C%20unarySelector%2C%20%27%3A%27%20asParser%20not%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%20SendNode%20new%20selector%3A%20node%20second%5D.%0A%0A%09unaryTail%20%3A%3D%20PPDelegateParser%20new.%0A%09unaryTail%20parser%3A%20%28unaryMessage%2C%20unaryTail%20optional%0A%09%09%09%20%20%20%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%09%09%20%20%20node%20second%0A%09%09%09%09%09%20%20%20ifNil%3A%20%5Bnode%20first%5D%0A%09%09%09%09%09%20%20%20ifNotNil%3A%20%5Bnode%20second%20valueForReceiver%3A%20node%20first%5D%5D%29.%0A%0A%09unarySend%20%3A%3D%20operand%2C%20unaryTail%20optional%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20node%20second%20%0A%09%09%09ifNil%3A%20%5Bnode%20first%5D%0A%09%09%09ifNotNil%3A%20%5Bnode%20second%20valueForReceiver%3A%20node%20first%5D%5D.%0A%0A%09binaryMessage%20%3A%3D%20ws%2C%20binarySelector%2C%20ws%2C%20%28unarySend%20/%20operand%29%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20SendNode%20new%0A%09%09%09selector%3A%20node%20second%3B%0A%09%09%09arguments%3A%20%28Array%20with%3A%20node%20fourth%29%5D.%0A%0A%09binaryTail%20%3A%3D%20PPDelegateParser%20new.%0A%09binaryTail%20parser%3A%20%28binaryMessage%2C%20binaryTail%20optional%0A%09%09%09%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%09%09%09node%20second%20%0A%09%09%09%09%09%20%20%20%20ifNil%3A%20%5Bnode%20first%5D%0A%09%09%09%09%09%20%20%20%20ifNotNil%3A%20%5B%20node%20second%20valueForReceiver%3A%20node%20first%5D%5D%29.%0A%0A%09binarySend%20%3A%3D%20unarySend%2C%20binaryTail%20optional%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20node%20second%0A%09%09%09ifNil%3A%20%5Bnode%20first%5D%0A%09%09%09ifNotNil%3A%20%5Bnode%20second%20valueForReceiver%3A%20node%20first%5D%5D.%0A%0A%09keywordPair%20%3A%3D%20keyword%2C%20ws%2C%20binarySend.%0A%0A%09keywordMessage%20%3A%3D%20%28ws%2C%20keywordPair%29%20plus%0A%09%09%3D%3D%3E%20%5B%3Anodes%20%7C%0A%09%09%20%20%20%20SendNode%20new%0A%09%09%09selector%3A%20%28%28nodes%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%20first%5D%29%20join%3A%20%27%27%29%3B%0A%09%09%09arguments%3A%20%28nodes%20collect%3A%20%5B%3Aeach%20%7C%20each%20second%20third%5D%29%5D.%0A%0A%09keywordSend%20%3A%3D%20binarySend%2C%20keywordMessage%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20node%20second%20valueForReceiver%3A%20node%20first%5D.%0A%0A%09message%20%3A%3D%20binaryMessage%20/%20unaryMessage%20/%20keywordMessage.%0A%0A%09cascade%20%3A%3D%20%28keywordSend%20/%20binarySend%29%2C%20%28ws%2C%20%27%3B%27%20asParser%2C%20message%29%20plus%0A%09%09%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09%20%20%20%20node%20first%20cascadeNodeWithMessages%3A%20%0A%09%09%09%28node%20second%20collect%3A%20%5B%3Aeach%20%7C%20each%20third%5D%29%5D.%0A%0A%09jsStatement%20%3A%3D%20%27%7B%27%20asParser%2C%20ws%2C%20string%2C%20ws%2C%20%27%7D%27%20asParser%0A%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%20JSStatementNode%20new%0A%09%09%09%20%20%20%20%20source%3A%20node%20third%3B%0A%09%09%09%20%20%20%20%20yourself%5D.%0A%0A%09expression%20parser%3A%20assignment%20/%20cascade%20/%20keywordSend%20/%20binarySend%20/%20jsStatement.%0A%0A%09method%20%3A%3D%20%28ws%2C%20%28keywordPattern%20/%20binaryPattern%20/%20unaryPattern%29%2C%20ws%2C%20sequence%20optional%2C%20ws%29%20withSource%0A%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%0A%09%09MethodNode%20new%0A%09%09%20%20%20%20selector%3A%20node%20first%20second%20first%3B%0A%09%09%20%20%20%20arguments%3A%20node%20first%20second%20second%3B%0A%09%09%20%20%20%20addNode%3A%20node%20first%20fourth%3B%0A%09%09%20%20%20%20source%3A%20node%20second%3B%0A%09%09%20%20%20%20yourself%5D.%0A%09%0A%09%5Emethod%2C%20PPEOFParser%20new%20%3D%3D%3E%20%5B%3Anode%20%7C%20node%20first%5D%0A')}),
smalltalk.SmalltalkParser);


smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'instance creation',
fn: function (aStream){
var self=this;
return self._new()._parse_(aStream);
return self;},
source: unescape('parse%3A%20aStream%0A%09%20%20%20%20%5Eself%20new%0A%09%09parse%3A%20aStream%0A')}),
smalltalk.SmalltalkParser.klass);


smalltalk.addClass('Chunk', smalltalk.Object, ['contents'], 'Parser');
smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
category: 'accessing',
fn: function (){
var self=this;
return self['@contents']._ifNil_((function(){return "";}));
return self;},
source: unescape('contents%0A%09%5Econtents%20ifNil%3A%20%5B%27%27%5D%0A')}),
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
source: unescape('contents%3A%20aString%0A%09contents%20%3A%3D%20aString%0A')}),
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
source: unescape('isEmptyChunk%0A%09%5Efalse%0A')}),
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
source: unescape('isInstructionChunk%0A%09%5Efalse%0A')}),
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
source: unescape('isInstructionChunk%0A%09%5Etrue%0A')}),
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
source: unescape('isEmptyChunk%0A%09%5Etrue%0A')}),
smalltalk.EmptyChunk);



smalltalk.addClass('ChunkParser', smalltalk.Object, ['parser', 'separator', 'eof', 'ws', 'chunk', 'emptyChunk', 'instructionChunk'], 'Parser');
smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
category: 'accessing',
fn: function (){
var self=this;
return self['@parser']._ifNil_((function(){return self['@parser']=self._instructionChunk().__slash(self._emptyChunk()).__slash(self._chunk()).__slash(self._eof());}));
return self;},
source: unescape('parser%0A%09%5Eparser%20ifNil%3A%20%5B%0A%09%20%20%20%20parser%20%3A%3D%20self%20instructionChunk%20/%20self%20emptyChunk%20/%20self%20chunk%20/%20self%20eof%5D%0A')}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_eof',
smalltalk.method({
selector: 'eof',
category: 'accessing',
fn: function (){
var self=this;
return self['@eof']._ifNil_((function(){return self['@eof']=self._ws().__comma(smalltalk.PPEOFParser._new()).__eq_eq_gt((function(node){return nil;}));}));
return self;},
source: unescape('eof%0A%09%5Eeof%20ifNil%3A%20%5Beof%20%3A%3D%20self%20ws%2C%20PPEOFParser%20new%20%3D%3D%3E%20%5B%3Anode%20%7C%20nil%5D%5D%0A')}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_separator',
smalltalk.method({
selector: 'separator',
category: 'accessing',
fn: function (){
var self=this;
return self['@separator']._ifNil_((function(){return self['@separator']=smalltalk.String._cr().__comma(smalltalk.String._space()).__comma(smalltalk.String._lf()).__comma(smalltalk.String._tab())._asChoiceParser();}));
return self;},
source: unescape('separator%0A%09%5Eseparator%20ifNil%3A%20%5Bseparator%20%3A%3D%20%28String%20cr%2C%20String%20space%2C%20String%20lf%2C%20String%20tab%29%20asChoiceParser%5D%0A')}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_ws',
smalltalk.method({
selector: 'ws',
category: 'accessing',
fn: function (){
var self=this;
return self['@ws']._ifNil_((function(){return self['@ws']=self._separator()._star();}));
return self;},
source: unescape('ws%0A%09%5Ews%20ifNil%3A%20%5Bws%20%3A%3D%20self%20separator%20star%5D%0A')}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_chunk',
smalltalk.method({
selector: 'chunk',
category: 'accessing',
fn: function (){
var self=this;
return self['@chunk']._ifNil_((function(){return self['@chunk']=self._ws().__comma(unescape("%21%21")._asParser().__slash(unescape("%21")._asParser()._not().__comma(smalltalk.PPAnyParser._new()))._plus()._flatten()).__comma(unescape("%21")._asParser()).__eq_eq_gt((function(node){return smalltalk.Chunk._new()._contents_(node._second()._replace_with_(unescape("%21%21"),unescape("%21")));}));}));
return self;},
source: unescape('chunk%0A%09%5Echunk%20ifNil%3A%20%5Bchunk%20%3A%3D%20self%20ws%2C%20%28%27%21%21%27%20asParser%20/%20%28%27%21%27%20asParser%20not%2C%20PPAnyParser%20new%29%29%20plus%20flatten%2C%20%27%21%27%20asParser%20%3D%3D%3E%20%5B%3Anode%20%7C%20Chunk%20new%20contents%3A%20%28node%20second%20replace%3A%20%27%21%21%27%20with%3A%20%27%21%27%29%5D%5D%0A')}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_emptyChunk',
smalltalk.method({
selector: 'emptyChunk',
category: 'accessing',
fn: function (){
var self=this;
return self['@emptyChunk']._ifNil_((function(){return self['@emptyChunk']=self._separator()._plus().__comma(unescape("%21")._asParser()).__comma(self._ws()).__eq_eq_gt((function(node){return smalltalk.EmptyChunk._new();}));}));
return self;},
source: unescape('emptyChunk%0A%09%5EemptyChunk%20ifNil%3A%20%5BemptyChunk%20%3A%3D%20self%20separator%20plus%2C%20%27%21%27%20asParser%2C%20self%20ws%20%3D%3D%3E%20%5B%3Anode%20%7C%20EmptyChunk%20new%5D%5D%0A')}),
smalltalk.ChunkParser);

smalltalk.addMethod(
'_instructionChunk',
smalltalk.method({
selector: 'instructionChunk',
category: '',
fn: function (){
var self=this;
return self['@instructionChunk']._ifNil_((function(){return self['@instructionChunk']=self._ws().__comma(unescape("%21")._asParser()).__comma(self._chunk()).__eq_eq_gt((function(node){return smalltalk.InstructionChunk._new()._contents_(node._last()._contents());}));}));
return self;},
source: unescape('instructionChunk%0A%09%5EinstructionChunk%20ifNil%3A%20%5B%0A%09%20%20%20%20instructionChunk%20%3A%3D%20self%20ws%2C%20%27%21%27%20asParser%2C%20self%20chunk%0A%09%20%20%20%20%3D%3D%3E%20%5B%3Anode%20%7C%20InstructionChunk%20new%20contents%3A%20node%20last%20contents%5D%5D%0A')}),
smalltalk.ChunkParser);



smalltalk.addClass('Importer', smalltalk.Object, ['chunkParser'], 'Parser');
smalltalk.addMethod(
'_chunkParser',
smalltalk.method({
selector: 'chunkParser',
category: 'accessing',
fn: function (){
var self=this;
return self['@chunkParser']._ifNil_((function(){return self['@chunkParser']=smalltalk.ChunkParser._new()._parser();}));
return self;},
source: unescape('chunkParser%0A%09%5EchunkParser%20ifNil%3A%20%5BchunkParser%20%3A%3D%20ChunkParser%20new%20parser%5D%0A')}),
smalltalk.Importer);

smalltalk.addMethod(
'_import_',
smalltalk.method({
selector: 'import:',
category: 'fileIn',
fn: function (aStream){
var self=this;
aStream._atEnd()._ifFalse_((function(){var nextChunk=nil;
nextChunk=self._chunkParser()._parse_(aStream);return nextChunk._ifNotNil_((function(){nextChunk._isInstructionChunk()._ifTrue_ifFalse_((function(){return smalltalk.Compiler._new()._loadExpression_(nextChunk._contents())._scanFrom_(aStream);}),(function(){return smalltalk.Compiler._new()._loadExpression_(nextChunk._contents());}));return self._import_(aStream);}));}));
return self;},
source: unescape('import%3A%20aStream%0A%09aStream%20atEnd%20ifFalse%3A%20%5B%0A%09%20%20%20%20%7C%20nextChunk%20%7C%0A%09%20%20%20%20nextChunk%20%3A%3D%20self%20chunkParser%20parse%3A%20aStream.%0A%09%20%20%20%20nextChunk%20ifNotNil%3A%20%5B%0A%09%09nextChunk%20isInstructionChunk%20%0A%09%09%20%20%20%20ifTrue%3A%20%5B%28Compiler%20new%20loadExpression%3A%20nextChunk%20contents%29%0A%09%09%09%09%09%20scanFrom%3A%20aStream%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BCompiler%20new%20loadExpression%3A%20nextChunk%20contents%5D.%0A%09%09self%20import%3A%20aStream%5D%5D%0A')}),
smalltalk.Importer);



smalltalk.addClass('Exporter', smalltalk.Object, [], 'Parser');
smalltalk.addMethod(
'_exportCategory_',
smalltalk.method({
selector: 'exportCategory:',
category: 'fileout',
fn: function (aString){
var self=this;
var stream=nil;
stream=""._writeStream();
smalltalk.Smalltalk._current()._classes()._select_((function(each){return each._category().__eq(aString);}))._do_((function(each){return stream._nextPutAll_(self._export_(each));}));
return stream._contents();
return self;},
source: unescape('exportCategory%3A%20aString%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09%28Smalltalk%20current%20classes%20%0A%09%20%20%20%20select%3A%20%5B%3Aeach%20%7C%20each%20category%20%3D%20aString%5D%29%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20%28self%20export%3A%20each%29%5D.%0A%09%5Estream%20contents%0A')}),
smalltalk.Exporter);

smalltalk.addMethod(
'_export_',
smalltalk.method({
selector: 'export:',
category: 'fileOut',
fn: function (aClass){
var self=this;
var stream=nil;
stream=""._writeStream();
self._exportDefinitionOf_on_(aClass,stream);
stream._nextPutAll_(smalltalk.String._cr());
self._exportMethodsOf_on_(aClass,stream);
stream._nextPutAll_(smalltalk.String._cr());
self._exportMetaDefinitionOf_on_(aClass,stream);
self._exportMethodsOf_on_(aClass._class(),stream);
stream._nextPutAll_(smalltalk.String._cr());
return stream._contents();
return self;},
source: unescape('export%3A%20aClass%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09self%20exportDefinitionOf%3A%20aClass%20on%3A%20stream.%0A%09stream%20nextPutAll%3A%20String%20cr.%0A%09self%20exportMethodsOf%3A%20aClass%20on%3A%20stream.%0A%09stream%20nextPutAll%3A%20String%20cr.%0A%09self%20exportMetaDefinitionOf%3A%20aClass%20on%3A%20stream.%0A%09self%20exportMethodsOf%3A%20aClass%20class%20on%3A%20stream.%0A%09stream%20nextPutAll%3A%20String%20cr.%0A%09%5Estream%20contents%0A')}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportDefinitionOf_on_',
smalltalk.method({
selector: 'exportDefinitionOf:on:',
category: 'private',
fn: function (aClass, aStream){
var self=this;
(function($rec){$rec._nextPutAll_(unescape("smalltalk.addClass%28"));$rec._nextPutAll_(unescape("%27").__comma(self._classNameFor_(aClass)).__comma(unescape("%27%2C%20")));$rec._nextPutAll_("smalltalk.".__comma(self._classNameFor_(aClass._superclass())));return $rec._nextPutAll_(unescape("%2C%20%5B"));})(aStream);
aClass._instVarNames()._do_separatedBy_((function(each){return aStream._nextPutAll_(unescape("%27").__comma(each).__comma(unescape("%27")));}),(function(){return aStream._nextPutAll_(unescape("%2C%20"));}));
(function($rec){$rec._nextPutAll_(unescape("%5D%2C%20%27"));$rec._nextPutAll_(aClass._category().__comma(unescape("%27")));return $rec._nextPutAll_(unescape("%29%3B"));})(aStream);
aClass._comment()._notEmpty()._ifTrue_((function(){return (function($rec){$rec._nextPutAll_(smalltalk.String._cr());$rec._nextPutAll_("smalltalk.");$rec._nextPutAll_(self._classNameFor_(aClass));$rec._nextPutAll_(unescape(".comment%3D"));return $rec._nextPutAll_(unescape("unescape%28%27").__comma(aClass._comment()._escaped()).__comma(unescape("%27%29")));})(aStream);}));
return self;},
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addClass%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%27%27%2C%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%2C%20%5B%27.%0A%09aClass%20instVarNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%5D%2C%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aClass%20category%2C%20%27%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%29%3B%27.%0A%09aClass%20comment%20notEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%20%20%20%20%09nextPutAll%3A%20String%20cr%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%09nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27.comment%3D%27%3B%0A%09%09nextPutAll%3A%20%27unescape%28%27%27%27%2C%20aClass%20comment%20escaped%2C%20%27%27%27%29%27%5D%0A')}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportMetaDefinitionOf_on_',
smalltalk.method({
selector: 'exportMetaDefinitionOf:on:',
category: 'private',
fn: function (aClass, aStream){
var self=this;
aClass._class()._instVarNames()._isEmpty()._ifFalse_((function(){(function($rec){$rec._nextPutAll_("smalltalk.".__comma(self._classNameFor_(aClass._class())));return $rec._nextPutAll_(unescape(".iVarNames%20%3D%20%5B"));})(aStream);aClass._class()._instVarNames()._do_separatedBy_((function(each){return aStream._nextPutAll_(unescape("%27").__comma(each).__comma(unescape("%27")));}),(function(){return aStream._nextPutAll_(unescape("%2C"));}));return aStream._nextPutAll_(unescape("%5D%3B").__comma(smalltalk.String._cr()));}));
return self;},
source: unescape('exportMetaDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aClass%20class%20instVarNames%20isEmpty%20ifFalse%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20class%29%3B%0A%09%09nextPutAll%3A%20%27.iVarNames%20%3D%20%5B%27.%0A%09%20%20%20%20aClass%20class%20instVarNames%0A%09%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%09separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09%20%20%20%20aStream%20nextPutAll%3A%20%27%5D%3B%27%2C%20String%20cr%5D%0A')}),
smalltalk.Exporter);

smalltalk.addMethod(
'_exportMethodsOf_on_',
smalltalk.method({
selector: 'exportMethodsOf:on:',
category: 'private',
fn: function (aClass, aStream){
var self=this;
aClass._methodDictionary()._keysAndValuesDo_((function(key, value){return (function($rec){$rec._nextPutAll_(unescape("smalltalk.addMethod%28").__comma(smalltalk.String._cr()));$rec._nextPutAll_(unescape("%27").__comma(value._selector()._asSelector()).__comma(unescape("%27%2C")).__comma(smalltalk.String._cr()));$rec._nextPutAll_(unescape("smalltalk.method%28%7B").__comma(smalltalk.String._cr()));$rec._nextPutAll_(unescape("selector%3A%20%27").__comma(value._selector()).__comma(unescape("%27%2C")).__comma(smalltalk.String._cr()));$rec._nextPutAll_(unescape("category%3A%20%27").__comma(value._category()).__comma(unescape("%27%2C")).__comma(smalltalk.String._cr()));$rec._nextPutAll_("fn: ".__comma(value._fn()._compiledSource()).__comma(unescape("%2C")).__comma(smalltalk.String._cr()));$rec._nextPutAll_(unescape("source%3A%20unescape%28%27").__comma(value._source()._escaped()).__comma(unescape("%27%29")));$rec._nextPutAll_(unescape("%7D%29%2C").__comma(smalltalk.String._cr()));$rec._nextPutAll_("smalltalk.".__comma(self._classNameFor_(aClass)));return $rec._nextPutAll_(unescape("%29%3B").__comma(smalltalk.String._cr()).__comma(smalltalk.String._cr()));})(aStream);}));
return self;},
source: unescape('exportMethodsOf%3A%20aClass%20on%3A%20aStream%0A%09aClass%20methodDictionary%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%20%20%20%20aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.addMethod%28%27%2C%20String%20cr%3B%0A%09%09nextPutAll%3A%20%27%27%27%27%2C%20value%20selector%20asSelector%2C%20%27%27%27%2C%27%2C%20String%20cr%3B%0A%09%09nextPutAll%3A%20%27smalltalk.method%28%7B%27%2C%20String%20cr%3B%0A%09%09nextPutAll%3A%20%27selector%3A%20%27%27%27%2C%20value%20selector%2C%20%27%27%27%2C%27%2C%20String%20cr%3B%0A%09%09nextPutAll%3A%20%27category%3A%20%27%27%27%2C%20value%20category%2C%20%27%27%27%2C%27%2C%20String%20cr%3B%0A%09%09nextPutAll%3A%20%27fn%3A%20%27%2C%20value%20fn%20compiledSource%2C%20%27%2C%27%2C%20String%20cr%3B%0A%09%09nextPutAll%3A%20%27source%3A%20unescape%28%27%27%27%2C%20value%20source%20escaped%2C%20%27%27%27%29%27%3B%0A%09%09nextPutAll%3A%20%27%7D%29%2C%27%2C%20String%20cr%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%29%3B%27%2C%20String%20cr%2C%20String%20cr%5D%0A')}),
smalltalk.Exporter);

smalltalk.addMethod(
'_classNameFor_',
smalltalk.method({
selector: 'classNameFor:',
category: 'private',
fn: function (aClass){
var self=this;
return aClass._isMetaclass()._ifTrue_ifFalse_((function(){return aClass._instanceClass()._name().__comma(".klass");}),(function(){return aClass._isNil()._ifTrue_ifFalse_((function(){return "nil";}),(function(){return aClass._name();}));}));
return self;},
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27.klass%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D%0A')}),
smalltalk.Exporter);




