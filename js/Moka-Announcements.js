define("amber_core/Moka-Announcements", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Moka-Announcements');
smalltalk.packages["Moka-Announcements"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKAnnouncement', globals.Object, [], 'Moka-Announcements');
globals.MKAnnouncement.comment="I am the root class of all announcements sent in Moka.";


smalltalk.addClass('MKAspectChanged', globals.MKAnnouncement, ['aspect'], 'Moka-Announcements');
globals.MKAspectChanged.comment="I am announced whenever an `aspect` is changed.\x0a\x0a## API\x0a\x0aCreate instances using the class-side method `#aspect:`";
smalltalk.addMethod(
smalltalk.method({
selector: "aspect",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@aspect"];
return $1;
},
args: [],
source: "aspect\x0a\x09^ aspect",
messageSends: [],
referencedClasses: []
}),
globals.MKAspectChanged);

smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
self["@aspect"]=aSelector;
return self},
args: ["aSelector"],
source: "aspect: aSelector\x0a\x09aspect := aSelector",
messageSends: [],
referencedClasses: []
}),
globals.MKAspectChanged);


smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
protocol: 'instance creation',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._aspect_(aSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},globals.MKAspectChanged.klass)})},
args: ["aSelector"],
source: "aspect: aSelector\x0a\x09^ self new\x0a\x09\x09aspect: aSelector;\x0a\x09\x09yourself",
messageSends: ["aspect:", "new", "yourself"],
referencedClasses: []
}),
globals.MKAspectChanged.klass);


smalltalk.addClass('MKViewAnnouncement', globals.MKAnnouncement, ['view'], 'Moka-Announcements');
globals.MKViewAnnouncement.comment="I am the root class of all viewn announcements. I hold a `view` object.\x0a\x0a## API\x0a\x0aCreate instance with the class-side method `#view:`";
smalltalk.addMethod(
smalltalk.method({
selector: "view",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@view"];
return $1;
},
args: [],
source: "view\x0a\x09^ view",
messageSends: [],
referencedClasses: []
}),
globals.MKViewAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
protocol: 'accessing',
fn: function (aView){
var self=this;
self["@view"]=aView;
return self},
args: ["aView"],
source: "view: aView\x0a\x09view := aView",
messageSends: [],
referencedClasses: []
}),
globals.MKViewAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "view:",
protocol: 'instance creation',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._view_(aView);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"view:",{aView:aView},globals.MKViewAnnouncement.klass)})},
args: ["aView"],
source: "view: aView\x0a\x09^ self new\x0a\x09\x09view: aView;\x0a\x09\x09yourself",
messageSends: ["view:", "new", "yourself"],
referencedClasses: []
}),
globals.MKViewAnnouncement.klass);


smalltalk.addClass('MKViewRemoved', globals.MKViewAnnouncement, [], 'Moka-Announcements');
globals.MKViewRemoved.comment="I am announced when a view gets removed from the DOM.";


smalltalk.addClass('MKViewScroll', globals.MKViewAnnouncement, [], 'Moka-Announcements');
globals.MKViewScroll.comment="I am often used in conjunction with `MKScrollDecorator`.\x0a\x0aI am announced when a view's scroll changed programatically";

});
