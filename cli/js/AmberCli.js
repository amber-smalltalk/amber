smalltalk.addPackage('AmberCli');
smalltalk.addClass('AmberCli', smalltalk.Object, [], 'AmberCli');

smalltalk.addMethod(
smalltalk.method({
selector: "commandLineSwitches",
category: 'commandline',
fn: function (){
var self=this;
var switches;
return smalltalk.withContext(function($ctx1) { 
var $1;
switches=_st(_st(_st(self)._class())._methodsInProtocol_("commands"))._collect_((function(each){
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
var command;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
command=_st(self)._selectorForCommandLineSwitch_(_st(args)._first());
_st(args)._remove_(_st(args)._first());
_st(self)._perform_withArguments_(command,_st($Array())._with_(args));
return self}, function($ctx1) {$ctx1.fill(self,"handleArguments:",{args:args,command:command},smalltalk.AmberCli.klass)})},
args: ["args"],
source: "handleArguments: args\x0a\x09| command |\x0a\x09command := self selectorForCommandLineSwitch: (args first).\x0a\x09args remove: args first.\x0a\x09self perform: command  withArguments: (Array with: args).",
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
_st(_st(self)._commandLineSwitches())._do_((function(each){
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
var args;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
args=_st(process)._argv();
_st(args)._removeFrom_to_((1),(3));
$1=_st(args)._isEmpty();
if(smalltalk.assert($1)){
_st(self)._help_(nil);
} else {
$2=_st(self)._handleArguments_(args);
return $2;
};
return self}, function($ctx1) {$ctx1.fill(self,"main",{args:args},smalltalk.AmberCli.klass)})},
args: [],
source: "main\x0a\x09\x22Main entry point for Amber applications.\x0a\x09Parses commandline arguments and starts the according subprogram.\x22\x0a\x09| args |\x0a\x09args := process argv.\x0a\x09\x22Remove the first args which contain the path to the node executable and the script file.\x22\x0a\x09args removeFrom: 1 to: 3.\x0a\x09\x0a\x09(args isEmpty)\x0a\x09\x09ifTrue: [self help: nil]\x0a\x09\x09ifFalse: [^self handleArguments: args]",
messageSends: ["argv", "removeFrom:to:", "ifTrue:ifFalse:", "help:", "handleArguments:", "isEmpty"],
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aSwitch)._replace_with_("-[a-z]",(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._second())._asUppercase();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}))).__comma(":");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorForCommandLineSwitch:",{aSwitch:aSwitch},smalltalk.AmberCli.klass)})},
args: ["aSwitch"],
source: "selectorForCommandLineSwitch: aSwitch\x0a\x09\x22Add ':' at the end\x0a\x09 and replace all occurences of a lowercase letter preceded by a '-' with\x0a\x09 the Uppercase letter.\x0a\x09 Example: fallback-page becomes fallbackPage:\x22\x0a\x09^(aSwitch replace: '-[a-z]' with: [ :each | each second asUppercase ]), ':'",
messageSends: [",", "replace:with:", "asUppercase", "second"],
referencedClasses: []
}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "server:",
category: 'commands',
fn: function (args){
var self=this;
function $FileServer(){return smalltalk.FileServer||(typeof FileServer=="undefined"?nil:FileServer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($FileServer())._createServerWithArguments_(args))._start();
return $1;
}, function($ctx1) {$ctx1.fill(self,"server:",{args:args},smalltalk.AmberCli.klass)})},
args: ["args"],
source: "server: args\x0a\x09^(FileServer createServerWithArguments: args) start",
messageSends: ["start", "createServerWithArguments:"],
referencedClasses: ["FileServer"]
}),
smalltalk.AmberCli.klass);


smalltalk.addClass('FileServer', smalltalk.Object, ['path', 'http', 'fs', 'url', 'host', 'port', 'basePath', 'util', 'username', 'password', 'fallbackPage'], 'AmberCli');
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
$1=_st(self["@fs"])._existsSync_(_st(_st(self)._basePath()).__comma("index.html"));
if(! smalltalk.assert($1)){
_st(console)._warn_("Warning: project directory does not contain index.html");
};
$2=_st(self["@fs"])._existsSync_(_st(_st(self)._basePath()).__comma("st"));
if(! smalltalk.assert($2)){
_st(console)._warn_("Warning: project directory is missing an \x22st\x22 directory");
};
$3=_st(self["@fs"])._existsSync_(_st(_st(self)._basePath()).__comma("js"));
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
filename=_st(self["@path"])._join_with_(_st(self)._basePath(),uri);
_st(self["@fs"])._exists_do_(filename,(function(aBoolean){
return smalltalk.withContext(function($ctx2) {
$1=aBoolean;
if(smalltalk.assert($1)){
return _st(self)._respondFileNamed_to_(filename,aResponse);
} else {
return _st(self)._respondNotFoundTo_(aResponse);
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
_st(aResponse)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Access-Control-Allow-Origin").__minus_gt("*"),_st("Access-Control-Allow-Methods").__minus_gt("GET, PUT, POST, DELETE, OPTIONS"),_st("Access-Control-Allow-Headers").__minus_gt("Content-Type, Accept"),_st("Content-Length").__minus_gt((0)),_st("Access-Control-Max-Age").__minus_gt((10))]));
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
$1=_st(self)._isAuthenticated_(aRequest);
if(! smalltalk.assert($1)){
_st(self)._respondAuthenticationRequiredTo_(aResponse);
return nil;
};
file=_st(".").__comma(_st(aRequest)._url());
stream=_st(self["@fs"])._createWriteStream_(file);
_st(stream)._on_do_("error",(function(error){
return smalltalk.withContext(function($ctx2) {
_st(console)._warn_(_st("Error creating WriteStream for file ").__comma(file));
_st(console)._warn_("    Did you forget to create the necessary js/ or st/ directory in your project?");
_st(console)._warn_(_st("    The exact error is: ").__comma(error));
return _st(self)._respondNotCreatedTo_(aResponse);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
_st(stream)._on_do_("close",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._respondCreatedTo_(aResponse);
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
_st(self)._handlePUTRequest_respondTo_(aRequest,aResponse);
};
$2=_st(_st(aRequest)._method()).__eq("GET");
if(smalltalk.assert($2)){
_st(self)._handleGETRequest_respondTo_(aRequest,aResponse);
};
$3=_st(_st(aRequest)._method()).__eq("OPTIONS");
if(smalltalk.assert($3)){
_st(self)._handleOPTIONSRequest_respondTo_(aRequest,aResponse);
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
self["@path"]=_st(self)._require_("path");
self["@http"]=_st(self)._require_("http");
self["@fs"]=_st(self)._require_("fs");
self["@util"]=_st(self)._require_("util");
self["@url"]=_st(self)._require_("url");
self["@host"]=_st(_st(self)._class())._defaultHost();
self["@port"]=_st(_st(self)._class())._defaultPort();
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
auth=_st(self)._base64Decode_(_st(token)._at_((2)));
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
_st($1)._writeHead_options_((401),smalltalk.HashedCollection._fromPairs_([_st("WWW-Authenticate").__minus_gt("Basic realm=\x22Secured Developer Area\x22")]));
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
_st($1)._writeHead_options_((201),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain"),_st("Access-Control-Allow-Origin").__minus_gt("*")]));
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
return _st(self)._respondInternalErrorTo_(aResponse);
} else {
type=_st(_st(self)._class())._mimeTypeFor_(filename);
type;
$3=_st(type).__eq("application/javascript");
if(smalltalk.assert($3)){
type=_st(type).__comma(";charset=utf-8");
type;
};
$4=aResponse;
_st($4)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt(type)]));
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
_st($1)._writeHead_options_((500),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
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
_st($1)._writeHead_options_((400),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
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
$1=_st(_st(self)._fallbackPage())._isNil();
if(! smalltalk.assert($1)){
$2=_st(self)._respondFileNamed_to_(_st(self)._fallbackPage(),aResponse);
return $2;
};
$3=aResponse;
_st($3)._writeHead_options_((404),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
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
_st($1)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain"),_st("Access-Control-Allow-Origin").__minus_gt("*")]));
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
_st(self)._checkDirectoryLayout();
$1=_st(self["@http"])._createServer_((function(request,response){
return smalltalk.withContext(function($ctx2) {
return _st(self)._handleRequest_respondTo_(request,response);
}, function($ctx2) {$ctx2.fillBlock({request:request,response:response},$ctx1)})}));
_st($1)._on_do_("error",(function(error){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_(_st("Error starting server: ").__comma(error));
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
_st($1)._on_do_("listening",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_(_st(_st(_st("Starting file server on ").__comma(_st(self)._host())).__comma(":")).__comma(_st(_st(self)._port())._asString()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._listen_host_(_st(self)._port(),_st(self)._host());
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.FileServer)})},
args: [],
source: "start\x0a\x09\x22Checks if required directory layout is present (issue warning if not).\x0a\x09 Afterwards start the server.\x22\x0a\x09self checkDirectoryLayout.\x0a\x09(http createServer: [:request :response |\x0a\x09      self handleRequest: request respondTo: response])\x0a\x09      on: 'error' do: [:error | console log: 'Error starting server: ', error];\x0a\x09      on: 'listening' do: [console log: 'Starting file server on ', self host, ':', self port asString];\x0a\x09      listen: self port host: self host.",
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
_st(self)._port_(aPort);
_st(self)._start();
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
selector: "username:password:",
category: 'accessing',
fn: function (aUsername,aPassword){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@username"]=aUsername;
self["@password"]=aPassword;
return self}, function($ctx1) {$ctx1.fill(self,"username:password:",{aUsername:aUsername,aPassword:aPassword},smalltalk.FileServer)})},
args: ["aUsername", "aPassword"],
source: "username: aUsername password: aPassword\x0a\x09username := aUsername.\x0a\x09password := aPassword.",
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
switches=_st(_st(self)._methodsInProtocol_("accessing"))._collect_((function(each){
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
switches=_st(self)._commandLineSwitches();
server=_st(self)._new();
_st(options)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=server;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st(_st(options)._size())._even();
if(! smalltalk.assert($2)){
_st(console)._log_("Using default parameters.");
_st(console)._log_(_st("Wrong commandline options or not enough arguments for: ").__comma(options));
_st(console)._log_(_st("Use any of the following ones: ").__comma(switches));
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
optionName=_st(self)._selectorForCommandLineSwitch_(optionName);
optionName;
return _st(server)._perform_withArguments_(optionName,_st($Array())._with_(optionValue));
} else {
_st(console)._log_(_st(optionName).__comma(" is not a valid commandline option"));
return _st(console)._log_(_st("Use any of the following ones: ").__comma(switches));
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
$1=smalltalk.HashedCollection._fromPairs_([_st("%").__minus_gt("application/x-trash"),_st("323").__minus_gt("text/h323"),_st("abw").__minus_gt("application/x-abiword"),_st("ai").__minus_gt("application/postscript"),_st("aif").__minus_gt("audio/x-aiff"),_st("aifc").__minus_gt("audio/x-aiff"),_st("aiff").__minus_gt("audio/x-aiff"),_st("alc").__minus_gt("chemical/x-alchemy"),_st("art").__minus_gt("image/x-jg"),_st("asc").__minus_gt("text/plain"),_st("asf").__minus_gt("video/x-ms-asf"),_st("asn").__minus_gt("chemical/x-ncbi-asn1-spec"),_st("aso").__minus_gt("chemical/x-ncbi-asn1-binary"),_st("asx").__minus_gt("video/x-ms-asf"),_st("au").__minus_gt("audio/basic"),_st("avi").__minus_gt("video/x-msvideo"),_st("b").__minus_gt("chemical/x-molconn-Z"),_st("bak").__minus_gt("application/x-trash"),_st("bat").__minus_gt("application/x-msdos-program"),_st("bcpio").__minus_gt("application/x-bcpio"),_st("bib").__minus_gt("text/x-bibtex"),_st("bin").__minus_gt("application/octet-stream"),_st("bmp").__minus_gt("image/x-ms-bmp"),_st("book").__minus_gt("application/x-maker"),_st("bsd").__minus_gt("chemical/x-crossfire"),_st("c").__minus_gt("text/x-csrc"),_st("c++").__minus_gt("text/x-c++src"),_st("c3d").__minus_gt("chemical/x-chem3d"),_st("cac").__minus_gt("chemical/x-cache"),_st("cache").__minus_gt("chemical/x-cache"),_st("cascii").__minus_gt("chemical/x-cactvs-binary"),_st("cat").__minus_gt("application/vnd.ms-pki.seccat"),_st("cbin").__minus_gt("chemical/x-cactvs-binary"),_st("cc").__minus_gt("text/x-c++src"),_st("cdf").__minus_gt("application/x-cdf"),_st("cdr").__minus_gt("image/x-coreldraw"),_st("cdt").__minus_gt("image/x-coreldrawtemplate"),_st("cdx").__minus_gt("chemical/x-cdx"),_st("cdy").__minus_gt("application/vnd.cinderella"),_st("cef").__minus_gt("chemical/x-cxf"),_st("cer").__minus_gt("chemical/x-cerius"),_st("chm").__minus_gt("chemical/x-chemdraw"),_st("chrt").__minus_gt("application/x-kchart"),_st("cif").__minus_gt("chemical/x-cif"),_st("class").__minus_gt("application/java-vm"),_st("cls").__minus_gt("text/x-tex"),_st("cmdf").__minus_gt("chemical/x-cmdf"),_st("cml").__minus_gt("chemical/x-cml"),_st("cod").__minus_gt("application/vnd.rim.cod"),_st("com").__minus_gt("application/x-msdos-program"),_st("cpa").__minus_gt("chemical/x-compass"),_st("cpio").__minus_gt("application/x-cpio"),_st("cpp").__minus_gt("text/x-c++src"),_st("cpt").__minus_gt("image/x-corelphotopaint"),_st("crl").__minus_gt("application/x-pkcs7-crl"),_st("crt").__minus_gt("application/x-x509-ca-cert"),_st("csf").__minus_gt("chemical/x-cache-csf"),_st("csh").__minus_gt("text/x-csh"),_st("csm").__minus_gt("chemical/x-csml"),_st("csml").__minus_gt("chemical/x-csml"),_st("css").__minus_gt("text/css"),_st("csv").__minus_gt("text/comma-separated-values"),_st("ctab").__minus_gt("chemical/x-cactvs-binary"),_st("ctx").__minus_gt("chemical/x-ctx"),_st("cu").__minus_gt("application/cu-seeme"),_st("cub").__minus_gt("chemical/x-gaussian-cube"),_st("cxf").__minus_gt("chemical/x-cxf"),_st("cxx").__minus_gt("text/x-c++src"),_st("dat").__minus_gt("chemical/x-mopac-input"),_st("dcr").__minus_gt("application/x-director"),_st("deb").__minus_gt("application/x-debian-package"),_st("dif").__minus_gt("video/dv"),_st("diff").__minus_gt("text/plain"),_st("dir").__minus_gt("application/x-director"),_st("djv").__minus_gt("image/vnd.djvu"),_st("djvu").__minus_gt("image/vnd.djvu"),_st("dl").__minus_gt("video/dl"),_st("dll").__minus_gt("application/x-msdos-program"),_st("dmg").__minus_gt("application/x-apple-diskimage"),_st("dms").__minus_gt("application/x-dms"),_st("doc").__minus_gt("application/msword"),_st("dot").__minus_gt("application/msword"),_st("dv").__minus_gt("video/dv"),_st("dvi").__minus_gt("application/x-dvi"),_st("dx").__minus_gt("chemical/x-jcamp-dx"),_st("dxr").__minus_gt("application/x-director"),_st("emb").__minus_gt("chemical/x-embl-dl-nucleotide"),_st("embl").__minus_gt("chemical/x-embl-dl-nucleotide"),_st("ent").__minus_gt("chemical/x-pdb"),_st("eps").__minus_gt("application/postscript"),_st("etx").__minus_gt("text/x-setext"),_st("exe").__minus_gt("application/x-msdos-program"),_st("ez").__minus_gt("application/andrew-inset"),_st("fb").__minus_gt("application/x-maker"),_st("fbdoc").__minus_gt("application/x-maker"),_st("fch").__minus_gt("chemical/x-gaussian-checkpoint"),_st("fchk").__minus_gt("chemical/x-gaussian-checkpoint"),_st("fig").__minus_gt("application/x-xfig"),_st("flac").__minus_gt("application/x-flac"),_st("fli").__minus_gt("video/fli"),_st("fm").__minus_gt("application/x-maker"),_st("frame").__minus_gt("application/x-maker"),_st("frm").__minus_gt("application/x-maker"),_st("gal").__minus_gt("chemical/x-gaussian-log"),_st("gam").__minus_gt("chemical/x-gamess-input"),_st("gamin").__minus_gt("chemical/x-gamess-input"),_st("gau").__minus_gt("chemical/x-gaussian-input"),_st("gcd").__minus_gt("text/x-pcs-gcd"),_st("gcf").__minus_gt("application/x-graphing-calculator"),_st("gcg").__minus_gt("chemical/x-gcg8-sequence"),_st("gen").__minus_gt("chemical/x-genbank"),_st("gf").__minus_gt("application/x-tex-gf"),_st("gif").__minus_gt("image/gif"),_st("gjc").__minus_gt("chemical/x-gaussian-input"),_st("gjf").__minus_gt("chemical/x-gaussian-input"),_st("gl").__minus_gt("video/gl"),_st("gnumeric").__minus_gt("application/x-gnumeric"),_st("gpt").__minus_gt("chemical/x-mopac-graph"),_st("gsf").__minus_gt("application/x-font"),_st("gsm").__minus_gt("audio/x-gsm"),_st("gtar").__minus_gt("application/x-gtar"),_st("h").__minus_gt("text/x-chdr"),_st("h++").__minus_gt("text/x-c++hdr"),_st("hdf").__minus_gt("application/x-hdf"),_st("hh").__minus_gt("text/x-c++hdr"),_st("hin").__minus_gt("chemical/x-hin"),_st("hpp").__minus_gt("text/x-c++hdr"),_st("hqx").__minus_gt("application/mac-binhex40"),_st("hs").__minus_gt("text/x-haskell"),_st("hta").__minus_gt("application/hta"),_st("htc").__minus_gt("text/x-component"),_st("htm").__minus_gt("text/html"),_st("html").__minus_gt("text/html"),_st("hxx").__minus_gt("text/x-c++hdr"),_st("ica").__minus_gt("application/x-ica"),_st("ice").__minus_gt("x-conference/x-cooltalk"),_st("ico").__minus_gt("image/x-icon"),_st("ics").__minus_gt("text/calendar"),_st("icz").__minus_gt("text/calendar"),_st("ief").__minus_gt("image/ief"),_st("iges").__minus_gt("model/iges"),_st("igs").__minus_gt("model/iges"),_st("iii").__minus_gt("application/x-iphone"),_st("inp").__minus_gt("chemical/x-gamess-input"),_st("ins").__minus_gt("application/x-internet-signup"),_st("iso").__minus_gt("application/x-iso9660-image"),_st("isp").__minus_gt("application/x-internet-signup"),_st("ist").__minus_gt("chemical/x-isostar"),_st("istr").__minus_gt("chemical/x-isostar"),_st("jad").__minus_gt("text/vnd.sun.j2me.app-descriptor"),_st("jar").__minus_gt("application/java-archive"),_st("java").__minus_gt("text/x-java"),_st("jdx").__minus_gt("chemical/x-jcamp-dx"),_st("jmz").__minus_gt("application/x-jmol"),_st("jng").__minus_gt("image/x-jng"),_st("jnlp").__minus_gt("application/x-java-jnlp-file"),_st("jpe").__minus_gt("image/jpeg"),_st("jpeg").__minus_gt("image/jpeg"),_st("jpg").__minus_gt("image/jpeg"),_st("js").__minus_gt("application/javascript"),_st("kar").__minus_gt("audio/midi"),_st("key").__minus_gt("application/pgp-keys"),_st("kil").__minus_gt("application/x-killustrator"),_st("kin").__minus_gt("chemical/x-kinemage"),_st("kpr").__minus_gt("application/x-kpresenter"),_st("kpt").__minus_gt("application/x-kpresenter"),_st("ksp").__minus_gt("application/x-kspread"),_st("kwd").__minus_gt("application/x-kword"),_st("kwt").__minus_gt("application/x-kword"),_st("latex").__minus_gt("application/x-latex"),_st("lha").__minus_gt("application/x-lha"),_st("lhs").__minus_gt("text/x-literate-haskell"),_st("lsf").__minus_gt("video/x-la-asf"),_st("lsx").__minus_gt("video/x-la-asf"),_st("ltx").__minus_gt("text/x-tex"),_st("lzh").__minus_gt("application/x-lzh"),_st("lzx").__minus_gt("application/x-lzx"),_st("m3u").__minus_gt("audio/x-mpegurl"),_st("m4a").__minus_gt("audio/mpeg"),_st("maker").__minus_gt("application/x-maker"),_st("man").__minus_gt("application/x-troff-man"),_st("mcif").__minus_gt("chemical/x-mmcif"),_st("mcm").__minus_gt("chemical/x-macmolecule"),_st("mdb").__minus_gt("application/msaccess"),_st("me").__minus_gt("application/x-troff-me"),_st("mesh").__minus_gt("model/mesh"),_st("mid").__minus_gt("audio/midi"),_st("midi").__minus_gt("audio/midi"),_st("mif").__minus_gt("application/x-mif"),_st("mm").__minus_gt("application/x-freemind"),_st("mmd").__minus_gt("chemical/x-macromodel-input"),_st("mmf").__minus_gt("application/vnd.smaf"),_st("mml").__minus_gt("text/mathml"),_st("mmod").__minus_gt("chemical/x-macromodel-input"),_st("mng").__minus_gt("video/x-mng"),_st("moc").__minus_gt("text/x-moc"),_st("mol").__minus_gt("chemical/x-mdl-molfile"),_st("mol2").__minus_gt("chemical/x-mol2"),_st("moo").__minus_gt("chemical/x-mopac-out"),_st("mop").__minus_gt("chemical/x-mopac-input"),_st("mopcrt").__minus_gt("chemical/x-mopac-input"),_st("mov").__minus_gt("video/quicktime"),_st("movie").__minus_gt("video/x-sgi-movie"),_st("mp2").__minus_gt("audio/mpeg"),_st("mp3").__minus_gt("audio/mpeg"),_st("mp4").__minus_gt("video/mp4"),_st("mpc").__minus_gt("chemical/x-mopac-input"),_st("mpe").__minus_gt("video/mpeg"),_st("mpeg").__minus_gt("video/mpeg"),_st("mpega").__minus_gt("audio/mpeg"),_st("mpg").__minus_gt("video/mpeg"),_st("mpga").__minus_gt("audio/mpeg"),_st("ms").__minus_gt("application/x-troff-ms"),_st("msh").__minus_gt("model/mesh"),_st("msi").__minus_gt("application/x-msi"),_st("mvb").__minus_gt("chemical/x-mopac-vib"),_st("mxu").__minus_gt("video/vnd.mpegurl"),_st("nb").__minus_gt("application/mathematica"),_st("nc").__minus_gt("application/x-netcdf"),_st("nwc").__minus_gt("application/x-nwc"),_st("o").__minus_gt("application/x-object"),_st("oda").__minus_gt("application/oda"),_st("odb").__minus_gt("application/vnd.oasis.opendocument.database"),_st("odc").__minus_gt("application/vnd.oasis.opendocument.chart"),_st("odf").__minus_gt("application/vnd.oasis.opendocument.formula"),_st("odg").__minus_gt("application/vnd.oasis.opendocument.graphics"),_st("odi").__minus_gt("application/vnd.oasis.opendocument.image"),_st("odm").__minus_gt("application/vnd.oasis.opendocument.text-master"),_st("odp").__minus_gt("application/vnd.oasis.opendocument.presentation"),_st("ods").__minus_gt("application/vnd.oasis.opendocument.spreadsheet"),_st("odt").__minus_gt("application/vnd.oasis.opendocument.text"),_st("ogg").__minus_gt("application/ogg"),_st("old").__minus_gt("application/x-trash"),_st("oth").__minus_gt("application/vnd.oasis.opendocument.text-web"),_st("oza").__minus_gt("application/x-oz-application"),_st("p").__minus_gt("text/x-pascal"),_st("p7r").__minus_gt("application/x-pkcs7-certreqresp"),_st("pac").__minus_gt("application/x-ns-proxy-autoconfig"),_st("pas").__minus_gt("text/x-pascal"),_st("pat").__minus_gt("image/x-coreldrawpattern"),_st("pbm").__minus_gt("image/x-portable-bitmap"),_st("pcf").__minus_gt("application/x-font"),_st("pcf.Z").__minus_gt("application/x-font"),_st("pcx").__minus_gt("image/pcx"),_st("pdb").__minus_gt("chemical/x-pdb"),_st("pdf").__minus_gt("application/pdf"),_st("pfa").__minus_gt("application/x-font"),_st("pfb").__minus_gt("application/x-font"),_st("pgm").__minus_gt("image/x-portable-graymap"),_st("pgn").__minus_gt("application/x-chess-pgn"),_st("pgp").__minus_gt("application/pgp-signature"),_st("pk").__minus_gt("application/x-tex-pk"),_st("pl").__minus_gt("text/x-perl"),_st("pls").__minus_gt("audio/x-scpls"),_st("pm").__minus_gt("text/x-perl"),_st("png").__minus_gt("image/png"),_st("pnm").__minus_gt("image/x-portable-anymap"),_st("pot").__minus_gt("text/plain"),_st("ppm").__minus_gt("image/x-portable-pixmap"),_st("pps").__minus_gt("application/vnd.ms-powerpoint"),_st("ppt").__minus_gt("application/vnd.ms-powerpoint"),_st("prf").__minus_gt("application/pics-rules"),_st("prt").__minus_gt("chemical/x-ncbi-asn1-ascii"),_st("ps").__minus_gt("application/postscript"),_st("psd").__minus_gt("image/x-photoshop"),_st("psp").__minus_gt("text/x-psp"),_st("py").__minus_gt("text/x-python"),_st("pyc").__minus_gt("application/x-python-code"),_st("pyo").__minus_gt("application/x-python-code"),_st("qt").__minus_gt("video/quicktime"),_st("qtl").__minus_gt("application/x-quicktimeplayer"),_st("ra").__minus_gt("audio/x-realaudio"),_st("ram").__minus_gt("audio/x-pn-realaudio"),_st("rar").__minus_gt("application/rar"),_st("ras").__minus_gt("image/x-cmu-raster"),_st("rd").__minus_gt("chemical/x-mdl-rdfile"),_st("rdf").__minus_gt("application/rdf+xml"),_st("rgb").__minus_gt("image/x-rgb"),_st("rm").__minus_gt("audio/x-pn-realaudio"),_st("roff").__minus_gt("application/x-troff"),_st("ros").__minus_gt("chemical/x-rosdal"),_st("rpm").__minus_gt("application/x-redhat-package-manager"),_st("rss").__minus_gt("application/rss+xml"),_st("rtf").__minus_gt("text/rtf"),_st("rtx").__minus_gt("text/richtext"),_st("rxn").__minus_gt("chemical/x-mdl-rxnfile"),_st("sct").__minus_gt("text/scriptlet"),_st("sd").__minus_gt("chemical/x-mdl-sdfile"),_st("sd2").__minus_gt("audio/x-sd2"),_st("sda").__minus_gt("application/vnd.stardivision.draw"),_st("sdc").__minus_gt("application/vnd.stardivision.calc"),_st("sdd").__minus_gt("application/vnd.stardivision.impress"),_st("sdf").__minus_gt("chemical/x-mdl-sdfile"),_st("sdp").__minus_gt("application/vnd.stardivision.impress"),_st("sdw").__minus_gt("application/vnd.stardivision.writer"),_st("ser").__minus_gt("application/java-serialized-object"),_st("sgf").__minus_gt("application/x-go-sgf"),_st("sgl").__minus_gt("application/vnd.stardivision.writer-global"),_st("sh").__minus_gt("text/x-sh"),_st("shar").__minus_gt("application/x-shar"),_st("shtml").__minus_gt("text/html"),_st("sid").__minus_gt("audio/prs.sid"),_st("sik").__minus_gt("application/x-trash"),_st("silo").__minus_gt("model/mesh"),_st("sis").__minus_gt("application/vnd.symbian.install"),_st("sit").__minus_gt("application/x-stuffit"),_st("skd").__minus_gt("application/x-koan"),_st("skm").__minus_gt("application/x-koan"),_st("skp").__minus_gt("application/x-koan"),_st("skt").__minus_gt("application/x-koan"),_st("smf").__minus_gt("application/vnd.stardivision.math"),_st("smi").__minus_gt("application/smil"),_st("smil").__minus_gt("application/smil"),_st("snd").__minus_gt("audio/basic"),_st("spc").__minus_gt("chemical/x-galactic-spc"),_st("spl").__minus_gt("application/x-futuresplash"),_st("src").__minus_gt("application/x-wais-source"),_st("stc").__minus_gt("application/vnd.sun.xml.calc.template"),_st("std").__minus_gt("application/vnd.sun.xml.draw.template"),_st("sti").__minus_gt("application/vnd.sun.xml.impress.template"),_st("stl").__minus_gt("application/vnd.ms-pki.stl"),_st("stw").__minus_gt("application/vnd.sun.xml.writer.template"),_st("sty").__minus_gt("text/x-tex"),_st("sv4cpio").__minus_gt("application/x-sv4cpio"),_st("sv4crc").__minus_gt("application/x-sv4crc"),_st("svg").__minus_gt("image/svg+xml"),_st("svgz").__minus_gt("image/svg+xml"),_st("sw").__minus_gt("chemical/x-swissprot"),_st("swf").__minus_gt("application/x-shockwave-flash"),_st("swfl").__minus_gt("application/x-shockwave-flash"),_st("sxc").__minus_gt("application/vnd.sun.xml.calc"),_st("sxd").__minus_gt("application/vnd.sun.xml.draw"),_st("sxg").__minus_gt("application/vnd.sun.xml.writer.global"),_st("sxi").__minus_gt("application/vnd.sun.xml.impress"),_st("sxm").__minus_gt("application/vnd.sun.xml.math"),_st("sxw").__minus_gt("application/vnd.sun.xml.writer"),_st("t").__minus_gt("application/x-troff"),_st("tar").__minus_gt("application/x-tar"),_st("taz").__minus_gt("application/x-gtar"),_st("tcl").__minus_gt("text/x-tcl"),_st("tex").__minus_gt("text/x-tex"),_st("texi").__minus_gt("application/x-texinfo"),_st("texinfo").__minus_gt("application/x-texinfo"),_st("text").__minus_gt("text/plain"),_st("tgf").__minus_gt("chemical/x-mdl-tgf"),_st("tgz").__minus_gt("application/x-gtar"),_st("tif").__minus_gt("image/tiff"),_st("tiff").__minus_gt("image/tiff"),_st("tk").__minus_gt("text/x-tcl"),_st("tm").__minus_gt("text/texmacs"),_st("torrent").__minus_gt("application/x-bittorrent"),_st("tr").__minus_gt("application/x-troff"),_st("ts").__minus_gt("text/texmacs"),_st("tsp").__minus_gt("application/dsptype"),_st("tsv").__minus_gt("text/tab-separated-values"),_st("txt").__minus_gt("text/plain"),_st("udeb").__minus_gt("application/x-debian-package"),_st("uls").__minus_gt("text/iuls"),_st("ustar").__minus_gt("application/x-ustar"),_st("val").__minus_gt("chemical/x-ncbi-asn1-binary"),_st("vcd").__minus_gt("application/x-cdlink"),_st("vcf").__minus_gt("text/x-vcard"),_st("vcs").__minus_gt("text/x-vcalendar"),_st("vmd").__minus_gt("chemical/x-vmd"),_st("vms").__minus_gt("chemical/x-vamas-iso14976"),_st("vor").__minus_gt("application/vnd.stardivision.writer"),_st("vrm").__minus_gt("x-world/x-vrml"),_st("vrml").__minus_gt("x-world/x-vrml"),_st("vsd").__minus_gt("application/vnd.visio"),_st("wad").__minus_gt("application/x-doom"),_st("wav").__minus_gt("audio/x-wav"),_st("wax").__minus_gt("audio/x-ms-wax"),_st("wbmp").__minus_gt("image/vnd.wap.wbmp"),_st("wbxml").__minus_gt("application/vnd.wap.wbxml"),_st("wk").__minus_gt("application/x-123"),_st("wm").__minus_gt("video/x-ms-wm"),_st("wma").__minus_gt("audio/x-ms-wma"),_st("wmd").__minus_gt("application/x-ms-wmd"),_st("wml").__minus_gt("text/vnd.wap.wml"),_st("wmlc").__minus_gt("application/vnd.wap.wmlc"),_st("wmls").__minus_gt("text/vnd.wap.wmlscript"),_st("wmlsc").__minus_gt("application/vnd.wap.wmlscriptc"),_st("wmv").__minus_gt("video/x-ms-wmv"),_st("wmx").__minus_gt("video/x-ms-wmx"),_st("wmz").__minus_gt("application/x-ms-wmz"),_st("wp5").__minus_gt("application/wordperfect5.1"),_st("wpd").__minus_gt("application/wordperfect"),_st("wrl").__minus_gt("x-world/x-vrml"),_st("wsc").__minus_gt("text/scriptlet"),_st("wvx").__minus_gt("video/x-ms-wvx"),_st("wz").__minus_gt("application/x-wingz"),_st("xbm").__minus_gt("image/x-xbitmap"),_st("xcf").__minus_gt("application/x-xcf"),_st("xht").__minus_gt("application/xhtml+xml"),_st("xhtml").__minus_gt("application/xhtml+xml"),_st("xlb").__minus_gt("application/vnd.ms-excel"),_st("xls").__minus_gt("application/vnd.ms-excel"),_st("xlt").__minus_gt("application/vnd.ms-excel"),_st("xml").__minus_gt("application/xml"),_st("xpi").__minus_gt("application/x-xpinstall"),_st("xpm").__minus_gt("image/x-xpixmap"),_st("xsl").__minus_gt("application/xml"),_st("xtel").__minus_gt("chemical/x-xtel"),_st("xul").__minus_gt("application/vnd.mozilla.xul+xml"),_st("xwd").__minus_gt("image/x-xwindowdump"),_st("xyz").__minus_gt("chemical/x-xyz"),_st("zip").__minus_gt("application/zip"),_st("zmt").__minus_gt("chemical/x-mopac-input"),_st("~").__minus_gt("application/x-trash")]);
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
var $1;
$1=(4000);
return $1;
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
$1=_st(_st(self)._mimeTypes())._at_ifAbsent_(_st(aString)._replace_with_(".*[\x5c.]",""),(function(){
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
self["@mimeTypes"]=_st(self)._defaultMimeTypes();
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
_st(_st(self)._commandLineSwitches())._do_((function(each){
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


smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util'], 'AmberCli');
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
selector: "createInterface",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interface"]=_st(self["@readline"])._createInterface_stdout_(_st(process)._stdin(),_st(process)._stdout());
_st(self["@interface"])._on_do_("line",(function(buffer){
return smalltalk.withContext(function($ctx2) {
return _st(self)._eval_(buffer);
}, function($ctx2) {$ctx2.fillBlock({buffer:buffer},$ctx1)})}));
_st(self["@interface"])._on_do_("close",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._close();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._setPrompt();
_st(self["@interface"])._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"createInterface",{},smalltalk.Repl)})},
args: [],
source: "createInterface\x0a\x09\x22No completion for now\x22\x0a\x09interface := readline createInterface: process stdin stdout: process stdout.\x0a\x09interface on: 'line' do: [:buffer  | self eval: buffer].\x0a\x09interface on: 'close' do: [self close].\x0a\x09self setPrompt.\x0a\x09interface prompt",
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "eval:", "close", "setPrompt", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
category: 'actions',
fn: function (buffer){
var self=this;
var result;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(buffer)._isEmpty();
if(! smalltalk.assert($1)){
_st(self)._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(_st($Compiler())._new())._evaluateExpression_(buffer);
result;
return _st($Transcript())._show_(result);
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
_st(self["@interface"])._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"eval:",{buffer:buffer,result:result},smalltalk.Repl)})},
args: ["buffer"],
source: "eval: buffer\x0a\x09| result |\x0a\x09buffer isEmpty ifFalse: [\x0a\x09\x09self try: [\x0a\x09\x09\x09result := Compiler new evaluateExpression: buffer.\x0a\x09\x09\x09Transcript show: result]\x0a\x09\x09catch: [:e |\x0a\x09\x09\x09e isSmalltalkError\x0a\x09\x09\x09    ifTrue: [ErrorHandler new handleError: e]\x0a\x09\x09\x09    ifFalse: [process stdout write: e jsStack]]].\x0a\x09interface prompt",
messageSends: ["ifFalse:", "try:catch:", "evaluateExpression:", "new", "show:", "ifTrue:ifFalse:", "handleError:", "write:", "jsStack", "stdout", "isSmalltalkError", "isEmpty", "prompt"],
referencedClasses: ["Compiler", "Transcript", "ErrorHandler"]
}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@readline"]=_st(require)._value_("readline");
self["@util"]=_st(require)._value_("util");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Repl)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09readline := require value: 'readline'.\x0a\x09util := require value: 'util'",
messageSends: ["initialize", "value:"],
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
selector: "setPrompt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interface"])._setPrompt_(_st(self)._prompt());
return self}, function($ctx1) {$ctx1.fill(self,"setPrompt",{},smalltalk.Repl)})},
args: [],
source: "setPrompt\x0a\x09interface setPrompt: self prompt",
messageSends: ["setPrompt:", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._createInterface();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.Repl.klass)})},
args: [],
source: "main\x0a\x09self new createInterface",
messageSends: ["createInterface", "new"],
referencedClasses: []
}),
smalltalk.Repl.klass);


