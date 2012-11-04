smalltalk.addPackage('Helios-Workspace', {});
smalltalk.addClass('HLWorkspaceModel', smalltalk.Object, ['announcer', 'environment'], 'Helios-Workspace');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@announcer"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeAnnouncer",[]);
} else {
$1=self["@announcer"];
};
return $1;
}
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@environment"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeEnvironment",[]);
} else {
$1=self["@environment"];
};
return $1;
}
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
self["@environment"]=anEnvironment;
return self}
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_initializeAnnouncer",
smalltalk.method({
selector: "initializeAnnouncer",
fn: function (){
var self=this;
var $1;
self["@announcer"]=smalltalk.send((smalltalk.Announcer || Announcer),"_new",[]);
$1=self["@announcer"];
return $1;
}
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_initializeEnvironment",
smalltalk.method({
selector: "initializeEnvironment",
fn: function (){
var self=this;
var $1;
self["@environment"]=smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]);
$1=self["@environment"];
return $1;
}
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
fn: function (anEvent){
var self=this;
if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	};
;
return self}
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
fn: function (aWidget){
var self=this;
smalltalk.send(aWidget,"_subscribeTo_",[smalltalk.send(self,"_announcer",[])]);
return self}
}),
smalltalk.HLWorkspaceModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_environment_",[anEnvironment]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.HLWorkspaceModel.klass);


