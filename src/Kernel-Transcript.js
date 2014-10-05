define("amber_core/Kernel-Transcript", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $vm=$boot.vm,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$vm,_st=$recv,globals=$globals;
smalltalk.addPackage('Kernel-Transcript');
smalltalk.packages["Kernel-Transcript"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('ConsoleTranscript', globals.Object, ['textarea'], 'Kernel-Transcript');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.ConsoleTranscript.comment="I am a specific transcript emitting to the JavaScript console.\x0a\x0aIf no other transcript is registered, I am the default.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09\x22no op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09\x22no op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'printing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
console.log(String(_st(anObject)._asString()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},globals.ConsoleTranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "show: anObject\x0a\x22Smalltalk objects should have no trouble displaying themselves on the Transcript; Javascript objects don't know how, so must be wrapped in a JSObectProxy.\x22\x0a<console.log(String(_st(anObject)._asString()))>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.ConsoleTranscript);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($Transcript())._registerIfNone_(self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ConsoleTranscript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09Transcript registerIfNone: self new",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["registerIfNone:", "new"]
}),
globals.ConsoleTranscript.klass);

});
