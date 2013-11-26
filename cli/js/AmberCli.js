define("amber_cli/AmberCli", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('AmberCli');
smalltalk.packages["AmberCli"].transport = {"type":"amd","amdNamespace":"amber_cli"};

smalltalk.addClass('AmberCli', smalltalk.Object, [], 'AmberCli');
smalltalk.AmberCli.comment="I am the Amber CLI (CommandLine Interface) tool which runs on Node.js.\x0a\x0aMy responsibility is to start different Amber programs like the FileServer or the Repl.\x0aWhich program to start is determined by the first commandline parameters passed to the AmberCli executable.\x0aUse `help` to get a list of all available options.\x0aAny further commandline parameters are passed to the specific program.\x0a\x0a## Commands\x0a\x0aNew commands can be added by creating a class side method in the `commands` protocol which takes one parameter.\x0aThis parameter is an array of all commandline options + values passed on to the program.\x0aAny `camelCaseCommand` is transformed into a commandline parameter of the form `camel-case-command` and vice versa.";

smalltalk.addMethod(
smalltalk.method({
selector: "commandLineSwitches",
category: 'commandline',
fn: function (){
var self=this;
var switches;
return smalltalk.withContext(function($ctx1) { 
var $1;
switches=_st(_st(self._class())._methodsInProtocol_("commands"))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["collect:"]=1;
switches=_st(switches)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._match_("^[^:]*:$");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
switches=_st(switches)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(each)._allButLast())._replace_with_("([A-Z])","-$1"))._asLowercase();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$1=switches;
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandLineSwitches",{switches:switches},smalltalk.AmberCli.klass)})},
args: [],
source: "commandLineSwitches\x0a\x09\x22Collect all methodnames from the 'commands' protocol of the class\x0a\x09 and select the ones with only one parameter.\x0a\x09 Then remove the ':' at the end of the name.\x0a\x09 Additionally all uppercase letters are made lowercase and preceded by a '-'.\x0a\x09 Example: fallbackPage: becomes --fallback-page.\x0a\x09 Return the Array containing the commandline switches.\x22\x0a\x09| switches |\x0a\x09switches := ((self class methodsInProtocol: 'commands') collect: [ :each | each selector]).\x0a\x09switches := switches select: [ :each | each match: '^[^:]*:$'].\x0a\x09switches :=switches collect: [ :each |\x0a\x09\x09(each allButLast replace: '([A-Z])' with: '-$1') asLowercase].\x0a\x09^switches",
messageSends: ["collect:", "methodsInProtocol:", "class", "selector", "select:", "match:", "asLowercase", "replace:with:", "allButLast"],
referencedClasses: []
}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "handleArguments:",
category: 'commandline',
fn: function (args){
var self=this;
var selector;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(args)._first();
$ctx1.sendIdx["first"]=1;
selector=self._selectorForCommandLineSwitch_($1);
_st(args)._remove_(_st(args)._first());
self._perform_withArguments_(selector,_st($Array())._with_(args));
return self}, function($ctx1) {$ctx1.fill(self,"handleArguments:",{args:args,selector:selector},smalltalk.AmberCli.klass)})},
args: ["args"],
source: "handleArguments: args\x0a\x09| selector |\x0a\x0a\x09selector := self selectorForCommandLineSwitch: (args first).\x0a\x09args remove: args first.\x0a\x09self perform: selector  withArguments: (Array with: args)",
messageSends: ["selectorForCommandLineSwitch:", "first", "remove:", "perform:withArguments:", "with:"],
referencedClasses: ["Array"]
}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "help:",
category: 'commands',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_("Available Commands:");
$ctx1.sendIdx["log:"]=1;
_st(self._commandLineSwitches())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"help:",{args:args},smalltalk.AmberCli.klass)})},
args: ["args"],
source: "help: args\x0a\x09console log: 'Available Commands:'.\x0a\x09self commandLineSwitches do: [ :each | console log: each ]",
messageSends: ["log:", "do:", "commandLineSwitches"],
referencedClasses: []
}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'startup',
fn: function (){
var self=this;
var args,nodeMinorVersion;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$5,$6;
$3=_st(process)._version();
$ctx1.sendIdx["version"]=1;
$2=_st($3)._tokenize_(".");
$1=_st($2)._second();
nodeMinorVersion=_st($1)._asNumber();
$4=_st(nodeMinorVersion).__lt((8));
if(smalltalk.assert($4)){
_st(console)._log_("You are currently using Node.js ".__comma(_st(process)._version()));
$ctx1.sendIdx["log:"]=1;
_st(console)._log_("Required is at least Node.js v0.8.x or greater.");
return (-1);
};
args=_st(process)._argv();
_st(args)._removeFrom_to_((1),(2));
$5=_st(args)._isEmpty();
if(smalltalk.assert($5)){
self._help_(nil);
} else {
$6=self._handleArguments_(args);
return $6;
};
return self}, function($ctx1) {$ctx1.fill(self,"main",{args:args,nodeMinorVersion:nodeMinorVersion},smalltalk.AmberCli.klass)})},
args: [],
source: "main\x0a\x09\x22Main entry point for Amber applications.\x0a\x09Parses commandline arguments and starts the according subprogram.\x22\x0a\x09| args nodeMinorVersion |\x0a\x0a\x09nodeMinorVersion := ((process version) tokenize: '.') second asNumber.\x0a\x09nodeMinorVersion < 8 ifTrue: [\x0a\x09\x09console log: 'You are currently using Node.js ', (process version).\x0a\x09\x09console log: 'Required is at least Node.js v0.8.x or greater.'.\x0a\x09\x09^ -1.\x0a\x09].\x0a\x0a\x09args := process argv.\x0a\x09\x22Remove the first args which contain the path to the node executable and the script file.\x22\x0a\x09args removeFrom: 1 to: 2.\x0a\x09\x0a\x09(args isEmpty)\x0a\x09\x09ifTrue: [self help: nil]\x0a\x09\x09ifFalse: [^self handleArguments: args]",
messageSends: ["asNumber", "second", "tokenize:", "version", "ifTrue:", "<", "log:", ",", "argv", "removeFrom:to:", "ifTrue:ifFalse:", "isEmpty", "help:", "handleArguments:"],
referencedClasses: []
}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "repl:",
category: 'commands',
fn: function (args){
var self=this;
function $Repl(){return smalltalk.Repl||(typeof Repl=="undefined"?nil:Repl)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Repl())._new())._createInterface();
return $1;
}, function($ctx1) {$ctx1.fill(self,"repl:",{args:args},smalltalk.AmberCli.klass)})},
args: ["args"],
source: "repl: args\x0a\x09^Repl new createInterface",
messageSends: ["createInterface", "new"],
referencedClasses: ["Repl"]
}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorForCommandLineSwitch:",
category: 'commandline',
fn: function (aSwitch){
var self=this;
var command,selector;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._commandLineSwitches())._includes_(aSwitch);
if(smalltalk.assert($1)){
selector=_st(_st(aSwitch)._replace_with_("-[a-z]",(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._second())._asUppercase();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}))).__comma(":");
selector;
} else {
selector="help:";
selector;
};
$2=selector;
return $2;
}, function($ctx1) {$ctx1.fill(self,"selectorForCommandLineSwitch:",{aSwitch:aSwitch,command:command,selector:selector},smalltalk.AmberCli.klass)})},
args: ["aSwitch"],
source: "selectorForCommandLineSwitch: aSwitch\x0a\x09\x22Add ':' at the end and replace all occurences of a lowercase letter preceded by a '-' with the Uppercase letter.\x0a\x09 Example: fallback-page becomes fallbackPage:.\x0a\x09 If no correct selector is found return 'help:'\x22\x0a\x09 | command selector |\x0a\x0a\x09 (self commandLineSwitches includes: aSwitch)\x0a\x09 ifTrue: [ selector := (aSwitch replace: '-[a-z]' with: [ :each | each second asUppercase ]), ':']\x0a\x09 ifFalse: [ selector := 'help:' ].\x0a\x09^selector",
messageSends: ["ifTrue:ifFalse:", "includes:", "commandLineSwitches", ",", "replace:with:", "asUppercase", "second"],
referencedClasses: []
}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "serve:",
category: 'commands',
fn: function (args){
var self=this;
function $FileServer(){return smalltalk.FileServer||(typeof FileServer=="undefined"?nil:FileServer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($FileServer())._createServerWithArguments_(args))._start();
return $1;
}, function($ctx1) {$ctx1.fill(self,"serve:",{args:args},smalltalk.AmberCli.klass)})},
args: ["args"],
source: "serve: args\x0a\x09^(FileServer createServerWithArguments: args) start",
messageSends: ["start", "createServerWithArguments:"],
referencedClasses: ["FileServer"]
}),
smalltalk.AmberCli.klass);


smalltalk.addClass('FileServer', smalltalk.Object, ['path', 'http', 'fs', 'url', 'host', 'port', 'basePath', 'util', 'username', 'password', 'fallbackPage'], 'AmberCli');
smalltalk.FileServer.comment="I am the Amber Smalltalk FileServer.\x0aMy runtime requirement is a functional Node.js executable.\x0a\x0aTo start a FileServer instance on port `4000` use the following code:\x0a\x0a    FileServer new start\x0a\x0aA parameterized instance can be created with the following code:\x0a\x0a    FileServer createServerWithArguments: options\x0a\x0aHere, `options` is an array of commandline style strings each followed by a value e.g. `#('--port', '6000', '--host', '0.0.0.0')`.\x0aA list of all available parameters can be printed to the commandline by passing `--help` as parameter.\x0aSee the `Options` section for further details on how options are mapped to instance methods.\x0a\x0aAfter startup FileServer checks if the directory layout required by Amber is present and logs a warning on absence.\x0a\x0a\x0a## Options\x0a\x0aEach option is of the form `--some-option-string` which is transformed into a selector of the format `someOptionString:`.\x0aThe trailing `--` gets removed, each `-[a-z]` gets transformed into the according uppercase letter, and a `:` is appended to create a selector which takes a single argument.\x0aAfterwards, the selector gets executed on the `FileServer` instance with the value following in the options array as parameter.\x0a\x0a## Adding new commandline parameters\x0a\x0aAdding new commandline parameters to `FileServer` is as easy as adding a new single parameter method to the `accessing` protocol.";
smalltalk.addMethod(
smalltalk.method({
selector: "base64Decode:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (new Buffer(aString, 'base64').toString());
return self}, function($ctx1) {$ctx1.fill(self,"base64Decode:",{aString:aString},smalltalk.FileServer)})},
args: ["aString"],
source: "base64Decode: aString\x0a\x09<return (new Buffer(aString, 'base64').toString())>",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "basePath",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@basePath"];
if(($receiver = $2) == nil || $receiver == null){
$1="./";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"basePath",{},smalltalk.FileServer)})},
args: [],
source: "basePath\x0a\x09^basePath ifNil: ['./']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "basePath:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@basePath"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"basePath:",{aString:aString},smalltalk.FileServer)})},
args: ["aString"],
source: "basePath: aString\x0a\x09basePath := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "checkDirectoryLayout",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1,$6,$8,$7,$5,$9;
$2=self["@fs"];
$4=self._basePath();
$ctx1.sendIdx["basePath"]=1;
$3=_st($4).__comma("index.html");
$ctx1.sendIdx[","]=1;
$1=_st($2)._existsSync_($3);
$ctx1.sendIdx["existsSync:"]=1;
if(! smalltalk.assert($1)){
_st(console)._warn_("Warning: project directory does not contain index.html.");
$ctx1.sendIdx["warn:"]=1;
_st(console)._warn_("    You can specify the directory containing index.html with --base-path.");
$ctx1.sendIdx["warn:"]=2;
};
_st(console)._warn_("    You can also specify a custom error page with --fallback-page.");
$ctx1.sendIdx["warn:"]=3;
$6=self["@fs"];
$8=self._basePath();
$ctx1.sendIdx["basePath"]=2;
$7=_st($8).__comma("st");
$ctx1.sendIdx[","]=2;
$5=_st($6)._existsSync_($7);
$ctx1.sendIdx["existsSync:"]=2;
if(! smalltalk.assert($5)){
_st(console)._warn_("Warning: project directory is missing an \x22st\x22 directory");
$ctx1.sendIdx["warn:"]=4;
};
$9=_st(self["@fs"])._existsSync_(_st(self._basePath()).__comma("js"));
if(! smalltalk.assert($9)){
_st(console)._warn_("Warning: project directory is missing a \x22js\x22 directory");
};
return self}, function($ctx1) {$ctx1.fill(self,"checkDirectoryLayout",{},smalltalk.FileServer)})},
args: [],
source: "checkDirectoryLayout\x0a\x09(fs existsSync: self basePath, 'index.html') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory does not contain index.html.'.\x0a\x09\x09console warn: '    You can specify the directory containing index.html with --base-path.'.].\x0a\x09\x09console warn: '    You can also specify a custom error page with --fallback-page.'.\x0a\x09(fs existsSync: self basePath, 'st') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory is missing an \x22st\x22 directory'].\x0a\x09(fs existsSync: self basePath, 'js') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory is missing a \x22js\x22 directory'].",
messageSends: ["ifFalse:", "existsSync:", ",", "basePath", "warn:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "fallbackPage",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fallbackPage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fallbackPage",{},smalltalk.FileServer)})},
args: [],
source: "fallbackPage\x0a\x09^fallbackPage",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "fallbackPage:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fallbackPage"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"fallbackPage:",{aString:aString},smalltalk.FileServer)})},
args: ["aString"],
source: "fallbackPage: aString\x0a\x09fallbackPage := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleGETRequest:respondTo:",
category: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
var uri,filename;
return smalltalk.withContext(function($ctx1) { 
uri=_st(_st(self["@url"])._parse_(_st(aRequest)._url()))._pathname();
filename=_st(self["@path"])._join_with_(self._basePath(),uri);
_st(self["@fs"])._exists_do_(filename,(function(aBoolean){
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert(aBoolean)){
return self._respondFileNamed_to_(filename,aResponse);
} else {
return self._respondNotFoundTo_(aResponse);
};
}, function($ctx2) {$ctx2.fillBlock({aBoolean:aBoolean},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleGETRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse,uri:uri,filename:filename},smalltalk.FileServer)})},
args: ["aRequest", "aResponse"],
source: "handleGETRequest: aRequest respondTo: aResponse\x0a\x09| uri filename |\x0a\x09uri := (url parse: aRequest url) pathname.\x0a\x09filename := path join: self basePath with: uri.\x0a\x09fs exists: filename do: [:aBoolean |\x0a\x09\x09aBoolean\x0a\x09\x09\x09ifFalse: [self respondNotFoundTo: aResponse]\x0a\x09\x09\x09ifTrue: [self respondFileNamed: filename to: aResponse]]",
messageSends: ["pathname", "parse:", "url", "join:with:", "basePath", "exists:do:", "ifFalse:ifTrue:", "respondNotFoundTo:", "respondFileNamed:to:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleOPTIONSRequest:respondTo:",
category: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2="Access-Control-Allow-Origin".__minus_gt("*");
$ctx1.sendIdx["->"]=1;
$3="Access-Control-Allow-Methods".__minus_gt("GET, PUT, POST, DELETE, OPTIONS");
$ctx1.sendIdx["->"]=2;
$4="Access-Control-Allow-Headers".__minus_gt("Content-Type, Accept");
$ctx1.sendIdx["->"]=3;
$5="Content-Length".__minus_gt((0));
$ctx1.sendIdx["->"]=4;
$1=smalltalk.HashedCollection._from_([$2,$3,$4,$5,"Access-Control-Max-Age".__minus_gt((10))]);
_st(aResponse)._writeHead_options_((200),$1);
_st(aResponse)._end();
return self}, function($ctx1) {$ctx1.fill(self,"handleOPTIONSRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse},smalltalk.FileServer)})},
args: ["aRequest", "aResponse"],
source: "handleOPTIONSRequest: aRequest respondTo: aResponse\x0a\x09aResponse writeHead: 200 options: #{'Access-Control-Allow-Origin' -> '*'.\x0a\x09\x09\x09\x09\x09'Access-Control-Allow-Methods' -> 'GET, PUT, POST, DELETE, OPTIONS'.\x0a\x09\x09\x09\x09\x09'Access-Control-Allow-Headers' -> 'Content-Type, Accept'.\x0a\x09\x09\x09\x09\x09'Content-Length' -> 0.\x0a\x09\x09\x09\x09\x09'Access-Control-Max-Age' -> 10}.\x0a\x09aResponse end",
messageSends: ["writeHead:options:", "->", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handlePUTRequest:respondTo:",
category: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
var file,stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self._isAuthenticated_(aRequest);
if(! smalltalk.assert($1)){
self._respondAuthenticationRequiredTo_(aResponse);
return nil;
};
file=".".__comma(_st(aRequest)._url());
$ctx1.sendIdx[","]=1;
stream=_st(self["@fs"])._createWriteStream_(file);
_st(stream)._on_do_("error",(function(error){
return smalltalk.withContext(function($ctx2) {
$2=console;
$3="Error creating WriteStream for file ".__comma(file);
$ctx2.sendIdx[","]=2;
_st($2)._warn_($3);
$ctx2.sendIdx["warn:"]=1;
_st(console)._warn_("    Did you forget to create the necessary js/ or st/ directory in your project?");
$ctx2.sendIdx["warn:"]=2;
_st(console)._warn_("    The exact error is: ".__comma(error));
return self._respondNotCreatedTo_(aResponse);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(stream)._on_do_("close",(function(){
return smalltalk.withContext(function($ctx2) {
return self._respondCreatedTo_(aResponse);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["on:do:"]=2;
_st(aRequest)._setEncoding_("utf8");
_st(aRequest)._on_do_("data",(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._write_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1,4)})}));
$ctx1.sendIdx["on:do:"]=3;
_st(aRequest)._on_do_("end",(function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(stream)._writable();
if(smalltalk.assert($4)){
return _st(stream)._end();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handlePUTRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse,file:file,stream:stream},smalltalk.FileServer)})},
args: ["aRequest", "aResponse"],
source: "handlePUTRequest: aRequest respondTo: aResponse\x0a\x09| file stream |\x0a\x09(self isAuthenticated: aRequest)\x0a\x09\x09ifFalse: [self respondAuthenticationRequiredTo: aResponse. ^nil].\x0a\x0a\x09file := '.', aRequest url.\x0a\x09stream := fs createWriteStream: file.\x0a\x0a\x09stream on: 'error' do: [:error |\x0a\x09\x09console warn: 'Error creating WriteStream for file ', file.\x0a\x09\x09console warn: '    Did you forget to create the necessary js/ or st/ directory in your project?'.\x0a\x09\x09console warn: '    The exact error is: ', error.\x0a\x09\x09self respondNotCreatedTo: aResponse].\x0a\x0a\x09stream on: 'close' do: [\x0a\x09\x09self respondCreatedTo: aResponse].\x0a\x0a\x09aRequest setEncoding: 'utf8'.\x0a\x09aRequest on: 'data' do: [:data |\x0a\x09\x09stream write: data].\x0a\x0a\x09aRequest on: 'end' do: [\x0a\x09\x09stream writable ifTrue: [stream end]]",
messageSends: ["ifFalse:", "isAuthenticated:", "respondAuthenticationRequiredTo:", ",", "url", "createWriteStream:", "on:do:", "warn:", "respondNotCreatedTo:", "respondCreatedTo:", "setEncoding:", "write:", "ifTrue:", "writable", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleRequest:respondTo:",
category: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5;
$2=_st(aRequest)._method();
$ctx1.sendIdx["method"]=1;
$1=_st($2).__eq("PUT");
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
self._handlePUTRequest_respondTo_(aRequest,aResponse);
};
$4=_st(aRequest)._method();
$ctx1.sendIdx["method"]=2;
$3=_st($4).__eq("GET");
$ctx1.sendIdx["="]=2;
if(smalltalk.assert($3)){
self._handleGETRequest_respondTo_(aRequest,aResponse);
};
$5=_st(_st(aRequest)._method()).__eq("OPTIONS");
if(smalltalk.assert($5)){
self._handleOPTIONSRequest_respondTo_(aRequest,aResponse);
};
return self}, function($ctx1) {$ctx1.fill(self,"handleRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse},smalltalk.FileServer)})},
args: ["aRequest", "aResponse"],
source: "handleRequest: aRequest respondTo: aResponse\x0a\x09aRequest method = 'PUT'\x0a\x09\x09ifTrue: [self handlePUTRequest: aRequest respondTo: aResponse].\x0a\x09aRequest method = 'GET'\x0a\x09\x09ifTrue:[self handleGETRequest: aRequest respondTo: aResponse].\x0a\x09aRequest method = 'OPTIONS'\x0a\x09\x09ifTrue:[self handleOPTIONSRequest: aRequest respondTo: aResponse]",
messageSends: ["ifTrue:", "=", "method", "handlePUTRequest:respondTo:", "handleGETRequest:respondTo:", "handleOPTIONSRequest:respondTo:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "host",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@host"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"host",{},smalltalk.FileServer)})},
args: [],
source: "host\x0a\x09^host",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "host:",
category: 'accessing',
fn: function (hostname){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@host"]=hostname;
return self}, function($ctx1) {$ctx1.fill(self,"host:",{hostname:hostname},smalltalk.FileServer)})},
args: ["hostname"],
source: "host: hostname\x0a\x09host := hostname",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.FileServer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@path"]=self._require_("path");
$ctx1.sendIdx["require:"]=1;
self["@http"]=self._require_("http");
$ctx1.sendIdx["require:"]=2;
self["@fs"]=self._require_("fs");
$ctx1.sendIdx["require:"]=3;
self["@util"]=self._require_("util");
$ctx1.sendIdx["require:"]=4;
self["@url"]=self._require_("url");
$1=self._class();
$ctx1.sendIdx["class"]=1;
self["@host"]=_st($1)._defaultHost();
self["@port"]=_st(self._class())._defaultPort();
self["@username"]=nil;
self["@password"]=nil;
self["@fallbackPage"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.FileServer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09path := self require: 'path'.\x0a\x09http := self require: 'http'.\x0a\x09fs := self require: 'fs'.\x0a\x09util := self require: 'util'.\x0a\x09url := self require: 'url'.\x0a\x09host := self class defaultHost.\x0a\x09port := self class defaultPort.\x0a\x09username := nil.\x0a\x09password := nil.\x0a\x09fallbackPage := nil.",
messageSends: ["initialize", "require:", "defaultHost", "class", "defaultPort"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "isAuthenticated:",
category: 'private',
fn: function (aRequest){
var self=this;
var header,token,auth,parts;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5,$6,$9,$10,$8,$7;
$2=_st(self["@username"])._isNil();
$ctx1.sendIdx["isNil"]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@password"])._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
if(smalltalk.assert($1)){
return true;
};
$3=_st(_st(aRequest)._headers())._at_("authorization");
$ctx1.sendIdx["at:"]=1;
if(($receiver = $3) == nil || $receiver == null){
header="";
} else {
header=$3;
};
$4=_st(header)._isEmpty();
if(smalltalk.assert($4)){
return false;
} else {
$5=_st(header)._tokenize_(" ");
$ctx1.sendIdx["tokenize:"]=1;
if(($receiver = $5) == nil || $receiver == null){
token="";
} else {
token=$5;
};
token;
$6=_st(token)._at_((2));
$ctx1.sendIdx["at:"]=2;
auth=self._base64Decode_($6);
auth;
parts=_st(auth)._tokenize_(":");
parts;
$9=self["@username"];
$10=_st(parts)._at_((1));
$ctx1.sendIdx["at:"]=3;
$8=_st($9).__eq($10);
$ctx1.sendIdx["="]=1;
$7=_st($8)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@password"]).__eq(_st(parts)._at_((2)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}));
if(smalltalk.assert($7)){
return true;
} else {
return false;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"isAuthenticated:",{aRequest:aRequest,header:header,token:token,auth:auth,parts:parts},smalltalk.FileServer)})},
args: ["aRequest"],
source: "isAuthenticated: aRequest\x0a\x09\x22Basic HTTP Auth: http://stackoverflow.com/a/5957629/293175\x0a\x09 and https://gist.github.com/1686663\x22\x0a\x09| header token auth parts|\x0a\x0a\x09(username isNil and: [password isNil]) ifTrue: [^true].\x0a\x0a\x09\x22get authentication header\x22\x0a\x09header := (aRequest headers at: 'authorization') ifNil:[''].\x0a\x09(header isEmpty)\x0a\x09ifTrue: [^false]\x0a\x09ifFalse: [\x0a\x09\x09\x22get authentication token\x22\x0a\x09\x09token := (header tokenize: ' ') ifNil:[''].\x0a\x09\x09\x22convert back from base64\x22\x0a\x09\x09auth := self base64Decode: (token at: 2).\x0a\x09\x09\x22split token at colon\x22\x0a\x09\x09parts := auth tokenize: ':'.\x0a\x0a\x09\x09((username = (parts at: 1)) and: [password = (parts at: 2)])\x0a\x09\x09\x09ifTrue: [^true]\x0a\x09\x09\x09ifFalse: [^false]\x0a\x09].",
messageSends: ["ifTrue:", "and:", "isNil", "ifNil:", "at:", "headers", "ifTrue:ifFalse:", "isEmpty", "tokenize:", "base64Decode:", "="],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "password:",
category: 'accessing',
fn: function (aPassword){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@password"]=aPassword;
return self}, function($ctx1) {$ctx1.fill(self,"password:",{aPassword:aPassword},smalltalk.FileServer)})},
args: ["aPassword"],
source: "password: aPassword\x0a\x09password := aPassword.",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "port",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@port"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"port",{},smalltalk.FileServer)})},
args: [],
source: "port\x0a\x09^port",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "port:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@port"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"port:",{aNumber:aNumber},smalltalk.FileServer)})},
args: ["aNumber"],
source: "port: aNumber\x0a\x09port := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "require:",
category: 'private',
fn: function (aModuleString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(require)._value_(aModuleString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"require:",{aModuleString:aModuleString},smalltalk.FileServer)})},
args: ["aModuleString"],
source: "require: aModuleString\x0a\x09\x22call to the require function\x22\x0a\x09^require value: aModuleString",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondAuthenticationRequiredTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aResponse)._writeHead_options_((401),smalltalk.HashedCollection._from_(["WWW-Authenticate".__minus_gt("Basic realm=\x22Secured Developer Area\x22")]));
_st(aResponse)._write_("<html><body>Authentication needed</body></html>");
$1=_st(aResponse)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondAuthenticationRequiredTo:",{aResponse:aResponse},smalltalk.FileServer)})},
args: ["aResponse"],
source: "respondAuthenticationRequiredTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 401 options: #{'WWW-Authenticate' -> 'Basic realm=\x22Secured Developer Area\x22'};\x0a\x09\x09write: '<html><body>Authentication needed</body></html>';\x0a\x09\x09end.",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondCreatedTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2="Content-Type".__minus_gt("text/plain");
$ctx1.sendIdx["->"]=1;
$1=smalltalk.HashedCollection._from_([$2,"Access-Control-Allow-Origin".__minus_gt("*")]);
_st(aResponse)._writeHead_options_((201),$1);
$3=_st(aResponse)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondCreatedTo:",{aResponse:aResponse},smalltalk.FileServer)})},
args: ["aResponse"],
source: "respondCreatedTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 201 options: #{'Content-Type' -> 'text/plain'. 'Access-Control-Allow-Origin' -> '*'};\x0a\x09\x09end.",
messageSends: ["writeHead:options:", "->", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondFileNamed:to:",
category: 'request handling',
fn: function (aFilename,aResponse){
var self=this;
var type,filename;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
filename=aFilename;
$1=_st(_st(self["@fs"])._statSync_(aFilename))._isDirectory();
if(smalltalk.assert($1)){
filename=_st(filename).__comma("index.html");
$ctx1.sendIdx[","]=1;
filename;
};
_st(self["@fs"])._readFile_do_(filename,(function(ex,file){
return smalltalk.withContext(function($ctx2) {
$2=_st(ex)._notNil();
if(smalltalk.assert($2)){
$3=console;
$4=_st(filename).__comma(" does not exist");
$ctx2.sendIdx[","]=2;
_st($3)._log_($4);
return self._respondNotFoundTo_(aResponse);
} else {
type=_st(self._class())._mimeTypeFor_(filename);
type;
$5=_st(type).__eq("application/javascript");
if(smalltalk.assert($5)){
type=_st(type).__comma(";charset=utf-8");
type;
};
_st(aResponse)._writeHead_options_((200),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt(type)]));
_st(aResponse)._write_encoding_(file,"binary");
$6=_st(aResponse)._end();
return $6;
};
}, function($ctx2) {$ctx2.fillBlock({ex:ex,file:file},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"respondFileNamed:to:",{aFilename:aFilename,aResponse:aResponse,type:type,filename:filename},smalltalk.FileServer)})},
args: ["aFilename", "aResponse"],
source: "respondFileNamed: aFilename to: aResponse\x0a\x09| type filename |\x0a\x0a\x09filename := aFilename.\x0a\x09(fs statSync: aFilename) isDirectory ifTrue: [\x0a\x09\x09filename := filename, 'index.html'].\x0a\x0a\x09fs readFile: filename do: [:ex :file |\x0a\x09\x09ex notNil \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09console log: filename, ' does not exist'.\x0a\x09\x09\x09\x09self respondNotFoundTo: aResponse]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09type := self class mimeTypeFor: filename.\x0a\x09\x09\x09\x09type = 'application/javascript'\x0a\x09\x09\x09\x09\x09ifTrue: [ type:=type,';charset=utf-8' ].\x0a\x09\x09\x09\x09aResponse \x0a\x09\x09\x09\x09\x09writeHead: 200 options:  #{'Content-Type' -> type};\x0a\x09\x09\x09\x09\x09write: file encoding: 'binary';\x0a\x09\x09\x09\x09\x09end]]",
messageSends: ["ifTrue:", "isDirectory", "statSync:", ",", "readFile:do:", "ifTrue:ifFalse:", "notNil", "log:", "respondNotFoundTo:", "mimeTypeFor:", "class", "=", "writeHead:options:", "->", "write:encoding:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondInternalErrorTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aResponse)._writeHead_options_((500),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain")]));
_st(aResponse)._write_("500 Internal server error");
$1=_st(aResponse)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondInternalErrorTo:",{aResponse:aResponse},smalltalk.FileServer)})},
args: ["aResponse"],
source: "respondInternalErrorTo: aResponse\x0a\x09aResponse \x0a\x09\x09writeHead: 500 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: '500 Internal server error';\x0a\x09\x09end",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondNotCreatedTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aResponse)._writeHead_options_((400),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain")]));
_st(aResponse)._write_("File could not be created. Did you forget to create the st/js directories on the server?");
$1=_st(aResponse)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondNotCreatedTo:",{aResponse:aResponse},smalltalk.FileServer)})},
args: ["aResponse"],
source: "respondNotCreatedTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 400 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: 'File could not be created. Did you forget to create the st/js directories on the server?';\x0a\x09\x09end.",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondNotFoundTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=self._fallbackPage();
$ctx1.sendIdx["fallbackPage"]=1;
$1=_st($2)._isNil();
if(! smalltalk.assert($1)){
$3=self._respondFileNamed_to_(self._fallbackPage(),aResponse);
return $3;
};
_st(aResponse)._writeHead_options_((404),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/html")]));
_st(aResponse)._write_("<html><body><p>404 Not found</p>");
$ctx1.sendIdx["write:"]=1;
_st(aResponse)._write_("<p>Did you forget to put an index.html file into the directory which is served by \x22bin/amber serve\x22? To solve this you can:<ul>");
$ctx1.sendIdx["write:"]=2;
_st(aResponse)._write_("<li>create an index.html in the served directory.</li>");
$ctx1.sendIdx["write:"]=3;
_st(aResponse)._write_("<li>can also specify the location of a page to display instead of this error page with the \x22--fallback-page\x22 option.</li>");
$ctx1.sendIdx["write:"]=4;
_st(aResponse)._write_("<li>change the directory to be served with the \x22--base-path\x22 option.</li>");
$ctx1.sendIdx["write:"]=5;
_st(aResponse)._write_("</ul></p></body></html>");
$4=_st(aResponse)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondNotFoundTo:",{aResponse:aResponse},smalltalk.FileServer)})},
args: ["aResponse"],
source: "respondNotFoundTo: aResponse\x0a\x09self fallbackPage isNil ifFalse: [^self respondFileNamed: self fallbackPage to: aResponse].\x0a\x09aResponse \x0a\x09\x09writeHead: 404 options: #{'Content-Type' -> 'text/html'};\x0a\x09\x09write: '<html><body><p>404 Not found</p>';\x0a\x09\x09write: '<p>Did you forget to put an index.html file into the directory which is served by \x22bin/amber serve\x22? To solve this you can:<ul>';\x0a\x09\x09write: '<li>create an index.html in the served directory.</li>';\x0a\x09\x09write: '<li>can also specify the location of a page to display instead of this error page with the \x22--fallback-page\x22 option.</li>';\x0a\x09\x09write: '<li>change the directory to be served with the \x22--base-path\x22 option.</li>';\x0a\x09\x09write: '</ul></p></body></html>';\x0a\x09\x09end",
messageSends: ["ifFalse:", "isNil", "fallbackPage", "respondFileNamed:to:", "writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondOKTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2="Content-Type".__minus_gt("text/plain");
$ctx1.sendIdx["->"]=1;
$1=smalltalk.HashedCollection._from_([$2,"Access-Control-Allow-Origin".__minus_gt("*")]);
_st(aResponse)._writeHead_options_((200),$1);
$3=_st(aResponse)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondOKTo:",{aResponse:aResponse},smalltalk.FileServer)})},
args: ["aResponse"],
source: "respondOKTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 200 options: #{'Content-Type' -> 'text/plain'. 'Access-Control-Allow-Origin' -> '*'};\x0a\x09\x09end.",
messageSends: ["writeHead:options:", "->", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'starting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$8,$7,$6,$10,$9,$5,$11;
self._checkDirectoryLayout();
$1=_st(self["@http"])._createServer_((function(request,response){
return smalltalk.withContext(function($ctx2) {
return self._handleRequest_respondTo_(request,response);
}, function($ctx2) {$ctx2.fillBlock({request:request,response:response},$ctx1,1)})}));
_st($1)._on_do_("error",(function(error){
return smalltalk.withContext(function($ctx2) {
$2=console;
$3="Error starting server: ".__comma(error);
$ctx2.sendIdx[","]=1;
return _st($2)._log_($3);
$ctx2.sendIdx["log:"]=1;
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)})}));
$ctx1.sendIdx["on:do:"]=1;
_st($1)._on_do_("listening",(function(){
return smalltalk.withContext(function($ctx2) {
$4=console;
$8=self._host();
$ctx2.sendIdx["host"]=1;
$7="Starting file server on http://".__comma($8);
$6=_st($7).__comma(":");
$ctx2.sendIdx[","]=3;
$10=self._port();
$ctx2.sendIdx["port"]=1;
$9=_st($10)._asString();
$5=_st($6).__comma($9);
$ctx2.sendIdx[","]=2;
return _st($4)._log_($5);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$11=_st($1)._listen_host_(self._port(),self._host());
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.FileServer)})},
args: [],
source: "start\x0a\x09\x22Checks if required directory layout is present (issue warning if not).\x0a\x09 Afterwards start the server.\x22\x0a\x09self checkDirectoryLayout.\x0a\x09(http createServer: [:request :response |\x0a\x09      self handleRequest: request respondTo: response])\x0a\x09      on: 'error' do: [:error | console log: 'Error starting server: ', error];\x0a\x09      on: 'listening' do: [console log: 'Starting file server on http://', self host, ':', self port asString];\x0a\x09      listen: self port host: self host.",
messageSends: ["checkDirectoryLayout", "on:do:", "createServer:", "handleRequest:respondTo:", "log:", ",", "host", "asString", "port", "listen:host:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "startOn:",
category: 'starting',
fn: function (aPort){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._port_(aPort);
self._start();
return self}, function($ctx1) {$ctx1.fill(self,"startOn:",{aPort:aPort},smalltalk.FileServer)})},
args: ["aPort"],
source: "startOn: aPort\x0a\x09self port: aPort.\x0a\x09self start",
messageSends: ["port:", "start"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "username:",
category: 'accessing',
fn: function (aUsername){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@username"]=aUsername;
return self}, function($ctx1) {$ctx1.fill(self,"username:",{aUsername:aUsername},smalltalk.FileServer)})},
args: ["aUsername"],
source: "username: aUsername\x0a\x09username := aUsername.",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "writeData:toFileNamed:",
category: 'private',
fn: function (data,aFilename){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(aFilename);
return self}, function($ctx1) {$ctx1.fill(self,"writeData:toFileNamed:",{data:data,aFilename:aFilename},smalltalk.FileServer)})},
args: ["data", "aFilename"],
source: "writeData: data toFileNamed: aFilename\x0a\x09console log: aFilename",
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.FileServer);


smalltalk.FileServer.klass.iVarNames = ['mimeTypes'];
smalltalk.addMethod(
smalltalk.method({
selector: "commandLineSwitches",
category: 'accessing',
fn: function (){
var self=this;
var switches;
return smalltalk.withContext(function($ctx1) { 
var $1;
switches=_st(self._methodsInProtocol_("accessing"))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["collect:"]=1;
switches=_st(switches)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._match_("^[^:]*:$");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
switches=_st(switches)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(each)._allButLast())._replace_with_("([A-Z])","-$1"))._asLowercase())._replace_with_("^([a-z])","--$1");
$ctx2.sendIdx["replace:with:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$1=switches;
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandLineSwitches",{switches:switches},smalltalk.FileServer.klass)})},
args: [],
source: "commandLineSwitches\x0a\x09\x22Collect all methodnames from the 'accessing' protocol\x0a\x09 and select the ones with only one parameter.\x0a\x09 Then remove the ':' at the end of the name\x0a\x09 and add a '--' at the beginning.\x0a\x09 Additionally all uppercase letters are made lowercase and preceded by a '-'.\x0a\x09 Example: fallbackPage: becomes --fallback-page.\x0a\x09 Return the Array containing the commandline switches.\x22\x0a\x09| switches |\x0a\x09switches := ((self methodsInProtocol: 'accessing') collect: [ :each | each selector]).\x0a\x09switches := switches select: [ :each | each match: '^[^:]*:$'].\x0a\x09switches :=switches collect: [ :each |\x0a\x09\x09(each allButLast replace: '([A-Z])' with: '-$1') asLowercase replace: '^([a-z])' with: '--$1' ].\x0a\x09^switches",
messageSends: ["collect:", "methodsInProtocol:", "selector", "select:", "match:", "replace:with:", "asLowercase", "allButLast"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createServerWithArguments:",
category: 'initialization',
fn: function (options){
var self=this;
var server,popFront,front,optionName,optionValue,switches;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
var $early={};
try {
switches=self._commandLineSwitches();
server=self._new();
_st(options)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=server;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st(_st(options)._size())._even();
if(! smalltalk.assert($2)){
_st(console)._log_("Using default parameters.");
$ctx1.sendIdx["log:"]=1;
$3=console;
$4="Wrong commandline options or not enough arguments for: ".__comma(options);
$ctx1.sendIdx[","]=1;
_st($3)._log_($4);
$ctx1.sendIdx["log:"]=2;
$5=console;
$6="Use any of the following ones: ".__comma(switches);
$ctx1.sendIdx[","]=2;
_st($5)._log_($6);
$ctx1.sendIdx["log:"]=3;
$7=server;
return $7;
};
popFront=(function(args){
return smalltalk.withContext(function($ctx2) {
front=_st(args)._first();
front;
_st(args)._remove_(front);
return front;
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1,3)})});
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(options)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
optionName=_st(popFront)._value_(options);
$ctx2.sendIdx["value:"]=1;
optionName;
optionValue=_st(popFront)._value_(options);
optionValue;
$8=_st(switches)._includes_(optionName);
if(smalltalk.assert($8)){
optionName=self._selectorForCommandLineSwitch_(optionName);
optionName;
return _st(server)._perform_withArguments_(optionName,_st($Array())._with_(optionValue));
} else {
$9=console;
$10=_st(optionName).__comma(" is not a valid commandline option");
$ctx2.sendIdx[","]=3;
_st($9)._log_($10);
$ctx2.sendIdx["log:"]=4;
return _st(console)._log_("Use any of the following ones: ".__comma(switches));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$11=server;
return $11;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"createServerWithArguments:",{options:options,server:server,popFront:popFront,front:front,optionName:optionName,optionValue:optionValue,switches:switches},smalltalk.FileServer.klass)})},
args: ["options"],
source: "createServerWithArguments: options\x0a\x09\x22If options are empty return a default FileServer instance.\x0a\x09 If options are given loop through them and set the passed in values\x0a\x09 on the FileServer instance.\x0a\x09 \x0a\x09 Commanline options map directly to methods in the 'accessing' protocol\x0a\x09 taking one parameter.\x0a\x09 Adding a method to this protocol makes it directly settable through\x0a\x09 command line options.\x0a\x09 \x22\x0a\x09| server popFront front optionName optionValue switches |\x0a\x0a\x09switches := self commandLineSwitches.\x0a\x0a\x09server := self new.\x0a\x0a\x09options ifEmpty: [^server].\x0a\x0a\x09(options size even) ifFalse: [\x0a\x09\x09console log: 'Using default parameters.'.\x0a\x09\x09console log: 'Wrong commandline options or not enough arguments for: ' , options.\x0a\x09\x09console log: 'Use any of the following ones: ', switches.\x0a\x09\x09^server].\x0a\x0a\x09popFront := [:args |\x0a\x09\x09front := args first.\x0a\x09\x09args remove: front.\x0a\x09\x09front].\x0a\x0a\x09[options notEmpty] whileTrue: [\x0a\x09\x09optionName  := popFront value: options.\x0a\x09\x09optionValue := popFront value: options.\x0a\x0a\x09\x09(switches includes: optionName) ifTrue: [\x0a\x09\x09\x09optionName := self selectorForCommandLineSwitch: optionName.\x0a\x09\x09\x09server perform: optionName withArguments: (Array with: optionValue)]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09console log: optionName, ' is not a valid commandline option'.\x0a\x09\x09\x09\x09console log: 'Use any of the following ones: ', switches ]].\x0a\x09^server.",
messageSends: ["commandLineSwitches", "new", "ifEmpty:", "ifFalse:", "even", "size", "log:", ",", "first", "remove:", "whileTrue:", "notEmpty", "value:", "ifTrue:ifFalse:", "includes:", "selectorForCommandLineSwitch:", "perform:withArguments:", "with:"],
referencedClasses: ["Array"]
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHost",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "127.0.0.1";
}, function($ctx1) {$ctx1.fill(self,"defaultHost",{},smalltalk.FileServer.klass)})},
args: [],
source: "defaultHost\x0a\x09^'127.0.0.1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMimeTypes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62,$63,$64,$65,$66,$67,$68,$69,$70,$71,$72,$73,$74,$75,$76,$77,$78,$79,$80,$81,$82,$83,$84,$85,$86,$87,$88,$89,$90,$91,$92,$93,$94,$95,$96,$97,$98,$99,$100,$101,$102,$103,$104,$105,$106,$107,$108,$109,$110,$111,$112,$113,$114,$115,$116,$117,$118,$119,$120,$121,$122,$123,$124,$125,$126,$127,$128,$129,$130,$131,$132,$133,$134,$135,$136,$137,$138,$139,$140,$141,$142,$143,$144,$145,$146,$147,$148,$149,$150,$151,$152,$153,$154,$155,$156,$157,$158,$159,$160,$161,$162,$163,$164,$165,$166,$167,$168,$169,$170,$171,$172,$173,$174,$175,$176,$177,$178,$179,$180,$181,$182,$183,$184,$185,$186,$187,$188,$189,$190,$191,$192,$193,$194,$195,$196,$197,$198,$199,$200,$201,$202,$203,$204,$205,$206,$207,$208,$209,$210,$211,$212,$213,$214,$215,$216,$217,$218,$219,$220,$221,$222,$223,$224,$225,$226,$227,$228,$229,$230,$231,$232,$233,$234,$235,$236,$237,$238,$239,$240,$241,$242,$243,$244,$245,$246,$247,$248,$249,$250,$251,$252,$253,$254,$255,$256,$257,$258,$259,$260,$261,$262,$263,$264,$265,$266,$267,$268,$269,$270,$271,$272,$273,$274,$275,$276,$277,$278,$279,$280,$281,$282,$283,$284,$285,$286,$287,$288,$289,$290,$291,$292,$293,$294,$295,$296,$297,$298,$299,$300,$301,$302,$303,$304,$305,$306,$307,$308,$309,$310,$311,$312,$313,$314,$315,$316,$317,$318,$319,$320,$321,$322,$323,$324,$325,$326,$327,$328,$329,$330,$331,$332,$333,$334,$335,$336,$337,$338,$339,$340,$341,$342,$343,$344,$345,$346,$347,$348,$349,$350,$351,$352,$353,$354,$355,$356,$357,$358,$359,$360,$361,$362,$363,$364,$365,$366,$367,$368,$369,$370,$371,$372,$373,$374,$375,$376,$377,$378,$379,$380,$381,$382,$383,$384,$385,$386,$387,$388,$389,$390,$391,$392,$393,$394,$395,$396,$397,$398,$399,$400,$401,$402,$403,$404,$405,$406,$407,$408,$409,$1;
$2="%".__minus_gt("application/x-trash");
$ctx1.sendIdx["->"]=1;
$3="323".__minus_gt("text/h323");
$ctx1.sendIdx["->"]=2;
$4="abw".__minus_gt("application/x-abiword");
$ctx1.sendIdx["->"]=3;
$5="ai".__minus_gt("application/postscript");
$ctx1.sendIdx["->"]=4;
$6="aif".__minus_gt("audio/x-aiff");
$ctx1.sendIdx["->"]=5;
$7="aifc".__minus_gt("audio/x-aiff");
$ctx1.sendIdx["->"]=6;
$8="aiff".__minus_gt("audio/x-aiff");
$ctx1.sendIdx["->"]=7;
$9="alc".__minus_gt("chemical/x-alchemy");
$ctx1.sendIdx["->"]=8;
$10="art".__minus_gt("image/x-jg");
$ctx1.sendIdx["->"]=9;
$11="asc".__minus_gt("text/plain");
$ctx1.sendIdx["->"]=10;
$12="asf".__minus_gt("video/x-ms-asf");
$ctx1.sendIdx["->"]=11;
$13="asn".__minus_gt("chemical/x-ncbi-asn1-spec");
$ctx1.sendIdx["->"]=12;
$14="aso".__minus_gt("chemical/x-ncbi-asn1-binary");
$ctx1.sendIdx["->"]=13;
$15="asx".__minus_gt("video/x-ms-asf");
$ctx1.sendIdx["->"]=14;
$16="au".__minus_gt("audio/basic");
$ctx1.sendIdx["->"]=15;
$17="avi".__minus_gt("video/x-msvideo");
$ctx1.sendIdx["->"]=16;
$18="b".__minus_gt("chemical/x-molconn-Z");
$ctx1.sendIdx["->"]=17;
$19="bak".__minus_gt("application/x-trash");
$ctx1.sendIdx["->"]=18;
$20="bat".__minus_gt("application/x-msdos-program");
$ctx1.sendIdx["->"]=19;
$21="bcpio".__minus_gt("application/x-bcpio");
$ctx1.sendIdx["->"]=20;
$22="bib".__minus_gt("text/x-bibtex");
$ctx1.sendIdx["->"]=21;
$23="bin".__minus_gt("application/octet-stream");
$ctx1.sendIdx["->"]=22;
$24="bmp".__minus_gt("image/x-ms-bmp");
$ctx1.sendIdx["->"]=23;
$25="book".__minus_gt("application/x-maker");
$ctx1.sendIdx["->"]=24;
$26="bsd".__minus_gt("chemical/x-crossfire");
$ctx1.sendIdx["->"]=25;
$27="c".__minus_gt("text/x-csrc");
$ctx1.sendIdx["->"]=26;
$28="c++".__minus_gt("text/x-c++src");
$ctx1.sendIdx["->"]=27;
$29="c3d".__minus_gt("chemical/x-chem3d");
$ctx1.sendIdx["->"]=28;
$30="cac".__minus_gt("chemical/x-cache");
$ctx1.sendIdx["->"]=29;
$31="cache".__minus_gt("chemical/x-cache");
$ctx1.sendIdx["->"]=30;
$32="cascii".__minus_gt("chemical/x-cactvs-binary");
$ctx1.sendIdx["->"]=31;
$33="cat".__minus_gt("application/vnd.ms-pki.seccat");
$ctx1.sendIdx["->"]=32;
$34="cbin".__minus_gt("chemical/x-cactvs-binary");
$ctx1.sendIdx["->"]=33;
$35="cc".__minus_gt("text/x-c++src");
$ctx1.sendIdx["->"]=34;
$36="cdf".__minus_gt("application/x-cdf");
$ctx1.sendIdx["->"]=35;
$37="cdr".__minus_gt("image/x-coreldraw");
$ctx1.sendIdx["->"]=36;
$38="cdt".__minus_gt("image/x-coreldrawtemplate");
$ctx1.sendIdx["->"]=37;
$39="cdx".__minus_gt("chemical/x-cdx");
$ctx1.sendIdx["->"]=38;
$40="cdy".__minus_gt("application/vnd.cinderella");
$ctx1.sendIdx["->"]=39;
$41="cef".__minus_gt("chemical/x-cxf");
$ctx1.sendIdx["->"]=40;
$42="cer".__minus_gt("chemical/x-cerius");
$ctx1.sendIdx["->"]=41;
$43="chm".__minus_gt("chemical/x-chemdraw");
$ctx1.sendIdx["->"]=42;
$44="chrt".__minus_gt("application/x-kchart");
$ctx1.sendIdx["->"]=43;
$45="cif".__minus_gt("chemical/x-cif");
$ctx1.sendIdx["->"]=44;
$46="class".__minus_gt("application/java-vm");
$ctx1.sendIdx["->"]=45;
$47="cls".__minus_gt("text/x-tex");
$ctx1.sendIdx["->"]=46;
$48="cmdf".__minus_gt("chemical/x-cmdf");
$ctx1.sendIdx["->"]=47;
$49="cml".__minus_gt("chemical/x-cml");
$ctx1.sendIdx["->"]=48;
$50="cod".__minus_gt("application/vnd.rim.cod");
$ctx1.sendIdx["->"]=49;
$51="com".__minus_gt("application/x-msdos-program");
$ctx1.sendIdx["->"]=50;
$52="cpa".__minus_gt("chemical/x-compass");
$ctx1.sendIdx["->"]=51;
$53="cpio".__minus_gt("application/x-cpio");
$ctx1.sendIdx["->"]=52;
$54="cpp".__minus_gt("text/x-c++src");
$ctx1.sendIdx["->"]=53;
$55="cpt".__minus_gt("image/x-corelphotopaint");
$ctx1.sendIdx["->"]=54;
$56="crl".__minus_gt("application/x-pkcs7-crl");
$ctx1.sendIdx["->"]=55;
$57="crt".__minus_gt("application/x-x509-ca-cert");
$ctx1.sendIdx["->"]=56;
$58="csf".__minus_gt("chemical/x-cache-csf");
$ctx1.sendIdx["->"]=57;
$59="csh".__minus_gt("text/x-csh");
$ctx1.sendIdx["->"]=58;
$60="csm".__minus_gt("chemical/x-csml");
$ctx1.sendIdx["->"]=59;
$61="csml".__minus_gt("chemical/x-csml");
$ctx1.sendIdx["->"]=60;
$62="css".__minus_gt("text/css");
$ctx1.sendIdx["->"]=61;
$63="csv".__minus_gt("text/comma-separated-values");
$ctx1.sendIdx["->"]=62;
$64="ctab".__minus_gt("chemical/x-cactvs-binary");
$ctx1.sendIdx["->"]=63;
$65="ctx".__minus_gt("chemical/x-ctx");
$ctx1.sendIdx["->"]=64;
$66="cu".__minus_gt("application/cu-seeme");
$ctx1.sendIdx["->"]=65;
$67="cub".__minus_gt("chemical/x-gaussian-cube");
$ctx1.sendIdx["->"]=66;
$68="cxf".__minus_gt("chemical/x-cxf");
$ctx1.sendIdx["->"]=67;
$69="cxx".__minus_gt("text/x-c++src");
$ctx1.sendIdx["->"]=68;
$70="dat".__minus_gt("chemical/x-mopac-input");
$ctx1.sendIdx["->"]=69;
$71="dcr".__minus_gt("application/x-director");
$ctx1.sendIdx["->"]=70;
$72="deb".__minus_gt("application/x-debian-package");
$ctx1.sendIdx["->"]=71;
$73="dif".__minus_gt("video/dv");
$ctx1.sendIdx["->"]=72;
$74="diff".__minus_gt("text/plain");
$ctx1.sendIdx["->"]=73;
$75="dir".__minus_gt("application/x-director");
$ctx1.sendIdx["->"]=74;
$76="djv".__minus_gt("image/vnd.djvu");
$ctx1.sendIdx["->"]=75;
$77="djvu".__minus_gt("image/vnd.djvu");
$ctx1.sendIdx["->"]=76;
$78="dl".__minus_gt("video/dl");
$ctx1.sendIdx["->"]=77;
$79="dll".__minus_gt("application/x-msdos-program");
$ctx1.sendIdx["->"]=78;
$80="dmg".__minus_gt("application/x-apple-diskimage");
$ctx1.sendIdx["->"]=79;
$81="dms".__minus_gt("application/x-dms");
$ctx1.sendIdx["->"]=80;
$82="doc".__minus_gt("application/msword");
$ctx1.sendIdx["->"]=81;
$83="dot".__minus_gt("application/msword");
$ctx1.sendIdx["->"]=82;
$84="dv".__minus_gt("video/dv");
$ctx1.sendIdx["->"]=83;
$85="dvi".__minus_gt("application/x-dvi");
$ctx1.sendIdx["->"]=84;
$86="dx".__minus_gt("chemical/x-jcamp-dx");
$ctx1.sendIdx["->"]=85;
$87="dxr".__minus_gt("application/x-director");
$ctx1.sendIdx["->"]=86;
$88="emb".__minus_gt("chemical/x-embl-dl-nucleotide");
$ctx1.sendIdx["->"]=87;
$89="embl".__minus_gt("chemical/x-embl-dl-nucleotide");
$ctx1.sendIdx["->"]=88;
$90="ent".__minus_gt("chemical/x-pdb");
$ctx1.sendIdx["->"]=89;
$91="eps".__minus_gt("application/postscript");
$ctx1.sendIdx["->"]=90;
$92="etx".__minus_gt("text/x-setext");
$ctx1.sendIdx["->"]=91;
$93="exe".__minus_gt("application/x-msdos-program");
$ctx1.sendIdx["->"]=92;
$94="ez".__minus_gt("application/andrew-inset");
$ctx1.sendIdx["->"]=93;
$95="fb".__minus_gt("application/x-maker");
$ctx1.sendIdx["->"]=94;
$96="fbdoc".__minus_gt("application/x-maker");
$ctx1.sendIdx["->"]=95;
$97="fch".__minus_gt("chemical/x-gaussian-checkpoint");
$ctx1.sendIdx["->"]=96;
$98="fchk".__minus_gt("chemical/x-gaussian-checkpoint");
$ctx1.sendIdx["->"]=97;
$99="fig".__minus_gt("application/x-xfig");
$ctx1.sendIdx["->"]=98;
$100="flac".__minus_gt("application/x-flac");
$ctx1.sendIdx["->"]=99;
$101="fli".__minus_gt("video/fli");
$ctx1.sendIdx["->"]=100;
$102="fm".__minus_gt("application/x-maker");
$ctx1.sendIdx["->"]=101;
$103="frame".__minus_gt("application/x-maker");
$ctx1.sendIdx["->"]=102;
$104="frm".__minus_gt("application/x-maker");
$ctx1.sendIdx["->"]=103;
$105="gal".__minus_gt("chemical/x-gaussian-log");
$ctx1.sendIdx["->"]=104;
$106="gam".__minus_gt("chemical/x-gamess-input");
$ctx1.sendIdx["->"]=105;
$107="gamin".__minus_gt("chemical/x-gamess-input");
$ctx1.sendIdx["->"]=106;
$108="gau".__minus_gt("chemical/x-gaussian-input");
$ctx1.sendIdx["->"]=107;
$109="gcd".__minus_gt("text/x-pcs-gcd");
$ctx1.sendIdx["->"]=108;
$110="gcf".__minus_gt("application/x-graphing-calculator");
$ctx1.sendIdx["->"]=109;
$111="gcg".__minus_gt("chemical/x-gcg8-sequence");
$ctx1.sendIdx["->"]=110;
$112="gen".__minus_gt("chemical/x-genbank");
$ctx1.sendIdx["->"]=111;
$113="gf".__minus_gt("application/x-tex-gf");
$ctx1.sendIdx["->"]=112;
$114="gif".__minus_gt("image/gif");
$ctx1.sendIdx["->"]=113;
$115="gjc".__minus_gt("chemical/x-gaussian-input");
$ctx1.sendIdx["->"]=114;
$116="gjf".__minus_gt("chemical/x-gaussian-input");
$ctx1.sendIdx["->"]=115;
$117="gl".__minus_gt("video/gl");
$ctx1.sendIdx["->"]=116;
$118="gnumeric".__minus_gt("application/x-gnumeric");
$ctx1.sendIdx["->"]=117;
$119="gpt".__minus_gt("chemical/x-mopac-graph");
$ctx1.sendIdx["->"]=118;
$120="gsf".__minus_gt("application/x-font");
$ctx1.sendIdx["->"]=119;
$121="gsm".__minus_gt("audio/x-gsm");
$ctx1.sendIdx["->"]=120;
$122="gtar".__minus_gt("application/x-gtar");
$ctx1.sendIdx["->"]=121;
$123="h".__minus_gt("text/x-chdr");
$ctx1.sendIdx["->"]=122;
$124="h++".__minus_gt("text/x-c++hdr");
$ctx1.sendIdx["->"]=123;
$125="hdf".__minus_gt("application/x-hdf");
$ctx1.sendIdx["->"]=124;
$126="hh".__minus_gt("text/x-c++hdr");
$ctx1.sendIdx["->"]=125;
$127="hin".__minus_gt("chemical/x-hin");
$ctx1.sendIdx["->"]=126;
$128="hpp".__minus_gt("text/x-c++hdr");
$ctx1.sendIdx["->"]=127;
$129="hqx".__minus_gt("application/mac-binhex40");
$ctx1.sendIdx["->"]=128;
$130="hs".__minus_gt("text/x-haskell");
$ctx1.sendIdx["->"]=129;
$131="hta".__minus_gt("application/hta");
$ctx1.sendIdx["->"]=130;
$132="htc".__minus_gt("text/x-component");
$ctx1.sendIdx["->"]=131;
$133="htm".__minus_gt("text/html");
$ctx1.sendIdx["->"]=132;
$134="html".__minus_gt("text/html");
$ctx1.sendIdx["->"]=133;
$135="hxx".__minus_gt("text/x-c++hdr");
$ctx1.sendIdx["->"]=134;
$136="ica".__minus_gt("application/x-ica");
$ctx1.sendIdx["->"]=135;
$137="ice".__minus_gt("x-conference/x-cooltalk");
$ctx1.sendIdx["->"]=136;
$138="ico".__minus_gt("image/x-icon");
$ctx1.sendIdx["->"]=137;
$139="ics".__minus_gt("text/calendar");
$ctx1.sendIdx["->"]=138;
$140="icz".__minus_gt("text/calendar");
$ctx1.sendIdx["->"]=139;
$141="ief".__minus_gt("image/ief");
$ctx1.sendIdx["->"]=140;
$142="iges".__minus_gt("model/iges");
$ctx1.sendIdx["->"]=141;
$143="igs".__minus_gt("model/iges");
$ctx1.sendIdx["->"]=142;
$144="iii".__minus_gt("application/x-iphone");
$ctx1.sendIdx["->"]=143;
$145="inp".__minus_gt("chemical/x-gamess-input");
$ctx1.sendIdx["->"]=144;
$146="ins".__minus_gt("application/x-internet-signup");
$ctx1.sendIdx["->"]=145;
$147="iso".__minus_gt("application/x-iso9660-image");
$ctx1.sendIdx["->"]=146;
$148="isp".__minus_gt("application/x-internet-signup");
$ctx1.sendIdx["->"]=147;
$149="ist".__minus_gt("chemical/x-isostar");
$ctx1.sendIdx["->"]=148;
$150="istr".__minus_gt("chemical/x-isostar");
$ctx1.sendIdx["->"]=149;
$151="jad".__minus_gt("text/vnd.sun.j2me.app-descriptor");
$ctx1.sendIdx["->"]=150;
$152="jar".__minus_gt("application/java-archive");
$ctx1.sendIdx["->"]=151;
$153="java".__minus_gt("text/x-java");
$ctx1.sendIdx["->"]=152;
$154="jdx".__minus_gt("chemical/x-jcamp-dx");
$ctx1.sendIdx["->"]=153;
$155="jmz".__minus_gt("application/x-jmol");
$ctx1.sendIdx["->"]=154;
$156="jng".__minus_gt("image/x-jng");
$ctx1.sendIdx["->"]=155;
$157="jnlp".__minus_gt("application/x-java-jnlp-file");
$ctx1.sendIdx["->"]=156;
$158="jpe".__minus_gt("image/jpeg");
$ctx1.sendIdx["->"]=157;
$159="jpeg".__minus_gt("image/jpeg");
$ctx1.sendIdx["->"]=158;
$160="jpg".__minus_gt("image/jpeg");
$ctx1.sendIdx["->"]=159;
$161="js".__minus_gt("application/javascript");
$ctx1.sendIdx["->"]=160;
$162="kar".__minus_gt("audio/midi");
$ctx1.sendIdx["->"]=161;
$163="key".__minus_gt("application/pgp-keys");
$ctx1.sendIdx["->"]=162;
$164="kil".__minus_gt("application/x-killustrator");
$ctx1.sendIdx["->"]=163;
$165="kin".__minus_gt("chemical/x-kinemage");
$ctx1.sendIdx["->"]=164;
$166="kpr".__minus_gt("application/x-kpresenter");
$ctx1.sendIdx["->"]=165;
$167="kpt".__minus_gt("application/x-kpresenter");
$ctx1.sendIdx["->"]=166;
$168="ksp".__minus_gt("application/x-kspread");
$ctx1.sendIdx["->"]=167;
$169="kwd".__minus_gt("application/x-kword");
$ctx1.sendIdx["->"]=168;
$170="kwt".__minus_gt("application/x-kword");
$ctx1.sendIdx["->"]=169;
$171="latex".__minus_gt("application/x-latex");
$ctx1.sendIdx["->"]=170;
$172="lha".__minus_gt("application/x-lha");
$ctx1.sendIdx["->"]=171;
$173="lhs".__minus_gt("text/x-literate-haskell");
$ctx1.sendIdx["->"]=172;
$174="lsf".__minus_gt("video/x-la-asf");
$ctx1.sendIdx["->"]=173;
$175="lsx".__minus_gt("video/x-la-asf");
$ctx1.sendIdx["->"]=174;
$176="ltx".__minus_gt("text/x-tex");
$ctx1.sendIdx["->"]=175;
$177="lzh".__minus_gt("application/x-lzh");
$ctx1.sendIdx["->"]=176;
$178="lzx".__minus_gt("application/x-lzx");
$ctx1.sendIdx["->"]=177;
$179="m3u".__minus_gt("audio/x-mpegurl");
$ctx1.sendIdx["->"]=178;
$180="m4a".__minus_gt("audio/mpeg");
$ctx1.sendIdx["->"]=179;
$181="maker".__minus_gt("application/x-maker");
$ctx1.sendIdx["->"]=180;
$182="man".__minus_gt("application/x-troff-man");
$ctx1.sendIdx["->"]=181;
$183="mcif".__minus_gt("chemical/x-mmcif");
$ctx1.sendIdx["->"]=182;
$184="mcm".__minus_gt("chemical/x-macmolecule");
$ctx1.sendIdx["->"]=183;
$185="mdb".__minus_gt("application/msaccess");
$ctx1.sendIdx["->"]=184;
$186="me".__minus_gt("application/x-troff-me");
$ctx1.sendIdx["->"]=185;
$187="mesh".__minus_gt("model/mesh");
$ctx1.sendIdx["->"]=186;
$188="mid".__minus_gt("audio/midi");
$ctx1.sendIdx["->"]=187;
$189="midi".__minus_gt("audio/midi");
$ctx1.sendIdx["->"]=188;
$190="mif".__minus_gt("application/x-mif");
$ctx1.sendIdx["->"]=189;
$191="mm".__minus_gt("application/x-freemind");
$ctx1.sendIdx["->"]=190;
$192="mmd".__minus_gt("chemical/x-macromodel-input");
$ctx1.sendIdx["->"]=191;
$193="mmf".__minus_gt("application/vnd.smaf");
$ctx1.sendIdx["->"]=192;
$194="mml".__minus_gt("text/mathml");
$ctx1.sendIdx["->"]=193;
$195="mmod".__minus_gt("chemical/x-macromodel-input");
$ctx1.sendIdx["->"]=194;
$196="mng".__minus_gt("video/x-mng");
$ctx1.sendIdx["->"]=195;
$197="moc".__minus_gt("text/x-moc");
$ctx1.sendIdx["->"]=196;
$198="mol".__minus_gt("chemical/x-mdl-molfile");
$ctx1.sendIdx["->"]=197;
$199="mol2".__minus_gt("chemical/x-mol2");
$ctx1.sendIdx["->"]=198;
$200="moo".__minus_gt("chemical/x-mopac-out");
$ctx1.sendIdx["->"]=199;
$201="mop".__minus_gt("chemical/x-mopac-input");
$ctx1.sendIdx["->"]=200;
$202="mopcrt".__minus_gt("chemical/x-mopac-input");
$ctx1.sendIdx["->"]=201;
$203="mov".__minus_gt("video/quicktime");
$ctx1.sendIdx["->"]=202;
$204="movie".__minus_gt("video/x-sgi-movie");
$ctx1.sendIdx["->"]=203;
$205="mp2".__minus_gt("audio/mpeg");
$ctx1.sendIdx["->"]=204;
$206="mp3".__minus_gt("audio/mpeg");
$ctx1.sendIdx["->"]=205;
$207="mp4".__minus_gt("video/mp4");
$ctx1.sendIdx["->"]=206;
$208="mpc".__minus_gt("chemical/x-mopac-input");
$ctx1.sendIdx["->"]=207;
$209="mpe".__minus_gt("video/mpeg");
$ctx1.sendIdx["->"]=208;
$210="mpeg".__minus_gt("video/mpeg");
$ctx1.sendIdx["->"]=209;
$211="mpega".__minus_gt("audio/mpeg");
$ctx1.sendIdx["->"]=210;
$212="mpg".__minus_gt("video/mpeg");
$ctx1.sendIdx["->"]=211;
$213="mpga".__minus_gt("audio/mpeg");
$ctx1.sendIdx["->"]=212;
$214="ms".__minus_gt("application/x-troff-ms");
$ctx1.sendIdx["->"]=213;
$215="msh".__minus_gt("model/mesh");
$ctx1.sendIdx["->"]=214;
$216="msi".__minus_gt("application/x-msi");
$ctx1.sendIdx["->"]=215;
$217="mvb".__minus_gt("chemical/x-mopac-vib");
$ctx1.sendIdx["->"]=216;
$218="mxu".__minus_gt("video/vnd.mpegurl");
$ctx1.sendIdx["->"]=217;
$219="nb".__minus_gt("application/mathematica");
$ctx1.sendIdx["->"]=218;
$220="nc".__minus_gt("application/x-netcdf");
$ctx1.sendIdx["->"]=219;
$221="nwc".__minus_gt("application/x-nwc");
$ctx1.sendIdx["->"]=220;
$222="o".__minus_gt("application/x-object");
$ctx1.sendIdx["->"]=221;
$223="oda".__minus_gt("application/oda");
$ctx1.sendIdx["->"]=222;
$224="odb".__minus_gt("application/vnd.oasis.opendocument.database");
$ctx1.sendIdx["->"]=223;
$225="odc".__minus_gt("application/vnd.oasis.opendocument.chart");
$ctx1.sendIdx["->"]=224;
$226="odf".__minus_gt("application/vnd.oasis.opendocument.formula");
$ctx1.sendIdx["->"]=225;
$227="odg".__minus_gt("application/vnd.oasis.opendocument.graphics");
$ctx1.sendIdx["->"]=226;
$228="odi".__minus_gt("application/vnd.oasis.opendocument.image");
$ctx1.sendIdx["->"]=227;
$229="odm".__minus_gt("application/vnd.oasis.opendocument.text-master");
$ctx1.sendIdx["->"]=228;
$230="odp".__minus_gt("application/vnd.oasis.opendocument.presentation");
$ctx1.sendIdx["->"]=229;
$231="ods".__minus_gt("application/vnd.oasis.opendocument.spreadsheet");
$ctx1.sendIdx["->"]=230;
$232="odt".__minus_gt("application/vnd.oasis.opendocument.text");
$ctx1.sendIdx["->"]=231;
$233="ogg".__minus_gt("application/ogg");
$ctx1.sendIdx["->"]=232;
$234="old".__minus_gt("application/x-trash");
$ctx1.sendIdx["->"]=233;
$235="oth".__minus_gt("application/vnd.oasis.opendocument.text-web");
$ctx1.sendIdx["->"]=234;
$236="oza".__minus_gt("application/x-oz-application");
$ctx1.sendIdx["->"]=235;
$237="p".__minus_gt("text/x-pascal");
$ctx1.sendIdx["->"]=236;
$238="p7r".__minus_gt("application/x-pkcs7-certreqresp");
$ctx1.sendIdx["->"]=237;
$239="pac".__minus_gt("application/x-ns-proxy-autoconfig");
$ctx1.sendIdx["->"]=238;
$240="pas".__minus_gt("text/x-pascal");
$ctx1.sendIdx["->"]=239;
$241="pat".__minus_gt("image/x-coreldrawpattern");
$ctx1.sendIdx["->"]=240;
$242="pbm".__minus_gt("image/x-portable-bitmap");
$ctx1.sendIdx["->"]=241;
$243="pcf".__minus_gt("application/x-font");
$ctx1.sendIdx["->"]=242;
$244="pcf.Z".__minus_gt("application/x-font");
$ctx1.sendIdx["->"]=243;
$245="pcx".__minus_gt("image/pcx");
$ctx1.sendIdx["->"]=244;
$246="pdb".__minus_gt("chemical/x-pdb");
$ctx1.sendIdx["->"]=245;
$247="pdf".__minus_gt("application/pdf");
$ctx1.sendIdx["->"]=246;
$248="pfa".__minus_gt("application/x-font");
$ctx1.sendIdx["->"]=247;
$249="pfb".__minus_gt("application/x-font");
$ctx1.sendIdx["->"]=248;
$250="pgm".__minus_gt("image/x-portable-graymap");
$ctx1.sendIdx["->"]=249;
$251="pgn".__minus_gt("application/x-chess-pgn");
$ctx1.sendIdx["->"]=250;
$252="pgp".__minus_gt("application/pgp-signature");
$ctx1.sendIdx["->"]=251;
$253="pk".__minus_gt("application/x-tex-pk");
$ctx1.sendIdx["->"]=252;
$254="pl".__minus_gt("text/x-perl");
$ctx1.sendIdx["->"]=253;
$255="pls".__minus_gt("audio/x-scpls");
$ctx1.sendIdx["->"]=254;
$256="pm".__minus_gt("text/x-perl");
$ctx1.sendIdx["->"]=255;
$257="png".__minus_gt("image/png");
$ctx1.sendIdx["->"]=256;
$258="pnm".__minus_gt("image/x-portable-anymap");
$ctx1.sendIdx["->"]=257;
$259="pot".__minus_gt("text/plain");
$ctx1.sendIdx["->"]=258;
$260="ppm".__minus_gt("image/x-portable-pixmap");
$ctx1.sendIdx["->"]=259;
$261="pps".__minus_gt("application/vnd.ms-powerpoint");
$ctx1.sendIdx["->"]=260;
$262="ppt".__minus_gt("application/vnd.ms-powerpoint");
$ctx1.sendIdx["->"]=261;
$263="prf".__minus_gt("application/pics-rules");
$ctx1.sendIdx["->"]=262;
$264="prt".__minus_gt("chemical/x-ncbi-asn1-ascii");
$ctx1.sendIdx["->"]=263;
$265="ps".__minus_gt("application/postscript");
$ctx1.sendIdx["->"]=264;
$266="psd".__minus_gt("image/x-photoshop");
$ctx1.sendIdx["->"]=265;
$267="psp".__minus_gt("text/x-psp");
$ctx1.sendIdx["->"]=266;
$268="py".__minus_gt("text/x-python");
$ctx1.sendIdx["->"]=267;
$269="pyc".__minus_gt("application/x-python-code");
$ctx1.sendIdx["->"]=268;
$270="pyo".__minus_gt("application/x-python-code");
$ctx1.sendIdx["->"]=269;
$271="qt".__minus_gt("video/quicktime");
$ctx1.sendIdx["->"]=270;
$272="qtl".__minus_gt("application/x-quicktimeplayer");
$ctx1.sendIdx["->"]=271;
$273="ra".__minus_gt("audio/x-realaudio");
$ctx1.sendIdx["->"]=272;
$274="ram".__minus_gt("audio/x-pn-realaudio");
$ctx1.sendIdx["->"]=273;
$275="rar".__minus_gt("application/rar");
$ctx1.sendIdx["->"]=274;
$276="ras".__minus_gt("image/x-cmu-raster");
$ctx1.sendIdx["->"]=275;
$277="rd".__minus_gt("chemical/x-mdl-rdfile");
$ctx1.sendIdx["->"]=276;
$278="rdf".__minus_gt("application/rdf+xml");
$ctx1.sendIdx["->"]=277;
$279="rgb".__minus_gt("image/x-rgb");
$ctx1.sendIdx["->"]=278;
$280="rm".__minus_gt("audio/x-pn-realaudio");
$ctx1.sendIdx["->"]=279;
$281="roff".__minus_gt("application/x-troff");
$ctx1.sendIdx["->"]=280;
$282="ros".__minus_gt("chemical/x-rosdal");
$ctx1.sendIdx["->"]=281;
$283="rpm".__minus_gt("application/x-redhat-package-manager");
$ctx1.sendIdx["->"]=282;
$284="rss".__minus_gt("application/rss+xml");
$ctx1.sendIdx["->"]=283;
$285="rtf".__minus_gt("text/rtf");
$ctx1.sendIdx["->"]=284;
$286="rtx".__minus_gt("text/richtext");
$ctx1.sendIdx["->"]=285;
$287="rxn".__minus_gt("chemical/x-mdl-rxnfile");
$ctx1.sendIdx["->"]=286;
$288="sct".__minus_gt("text/scriptlet");
$ctx1.sendIdx["->"]=287;
$289="sd".__minus_gt("chemical/x-mdl-sdfile");
$ctx1.sendIdx["->"]=288;
$290="sd2".__minus_gt("audio/x-sd2");
$ctx1.sendIdx["->"]=289;
$291="sda".__minus_gt("application/vnd.stardivision.draw");
$ctx1.sendIdx["->"]=290;
$292="sdc".__minus_gt("application/vnd.stardivision.calc");
$ctx1.sendIdx["->"]=291;
$293="sdd".__minus_gt("application/vnd.stardivision.impress");
$ctx1.sendIdx["->"]=292;
$294="sdf".__minus_gt("chemical/x-mdl-sdfile");
$ctx1.sendIdx["->"]=293;
$295="sdp".__minus_gt("application/vnd.stardivision.impress");
$ctx1.sendIdx["->"]=294;
$296="sdw".__minus_gt("application/vnd.stardivision.writer");
$ctx1.sendIdx["->"]=295;
$297="ser".__minus_gt("application/java-serialized-object");
$ctx1.sendIdx["->"]=296;
$298="sgf".__minus_gt("application/x-go-sgf");
$ctx1.sendIdx["->"]=297;
$299="sgl".__minus_gt("application/vnd.stardivision.writer-global");
$ctx1.sendIdx["->"]=298;
$300="sh".__minus_gt("text/x-sh");
$ctx1.sendIdx["->"]=299;
$301="shar".__minus_gt("application/x-shar");
$ctx1.sendIdx["->"]=300;
$302="shtml".__minus_gt("text/html");
$ctx1.sendIdx["->"]=301;
$303="sid".__minus_gt("audio/prs.sid");
$ctx1.sendIdx["->"]=302;
$304="sik".__minus_gt("application/x-trash");
$ctx1.sendIdx["->"]=303;
$305="silo".__minus_gt("model/mesh");
$ctx1.sendIdx["->"]=304;
$306="sis".__minus_gt("application/vnd.symbian.install");
$ctx1.sendIdx["->"]=305;
$307="sit".__minus_gt("application/x-stuffit");
$ctx1.sendIdx["->"]=306;
$308="skd".__minus_gt("application/x-koan");
$ctx1.sendIdx["->"]=307;
$309="skm".__minus_gt("application/x-koan");
$ctx1.sendIdx["->"]=308;
$310="skp".__minus_gt("application/x-koan");
$ctx1.sendIdx["->"]=309;
$311="skt".__minus_gt("application/x-koan");
$ctx1.sendIdx["->"]=310;
$312="smf".__minus_gt("application/vnd.stardivision.math");
$ctx1.sendIdx["->"]=311;
$313="smi".__minus_gt("application/smil");
$ctx1.sendIdx["->"]=312;
$314="smil".__minus_gt("application/smil");
$ctx1.sendIdx["->"]=313;
$315="snd".__minus_gt("audio/basic");
$ctx1.sendIdx["->"]=314;
$316="spc".__minus_gt("chemical/x-galactic-spc");
$ctx1.sendIdx["->"]=315;
$317="spl".__minus_gt("application/x-futuresplash");
$ctx1.sendIdx["->"]=316;
$318="src".__minus_gt("application/x-wais-source");
$ctx1.sendIdx["->"]=317;
$319="stc".__minus_gt("application/vnd.sun.xml.calc.template");
$ctx1.sendIdx["->"]=318;
$320="std".__minus_gt("application/vnd.sun.xml.draw.template");
$ctx1.sendIdx["->"]=319;
$321="sti".__minus_gt("application/vnd.sun.xml.impress.template");
$ctx1.sendIdx["->"]=320;
$322="stl".__minus_gt("application/vnd.ms-pki.stl");
$ctx1.sendIdx["->"]=321;
$323="stw".__minus_gt("application/vnd.sun.xml.writer.template");
$ctx1.sendIdx["->"]=322;
$324="sty".__minus_gt("text/x-tex");
$ctx1.sendIdx["->"]=323;
$325="sv4cpio".__minus_gt("application/x-sv4cpio");
$ctx1.sendIdx["->"]=324;
$326="sv4crc".__minus_gt("application/x-sv4crc");
$ctx1.sendIdx["->"]=325;
$327="svg".__minus_gt("image/svg+xml");
$ctx1.sendIdx["->"]=326;
$328="svgz".__minus_gt("image/svg+xml");
$ctx1.sendIdx["->"]=327;
$329="sw".__minus_gt("chemical/x-swissprot");
$ctx1.sendIdx["->"]=328;
$330="swf".__minus_gt("application/x-shockwave-flash");
$ctx1.sendIdx["->"]=329;
$331="swfl".__minus_gt("application/x-shockwave-flash");
$ctx1.sendIdx["->"]=330;
$332="sxc".__minus_gt("application/vnd.sun.xml.calc");
$ctx1.sendIdx["->"]=331;
$333="sxd".__minus_gt("application/vnd.sun.xml.draw");
$ctx1.sendIdx["->"]=332;
$334="sxg".__minus_gt("application/vnd.sun.xml.writer.global");
$ctx1.sendIdx["->"]=333;
$335="sxi".__minus_gt("application/vnd.sun.xml.impress");
$ctx1.sendIdx["->"]=334;
$336="sxm".__minus_gt("application/vnd.sun.xml.math");
$ctx1.sendIdx["->"]=335;
$337="sxw".__minus_gt("application/vnd.sun.xml.writer");
$ctx1.sendIdx["->"]=336;
$338="t".__minus_gt("application/x-troff");
$ctx1.sendIdx["->"]=337;
$339="tar".__minus_gt("application/x-tar");
$ctx1.sendIdx["->"]=338;
$340="taz".__minus_gt("application/x-gtar");
$ctx1.sendIdx["->"]=339;
$341="tcl".__minus_gt("text/x-tcl");
$ctx1.sendIdx["->"]=340;
$342="tex".__minus_gt("text/x-tex");
$ctx1.sendIdx["->"]=341;
$343="texi".__minus_gt("application/x-texinfo");
$ctx1.sendIdx["->"]=342;
$344="texinfo".__minus_gt("application/x-texinfo");
$ctx1.sendIdx["->"]=343;
$345="text".__minus_gt("text/plain");
$ctx1.sendIdx["->"]=344;
$346="tgf".__minus_gt("chemical/x-mdl-tgf");
$ctx1.sendIdx["->"]=345;
$347="tgz".__minus_gt("application/x-gtar");
$ctx1.sendIdx["->"]=346;
$348="tif".__minus_gt("image/tiff");
$ctx1.sendIdx["->"]=347;
$349="tiff".__minus_gt("image/tiff");
$ctx1.sendIdx["->"]=348;
$350="tk".__minus_gt("text/x-tcl");
$ctx1.sendIdx["->"]=349;
$351="tm".__minus_gt("text/texmacs");
$ctx1.sendIdx["->"]=350;
$352="torrent".__minus_gt("application/x-bittorrent");
$ctx1.sendIdx["->"]=351;
$353="tr".__minus_gt("application/x-troff");
$ctx1.sendIdx["->"]=352;
$354="ts".__minus_gt("text/texmacs");
$ctx1.sendIdx["->"]=353;
$355="tsp".__minus_gt("application/dsptype");
$ctx1.sendIdx["->"]=354;
$356="tsv".__minus_gt("text/tab-separated-values");
$ctx1.sendIdx["->"]=355;
$357="txt".__minus_gt("text/plain");
$ctx1.sendIdx["->"]=356;
$358="udeb".__minus_gt("application/x-debian-package");
$ctx1.sendIdx["->"]=357;
$359="uls".__minus_gt("text/iuls");
$ctx1.sendIdx["->"]=358;
$360="ustar".__minus_gt("application/x-ustar");
$ctx1.sendIdx["->"]=359;
$361="val".__minus_gt("chemical/x-ncbi-asn1-binary");
$ctx1.sendIdx["->"]=360;
$362="vcd".__minus_gt("application/x-cdlink");
$ctx1.sendIdx["->"]=361;
$363="vcf".__minus_gt("text/x-vcard");
$ctx1.sendIdx["->"]=362;
$364="vcs".__minus_gt("text/x-vcalendar");
$ctx1.sendIdx["->"]=363;
$365="vmd".__minus_gt("chemical/x-vmd");
$ctx1.sendIdx["->"]=364;
$366="vms".__minus_gt("chemical/x-vamas-iso14976");
$ctx1.sendIdx["->"]=365;
$367="vor".__minus_gt("application/vnd.stardivision.writer");
$ctx1.sendIdx["->"]=366;
$368="vrm".__minus_gt("x-world/x-vrml");
$ctx1.sendIdx["->"]=367;
$369="vrml".__minus_gt("x-world/x-vrml");
$ctx1.sendIdx["->"]=368;
$370="vsd".__minus_gt("application/vnd.visio");
$ctx1.sendIdx["->"]=369;
$371="wad".__minus_gt("application/x-doom");
$ctx1.sendIdx["->"]=370;
$372="wav".__minus_gt("audio/x-wav");
$ctx1.sendIdx["->"]=371;
$373="wax".__minus_gt("audio/x-ms-wax");
$ctx1.sendIdx["->"]=372;
$374="wbmp".__minus_gt("image/vnd.wap.wbmp");
$ctx1.sendIdx["->"]=373;
$375="wbxml".__minus_gt("application/vnd.wap.wbxml");
$ctx1.sendIdx["->"]=374;
$376="wk".__minus_gt("application/x-123");
$ctx1.sendIdx["->"]=375;
$377="wm".__minus_gt("video/x-ms-wm");
$ctx1.sendIdx["->"]=376;
$378="wma".__minus_gt("audio/x-ms-wma");
$ctx1.sendIdx["->"]=377;
$379="wmd".__minus_gt("application/x-ms-wmd");
$ctx1.sendIdx["->"]=378;
$380="wml".__minus_gt("text/vnd.wap.wml");
$ctx1.sendIdx["->"]=379;
$381="wmlc".__minus_gt("application/vnd.wap.wmlc");
$ctx1.sendIdx["->"]=380;
$382="wmls".__minus_gt("text/vnd.wap.wmlscript");
$ctx1.sendIdx["->"]=381;
$383="wmlsc".__minus_gt("application/vnd.wap.wmlscriptc");
$ctx1.sendIdx["->"]=382;
$384="wmv".__minus_gt("video/x-ms-wmv");
$ctx1.sendIdx["->"]=383;
$385="wmx".__minus_gt("video/x-ms-wmx");
$ctx1.sendIdx["->"]=384;
$386="wmz".__minus_gt("application/x-ms-wmz");
$ctx1.sendIdx["->"]=385;
$387="wp5".__minus_gt("application/wordperfect5.1");
$ctx1.sendIdx["->"]=386;
$388="wpd".__minus_gt("application/wordperfect");
$ctx1.sendIdx["->"]=387;
$389="wrl".__minus_gt("x-world/x-vrml");
$ctx1.sendIdx["->"]=388;
$390="wsc".__minus_gt("text/scriptlet");
$ctx1.sendIdx["->"]=389;
$391="wvx".__minus_gt("video/x-ms-wvx");
$ctx1.sendIdx["->"]=390;
$392="wz".__minus_gt("application/x-wingz");
$ctx1.sendIdx["->"]=391;
$393="xbm".__minus_gt("image/x-xbitmap");
$ctx1.sendIdx["->"]=392;
$394="xcf".__minus_gt("application/x-xcf");
$ctx1.sendIdx["->"]=393;
$395="xht".__minus_gt("application/xhtml+xml");
$ctx1.sendIdx["->"]=394;
$396="xhtml".__minus_gt("application/xhtml+xml");
$ctx1.sendIdx["->"]=395;
$397="xlb".__minus_gt("application/vnd.ms-excel");
$ctx1.sendIdx["->"]=396;
$398="xls".__minus_gt("application/vnd.ms-excel");
$ctx1.sendIdx["->"]=397;
$399="xlt".__minus_gt("application/vnd.ms-excel");
$ctx1.sendIdx["->"]=398;
$400="xml".__minus_gt("application/xml");
$ctx1.sendIdx["->"]=399;
$401="xpi".__minus_gt("application/x-xpinstall");
$ctx1.sendIdx["->"]=400;
$402="xpm".__minus_gt("image/x-xpixmap");
$ctx1.sendIdx["->"]=401;
$403="xsl".__minus_gt("application/xml");
$ctx1.sendIdx["->"]=402;
$404="xtel".__minus_gt("chemical/x-xtel");
$ctx1.sendIdx["->"]=403;
$405="xul".__minus_gt("application/vnd.mozilla.xul+xml");
$ctx1.sendIdx["->"]=404;
$406="xwd".__minus_gt("image/x-xwindowdump");
$ctx1.sendIdx["->"]=405;
$407="xyz".__minus_gt("chemical/x-xyz");
$ctx1.sendIdx["->"]=406;
$408="zip".__minus_gt("application/zip");
$ctx1.sendIdx["->"]=407;
$409="zmt".__minus_gt("chemical/x-mopac-input");
$ctx1.sendIdx["->"]=408;
$1=smalltalk.HashedCollection._from_([$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62,$63,$64,$65,$66,$67,$68,$69,$70,$71,$72,$73,$74,$75,$76,$77,$78,$79,$80,$81,$82,$83,$84,$85,$86,$87,$88,$89,$90,$91,$92,$93,$94,$95,$96,$97,$98,$99,$100,$101,$102,$103,$104,$105,$106,$107,$108,$109,$110,$111,$112,$113,$114,$115,$116,$117,$118,$119,$120,$121,$122,$123,$124,$125,$126,$127,$128,$129,$130,$131,$132,$133,$134,$135,$136,$137,$138,$139,$140,$141,$142,$143,$144,$145,$146,$147,$148,$149,$150,$151,$152,$153,$154,$155,$156,$157,$158,$159,$160,$161,$162,$163,$164,$165,$166,$167,$168,$169,$170,$171,$172,$173,$174,$175,$176,$177,$178,$179,$180,$181,$182,$183,$184,$185,$186,$187,$188,$189,$190,$191,$192,$193,$194,$195,$196,$197,$198,$199,$200,$201,$202,$203,$204,$205,$206,$207,$208,$209,$210,$211,$212,$213,$214,$215,$216,$217,$218,$219,$220,$221,$222,$223,$224,$225,$226,$227,$228,$229,$230,$231,$232,$233,$234,$235,$236,$237,$238,$239,$240,$241,$242,$243,$244,$245,$246,$247,$248,$249,$250,$251,$252,$253,$254,$255,$256,$257,$258,$259,$260,$261,$262,$263,$264,$265,$266,$267,$268,$269,$270,$271,$272,$273,$274,$275,$276,$277,$278,$279,$280,$281,$282,$283,$284,$285,$286,$287,$288,$289,$290,$291,$292,$293,$294,$295,$296,$297,$298,$299,$300,$301,$302,$303,$304,$305,$306,$307,$308,$309,$310,$311,$312,$313,$314,$315,$316,$317,$318,$319,$320,$321,$322,$323,$324,$325,$326,$327,$328,$329,$330,$331,$332,$333,$334,$335,$336,$337,$338,$339,$340,$341,$342,$343,$344,$345,$346,$347,$348,$349,$350,$351,$352,$353,$354,$355,$356,$357,$358,$359,$360,$361,$362,$363,$364,$365,$366,$367,$368,$369,$370,$371,$372,$373,$374,$375,$376,$377,$378,$379,$380,$381,$382,$383,$384,$385,$386,$387,$388,$389,$390,$391,$392,$393,$394,$395,$396,$397,$398,$399,$400,$401,$402,$403,$404,$405,$406,$407,$408,$409,"~".__minus_gt("application/x-trash")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultMimeTypes",{},smalltalk.FileServer.klass)})},
args: [],
source: "defaultMimeTypes\x0a\x09^ #{\x0a\x09\x09'%' -> 'application/x-trash'.\x0a\x09\x09'323' -> 'text/h323'.\x0a\x09\x09'abw' -> 'application/x-abiword'.\x0a\x09\x09'ai' -> 'application/postscript'.\x0a\x09\x09'aif' -> 'audio/x-aiff'.\x0a\x09\x09'aifc' -> 'audio/x-aiff'.\x0a\x09\x09'aiff' -> 'audio/x-aiff'.\x0a\x09\x09'alc' -> 'chemical/x-alchemy'.\x0a\x09\x09'art' -> 'image/x-jg'.\x0a\x09\x09'asc' -> 'text/plain'.\x0a\x09\x09'asf' -> 'video/x-ms-asf'.\x0a\x09\x09'asn' -> 'chemical/x-ncbi-asn1-spec'.\x0a\x09\x09'aso' -> 'chemical/x-ncbi-asn1-binary'.\x0a\x09\x09'asx' -> 'video/x-ms-asf'.\x0a\x09\x09'au' -> 'audio/basic'.\x0a\x09\x09'avi' -> 'video/x-msvideo'.\x0a\x09\x09'b' -> 'chemical/x-molconn-Z'.\x0a\x09\x09'bak' -> 'application/x-trash'.\x0a\x09\x09'bat' -> 'application/x-msdos-program'.\x0a\x09\x09'bcpio' -> 'application/x-bcpio'.\x0a\x09\x09'bib' -> 'text/x-bibtex'.\x0a\x09\x09'bin' -> 'application/octet-stream'.\x0a\x09\x09'bmp' -> 'image/x-ms-bmp'.\x0a\x09\x09'book' -> 'application/x-maker'.\x0a\x09\x09'bsd' -> 'chemical/x-crossfire'.\x0a\x09\x09'c' -> 'text/x-csrc'.\x0a\x09\x09'c++' -> 'text/x-c++src'.\x0a\x09\x09'c3d' -> 'chemical/x-chem3d'.\x0a\x09\x09'cac' -> 'chemical/x-cache'.\x0a\x09\x09'cache' -> 'chemical/x-cache'.\x0a\x09\x09'cascii' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'cat' -> 'application/vnd.ms-pki.seccat'.\x0a\x09\x09'cbin' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'cc' -> 'text/x-c++src'.\x0a\x09\x09'cdf' -> 'application/x-cdf'.\x0a\x09\x09'cdr' -> 'image/x-coreldraw'.\x0a\x09\x09'cdt' -> 'image/x-coreldrawtemplate'.\x0a\x09\x09'cdx' -> 'chemical/x-cdx'.\x0a\x09\x09'cdy' -> 'application/vnd.cinderella'.\x0a\x09\x09'cef' -> 'chemical/x-cxf'.\x0a\x09\x09'cer' -> 'chemical/x-cerius'.\x0a\x09\x09'chm' -> 'chemical/x-chemdraw'.\x0a\x09\x09'chrt' -> 'application/x-kchart'.\x0a\x09\x09'cif' -> 'chemical/x-cif'.\x0a\x09\x09'class' -> 'application/java-vm'.\x0a\x09\x09'cls' -> 'text/x-tex'.\x0a\x09\x09'cmdf' -> 'chemical/x-cmdf'.\x0a\x09\x09'cml' -> 'chemical/x-cml'.\x0a\x09\x09'cod' -> 'application/vnd.rim.cod'.\x0a\x09\x09'com' -> 'application/x-msdos-program'.\x0a\x09\x09'cpa' -> 'chemical/x-compass'.\x0a\x09\x09'cpio' -> 'application/x-cpio'.\x0a\x09\x09'cpp' -> 'text/x-c++src'.\x0a\x09\x09'cpt' -> 'image/x-corelphotopaint'.\x0a\x09\x09'crl' -> 'application/x-pkcs7-crl'.\x0a\x09\x09'crt' -> 'application/x-x509-ca-cert'.\x0a\x09\x09'csf' -> 'chemical/x-cache-csf'.\x0a\x09\x09'csh' -> 'text/x-csh'.\x0a\x09\x09'csm' -> 'chemical/x-csml'.\x0a\x09\x09'csml' -> 'chemical/x-csml'.\x0a\x09\x09'css' -> 'text/css'.\x0a\x09\x09'csv' -> 'text/comma-separated-values'.\x0a\x09\x09'ctab' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'ctx' -> 'chemical/x-ctx'.\x0a\x09\x09'cu' -> 'application/cu-seeme'.\x0a\x09\x09'cub' -> 'chemical/x-gaussian-cube'.\x0a\x09\x09'cxf' -> 'chemical/x-cxf'.\x0a\x09\x09'cxx' -> 'text/x-c++src'.\x0a\x09\x09'dat' -> 'chemical/x-mopac-input'.\x0a\x09\x09'dcr' -> 'application/x-director'.\x0a\x09\x09'deb' -> 'application/x-debian-package'.\x0a\x09\x09'dif' -> 'video/dv'.\x0a\x09\x09'diff' -> 'text/plain'.\x0a\x09\x09'dir' -> 'application/x-director'.\x0a\x09\x09'djv' -> 'image/vnd.djvu'.\x0a\x09\x09'djvu' -> 'image/vnd.djvu'.\x0a\x09\x09'dl' -> 'video/dl'.\x0a\x09\x09'dll' -> 'application/x-msdos-program'.\x0a\x09\x09'dmg' -> 'application/x-apple-diskimage'.\x0a\x09\x09'dms' -> 'application/x-dms'.\x0a\x09\x09'doc' -> 'application/msword'.\x0a\x09\x09'dot' -> 'application/msword'.\x0a\x09\x09'dv' -> 'video/dv'.\x0a\x09\x09'dvi' -> 'application/x-dvi'.\x0a\x09\x09'dx' -> 'chemical/x-jcamp-dx'.\x0a\x09\x09'dxr' -> 'application/x-director'.\x0a\x09\x09'emb' -> 'chemical/x-embl-dl-nucleotide'.\x0a\x09\x09'embl' -> 'chemical/x-embl-dl-nucleotide'.\x0a\x09\x09'ent' -> 'chemical/x-pdb'.\x0a\x09\x09'eps' -> 'application/postscript'.\x0a\x09\x09'etx' -> 'text/x-setext'.\x0a\x09\x09'exe' -> 'application/x-msdos-program'.\x0a\x09\x09'ez' -> 'application/andrew-inset'.\x0a\x09\x09'fb' -> 'application/x-maker'.\x0a\x09\x09'fbdoc' -> 'application/x-maker'.\x0a\x09\x09'fch' -> 'chemical/x-gaussian-checkpoint'.\x0a\x09\x09'fchk' -> 'chemical/x-gaussian-checkpoint'.\x0a\x09\x09'fig' -> 'application/x-xfig'.\x0a\x09\x09'flac' -> 'application/x-flac'.\x0a\x09\x09'fli' -> 'video/fli'.\x0a\x09\x09'fm' -> 'application/x-maker'.\x0a\x09\x09'frame' -> 'application/x-maker'.\x0a\x09\x09'frm' -> 'application/x-maker'.\x0a\x09\x09'gal' -> 'chemical/x-gaussian-log'.\x0a\x09\x09'gam' -> 'chemical/x-gamess-input'.\x0a\x09\x09'gamin' -> 'chemical/x-gamess-input'.\x0a\x09\x09'gau' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gcd' -> 'text/x-pcs-gcd'.\x0a\x09\x09'gcf' -> 'application/x-graphing-calculator'.\x0a\x09\x09'gcg' -> 'chemical/x-gcg8-sequence'.\x0a\x09\x09'gen' -> 'chemical/x-genbank'.\x0a\x09\x09'gf' -> 'application/x-tex-gf'.\x0a\x09\x09'gif' -> 'image/gif'.\x0a\x09\x09'gjc' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gjf' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gl' -> 'video/gl'.\x0a\x09\x09'gnumeric' -> 'application/x-gnumeric'.\x0a\x09\x09'gpt' -> 'chemical/x-mopac-graph'.\x0a\x09\x09'gsf' -> 'application/x-font'.\x0a\x09\x09'gsm' -> 'audio/x-gsm'.\x0a\x09\x09'gtar' -> 'application/x-gtar'.\x0a\x09\x09'h' -> 'text/x-chdr'.\x0a\x09\x09'h++' -> 'text/x-c++hdr'.\x0a\x09\x09'hdf' -> 'application/x-hdf'.\x0a\x09\x09'hh' -> 'text/x-c++hdr'.\x0a\x09\x09'hin' -> 'chemical/x-hin'.\x0a\x09\x09'hpp' -> 'text/x-c++hdr'.\x0a\x09\x09'hqx' -> 'application/mac-binhex40'.\x0a\x09\x09'hs' -> 'text/x-haskell'.\x0a\x09\x09'hta' -> 'application/hta'.\x0a\x09\x09'htc' -> 'text/x-component'.\x0a\x09\x09'htm' -> 'text/html'.\x0a\x09\x09'html' -> 'text/html'.\x0a\x09\x09'hxx' -> 'text/x-c++hdr'.\x0a\x09\x09'ica' -> 'application/x-ica'.\x0a\x09\x09'ice' -> 'x-conference/x-cooltalk'.\x0a\x09\x09'ico' -> 'image/x-icon'.\x0a\x09\x09'ics' -> 'text/calendar'.\x0a\x09\x09'icz' -> 'text/calendar'.\x0a\x09\x09'ief' -> 'image/ief'.\x0a\x09\x09'iges' -> 'model/iges'.\x0a\x09\x09'igs' -> 'model/iges'.\x0a\x09\x09'iii' -> 'application/x-iphone'.\x0a\x09\x09'inp' -> 'chemical/x-gamess-input'.\x0a\x09\x09'ins' -> 'application/x-internet-signup'.\x0a\x09\x09'iso' -> 'application/x-iso9660-image'.\x0a\x09\x09'isp' -> 'application/x-internet-signup'.\x0a\x09\x09'ist' -> 'chemical/x-isostar'.\x0a\x09\x09'istr' -> 'chemical/x-isostar'.\x0a\x09\x09'jad' -> 'text/vnd.sun.j2me.app-descriptor'.\x0a\x09\x09'jar' -> 'application/java-archive'.\x0a\x09\x09'java' -> 'text/x-java'.\x0a\x09\x09'jdx' -> 'chemical/x-jcamp-dx'.\x0a\x09\x09'jmz' -> 'application/x-jmol'.\x0a\x09\x09'jng' -> 'image/x-jng'.\x0a\x09\x09'jnlp' -> 'application/x-java-jnlp-file'.\x0a\x09\x09'jpe' -> 'image/jpeg'.\x0a\x09\x09'jpeg' -> 'image/jpeg'.\x0a\x09\x09'jpg' -> 'image/jpeg'.\x0a\x09\x09'js' -> 'application/javascript'.\x0a\x09\x09'kar' -> 'audio/midi'.\x0a\x09\x09'key' -> 'application/pgp-keys'.\x0a\x09\x09'kil' -> 'application/x-killustrator'.\x0a\x09\x09'kin' -> 'chemical/x-kinemage'.\x0a\x09\x09'kpr' -> 'application/x-kpresenter'.\x0a\x09\x09'kpt' -> 'application/x-kpresenter'.\x0a\x09\x09'ksp' -> 'application/x-kspread'.\x0a\x09\x09'kwd' -> 'application/x-kword'.\x0a\x09\x09'kwt' -> 'application/x-kword'.\x0a\x09\x09'latex' -> 'application/x-latex'.\x0a\x09\x09'lha' -> 'application/x-lha'.\x0a\x09\x09'lhs' -> 'text/x-literate-haskell'.\x0a\x09\x09'lsf' -> 'video/x-la-asf'.\x0a\x09\x09'lsx' -> 'video/x-la-asf'.\x0a\x09\x09'ltx' -> 'text/x-tex'.\x0a\x09\x09'lzh' -> 'application/x-lzh'.\x0a\x09\x09'lzx' -> 'application/x-lzx'.\x0a\x09\x09'm3u' -> 'audio/x-mpegurl'.\x0a\x09\x09'm4a' -> 'audio/mpeg'.\x0a\x09\x09'maker' -> 'application/x-maker'.\x0a\x09\x09'man' -> 'application/x-troff-man'.\x0a\x09\x09'mcif' -> 'chemical/x-mmcif'.\x0a\x09\x09'mcm' -> 'chemical/x-macmolecule'.\x0a\x09\x09'mdb' -> 'application/msaccess'.\x0a\x09\x09'me' -> 'application/x-troff-me'.\x0a\x09\x09'mesh' -> 'model/mesh'.\x0a\x09\x09'mid' -> 'audio/midi'.\x0a\x09\x09'midi' -> 'audio/midi'.\x0a\x09\x09'mif' -> 'application/x-mif'.\x0a\x09\x09'mm' -> 'application/x-freemind'.\x0a\x09\x09'mmd' -> 'chemical/x-macromodel-input'.\x0a\x09\x09'mmf' -> 'application/vnd.smaf'.\x0a\x09\x09'mml' -> 'text/mathml'.\x0a\x09\x09'mmod' -> 'chemical/x-macromodel-input'.\x0a\x09\x09'mng' -> 'video/x-mng'.\x0a\x09\x09'moc' -> 'text/x-moc'.\x0a\x09\x09'mol' -> 'chemical/x-mdl-molfile'.\x0a\x09\x09'mol2' -> 'chemical/x-mol2'.\x0a\x09\x09'moo' -> 'chemical/x-mopac-out'.\x0a\x09\x09'mop' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mopcrt' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mov' -> 'video/quicktime'.\x0a\x09\x09'movie' -> 'video/x-sgi-movie'.\x0a\x09\x09'mp2' -> 'audio/mpeg'.\x0a\x09\x09'mp3' -> 'audio/mpeg'.\x0a\x09\x09'mp4' -> 'video/mp4'.\x0a\x09\x09'mpc' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mpe' -> 'video/mpeg'.\x0a\x09\x09'mpeg' -> 'video/mpeg'.\x0a\x09\x09'mpega' -> 'audio/mpeg'.\x0a\x09\x09'mpg' -> 'video/mpeg'.\x0a\x09\x09'mpga' -> 'audio/mpeg'.\x0a\x09\x09'ms' -> 'application/x-troff-ms'.\x0a\x09\x09'msh' -> 'model/mesh'.\x0a\x09\x09'msi' -> 'application/x-msi'.\x0a\x09\x09'mvb' -> 'chemical/x-mopac-vib'.\x0a\x09\x09'mxu' -> 'video/vnd.mpegurl'.\x0a\x09\x09'nb' -> 'application/mathematica'.\x0a\x09\x09'nc' -> 'application/x-netcdf'.\x0a\x09\x09'nwc' -> 'application/x-nwc'.\x0a\x09\x09'o' -> 'application/x-object'.\x0a\x09\x09'oda' -> 'application/oda'.\x0a\x09\x09'odb' -> 'application/vnd.oasis.opendocument.database'.\x0a\x09\x09'odc' -> 'application/vnd.oasis.opendocument.chart'.\x0a\x09\x09'odf' -> 'application/vnd.oasis.opendocument.formula'.\x0a\x09\x09'odg' -> 'application/vnd.oasis.opendocument.graphics'.\x0a\x09\x09'odi' -> 'application/vnd.oasis.opendocument.image'.\x0a\x09\x09'odm' -> 'application/vnd.oasis.opendocument.text-master'.\x0a\x09\x09'odp' -> 'application/vnd.oasis.opendocument.presentation'.\x0a\x09\x09'ods' -> 'application/vnd.oasis.opendocument.spreadsheet'.\x0a\x09\x09'odt' -> 'application/vnd.oasis.opendocument.text'.\x0a\x09\x09'ogg' -> 'application/ogg'.\x0a\x09\x09'old' -> 'application/x-trash'.\x0a\x09\x09'oth' -> 'application/vnd.oasis.opendocument.text-web'.\x0a\x09\x09'oza' -> 'application/x-oz-application'.\x0a\x09\x09'p' -> 'text/x-pascal'.\x0a\x09\x09'p7r' -> 'application/x-pkcs7-certreqresp'.\x0a\x09\x09'pac' -> 'application/x-ns-proxy-autoconfig'.\x0a\x09\x09'pas' -> 'text/x-pascal'.\x0a\x09\x09'pat' -> 'image/x-coreldrawpattern'.\x0a\x09\x09'pbm' -> 'image/x-portable-bitmap'.\x0a\x09\x09'pcf' -> 'application/x-font'.\x0a\x09\x09'pcf.Z' -> 'application/x-font'.\x0a\x09\x09'pcx' -> 'image/pcx'.\x0a\x09\x09'pdb' -> 'chemical/x-pdb'.\x0a\x09\x09'pdf' -> 'application/pdf'.\x0a\x09\x09'pfa' -> 'application/x-font'.\x0a\x09\x09'pfb' -> 'application/x-font'.\x0a\x09\x09'pgm' -> 'image/x-portable-graymap'.\x0a\x09\x09'pgn' -> 'application/x-chess-pgn'.\x0a\x09\x09'pgp' -> 'application/pgp-signature'.\x0a\x09\x09'pk' -> 'application/x-tex-pk'.\x0a\x09\x09'pl' -> 'text/x-perl'.\x0a\x09\x09'pls' -> 'audio/x-scpls'.\x0a\x09\x09'pm' -> 'text/x-perl'.\x0a\x09\x09'png' -> 'image/png'.\x0a\x09\x09'pnm' -> 'image/x-portable-anymap'.\x0a\x09\x09'pot' -> 'text/plain'.\x0a\x09\x09'ppm' -> 'image/x-portable-pixmap'.\x0a\x09\x09'pps' -> 'application/vnd.ms-powerpoint'.\x0a\x09\x09'ppt' -> 'application/vnd.ms-powerpoint'.\x0a\x09\x09'prf' -> 'application/pics-rules'.\x0a\x09\x09'prt' -> 'chemical/x-ncbi-asn1-ascii'.\x0a\x09\x09'ps' -> 'application/postscript'.\x0a\x09\x09'psd' -> 'image/x-photoshop'.\x0a\x09\x09'psp' -> 'text/x-psp'.\x0a\x09\x09'py' -> 'text/x-python'.\x0a\x09\x09'pyc' -> 'application/x-python-code'.\x0a\x09\x09'pyo' -> 'application/x-python-code'.\x0a\x09\x09'qt' -> 'video/quicktime'.\x0a\x09\x09'qtl' -> 'application/x-quicktimeplayer'.\x0a\x09\x09'ra' -> 'audio/x-realaudio'.\x0a\x09\x09'ram' -> 'audio/x-pn-realaudio'.\x0a\x09\x09'rar' -> 'application/rar'.\x0a\x09\x09'ras' -> 'image/x-cmu-raster'.\x0a\x09\x09'rd' -> 'chemical/x-mdl-rdfile'.\x0a\x09\x09'rdf' -> 'application/rdf+xml'.\x0a\x09\x09'rgb' -> 'image/x-rgb'.\x0a\x09\x09'rm' -> 'audio/x-pn-realaudio'.\x0a\x09\x09'roff' -> 'application/x-troff'.\x0a\x09\x09'ros' -> 'chemical/x-rosdal'.\x0a\x09\x09'rpm' -> 'application/x-redhat-package-manager'.\x0a\x09\x09'rss' -> 'application/rss+xml'.\x0a\x09\x09'rtf' -> 'text/rtf'.\x0a\x09\x09'rtx' -> 'text/richtext'.\x0a\x09\x09'rxn' -> 'chemical/x-mdl-rxnfile'.\x0a\x09\x09'sct' -> 'text/scriptlet'.\x0a\x09\x09'sd' -> 'chemical/x-mdl-sdfile'.\x0a\x09\x09'sd2' -> 'audio/x-sd2'.\x0a\x09\x09'sda' -> 'application/vnd.stardivision.draw'.\x0a\x09\x09'sdc' -> 'application/vnd.stardivision.calc'.\x0a\x09\x09'sdd' -> 'application/vnd.stardivision.impress'.\x0a\x09\x09'sdf' -> 'chemical/x-mdl-sdfile'.\x0a\x09\x09'sdp' -> 'application/vnd.stardivision.impress'.\x0a\x09\x09'sdw' -> 'application/vnd.stardivision.writer'.\x0a\x09\x09'ser' -> 'application/java-serialized-object'.\x0a\x09\x09'sgf' -> 'application/x-go-sgf'.\x0a\x09\x09'sgl' -> 'application/vnd.stardivision.writer-global'.\x0a\x09\x09'sh' -> 'text/x-sh'.\x0a\x09\x09'shar' -> 'application/x-shar'.\x0a\x09\x09'shtml' -> 'text/html'.\x0a\x09\x09'sid' -> 'audio/prs.sid'.\x0a\x09\x09'sik' -> 'application/x-trash'.\x0a\x09\x09'silo' -> 'model/mesh'.\x0a\x09\x09'sis' -> 'application/vnd.symbian.install'.\x0a\x09\x09'sit' -> 'application/x-stuffit'.\x0a\x09\x09'skd' -> 'application/x-koan'.\x0a\x09\x09'skm' -> 'application/x-koan'.\x0a\x09\x09'skp' -> 'application/x-koan'.\x0a\x09\x09'skt' -> 'application/x-koan'.\x0a\x09\x09'smf' -> 'application/vnd.stardivision.math'.\x0a\x09\x09'smi' -> 'application/smil'.\x0a\x09\x09'smil' -> 'application/smil'.\x0a\x09\x09'snd' -> 'audio/basic'.\x0a\x09\x09'spc' -> 'chemical/x-galactic-spc'.\x0a\x09\x09'spl' -> 'application/x-futuresplash'.\x0a\x09\x09'src' -> 'application/x-wais-source'.\x0a\x09\x09'stc' -> 'application/vnd.sun.xml.calc.template'.\x0a\x09\x09'std' -> 'application/vnd.sun.xml.draw.template'.\x0a\x09\x09'sti' -> 'application/vnd.sun.xml.impress.template'.\x0a\x09\x09'stl' -> 'application/vnd.ms-pki.stl'.\x0a\x09\x09'stw' -> 'application/vnd.sun.xml.writer.template'.\x0a\x09\x09'sty' -> 'text/x-tex'.\x0a\x09\x09'sv4cpio' -> 'application/x-sv4cpio'.\x0a\x09\x09'sv4crc' -> 'application/x-sv4crc'.\x0a\x09\x09'svg' -> 'image/svg+xml'.\x0a\x09\x09'svgz' -> 'image/svg+xml'.\x0a\x09\x09'sw' -> 'chemical/x-swissprot'.\x0a\x09\x09'swf' -> 'application/x-shockwave-flash'.\x0a\x09\x09'swfl' -> 'application/x-shockwave-flash'.\x0a\x09\x09'sxc' -> 'application/vnd.sun.xml.calc'.\x0a\x09\x09'sxd' -> 'application/vnd.sun.xml.draw'.\x0a\x09\x09'sxg' -> 'application/vnd.sun.xml.writer.global'.\x0a\x09\x09'sxi' -> 'application/vnd.sun.xml.impress'.\x0a\x09\x09'sxm' -> 'application/vnd.sun.xml.math'.\x0a\x09\x09'sxw' -> 'application/vnd.sun.xml.writer'.\x0a\x09\x09't' -> 'application/x-troff'.\x0a\x09\x09'tar' -> 'application/x-tar'.\x0a\x09\x09'taz' -> 'application/x-gtar'.\x0a\x09\x09'tcl' -> 'text/x-tcl'.\x0a\x09\x09'tex' -> 'text/x-tex'.\x0a\x09\x09'texi' -> 'application/x-texinfo'.\x0a\x09\x09'texinfo' -> 'application/x-texinfo'.\x0a\x09\x09'text' -> 'text/plain'.\x0a\x09\x09'tgf' -> 'chemical/x-mdl-tgf'.\x0a\x09\x09'tgz' -> 'application/x-gtar'.\x0a\x09\x09'tif' -> 'image/tiff'.\x0a\x09\x09'tiff' -> 'image/tiff'.\x0a\x09\x09'tk' -> 'text/x-tcl'.\x0a\x09\x09'tm' -> 'text/texmacs'.\x0a\x09\x09'torrent' -> 'application/x-bittorrent'.\x0a\x09\x09'tr' -> 'application/x-troff'.\x0a\x09\x09'ts' -> 'text/texmacs'.\x0a\x09\x09'tsp' -> 'application/dsptype'.\x0a\x09\x09'tsv' -> 'text/tab-separated-values'.\x0a\x09\x09'txt' -> 'text/plain'.\x0a\x09\x09'udeb' -> 'application/x-debian-package'.\x0a\x09\x09'uls' -> 'text/iuls'.\x0a\x09\x09'ustar' -> 'application/x-ustar'.\x0a\x09\x09'val' -> 'chemical/x-ncbi-asn1-binary'.\x0a\x09\x09'vcd' -> 'application/x-cdlink'.\x0a\x09\x09'vcf' -> 'text/x-vcard'.\x0a\x09\x09'vcs' -> 'text/x-vcalendar'.\x0a\x09\x09'vmd' -> 'chemical/x-vmd'.\x0a\x09\x09'vms' -> 'chemical/x-vamas-iso14976'.\x0a\x09\x09'vor' -> 'application/vnd.stardivision.writer'.\x0a\x09\x09'vrm' -> 'x-world/x-vrml'.\x0a\x09\x09'vrml' -> 'x-world/x-vrml'.\x0a\x09\x09'vsd' -> 'application/vnd.visio'.\x0a\x09\x09'wad' -> 'application/x-doom'.\x0a\x09\x09'wav' -> 'audio/x-wav'.\x0a\x09\x09'wax' -> 'audio/x-ms-wax'.\x0a\x09\x09'wbmp' -> 'image/vnd.wap.wbmp'.\x0a\x09\x09'wbxml' -> 'application/vnd.wap.wbxml'.\x0a\x09\x09'wk' -> 'application/x-123'.\x0a\x09\x09'wm' -> 'video/x-ms-wm'.\x0a\x09\x09'wma' -> 'audio/x-ms-wma'.\x0a\x09\x09'wmd' -> 'application/x-ms-wmd'.\x0a\x09\x09'wml' -> 'text/vnd.wap.wml'.\x0a\x09\x09'wmlc' -> 'application/vnd.wap.wmlc'.\x0a\x09\x09'wmls' -> 'text/vnd.wap.wmlscript'.\x0a\x09\x09'wmlsc' -> 'application/vnd.wap.wmlscriptc'.\x0a\x09\x09'wmv' -> 'video/x-ms-wmv'.\x0a\x09\x09'wmx' -> 'video/x-ms-wmx'.\x0a\x09\x09'wmz' -> 'application/x-ms-wmz'.\x0a\x09\x09'wp5' -> 'application/wordperfect5.1'.\x0a\x09\x09'wpd' -> 'application/wordperfect'.\x0a\x09\x09'wrl' -> 'x-world/x-vrml'.\x0a\x09\x09'wsc' -> 'text/scriptlet'.\x0a\x09\x09'wvx' -> 'video/x-ms-wvx'.\x0a\x09\x09'wz' -> 'application/x-wingz'.\x0a\x09\x09'xbm' -> 'image/x-xbitmap'.\x0a\x09\x09'xcf' -> 'application/x-xcf'.\x0a\x09\x09'xht' -> 'application/xhtml+xml'.\x0a\x09\x09'xhtml' -> 'application/xhtml+xml'.\x0a\x09\x09'xlb' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xls' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xlt' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xml' -> 'application/xml'.\x0a\x09\x09'xpi' -> 'application/x-xpinstall'.\x0a\x09\x09'xpm' -> 'image/x-xpixmap'.\x0a\x09\x09'xsl' -> 'application/xml'.\x0a\x09\x09'xtel' -> 'chemical/x-xtel'.\x0a\x09\x09'xul' -> 'application/vnd.mozilla.xul+xml'.\x0a\x09\x09'xwd' -> 'image/x-xwindowdump'.\x0a\x09\x09'xyz' -> 'chemical/x-xyz'.\x0a\x09\x09'zip' -> 'application/zip'.\x0a\x09\x09'zmt' -> 'chemical/x-mopac-input'.\x0a\x09\x09'~' -> 'application/x-trash'\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultPort",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (4000);
}, function($ctx1) {$ctx1.fill(self,"defaultPort",{},smalltalk.FileServer.klass)})},
args: [],
source: "defaultPort\x0a\x09^4000",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'initialization',
fn: function (){
var self=this;
var fileServer,args;
function $FileServer(){return smalltalk.FileServer||(typeof FileServer=="undefined"?nil:FileServer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
args=_st(process)._argv();
_st(args)._removeFrom_to_((1),(3));
_st(args)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each).__eq("--help");
if(smalltalk.assert($1)){
return _st($FileServer())._printHelp();
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
fileServer=_st($FileServer())._createServerWithArguments_(args);
fileServer;
$2=_st(fileServer)._start();
throw $early=[$2];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"main",{fileServer:fileServer,args:args},smalltalk.FileServer.klass)})},
args: [],
source: "main\x0a\x09\x22Main entry point for Amber applications.\x0a\x09 Creates and starts a FileServer instance.\x22\x0a\x09| fileServer args |\x0a\x09args := process argv.\x0a\x09\x22Remove the first args which contain the path to the node executable and the script file.\x22\x0a\x09args removeFrom: 1 to: 3.\x0a\x0a\x09args detect: [ :each |\x0a\x09\x09(each = '--help') ifTrue: [FileServer printHelp]]\x0a\x09ifNone: [\x0a\x09\x09fileServer := FileServer createServerWithArguments: args.\x0a\x09\x09^fileServer start]",
messageSends: ["argv", "removeFrom:to:", "detect:ifNone:", "ifTrue:", "=", "printHelp", "createServerWithArguments:", "start"],
referencedClasses: ["FileServer"]
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mimeTypeFor:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._mimeTypes())._at_ifAbsent_(_st(aString)._replace_with_(".*[\x5c.]",""),(function(){
return smalltalk.withContext(function($ctx2) {
return "text/plain";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"mimeTypeFor:",{aString:aString},smalltalk.FileServer.klass)})},
args: ["aString"],
source: "mimeTypeFor: aString\x0a\x09^self mimeTypes at: (aString replace: '.*[\x5c.]' with: '') ifAbsent: ['text/plain']",
messageSends: ["at:ifAbsent:", "mimeTypes", "replace:with:"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mimeTypes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@mimeTypes"];
if(($receiver = $2) == nil || $receiver == null){
self["@mimeTypes"]=self._defaultMimeTypes();
$1=self["@mimeTypes"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"mimeTypes",{},smalltalk.FileServer.klass)})},
args: [],
source: "mimeTypes\x0a\x09^mimeTypes ifNil: [mimeTypes := self defaultMimeTypes]",
messageSends: ["ifNil:", "defaultMimeTypes"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "printHelp",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_("Available commandline options are:");
$ctx1.sendIdx["log:"]=1;
_st(console)._log_("--help");
$ctx1.sendIdx["log:"]=2;
_st(self._commandLineSwitches())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_(_st(each).__comma(" <parameter>"));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"printHelp",{},smalltalk.FileServer.klass)})},
args: [],
source: "printHelp\x0a\x09console log: 'Available commandline options are:'.\x0a\x09console log: '--help'.\x0a\x09self commandLineSwitches do: [ :each |\x0a\x09\x09console log: each, ' <parameter>']",
messageSends: ["log:", "do:", "commandLineSwitches", ","],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorForCommandLineSwitch:",
category: 'accessing',
fn: function (aSwitch){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(aSwitch)._replace_with_("^--",""))._replace_with_("-[a-z]",(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._second())._asUppercase();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["replace:with:"]=1;
$1=_st($2).__comma(":");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorForCommandLineSwitch:",{aSwitch:aSwitch},smalltalk.FileServer.klass)})},
args: ["aSwitch"],
source: "selectorForCommandLineSwitch: aSwitch\x0a\x09\x22Remove the trailing '--', add ':' at the end\x0a\x09 and replace all occurences of a lowercase letter preceded by a '-' with\x0a\x09 the Uppercase letter.\x0a\x09 Example: --fallback-page becomes fallbackPage:\x22\x0a\x09^((aSwitch replace: '^--' with: '')\x0a\x09\x09replace: '-[a-z]' with: [ :each | each second asUppercase ]), ':'",
messageSends: [",", "replace:with:", "asUppercase", "second"],
referencedClasses: []
}),
smalltalk.FileServer.klass);


smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util', 'session', 'resultCount', 'commands'], 'AmberCli');
smalltalk.Repl.comment="I am a class representing a REPL (Read Evaluate Print Loop) and provide a command line interface to Amber Smalltalk.\x0aOn the prompt you can type Amber statements which will be evaluated after pressing <Enter>.\x0aThe evaluation is comparable with executing a 'DoIt' in a workspace.\x0a\x0aMy runtime requirement is a functional Node.js executable with working Readline support.";
smalltalk.addMethod(
smalltalk.method({
selector: "addVariableNamed:to:",
category: 'private',
fn: function (aString,anObject){
var self=this;
var newClass,newObject;
return smalltalk.withContext(function($ctx1) { 
var $1;
newClass=self._subclass_withVariable_(_st(anObject)._class(),aString);
self._encapsulateVariable_withValue_in_(aString,anObject,newClass);
newObject=_st(newClass)._new();
self._setPreviousVariablesFor_from_(newObject,anObject);
$1=newObject;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addVariableNamed:to:",{aString:aString,anObject:anObject,newClass:newClass,newObject:newObject},smalltalk.Repl)})},
args: ["aString", "anObject"],
source: "addVariableNamed: aString to: anObject\x0a\x09| newClass newObject |\x0a\x09newClass := self subclass: anObject class withVariable: aString.\x0a\x09self encapsulateVariable: aString withValue: anObject in: newClass.\x0a\x09newObject := newClass new.\x0a\x09self setPreviousVariablesFor: newObject from: anObject.\x0a\x09^ newObject",
messageSends: ["subclass:withVariable:", "class", "encapsulateVariable:withValue:in:", "new", "setPreviousVariablesFor:from:"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "assignNewVariable:do:",
category: 'private',
fn: function (buffer,aBlock){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1;
$1=self._parseAssignment_do_(buffer,(function(name,expr){
var varName,value;
return smalltalk.withContext(function($ctx2) {
if(($receiver = name) == nil || $receiver == null){
varName=self._nextResultName();
} else {
varName=name;
};
varName;
self["@session"]=self._addVariableNamed_to_(varName,self["@session"]);
self["@session"];
_st((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(varName).__comma(" := ");
if(($receiver = expr) == nil || $receiver == null){
$4=buffer;
} else {
$4=expr;
};
$2=_st($3).__comma($4);
$ctx3.sendIdx[","]=1;
value=self._eval_on_($2,self["@session"]);
return value;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}))._on_do_($Error(),(function(e){
return smalltalk.withContext(function($ctx3) {
_st(_st($ErrorHandler())._new())._logError_(e);
value=nil;
return value;
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2,5)})}));
return _st(aBlock)._value_value_(varName,value);
}, function($ctx2) {$ctx2.fillBlock({name:name,expr:expr,varName:varName,value:value},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignNewVariable:do:",{buffer:buffer,aBlock:aBlock},smalltalk.Repl)})},
args: ["buffer", "aBlock"],
source: "assignNewVariable: buffer do: aBlock\x0a\x09\x22Assigns a new variable and calls the given block with the variable's name and value\x0a\x09 if buffer contains an assignment expression. If it doesn't the block is called with nil for\x0a\x09 both arguments.\x22\x0a\x09^ self parseAssignment: buffer do: [ :name :expr || varName value |\x0a\x09\x09varName := name ifNil: [self nextResultName].\x0a\x09\x09session := self addVariableNamed: varName to: session.\x0a\x09\x09[ value := self eval: varName, ' := ', (expr ifNil: [buffer]) on: session ]\x0a\x09\x09\x09on: Error\x0a\x09\x09\x09do: [ :e | ErrorHandler new logError: e. value := nil].\x0a\x09\x09aBlock value: varName value: value]",
messageSends: ["parseAssignment:do:", "ifNil:", "nextResultName", "addVariableNamed:to:", "on:do:", "eval:on:", ",", "logError:", "new", "value:value:"],
referencedClasses: ["Error", "ErrorHandler"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "clearScreen",
category: 'actions',
fn: function (){
var self=this;
var esc,cls;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
esc=_st($String())._fromCharCode_((27));
$1=_st(_st(esc).__comma("[2J")).__comma(esc);
$ctx1.sendIdx[","]=2;
cls=_st($1).__comma("[0;0f");
$ctx1.sendIdx[","]=1;
_st(_st(process)._stdout())._write_(cls);
_st(self["@interface"])._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"clearScreen",{esc:esc,cls:cls},smalltalk.Repl)})},
args: [],
source: "clearScreen\x0a\x09| esc cls |\x0a\x09esc := String fromCharCode: 27.\x0a\x09cls := esc, '[2J', esc, '[0;0f'.\x0a\x09process stdout write: cls.\x0a\x09interface prompt",
messageSends: ["fromCharCode:", ",", "write:", "stdout", "prompt"],
referencedClasses: ["String"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(process)._stdin())._destroy();
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.Repl)})},
args: [],
source: "close\x0a\x09process stdin destroy",
messageSends: ["destroy", "stdin"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "commands",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@commands"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commands",{},smalltalk.Repl)})},
args: [],
source: "commands\x0a\x09^ commands",
messageSends: [],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "createInterface",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@interface"]=_st(self["@readline"])._createInterface_stdout_(_st(process)._stdin(),_st(process)._stdout());
_st(self["@interface"])._on_do_("line",(function(buffer){
return smalltalk.withContext(function($ctx2) {
return self._processLine_(buffer);
}, function($ctx2) {$ctx2.fillBlock({buffer:buffer},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(self["@interface"])._on_do_("close",(function(){
return smalltalk.withContext(function($ctx2) {
return self._close();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._printWelcome();
self._setupHotkeys();
$1=self._setPrompt();
_st(self["@interface"])._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"createInterface",{},smalltalk.Repl)})},
args: [],
source: "createInterface\x0a\x09interface := readline createInterface: process stdin stdout: process stdout.\x0a\x09interface on: 'line' do: [:buffer | self processLine: buffer].\x0a\x09interface on: 'close' do: [self close].\x0a\x09self printWelcome; setupHotkeys; setPrompt.\x0a\x09interface prompt",
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "processLine:", "close", "printWelcome", "setupHotkeys", "setPrompt", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "encapsulateVariable:withValue:in:",
category: 'private',
fn: function (aString,anObject,aClass){
var self=this;
var compiler;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$6;
compiler=_st($Compiler())._new();
$1=compiler;
$4=_st(aString).__comma(": anObject ^ ");
$ctx1.sendIdx[","]=3;
$3=_st($4).__comma(aString);
$ctx1.sendIdx[","]=2;
$2=_st($3).__comma(" := anObject");
$ctx1.sendIdx[","]=1;
_st($1)._install_forClass_category_($2,aClass,"session");
$ctx1.sendIdx["install:forClass:category:"]=1;
$5=compiler;
$6=_st(_st(aString).__comma(" ^ ")).__comma(aString);
$ctx1.sendIdx[","]=4;
_st($5)._install_forClass_category_($6,aClass,"session");
return self}, function($ctx1) {$ctx1.fill(self,"encapsulateVariable:withValue:in:",{aString:aString,anObject:anObject,aClass:aClass,compiler:compiler},smalltalk.Repl)})},
args: ["aString", "anObject", "aClass"],
source: "encapsulateVariable: aString withValue: anObject in: aClass\x0a\x09\x22Add getter and setter for given variable to session.\x22\x0a\x09| compiler |\x0a\x09compiler := Compiler new.\x0a\x09compiler install: aString, ': anObject ^ ', aString, ' := anObject' forClass: aClass category: 'session'.\x0a\x09compiler install: aString, ' ^ ', aString forClass: aClass category: 'session'.",
messageSends: ["new", "install:forClass:category:", ","],
referencedClasses: ["Compiler"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
category: 'actions',
fn: function (buffer){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._eval_on_(buffer,_st($DoIt())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"eval:",{buffer:buffer},smalltalk.Repl)})},
args: ["buffer"],
source: "eval: buffer\x0a\x09^ self eval: buffer on: DoIt new.",
messageSends: ["eval:on:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (buffer,anObject){
var self=this;
var result;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(buffer)._isEmpty();
if(! smalltalk.assert($1)){
self._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(_st($Compiler())._new())._evaluateExpression_on_(buffer,anObject);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),(function(e){
return smalltalk.withContext(function($ctx2) {
$2=_st(e)._isSmalltalkError();
if(smalltalk.assert($2)){
return _st(e)._resignal();
} else {
return _st(_st(process)._stdout())._write_(_st(e)._jsStack());
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,3)})}));
};
$3=result;
return $3;
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{buffer:buffer,anObject:anObject,result:result},smalltalk.Repl)})},
args: ["buffer", "anObject"],
source: "eval: buffer on: anObject\x0a\x09| result |\x0a\x09buffer isEmpty ifFalse: [\x0a\x09\x09self try: [\x0a\x09\x09\x09result := Compiler new evaluateExpression: buffer on: anObject]\x0a\x09\x09catch: [:e |\x0a\x09\x09\x09e isSmalltalkError\x0a\x09\x09\x09    ifTrue: [ e resignal ]\x0a\x09\x09\x09    ifFalse: [ process stdout write: e jsStack ]]].\x0a\x09^ result",
messageSends: ["ifFalse:", "isEmpty", "try:catch:", "evaluateExpression:on:", "new", "ifTrue:ifFalse:", "isSmalltalkError", "resignal", "write:", "stdout", "jsStack"],
referencedClasses: ["Compiler"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "executeCommand:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self._commands())._keysAndValuesDo_((function(names,cmd){
return smalltalk.withContext(function($ctx2) {
$1=_st(names)._includes_(aString);
if(smalltalk.assert($1)){
_st(cmd)._value();
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({names:names,cmd:cmd},$ctx1,1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"executeCommand:",{aString:aString},smalltalk.Repl)})},
args: ["aString"],
source: "executeCommand: aString\x0a\x09\x22Tries to process the given string as a command. Returns true if it was a command, false if not.\x22\x0a\x09self commands keysAndValuesDo: [:names :cmd |\x0a\x09\x09(names includes: aString) ifTrue: [\x0a\x09\x09\x09cmd value.\x0a\x09\x09\x09^ true]].\x0a\x09^ false",
messageSends: ["keysAndValuesDo:", "commands", "ifTrue:", "includes:", "value"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Repl.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@session"]=_st($DoIt())._new();
self["@readline"]=_st(require)._value_("readline");
$ctx1.sendIdx["value:"]=1;
self["@util"]=_st(require)._value_("util");
self._setupCommands();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Repl)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09session := DoIt new.\x0a\x09readline := require value: 'readline'.\x0a\x09util := require value: 'util'.\x0a\x09self setupCommands",
messageSends: ["initialize", "new", "value:", "setupCommands"],
referencedClasses: ["DoIt"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNamesFor:",
category: 'private',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(aClass)._superclass();
$ctx1.sendIdx["superclass"]=1;
if(($receiver = $2) == nil || $receiver == null){
$1=_st(aClass)._instanceVariableNames();
} else {
$3=_st(aClass)._instanceVariableNames();
$ctx1.sendIdx["instanceVariableNames"]=1;
$1=_st($3)._copyWithAll_(self._instanceVariableNamesFor_(_st(aClass)._superclass()));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNamesFor:",{aClass:aClass},smalltalk.Repl)})},
args: ["aClass"],
source: "instanceVariableNamesFor: aClass\x0a\x09\x22Yields all instance variable names for the given class, including inherited ones.\x22\x0a\x09^ aClass superclass\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09aClass instanceVariableNames copyWithAll: (self instanceVariableNamesFor: aClass superclass)]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09aClass instanceVariableNames]",
messageSends: ["ifNotNil:ifNil:", "superclass", "copyWithAll:", "instanceVariableNames", "instanceVariableNamesFor:"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "isIdentifier:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aString)._match_("^[a-z_]\x5cw*$"._asRegexp());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isIdentifier:",{aString:aString},smalltalk.Repl)})},
args: ["aString"],
source: "isIdentifier: aString\x0a\x09^ aString match: '^[a-z_]\x5cw*$' asRegexp",
messageSends: ["match:", "asRegexp"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariableDefined:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instanceVariableNamesFor_(_st(self["@session"])._class()))._includes_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVariableDefined:",{aString:aString},smalltalk.Repl)})},
args: ["aString"],
source: "isVariableDefined: aString\x0a\x09^ (self instanceVariableNamesFor: session class) includes: aString",
messageSends: ["includes:", "instanceVariableNamesFor:", "class"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "nextResultName",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@resultCount"];
if(($receiver = $1) == nil || $receiver == null){
self["@resultCount"]=(1);
} else {
self["@resultCount"]=_st(self["@resultCount"]).__plus((1));
};
$2="res".__comma(_st(self["@resultCount"])._asString());
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextResultName",{},smalltalk.Repl)})},
args: [],
source: "nextResultName\x0a\x09resultCount := resultCount\x0a    \x09ifNotNil: [resultCount + 1]\x0a    \x09ifNil: [1].\x0a    ^ 'res', resultCount asString",
messageSends: ["ifNotNil:ifNil:", "+", ",", "asString"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPress:",
category: 'private',
fn: function (key){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(key)._ctrl())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(key)._name()).__eq("l");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
self._clearScreen();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{key:key},smalltalk.Repl)})},
args: ["key"],
source: "onKeyPress: key\x0a\x09(key ctrl and: [key name = 'l'])\x0a\x09\x09ifTrue: [self clearScreen]",
messageSends: ["ifTrue:", "and:", "ctrl", "=", "name", "clearScreen"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "parseAssignment:do:",
category: 'private',
fn: function (aString,aBlock){
var self=this;
var assignment;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
assignment=_st(_st(aString)._tokenize_(":="))._collect_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._trimBoth();
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,1)})}));
$2=_st(_st(_st(assignment)._size()).__eq((2)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(assignment)._first();
$ctx2.sendIdx["first"]=1;
return self._isIdentifier_($3);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value_value_(_st(assignment)._first(),_st(assignment)._last());
$ctx1.sendIdx["value:value:"]=1;
} else {
$1=_st(aBlock)._value_value_(nil,nil);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseAssignment:do:",{aString:aString,aBlock:aBlock,assignment:assignment},smalltalk.Repl)})},
args: ["aString", "aBlock"],
source: "parseAssignment: aString do: aBlock\x0a\x09\x22Assigns a new variable if the given string is an assignment expression. Calls the given block with name and value.\x0a\x09 If the string is not one no variable will be assigned and the block will be called with nil for both arguments.\x22\x0a\x09| assignment |\x0a\x09assignment := (aString tokenize: ':=') collect: [:s | s trimBoth].\x0a\x09^ (assignment size = 2 and: [self isIdentifier: assignment first])\x0a\x09\x09ifTrue: [ aBlock value: assignment first value: assignment last ]\x0a\x09\x09ifFalse: [ aBlock value: nil value: nil ]",
messageSends: ["collect:", "tokenize:", "trimBoth", "ifTrue:ifFalse:", "and:", "=", "size", "isIdentifier:", "first", "value:value:", "last"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "presentResultNamed:withValue:",
category: 'private',
fn: function (varName,value){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4;
$3=_st(_st(varName).__comma(": ")).__comma(_st(_st(value)._class())._name());
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma(" = ");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(_st(value)._asString());
$ctx1.sendIdx[","]=1;
_st($Transcript())._show_($1);
$4=_st($Transcript())._cr();
_st(self["@interface"])._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"presentResultNamed:withValue:",{varName:varName,value:value},smalltalk.Repl)})},
args: ["varName", "value"],
source: "presentResultNamed: varName withValue: value\x0a\x09Transcript show: varName, ': ', value class name, ' = ', value asString; cr.\x0a\x09interface prompt",
messageSends: ["show:", ",", "name", "class", "asString", "cr", "prompt"],
referencedClasses: ["Transcript"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "printWelcome",
category: 'actions',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4;
$3=_st("Welcome to Amber version ".__comma(_st(_st($Smalltalk())._current())._version())).__comma(" (NodeJS ");
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma(_st(_st(process)._versions())._node());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(").");
$ctx1.sendIdx[","]=1;
_st($Transcript())._show_($1);
$ctx1.sendIdx["show:"]=1;
_st($Transcript())._show_("Type :q to exit.");
$4=_st($Transcript())._cr();
return self}, function($ctx1) {$ctx1.fill(self,"printWelcome",{},smalltalk.Repl)})},
args: [],
source: "printWelcome\x0a\x09Transcript show: 'Welcome to Amber version ', Smalltalk current version, ' (NodeJS ', process versions node, ').'.\x0a\x09Transcript show: 'Type :q to exit.'; cr.",
messageSends: ["show:", ",", "version", "current", "node", "versions", "cr"],
referencedClasses: ["Transcript", "Smalltalk"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "processLine:",
category: 'private',
fn: function (buffer){
var self=this;
var show;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
show=(function(varName,value){
return smalltalk.withContext(function($ctx2) {
return self._presentResultNamed_withValue_(varName,value);
}, function($ctx2) {$ctx2.fillBlock({varName:varName,value:value},$ctx1,1)})});
$1=self._executeCommand_(buffer);
if(! smalltalk.assert($1)){
$2=self._isVariableDefined_(buffer);
if(smalltalk.assert($2)){
_st(show)._value_value_(buffer,_st(self["@session"])._perform_(buffer));
} else {
self._assignNewVariable_do_(buffer,show);
};
};
return self}, function($ctx1) {$ctx1.fill(self,"processLine:",{buffer:buffer,show:show},smalltalk.Repl)})},
args: ["buffer"],
source: "processLine: buffer\x0a\x09\x22Processes lines entered through the readline interface.\x22\x0a\x09| show |\x0a\x09show := [:varName :value | self presentResultNamed: varName withValue: value].\x0a\x09(self executeCommand: buffer) ifFalse: [\x0a\x09\x09(self isVariableDefined: buffer)\x0a\x09\x09\x09ifTrue: [show value: buffer value: (session perform: buffer)]\x0a\x09\x09\x09ifFalse: [self assignNewVariable: buffer do: show]]",
messageSends: ["presentResultNamed:withValue:", "ifFalse:", "executeCommand:", "ifTrue:ifFalse:", "isVariableDefined:", "value:value:", "perform:", "assignNewVariable:do:"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "amber >> ";
}, function($ctx1) {$ctx1.fill(self,"prompt",{},smalltalk.Repl)})},
args: [],
source: "prompt\x0a\x09^'amber >> '",
messageSends: [],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "setPreviousVariablesFor:from:",
category: 'private',
fn: function (newObject,oldObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._instanceVariableNamesFor_(_st(oldObject)._class()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(newObject)._perform_withArguments_(_st(each).__comma(":"),[_st(oldObject)._perform_(each)]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setPreviousVariablesFor:from:",{newObject:newObject,oldObject:oldObject},smalltalk.Repl)})},
args: ["newObject", "oldObject"],
source: "setPreviousVariablesFor: newObject from: oldObject\x0a\x09(self instanceVariableNamesFor: oldObject class) do: [:each |\x0a\x09\x09newObject perform: each, ':' withArguments: {oldObject perform: each}].",
messageSends: ["do:", "instanceVariableNamesFor:", "class", "perform:withArguments:", ",", "perform:"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "setPrompt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interface"])._setPrompt_(self._prompt());
return self}, function($ctx1) {$ctx1.fill(self,"setPrompt",{},smalltalk.Repl)})},
args: [],
source: "setPrompt\x0a\x09interface setPrompt: self prompt",
messageSends: ["setPrompt:", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCommands",
category: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st([":q"]).__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(process)._exit();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["->"]=1;
$1=[$2,_st([""]).__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@interface"])._prompt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))];
self["@commands"]=_st($Dictionary())._from_($1);
return self}, function($ctx1) {$ctx1.fill(self,"setupCommands",{},smalltalk.Repl)})},
args: [],
source: "setupCommands\x0a\x09commands := Dictionary from: {\x0a\x09\x09{':q'} -> [process exit].\x0a\x09\x09{''} -> [interface prompt]}",
messageSends: ["from:", "->", "exit", "prompt"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "setupHotkeys",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(process)._stdin())._on_do_("keypress",(function(s,key){
return smalltalk.withContext(function($ctx2) {
if(($receiver = key) == nil || $receiver == null){
return key;
} else {
return self._onKeyPress_(key);
};
}, function($ctx2) {$ctx2.fillBlock({s:s,key:key},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupHotkeys",{},smalltalk.Repl)})},
args: [],
source: "setupHotkeys\x0a\x09process stdin on: 'keypress' do: [:s :key | key ifNotNil: [self onKeyPress: key]].",
messageSends: ["on:do:", "stdin", "ifNotNil:", "onKeyPress:"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:withVariable:",
category: 'private',
fn: function (aClass,varName){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._addSubclassOf_named_instanceVariableNames_package_(aClass,_st(self._subclassNameFor_(aClass))._asSymbol(),[varName],"Compiler-Core");
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:withVariable:",{aClass:aClass,varName:varName},smalltalk.Repl)})},
args: ["aClass", "varName"],
source: "subclass: aClass withVariable: varName\x0a\x09\x22Create subclass with new variable.\x22\x0a\x09^ ClassBuilder new\x0a\x09\x09addSubclassOf: aClass\x0a\x09\x09named: (self subclassNameFor: aClass) asSymbol\x0a\x09\x09instanceVariableNames: {varName}\x0a\x09\x09package: 'Compiler-Core'",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "new", "asSymbol", "subclassNameFor:"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "subclassNameFor:",
category: 'private',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$7,$6,$5,$4,$8,$1;
$3=_st(aClass)._name();
$ctx1.sendIdx["name"]=1;
$2=_st($3)._matchesOf_("\x5cd+$");
$ctx1.sendIdx["matchesOf:"]=1;
if(($receiver = $2) == nil || $receiver == null){
$1=_st(_st(aClass)._name()).__comma("2");
} else {
var counter;
$7=_st(aClass)._name();
$ctx1.sendIdx["name"]=2;
$6=_st($7)._matchesOf_("\x5cd+$");
$5=_st($6)._first();
$4=_st($5)._asNumber();
counter=_st($4).__plus((1));
counter;
$8=_st(aClass)._name();
$ctx1.sendIdx["name"]=3;
$1=_st($8)._replaceRegexp_with_("\x5cd+$"._asRegexp(),_st(counter)._asString());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclassNameFor:",{aClass:aClass},smalltalk.Repl)})},
args: ["aClass"],
source: "subclassNameFor: aClass\x0a\x09^ (aClass name matchesOf: '\x5cd+$')\x0a\x09\x09ifNotNil: [ | counter |\x0a\x09\x09\x09counter := (aClass name matchesOf: '\x5cd+$') first asNumber + 1.\x0a\x09\x09\x09aClass name replaceRegexp: '\x5cd+$' asRegexp with: counter asString]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09aClass name, '2'].",
messageSends: ["ifNotNil:ifNil:", "matchesOf:", "name", "+", "asNumber", "first", "replaceRegexp:with:", "asRegexp", "asString", ","],
referencedClasses: []
}),
smalltalk.Repl);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._createInterface();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.Repl.klass)})},
args: [],
source: "main\x0a\x09self new createInterface",
messageSends: ["createInterface", "new"],
referencedClasses: []
}),
smalltalk.Repl.klass);

});
