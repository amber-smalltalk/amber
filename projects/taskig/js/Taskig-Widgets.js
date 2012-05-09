smalltalk.addPackage('Taskig-Widgets', {});
smalltalk.addClass('TaskBaseWidget', smalltalk.Widget, ['taskModel', 'announcer'], 'Taskig-Widgets');
smalltalk.TaskBaseWidget.comment="Common behaviour for the viewer and editor tasks widgets."
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return self['@announcer'];
return self;},
args: [],
source: unescape("announcer%0D%09%5Eannouncer"),
messageSends: [],
referencedClasses: []
}),
smalltalk.TaskBaseWidget);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
category: 'rendering',
fn: function (){
var self=this;

return self;},
args: [],
source: "hide",
messageSends: [],
referencedClasses: []
}),
smalltalk.TaskBaseWidget);

smalltalk.addMethod(
"_initializeWithTask_",
smalltalk.method({
selector: "initializeWithTask:",
category: 'initialize-release',
fn: function (aTask){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@taskModel']=aTask);
(self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
return self;},
args: ["aTask"],
source: unescape("initializeWithTask%3A%20aTask%0A%0A%09super%20initialize.%0A%09taskModel%20%3A%3D%20aTask.%0A%09announcer%20%3A%3D%20Announcer%20new."),
messageSends: ["initialize", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.TaskBaseWidget);

smalltalk.addMethod(
"_renderContentsOnBrush_",
smalltalk.method({
selector: "renderContentsOnBrush:",
category: 'rendering',
fn: function (tagBrush){
var self=this;
smalltalk.send(tagBrush, "_empty", []);
return self;},
args: ["tagBrush"],
source: unescape("renderContentsOnBrush%3A%20tagBrush%0D%09tagBrush%20empty."),
messageSends: ["empty"],
referencedClasses: []
}),
smalltalk.TaskBaseWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderContentsOnBrush_", [smalltalk.send(html, "_div", [])]);
return self;},
args: ["html"],
source: unescape("renderOn%3A%20html%0D%09self%20renderContentsOnBrush%3A%20html%20div."),
messageSends: ["renderContentsOnBrush:", "div"],
referencedClasses: []
}),
smalltalk.TaskBaseWidget);


smalltalk.addMethod(
"_newWithTask_",
smalltalk.method({
selector: "newWithTask:",
category: 'instance creation',
fn: function (aTask){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithTask_", [aTask]);
return self;},
args: ["aTask"],
source: unescape("newWithTask%3A%20aTask%0D%0D%09%5E%20self%20new%20initializeWithTask%3A%20aTask"),
messageSends: ["initializeWithTask:", "new"],
referencedClasses: []
}),
smalltalk.TaskBaseWidget.klass);


smalltalk.addClass('TaskEditorWidget', smalltalk.TaskBaseWidget, ['editedTask'], 'Taskig-Widgets');
smalltalk.TaskEditorWidget.comment="This widget allows a task to be edited."
smalltalk.addMethod(
"_cancelEditingEvent",
smalltalk.method({
selector: "cancelEditingEvent",
category: 'interaction',
fn: function (){
var self=this;
smalltalk.send(self['@announcer'], "_announce_", [smalltalk.send((smalltalk.EditingCanceled || EditingCanceled), "_new", [])]);
return self;},
args: [],
source: unescape("cancelEditingEvent%0D%09announcer%20announce%3A%20EditingCanceled%20new."),
messageSends: ["announce:", "new"],
referencedClasses: ["EditingCanceled"]
}),
smalltalk.TaskEditorWidget);

smalltalk.addMethod(
"_editingDoneEvent",
smalltalk.method({
selector: "editingDoneEvent",
category: 'interaction',
fn: function (){
var self=this;
var announcement=nil;
(announcement=smalltalk.send((smalltalk.EditingDone || EditingDone), "_newWithTask_", [self['@editedTask']]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;},
args: [],
source: unescape("editingDoneEvent%0D%09%7C%20announcement%20%7C%0D%09announcement%20%3A%3D%20EditingDone%20newWithTask%3A%20editedTask.%0D%09announcer%20announce%3A%20announcement."),
messageSends: ["newWithTask:", "announce:"],
referencedClasses: ["EditingDone"]
}),
smalltalk.TaskEditorWidget);



smalltalk.addClass('TaskViewerWidget', smalltalk.TaskBaseWidget, [], 'Taskig-Widgets');
smalltalk.TaskViewerWidget.comment=unescape("This%20widget%20allows%20a%20taks%20to%20be%20viewed%2C%20edited%20and%20deleted.")
smalltalk.addMethod(
"_deleteTaskEvent",
smalltalk.method({
selector: "deleteTaskEvent",
category: 'interaction',
fn: function (){
var self=this;
var announcement=nil;
(announcement=smalltalk.send((smalltalk.DeletingTask || DeletingTask), "_newWithTask_", [self['@taskModel']]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;},
args: [],
source: unescape("deleteTaskEvent%0D%09%7C%20announcement%20%7C%0D%09announcement%20%3A%3D%20DeletingTask%20newWithTask%3A%20taskModel.%0D%09announcer%20announce%3A%20announcement."),
messageSends: ["newWithTask:", "announce:"],
referencedClasses: ["DeletingTask"]
}),
smalltalk.TaskViewerWidget);

smalltalk.addMethod(
"_editTaskEvent",
smalltalk.method({
selector: "editTaskEvent",
category: 'interaction',
fn: function (){
var self=this;
var announcement=nil;
(announcement=smalltalk.send((smalltalk.EditingTask || EditingTask), "_newWithTask_", [self['@taskModel']]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;},
args: [],
source: unescape("editTaskEvent%0D%09%7C%20announcement%20%7C%0D%09announcement%20%3A%3D%20EditingTask%20newWithTask%3A%20taskModel.%0D%09announcer%20announce%3A%20announcement."),
messageSends: ["newWithTask:", "announce:"],
referencedClasses: ["EditingTask"]
}),
smalltalk.TaskViewerWidget);



smalltalk.addClass('TaskListWidget', smalltalk.Widget, ['listModel', 'children', 'rowsBrush'], 'Taskig-Widgets');
smalltalk.TaskListWidget.comment="This widget shows a list of tasks."
smalltalk.addMethod(
"_createTaskWidgetFor_",
smalltalk.method({
selector: "createTaskWidgetFor:",
category: 'private',
fn: function (aTask){
var self=this;
var widget=nil;
(widget=smalltalk.send((smalltalk.TaskWidget || TaskWidget), "_newWithTask_", [aTask]));
smalltalk.send(smalltalk.send(widget, "_announcer", []), "_on_do_", [(smalltalk.DeletingTask || DeletingTask), (function(announcement){return smalltalk.send(self, "_onDeleteTask_", [announcement]);})]);
smalltalk.send(self['@children'], "_add_", [widget]);
return widget;
return self;},
args: ["aTask"],
source: unescape("createTaskWidgetFor%3A%20aTask%0D%0D%09%7C%20widget%20%7C%0D%09widget%20%3A%3D%20TaskWidget%20newWithTask%3A%20aTask.%0D%09widget%20announcer%20on%3A%20DeletingTask%20do%3A%20%5B%20%3Aannouncement%20%7C%20self%20onDeleteTask%3A%20announcement%20%5D.%20%0D%09children%20add%3A%20widget.%0D%09%5Ewidget"),
messageSends: ["newWithTask:", "on:do:", "announcer", "onDeleteTask:", "add:"],
referencedClasses: ["TaskWidget", "DeletingTask"]
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_initializeWithList_",
smalltalk.method({
selector: "initializeWithList:",
category: 'initialize-release',
fn: function (aListModel){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@children']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
(self['@listModel']=aListModel);
smalltalk.send(self['@listModel'], "_do_", [(function(aTask){return smalltalk.send(self, "_createTaskWidgetFor_", [aTask]);})]);
return self;},
args: ["aListModel"],
source: unescape("initializeWithList%3A%20aListModel%0A%0A%09super%20initialize.%0A%09children%20%3A%3D%20OrderedCollection%20new.%0A%09listModel%20%3A%3D%20aListModel.%0A%09listModel%20do%3A%20%5B%20%3AaTask%20%7C%20self%20createTaskWidgetFor%3A%20aTask%20%5D"),
messageSends: ["initialize", "new", "do:", "createTaskWidgetFor:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_insertTaskOnTopOfList_",
smalltalk.method({
selector: "insertTaskOnTopOfList:",
category: 'rendering',
fn: function (aTaskWidget){
var self=this;
smalltalk.send(self, "_todo_", ["append this item to the top of the list."]);
return self;},
args: ["aTaskWidget"],
source: unescape("insertTaskOnTopOfList%3A%20aTaskWidget%0D%0D%09self%20todo%3A%20%27append%20this%20item%20to%20the%20top%20of%20the%20list.%27"),
messageSends: ["todo:"],
referencedClasses: []
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_onDeleteTask_",
smalltalk.method({
selector: "onDeleteTask:",
category: 'interaction',
fn: function (announcement){
var self=this;
smalltalk.send(self['@listModel'], "_removeTask_", [smalltalk.send(announcement, "_task", [])]);
smalltalk.send(self['@children'], "_remove_", [smalltalk.send(announcement, "_widget", [])]);
return self;},
args: ["announcement"],
source: unescape("onDeleteTask%3A%20announcement%20%0D%09%22A%20request%20to%20delete%20aTask%20has%20been%20issued.%22%0D%09listModel%20removeTask%3A%20announcement%20task.%0D%09children%20remove%3A%20announcement%20widget."),
messageSends: ["removeTask:", "task", "remove:", "widget"],
referencedClasses: []
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_onNewTask",
smalltalk.method({
selector: "onNewTask",
category: 'interaction',
fn: function (){
var self=this;
var task=nil;
var widget=nil;
(task=smalltalk.send((smalltalk.Task || Task), "_newWithDefaults", []));
smalltalk.send(self['@listModel'], "_addTask_", [task]);
(widget=smalltalk.send(self, "_createTaskWidgetFor_", [task]));
smalltalk.send(self, "_insertTaskOnTopOfList_", [widget]);
return self;},
args: [],
source: unescape("onNewTask%0D%09%22This%20is%20executed%20when%20a%20user%20clicks%20on%20a%20button%2C%20to%20create%20a%20new%20task%22%0D%09%7C%20task%20widget%20%7C%0D%09task%20%3A%3D%20Task%20newWithDefaults.%0D%09listModel%20addTask%3A%20task.%0D%09widget%20%3A%3D%20self%20createTaskWidgetFor%3A%20task.%0D%09self%20insertTaskOnTopOfList%3A%20widget."),
messageSends: ["newWithDefaults", "addTask:", "createTaskWidgetFor:", "insertTaskOnTopOfList:"],
referencedClasses: ["Task"]
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderTableHeaderOn_", [html]);
(self['@rowsBrush']=smalltalk.send(html, "_div_", [(function(){return smalltalk.send(self['@children'], "_do_", [(function(widget){return smalltalk.send(widget, "_renderOn_", [html]);})]);})]));
return self;},
args: ["html"],
source: unescape("renderOn%3A%20html%0A%09self%20renderTableHeaderOn%3A%20html.%0A%09rowsBrush%20%3A%3D%20html%20div%3A%20%0A%09%09%5B%20children%20do%3A%20%5B%20%3Awidget%20%7C%20widget%20renderOn%3A%20html%20%5D%5D"),
messageSends: ["renderTableHeaderOn:", "div:", "do:", "renderOn:"],
referencedClasses: []
}),
smalltalk.TaskListWidget);

smalltalk.addMethod(
"_renderTableHeaderOn_",
smalltalk.method({
selector: "renderTableHeaderOn:",
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TaskList"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["TableHeaderRow"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(["Created", "Description", "DueOn", "Done"], "_do_", [(function(text){return (function($rec){smalltalk.send($rec, "_class_", ["TableHeaderColumn"]);return smalltalk.send($rec, "_with_", [text]);})(smalltalk.send(html, "_td", []));})]);})]);})(smalltalk.send(html, "_tr", []));})]);})(smalltalk.send(html, "_table", []));
return self;},
args: ["html"],
source: unescape("renderTableHeaderOn%3A%20html%0A%09html%20table%0A%09%09class%3A%20%27TaskList%27%3B%0A%09%09with%3A%20%5B%20html%20tr%20%0A%09%09%09%09class%3A%20%27TableHeaderRow%27%3B%20%0A%09%09%09%09with%3A%20%5B%20%23%28%27Created%27%20%27Description%27%20%27DueOn%27%20%27Done%27%29%20%0A%09%09%09%09%09%09do%3A%20%5B%20%3Atext%20%7C%20html%20td%20%0A%09%09%09%09%09%09%09%09%09class%3A%20%27TableHeaderColumn%27%3B%20%0A%09%09%09%09%09%09%09%09%09with%3A%20text%20%5D%20%5D%20%5D%20"),
messageSends: ["class:", "with:", "do:", "td", "tr", "table"],
referencedClasses: []
}),
smalltalk.TaskListWidget);


smalltalk.addMethod(
"_newWithList_",
smalltalk.method({
selector: "newWithList:",
category: 'instance creation',
fn: function (aListModel){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithList_", [aListModel]);
return self;},
args: ["aListModel"],
source: unescape("newWithList%3A%20aListModel%0D%0D%09%5E%20self%20new%20initializeWithList%3A%20aListModel"),
messageSends: ["initializeWithList:", "new"],
referencedClasses: []
}),
smalltalk.TaskListWidget.klass);


smalltalk.addClass('TaskWidget', smalltalk.Widget, ['task', 'viewer', 'editor', 'tagBrush', 'announcer'], 'Taskig-Widgets');
smalltalk.TaskWidget.comment="This widget manages the interaction between the task viewer and the task editor."
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return self['@announcer'];
return self;},
args: [],
source: unescape("announcer%0D%09%5Eannouncer"),
messageSends: [],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
category: 'private',
fn: function (){
var self=this;
return (($receiver = self['@editor']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeEditor", []);})() : $receiver;
return self;},
args: [],
source: unescape("editor%0D%09%5Eeditor%20ifNil%3A%20%5B%20self%20initializeEditor%20%5D"),
messageSends: ["ifNil:", "initializeEditor"],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_initializeEditor",
smalltalk.method({
selector: "initializeEditor",
category: 'private',
fn: function (){
var self=this;
(self['@editor']=smalltalk.send((smalltalk.TaskEditorWidget || TaskEditorWidget), "_newWithTask_", [self['@task']]));
smalltalk.send(smalltalk.send(self['@editor'], "_announcer", []), "_on_do_", [(smalltalk.EditingCanceled || EditingCanceled), (function(announcement){return smalltalk.send(self, "_onEditingCanceled", []);})]);
smalltalk.send(smalltalk.send(self['@editor'], "_announcer", []), "_on_do_", [(smalltalk.EditingDone || EditingDone), (function(announcement){return smalltalk.send(self, "_onEditingDone_", [announcement]);})]);
return self['@editor'];
return self;},
args: [],
source: unescape("initializeEditor%0D%0D%09editor%20%3A%3D%20TaskEditorWidget%20newWithTask%3A%20task.%0D%09editor%20announcer%20on%3A%20EditingCanceled%20do%3A%20%5B%20%3Aannouncement%20%7C%20self%20onEditingCanceled%20%5D.%0D%09editor%20announcer%20on%3A%20EditingDone%20%09do%3A%20%5B%20%3Aannouncement%20%7C%20self%20onEditingDone%3A%20announcement%20%5D.%20%20%0D%09%5Eeditor"),
messageSends: ["newWithTask:", "on:do:", "announcer", "onEditingCanceled", "onEditingDone:"],
referencedClasses: ["TaskEditorWidget", "EditingCanceled", "EditingDone"]
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_initializeViewer",
smalltalk.method({
selector: "initializeViewer",
category: 'private',
fn: function (){
var self=this;
(self['@viewer']=smalltalk.send((smalltalk.TaskViewerWidget || TaskViewerWidget), "_newWithTask_", [self['@task']]));
smalltalk.send(smalltalk.send(self['@viewer'], "_announcer", []), "_on_do_", [(smalltalk.DeletingTask || DeletingTask), (function(announcement){return smalltalk.send(self, "_onDeletingTask_", [announcement]);})]);
smalltalk.send(smalltalk.send(self['@viewer'], "_announcer", []), "_on_do_", [(smalltalk.EditingTask || EditingTask), (function(announcement){return smalltalk.send(self, "_editingTask_", [announcement]);})]);
return self;},
args: [],
source: unescape("initializeViewer%0D%0D%09viewer%20%3A%3D%20TaskViewerWidget%20newWithTask%3A%20task.%0D%09viewer%20announcer%20on%3A%20DeletingTask%20do%3A%20%5B%20%3Aannouncement%20%7C%20self%20onDeletingTask%3A%20announcement%20%5D.%0D%09viewer%20announcer%20on%3A%20EditingTask%20do%3A%20%5B%20%3Aannouncement%20%7C%20self%20editingTask%3A%20announcement%20%5D."),
messageSends: ["newWithTask:", "on:do:", "announcer", "onDeletingTask:", "editingTask:"],
referencedClasses: ["TaskViewerWidget", "DeletingTask", "EditingTask"]
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_initializeWithTask_",
smalltalk.method({
selector: "initializeWithTask:",
category: 'initialize-release',
fn: function (aTask){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@task']=aTask);
(self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
smalltalk.send(self, "_initializeViewer", []);
return self;},
args: ["aTask"],
source: unescape("initializeWithTask%3A%20aTask%0A%0A%09super%20initialize.%0A%09task%20%3A%3D%20aTask.%0A%09announcer%20%3A%3D%20Announcer%20new.%0A%09self%20initializeViewer."),
messageSends: ["initialize", "new", "initializeViewer"],
referencedClasses: ["Announcer"]
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_onDeletingTask_",
smalltalk.method({
selector: "onDeletingTask:",
category: 'interaction',
fn: function (announcement){
var self=this;
smalltalk.send(self['@viewer'], "_hide", []);
smalltalk.send(self, "_todo_", ["jquery: remove this div from the document."]);
smalltalk.send(announcement, "_widget_", [self]);
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;},
args: ["announcement"],
source: unescape("onDeletingTask%3A%20announcement%0D%09%22Remove%20the%20widget%20and%20delegate%20this%20announcement.%22%0D%09viewer%20hide.%0D%09self%20todo%3A%20%27jquery%3A%20remove%20this%20div%20from%20the%20document.%27.%0D%09announcement%20widget%3A%20self.%09%09%22Allow%20the%20parent%20list%20easy%20removal%20of%20this%20widget.%22%0D%09announcer%20announce%3A%20announcement."),
messageSends: ["hide", "todo:", "widget:", "announce:"],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_onEditingCanceled",
smalltalk.method({
selector: "onEditingCanceled",
category: 'interaction',
fn: function (){
var self=this;
smalltalk.send(self, "_showViewer", []);
return self;},
args: [],
source: unescape("onEditingCanceled%0D%09%22Message%20send%20when%20the%20editor%20has%20canceled%20this%20editing.%22%0D%09self%20showViewer"),
messageSends: ["showViewer"],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_onEditingDone_",
smalltalk.method({
selector: "onEditingDone:",
category: 'interaction',
fn: function (announcement){
var self=this;
smalltalk.send(self['@task'], "_updateWith_", [smalltalk.send(announcement, "_task", [])]);
smalltalk.send(self, "_showViewer", []);
return self;},
args: ["announcement"],
source: unescape("onEditingDone%3A%20announcement%0D%09%22Message%20send%20when%20the%20editor%20widget%20has%20finnished%20editing.%22%0D%09task%20updateWith%3A%20announcement%20task.%0D%09self%20showViewer."),
messageSends: ["updateWith:", "task", "showViewer"],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_onEditingTask_",
smalltalk.method({
selector: "onEditingTask:",
category: 'interaction',
fn: function (announcement){
var self=this;
smalltalk.send(self, "_showEditor", []);
return self;},
args: ["announcement"],
source: unescape("onEditingTask%3A%20announcement%0D%09%22Show%20editor%20for%20this%20task.%22%0D%09self%20showEditor."),
messageSends: ["showEditor"],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
(self['@tagBrush']=smalltalk.send(html, "_div_", [(function(){return smalltalk.send(self['@viewer'], "_renderOn_", [html]);})]));
return self;},
args: ["html"],
source: unescape("renderOn%3A%20html%0D%09tagBrush%20%3A%3D%20html%20div%3A%20%5B%20viewer%20renderOn%3A%20html%20%5D"),
messageSends: ["div:", "renderOn:"],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_showEditor",
smalltalk.method({
selector: "showEditor",
category: 'private',
fn: function (){
var self=this;
smalltalk.send(self['@viewer'], "_hide", []);
smalltalk.send(self['@editor'], "_renderContentsOnBrush_", [self['@tagBrush']]);
return self;},
args: [],
source: unescape("showEditor%0D%09viewer%20hide.%0D%09editor%20renderContentsOnBrush%3A%20tagBrush."),
messageSends: ["hide", "renderContentsOnBrush:"],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_showViewer",
smalltalk.method({
selector: "showViewer",
category: 'private',
fn: function (){
var self=this;
smalltalk.send(self['@editor'], "_hide", []);
smalltalk.send(self['@viewer'], "_renderContentsOnBrush_", [self['@tagBrush']]);
return self;},
args: [],
source: unescape("showViewer%0D%09editor%20hide.%0D%09viewer%20renderContentsOnBrush%3A%20tagBrush."),
messageSends: ["hide", "renderContentsOnBrush:"],
referencedClasses: []
}),
smalltalk.TaskWidget);

smalltalk.addMethod(
"_task",
smalltalk.method({
selector: "task",
category: 'accessing',
fn: function (){
var self=this;
return self['@task'];
return self;},
args: [],
source: unescape("task%0D%09%5Etask"),
messageSends: [],
referencedClasses: []
}),
smalltalk.TaskWidget);


smalltalk.addMethod(
"_newWithTask_",
smalltalk.method({
selector: "newWithTask:",
category: 'instance creation',
fn: function (aTask){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithTask_", [aTask]);
return self;},
args: ["aTask"],
source: unescape("newWithTask%3A%20aTask%0D%0D%09%5Eself%20new%20initializeWithTask%3A%20aTask"),
messageSends: ["initializeWithTask:", "new"],
referencedClasses: []
}),
smalltalk.TaskWidget.klass);


