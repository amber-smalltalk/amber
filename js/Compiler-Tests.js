smalltalk.addPackage('Compiler-Tests', {});
smalltalk.addClass('ImporterTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
unescape('_chunkString'),
smalltalk.method({
selector: unescape('chunkString'),
category: 'private',
fn: function (){
var self=this;
return unescape("%21Object%20methodsFor%3A%20%27importer%20test%20method%27%21%0A%0AimporterTestMethod%0A%0A%09%5E%27success%27%0A%21%20%21%0A");
return self;},
args: [],
source: unescape('chunkString%0A%0A%09%5E%27%21Object%20methodsFor%3A%20%27%27importer%20test%20method%27%27%21%0A%0AimporterTestMethod%0A%0A%09%5E%27%27success%27%27%0A%21%20%21%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_testImporterBug'),
smalltalk.method({
selector: unescape('testImporterBug'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_chunkString", []), "_readStream", [])]);
(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", [unescape("testImporterBug%20%5B1%5D")]);})((smalltalk.Transcript || Transcript));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_methodDictionary", []), "_includesKey_", ["importerTestMethod"])]);
(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", [unescape("testImporterBug%20%5B2%5D")]);})((smalltalk.Transcript || Transcript));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_importerTestMethod", []), "__eq", ["success"])]);
(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", [unescape("testImporterBug%20%5B3%5D")]);})((smalltalk.Transcript || Transcript));
return self;},
args: [],
source: unescape('testImporterBug%0A%09%22importer%20does%20not%20correctly%20add%20extension%20methods%22%0A%0A%09Importer%20new%20import%3A%20self%20chunkString%20readStream.%0ATranscript%20cr%3B%20show%3A%20%27testImporterBug%20%5B1%5D%27.%20%22cannot%20debug%20test%20methods%20very%20easily%3F%22%0A%09self%20assert%3A%20%28Object%20methodDictionary%20includesKey%3A%20%27importerTestMethod%27%29.%0ATranscript%20cr%3B%20show%3A%20%27testImporterBug%20%5B2%5D%27.%0A%09self%20assert%3A%20%28Object%20new%20importerTestMethod%20%3D%20%27success%27%29.%0ATranscript%20cr%3B%20show%3A%20%27testImporterBug%20%5B3%5D%27.%0A'),
messageSends: ["import:", "new", "readStream", "chunkString", "cr", "show:", "assert:", "includesKey:", "methodDictionary", unescape("%3D"), "importerTestMethod"],
referencedClasses: ["Importer", "Transcript", "Object"]
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'running',
fn: function (){
var self=this;
smalltalk.send(self, "_setUp", [], smalltalk.TestCase);
smalltalk.send(self, "_cleanUp", []);
return self;},
args: [],
source: unescape('setUp%0A%0A%09super%20setUp.%0A%09self%20cleanUp'),
messageSends: ["setUp", "cleanUp"],
referencedClasses: []
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
category: 'running',
fn: function (){
var self=this;
smalltalk.send(self, "_tearDown", [], smalltalk.TestCase);
smalltalk.send(self, "_cleanUp", []);
return self;},
args: [],
source: unescape('tearDown%0A%0A%09super%20tearDown.%0A%09self%20cleanUp'),
messageSends: ["tearDown", "cleanUp"],
referencedClasses: []
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_cleanUp'),
smalltalk.method({
selector: unescape('cleanUp'),
category: 'running',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_methodDictionary", []), "_includesKey_", [smalltalk.symbolFor("importerTestMethod")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.Object || Object), "_removeCompiledMethod_", [smalltalk.send((smalltalk.Object || Object), "_methodAt_", [smalltalk.symbolFor("importerTestMethod")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send((smalltalk.Object || Object), "_removeCompiledMethod_", [smalltalk.send((smalltalk.Object || Object), "_methodAt_", [smalltalk.symbolFor("importerTestMethod")])]);})]));
return self;},
args: [],
source: unescape('cleanUp%0A%0A%09%28Object%20methodDictionary%20includesKey%3A%20%23importerTestMethod%29%0A%09%09ifTrue%3A%20%5B%20Object%20removeCompiledMethod%3A%20%28Object%20methodAt%3A%20%23importerTestMethod%29%5D.'),
messageSends: ["ifTrue:", "includesKey:", "methodDictionary", "removeCompiledMethod:", "methodAt:"],
referencedClasses: ["Object"]
}),
smalltalk.ImporterTest);



