define("amber_core/Kernel-Classes", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Kernel-Classes');
$core.packages["Kernel-Classes"].innerEval = function (expr) { return eval(expr); };
$core.packages["Kernel-Classes"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('Behavior', $globals.Object, [], 'Kernel-Classes');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Behavior.comment="I am the superclass of all class objects.\x0a\x0aI define the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).\x0a\x0aMy instances know about the subclass/superclass relationships between classes, contain the description that instances are created from,\x0aand hold the method dictionary that's associated with each class.\x0a\x0aI also provides methods for compiling methods, examining the method dictionary, and iterating over the class hierarchy.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: ">>",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._methodAt_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">>",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: ">> aString\x0a\x09^ self methodAt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodAt:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "addCompiledMethod:",
protocol: 'compiling',
fn: function (aMethod){
var self=this;
var oldMethod,announcement;
function $MethodAdded(){return $globals.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodModified(){return $globals.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$5,$6,$7,$8,$9,$10,$11,$receiver;
oldMethod=$recv(self._methodDictionary())._at_ifAbsent_($recv(aMethod)._selector(),(function(){
return nil;

}));
$2=self._protocols();
$3=$recv(aMethod)._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_($3);
if(!$core.assert($1)){
$4=self._organization();
$5=$recv(aMethod)._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["protocol"]=2;
//>>excludeEnd("ctx");
$recv($4)._addElement_($5);
};
self._basicAddCompiledMethod_(aMethod);
$6=oldMethod;
if(($receiver = $6) == null || $receiver.isNil){
$6;
} else {
self._removeProtocolIfEmpty_($recv(oldMethod)._protocol());
};
$7=oldMethod;
if(($receiver = $7) == null || $receiver.isNil){
$8=$recv($MethodAdded())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($8)._method_(aMethod);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method:"]=1;
//>>excludeEnd("ctx");
$9=$recv($8)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
announcement=$9;
} else {
$10=$recv($MethodModified())._new();
$recv($10)._oldMethod_(oldMethod);
$recv($10)._method_(aMethod);
$11=$recv($10)._yourself();
announcement=$11;
};
$recv($recv($SystemAnnouncer())._current())._announce_(announcement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addCompiledMethod:",{aMethod:aMethod,oldMethod:oldMethod,announcement:announcement},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "addCompiledMethod: aMethod\x0a\x09| oldMethod announcement |\x0a\x09\x0a\x09oldMethod := self methodDictionary\x0a\x09\x09at: aMethod selector\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09\x0a\x09(self protocols includes: aMethod protocol)\x0a\x09\x09ifFalse: [ self organization addElement: aMethod protocol ].\x0a\x0a\x09self basicAddCompiledMethod: aMethod.\x0a\x09\x0a\x09oldMethod ifNotNil: [\x0a\x09\x09self removeProtocolIfEmpty: oldMethod protocol ].\x0a\x09\x0a\x09announcement := oldMethod\x0a\x09\x09ifNil: [\x0a\x09\x09\x09MethodAdded new\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ]\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09MethodModified new\x0a\x09\x09\x09\x09\x09oldMethod: oldMethod;\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09\x09\x09announce: announcement",
referencedClasses: ["MethodAdded", "MethodModified", "SystemAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "methodDictionary", "selector", "ifFalse:", "includes:", "protocols", "protocol", "addElement:", "organization", "basicAddCompiledMethod:", "ifNotNil:", "removeProtocolIfEmpty:", "ifNil:ifNotNil:", "method:", "new", "yourself", "oldMethod:", "announce:", "current"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allInstanceVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
result=$recv(self._instanceVariableNames())._copy();
$1=self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(result)._addAll_($recv(self._superclass())._allInstanceVariableNames());
};
$2=result;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allInstanceVariableNames",{result:result},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allInstanceVariableNames\x0a\x09| result |\x0a\x09result := self instanceVariableNames copy.\x0a\x09self superclass ifNotNil: [\x0a\x09\x09result addAll: self superclass allInstanceVariableNames ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "superclass", "addAll:", "allInstanceVariableNames"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$1;
$2=self._allSuperclasses();
$3=self._selectors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectors"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._inject_into_($3,(function(acc,each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(acc)._addAll_($recv(each)._selectors());
$4=$recv(acc)._yourself();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSelectors\x0a\x09^ self allSuperclasses\x0a\x09\x09inject: self selectors\x0a\x09\x09into: [ :acc :each | acc addAll: each selectors; yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "allSuperclasses", "selectors", "addAll:", "yourself"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSubclasses",
protocol: 'accessing',
fn: function (){
var self=this;
var subclasses,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
subclasses=self._subclasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclasses"]=1;
//>>excludeEnd("ctx");
index=(1);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(index).__gt($recv(subclasses)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(subclasses)._addAll_($recv($recv(subclasses)._at_(index))._subclasses());
index=$recv(index).__plus((1));
return index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=subclasses;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSubclasses",{subclasses:subclasses,index:index},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSubclasses\x0a\x09\x22Answer an collection of the receiver's and the receiver's descendent's subclasses. \x22\x0a\x0a\x09| subclasses index |\x0a\x09\x0a\x09subclasses := self subclasses.\x0a\x09index := 1.\x0a\x09[ index > subclasses size ]\x0a\x09\x09whileFalse: [ subclasses addAll: (subclasses at: index) subclasses.\x0a\x09\x09\x09index := index + 1 ].\x0a\x0a\x09^ subclasses",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclasses", "whileFalse:", ">", "size", "addAll:", "at:", "+"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSubclassesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._allSubclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSubclassesDo:",{aBlock:aBlock},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "allSubclassesDo: aBlock\x0a\x09\x22Evaluate the argument, aBlock, for each of the receiver's subclasses.\x22\x0a\x0a\x09self allSubclasses do: [ :each |\x0a    \x09aBlock value: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "allSubclasses", "value:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSuperclasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$6,$3,$receiver;
$1=self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$2=[];
return $2;
} else {
$1;
};
$5=self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=2;
//>>excludeEnd("ctx");
$4=$recv($OrderedCollection())._with_($5);
$recv($4)._addAll_($recv(self._superclass())._allSuperclasses());
$6=$recv($4)._yourself();
$3=$6;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSuperclasses",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSuperclasses\x0a\x09\x0a\x09self superclass ifNil: [ ^ #() ].\x0a\x09\x0a\x09^ (OrderedCollection with: self superclass)\x0a\x09\x09addAll: self superclass allSuperclasses;\x0a\x09\x09yourself",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "superclass", "addAll:", "with:", "allSuperclasses", "yourself"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicAddCompiledMethod:",
protocol: 'private',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.addMethod(aMethod, self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddCompiledMethod:",{aMethod:aMethod},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "basicAddCompiledMethod: aMethod\x0a\x09<$core.addMethod(aMethod, self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicNew",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new self.fn();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicNew",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicNew\x0a\x09<return new self.fn()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicRemoveCompiledMethod:",
protocol: 'private',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.removeMethod(aMethod,self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicRemoveCompiledMethod:",{aMethod:aMethod},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "basicRemoveCompiledMethod: aMethod\x0a\x09<$core.removeMethod(aMethod,self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "canUnderstand:",
protocol: 'testing',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$1=$recv(self._includesSelector_($recv(aSelector)._asString()))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._notNil();
return $recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._superclass())._canUnderstand_(aSelector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canUnderstand:",{aSelector:aSelector},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "canUnderstand: aSelector\x0a\x09^ (self includesSelector: aSelector asString) or: [\x0a\x09\x09self superclass notNil and: [ self superclass canUnderstand: aSelector ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "includesSelector:", "asString", "and:", "notNil", "superclass", "canUnderstand:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "comment",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._basicAt_("comment");
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"comment",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "comment\x0a\x09^ (self basicAt: 'comment') ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "basicAt:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "comment:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassCommentChanged(){return $globals.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._basicAt_put_("comment",aString);
$1=$recv($ClassCommentChanged())._new();
$recv($1)._theClass_(self);
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"comment:",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "comment: aString\x0a\x09self basicAt: 'comment' put: aString.\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassCommentChanged new\x0a\x09\x09\x09theClass: self;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassCommentChanged"],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "compile:protocol:",
protocol: 'compiling',
fn: function (aString,anotherString){
var self=this;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Compiler())._new())._install_forClass_protocol_(aString,self,anotherString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:protocol:",{aString:aString,anotherString:anotherString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "compile: aString protocol: anotherString\x0a\x09^ Compiler new\x0a\x09\x09install: aString\x0a\x09\x09forClass: self\x0a\x09\x09protocol: anotherString",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["install:forClass:protocol:", "new"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "includesBehavior:",
protocol: 'testing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self.__eq_eq(aClass))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inheritsFrom_(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesBehavior:",{aClass:aClass},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "includesBehavior: aClass\x0a\x09^ self == aClass or: [\x0a\x09\x09\x09self inheritsFrom: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "==", "inheritsFrom:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "includesSelector:",
protocol: 'testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._methodDictionary())._includesKey_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesSelector:",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "includesSelector: aString\x0a\x09^ self methodDictionary includesKey: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includesKey:", "methodDictionary"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "inheritsFrom:",
protocol: 'testing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$receiver;
$1=self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
$1;
};
$4=self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=2;
//>>excludeEnd("ctx");
$3=$recv(aClass).__eq_eq($4);
$2=$recv($3)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._superclass())._inheritsFrom_(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inheritsFrom:",{aClass:aClass},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "inheritsFrom: aClass\x0a\x09self superclass ifNil: [ ^ false ].\x0a\x0a\x09^ aClass == self superclass or: [ \x0a\x09\x09self superclass inheritsFrom: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "superclass", "or:", "==", "inheritsFrom:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "instanceVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.iVarNames;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instanceVariableNames\x0a\x09<return self.iVarNames>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "isBehavior",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBehavior\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javascriptConstructor",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.fn;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javascriptConstructor",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "javascriptConstructor\x0a\x09\x22Answer the JS constructor used to instantiate. See boot.js\x22\x0a\x09\x0a\x09<return self.fn>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javascriptConstructor:",
protocol: 'accessing',
fn: function (aJavaScriptFunction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.setClassConstructor(self, aJavaScriptFunction);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javascriptConstructor:",{aJavaScriptFunction:aJavaScriptFunction},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJavaScriptFunction"],
source: "javascriptConstructor: aJavaScriptFunction\x0a\x09\x22Set the JS constructor used to instantiate.\x0a\x09See the JS counter-part in boot.js `$core.setClassConstructor'\x22\x0a\x09\x0a\x09<$core.setClassConstructor(self, aJavaScriptFunction);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "lookupSelector:",
protocol: 'accessing',
fn: function (selector){
var self=this;
var lookupClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
lookupClass=self;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(lookupClass).__eq(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(lookupClass)._includesSelector_(selector);
if($core.assert($1)){
$2=$recv(lookupClass)._methodAt_(selector);
throw $early=[$2];
};
lookupClass=$recv(lookupClass)._superclass();
return lookupClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupSelector:",{selector:selector,lookupClass:lookupClass},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector"],
source: "lookupSelector: selector\x0a\x09\x22Look up the given selector in my methodDictionary.\x0a\x09Return the corresponding method if found.\x0a\x09Otherwise chase the superclass chain and try again.\x0a\x09Return nil if no method is found.\x22\x0a\x09\x0a\x09| lookupClass |\x0a\x09\x0a\x09lookupClass := self.\x0a\x09[ lookupClass = nil ] whileFalse: [\x0a\x09\x09(lookupClass includesSelector: selector)\x0a\x09\x09\x09\x09ifTrue: [ ^ lookupClass methodAt: selector ].\x0a\x09\x09\x09lookupClass := lookupClass superclass ].\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "=", "ifTrue:", "includesSelector:", "methodAt:", "superclass"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "methodAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._methodDictionary())._at_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodAt:",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodAt: aString\x0a\x09^ self methodDictionary at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "methodDictionary"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "methodDictionary",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var dict = $globals.HashedCollection._new();
	var methods = self.methods;
	Object.keys(methods).forEach(function(i) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	});
	return dict;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodDictionary",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodDictionary\x0a\x09<var dict = $globals.HashedCollection._new();\x0a\x09var methods = self.methods;\x0a\x09Object.keys(methods).forEach(function(i) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09dict._at_put_(methods[i].selector, methods[i]);\x0a\x09\x09}\x0a\x09});\x0a\x09return dict>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "methodTemplate",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$7,$8,$6,$9,$5,$10,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("messageSelectorAndArgumentNames");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$3=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$4=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("\x22comment stating purpose of message\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$7=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$8=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__comma($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$9=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("| temporary variable names |");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv($recv($String())._lf()).__comma($recv($String())._tab()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$10=$recv(stream)._nextPutAll_("statements");
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodTemplate",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodTemplate\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: 'messageSelectorAndArgumentNames';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: '\x22comment stating purpose of message\x22';\x0a\x09\x09\x09nextPutAll: String lf, String lf, String tab;\x0a\x09\x09\x09nextPutAll: '| temporary variable names |';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'statements' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "nextPutAll:", ",", "lf", "tab"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "methods",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._methodDictionary())._values();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methods",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methods\x0a\x09^ self methodDictionary values",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["values", "methodDictionary"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "methodsInProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._methods())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._protocol()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09^ self methods select: [ :each | each protocol = aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "methods", "=", "protocol"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.className || nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09<return self.className || nil>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._basicNew())._initialize();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09^ self basicNew initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "basicNew"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "organization",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_("organization");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"organization",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "ownMethods",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv(self._ownProtocols())._inject_into_($recv($OrderedCollection())._new(),(function(acc,each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(acc).__comma(self._methodsInProtocol_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethods",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ownMethods\x0a\x09\x22Answer the methods of the receiver that are not package extensions\x22\x0a\x0a\x09^ (self ownProtocols \x0a\x09\x09inject: OrderedCollection new\x0a\x09\x09into: [ :acc :each | acc, (self methodsInProtocol: each) ])\x0a\x09\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["sorted:", "inject:into:", "ownProtocols", "new", ",", "methodsInProtocol:", "<=", "selector"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "ownProtocols",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._protocols())._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._match_("^\x5c*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownProtocols",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ownProtocols\x0a\x09\x22Answer the protocols of the receiver that are not package extensions\x22\x0a\x0a\x09^ self protocols reject: [ :each |\x0a\x09\x09each match: '^\x5c*' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "protocols", "match:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "packageOfProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $Package(){return $globals.Package||(typeof Package=="undefined"?nil:Package)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(aString)._beginsWith_("*");
if(!$core.assert($1)){
$2=self._package();
return $2;
};
$3=$recv($Package())._named_ifAbsent_($recv(aString)._allButFirst(),(function(){
return nil;

}));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageOfProtocol:",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "packageOfProtocol: aString\x0a\x09\x22Answer the package the method of receiver belongs to:\x0a\x09- if it is an extension method, answer the corresponding package\x0a\x09- else answer the receiver's package\x22\x0a\x09\x0a\x09(aString beginsWith: '*') ifFalse: [\x0a\x09\x09^ self package ].\x0a\x09\x09\x0a\x09^ Package \x0a\x09\x09named: aString allButFirst\x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "beginsWith:", "package", "named:ifAbsent:", "allButFirst"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "protocols",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._organization())._elements())._sorted();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocols",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocols\x0a\x09^ self organization elements sorted",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sorted", "elements", "organization"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "protocolsDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var methodsByProtocol;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
methodsByProtocol=$recv($HashedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(self._methodDictionary())._valuesDo_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(methodsByProtocol)._at_ifAbsentPut_($recv(m)._protocol(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))._add_(m);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._protocols())._do_((function(protocol){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(protocol,$recv(methodsByProtocol)._at_(protocol));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({protocol:protocol},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocolsDo:",{aBlock:aBlock,methodsByProtocol:methodsByProtocol},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "protocolsDo: aBlock\x0a\x09\x22Execute aBlock for each method protocol with\x0a\x09its collection of methods in the sort order of protocol name.\x22\x0a\x0a\x09| methodsByProtocol |\x0a\x09methodsByProtocol := HashedCollection new.\x0a\x09self methodDictionary valuesDo: [ :m |\x0a\x09\x09(methodsByProtocol at: m protocol ifAbsentPut: [ Array new ])\x0a\x09\x09\x09add: m ].\x0a\x09self protocols do: [ :protocol |\x0a\x09\x09aBlock value: protocol value: (methodsByProtocol at: protocol) ]",
referencedClasses: ["HashedCollection", "Array"],
//>>excludeEnd("ide");
messageSends: ["new", "valuesDo:", "methodDictionary", "add:", "at:ifAbsentPut:", "protocol", "do:", "protocols", "value:value:", "at:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "prototype",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.fn.prototype;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prototype",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prototype\x0a\x09<return self.fn.prototype>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "recompile",
protocol: 'compiling',
fn: function (){
var self=this;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Compiler())._new())._recompile_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompile",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompile\x0a\x09^ Compiler new recompile: self",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["recompile:", "new"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "removeCompiledMethod:",
protocol: 'compiling',
fn: function (aMethod){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodRemoved(){return $globals.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._basicRemoveCompiledMethod_(aMethod);
self._removeProtocolIfEmpty_($recv(aMethod)._protocol());
$1=$recv($MethodRemoved())._new();
$recv($1)._method_(aMethod);
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeCompiledMethod:",{aMethod:aMethod},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "removeCompiledMethod: aMethod\x0a\x09self basicRemoveCompiledMethod: aMethod.\x0a\x09\x0a\x09self removeProtocolIfEmpty: aMethod protocol.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (MethodRemoved new\x0a\x09\x09\x09method: aMethod;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "MethodRemoved"],
//>>excludeEnd("ide");
messageSends: ["basicRemoveCompiledMethod:", "removeProtocolIfEmpty:", "protocol", "announce:", "current", "method:", "new", "yourself"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "removeProtocolIfEmpty:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._methods())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._protocol()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._organization())._removeElement_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProtocolIfEmpty:",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeProtocolIfEmpty: aString\x0a\x09self methods\x0a\x09\x09detect: [ :each | each protocol = aString ]\x0a\x09\x09ifNone: [ self organization removeElement: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "methods", "=", "protocol", "removeElement:", "organization"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "selectors",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._methodDictionary())._keys();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectors",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectors\x0a\x09^ self methodDictionary keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keys", "methodDictionary"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclasses",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "superclass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.superclass || nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superclass",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superclass\x0a\x09<return self.superclass || nil>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "withAllSubclasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Array())._with_(self);
$recv($2)._addAll_(self._allSubclasses());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withAllSubclasses",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "withAllSubclasses\x0a\x09^ (Array with: self) addAll: self allSubclasses; yourself",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["addAll:", "with:", "allSubclasses", "yourself"]
}),
$globals.Behavior);



$core.addClass('Class', $globals.Behavior, [], 'Kernel-Classes');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Class.comment="I am __the__ class object.\x0a\x0aMy instances are the classes of the system.\x0aClass creation is done throught a `ClassBuilder` instance.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="$globals.".__comma(self._name());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavascript\x0a\x09^ '$globals.', self name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "name"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "browse",
protocol: 'browsing',
fn: function (){
var self=this;
function $Finder(){return $globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Finder())._findClass_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browse",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browse\x0a\x09Finder findClass: self",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
messageSends: ["findClass:"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$1="Unclassified";
} else {
$1=$recv(self._package())._name();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"category",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ self package ifNil: [ 'Unclassified' ] ifNotNil: [ self package name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "package", "name"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "classTag",
protocol: 'accessing',
fn: function (){
var self=this;
return "class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$5,$6,$7,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv(self._superclass())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(" subclass: #");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$3=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$4=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$5=$recv(stream)._nextPutAll_("instanceVariableNames: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$5;
$recv(self._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$6=$recv("'".__comma($recv($String())._lf())).__comma($recv($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("package: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(self._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
$7=$recv(stream)._nextPutAll_("'");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: self superclass asString;\x0a\x09\x09\x09nextPutAll: ' subclass: #';\x0a\x09\x09\x09nextPutAll: self name;\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09\x09nextPutAll: self category;\x0a\x09\x09\x09nextPutAll: '''' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "nextPutAll:", "asString", "superclass", "name", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "isClass",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClass\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_("pkg");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ self basicAt: 'pkg'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "package:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var oldPackage;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassMoved(){return $globals.ClassMoved||(typeof ClassMoved=="undefined"?nil:ClassMoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5;
$2=self._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq(aPackage);
if($core.assert($1)){
return self;
};
oldPackage=self._package();
self._basicAt_put_("pkg",aPackage);
$3=$recv(oldPackage)._organization();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["organization"]=1;
//>>excludeEnd("ctx");
$recv($3)._removeElement_(self);
$recv($recv(aPackage)._organization())._addElement_(self);
$4=$recv($ClassMoved())._new();
$recv($4)._theClass_(self);
$recv($4)._oldPackage_(oldPackage);
$5=$recv($4)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage,oldPackage:oldPackage},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09| oldPackage |\x0a\x09\x0a\x09self package = aPackage ifTrue: [ ^ self ].\x0a\x09\x0a\x09oldPackage := self package.\x0a\x09\x0a\x09self basicAt: 'pkg' put: aPackage.\x0a\x09oldPackage organization removeElement: self.\x0a\x09aPackage organization addElement: self.\x0a\x0a\x09SystemAnnouncer current announce: (ClassMoved new\x0a\x09\x09theClass: self;\x0a\x09\x09oldPackage: oldPackage;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassMoved"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "package", "basicAt:put:", "removeElement:", "organization", "addElement:", "announce:", "current", "theClass:", "new", "oldPackage:", "yourself"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "name"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "rename:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($ClassBuilder())._new())._renameClass_to_(self,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rename:",{aString:aString},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "rename: aString\x0a\x09ClassBuilder new renameClass: self to: aString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["renameClass:to:", "new"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:",
protocol: 'class creation',
fn: function (aString,anotherString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: anotherString package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:category:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
protocol: 'class creation',
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09\x22Kept for file-in compatibility. ignores class variables and pools.\x22\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:package:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($ClassBuilder())._new())._superclass_subclass_instanceVariableNames_package_(self,$recv(aString)._asString(),aString2,aString3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ ClassBuilder new\x0a\x09\x09superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new", "asString"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.subclasses._copy();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclasses",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09<return self.subclasses._copy()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._class();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09^ self class",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);



$core.addClass('Metaclass', $globals.Behavior, [], 'Kernel-Classes');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Metaclass.comment="I am the root of the class hierarchy.\x0a\x0aMy instances are metaclasses, one for each real class, and have a single instance, which they hold onto: the class that they are the metaclass of.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("$globals.".__comma($recv(self._instanceClass())._name())).__comma(".klass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavascript\x0a\x09^ '$globals.', self instanceClass name, '.klass'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "name", "instanceClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(self._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$2=$recv(stream)._nextPutAll_(" instanceVariableNames: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$2;
$recv(self._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._nextPutAll_("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: self asString;\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream nextPutAll: '''' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "instanceClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.instanceClass;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceClass",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instanceClass\x0a\x09<return self.instanceClass>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "instanceVariableNames:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($ClassBuilder())._new())._class_instanceVariableNames_(self,aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames:",{aCollection:aCollection},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "instanceVariableNames: aCollection\x0a\x09ClassBuilder new\x0a\x09\x09class: self instanceVariableNames: aCollection",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["class:instanceVariableNames:", "new"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "isMetaclass",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMetaclass\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instanceClass())._package();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ self instanceClass package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["package", "instanceClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_($recv(self._instanceClass())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_(" class");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: self instanceClass name;\x0a\x09\x09nextPutAll: ' class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "name", "instanceClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._instanceClass())._subclasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._isMetaclass())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._theMetaClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclasses",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09^ (self instanceClass subclasses \x0a\x09\x09select: [ :each | each isMetaclass not ])\x0a\x09\x09collect: [ :each | each theMetaClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "select:", "subclasses", "instanceClass", "not", "isMetaclass", "theMetaClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._instanceClass();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09^ self instanceClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["instanceClass"]
}),
$globals.Metaclass);



$core.addClass('ClassBuilder', $globals.Object, [], 'Kernel-Classes');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassBuilder.comment="I am responsible for compiling new classes or modifying existing classes in the system.\x0a\x0aRather than using me directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
protocol: 'class definition',
fn: function (aClass,className,aCollection,packageName){
var self=this;
var theClass,thePackage;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Package(){return $globals.Package||(typeof Package=="undefined"?nil:Package)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
theClass=$recv($recv($Smalltalk())._globals())._at_(className);
thePackage=$recv($Package())._named_(packageName);
$1=theClass;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(theClass)._package_(thePackage);
$2=$recv($recv(theClass)._superclass()).__eq_eq(aClass);
if(!$core.assert($2)){
$3=self._migrateClassNamed_superclass_instanceVariableNames_package_(className,aClass,aCollection,packageName);
return $3;
};
};
$4=self._basicAddSubclassOf_named_instanceVariableNames_package_(aClass,className,aCollection,packageName);
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,className:className,aCollection:aCollection,packageName:packageName,theClass:theClass,thePackage:thePackage},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className", "aCollection", "packageName"],
source: "addSubclassOf: aClass named: className instanceVariableNames: aCollection package: packageName\x0a\x09| theClass thePackage |\x0a\x09\x0a\x09theClass := Smalltalk globals at: className.\x0a\x09thePackage := Package named: packageName.\x0a\x09\x0a\x09theClass ifNotNil: [\x0a\x09\x09theClass package: thePackage.\x0a\x09\x09theClass superclass == aClass ifFalse: [\x0a\x09\x09\x09^ self\x0a\x09\x09\x09\x09migrateClassNamed: className\x0a\x09\x09\x09\x09superclass: aClass\x0a\x09\x09\x09\x09instanceVariableNames: aCollection\x0a\x09\x09\x09\x09package: packageName ] ].\x0a\x09\x09\x0a\x09^ self\x0a\x09\x09basicAddSubclassOf: aClass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName",
referencedClasses: ["Smalltalk", "Package"],
//>>excludeEnd("ide");
messageSends: ["at:", "globals", "named:", "ifNotNil:", "package:", "ifFalse:", "==", "superclass", "migrateClassNamed:superclass:instanceVariableNames:package:", "basicAddSubclassOf:named:instanceVariableNames:package:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicAddSubclassOf:named:instanceVariableNames:package:",
protocol: 'private',
fn: function (aClass,aString,aCollection,packageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		$core.addClass(aString, aClass, aCollection, packageName);
		return $globals[aString]
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,aString:aString,aCollection:aCollection,packageName:packageName},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString", "aCollection", "packageName"],
source: "basicAddSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName\x0a\x09<\x0a\x09\x09$core.addClass(aString, aClass, aCollection, packageName);\x0a\x09\x09return $globals[aString]\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicClass:instanceVariableNames:",
protocol: 'private',
fn: function (aClass,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicClass_instanceVariables_(aClass,self._instanceVariableNamesFor_(aString));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariableNames:",{aClass:aClass,aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "basicClass: aClass instanceVariableNames: aString\x0a\x09self basicClass: aClass instanceVariables: (self instanceVariableNamesFor: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicClass:instanceVariables:", "instanceVariableNamesFor:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicClass:instanceVariables:",
protocol: 'private',
fn: function (aClass,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aClass)._isMetaclass();
if(!$core.assert($1)){
self._error_($recv($recv(aClass)._name()).__comma(" is not a metaclass"));
};
$recv(aClass)._basicAt_put_("iVarNames",aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariables:",{aClass:aClass,aCollection:aCollection},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aCollection"],
source: "basicClass: aClass instanceVariables: aCollection\x0a\x0a\x09aClass isMetaclass ifFalse: [ self error: aClass name, ' is not a metaclass' ].\x0a\x09aClass basicAt: 'iVarNames' put: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isMetaclass", "error:", ",", "name", "basicAt:put:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicRemoveClass:",
protocol: 'private',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.removeClass(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicRemoveClass:",{aClass:aClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "basicRemoveClass: aClass\x0a\x09<$core.removeClass(aClass)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicRenameClass:to:",
protocol: 'private',
fn: function (aClass,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		$globals[aString] = aClass;
		delete $globals[aClass.className];
		aClass.className = aString;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicRenameClass:to:",{aClass:aClass,aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "basicRenameClass: aClass to: aString\x0a\x09<\x0a\x09\x09$globals[aString] = aClass;\x0a\x09\x09delete $globals[aClass.className];\x0a\x09\x09aClass.className = aString;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicSwapClassNames:with:",
protocol: 'private',
fn: function (aClass,anotherClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var tmp = aClass.className;
		aClass.className = anotherClass.className;
		anotherClass.className = tmp;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicSwapClassNames:with:",{aClass:aClass,anotherClass:anotherClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "basicSwapClassNames: aClass with: anotherClass\x0a\x09<\x0a\x09\x09var tmp = aClass.className;\x0a\x09\x09aClass.className = anotherClass.className;\x0a\x09\x09anotherClass.className = tmp;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "class:instanceVariableNames:",
protocol: 'class definition',
fn: function (aClass,ivarNames){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassDefinitionChanged(){return $globals.ClassDefinitionChanged||(typeof ClassDefinitionChanged=="undefined"?nil:ClassDefinitionChanged)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._basicClass_instanceVariableNames_(aClass,ivarNames);
self._setupClass_(aClass);
$1=$recv($ClassDefinitionChanged())._new();
$recv($1)._theClass_(aClass);
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"class:instanceVariableNames:",{aClass:aClass,ivarNames:ivarNames},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "ivarNames"],
source: "class: aClass instanceVariableNames: ivarNames\x0a\x09self basicClass: aClass instanceVariableNames: ivarNames.\x0a\x09self setupClass: aClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassDefinitionChanged new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassDefinitionChanged"],
//>>excludeEnd("ide");
messageSends: ["basicClass:instanceVariableNames:", "setupClass:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "copyClass:named:",
protocol: 'copying',
fn: function (aClass,className){
var self=this;
var newClass;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassAdded(){return $globals.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
newClass=self._addSubclassOf_named_instanceVariableNames_package_($recv(aClass)._superclass(),className,$recv(aClass)._instanceVariableNames(),$recv($recv(aClass)._package())._name());
self._copyClass_to_(aClass,newClass);
$1=$recv($ClassAdded())._new();
$recv($1)._theClass_(newClass);
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
$3=newClass;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClass:named:",{aClass:aClass,className:className,newClass:newClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "copyClass: aClass named: className\x0a\x09| newClass |\x0a\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name.\x0a\x0a\x09self copyClass: aClass to: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["SystemAnnouncer", "ClassAdded"],
//>>excludeEnd("ide");
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "copyClass:to:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "copyClass:to:",
protocol: 'copying',
fn: function (aClass,anotherClass){
var self=this;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$6,$9,$8;
$recv(anotherClass)._comment_($recv(aClass)._comment());
$1=$recv(aClass)._methodDictionary();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodDictionary"]=1;
//>>excludeEnd("ctx");
$recv($1)._valuesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($Compiler())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$recv(each)._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["source"]=1;
//>>excludeEnd("ctx");
$4=$recv(each)._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
return $recv($2)._install_forClass_protocol_($3,anotherClass,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["install:forClass:protocol:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valuesDo:"]=1;
//>>excludeEnd("ctx");
$5=$recv(anotherClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$7=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._instanceVariableNames();
self._basicClass_instanceVariables_($5,$6);
$9=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=3;
//>>excludeEnd("ctx");
$8=$recv($9)._methodDictionary();
$recv($8)._valuesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($Compiler())._new())._install_forClass_protocol_($recv(each)._source(),$recv(anotherClass)._class(),$recv(each)._protocol());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._setupClass_(anotherClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,anotherClass:anotherClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "copyClass: aClass to: anotherClass\x0a\x0a\x09anotherClass comment: aClass comment.\x0a\x0a\x09aClass methodDictionary valuesDo: [ :each |\x0a\x09\x09Compiler new install: each source forClass: anotherClass protocol: each protocol ].\x0a\x0a\x09self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.\x0a\x0a\x09aClass class methodDictionary valuesDo: [ :each |\x0a\x09\x09Compiler new install: each source forClass: anotherClass class protocol: each protocol ].\x0a\x0a\x09self setupClass: anotherClass",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["comment:", "comment", "valuesDo:", "methodDictionary", "install:forClass:protocol:", "new", "source", "protocol", "basicClass:instanceVariables:", "class", "instanceVariableNames", "setupClass:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "installMethod:forClass:protocol:",
protocol: 'method definition',
fn: function (aCompiledMethod,aBehavior,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCompiledMethod)._protocol_(aString);
$recv(aBehavior)._addCompiledMethod_(aCompiledMethod);
return aCompiledMethod;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installMethod:forClass:protocol:",{aCompiledMethod:aCompiledMethod,aBehavior:aBehavior,aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod", "aBehavior", "aString"],
source: "installMethod: aCompiledMethod forClass: aBehavior protocol: aString\x0a\x09aCompiledMethod protocol: aString.\x0a\x09aBehavior addCompiledMethod: aCompiledMethod.\x0a\x09^ aCompiledMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["protocol:", "addCompiledMethod:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "instanceVariableNamesFor:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aString)._tokenize_(" "))._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNamesFor:",{aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "instanceVariableNamesFor: aString\x0a\x09^ (aString tokenize: ' ') reject: [ :each | each isEmpty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "tokenize:", "isEmpty"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "migrateClass:superclass:",
protocol: 'class migration',
fn: function (aClass,anotherClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$1=self._migrateClassNamed_superclass_instanceVariableNames_package_($2,anotherClass,$recv(aClass)._instanceVariableNames(),$recv($recv(aClass)._package())._name());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"migrateClass:superclass:",{aClass:aClass,anotherClass:anotherClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "migrateClass: aClass superclass: anotherClass\x0a\x09^ self\x0a\x09\x09migrateClassNamed: aClass name\x0a\x09\x09superclass: anotherClass\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["migrateClassNamed:superclass:instanceVariableNames:package:", "name", "instanceVariableNames", "package"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "migrateClassNamed:superclass:instanceVariableNames:package:",
protocol: 'class migration',
fn: function (className,aClass,aCollection,packageName){
var self=this;
var oldClass,newClass,tmp;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassMigrated(){return $globals.ClassMigrated||(typeof ClassMigrated=="undefined"?nil:ClassMigrated)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
tmp="new*".__comma(className);
oldClass=$recv($recv($Smalltalk())._globals())._at_(className);
newClass=self._addSubclassOf_named_instanceVariableNames_package_(aClass,tmp,aCollection,packageName);
self._basicSwapClassNames_with_(oldClass,newClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicSwapClassNames:with:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._copyClass_to_(oldClass,newClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(exception){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._basicSwapClassNames_with_(oldClass,newClass);
$1=self._basicRemoveClass_(newClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["basicRemoveClass:"]=1;
//>>excludeEnd("ctx");
$1;
return $recv(exception)._resignal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._rawRenameClass_to_(oldClass,tmp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rawRenameClass:to:"]=1;
//>>excludeEnd("ctx");
$2=self._rawRenameClass_to_(newClass,className);
$recv($recv(oldClass)._subclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._migrateClass_superclass_(each,newClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._basicRemoveClass_(oldClass);
$3=$recv($ClassMigrated())._new();
$recv($3)._theClass_(newClass);
$recv($3)._oldClass_(oldClass);
$4=$recv($3)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($4);
$5=newClass;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"migrateClassNamed:superclass:instanceVariableNames:package:",{className:className,aClass:aClass,aCollection:aCollection,packageName:packageName,oldClass:oldClass,newClass:newClass,tmp:tmp},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["className", "aClass", "aCollection", "packageName"],
source: "migrateClassNamed: className superclass: aClass instanceVariableNames: aCollection package: packageName\x0a\x09| oldClass newClass tmp |\x0a\x09\x0a\x09tmp := 'new*', className.\x0a\x09oldClass := Smalltalk globals at: className.\x0a\x09\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass\x0a\x09\x09named: tmp\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName.\x0a\x0a\x09self basicSwapClassNames: oldClass with: newClass.\x0a\x0a\x09[ self copyClass: oldClass to: newClass ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :exception |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09basicSwapClassNames: oldClass with: newClass;\x0a\x09\x09\x09\x09basicRemoveClass: newClass.\x0a\x09\x09\x09\x09exception resignal ].\x0a\x0a\x09self\x0a\x09\x09rawRenameClass: oldClass to: tmp;\x0a\x09\x09rawRenameClass: newClass to: className.\x0a\x0a\x09oldClass subclasses \x0a\x09\x09do: [ :each | self migrateClass: each superclass: newClass ].\x0a\x0a\x09self basicRemoveClass: oldClass.\x0a\x09\x0a\x09SystemAnnouncer current announce: (ClassMigrated new\x0a\x09\x09theClass: newClass;\x0a\x09\x09oldClass: oldClass;\x0a\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["Smalltalk", "Error", "SystemAnnouncer", "ClassMigrated"],
//>>excludeEnd("ide");
messageSends: [",", "at:", "globals", "addSubclassOf:named:instanceVariableNames:package:", "basicSwapClassNames:with:", "on:do:", "copyClass:to:", "basicRemoveClass:", "resignal", "rawRenameClass:to:", "do:", "subclasses", "migrateClass:superclass:", "announce:", "current", "theClass:", "new", "oldClass:", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "rawRenameClass:to:",
protocol: 'private',
fn: function (aClass,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		$globals[aString] = aClass;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rawRenameClass:to:",{aClass:aClass,aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "rawRenameClass: aClass to: aString\x0a\x09<\x0a\x09\x09$globals[aString] = aClass;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "renameClass:to:",
protocol: 'class migration',
fn: function (aClass,className){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassRenamed(){return $globals.ClassRenamed||(typeof ClassRenamed=="undefined"?nil:ClassRenamed)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._basicRenameClass_to_(aClass,className);
$recv(aClass)._recompile();
$1=$recv($ClassRenamed())._new();
$recv($1)._theClass_(aClass);
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,className:className},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "renameClass: aClass to: className\x0a\x09self basicRenameClass: aClass to: className.\x0a\x09\x0a\x09\x22Recompile the class to fix potential issues with super sends\x22\x0a\x09aClass recompile.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRenamed new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassRenamed"],
//>>excludeEnd("ide");
messageSends: ["basicRenameClass:to:", "recompile", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "setupClass:",
protocol: 'public',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.init(aClass);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupClass:",{aClass:aClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "setupClass: aClass\x0a\x09<$core.init(aClass);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "superclass:subclass:",
protocol: 'class definition',
fn: function (aClass,className){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._superclass_subclass_instanceVariableNames_package_(aClass,className,"",nil);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:",{aClass:aClass,className:className},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "superclass: aClass subclass: className\x0a\x09^ self superclass: aClass subclass: className instanceVariableNames: '' package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["superclass:subclass:instanceVariableNames:package:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "superclass:subclass:instanceVariableNames:package:",
protocol: 'class definition',
fn: function (aClass,className,ivarNames,packageName){
var self=this;
var newClass;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassAdded(){return $globals.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$receiver;
$1=self._instanceVariableNamesFor_(ivarNames);
if(($receiver = packageName) == null || $receiver.isNil){
$2="unclassified";
} else {
$2=packageName;
};
newClass=self._addSubclassOf_named_instanceVariableNames_package_(aClass,className,$1,$2);
self._setupClass_(newClass);
$3=$recv($ClassAdded())._new();
$recv($3)._theClass_(newClass);
$4=$recv($3)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($4);
$5=newClass;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:instanceVariableNames:package:",{aClass:aClass,className:className,ivarNames:ivarNames,packageName:packageName,newClass:newClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className", "ivarNames", "packageName"],
source: "superclass: aClass subclass: className instanceVariableNames: ivarNames package: packageName\x0a\x09| newClass |\x0a\x09\x0a\x09newClass := self addSubclassOf: aClass\x0a\x09\x09named: className instanceVariableNames: (self instanceVariableNamesFor: ivarNames)\x0a\x09\x09package: (packageName ifNil: [ 'unclassified' ]).\x0a\x09self setupClass: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["SystemAnnouncer", "ClassAdded"],
//>>excludeEnd("ide");
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.ClassBuilder);



$core.addClass('ClassSorterNode', $globals.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassSorterNode.comment="I provide an algorithm for sorting classes alphabetically.\x0a\x0aSee [Issue #143](https://github.com/amber-smalltalk/amber/issues/143) on GitHub.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getNodesFrom:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
var children,others;
function $ClassSorterNode(){return $globals.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
children=[];
others=[];
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(each)._superclass()).__eq(self._theClass());
if($core.assert($1)){
return $recv(children)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(others)._add_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@nodes"]=$recv(children)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ClassSorterNode())._on_classes_level_(each,others,$recv(self._level()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},$globals.ClassSorterNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [ :each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [ children add: each ]\x0a\x09\x09\x09ifFalse: [ others add: each ]].\x0a\x09nodes:= children collect: [ :each |\x0a\x09\x09ClassSorterNode on: each classes: others level: self level + 1 ]",
referencedClasses: ["ClassSorterNode"],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:ifFalse:", "=", "superclass", "theClass", "add:", "collect:", "on:classes:level:", "+", "level"]
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "level",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@level"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level\x0a\x09^ level",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "level:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@level"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@nodes"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nodes\x0a\x09^ nodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassSorterNode);

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
$globals.ClassSorterNode);

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
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "traverseClassesWith:",
protocol: 'visiting',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=self._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["theClass"]=1;
//>>excludeEnd("ctx");
$recv(aCollection)._add_($1);
$recv($recv(self._nodes())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(a)._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["theClass"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt_eq($recv($recv(b)._theClass())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(aNode){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNode)._traverseClassesWith_(aCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"traverseClassesWith:",{aCollection:aCollection},$globals.ClassSorterNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "traverseClassesWith: aCollection\x0a\x09\x22sort classes alphabetically Issue #143\x22\x0a\x0a\x09aCollection add: self theClass.\x0a\x09(self nodes sorted: [ :a :b | a theClass name <= b theClass name ]) do: [ :aNode |\x0a\x09\x09aNode traverseClassesWith: aCollection ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "theClass", "do:", "sorted:", "nodes", "<=", "name", "traverseClassesWith:"]
}),
$globals.ClassSorterNode);


$core.addMethod(
$core.method({
selector: "on:classes:level:",
protocol: 'instance creation',
fn: function (aClass,aCollection,anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._theClass_(aClass);
$recv($2)._level_(anInteger);
$recv($2)._getNodesFrom_(aCollection);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:classes:level:",{aClass:aClass,aCollection:aCollection,anInteger:anInteger},$globals.ClassSorterNode.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aCollection", "anInteger"],
source: "on: aClass classes: aCollection level: anInteger\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass:", "new", "level:", "getNodesFrom:", "yourself"]
}),
$globals.ClassSorterNode.klass);

});
