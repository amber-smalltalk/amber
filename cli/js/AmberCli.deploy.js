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
selector=_st(self)._selectorForCommandLineSwitch_(_st(args)._first());
_st(args)._remove_(_st(args)._first());
_st(self)._perform_withArguments_(selector,_st($Array())._with_(args));
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
_st(_st(self)._commandLineSwitches())._do_((function(each){
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
messageSends: ["argv", "removeFrom:to:", "ifTrue:ifFalse:", "help:", "handleArguments:", "isEmpty"]}),
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
$1=_st(_st(self)._commandLineSwitches())._includes_(aSwitch);
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
messageSends: ["pathname", "parse:", "url", "join:with:", "basePath", "exists:do:", "ifFalse:ifTrue:", "respondNotFoundTo:", "respondFileNamed:to:"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleOPTIONSRequest:respondTo:",
fn: function (aRequest,aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aResponse)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Access-Control-Allow-Origin").__minus_gt("*"),_st("Access-Control-Allow-Methods").__minus_gt("GET, PUT, POST, DELETE, OPTIONS"),_st("Access-Control-Allow-Headers").__minus_gt("Content-Type, Accept"),_st("Content-Length").__minus_gt((0)),_st("Access-Control-Max-Age").__minus_gt((10))]));
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
_st($1)._writeHead_options_((401),smalltalk.HashedCollection._fromPairs_([_st("WWW-Authenticate").__minus_gt("Basic realm=\x22Secured Developer Area\x22")]));
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
_st($1)._writeHead_options_((201),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain"),_st("Access-Control-Allow-Origin").__minus_gt("*")]));
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
_st($1)._writeHead_options_((500),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
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
_st($1)._writeHead_options_((400),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
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
_st($1)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain"),_st("Access-Control-Allow-Origin").__minus_gt("*")]));
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
messageSends: ["checkDirectoryLayout", "on:do:", "log:", ",", "createServer:", "handleRequest:respondTo:", "asString", "port", "host", "listen:host:"]}),
smalltalk.FileServer);

smalltalk.addMethod(
smalltalk.method({
selector: "startOn:",
fn: function (aPort){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._port_(aPort);
_st(self)._start();
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
$1=smalltalk.HashedCollection._fromPairs_([_st("%").__minus_gt("application/x-trash"),_st("323").__minus_gt("text/h323"),_st("abw").__minus_gt("application/x-abiword"),_st("ai").__minus_gt("application/postscript"),_st("aif").__minus_gt("audio/x-aiff"),_st("aifc").__minus_gt("audio/x-aiff"),_st("aiff").__minus_gt("audio/x-aiff"),_st("alc").__minus_gt("chemical/x-alchemy"),_st("art").__minus_gt("image/x-jg"),_st("asc").__minus_gt("text/plain"),_st("asf").__minus_gt("video/x-ms-asf"),_st("asn").__minus_gt("chemical/x-ncbi-asn1-spec"),_st("aso").__minus_gt("chemical/x-ncbi-asn1-binary"),_st("asx").__minus_gt("video/x-ms-asf"),_st("au").__minus_gt("audio/basic"),_st("avi").__minus_gt("video/x-msvideo"),_st("b").__minus_gt("chemical/x-molconn-Z"),_st("bak").__minus_gt("application/x-trash"),_st("bat").__minus_gt("application/x-msdos-program"),_st("bcpio").__minus_gt("application/x-bcpio"),_st("bib").__minus_gt("text/x-bibtex"),_st("bin").__minus_gt("application/octet-stream"),_st("bmp").__minus_gt("image/x-ms-bmp"),_st("book").__minus_gt("application/x-maker"),_st("bsd").__minus_gt("chemical/x-crossfire"),_st("c").__minus_gt("text/x-csrc"),_st("c++").__minus_gt("text/x-c++src"),_st("c3d").__minus_gt("chemical/x-chem3d"),_st("cac").__minus_gt("chemical/x-cache"),_st("cache").__minus_gt("chemical/x-cache"),_st("cascii").__minus_gt("chemical/x-cactvs-binary"),_st("cat").__minus_gt("application/vnd.ms-pki.seccat"),_st("cbin").__minus_gt("chemical/x-cactvs-binary"),_st("cc").__minus_gt("text/x-c++src"),_st("cdf").__minus_gt("application/x-cdf"),_st("cdr").__minus_gt("image/x-coreldraw"),_st("cdt").__minus_gt("image/x-coreldrawtemplate"),_st("cdx").__minus_gt("chemical/x-cdx"),_st("cdy").__minus_gt("application/vnd.cinderella"),_st("cef").__minus_gt("chemical/x-cxf"),_st("cer").__minus_gt("chemical/x-cerius"),_st("chm").__minus_gt("chemical/x-chemdraw"),_st("chrt").__minus_gt("application/x-kchart"),_st("cif").__minus_gt("chemical/x-cif"),_st("class").__minus_gt("application/java-vm"),_st("cls").__minus_gt("text/x-tex"),_st("cmdf").__minus_gt("chemical/x-cmdf"),_st("cml").__minus_gt("chemical/x-cml"),_st("cod").__minus_gt("application/vnd.rim.cod"),_st("com").__minus_gt("application/x-msdos-program"),_st("cpa").__minus_gt("chemical/x-compass"),_st("cpio").__minus_gt("application/x-cpio"),_st("cpp").__minus_gt("text/x-c++src"),_st("cpt").__minus_gt("image/x-corelphotopaint"),_st("crl").__minus_gt("application/x-pkcs7-crl"),_st("crt").__minus_gt("application/x-x509-ca-cert"),_st("csf").__minus_gt("chemical/x-cache-csf"),_st("csh").__minus_gt("text/x-csh"),_st("csm").__minus_gt("chemical/x-csml"),_st("csml").__minus_gt("chemical/x-csml"),_st("css").__minus_gt("text/css"),_st("csv").__minus_gt("text/comma-separated-values"),_st("ctab").__minus_gt("chemical/x-cactvs-binary"),_st("ctx").__minus_gt("chemical/x-ctx"),_st("cu").__minus_gt("application/cu-seeme"),_st("cub").__minus_gt("chemical/x-gaussian-cube"),_st("cxf").__minus_gt("chemical/x-cxf"),_st("cxx").__minus_gt("text/x-c++src"),_st("dat").__minus_gt("chemical/x-mopac-input"),_st("dcr").__minus_gt("application/x-director"),_st("deb").__minus_gt("application/x-debian-package"),_st("dif").__minus_gt("video/dv"),_st("diff").__minus_gt("text/plain"),_st("dir").__minus_gt("application/x-director"),_st("djv").__minus_gt("image/vnd.djvu"),_st("djvu").__minus_gt("image/vnd.djvu"),_st("dl").__minus_gt("video/dl"),_st("dll").__minus_gt("application/x-msdos-program"),_st("dmg").__minus_gt("application/x-apple-diskimage"),_st("dms").__minus_gt("application/x-dms"),_st("doc").__minus_gt("application/msword"),_st("dot").__minus_gt("application/msword"),_st("dv").__minus_gt("video/dv"),_st("dvi").__minus_gt("application/x-dvi"),_st("dx").__minus_gt("chemical/x-jcamp-dx"),_st("dxr").__minus_gt("application/x-director"),_st("emb").__minus_gt("chemical/x-embl-dl-nucleotide"),_st("embl").__minus_gt("chemical/x-embl-dl-nucleotide"),_st("ent").__minus_gt("chemical/x-pdb"),_st("eps").__minus_gt("application/postscript"),_st("etx").__minus_gt("text/x-setext"),_st("exe").__minus_gt("application/x-msdos-program"),_st("ez").__minus_gt("application/andrew-inset"),_st("fb").__minus_gt("application/x-maker"),_st("fbdoc").__minus_gt("application/x-maker"),_st("fch").__minus_gt("chemical/x-gaussian-checkpoint"),_st("fchk").__minus_gt("chemical/x-gaussian-checkpoint"),_st("fig").__minus_gt("application/x-xfig"),_st("flac").__minus_gt("application/x-flac"),_st("fli").__minus_gt("video/fli"),_st("fm").__minus_gt("application/x-maker"),_st("frame").__minus_gt("application/x-maker"),_st("frm").__minus_gt("application/x-maker"),_st("gal").__minus_gt("chemical/x-gaussian-log"),_st("gam").__minus_gt("chemical/x-gamess-input"),_st("gamin").__minus_gt("chemical/x-gamess-input"),_st("gau").__minus_gt("chemical/x-gaussian-input"),_st("gcd").__minus_gt("text/x-pcs-gcd"),_st("gcf").__minus_gt("application/x-graphing-calculator"),_st("gcg").__minus_gt("chemical/x-gcg8-sequence"),_st("gen").__minus_gt("chemical/x-genbank"),_st("gf").__minus_gt("application/x-tex-gf"),_st("gif").__minus_gt("image/gif"),_st("gjc").__minus_gt("chemical/x-gaussian-input"),_st("gjf").__minus_gt("chemical/x-gaussian-input"),_st("gl").__minus_gt("video/gl"),_st("gnumeric").__minus_gt("application/x-gnumeric"),_st("gpt").__minus_gt("chemical/x-mopac-graph"),_st("gsf").__minus_gt("application/x-font"),_st("gsm").__minus_gt("audio/x-gsm"),_st("gtar").__minus_gt("application/x-gtar"),_st("h").__minus_gt("text/x-chdr"),_st("h++").__minus_gt("text/x-c++hdr"),_st("hdf").__minus_gt("application/x-hdf"),_st("hh").__minus_gt("text/x-c++hdr"),_st("hin").__minus_gt("chemical/x-hin"),_st("hpp").__minus_gt("text/x-c++hdr"),_st("hqx").__minus_gt("application/mac-binhex40"),_st("hs").__minus_gt("text/x-haskell"),_st("hta").__minus_gt("application/hta"),_st("htc").__minus_gt("text/x-component"),_st("htm").__minus_gt("text/html"),_st("html").__minus_gt("text/html"),_st("hxx").__minus_gt("text/x-c++hdr"),_st("ica").__minus_gt("application/x-ica"),_st("ice").__minus_gt("x-conference/x-cooltalk"),_st("ico").__minus_gt("image/x-icon"),_st("ics").__minus_gt("text/calendar"),_st("icz").__minus_gt("text/calendar"),_st("ief").__minus_gt("image/ief"),_st("iges").__minus_gt("model/iges"),_st("igs").__minus_gt("model/iges"),_st("iii").__minus_gt("application/x-iphone"),_st("inp").__minus_gt("chemical/x-gamess-input"),_st("ins").__minus_gt("application/x-internet-signup"),_st("iso").__minus_gt("application/x-iso9660-image"),_st("isp").__minus_gt("application/x-internet-signup"),_st("ist").__minus_gt("chemical/x-isostar"),_st("istr").__minus_gt("chemical/x-isostar"),_st("jad").__minus_gt("text/vnd.sun.j2me.app-descriptor"),_st("jar").__minus_gt("application/java-archive"),_st("java").__minus_gt("text/x-java"),_st("jdx").__minus_gt("chemical/x-jcamp-dx"),_st("jmz").__minus_gt("application/x-jmol"),_st("jng").__minus_gt("image/x-jng"),_st("jnlp").__minus_gt("application/x-java-jnlp-file"),_st("jpe").__minus_gt("image/jpeg"),_st("jpeg").__minus_gt("image/jpeg"),_st("jpg").__minus_gt("image/jpeg"),_st("js").__minus_gt("application/javascript"),_st("kar").__minus_gt("audio/midi"),_st("key").__minus_gt("application/pgp-keys"),_st("kil").__minus_gt("application/x-killustrator"),_st("kin").__minus_gt("chemical/x-kinemage"),_st("kpr").__minus_gt("application/x-kpresenter"),_st("kpt").__minus_gt("application/x-kpresenter"),_st("ksp").__minus_gt("application/x-kspread"),_st("kwd").__minus_gt("application/x-kword"),_st("kwt").__minus_gt("application/x-kword"),_st("latex").__minus_gt("application/x-latex"),_st("lha").__minus_gt("application/x-lha"),_st("lhs").__minus_gt("text/x-literate-haskell"),_st("lsf").__minus_gt("video/x-la-asf"),_st("lsx").__minus_gt("video/x-la-asf"),_st("ltx").__minus_gt("text/x-tex"),_st("lzh").__minus_gt("application/x-lzh"),_st("lzx").__minus_gt("application/x-lzx"),_st("m3u").__minus_gt("audio/x-mpegurl"),_st("m4a").__minus_gt("audio/mpeg"),_st("maker").__minus_gt("application/x-maker"),_st("man").__minus_gt("application/x-troff-man"),_st("mcif").__minus_gt("chemical/x-mmcif"),_st("mcm").__minus_gt("chemical/x-macmolecule"),_st("mdb").__minus_gt("application/msaccess"),_st("me").__minus_gt("application/x-troff-me"),_st("mesh").__minus_gt("model/mesh"),_st("mid").__minus_gt("audio/midi"),_st("midi").__minus_gt("audio/midi"),_st("mif").__minus_gt("application/x-mif"),_st("mm").__minus_gt("application/x-freemind"),_st("mmd").__minus_gt("chemical/x-macromodel-input"),_st("mmf").__minus_gt("application/vnd.smaf"),_st("mml").__minus_gt("text/mathml"),_st("mmod").__minus_gt("chemical/x-macromodel-input"),_st("mng").__minus_gt("video/x-mng"),_st("moc").__minus_gt("text/x-moc"),_st("mol").__minus_gt("chemical/x-mdl-molfile"),_st("mol2").__minus_gt("chemical/x-mol2"),_st("moo").__minus_gt("chemical/x-mopac-out"),_st("mop").__minus_gt("chemical/x-mopac-input"),_st("mopcrt").__minus_gt("chemical/x-mopac-input"),_st("mov").__minus_gt("video/quicktime"),_st("movie").__minus_gt("video/x-sgi-movie"),_st("mp2").__minus_gt("audio/mpeg"),_st("mp3").__minus_gt("audio/mpeg"),_st("mp4").__minus_gt("video/mp4"),_st("mpc").__minus_gt("chemical/x-mopac-input"),_st("mpe").__minus_gt("video/mpeg"),_st("mpeg").__minus_gt("video/mpeg"),_st("mpega").__minus_gt("audio/mpeg"),_st("mpg").__minus_gt("video/mpeg"),_st("mpga").__minus_gt("audio/mpeg"),_st("ms").__minus_gt("application/x-troff-ms"),_st("msh").__minus_gt("model/mesh"),_st("msi").__minus_gt("application/x-msi"),_st("mvb").__minus_gt("chemical/x-mopac-vib"),_st("mxu").__minus_gt("video/vnd.mpegurl"),_st("nb").__minus_gt("application/mathematica"),_st("nc").__minus_gt("application/x-netcdf"),_st("nwc").__minus_gt("application/x-nwc"),_st("o").__minus_gt("application/x-object"),_st("oda").__minus_gt("application/oda"),_st("odb").__minus_gt("application/vnd.oasis.opendocument.database"),_st("odc").__minus_gt("application/vnd.oasis.opendocument.chart"),_st("odf").__minus_gt("application/vnd.oasis.opendocument.formula"),_st("odg").__minus_gt("application/vnd.oasis.opendocument.graphics"),_st("odi").__minus_gt("application/vnd.oasis.opendocument.image"),_st("odm").__minus_gt("application/vnd.oasis.opendocument.text-master"),_st("odp").__minus_gt("application/vnd.oasis.opendocument.presentation"),_st("ods").__minus_gt("application/vnd.oasis.opendocument.spreadsheet"),_st("odt").__minus_gt("application/vnd.oasis.opendocument.text"),_st("ogg").__minus_gt("application/ogg"),_st("old").__minus_gt("application/x-trash"),_st("oth").__minus_gt("application/vnd.oasis.opendocument.text-web"),_st("oza").__minus_gt("application/x-oz-application"),_st("p").__minus_gt("text/x-pascal"),_st("p7r").__minus_gt("application/x-pkcs7-certreqresp"),_st("pac").__minus_gt("application/x-ns-proxy-autoconfig"),_st("pas").__minus_gt("text/x-pascal"),_st("pat").__minus_gt("image/x-coreldrawpattern"),_st("pbm").__minus_gt("image/x-portable-bitmap"),_st("pcf").__minus_gt("application/x-font"),_st("pcf.Z").__minus_gt("application/x-font"),_st("pcx").__minus_gt("image/pcx"),_st("pdb").__minus_gt("chemical/x-pdb"),_st("pdf").__minus_gt("application/pdf"),_st("pfa").__minus_gt("application/x-font"),_st("pfb").__minus_gt("application/x-font"),_st("pgm").__minus_gt("image/x-portable-graymap"),_st("pgn").__minus_gt("application/x-chess-pgn"),_st("pgp").__minus_gt("application/pgp-signature"),_st("pk").__minus_gt("application/x-tex-pk"),_st("pl").__minus_gt("text/x-perl"),_st("pls").__minus_gt("audio/x-scpls"),_st("pm").__minus_gt("text/x-perl"),_st("png").__minus_gt("image/png"),_st("pnm").__minus_gt("image/x-portable-anymap"),_st("pot").__minus_gt("text/plain"),_st("ppm").__minus_gt("image/x-portable-pixmap"),_st("pps").__minus_gt("application/vnd.ms-powerpoint"),_st("ppt").__minus_gt("application/vnd.ms-powerpoint"),_st("prf").__minus_gt("application/pics-rules"),_st("prt").__minus_gt("chemical/x-ncbi-asn1-ascii"),_st("ps").__minus_gt("application/postscript"),_st("psd").__minus_gt("image/x-photoshop"),_st("psp").__minus_gt("text/x-psp"),_st("py").__minus_gt("text/x-python"),_st("pyc").__minus_gt("application/x-python-code"),_st("pyo").__minus_gt("application/x-python-code"),_st("qt").__minus_gt("video/quicktime"),_st("qtl").__minus_gt("application/x-quicktimeplayer"),_st("ra").__minus_gt("audio/x-realaudio"),_st("ram").__minus_gt("audio/x-pn-realaudio"),_st("rar").__minus_gt("application/rar"),_st("ras").__minus_gt("image/x-cmu-raster"),_st("rd").__minus_gt("chemical/x-mdl-rdfile"),_st("rdf").__minus_gt("application/rdf+xml"),_st("rgb").__minus_gt("image/x-rgb"),_st("rm").__minus_gt("audio/x-pn-realaudio"),_st("roff").__minus_gt("application/x-troff"),_st("ros").__minus_gt("chemical/x-rosdal"),_st("rpm").__minus_gt("application/x-redhat-package-manager"),_st("rss").__minus_gt("application/rss+xml"),_st("rtf").__minus_gt("text/rtf"),_st("rtx").__minus_gt("text/richtext"),_st("rxn").__minus_gt("chemical/x-mdl-rxnfile"),_st("sct").__minus_gt("text/scriptlet"),_st("sd").__minus_gt("chemical/x-mdl-sdfile"),_st("sd2").__minus_gt("audio/x-sd2"),_st("sda").__minus_gt("application/vnd.stardivision.draw"),_st("sdc").__minus_gt("application/vnd.stardivision.calc"),_st("sdd").__minus_gt("application/vnd.stardivision.impress"),_st("sdf").__minus_gt("chemical/x-mdl-sdfile"),_st("sdp").__minus_gt("application/vnd.stardivision.impress"),_st("sdw").__minus_gt("application/vnd.stardivision.writer"),_st("ser").__minus_gt("application/java-serialized-object"),_st("sgf").__minus_gt("application/x-go-sgf"),_st("sgl").__minus_gt("application/vnd.stardivision.writer-global"),_st("sh").__minus_gt("text/x-sh"),_st("shar").__minus_gt("application/x-shar"),_st("shtml").__minus_gt("text/html"),_st("sid").__minus_gt("audio/prs.sid"),_st("sik").__minus_gt("application/x-trash"),_st("silo").__minus_gt("model/mesh"),_st("sis").__minus_gt("application/vnd.symbian.install"),_st("sit").__minus_gt("application/x-stuffit"),_st("skd").__minus_gt("application/x-koan"),_st("skm").__minus_gt("application/x-koan"),_st("skp").__minus_gt("application/x-koan"),_st("skt").__minus_gt("application/x-koan"),_st("smf").__minus_gt("application/vnd.stardivision.math"),_st("smi").__minus_gt("application/smil"),_st("smil").__minus_gt("application/smil"),_st("snd").__minus_gt("audio/basic"),_st("spc").__minus_gt("chemical/x-galactic-spc"),_st("spl").__minus_gt("application/x-futuresplash"),_st("src").__minus_gt("application/x-wais-source"),_st("stc").__minus_gt("application/vnd.sun.xml.calc.template"),_st("std").__minus_gt("application/vnd.sun.xml.draw.template"),_st("sti").__minus_gt("application/vnd.sun.xml.impress.template"),_st("stl").__minus_gt("application/vnd.ms-pki.stl"),_st("stw").__minus_gt("application/vnd.sun.xml.writer.template"),_st("sty").__minus_gt("text/x-tex"),_st("sv4cpio").__minus_gt("application/x-sv4cpio"),_st("sv4crc").__minus_gt("application/x-sv4crc"),_st("svg").__minus_gt("image/svg+xml"),_st("svgz").__minus_gt("image/svg+xml"),_st("sw").__minus_gt("chemical/x-swissprot"),_st("swf").__minus_gt("application/x-shockwave-flash"),_st("swfl").__minus_gt("application/x-shockwave-flash"),_st("sxc").__minus_gt("application/vnd.sun.xml.calc"),_st("sxd").__minus_gt("application/vnd.sun.xml.draw"),_st("sxg").__minus_gt("application/vnd.sun.xml.writer.global"),_st("sxi").__minus_gt("application/vnd.sun.xml.impress"),_st("sxm").__minus_gt("application/vnd.sun.xml.math"),_st("sxw").__minus_gt("application/vnd.sun.xml.writer"),_st("t").__minus_gt("application/x-troff"),_st("tar").__minus_gt("application/x-tar"),_st("taz").__minus_gt("application/x-gtar"),_st("tcl").__minus_gt("text/x-tcl"),_st("tex").__minus_gt("text/x-tex"),_st("texi").__minus_gt("application/x-texinfo"),_st("texinfo").__minus_gt("application/x-texinfo"),_st("text").__minus_gt("text/plain"),_st("tgf").__minus_gt("chemical/x-mdl-tgf"),_st("tgz").__minus_gt("application/x-gtar"),_st("tif").__minus_gt("image/tiff"),_st("tiff").__minus_gt("image/tiff"),_st("tk").__minus_gt("text/x-tcl"),_st("tm").__minus_gt("text/texmacs"),_st("torrent").__minus_gt("application/x-bittorrent"),_st("tr").__minus_gt("application/x-troff"),_st("ts").__minus_gt("text/texmacs"),_st("tsp").__minus_gt("application/dsptype"),_st("tsv").__minus_gt("text/tab-separated-values"),_st("txt").__minus_gt("text/plain"),_st("udeb").__minus_gt("application/x-debian-package"),_st("uls").__minus_gt("text/iuls"),_st("ustar").__minus_gt("application/x-ustar"),_st("val").__minus_gt("chemical/x-ncbi-asn1-binary"),_st("vcd").__minus_gt("application/x-cdlink"),_st("vcf").__minus_gt("text/x-vcard"),_st("vcs").__minus_gt("text/x-vcalendar"),_st("vmd").__minus_gt("chemical/x-vmd"),_st("vms").__minus_gt("chemical/x-vamas-iso14976"),_st("vor").__minus_gt("application/vnd.stardivision.writer"),_st("vrm").__minus_gt("x-world/x-vrml"),_st("vrml").__minus_gt("x-world/x-vrml"),_st("vsd").__minus_gt("application/vnd.visio"),_st("wad").__minus_gt("application/x-doom"),_st("wav").__minus_gt("audio/x-wav"),_st("wax").__minus_gt("audio/x-ms-wax"),_st("wbmp").__minus_gt("image/vnd.wap.wbmp"),_st("wbxml").__minus_gt("application/vnd.wap.wbxml"),_st("wk").__minus_gt("application/x-123"),_st("wm").__minus_gt("video/x-ms-wm"),_st("wma").__minus_gt("audio/x-ms-wma"),_st("wmd").__minus_gt("application/x-ms-wmd"),_st("wml").__minus_gt("text/vnd.wap.wml"),_st("wmlc").__minus_gt("application/vnd.wap.wmlc"),_st("wmls").__minus_gt("text/vnd.wap.wmlscript"),_st("wmlsc").__minus_gt("application/vnd.wap.wmlscriptc"),_st("wmv").__minus_gt("video/x-ms-wmv"),_st("wmx").__minus_gt("video/x-ms-wmx"),_st("wmz").__minus_gt("application/x-ms-wmz"),_st("wp5").__minus_gt("application/wordperfect5.1"),_st("wpd").__minus_gt("application/wordperfect"),_st("wrl").__minus_gt("x-world/x-vrml"),_st("wsc").__minus_gt("text/scriptlet"),_st("wvx").__minus_gt("video/x-ms-wvx"),_st("wz").__minus_gt("application/x-wingz"),_st("xbm").__minus_gt("image/x-xbitmap"),_st("xcf").__minus_gt("application/x-xcf"),_st("xht").__minus_gt("application/xhtml+xml"),_st("xhtml").__minus_gt("application/xhtml+xml"),_st("xlb").__minus_gt("application/vnd.ms-excel"),_st("xls").__minus_gt("application/vnd.ms-excel"),_st("xlt").__minus_gt("application/vnd.ms-excel"),_st("xml").__minus_gt("application/xml"),_st("xpi").__minus_gt("application/x-xpinstall"),_st("xpm").__minus_gt("image/x-xpixmap"),_st("xsl").__minus_gt("application/xml"),_st("xtel").__minus_gt("chemical/x-xtel"),_st("xul").__minus_gt("application/vnd.mozilla.xul+xml"),_st("xwd").__minus_gt("image/x-xwindowdump"),_st("xyz").__minus_gt("chemical/x-xyz"),_st("zip").__minus_gt("application/zip"),_st("zmt").__minus_gt("chemical/x-mopac-input"),_st("~").__minus_gt("application/x-trash")]);
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
var $1;
$1=(4000);
return $1;
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
$1=_st(_st(self)._mimeTypes())._at_ifAbsent_(_st(aString)._replace_with_(".*[\x5c.]",""),(function(){
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
self["@mimeTypes"]=_st(self)._defaultMimeTypes();
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
_st(_st(self)._commandLineSwitches())._do_((function(each){
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


smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util'], 'AmberCli');
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
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "eval:", "close", "setPrompt", "prompt"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
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
messageSends: ["ifFalse:", "try:catch:", "evaluateExpression:", "new", "show:", "ifTrue:ifFalse:", "handleError:", "write:", "jsStack", "stdout", "isSmalltalkError", "isEmpty", "prompt"]}),
smalltalk.Repl);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@readline"]=_st(require)._value_("readline");
self["@util"]=_st(require)._value_("util");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Repl)})},
messageSends: ["initialize", "value:"]}),
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
selector: "setPrompt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interface"])._setPrompt_(_st(self)._prompt());
return self}, function($ctx1) {$ctx1.fill(self,"setPrompt",{},smalltalk.Repl)})},
messageSends: ["setPrompt:", "prompt"]}),
smalltalk.Repl);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._createInterface();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.Repl.klass)})},
messageSends: ["createInterface", "new"]}),
smalltalk.Repl.klass);


