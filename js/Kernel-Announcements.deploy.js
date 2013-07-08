smalltalk.addPackage('Kernel-Announcements');
smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['valuable', 'announcementClass'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "announcementClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@announcementClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcementClass",{},smalltalk.AnnouncementSubscription)})},
messageSends: []}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "announcementClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@announcementClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"announcementClass:",{aClass:aClass},smalltalk.AnnouncementSubscription)})},
messageSends: []}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "block",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._valuable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.AnnouncementSubscription)})},
messageSends: ["deprecatedAPI", "valuable"]}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "block:",
fn: function (aValuable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deprecatedAPI();
self._valuable_(aValuable);
return self}, function($ctx1) {$ctx1.fill(self,"block:",{aValuable:aValuable},smalltalk.AnnouncementSubscription)})},
messageSends: ["deprecatedAPI", "valuable:"]}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "deliver:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._handlesAnnouncement_(anAnnouncement);
if(smalltalk.assert($1)){
_st(self._valuable())._value_(anAnnouncement);
};
return self}, function($ctx1) {$ctx1.fill(self,"deliver:",{anAnnouncement:anAnnouncement},smalltalk.AnnouncementSubscription)})},
messageSends: ["ifTrue:", "value:", "valuable", "handlesAnnouncement:"]}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesAnnouncement:",
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
messageSends: ["ifNil:ifNotNil:", "includesBehavior:", "at:", "name", "theNonMetaClass", "class", "current", "announcementClass"]}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._valuable())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.AnnouncementSubscription)})},
messageSends: ["receiver", "valuable"]}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "valuable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@valuable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"valuable",{},smalltalk.AnnouncementSubscription)})},
messageSends: []}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "valuable:",
fn: function (aValuable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@valuable"]=aValuable;
return self}, function($ctx1) {$ctx1.fill(self,"valuable:",{aValuable:aValuable},smalltalk.AnnouncementSubscription)})},
messageSends: []}),
smalltalk.AnnouncementSubscription);



smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@subscriptions"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._deliver_(anAnnouncement);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.Announcer)})},
messageSends: ["do:", "deliver:"]}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Announcer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@subscriptions"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Announcer)})},
messageSends: ["initialize", "new"]}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
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
messageSends: ["add:", "valuable:", "new", "announcementClass:", "yourself"]}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:send:to:",
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
messageSends: ["add:", "valuable:", "receiver:", "new", "selector:", "yourself", "announcementClass:"]}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "unsubscribe:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@subscriptions"]=_st(self["@subscriptions"])._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._receiver()).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unsubscribe:",{anObject:anObject},smalltalk.Announcer)})},
messageSends: ["reject:", "=", "receiver"]}),
smalltalk.Announcer);



smalltalk.addClass('SystemAnnouncer', smalltalk.Announcer, [], 'Kernel-Announcements');

smalltalk.SystemAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.SystemAnnouncer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.SystemAnnouncer.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.SystemAnnouncer.klass);


smalltalk.addClass('SystemAnnouncement', smalltalk.Object, ['theClass'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.SystemAnnouncement)})},
messageSends: []}),
smalltalk.SystemAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.SystemAnnouncement)})},
messageSends: []}),
smalltalk.SystemAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "announcement";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.SystemAnnouncement.klass)})},
messageSends: []}),
smalltalk.SystemAnnouncement.klass);


smalltalk.addClass('ClassAnnouncement', smalltalk.SystemAnnouncement, ['theClass'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassAnnouncement)})},
messageSends: []}),
smalltalk.ClassAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassAnnouncement)})},
messageSends: []}),
smalltalk.ClassAnnouncement);



smalltalk.addClass('ClassAdded', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassCommentChanged', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassDefinitionChanged', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassMigrated', smalltalk.ClassAnnouncement, ['oldClass'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "oldClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldClass",{},smalltalk.ClassMigrated)})},
messageSends: []}),
smalltalk.ClassMigrated);

smalltalk.addMethod(
smalltalk.method({
selector: "oldClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"oldClass:",{aClass:aClass},smalltalk.ClassMigrated)})},
messageSends: []}),
smalltalk.ClassMigrated);



smalltalk.addClass('ClassMoved', smalltalk.ClassAnnouncement, ['oldPackage'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "oldPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldPackage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldPackage",{},smalltalk.ClassMoved)})},
messageSends: []}),
smalltalk.ClassMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "oldPackage:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldPackage"]=aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"oldPackage:",{aPackage:aPackage},smalltalk.ClassMoved)})},
messageSends: []}),
smalltalk.ClassMoved);



smalltalk.addClass('ClassRemoved', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassRenamed', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('MethodAnnouncement', smalltalk.SystemAnnouncement, ['method'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodAnnouncement)})},
messageSends: []}),
smalltalk.MethodAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@method"]=aCompiledMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aCompiledMethod:aCompiledMethod},smalltalk.MethodAnnouncement)})},
messageSends: []}),
smalltalk.MethodAnnouncement);



smalltalk.addClass('MethodAdded', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('MethodModified', smalltalk.MethodAnnouncement, ['oldMethod'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "oldMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldMethod"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldMethod",{},smalltalk.MethodModified)})},
messageSends: []}),
smalltalk.MethodModified);

smalltalk.addMethod(
smalltalk.method({
selector: "oldMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldMethod"]=aMethod;
return self}, function($ctx1) {$ctx1.fill(self,"oldMethod:",{aMethod:aMethod},smalltalk.MethodModified)})},
messageSends: []}),
smalltalk.MethodModified);



smalltalk.addClass('MethodMoved', smalltalk.MethodAnnouncement, ['oldProtocol'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "oldProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldProtocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldProtocol",{},smalltalk.MethodMoved)})},
messageSends: []}),
smalltalk.MethodMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "oldProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldProtocol"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"oldProtocol:",{aString:aString},smalltalk.MethodMoved)})},
messageSends: []}),
smalltalk.MethodMoved);



smalltalk.addClass('MethodRemoved', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('PackageAnnouncement', smalltalk.SystemAnnouncement, ['package'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "package",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@package"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{},smalltalk.PackageAnnouncement)})},
messageSends: []}),
smalltalk.PackageAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@package"]=aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage},smalltalk.PackageAnnouncement)})},
messageSends: []}),
smalltalk.PackageAnnouncement);



smalltalk.addClass('PackageAdded', smalltalk.PackageAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('PackageRemoved', smalltalk.PackageAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ProtocolAnnouncement', smalltalk.SystemAnnouncement, ['theClass', 'protocol'], 'Kernel-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "protocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@protocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.ProtocolAnnouncement)})},
messageSends: []}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@protocol"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString},smalltalk.ProtocolAnnouncement)})},
messageSends: []}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ProtocolAnnouncement)})},
messageSends: []}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ProtocolAnnouncement)})},
messageSends: []}),
smalltalk.ProtocolAnnouncement);



smalltalk.addClass('ProtocolAdded', smalltalk.ProtocolAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ProtocolRemoved', smalltalk.ProtocolAnnouncement, [], 'Kernel-Announcements');


