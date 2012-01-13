smalltalk.addPackage('Kernel-Announcements', {});
smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.addMethod(
'_announce_',
smalltalk.method({
selector: 'announce:',
fn: function (anAnnouncement){
var self=this;
smalltalk.send(self['@subscriptions'], "_do_", [(function(each){return smalltalk.send(each, "_deliver_", [anAnnouncement]);})]);
return self;}
}),
smalltalk.Announcer);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@subscriptions']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
return self;}
}),
smalltalk.Announcer);

smalltalk.addMethod(
'_on_do_',
smalltalk.method({
selector: 'on:do:',
fn: function (aClass, aBlock){
var self=this;
smalltalk.send(self['@subscriptions'], "_add_", [(function($rec){smalltalk.send($rec, "_block_", [aBlock]);smalltalk.send($rec, "_announcementClass_", [aClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AnnouncementSubscription || AnnouncementSubscription), "_new", []))]);
return self;}
}),
smalltalk.Announcer);



smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['block', 'announcementClass'], 'Kernel-Announcements');
smalltalk.addMethod(
'_announcementClass',
smalltalk.method({
selector: 'announcementClass',
fn: function (){
var self=this;
return self['@announcementClass'];
return self;}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
'_announcementClass_',
smalltalk.method({
selector: 'announcementClass:',
fn: function (aClass){
var self=this;
(self['@announcementClass']=aClass);
return self;}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
'_block',
smalltalk.method({
selector: 'block',
fn: function (){
var self=this;
return self['@block'];
return self;}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
'_block_',
smalltalk.method({
selector: 'block:',
fn: function (aBlock){
var self=this;
(self['@block']=aBlock);
return self;}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
'_deliver_',
smalltalk.method({
selector: 'deliver:',
fn: function (anAnnouncement){
var self=this;
((($receiver = smalltalk.send(self, "_handlesAnnouncement_", [anAnnouncement])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [anAnnouncement]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [anAnnouncement]);})]));
return self;}
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
'_handlesAnnouncement_',
smalltalk.method({
selector: 'handlesAnnouncement:',
fn: function (anAnnouncement){
var self=this;
return smalltalk.send(anAnnouncement, "_isKindOf_", [smalltalk.send(self, "_announcementClass", [])]);
return self;}
}),
smalltalk.AnnouncementSubscription);



