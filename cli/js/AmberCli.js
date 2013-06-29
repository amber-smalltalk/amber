smalltalk.addPackage('AmberCli');
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
switches=_st(switches)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._match_("^[^:]*:$");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
switches=_st(switches)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(each)._allButLast())._replace_with_("([A-Z])","-$1"))._asLowercase();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=switches;
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandLineSwitches",{switches:switches},smalltalk.AmberCli.klass)})},
args: [],
source: "commandLineSwitches\x0a\x09\x22Collect all methodnames from the 'commands' protocol of the class\x0a\x09 and select the ones with only one parameter.\x0a\x09 Then remove the ':' at the end of the name.\x0a\x09 Additionally all uppercase letters are made lowercase and preceded by a '-'.\x0a\x09 Example: fallbackPage: becomes --fallback-page.\x0a\x09 Return the Array containing the commandline switches.\x22\x0a\x09| switches |\x0a\x09switches := ((self class methodsInProtocol: 'commands') collect: [ :each | each selector]).\x0a\x09switches := switches select: [ :each | each match: '^[^:]*:$'].\x0a\x09switches :=switches collect: [ :each |\x0a\x09\x09(each allButLast replace: '([A-Z])' with: '-$1') asLowercase].\x0a\x09^switches",
messageSends: ["collect:", "selector", "methodsInProtocol:", "class", "select:", "match:", "asLowercase", "replace:with:", "allButLast"],
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
selector=self._selectorForCommandLineSwitch_(_st(args)._first());
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
_st(self._commandLineSwitches())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
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
var $1,$2,$3;
nodeMinorVersion=_st(_st(_st(_st(process)._version())._tokenize_("."))._second())._asNumber();
$1=_st(nodeMinorVersion).__lt((8));
if(smalltalk.assert($1)){
_st(console)._log_("You are currently using Node.js ".__comma(_st(process)._version()));
_st(console)._log_("Required is at least Node.js v0.8.x or greater.");
return (-1);
};
args=_st(process)._argv();
_st(args)._removeFrom_to_((1),(3));
$2=_st(args)._isEmpty();
if(smalltalk.assert($2)){
self._help_(nil);
} else {
$3=self._handleArguments_(args);
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"main",{args:args,nodeMinorVersion:nodeMinorVersion},smalltalk.AmberCli.klass)})},
args: [],
source: "main\x0a\x09\x22Main entry point for Amber applications.\x0a\x09Parses commandline arguments and starts the according subprogram.\x22\x0a\x09| args nodeMinorVersion |\x0a\x0a\x09nodeMinorVersion := ((process version) tokenize: '.') second asNumber.\x0a\x09nodeMinorVersion < 8 ifTrue: [\x0a\x09\x09console log: 'You are currently using Node.js ', (process version).\x0a\x09\x09console log: 'Required is at least Node.js v0.8.x or greater.'.\x0a\x09\x09^ -1.\x0a\x09].\x0a\x0a\x09args := process argv.\x0a\x09\x22Remove the first args which contain the path to the node executable and the script file.\x22\x0a\x09args removeFrom: 1 to: 3.\x0a\x09\x0a\x09(args isEmpty)\x0a\x09\x09ifTrue: [self help: nil]\x0a\x09\x09ifFalse: [^self handleArguments: args]",
messageSends: ["asNumber", "second", "tokenize:", "version", "ifTrue:", "log:", ",", "<", "argv", "removeFrom:to:", "ifTrue:ifFalse:", "help:", "handleArguments:", "isEmpty"],
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}))).__comma(":");
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
messageSends: ["ifTrue:ifFalse:", ",", "replace:with:", "asUppercase", "second", "includes:", "commandLineSwitches"],
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
if(($receiver = $2) == nil || $receiver == undefined){
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
var $1,$2,$3;
$1=_st(self["@fs"])._existsSync_(_st(self._basePath()).__comma("index.html"));
if(! smalltalk.assert($1)){
_st(console)._warn_("Warning: project directory does not contain index.html");
};
$2=_st(self["@fs"])._existsSync_(_st(self._basePath()).__comma("st"));
if(! smalltalk.assert($2)){
_st(console)._warn_("Warning: project directory is missing an \x22st\x22 directory");
};
$3=_st(self["@fs"])._existsSync_(_st(self._basePath()).__comma("js"));
if(! smalltalk.assert($3)){
_st(console)._warn_("Warning: project directory is missing a \x22js\x22 directory");
};
return self}, function($ctx1) {$ctx1.fill(self,"checkDirectoryLayout",{},smalltalk.FileServer)})},
args: [],
source: "checkDirectoryLayout\x0a\x09(fs existsSync: self basePath, 'index.html') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory does not contain index.html'].\x0a\x09(fs existsSync: self basePath, 'st') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory is missing an \x22st\x22 directory'].\x0a\x09(fs existsSync: self basePath, 'js') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory is missing a \x22js\x22 directory'].",
messageSends: ["ifFalse:", "warn:", "existsSync:", ",", "basePath"],
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
var $1;
uri=_st(_st(self["@url"])._parse_(_st(aRequest)._url()))._pathname();
filename=_st(self["@path"])._join_with_(self._basePath(),uri);
_st(self["@fs"])._exists_do_(filename,(function(aBoolean){
return smalltalk.withContext(function($ctx2) {
$1=aBoolean;
if(smalltalk.assert($1)){
return self._respondFileNamed_to_(filename,aResponse);
} else {
return self._respondNotFoundTo_(aResponse);
};
}, function($ctx2) {$ctx2.fillBlock({aBoolean:aBoolean},$ctx1)})}));
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
_st(aResponse)._writeHead_options_((200),smalltalk.HashedCollection._from_(["Access-Control-Allow-Origin".__minus_gt("*"),"Access-Control-Allow-Methods".__minus_gt("GET, PUT, POST, DELETE, OPTIONS"),"Access-Control-Allow-Headers".__minus_gt("Content-Type, Accept"),"Content-Length".__minus_gt((0)),"Access-Control-Max-Age".__minus_gt((10))]));
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
var $1,$2;
$1=self._isAuthenticated_(aRequest);
if(! smalltalk.assert($1)){
self._respondAuthenticationRequiredTo_(aResponse);
return nil;
};
file=".".__comma(_st(aRequest)._url());
stream=_st(self["@fs"])._createWriteStream_(file);
_st(stream)._on_do_("error",(function(error){
return smalltalk.withContext(function($ctx2) {
_st(console)._warn_("Error creating WriteStream for file ".__comma(file));
_st(console)._warn_("    Did you forget to create the necessary js/ or st/ directory in your project?");
_st(console)._warn_("    The exact error is: ".__comma(error));
return self._respondNotCreatedTo_(aResponse);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
_st(stream)._on_do_("close",(function(){
return smalltalk.withContext(function($ctx2) {
return self._respondCreatedTo_(aResponse);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aRequest)._setEncoding_("utf8");
_st(aRequest)._on_do_("data",(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._write_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
_st(aRequest)._on_do_("end",(function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(stream)._writable();
if(smalltalk.assert($2)){
return _st(stream)._end();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handlePUTRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse,file:file,stream:stream},smalltalk.FileServer)})},
args: ["aRequest", "aResponse"],
source: "handlePUTRequest: aRequest respondTo: aResponse\x0a\x09| file stream |\x0a\x09(self isAuthenticated: aRequest)\x0a\x09\x09ifFalse: [self respondAuthenticationRequiredTo: aResponse. ^nil].\x0a\x0a\x09file := '.', aRequest url.\x0a\x09stream := fs createWriteStream: file.\x0a\x0a\x09stream on: 'error' do: [:error |\x0a\x09\x09console warn: 'Error creating WriteStream for file ', file.\x0a\x09\x09console warn: '    Did you forget to create the necessary js/ or st/ directory in your project?'.\x0a\x09\x09console warn: '    The exact error is: ', error.\x0a\x09\x09self respondNotCreatedTo: aResponse].\x0a\x0a\x09stream on: 'close' do: [\x0a\x09\x09self respondCreatedTo: aResponse].\x0a\x0a\x09aRequest setEncoding: 'utf8'.\x0a\x09aRequest on: 'data' do: [:data |\x0a\x09\x09stream write: data].\x0a\x0a\x09aRequest on: 'end' do: [\x0a\x09\x09stream writable ifTrue: [stream end]]",
messageSends: ["ifFalse:", "respondAuthenticationRequiredTo:", "isAuthenticated:", ",", "url", "createWriteStream:", "on:do:", "warn:", "respondNotCreatedTo:", "respondCreatedTo:", "setEncoding:", "write:", "ifTrue:", "end", "writable"],
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
var $1,$2,$3;
$1=_st(_st(aRequest)._method()).__eq("PUT");
if(smalltalk.assert($1)){
self._handlePUTRequest_respondTo_(aRequest,aResponse);
};
$2=_st(_st(aRequest)._method()).__eq("GET");
if(smalltalk.assert($2)){
self._handleGETRequest_respondTo_(aRequest,aResponse);
};
$3=_st(_st(aRequest)._method()).__eq("OPTIONS");
if(smalltalk.assert($3)){
self._handleOPTIONSRequest_respondTo_(aRequest,aResponse);
};
return self}, function($ctx1) {$ctx1.fill(self,"handleRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse},smalltalk.FileServer)})},
args: ["aRequest", "aResponse"],
source: "handleRequest: aRequest respondTo: aResponse\x0a\x09aRequest method = 'PUT'\x0a\x09\x09ifTrue: [self handlePUTRequest: aRequest respondTo: aResponse].\x0a\x09aRequest method = 'GET'\x0a\x09\x09ifTrue:[self handleGETRequest: aRequest respondTo: aResponse].\x0a\x09aRequest method = 'OPTIONS'\x0a\x09\x09ifTrue:[self handleOPTIONSRequest: aRequest respondTo: aResponse]",
messageSends: ["ifTrue:", "handlePUTRequest:respondTo:", "=", "method", "handleGETRequest:respondTo:", "handleOPTIONSRequest:respondTo:"],
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
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@path"]=self._require_("path");
self["@http"]=self._require_("http");
self["@fs"]=self._require_("fs");
self["@util"]=self._require_("util");
self["@url"]=self._require_("url");
self["@host"]=_st(self._class())._defaultHost();
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
var $1,$2,$3,$4,$5;
$1=_st(_st(self["@username"])._isNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@password"])._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
return true;
};
$2=_st(_st(aRequest)._headers())._at_("authorization");
if(($receiver = $2) == nil || $receiver == undefined){
header="";
} else {
header=$2;
};
$3=_st(header)._isEmpty();
if(smalltalk.assert($3)){
return false;
} else {
$4=_st(header)._tokenize_(" ");
if(($receiver = $4) == nil || $receiver == undefined){
token="";
} else {
token=$4;
};
token;
auth=self._base64Decode_(_st(token)._at_((2)));
auth;
parts=_st(auth)._tokenize_(":");
parts;
$5=_st(_st(self["@username"]).__eq(_st(parts)._at_((1))))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@password"]).__eq(_st(parts)._at_((2)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($5)){
return true;
} else {
return false;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"isAuthenticated:",{aRequest:aRequest,header:header,token:token,auth:auth,parts:parts},smalltalk.FileServer)})},
args: ["aRequest"],
source: "isAuthenticated: aRequest\x0a\x09\x22Basic HTTP Auth: http://stackoverflow.com/a/5957629/293175\x0a\x09 and https://gist.github.com/1686663\x22\x0a\x09| header token auth parts|\x0a\x0a\x09(username isNil and: [password isNil]) ifTrue: [^true].\x0a\x0a\x09\x22get authentication header\x22\x0a\x09header := (aRequest headers at: 'authorization') ifNil:[''].\x0a\x09(header isEmpty)\x0a\x09ifTrue: [^false]\x0a\x09ifFalse: [\x0a\x09\x09\x22get authentication token\x22\x0a\x09\x09token := (header tokenize: ' ') ifNil:[''].\x0a\x09\x09\x22convert back from base64\x22\x0a\x09\x09auth := self base64Decode: (token at: 2).\x0a\x09\x09\x22split token at colon\x22\x0a\x09\x09parts := auth tokenize: ':'.\x0a\x0a\x09\x09((username = (parts at: 1)) and: [password = (parts at: 2)])\x0a\x09\x09\x09ifTrue: [^true]\x0a\x09\x09\x09ifFalse: [^false]\x0a\x09].",
messageSends: ["ifTrue:", "and:", "isNil", "ifNil:", "at:", "headers", "ifTrue:ifFalse:", "tokenize:", "base64Decode:", "=", "isEmpty"],
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
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((401),smalltalk.HashedCollection._from_(["WWW-Authenticate".__minus_gt("Basic realm=\x22Secured Developer Area\x22")]));
_st($1)._write_("<html><body>Authentication needed</body></html>");
$2=_st($1)._end();
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
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((201),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain"),"Access-Control-Allow-Origin".__minus_gt("*")]));
$2=_st($1)._end();
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
var $1,$2,$3,$4,$5;
filename=aFilename;
$1=_st(_st(self["@fs"])._statSync_(aFilename))._isDirectory();
if(smalltalk.assert($1)){
filename=_st(filename).__comma("index.html");
filename;
};
_st(self["@fs"])._readFile_do_(filename,(function(ex,file){
return smalltalk.withContext(function($ctx2) {
$2=_st(ex)._notNil();
if(smalltalk.assert($2)){
_st(console)._log_(_st(filename).__comma(" does not exist"));
return self._respondInternalErrorTo_(aResponse);
} else {
type=_st(self._class())._mimeTypeFor_(filename);
type;
$3=_st(type).__eq("application/javascript");
if(smalltalk.assert($3)){
type=_st(type).__comma(";charset=utf-8");
type;
};
$4=aResponse;
_st($4)._writeHead_options_((200),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt(type)]));
_st($4)._write_encoding_(file,"binary");
$5=_st($4)._end();
return $5;
};
}, function($ctx2) {$ctx2.fillBlock({ex:ex,file:file},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"respondFileNamed:to:",{aFilename:aFilename,aResponse:aResponse,type:type,filename:filename},smalltalk.FileServer)})},
args: ["aFilename", "aResponse"],
source: "respondFileNamed: aFilename to: aResponse\x0a\x09| type filename |\x0a\x0a\x09filename := aFilename.\x0a\x09(fs statSync: aFilename) isDirectory ifTrue: [\x0a\x09\x09filename := filename, 'index.html'].\x0a\x0a\x09fs readFile: filename do: [:ex :file |\x0a\x09\x09ex notNil \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09console log: filename, ' does not exist'.\x0a\x09\x09\x09\x09self respondInternalErrorTo: aResponse]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09type := self class mimeTypeFor: filename.\x0a\x09\x09\x09\x09type = 'application/javascript'\x0a\x09\x09\x09\x09\x09ifTrue: [ type:=type,';charset=utf-8' ].\x0a\x09\x09\x09\x09aResponse \x0a\x09\x09\x09\x09\x09writeHead: 200 options:  #{'Content-Type' -> type};\x0a\x09\x09\x09\x09\x09write: file encoding: 'binary';\x0a\x09\x09\x09\x09\x09end]]",
messageSends: ["ifTrue:", ",", "isDirectory", "statSync:", "readFile:do:", "ifTrue:ifFalse:", "log:", "respondInternalErrorTo:", "mimeTypeFor:", "class", "=", "writeHead:options:", "->", "write:encoding:", "end", "notNil"],
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
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((500),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain")]));
_st($1)._write_("500 Internal server error");
$2=_st($1)._end();
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
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((400),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain")]));
_st($1)._write_("File could not be created. Did you forget to create the st/js directories on the server?");
$2=_st($1)._end();
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
var $1,$2,$3,$4;
$1=_st(self._fallbackPage())._isNil();
if(! smalltalk.assert($1)){
$2=self._respondFileNamed_to_(self._fallbackPage(),aResponse);
return $2;
};
$3=aResponse;
_st($3)._writeHead_options_((404),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain")]));
_st($3)._write_("404 Not found");
$4=_st($3)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondNotFoundTo:",{aResponse:aResponse},smalltalk.FileServer)})},
args: ["aResponse"],
source: "respondNotFoundTo: aResponse\x0a\x09self fallbackPage isNil ifFalse: [^self respondFileNamed: self fallbackPage to: aResponse].\x0a\x09aResponse \x0a\x09\x09writeHead: 404 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: '404 Not found';\x0a\x09\x09end",
messageSends: ["ifFalse:", "respondFileNamed:to:", "fallbackPage", "isNil", "writeHead:options:", "->", "write:", "end"],
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
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((200),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain"),"Access-Control-Allow-Origin".__minus_gt("*")]));
$2=_st($1)._end();
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
var $1,$2;
self._checkDirectoryLayout();
$1=_st(self["@http"])._createServer_((function(request,response){
return smalltalk.withContext(function($ctx2) {
return self._handleRequest_respondTo_(request,response);
}, function($ctx2) {$ctx2.fillBlock({request:request,response:response},$ctx1)})}));
_st($1)._on_do_("error",(function(error){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_("Error starting server: ".__comma(error));
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
_st($1)._on_do_("listening",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_(_st(_st("Starting file server on http://".__comma(self._host())).__comma(":")).__comma(_st(self._port())._asString()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._listen_host_(self._port(),self._host());
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.FileServer)})},
args: [],
source: "start\x0a\x09\x22Checks if required directory layout is present (issue warning if not).\x0a\x09 Afterwards start the server.\x22\x0a\x09self checkDirectoryLayout.\x0a\x09(http createServer: [:request :response |\x0a\x09      self handleRequest: request respondTo: response])\x0a\x09      on: 'error' do: [:error | console log: 'Error starting server: ', error];\x0a\x09      on: 'listening' do: [console log: 'Starting file server on http://', self host, ':', self port asString];\x0a\x09      listen: self port host: self host.",
messageSends: ["checkDirectoryLayout", "on:do:", "log:", ",", "createServer:", "handleRequest:respondTo:", "asString", "port", "host", "listen:host:"],
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
switches=_st(switches)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._match_("^[^:]*:$");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
switches=_st(switches)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(each)._allButLast())._replace_with_("([A-Z])","-$1"))._asLowercase())._replace_with_("^([a-z])","--$1");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=switches;
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandLineSwitches",{switches:switches},smalltalk.FileServer.klass)})},
args: [],
source: "commandLineSwitches\x0a\x09\x22Collect all methodnames from the 'accessing' protocol\x0a\x09 and select the ones with only one parameter.\x0a\x09 Then remove the ':' at the end of the name\x0a\x09 and add a '--' at the beginning.\x0a\x09 Additionally all uppercase letters are made lowercase and preceded by a '-'.\x0a\x09 Example: fallbackPage: becomes --fallback-page.\x0a\x09 Return the Array containing the commandline switches.\x22\x0a\x09| switches |\x0a\x09switches := ((self methodsInProtocol: 'accessing') collect: [ :each | each selector]).\x0a\x09switches := switches select: [ :each | each match: '^[^:]*:$'].\x0a\x09switches :=switches collect: [ :each |\x0a\x09\x09(each allButLast replace: '([A-Z])' with: '-$1') asLowercase replace: '^([a-z])' with: '--$1' ].\x0a\x09^switches",
messageSends: ["collect:", "selector", "methodsInProtocol:", "select:", "match:", "replace:with:", "asLowercase", "allButLast"],
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
var $1,$2,$3,$4,$5;
var $early={};
try {
switches=self._commandLineSwitches();
server=self._new();
_st(options)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=server;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st(_st(options)._size())._even();
if(! smalltalk.assert($2)){
_st(console)._log_("Using default parameters.");
_st(console)._log_("Wrong commandline options or not enough arguments for: ".__comma(options));
_st(console)._log_("Use any of the following ones: ".__comma(switches));
$3=server;
return $3;
};
popFront=(function(args){
return smalltalk.withContext(function($ctx2) {
front=_st(args)._first();
front;
_st(args)._remove_(front);
return front;
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1)})});
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(options)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
optionName=_st(popFront)._value_(options);
optionName;
optionValue=_st(popFront)._value_(options);
optionValue;
$4=_st(switches)._includes_(optionName);
if(smalltalk.assert($4)){
optionName=self._selectorForCommandLineSwitch_(optionName);
optionName;
return _st(server)._perform_withArguments_(optionName,_st($Array())._with_(optionValue));
} else {
_st(console)._log_(_st(optionName).__comma(" is not a valid commandline option"));
return _st(console)._log_("Use any of the following ones: ".__comma(switches));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=server;
return $5;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"createServerWithArguments:",{options:options,server:server,popFront:popFront,front:front,optionName:optionName,optionValue:optionValue,switches:switches},smalltalk.FileServer.klass)})},
args: ["options"],
source: "createServerWithArguments: options\x0a\x09\x22If options are empty return a default FileServer instance.\x0a\x09 If options are given loop through them and set the passed in values\x0a\x09 on the FileServer instance.\x0a\x09 \x0a\x09 Commanline options map directly to methods in the 'accessing' protocol\x0a\x09 taking one parameter.\x0a\x09 Adding a method to this protocol makes it directly settable through\x0a\x09 command line options.\x0a\x09 \x22\x0a\x09| server popFront front optionName optionValue switches |\x0a\x0a\x09switches := self commandLineSwitches.\x0a\x0a\x09server := self new.\x0a\x0a\x09options ifEmpty: [^server].\x0a\x0a\x09(options size even) ifFalse: [\x0a\x09\x09console log: 'Using default parameters.'.\x0a\x09\x09console log: 'Wrong commandline options or not enough arguments for: ' , options.\x0a\x09\x09console log: 'Use any of the following ones: ', switches.\x0a\x09\x09^server].\x0a\x0a\x09popFront := [:args |\x0a\x09\x09front := args first.\x0a\x09\x09args remove: front.\x0a\x09\x09front].\x0a\x0a\x09[options notEmpty] whileTrue: [\x0a\x09\x09optionName  := popFront value: options.\x0a\x09\x09optionValue := popFront value: options.\x0a\x0a\x09\x09(switches includes: optionName) ifTrue: [\x0a\x09\x09\x09optionName := self selectorForCommandLineSwitch: optionName.\x0a\x09\x09\x09server perform: optionName withArguments: (Array with: optionValue)]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09console log: optionName, ' is not a valid commandline option'.\x0a\x09\x09\x09\x09console log: 'Use any of the following ones: ', switches ]].\x0a\x09^server.",
messageSends: ["commandLineSwitches", "new", "ifEmpty:", "ifFalse:", "log:", ",", "even", "size", "first", "remove:", "whileTrue:", "value:", "ifTrue:ifFalse:", "selectorForCommandLineSwitch:", "perform:withArguments:", "with:", "includes:", "notEmpty"],
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
var $1;
$1=smalltalk.HashedCollection._from_(["%".__minus_gt("application/x-trash"),"323".__minus_gt("text/h323"),"abw".__minus_gt("application/x-abiword"),"ai".__minus_gt("application/postscript"),"aif".__minus_gt("audio/x-aiff"),"aifc".__minus_gt("audio/x-aiff"),"aiff".__minus_gt("audio/x-aiff"),"alc".__minus_gt("chemical/x-alchemy"),"art".__minus_gt("image/x-jg"),"asc".__minus_gt("text/plain"),"asf".__minus_gt("video/x-ms-asf"),"asn".__minus_gt("chemical/x-ncbi-asn1-spec"),"aso".__minus_gt("chemical/x-ncbi-asn1-binary"),"asx".__minus_gt("video/x-ms-asf"),"au".__minus_gt("audio/basic"),"avi".__minus_gt("video/x-msvideo"),"b".__minus_gt("chemical/x-molconn-Z"),"bak".__minus_gt("application/x-trash"),"bat".__minus_gt("application/x-msdos-program"),"bcpio".__minus_gt("application/x-bcpio"),"bib".__minus_gt("text/x-bibtex"),"bin".__minus_gt("application/octet-stream"),"bmp".__minus_gt("image/x-ms-bmp"),"book".__minus_gt("application/x-maker"),"bsd".__minus_gt("chemical/x-crossfire"),"c".__minus_gt("text/x-csrc"),"c++".__minus_gt("text/x-c++src"),"c3d".__minus_gt("chemical/x-chem3d"),"cac".__minus_gt("chemical/x-cache"),"cache".__minus_gt("chemical/x-cache"),"cascii".__minus_gt("chemical/x-cactvs-binary"),"cat".__minus_gt("application/vnd.ms-pki.seccat"),"cbin".__minus_gt("chemical/x-cactvs-binary"),"cc".__minus_gt("text/x-c++src"),"cdf".__minus_gt("application/x-cdf"),"cdr".__minus_gt("image/x-coreldraw"),"cdt".__minus_gt("image/x-coreldrawtemplate"),"cdx".__minus_gt("chemical/x-cdx"),"cdy".__minus_gt("application/vnd.cinderella"),"cef".__minus_gt("chemical/x-cxf"),"cer".__minus_gt("chemical/x-cerius"),"chm".__minus_gt("chemical/x-chemdraw"),"chrt".__minus_gt("application/x-kchart"),"cif".__minus_gt("chemical/x-cif"),"class".__minus_gt("application/java-vm"),"cls".__minus_gt("text/x-tex"),"cmdf".__minus_gt("chemical/x-cmdf"),"cml".__minus_gt("chemical/x-cml"),"cod".__minus_gt("application/vnd.rim.cod"),"com".__minus_gt("application/x-msdos-program"),"cpa".__minus_gt("chemical/x-compass"),"cpio".__minus_gt("application/x-cpio"),"cpp".__minus_gt("text/x-c++src"),"cpt".__minus_gt("image/x-corelphotopaint"),"crl".__minus_gt("application/x-pkcs7-crl"),"crt".__minus_gt("application/x-x509-ca-cert"),"csf".__minus_gt("chemical/x-cache-csf"),"csh".__minus_gt("text/x-csh"),"csm".__minus_gt("chemical/x-csml"),"csml".__minus_gt("chemical/x-csml"),"css".__minus_gt("text/css"),"csv".__minus_gt("text/comma-separated-values"),"ctab".__minus_gt("chemical/x-cactvs-binary"),"ctx".__minus_gt("chemical/x-ctx"),"cu".__minus_gt("application/cu-seeme"),"cub".__minus_gt("chemical/x-gaussian-cube"),"cxf".__minus_gt("chemical/x-cxf"),"cxx".__minus_gt("text/x-c++src"),"dat".__minus_gt("chemical/x-mopac-input"),"dcr".__minus_gt("application/x-director"),"deb".__minus_gt("application/x-debian-package"),"dif".__minus_gt("video/dv"),"diff".__minus_gt("text/plain"),"dir".__minus_gt("application/x-director"),"djv".__minus_gt("image/vnd.djvu"),"djvu".__minus_gt("image/vnd.djvu"),"dl".__minus_gt("video/dl"),"dll".__minus_gt("application/x-msdos-program"),"dmg".__minus_gt("application/x-apple-diskimage"),"dms".__minus_gt("application/x-dms"),"doc".__minus_gt("application/msword"),"dot".__minus_gt("application/msword"),"dv".__minus_gt("video/dv"),"dvi".__minus_gt("application/x-dvi"),"dx".__minus_gt("chemical/x-jcamp-dx"),"dxr".__minus_gt("application/x-director"),"emb".__minus_gt("chemical/x-embl-dl-nucleotide"),"embl".__minus_gt("chemical/x-embl-dl-nucleotide"),"ent".__minus_gt("chemical/x-pdb"),"eps".__minus_gt("application/postscript"),"etx".__minus_gt("text/x-setext"),"exe".__minus_gt("application/x-msdos-program"),"ez".__minus_gt("application/andrew-inset"),"fb".__minus_gt("application/x-maker"),"fbdoc".__minus_gt("application/x-maker"),"fch".__minus_gt("chemical/x-gaussian-checkpoint"),"fchk".__minus_gt("chemical/x-gaussian-checkpoint"),"fig".__minus_gt("application/x-xfig"),"flac".__minus_gt("application/x-flac"),"fli".__minus_gt("video/fli"),"fm".__minus_gt("application/x-maker"),"frame".__minus_gt("application/x-maker"),"frm".__minus_gt("application/x-maker"),"gal".__minus_gt("chemical/x-gaussian-log"),"gam".__minus_gt("chemical/x-gamess-input"),"gamin".__minus_gt("chemical/x-gamess-input"),"gau".__minus_gt("chemical/x-gaussian-input"),"gcd".__minus_gt("text/x-pcs-gcd"),"gcf".__minus_gt("application/x-graphing-calculator"),"gcg".__minus_gt("chemical/x-gcg8-sequence"),"gen".__minus_gt("chemical/x-genbank"),"gf".__minus_gt("application/x-tex-gf"),"gif".__minus_gt("image/gif"),"gjc".__minus_gt("chemical/x-gaussian-input"),"gjf".__minus_gt("chemical/x-gaussian-input"),"gl".__minus_gt("video/gl"),"gnumeric".__minus_gt("application/x-gnumeric"),"gpt".__minus_gt("chemical/x-mopac-graph"),"gsf".__minus_gt("application/x-font"),"gsm".__minus_gt("audio/x-gsm"),"gtar".__minus_gt("application/x-gtar"),"h".__minus_gt("text/x-chdr"),"h++".__minus_gt("text/x-c++hdr"),"hdf".__minus_gt("application/x-hdf"),"hh".__minus_gt("text/x-c++hdr"),"hin".__minus_gt("chemical/x-hin"),"hpp".__minus_gt("text/x-c++hdr"),"hqx".__minus_gt("application/mac-binhex40"),"hs".__minus_gt("text/x-haskell"),"hta".__minus_gt("application/hta"),"htc".__minus_gt("text/x-component"),"htm".__minus_gt("text/html"),"html".__minus_gt("text/html"),"hxx".__minus_gt("text/x-c++hdr"),"ica".__minus_gt("application/x-ica"),"ice".__minus_gt("x-conference/x-cooltalk"),"ico".__minus_gt("image/x-icon"),"ics".__minus_gt("text/calendar"),"icz".__minus_gt("text/calendar"),"ief".__minus_gt("image/ief"),"iges".__minus_gt("model/iges"),"igs".__minus_gt("model/iges"),"iii".__minus_gt("application/x-iphone"),"inp".__minus_gt("chemical/x-gamess-input"),"ins".__minus_gt("application/x-internet-signup"),"iso".__minus_gt("application/x-iso9660-image"),"isp".__minus_gt("application/x-internet-signup"),"ist".__minus_gt("chemical/x-isostar"),"istr".__minus_gt("chemical/x-isostar"),"jad".__minus_gt("text/vnd.sun.j2me.app-descriptor"),"jar".__minus_gt("application/java-archive"),"java".__minus_gt("text/x-java"),"jdx".__minus_gt("chemical/x-jcamp-dx"),"jmz".__minus_gt("application/x-jmol"),"jng".__minus_gt("image/x-jng"),"jnlp".__minus_gt("application/x-java-jnlp-file"),"jpe".__minus_gt("image/jpeg"),"jpeg".__minus_gt("image/jpeg"),"jpg".__minus_gt("image/jpeg"),"js".__minus_gt("application/javascript"),"kar".__minus_gt("audio/midi"),"key".__minus_gt("application/pgp-keys"),"kil".__minus_gt("application/x-killustrator"),"kin".__minus_gt("chemical/x-kinemage"),"kpr".__minus_gt("application/x-kpresenter"),"kpt".__minus_gt("application/x-kpresenter"),"ksp".__minus_gt("application/x-kspread"),"kwd".__minus_gt("application/x-kword"),"kwt".__minus_gt("application/x-kword"),"latex".__minus_gt("application/x-latex"),"lha".__minus_gt("application/x-lha"),"lhs".__minus_gt("text/x-literate-haskell"),"lsf".__minus_gt("video/x-la-asf"),"lsx".__minus_gt("video/x-la-asf"),"ltx".__minus_gt("text/x-tex"),"lzh".__minus_gt("application/x-lzh"),"lzx".__minus_gt("application/x-lzx"),"m3u".__minus_gt("audio/x-mpegurl"),"m4a".__minus_gt("audio/mpeg"),"maker".__minus_gt("application/x-maker"),"man".__minus_gt("application/x-troff-man"),"mcif".__minus_gt("chemical/x-mmcif"),"mcm".__minus_gt("chemical/x-macmolecule"),"mdb".__minus_gt("application/msaccess"),"me".__minus_gt("application/x-troff-me"),"mesh".__minus_gt("model/mesh"),"mid".__minus_gt("audio/midi"),"midi".__minus_gt("audio/midi"),"mif".__minus_gt("application/x-mif"),"mm".__minus_gt("application/x-freemind"),"mmd".__minus_gt("chemical/x-macromodel-input"),"mmf".__minus_gt("application/vnd.smaf"),"mml".__minus_gt("text/mathml"),"mmod".__minus_gt("chemical/x-macromodel-input"),"mng".__minus_gt("video/x-mng"),"moc".__minus_gt("text/x-moc"),"mol".__minus_gt("chemical/x-mdl-molfile"),"mol2".__minus_gt("chemical/x-mol2"),"moo".__minus_gt("chemical/x-mopac-out"),"mop".__minus_gt("chemical/x-mopac-input"),"mopcrt".__minus_gt("chemical/x-mopac-input"),"mov".__minus_gt("video/quicktime"),"movie".__minus_gt("video/x-sgi-movie"),"mp2".__minus_gt("audio/mpeg"),"mp3".__minus_gt("audio/mpeg"),"mp4".__minus_gt("video/mp4"),"mpc".__minus_gt("chemical/x-mopac-input"),"mpe".__minus_gt("video/mpeg"),"mpeg".__minus_gt("video/mpeg"),"mpega".__minus_gt("audio/mpeg"),"mpg".__minus_gt("video/mpeg"),"mpga".__minus_gt("audio/mpeg"),"ms".__minus_gt("application/x-troff-ms"),"msh".__minus_gt("model/mesh"),"msi".__minus_gt("application/x-msi"),"mvb".__minus_gt("chemical/x-mopac-vib"),"mxu".__minus_gt("video/vnd.mpegurl"),"nb".__minus_gt("application/mathematica"),"nc".__minus_gt("application/x-netcdf"),"nwc".__minus_gt("application/x-nwc"),"o".__minus_gt("application/x-object"),"oda".__minus_gt("application/oda"),"odb".__minus_gt("application/vnd.oasis.opendocument.database"),"odc".__minus_gt("application/vnd.oasis.opendocument.chart"),"odf".__minus_gt("application/vnd.oasis.opendocument.formula"),"odg".__minus_gt("application/vnd.oasis.opendocument.graphics"),"odi".__minus_gt("application/vnd.oasis.opendocument.image"),"odm".__minus_gt("application/vnd.oasis.opendocument.text-master"),"odp".__minus_gt("application/vnd.oasis.opendocument.presentation"),"ods".__minus_gt("application/vnd.oasis.opendocument.spreadsheet"),"odt".__minus_gt("application/vnd.oasis.opendocument.text"),"ogg".__minus_gt("application/ogg"),"old".__minus_gt("application/x-trash"),"oth".__minus_gt("application/vnd.oasis.opendocument.text-web"),"oza".__minus_gt("application/x-oz-application"),"p".__minus_gt("text/x-pascal"),"p7r".__minus_gt("application/x-pkcs7-certreqresp"),"pac".__minus_gt("application/x-ns-proxy-autoconfig"),"pas".__minus_gt("text/x-pascal"),"pat".__minus_gt("image/x-coreldrawpattern"),"pbm".__minus_gt("image/x-portable-bitmap"),"pcf".__minus_gt("application/x-font"),"pcf.Z".__minus_gt("application/x-font"),"pcx".__minus_gt("image/pcx"),"pdb".__minus_gt("chemical/x-pdb"),"pdf".__minus_gt("application/pdf"),"pfa".__minus_gt("application/x-font"),"pfb".__minus_gt("application/x-font"),"pgm".__minus_gt("image/x-portable-graymap"),"pgn".__minus_gt("application/x-chess-pgn"),"pgp".__minus_gt("application/pgp-signature"),"pk".__minus_gt("application/x-tex-pk"),"pl".__minus_gt("text/x-perl"),"pls".__minus_gt("audio/x-scpls"),"pm".__minus_gt("text/x-perl"),"png".__minus_gt("image/png"),"pnm".__minus_gt("image/x-portable-anymap"),"pot".__minus_gt("text/plain"),"ppm".__minus_gt("image/x-portable-pixmap"),"pps".__minus_gt("application/vnd.ms-powerpoint"),"ppt".__minus_gt("application/vnd.ms-powerpoint"),"prf".__minus_gt("application/pics-rules"),"prt".__minus_gt("chemical/x-ncbi-asn1-ascii"),"ps".__minus_gt("application/postscript"),"psd".__minus_gt("image/x-photoshop"),"psp".__minus_gt("text/x-psp"),"py".__minus_gt("text/x-python"),"pyc".__minus_gt("application/x-python-code"),"pyo".__minus_gt("application/x-python-code"),"qt".__minus_gt("video/quicktime"),"qtl".__minus_gt("application/x-quicktimeplayer"),"ra".__minus_gt("audio/x-realaudio"),"ram".__minus_gt("audio/x-pn-realaudio"),"rar".__minus_gt("application/rar"),"ras".__minus_gt("image/x-cmu-raster"),"rd".__minus_gt("chemical/x-mdl-rdfile"),"rdf".__minus_gt("application/rdf+xml"),"rgb".__minus_gt("image/x-rgb"),"rm".__minus_gt("audio/x-pn-realaudio"),"roff".__minus_gt("application/x-troff"),"ros".__minus_gt("chemical/x-rosdal"),"rpm".__minus_gt("application/x-redhat-package-manager"),"rss".__minus_gt("application/rss+xml"),"rtf".__minus_gt("text/rtf"),"rtx".__minus_gt("text/richtext"),"rxn".__minus_gt("chemical/x-mdl-rxnfile"),"sct".__minus_gt("text/scriptlet"),"sd".__minus_gt("chemical/x-mdl-sdfile"),"sd2".__minus_gt("audio/x-sd2"),"sda".__minus_gt("application/vnd.stardivision.draw"),"sdc".__minus_gt("application/vnd.stardivision.calc"),"sdd".__minus_gt("application/vnd.stardivision.impress"),"sdf".__minus_gt("chemical/x-mdl-sdfile"),"sdp".__minus_gt("application/vnd.stardivision.impress"),"sdw".__minus_gt("application/vnd.stardivision.writer"),"ser".__minus_gt("application/java-serialized-object"),"sgf".__minus_gt("application/x-go-sgf"),"sgl".__minus_gt("application/vnd.stardivision.writer-global"),"sh".__minus_gt("text/x-sh"),"shar".__minus_gt("application/x-shar"),"shtml".__minus_gt("text/html"),"sid".__minus_gt("audio/prs.sid"),"sik".__minus_gt("application/x-trash"),"silo".__minus_gt("model/mesh"),"sis".__minus_gt("application/vnd.symbian.install"),"sit".__minus_gt("application/x-stuffit"),"skd".__minus_gt("application/x-koan"),"skm".__minus_gt("application/x-koan"),"skp".__minus_gt("application/x-koan"),"skt".__minus_gt("application/x-koan"),"smf".__minus_gt("application/vnd.stardivision.math"),"smi".__minus_gt("application/smil"),"smil".__minus_gt("application/smil"),"snd".__minus_gt("audio/basic"),"spc".__minus_gt("chemical/x-galactic-spc"),"spl".__minus_gt("application/x-futuresplash"),"src".__minus_gt("application/x-wais-source"),"stc".__minus_gt("application/vnd.sun.xml.calc.template"),"std".__minus_gt("application/vnd.sun.xml.draw.template"),"sti".__minus_gt("application/vnd.sun.xml.impress.template"),"stl".__minus_gt("application/vnd.ms-pki.stl"),"stw".__minus_gt("application/vnd.sun.xml.writer.template"),"sty".__minus_gt("text/x-tex"),"sv4cpio".__minus_gt("application/x-sv4cpio"),"sv4crc".__minus_gt("application/x-sv4crc"),"svg".__minus_gt("image/svg+xml"),"svgz".__minus_gt("image/svg+xml"),"sw".__minus_gt("chemical/x-swissprot"),"swf".__minus_gt("application/x-shockwave-flash"),"swfl".__minus_gt("application/x-shockwave-flash"),"sxc".__minus_gt("application/vnd.sun.xml.calc"),"sxd".__minus_gt("application/vnd.sun.xml.draw"),"sxg".__minus_gt("application/vnd.sun.xml.writer.global"),"sxi".__minus_gt("application/vnd.sun.xml.impress"),"sxm".__minus_gt("application/vnd.sun.xml.math"),"sxw".__minus_gt("application/vnd.sun.xml.writer"),"t".__minus_gt("application/x-troff"),"tar".__minus_gt("application/x-tar"),"taz".__minus_gt("application/x-gtar"),"tcl".__minus_gt("text/x-tcl"),"tex".__minus_gt("text/x-tex"),"texi".__minus_gt("application/x-texinfo"),"texinfo".__minus_gt("application/x-texinfo"),"text".__minus_gt("text/plain"),"tgf".__minus_gt("chemical/x-mdl-tgf"),"tgz".__minus_gt("application/x-gtar"),"tif".__minus_gt("image/tiff"),"tiff".__minus_gt("image/tiff"),"tk".__minus_gt("text/x-tcl"),"tm".__minus_gt("text/texmacs"),"torrent".__minus_gt("application/x-bittorrent"),"tr".__minus_gt("application/x-troff"),"ts".__minus_gt("text/texmacs"),"tsp".__minus_gt("application/dsptype"),"tsv".__minus_gt("text/tab-separated-values"),"txt".__minus_gt("text/plain"),"udeb".__minus_gt("application/x-debian-package"),"uls".__minus_gt("text/iuls"),"ustar".__minus_gt("application/x-ustar"),"val".__minus_gt("chemical/x-ncbi-asn1-binary"),"vcd".__minus_gt("application/x-cdlink"),"vcf".__minus_gt("text/x-vcard"),"vcs".__minus_gt("text/x-vcalendar"),"vmd".__minus_gt("chemical/x-vmd"),"vms".__minus_gt("chemical/x-vamas-iso14976"),"vor".__minus_gt("application/vnd.stardivision.writer"),"vrm".__minus_gt("x-world/x-vrml"),"vrml".__minus_gt("x-world/x-vrml"),"vsd".__minus_gt("application/vnd.visio"),"wad".__minus_gt("application/x-doom"),"wav".__minus_gt("audio/x-wav"),"wax".__minus_gt("audio/x-ms-wax"),"wbmp".__minus_gt("image/vnd.wap.wbmp"),"wbxml".__minus_gt("application/vnd.wap.wbxml"),"wk".__minus_gt("application/x-123"),"wm".__minus_gt("video/x-ms-wm"),"wma".__minus_gt("audio/x-ms-wma"),"wmd".__minus_gt("application/x-ms-wmd"),"wml".__minus_gt("text/vnd.wap.wml"),"wmlc".__minus_gt("application/vnd.wap.wmlc"),"wmls".__minus_gt("text/vnd.wap.wmlscript"),"wmlsc".__minus_gt("application/vnd.wap.wmlscriptc"),"wmv".__minus_gt("video/x-ms-wmv"),"wmx".__minus_gt("video/x-ms-wmx"),"wmz".__minus_gt("application/x-ms-wmz"),"wp5".__minus_gt("application/wordperfect5.1"),"wpd".__minus_gt("application/wordperfect"),"wrl".__minus_gt("x-world/x-vrml"),"wsc".__minus_gt("text/scriptlet"),"wvx".__minus_gt("video/x-ms-wvx"),"wz".__minus_gt("application/x-wingz"),"xbm".__minus_gt("image/x-xbitmap"),"xcf".__minus_gt("application/x-xcf"),"xht".__minus_gt("application/xhtml+xml"),"xhtml".__minus_gt("application/xhtml+xml"),"xlb".__minus_gt("application/vnd.ms-excel"),"xls".__minus_gt("application/vnd.ms-excel"),"xlt".__minus_gt("application/vnd.ms-excel"),"xml".__minus_gt("application/xml"),"xpi".__minus_gt("application/x-xpinstall"),"xpm".__minus_gt("image/x-xpixmap"),"xsl".__minus_gt("application/xml"),"xtel".__minus_gt("chemical/x-xtel"),"xul".__minus_gt("application/vnd.mozilla.xul+xml"),"xwd".__minus_gt("image/x-xwindowdump"),"xyz".__minus_gt("chemical/x-xyz"),"zip".__minus_gt("application/zip"),"zmt".__minus_gt("chemical/x-mopac-input"),"~".__minus_gt("application/x-trash")]);
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
fileServer=_st($FileServer())._createServerWithArguments_(args);
fileServer;
$2=_st(fileServer)._start();
throw $early=[$2];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"main",{fileServer:fileServer,args:args},smalltalk.FileServer.klass)})},
args: [],
source: "main\x0a\x09\x22Main entry point for Amber applications.\x0a\x09 Creates and starts a FileServer instance.\x22\x0a\x09| fileServer args |\x0a\x09args := process argv.\x0a\x09\x22Remove the first args which contain the path to the node executable and the script file.\x22\x0a\x09args removeFrom: 1 to: 3.\x0a\x0a\x09args detect: [ :each |\x0a\x09\x09(each = '--help') ifTrue: [FileServer printHelp]]\x0a\x09ifNone: [\x0a\x09\x09fileServer := FileServer createServerWithArguments: args.\x0a\x09\x09^fileServer start]",
messageSends: ["argv", "removeFrom:to:", "detect:ifNone:", "ifTrue:", "printHelp", "=", "createServerWithArguments:", "start"],
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"mimeTypeFor:",{aString:aString},smalltalk.FileServer.klass)})},
args: ["aString"],
source: "mimeTypeFor: aString\x0a\x09^self mimeTypes at: (aString replace: '.*[\x5c.]' with: '') ifAbsent: ['text/plain']",
messageSends: ["at:ifAbsent:", "replace:with:", "mimeTypes"],
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
if(($receiver = $2) == nil || $receiver == undefined){
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
_st(console)._log_("--help");
_st(self._commandLineSwitches())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_(_st(each).__comma(" <parameter>"));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"printHelp",{},smalltalk.FileServer.klass)})},
args: [],
source: "printHelp\x0a\x09console log: 'Available commandline options are:'.\x0a\x09console log: '--help'.\x0a\x09self commandLineSwitches do: [ :each |\x0a\x09\x09console log: each, ' <parameter>']",
messageSends: ["log:", "do:", ",", "commandLineSwitches"],
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
var $1;
$1=_st(_st(_st(aSwitch)._replace_with_("^--",""))._replace_with_("-[a-z]",(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._second())._asUppercase();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}))).__comma(":");
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
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$7,$6,$4,$1;
$1=self._parseAssignment_do_(buffer,(function(name,expr){
var varName,value;
return smalltalk.withContext(function($ctx2) {
$2=name;
if(($receiver = $2) == nil || $receiver == undefined){
varName=self._nextResultName();
} else {
varName=$2;
};
varName;
self["@session"]=self._addVariableNamed_to_(varName,self["@session"]);
self["@session"];
$3=self;
$5=_st(varName).__comma(" := ");
$7=expr;
if(($receiver = $7) == nil || $receiver == undefined){
$6=buffer;
} else {
$6=$7;
};
$4=_st($5).__comma($6);
value=_st($3)._eval_on_($4,self["@session"]);
value;
return _st(aBlock)._value_value_(varName,value);
}, function($ctx2) {$ctx2.fillBlock({name:name,expr:expr,varName:varName,value:value},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignNewVariable:do:",{buffer:buffer,aBlock:aBlock},smalltalk.Repl)})},
args: ["buffer", "aBlock"],
source: "assignNewVariable: buffer do: aBlock\x0a\x09\x22Assigns a new variable and calls the given block with the variable's name and value\x0a\x09 if buffer contains an assignment expression. If it doesn't the block is called with nil for\x0a\x09 both arguments.\x22\x0a\x09^ self parseAssignment: buffer do: [ :name :expr || varName value |\x0a\x09\x09varName := name ifNil: [self nextResultName].\x0a\x09\x09session := self addVariableNamed: varName to: session.\x0a\x09\x09value := self eval: varName, ' := ', (expr ifNil: [buffer]) on: session.\x0a\x09\x09aBlock value: varName value: value]",
messageSends: ["parseAssignment:do:", "ifNil:", "nextResultName", "addVariableNamed:to:", "eval:on:", ",", "value:value:"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "clearScreen",
category: 'private',
fn: function (){
var self=this;
var esc,cls;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
esc=_st($String())._fromCharCode_((27));
cls=_st(_st(_st(esc).__comma("[2J")).__comma(esc)).__comma("[0;0f");
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
var $1,$2;
self["@interface"]=_st(self["@readline"])._createInterface_stdout_(_st(process)._stdin(),_st(process)._stdout());
_st(self["@interface"])._on_do_("line",(function(buffer){
return smalltalk.withContext(function($ctx2) {
return self._processLine_(buffer);
}, function($ctx2) {$ctx2.fillBlock({buffer:buffer},$ctx1)})}));
_st(self["@interface"])._on_do_("close",(function(){
return smalltalk.withContext(function($ctx2) {
return self._close();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=self;
_st($1)._printWelcome();
_st($1)._setupHotkeys();
$2=_st($1)._setPrompt();
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
compiler=_st($Compiler())._new();
_st(compiler)._install_forClass_category_(_st(_st(_st(aString).__comma(": anObject ^ ")).__comma(aString)).__comma(" := anObject"),aClass,"session");
_st(compiler)._install_forClass_category_(_st(_st(aString).__comma(" ^ ")).__comma(aString),aClass,"session");
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
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(buffer)._isEmpty();
if(! smalltalk.assert($1)){
self._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(_st($Compiler())._new())._evaluateExpression_on_(buffer,anObject);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(e){
return smalltalk.withContext(function($ctx2) {
$2=_st(e)._isSmalltalkError();
if(smalltalk.assert($2)){
return _st(_st($ErrorHandler())._new())._handleError_(e);
} else {
return _st(_st(process)._stdout())._write_(_st(e)._jsStack());
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
};
$3=result;
return $3;
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{buffer:buffer,anObject:anObject,result:result},smalltalk.Repl)})},
args: ["buffer", "anObject"],
source: "eval: buffer on: anObject\x0a\x09| result |\x0a\x09buffer isEmpty ifFalse: [\x0a\x09\x09self try: [\x0a\x09\x09\x09result := Compiler new evaluateExpression: buffer on: anObject]\x0a\x09\x09catch: [:e |\x0a\x09\x09\x09e isSmalltalkError\x0a\x09\x09\x09    ifTrue: [ErrorHandler new handleError: e]\x0a\x09\x09\x09    ifFalse: [process stdout write: e jsStack]]].\x0a\x09^ result",
messageSends: ["ifFalse:", "try:catch:", "evaluateExpression:on:", "new", "ifTrue:ifFalse:", "handleError:", "write:", "jsStack", "stdout", "isSmalltalkError", "isEmpty"],
referencedClasses: ["Compiler", "ErrorHandler"]
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
}, function($ctx2) {$ctx2.fillBlock({names:names,cmd:cmd},$ctx1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"executeCommand:",{aString:aString},smalltalk.Repl)})},
args: ["aString"],
source: "executeCommand: aString\x0a\x09\x22Tries to process the given string as a command. Returns true if it was a command, false if not.\x22\x0a\x09self commands keysAndValuesDo: [:names :cmd |\x0a\x09\x09(names includes: aString) ifTrue: [\x0a\x09\x09\x09cmd value.\x0a\x09\x09\x09^ true]].\x0a\x09^ false",
messageSends: ["keysAndValuesDo:", "ifTrue:", "value", "includes:", "commands"],
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
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@session"]=_st($DoIt())._new();
self["@readline"]=_st(require)._value_("readline");
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
var $2,$1;
$2=_st(aClass)._superclass();
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(aClass)._instanceVariableNames();
} else {
$1=_st(_st(aClass)._instanceVariableNames())._copyWithAll_(self._instanceVariableNamesFor_(_st(aClass)._superclass()));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNamesFor:",{aClass:aClass},smalltalk.Repl)})},
args: ["aClass"],
source: "instanceVariableNamesFor: aClass\x0a\x09\x22Yields all instance variable names for the given class, including inherited ones.\x22\x0a\x09^ aClass superclass\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09aClass instanceVariableNames copyWithAll: (self instanceVariableNamesFor: aClass superclass)]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09aClass instanceVariableNames]",
messageSends: ["ifNotNil:ifNil:", "copyWithAll:", "instanceVariableNamesFor:", "superclass", "instanceVariableNames"],
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
$1=_st(aString)._match_("^[a-z_]\x5cw+$"._asRegexp());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isIdentifier:",{aString:aString},smalltalk.Repl)})},
args: ["aString"],
source: "isIdentifier: aString\x0a\x09^ aString match: '^[a-z_]\x5cw+$' asRegexp",
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
if(($receiver = $1) == nil || $receiver == undefined){
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self._clearScreen();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{key:key},smalltalk.Repl)})},
args: ["key"],
source: "onKeyPress: key\x0a\x09(key ctrl and: [key name = 'l'])\x0a\x09\x09ifTrue: [self clearScreen]",
messageSends: ["ifTrue:", "clearScreen", "and:", "=", "name", "ctrl"],
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
var $2,$1;
assignment=_st(_st(aString)._tokenize_(":="))._collect_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._trimBoth();
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
$2=_st(_st(_st(assignment)._size()).__eq((2)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isIdentifier_(_st(assignment)._first());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value_value_(_st(assignment)._first(),_st(assignment)._last());
} else {
$1=_st(aBlock)._value_value_(nil,nil);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseAssignment:do:",{aString:aString,aBlock:aBlock,assignment:assignment},smalltalk.Repl)})},
args: ["aString", "aBlock"],
source: "parseAssignment: aString do: aBlock\x0a\x09\x22Assigns a new variable if the given string is an assignment expression. Calls the given block with name and value.\x0a\x09 If the string is not one no variable will be assigned and the block will be called with nil for both arguments.\x22\x0a\x09| assignment |\x0a\x09assignment := (aString tokenize: ':=') collect: [:s | s trimBoth].\x0a\x09^ (assignment size = 2 and: [self isIdentifier: assignment first])\x0a\x09\x09ifTrue: [aBlock value: assignment first value: assignment last]\x0a\x09\x09ifFalse: [aBlock value: nil value: nil]",
messageSends: ["collect:", "trimBoth", "tokenize:", "ifTrue:ifFalse:", "value:value:", "first", "last", "and:", "isIdentifier:", "=", "size"],
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
var $1,$2;
$1=$Transcript();
_st($1)._show_(_st(_st(_st(_st(varName).__comma(": ")).__comma(_st(_st(value)._class())._name())).__comma(" = ")).__comma(_st(value)._asString()));
$2=_st($1)._cr();
_st(self["@interface"])._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"presentResultNamed:withValue:",{varName:varName,value:value},smalltalk.Repl)})},
args: ["varName", "value"],
source: "presentResultNamed: varName withValue: value\x0a\x09Transcript show: varName, ': ', value class name, ' = ', value asString; cr.\x0a\x09interface prompt",
messageSends: ["show:", ",", "asString", "name", "class", "cr", "prompt"],
referencedClasses: ["Transcript"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "printWelcome",
category: 'private',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st($Transcript())._show_(_st(_st(_st("Welcome to Amber version ".__comma(_st(_st($Smalltalk())._current())._version())).__comma(" (NodeJS ")).__comma(_st(_st(process)._versions())._node())).__comma(")."));
$1=$Transcript();
_st($1)._show_("Type :q to exit.");
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"printWelcome",{},smalltalk.Repl)})},
args: [],
source: "printWelcome\x0a\x09Transcript show: 'Welcome to Amber version ', Smalltalk current version, ' (NodeJS ', process versions node, ').'.\x0a\x09Transcript show: 'Type :q to exit.'; cr.",
messageSends: ["show:", ",", "node", "versions", "version", "current", "cr"],
referencedClasses: ["Smalltalk", "Transcript"]
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
}, function($ctx2) {$ctx2.fillBlock({varName:varName,value:value},$ctx1)})});
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
messageSends: ["presentResultNamed:withValue:", "ifFalse:", "ifTrue:ifFalse:", "value:value:", "perform:", "assignNewVariable:do:", "isVariableDefined:", "executeCommand:"],
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setPreviousVariablesFor:from:",{newObject:newObject,oldObject:oldObject},smalltalk.Repl)})},
args: ["newObject", "oldObject"],
source: "setPreviousVariablesFor: newObject from: oldObject\x0a\x09(self instanceVariableNamesFor: oldObject class) do: [:each |\x0a\x09\x09newObject perform: each, ':' withArguments: {oldObject perform: each}].",
messageSends: ["do:", "perform:withArguments:", ",", "perform:", "instanceVariableNamesFor:", "class"],
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
self["@commands"]=_st($Dictionary())._from_([_st([":q"]).__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(process)._exit();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),_st([""]).__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@interface"])._prompt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]);
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
var $1;
_st(_st(process)._stdin())._on_do_("keypress",(function(s,key){
return smalltalk.withContext(function($ctx2) {
$1=key;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
return self._onKeyPress_(key);
};
}, function($ctx2) {$ctx2.fillBlock({s:s,key:key},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupHotkeys",{},smalltalk.Repl)})},
args: [],
source: "setupHotkeys\x0a\x09process stdin on: 'keypress' do: [:s :key | key ifNotNil: [self onKeyPress: key]].",
messageSends: ["on:do:", "ifNotNil:", "onKeyPress:", "stdin"],
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
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "asSymbol", "subclassNameFor:", "new"],
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
var $2,$1;
$2=_st(_st(aClass)._name())._matchesOf_("\x5cd+$");
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(aClass)._name()).__comma("2");
} else {
var counter;
counter=_st(_st(_st(_st(_st(aClass)._name())._matchesOf_("\x5cd+$"))._first())._asNumber()).__plus((1));
counter;
$1=_st(_st(aClass)._name())._replaceRegexp_with_("\x5cd+$"._asRegexp(),_st(counter)._asString());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclassNameFor:",{aClass:aClass},smalltalk.Repl)})},
args: ["aClass"],
source: "subclassNameFor: aClass\x0a\x09^ (aClass name matchesOf: '\x5cd+$')\x0a\x09\x09ifNotNil: [ | counter |\x0a\x09\x09\x09counter := (aClass name matchesOf: '\x5cd+$') first asNumber + 1.\x0a\x09\x09\x09aClass name replaceRegexp: '\x5cd+$' asRegexp with: counter asString]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09aClass name, '2'].",
messageSends: ["ifNotNil:ifNil:", "+", "asNumber", "first", "matchesOf:", "name", "replaceRegexp:with:", "asRegexp", "asString", ","],
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


