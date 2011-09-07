smalltalk.addClass('MyScript', smalltalk.Object, [], 'MyScript');

smalltalk.addMethod(
'_main',
smalltalk.method({
selector: 'main',
category: 'main',
fn: function (){
var self=this;
var class=nil;
var compiler=nil;
var method=nil;
smalltalk.send((smalltalk.Object || Object), "_subclass_instanceVariableNames_category_", ["Dummy", "", "Dummy"]);
class=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_at_", ["Dummy"]);
compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []);
method=smalltalk.send(compiler, "_load_forClass_", [unescape("foo%20%5E%2010"), class]);
smalltalk.send(method, "_category_", ["foo"]);
smalltalk.send(class, "_addCompiledMethod_", [method]);
method=smalltalk.send(compiler, "_load_forClass_", [unescape("bar%20%5E%20self%20foo%20*%202"), class]);
smalltalk.send(method, "_category_", ["foo"]);
smalltalk.send(class, "_addCompiledMethod_", [method]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send((smalltalk.Exporter || Exporter), "_new", []), "_exportCategory_", ["Dummy"])]);
return self;},
source: unescape('main%0A%09%7C%20class%20compiler%20method%20%7C%0A%09Object%20subclass%3A%20%23Dummy%20instanceVariableNames%3A%20%27%27%20category%3A%20%27Dummy%27.%0A%09class%20%3A%3D%20smalltalk%20at%3A%20%23Dummy.%09%0A%09compiler%20%3A%3D%20Compiler%20new.%0A%0A%09method%20%3A%3D%20compiler%20load%3A%20%27foo%20%5E%2010%27%20forClass%3A%20class.%0A%09method%20category%3A%20%27foo%27.%0A%09class%20addCompiledMethod%3A%20method.%0A%0A%09method%20%3A%3D%20compiler%20load%3A%20%27bar%20%5E%20self%20foo%20*%202%27%20forClass%3A%20class.%0A%09method%20category%3A%20%27foo%27.%0A%09class%20addCompiledMethod%3A%20method.%0A%0A%09console%20log%3A%20%28Exporter%20new%20exportCategory%3A%20%27Dummy%27%29'),
messageSends: ["subclass:instanceVariableNames:category:", "at:", "new", "load:forClass:", "category:", "addCompiledMethod:", "log:", "exportCategory:"],
referencedClasses: [smalltalk.Object,smalltalk.Compiler,smalltalk.Exporter]
}),
smalltalk.MyScript.klass);


