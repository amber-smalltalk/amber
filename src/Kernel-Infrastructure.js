define("amber_core/Kernel-Infrastructure", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Kernel-Infrastructure');
$core.packages["Kernel-Infrastructure"].innerEval = function (expr) { return eval(expr); };
$core.packages["Kernel-Infrastructure"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('JSObjectProxy', $globals.ProtoObject, ['jsObject'], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.JSObjectProxy.comment="I handle sending messages to JavaScript objects, making  JavaScript object accessing from Amber fully transparent.\x0aMy instances make intensive use of `#doesNotUnderstand:`.\x0a\x0aMy instances are automatically created by Amber whenever a message is sent to a JavaScript object.\x0a\x0a## Usage examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a\x09window alert: 'hello world'.\x0a\x09window inspect.\x0a\x09(window jQuery: 'body') append: 'hello world'\x0a\x0aAmber messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.\x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (anObject){
var self=this;
function $JSObjectProxy(){return $globals.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=$recv(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq(self._class());
if(!$core.assert($1)){
return false;
};
$3=$recv($JSObjectProxy())._compareJSObjectOfProxy_withProxy_(self,anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09anObject class == self class ifFalse: [ ^ false ].\x0a\x09^ JSObjectProxy compareJSObjectOfProxy: self withProxy: anObject",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "==", "class", "compareJSObjectOfProxy:withProxy:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'enumerating',
fn: function (){
var self=this;
var $1;
$1=self["@jsObject"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09\x22Answers the receiver in a stringyfy-friendly fashion\x22\x0a\x0a\x09^ jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self['@jsObject'][aString];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09<return self['@jsObject'][aString]>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09\x22return the aString property or evaluate aBlock if the property is not defined on the object\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? obj[aString] : aBlock._value();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifPresent:",
protocol: 'accessing',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aString:aString,aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifPresent: aBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined or return nil\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : nil;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (aString,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock", "anotherBlock"],
source: "at: aString ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined\x0a\x09or return value of anotherBlock\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self['@jsObject'][aString] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "at: aString put: anObject\x0a\x09<return self['@jsObject'][aString] = anObject>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'proxy',
fn: function (aMessage){
var self=this;
function $JSObjectProxy(){return $globals.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=$recv($JSObjectProxy())._lookupProperty_ofProxy_($recv($recv(aMessage)._selector())._asJavaScriptPropertyName(),self);
if(($receiver = $2) == null || $receiver.isNil){
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.JSObjectProxy.superclass.fn.prototype._doesNotUnderstand_.apply($recv(self), [aMessage]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
} else {
var jsSelector;
jsSelector=$receiver;
$1=$recv($JSObjectProxy())._forwardMessage_withArguments_ofProxy_(jsSelector,$recv(aMessage)._arguments(),self);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (JSObjectProxy lookupProperty: aMessage selector asJavaScriptPropertyName ofProxy: self)\x0a\x09\x09ifNil: [ super doesNotUnderstand: aMessage ]\x0a\x09\x09ifNotNil: [ :jsSelector | \x0a\x09\x09\x09JSObjectProxy \x0a\x09\x09\x09\x09forwardMessage: jsSelector \x0a\x09\x09\x09\x09withArguments: aMessage arguments\x0a\x09\x09\x09\x09ofProxy: self ]",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "lookupProperty:ofProxy:", "asJavaScriptPropertyName", "selector", "doesNotUnderstand:", "forwardMessage:withArguments:ofProxy:", "arguments"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "in:",
protocol: 'accessing',
fn: function (aValuable){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aValuable)._value_(self["@jsObject"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"in:",{aValuable:aValuable},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValuable"],
source: "in: aValuable\x0a\x09^ aValuable value: jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "jsObject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@jsObject"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsObject\x0a\x09^ jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var o = self['@jsObject'];
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09<\x0a\x09\x09var o = self['@jsObject'];\x0a\x09\x09for(var i in o) {\x0a\x09\x09\x09aBlock._value_value_(i, o[i]);\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._printString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self printString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "printString"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "printString",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var js = self['@jsObject'];
		return js.toString
			? js.toString()
			: Object.prototype.toString.call(js)
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printString",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printString\x0a\x09<\x0a\x09\x09var js = self['@jsObject'];\x0a\x09\x09return js.toString\x0a\x09\x09\x09? js.toString()\x0a\x09\x09\x09: Object.prototype.toString.call(js)\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: 'streaming',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutJSObject_(self["@jsObject"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutJSObject: jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutJSObject:"]
}),
$globals.JSObjectProxy);


$core.addMethod(
$core.method({
selector: "addObjectVariablesTo:ofProxy:",
protocol: 'proxy',
fn: function (aDictionary,aProxy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var jsObject = aProxy['@jsObject'];
		for(var i in jsObject) {
			aDictionary._at_put_(i, jsObject[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addObjectVariablesTo:ofProxy:",{aDictionary:aDictionary,aProxy:aProxy},$globals.JSObjectProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary", "aProxy"],
source: "addObjectVariablesTo: aDictionary ofProxy: aProxy\x0a\x09<\x0a\x09\x09var jsObject = aProxy['@jsObject'];\x0a\x09\x09for(var i in jsObject) {\x0a\x09\x09\x09aDictionary._at_put_(i, jsObject[i]);\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.klass);

$core.addMethod(
$core.method({
selector: "compareJSObjectOfProxy:withProxy:",
protocol: 'proxy',
fn: function (aProxy,anotherProxy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	var anotherJSObject = anotherProxy.klass ? anotherProxy["@jsObject"] : anotherProxy;
	return aProxy["@jsObject"] === anotherJSObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compareJSObjectOfProxy:withProxy:",{aProxy:aProxy,anotherProxy:anotherProxy},$globals.JSObjectProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProxy", "anotherProxy"],
source: "compareJSObjectOfProxy: aProxy withProxy: anotherProxy\x0a<\x0a\x09var anotherJSObject = anotherProxy.klass ? anotherProxy[\x22@jsObject\x22] : anotherProxy;\x0a\x09return aProxy[\x22@jsObject\x22] === anotherJSObject\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.klass);

$core.addMethod(
$core.method({
selector: "forwardMessage:withArguments:ofProxy:",
protocol: 'proxy',
fn: function (aString,anArray,aProxy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forwardMessage:withArguments:ofProxy:",{aString:aString,anArray:anArray,aProxy:aProxy},$globals.JSObjectProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anArray", "aProxy"],
source: "forwardMessage: aString withArguments: anArray ofProxy: aProxy\x0a\x09<\x0a\x09\x09return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.klass);

$core.addMethod(
$core.method({
selector: "jsObject:ofProxy:",
protocol: 'proxy',
fn: function (aJSObject,aProxy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
aProxy['@jsObject'] = aJSObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsObject:ofProxy:",{aJSObject:aJSObject,aProxy:aProxy},$globals.JSObjectProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject", "aProxy"],
source: "jsObject: aJSObject ofProxy: aProxy\x0a\x09<aProxy['@jsObject'] = aJSObject>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.klass);

$core.addMethod(
$core.method({
selector: "lookupProperty:ofProxy:",
protocol: 'proxy',
fn: function (aString,aProxy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString in aProxy._jsObject() ? aString : nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupProperty:ofProxy:",{aString:aString,aProxy:aProxy},$globals.JSObjectProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aProxy"],
source: "lookupProperty: aString ofProxy: aProxy\x0a\x09\x22Looks up a property in JS object.\x0a\x09Answer the property if it is present, or nil if it is not present.\x22\x0a\x09\x0a\x09<return aString in aProxy._jsObject() ? aString : nil>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aJSObject){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
instance=self._new();
self._jsObject_ofProxy_(aJSObject,instance);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aJSObject:aJSObject,instance:instance},$globals.JSObjectProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09| instance |\x0a\x09instance := self new.\x0a\x09self jsObject: aJSObject ofProxy: instance.\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "jsObject:ofProxy:"]
}),
$globals.JSObjectProxy.klass);


$core.addClass('Organizer', $globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Organizer.comment="I represent categorization information. \x0a\x0a## API\x0a\x0aUse `#addElement:` and `#removeElement:` to manipulate instances.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addElement:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.elements.addElement(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject},$globals.Organizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addElement: anObject\x0a\x09<self.elements.addElement(anObject)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Organizer);

$core.addMethod(
$core.method({
selector: "elements",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._basicAt_("elements"))._copy();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"elements",{},$globals.Organizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "elements\x0a\x09^ (self basicAt: 'elements') copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "basicAt:"]
}),
$globals.Organizer);

$core.addMethod(
$core.method({
selector: "removeElement:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.elements.removeElement(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject},$globals.Organizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "removeElement: anObject\x0a\x09<self.elements.removeElement(anObject)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Organizer);



$core.addClass('ClassOrganizer', $globals.Organizer, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassOrganizer.comment="I am an organizer specific to classes. I hold method categorization information for classes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addElement:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ProtocolAdded(){return $globals.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ClassOrganizer.superclass.fn.prototype._addElement_.apply($recv(self), [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($ProtocolAdded())._new();
$recv($1)._protocol_(aString);
$recv($1)._theClass_(self._theClass());
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString},$globals.ClassOrganizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addElement: aString\x0a\x09super addElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolAdded new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ProtocolAdded"],
//>>excludeEnd("ide");
messageSends: ["addElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"]
}),
$globals.ClassOrganizer);

$core.addMethod(
$core.method({
selector: "removeElement:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ProtocolRemoved(){return $globals.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ClassOrganizer.superclass.fn.prototype._removeElement_.apply($recv(self), [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($ProtocolRemoved())._new();
$recv($1)._protocol_(aString);
$recv($1)._theClass_(self._theClass());
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString},$globals.ClassOrganizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeElement: aString\x0a\x09super removeElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolRemoved new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ProtocolRemoved"],
//>>excludeEnd("ide");
messageSends: ["removeElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"]
}),
$globals.ClassOrganizer);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.theClass ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theClass",{},$globals.ClassOrganizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09< return self.theClass >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassOrganizer);



$core.addClass('PackageOrganizer', $globals.Organizer, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageOrganizer.comment="I am an organizer specific to packages. I hold classes categorization information.";
//>>excludeEnd("ide");


$core.addClass('Package', $globals.Object, ['transport', 'imports', 'dirty'], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Package.comment="I am similar to a \x22class category\x22 typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.\x0a\x0aEach package has a name and can be queried for its classes, but it will then resort to a reverse scan of all classes to find them.\x0a\x0a## API\x0a\x0aPackages are manipulated through \x22Smalltalk current\x22, like for example finding one based on a name or with `Package class >> #name` directly:\x0a\x0a    Smalltalk current packageAt: 'Kernel'\x0a    Package named: 'Kernel'\x0a\x0aA package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a package supports \x22class extensions\x22 so a package can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows.\x0a\x0aYou can fetch a package from the server:\x0a\x0a\x09Package load: 'Additional-Examples'";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicImports",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.imports || [];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicImports",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicImports\x0a\x09\x22Answer the imports literal JavaScript object as setup in the JavaScript file, if any\x22\x0a\x09\x0a\x09<return self.imports || []>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "basicName:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.pkgName = aString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicName:",{aString:aString},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicName: aString\x0a\x09<self.pkgName = aString>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "basicTransport",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.transport;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicTransport",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTransport\x0a\x09\x22Answer the transport literal JavaScript object as setup in the JavaScript file, if any\x22\x0a\x09\x0a\x09<return self.transport>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "beClean",
protocol: 'accessing',
fn: function (){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $PackageClean(){return $globals.PackageClean||(typeof PackageClean=="undefined"?nil:PackageClean)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self["@dirty"]=false;
$1=$recv($PackageClean())._new();
$recv($1)._package_(self);
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beClean",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beClean\x0a\x09dirty := false.\x0a\x09\x0a\x09SystemAnnouncer current announce: (PackageClean new\x0a\x09\x09package: self;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "PackageClean"],
//>>excludeEnd("ide");
messageSends: ["announce:", "current", "package:", "new", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "beDirty",
protocol: 'accessing',
fn: function (){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $PackageDirty(){return $globals.PackageDirty||(typeof PackageDirty=="undefined"?nil:PackageDirty)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self["@dirty"]=true;
$1=$recv($PackageDirty())._new();
$recv($1)._package_(self);
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beDirty",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beDirty\x0a\x09dirty := true.\x0a\x09\x0a\x09SystemAnnouncer current announce: (PackageDirty new\x0a\x09\x09package: self;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "PackageDirty"],
//>>excludeEnd("ide");
messageSends: ["announce:", "current", "package:", "new", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "classTemplate",
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
$recv(stream)._nextPutAll_("Object");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(" subclass: #NameOfSubclass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
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
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$5=$recv(stream)._nextPutAll_("instanceVariableNames: ''");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$5;
$6=$recv("'".__comma($recv($String())._lf())).__comma($recv($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("package: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$7=$recv(stream)._nextPutAll_("'");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTemplate",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTemplate\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: 'Object';\x0a\x09\x09\x09nextPutAll: ' subclass: #NameOfSubclass';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'instanceVariableNames: '''''.\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09\x09nextPutAll: self name;\x0a\x09\x09\x09nextPutAll: '''' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "nextPutAll:", ",", "lf", "tab", "name"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "classes",
protocol: 'classes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._organization())._elements();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ self organization elements",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["elements", "organization"]
}),
$globals.Package);

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
var $2,$4,$5,$3,$7,$6,$9,$10,$8,$11,$12,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(self._class())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$4=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$5=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("named: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$7="'".__comma(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$9=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$10=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__comma($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("imports: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(self._importsDefinition());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$11=$recv($recv($String())._lf()).__comma($recv($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=5;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("transport: (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
$12=$recv(stream)._nextPutAll_($recv($recv(self._transport())._definition()).__comma(")"));
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: self class name;\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'named: ';\x0a\x09\x09\x09nextPutAll: '''', self name, '''';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'imports: ';\x0a\x09\x09\x09nextPutAll: self importsDefinition;\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'transport: (';\x0a\x09\x09\x09nextPutAll: self transport definition, ')' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "nextPutAll:", "name", "class", ",", "lf", "tab", "importsDefinition", "definition", "transport"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "imports",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@imports"];
if(($receiver = $2) == null || $receiver.isNil){
var parsed;
parsed=self._importsFromJson_(self._basicImports());
parsed;
self._imports_(parsed);
$1=self["@imports"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imports",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "imports\x0a\x09^ imports ifNil: [\x0a\x09\x09| parsed |\x0a\x09\x09parsed := self importsFromJson: self basicImports.\x0a\x09\x09self imports: parsed.\x0a\x09\x09imports ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "importsFromJson:", "basicImports", "imports:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "imports:",
protocol: 'accessing',
fn: function (anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._validateImports_(anArray);
self["@imports"]=$recv(anArray)._asSet();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imports:",{anArray:anArray},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "imports: anArray\x0a\x09self validateImports: anArray.\x0a\x09imports := anArray asSet",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["validateImports:", "asSet"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsAsJson",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv(self._sortedImportsAsArray())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(each)._isString();
if($core.assert($2)){
return each;
} else {
return $recv($recv($recv(each)._key()).__comma("=")).__comma($recv(each)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsAsJson",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "importsAsJson\x0a\x0a\x09^ self sortedImportsAsArray collect: [ :each |\x0a\x09\x09each isString\x0a\x09\x09\x09ifTrue: [ each ]\x0a\x09\x09\x09ifFalse: [ each key, '=', each value ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "sortedImportsAsArray", "ifTrue:ifFalse:", "isString", ",", "key", "value"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsDefinition",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(self._sortedImportsAsArray())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_($recv(each)._importsString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(". ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._nextPutAll_("}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsDefinition",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "importsDefinition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream nextPutAll: '{'.\x0a\x09\x09self sortedImportsAsArray\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each importsString ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: '. ' ].\x0a\x09\x09stream nextPutAll: '}' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "sortedImportsAsArray", "importsString"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsFromJson:",
protocol: 'converting',
fn: function (anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv(anArray)._collect_((function(each){
var split;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
split=$recv(each)._tokenize_("=");
split;
$2=$recv($recv(split)._size()).__eq((1));
if($core.assert($2)){
return $recv(split)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=1;
//>>excludeEnd("ctx");
} else {
return $recv($recv(split)._first()).__minus_gt($recv(split)._second());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,split:split},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsFromJson:",{anArray:anArray},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "importsFromJson: anArray\x0a\x09\x22Parses array of string, eg. #('asdf' 'qwer=tyuo')\x0a\x09into array of Strings and Associations,\x0a\x09eg. {'asdf'. 'qwer'->'tyuo'}\x22\x0a\x0a\x09^ anArray collect: [ :each |\x0a\x09\x09| split |\x0a\x09\x09split := each tokenize: '='.\x0a\x09\x09split size = 1\x0a\x09\x09\x09ifTrue: [ split first ]\x0a\x09\x09\x09ifFalse: [ split first -> split second ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "tokenize:", "ifTrue:ifFalse:", "=", "size", "first", "->", "second"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isDirty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@dirty"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDirty",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDirty\x0a\x09^ dirty ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isPackage",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPackage\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadDependencies",
protocol: 'dependencies',
fn: function (){
var self=this;
var classes,packages;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
classes=self._loadDependencyClasses();
$2=$recv($recv(classes)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asSet();
$recv($2)._remove_ifAbsent_(self,(function(){

}));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadDependencies",{classes:classes,packages:packages},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadDependencies\x0a\x09\x22Returns list of packages that need to be loaded\x0a\x09before loading this package.\x22\x0a\x09\x0a\x09| classes packages |\x0a\x09classes := self loadDependencyClasses.\x0a\x09^ (classes collect: [ :each | each package ]) asSet\x0a\x09\x09remove: self ifAbsent: [];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadDependencyClasses", "remove:ifAbsent:", "asSet", "collect:", "package", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadDependencyClasses",
protocol: 'dependencies',
fn: function (){
var self=this;
var starCategoryName;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$6,$5,$7,$1;
starCategoryName="*".__comma(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=self._classes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["classes"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($3)._asSet();
$recv($2)._remove_ifAbsent_(nil,(function(){

}));
$recv($2)._addAll_($recv($recv($Smalltalk())._classes())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(each)._protocols();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["protocols"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($recv($recv(each)._class())._protocols());
return $recv($5)._includes_(starCategoryName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
})));
$7=$recv($2)._yourself();
$1=$7;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadDependencyClasses",{starCategoryName:starCategoryName},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadDependencyClasses\x0a\x09\x22Returns classes needed at the time of loading a package.\x0a\x09These are all that are used to subclass\x0a\x09and to define an extension method\x22\x0a\x09\x0a\x09| starCategoryName |\x0a\x09starCategoryName := '*', self name.\x0a\x09^ (self classes collect: [ :each | each superclass ]) asSet\x0a\x09\x09remove: nil ifAbsent: [];\x0a\x09\x09addAll: (Smalltalk classes select: [ :each | each protocols, each class protocols includes: starCategoryName ]);\x0a\x09\x09yourself",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: [",", "name", "remove:ifAbsent:", "asSet", "collect:", "classes", "superclass", "addAll:", "select:", "includes:", "protocols", "class", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.pkgName;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09<return self.pkgName>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicName_(aString);
self._beDirty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09self basicName: aString.\x0a\x09self beDirty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicName:", "beDirty"]
}),
$globals.Package);

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
}, function($ctx1) {$ctx1.fill(self,"organization",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:"]
}),
$globals.Package);

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
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Package.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_(" (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: ' (';\x0a\x09\x09nextPutAll: self name;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "name"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "setupClasses",
protocol: 'classes',
fn: function (){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._classes();
$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($ClassBuilder())._new())._setupClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._initialize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupClasses",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupClasses\x0a\x09self classes\x0a\x09\x09do: [ :each | ClassBuilder new setupClass: each ];\x0a\x09\x09do: [ :each | each initialize ]",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["do:", "classes", "setupClass:", "new", "initialize"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "sortedClasses",
protocol: 'classes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._sortedClasses_(self._classes());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortedClasses\x0a\x09\x22Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143).\x22\x0a\x0a\x09^ self class sortedClasses: self classes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sortedClasses:", "class", "classes"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "sortedImportsAsArray",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$5,$2,$7,$6,$8,$1;
$1=$recv($recv(self._imports())._asArray())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(a)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isString"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._not();
$5=$recv(b)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isString"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__and($5);
return $recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv(a)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["isString"]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__eq($recv(b)._isString());
return $recv($6)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$8=$recv(a)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $recv($8).__lt_eq($recv(b)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedImportsAsArray",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortedImportsAsArray\x0a\x09\x22Answer imports sorted first by type (associations first),\x0a\x09then by value\x22\x0a\x0a\x09^ self imports asArray\x0a\x09\x09sorted: [ :a :b |\x0a\x09\x09\x09a isString not & b isString or: [\x0a\x09\x09\x09\x09a isString = b isString and: [\x0a\x09\x09\x09\x09\x09a value <= b value ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sorted:", "asArray", "imports", "or:", "&", "not", "isString", "and:", "=", "<=", "value"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "transport",
protocol: 'accessing',
fn: function (){
var self=this;
function $PackageTransport(){return $globals.PackageTransport||(typeof PackageTransport=="undefined"?nil:PackageTransport)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@transport"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($PackageTransport())._fromJson_(self._basicTransport());
$recv($3)._package_(self);
$4=$recv($3)._yourself();
self["@transport"]=$4;
$1=self["@transport"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transport",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transport\x0a\x09^ transport ifNil: [ \x0a\x09\x09transport := (PackageTransport fromJson: self basicTransport)\x0a\x09\x09\x09package: self;\x0a\x09\x09\x09yourself ]",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "package:", "fromJson:", "basicTransport", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "transport:",
protocol: 'accessing',
fn: function (aPackageTransport){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@transport"]=aPackageTransport;
$recv(aPackageTransport)._package_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transport:",{aPackageTransport:aPackageTransport},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageTransport"],
source: "transport: aPackageTransport\x0a\x09transport := aPackageTransport.\x0a\x09aPackageTransport package: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["package:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "validateImports:",
protocol: 'validation',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3,$6;
$recv(aCollection)._do_((function(import_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(import_)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isString"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$2=$recv(import_)._respondsTo_("key");
if(!$core.assert($2)){
self._error_("Imports must be Strings or Associations");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=1;
//>>excludeEnd("ctx");
};
$5=$recv(import_)._key();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["key"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isString"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__and($recv($recv(import_)._value())._isString());
if(!$core.assert($3)){
self._error_("Key and value must be Strings");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=2;
//>>excludeEnd("ctx");
};
$6=$recv($recv(import_)._key())._match_("^[a-zA-Z][a-zA-Z0-9]*$");
if(!$core.assert($6)){
return self._error_("Keys must be identifiers");
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({import_:import_},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"validateImports:",{aCollection:aCollection},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "validateImports: aCollection\x0a\x0a\x09aCollection do: [ :import |\x0a\x09\x09import isString ifFalse: [\x0a\x09\x09\x09(import respondsTo: #key) ifFalse: [\x0a\x09\x09\x09\x09self error: 'Imports must be Strings or Associations' ].\x0a\x09\x09\x09import key isString & import value isString ifFalse: [\x0a\x09\x09\x09\x09self error: 'Key and value must be Strings' ].\x0a\x09\x09\x09(import key match: '^[a-zA-Z][a-zA-Z0-9]*$') ifFalse: [\x0a\x09\x09\x09\x09self error: 'Keys must be identifiers' ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifFalse:", "isString", "respondsTo:", "error:", "&", "key", "value", "match:"]
}),
$globals.Package);


$globals.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
$core.addMethod(
$core.method({
selector: "named:",
protocol: 'accessing',
fn: function (aPackageName){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Smalltalk())._packageAt_ifAbsent_(aPackageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Smalltalk())._createPackage_(aPackageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName},$globals.Package.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "named: aPackageName\x0a\x09^ Smalltalk \x0a\x09\x09packageAt: aPackageName\x0a\x09\x09ifAbsent: [ \x0a\x09\x09\x09Smalltalk createPackage: aPackageName ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["packageAt:ifAbsent:", "createPackage:"]
}),
$globals.Package.klass);

$core.addMethod(
$core.method({
selector: "named:ifAbsent:",
protocol: 'accessing',
fn: function (aPackageName,aBlock){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Smalltalk())._packageAt_ifAbsent_(aPackageName,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock},$globals.Package.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aBlock"],
source: "named: aPackageName ifAbsent: aBlock\x0a\x09^ Smalltalk packageAt: aPackageName ifAbsent: aBlock",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["packageAt:ifAbsent:"]
}),
$globals.Package.klass);

$core.addMethod(
$core.method({
selector: "named:imports:transport:",
protocol: 'accessing',
fn: function (aPackageName,anArray,aTransport){
var self=this;
var package_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
package_=self._named_(aPackageName);
$recv(package_)._imports_(anArray);
$recv(package_)._transport_(aTransport);
$1=package_;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:imports:transport:",{aPackageName:aPackageName,anArray:anArray,aTransport:aTransport,package_:package_},$globals.Package.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "anArray", "aTransport"],
source: "named: aPackageName imports: anArray transport: aTransport\x0a\x09| package |\x0a\x09\x0a\x09package := self named: aPackageName.\x0a\x09package imports: anArray.\x0a\x09package transport: aTransport.\x0a\x09\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["named:", "imports:", "transport:"]
}),
$globals.Package.klass);

$core.addMethod(
$core.method({
selector: "named:transport:",
protocol: 'accessing',
fn: function (aPackageName,aTransport){
var self=this;
var package_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
package_=self._named_(aPackageName);
$recv(package_)._transport_(aTransport);
$1=package_;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:transport:",{aPackageName:aPackageName,aTransport:aTransport,package_:package_},$globals.Package.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aTransport"],
source: "named: aPackageName transport: aTransport\x0a\x09| package |\x0a\x09\x0a\x09package := self named: aPackageName.\x0a\x09package transport: aTransport.\x0a\x09\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["named:", "transport:"]
}),
$globals.Package.klass);

$core.addMethod(
$core.method({
selector: "sortedClasses:",
protocol: 'sorting',
fn: function (classes){
var self=this;
var children,others,nodes,expandedClasses;
function $ClassSorterNode(){return $globals.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
children=[];
others=[];
$recv(classes)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(classes)._includes_($recv(each)._superclass());
if($core.assert($1)){
return $recv(others)._add_(each);
} else {
return $recv(children)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
nodes=$recv(children)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ClassSorterNode())._on_classes_level_(each,others,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
nodes=$recv(nodes)._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(a)._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["theClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt_eq($recv($recv(b)._theClass())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,5)});
//>>excludeEnd("ctx");
}));
expandedClasses=$recv($Array())._new();
$recv(nodes)._do_((function(aNode){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNode)._traverseClassesWith_(expandedClasses);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1,6)});
//>>excludeEnd("ctx");
}));
$4=expandedClasses;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes,children:children,others:others,nodes:nodes,expandedClasses:expandedClasses},$globals.Package.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["classes"],
source: "sortedClasses: classes\x0a\x09\x22Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)\x22\x0a\x0a\x09| children others nodes expandedClasses |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [ :each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [ children add: each ]\x0a\x09\x09\x09ifTrue: [ others add: each ]].\x0a\x09nodes := children collect: [ :each |\x0a\x09\x09ClassSorterNode on: each classes: others level: 0 ].\x0a\x09nodes := nodes sorted: [ :a :b | a theClass name <= b theClass name ].\x0a\x09expandedClasses := Array new.\x0a\x09nodes do: [ :aNode |\x0a\x09\x09aNode traverseClassesWith: expandedClasses ].\x0a\x09^ expandedClasses",
referencedClasses: ["ClassSorterNode", "Array"],
//>>excludeEnd("ide");
messageSends: ["do:", "ifFalse:ifTrue:", "includes:", "superclass", "add:", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"]
}),
$globals.Package.klass);


$core.addClass('PackageStateObserver', $globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageStateObserver.comment="My current instance listens for any changes in the system that might affect the state of a package (being dirty).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SystemAnnouncer())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ SystemAnnouncer current",
referencedClasses: ["SystemAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $PackageAdded(){return $globals.PackageAdded||(typeof PackageAdded=="undefined"?nil:PackageAdded)}
function $ClassAnnouncement(){return $globals.ClassAnnouncement||(typeof ClassAnnouncement=="undefined"?nil:ClassAnnouncement)}
function $MethodAnnouncement(){return $globals.MethodAnnouncement||(typeof MethodAnnouncement=="undefined"?nil:MethodAnnouncement)}
function $ProtocolAnnouncement(){return $globals.ProtocolAnnouncement||(typeof ProtocolAnnouncement=="undefined"?nil:ProtocolAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._announcer();
$recv($1)._on_send_to_($PackageAdded(),"onPackageAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($ClassAnnouncement(),"onClassModification:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($MethodAnnouncement(),"onMethodModification:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($ProtocolAnnouncement(),"onProtocolModification:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self announcer\x0a\x09\x09on: PackageAdded\x0a\x09\x09send: #onPackageAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassAnnouncement\x0a\x09\x09send: #onClassModification:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: MethodAnnouncement\x0a\x09\x09send: #onMethodModification:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ProtocolAnnouncement\x0a\x09\x09send: #onProtocolModification:\x0a\x09\x09to: self",
referencedClasses: ["PackageAdded", "ClassAnnouncement", "MethodAnnouncement", "ProtocolAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onClassModification:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(anAnnouncement)._theClass();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var theClass;
theClass=$receiver;
$recv($recv(theClass)._package())._beDirty();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassModification:",{anAnnouncement:anAnnouncement},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassModification: anAnnouncement\x0a\x09anAnnouncement theClass ifNotNil: [ :theClass | theClass package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "theClass", "beDirty", "package"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onMethodModification:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv($recv(anAnnouncement)._method())._package();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var package_;
package_=$receiver;
$recv(package_)._beDirty();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodModification:",{anAnnouncement:anAnnouncement},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodModification: anAnnouncement\x0a\x09anAnnouncement method package ifNotNil: [ :package | package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "package", "method", "beDirty"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onPackageAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(anAnnouncement)._package())._beDirty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageAdded:",{anAnnouncement:anAnnouncement},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageAdded: anAnnouncement\x0a\x09anAnnouncement package beDirty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beDirty", "package"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onProtocolModification:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(anAnnouncement)._package();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var package_;
package_=$receiver;
$recv(package_)._beDirty();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolModification:",{anAnnouncement:anAnnouncement},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolModification: anAnnouncement\x0a\x09anAnnouncement package ifNotNil: [ :package | package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "package", "beDirty"]
}),
$globals.PackageStateObserver);


$globals.PackageStateObserver.klass.iVarNames = ['current'];
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
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.PackageStateObserver.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.PackageStateObserver.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._observeSystem();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PackageStateObserver.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self current observeSystem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeSystem", "current"]
}),
$globals.PackageStateObserver.klass);


$core.addClass('Setting', $globals.Object, ['key', 'value', 'defaultValue'], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Setting.comment="I represent a setting **stored** at `Smalltalk settings`. \x0aIn the current implementation, `Smalltalk settings` is an object persisted in the localStorage.\x0a\x0a## API\x0a\x0aA `Setting` value can be read using `value` and set using `value:`.\x0a\x0aSettings are accessed with `'key' asSetting` or `'key' asSettingIfAbsent: aDefaultValue`.\x0a\x0aTo read the value of a setting you can also use the convenience:\x0a\x0a`theValueSet :=  'any.characteristic' settingValue` \x0a\x0aor with a default using:\x0a\x0a `theEnsuredValueSet := 'any.characteristic' settingValueIfAbsent: true`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "defaultValue",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@defaultValue"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultValue\x0a\x09^ defaultValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "defaultValue:",
protocol: 'accessing',
fn: function (aStringifiableObject){
var self=this;
self["@defaultValue"]=aStringifiableObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringifiableObject"],
source: "defaultValue: aStringifiableObject\x0a\x09defaultValue := aStringifiableObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@key"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "key:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@key"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "key: aString\x0a\x09key := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Smalltalk())._settings())._at_ifAbsent_(self._key(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._defaultValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.Setting)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ Smalltalk settings at: self key ifAbsent: [ self defaultValue ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "settings", "key", "defaultValue"]
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'accessing',
fn: function (aStringifiableObject){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Smalltalk())._settings())._at_put_(self._key(),aStringifiableObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{aStringifiableObject:aStringifiableObject},$globals.Setting)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringifiableObject"],
source: "value: aStringifiableObject\x0a\x09^ Smalltalk settings at: self key put: aStringifiableObject",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "settings", "key"]
}),
$globals.Setting);


$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'instance creation',
fn: function (aString,aDefaultValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Setting.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($2)._key_(aString);
$recv($2)._defaultValue_(aDefaultValue);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aDefaultValue:aDefaultValue},$globals.Setting.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDefaultValue"],
source: "at: aString ifAbsent: aDefaultValue\x0a\x09\x0a\x09^ super new\x0a\x09\x09key: aString;\x0a\x09\x09defaultValue: aDefaultValue;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key:", "new", "defaultValue:", "yourself"]
}),
$globals.Setting.klass);

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
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Setting.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.Setting.klass);


$core.addClass('SmalltalkImage', $globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SmalltalkImage.comment="I represent the Smalltalk system, wrapping\x0aoperations of variable `$core` declared in `support/boot.js`.\x0a\x0a## API\x0a\x0aI have only one instance, accessed with global variable `Smalltalk`.\x0a\x0a## Classes\x0a\x0aClasses can be accessed using the following methods:\x0a\x0a- `#classes` answers the full list of Smalltalk classes in the system\x0a- `#globals #at:` answers a specific global (usually, a class) or `nil`\x0a\x0a## Packages\x0a\x0aPackages can be accessed using the following methods:\x0a\x0a- `#packages` answers the full list of packages\x0a- `#packageAt:` answers a specific package or `nil`\x0a\x0a## Parsing\x0a\x0aThe `#parse:` method is used to parse Amber source code.\x0aIt requires the `Compiler` package and the `support/parser.js` parser file in order to work.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addGlobalJsVariable:",
protocol: 'globals',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._globalJsVariables())._add_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addGlobalJsVariable:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addGlobalJsVariable: aString\x0a\x09self globalJsVariables add: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "globalJsVariables"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "amdRequire",
protocol: 'accessing amd',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._core())._at_("amdRequire");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdRequire",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "amdRequire\x0a\x09^ self core at: 'amdRequire'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "core"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "asSmalltalkException:",
protocol: 'error handling',
fn: function (anObject){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $JavaScriptException(){return $globals.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self._isSmalltalkObject_(anObject))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anObject)._isKindOf_($Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
$1=anObject;
} else {
$1=$recv($JavaScriptException())._on_(anObject);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asSmalltalkException: anObject\x0a\x09\x22A JavaScript exception may be thrown.\x0a\x09We then need to convert it back to a Smalltalk object\x22\x0a\x09\x0a\x09^ ((self isSmalltalkObject: anObject) and: [ anObject isKindOf: Error ])\x0a\x09\x09ifTrue: [ anObject ]\x0a\x09\x09ifFalse: [ JavaScriptException on: anObject ]",
referencedClasses: ["Error", "JavaScriptException"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "isSmalltalkObject:", "isKindOf:", "on:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "basicCreatePackage:",
protocol: 'private',
fn: function (packageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.addPackage(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicCreatePackage:",{packageName:packageName},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "basicCreatePackage: packageName\x0a\x09\x22Create and bind a new bare package with given name and return it.\x22\x0a\x09<return $core.addPackage(packageName)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "basicParse:",
protocol: 'private',
fn: function (aString){
var self=this;
function $SmalltalkParser(){return $globals.SmalltalkParser||(typeof SmalltalkParser=="undefined"?nil:SmalltalkParser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SmalltalkParser())._parse_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicParse: aString\x0a\x09^ SmalltalkParser parse: aString",
referencedClasses: ["SmalltalkParser"],
//>>excludeEnd("ide");
messageSends: ["parse:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "basicRegisterPackage:",
protocol: 'private',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.packages[aPackage.pkgName]=aPackage;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicRegisterPackage:",{aPackage:aPackage},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "basicRegisterPackage: aPackage\x0a\x09\x22Put aPackage in $core.packages object.\x22\x0a\x09<$core.packages[aPackage.pkgName]=aPackage>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "cancelOptOut:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
delete anObject.klass;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancelOptOut:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cancelOptOut: anObject\x0a\x09\x22A Smalltalk object has a 'klass' property.\x0a\x09If this property is shadowed for anObject by optOut:,\x0a\x09the object is treated as plain JS object.\x0a\x09This removes the shadow and anObject is Smalltalk object\x0a\x09again if it was before.\x22\x0a\x09\x0a\x09<delete anObject.klass>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "classes",
protocol: 'classes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.classes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09<return $core.classes()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "core",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"core",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "core\x0a\x09<return $core>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "createPackage:",
protocol: 'packages',
fn: function (packageName){
var self=this;
var package_,announcement;
function $PackageAdded(){return $globals.PackageAdded||(typeof PackageAdded=="undefined"?nil:PackageAdded)}
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
package_=self._basicCreatePackage_(packageName);
$1=$recv($PackageAdded())._new();
$recv($1)._package_(package_);
$2=$recv($1)._yourself();
announcement=$2;
$recv($recv($SystemAnnouncer())._current())._announce_(announcement);
$3=package_;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName,package_:package_,announcement:announcement},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "createPackage: packageName\x0a\x09| package announcement |\x0a\x09\x0a\x09package := self basicCreatePackage: packageName.\x0a\x09\x0a\x09announcement := PackageAdded new\x0a\x09\x09package: package;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09SystemAnnouncer current announce: announcement.\x0a\x09\x0a\x09^ package",
referencedClasses: ["PackageAdded", "SystemAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["basicCreatePackage:", "package:", "new", "yourself", "announce:", "current"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "defaultAmdNamespace",
protocol: 'accessing amd',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="transport.defaultAmdNamespace"._settingValue();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultAmdNamespace\x0a\x09^ 'transport.defaultAmdNamespace' settingValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["settingValue"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "defaultAmdNamespace:",
protocol: 'accessing amd',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
"transport.defaultAmdNamespace"._settingValue_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultAmdNamespace: aString\x0a\x09'transport.defaultAmdNamespace' settingValue: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["settingValue:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "deleteClass:",
protocol: 'private',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.removeClass(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "deleteClass: aClass\x0a\x09\x22Deletes a class by deleting its binding only. Use #removeClass instead\x22\x0a\x09\x0a\x09<$core.removeClass(aClass)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "deleteGlobalJsVariable:",
protocol: 'globals',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._globalJsVariables())._remove_ifAbsent_(aString,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteGlobalJsVariable:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "deleteGlobalJsVariable: aString\x0a\x09self globalJsVariables remove: aString ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "globalJsVariables"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "deletePackage:",
protocol: 'private',
fn: function (packageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
delete $core.packages[packageName];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deletePackage:",{packageName:packageName},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "deletePackage: packageName\x0a\x09\x22Deletes a package by deleting its binding, but does not check if it contains classes etc.\x0a\x09To remove a package, use #removePackage instead.\x22\x0a\x0a\x09<delete $core.packages[packageName]>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "globalJsVariables",
protocol: 'globals',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.globalJsVariables;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalJsVariables",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalJsVariables\x0a\x09\x22Array of global JavaScript variables\x22\x0a\x09<return $core.globalJsVariables>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "globals",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globals",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09<return $globals>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "includesKey:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.hasOwnProperty(aKey);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return $core.hasOwnProperty(aKey)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "isSmalltalkObject:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject.klass != null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isSmalltalkObject: anObject\x0a\x09\x22Consider anObject a Smalltalk object if it has a 'klass' property.\x0a\x09Note that this may be unaccurate\x22\x0a\x09\x0a\x09<return anObject.klass != null>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "optOut:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anObject.klass = null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"optOut:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "optOut: anObject\x0a\x09\x22A Smalltalk object has a 'klass' property.\x0a\x09This shadows the property for anObject.\x0a\x09The object is treated as plain JS object following this.\x22\x0a\x09\x0a\x09<anObject.klass = null>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageAt:",
protocol: 'packages',
fn: function (packageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.packages[packageName];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:",{packageName:packageName},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "packageAt: packageName\x0a\x09<return $core.packages[packageName]>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageAt:ifAbsent:",
protocol: 'packages',
fn: function (packageName,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._packageAt_(packageName);
$1=$recv($2)._ifNil_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifAbsent: aBlock\x0a\x09^ (self packageAt: packageName) ifNil: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "packageAt:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packages",
protocol: 'packages',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return Object.keys($core.packages).map(function(k) {
			return $core.packages[k];
		})
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09\x22Return all Package instances in the system.\x22\x0a\x0a\x09<\x0a\x09\x09return Object.keys($core.packages).map(function(k) {\x0a\x09\x09\x09return $core.packages[k];\x0a\x09\x09})\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "parse:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=self._basicParse_(aString);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._tryCatch_((function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._parseError_parsing_(ex,aString))._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=result;
$recv($2)._source_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09| result |\x0a\x09\x0a\x09[ result := self basicParse: aString ] \x0a\x09\x09tryCatch: [ :ex | (self parseError: ex parsing: aString) signal ].\x0a\x09\x09\x0a\x09^ result\x0a\x09\x09source: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tryCatch:", "basicParse:", "signal", "parseError:parsing:", "source:", "yourself"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "parseError:parsing:",
protocol: 'error handling',
fn: function (anException,aString){
var self=this;
function $ParseError(){return $globals.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$8,$7,$6,$9,$5,$4,$3,$1;
$2=$recv($ParseError())._new();
$8=$recv(anException)._basicAt_("line");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
$7="Parse error on line ".__comma($8);
$6=$recv($7).__comma(" column ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$9=$recv(anException)._basicAt_("column");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(" : Unexpected character ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(anException)._basicAt_("found"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._messageText_($3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException", "aString"],
source: "parseError: anException parsing: aString\x0a\x09^ ParseError new messageText: 'Parse error on line ', (anException basicAt: 'line') ,' column ' , (anException basicAt: 'column') ,' : Unexpected character ', (anException basicAt: 'found')",
referencedClasses: ["ParseError"],
//>>excludeEnd("ide");
messageSends: ["messageText:", "new", ",", "basicAt:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "pseudoVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["self", "super", "nil", "true", "false", "thisContext"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVariableNames\x0a\x09^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "readJSObject:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.readJSObject(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "readJSObject: anObject\x0a\x09<return $core.readJSObject(anObject)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "removeClass:",
protocol: 'classes',
fn: function (aClass){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassRemoved(){return $globals.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(aClass)._isMetaclass();
if($core.assert($1)){
self._error_($recv($recv(aClass)._asString()).__comma(" is a Metaclass and cannot be removed!"));
};
self._deleteClass_(aClass);
$2=$recv($ClassRemoved())._new();
$recv($2)._theClass_(aClass);
$3=$recv($2)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "removeClass: aClass\x0a\x09aClass isMetaclass ifTrue: [ self error: aClass asString, ' is a Metaclass and cannot be removed!' ].\x0a\x09\x0a\x09self deleteClass: aClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRemoved new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassRemoved"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isMetaclass", "error:", ",", "asString", "deleteClass:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "removePackage:",
protocol: 'packages',
fn: function (packageName){
var self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pkg=self._packageAt_ifAbsent_(packageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Missing package: ".__comma(packageName));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(pkg)._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._removeClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._deletePackage_(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "removePackage: packageName\x0a\x09\x22Removes a package and all its classes.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09pkg classes do: [ :each |\x0a\x09\x09\x09self removeClass: each ].\x0a\x09self deletePackage: packageName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "classes", "removeClass:", "deletePackage:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "renamePackage:to:",
protocol: 'packages',
fn: function (packageName,newName){
var self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
pkg=self._packageAt_ifAbsent_(packageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1="Missing package: ".__comma(packageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return self._error_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=self._packageAt_(newName);
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
self._error_("Already exists a package called: ".__comma(newName));
};
$recv(pkg)._name_(newName);
self._basicRegisterPackage_(pkg);
self._deletePackage_(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "newName"],
source: "renamePackage: packageName to: newName\x0a\x09\x22Rename a package.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09(self packageAt: newName) ifNotNil: [ self error: 'Already exists a package called: ', newName ].\x0a\x09pkg name: newName.\x0a\x09self basicRegisterPackage: pkg.\x0a\x09self deletePackage: packageName.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "name:", "basicRegisterPackage:", "deletePackage:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "reservedWords",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.reservedWords;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reservedWords",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reservedWords\x0a\x09\x22JavaScript reserved words\x22\x0a\x09<return $core.reservedWords>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "settings",
protocol: 'accessing',
fn: function (){
var self=this;
function $SmalltalkSettings(){return $globals.SmalltalkSettings||(typeof SmalltalkSettings=="undefined"?nil:SmalltalkSettings)}
return $SmalltalkSettings();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "settings\x0a\x09^ SmalltalkSettings",
referencedClasses: ["SmalltalkSettings"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "version",
protocol: 'accessing',
fn: function (){
var self=this;
return "0.15.0-pre";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "version\x0a\x09\x22Answer the version string of Amber\x22\x0a\x09\x0a\x09^ '0.15.0-pre'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);


$globals.SmalltalkImage.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'instance creation',
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
$globals.SmalltalkImage.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
self._deprecatedAPI();
$1=self["@current"];
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.SmalltalkImage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ] ifNotNil: [ self deprecatedAPI. current ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "new", "deprecatedAPI"]
}),
$globals.SmalltalkImage.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var st;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
st=self._current();
$recv($recv(st)._globals())._at_put_("Smalltalk",st);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{st:st},$globals.SmalltalkImage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| st |\x0a\x09st := self current.\x0a\x09st globals at: 'Smalltalk' put: st",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["current", "at:put:", "globals"]
}),
$globals.SmalltalkImage.klass);

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
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.SmalltalkImage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.SmalltalkImage.klass);

$core.addMethod(
$core.method({
selector: "importsString",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(self._key())._importsString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["importsString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(" -> ");
$1=$recv($2).__comma($recv(self._value())._importsString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsString",{},$globals.Association)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "importsString\x0a\x09\x22This is for use by package exporter.\x0a\x09It can fail for non-string keys and values.\x22\x0a\x0a\x09^ self key importsString, ' -> ', self value importsString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "importsString", "key", "value"]
}),
$globals.Association);

$core.addMethod(
$core.method({
selector: "asJavaScriptPropertyName",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.st2prop(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptPropertyName",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptPropertyName\x0a<return $core.st2prop(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSetting",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
function $Setting(){return $globals.Setting||(typeof Setting=="undefined"?nil:Setting)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Setting())._at_ifAbsent_(self,nil);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSetting",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSetting\x0a\x09\x22Answer aSetting dedicated to locally store a value using this string as key.\x0a\x09Nil will be the default value.\x22\x0a\x09^ Setting at: self ifAbsent: nil",
referencedClasses: ["Setting"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSettingIfAbsent:",
protocol: '*Kernel-Infrastructure',
fn: function (aDefaultValue){
var self=this;
function $Setting(){return $globals.Setting||(typeof Setting=="undefined"?nil:Setting)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Setting())._at_ifAbsent_(self,aDefaultValue);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSettingIfAbsent:",{aDefaultValue:aDefaultValue},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDefaultValue"],
source: "asSettingIfAbsent: aDefaultValue\x0a\x09\x22Answer aSetting dedicated to locally store a value using this string as key.\x0a\x09Make this setting to have aDefaultValue.\x22\x0a\x09^ Setting at: self ifAbsent: aDefaultValue",
referencedClasses: ["Setting"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "importsString",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("'".__comma(self._replace_with_("'","''"))).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsString",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "importsString\x0a\x09\x22Answer receiver as Smalltalk expression\x22\x0a\x09^ '''', (self replace: '''' with: ''''''), ''''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "replace:with:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValue",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._asSetting())._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValue",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "settingValue\x0a\x09^ self asSetting value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "asSetting"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValue:",
protocol: '*Kernel-Infrastructure',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._asSetting())._value_(aValue);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValue:",{aValue:aValue},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "settingValue: aValue\x0a\x09\x22Sets the value of the setting that will be locally stored using this string as key.\x0a\x09Note that aValue can be any object that can be stringifyed\x22\x0a\x09^ self asSetting value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "asSetting"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValueIfAbsent:",
protocol: '*Kernel-Infrastructure',
fn: function (aDefaultValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._asSettingIfAbsent_(aDefaultValue))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValueIfAbsent:",{aDefaultValue:aDefaultValue},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDefaultValue"],
source: "settingValueIfAbsent: aDefaultValue\x0a\x09\x22Answer the value of the locally stored setting using this string as key.\x0a\x09Use aDefaultValue in case no setting is found\x22\x0a\x09^ (self asSettingIfAbsent: aDefaultValue) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "asSettingIfAbsent:"]
}),
$globals.String);

});
