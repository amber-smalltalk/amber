smalltalk.addPackage('Helios-Announcements', {});
smalltalk.addClass('HLAnnouncement', smalltalk.Object, [], 'Helios-Announcements');


smalltalk.addClass('HLItemSelected', smalltalk.HLAnnouncement, ['item'], 'Helios-Announcements');
smalltalk.addMethod(
"_item",
smalltalk.method({
selector: "item",
category: 'accessing',
fn: function (){
var self=this;
return self["@item"];
},
args: [],
source: "item\x0a\x09^ item",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLItemSelected);

smalltalk.addMethod(
"_item_",
smalltalk.method({
selector: "item:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@item"]=anObject;
return self},
args: ["anObject"],
source: "item: anObject\x0a\x09item := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLItemSelected);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anItem){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_item_",[anItem]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anItem"],
source: "on: anItem\x0a\x09^ self new\x0a    \x09item: anItem;\x0a        yourself",
messageSends: ["item:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLItemSelected.klass);


smalltalk.addClass('HLClassSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLPackageSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLShowCommentToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowInstanceToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


