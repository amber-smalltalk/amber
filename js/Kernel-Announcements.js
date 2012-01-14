smalltalk.addPackage('Kernel-Announcements', {});
smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.addMethod(
unescape('_announce_'),
smalltalk.method({
selector: unescape('announce%3A'),
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
smalltalk.send(self['@subscriptions'], "_do_", [(function(each){return smalltalk.send(each, "_deliver_", [anAnnouncement]);})]);
return self;},
args: ["anAnnouncement"],
source: unescape('announce%3A%20anAnnouncement%0A%09subscriptions%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20deliver%3A%20anAnnouncement%5D'),
messageSends: ["do:", "deliver:"],
referencedClasses: []
}),
smalltalk.Announcer);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@subscriptions']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09subscriptions%20%3A%3D%20OrderedCollection%20new'),
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Announcer);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
category: 'subscribing',
fn: function (aClass, aBlock){
var self=this;
smalltalk.send(self['@subscriptions'], "_add_", [(function($rec){smalltalk.send($rec, "_block_", [aBlock]);smalltalk.send($rec, "_announcementClass_", [aClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AnnouncementSubscription || AnnouncementSubscription), "_new", []))]);
return self;},
args: ["aClass", "aBlock"],
source: unescape('on%3A%20aClass%20do%3A%20aBlock%0A%09subscriptions%20add%3A%20%28AnnouncementSubscription%20new%0A%09%09block%3A%20aBlock%3B%0A%09%09announcementClass%3A%20aClass%3B%0A%09%09yourself%29'),
messageSends: ["add:", "block:", "announcementClass:", "yourself", "new"],
referencedClasses: ["AnnouncementSubscription"]
}),
smalltalk.Announcer);



smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['block', 'announcementClass'], 'Kernel-Announcements');
smalltalk.addMethod(
unescape('_announcementClass'),
smalltalk.method({
selector: unescape('announcementClass'),
category: 'accessing',
fn: function (){
var self=this;
return self['@announcementClass'];
return self;},
args: [],
source: unescape('announcementClass%0A%09%5EannouncementClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
unescape('_announcementClass_'),
smalltalk.method({
selector: unescape('announcementClass%3A'),
category: 'accessing',
fn: function (aClass){
var self=this;
(self['@announcementClass']=aClass);
return self;},
args: ["aClass"],
source: unescape('announcementClass%3A%20aClass%0A%09announcementClass%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
unescape('_block'),
smalltalk.method({
selector: unescape('block'),
category: 'accessing',
fn: function (){
var self=this;
return self['@block'];
return self;},
args: [],
source: unescape('block%0A%09%5Eblock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
unescape('_block_'),
smalltalk.method({
selector: unescape('block%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
(self['@block']=aBlock);
return self;},
args: ["aBlock"],
source: unescape('block%3A%20aBlock%0A%09block%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
unescape('_deliver_'),
smalltalk.method({
selector: unescape('deliver%3A'),
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
((($receiver = smalltalk.send(self, "_handlesAnnouncement_", [anAnnouncement])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [anAnnouncement]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_block", []), "_value_", [anAnnouncement]);})]));
return self;},
args: ["anAnnouncement"],
source: unescape('deliver%3A%20anAnnouncement%0A%09%28self%20handlesAnnouncement%3A%20anAnnouncement%29%0A%09%09ifTrue%3A%20%5Bself%20block%20value%3A%20anAnnouncement%5D'),
messageSends: ["ifTrue:", "handlesAnnouncement:", "value:", "block"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
unescape('_handlesAnnouncement_'),
smalltalk.method({
selector: unescape('handlesAnnouncement%3A'),
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.send(anAnnouncement, "_isKindOf_", [smalltalk.send(self, "_announcementClass", [])]);
return self;},
args: ["anAnnouncement"],
source: unescape('handlesAnnouncement%3A%20anAnnouncement%0A%09%5EanAnnouncement%20isKindOf%3A%20self%20announcementClass'),
messageSends: ["isKindOf:", "announcementClass"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);



