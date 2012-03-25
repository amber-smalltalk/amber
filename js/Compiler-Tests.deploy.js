smalltalk.addPackage('Compiler-Tests', {});
smalltalk.addClass('ImporterTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
unescape('_chunkString'),
smalltalk.method({
selector: unescape('chunkString'),
fn: function (){
var self=this;
return unescape("%21Object%20methodsFor%3A%20%27importer%20test%20method%27%21%0A%0AimporterTestMethod%0A%0A%09%5E%27success%27%0A%21%20%21%0A");
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_testImporterBug'),
smalltalk.method({
selector: unescape('testImporterBug'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_chunkString", []), "_readStream", [])]);
(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", [unescape("testImporterBug%20%5B1%5D")]);})((smalltalk.Transcript || Transcript));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_methodDictionary", []), "_includesKey_", ["importerTestMethod"])]);
(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", [unescape("testImporterBug%20%5B2%5D")]);})((smalltalk.Transcript || Transcript));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_importerTestMethod", []), "__eq", ["success"])]);
(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", [unescape("testImporterBug%20%5B3%5D")]);})((smalltalk.Transcript || Transcript));
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function (){
var self=this;
smalltalk.send(self, "_setUp", [], smalltalk.TestCase);
smalltalk.send(self, "_cleanUp", []);
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
fn: function (){
var self=this;
smalltalk.send(self, "_tearDown", [], smalltalk.TestCase);
smalltalk.send(self, "_cleanUp", []);
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_cleanUp'),
smalltalk.method({
selector: unescape('cleanUp'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_methodDictionary", []), "_includesKey_", [smalltalk.symbolFor("importerTestMethod")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.Object || Object), "_removeCompiledMethod_", [smalltalk.send((smalltalk.Object || Object), "_methodAt_", [smalltalk.symbolFor("importerTestMethod")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send((smalltalk.Object || Object), "_removeCompiledMethod_", [smalltalk.send((smalltalk.Object || Object), "_methodAt_", [smalltalk.symbolFor("importerTestMethod")])]);})]));
return self;}
}),
smalltalk.ImporterTest);



