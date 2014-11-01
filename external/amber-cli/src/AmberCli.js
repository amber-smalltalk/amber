define("amber_cli/AmberCli", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('AmberCli');
$core.packages["AmberCli"].transport = {"type":"amd","amdNamespace":"amber_cli"};

$core.addClass('AmberCli', $globals.Object, [], 'AmberCli');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmberCli.comment="I am the Amber CLI (CommandLine Interface) tool which runs on Node.js.\x0a\x0aMy responsibility is to start different Amber programs like the FileServer or the Repl.\x0aWhich program to start is determined by the first commandline parameters passed to the AmberCli executable.\x0aUse `help` to get a list of all available options.\x0aAny further commandline parameters are passed to the specific program.\x0a\x0a## Commands\x0a\x0aNew commands can be added by creating a class side method in the `commands` protocol which takes one parameter.\x0aThis parameter is an array of all commandline options + values passed on to the program.\x0aAny `camelCaseCommand` is transformed into a commandline parameter of the form `camel-case-command` and vice versa.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "commandLineSwitches",
protocol: 'commandline',
fn: function (){
var self=this;
var switches;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
switches=$recv($recv(self._class())._methodsInProtocol_("commands"))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
switches=$recv(switches)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._match_("^[^:]*:$");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
switches=$recv(switches)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(each)._allButLast())._replace_with_("([A-Z])","-$1"))._asLowercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$1=switches;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commandLineSwitches",{switches:switches},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commandLineSwitches\x0a\x09\x22Collect all methodnames from the 'commands' protocol of the class\x0a\x09 and select the ones with only one parameter.\x0a\x09 Then remove the ':' at the end of the name.\x0a\x09 Additionally all uppercase letters are made lowercase and preceded by a '-'.\x0a\x09 Example: fallbackPage: becomes --fallback-page.\x0a\x09 Return the Array containing the commandline switches.\x22\x0a\x09| switches |\x0a\x09switches := ((self class methodsInProtocol: 'commands') collect: [ :each | each selector]).\x0a\x09switches := switches select: [ :each | each match: '^[^:]*:$'].\x0a\x09switches :=switches collect: [ :each |\x0a\x09\x09(each allButLast replace: '([A-Z])' with: '-$1') asLowercase].\x0a\x09^ switches",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "methodsInProtocol:", "class", "selector", "select:", "match:", "asLowercase", "replace:with:", "allButLast"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "config:",
protocol: 'commands',
fn: function (args){
var self=this;
function $Configurator(){return $globals.Configurator||(typeof Configurator=="undefined"?nil:Configurator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($Configurator())._new())._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"config:",{args:args},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "config: args\x0a\x09Configurator new start",
referencedClasses: ["Configurator"],
//>>excludeEnd("ide");
messageSends: ["start", "new"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "handleArguments:",
protocol: 'commandline',
fn: function (args){
var self=this;
var selector;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(args)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
selector=self._selectorForCommandLineSwitch_($1);
$recv(args)._remove_($recv(args)._first());
self._perform_withArguments_(selector,$recv($Array())._with_(args));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleArguments:",{args:args,selector:selector},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "handleArguments: args\x0a\x09| selector |\x0a\x0a\x09selector := self selectorForCommandLineSwitch: (args first).\x0a\x09args remove: args first.\x0a\x09self perform: selector  withArguments: (Array with: args)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["selectorForCommandLineSwitch:", "first", "remove:", "perform:withArguments:", "with:"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "help:",
protocol: 'commands',
fn: function (args){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Transcript())._show_("Available commands");
$recv(self._commandLineSwitches())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(console)._log_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"help:",{args:args},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "help: args\x0a\x09Transcript show: 'Available commands'.\x0a\x09self commandLineSwitches do: [ :each | console log: each ]",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:", "do:", "commandLineSwitches", "log:"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "init:",
protocol: 'commands',
fn: function (args){
var self=this;
function $Initer(){return $globals.Initer||(typeof Initer=="undefined"?nil:Initer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($Initer())._new())._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"init:",{args:args},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "init: args\x0a\x09Initer new start",
referencedClasses: ["Initer"],
//>>excludeEnd("ide");
messageSends: ["start", "new"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "main",
protocol: 'startup',
fn: function (){
var self=this;
var args,nodeMinorVersion;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$8,$7,$6,$9,$10,$11;
$5=$recv($Smalltalk())._version();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["version"]=1;
//>>excludeEnd("ctx");
$4="Welcome to Amber version ".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" (NodeJS ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv($recv(process)._versions())._node());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(").");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$8=$recv(process)._version();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["version"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._tokenize_(".");
$6=$recv($7)._second();
nodeMinorVersion=$recv($6)._asNumber();
$9=$recv(nodeMinorVersion).__lt((8));
if($core.assert($9)){
$recv($Transcript())._show_("You are currently using Node.js ".__comma($recv(process)._version()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=2;
//>>excludeEnd("ctx");
$recv($Transcript())._show_("Required is at least Node.js v0.8.x or greater.");
return (-1);
};
args=$recv(process)._argv();
$recv(args)._removeFrom_to_((1),(2));
$10=$recv(args)._isEmpty();
if($core.assert($10)){
self._help_(nil);
} else {
$11=self._handleArguments_(args);
return $11;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{args:args,nodeMinorVersion:nodeMinorVersion},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x09\x22Main entry point for Amber applications.\x0a\x09Parses commandline arguments and starts the according subprogram.\x22\x0a\x09| args nodeMinorVersion |\x0a\x09\x0a\x09Transcript show: 'Welcome to Amber version ', Smalltalk version, ' (NodeJS ', process versions node, ').'.\x0a\x0a\x09nodeMinorVersion := ((process version) tokenize: '.') second asNumber.\x0a\x09nodeMinorVersion < 8 ifTrue: [\x0a\x09\x09Transcript show: 'You are currently using Node.js ', (process version).\x0a\x09\x09Transcript show: 'Required is at least Node.js v0.8.x or greater.'.\x0a\x09\x09^ -1.\x0a\x09].\x0a\x0a\x09args := process argv.\x0a\x09\x22Remove the first args which contain the path to the node executable and the script file.\x22\x0a\x09args removeFrom: 1 to: 2.\x0a\x09\x0a\x09(args isEmpty)\x0a\x09\x09ifTrue: [self help: nil]\x0a\x09\x09ifFalse: [^self handleArguments: args]",
referencedClasses: ["Transcript", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "version", "node", "versions", "asNumber", "second", "tokenize:", "ifTrue:", "<", "argv", "removeFrom:to:", "ifTrue:ifFalse:", "isEmpty", "help:", "handleArguments:"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "repl:",
protocol: 'commands',
fn: function (args){
var self=this;
function $Repl(){return $globals.Repl||(typeof Repl=="undefined"?nil:Repl)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Repl())._new())._createInterface();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"repl:",{args:args},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "repl: args\x0a\x09^ Repl new createInterface",
referencedClasses: ["Repl"],
//>>excludeEnd("ide");
messageSends: ["createInterface", "new"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "selectorForCommandLineSwitch:",
protocol: 'commandline',
fn: function (aSwitch){
var self=this;
var command,selector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._commandLineSwitches())._includes_(aSwitch);
if($core.assert($1)){
selector=$recv($recv(aSwitch)._replace_with_("-[a-z]",(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._second())._asUppercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}))).__comma(":");
selector;
} else {
selector="help:";
selector;
};
$2=selector;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectorForCommandLineSwitch:",{aSwitch:aSwitch,command:command,selector:selector},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSwitch"],
source: "selectorForCommandLineSwitch: aSwitch\x0a\x09\x22Add ':' at the end and replace all occurences of a lowercase letter preceded by a '-' with the Uppercase letter.\x0a\x09 Example: fallback-page becomes fallbackPage:.\x0a\x09 If no correct selector is found return 'help:'\x22\x0a\x09 | command selector |\x0a\x0a\x09 (self commandLineSwitches includes: aSwitch)\x0a\x09 ifTrue: [ selector := (aSwitch replace: '-[a-z]' with: [ :each | each second asUppercase ]), ':']\x0a\x09 ifFalse: [ selector := 'help:' ].\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "includes:", "commandLineSwitches", ",", "replace:with:", "asUppercase", "second"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "serve:",
protocol: 'commands',
fn: function (args){
var self=this;
function $FileServer(){return $globals.FileServer||(typeof FileServer=="undefined"?nil:FileServer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($FileServer())._createServerWithArguments_(args))._start();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serve:",{args:args},$globals.AmberCli.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "serve: args\x0a\x09^ (FileServer createServerWithArguments: args) start",
referencedClasses: ["FileServer"],
//>>excludeEnd("ide");
messageSends: ["start", "createServerWithArguments:"]
}),
$globals.AmberCli.klass);

$core.addMethod(
$core.method({
selector: "version:",
protocol: 'commands',
fn: function (arguments_){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["arguments"],
source: "version: arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmberCli.klass);


$core.addClass('BaseFileManipulator', $globals.Object, ['path', 'fs'], 'AmberCli');
$core.addMethod(
$core.method({
selector: "dirname",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return __dirname;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dirname",{},$globals.BaseFileManipulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dirname\x0a\x09<return __dirname>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BaseFileManipulator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.BaseFileManipulator.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@path"]=$recv(require)._value_("path");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
self["@fs"]=$recv(require)._value_("fs");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BaseFileManipulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09path := require value: 'path'.\x0a\x09fs := require value: 'fs'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "value:"]
}),
$globals.BaseFileManipulator);

$core.addMethod(
$core.method({
selector: "rootDirname",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@path"])._join_with_(self._dirname(),"..");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rootDirname",{},$globals.BaseFileManipulator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rootDirname\x0a\x09^ path join: self dirname with: '..'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["join:with:", "dirname"]
}),
$globals.BaseFileManipulator);



$core.addClass('Configurator', $globals.BaseFileManipulator, [], 'AmberCli');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Configurator.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Configurator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Configurator);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $receiver;
self._writeConfigThenDo_((function(err){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = err) == null || $receiver.isNil){
return $recv(process)._exit();
} else {
return $recv(process)._exit_((111));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Configurator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self writeConfigThenDo: [ :err | err\x0a\x09\x09ifNotNil: [ process exit: 111 ]\x0a\x09\x09ifNil: [ process exit ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeConfigThenDo:", "ifNotNil:ifNil:", "exit:", "exit"]
}),
$globals.Configurator);

$core.addMethod(
$core.method({
selector: "writeConfigThenDo:",
protocol: 'action',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(require)._value_("amber-dev/lib/config"))._writeConfig_toFile_thenDo_($recv(process)._cwd(),"config.js",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeConfigThenDo:",{aBlock:aBlock},$globals.Configurator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "writeConfigThenDo: aBlock\x0a\x09(require value: 'amber-dev/lib/config')\x0a\x09\x09writeConfig: process cwd\x0a\x09\x09toFile: 'config.js'\x0a\x09\x09thenDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeConfig:toFile:thenDo:", "value:", "cwd"]
}),
$globals.Configurator);



$core.addClass('FileServer', $globals.BaseFileManipulator, ['http', 'url', 'host', 'port', 'basePath', 'util', 'username', 'password', 'fallbackPage'], 'AmberCli');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.FileServer.comment="I am the Amber Smalltalk FileServer.\x0aMy runtime requirement is a functional Node.js executable.\x0a\x0aTo start a FileServer instance on port `4000` use the following code:\x0a\x0a    FileServer new start\x0a\x0aA parameterized instance can be created with the following code:\x0a\x0a    FileServer createServerWithArguments: options\x0a\x0aHere, `options` is an array of commandline style strings each followed by a value e.g. `#('--port', '6000', '--host', '0.0.0.0')`.\x0aA list of all available parameters can be printed to the commandline by passing `--help` as parameter.\x0aSee the `Options` section for further details on how options are mapped to instance methods.\x0a\x0aAfter startup FileServer checks if the directory layout required by Amber is present and logs a warning on absence.\x0a\x0a\x0a## Options\x0a\x0aEach option is of the form `--some-option-string` which is transformed into a selector of the format `someOptionString:`.\x0aThe trailing `--` gets removed, each `-[a-z]` gets transformed into the according uppercase letter, and a `:` is appended to create a selector which takes a single argument.\x0aAfterwards, the selector gets executed on the `FileServer` instance with the value following in the options array as parameter.\x0a\x0a## Adding new commandline parameters\x0a\x0aAdding new commandline parameters to `FileServer` is as easy as adding a new single parameter method to the `accessing` protocol.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "base64Decode:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (new Buffer(aString, 'base64').toString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"base64Decode:",{aString:aString},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "base64Decode: aString\x0a\x09<return (new Buffer(aString, 'base64').toString())>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "basePath",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@basePath"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv(self._class())._defaultBasePath();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basePath",{},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basePath\x0a\x09^ basePath ifNil: [self class defaultBasePath]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultBasePath", "class"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "basePath:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@basePath"]=aString;
self._validateBasePath();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basePath:",{aString:aString},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basePath: aString\x0a\x09basePath := aString.\x0a\x09self validateBasePath.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["validateBasePath"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "checkDirectoryLayout",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@fs"])._existsSync_(self._withBasePath_("index.html"));
if(!$core.assert($1)){
$recv(console)._warn_("Warning: project directory does not contain index.html.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["warn:"]=1;
//>>excludeEnd("ctx");
$recv(console)._warn_("    You can specify the directory containing index.html with --base-path.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["warn:"]=2;
//>>excludeEnd("ctx");
$recv(console)._warn_("    You can also specify a page to be served by default,");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["warn:"]=3;
//>>excludeEnd("ctx");
$recv(console)._warn_("    for all paths that do not map to a file, with --fallback-page.");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkDirectoryLayout",{},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "checkDirectoryLayout\x0a\x09(fs existsSync:\x09(self withBasePath: 'index.html')) ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory does not contain index.html.'.\x0a\x09\x09console warn: '    You can specify the directory containing index.html with --base-path.'.\x0a\x09\x09console warn: '    You can also specify a page to be served by default,'.\x0a\x09\x09console warn: '    for all paths that do not map to a file, with --fallback-page.'].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "existsSync:", "withBasePath:", "warn:"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "fallbackPage",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@fallbackPage"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fallbackPage\x0a\x09^ fallbackPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "fallbackPage:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@fallbackPage"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fallbackPage: aString\x0a\x09fallbackPage := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "handleGETRequest:respondTo:",
protocol: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
var uri,filename;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
uri=$recv(self["@url"])._parse_($recv(aRequest)._url());
filename=$recv(self["@path"])._join_with_(self._basePath(),$recv(uri)._pathname());
$recv(self["@fs"])._exists_do_(filename,(function(aBoolean){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert(aBoolean)){
$1=$recv($recv(self["@fs"])._statSync_(filename))._isDirectory();
if($core.assert($1)){
return self._respondDirectoryNamed_from_to_(filename,uri,aResponse);
} else {
return self._respondFileNamed_to_(filename,aResponse);
};
} else {
return self._respondNotFoundTo_(aResponse);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aBoolean:aBoolean},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleGETRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse,uri:uri,filename:filename},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRequest", "aResponse"],
source: "handleGETRequest: aRequest respondTo: aResponse\x0a\x09| uri filename |\x0a\x09uri := url parse: aRequest url.\x0a\x09filename := path join: self basePath with: uri pathname.\x0a\x09fs exists: filename do: [:aBoolean |\x0a\x09\x09aBoolean\x0a\x09\x09\x09ifFalse: [self respondNotFoundTo: aResponse]\x0a\x09\x09\x09ifTrue: [(fs statSync: filename) isDirectory\x0a\x09\x09\x09\x09ifTrue: [self respondDirectoryNamed: filename from: uri to: aResponse]\x0a\x09\x09\x09\x09ifFalse: [self respondFileNamed: filename to: aResponse]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parse:", "url", "join:with:", "basePath", "pathname", "exists:do:", "ifFalse:ifTrue:", "respondNotFoundTo:", "ifTrue:ifFalse:", "isDirectory", "statSync:", "respondDirectoryNamed:from:to:", "respondFileNamed:to:"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "handleOPTIONSRequest:respondTo:",
protocol: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aResponse)._writeHead_options_((200),$globals.HashedCollection._newFromPairs_(["Access-Control-Allow-Origin","*","Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS","Access-Control-Allow-Headers","Content-Type, Accept","Content-Length",(0),"Access-Control-Max-Age",(10)]));
$recv(aResponse)._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleOPTIONSRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRequest", "aResponse"],
source: "handleOPTIONSRequest: aRequest respondTo: aResponse\x0a\x09aResponse writeHead: 200 options: #{'Access-Control-Allow-Origin' -> '*'.\x0a\x09\x09\x09\x09\x09'Access-Control-Allow-Methods' -> 'GET, PUT, POST, DELETE, OPTIONS'.\x0a\x09\x09\x09\x09\x09'Access-Control-Allow-Headers' -> 'Content-Type, Accept'.\x0a\x09\x09\x09\x09\x09'Content-Length' -> 0.\x0a\x09\x09\x09\x09\x09'Access-Control-Max-Age' -> 10}.\x0a\x09aResponse end",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeHead:options:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "handlePUTRequest:respondTo:",
protocol: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
var file,stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=self._isAuthenticated_(aRequest);
if(!$core.assert($1)){
self._respondAuthenticationRequiredTo_(aResponse);
return nil;
};
file=".".__comma($recv(aRequest)._url());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
stream=$recv(self["@fs"])._createWriteStream_(file);
$recv(stream)._on_do_("error",(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=console;
$3="Error creating WriteStream for file ".__comma(file);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($2)._warn_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["warn:"]=1;
//>>excludeEnd("ctx");
$recv(console)._warn_("    Did you forget to create the necessary directory in your project (often /src)?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["warn:"]=2;
//>>excludeEnd("ctx");
$recv(console)._warn_("    The exact error is: ".__comma(error));
return self._respondNotCreatedTo_(aResponse);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._on_do_("close",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._respondCreatedTo_(aResponse);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
$recv(aRequest)._setEncoding_("utf8");
$recv(aRequest)._on_do_("data",(function(data){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._write_(data);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=3;
//>>excludeEnd("ctx");
$recv(aRequest)._on_do_("end",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(stream)._writable();
if($core.assert($4)){
return $recv(stream)._end();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handlePUTRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse,file:file,stream:stream},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRequest", "aResponse"],
source: "handlePUTRequest: aRequest respondTo: aResponse\x0a\x09| file stream |\x0a\x09(self isAuthenticated: aRequest)\x0a\x09\x09ifFalse: [self respondAuthenticationRequiredTo: aResponse. ^ nil].\x0a\x0a\x09file := '.', aRequest url.\x0a\x09stream := fs createWriteStream: file.\x0a\x0a\x09stream on: 'error' do: [:error |\x0a\x09\x09console warn: 'Error creating WriteStream for file ', file.\x0a\x09\x09console warn: '    Did you forget to create the necessary directory in your project (often /src)?'.\x0a\x09\x09console warn: '    The exact error is: ', error.\x0a\x09\x09self respondNotCreatedTo: aResponse].\x0a\x0a\x09stream on: 'close' do: [\x0a\x09\x09self respondCreatedTo: aResponse].\x0a\x0a\x09aRequest setEncoding: 'utf8'.\x0a\x09aRequest on: 'data' do: [:data |\x0a\x09\x09stream write: data].\x0a\x0a\x09aRequest on: 'end' do: [\x0a\x09\x09stream writable ifTrue: [stream end]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isAuthenticated:", "respondAuthenticationRequiredTo:", ",", "url", "createWriteStream:", "on:do:", "warn:", "respondNotCreatedTo:", "respondCreatedTo:", "setEncoding:", "write:", "ifTrue:", "writable", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "handleRequest:respondTo:",
protocol: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5;
$2=$recv(aRequest)._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("PUT");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._handlePUTRequest_respondTo_(aRequest,aResponse);
};
$4=$recv(aRequest)._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("GET");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($3)){
self._handleGETRequest_respondTo_(aRequest,aResponse);
};
$5=$recv($recv(aRequest)._method()).__eq("OPTIONS");
if($core.assert($5)){
self._handleOPTIONSRequest_respondTo_(aRequest,aResponse);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRequest", "aResponse"],
source: "handleRequest: aRequest respondTo: aResponse\x0a\x09aRequest method = 'PUT'\x0a\x09\x09ifTrue: [self handlePUTRequest: aRequest respondTo: aResponse].\x0a\x09aRequest method = 'GET'\x0a\x09\x09ifTrue:[self handleGETRequest: aRequest respondTo: aResponse].\x0a\x09aRequest method = 'OPTIONS'\x0a\x09\x09ifTrue:[self handleOPTIONSRequest: aRequest respondTo: aResponse]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "method", "handlePUTRequest:respondTo:", "handleGETRequest:respondTo:", "handleOPTIONSRequest:respondTo:"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "host",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@host"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "host\x0a\x09^ host",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "host:",
protocol: 'accessing',
fn: function (hostname){
var self=this;
self["@host"]=hostname;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hostname"],
source: "host: hostname\x0a\x09host := hostname",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FileServer.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@http"]=self._require_("http");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["require:"]=1;
//>>excludeEnd("ctx");
self["@util"]=self._require_("util");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["require:"]=2;
//>>excludeEnd("ctx");
self["@url"]=self._require_("url");
$1=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
self["@host"]=$recv($1)._defaultHost();
self["@port"]=$recv(self._class())._defaultPort();
self["@username"]=nil;
self["@password"]=nil;
self["@fallbackPage"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09http := self require: 'http'.\x0a\x09util := self require: 'util'.\x0a\x09url := self require: 'url'.\x0a\x09host := self class defaultHost.\x0a\x09port := self class defaultPort.\x0a\x09username := nil.\x0a\x09password := nil.\x0a\x09fallbackPage := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "require:", "defaultHost", "class", "defaultPort"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "isAuthenticated:",
protocol: 'private',
fn: function (aRequest){
var self=this;
var header,token,auth,parts;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5,$6,$9,$10,$8,$7,$receiver;
$2=$recv(self["@username"])._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@password"])._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return true;
};
$3=$recv($recv(aRequest)._headers())._at_("authorization");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
if(($receiver = $3) == null || $receiver.isNil){
header="";
} else {
header=$3;
};
$4=$recv(header)._isEmpty();
if($core.assert($4)){
return false;
} else {
$5=$recv(header)._tokenize_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tokenize:"]=1;
//>>excludeEnd("ctx");
if(($receiver = $5) == null || $receiver.isNil){
token="";
} else {
token=$5;
};
token;
$6=$recv(token)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
auth=self._base64Decode_($6);
auth;
parts=$recv(auth)._tokenize_(":");
parts;
$9=self["@username"];
$10=$recv(parts)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__eq($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@password"]).__eq($recv(parts)._at_((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
if($core.assert($7)){
return true;
} else {
return false;
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAuthenticated:",{aRequest:aRequest,header:header,token:token,auth:auth,parts:parts},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRequest"],
source: "isAuthenticated: aRequest\x0a\x09\x22Basic HTTP Auth: http://stackoverflow.com/a/5957629/293175\x0a\x09 and https://gist.github.com/1686663\x22\x0a\x09| header token auth parts|\x0a\x0a\x09(username isNil and: [password isNil]) ifTrue: [^ true].\x0a\x0a\x09\x22get authentication header\x22\x0a\x09header := (aRequest headers at: 'authorization') ifNil:[''].\x0a\x09(header isEmpty)\x0a\x09ifTrue: [^ false]\x0a\x09ifFalse: [\x0a\x09\x09\x22get authentication token\x22\x0a\x09\x09token := (header tokenize: ' ') ifNil:[''].\x0a\x09\x09\x22convert back from base64\x22\x0a\x09\x09auth := self base64Decode: (token at: 2).\x0a\x09\x09\x22split token at colon\x22\x0a\x09\x09parts := auth tokenize: ':'.\x0a\x0a\x09\x09((username = (parts at: 1)) and: [password = (parts at: 2)])\x0a\x09\x09\x09ifTrue: [^ true]\x0a\x09\x09\x09ifFalse: [^ false]\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "and:", "isNil", "ifNil:", "at:", "headers", "ifTrue:ifFalse:", "isEmpty", "tokenize:", "base64Decode:", "="]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "password:",
protocol: 'accessing',
fn: function (aPassword){
var self=this;
self["@password"]=aPassword;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPassword"],
source: "password: aPassword\x0a\x09password := aPassword.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "port",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@port"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "port\x0a\x09^ port",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "port:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@port"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "port: aNumber\x0a\x09port := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "require:",
protocol: 'private',
fn: function (aModuleString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(require)._value_(aModuleString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"require:",{aModuleString:aModuleString},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModuleString"],
source: "require: aModuleString\x0a\x09\x22call to the require function\x22\x0a\x09^require value: aModuleString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondAuthenticationRequiredTo:",
protocol: 'request handling',
fn: function (aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aResponse)._writeHead_options_((401),$globals.HashedCollection._newFromPairs_(["WWW-Authenticate","Basic realm=\x22Secured Developer Area\x22"]));
$recv(aResponse)._write_("<html><body>Authentication needed</body></html>");
$1=$recv(aResponse)._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondAuthenticationRequiredTo:",{aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "respondAuthenticationRequiredTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 401 options: #{'WWW-Authenticate' -> 'Basic realm=\x22Secured Developer Area\x22'};\x0a\x09\x09write: '<html><body>Authentication needed</body></html>';\x0a\x09\x09end.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeHead:options:", "write:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondCreatedTo:",
protocol: 'request handling',
fn: function (aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aResponse)._writeHead_options_((201),$globals.HashedCollection._newFromPairs_(["Content-Type","text/plain","Access-Control-Allow-Origin","*"]));
$1=$recv(aResponse)._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondCreatedTo:",{aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "respondCreatedTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 201 options: #{'Content-Type' -> 'text/plain'. 'Access-Control-Allow-Origin' -> '*'};\x0a\x09\x09end.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeHead:options:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondDirectoryNamed:from:to:",
protocol: 'request handling',
fn: function (aDirname,aUrl,aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$7,$6,$4,$receiver;
$2=$recv(aUrl)._pathname();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pathname"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._endsWith_("/");
if($core.assert($1)){
$3=$recv(aDirname).__comma("index.html");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._respondFileNamed_to_($3,aResponse);
} else {
$5=$recv($recv(aUrl)._pathname()).__comma("/");
$7=$recv(aUrl)._search();
if(($receiver = $7) == null || $receiver.isNil){
$6="";
} else {
$6=$7;
};
$4=$recv($5).__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
self._respondRedirect_to_($4,aResponse);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondDirectoryNamed:from:to:",{aDirname:aDirname,aUrl:aUrl,aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDirname", "aUrl", "aResponse"],
source: "respondDirectoryNamed: aDirname from: aUrl to: aResponse\x0a\x09(aUrl pathname endsWith: '/')\x0a\x09\x09ifTrue: [self respondFileNamed: aDirname, 'index.html' to: aResponse]\x0a\x09\x09ifFalse: [self respondRedirect: aUrl pathname, '/', (aUrl search ifNil: ['']) to: aResponse]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "endsWith:", "pathname", "respondFileNamed:to:", ",", "respondRedirect:to:", "ifNil:", "search"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondFileNamed:to:",
protocol: 'request handling',
fn: function (aFilename,aResponse){
var self=this;
var type,filename;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
filename=aFilename;
$recv(self["@fs"])._readFile_do_(filename,(function(ex,file){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(ex)._notNil();
if($core.assert($1)){
$2=console;
$3=$recv(filename).__comma(" does not exist");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._log_($3);
return self._respondNotFoundTo_(aResponse);
} else {
type=$recv(self._class())._mimeTypeFor_(filename);
type;
$4=$recv(type).__eq("application/javascript");
if($core.assert($4)){
type=$recv(type).__comma(";charset=utf-8");
type;
};
$recv(aResponse)._writeHead_options_((200),$globals.HashedCollection._newFromPairs_(["Content-Type",type]));
$recv(aResponse)._write_encoding_(file,"binary");
$5=$recv(aResponse)._end();
return $5;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex,file:file},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondFileNamed:to:",{aFilename:aFilename,aResponse:aResponse,type:type,filename:filename},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFilename", "aResponse"],
source: "respondFileNamed: aFilename to: aResponse\x0a\x09| type filename |\x0a\x0a\x09filename := aFilename.\x0a\x0a\x09fs readFile: filename do: [:ex :file |\x0a\x09\x09ex notNil \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09console log: filename, ' does not exist'.\x0a\x09\x09\x09\x09self respondNotFoundTo: aResponse]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09type := self class mimeTypeFor: filename.\x0a\x09\x09\x09\x09type = 'application/javascript'\x0a\x09\x09\x09\x09\x09ifTrue: [ type:=type,';charset=utf-8' ].\x0a\x09\x09\x09\x09aResponse \x0a\x09\x09\x09\x09\x09writeHead: 200 options:  #{'Content-Type' -> type};\x0a\x09\x09\x09\x09\x09write: file encoding: 'binary';\x0a\x09\x09\x09\x09\x09end]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readFile:do:", "ifTrue:ifFalse:", "notNil", "log:", ",", "respondNotFoundTo:", "mimeTypeFor:", "class", "ifTrue:", "=", "writeHead:options:", "write:encoding:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondInternalErrorTo:",
protocol: 'request handling',
fn: function (aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aResponse)._writeHead_options_((500),$globals.HashedCollection._newFromPairs_(["Content-Type","text/plain"]));
$recv(aResponse)._write_("500 Internal server error");
$1=$recv(aResponse)._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondInternalErrorTo:",{aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "respondInternalErrorTo: aResponse\x0a\x09aResponse \x0a\x09\x09writeHead: 500 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: '500 Internal server error';\x0a\x09\x09end",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeHead:options:", "write:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondNotCreatedTo:",
protocol: 'request handling',
fn: function (aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aResponse)._writeHead_options_((400),$globals.HashedCollection._newFromPairs_(["Content-Type","text/plain"]));
$recv(aResponse)._write_("File could not be created. Did you forget to create the src directory on the server?");
$1=$recv(aResponse)._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondNotCreatedTo:",{aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "respondNotCreatedTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 400 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: 'File could not be created. Did you forget to create the src directory on the server?';\x0a\x09\x09end.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeHead:options:", "write:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondNotFoundTo:",
protocol: 'request handling',
fn: function (aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=self._fallbackPage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fallbackPage"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isNil();
if(!$core.assert($1)){
$3=self._respondFileNamed_to_(self._fallbackPage(),aResponse);
return $3;
};
$recv(aResponse)._writeHead_options_((404),$globals.HashedCollection._newFromPairs_(["Content-Type","text/html"]));
$recv(aResponse)._write_("<html><body><p>404 Not found</p>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aResponse)._write_("<p>Did you forget to put an index.html file into the directory which is served by \x22bin/amber serve\x22? To solve this you can:<ul>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aResponse)._write_("<li>create an index.html in the served directory.</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(aResponse)._write_("<li>can also specify the location of a page to be served whenever path does not resolve to a file with the \x22--fallback-page\x22 option.</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=4;
//>>excludeEnd("ctx");
$recv(aResponse)._write_("<li>change the directory to be served with the \x22--base-path\x22 option.</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=5;
//>>excludeEnd("ctx");
$recv(aResponse)._write_("</ul></p></body></html>");
$4=$recv(aResponse)._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondNotFoundTo:",{aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "respondNotFoundTo: aResponse\x0a\x09self fallbackPage isNil ifFalse: [^self respondFileNamed: self fallbackPage to: aResponse].\x0a\x09aResponse \x0a\x09\x09writeHead: 404 options: #{'Content-Type' -> 'text/html'};\x0a\x09\x09write: '<html><body><p>404 Not found</p>';\x0a\x09\x09write: '<p>Did you forget to put an index.html file into the directory which is served by \x22bin/amber serve\x22? To solve this you can:<ul>';\x0a\x09\x09write: '<li>create an index.html in the served directory.</li>';\x0a\x09\x09write: '<li>can also specify the location of a page to be served whenever path does not resolve to a file with the \x22--fallback-page\x22 option.</li>';\x0a\x09\x09write: '<li>change the directory to be served with the \x22--base-path\x22 option.</li>';\x0a\x09\x09write: '</ul></p></body></html>';\x0a\x09\x09end",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isNil", "fallbackPage", "respondFileNamed:to:", "writeHead:options:", "write:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondOKTo:",
protocol: 'request handling',
fn: function (aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aResponse)._writeHead_options_((200),$globals.HashedCollection._newFromPairs_(["Content-Type","text/plain","Access-Control-Allow-Origin","*"]));
$1=$recv(aResponse)._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondOKTo:",{aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "respondOKTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 200 options: #{'Content-Type' -> 'text/plain'. 'Access-Control-Allow-Origin' -> '*'};\x0a\x09\x09end.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeHead:options:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "respondRedirect:to:",
protocol: 'request handling',
fn: function (aString,aResponse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aResponse)._writeHead_options_((303),$globals.HashedCollection._newFromPairs_(["Location",aString]));
$1=$recv(aResponse)._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondRedirect:to:",{aString:aString,aResponse:aResponse},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aResponse"],
source: "respondRedirect: aString to: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 303 options: #{'Location' -> aString};\x0a\x09\x09end.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeHead:options:", "end"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$8,$7,$6,$10,$9,$5,$11;
self._checkDirectoryLayout();
$1=$recv(self["@http"])._createServer_((function(request,response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleRequest_respondTo_(request,response);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({request:request,response:response},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($1)._on_do_("error",(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=console;
$3="Error starting server: ".__comma(error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($2)._log_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_("listening",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=console;
$8=self._host();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["host"]=1;
//>>excludeEnd("ctx");
$7="Starting file server on http://".__comma($8);
$6=$recv($7).__comma(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$10=self._port();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["port"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._asString();
$5=$recv($6).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
return $recv($4)._log_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$11=$recv($1)._listen_host_(self._port(),self._host());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09\x22Checks if required directory layout is present (issue warning if not).\x0a\x09 Afterwards start the server.\x22\x0a\x09self checkDirectoryLayout.\x0a\x09(http createServer: [:request :response |\x0a\x09      self handleRequest: request respondTo: response])\x0a\x09      on: 'error' do: [:error | console log: 'Error starting server: ', error];\x0a\x09      on: 'listening' do: [console log: 'Starting file server on http://', self host, ':', self port asString];\x0a\x09      listen: self port host: self host.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["checkDirectoryLayout", "on:do:", "createServer:", "handleRequest:respondTo:", "log:", ",", "host", "asString", "port", "listen:host:"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "startOn:",
protocol: 'starting',
fn: function (aPort){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._port_(aPort);
self._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startOn:",{aPort:aPort},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPort"],
source: "startOn: aPort\x0a\x09self port: aPort.\x0a\x09self start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["port:", "start"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "username:",
protocol: 'accessing',
fn: function (aUsername){
var self=this;
self["@username"]=aUsername;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUsername"],
source: "username: aUsername\x0a\x09username := aUsername.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "validateBasePath",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$7,$6,$5,$8,$9,$receiver;
$1=self["@fs"];
$2=self._basePath();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basePath"]=1;
//>>excludeEnd("ctx");
$recv($1)._stat_then_($2,(function(err,stat){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = err) == null || $receiver.isNil){
$3=$recv(stat)._isDirectory();
if(!$core.assert($3)){
$4=console;
$7=self._basePath();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["basePath"]=2;
//>>excludeEnd("ctx");
$6="Warning: --base-path parameter ".__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__comma(" is not a directory.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($4)._warn_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["warn:"]=1;
//>>excludeEnd("ctx");
};
} else {
$8=console;
$9=$recv("Warning: path at --base-path parameter ".__comma(self._basePath())).__comma(" does not exist.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
return $recv($8)._warn_($9);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,stat:stat},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"validateBasePath",{},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "validateBasePath\x0a\x09\x22The basePath must be an existing directory. \x22\x0a\x09fs stat: self basePath then: [ :err :stat | err\x0a\x09\x09ifNil: [ stat isDirectory ifFalse: [ console warn: 'Warning: --base-path parameter ' , self basePath , ' is not a directory.' ]]\x0a\x09\x09ifNotNil: [ console warn: 'Warning: path at --base-path parameter ' , self basePath , ' does not exist.'  ]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stat:then:", "basePath", "ifNil:ifNotNil:", "ifFalse:", "isDirectory", "warn:", ","]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "withBasePath:",
protocol: 'private',
fn: function (aBaseRelativePath){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@path"])._join_with_(self._basePath(),aBaseRelativePath);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withBasePath:",{aBaseRelativePath:aBaseRelativePath},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBaseRelativePath"],
source: "withBasePath: aBaseRelativePath\x0a\x09\x22return a file path which is relative to the basePath.\x22\x0a\x09^ path join: self basePath with: aBaseRelativePath",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["join:with:", "basePath"]
}),
$globals.FileServer);

$core.addMethod(
$core.method({
selector: "writeData:toFileNamed:",
protocol: 'private',
fn: function (data,aFilename){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(console)._log_(aFilename);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeData:toFileNamed:",{data:data,aFilename:aFilename},$globals.FileServer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["data", "aFilename"],
source: "writeData: data toFileNamed: aFilename\x0a\x09console log: aFilename",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:"]
}),
$globals.FileServer);


$globals.FileServer.klass.iVarNames = ['mimeTypes'];
$core.addMethod(
$core.method({
selector: "commandLineSwitches",
protocol: 'accessing',
fn: function (){
var self=this;
var switches;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
switches=$recv(self._methodsInProtocol_("accessing"))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
switches=$recv(switches)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._match_("^[^:]*:$");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
switches=$recv(switches)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv($recv(each)._allButLast())._replace_with_("([A-Z])","-$1"))._asLowercase())._replace_with_("^([a-z])","--$1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$1=switches;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commandLineSwitches",{switches:switches},$globals.FileServer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commandLineSwitches\x0a\x09\x22Collect all methodnames from the 'accessing' protocol\x0a\x09 and select the ones with only one parameter.\x0a\x09 Then remove the ':' at the end of the name\x0a\x09 and add a '--' at the beginning.\x0a\x09 Additionally all uppercase letters are made lowercase and preceded by a '-'.\x0a\x09 Example: fallbackPage: becomes --fallback-page.\x0a\x09 Return the Array containing the commandline switches.\x22\x0a\x09| switches |\x0a\x09switches := ((self methodsInProtocol: 'accessing') collect: [ :each | each selector]).\x0a\x09switches := switches select: [ :each | each match: '^[^:]*:$'].\x0a\x09switches :=switches collect: [ :each |\x0a\x09\x09(each allButLast replace: '([A-Z])' with: '-$1') asLowercase replace: '^([a-z])' with: '--$1' ].\x0a\x09^ switches",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "methodsInProtocol:", "selector", "select:", "match:", "replace:with:", "asLowercase", "allButLast"]
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "createServerWithArguments:",
protocol: 'initialization',
fn: function (options){
var self=this;
var server,popFront,front,optionName,optionValue,switches;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
var $early={};
try {
switches=self._commandLineSwitches();
server=self._new();
$recv(options)._ifEmpty_((function(){
$1=server;
throw $early=[$1];

}));
$2=$recv($recv(options)._size())._even();
if(!$core.assert($2)){
$recv(console)._log_("Using default parameters.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["log:"]=1;
//>>excludeEnd("ctx");
$3=console;
$4="Wrong commandline options or not enough arguments for: ".__comma(options);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($3)._log_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["log:"]=2;
//>>excludeEnd("ctx");
$5=console;
$6="Use any of the following ones: ".__comma(switches);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($5)._log_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["log:"]=3;
//>>excludeEnd("ctx");
$7=server;
return $7;
};
popFront=(function(args){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
front=$recv(args)._first();
front;
$recv(args)._remove_(front);
return front;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1,3)});
//>>excludeEnd("ctx");
});
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(options)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
optionName=$recv(popFront)._value_(options);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
optionName;
optionValue=$recv(popFront)._value_(options);
optionValue;
$8=$recv(switches)._includes_(optionName);
if($core.assert($8)){
optionName=self._selectorForCommandLineSwitch_(optionName);
optionName;
return $recv(server)._perform_withArguments_(optionName,$recv($Array())._with_(optionValue));
} else {
$9=console;
$10=$recv(optionName).__comma(" is not a valid commandline option");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($9)._log_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=4;
//>>excludeEnd("ctx");
return $recv(console)._log_("Use any of the following ones: ".__comma(switches));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$11=server;
return $11;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createServerWithArguments:",{options:options,server:server,popFront:popFront,front:front,optionName:optionName,optionValue:optionValue,switches:switches},$globals.FileServer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["options"],
source: "createServerWithArguments: options\x0a\x09\x22If options are empty return a default FileServer instance.\x0a\x09 If options are given loop through them and set the passed in values\x0a\x09 on the FileServer instance.\x0a\x09 \x0a\x09 Commanline options map directly to methods in the 'accessing' protocol\x0a\x09 taking one parameter.\x0a\x09 Adding a method to this protocol makes it directly settable through\x0a\x09 command line options.\x0a\x09 \x22\x0a\x09| server popFront front optionName optionValue switches |\x0a\x0a\x09switches := self commandLineSwitches.\x0a\x0a\x09server := self new.\x0a\x0a\x09options ifEmpty: [^server].\x0a\x0a\x09(options size even) ifFalse: [\x0a\x09\x09console log: 'Using default parameters.'.\x0a\x09\x09console log: 'Wrong commandline options or not enough arguments for: ' , options.\x0a\x09\x09console log: 'Use any of the following ones: ', switches.\x0a\x09\x09^server].\x0a\x0a\x09popFront := [:args |\x0a\x09\x09front := args first.\x0a\x09\x09args remove: front.\x0a\x09\x09front].\x0a\x0a\x09[options notEmpty] whileTrue: [\x0a\x09\x09optionName  := popFront value: options.\x0a\x09\x09optionValue := popFront value: options.\x0a\x0a\x09\x09(switches includes: optionName) ifTrue: [\x0a\x09\x09\x09optionName := self selectorForCommandLineSwitch: optionName.\x0a\x09\x09\x09server perform: optionName withArguments: (Array with: optionValue)]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09console log: optionName, ' is not a valid commandline option'.\x0a\x09\x09\x09\x09console log: 'Use any of the following ones: ', switches ]].\x0a\x09^ server.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["commandLineSwitches", "new", "ifEmpty:", "ifFalse:", "even", "size", "log:", ",", "first", "remove:", "whileTrue:", "notEmpty", "value:", "ifTrue:ifFalse:", "includes:", "selectorForCommandLineSwitch:", "perform:withArguments:", "with:"]
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "defaultBasePath",
protocol: 'accessing',
fn: function (){
var self=this;
return "./";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultBasePath\x0a\x09^ './'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "defaultHost",
protocol: 'accessing',
fn: function (){
var self=this;
return "127.0.0.1";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultHost\x0a\x09^ '127.0.0.1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "defaultMimeTypes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["%","application/x-trash","323","text/h323","abw","application/x-abiword","ai","application/postscript","aif","audio/x-aiff","aifc","audio/x-aiff","aiff","audio/x-aiff","alc","chemical/x-alchemy","art","image/x-jg","asc","text/plain","asf","video/x-ms-asf","asn","chemical/x-ncbi-asn1-spec","aso","chemical/x-ncbi-asn1-binary","asx","video/x-ms-asf","au","audio/basic","avi","video/x-msvideo","b","chemical/x-molconn-Z","bak","application/x-trash","bat","application/x-msdos-program","bcpio","application/x-bcpio","bib","text/x-bibtex","bin","application/octet-stream","bmp","image/x-ms-bmp","book","application/x-maker","bsd","chemical/x-crossfire","c","text/x-csrc","c++","text/x-c++src","c3d","chemical/x-chem3d","cac","chemical/x-cache","cache","chemical/x-cache","cascii","chemical/x-cactvs-binary","cat","application/vnd.ms-pki.seccat","cbin","chemical/x-cactvs-binary","cc","text/x-c++src","cdf","application/x-cdf","cdr","image/x-coreldraw","cdt","image/x-coreldrawtemplate","cdx","chemical/x-cdx","cdy","application/vnd.cinderella","cef","chemical/x-cxf","cer","chemical/x-cerius","chm","chemical/x-chemdraw","chrt","application/x-kchart","cif","chemical/x-cif","class","application/java-vm","cls","text/x-tex","cmdf","chemical/x-cmdf","cml","chemical/x-cml","cod","application/vnd.rim.cod","com","application/x-msdos-program","cpa","chemical/x-compass","cpio","application/x-cpio","cpp","text/x-c++src","cpt","image/x-corelphotopaint","crl","application/x-pkcs7-crl","crt","application/x-x509-ca-cert","csf","chemical/x-cache-csf","csh","text/x-csh","csm","chemical/x-csml","csml","chemical/x-csml","css","text/css","csv","text/comma-separated-values","ctab","chemical/x-cactvs-binary","ctx","chemical/x-ctx","cu","application/cu-seeme","cub","chemical/x-gaussian-cube","cxf","chemical/x-cxf","cxx","text/x-c++src","dat","chemical/x-mopac-input","dcr","application/x-director","deb","application/x-debian-package","dif","video/dv","diff","text/plain","dir","application/x-director","djv","image/vnd.djvu","djvu","image/vnd.djvu","dl","video/dl","dll","application/x-msdos-program","dmg","application/x-apple-diskimage","dms","application/x-dms","doc","application/msword","dot","application/msword","dv","video/dv","dvi","application/x-dvi","dx","chemical/x-jcamp-dx","dxr","application/x-director","emb","chemical/x-embl-dl-nucleotide","embl","chemical/x-embl-dl-nucleotide","ent","chemical/x-pdb","eps","application/postscript","etx","text/x-setext","exe","application/x-msdos-program","ez","application/andrew-inset","fb","application/x-maker","fbdoc","application/x-maker","fch","chemical/x-gaussian-checkpoint","fchk","chemical/x-gaussian-checkpoint","fig","application/x-xfig","flac","application/x-flac","fli","video/fli","fm","application/x-maker","frame","application/x-maker","frm","application/x-maker","gal","chemical/x-gaussian-log","gam","chemical/x-gamess-input","gamin","chemical/x-gamess-input","gau","chemical/x-gaussian-input","gcd","text/x-pcs-gcd","gcf","application/x-graphing-calculator","gcg","chemical/x-gcg8-sequence","gen","chemical/x-genbank","gf","application/x-tex-gf","gif","image/gif","gjc","chemical/x-gaussian-input","gjf","chemical/x-gaussian-input","gl","video/gl","gnumeric","application/x-gnumeric","gpt","chemical/x-mopac-graph","gsf","application/x-font","gsm","audio/x-gsm","gtar","application/x-gtar","h","text/x-chdr","h++","text/x-c++hdr","hdf","application/x-hdf","hh","text/x-c++hdr","hin","chemical/x-hin","hpp","text/x-c++hdr","hqx","application/mac-binhex40","hs","text/x-haskell","hta","application/hta","htc","text/x-component","htm","text/html","html","text/html","hxx","text/x-c++hdr","ica","application/x-ica","ice","x-conference/x-cooltalk","ico","image/x-icon","ics","text/calendar","icz","text/calendar","ief","image/ief","iges","model/iges","igs","model/iges","iii","application/x-iphone","inp","chemical/x-gamess-input","ins","application/x-internet-signup","iso","application/x-iso9660-image","isp","application/x-internet-signup","ist","chemical/x-isostar","istr","chemical/x-isostar","jad","text/vnd.sun.j2me.app-descriptor","jar","application/java-archive","java","text/x-java","jdx","chemical/x-jcamp-dx","jmz","application/x-jmol","jng","image/x-jng","jnlp","application/x-java-jnlp-file","jpe","image/jpeg","jpeg","image/jpeg","jpg","image/jpeg","js","application/javascript","kar","audio/midi","key","application/pgp-keys","kil","application/x-killustrator","kin","chemical/x-kinemage","kpr","application/x-kpresenter","kpt","application/x-kpresenter","ksp","application/x-kspread","kwd","application/x-kword","kwt","application/x-kword","latex","application/x-latex","lha","application/x-lha","lhs","text/x-literate-haskell","lsf","video/x-la-asf","lsx","video/x-la-asf","ltx","text/x-tex","lzh","application/x-lzh","lzx","application/x-lzx","m3u","audio/x-mpegurl","m4a","audio/mpeg","maker","application/x-maker","man","application/x-troff-man","mcif","chemical/x-mmcif","mcm","chemical/x-macmolecule","mdb","application/msaccess","me","application/x-troff-me","mesh","model/mesh","mid","audio/midi","midi","audio/midi","mif","application/x-mif","mm","application/x-freemind","mmd","chemical/x-macromodel-input","mmf","application/vnd.smaf","mml","text/mathml","mmod","chemical/x-macromodel-input","mng","video/x-mng","moc","text/x-moc","mol","chemical/x-mdl-molfile","mol2","chemical/x-mol2","moo","chemical/x-mopac-out","mop","chemical/x-mopac-input","mopcrt","chemical/x-mopac-input","mov","video/quicktime","movie","video/x-sgi-movie","mp2","audio/mpeg","mp3","audio/mpeg","mp4","video/mp4","mpc","chemical/x-mopac-input","mpe","video/mpeg","mpeg","video/mpeg","mpega","audio/mpeg","mpg","video/mpeg","mpga","audio/mpeg","ms","application/x-troff-ms","msh","model/mesh","msi","application/x-msi","mvb","chemical/x-mopac-vib","mxu","video/vnd.mpegurl","nb","application/mathematica","nc","application/x-netcdf","nwc","application/x-nwc","o","application/x-object","oda","application/oda","odb","application/vnd.oasis.opendocument.database","odc","application/vnd.oasis.opendocument.chart","odf","application/vnd.oasis.opendocument.formula","odg","application/vnd.oasis.opendocument.graphics","odi","application/vnd.oasis.opendocument.image","odm","application/vnd.oasis.opendocument.text-master","odp","application/vnd.oasis.opendocument.presentation","ods","application/vnd.oasis.opendocument.spreadsheet","odt","application/vnd.oasis.opendocument.text","ogg","application/ogg","old","application/x-trash","oth","application/vnd.oasis.opendocument.text-web","oza","application/x-oz-application","p","text/x-pascal","p7r","application/x-pkcs7-certreqresp","pac","application/x-ns-proxy-autoconfig","pas","text/x-pascal","pat","image/x-coreldrawpattern","pbm","image/x-portable-bitmap","pcf","application/x-font","pcf.Z","application/x-font","pcx","image/pcx","pdb","chemical/x-pdb","pdf","application/pdf","pfa","application/x-font","pfb","application/x-font","pgm","image/x-portable-graymap","pgn","application/x-chess-pgn","pgp","application/pgp-signature","pk","application/x-tex-pk","pl","text/x-perl","pls","audio/x-scpls","pm","text/x-perl","png","image/png","pnm","image/x-portable-anymap","pot","text/plain","ppm","image/x-portable-pixmap","pps","application/vnd.ms-powerpoint","ppt","application/vnd.ms-powerpoint","prf","application/pics-rules","prt","chemical/x-ncbi-asn1-ascii","ps","application/postscript","psd","image/x-photoshop","psp","text/x-psp","py","text/x-python","pyc","application/x-python-code","pyo","application/x-python-code","qt","video/quicktime","qtl","application/x-quicktimeplayer","ra","audio/x-realaudio","ram","audio/x-pn-realaudio","rar","application/rar","ras","image/x-cmu-raster","rd","chemical/x-mdl-rdfile","rdf","application/rdf+xml","rgb","image/x-rgb","rm","audio/x-pn-realaudio","roff","application/x-troff","ros","chemical/x-rosdal","rpm","application/x-redhat-package-manager","rss","application/rss+xml","rtf","text/rtf","rtx","text/richtext","rxn","chemical/x-mdl-rxnfile","sct","text/scriptlet","sd","chemical/x-mdl-sdfile","sd2","audio/x-sd2","sda","application/vnd.stardivision.draw","sdc","application/vnd.stardivision.calc","sdd","application/vnd.stardivision.impress","sdf","chemical/x-mdl-sdfile","sdp","application/vnd.stardivision.impress","sdw","application/vnd.stardivision.writer","ser","application/java-serialized-object","sgf","application/x-go-sgf","sgl","application/vnd.stardivision.writer-global","sh","text/x-sh","shar","application/x-shar","shtml","text/html","sid","audio/prs.sid","sik","application/x-trash","silo","model/mesh","sis","application/vnd.symbian.install","sit","application/x-stuffit","skd","application/x-koan","skm","application/x-koan","skp","application/x-koan","skt","application/x-koan","smf","application/vnd.stardivision.math","smi","application/smil","smil","application/smil","snd","audio/basic","spc","chemical/x-galactic-spc","spl","application/x-futuresplash","src","application/x-wais-source","stc","application/vnd.sun.xml.calc.template","std","application/vnd.sun.xml.draw.template","sti","application/vnd.sun.xml.impress.template","stl","application/vnd.ms-pki.stl","stw","application/vnd.sun.xml.writer.template","sty","text/x-tex","sv4cpio","application/x-sv4cpio","sv4crc","application/x-sv4crc","svg","image/svg+xml","svgz","image/svg+xml","sw","chemical/x-swissprot","swf","application/x-shockwave-flash","swfl","application/x-shockwave-flash","sxc","application/vnd.sun.xml.calc","sxd","application/vnd.sun.xml.draw","sxg","application/vnd.sun.xml.writer.global","sxi","application/vnd.sun.xml.impress","sxm","application/vnd.sun.xml.math","sxw","application/vnd.sun.xml.writer","t","application/x-troff","tar","application/x-tar","taz","application/x-gtar","tcl","text/x-tcl","tex","text/x-tex","texi","application/x-texinfo","texinfo","application/x-texinfo","text","text/plain","tgf","chemical/x-mdl-tgf","tgz","application/x-gtar","tif","image/tiff","tiff","image/tiff","tk","text/x-tcl","tm","text/texmacs","torrent","application/x-bittorrent","tr","application/x-troff","ts","text/texmacs","tsp","application/dsptype","tsv","text/tab-separated-values","txt","text/plain","udeb","application/x-debian-package","uls","text/iuls","ustar","application/x-ustar","val","chemical/x-ncbi-asn1-binary","vcd","application/x-cdlink","vcf","text/x-vcard","vcs","text/x-vcalendar","vmd","chemical/x-vmd","vms","chemical/x-vamas-iso14976","vor","application/vnd.stardivision.writer","vrm","x-world/x-vrml","vrml","x-world/x-vrml","vsd","application/vnd.visio","wad","application/x-doom","wav","audio/x-wav","wax","audio/x-ms-wax","wbmp","image/vnd.wap.wbmp","wbxml","application/vnd.wap.wbxml","wk","application/x-123","wm","video/x-ms-wm","wma","audio/x-ms-wma","wmd","application/x-ms-wmd","wml","text/vnd.wap.wml","wmlc","application/vnd.wap.wmlc","wmls","text/vnd.wap.wmlscript","wmlsc","application/vnd.wap.wmlscriptc","wmv","video/x-ms-wmv","wmx","video/x-ms-wmx","wmz","application/x-ms-wmz","wp5","application/wordperfect5.1","wpd","application/wordperfect","wrl","x-world/x-vrml","wsc","text/scriptlet","wvx","video/x-ms-wvx","wz","application/x-wingz","xbm","image/x-xbitmap","xcf","application/x-xcf","xht","application/xhtml+xml","xhtml","application/xhtml+xml","xlb","application/vnd.ms-excel","xls","application/vnd.ms-excel","xlt","application/vnd.ms-excel","xml","application/xml","xpi","application/x-xpinstall","xpm","image/x-xpixmap","xsl","application/xml","xtel","chemical/x-xtel","xul","application/vnd.mozilla.xul+xml","xwd","image/x-xwindowdump","xyz","chemical/x-xyz","zip","application/zip","zmt","chemical/x-mopac-input","~","application/x-trash"]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultMimeTypes\x0a\x09^ #{\x0a\x09\x09'%' -> 'application/x-trash'.\x0a\x09\x09'323' -> 'text/h323'.\x0a\x09\x09'abw' -> 'application/x-abiword'.\x0a\x09\x09'ai' -> 'application/postscript'.\x0a\x09\x09'aif' -> 'audio/x-aiff'.\x0a\x09\x09'aifc' -> 'audio/x-aiff'.\x0a\x09\x09'aiff' -> 'audio/x-aiff'.\x0a\x09\x09'alc' -> 'chemical/x-alchemy'.\x0a\x09\x09'art' -> 'image/x-jg'.\x0a\x09\x09'asc' -> 'text/plain'.\x0a\x09\x09'asf' -> 'video/x-ms-asf'.\x0a\x09\x09'asn' -> 'chemical/x-ncbi-asn1-spec'.\x0a\x09\x09'aso' -> 'chemical/x-ncbi-asn1-binary'.\x0a\x09\x09'asx' -> 'video/x-ms-asf'.\x0a\x09\x09'au' -> 'audio/basic'.\x0a\x09\x09'avi' -> 'video/x-msvideo'.\x0a\x09\x09'b' -> 'chemical/x-molconn-Z'.\x0a\x09\x09'bak' -> 'application/x-trash'.\x0a\x09\x09'bat' -> 'application/x-msdos-program'.\x0a\x09\x09'bcpio' -> 'application/x-bcpio'.\x0a\x09\x09'bib' -> 'text/x-bibtex'.\x0a\x09\x09'bin' -> 'application/octet-stream'.\x0a\x09\x09'bmp' -> 'image/x-ms-bmp'.\x0a\x09\x09'book' -> 'application/x-maker'.\x0a\x09\x09'bsd' -> 'chemical/x-crossfire'.\x0a\x09\x09'c' -> 'text/x-csrc'.\x0a\x09\x09'c++' -> 'text/x-c++src'.\x0a\x09\x09'c3d' -> 'chemical/x-chem3d'.\x0a\x09\x09'cac' -> 'chemical/x-cache'.\x0a\x09\x09'cache' -> 'chemical/x-cache'.\x0a\x09\x09'cascii' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'cat' -> 'application/vnd.ms-pki.seccat'.\x0a\x09\x09'cbin' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'cc' -> 'text/x-c++src'.\x0a\x09\x09'cdf' -> 'application/x-cdf'.\x0a\x09\x09'cdr' -> 'image/x-coreldraw'.\x0a\x09\x09'cdt' -> 'image/x-coreldrawtemplate'.\x0a\x09\x09'cdx' -> 'chemical/x-cdx'.\x0a\x09\x09'cdy' -> 'application/vnd.cinderella'.\x0a\x09\x09'cef' -> 'chemical/x-cxf'.\x0a\x09\x09'cer' -> 'chemical/x-cerius'.\x0a\x09\x09'chm' -> 'chemical/x-chemdraw'.\x0a\x09\x09'chrt' -> 'application/x-kchart'.\x0a\x09\x09'cif' -> 'chemical/x-cif'.\x0a\x09\x09'class' -> 'application/java-vm'.\x0a\x09\x09'cls' -> 'text/x-tex'.\x0a\x09\x09'cmdf' -> 'chemical/x-cmdf'.\x0a\x09\x09'cml' -> 'chemical/x-cml'.\x0a\x09\x09'cod' -> 'application/vnd.rim.cod'.\x0a\x09\x09'com' -> 'application/x-msdos-program'.\x0a\x09\x09'cpa' -> 'chemical/x-compass'.\x0a\x09\x09'cpio' -> 'application/x-cpio'.\x0a\x09\x09'cpp' -> 'text/x-c++src'.\x0a\x09\x09'cpt' -> 'image/x-corelphotopaint'.\x0a\x09\x09'crl' -> 'application/x-pkcs7-crl'.\x0a\x09\x09'crt' -> 'application/x-x509-ca-cert'.\x0a\x09\x09'csf' -> 'chemical/x-cache-csf'.\x0a\x09\x09'csh' -> 'text/x-csh'.\x0a\x09\x09'csm' -> 'chemical/x-csml'.\x0a\x09\x09'csml' -> 'chemical/x-csml'.\x0a\x09\x09'css' -> 'text/css'.\x0a\x09\x09'csv' -> 'text/comma-separated-values'.\x0a\x09\x09'ctab' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'ctx' -> 'chemical/x-ctx'.\x0a\x09\x09'cu' -> 'application/cu-seeme'.\x0a\x09\x09'cub' -> 'chemical/x-gaussian-cube'.\x0a\x09\x09'cxf' -> 'chemical/x-cxf'.\x0a\x09\x09'cxx' -> 'text/x-c++src'.\x0a\x09\x09'dat' -> 'chemical/x-mopac-input'.\x0a\x09\x09'dcr' -> 'application/x-director'.\x0a\x09\x09'deb' -> 'application/x-debian-package'.\x0a\x09\x09'dif' -> 'video/dv'.\x0a\x09\x09'diff' -> 'text/plain'.\x0a\x09\x09'dir' -> 'application/x-director'.\x0a\x09\x09'djv' -> 'image/vnd.djvu'.\x0a\x09\x09'djvu' -> 'image/vnd.djvu'.\x0a\x09\x09'dl' -> 'video/dl'.\x0a\x09\x09'dll' -> 'application/x-msdos-program'.\x0a\x09\x09'dmg' -> 'application/x-apple-diskimage'.\x0a\x09\x09'dms' -> 'application/x-dms'.\x0a\x09\x09'doc' -> 'application/msword'.\x0a\x09\x09'dot' -> 'application/msword'.\x0a\x09\x09'dv' -> 'video/dv'.\x0a\x09\x09'dvi' -> 'application/x-dvi'.\x0a\x09\x09'dx' -> 'chemical/x-jcamp-dx'.\x0a\x09\x09'dxr' -> 'application/x-director'.\x0a\x09\x09'emb' -> 'chemical/x-embl-dl-nucleotide'.\x0a\x09\x09'embl' -> 'chemical/x-embl-dl-nucleotide'.\x0a\x09\x09'ent' -> 'chemical/x-pdb'.\x0a\x09\x09'eps' -> 'application/postscript'.\x0a\x09\x09'etx' -> 'text/x-setext'.\x0a\x09\x09'exe' -> 'application/x-msdos-program'.\x0a\x09\x09'ez' -> 'application/andrew-inset'.\x0a\x09\x09'fb' -> 'application/x-maker'.\x0a\x09\x09'fbdoc' -> 'application/x-maker'.\x0a\x09\x09'fch' -> 'chemical/x-gaussian-checkpoint'.\x0a\x09\x09'fchk' -> 'chemical/x-gaussian-checkpoint'.\x0a\x09\x09'fig' -> 'application/x-xfig'.\x0a\x09\x09'flac' -> 'application/x-flac'.\x0a\x09\x09'fli' -> 'video/fli'.\x0a\x09\x09'fm' -> 'application/x-maker'.\x0a\x09\x09'frame' -> 'application/x-maker'.\x0a\x09\x09'frm' -> 'application/x-maker'.\x0a\x09\x09'gal' -> 'chemical/x-gaussian-log'.\x0a\x09\x09'gam' -> 'chemical/x-gamess-input'.\x0a\x09\x09'gamin' -> 'chemical/x-gamess-input'.\x0a\x09\x09'gau' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gcd' -> 'text/x-pcs-gcd'.\x0a\x09\x09'gcf' -> 'application/x-graphing-calculator'.\x0a\x09\x09'gcg' -> 'chemical/x-gcg8-sequence'.\x0a\x09\x09'gen' -> 'chemical/x-genbank'.\x0a\x09\x09'gf' -> 'application/x-tex-gf'.\x0a\x09\x09'gif' -> 'image/gif'.\x0a\x09\x09'gjc' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gjf' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gl' -> 'video/gl'.\x0a\x09\x09'gnumeric' -> 'application/x-gnumeric'.\x0a\x09\x09'gpt' -> 'chemical/x-mopac-graph'.\x0a\x09\x09'gsf' -> 'application/x-font'.\x0a\x09\x09'gsm' -> 'audio/x-gsm'.\x0a\x09\x09'gtar' -> 'application/x-gtar'.\x0a\x09\x09'h' -> 'text/x-chdr'.\x0a\x09\x09'h++' -> 'text/x-c++hdr'.\x0a\x09\x09'hdf' -> 'application/x-hdf'.\x0a\x09\x09'hh' -> 'text/x-c++hdr'.\x0a\x09\x09'hin' -> 'chemical/x-hin'.\x0a\x09\x09'hpp' -> 'text/x-c++hdr'.\x0a\x09\x09'hqx' -> 'application/mac-binhex40'.\x0a\x09\x09'hs' -> 'text/x-haskell'.\x0a\x09\x09'hta' -> 'application/hta'.\x0a\x09\x09'htc' -> 'text/x-component'.\x0a\x09\x09'htm' -> 'text/html'.\x0a\x09\x09'html' -> 'text/html'.\x0a\x09\x09'hxx' -> 'text/x-c++hdr'.\x0a\x09\x09'ica' -> 'application/x-ica'.\x0a\x09\x09'ice' -> 'x-conference/x-cooltalk'.\x0a\x09\x09'ico' -> 'image/x-icon'.\x0a\x09\x09'ics' -> 'text/calendar'.\x0a\x09\x09'icz' -> 'text/calendar'.\x0a\x09\x09'ief' -> 'image/ief'.\x0a\x09\x09'iges' -> 'model/iges'.\x0a\x09\x09'igs' -> 'model/iges'.\x0a\x09\x09'iii' -> 'application/x-iphone'.\x0a\x09\x09'inp' -> 'chemical/x-gamess-input'.\x0a\x09\x09'ins' -> 'application/x-internet-signup'.\x0a\x09\x09'iso' -> 'application/x-iso9660-image'.\x0a\x09\x09'isp' -> 'application/x-internet-signup'.\x0a\x09\x09'ist' -> 'chemical/x-isostar'.\x0a\x09\x09'istr' -> 'chemical/x-isostar'.\x0a\x09\x09'jad' -> 'text/vnd.sun.j2me.app-descriptor'.\x0a\x09\x09'jar' -> 'application/java-archive'.\x0a\x09\x09'java' -> 'text/x-java'.\x0a\x09\x09'jdx' -> 'chemical/x-jcamp-dx'.\x0a\x09\x09'jmz' -> 'application/x-jmol'.\x0a\x09\x09'jng' -> 'image/x-jng'.\x0a\x09\x09'jnlp' -> 'application/x-java-jnlp-file'.\x0a\x09\x09'jpe' -> 'image/jpeg'.\x0a\x09\x09'jpeg' -> 'image/jpeg'.\x0a\x09\x09'jpg' -> 'image/jpeg'.\x0a\x09\x09'js' -> 'application/javascript'.\x0a\x09\x09'kar' -> 'audio/midi'.\x0a\x09\x09'key' -> 'application/pgp-keys'.\x0a\x09\x09'kil' -> 'application/x-killustrator'.\x0a\x09\x09'kin' -> 'chemical/x-kinemage'.\x0a\x09\x09'kpr' -> 'application/x-kpresenter'.\x0a\x09\x09'kpt' -> 'application/x-kpresenter'.\x0a\x09\x09'ksp' -> 'application/x-kspread'.\x0a\x09\x09'kwd' -> 'application/x-kword'.\x0a\x09\x09'kwt' -> 'application/x-kword'.\x0a\x09\x09'latex' -> 'application/x-latex'.\x0a\x09\x09'lha' -> 'application/x-lha'.\x0a\x09\x09'lhs' -> 'text/x-literate-haskell'.\x0a\x09\x09'lsf' -> 'video/x-la-asf'.\x0a\x09\x09'lsx' -> 'video/x-la-asf'.\x0a\x09\x09'ltx' -> 'text/x-tex'.\x0a\x09\x09'lzh' -> 'application/x-lzh'.\x0a\x09\x09'lzx' -> 'application/x-lzx'.\x0a\x09\x09'm3u' -> 'audio/x-mpegurl'.\x0a\x09\x09'm4a' -> 'audio/mpeg'.\x0a\x09\x09'maker' -> 'application/x-maker'.\x0a\x09\x09'man' -> 'application/x-troff-man'.\x0a\x09\x09'mcif' -> 'chemical/x-mmcif'.\x0a\x09\x09'mcm' -> 'chemical/x-macmolecule'.\x0a\x09\x09'mdb' -> 'application/msaccess'.\x0a\x09\x09'me' -> 'application/x-troff-me'.\x0a\x09\x09'mesh' -> 'model/mesh'.\x0a\x09\x09'mid' -> 'audio/midi'.\x0a\x09\x09'midi' -> 'audio/midi'.\x0a\x09\x09'mif' -> 'application/x-mif'.\x0a\x09\x09'mm' -> 'application/x-freemind'.\x0a\x09\x09'mmd' -> 'chemical/x-macromodel-input'.\x0a\x09\x09'mmf' -> 'application/vnd.smaf'.\x0a\x09\x09'mml' -> 'text/mathml'.\x0a\x09\x09'mmod' -> 'chemical/x-macromodel-input'.\x0a\x09\x09'mng' -> 'video/x-mng'.\x0a\x09\x09'moc' -> 'text/x-moc'.\x0a\x09\x09'mol' -> 'chemical/x-mdl-molfile'.\x0a\x09\x09'mol2' -> 'chemical/x-mol2'.\x0a\x09\x09'moo' -> 'chemical/x-mopac-out'.\x0a\x09\x09'mop' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mopcrt' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mov' -> 'video/quicktime'.\x0a\x09\x09'movie' -> 'video/x-sgi-movie'.\x0a\x09\x09'mp2' -> 'audio/mpeg'.\x0a\x09\x09'mp3' -> 'audio/mpeg'.\x0a\x09\x09'mp4' -> 'video/mp4'.\x0a\x09\x09'mpc' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mpe' -> 'video/mpeg'.\x0a\x09\x09'mpeg' -> 'video/mpeg'.\x0a\x09\x09'mpega' -> 'audio/mpeg'.\x0a\x09\x09'mpg' -> 'video/mpeg'.\x0a\x09\x09'mpga' -> 'audio/mpeg'.\x0a\x09\x09'ms' -> 'application/x-troff-ms'.\x0a\x09\x09'msh' -> 'model/mesh'.\x0a\x09\x09'msi' -> 'application/x-msi'.\x0a\x09\x09'mvb' -> 'chemical/x-mopac-vib'.\x0a\x09\x09'mxu' -> 'video/vnd.mpegurl'.\x0a\x09\x09'nb' -> 'application/mathematica'.\x0a\x09\x09'nc' -> 'application/x-netcdf'.\x0a\x09\x09'nwc' -> 'application/x-nwc'.\x0a\x09\x09'o' -> 'application/x-object'.\x0a\x09\x09'oda' -> 'application/oda'.\x0a\x09\x09'odb' -> 'application/vnd.oasis.opendocument.database'.\x0a\x09\x09'odc' -> 'application/vnd.oasis.opendocument.chart'.\x0a\x09\x09'odf' -> 'application/vnd.oasis.opendocument.formula'.\x0a\x09\x09'odg' -> 'application/vnd.oasis.opendocument.graphics'.\x0a\x09\x09'odi' -> 'application/vnd.oasis.opendocument.image'.\x0a\x09\x09'odm' -> 'application/vnd.oasis.opendocument.text-master'.\x0a\x09\x09'odp' -> 'application/vnd.oasis.opendocument.presentation'.\x0a\x09\x09'ods' -> 'application/vnd.oasis.opendocument.spreadsheet'.\x0a\x09\x09'odt' -> 'application/vnd.oasis.opendocument.text'.\x0a\x09\x09'ogg' -> 'application/ogg'.\x0a\x09\x09'old' -> 'application/x-trash'.\x0a\x09\x09'oth' -> 'application/vnd.oasis.opendocument.text-web'.\x0a\x09\x09'oza' -> 'application/x-oz-application'.\x0a\x09\x09'p' -> 'text/x-pascal'.\x0a\x09\x09'p7r' -> 'application/x-pkcs7-certreqresp'.\x0a\x09\x09'pac' -> 'application/x-ns-proxy-autoconfig'.\x0a\x09\x09'pas' -> 'text/x-pascal'.\x0a\x09\x09'pat' -> 'image/x-coreldrawpattern'.\x0a\x09\x09'pbm' -> 'image/x-portable-bitmap'.\x0a\x09\x09'pcf' -> 'application/x-font'.\x0a\x09\x09'pcf.Z' -> 'application/x-font'.\x0a\x09\x09'pcx' -> 'image/pcx'.\x0a\x09\x09'pdb' -> 'chemical/x-pdb'.\x0a\x09\x09'pdf' -> 'application/pdf'.\x0a\x09\x09'pfa' -> 'application/x-font'.\x0a\x09\x09'pfb' -> 'application/x-font'.\x0a\x09\x09'pgm' -> 'image/x-portable-graymap'.\x0a\x09\x09'pgn' -> 'application/x-chess-pgn'.\x0a\x09\x09'pgp' -> 'application/pgp-signature'.\x0a\x09\x09'pk' -> 'application/x-tex-pk'.\x0a\x09\x09'pl' -> 'text/x-perl'.\x0a\x09\x09'pls' -> 'audio/x-scpls'.\x0a\x09\x09'pm' -> 'text/x-perl'.\x0a\x09\x09'png' -> 'image/png'.\x0a\x09\x09'pnm' -> 'image/x-portable-anymap'.\x0a\x09\x09'pot' -> 'text/plain'.\x0a\x09\x09'ppm' -> 'image/x-portable-pixmap'.\x0a\x09\x09'pps' -> 'application/vnd.ms-powerpoint'.\x0a\x09\x09'ppt' -> 'application/vnd.ms-powerpoint'.\x0a\x09\x09'prf' -> 'application/pics-rules'.\x0a\x09\x09'prt' -> 'chemical/x-ncbi-asn1-ascii'.\x0a\x09\x09'ps' -> 'application/postscript'.\x0a\x09\x09'psd' -> 'image/x-photoshop'.\x0a\x09\x09'psp' -> 'text/x-psp'.\x0a\x09\x09'py' -> 'text/x-python'.\x0a\x09\x09'pyc' -> 'application/x-python-code'.\x0a\x09\x09'pyo' -> 'application/x-python-code'.\x0a\x09\x09'qt' -> 'video/quicktime'.\x0a\x09\x09'qtl' -> 'application/x-quicktimeplayer'.\x0a\x09\x09'ra' -> 'audio/x-realaudio'.\x0a\x09\x09'ram' -> 'audio/x-pn-realaudio'.\x0a\x09\x09'rar' -> 'application/rar'.\x0a\x09\x09'ras' -> 'image/x-cmu-raster'.\x0a\x09\x09'rd' -> 'chemical/x-mdl-rdfile'.\x0a\x09\x09'rdf' -> 'application/rdf+xml'.\x0a\x09\x09'rgb' -> 'image/x-rgb'.\x0a\x09\x09'rm' -> 'audio/x-pn-realaudio'.\x0a\x09\x09'roff' -> 'application/x-troff'.\x0a\x09\x09'ros' -> 'chemical/x-rosdal'.\x0a\x09\x09'rpm' -> 'application/x-redhat-package-manager'.\x0a\x09\x09'rss' -> 'application/rss+xml'.\x0a\x09\x09'rtf' -> 'text/rtf'.\x0a\x09\x09'rtx' -> 'text/richtext'.\x0a\x09\x09'rxn' -> 'chemical/x-mdl-rxnfile'.\x0a\x09\x09'sct' -> 'text/scriptlet'.\x0a\x09\x09'sd' -> 'chemical/x-mdl-sdfile'.\x0a\x09\x09'sd2' -> 'audio/x-sd2'.\x0a\x09\x09'sda' -> 'application/vnd.stardivision.draw'.\x0a\x09\x09'sdc' -> 'application/vnd.stardivision.calc'.\x0a\x09\x09'sdd' -> 'application/vnd.stardivision.impress'.\x0a\x09\x09'sdf' -> 'chemical/x-mdl-sdfile'.\x0a\x09\x09'sdp' -> 'application/vnd.stardivision.impress'.\x0a\x09\x09'sdw' -> 'application/vnd.stardivision.writer'.\x0a\x09\x09'ser' -> 'application/java-serialized-object'.\x0a\x09\x09'sgf' -> 'application/x-go-sgf'.\x0a\x09\x09'sgl' -> 'application/vnd.stardivision.writer-global'.\x0a\x09\x09'sh' -> 'text/x-sh'.\x0a\x09\x09'shar' -> 'application/x-shar'.\x0a\x09\x09'shtml' -> 'text/html'.\x0a\x09\x09'sid' -> 'audio/prs.sid'.\x0a\x09\x09'sik' -> 'application/x-trash'.\x0a\x09\x09'silo' -> 'model/mesh'.\x0a\x09\x09'sis' -> 'application/vnd.symbian.install'.\x0a\x09\x09'sit' -> 'application/x-stuffit'.\x0a\x09\x09'skd' -> 'application/x-koan'.\x0a\x09\x09'skm' -> 'application/x-koan'.\x0a\x09\x09'skp' -> 'application/x-koan'.\x0a\x09\x09'skt' -> 'application/x-koan'.\x0a\x09\x09'smf' -> 'application/vnd.stardivision.math'.\x0a\x09\x09'smi' -> 'application/smil'.\x0a\x09\x09'smil' -> 'application/smil'.\x0a\x09\x09'snd' -> 'audio/basic'.\x0a\x09\x09'spc' -> 'chemical/x-galactic-spc'.\x0a\x09\x09'spl' -> 'application/x-futuresplash'.\x0a\x09\x09'src' -> 'application/x-wais-source'.\x0a\x09\x09'stc' -> 'application/vnd.sun.xml.calc.template'.\x0a\x09\x09'std' -> 'application/vnd.sun.xml.draw.template'.\x0a\x09\x09'sti' -> 'application/vnd.sun.xml.impress.template'.\x0a\x09\x09'stl' -> 'application/vnd.ms-pki.stl'.\x0a\x09\x09'stw' -> 'application/vnd.sun.xml.writer.template'.\x0a\x09\x09'sty' -> 'text/x-tex'.\x0a\x09\x09'sv4cpio' -> 'application/x-sv4cpio'.\x0a\x09\x09'sv4crc' -> 'application/x-sv4crc'.\x0a\x09\x09'svg' -> 'image/svg+xml'.\x0a\x09\x09'svgz' -> 'image/svg+xml'.\x0a\x09\x09'sw' -> 'chemical/x-swissprot'.\x0a\x09\x09'swf' -> 'application/x-shockwave-flash'.\x0a\x09\x09'swfl' -> 'application/x-shockwave-flash'.\x0a\x09\x09'sxc' -> 'application/vnd.sun.xml.calc'.\x0a\x09\x09'sxd' -> 'application/vnd.sun.xml.draw'.\x0a\x09\x09'sxg' -> 'application/vnd.sun.xml.writer.global'.\x0a\x09\x09'sxi' -> 'application/vnd.sun.xml.impress'.\x0a\x09\x09'sxm' -> 'application/vnd.sun.xml.math'.\x0a\x09\x09'sxw' -> 'application/vnd.sun.xml.writer'.\x0a\x09\x09't' -> 'application/x-troff'.\x0a\x09\x09'tar' -> 'application/x-tar'.\x0a\x09\x09'taz' -> 'application/x-gtar'.\x0a\x09\x09'tcl' -> 'text/x-tcl'.\x0a\x09\x09'tex' -> 'text/x-tex'.\x0a\x09\x09'texi' -> 'application/x-texinfo'.\x0a\x09\x09'texinfo' -> 'application/x-texinfo'.\x0a\x09\x09'text' -> 'text/plain'.\x0a\x09\x09'tgf' -> 'chemical/x-mdl-tgf'.\x0a\x09\x09'tgz' -> 'application/x-gtar'.\x0a\x09\x09'tif' -> 'image/tiff'.\x0a\x09\x09'tiff' -> 'image/tiff'.\x0a\x09\x09'tk' -> 'text/x-tcl'.\x0a\x09\x09'tm' -> 'text/texmacs'.\x0a\x09\x09'torrent' -> 'application/x-bittorrent'.\x0a\x09\x09'tr' -> 'application/x-troff'.\x0a\x09\x09'ts' -> 'text/texmacs'.\x0a\x09\x09'tsp' -> 'application/dsptype'.\x0a\x09\x09'tsv' -> 'text/tab-separated-values'.\x0a\x09\x09'txt' -> 'text/plain'.\x0a\x09\x09'udeb' -> 'application/x-debian-package'.\x0a\x09\x09'uls' -> 'text/iuls'.\x0a\x09\x09'ustar' -> 'application/x-ustar'.\x0a\x09\x09'val' -> 'chemical/x-ncbi-asn1-binary'.\x0a\x09\x09'vcd' -> 'application/x-cdlink'.\x0a\x09\x09'vcf' -> 'text/x-vcard'.\x0a\x09\x09'vcs' -> 'text/x-vcalendar'.\x0a\x09\x09'vmd' -> 'chemical/x-vmd'.\x0a\x09\x09'vms' -> 'chemical/x-vamas-iso14976'.\x0a\x09\x09'vor' -> 'application/vnd.stardivision.writer'.\x0a\x09\x09'vrm' -> 'x-world/x-vrml'.\x0a\x09\x09'vrml' -> 'x-world/x-vrml'.\x0a\x09\x09'vsd' -> 'application/vnd.visio'.\x0a\x09\x09'wad' -> 'application/x-doom'.\x0a\x09\x09'wav' -> 'audio/x-wav'.\x0a\x09\x09'wax' -> 'audio/x-ms-wax'.\x0a\x09\x09'wbmp' -> 'image/vnd.wap.wbmp'.\x0a\x09\x09'wbxml' -> 'application/vnd.wap.wbxml'.\x0a\x09\x09'wk' -> 'application/x-123'.\x0a\x09\x09'wm' -> 'video/x-ms-wm'.\x0a\x09\x09'wma' -> 'audio/x-ms-wma'.\x0a\x09\x09'wmd' -> 'application/x-ms-wmd'.\x0a\x09\x09'wml' -> 'text/vnd.wap.wml'.\x0a\x09\x09'wmlc' -> 'application/vnd.wap.wmlc'.\x0a\x09\x09'wmls' -> 'text/vnd.wap.wmlscript'.\x0a\x09\x09'wmlsc' -> 'application/vnd.wap.wmlscriptc'.\x0a\x09\x09'wmv' -> 'video/x-ms-wmv'.\x0a\x09\x09'wmx' -> 'video/x-ms-wmx'.\x0a\x09\x09'wmz' -> 'application/x-ms-wmz'.\x0a\x09\x09'wp5' -> 'application/wordperfect5.1'.\x0a\x09\x09'wpd' -> 'application/wordperfect'.\x0a\x09\x09'wrl' -> 'x-world/x-vrml'.\x0a\x09\x09'wsc' -> 'text/scriptlet'.\x0a\x09\x09'wvx' -> 'video/x-ms-wvx'.\x0a\x09\x09'wz' -> 'application/x-wingz'.\x0a\x09\x09'xbm' -> 'image/x-xbitmap'.\x0a\x09\x09'xcf' -> 'application/x-xcf'.\x0a\x09\x09'xht' -> 'application/xhtml+xml'.\x0a\x09\x09'xhtml' -> 'application/xhtml+xml'.\x0a\x09\x09'xlb' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xls' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xlt' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xml' -> 'application/xml'.\x0a\x09\x09'xpi' -> 'application/x-xpinstall'.\x0a\x09\x09'xpm' -> 'image/x-xpixmap'.\x0a\x09\x09'xsl' -> 'application/xml'.\x0a\x09\x09'xtel' -> 'chemical/x-xtel'.\x0a\x09\x09'xul' -> 'application/vnd.mozilla.xul+xml'.\x0a\x09\x09'xwd' -> 'image/x-xwindowdump'.\x0a\x09\x09'xyz' -> 'chemical/x-xyz'.\x0a\x09\x09'zip' -> 'application/zip'.\x0a\x09\x09'zmt' -> 'chemical/x-mopac-input'.\x0a\x09\x09'~' -> 'application/x-trash'\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "defaultPort",
protocol: 'accessing',
fn: function (){
var self=this;
return (4000);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultPort\x0a\x09^ 4000",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "main",
protocol: 'initialization',
fn: function (){
var self=this;
var fileServer,args;
function $FileServer(){return $globals.FileServer||(typeof FileServer=="undefined"?nil:FileServer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
args=$recv(process)._argv();
$recv(args)._removeFrom_to_((1),(3));
$recv(args)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each).__eq("--help");
if($core.assert($1)){
return $recv($FileServer())._printHelp();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
fileServer=$recv($FileServer())._createServerWithArguments_(args);
fileServer;
$2=$recv(fileServer)._start();
throw $early=[$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{fileServer:fileServer,args:args},$globals.FileServer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x09\x22Main entry point for Amber applications.\x0a\x09 Creates and starts a FileServer instance.\x22\x0a\x09| fileServer args |\x0a\x09args := process argv.\x0a\x09\x22Remove the first args which contain the path to the node executable and the script file.\x22\x0a\x09args removeFrom: 1 to: 3.\x0a\x0a\x09args detect: [ :each |\x0a\x09\x09(each = '--help') ifTrue: [FileServer printHelp]]\x0a\x09ifNone: [\x0a\x09\x09fileServer := FileServer createServerWithArguments: args.\x0a\x09\x09^ fileServer start]",
referencedClasses: ["FileServer"],
//>>excludeEnd("ide");
messageSends: ["argv", "removeFrom:to:", "detect:ifNone:", "ifTrue:", "=", "printHelp", "createServerWithArguments:", "start"]
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "mimeTypeFor:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._mimeTypes())._at_ifAbsent_($recv(aString)._replace_with_(".*[\x5c.]",""),(function(){
return "text/plain";

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mimeTypeFor:",{aString:aString},$globals.FileServer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "mimeTypeFor: aString\x0a\x09^ self mimeTypes at: (aString replace: '.*[\x5c.]' with: '') ifAbsent: ['text/plain']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "mimeTypes", "replace:with:"]
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "mimeTypes",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@mimeTypes"];
if(($receiver = $2) == null || $receiver.isNil){
self["@mimeTypes"]=self._defaultMimeTypes();
$1=self["@mimeTypes"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mimeTypes",{},$globals.FileServer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mimeTypes\x0a\x09^ mimeTypes ifNil: [mimeTypes := self defaultMimeTypes]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultMimeTypes"]
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "printHelp",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(console)._log_("Available commandline options are:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["log:"]=1;
//>>excludeEnd("ctx");
$recv(console)._log_("--help");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["log:"]=2;
//>>excludeEnd("ctx");
$recv(self._commandLineSwitches())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(console)._log_($recv(each).__comma(" <parameter>"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printHelp",{},$globals.FileServer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printHelp\x0a\x09console log: 'Available commandline options are:'.\x0a\x09console log: '--help'.\x0a\x09self commandLineSwitches do: [ :each |\x0a\x09\x09console log: each, ' <parameter>']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "do:", "commandLineSwitches", ","]
}),
$globals.FileServer.klass);

$core.addMethod(
$core.method({
selector: "selectorForCommandLineSwitch:",
protocol: 'accessing',
fn: function (aSwitch){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(aSwitch)._replace_with_("^--",""))._replace_with_("-[a-z]",(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._second())._asUppercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(":");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectorForCommandLineSwitch:",{aSwitch:aSwitch},$globals.FileServer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSwitch"],
source: "selectorForCommandLineSwitch: aSwitch\x0a\x09\x22Remove the trailing '--', add ':' at the end\x0a\x09 and replace all occurences of a lowercase letter preceded by a '-' with\x0a\x09 the Uppercase letter.\x0a\x09 Example: --fallback-page becomes fallbackPage:\x22\x0a\x09^ ((aSwitch replace: '^--' with: '')\x0a\x09\x09replace: '-[a-z]' with: [ :each | each second asUppercase ]), ':'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "replace:with:", "asUppercase", "second"]
}),
$globals.FileServer.klass);


$core.addClass('Initer', $globals.BaseFileManipulator, ['childProcess', 'nmPath'], 'AmberCli');
$core.addMethod(
$core.method({
selector: "bowerInstallThenDo:",
protocol: 'action',
fn: function (aBlock){
var self=this;
var child;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
child=$recv(self["@childProcess"])._fork_args_(self._npmScriptForModule_named_("bower","bower"),["install"]);
$1=child;
$recv($1)._on_do_("error",aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_do_("close",(function(code){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(code).__eq((0));
if($core.assert($4)){
$3=nil;
} else {
$3=code;
};
return $recv(aBlock)._value_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({code:code},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bowerInstallThenDo:",{aBlock:aBlock,child:child},$globals.Initer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "bowerInstallThenDo: aBlock\x0a\x09| child |\x0a\x09child := childProcess\x0a\x09\x09fork: (self npmScriptForModule: 'bower' named: 'bower')\x0a\x09\x09args: #('install').\x0a\x09child\x0a\x09\x09on: 'error' do: aBlock;\x0a\x09\x09on: 'close' do: [ :code |\x0a\x09\x09\x09aBlock value: (code = 0 ifTrue: [ nil ] ifFalse: [ code ]) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fork:args:", "npmScriptForModule:named:", "on:do:", "value:", "ifTrue:ifFalse:", "="]
}),
$globals.Initer);

$core.addMethod(
$core.method({
selector: "finishMessage",
protocol: 'action',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(console)._log_([" ", "The project should now be set up.", " ", " ", "To manage project from cli (run tests, recompile),", "the `grunt` command-line tool needs to be installed.", "If not present, it can be installed with:", "  (sudo) npm install -g grunt-cli", " ", "To manage project dependencies,", "the `bower` command-line tool needs to be installed.", "If not present, it can be installed with:", "  (sudo) npm install -g bower", " "]._join_($recv($String())._lf()));
$recv((function(){

}))._valueWithTimeout_((600));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"finishMessage",{},$globals.Initer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "finishMessage\x0a\x09console log: (#(\x0a\x09\x09' '\x0a\x09\x09'The project should now be set up.'\x0a\x09\x09' '\x0a\x09\x09' '\x0a\x09\x09'To manage project from cli (run tests, recompile),'\x0a\x09\x09'the `grunt` command-line tool needs to be installed.'\x0a\x09\x09'If not present, it can be installed with:'\x0a\x09\x09'  (sudo) npm install -g grunt-cli'\x0a\x09\x09' '\x0a\x09\x09'To manage project dependencies,'\x0a\x09\x09'the `bower` command-line tool needs to be installed.'\x0a\x09\x09'If not present, it can be installed with:'\x0a\x09\x09'  (sudo) npm install -g bower'\x0a\x09\x09' '\x0a\x09) join: String lf).\x0a\x09[] valueWithTimeout: 600",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["log:", "join:", "lf", "valueWithTimeout:"]
}),
$globals.Initer);

$core.addMethod(
$core.method({
selector: "gruntInitThenDo:",
protocol: 'action',
fn: function (aBlock){
var self=this;
var child,sanitizedTemplatePath;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
sanitizedTemplatePath=$recv($recv($recv(self["@path"])._join_with_(self["@nmPath"],"grunt-init-amber"))._replace_with_("\x5c\x5c","\x5c\x5c"))._replace_with_(":","\x5c:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
child=$recv(self["@childProcess"])._fork_args_(self._npmScriptForModule_named_("grunt-init","grunt-init"),[sanitizedTemplatePath]);
$1=child;
$recv($1)._on_do_("error",aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_do_("close",(function(code){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(code).__eq((0));
if($core.assert($4)){
$3=nil;
} else {
$3=code;
};
return $recv(aBlock)._value_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({code:code},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gruntInitThenDo:",{aBlock:aBlock,child:child,sanitizedTemplatePath:sanitizedTemplatePath},$globals.Initer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "gruntInitThenDo: aBlock\x0a\x09| child sanitizedTemplatePath |\x0a\x09sanitizedTemplatePath := ((path join: nmPath with: 'grunt-init-amber')\x0a\x09\x09replace: '\x5c\x5c' with: '\x5c\x5c') replace: ':' with: '\x5c:'.\x0a\x09child := childProcess\x0a\x09\x09fork: (self npmScriptForModule: 'grunt-init' named: 'grunt-init')\x0a\x09\x09args: {sanitizedTemplatePath}.\x0a\x09child\x0a\x09\x09on: 'error' do: aBlock;\x0a\x09\x09on: 'close' do: [ :code |\x0a\x09\x09\x09aBlock value: (code = 0 ifTrue: [ nil ] ifFalse: [ code ]) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "join:with:", "fork:args:", "npmScriptForModule:named:", "on:do:", "value:", "ifTrue:ifFalse:", "="]
}),
$globals.Initer);

$core.addMethod(
$core.method({
selector: "gruntThenDo:",
protocol: 'action',
fn: function (aBlock){
var self=this;
var child;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
child=$recv(self["@childProcess"])._fork_args_(self._npmScriptForModule_named_("grunt-cli","grunt"),["default", "devel"]);
$1=child;
$recv($1)._on_do_("error",aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_do_("close",(function(code){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(code).__eq((0));
if($core.assert($4)){
$3=nil;
} else {
$3=code;
};
return $recv(aBlock)._value_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({code:code},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gruntThenDo:",{aBlock:aBlock,child:child},$globals.Initer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "gruntThenDo: aBlock\x0a\x09| child |\x0a\x09child := childProcess\x0a\x09\x09fork: (self npmScriptForModule: 'grunt-cli' named: 'grunt')\x0a\x09\x09args: #('default' 'devel').\x0a\x09child\x0a\x09\x09on: 'error' do: aBlock;\x0a\x09\x09on: 'close' do: [ :code |\x0a\x09\x09\x09aBlock value: (code = 0 ifTrue: [ nil ] ifFalse: [ code ]) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fork:args:", "npmScriptForModule:named:", "on:do:", "value:", "ifTrue:ifFalse:", "="]
}),
$globals.Initer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Initer.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@childProcess"]=$recv(require)._value_("child_process");
self["@nmPath"]=$recv(self["@path"])._join_with_(self._rootDirname(),"node_modules");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Initer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09childProcess := require value: 'child_process'.\x0a\x09nmPath := path join: self rootDirname with: 'node_modules'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "value:", "join:with:", "rootDirname"]
}),
$globals.Initer);

$core.addMethod(
$core.method({
selector: "npmInstallThenDo:",
protocol: 'action',
fn: function (aBlock){
var self=this;
var child;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
child=$recv(self["@childProcess"])._exec_thenDo_("npm install",aBlock);
$1=$recv(child)._stdout();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stdout"]=1;
//>>excludeEnd("ctx");
$recv($1)._pipe_options_($recv(process)._stdout(),$globals.HashedCollection._newFromPairs_(["end",false]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"npmInstallThenDo:",{aBlock:aBlock,child:child},$globals.Initer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "npmInstallThenDo: aBlock\x0a\x09| child |\x0a\x09child := childProcess\x0a\x09\x09exec: 'npm install'\x0a\x09\x09thenDo: aBlock.\x0a\x09child stdout pipe: process stdout options: #{ 'end' -> false }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exec:thenDo:", "pipe:options:", "stdout"]
}),
$globals.Initer);

$core.addMethod(
$core.method({
selector: "npmScriptForModule:named:",
protocol: 'npm',
fn: function (aString,anotherString){
var self=this;
var modulePath,packageJson,binSection,scriptPath;
function $JSObjectProxy(){return $globals.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5,$6;
$1=self["@path"];
$3=$recv($JSObjectProxy())._on_(require);
$4=$recv(aString).__comma("/package.json");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._resolve_($4);
modulePath=$recv($1)._dirname_($2);
packageJson=$recv($Smalltalk())._readJSObject_($recv(require)._value_($recv(aString).__comma("/package.json")));
binSection=$recv(packageJson)._at_("bin");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$5=$recv(binSection)._isString();
if($core.assert($5)){
scriptPath=binSection;
} else {
scriptPath=$recv(binSection)._at_(anotherString);
};
$6=$recv(self["@path"])._join_with_(modulePath,scriptPath);
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"npmScriptForModule:named:",{aString:aString,anotherString:anotherString,modulePath:modulePath,packageJson:packageJson,binSection:binSection,scriptPath:scriptPath},$globals.Initer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "npmScriptForModule: aString named: anotherString\x0a\x09| modulePath packageJson binSection scriptPath |\x0a\x09modulePath := path dirname: (\x0a\x09\x09(JSObjectProxy on: require)\x0a\x09\x09\x09resolve: aString, '/package.json').\x0a\x09packageJson := Smalltalk readJSObject: (\x0a\x09\x09require value: aString, '/package.json').\x0a\x09binSection := packageJson at: 'bin'.\x0a\x09scriptPath := binSection isString\x0a\x09\x09ifTrue: [ binSection ]\x0a\x09\x09ifFalse: [ binSection at: anotherString ].\x0a\x09^ path join: modulePath with: scriptPath",
referencedClasses: ["JSObjectProxy", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["dirname:", "resolve:", "on:", ",", "readJSObject:", "value:", "at:", "ifTrue:ifFalse:", "isString", "join:with:"]
}),
$globals.Initer);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$receiver;
self._gruntInitThenDo_((function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = error) == null || $receiver.isNil){
return self._bowerInstallThenDo_((function(error2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
if(($receiver = error2) == null || $receiver.isNil){
return self._npmInstallThenDo_((function(error3){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
if(($receiver = error3) == null || $receiver.isNil){
return self._gruntThenDo_((function(error4){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
if(($receiver = error4) == null || $receiver.isNil){
self._finishMessage();
return $recv(process)._exit();
} else {
$7=console;
$recv($7)._log_("grunt exec error:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["log:"]=7;
//>>excludeEnd("ctx");
$8=$recv($7)._log_(error4);
$8;
return $recv(process)._exit_((104));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({error4:error4},$ctx4,10)});
//>>excludeEnd("ctx");
}));
} else {
$5=console;
$recv($5)._log_("npm install exec error:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["log:"]=5;
//>>excludeEnd("ctx");
$6=$recv($5)._log_(error3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["log:"]=6;
//>>excludeEnd("ctx");
$6;
return $recv(process)._exit_((103));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["exit:"]=3;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({error3:error3},$ctx3,7)});
//>>excludeEnd("ctx");
}));
} else {
$3=console;
$recv($3)._log_("bower install exec error:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["log:"]=3;
//>>excludeEnd("ctx");
$4=$recv($3)._log_(error2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["log:"]=4;
//>>excludeEnd("ctx");
$4;
return $recv(process)._exit_((102));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["exit:"]=2;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({error2:error2},$ctx2,4)});
//>>excludeEnd("ctx");
}));
} else {
$1=console;
$recv($1)._log_("grunt-init exec error:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._log_(error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=2;
//>>excludeEnd("ctx");
$2;
return $recv(process)._exit_((101));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["exit:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Initer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self gruntInitThenDo: [ :error | error\x0a\x09ifNotNil: [\x0a\x09\x09console log: 'grunt-init exec error:'; log: error.\x0a\x09\x09process exit: 101 ]\x0a\x09ifNil: [\x0a\x0a\x09self bowerInstallThenDo: [ :error2 | error2\x0a\x09ifNotNil: [\x0a\x09\x09console log: 'bower install exec error:'; log: error2.\x0a\x09\x09process exit: 102 ]\x0a\x09ifNil: [\x0a\x0a\x09self npmInstallThenDo: [ :error3 | error3\x0a\x09ifNotNil: [\x0a\x09\x09console log: 'npm install exec error:'; log: error3.\x0a\x09\x09process exit: 103 ]\x0a\x09ifNil: [\x0a\x0a\x09self gruntThenDo: [ :error4 | error4\x0a\x09ifNotNil: [\x0a\x09\x09console log: 'grunt exec error:'; log: error4.\x0a\x09\x09process exit: 104 ]\x0a\x09ifNil: [\x0a\x0a\x09self finishMessage.\x0a\x09process exit ]]]]]]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["gruntInitThenDo:", "ifNotNil:ifNil:", "log:", "exit:", "bowerInstallThenDo:", "npmInstallThenDo:", "gruntThenDo:", "finishMessage", "exit"]
}),
$globals.Initer);



$core.addClass('Repl', $globals.Object, ['readline', 'interface', 'util', 'session', 'resultCount', 'commands'], 'AmberCli');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Repl.comment="I am a class representing a REPL (Read Evaluate Print Loop) and provide a command line interface to Amber Smalltalk.\x0aOn the prompt you can type Amber statements which will be evaluated after pressing <Enter>.\x0aThe evaluation is comparable with executing a 'DoIt' in a workspace.\x0a\x0aMy runtime requirement is a functional Node.js executable with working Readline support.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addVariableNamed:to:",
protocol: 'private',
fn: function (aString,anObject){
var self=this;
var newClass,newObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newClass=self._subclass_withVariable_($recv(anObject)._class(),aString);
self._encapsulateVariable_withValue_in_(aString,anObject,newClass);
newObject=$recv(newClass)._new();
self._setPreviousVariablesFor_from_(newObject,anObject);
$1=newObject;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addVariableNamed:to:",{aString:aString,anObject:anObject,newClass:newClass,newObject:newObject},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "addVariableNamed: aString to: anObject\x0a\x09| newClass newObject |\x0a\x09newClass := self subclass: anObject class withVariable: aString.\x0a\x09self encapsulateVariable: aString withValue: anObject in: newClass.\x0a\x09newObject := newClass new.\x0a\x09self setPreviousVariablesFor: newObject from: anObject.\x0a\x09^ newObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:withVariable:", "class", "encapsulateVariable:withValue:in:", "new", "setPreviousVariablesFor:from:"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "assignNewVariable:do:",
protocol: 'private',
fn: function (buffer,aBlock){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $ConsoleErrorHandler(){return $globals.ConsoleErrorHandler||(typeof ConsoleErrorHandler=="undefined"?nil:ConsoleErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$receiver;
$1=self._parseAssignment_do_(buffer,(function(name,expr){
var varName,value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = name) == null || $receiver.isNil){
varName=self._nextResultName();
} else {
varName=name;
};
varName;
self["@session"]=self._addVariableNamed_to_(varName,self["@session"]);
self["@session"];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(varName).__comma(" := ");
if(($receiver = expr) == null || $receiver.isNil){
$4=buffer;
} else {
$4=expr;
};
$2=$recv($3).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=1;
//>>excludeEnd("ctx");
value=self._eval_on_($2,self["@session"]);
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv($recv($ConsoleErrorHandler())._new())._logError_(e);
value=nil;
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2,5)});
//>>excludeEnd("ctx");
}));
return $recv(aBlock)._value_value_(varName,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({name:name,expr:expr,varName:varName,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assignNewVariable:do:",{buffer:buffer,aBlock:aBlock},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["buffer", "aBlock"],
source: "assignNewVariable: buffer do: aBlock\x0a\x09\x22Assigns a new variable and calls the given block with the variable's name and value\x0a\x09 if buffer contains an assignment expression. If it doesn't the block is called with nil for\x0a\x09 both arguments.\x22\x0a\x09^ self parseAssignment: buffer do: [ :name :expr || varName value |\x0a\x09\x09varName := name ifNil: [self nextResultName].\x0a\x09\x09session := self addVariableNamed: varName to: session.\x0a\x09\x09[ value := self eval: varName, ' := ', (expr ifNil: [buffer]) on: session ]\x0a\x09\x09\x09on: Error\x0a\x09\x09\x09do: [ :e | ConsoleErrorHandler new logError: e. value := nil].\x0a\x09\x09aBlock value: varName value: value]",
referencedClasses: ["Error", "ConsoleErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["parseAssignment:do:", "ifNil:", "nextResultName", "addVariableNamed:to:", "on:do:", "eval:on:", ",", "logError:", "new", "value:value:"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "clearScreen",
protocol: 'actions',
fn: function (){
var self=this;
var esc,cls;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
esc=$recv($String())._fromCharCode_((27));
$1=$recv($recv(esc).__comma("[2J")).__comma(esc);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
cls=$recv($1).__comma("[0;0f");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($recv(process)._stdout())._write_(cls);
$recv(self["@interface"])._prompt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearScreen",{esc:esc,cls:cls},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearScreen\x0a\x09| esc cls |\x0a\x09esc := String fromCharCode: 27.\x0a\x09cls := esc, '[2J', esc, '[0;0f'.\x0a\x09process stdout write: cls.\x0a\x09interface prompt",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["fromCharCode:", ",", "write:", "stdout", "prompt"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(process)._stdin())._destroy();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09process stdin destroy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["destroy", "stdin"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "commands",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@commands"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commands\x0a\x09^ commands",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "createInterface",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@interface"]=$recv(self["@readline"])._createInterface_stdout_($recv(process)._stdin(),$recv(process)._stdout());
$recv(self["@interface"])._on_do_("line",(function(buffer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._processLine_(buffer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({buffer:buffer},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv(self["@interface"])._on_do_("close",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._printWelcome();
self._setupHotkeys();
$1=self._setPrompt();
$recv(self["@interface"])._prompt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createInterface",{},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createInterface\x0a\x09interface := readline createInterface: process stdin stdout: process stdout.\x0a\x09interface on: 'line' do: [:buffer | self processLine: buffer].\x0a\x09interface on: 'close' do: [self close].\x0a\x09self printWelcome; setupHotkeys; setPrompt.\x0a\x09interface prompt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "processLine:", "close", "printWelcome", "setupHotkeys", "setPrompt", "prompt"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "encapsulateVariable:withValue:in:",
protocol: 'private',
fn: function (aString,anObject,aClass){
var self=this;
var compiler;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$6;
compiler=$recv($Compiler())._new();
$1=compiler;
$4=$recv(aString).__comma(": anObject ^ ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(" := anObject");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._install_forClass_protocol_($2,aClass,"session");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["install:forClass:protocol:"]=1;
//>>excludeEnd("ctx");
$5=compiler;
$6=$recv($recv(aString).__comma(" ^ ")).__comma(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$recv($5)._install_forClass_protocol_($6,aClass,"session");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encapsulateVariable:withValue:in:",{aString:aString,anObject:anObject,aClass:aClass,compiler:compiler},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "aClass"],
source: "encapsulateVariable: aString withValue: anObject in: aClass\x0a\x09\x22Add getter and setter for given variable to session.\x22\x0a\x09| compiler |\x0a\x09compiler := Compiler new.\x0a\x09compiler install: aString, ': anObject ^ ', aString, ' := anObject' forClass: aClass protocol: 'session'.\x0a\x09compiler install: aString, ' ^ ', aString forClass: aClass protocol: 'session'.",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["new", "install:forClass:protocol:", ","]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: 'actions',
fn: function (buffer){
var self=this;
function $DoIt(){return $globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._eval_on_(buffer,$recv($DoIt())._new());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{buffer:buffer},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["buffer"],
source: "eval: buffer\x0a\x09^ self eval: buffer on: DoIt new.",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
messageSends: ["eval:on:", "new"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "eval:on:",
protocol: 'actions',
fn: function (buffer,anObject){
var self=this;
var result;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(buffer)._isEmpty();
if(!$core.assert($1)){
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$recv($recv($Compiler())._new())._evaluateExpression_on_(buffer,anObject);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._tryCatch_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(e)._isSmalltalkError();
if($core.assert($2)){
return $recv(e)._resignal();
} else {
return $recv($recv(process)._stdout())._write_($recv(e)._jsStack());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
$3=result;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{buffer:buffer,anObject:anObject,result:result},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["buffer", "anObject"],
source: "eval: buffer on: anObject\x0a\x09| result |\x0a\x09buffer isEmpty ifFalse: [\x0a\x09\x09[result := Compiler new evaluateExpression: buffer on: anObject]\x0a\x09\x09\x09tryCatch: [:e |\x0a\x09\x09\x09\x09e isSmalltalkError\x0a\x09\x09\x09\x09    ifTrue: [ e resignal ]\x0a\x09\x09\x09 \x09   ifFalse: [ process stdout write: e jsStack ]]].\x0a\x09^ result",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isEmpty", "tryCatch:", "evaluateExpression:on:", "new", "ifTrue:ifFalse:", "isSmalltalkError", "resignal", "write:", "stdout", "jsStack"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "executeCommand:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv(self._commands())._keysAndValuesDo_((function(names,cmd){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(names)._includes_(aString);
if($core.assert($1)){
$recv(cmd)._value();
throw $early=[true];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({names:names,cmd:cmd},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeCommand:",{aString:aString},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "executeCommand: aString\x0a\x09\x22Tries to process the given string as a command. Returns true if it was a command, false if not.\x22\x0a\x09self commands keysAndValuesDo: [:names :cmd |\x0a\x09\x09(names includes: aString) ifTrue: [\x0a\x09\x09\x09cmd value.\x0a\x09\x09\x09^ true]].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "commands", "ifTrue:", "includes:", "value"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $DoIt(){return $globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Repl.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@session"]=$recv($DoIt())._new();
self["@readline"]=$recv(require)._value_("readline");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
self["@util"]=$recv(require)._value_("util");
self._setupCommands();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09session := DoIt new.\x0a\x09readline := require value: 'readline'.\x0a\x09util := require value: 'util'.\x0a\x09self setupCommands",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "value:", "setupCommands"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "instanceVariableNamesFor:",
protocol: 'private',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$receiver;
$2=$recv(aClass)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv(aClass)._instanceVariableNames();
} else {
$3=$recv(aClass)._instanceVariableNames();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instanceVariableNames"]=1;
//>>excludeEnd("ctx");
$1=$recv($3)._copyWithAll_(self._instanceVariableNamesFor_($recv(aClass)._superclass()));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNamesFor:",{aClass:aClass},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "instanceVariableNamesFor: aClass\x0a\x09\x22Yields all instance variable names for the given class, including inherited ones.\x22\x0a\x09^ aClass superclass\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09aClass instanceVariableNames copyWithAll: (self instanceVariableNamesFor: aClass superclass)]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09aClass instanceVariableNames]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:ifNil:", "superclass", "copyWithAll:", "instanceVariableNames", "instanceVariableNamesFor:"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "isIdentifier:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aString)._match_("^[a-z_]\x5cw*$"._asRegexp());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isIdentifier:",{aString:aString},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "isIdentifier: aString\x0a\x09^ aString match: '^[a-z_]\x5cw*$' asRegexp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["match:", "asRegexp"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "isVariableDefined:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instanceVariableNamesFor_($recv(self["@session"])._class()))._includes_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isVariableDefined:",{aString:aString},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "isVariableDefined: aString\x0a\x09^ (self instanceVariableNamesFor: session class) includes: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "instanceVariableNamesFor:", "class"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "nextResultName",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@resultCount"];
if(($receiver = $1) == null || $receiver.isNil){
self["@resultCount"]=(1);
} else {
self["@resultCount"]=$recv(self["@resultCount"]).__plus((1));
};
$2="res".__comma($recv(self["@resultCount"])._asString());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextResultName",{},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextResultName\x0a\x09resultCount := resultCount\x0a    \x09ifNotNil: [resultCount + 1]\x0a    \x09ifNil: [1].\x0a    ^ 'res', resultCount asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:ifNil:", "+", ",", "asString"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "onKeyPress:",
protocol: 'private',
fn: function (key){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(key)._ctrl())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(key)._name()).__eq("l");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
self._clearScreen();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{key:key},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["key"],
source: "onKeyPress: key\x0a\x09(key ctrl and: [key name = 'l'])\x0a\x09\x09ifTrue: [self clearScreen]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "and:", "ctrl", "=", "name", "clearScreen"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "parseAssignment:do:",
protocol: 'private',
fn: function (aString,aBlock){
var self=this;
var assignment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
assignment=$recv($recv(aString)._tokenize_(":="))._collect_((function(s){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(s)._trimBoth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($recv($recv(assignment)._size()).__eq((2)))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(assignment)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=1;
//>>excludeEnd("ctx");
return self._isIdentifier_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
$1=$recv(aBlock)._value_value_($recv(assignment)._first(),$recv(assignment)._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:value:"]=1;
//>>excludeEnd("ctx");
} else {
$1=$recv(aBlock)._value_value_(nil,nil);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseAssignment:do:",{aString:aString,aBlock:aBlock,assignment:assignment},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "parseAssignment: aString do: aBlock\x0a\x09\x22Assigns a new variable if the given string is an assignment expression. Calls the given block with name and value.\x0a\x09 If the string is not one no variable will be assigned and the block will be called with nil for both arguments.\x22\x0a\x09| assignment |\x0a\x09assignment := (aString tokenize: ':=') collect: [:s | s trimBoth].\x0a\x09^ (assignment size = 2 and: [self isIdentifier: assignment first])\x0a\x09\x09ifTrue: [ aBlock value: assignment first value: assignment last ]\x0a\x09\x09ifFalse: [ aBlock value: nil value: nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "tokenize:", "trimBoth", "ifTrue:ifFalse:", "and:", "=", "size", "isIdentifier:", "first", "value:value:", "last"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "presentResultNamed:withValue:",
protocol: 'private',
fn: function (varName,value){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$3=$recv($recv(varName).__comma(": ")).__comma($recv($recv(value)._class())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(" = ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(value)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
$4=$recv($Transcript())._cr();
$recv(self["@interface"])._prompt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"presentResultNamed:withValue:",{varName:varName,value:value},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["varName", "value"],
source: "presentResultNamed: varName withValue: value\x0a\x09Transcript show: varName, ': ', value class name, ' = ', value asString; cr.\x0a\x09interface prompt",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "name", "class", "asString", "cr", "prompt"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "printWelcome",
protocol: 'actions',
fn: function (){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($Transcript())._show_("Type :q to exit.");
$1=$recv($Transcript())._cr();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printWelcome",{},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printWelcome\x0a\x09Transcript show: 'Type :q to exit.'; cr.",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:", "cr"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "processLine:",
protocol: 'private',
fn: function (buffer){
var self=this;
var show;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
show=(function(varName,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._presentResultNamed_withValue_(varName,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({varName:varName,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
});
$1=self._executeCommand_(buffer);
if(!$core.assert($1)){
$2=self._isVariableDefined_(buffer);
if($core.assert($2)){
$recv(show)._value_value_(buffer,$recv(self["@session"])._perform_(buffer));
} else {
self._assignNewVariable_do_(buffer,show);
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processLine:",{buffer:buffer,show:show},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["buffer"],
source: "processLine: buffer\x0a\x09\x22Processes lines entered through the readline interface.\x22\x0a\x09| show |\x0a\x09show := [:varName :value | self presentResultNamed: varName withValue: value].\x0a\x09(self executeCommand: buffer) ifFalse: [\x0a\x09\x09(self isVariableDefined: buffer)\x0a\x09\x09\x09ifTrue: [show value: buffer value: (session perform: buffer)]\x0a\x09\x09\x09ifFalse: [self assignNewVariable: buffer do: show]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["presentResultNamed:withValue:", "ifFalse:", "executeCommand:", "ifTrue:ifFalse:", "isVariableDefined:", "value:value:", "perform:", "assignNewVariable:do:"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "prompt",
protocol: 'accessing',
fn: function (){
var self=this;
return "amber >> ";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prompt\x0a\x09^ 'amber >> '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "setPreviousVariablesFor:from:",
protocol: 'private',
fn: function (newObject,oldObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._instanceVariableNamesFor_($recv(oldObject)._class()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newObject)._perform_withArguments_($recv(each).__comma(":"),[$recv(oldObject)._perform_(each)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPreviousVariablesFor:from:",{newObject:newObject,oldObject:oldObject},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newObject", "oldObject"],
source: "setPreviousVariablesFor: newObject from: oldObject\x0a\x09(self instanceVariableNamesFor: oldObject class) do: [:each |\x0a\x09\x09newObject perform: each, ':' withArguments: {oldObject perform: each}].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "instanceVariableNamesFor:", "class", "perform:withArguments:", ",", "perform:"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "setPrompt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@interface"])._setPrompt_(self._prompt());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPrompt",{},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setPrompt\x0a\x09interface setPrompt: self prompt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setPrompt:", "prompt"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "setupCommands",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv([":q"]).__minus_gt((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(process)._exit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=[$2,$recv([""]).__minus_gt((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@interface"])._prompt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))];
self["@commands"]=$recv($Dictionary())._from_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupCommands",{},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupCommands\x0a\x09commands := Dictionary from: {\x0a\x09\x09{':q'} -> [process exit].\x0a\x09\x09{''} -> [interface prompt]}",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["from:", "->", "exit", "prompt"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "setupHotkeys",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $receiver;
$recv($recv(process)._stdin())._on_do_("keypress",(function(s,key){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = key) == null || $receiver.isNil){
return key;
} else {
return self._onKeyPress_(key);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({s:s,key:key},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupHotkeys",{},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupHotkeys\x0a\x09process stdin on: 'keypress' do: [:s :key | key ifNotNil: [self onKeyPress: key]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:do:", "stdin", "ifNotNil:", "onKeyPress:"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "subclass:withVariable:",
protocol: 'private',
fn: function (aClass,varName){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($ClassBuilder())._new())._addSubclassOf_named_instanceVariableNames_package_(aClass,$recv(self._subclassNameFor_(aClass))._asSymbol(),[varName],"Compiler-Core");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:withVariable:",{aClass:aClass,varName:varName},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "varName"],
source: "subclass: aClass withVariable: varName\x0a\x09\x22Create subclass with new variable.\x22\x0a\x09^ ClassBuilder new\x0a\x09\x09addSubclassOf: aClass\x0a\x09\x09named: (self subclassNameFor: aClass) asSymbol\x0a\x09\x09instanceVariableNames: {varName}\x0a\x09\x09package: 'Compiler-Core'",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "new", "asSymbol", "subclassNameFor:"]
}),
$globals.Repl);

$core.addMethod(
$core.method({
selector: "subclassNameFor:",
protocol: 'private',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$7,$6,$5,$4,$8,$1,$receiver;
$3=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._matchesOf_("\x5cd+$");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["matchesOf:"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv($recv(aClass)._name()).__comma("2");
} else {
var counter;
$7=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._matchesOf_("\x5cd+$");
$5=$recv($6)._first();
$4=$recv($5)._asNumber();
counter=$recv($4).__plus((1));
counter;
$8=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=3;
//>>excludeEnd("ctx");
$1=$recv($8)._replaceRegexp_with_("\x5cd+$"._asRegexp(),$recv(counter)._asString());
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclassNameFor:",{aClass:aClass},$globals.Repl)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "subclassNameFor: aClass\x0a\x09^ (aClass name matchesOf: '\x5cd+$')\x0a\x09\x09ifNotNil: [ | counter |\x0a\x09\x09\x09counter := (aClass name matchesOf: '\x5cd+$') first asNumber + 1.\x0a\x09\x09\x09aClass name replaceRegexp: '\x5cd+$' asRegexp with: counter asString]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09aClass name, '2'].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:ifNil:", "matchesOf:", "name", "+", "asNumber", "first", "replaceRegexp:with:", "asRegexp", "asString", ","]
}),
$globals.Repl);


$core.addMethod(
$core.method({
selector: "main",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._createInterface();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.Repl.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x09self new createInterface",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createInterface", "new"]
}),
$globals.Repl.klass);

});
