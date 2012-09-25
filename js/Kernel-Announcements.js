smalltalk.addPackage('Kernel-Announcements', {});
smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['block', 'announcementClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announcementClass",
smalltalk.method({
selector: "announcementClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@announcementClass"];
},
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
fn: function (aClass){
var self=this;
self["@announcementClass"]=aClass;
return self},
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
fn: function (){
var self=this;
return self["@block"];
},
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
fn: function (aBlock){
var self=this;
self["@block"]=aBlock;
return self},
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
fn: function (anAnnouncement){
var self=this;
var $1;
$1=smalltalk.send(self,"_handlesAnnouncement_",[anAnnouncement]);
if(smalltalk.assert($1)){
smalltalk.send(smalltalk.send(self,"_block",[]),"_value_",[anAnnouncement]);
};
return self},
args: ["anAnnouncement"],
source: "deliver: anAnnouncement\x0a\x09(self handlesAnnouncement: anAnnouncement)\x0a\x09\x09ifTrue: [self block value: anAnnouncement]",
messageSends: ["ifTrue:", "value:", "block", "handlesAnnouncement:"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_handlesAnnouncement_",
smalltalk.method({
selector: "handlesAnnouncement:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
var $1;
$1=smalltalk.send(anAnnouncement,"_isKindOf_",[smalltalk.send(self,"_announcementClass",[])]);
return $1;
},
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
fn: function (anAnnouncement){
var self=this;
smalltalk.send(self["@subscriptions"],"_do_",[(function(each){
return smalltalk.send(each,"_deliver_",[anAnnouncement]);
})]);
return self},
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
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@subscriptions"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
return self},
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
fn: function (aClass,aBlock){
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.AnnouncementSubscription || AnnouncementSubscription),"_new",[]);
smalltalk.send($1,"_block_",[aBlock]);
smalltalk.send($1,"_announcementClass_",[aClass]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(self["@subscriptions"],"_add_",[$2]);
return self},
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09block: aBlock;\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "block:", "new", "announcementClass:", "yourself"],
referencedClasses: ["AnnouncementSubscription"]
}),
smalltalk.Announcer);



