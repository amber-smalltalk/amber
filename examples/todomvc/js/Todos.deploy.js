smalltalk.addPackage('Todos', {});
smalltalk.addClass('TodoApp', smalltalk.Widget, ['todos'], 'Todos');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Todos"]);})]);})(smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_class_", ["content"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_renderFormOn_", [html]);smalltalk.send($rec, "_renderListOn_", [html]);return smalltalk.send($rec, "_renderStatsOn_", [html]);})(self);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@todos']=smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;}
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_createTodoNamed_'),
smalltalk.method({
selector: unescape('createTodoNamed%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self['@todos'], "_add_", [(function($rec){smalltalk.send($rec, "_content_", [aString]);return smalltalk.send($rec, "_appendToJQuery_", [smalltalk.send(unescape("%23todo-list"), "_asJQuery", [])]);})(smalltalk.send((smalltalk.Todo || Todo), "_new", []))]);
return self;}
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_renderFormOn_'),
smalltalk.method({
selector: unescape('renderFormOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [unescape("create-todo")]);smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_id_", [unescape("new-todo")]);smalltalk.send($rec, "_type_", ["text"]);return smalltalk.send($rec, "_placeholder_", [unescape("What%20needs%20to%20be%20done%3F")]);})(smalltalk.send(html, "_input", []));})]);return smalltalk.send($rec, "_onSubmit_", [(function(event, input, todo){(input=smalltalk.send(unescape("%23new-todo"), "_asJQuery", []));smalltalk.send(event, "_preventDefault", []);smalltalk.send(self, "_createTodoNamed_", [smalltalk.send(input, "_val", [])]);return smalltalk.send(input, "_val_", [""]);})]);})(smalltalk.send(html, "_form", []));
return self;}
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_renderListOn_'),
smalltalk.method({
selector: unescape('renderListOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["todos"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_ul", []), "_id_", [unescape("todo-list")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TodoApp);

smalltalk.addMethod(
unescape('_renderStatsOn_'),
smalltalk.method({
selector: unescape('renderStatsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [unescape("todo-stats")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("todo-count")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["number"]);return smalltalk.send($rec, "_with_", ["1"]);})(smalltalk.send(html, "_span", []));smalltalk.send(html, "_with_", [" "]);(function($rec){smalltalk.send($rec, "_class_", ["word"]);return smalltalk.send($rec, "_with_", ["item"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_with_", [" left."]);})]);})(smalltalk.send(html, "_span", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("todo-clear")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", ["Clear "]);(function($rec){smalltalk.send($rec, "_class_", [unescape("number-done")]);return smalltalk.send($rec, "_with_", ["1"]);})(smalltalk.send(html, "_span", []));smalltalk.send(html, "_with_", [" completed "]);return (function($rec){smalltalk.send($rec, "_class_", [unescape("word-done")]);return smalltalk.send($rec, "_with_", ["item"]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TodoApp);


smalltalk.TodoApp.klass.iVarNames = ['default'];
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@default']=smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send(unescape("%23todoapp"), "_asJQuery", [])]));
return self;}
}),
smalltalk.TodoApp.klass);

smalltalk.addMethod(
unescape('_default'),
smalltalk.method({
selector: unescape('default'),
fn: function (){
var self=this;
return self['@default'];
return self;}
}),
smalltalk.TodoApp.klass);


smalltalk.addClass('Todo', smalltalk.Widget, ['content', 'li', 'input', 'div'], 'Todos');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@li']=(function($rec){smalltalk.send($rec, "_class_", ["todo"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["display"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["check"]);return smalltalk.send($rec, "_type_", ["checkbox"]);})(smalltalk.send(html, "_input", []));(self['@div']=(function($rec){smalltalk.send($rec, "_class_", [unescape("todo-content")]);smalltalk.send($rec, "_onDblClick_", [(function(e){smalltalk.send(smalltalk.send(self['@li'], "_asJQuery", []), "_addClass_", ["editing"]);return smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_focus", []);})]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("todo-destroy")]);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["edit"]);return smalltalk.send($rec, "_with_", [(function(){return (self['@input']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_class_", [unescape("todo-input")]);smalltalk.send($rec, "_onBlur_", [(function(){return smalltalk.send(self, "_updateContent", []);})]);smalltalk.send($rec, "_onKeyPress_", [(function(e){return ((($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_updateContent", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_updateContent", []);})]));})]);return smalltalk.send($rec, "_value_", [self['@content']]);})(smalltalk.send(html, "_input", [])));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_li", [])));
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_content_'),
smalltalk.method({
selector: unescape('content%3A'),
fn: function (aString){
var self=this;
(self['@content']=aString);
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_content'),
smalltalk.method({
selector: unescape('content'),
fn: function (){
var self=this;
return self['@content'];
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("a%20Todo%28"), "__comma", [smalltalk.send(self['@content'], "_asString", [])]), "__comma", [unescape("%29")]);
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_updateContent'),
smalltalk.method({
selector: unescape('updateContent'),
fn: function (){
var self=this;
(self['@content']=smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", []));
smalltalk.send(smalltalk.send(self['@li'], "_asJQuery", []), "_removeClass_", ["editing"]);
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_html_", [self['@content']]);
return self;}
}),
smalltalk.Todo);



