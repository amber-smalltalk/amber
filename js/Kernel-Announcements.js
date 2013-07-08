smalltalk.addPackage('Kernel-Announcements');
smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['valuable', 'announcementClass'], 'Kernel-Announcements');
smalltalk.AnnouncementSubscription.comment="I am a single entry in a subscription registry of an `Announcer`.\x0aSeveral subscriptions by the same object is possible.";
smalltalk.addMethod(
smalltalk.method({
selector: "announcementClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@announcementClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcementClass",{},smalltalk.AnnouncementSubscription)})},
args: [],
source: "announcementClass\x0a\x09^ announcementClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "announcementClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@announcementClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"announcementClass:",{aClass:aClass},smalltalk.AnnouncementSubscription)})},
args: ["aClass"],
source: "announcementClass: aClass\x0a\x09announcementClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "block",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._valuable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.AnnouncementSubscription)})},
args: [],
source: "block\x0a\x09\x22Use #valuable instead\x22\x0a\x09\x0a\x09self deprecatedAPI.\x0a\x09^ self valuable",
messageSends: ["deprecatedAPI", "valuable"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "block:",
category: 'accessing',
fn: function (aValuable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deprecatedAPI();
self._valuable_(aValuable);
return self}, function($ctx1) {$ctx1.fill(self,"block:",{aValuable:aValuable},smalltalk.AnnouncementSubscription)})},
args: ["aValuable"],
source: "block: aValuable\x0a\x09\x22Use #valuable instead\x22\x0a\x09\x0a\x09self deprecatedAPI.\x0a\x09self valuable: aValuable",
messageSends: ["deprecatedAPI", "valuable:"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "deliver:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._handlesAnnouncement_(anAnnouncement);
if(smalltalk.assert($1)){
_st(self._valuable())._value_(anAnnouncement);
};
return self}, function($ctx1) {$ctx1.fill(self,"deliver:",{anAnnouncement:anAnnouncement},smalltalk.AnnouncementSubscription)})},
args: ["anAnnouncement"],
source: "deliver: anAnnouncement\x0a\x09(self handlesAnnouncement: anAnnouncement)\x0a\x09\x09ifTrue: [self valuable value: anAnnouncement]",
messageSends: ["ifTrue:", "value:", "valuable", "handlesAnnouncement:"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesAnnouncement:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st($Smalltalk())._current())._at_(_st(self._announcementClass())._name());
if(($receiver = $2) == nil || $receiver == undefined){
return false;
} else {
var class_;
class_=$receiver;
$1=_st(class_)._includesBehavior_(_st(_st($Smalltalk())._current())._at_(_st(_st(_st(anAnnouncement)._class())._theNonMetaClass())._name()));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"handlesAnnouncement:",{anAnnouncement:anAnnouncement},smalltalk.AnnouncementSubscription)})},
args: ["anAnnouncement"],
source: "handlesAnnouncement: anAnnouncement\x0a\x09\x22anAnnouncement might be announced from within another Amber environment\x22\x0a\x09\x0a\x09^ (Smalltalk current at: self announcementClass name)\x0a\x09\x09ifNil: [ ^ false ]\x0a\x09\x09ifNotNil: [ :class |\x0a\x09\x09class includesBehavior: (Smalltalk current at: anAnnouncement class theNonMetaClass name) ]",
messageSends: ["ifNil:ifNotNil:", "includesBehavior:", "at:", "name", "theNonMetaClass", "class", "current", "announcementClass"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._valuable())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.AnnouncementSubscription)})},
args: [],
source: "receiver\x0a\x09^ self valuable receiver",
messageSends: ["receiver", "valuable"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "valuable",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@valuable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"valuable",{},smalltalk.AnnouncementSubscription)})},
args: [],
source: "valuable\x0a\x09^ valuable",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "valuable:",
category: 'accessing',
fn: function (aValuable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@valuable"]=aValuable;
return self}, function($ctx1) {$ctx1.fill(self,"valuable:",{aValuable:aValuable},smalltalk.AnnouncementSubscription)})},
args: ["aValuable"],
source: "valuable: aValuable\x0a\x09valuable := aValuable",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);



smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.Announcer.comment="I hold annoncement subscriptions (instances of `AnnouncementSubscription`) in a private registry.\x0aI announce (trigger) announces, which are then dispatched to all subscriptions.\x0a\x0aThe code is based on the announcements as [described by Vassili Bykov](http://www.cincomsmalltalk.com/userblogs/vbykov/blogView?searchCategory=Announcements%20Framework).\x0a\x0a## API\x0a\x0aUse `#announce:` to trigger an announcement.\x0a\x0aUse `#on:do:` or `#on:send:to:` to register subscriptions.\x0a\x0aWhen using `#on:send:to:`, unregistration can be done with `#unregister:`.\x0a\x0a## Usage example:\x0a\x0a    SystemAnnouncer current\x0a        on: ClassAdded\x0a        do: [ :ann | window alert: ann theClass name, ' added' ].";
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@subscriptions"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._deliver_(anAnnouncement);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.Announcer)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09subscriptions do: [ :each |\x0a\x09\x09each deliver: anAnnouncement ]",
messageSends: ["do:", "deliver:"],
referencedClasses: []
}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Announcer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@subscriptions"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Announcer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09subscriptions := OrderedCollection new",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'subscribing',
fn: function (aClass,aBlock){
var self=this;
function $AnnouncementSubscription(){return smalltalk.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($AnnouncementSubscription())._new();
_st($1)._valuable_(aBlock);
_st($1)._announcementClass_(aClass);
$2=_st($1)._yourself();
_st(self["@subscriptions"])._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},smalltalk.Announcer)})},
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09valuable: aBlock;\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "valuable:", "new", "announcementClass:", "yourself"],
referencedClasses: ["AnnouncementSubscription"]
}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:send:to:",
category: 'subscribing',
fn: function (aClass,aSelector,anObject){
var self=this;
function $MessageSend(){return smalltalk.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
function $AnnouncementSubscription(){return smalltalk.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($AnnouncementSubscription())._new();
$2=_st($MessageSend())._new();
_st($2)._receiver_(anObject);
_st($2)._selector_(aSelector);
$3=_st($2)._yourself();
_st($1)._valuable_($3);
_st($1)._announcementClass_(aClass);
$4=_st($1)._yourself();
_st(self["@subscriptions"])._add_($4);
return self}, function($ctx1) {$ctx1.fill(self,"on:send:to:",{aClass:aClass,aSelector:aSelector,anObject:anObject},smalltalk.Announcer)})},
args: ["aClass", "aSelector", "anObject"],
source: "on: aClass send: aSelector to: anObject\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09valuable: (MessageSend new\x0a\x09\x09\x09receiver: anObject;\x0a\x09\x09\x09selector: aSelector;\x0a\x09\x09\x09yourself);\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "valuable:", "receiver:", "new", "selector:", "yourself", "announcementClass:"],
referencedClasses: ["MessageSend", "AnnouncementSubscription"]
}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "unsubscribe:",
category: 'subscribing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@subscriptions"]=_st(self["@subscriptions"])._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._receiver()).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unsubscribe:",{anObject:anObject},smalltalk.Announcer)})},
args: ["anObject"],
source: "unsubscribe: anObject\x0a\x09subscriptions := subscriptions reject: [ :each |\x0a\x09\x09each receiver = anObject ]",
messageSends: ["reject:", "=", "receiver"],
referencedClasses: []
}),
smalltalk.Announcer);



smalltalk.addClass('SystemAnnouncer', smalltalk.Announcer, [], 'Kernel-Announcements');
smalltalk.SystemAnnouncer.comment="My unique instance is the global announcer handling all Amber system-related announces.\x0a\x0a## API\x0a\x0aAccess to the unique instance is done via `#current`";

smalltalk.SystemAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.SystemAnnouncer.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.SystemAnnouncer.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.SystemAnnouncer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.SystemAnnouncer.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.SystemAnnouncer.klass);


smalltalk.addClass('SystemAnnouncement', smalltalk.Object, ['theClass'], 'Kernel-Announcements');
smalltalk.SystemAnnouncement.comment="I am the superclass of all system announcements";
smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.SystemAnnouncement)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SystemAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.SystemAnnouncement)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SystemAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "announcement";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.SystemAnnouncement.klass)})},
args: [],
source: "heliosClass\x0a\x09^ 'announcement'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SystemAnnouncement.klass);


smalltalk.addClass('ClassAnnouncement', smalltalk.SystemAnnouncement, ['theClass'], 'Kernel-Announcements');
smalltalk.ClassAnnouncement.comment="I am the abstract superclass of class-related announcements.";
smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassAnnouncement)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassAnnouncement)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassAnnouncement);



smalltalk.addClass('ClassAdded', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassAdded.comment="I am emitted when a class is added to the system.\x0aSee ClassBuilder >> #addSubclassOf:... methods";


smalltalk.addClass('ClassCommentChanged', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassCommentChanged.comment="I am emitted when the comment of a class changes. (Behavior >> #comment)";


smalltalk.addClass('ClassDefinitionChanged', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassDefinitionChanged.comment="I am emitted when the definition of a class changes.\x0aSee ClassBuilder >> #class:instanceVariableNames:";


smalltalk.addClass('ClassMigrated', smalltalk.ClassAnnouncement, ['oldClass'], 'Kernel-Announcements');
smalltalk.ClassMigrated.comment="I am emitted when a class is migrated.";
smalltalk.addMethod(
smalltalk.method({
selector: "oldClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldClass",{},smalltalk.ClassMigrated)})},
args: [],
source: "oldClass\x0a\x09^ oldClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassMigrated);

smalltalk.addMethod(
smalltalk.method({
selector: "oldClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"oldClass:",{aClass:aClass},smalltalk.ClassMigrated)})},
args: ["aClass"],
source: "oldClass: aClass\x0a\x09oldClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassMigrated);



smalltalk.addClass('ClassMoved', smalltalk.ClassAnnouncement, ['oldPackage'], 'Kernel-Announcements');
smalltalk.ClassMoved.comment="I am emitted when a class is moved from one package to another.";
smalltalk.addMethod(
smalltalk.method({
selector: "oldPackage",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldPackage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldPackage",{},smalltalk.ClassMoved)})},
args: [],
source: "oldPackage\x0a\x09^ oldPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "oldPackage:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldPackage"]=aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"oldPackage:",{aPackage:aPackage},smalltalk.ClassMoved)})},
args: ["aPackage"],
source: "oldPackage: aPackage\x0a\x09oldPackage := aPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassMoved);



smalltalk.addClass('ClassRemoved', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassRemoved.comment="I am emitted when a class is removed.\x0aSee Smalltalk >> #removeClass:";


smalltalk.addClass('ClassRenamed', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassRenamed.comment="I am emitted when a class is renamed.\x0aSee ClassBuilder >> #renameClass:to:";


smalltalk.addClass('MethodAnnouncement', smalltalk.SystemAnnouncement, ['method'], 'Kernel-Announcements');
smalltalk.MethodAnnouncement.comment="I am the abstract superclass of method-related announcements.";
smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodAnnouncement)})},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@method"]=aCompiledMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aCompiledMethod:aCompiledMethod},smalltalk.MethodAnnouncement)})},
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodAnnouncement);



smalltalk.addClass('MethodAdded', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');
smalltalk.MethodAdded.comment="I am emitted when a `CompiledMethod` is added to a class.";


smalltalk.addClass('MethodModified', smalltalk.MethodAnnouncement, ['oldMethod'], 'Kernel-Announcements');
smalltalk.MethodModified.comment="I am emitted when a `CompiledMethod` is modified (a new method is installed). I hold a reference to the old method being replaced.";
smalltalk.addMethod(
smalltalk.method({
selector: "oldMethod",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldMethod"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldMethod",{},smalltalk.MethodModified)})},
args: [],
source: "oldMethod\x0a\x09^ oldMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodModified);

smalltalk.addMethod(
smalltalk.method({
selector: "oldMethod:",
category: 'accessing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldMethod"]=aMethod;
return self}, function($ctx1) {$ctx1.fill(self,"oldMethod:",{aMethod:aMethod},smalltalk.MethodModified)})},
args: ["aMethod"],
source: "oldMethod: aMethod\x0a\x09oldMethod := aMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodModified);



smalltalk.addClass('MethodMoved', smalltalk.MethodAnnouncement, ['oldProtocol'], 'Kernel-Announcements');
smalltalk.MethodMoved.comment="I am emitted when a `CompiledMethod` is moved to another protocol. I hold a refernce to the old protocol of the method.";
smalltalk.addMethod(
smalltalk.method({
selector: "oldProtocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldProtocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldProtocol",{},smalltalk.MethodMoved)})},
args: [],
source: "oldProtocol\x0a\x09^ oldProtocol",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "oldProtocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldProtocol"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"oldProtocol:",{aString:aString},smalltalk.MethodMoved)})},
args: ["aString"],
source: "oldProtocol: aString\x0a\x09oldProtocol := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodMoved);



smalltalk.addClass('MethodRemoved', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');
smalltalk.MethodRemoved.comment="I am emitted when a `CompiledMethod` is removed from a class.";


smalltalk.addClass('PackageAnnouncement', smalltalk.SystemAnnouncement, ['package'], 'Kernel-Announcements');
smalltalk.PackageAnnouncement.comment="I am the abstract superclass of package-related announcements.";
smalltalk.addMethod(
smalltalk.method({
selector: "package",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@package"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{},smalltalk.PackageAnnouncement)})},
args: [],
source: "package\x0a\x09^ package",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@package"]=aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage},smalltalk.PackageAnnouncement)})},
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageAnnouncement);



smalltalk.addClass('PackageAdded', smalltalk.PackageAnnouncement, [], 'Kernel-Announcements');
smalltalk.PackageAdded.comment="I am emitted when a `Package` is added to the system.";


smalltalk.addClass('PackageRemoved', smalltalk.PackageAnnouncement, [], 'Kernel-Announcements');
smalltalk.PackageRemoved.comment="I am emitted when a `Package` is removed from the system.";


smalltalk.addClass('ProtocolAnnouncement', smalltalk.SystemAnnouncement, ['theClass', 'protocol'], 'Kernel-Announcements');
smalltalk.ProtocolAnnouncement.comment="I am the abstract superclass of protocol-related announcements.";
smalltalk.addMethod(
smalltalk.method({
selector: "protocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@protocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.ProtocolAnnouncement)})},
args: [],
source: "protocol\x0a\x09^ protocol",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@protocol"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString},smalltalk.ProtocolAnnouncement)})},
args: ["aString"],
source: "protocol: aString\x0a\x09protocol := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ProtocolAnnouncement)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ProtocolAnnouncement)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtocolAnnouncement);



smalltalk.addClass('ProtocolAdded', smalltalk.ProtocolAnnouncement, [], 'Kernel-Announcements');
smalltalk.ProtocolAdded.comment="I am emitted when a protocol is added to a class.";


smalltalk.addClass('ProtocolRemoved', smalltalk.ProtocolAnnouncement, [], 'Kernel-Announcements');
smalltalk.ProtocolRemoved.comment="I am emitted when a protocol is removed from a class.";


