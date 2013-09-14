smalltalk.addPackage('AmberCli');
smalltalk.addClass('AmberCli', smalltalk.Object, [], 'AmberCli');

smalltalk.addMethod(
smalltalk.method({
selector: "commandLineSwitches",
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
messageSends: ["collect:", "selector", "methodsInProtocol:", "class", "select:", "match:", "asLowercase", "replace:with:", "allButLast"]}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "handleArguments:",
fn: function (args){
var self=this;
var selector;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
selector=self._selectorForCommandLineSwitch_(_st(args)._first());
_st(args)._remove_(_st(args)._first());
self._perform_withArguments_(selector,_st($Array())._with_(args));
return self}, function($ctx1) {$ctx1.fill(self,"handleArguments:",{args:args,selector:selector},smalltalk.AmberCli.klass)})},
messageSends: ["selectorForCommandLineSwitch:", "first", "remove:", "perform:withArguments:", "with:"]}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "help:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_("Available Commands:");
_st(self._commandLineSwitches())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"help:",{args:args},smalltalk.AmberCli.klass)})},
messageSends: ["log:", "do:", "commandLineSwitches"]}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
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
messageSends: ["asNumber", "second", "tokenize:", "version", "ifTrue:", "log:", ",", "<", "argv", "removeFrom:to:", "ifTrue:ifFalse:", "help:", "handleArguments:", "isEmpty"]}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "repl:",
fn: function (args){
var self=this;
function $Repl(){return smalltalk.Repl||(typeof Repl=="undefined"?nil:Repl)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Repl())._new())._createInterface();
return $1;
}, function($ctx1) {$ctx1.fill(self,"repl:",{args:args},smalltalk.AmberCli.klass)})},
messageSends: ["createInterface", "new"]}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorForCommandLineSwitch:",
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
messageSends: ["ifTrue:ifFalse:", ",", "replace:with:", "asUppercase", "second", "includes:", "commandLineSwitches"]}),
smalltalk.AmberCli.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "serve:",
fn: function (args){
var self=this;
function $FileServer(){return smalltalk.FileServer||(typeof FileServer=="undefined"?nil:FileServer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($FileServer())._createServerWithArguments_(args))._start();
return $1;
}, function($ctx1) {$ctx1.fill(self,"serve:",{args:args},smalltalk.AmberCli.klass)})},
messageSends: ["start", "createServerWithArguments:"]}),
smalltalk.AmberCli.klass);


smalltalk.addClass('FileServer', smalltalk.Object, ['path', 'http', 'fs', 'url', 'host', 'port', 'basePath', 'util', 'username', 'password', 'fallbackPage'], 'AmberCli');
smalltalk.addMethod(
smalltalk.method({
selector: "base64Decode:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (new Buffer(aString, 'base64').toString());
return self}, function($ctx1) {$ctx1.fill(self,"base64Decode:",{aString:aString},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "basePath",
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
messageSends: ["ifNil:"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "basePath:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@basePath"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"basePath:",{aString:aString},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "checkDirectoryLayout",
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
messageSends: ["ifFalse:", "warn:", "existsSync:", ",", "basePath"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "fallbackPage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fallbackPage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fallbackPage",{},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "fallbackPage:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fallbackPage"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"fallbackPage:",{aString:aString},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleGETRequest:respondTo:",
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
messageSends: ["pathname", "parse:", "url", "join:with:", "basePath", "exists:do:", "ifFalse:ifTrue:", "respondNotFoundTo:", "respondFileNamed:to:"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleOPTIONSRequest:respondTo:",
fn: function (aRequest,aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aResponse)._writeHead_options_((200),smalltalk.HashedCollection._from_(["Access-Control-Allow-Origin".__minus_gt("*"),"Access-Control-Allow-Methods".__minus_gt("GET, PUT, POST, DELETE, OPTIONS"),"Access-Control-Allow-Headers".__minus_gt("Content-Type, Accept"),"Content-Length".__minus_gt((0)),"Access-Control-Max-Age".__minus_gt((10))]));
_st(aResponse)._end();
return self}, function($ctx1) {$ctx1.fill(self,"handleOPTIONSRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse},smalltalk.FileServer)})},
messageSends: ["writeHead:options:", "->", "end"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handlePUTRequest:respondTo:",
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
messageSends: ["ifFalse:", "respondAuthenticationRequiredTo:", "isAuthenticated:", ",", "url", "createWriteStream:", "on:do:", "warn:", "respondNotCreatedTo:", "respondCreatedTo:", "setEncoding:", "write:", "ifTrue:", "end", "writable"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleRequest:respondTo:",
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
messageSends: ["ifTrue:", "handlePUTRequest:respondTo:", "=", "method", "handleGETRequest:respondTo:", "handleOPTIONSRequest:respondTo:"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "host",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@host"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"host",{},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "host:",
fn: function (hostname){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@host"]=hostname;
return self}, function($ctx1) {$ctx1.fill(self,"host:",{hostname:hostname},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "require:", "defaultHost", "class", "defaultPort"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "isAuthenticated:",
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
messageSends: ["ifTrue:", "and:", "isNil", "ifNil:", "at:", "headers", "ifTrue:ifFalse:", "tokenize:", "base64Decode:", "=", "isEmpty"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "password:",
fn: function (aPassword){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@password"]=aPassword;
return self}, function($ctx1) {$ctx1.fill(self,"password:",{aPassword:aPassword},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "port",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@port"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"port",{},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "port:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@port"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"port:",{aNumber:aNumber},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "require:",
fn: function (aModuleString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(require)._value_(aModuleString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"require:",{aModuleString:aModuleString},smalltalk.FileServer)})},
messageSends: ["value:"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondAuthenticationRequiredTo:",
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((401),smalltalk.HashedCollection._from_(["WWW-Authenticate".__minus_gt("Basic realm=\x22Secured Developer Area\x22")]));
_st($1)._write_("<html><body>Authentication needed</body></html>");
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondAuthenticationRequiredTo:",{aResponse:aResponse},smalltalk.FileServer)})},
messageSends: ["writeHead:options:", "->", "write:", "end"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondCreatedTo:",
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((201),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain"),"Access-Control-Allow-Origin".__minus_gt("*")]));
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondCreatedTo:",{aResponse:aResponse},smalltalk.FileServer)})},
messageSends: ["writeHead:options:", "->", "end"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondFileNamed:to:",
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
messageSends: ["ifTrue:", ",", "isDirectory", "statSync:", "readFile:do:", "ifTrue:ifFalse:", "log:", "respondInternalErrorTo:", "mimeTypeFor:", "class", "=", "writeHead:options:", "->", "write:encoding:", "end", "notNil"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondInternalErrorTo:",
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((500),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain")]));
_st($1)._write_("500 Internal server error");
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondInternalErrorTo:",{aResponse:aResponse},smalltalk.FileServer)})},
messageSends: ["writeHead:options:", "->", "write:", "end"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondNotCreatedTo:",
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((400),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain")]));
_st($1)._write_("File could not be created. Did you forget to create the st/js directories on the server?");
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondNotCreatedTo:",{aResponse:aResponse},smalltalk.FileServer)})},
messageSends: ["writeHead:options:", "->", "write:", "end"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondNotFoundTo:",
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
messageSends: ["ifFalse:", "respondFileNamed:to:", "fallbackPage", "isNil", "writeHead:options:", "->", "write:", "end"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondOKTo:",
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((200),smalltalk.HashedCollection._from_(["Content-Type".__minus_gt("text/plain"),"Access-Control-Allow-Origin".__minus_gt("*")]));
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondOKTo:",{aResponse:aResponse},smalltalk.FileServer)})},
messageSends: ["writeHead:options:", "->", "end"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
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
messageSends: ["checkDirectoryLayout", "on:do:", "log:", ",", "createServer:", "handleRequest:respondTo:", "asString", "port", "host", "listen:host:"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "startOn:",
fn: function (aPort){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._port_(aPort);
self._start();
return self}, function($ctx1) {$ctx1.fill(self,"startOn:",{aPort:aPort},smalltalk.FileServer)})},
messageSends: ["port:", "start"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "username:",
fn: function (aUsername){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@username"]=aUsername;
return self}, function($ctx1) {$ctx1.fill(self,"username:",{aUsername:aUsername},smalltalk.FileServer)})},
messageSends: []}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "writeData:toFileNamed:",
fn: function (data,aFilename){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(aFilename);
return self}, function($ctx1) {$ctx1.fill(self,"writeData:toFileNamed:",{data:data,aFilename:aFilename},smalltalk.FileServer)})},
messageSends: ["log:"]}),
smalltalk.FileServer);


smalltalk.FileServer.klass.iVarNames = ['mimeTypes'];
smalltalk.addMethod(
smalltalk.method({
selector: "commandLineSwitches",
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
messageSends: ["collect:", "selector", "methodsInProtocol:", "select:", "match:", "replace:with:", "asLowercase", "allButLast"]}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createServerWithArguments:",
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
messageSends: ["commandLineSwitches", "new", "ifEmpty:", "ifFalse:", "log:", ",", "even", "size", "first", "remove:", "whileTrue:", "value:", "ifTrue:ifFalse:", "selectorForCommandLineSwitch:", "perform:withArguments:", "with:", "includes:", "notEmpty"]}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHost",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "127.0.0.1";
}, function($ctx1) {$ctx1.fill(self,"defaultHost",{},smalltalk.FileServer.klass)})},
messageSends: []}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMimeTypes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["%".__minus_gt("application/x-trash"),"323".__minus_gt("text/h323"),"abw".__minus_gt("application/x-abiword"),"ai".__minus_gt("application/postscript"),"aif".__minus_gt("audio/x-aiff"),"aifc".__minus_gt("audio/x-aiff"),"aiff".__minus_gt("audio/x-aiff"),"alc".__minus_gt("chemical/x-alchemy"),"art".__minus_gt("image/x-jg"),"asc".__minus_gt("text/plain"),"asf".__minus_gt("video/x-ms-asf"),"asn".__minus_gt("chemical/x-ncbi-asn1-spec"),"aso".__minus_gt("chemical/x-ncbi-asn1-binary"),"asx".__minus_gt("video/x-ms-asf"),"au".__minus_gt("audio/basic"),"avi".__minus_gt("video/x-msvideo"),"b".__minus_gt("chemical/x-molconn-Z"),"bak".__minus_gt("application/x-trash"),"bat".__minus_gt("application/x-msdos-program"),"bcpio".__minus_gt("application/x-bcpio"),"bib".__minus_gt("text/x-bibtex"),"bin".__minus_gt("application/octet-stream"),"bmp".__minus_gt("image/x-ms-bmp"),"book".__minus_gt("application/x-maker"),"bsd".__minus_gt("chemical/x-crossfire"),"c".__minus_gt("text/x-csrc"),"c++".__minus_gt("text/x-c++src"),"c3d".__minus_gt("chemical/x-chem3d"),"cac".__minus_gt("chemical/x-cache"),"cache".__minus_gt("chemical/x-cache"),"cascii".__minus_gt("chemical/x-cactvs-binary"),"cat".__minus_gt("application/vnd.ms-pki.seccat"),"cbin".__minus_gt("chemical/x-cactvs-binary"),"cc".__minus_gt("text/x-c++src"),"cdf".__minus_gt("application/x-cdf"),"cdr".__minus_gt("image/x-coreldraw"),"cdt".__minus_gt("image/x-coreldrawtemplate"),"cdx".__minus_gt("chemical/x-cdx"),"cdy".__minus_gt("application/vnd.cinderella"),"cef".__minus_gt("chemical/x-cxf"),"cer".__minus_gt("chemical/x-cerius"),"chm".__minus_gt("chemical/x-chemdraw"),"chrt".__minus_gt("application/x-kchart"),"cif".__minus_gt("chemical/x-cif"),"class".__minus_gt("application/java-vm"),"cls".__minus_gt("text/x-tex"),"cmdf".__minus_gt("chemical/x-cmdf"),"cml".__minus_gt("chemical/x-cml"),"cod".__minus_gt("application/vnd.rim.cod"),"com".__minus_gt("application/x-msdos-program"),"cpa".__minus_gt("chemical/x-compass"),"cpio".__minus_gt("application/x-cpio"),"cpp".__minus_gt("text/x-c++src"),"cpt".__minus_gt("image/x-corelphotopaint"),"crl".__minus_gt("application/x-pkcs7-crl"),"crt".__minus_gt("application/x-x509-ca-cert"),"csf".__minus_gt("chemical/x-cache-csf"),"csh".__minus_gt("text/x-csh"),"csm".__minus_gt("chemical/x-csml"),"csml".__minus_gt("chemical/x-csml"),"css".__minus_gt("text/css"),"csv".__minus_gt("text/comma-separated-values"),"ctab".__minus_gt("chemical/x-cactvs-binary"),"ctx".__minus_gt("chemical/x-ctx"),"cu".__minus_gt("application/cu-seeme"),"cub".__minus_gt("chemical/x-gaussian-cube"),"cxf".__minus_gt("chemical/x-cxf"),"cxx".__minus_gt("text/x-c++src"),"dat".__minus_gt("chemical/x-mopac-input"),"dcr".__minus_gt("application/x-director"),"deb".__minus_gt("application/x-debian-package"),"dif".__minus_gt("video/dv"),"diff".__minus_gt("text/plain"),"dir".__minus_gt("application/x-director"),"djv".__minus_gt("image/vnd.djvu"),"djvu".__minus_gt("image/vnd.djvu"),"dl".__minus_gt("video/dl"),"dll".__minus_gt("application/x-msdos-program"),"dmg".__minus_gt("application/x-apple-diskimage"),"dms".__minus_gt("application/x-dms"),"doc".__minus_gt("application/msword"),"dot".__minus_gt("application/msword"),"dv".__minus_gt("video/dv"),"dvi".__minus_gt("application/x-dvi"),"dx".__minus_gt("chemical/x-jcamp-dx"),"dxr".__minus_gt("application/x-director"),"emb".__minus_gt("chemical/x-embl-dl-nucleotide"),"embl".__minus_gt("chemical/x-embl-dl-nucleotide"),"ent".__minus_gt("chemical/x-pdb"),"eps".__minus_gt("application/postscript"),"etx".__minus_gt("text/x-setext"),"exe".__minus_gt("application/x-msdos-program"),"ez".__minus_gt("application/andrew-inset"),"fb".__minus_gt("application/x-maker"),"fbdoc".__minus_gt("application/x-maker"),"fch".__minus_gt("chemical/x-gaussian-checkpoint"),"fchk".__minus_gt("chemical/x-gaussian-checkpoint"),"fig".__minus_gt("application/x-xfig"),"flac".__minus_gt("application/x-flac"),"fli".__minus_gt("video/fli"),"fm".__minus_gt("application/x-maker"),"frame".__minus_gt("application/x-maker"),"frm".__minus_gt("application/x-maker"),"gal".__minus_gt("chemical/x-gaussian-log"),"gam".__minus_gt("chemical/x-gamess-input"),"gamin".__minus_gt("chemical/x-gamess-input"),"gau".__minus_gt("chemical/x-gaussian-input"),"gcd".__minus_gt("text/x-pcs-gcd"),"gcf".__minus_gt("application/x-graphing-calculator"),"gcg".__minus_gt("chemical/x-gcg8-sequence"),"gen".__minus_gt("chemical/x-genbank"),"gf".__minus_gt("application/x-tex-gf"),"gif".__minus_gt("image/gif"),"gjc".__minus_gt("chemical/x-gaussian-input"),"gjf".__minus_gt("chemical/x-gaussian-input"),"gl".__minus_gt("video/gl"),"gnumeric".__minus_gt("application/x-gnumeric"),"gpt".__minus_gt("chemical/x-mopac-graph"),"gsf".__minus_gt("application/x-font"),"gsm".__minus_gt("audio/x-gsm"),"gtar".__minus_gt("application/x-gtar"),"h".__minus_gt("text/x-chdr"),"h++".__minus_gt("text/x-c++hdr"),"hdf".__minus_gt("application/x-hdf"),"hh".__minus_gt("text/x-c++hdr"),"hin".__minus_gt("chemical/x-hin"),"hpp".__minus_gt("text/x-c++hdr"),"hqx".__minus_gt("application/mac-binhex40"),"hs".__minus_gt("text/x-haskell"),"hta".__minus_gt("application/hta"),"htc".__minus_gt("text/x-component"),"htm".__minus_gt("text/html"),"html".__minus_gt("text/html"),"hxx".__minus_gt("text/x-c++hdr"),"ica".__minus_gt("application/x-ica"),"ice".__minus_gt("x-conference/x-cooltalk"),"ico".__minus_gt("image/x-icon"),"ics".__minus_gt("text/calendar"),"icz".__minus_gt("text/calendar"),"ief".__minus_gt("image/ief"),"iges".__minus_gt("model/iges"),"igs".__minus_gt("model/iges"),"iii".__minus_gt("application/x-iphone"),"inp".__minus_gt("chemical/x-gamess-input"),"ins".__minus_gt("application/x-internet-signup"),"iso".__minus_gt("application/x-iso9660-image"),"isp".__minus_gt("application/x-internet-signup"),"ist".__minus_gt("chemical/x-isostar"),"istr".__minus_gt("chemical/x-isostar"),"jad".__minus_gt("text/vnd.sun.j2me.app-descriptor"),"jar".__minus_gt("application/java-archive"),"java".__minus_gt("text/x-java"),"jdx".__minus_gt("chemical/x-jcamp-dx"),"jmz".__minus_gt("application/x-jmol"),"jng".__minus_gt("image/x-jng"),"jnlp".__minus_gt("application/x-java-jnlp-file"),"jpe".__minus_gt("image/jpeg"),"jpeg".__minus_gt("image/jpeg"),"jpg".__minus_gt("image/jpeg"),"js".__minus_gt("application/javascript"),"kar".__minus_gt("audio/midi"),"key".__minus_gt("application/pgp-keys"),"kil".__minus_gt("application/x-killustrator"),"kin".__minus_gt("chemical/x-kinemage"),"kpr".__minus_gt("application/x-kpresenter"),"kpt".__minus_gt("application/x-kpresenter"),"ksp".__minus_gt("application/x-kspread"),"kwd".__minus_gt("application/x-kword"),"kwt".__minus_gt("application/x-kword"),"latex".__minus_gt("application/x-latex"),"lha".__minus_gt("application/x-lha"),"lhs".__minus_gt("text/x-literate-haskell"),"lsf".__minus_gt("video/x-la-asf"),"lsx".__minus_gt("video/x-la-asf"),"ltx".__minus_gt("text/x-tex"),"lzh".__minus_gt("application/x-lzh"),"lzx".__minus_gt("application/x-lzx"),"m3u".__minus_gt("audio/x-mpegurl"),"m4a".__minus_gt("audio/mpeg"),"maker".__minus_gt("application/x-maker"),"man".__minus_gt("application/x-troff-man"),"mcif".__minus_gt("chemical/x-mmcif"),"mcm".__minus_gt("chemical/x-macmolecule"),"mdb".__minus_gt("application/msaccess"),"me".__minus_gt("application/x-troff-me"),"mesh".__minus_gt("model/mesh"),"mid".__minus_gt("audio/midi"),"midi".__minus_gt("audio/midi"),"mif".__minus_gt("application/x-mif"),"mm".__minus_gt("application/x-freemind"),"mmd".__minus_gt("chemical/x-macromodel-input"),"mmf".__minus_gt("application/vnd.smaf"),"mml".__minus_gt("text/mathml"),"mmod".__minus_gt("chemical/x-macromodel-input"),"mng".__minus_gt("video/x-mng"),"moc".__minus_gt("text/x-moc"),"mol".__minus_gt("chemical/x-mdl-molfile"),"mol2".__minus_gt("chemical/x-mol2"),"moo".__minus_gt("chemical/x-mopac-out"),"mop".__minus_gt("chemical/x-mopac-input"),"mopcrt".__minus_gt("chemical/x-mopac-input"),"mov".__minus_gt("video/quicktime"),"movie".__minus_gt("video/x-sgi-movie"),"mp2".__minus_gt("audio/mpeg"),"mp3".__minus_gt("audio/mpeg"),"mp4".__minus_gt("video/mp4"),"mpc".__minus_gt("chemical/x-mopac-input"),"mpe".__minus_gt("video/mpeg"),"mpeg".__minus_gt("video/mpeg"),"mpega".__minus_gt("audio/mpeg"),"mpg".__minus_gt("video/mpeg"),"mpga".__minus_gt("audio/mpeg"),"ms".__minus_gt("application/x-troff-ms"),"msh".__minus_gt("model/mesh"),"msi".__minus_gt("application/x-msi"),"mvb".__minus_gt("chemical/x-mopac-vib"),"mxu".__minus_gt("video/vnd.mpegurl"),"nb".__minus_gt("application/mathematica"),"nc".__minus_gt("application/x-netcdf"),"nwc".__minus_gt("application/x-nwc"),"o".__minus_gt("application/x-object"),"oda".__minus_gt("application/oda"),"odb".__minus_gt("application/vnd.oasis.opendocument.database"),"odc".__minus_gt("application/vnd.oasis.opendocument.chart"),"odf".__minus_gt("application/vnd.oasis.opendocument.formula"),"odg".__minus_gt("application/vnd.oasis.opendocument.graphics"),"odi".__minus_gt("application/vnd.oasis.opendocument.image"),"odm".__minus_gt("application/vnd.oasis.opendocument.text-master"),"odp".__minus_gt("application/vnd.oasis.opendocument.presentation"),"ods".__minus_gt("application/vnd.oasis.opendocument.spreadsheet"),"odt".__minus_gt("application/vnd.oasis.opendocument.text"),"ogg".__minus_gt("application/ogg"),"old".__minus_gt("application/x-trash"),"oth".__minus_gt("application/vnd.oasis.opendocument.text-web"),"oza".__minus_gt("application/x-oz-application"),"p".__minus_gt("text/x-pascal"),"p7r".__minus_gt("application/x-pkcs7-certreqresp"),"pac".__minus_gt("application/x-ns-proxy-autoconfig"),"pas".__minus_gt("text/x-pascal"),"pat".__minus_gt("image/x-coreldrawpattern"),"pbm".__minus_gt("image/x-portable-bitmap"),"pcf".__minus_gt("application/x-font"),"pcf.Z".__minus_gt("application/x-font"),"pcx".__minus_gt("image/pcx"),"pdb".__minus_gt("chemical/x-pdb"),"pdf".__minus_gt("application/pdf"),"pfa".__minus_gt("application/x-font"),"pfb".__minus_gt("application/x-font"),"pgm".__minus_gt("image/x-portable-graymap"),"pgn".__minus_gt("application/x-chess-pgn"),"pgp".__minus_gt("application/pgp-signature"),"pk".__minus_gt("application/x-tex-pk"),"pl".__minus_gt("text/x-perl"),"pls".__minus_gt("audio/x-scpls"),"pm".__minus_gt("text/x-perl"),"png".__minus_gt("image/png"),"pnm".__minus_gt("image/x-portable-anymap"),"pot".__minus_gt("text/plain"),"ppm".__minus_gt("image/x-portable-pixmap"),"pps".__minus_gt("application/vnd.ms-powerpoint"),"ppt".__minus_gt("application/vnd.ms-powerpoint"),"prf".__minus_gt("application/pics-rules"),"prt".__minus_gt("chemical/x-ncbi-asn1-ascii"),"ps".__minus_gt("application/postscript"),"psd".__minus_gt("image/x-photoshop"),"psp".__minus_gt("text/x-psp"),"py".__minus_gt("text/x-python"),"pyc".__minus_gt("application/x-python-code"),"pyo".__minus_gt("application/x-python-code"),"qt".__minus_gt("video/quicktime"),"qtl".__minus_gt("application/x-quicktimeplayer"),"ra".__minus_gt("audio/x-realaudio"),"ram".__minus_gt("audio/x-pn-realaudio"),"rar".__minus_gt("application/rar"),"ras".__minus_gt("image/x-cmu-raster"),"rd".__minus_gt("chemical/x-mdl-rdfile"),"rdf".__minus_gt("application/rdf+xml"),"rgb".__minus_gt("image/x-rgb"),"rm".__minus_gt("audio/x-pn-realaudio"),"roff".__minus_gt("application/x-troff"),"ros".__minus_gt("chemical/x-rosdal"),"rpm".__minus_gt("application/x-redhat-package-manager"),"rss".__minus_gt("application/rss+xml"),"rtf".__minus_gt("text/rtf"),"rtx".__minus_gt("text/richtext"),"rxn".__minus_gt("chemical/x-mdl-rxnfile"),"sct".__minus_gt("text/scriptlet"),"sd".__minus_gt("chemical/x-mdl-sdfile"),"sd2".__minus_gt("audio/x-sd2"),"sda".__minus_gt("application/vnd.stardivision.draw"),"sdc".__minus_gt("application/vnd.stardivision.calc"),"sdd".__minus_gt("application/vnd.stardivision.impress"),"sdf".__minus_gt("chemical/x-mdl-sdfile"),"sdp".__minus_gt("application/vnd.stardivision.impress"),"sdw".__minus_gt("application/vnd.stardivision.writer"),"ser".__minus_gt("application/java-serialized-object"),"sgf".__minus_gt("application/x-go-sgf"),"sgl".__minus_gt("application/vnd.stardivision.writer-global"),"sh".__minus_gt("text/x-sh"),"shar".__minus_gt("application/x-shar"),"shtml".__minus_gt("text/html"),"sid".__minus_gt("audio/prs.sid"),"sik".__minus_gt("application/x-trash"),"silo".__minus_gt("model/mesh"),"sis".__minus_gt("application/vnd.symbian.install"),"sit".__minus_gt("application/x-stuffit"),"skd".__minus_gt("application/x-koan"),"skm".__minus_gt("application/x-koan"),"skp".__minus_gt("application/x-koan"),"skt".__minus_gt("application/x-koan"),"smf".__minus_gt("application/vnd.stardivision.math"),"smi".__minus_gt("application/smil"),"smil".__minus_gt("application/smil"),"snd".__minus_gt("audio/basic"),"spc".__minus_gt("chemical/x-galactic-spc"),"spl".__minus_gt("application/x-futuresplash"),"src".__minus_gt("application/x-wais-source"),"stc".__minus_gt("application/vnd.sun.xml.calc.template"),"std".__minus_gt("application/vnd.sun.xml.draw.template"),"sti".__minus_gt("application/vnd.sun.xml.impress.template"),"stl".__minus_gt("application/vnd.ms-pki.stl"),"stw".__minus_gt("application/vnd.sun.xml.writer.template"),"sty".__minus_gt("text/x-tex"),"sv4cpio".__minus_gt("application/x-sv4cpio"),"sv4crc".__minus_gt("application/x-sv4crc"),"svg".__minus_gt("image/svg+xml"),"svgz".__minus_gt("image/svg+xml"),"sw".__minus_gt("chemical/x-swissprot"),"swf".__minus_gt("application/x-shockwave-flash"),"swfl".__minus_gt("application/x-shockwave-flash"),"sxc".__minus_gt("application/vnd.sun.xml.calc"),"sxd".__minus_gt("application/vnd.sun.xml.draw"),"sxg".__minus_gt("application/vnd.sun.xml.writer.global"),"sxi".__minus_gt("application/vnd.sun.xml.impress"),"sxm".__minus_gt("application/vnd.sun.xml.math"),"sxw".__minus_gt("application/vnd.sun.xml.writer"),"t".__minus_gt("application/x-troff"),"tar".__minus_gt("application/x-tar"),"taz".__minus_gt("application/x-gtar"),"tcl".__minus_gt("text/x-tcl"),"tex".__minus_gt("text/x-tex"),"texi".__minus_gt("application/x-texinfo"),"texinfo".__minus_gt("application/x-texinfo"),"text".__minus_gt("text/plain"),"tgf".__minus_gt("chemical/x-mdl-tgf"),"tgz".__minus_gt("application/x-gtar"),"tif".__minus_gt("image/tiff"),"tiff".__minus_gt("image/tiff"),"tk".__minus_gt("text/x-tcl"),"tm".__minus_gt("text/texmacs"),"torrent".__minus_gt("application/x-bittorrent"),"tr".__minus_gt("application/x-troff"),"ts".__minus_gt("text/texmacs"),"tsp".__minus_gt("application/dsptype"),"tsv".__minus_gt("text/tab-separated-values"),"txt".__minus_gt("text/plain"),"udeb".__minus_gt("application/x-debian-package"),"uls".__minus_gt("text/iuls"),"ustar".__minus_gt("application/x-ustar"),"val".__minus_gt("chemical/x-ncbi-asn1-binary"),"vcd".__minus_gt("application/x-cdlink"),"vcf".__minus_gt("text/x-vcard"),"vcs".__minus_gt("text/x-vcalendar"),"vmd".__minus_gt("chemical/x-vmd"),"vms".__minus_gt("chemical/x-vamas-iso14976"),"vor".__minus_gt("application/vnd.stardivision.writer"),"vrm".__minus_gt("x-world/x-vrml"),"vrml".__minus_gt("x-world/x-vrml"),"vsd".__minus_gt("application/vnd.visio"),"wad".__minus_gt("application/x-doom"),"wav".__minus_gt("audio/x-wav"),"wax".__minus_gt("audio/x-ms-wax"),"wbmp".__minus_gt("image/vnd.wap.wbmp"),"wbxml".__minus_gt("application/vnd.wap.wbxml"),"wk".__minus_gt("application/x-123"),"wm".__minus_gt("video/x-ms-wm"),"wma".__minus_gt("audio/x-ms-wma"),"wmd".__minus_gt("application/x-ms-wmd"),"wml".__minus_gt("text/vnd.wap.wml"),"wmlc".__minus_gt("application/vnd.wap.wmlc"),"wmls".__minus_gt("text/vnd.wap.wmlscript"),"wmlsc".__minus_gt("application/vnd.wap.wmlscriptc"),"wmv".__minus_gt("video/x-ms-wmv"),"wmx".__minus_gt("video/x-ms-wmx"),"wmz".__minus_gt("application/x-ms-wmz"),"wp5".__minus_gt("application/wordperfect5.1"),"wpd".__minus_gt("application/wordperfect"),"wrl".__minus_gt("x-world/x-vrml"),"wsc".__minus_gt("text/scriptlet"),"wvx".__minus_gt("video/x-ms-wvx"),"wz".__minus_gt("application/x-wingz"),"xbm".__minus_gt("image/x-xbitmap"),"xcf".__minus_gt("application/x-xcf"),"xht".__minus_gt("application/xhtml+xml"),"xhtml".__minus_gt("application/xhtml+xml"),"xlb".__minus_gt("application/vnd.ms-excel"),"xls".__minus_gt("application/vnd.ms-excel"),"xlt".__minus_gt("application/vnd.ms-excel"),"xml".__minus_gt("application/xml"),"xpi".__minus_gt("application/x-xpinstall"),"xpm".__minus_gt("image/x-xpixmap"),"xsl".__minus_gt("application/xml"),"xtel".__minus_gt("chemical/x-xtel"),"xul".__minus_gt("application/vnd.mozilla.xul+xml"),"xwd".__minus_gt("image/x-xwindowdump"),"xyz".__minus_gt("chemical/x-xyz"),"zip".__minus_gt("application/zip"),"zmt".__minus_gt("chemical/x-mopac-input"),"~".__minus_gt("application/x-trash")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultMimeTypes",{},smalltalk.FileServer.klass)})},
messageSends: ["->"]}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultPort",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (4000);
}, function($ctx1) {$ctx1.fill(self,"defaultPort",{},smalltalk.FileServer.klass)})},
messageSends: []}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
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
messageSends: ["argv", "removeFrom:to:", "detect:ifNone:", "ifTrue:", "printHelp", "=", "createServerWithArguments:", "start"]}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mimeTypeFor:",
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
messageSends: ["at:ifAbsent:", "replace:with:", "mimeTypes"]}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mimeTypes",
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
messageSends: ["ifNil:", "defaultMimeTypes"]}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "printHelp",
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
messageSends: ["log:", "do:", ",", "commandLineSwitches"]}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorForCommandLineSwitch:",
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
messageSends: [",", "replace:with:", "asUppercase", "second"]}),
smalltalk.FileServer.klass);


smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util', 'session', 'resultCount'], 'AmberCli');
smalltalk.addMethod(
smalltalk.method({
selector: "addVariableNamed:to:",
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
messageSends: ["subclass:withVariable:", "class", "encapsulateVariable:withValue:in:", "new", "setPreviousVariablesFor:from:"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "assignNewVariable:do:",
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
messageSends: ["parseAssignment:do:", "ifNil:", "nextResultName", "addVariableNamed:to:", "eval:on:", ",", "value:value:"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(process)._stdin())._destroy();
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.Repl)})},
messageSends: ["destroy", "stdin"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "createInterface",
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
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "processLine:", "close", "printWelcome", "setupHotkeys", "setPrompt", "prompt"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "encapsulateVariable:withValue:in:",
fn: function (aString,anObject,aClass){
var self=this;
var compiler;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
compiler=_st($Compiler())._new();
_st(compiler)._install_forClass_category_(_st(_st(_st(aString).__comma(": anObject ^ ")).__comma(aString)).__comma(" := anObject"),aClass,"session");
_st(compiler)._install_forClass_category_(_st(_st(aString).__comma(" ^ ")).__comma(aString),aClass,"session");
return self}, function($ctx1) {$ctx1.fill(self,"encapsulateVariable:withValue:in:",{aString:aString,anObject:anObject,aClass:aClass,compiler:compiler},smalltalk.Repl)})},
messageSends: ["new", "install:forClass:category:", ","]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
fn: function (buffer){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._eval_on_(buffer,_st($DoIt())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"eval:",{buffer:buffer},smalltalk.Repl)})},
messageSends: ["eval:on:", "new"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
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
messageSends: ["ifFalse:", "try:catch:", "evaluateExpression:on:", "new", "ifTrue:ifFalse:", "handleError:", "write:", "jsStack", "stdout", "isSmalltalkError", "isEmpty"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "executeCommand:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aString).__eq(":q");
if(smalltalk.assert($2)){
$1=_st(process)._exit();
} else {
$1=false;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeCommand:",{aString:aString},smalltalk.Repl)})},
messageSends: ["ifTrue:ifFalse:", "exit", "="]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@session"]=_st($DoIt())._new();
self["@readline"]=_st(require)._value_("readline");
self["@util"]=_st(require)._value_("util");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Repl)})},
messageSends: ["initialize", "new", "value:"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNamesFor:",
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
messageSends: ["ifNotNil:ifNil:", "copyWithAll:", "instanceVariableNamesFor:", "superclass", "instanceVariableNames"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "isIdentifier:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aString)._match_("^[a-z_]\x5cw+$"._asRegexp());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isIdentifier:",{aString:aString},smalltalk.Repl)})},
messageSends: ["match:", "asRegexp"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariableDefined:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instanceVariableNamesFor_(_st(self["@session"])._class()))._includes_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVariableDefined:",{aString:aString},smalltalk.Repl)})},
messageSends: ["includes:", "instanceVariableNamesFor:", "class"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "nextResultName",
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
messageSends: ["ifNotNil:ifNil:", "+", ",", "asString"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPress:",
fn: function (key){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(key)._ctrl())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(key)._name()).__eq("l");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
var esc,cls;
esc=_st($String())._fromCharCode_((27));
esc;
cls=_st(_st(_st(esc).__comma("[2J")).__comma(esc)).__comma("[0;0f");
cls;
_st(_st(process)._stdout())._write_(cls);
_st(self["@interface"])._prompt();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{key:key},smalltalk.Repl)})},
messageSends: ["ifTrue:", "fromCharCode:", ",", "write:", "stdout", "prompt", "and:", "=", "name", "ctrl"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "parseAssignment:do:",
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
messageSends: ["collect:", "trimBoth", "tokenize:", "ifTrue:ifFalse:", "value:value:", "first", "last", "and:", "isIdentifier:", "=", "size"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "presentResultNamed:withValue:",
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
messageSends: ["show:", ",", "asString", "name", "class", "cr", "prompt"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "printWelcome",
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
messageSends: ["show:", ",", "node", "versions", "version", "current", "cr"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "processLine:",
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
messageSends: ["presentResultNamed:withValue:", "ifFalse:", "ifTrue:ifFalse:", "value:value:", "perform:", "assignNewVariable:do:", "isVariableDefined:", "executeCommand:"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "amber >> ";
}, function($ctx1) {$ctx1.fill(self,"prompt",{},smalltalk.Repl)})},
messageSends: []}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "setPreviousVariablesFor:from:",
fn: function (newObject,oldObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._instanceVariableNamesFor_(_st(oldObject)._class()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(newObject)._perform_withArguments_(_st(each).__comma(":"),[_st(oldObject)._perform_(each)]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setPreviousVariablesFor:from:",{newObject:newObject,oldObject:oldObject},smalltalk.Repl)})},
messageSends: ["do:", "perform:withArguments:", ",", "perform:", "instanceVariableNamesFor:", "class"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "setPrompt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interface"])._setPrompt_(self._prompt());
return self}, function($ctx1) {$ctx1.fill(self,"setPrompt",{},smalltalk.Repl)})},
messageSends: ["setPrompt:", "prompt"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "setupHotkeys",
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
messageSends: ["on:do:", "ifNotNil:", "onKeyPress:", "stdin"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:withVariable:",
fn: function (aClass,varName){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._addSubclassOf_named_instanceVariableNames_package_(aClass,_st(self._subclassNameFor_(aClass))._asSymbol(),[varName],"Compiler-Core");
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:withVariable:",{aClass:aClass,varName:varName},smalltalk.Repl)})},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "asSymbol", "subclassNameFor:", "new"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "subclassNameFor:",
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
messageSends: ["ifNotNil:ifNil:", "+", "asNumber", "first", "matchesOf:", "name", "replaceRegexp:with:", "asRegexp", "asString", ","]}),
smalltalk.Repl);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._createInterface();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.Repl.klass)})},
messageSends: ["createInterface", "new"]}),
smalltalk.Repl.klass);


