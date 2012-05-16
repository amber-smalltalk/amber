smalltalk.addPackage('Kernel-Announcements', {});
smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['block', 'announcementClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announcementClass",
smalltalk.method({
selector: "announcementClass",
category: 'accessing',
fn: function AnnouncementSubscription_announcementClass(){
var self=this;
return self['@announcementClass'];
return self;},
args: [],
source: "announcementClass\x0a\x09^announcementClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_announcementClass_",
smalltalk.method({
selector: "announcementClass:",
category: 'accessing',
fn: function AnnouncementSubscription_announcementClass_(aClass){
var self=this;
(self['@announcementClass']=aClass);
return self;},
args: ["aClass"],
source: "announcementClass: aClass\x0a\x09announcementClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block",
smalltalk.method({
selector: "block",
category: 'accessing',
fn: function AnnouncementSubscription_block(){
var self=this;
return self['@block'];
return self;},
args: [],
source: "block\x0a\x09^block",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block_",
smalltalk.method({
selector: "block:",
category: 'accessing',
fn: function AnnouncementSubscription_block_(aBlock){
var self=this;
(self['@block']=aBlock);
return self;},
args: ["aBlock"],
source: "block: aBlock\x0a\x09block := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_deliver_",
smalltalk.method({
selector: "deliver:",
category: 'announcing',
fn: function AnnouncementSubscription_deliver_(anAnnouncement){
var self=this;
((($receiver = smalltalk.send(self, "_handlesAnnouncement_", [anAnnouncement])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [anAnnouncement]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [anAnnouncement]);})]));
return self;},
args: ["anAnnouncement"],
source: "deliver: anAnnouncement\x0a\x09(self handlesAnnouncement: anAnnouncement)\x0a\x09\x09ifTrue: [self block value: anAnnouncement]",
messageSends: ["ifTrue:", "handlesAnnouncement:", "value:", "block"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_handlesAnnouncement_",
smalltalk.method({
selector: "handlesAnnouncement:",
category: 'announcing',
fn: function AnnouncementSubscription_handlesAnnouncement_(anAnnouncement){
var self=this;
return smalltalk.send(anAnnouncement, "_isKindOf_", [smalltalk.send(self, "_announcementClass", [])]);
return self;},
args: ["anAnnouncement"],
source: "handlesAnnouncement: anAnnouncement\x0a\x09^anAnnouncement isKindOf: self announcementClass",
messageSends: ["isKindOf:", "announcementClass"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);



smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announce_",
smalltalk.method({
selector: "announce:",
category: 'announcing',
fn: function Announcer_announce_(anAnnouncement){
var self=this;
smalltalk.send(self['@subscriptions'], "_do_", [(function(each){return smalltalk.send(each, "_deliver_", [anAnnouncement]);})]);
return self;},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09subscriptions do: [:each |\x0a\x09\x09each deliver: anAnnouncement]",
messageSends: ["do:", "deliver:"],
referencedClasses: []
}),
smalltalk.Announcer);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function Announcer_initialize(){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Announcer.superclass || nil);
(self['@subscriptions']=smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09subscriptions := Array new",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Announcer);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
category: 'subscribing',
fn: function Announcer_on_do_(aClass, aBlock){
var self=this;
smalltalk.send(self['@subscriptions'], "_add_", [(function($rec){smalltalk.send($rec, "_block_", [aBlock]);smalltalk.send($rec, "_announcementClass_", [aClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AnnouncementSubscription || AnnouncementSubscription), "_new", []))]);
return self;},
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09block: aBlock;\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "block:", "announcementClass:", "yourself", "new"],
referencedClasses: ["AnnouncementSubscription"]
}),
smalltalk.Announcer);



