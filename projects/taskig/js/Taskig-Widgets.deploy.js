smalltalk.addPackage('Taskig-Widgets', {});
smalltalk.addClass('TaskBaseWidget', smalltalk.Widget, ['taskModel', 'announcer'], 'Taskig-Widgets');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return self['@announcer'];
return self;}
}),
smalltalk.TaskBaseWidget);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;

return self;}
}),
smalltalk.TaskBaseWidget);

smalltalk.addMethod(
"_initializeWithTask_",
smalltalk.method({
selector: "initializeWithTask:",
fn: function (aTask){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@taskModel']=aTask);
(self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
return self;}
}),
smalltalk.TaskBaseWidget);

smalltalk.addMethod(
"_renderContentsOnBrush_",
smalltalk.method({
selector: "renderContentsOnBrush:",
fn: function (tagBrush){
var self=this;
smalltalk.send(tagBrush, "_empty", []);
return self;}
}),
smalltalk.TaskBaseWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(self, "_renderContentsOnBrush_", [smalltalk.send(html, "_div", [])]);
return self;}
}),
smalltalk.TaskBaseWidget);


smalltalk.addMethod(
"_newWithTask_",
smalltalk.method({
selector: "newWithTask:",
fn: function (aTask){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithTask_", [aTask]);
return self;}
}),
smalltalk.TaskBaseWidget.klass);


smalltalk.addClass('TaskEditorWidget', smalltalk.TaskBaseWidget, ['editedTask'], 'Taskig-Widgets');
smalltalk.addMethod(
"_cancelEditingEvent",
smalltalk.method({
selector: "cancelEditingEvent",
fn: function (){
var self=this;
smalltalk.send(self['@announcer'], "_announce_", [smalltalk.send((smalltalk.EditingCanceled || EditingCanceled), "_new", [])]);
return self;}
}),
smalltalk.TaskEditorWidget);

smalltalk.addMethod(
"_editingDoneEvent",
smalltalk.method({
selector: "editingDoneEvent",
fn: function (){
var self=this;
var announcement=nil;
(announcement=smalltalk.send((smalltalk.EditingDone || EditingDone), "_newWithTask_", [self['@editedTask']]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;}
}),
smalltalk.TaskEditorWidget);



smalltalk.addClass('TaskViewerWidget', smalltalk.TaskBaseWidget, [], 'Taskig-Widgets');
smalltalk.addMethod(
"_deleteTaskEvent",
smalltalk.method({
selector: "deleteTaskEvent",
fn: function (){
var self=this;
var announcement=nil;
(announcement=smalltalk.send((smalltalk.DeletingTask || DeletingTask), "_newWithTask_", [self['@taskModel']]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;}
}),
smalltalk.TaskViewerWidget);

smalltalk.addMethod(
"_editTaskEvent",
smalltalk.method({
selector: "editTaskEvent",
fn: function (){
var self=this;
var announcement=nil;
(announcement=smalltalk.send((smalltalk.EditingTask || EditingTask), "_newWithTask_", [self['@taskModel']]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;}
}),
smalltalk.TaskViewerWidget);



smalltalk.addClass('TaskListWidget', smalltalk.Widget, ['listModel', 'children', 'rowsBrush'], 'Taskig-Widgets');
smalltalk.addMethod(
"_createTaskWidgetFor_",
smalltalk.method({
selector: "createTaskWidgetFor:",
fn: function (aTask){
var self=this;
var widget=nil;
(widget=smalltalk.send((smalltalk.TaskWidget || TaskWidget), "_newWithTask_", [aTask]));
smalltalk.send(smalltalk.send(widget, "_announcer", []), "_on_do_", [(smalltalk.DeletingTask || DeletingTask), (function(announcement){return smalltalk.send(self, "_onDeleteTask_", [announcement]);})]);
smalltalk.send(self['@children'], "_add_", [widget]);
return widget;
return self;}
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_initializeWithList_",
smalltalk.method({
selector: "initializeWithList:",
fn: function (aListModel){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@children']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
(self['@listModel']=aListModel);
smalltalk.send(self['@listModel'], "_do_", [(function(aTask){return smalltalk.send(self, "_createTaskWidgetFor_", [aTask]);})]);
return self;}
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_insertTaskOnTopOfList_",
smalltalk.method({
selector: "insertTaskOnTopOfList:",
fn: function (aTaskWidget){
var self=this;
smalltalk.send(self, "_todo_", ["append this item to the top of the list."]);
return self;}
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_onDeleteTask_",
smalltalk.method({
selector: "onDeleteTask:",
fn: function (announcement){
var self=this;
smalltalk.send(self['@listModel'], "_removeTask_", [smalltalk.send(announcement, "_task", [])]);
smalltalk.send(self['@children'], "_remove_", [smalltalk.send(announcement, "_widget", [])]);
return self;}
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_onNewTask",
smalltalk.method({
selector: "onNewTask",
fn: function (){
var self=this;
var task=nil;
var widget=nil;
(task=smalltalk.send((smalltalk.Task || Task), "_newWithDefaults", []));
smalltalk.send(self['@listModel'], "_addTask_", [task]);
(widget=smalltalk.send(self, "_createTaskWidgetFor_", [task]));
smalltalk.send(self, "_insertTaskOnTopOfList_", [widget]);
return self;}
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(self, "_renderTableHeaderOn_", [html]);
(self['@rowsBrush']=smalltalk.send(html, "_div_", [(function(){return smalltalk.send(self['@children'], "_do_", [(function(widget){return smalltalk.send(widget, "_renderOn_", [html]);})]);})]));
return self;}
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_renderTableHeaderOn_",
smalltalk.method({
selector: "renderTableHeaderOn:",
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TaskList"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["TableHeaderRow"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(["Created", "Description", "DueOn", "Done"], "_do_", [(function(text){return (function($rec){smalltalk.send($rec, "_class_", ["TableHeaderColumn"]);return smalltalk.send($rec, "_with_", [text]);})(smalltalk.send(html, "_td", []));})]);})]);})(smalltalk.send(html, "_tr", []));})]);})(smalltalk.send(html, "_table", []));
return self;}
}),
smalltalk.TaskListWidget);


smalltalk.addMethod(
"_newWithList_",
smalltalk.method({
selector: "newWithList:",
fn: function (aListModel){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithList_", [aListModel]);
return self;}
}),
smalltalk.TaskListWidget.klass);


smalltalk.addClass('TaskWidget', smalltalk.Widget, ['task', 'viewer', 'editor', 'tagBrush', 'announcer'], 'Taskig-Widgets');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return self['@announcer'];
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
fn: function (){
var self=this;
return (($receiver = self['@editor']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeEditor", []);})() : $receiver;
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_initializeEditor",
smalltalk.method({
selector: "initializeEditor",
fn: function (){
var self=this;
(self['@editor']=smalltalk.send((smalltalk.TaskEditorWidget || TaskEditorWidget), "_newWithTask_", [self['@task']]));
smalltalk.send(smalltalk.send(self['@editor'], "_announcer", []), "_on_do_", [(smalltalk.EditingCanceled || EditingCanceled), (function(announcement){return smalltalk.send(self, "_onEditingCanceled", []);})]);
smalltalk.send(smalltalk.send(self['@editor'], "_announcer", []), "_on_do_", [(smalltalk.EditingDone || EditingDone), (function(announcement){return smalltalk.send(self, "_onEditingDone_", [announcement]);})]);
return self['@editor'];
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_initializeViewer",
smalltalk.method({
selector: "initializeViewer",
fn: function (){
var self=this;
(self['@viewer']=smalltalk.send((smalltalk.TaskViewerWidget || TaskViewerWidget), "_newWithTask_", [self['@task']]));
smalltalk.send(smalltalk.send(self['@viewer'], "_announcer", []), "_on_do_", [(smalltalk.DeletingTask || DeletingTask), (function(announcement){return smalltalk.send(self, "_onDeletingTask_", [announcement]);})]);
smalltalk.send(smalltalk.send(self['@viewer'], "_announcer", []), "_on_do_", [(smalltalk.EditingTask || EditingTask), (function(announcement){return smalltalk.send(self, "_editingTask_", [announcement]);})]);
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_initializeWithTask_",
smalltalk.method({
selector: "initializeWithTask:",
fn: function (aTask){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@task']=aTask);
(self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
smalltalk.send(self, "_initializeViewer", []);
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_onDeletingTask_",
smalltalk.method({
selector: "onDeletingTask:",
fn: function (announcement){
var self=this;
smalltalk.send(self['@viewer'], "_hide", []);
smalltalk.send(self, "_todo_", ["jquery: remove this div from the document."]);
smalltalk.send(announcement, "_widget_", [self]);
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_onEditingCanceled",
smalltalk.method({
selector: "onEditingCanceled",
fn: function (){
var self=this;
smalltalk.send(self, "_showViewer", []);
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_onEditingDone_",
smalltalk.method({
selector: "onEditingDone:",
fn: function (announcement){
var self=this;
smalltalk.send(self['@task'], "_updateWith_", [smalltalk.send(announcement, "_task", [])]);
smalltalk.send(self, "_showViewer", []);
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_onEditingTask_",
smalltalk.method({
selector: "onEditingTask:",
fn: function (announcement){
var self=this;
smalltalk.send(self, "_showEditor", []);
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
(self['@tagBrush']=smalltalk.send(html, "_div_", [(function(){return smalltalk.send(self['@viewer'], "_renderOn_", [html]);})]));
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_showEditor",
smalltalk.method({
selector: "showEditor",
fn: function (){
var self=this;
smalltalk.send(self['@viewer'], "_hide", []);
smalltalk.send(self['@editor'], "_renderContentsOnBrush_", [self['@tagBrush']]);
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_showViewer",
smalltalk.method({
selector: "showViewer",
fn: function (){
var self=this;
smalltalk.send(self['@editor'], "_hide", []);
smalltalk.send(self['@viewer'], "_renderContentsOnBrush_", [self['@tagBrush']]);
return self;}
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_task",
smalltalk.method({
selector: "task",
fn: function (){
var self=this;
return self['@task'];
return self;}
}),
smalltalk.TaskWidget);


smalltalk.addMethod(
"_newWithTask_",
smalltalk.method({
selector: "newWithTask:",
fn: function (aTask){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithTask_", [aTask]);
return self;}
}),
smalltalk.TaskWidget.klass);


