smalltalk.addPackage('Compiler', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Compiler');
smalltalk.addMethod(
unescape('_stream_'),
smalltalk.method({
selector: unescape('stream%3A'),
category: 'accessing',
fn: function (aStream){
var self=this;
self['@stream']=aStream;
return self;},
args: ["aStream"],
source: unescape('stream%3A%20aStream%0A%09stream%20%3A%3D%20aStream'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
unescape('_nextChunk'),
smalltalk.method({
selector: unescape('nextChunk'),
category: 'reading',
fn: function (){
var self=this;
try{var char_=nil;
var result=nil;
var chunk=nil;
result=smalltalk.send("", "_writeStream", []);
(function(){while((function(){char_=smalltalk.send(self['@stream'], "_next", []);return smalltalk.send(char_, "_notNil", []);})()) {(function(){((($receiver = smalltalk.send(char_, "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@stream'], "_peek", []), "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_next", []);})() : (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_next", []);}), (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@stream'], "_peek", []), "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_next", []);})() : (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_next", []);}), (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})]));})]));return smalltalk.send(result, "_nextPut_", [char_]);})()}})();
(function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return nil}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_nextChunk'){return e.fn()} throw(e)}},
args: [],
source: unescape('nextChunk%0A%09%22The%20chunk%20format%20%28Smalltalk%20Interchange%20Format%20or%20Fileout%20format%29%0A%09is%20a%20trivial%20format%20but%20can%20be%20a%20bit%20tricky%20to%20understand%3A%0A%09%09-%20Uses%20the%20exclamation%20mark%20as%20delimiter%20of%20chunks.%0A%09%09-%20Inside%20a%20chunk%20a%20normal%20exclamation%20mark%20must%20be%20doubled.%0A%09%09-%20A%20non%20empty%20chunk%20must%20be%20a%20valid%20Smalltalk%20expression.%0A%09%09-%20A%20chunk%20on%20top%20level%20with%20a%20preceding%20empty%20chunk%20is%20an%20instruction%20chunk%3A%0A%09%09%09-%20The%20object%20created%20by%20the%20expression%20then%20takes%20over%20reading%20chunks.%0A%0A%09This%20metod%20returns%20next%20chunk%20as%20a%20String%20%28trimmed%29%2C%20empty%20String%20%28all%20whitespace%29%20or%20nil.%22%0A%0A%09%7C%20char%20result%20chunk%20%7C%0A%09result%20%3A%3D%20%27%27%20writeStream.%0A%20%20%20%20%20%20%20%20%5Bchar%20%3A%3D%20stream%20next.%0A%20%20%20%20%20%20%20%20char%20notNil%5D%20whileTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20char%20%3D%20%27%21%27%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20peek%20%3D%20%27%21%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifTrue%3A%20%5Bstream%20next%20%22skipping%20the%20escape%20double%22%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifFalse%3A%20%5B%5Eresult%20contents%20trimBoth%20%20%22chunk%20end%20marker%20found%22%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20result%20nextPut%3A%20char%5D.%0A%09%5Enil%20%22a%20chunk%20needs%20to%20end%20with%20%21%22'),
messageSends: ["writeStream", "whileTrue:", "next", "notNil", "ifTrue:", unescape("%3D"), "ifTrue:ifFalse:", "peek", "trimBoth", "contents", "nextPut:"],
referencedClasses: []
}),
smalltalk.ChunkParser);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_stream_", [aStream]);
return self;},
args: ["aStream"],
source: unescape('on%3A%20aStream%0A%09%5Eself%20new%20stream%3A%20aStream'),
messageSends: ["stream:", "new"],
referencedClasses: []
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Importer', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
unescape('_import_'),
smalltalk.method({
selector: unescape('import%3A'),
category: 'fileIn',
fn: function (aStream){
var self=this;
var chunk=nil;
var result=nil;
var parser=nil;
var lastEmpty=nil;
parser=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_on_", [aStream]);
lastEmpty=false;
(function(){while(!(function(){chunk=smalltalk.send(parser, "_nextChunk", []);return smalltalk.send(chunk, "_isNil", []);})()) {(function(){return ((($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return lastEmpty=true;})() : (function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [chunk]);return ((($receiver = lastEmpty).klass === smalltalk.Boolean) ? ($receiver ? (function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return lastEmpty=true;}), (function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [chunk]);return ((($receiver = lastEmpty).klass === smalltalk.Boolean) ? ($receiver ? (function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})]));})]));})()}})();
return self;},
args: ["aStream"],
source: unescape('import%3A%20aStream%0A%20%20%20%20%7C%20chunk%20result%20parser%20lastEmpty%20%7C%0A%20%20%20%20parser%20%3A%3D%20ChunkParser%20on%3A%20aStream.%0A%20%20%20%20lastEmpty%20%3A%3D%20false.%0A%20%20%20%20%5Bchunk%20%3A%3D%20parser%20nextChunk.%0A%20%20%20%20%20chunk%20isNil%5D%20whileFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20chunk%20isEmpty%0A%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5BlastEmpty%20%3A%3D%20true%5D%0A%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%09%09result%20%3A%3D%20Compiler%20new%20loadExpression%3A%20chunk.%0A%20%20%20%20%20%20%20%20%09%09lastEmpty%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09lastEmpty%20%3A%3D%20false.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09result%20scanFrom%3A%20parser%5D%5D%5D'),
messageSends: ["on:", "whileFalse:", "nextChunk", "isNil", "ifTrue:ifFalse:", "isEmpty", "loadExpression:", "new", "ifTrue:", "scanFrom:"],
referencedClasses: ["ChunkParser", "Compiler"]
}),
smalltalk.Importer);



smalltalk.addClass('Exporter', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
unescape('_exportDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportDefinitionOf%3Aon%3A'),
category: 'private',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addClass%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%27%2C%20")])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D%2C%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", [unescape("%27")])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);})(aStream);
((($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [unescape(".comment%3D")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_escaped", [])]), "__comma", [unescape("%27%29")])]);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [unescape(".comment%3D")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_escaped", [])]), "__comma", [unescape("%27%29")])]);})(aStream);})]));
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addClass%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%27%27%2C%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%2C%20%5B%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%5D%2C%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aClass%20category%2C%20%27%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%29%3B%27.%0A%09aClass%20comment%20notEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%20%20%20%20%09lf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%09nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27.comment%3D%27%3B%0A%09%09nextPutAll%3A%20%27unescape%28%27%27%27%2C%20aClass%20comment%20escaped%2C%20%27%27%27%29%27%5D.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "lf", "escaped"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportMetaDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportMetaDefinitionOf%3Aon%3A'),
category: 'private',
fn: function (aClass, aStream){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape(".iVarNames%20%3D%20%5B")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(unescape("%5D%3B"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape(".iVarNames%20%3D%20%5B")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(unescape("%5D%3B"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})]));
return self;},
args: ["aClass", "aStream"],
source: unescape('exportMetaDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aClass%20class%20instanceVariableNames%20isEmpty%20ifFalse%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20class%29%3B%0A%09%09nextPutAll%3A%20%27.iVarNames%20%3D%20%5B%27.%0A%09%20%20%20%20aClass%20class%20instanceVariableNames%0A%09%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%09separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09%20%20%20%20aStream%20nextPutAll%3A%20%27%5D%3B%27%2C%20String%20lf%5D'),
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", unescape("%2C"), "classNameFor:", "do:separatedBy:", "lf"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportMethodsOf_on_'),
smalltalk.method({
selector: unescape('exportMethodsOf%3Aon%3A'),
category: 'private',
fn: function (aClass, aStream){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(smalltalk.send(each, "_category", []), "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})]));})]);
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportMethodsOf%3A%20aClass%20on%3A%20aStream%0A%09aClass%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%28each%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%0A%09%09%09self%20exportMethod%3A%20each%20of%3A%20aClass%20on%3A%20aStream%5D%5D.%0A%09aStream%20lf'),
messageSends: ["do:", "values", "methodDictionary", "ifFalse:", "match:", "category", "exportMethod:of:on:", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_classNameFor_'),
smalltalk.method({
selector: unescape('classNameFor%3A'),
category: 'private',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);})() : (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})]));
return self;},
args: ["aClass"],
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27.klass%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportMethod_of_on_'),
smalltalk.method({
selector: unescape('exportMethod%3Aof%3Aon%3A'),
category: 'private',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addMethod%28")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", []), "_escaped", [])]), "__comma", [unescape("%27%29%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_escaped", [])]), "__comma", [unescape("%27%29%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("category%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_category", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_arguments", []), "_asJavascript", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("source%3A%20unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_source", []), "_escaped", [])]), "__comma", [unescape("%27%29%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("messageSends: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_messageSends", []), "_asJavascript", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("referencedClasses: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_referencedClasses", []), "_asJavascript", [])])]);})(aStream);
(function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%2C")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
args: ["aMethod", "aClass", "aStream"],
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.addMethod%28%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27unescape%28%27%27%27%2C%20aMethod%20selector%20asSelector%20escaped%2C%20%27%27%27%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.method%28%7B%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27selector%3A%20unescape%28%27%27%27%2C%20aMethod%20selector%20escaped%2C%20%27%27%27%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27category%3A%20%27%27%27%2C%20aMethod%20category%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27fn%3A%20%27%2C%20aMethod%20fn%20compiledSource%2C%20%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27args%3A%20%27%2C%20aMethod%20arguments%20asJavascript%2C%20%27%2C%27%3B%20lf%3B%0A%09%09nextPutAll%3A%20%27source%3A%20unescape%28%27%27%27%2C%20aMethod%20source%20escaped%2C%20%27%27%27%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27messageSends%3A%20%27%2C%20aMethod%20messageSends%20asJavascript%2C%20%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27referencedClasses%3A%20%27%2C%20aMethod%20referencedClasses%20asJavascript.%0A%09aStream%0A%09%09lf%3B%0A%09%09nextPutAll%3A%20%27%7D%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%29%3B%27%3Blf%3Blf'),
messageSends: ["nextPutAll:", "lf", unescape("%2C"), "escaped", "asSelector", "selector", "category", "compiledSource", "fn", "asJavascript", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportPackage_'),
smalltalk.method({
selector: unescape('exportPackage%3A'),
category: 'fileOut',
fn: function (packageName){
var self=this;
var package=nil;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){package=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_", [packageName]);smalltalk.send(self, "_exportPackageDefinitionOf_on_", [package, stream]);smalltalk.send(smalltalk.send(package, "_classes", []), "_do_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self, "_exportClass_", [each])]);})]);return smalltalk.send(self, "_exportPackageExtensionsOf_on_", [package, stream]);})]);
return self;},
args: ["packageName"],
source: unescape('exportPackage%3A%20packageName%0A%09%22Export%20a%20given%20package%20by%20name.%22%0A%0A%09%7C%20package%20%7C%0A%09%5EString%20streamContents%3A%20%5B%3Astream%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20package%20%3A%3D%20Smalltalk%20current%20packageAt%3A%20packageName.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20exportPackageDefinitionOf%3A%20package%20on%3A%20stream.%0A%09%20%20%20%20%09package%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%28self%20exportClass%3A%20each%29%5D.%0A%09%09self%20exportPackageExtensionsOf%3A%20package%20on%3A%20stream%5D'),
messageSends: ["streamContents:", "packageAt:", "current", "exportPackageDefinitionOf:on:", "do:", "classes", "nextPutAll:", "exportClass:", "exportPackageExtensionsOf:on:"],
referencedClasses: ["String", "Smalltalk"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportAll'),
smalltalk.method({
selector: unescape('exportAll'),
category: 'fileOut',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packages", []), "_do_", [(function(pkg){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self, "_exportPackage_", [smalltalk.send(pkg, "_name", [])])]);})]);})]);
return self;},
args: [],
source: unescape('exportAll%0A%20%20%20%20%22Export%20all%20packages%20in%20the%20system.%22%0A%0A%20%20%20%20%5EString%20streamContents%3A%20%5B%3Astream%20%7C%0A%20%20%20%20%09Smalltalk%20current%20packages%20do%3A%20%5B%3Apkg%20%7C%0A%09%09stream%20nextPutAll%3A%20%28self%20exportPackage%3A%20pkg%20name%29%5D%5D'),
messageSends: ["streamContents:", "do:", "packages", "current", "nextPutAll:", "exportPackage:", "name"],
referencedClasses: ["String", "Smalltalk"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportClass_'),
smalltalk.method({
selector: unescape('exportClass%3A'),
category: 'fileOut',
fn: function (aClass){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){smalltalk.send(self, "_exportDefinitionOf_on_", [aClass, stream]);smalltalk.send(self, "_exportMethodsOf_on_", [aClass, stream]);smalltalk.send(self, "_exportMetaDefinitionOf_on_", [aClass, stream]);return smalltalk.send(self, "_exportMethodsOf_on_", [smalltalk.send(aClass, "_class", []), stream]);})]);
return self;},
args: ["aClass"],
source: unescape('exportClass%3A%20aClass%0A%09%22Export%20a%20single%20class.%20Subclasses%20override%20these%20methods.%22%0A%0A%09%5EString%20streamContents%3A%20%5B%3Astream%20%7C%0A%09%09self%20exportDefinitionOf%3A%20aClass%20on%3A%20stream.%0A%09%09self%20exportMethodsOf%3A%20aClass%20on%3A%20stream.%0A%09%09self%20exportMetaDefinitionOf%3A%20aClass%20on%3A%20stream.%0A%09%09self%20exportMethodsOf%3A%20aClass%20class%20on%3A%20stream%5D'),
messageSends: ["streamContents:", "exportDefinitionOf:on:", "exportMethodsOf:on:", "exportMetaDefinitionOf:on:", "class"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportPackageExtensionsOf_on_'),
smalltalk.method({
selector: unescape('exportPackageExtensionsOf%3Aon%3A'),
category: 'private',
fn: function (package, aStream){
var self=this;
var name=nil;
name=smalltalk.send(package, "_name", []);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "__eq", [smalltalk.send(unescape("*"), "__comma", [name])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_exportMethod_of_on_", [method, each, aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_exportMethod_of_on_", [method, each, aStream]);})]));})]);})]);
return self;},
args: ["package", "aStream"],
source: unescape('exportPackageExtensionsOf%3A%20package%20on%3A%20aStream%0A%09%7C%20name%20%7C%0A%09name%20%3A%3D%20package%20name.%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09method%20category%20%3D%20%28%27*%27%2C%20name%29%20ifTrue%3A%20%5B%0A%09%09%09%09self%20exportMethod%3A%20method%20of%3A%20each%20on%3A%20aStream%5D%5D%5D'),
messageSends: ["name", "do:", unescape("%2C"), "classes", "current", "collect:", "class", "values", "methodDictionary", "ifTrue:", unescape("%3D"), "category", "exportMethod:of:on:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportPackageDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportPackageDefinitionOf%3Aon%3A'),
category: 'private',
fn: function (package, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addPackage%28")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(package, "_name", [])]), "__comma", [unescape("%27%2C%20")]), "__comma", [smalltalk.send(package, "_propertiesAsJSON", [])]), "__comma", [unescape("%29%3B")])]);})(aStream);
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["package", "aStream"],
source: unescape('exportPackageDefinitionOf%3A%20package%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addPackage%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20package%20name%2C%20%27%27%27%2C%20%27%2C%20package%20propertiesAsJSON%20%2C%20%27%29%3B%27.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "name", "propertiesAsJSON", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Compiler');
smalltalk.addMethod(
unescape('_exportDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportDefinitionOf%3Aon%3A'),
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(unescape("%20subclass%3A%20%23"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("%09instanceVariableNames%3A%20%27")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%09category%3A%20%27"), "__comma", [smalltalk.send(aClass, "_category", [])]), "__comma", [unescape("%27%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);
((($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%20commentStamp%21")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%20commentStamp%21")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);})]));
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09%22Chunk%20format.%22%0A%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%20subclass%3A%20%23%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%09instanceVariableNames%3A%20%27%27%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%09category%3A%20%27%27%27%2C%20aClass%20category%2C%20%27%27%27%21%27%3B%20lf.%0A%20%09aClass%20comment%20notEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%09nextPutAll%3A%20%27%21%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%20commentStamp%21%27%3Blf%3B%0A%09%09nextPutAll%3A%20%28self%20chunkEscape%3A%20aClass%20comment%29%2C%20%27%21%27%3Blf%5D.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", "classNameFor:", "superclass", unescape("%2C"), "lf", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "chunkEscape:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportMethod_of_on_'),
smalltalk.method({
selector: unescape('exportMethod%3Aof%3Aon%3A'),
category: 'not yet classified',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aMethod, "_source", [])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("%21")]);})(aStream);
return self;},
args: ["aMethod", "aClass", "aStream"],
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09lf%3B%20lf%3B%20nextPutAll%3A%20%28self%20chunkEscape%3A%20aMethod%20source%29%3B%20lf%3B%0A%09%09nextPutAll%3A%20%27%21%27'),
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportMethodsOf_on_'),
smalltalk.method({
selector: unescape('exportMethodsOf%3Aon%3A'),
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
smalltalk.send(aClass, "_protocolsDo_", [(function(category, methods){return ((($receiver = smalltalk.send(category, "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);})]));})]);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportMethodsOf%3A%20aClass%20on%3A%20aStream%0A%0A%20%20%20aClass%20protocolsDo%3A%20%5B%3Acategory%20%3Amethods%20%7C%0A%09%28category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20%0A%09%09self%0A%09%09%09exportMethods%3A%20methods%0A%09%09%09category%3A%20category%0A%09%09%09of%3A%20aClass%0A%09%09%09on%3A%20aStream%5D%5D'),
messageSends: ["protocolsDo:", "ifFalse:", "match:", "exportMethods:category:of:on:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportMetaDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportMetaDefinitionOf%3Aon%3A'),
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%20instanceVariableNames%3A%20%27")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%20instanceVariableNames%3A%20%27")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);})]));
return self;},
args: ["aClass", "aStream"],
source: unescape('exportMetaDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%0A%09aClass%20class%20instanceVariableNames%20isEmpty%20ifFalse%3A%20%5B%0A%09%09aStream%20%0A%09%09%20%20%20%20nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%20class%29%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%20instanceVariableNames%3A%20%27%27%27.%0A%09%09aClass%20class%20instanceVariableNames%20%0A%09%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20each%5D%0A%09%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%27%5D.%0A%09%09aStream%09%0A%09%09%20%20%20%20nextPutAll%3A%20%27%27%27%21%27%3B%20lf%3B%20lf%5D'),
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "classNameFor:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_classNameFor_'),
smalltalk.method({
selector: unescape('classNameFor%3A'),
category: 'not yet classified',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);})() : (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);}), (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})]));
return self;},
args: ["aClass"],
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27%20class%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_chunkEscape_'),
smalltalk.method({
selector: unescape('chunkEscape%3A'),
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_replace_with_", [unescape("%21"), unescape("%21%21")]), "_trimBoth", []);
return self;},
args: ["aString"],
source: unescape('chunkEscape%3A%20aString%0A%09%22Replace%20all%20occurrences%20of%20%21%20with%20%21%21%20and%20trim%20at%20both%20ends.%22%0A%0A%09%5E%28aString%20replace%3A%20%27%21%27%20with%3A%20%27%21%21%27%29%20trimBoth'),
messageSends: ["trimBoth", "replace:with:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportMethods_category_of_on_'),
smalltalk.method({
selector: unescape('exportMethods%3Acategory%3Aof%3Aon%3A'),
category: 'not yet classified',
fn: function (methods, category, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%20methodsFor%3A%20%27"), "__comma", [category]), "__comma", [unescape("%27%21")])]);})(aStream);
smalltalk.send(methods, "_do_", [(function(each){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%20%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
args: ["methods", "category", "aClass", "aStream"],
source: unescape('exportMethods%3A%20methods%20category%3A%20category%20of%3A%20aClass%20on%3A%20aStream%0A%0A%09aStream%0A%09%09nextPutAll%3A%20%27%21%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%20methodsFor%3A%20%27%27%27%2C%20category%2C%20%27%27%27%21%27.%0A%20%20%20%20%09methods%20do%3A%20%5B%3Aeach%20%7C%0A%09%09self%20exportMethod%3A%20each%20of%3A%20aClass%20on%3A%20aStream%5D.%0A%09aStream%20nextPutAll%3A%20%27%20%21%27%3B%20lf%3B%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "do:", "exportMethod:of:on:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportPackageExtensionsOf_on_'),
smalltalk.method({
selector: unescape('exportPackageExtensionsOf%3Aon%3A'),
category: 'not yet classified',
fn: function (package, aStream){
var self=this;
var name=nil;
name=smalltalk.send(package, "_name", []);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(each, "_protocolsDo_", [(function(category, methods){return ((($receiver = smalltalk.send(category, "__eq", [smalltalk.send(unescape("*"), "__comma", [name])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, each, aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, each, aStream]);})]));})]);})]);
return self;},
args: ["package", "aStream"],
source: unescape('exportPackageExtensionsOf%3A%20package%20on%3A%20aStream%0A%09%22We%20need%20to%20override%20this%20one%20too%20since%20we%20need%20to%20group%0A%09all%20methods%20in%20a%20given%20protocol%20under%20a%20leading%20methodsFor%3A%20chunk%0A%09for%20that%20class.%22%0A%0A%09%7C%20name%20%7C%0A%09name%20%3A%3D%20package%20name.%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20protocolsDo%3A%20%5B%3Acategory%20%3Amethods%20%7C%0A%09%09%09category%20%3D%20%28%27*%27%2C%20name%29%20ifTrue%3A%20%5B%0A%09%09%09%09self%20exportMethods%3A%20methods%20category%3A%20category%20of%3A%20each%20on%3A%20aStream%5D%5D%5D'),
messageSends: ["name", "do:", unescape("%2C"), "classes", "current", "collect:", "class", "protocolsDo:", "ifTrue:", unescape("%3D"), "exportMethods:category:of:on:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportPackageDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportPackageDefinitionOf%3Aon%3A'),
category: 'not yet classified',
fn: function (package, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("Smalltalk%20current%20createPackage%3A%20%27"), "__comma", [smalltalk.send(package, "_name", [])]), "__comma", [unescape("%27%20properties%3A%20")]), "__comma", [smalltalk.send(smalltalk.send(package, "_properties", []), "_storeString", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
args: ["package", "aStream"],
source: unescape('exportPackageDefinitionOf%3A%20package%20on%3A%20aStream%0A%09%22Chunk%20format.%22%0A%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27Smalltalk%20current%20createPackage%3A%20%27%27%27%2C%20package%20name%2C%0A%09%09%27%27%27%20properties%3A%20%27%2C%20package%20properties%20storeString%2C%20%27%21%27%3B%20lf.'),
messageSends: ["nextPutAll:", unescape("%2C"), "name", "storeString", "properties", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Compiler');
smalltalk.addMethod(
unescape('_exportDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportDefinitionOf%3Aon%3A'),
category: 'private',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addClass%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%27%2C%20")])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D%2C%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", [unescape("%27")])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);})(aStream);
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addClass%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%27%27%2C%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%2C%20%5B%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%5D%2C%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aClass%20category%2C%20%27%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%29%3B%27.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "lf"],
referencedClasses: []
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
unescape('_exportMethod_of_on_'),
smalltalk.method({
selector: unescape('exportMethod%3Aof%3Aon%3A'),
category: 'private',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addMethod%28")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_selector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%2C")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
args: ["aMethod", "aClass", "aStream"],
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.addMethod%28%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27%27%27%27%2C%20aMethod%20selector%20asSelector%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.method%28%7B%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27selector%3A%20%27%27%27%2C%20aMethod%20selector%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27fn%3A%20%27%2C%20aMethod%20fn%20compiledSource%3Blf%3B%0A%09%09nextPutAll%3A%20%27%7D%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%29%3B%27%3Blf%3Blf'),
messageSends: ["nextPutAll:", "lf", unescape("%2C"), "asSelector", "selector", "compiledSource", "fn", "classNameFor:"],
referencedClasses: []
}),
smalltalk.StrippedExporter);



smalltalk.addClass('Node', smalltalk.Object, ['nodes'], 'Compiler');
smalltalk.addMethod(
unescape('_nodes'),
smalltalk.method({
selector: unescape('nodes'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@nodes']) == nil || $receiver == undefined) ? (function(){return self['@nodes']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('nodes%0A%09%5Enodes%20ifNil%3A%20%5Bnodes%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_nodes_'),
smalltalk.method({
selector: unescape('nodes%3A'),
category: 'building',
fn: function (aCollection){
var self=this;
self['@nodes']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('nodes%3A%20aCollection%0A%09nodes%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_addNode_'),
smalltalk.method({
selector: unescape('addNode%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self, "_nodes", []), "_add_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('addNode%3A%20aNode%0A%09self%20nodes%20add%3A%20aNode'),
messageSends: ["add:", "nodes"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitNode%3A%20self'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_isValueNode'),
smalltalk.method({
selector: unescape('isValueNode'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isValueNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_isBlockNode'),
smalltalk.method({
selector: unescape('isBlockNode'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isBlockNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_isBlockSequenceNode'),
smalltalk.method({
selector: unescape('isBlockSequenceNode'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isBlockSequenceNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source'], 'Compiler');
smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
args: ["aString"],
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@arguments']) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver;
return self;},
args: [],
source: unescape('arguments%0A%09%5Earguments%20ifNil%3A%20%5B%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_arguments_'),
smalltalk.method({
selector: unescape('arguments%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('arguments%3A%20aCollection%0A%09arguments%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return self['@source'];
return self;},
args: [],
source: unescape('source%0A%09%5Esource'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
args: ["aString"],
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitMethodNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitMethodNode%3A%20self'),
messageSends: ["visitMethodNode:"],
referencedClasses: []
}),
smalltalk.MethodNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver'], 'Compiler');
smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
args: ["aString"],
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@arguments']) == nil || $receiver == undefined) ? (function(){return self['@arguments']=[];})() : $receiver;
return self;},
args: [],
source: unescape('arguments%0A%09%5Earguments%20ifNil%3A%20%5Barguments%20%3A%3D%20%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_arguments_'),
smalltalk.method({
selector: unescape('arguments%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('arguments%3A%20aCollection%0A%09arguments%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
args: [],
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;},
args: ["aNode"],
source: unescape('receiver%3A%20aNode%0A%09receiver%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_valueForReceiver_'),
smalltalk.method({
selector: unescape('valueForReceiver%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_receiver_", [(($receiver = smalltalk.send(self, "_receiver", [])) == nil || $receiver == undefined) ? (function(){return anObject;})() : (function(){return smalltalk.send(smalltalk.send(self, "_receiver", []), "_valueForReceiver_", [anObject]);})()]);smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.SendNode || SendNode), "_new", []));
return self;},
args: ["anObject"],
source: unescape('valueForReceiver%3A%20anObject%0A%09%5ESendNode%20new%0A%09%20%20%20%20receiver%3A%20%28self%20receiver%20%0A%09%09ifNil%3A%20%5BanObject%5D%0A%09%09ifNotNil%3A%20%5Bself%20receiver%20valueForReceiver%3A%20anObject%5D%29%3B%0A%09%20%20%20%20selector%3A%20self%20selector%3B%0A%09%20%20%20%20arguments%3A%20self%20arguments%3B%0A%09%20%20%20%20yourself'),
messageSends: ["receiver:", "ifNil:ifNotNil:", "receiver", "valueForReceiver:", "selector:", "selector", "arguments:", "arguments", "yourself", "new"],
referencedClasses: ["SendNode"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_cascadeNodeWithMessages_'),
smalltalk.method({
selector: unescape('cascadeNodeWithMessages%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
var first=nil;
first=(function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.SendNode || SendNode), "_new", []));
return (function($rec){smalltalk.send($rec, "_receiver_", [smalltalk.send(self, "_receiver", [])]);smalltalk.send($rec, "_nodes_", [smalltalk.send(smalltalk.send((smalltalk.Array || Array), "_with_", [first]), "__comma", [aCollection])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.CascadeNode || CascadeNode), "_new", []));
return self;},
args: ["aCollection"],
source: unescape('cascadeNodeWithMessages%3A%20aCollection%0A%09%7C%20first%20%7C%0A%09first%20%3A%3D%20SendNode%20new%0A%09%20%20%20%20selector%3A%20self%20selector%3B%0A%09%20%20%20%20arguments%3A%20self%20arguments%3B%0A%09%20%20%20%20yourself.%0A%09%5ECascadeNode%20new%0A%09%20%20%20%20receiver%3A%20self%20receiver%3B%0A%09%20%20%20%20nodes%3A%20%28Array%20with%3A%20first%29%2C%20aCollection%3B%0A%09%20%20%20%20yourself'),
messageSends: ["selector:", "selector", "arguments:", "arguments", "yourself", "new", "receiver:", "receiver", "nodes:", unescape("%2C"), "with:"],
referencedClasses: ["SendNode", "Array", "CascadeNode"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitSendNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitSendNode%3A%20self'),
messageSends: ["visitSendNode:"],
referencedClasses: []
}),
smalltalk.SendNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler');
smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
args: [],
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;},
args: ["aNode"],
source: unescape('receiver%3A%20aNode%0A%09receiver%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitCascadeNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitCascadeNode%3A%20self'),
messageSends: ["visitCascadeNode:"],
referencedClasses: []
}),
smalltalk.CascadeNode);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler');
smalltalk.addMethod(
unescape('_left'),
smalltalk.method({
selector: unescape('left'),
category: 'accessing',
fn: function (){
var self=this;
return self['@left'];
return self;},
args: [],
source: unescape('left%0A%09%5Eleft'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
unescape('_left_'),
smalltalk.method({
selector: unescape('left%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
self['@left']=aNode;
smalltalk.send(self['@left'], "_assigned_", [true]);
return self;},
args: ["aNode"],
source: unescape('left%3A%20aNode%0A%09left%20%3A%3D%20aNode.%0A%09left%20assigned%3A%20true'),
messageSends: ["assigned:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
unescape('_right'),
smalltalk.method({
selector: unescape('right'),
category: 'accessing',
fn: function (){
var self=this;
return self['@right'];
return self;},
args: [],
source: unescape('right%0A%09%5Eright'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
unescape('_right_'),
smalltalk.method({
selector: unescape('right%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
self['@right']=aNode;
return self;},
args: ["aNode"],
source: unescape('right%3A%20aNode%0A%09right%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitAssignmentNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitAssignmentNode%3A%20self'),
messageSends: ["visitAssignmentNode:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'inlined'], 'Compiler');
smalltalk.addMethod(
unescape('_parameters'),
smalltalk.method({
selector: unescape('parameters'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@parameters']) == nil || $receiver == undefined) ? (function(){return self['@parameters']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('parameters%0A%09%5Eparameters%20ifNil%3A%20%5Bparameters%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_parameters_'),
smalltalk.method({
selector: unescape('parameters%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@parameters']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('parameters%3A%20aCollection%0A%09parameters%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitBlockNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitBlockNode%3A%20self'),
messageSends: ["visitBlockNode:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_isBlockNode'),
smalltalk.method({
selector: unescape('isBlockNode'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isBlockNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_inlined'),
smalltalk.method({
selector: unescape('inlined'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@inlined']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
args: [],
source: unescape('inlined%0A%09%5Einlined%20ifNil%3A%20%5Bfalse%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_inlined_'),
smalltalk.method({
selector: unescape('inlined%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@inlined']=aBoolean;
return self;},
args: ["aBoolean"],
source: unescape('inlined%3A%20aBoolean%0A%09inlined%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps'], 'Compiler');
smalltalk.addMethod(
unescape('_temps'),
smalltalk.method({
selector: unescape('temps'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@temps']) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver;
return self;},
args: [],
source: unescape('temps%0A%09%5Etemps%20ifNil%3A%20%5B%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
unescape('_temps_'),
smalltalk.method({
selector: unescape('temps%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@temps']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('temps%3A%20aCollection%0A%09temps%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
unescape('_asBlockSequenceNode'),
smalltalk.method({
selector: unescape('asBlockSequenceNode'),
category: 'testing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_nodes_", [smalltalk.send(self, "_nodes", [])]);smalltalk.send($rec, "_temps_", [smalltalk.send(self, "_temps", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.BlockSequenceNode || BlockSequenceNode), "_new", []));
return self;},
args: [],
source: unescape('asBlockSequenceNode%0A%09%5EBlockSequenceNode%20new%0A%09%20%20%20%20nodes%3A%20self%20nodes%3B%0A%09%20%20%20%20temps%3A%20self%20temps%3B%0A%09%20%20%20%20yourself'),
messageSends: ["nodes:", "nodes", "temps:", "temps", "yourself", "new"],
referencedClasses: ["BlockSequenceNode"]
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitSequenceNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitSequenceNode%3A%20self'),
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitBlockSequenceNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitBlockSequenceNode%3A%20self'),
messageSends: ["visitBlockSequenceNode:"],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
unescape('_isBlockSequenceNode'),
smalltalk.method({
selector: unescape('isBlockSequenceNode'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isBlockSequenceNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitReturnNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitReturnNode%3A%20self'),
messageSends: ["visitReturnNode:"],
referencedClasses: []
}),
smalltalk.ReturnNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler');
smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
category: 'accessing',
fn: function (){
var self=this;
return self['@value'];
return self;},
args: [],
source: unescape('value%0A%09%5Evalue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
self['@value']=anObject;
return self;},
args: ["anObject"],
source: unescape('value%3A%20anObject%0A%09value%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitValueNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitValueNode%3A%20self'),
messageSends: ["visitValueNode:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
unescape('_isValueNode'),
smalltalk.method({
selector: unescape('isValueNode'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isValueNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned'], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitVariableNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitVariableNode%3A%20self'),
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
unescape('_assigned'),
smalltalk.method({
selector: unescape('assigned'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@assigned']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
args: [],
source: unescape('assigned%0A%09%5Eassigned%20ifNil%3A%20%5Bfalse%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
unescape('_assigned_'),
smalltalk.method({
selector: unescape('assigned%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@assigned']=aBoolean;
return self;},
args: ["aBoolean"],
source: unescape('assigned%3A%20aBoolean%0A%09assigned%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitClassReferenceNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitClassReferenceNode%3A%20self'),
messageSends: ["visitClassReferenceNode:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler');
smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@source']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('source%0A%09%5Esource%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
args: ["aString"],
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitJSStatementNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitJSStatementNode%3A%20self'),
messageSends: ["visitJSStatementNode:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);



smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
unescape('_visit_'),
smalltalk.method({
selector: unescape('visit%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;},
args: ["aNode"],
source: unescape('visit%3A%20aNode%0A%09aNode%20accept%3A%20self'),
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitNode_'),
smalltalk.method({
selector: unescape('visitNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;

return self;},
args: ["aNode"],
source: unescape('visitNode%3A%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitMethodNode_'),
smalltalk.method({
selector: unescape('visitMethodNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitMethodNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitSequenceNode_'),
smalltalk.method({
selector: unescape('visitSequenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitSequenceNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitBlockSequenceNode_'),
smalltalk.method({
selector: unescape('visitBlockSequenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitSequenceNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitBlockSequenceNode%3A%20aNode%0A%09self%20visitSequenceNode%3A%20aNode'),
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitBlockNode_'),
smalltalk.method({
selector: unescape('visitBlockNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitBlockNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitReturnNode_'),
smalltalk.method({
selector: unescape('visitReturnNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitReturnNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitSendNode_'),
smalltalk.method({
selector: unescape('visitSendNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitSendNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitCascadeNode_'),
smalltalk.method({
selector: unescape('visitCascadeNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitCascadeNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitValueNode_'),
smalltalk.method({
selector: unescape('visitValueNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitValueNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitVariableNode_'),
smalltalk.method({
selector: unescape('visitVariableNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;

return self;},
args: ["aNode"],
source: unescape('visitVariableNode%3A%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitAssignmentNode_'),
smalltalk.method({
selector: unescape('visitAssignmentNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitAssignmentNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitClassReferenceNode_'),
smalltalk.method({
selector: unescape('visitClassReferenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})(self);
return self;},
args: ["aNode"],
source: unescape('visitClassReferenceNode%3A%20aNode%0A%09self%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20value'),
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitJSStatementNode_'),
smalltalk.method({
selector: unescape('visitJSStatementNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("function%28%29%7B")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(aNode, "_source", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%28%29")]);})(self);
return self;},
args: ["aNode"],
source: unescape('visitJSStatementNode%3A%20aNode%0A%09self%20%0A%09%20%20%20%20nextPutAll%3A%20%27function%28%29%7B%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20source%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%7D%29%28%29%27'),
messageSends: ["nextPutAll:", "source"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitDynamicArrayNode_'),
smalltalk.method({
selector: unescape('visitDynamicArrayNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitDynamicArrayNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitDynamicDictionaryNode_'),
smalltalk.method({
selector: unescape('visitDynamicDictionaryNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitDynamicDictionaryNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);



smalltalk.addClass('Compiler', smalltalk.NodeVisitor, ['stream', 'nestedBlocks', 'earlyReturn', 'currentClass', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'source', 'argVariables'], 'Compiler');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.NodeVisitor);
self['@stream']=smalltalk.send("", "_writeStream", []);
self['@unknownVariables']=[];
self['@tempVariables']=[];
self['@argVariables']=[];
self['@messageSends']=[];
self['@classReferenced']=[];
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09stream%20%3A%3D%20%27%27%20writeStream.%20%0A%09unknownVariables%20%3A%3D%20%23%28%29.%0A%09tempVariables%20%3A%3D%20%23%28%29.%0A%09argVariables%20%3A%3D%20%23%28%29.%0A%09messageSends%20%3A%3D%20%23%28%29.%0A%09classReferenced%20%3A%3D%20%23%28%29'),
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_parser'),
smalltalk.method({
selector: unescape('parser'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.SmalltalkParser || SmalltalkParser), "_new", []);
return self;},
args: [],
source: unescape('parser%0A%09%5ESmalltalkParser%20new'),
messageSends: ["new"],
referencedClasses: ["SmalltalkParser"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_currentClass'),
smalltalk.method({
selector: unescape('currentClass'),
category: 'accessing',
fn: function (){
var self=this;
return self['@currentClass'];
return self;},
args: [],
source: unescape('currentClass%0A%09%5EcurrentClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_currentClass_'),
smalltalk.method({
selector: unescape('currentClass%3A'),
category: 'accessing',
fn: function (aClass){
var self=this;
self['@currentClass']=aClass;
return self;},
args: ["aClass"],
source: unescape('currentClass%3A%20aClass%0A%09currentClass%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_loadExpression_'),
smalltalk.method({
selector: unescape('loadExpression%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
var result=nil;
smalltalk.send((smalltalk.DoIt || DoIt), "_addCompiledMethod_", [smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compileExpression_", [aString])])]);
result=smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt), "_new", []), "_doIt", []);
smalltalk.send((smalltalk.DoIt || DoIt), "_removeCompiledMethod_", [smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt), "_methodDictionary", []), "_at_", ["doIt"])]);
return result;
return self;},
args: ["aString"],
source: unescape('loadExpression%3A%20aString%0A%09%7C%20result%20%7C%0A%09DoIt%20addCompiledMethod%3A%20%28self%20eval%3A%20%28self%20compileExpression%3A%20aString%29%29.%0A%09result%20%3A%3D%20DoIt%20new%20doIt.%0A%09DoIt%20removeCompiledMethod%3A%20%28DoIt%20methodDictionary%20at%3A%20%23doIt%29.%0A%09%5Eresult'),
messageSends: ["addCompiledMethod:", "eval:", "compileExpression:", "doIt", "new", "removeCompiledMethod:", "at:", "methodDictionary"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_load_forClass_'),
smalltalk.method({
selector: unescape('load%3AforClass%3A'),
category: 'compiling',
fn: function (aString, aClass){
var self=this;
var compiled=nil;
compiled=smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compile_forClass_", [aString, aClass])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return compiled;
return self;},
args: ["aString", "aClass"],
source: unescape('load%3A%20aString%20forClass%3A%20aClass%0A%09%7C%20compiled%20%7C%0A%09compiled%20%3A%3D%20self%20eval%3A%20%28self%20compile%3A%20aString%20forClass%3A%20aClass%29.%0A%09self%20setupClass%3A%20aClass.%0A%09%5Ecompiled'),
messageSends: ["eval:", "compile:forClass:", "setupClass:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_compile_forClass_'),
smalltalk.method({
selector: unescape('compile%3AforClass%3A'),
category: 'compiling',
fn: function (aString, aClass){
var self=this;
smalltalk.send(self, "_currentClass_", [aClass]);
smalltalk.send(self, "_source_", [aString]);
return smalltalk.send(self, "_compile_", [aString]);
return self;},
args: ["aString", "aClass"],
source: unescape('compile%3A%20aString%20forClass%3A%20aClass%0A%09self%20currentClass%3A%20aClass.%0A%09self%20source%3A%20aString.%0A%09%5Eself%20compile%3A%20aString'),
messageSends: ["currentClass:", "source:", "compile:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_compileExpression_'),
smalltalk.method({
selector: unescape('compileExpression%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
smalltalk.send(self, "_currentClass_", [(smalltalk.DoIt || DoIt)]);
smalltalk.send(self, "_source_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")])]);
return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parse_", [smalltalk.send(self, "_source", [])])]);
return self;},
args: ["aString"],
source: unescape('compileExpression%3A%20aString%0A%09self%20currentClass%3A%20DoIt.%0A%09self%20source%3A%20%27doIt%20%5E%5B%27%2C%20aString%2C%20%27%5D%20value%27.%0A%09%5Eself%20compileNode%3A%20%28self%20parse%3A%20self%20source%29'),
messageSends: ["currentClass:", "source:", unescape("%2C"), "compileNode:", "parse:", "source"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_eval_'),
smalltalk.method({
selector: unescape('eval%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
return eval(aString);
return self;},
args: ["aString"],
source: unescape('eval%3A%20aString%0A%09%3Creturn%20eval%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_compile_'),
smalltalk.method({
selector: unescape('compile%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parse_", [aString])]);
return self;},
args: ["aString"],
source: unescape('compile%3A%20aString%0A%09%5Eself%20compileNode%3A%20%28self%20parse%3A%20aString%29'),
messageSends: ["compileNode:", "parse:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_compileNode_'),
smalltalk.method({
selector: unescape('compileNode%3A'),
category: 'compiling',
fn: function (aNode){
var self=this;
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self['@stream'], "_contents", []);
return self;},
args: ["aNode"],
source: unescape('compileNode%3A%20aNode%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09self%20visit%3A%20aNode.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "visit:", "contents"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visit_'),
smalltalk.method({
selector: unescape('visit%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;},
args: ["aNode"],
source: unescape('visit%3A%20aNode%0A%09aNode%20accept%3A%20self'),
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitMethodNode_'),
smalltalk.method({
selector: unescape('visitMethodNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var str=nil;
var currentSelector=nil;
self['@currentSelector']=smalltalk.send(smalltalk.send(aNode, "_selector", []), "_asSelector", []);
self['@nestedBlocks']=(0);
self['@earlyReturn']=false;
self['@messageSends']=[];
self['@referencedClasses']=[];
self['@unknownVariables']=[];
self['@tempVariables']=[];
self['@argVariables']=[];
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%22"), "__comma", [smalltalk.send(aNode, "_selector", [])]), "__comma", [unescape("%22%2C")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("source%3A%20unescape%28%22"), "__comma", [smalltalk.send(smalltalk.send(self, "_source", []), "_escaped", [])]), "__comma", [unescape("%22%29%2C")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("fn%3A%20function%28")]);
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@argVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%29%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("var%20self%3Dthis%3B")]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
str=self['@stream'];
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [unescape("try%7B")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [unescape("try%7B")]);})]));
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self['@stream'], "_contents", [])]);
self['@stream']=str;
(function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("return%20self%3B")]);})(self['@stream']);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27stReturn%27%20%26%26%20e.selector%20%3D%3D%3D%20"), "__comma", [smalltalk.send(self['@currentSelector'], "_printString", [])]), "__comma", [unescape("%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D")])]);})(self['@stream']);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27stReturn%27%20%26%26%20e.selector%20%3D%3D%3D%20"), "__comma", [smalltalk.send(self['@currentSelector'], "_printString", [])]), "__comma", [unescape("%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D")])]);})(self['@stream']);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D")]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%2C"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@messageSends'], "_asJavascript", []), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(self['@argVariables'], "_asJavascript", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("referencedClasses%3A%20%5B")]);})(self['@stream']);
smalltalk.send(self['@referencedClasses'], "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5D")]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29")]);
return self;},
args: ["aNode"],
source: unescape('visitMethodNode%3A%20aNode%0A%09%7C%20str%20currentSelector%20%7C%20%0A%09currentSelector%20%3A%3D%20aNode%20selector%20asSelector.%0A%09nestedBlocks%20%3A%3D%200.%0A%09earlyReturn%20%3A%3D%20false.%0A%09messageSends%20%3A%3D%20%23%28%29.%0A%09referencedClasses%20%3A%3D%20%23%28%29.%0A%09unknownVariables%20%3A%3D%20%23%28%29.%0A%09tempVariables%20%3A%3D%20%23%28%29.%0A%09argVariables%20%3A%3D%20%23%28%29.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.method%28%7B%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27selector%3A%20%22%27%2C%20aNode%20selector%2C%20%27%22%2C%27%3B%20lf.%0A%09stream%20nextPutAll%3A%20%27source%3A%20unescape%28%22%27%2C%20self%20source%20escaped%2C%20%27%22%29%2C%27%3Blf.%0A%09stream%20nextPutAll%3A%20%27fn%3A%20function%28%27.%0A%09aNode%20arguments%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09argVariables%20add%3A%20each.%0A%09%09stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27%29%7B%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27var%20self%3Dthis%3B%27%3B%20lf.%0A%09str%20%3A%3D%20stream.%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each%5D.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20str%20nextPutAll%3A%20%27try%7B%27%5D.%0A%09str%20nextPutAll%3A%20stream%20contents.%0A%09stream%20%3A%3D%20str.%0A%09stream%20%0A%09%20%20%20%20lf%3B%20%0A%09%20%20%20%20nextPutAll%3A%20%27return%20self%3B%27.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20stream%20lf%3B%20nextPutAll%3A%20%27%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27%27stReturn%27%27%20%26%26%20e.selector%20%3D%3D%3D%20%27%2C%20currentSelector%20printString%2C%20%27%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D%27%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%27.%0A%09stream%20%0A%09%09nextPutAll%3A%20%27%2C%27%2C%20String%20lf%2C%20%27messageSends%3A%20%27%3B%0A%09%09nextPutAll%3A%20messageSends%20asJavascript%2C%20%27%2C%27%3B%20lf%3B%0A%20%20%20%20%20%20%20%20%20%20%09nextPutAll%3A%20%27args%3A%20%27%2C%20argVariables%20asJavascript%2C%20%27%2C%27%3B%20lf%3B%0A%09%09nextPutAll%3A%20%27referencedClasses%3A%20%5B%27.%0A%09referencedClasses%20%0A%09%09do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%20printString%5D%0A%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09stream%20nextPutAll%3A%20%27%5D%27.%0A%09stream%20nextPutAll%3A%20%27%7D%29%27'),
messageSends: ["asSelector", "selector", "nextPutAll:", "lf", unescape("%2C"), "escaped", "source", "do:separatedBy:", "arguments", "add:", "writeStream", "do:", "nodes", "visit:", "ifTrue:", "contents", "printString", "asJavascript"],
referencedClasses: ["String"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitBlockNode_'),
smalltalk.method({
selector: unescape('visitBlockNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28")]);
smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%7B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29")]);
return self;},
args: ["aNode"],
source: unescape('visitBlockNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27%28function%28%27.%0A%09aNode%20parameters%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%0A%09%09tempVariables%20add%3A%20each.%0A%09%09stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09stream%20nextPutAll%3A%20%27%29%7B%27.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%29%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "parameters", "add:", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitSequenceNode_'),
smalltalk.method({
selector: unescape('visitSequenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
temp=smalltalk.send(self, "_safeVariableNameFor_", [each]);smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);}), (function(){return smalltalk.send(self['@stream'], "_lf", []);})]);
return self;},
args: ["aNode"],
source: unescape('visitSequenceNode%3A%20aNode%0A%09aNode%20temps%20do%3A%20%5B%3Aeach%20%7C%7C%20temp%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20temp%20%3A%3D%20self%20safeVariableNameFor%3A%20each.%0A%09%20%20%20%20tempVariables%20add%3A%20temp.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27var%20%27%2C%20temp%2C%20%27%3Dnil%3B%27%3B%20lf%5D.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20lf%5D'),
messageSends: ["do:", "temps", "safeVariableNameFor:", "add:", "nextPutAll:", unescape("%2C"), "lf", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitBlockSequenceNode_'),
smalltalk.method({
selector: unescape('visitBlockSequenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var index=nil;
self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
((($receiver = smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("return%20nil%3B")]);})() : (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
temp=smalltalk.send(self, "_safeVariableNameFor_", [each]);smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);index=(0);return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("return%20nil%3B")]);}), (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
temp=smalltalk.send(self, "_safeVariableNameFor_", [each]);smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);index=(0);return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);})]));
self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));
return self;},
args: ["aNode"],
source: unescape('visitBlockSequenceNode%3A%20aNode%0A%09%7C%20index%20%7C%0A%09nestedBlocks%20%3A%3D%20nestedBlocks%20+%201.%0A%09aNode%20nodes%20isEmpty%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%20nextPutAll%3A%20%27return%20nil%3B%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aNode%20temps%20do%3A%20%5B%3Aeach%20%7C%20%7C%20temp%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20temp%20%3A%3D%20self%20safeVariableNameFor%3A%20each.%0A%09%09%20%20%20%20tempVariables%20add%3A%20temp.%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20%27var%20%27%2C%20temp%2C%20%27%3Dnil%3B%27%3B%20lf%5D.%0A%09%09index%20%3A%3D%200.%0A%09%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%09%20%20%20%20index%20%3D%20aNode%20nodes%20size%20ifTrue%3A%20%5B%0A%09%09%09stream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09%09%20%20%20%20self%20visit%3A%20each.%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D%5D.%0A%09nestedBlocks%20%3A%3D%20nestedBlocks%20-%201'),
messageSends: [unescape("+"), "ifTrue:ifFalse:", "isEmpty", "nodes", "nextPutAll:", "do:", "temps", "safeVariableNameFor:", "add:", unescape("%2C"), "lf", "ifTrue:", unescape("%3D"), "size", "visit:", unescape("-")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitReturnNode_'),
smalltalk.method({
selector: unescape('visitReturnNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@earlyReturn']=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@earlyReturn']=true;})]));
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%28function%28%29%7Bthrow%28")]);smalltalk.send($rec, "_nextPutAll_", [unescape("%7Bname%3A%20%27stReturn%27%2C%20selector%3A%20")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@currentSelector'], "_printString", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20fn%3A%20function%28%29%7Breturn%20")]);})(self['@stream']);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%28function%28%29%7Bthrow%28")]);smalltalk.send($rec, "_nextPutAll_", [unescape("%7Bname%3A%20%27stReturn%27%2C%20selector%3A%20")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@currentSelector'], "_printString", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20fn%3A%20function%28%29%7Breturn%20")]);})(self['@stream']);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%7D%29%7D%29%28%29")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%7D%29%7D%29%28%29")]);})]));
return self;},
args: ["aNode"],
source: unescape('visitReturnNode%3A%20aNode%0A%09nestedBlocks%20%3E%200%20ifTrue%3A%20%5B%0A%09%20%20%20%20earlyReturn%20%3A%3D%20true%5D.%0A%09earlyReturn%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%0A%09%09%20%20%20%20nextPutAll%3A%20%27%28function%28%29%7Bthrow%28%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%7Bname%3A%20%27%27stReturn%27%27%2C%20selector%3A%20%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20currentSelector%20printString%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%2C%20fn%3A%20function%28%29%7Breturn%20%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each%5D.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%7D%7D%29%7D%29%28%29%27%5D'),
messageSends: ["ifTrue:", unescape("%3E"), "ifTrue:ifFalse:", "nextPutAll:", "printString", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitSendNode_'),
smalltalk.method({
selector: unescape('visitSendNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var str=nil;
var receiver=nil;
var superSend=nil;
var inlined=nil;
str=self['@stream'];
((($receiver = smalltalk.send(self['@messageSends'], "_includes_", [smalltalk.send(aNode, "_selector", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})]));
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
superSend=smalltalk.send(smalltalk.send(self['@stream'], "_contents", []), "__eq", ["super"]);
receiver=((($receiver = superSend).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "self";})() : (function(){return smalltalk.send(self['@stream'], "_contents", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "self";}), (function(){return smalltalk.send(self['@stream'], "_contents", []);})]));
self['@stream']=str;
((($receiver = smalltalk.send(self, "_performOptimizations", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})]));})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})]));}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));
return self;},
args: ["aNode"],
source: unescape('visitSendNode%3A%20aNode%0A%20%20%20%20%20%20%20%20%7C%20str%20receiver%20superSend%20inlined%20%7C%0A%20%20%20%20%20%20%20%20str%20%3A%3D%20stream.%0A%20%20%20%20%20%20%20%20%28messageSends%20includes%3A%20aNode%20selector%29%20ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20messageSends%20add%3A%20aNode%20selector%5D.%0A%20%20%20%20%20%20%20%20stream%20%3A%3D%20%27%27%20writeStream.%0A%20%20%20%20%20%20%20%20self%20visit%3A%20aNode%20receiver.%0A%20%20%20%20%20%20%20%20superSend%20%3A%3D%20stream%20contents%20%3D%20%27super%27.%0A%20%20%20%20%20%20%20%20receiver%20%3A%3D%20superSend%20ifTrue%3A%20%5B%27self%27%5D%20ifFalse%3A%20%5Bstream%20contents%5D.%0A%20%20%20%20%20%20%20%20stream%20%3A%3D%20str.%0A%09%0A%09self%20performOptimizations%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09%28self%20inlineLiteral%3A%20aNode%20selector%20receiverNode%3A%20aNode%20receiver%20argumentNodes%3A%20aNode%20arguments%29%20ifFalse%3A%20%5B%0A%09%09%09%09%28self%20inline%3A%20aNode%20selector%20receiver%3A%20receiver%20argumentNodes%3A%20aNode%20arguments%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27%20%3A%20%27%2C%20%28self%20send%3A%20aNode%20selector%20to%3A%20%27%24receiver%27%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%2C%20%27%29%27%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%28self%20send%3A%20aNode%20selector%20to%3A%20receiver%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%5D%5D%5D%0A%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%28self%20send%3A%20aNode%20selector%20to%3A%20receiver%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%5D'),
messageSends: ["ifFalse:", "includes:", "selector", "add:", "writeStream", "visit:", "receiver", unescape("%3D"), "contents", "ifTrue:ifFalse:", "performOptimizations", "inlineLiteral:receiverNode:argumentNodes:", "arguments", "inline:receiver:argumentNodes:", "nextPutAll:", unescape("%2C"), "send:to:arguments:superSend:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitCascadeNode_'),
smalltalk.method({
selector: unescape('visitCascadeNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var index=nil;
index=(0);
((($receiver = smalltalk.send(self['@tempVariables'], "_includes_", ["$rec"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@tempVariables'], "_add_", ["$rec"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@tempVariables'], "_add_", ["$rec"]);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%24rec%29%7B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", []), "_value_", ["$rec"])]);smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29%28")]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29")]);
return self;},
args: ["aNode"],
source: unescape('visitCascadeNode%3A%20aNode%0A%09%7C%20index%20%7C%0A%09index%20%3A%3D%200.%0A%09%28tempVariables%20includes%3A%20%27%24rec%27%29%20ifFalse%3A%20%5B%0A%09%09tempVariables%20add%3A%20%27%24rec%27%5D.%0A%09stream%20nextPutAll%3A%20%27%28function%28%24rec%29%7B%27.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%20%20%20%20index%20%3D%20aNode%20nodes%20size%20ifTrue%3A%20%5B%0A%09%09stream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09%20%20%20%20each%20receiver%3A%20%28VariableNode%20new%20value%3A%20%27%24rec%27%29.%0A%09%20%20%20%20self%20visit%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%29%28%27.%0A%09self%20visit%3A%20aNode%20receiver.%0A%09stream%20nextPutAll%3A%20%27%29%27'),
messageSends: ["ifFalse:", "includes:", "add:", "nextPutAll:", "do:", "nodes", unescape("+"), "ifTrue:", unescape("%3D"), "size", "receiver:", "value:", "new", "visit:", "receiver"],
referencedClasses: ["VariableNode"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitValueNode_'),
smalltalk.method({
selector: unescape('visitValueNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;},
args: ["aNode"],
source: unescape('visitValueNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20aNode%20value%20asJavascript'),
messageSends: ["nextPutAll:", "asJavascript", "value"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitAssignmentNode_'),
smalltalk.method({
selector: unescape('visitAssignmentNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3D")]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);
return self;},
args: ["aNode"],
source: unescape('visitAssignmentNode%3A%20aNode%0A%09self%20visit%3A%20aNode%20left.%0A%09stream%20nextPutAll%3A%20%27%3D%27.%0A%09self%20visit%3A%20aNode%20right'),
messageSends: ["visit:", "left", "nextPutAll:", "right"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitClassReferenceNode_'),
smalltalk.method({
selector: unescape('visitClassReferenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
((($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28smalltalk."), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%7C%7C%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);
return self;},
args: ["aNode"],
source: unescape('visitClassReferenceNode%3A%20aNode%0A%09%28referencedClasses%20includes%3A%20aNode%20value%29%20ifFalse%3A%20%5B%0A%09%09referencedClasses%20add%3A%20aNode%20value%5D.%0A%09stream%20nextPutAll%3A%20%27%28smalltalk.%27%2C%20aNode%20value%2C%20%27%20%7C%7C%20%27%2C%20aNode%20value%2C%20%27%29%27'),
messageSends: ["ifFalse:", "includes:", "value", "add:", "nextPutAll:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitVariableNode_'),
smalltalk.method({
selector: unescape('visitVariableNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var varName=nil;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("self%5B%27@"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%27%5D")])]);})() : (function(){varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("self%5B%27@"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%27%5D")])]);}), (function(){varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})]));
return self;},
args: ["aNode"],
source: unescape('visitVariableNode%3A%20aNode%0A%09%7C%20varName%20%7C%0A%09%28self%20currentClass%20allInstanceVariableNames%20includes%3A%20aNode%20value%29%20%0A%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27self%5B%27%27@%27%2C%20aNode%20value%2C%20%27%27%27%5D%27%5D%0A%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09varName%20%3A%3D%20self%20safeVariableNameFor%3A%20aNode%20value.%0A%09%09%09%28self%20knownVariables%20includes%3A%20varName%29%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09unknownVariables%20add%3A%20aNode%20value.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09aNode%20assigned%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20varName%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%27%28typeof%20%27%2C%20varName%2C%20%27%20%3D%3D%20%27%27undefined%27%27%20%3F%20nil%20%3A%20%27%2C%20varName%2C%20%27%29%27%5D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09aNode%20value%20%3D%20%27thisContext%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27%28smalltalk.getThisContext%28%29%29%27%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20varName%5D%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "includes:", "allInstanceVariableNames", "currentClass", "value", "nextPutAll:", unescape("%2C"), "safeVariableNameFor:", "ifFalse:ifTrue:", "knownVariables", "add:", "assigned", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitJSStatementNode_'),
smalltalk.method({
selector: unescape('visitJSStatementNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_source", []), "_replace_with_", [unescape("%3E%3E"), unescape("%3E")])]);
return self;},
args: ["aNode"],
source: unescape('visitJSStatementNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%28aNode%20source%20replace%3A%20%27%3E%3E%27%20with%3A%20%27%3E%27%29'),
messageSends: ["nextPutAll:", "replace:with:", "source"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_parse_'),
smalltalk.method({
selector: unescape('parse%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_parse_", [aString]);
return self;},
args: ["aString"],
source: unescape('parse%3A%20aString%0A%20%20%20%20%5ESmalltalk%20current%20parse%3A%20aString'),
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_parseExpression_'),
smalltalk.method({
selector: unescape('parseExpression%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_parse_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")])]);
return self;},
args: ["aString"],
source: unescape('parseExpression%3A%20aString%0A%20%20%20%20%5Eself%20parse%3A%20%27doIt%20%5E%5B%27%2C%20aString%2C%20%27%5D%20value%27'),
messageSends: ["parse:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_unknownVariables'),
smalltalk.method({
selector: unescape('unknownVariables'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@unknownVariables'], "_copy", []);
return self;},
args: [],
source: unescape('unknownVariables%0A%09%5EunknownVariables%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_pseudoVariables'),
smalltalk.method({
selector: unescape('pseudoVariables'),
category: 'accessing',
fn: function (){
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
return self;},
args: [],
source: unescape('pseudoVariables%0A%09%5E%23%28%27self%27%20%27super%27%20%27true%27%20%27false%27%20%27nil%27%20%27thisContext%27%29'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_tempVariables'),
smalltalk.method({
selector: unescape('tempVariables'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@tempVariables'], "_copy", []);
return self;},
args: [],
source: unescape('tempVariables%0A%09%5EtempVariables%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_knownVariables'),
smalltalk.method({
selector: unescape('knownVariables'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_tempVariables", [])]);smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_argVariables", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_pseudoVariables", []));
return self;},
args: [],
source: unescape('knownVariables%0A%09%5Eself%20pseudoVariables%20%0A%09%09addAll%3A%20self%20tempVariables%3B%0A%09%09addAll%3A%20self%20argVariables%3B%0A%09%09yourself'),
messageSends: ["addAll:", "tempVariables", "argVariables", "yourself", "pseudoVariables"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_recompile_'),
smalltalk.method({
selector: unescape('recompile%3A'),
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [(function(each){var method=nil;
method=smalltalk.send(self, "_load_forClass_", [smalltalk.send(each, "_source", []), aClass]);smalltalk.send(method, "_category_", [smalltalk.send(each, "_category", [])]);return smalltalk.send(aClass, "_addCompiledMethod_", [method]);})]);
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})]));
return self;},
args: ["aClass"],
source: unescape('recompile%3A%20aClass%0A%09aClass%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%7C%20method%20%7C%0A%09%09method%20%3A%3D%20self%20load%3A%20each%20source%20forClass%3A%20aClass.%0A%09%09method%20category%3A%20each%20category.%0A%09%09aClass%20addCompiledMethod%3A%20method%5D.%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20recompile%3A%20aClass%20class%5D'),
messageSends: ["do:", "methodDictionary", "load:forClass:", "source", "category:", "category", "addCompiledMethod:", "ifFalse:", "isMetaclass", "recompile:", "class"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_recompileAll'),
smalltalk.method({
selector: unescape('recompileAll'),
category: 'compiling',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_do_", [(function(each){(function($rec){smalltalk.send($rec, "_show_", [each]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));return smalltalk.send((function(){return smalltalk.send(self, "_recompile_", [each]);}), "_valueWithTimeout_", [(100)]);})]);
return self;},
args: [],
source: unescape('recompileAll%0A%09Smalltalk%20current%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09Transcript%20show%3A%20each%3B%20cr.%0A%09%09%5Bself%20recompile%3A%20each%5D%20valueWithTimeout%3A%20100%5D'),
messageSends: ["do:", "classes", "current", "show:", "cr", "valueWithTimeout:", "recompile:"],
referencedClasses: ["Smalltalk", "Transcript"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_classNameFor_'),
smalltalk.method({
selector: unescape('classNameFor%3A'),
category: 'accessing',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);})() : (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})]));
return self;},
args: ["aClass"],
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27.klass%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitFailure_'),
smalltalk.method({
selector: unescape('visitFailure%3A'),
category: 'visiting',
fn: function (aFailure){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send(aFailure, "_asString", [])]);
return self;},
args: ["aFailure"],
source: unescape('visitFailure%3A%20aFailure%0A%09self%20error%3A%20aFailure%20asString'),
messageSends: ["error:", "asString"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_setupClass_'),
smalltalk.method({
selector: unescape('setupClass%3A'),
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);
return self;},
args: ["aClass"],
source: unescape('setupClass%3A%20aClass%0A%09%3Csmalltalk.init%28aClass%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_send_to_arguments_superSend_'),
smalltalk.method({
selector: unescape('send%3Ato%3Aarguments%3AsuperSend%3A'),
category: 'visiting',
fn: function (aSelector, aReceiver, aCollection, aBoolean){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(str){var tmp=nil;
tmp=self['@stream'];smalltalk.send(str, "_nextPutAll_", [unescape("smalltalk.send%28")]);smalltalk.send(str, "_nextPutAll_", [aReceiver]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%2C%20%22"), "__comma", [smalltalk.send(aSelector, "_asSelector", [])]), "__comma", [unescape("%22%2C%20%5B")])]);self['@stream']=str;smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);self['@stream']=tmp;smalltalk.send(str, "_nextPutAll_", [unescape("%5D")]);((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(unescape("%2C%20smalltalk."), "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(unescape("%2C%20smalltalk."), "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})]));return smalltalk.send(str, "_nextPutAll_", [unescape("%29")]);})]);
return self;},
args: ["aSelector", "aReceiver", "aCollection", "aBoolean"],
source: unescape('send%3A%20aSelector%20to%3A%20aReceiver%20arguments%3A%20aCollection%20superSend%3A%20aBoolean%0A%09%5EString%20streamContents%3A%20%5B%3Astr%20%7C%7C%20tmp%20%7C%0A%20%20%20%20%20%20%20%20%09tmp%20%3A%3D%20stream.%0A%09%09str%20nextPutAll%3A%20%27smalltalk.send%28%27.%0A%09%09str%20nextPutAll%3A%20aReceiver.%0A%09%09str%20nextPutAll%3A%20%27%2C%20%22%27%2C%20aSelector%20asSelector%2C%20%27%22%2C%20%5B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20%3A%3D%20str.%0A%09%09aCollection%0A%09%20%20%20%20%09%09do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%20%20%20%20%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20%3A%3D%20tmp.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20nextPutAll%3A%20%27%5D%27.%0A%09%09aBoolean%20ifTrue%3A%20%5B%0A%09%09%09str%20nextPutAll%3A%20%27%2C%20smalltalk.%27%2C%20%28self%20classNameFor%3A%20self%20currentClass%20superclass%29%5D.%0A%09%09str%20nextPutAll%3A%20%27%29%27%5D'),
messageSends: ["streamContents:", "nextPutAll:", unescape("%2C"), "asSelector", "do:separatedBy:", "visit:", "ifTrue:", "classNameFor:", "superclass", "currentClass"],
referencedClasses: ["String"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_checkClass_for_'),
smalltalk.method({
selector: unescape('checkClass%3Afor%3A'),
category: 'optimizations',
fn: function (aClassName, receiver){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28%28%28%24receiver%20%3D%20"), "__comma", [receiver]), "__comma", [unescape("%29.klass%20%3D%3D%3D%20smalltalk.")]), "__comma", [aClassName]), "__comma", [unescape("%29%20%3F%20")])]);
return self;},
args: ["aClassName", "receiver"],
source: unescape('checkClass%3A%20aClassName%20for%3A%20receiver%0A%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%28%28%28%24receiver%20%3D%20%27%2C%20receiver%2C%20%27%29.klass%20%3D%3D%3D%20smalltalk.%27%2C%20aClassName%2C%20%27%29%20%3F%20%27'),
messageSends: ["nextPutAll:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_inlineLiteral_receiverNode_argumentNodes_'),
smalltalk.method({
selector: unescape('inlineLiteral%3AreceiverNode%3AargumentNodes%3A'),
category: 'optimizations',
fn: function (aSelector, anObject, aCollection){
var self=this;
var inlined=nil;
inlined=false;
((($receiver = smalltalk.send(aSelector, "__eq", ["whileTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileTrue"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileFalse"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("-")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("*")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("/")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3C%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3E")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3E%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNil:ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNotNil:ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]));})]));
return inlined;
return self;},
args: ["aSelector", "anObject", "aCollection"],
source: unescape('inlineLiteral%3A%20aSelector%20receiverNode%3A%20anObject%20argumentNodes%3A%20aCollection%0A%20%20%20%20%20%20%20%20%7C%20inlined%20%7C%0A%20%20%20%20%20%20%20%20inlined%20%3A%3D%20false.%0A%20%0A%09%22--%20BlockClosures%20--%22%0A%0A%09%28aSelector%20%3D%20%27whileTrue%3A%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28anObject%20isBlockNode%20and%3A%20%5BaCollection%20first%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileFalse%3A%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28anObject%20isBlockNode%20and%3A%20%5BaCollection%20first%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%21%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileTrue%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09anObject%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileFalse%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09anObject%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%21%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%22--%20Numbers%20--%22%0A%0A%09%28aSelector%20%3D%20%27+%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20+%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27-%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20-%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27*%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20*%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27/%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20/%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3C%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3C%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3E%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3E%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%20%20%20%0A%09%22--%20UndefinedObject%20--%22%0A%0A%09%28aSelector%20%3D%20%27ifNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%24receiver%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNotNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNil%3AifNotNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNotNil%3AifNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%5Einlined'),
messageSends: ["ifTrue:", unescape("%3D"), "and:", "isBlockNode", "first", "nextPutAll:", "visit:", "isNode:ofClass:", "second"],
referencedClasses: ["Number"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_isNode_ofClass_'),
smalltalk.method({
selector: unescape('isNode%3AofClass%3A'),
category: 'optimizations',
fn: function (aNode, aClass){
var self=this;
return smalltalk.send(smalltalk.send(aNode, "_isValueNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "_class", []), "__eq", [aClass]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["self"]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentClass", []), "__eq", [aClass]);})]);})]);})]);
return self;},
args: ["aNode", "aClass"],
source: unescape('isNode%3A%20aNode%20ofClass%3A%20aClass%0A%09%5EaNode%20isValueNode%20and%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09aNode%20value%20class%20%3D%20aClass%20or%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09aNode%20value%20%3D%20%27self%27%20and%3A%20%5Bself%20currentClass%20%3D%20aClass%5D%5D%5D'),
messageSends: ["and:", "isValueNode", "or:", unescape("%3D"), "class", "value", "currentClass"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_inline_receiver_argumentNodes_'),
smalltalk.method({
selector: unescape('inline%3Areceiver%3AargumentNodes%3A'),
category: 'optimizations',
fn: function (aSelector, receiver, aCollection){
var self=this;
var inlined=nil;
inlined=false;
((($receiver = smalltalk.send(aSelector, "__eq", ["ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifTrue:ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifFalse:ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3C%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3E")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3E%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20+")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20+")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("-")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20-")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20-")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("*")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20*")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20*")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("/")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20/")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20/")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
return inlined;
return self;},
args: ["aSelector", "receiver", "aCollection"],
source: unescape('inline%3A%20aSelector%20receiver%3A%20receiver%20argumentNodes%3A%20aCollection%0A%20%20%20%20%20%20%20%20%7C%20inlined%20%7C%0A%20%20%20%20%20%20%20%20inlined%20%3A%3D%20false.%0A%0A%09%22--%20Booleans%20--%22%0A%0A%09%28aSelector%20%3D%20%27ifFalse%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%21%20%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifTrue%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifTrue%3AifFalse%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifFalse%3AifTrue%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%21%20%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%22--%20Numbers%20--%22%0A%0A%09%28aSelector%20%3D%20%27%3C%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3C%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3C%3D%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%27%29%20ifTrue%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3E%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3E%3D%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27+%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20+%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27-%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20-%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27*%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20*%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27/%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20/%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%5Einlined'),
messageSends: ["ifTrue:", unescape("%3D"), "isBlockNode", "first", "checkClass:for:", "nextPutAll:", "visit:", "and:", "second"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_performOptimizations'),
smalltalk.method({
selector: unescape('performOptimizations'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_performOptimizations", []);
return self;},
args: [],
source: unescape('performOptimizations%0A%09%5Eself%20class%20performOptimizations'),
messageSends: ["performOptimizations", "class"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@source']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('source%0A%09%5Esource%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
args: ["aString"],
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitDynamicArrayNode_'),
smalltalk.method({
selector: unescape('visitDynamicArrayNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5D")]);
return self;},
args: ["aNode"],
source: unescape('visitDynamicArrayNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27%5B%27.%0A%09aNode%20nodes%20%0A%09%09do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09stream%20nextPutAll%3A%20%27%5D%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitDynamicDictionaryNode_'),
smalltalk.method({
selector: unescape('visitDynamicDictionaryNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("smalltalk.Dictionary._fromPairs_%28%5B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5D%29")]);
return self;},
args: ["aNode"],
source: unescape('visitDynamicDictionaryNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27smalltalk.Dictionary._fromPairs_%28%5B%27.%0A%09%09aNode%20nodes%20%0A%09%09%09do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09%09stream%20nextPutAll%3A%20%27%5D%29%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_argVariables'),
smalltalk.method({
selector: unescape('argVariables'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@argVariables'], "_copy", []);
return self;},
args: [],
source: unescape('argVariables%0A%09%5EargVariables%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_safeVariableNameFor_'),
smalltalk.method({
selector: unescape('safeVariableNameFor%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_reservedWords", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aString, "__comma", ["_"]);})() : (function(){return aString;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aString, "__comma", ["_"]);}), (function(){return aString;})]));
return self;},
args: ["aString"],
source: unescape('safeVariableNameFor%3A%20aString%0A%09%5E%28Smalltalk%20current%20reservedWords%20includes%3A%20aString%29%0A%09%09ifTrue%3A%20%5BaString%2C%20%27_%27%5D%0A%09%09ifFalse%3A%20%5BaString%5D'),
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", "current", unescape("%2C")],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler);


smalltalk.Compiler.klass.iVarNames = ['performOptimizations'];
smalltalk.addMethod(
unescape('_recompile_'),
smalltalk.method({
selector: unescape('recompile%3A'),
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [(function(each){var method=nil;
method=smalltalk.send(smalltalk.send(self, "_new", []), "_load_forClass_", [smalltalk.send(each, "_source", []), aClass]);smalltalk.send(method, "_category_", [smalltalk.send(each, "_category", [])]);return smalltalk.send(aClass, "_addCompiledMethod_", [method]);})]);
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})]));
return self;},
args: ["aClass"],
source: unescape('recompile%3A%20aClass%0A%09aClass%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%7C%20method%20%7C%0A%09%09method%20%3A%3D%20self%20new%20load%3A%20each%20source%20forClass%3A%20aClass.%0A%09%09method%20category%3A%20each%20category.%0A%09%09aClass%20addCompiledMethod%3A%20method%5D.%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20recompile%3A%20aClass%20class%5D'),
messageSends: ["do:", "methodDictionary", "load:forClass:", "new", "source", "category:", "category", "addCompiledMethod:", "ifFalse:", "isMetaclass", "recompile:", "class"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
unescape('_recompileAll'),
smalltalk.method({
selector: unescape('recompileAll'),
category: 'compiling',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_do_", [(function(each){return smalltalk.send(self, "_recompile_", [each]);})]);
return self;},
args: [],
source: unescape('recompileAll%0A%09Smalltalk%20current%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09self%20recompile%3A%20each%5D'),
messageSends: ["do:", "classes", "current", "recompile:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
unescape('_performOptimizations'),
smalltalk.method({
selector: unescape('performOptimizations'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@performOptimizations']) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver;
return self;},
args: [],
source: unescape('performOptimizations%0A%09%5EperformOptimizations%20ifNil%3A%20%5Btrue%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
unescape('_performOptimizations_'),
smalltalk.method({
selector: unescape('performOptimizations%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@performOptimizations']=aBoolean;
return self;},
args: ["aBoolean"],
source: unescape('performOptimizations%3A%20aBoolean%0A%09performOptimizations%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitDynamicArrayNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitDynamicArrayNode%3A%20self'),
messageSends: ["visitDynamicArrayNode:"],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitDynamicDictionaryNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitDynamicDictionaryNode%3A%20self'),
messageSends: ["visitDynamicDictionaryNode:"],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);



