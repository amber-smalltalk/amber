smalltalk.addClass('JQueryTest', smalltalk.TestCase, ['document'], 'JQuery-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'running',
fn: function (){
var self=this;
self['@document']=unescape("%3Cdiv%20class%3D%22person%22%3E%0A%09%09%09%09%3Cul%3E%0A%09%09%09%09%09%3Cli%20class%3D%22firstname%22%3EJames%3C/li%3E%0A%09%09%09%09%09%3Cli%20class%3D%22lastname%22%3EBond%3C/li%3E%0A%09%09%09%09%3C/ul%3E%0A%09%09%09%3C/div%3E");
return self;},
args: [],
source: unescape('setUp%0A%09document%20%3A%3D%20%27%3Cdiv%20class%3D%22person%22%3E%0A%09%09%09%09%3Cul%3E%0A%09%09%09%09%09%3Cli%20class%3D%22firstname%22%3EJames%3C/li%3E%0A%09%09%09%09%09%3Cli%20class%3D%22lastname%22%3EBond%3C/li%3E%0A%09%09%09%09%3C/ul%3E%0A%09%09%09%3C/div%3E%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQueryTest);

smalltalk.addMethod(
unescape('_testFind'),
smalltalk.method({
selector: unescape('testFind'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["James", smalltalk.send(smalltalk.send(smalltalk.send(self['@document'], "_asJQuery", []), "_find_", ["li.firstname"]), "_html", [])]);
return self;},
args: [],
source: unescape('testFind%0A%09self%20%0A%09%09assert%3A%20%27James%27%20%0A%09%09equals%3A%20%28document%20asJQuery%20find%3A%20%27li.firstname%27%29%20html.'),
messageSends: ["assert:equals:", "html", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.JQueryTest);

smalltalk.addMethod(
unescape('_testEach'),
smalltalk.method({
selector: unescape('testEach'),
category: 'tests',
fn: function (){
var self=this;
var classes=nil;
classes=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self['@document'], "_asJQuery", []), "_find_", ["li"]), "_each_", [(function(index, element){return smalltalk.send(classes, "_add_", [smalltalk.send(smalltalk.send((smalltalk.JQuery || JQuery), "_fromElement_", [element]), "_attr_", ["class"])]);})]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(["firstname", "lastname"], "_printString", []), smalltalk.send(classes, "_printString", [])]);
return self;},
args: [],
source: unescape('testEach%0A%09%7Cclasses%7C%0A%09classes%20%3A%3D%20Array%20new.%0A%0A%09%28document%20asJQuery%20find%3A%20%27li%27%29%20each%3A%20%5B%3Aindex%20%3Aelement%7C%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%20%20%09classes%20add%3A%20%28%28JQuery%20fromElement%3Aelement%29%20attr%3A%20%27class%27%29%5D.%0A%09self%20%0A%09%09assert%3A%20%23%28%27firstname%27%20%27lastname%27%29%20printString%0A%09%09equals%3A%20classes%20printString'),
messageSends: ["new", "each:", "find:", "asJQuery", "add:", "attr:", "fromElement:", "assert:equals:", "printString"],
referencedClasses: [smalltalk.Array,smalltalk.JQuery]
}),
smalltalk.JQueryTest);



