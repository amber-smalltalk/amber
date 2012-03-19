smalltalk.addPackage('Todos', {});
smalltalk.addClass('TodoApp', smalltalk.Widget, ['todos'], 'Todos');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Todos"]);})]);})(smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_class_", ["content"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_renderFormOn_", [html]);smalltalk.send($rec, "_renderListOn_", [html]);return smalltalk.send($rec, "_renderStatsOn_", [html]);})(self);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20class%3A%20%27title%27%3B%20with%3A%20%5B%20html%20h1%20with%3A%20%27Todos%27%20%5D.%0A%09html%20div%20class%3A%20%27content%27%3B%20with%3A%20%5B%20self%0A%09%09renderFormOn%3A%20html%3B%0A%09%09renderListOn%3A%20html%3B%0A%09%09renderStatsOn%3A%20html%20%5D'),
messageSends: ["class:", "with:", "h1", "div", "renderFormOn:", "renderListOn:", "renderStatsOn:"],
referencedClasses: []
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@todos']=smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09todos%20%3A%3D%20Array%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_createTodoNamed_'),
smalltalk.method({
selector: unescape('createTodoNamed%3A'),
category: 'todos',
fn: function (aString){
var self=this;
smalltalk.send(self['@todos'], "_add_", [(function($rec){smalltalk.send($rec, "_content_", [aString]);return smalltalk.send($rec, "_appendToJQuery_", [smalltalk.send(unescape("%23todo-list"), "_asJQuery", [])]);})(smalltalk.send((smalltalk.Todo || Todo), "_new", []))]);
return self;},
args: ["aString"],
source: unescape('createTodoNamed%3A%20aString%0A%09todos%20add%3A%20%28Todo%20new%0A%09%09content%3A%20aString%3B%0A%09%09appendToJQuery%3A%20%27%23todo-list%27%20asJQuery%29'),
messageSends: ["add:", "content:", "appendToJQuery:", "asJQuery", "new"],
referencedClasses: ["Todo"]
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'rendering',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('update%0A%09'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_renderFormOn_'),
smalltalk.method({
selector: unescape('renderFormOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [unescape("create-todo")]);smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_id_", [unescape("new-todo")]);smalltalk.send($rec, "_type_", ["text"]);return smalltalk.send($rec, "_placeholder_", [unescape("What%20needs%20to%20be%20done%3F")]);})(smalltalk.send(html, "_input", []));})]);return smalltalk.send($rec, "_onSubmit_", [(function(event, input, todo){(input=smalltalk.send(unescape("%23new-todo"), "_asJQuery", []));smalltalk.send(event, "_preventDefault", []);smalltalk.send(self, "_createTodoNamed_", [smalltalk.send(input, "_val", [])]);return smalltalk.send(input, "_val_", [""]);})]);})(smalltalk.send(html, "_form", []));
return self;},
args: ["html"],
source: unescape('renderFormOn%3A%20html%0A%09html%20form%20id%3A%20%27create-todo%27%3B%0A%09%09with%3A%20%5B%20html%20input%20id%3A%20%27new-todo%27%3B%20type%3A%20%27text%27%3B%20placeholder%3A%20%27What%20needs%20to%20be%20done%3F%27%20%5D%3B%0A%09%09onSubmit%3A%20%5B%20%3Aevent%20%3Ainput%20%3Atodo%20%7C%0A%09%09%09input%20%3A%3D%20%27%23new-todo%27%20asJQuery.%0A%09%09%09event%20preventDefault.%0A%09%09%09self%20createTodoNamed%3A%20input%20val.%0A%09%09%09input%20val%3A%20%27%27%20%5D'),
messageSends: ["id:", "with:", "type:", "placeholder:", "input", "onSubmit:", "asJQuery", "preventDefault", "createTodoNamed:", "val", "val:", "form"],
referencedClasses: []
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_renderListOn_'),
smalltalk.method({
selector: unescape('renderListOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["todos"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_ul", []), "_id_", [unescape("todo-list")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderListOn%3A%20html%0A%09html%20div%20id%3A%20%27todos%27%3B%20with%3A%20%5B%0A%09%09%22html%20div%20id%3A%20%27todo-actions%27%3B%20with%3A%20%5B%0A%09%09%09html%20input%20id%3A%20%27check-all%27%3B%20class%3A%20%27check%27%3B%20type%3A%20%27checkbox%27.%0A%09%09%09html%20label%20for%3A%20%27check-all%27%3B%20with%3A%20%27Mark%20all%20as%20complete%27%20%5D.%22%0A%09%09html%20ul%20id%3A%20%27todo-list%27%20%5D'),
messageSends: ["id:", "with:", "ul", "div"],
referencedClasses: []
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_renderStatsOn_'),
smalltalk.method({
selector: unescape('renderStatsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [unescape("todo-stats")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("todo-count")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["number"]);return smalltalk.send($rec, "_with_", ["1"]);})(smalltalk.send(html, "_span", []));smalltalk.send(html, "_with_", [" "]);(function($rec){smalltalk.send($rec, "_class_", ["word"]);return smalltalk.send($rec, "_with_", ["item"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_with_", [" left."]);})]);})(smalltalk.send(html, "_span", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("todo-clear")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", ["Clear "]);(function($rec){smalltalk.send($rec, "_class_", [unescape("number-done")]);return smalltalk.send($rec, "_with_", ["1"]);})(smalltalk.send(html, "_span", []));smalltalk.send(html, "_with_", [" completed "]);return (function($rec){smalltalk.send($rec, "_class_", [unescape("word-done")]);return smalltalk.send($rec, "_with_", ["item"]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderStatsOn%3A%20html%0A%09html%20div%20id%3A%20%27todo-stats%27%3B%20with%3A%20%5B%0A%09%09html%20span%20class%3A%20%27todo-count%27%3B%20with%3A%20%5B%0A%09%09%09html%20span%20class%3A%20%27number%27%3B%20with%3A%20%271%27.%0A%09%09%09html%20with%3A%20%27%20%27.%0A%09%09%09html%20span%20class%3A%20%27word%27%3B%20with%3A%20%27item%27.%0A%09%09%09html%20with%3A%20%27%20left.%27%20%5D.%0A%0A%09%09html%20span%20class%3A%20%27todo-clear%27%3B%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27%23%27%3B%20with%3A%20%5B%0A%09%09%09%09html%20with%3A%20%27Clear%20%27.%0A%09%09%09%09html%20span%20class%3A%20%27number-done%27%3B%20with%3A%20%271%27.%0A%09%09%09%09html%20with%3A%20%27%20completed%20%27.%0A%09%09%09%09html%20span%20class%3A%20%27word-done%27%3B%20with%3A%20%27item%27%20%5D%5D%5D'),
messageSends: ["id:", "with:", "class:", "span", "href:", "a", "div"],
referencedClasses: []
}),
smalltalk.TodoApp);


smalltalk.TodoApp.klass.iVarNames = ['default'];
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
(self['@default']=smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send(unescape("%23todoapp"), "_asJQuery", [])]));
return self;},
args: [],
source: unescape('initialize%0A%09default%20%3A%3D%20self%20new%20appendToJQuery%3A%20%27%23todoapp%27%20asJQuery'),
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
smalltalk.TodoApp.klass);

smalltalk.addMethod(
unescape('_default'),
smalltalk.method({
selector: unescape('default'),
category: 'accessing',
fn: function (){
var self=this;
return self['@default'];
return self;},
args: [],
source: unescape('default%0A%09%5Edefault'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TodoApp.klass);


smalltalk.addClass('Todo', smalltalk.Widget, ['content', 'li', 'input', 'div'], 'Todos');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@li']=(function($rec){smalltalk.send($rec, "_class_", ["todo"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["display"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["check"]);return smalltalk.send($rec, "_type_", ["checkbox"]);})(smalltalk.send(html, "_input", []));(self['@div']=(function($rec){smalltalk.send($rec, "_class_", [unescape("todo-content")]);smalltalk.send($rec, "_onDblClick_", [(function(e){smalltalk.send(smalltalk.send(self['@li'], "_asJQuery", []), "_addClass_", ["editing"]);return smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_focus", []);})]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("todo-destroy")]);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["edit"]);return smalltalk.send($rec, "_with_", [(function(){return (self['@input']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_class_", [unescape("todo-input")]);smalltalk.send($rec, "_onBlur_", [(function(){return smalltalk.send(self, "_updateContent", []);})]);smalltalk.send($rec, "_onKeyPress_", [(function(e){return ((($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_updateContent", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_updateContent", []);})]));})]);return smalltalk.send($rec, "_value_", [self['@content']]);})(smalltalk.send(html, "_input", [])));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_li", [])));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09li%20%3A%3D%20html%20li%20class%3A%20%27todo%27%3B%20with%3A%20%5B%0A%09%09html%20div%20class%3A%20%27display%27%3B%20with%3A%20%5B%0A%09%09%09html%20input%20class%3A%20%27check%27%3B%20type%3A%20%27checkbox%27.%0A%09%09%09%0A%09%09%09div%20%3A%3D%20html%20div%20class%3A%20%27todo-content%27%3B%0A%09%09%09%09onDblClick%3A%20%5B%20%3Ae%20%7C%20li%20asJQuery%20addClass%3A%20%27editing%27.%20input%20asJQuery%20focus%20%5D%3B%0A%09%09%09%09with%3A%20content.%0A%09%09%09%0A%09%09%09html%20span%20class%3A%20%27todo-destroy%27%20%5D.%0A%0A%09%09html%20div%20class%3A%20%27edit%27%3B%20with%3A%20%5B%0A%09%09%09input%20%3A%3D%20html%20input%20type%3A%20%27text%27%3B%0A%09%09%09%09class%3A%20%27todo-input%27%3B%20%0A%09%09%09%09onBlur%3A%20%5B%20self%20updateContent%20%5D%3B%0A%09%09%09%09onKeyPress%3A%20%5B%20%3Ae%20%7C%20e%20keyCode%20%3D%2013%20ifTrue%3A%20%5B%20self%20updateContent%20%5D%5D%3B%0A%09%09%09%09value%3A%20content%20%5D%5D.'),
messageSends: ["class:", "with:", "type:", "input", "onDblClick:", "addClass:", "asJQuery", "focus", "div", "span", "onBlur:", "updateContent", "onKeyPress:", "ifTrue:", unescape("%3D"), "keyCode", "value:", "li"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_content_'),
smalltalk.method({
selector: unescape('content%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@content']=aString);
return self;},
args: ["aString"],
source: unescape('content%3A%20aString%0A%09content%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_content'),
smalltalk.method({
selector: unescape('content'),
category: 'accessing',
fn: function (){
var self=this;
return self['@content'];
return self;},
args: [],
source: unescape('content%0A%09%5Econtent'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("a%20Todo%28"), "__comma", [smalltalk.send(self['@content'], "_asString", [])]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%27a%20Todo%28%27%2C%20content%20asString%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_updateContent'),
smalltalk.method({
selector: unescape('updateContent'),
category: 'rendering',
fn: function (){
var self=this;
(self['@content']=smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", []));
smalltalk.send(smalltalk.send(self['@li'], "_asJQuery", []), "_removeClass_", ["editing"]);
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_html_", [self['@content']]);
return self;},
args: [],
source: unescape('updateContent%0A%09content%20%3A%3D%20input%20asJQuery%20val.%0A%09li%20asJQuery%20removeClass%3A%20%27editing%27.%0A%09div%20asJQuery%20html%3A%20content%20'),
messageSends: ["val", "asJQuery", "removeClass:", "html:"],
referencedClasses: []
}),
smalltalk.Todo);



