smalltalk.addPackage('Kernel-Announcements', {});
smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['block', 'announcementClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announcementClass",
smalltalk.method({
selector: "announcementClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@announcementClass"];
}, self, "announcementClass", [], smalltalk.AnnouncementSubscription)}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_announcementClass_",
smalltalk.method({
selector: "announcementClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx) { self["@announcementClass"]=aClass;
return self}, self, "announcementClass:", [aClass], smalltalk.AnnouncementSubscription)}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block",
smalltalk.method({
selector: "block",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@block"];
}, self, "block", [], smalltalk.AnnouncementSubscription)}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block_",
smalltalk.method({
selector: "block:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { self["@block"]=aBlock;
return self}, self, "block:", [aBlock], smalltalk.AnnouncementSubscription)}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_deliver_",
smalltalk.method({
selector: "deliver:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._handlesAnnouncement_(anAnnouncement);
if(smalltalk.assert($1)){
_st(_st(self)._block())._value_(anAnnouncement);
};
return self}, self, "deliver:", [anAnnouncement], smalltalk.AnnouncementSubscription)}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_handlesAnnouncement_",
smalltalk.method({
selector: "handlesAnnouncement:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(anAnnouncement)._isKindOf_(_st(self)._announcementClass());
return $1;
}, self, "handlesAnnouncement:", [anAnnouncement], smalltalk.AnnouncementSubscription)}
}),
smalltalk.AnnouncementSubscription);



smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announce_",
smalltalk.method({
selector: "announce:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self["@subscriptions"])._do_((function(each){
return _st(each)._deliver_(anAnnouncement);
}));
return self}, self, "announce:", [anAnnouncement], smalltalk.Announcer)}
}),
smalltalk.Announcer);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@subscriptions"]=_st((smalltalk.Array || Array))._new();
return self}, self, "initialize", [], smalltalk.Announcer)}
}),
smalltalk.Announcer);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
fn: function (aClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
$1=_st((smalltalk.AnnouncementSubscription || AnnouncementSubscription))._new();
_st($1)._block_(aBlock);
_st($1)._announcementClass_(aClass);
$2=_st($1)._yourself();
_st(self["@subscriptions"])._add_($2);
return self}, self, "on:do:", [aClass,aBlock], smalltalk.Announcer)}
}),
smalltalk.Announcer);



smalltalk.addClass('SystemAnnouncer', smalltalk.Announcer, [], 'Kernel-Announcements');

smalltalk.SystemAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.Announcer.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
}, self, "current", [], smalltalk.SystemAnnouncer.klass)}
}),
smalltalk.SystemAnnouncer.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.SystemAnnouncer.klass)}
}),
smalltalk.SystemAnnouncer.klass);


smalltalk.addClass('SystemAnnouncement', smalltalk.Object, ['theClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@theClass"];
}, self, "theClass", [], smalltalk.SystemAnnouncement)}
}),
smalltalk.SystemAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.SystemAnnouncement)}
}),
smalltalk.SystemAnnouncement);



smalltalk.addClass('ClassAdded', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassCommentChanged', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassDefinitionChanged', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassRemoved', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassRenamed', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('MethodAnnouncement', smalltalk.SystemAnnouncement, ['method'], 'Kernel-Announcements');
smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@method"];
}, self, "method", [], smalltalk.MethodAnnouncement)}
}),
smalltalk.MethodAnnouncement);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx) { self["@method"]=aCompiledMethod;
return self}, self, "method:", [aCompiledMethod], smalltalk.MethodAnnouncement)}
}),
smalltalk.MethodAnnouncement);



smalltalk.addClass('MethodAdded', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('MethodRemoved', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


