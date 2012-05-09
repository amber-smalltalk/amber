smalltalk.addPackage('Taskig-Announcements', {});
smalltalk.addClass('TaskAnnouncement', smalltalk.Object, ['task'], 'Taskig-Announcements');
smalltalk.addMethod(
"_initializeWith_",
smalltalk.method({
selector: "initializeWith:",
fn: function (aTask){
var self=this;
(self['@task']=aTask);
return self;}
}),
smalltalk.TaskAnnouncement);

smalltalk.addMethod(
"_task",
smalltalk.method({
selector: "task",
fn: function (){
var self=this;
return self['@task'];
return self;}
}),
smalltalk.TaskAnnouncement);


smalltalk.addMethod(
"_newWith_",
smalltalk.method({
selector: "newWith:",
fn: function (aTask){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWith_", [aTask]);
return self;}
}),
smalltalk.TaskAnnouncement.klass);


smalltalk.addClass('DeletingTask', smalltalk.TaskAnnouncement, ['widget'], 'Taskig-Announcements');
smalltalk.addMethod(
"_widget",
smalltalk.method({
selector: "widget",
fn: function (){
var self=this;
return self['@widget'];
return self;}
}),
smalltalk.DeletingTask);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
(self['@widget']=aWidget);
return self;}
}),
smalltalk.DeletingTask);



smalltalk.addClass('EditingCanceled', smalltalk.TaskAnnouncement, [], 'Taskig-Announcements');


smalltalk.addClass('EditingDone', smalltalk.TaskAnnouncement, [], 'Taskig-Announcements');


smalltalk.addClass('EditingTask', smalltalk.TaskAnnouncement, [], 'Taskig-Announcements');


smalltalk.addClass('NewTaskAdded', smalltalk.TaskAnnouncement, [], 'Taskig-Announcements');


smalltalk.addClass('TaskRemoved', smalltalk.TaskAnnouncement, [], 'Taskig-Announcements');


