define("amber_core/Kernel-Announcements", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Kernel-Announcements');
$core.packages["Kernel-Announcements"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('AnnouncementSubscription', $globals.Object, ['valuable', 'announcementClass'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AnnouncementSubscription.comment="I am a single entry in a subscription registry of an `Announcer`.\x0aSeveral subscriptions by the same object is possible.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcementClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@announcementClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcementClass\x0a\x09^ announcementClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "announcementClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@announcementClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "announcementClass: aClass\x0a\x09announcementClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "block",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI();
$1=self._valuable();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"block",{},$globals.AnnouncementSubscription)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "block\x0a\x09\x22Use #valuable instead\x22\x0a\x09\x0a\x09self deprecatedAPI.\x0a\x09^ self valuable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI", "valuable"]
}),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "block:",
protocol: 'accessing',
fn: function (aValuable){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._deprecatedAPI();
self._valuable_(aValuable);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"block:",{aValuable:aValuable},$globals.AnnouncementSubscription)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValuable"],
source: "block: aValuable\x0a\x09\x22Use #valuable instead\x22\x0a\x09\x0a\x09self deprecatedAPI.\x0a\x09self valuable: aValuable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI", "valuable:"]
}),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "deliver:",
protocol: 'announcing',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._handlesAnnouncement_(anAnnouncement);
if($core.assert($1)){
$recv(self._valuable())._value_(anAnnouncement);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deliver:",{anAnnouncement:anAnnouncement},$globals.AnnouncementSubscription)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "deliver: anAnnouncement\x0a\x09(self handlesAnnouncement: anAnnouncement)\x0a\x09\x09ifTrue: [ self valuable value: anAnnouncement ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "handlesAnnouncement:", "value:", "valuable"]
}),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "handlesAnnouncement:",
protocol: 'announcing',
fn: function (anAnnouncement){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$receiver;
$3=$recv($Smalltalk())._globals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["globals"]=1;
//>>excludeEnd("ctx");
$4=$recv(self._announcementClass())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._at_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
return false;
} else {
var class_;
class_=$receiver;
$1=$recv($recv($recv($Smalltalk())._globals())._at_($recv($recv($recv(anAnnouncement)._class())._theNonMetaClass())._name()))._includesBehavior_(class_);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handlesAnnouncement:",{anAnnouncement:anAnnouncement},$globals.AnnouncementSubscription)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "handlesAnnouncement: anAnnouncement\x0a\x09\x22anAnnouncement might be announced from within another Amber environment\x22\x0a\x09\x0a\x09^ (Smalltalk globals at: self announcementClass name)\x0a\x09\x09ifNil: [ ^ false ]\x0a\x09\x09ifNotNil: [ :class |\x0a\x09\x09(Smalltalk globals at: anAnnouncement class theNonMetaClass name) includesBehavior: class ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "at:", "globals", "name", "announcementClass", "includesBehavior:", "theNonMetaClass", "class"]
}),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._valuable())._receiver();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{},$globals.AnnouncementSubscription)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ self valuable receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["receiver", "valuable"]
}),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "valuable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@valuable"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valuable\x0a\x09^ valuable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "valuable:",
protocol: 'accessing',
fn: function (aValuable){
var self=this;
self["@valuable"]=aValuable;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValuable"],
source: "valuable: aValuable\x0a\x09valuable := aValuable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AnnouncementSubscription);



$core.addClass('AnnouncementValuable', $globals.Object, ['valuable', 'receiver'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AnnouncementValuable.comment="I wrap `valuable` objects (typically instances of `BlockClosure`) with a `receiver` to be able to unregister subscriptions based on a `receiver`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "valuable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@valuable"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valuable\x0a\x09^ valuable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "valuable:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@valuable"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "valuable: anObject\x0a\x09valuable := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'evaluating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._valuable())._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.AnnouncementValuable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ self valuable value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "valuable"]
}),
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._valuable())._value_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},$globals.AnnouncementValuable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09^ self valuable value: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "valuable"]
}),
$globals.AnnouncementValuable);



$core.addClass('Announcer', $globals.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Announcer.comment="I hold annoncement subscriptions (instances of `AnnouncementSubscription`) in a private registry.\x0aI announce (trigger) announces, which are then dispatched to all subscriptions.\x0a\x0aThe code is based on the announcements as [described by Vassili Bykov](http://www.cincomsmalltalk.com/userblogs/vbykov/blogView?searchCategory=Announcements%20Framework).\x0a\x0a## API\x0a\x0aUse `#announce:` to trigger an announcement.\x0a\x0aUse `#on:do:` or `#on:send:to:` to register subscriptions.\x0a\x0aWhen using `#on:send:to:`, unregistration can be done with `#unregister:`.\x0a\x0a## Usage example:\x0a\x0a    SystemAnnouncer current\x0a        on: ClassAdded\x0a        do: [ :ann | window alert: ann theClass name, ' added' ].";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'announcing',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@subscriptions"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._deliver_(anAnnouncement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},$globals.Announcer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09subscriptions do: [ :each |\x0a\x09\x09each deliver: anAnnouncement ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "deliver:"]
}),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Announcer.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@subscriptions"]=$recv($OrderedCollection())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Announcer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09subscriptions := OrderedCollection new",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: 'subscribing',
fn: function (aClass,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._on_do_for_(aClass,aBlock,nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},$globals.Announcer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a\x09self on: aClass do: aBlock for: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:do:for:"]
}),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "on:do:for:",
protocol: 'subscribing',
fn: function (aClass,aBlock,aReceiver){
var self=this;
function $AnnouncementSubscription(){return $globals.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
function $AnnouncementValuable(){return $globals.AnnouncementValuable||(typeof AnnouncementValuable=="undefined"?nil:AnnouncementValuable)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$6,$7,$5,$8,$2;
$1=self["@subscriptions"];
$3=$recv($AnnouncementSubscription())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=$3;
$6=$recv($AnnouncementValuable())._new();
$recv($6)._valuable_(aBlock);
$recv($6)._receiver_(aReceiver);
$7=$recv($6)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$5=$7;
$recv($4)._valuable_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valuable:"]=1;
//>>excludeEnd("ctx");
$recv($3)._announcementClass_(aClass);
$8=$recv($3)._yourself();
$2=$8;
$recv($1)._add_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:for:",{aClass:aClass,aBlock:aBlock,aReceiver:aReceiver},$globals.Announcer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock", "aReceiver"],
source: "on: aClass do: aBlock for: aReceiver\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09valuable: (AnnouncementValuable new\x0a\x09\x09\x09valuable: aBlock;\x0a\x09\x09\x09receiver: aReceiver;\x0a\x09\x09\x09yourself);\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
referencedClasses: ["AnnouncementSubscription", "AnnouncementValuable"],
//>>excludeEnd("ide");
messageSends: ["add:", "valuable:", "new", "receiver:", "yourself", "announcementClass:"]
}),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "on:doOnce:",
protocol: 'subscribing',
fn: function (aClass,aBlock){
var self=this;
var subscription;
function $AnnouncementSubscription(){return $globals.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($AnnouncementSubscription())._new();
$recv($1)._announcementClass_(aClass);
$2=$recv($1)._yourself();
subscription=$2;
$recv(subscription)._valuable_((function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@subscriptions"])._remove_(subscription);
return $recv(aBlock)._value_(ann);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@subscriptions"])._add_(subscription);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:doOnce:",{aClass:aClass,aBlock:aBlock,subscription:subscription},$globals.Announcer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass doOnce: aBlock\x0a\x09| subscription |\x0a\x09\x0a\x09subscription := AnnouncementSubscription new\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself.\x0a\x09subscription valuable: [ :ann |\x0a\x09\x09subscriptions remove: subscription.\x0a\x09\x09aBlock value: ann ].\x0a\x0a\x09subscriptions add: subscription",
referencedClasses: ["AnnouncementSubscription"],
//>>excludeEnd("ide");
messageSends: ["announcementClass:", "new", "yourself", "valuable:", "remove:", "value:", "add:"]
}),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "on:send:to:",
protocol: 'subscribing',
fn: function (aClass,aSelector,anObject){
var self=this;
function $AnnouncementSubscription(){return $globals.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
function $MessageSend(){return $globals.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$6,$7,$5,$8,$2;
$1=self["@subscriptions"];
$3=$recv($AnnouncementSubscription())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=$3;
$6=$recv($MessageSend())._new();
$recv($6)._receiver_(anObject);
$recv($6)._selector_(aSelector);
$7=$recv($6)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$5=$7;
$recv($4)._valuable_($5);
$recv($3)._announcementClass_(aClass);
$8=$recv($3)._yourself();
$2=$8;
$recv($1)._add_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:send:to:",{aClass:aClass,aSelector:aSelector,anObject:anObject},$globals.Announcer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aSelector", "anObject"],
source: "on: aClass send: aSelector to: anObject\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09valuable: (MessageSend new\x0a\x09\x09\x09receiver: anObject;\x0a\x09\x09\x09selector: aSelector;\x0a\x09\x09\x09yourself);\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
referencedClasses: ["AnnouncementSubscription", "MessageSend"],
//>>excludeEnd("ide");
messageSends: ["add:", "valuable:", "new", "receiver:", "selector:", "yourself", "announcementClass:"]
}),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "unsubscribe:",
protocol: 'subscribing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@subscriptions"]=$recv(self["@subscriptions"])._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._receiver()).__eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unsubscribe:",{anObject:anObject},$globals.Announcer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "unsubscribe: anObject\x0a\x09subscriptions := subscriptions reject: [ :each |\x0a\x09\x09each receiver = anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "=", "receiver"]
}),
$globals.Announcer);



$core.addClass('SystemAnnouncer', $globals.Announcer, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SystemAnnouncer.comment="My unique instance is the global announcer handling all Amber system-related announces.\x0a\x0a## API\x0a\x0aAccess to the unique instance is done via `#current`";
//>>excludeEnd("ide");

$globals.SystemAnnouncer.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SystemAnnouncer.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.SystemAnnouncer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.SystemAnnouncer.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.SystemAnnouncer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.SystemAnnouncer.klass);


$core.addClass('SystemAnnouncement', $globals.Object, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SystemAnnouncement.comment="I am the superclass of all system announcements";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "announcement";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heliosClass\x0a\x09^ 'announcement'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SystemAnnouncement.klass);


$core.addClass('ClassAnnouncement', $globals.SystemAnnouncement, ['theClass'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassAnnouncement.comment="I am the abstract superclass of class-related announcements.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassAnnouncement);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassAnnouncement);



$core.addClass('ClassAdded', $globals.ClassAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassAdded.comment="I am emitted when a class is added to the system.\x0aSee ClassBuilder >> #addSubclassOf:... methods";
//>>excludeEnd("ide");


$core.addClass('ClassCommentChanged', $globals.ClassAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassCommentChanged.comment="I am emitted when the comment of a class changes. (Behavior >> #comment)";
//>>excludeEnd("ide");


$core.addClass('ClassDefinitionChanged', $globals.ClassAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassDefinitionChanged.comment="I am emitted when the definition of a class changes.\x0aSee ClassBuilder >> #class:instanceVariableNames:";
//>>excludeEnd("ide");


$core.addClass('ClassMigrated', $globals.ClassAnnouncement, ['oldClass'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassMigrated.comment="I am emitted when a class is migrated.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "oldClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oldClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "oldClass\x0a\x09^ oldClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassMigrated);

$core.addMethod(
$core.method({
selector: "oldClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@oldClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "oldClass: aClass\x0a\x09oldClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassMigrated);



$core.addClass('ClassMoved', $globals.ClassAnnouncement, ['oldPackage'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassMoved.comment="I am emitted when a class is moved from one package to another.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "oldPackage",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oldPackage"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "oldPackage\x0a\x09^ oldPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassMoved);

$core.addMethod(
$core.method({
selector: "oldPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
self["@oldPackage"]=aPackage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "oldPackage: aPackage\x0a\x09oldPackage := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassMoved);



$core.addClass('ClassRemoved', $globals.ClassAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassRemoved.comment="I am emitted when a class is removed.\x0aSee Smalltalk >> #removeClass:";
//>>excludeEnd("ide");


$core.addClass('ClassRenamed', $globals.ClassAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassRenamed.comment="I am emitted when a class is renamed.\x0aSee ClassBuilder >> #renameClass:to:";
//>>excludeEnd("ide");


$core.addClass('MethodAnnouncement', $globals.SystemAnnouncement, ['method'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodAnnouncement.comment="I am the abstract superclass of method-related announcements.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@method"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodAnnouncement);

$core.addMethod(
$core.method({
selector: "method:",
protocol: 'accessing',
fn: function (aCompiledMethod){
var self=this;
self["@method"]=aCompiledMethod;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodAnnouncement);



$core.addClass('MethodAdded', $globals.MethodAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodAdded.comment="I am emitted when a `CompiledMethod` is added to a class.";
//>>excludeEnd("ide");


$core.addClass('MethodModified', $globals.MethodAnnouncement, ['oldMethod'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodModified.comment="I am emitted when a `CompiledMethod` is modified (a new method is installed). I hold a reference to the old method being replaced.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "oldMethod",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oldMethod"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "oldMethod\x0a\x09^ oldMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodModified);

$core.addMethod(
$core.method({
selector: "oldMethod:",
protocol: 'accessing',
fn: function (aMethod){
var self=this;
self["@oldMethod"]=aMethod;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "oldMethod: aMethod\x0a\x09oldMethod := aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodModified);



$core.addClass('MethodMoved', $globals.MethodAnnouncement, ['oldProtocol'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodMoved.comment="I am emitted when a `CompiledMethod` is moved to another protocol. I hold a refernce to the old protocol of the method.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "oldProtocol",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oldProtocol"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "oldProtocol\x0a\x09^ oldProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodMoved);

$core.addMethod(
$core.method({
selector: "oldProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@oldProtocol"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "oldProtocol: aString\x0a\x09oldProtocol := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodMoved);



$core.addClass('MethodRemoved', $globals.MethodAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodRemoved.comment="I am emitted when a `CompiledMethod` is removed from a class.";
//>>excludeEnd("ide");


$core.addClass('PackageAnnouncement', $globals.SystemAnnouncement, ['package'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageAnnouncement.comment="I am the abstract superclass of package-related announcements.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@package"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageAnnouncement);

$core.addMethod(
$core.method({
selector: "package:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
self["@package"]=aPackage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageAnnouncement);



$core.addClass('PackageAdded', $globals.PackageAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageAdded.comment="I am emitted when a `Package` is added to the system.";
//>>excludeEnd("ide");


$core.addClass('PackageClean', $globals.PackageAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageClean.comment="I am emitted when a package is committed and becomes clean.";
//>>excludeEnd("ide");


$core.addClass('PackageDirty', $globals.PackageAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageDirty.comment="I am emitted when a package becomes dirty.";
//>>excludeEnd("ide");


$core.addClass('PackageRemoved', $globals.PackageAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageRemoved.comment="I am emitted when a `Package` is removed from the system.";
//>>excludeEnd("ide");


$core.addClass('ProtocolAnnouncement', $globals.SystemAnnouncement, ['theClass', 'protocol'], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtocolAnnouncement.comment="I am the abstract superclass of protocol-related announcements.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
function $Package(){return $globals.Package||(typeof Package=="undefined"?nil:Package)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=self._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._beginsWith_("*");
if(!$core.assert($1)){
$3=$recv(self._theClass())._package();
return $3;
};
$4=$recv($Package())._named_ifAbsent_($recv(self._protocol())._allButFirst(),(function(){
return nil;

}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{},$globals.ProtocolAnnouncement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x0a\x09(self protocol beginsWith: '*') ifFalse: [\x0a\x09\x09^ self theClass package ].\x0a\x09\x09\x0a\x09^ Package \x0a\x09\x09named: self protocol allButFirst\x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "beginsWith:", "protocol", "package", "theClass", "named:ifAbsent:", "allButFirst"]
}),
$globals.ProtocolAnnouncement);

$core.addMethod(
$core.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@protocol"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocol\x0a\x09^ protocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtocolAnnouncement);

$core.addMethod(
$core.method({
selector: "protocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@protocol"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "protocol: aString\x0a\x09protocol := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtocolAnnouncement);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtocolAnnouncement);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtocolAnnouncement);



$core.addClass('ProtocolAdded', $globals.ProtocolAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtocolAdded.comment="I am emitted when a protocol is added to a class.";
//>>excludeEnd("ide");


$core.addClass('ProtocolRemoved', $globals.ProtocolAnnouncement, [], 'Kernel-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtocolRemoved.comment="I am emitted when a protocol is removed from a class.";
//>>excludeEnd("ide");

});
