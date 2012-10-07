smalltalk.addPackage('Compiler-IR', {});
smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler-IR');
smalltalk.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.\x0aI rely on a builder object, instance of IRBuilder."
smalltalk.addMethod(
"_alias_",
smalltalk.method({
selector: "alias:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2,$3,$4,$5,$6;
var variable;
$1=smalltalk.send(aNode,"_isValueNode",[]);
if(smalltalk.assert($1)){
$2=smalltalk.send(self,"_visit_",[aNode]);
return $2;
};
$3=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($3,"_variable_",[smalltalk.send(smalltalk.send((smalltalk.AliasVar || AliasVar),"_new",[]),"_name_",[smalltalk.send("$","__comma",[smalltalk.send(self,"_nextAlias",[])])])]);
$4=smalltalk.send($3,"_yourself",[]);
variable=$4;
$5=smalltalk.send((smalltalk.IRAssignment || IRAssignment),"_new",[]);
smalltalk.send($5,"_add_",[variable]);
smalltalk.send($5,"_add_",[smalltalk.send(self,"_visit_",[aNode])]);
$6=smalltalk.send($5,"_yourself",[]);
smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$6]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_method",[]),"_internalVariables",[]),"_add_",[variable]);
return variable;
},
args: ["aNode"],
source: "alias: aNode\x0a\x09| variable |\x0a\x0a\x09aNode isValueNode ifTrue: [ ^ self visit: aNode ].\x0a\x0a\x09variable := IRVariable new \x0a\x09\x09variable: (AliasVar new name: '$', self nextAlias); \x0a\x09\x09yourself.\x0a\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: variable;\x0a\x09\x09add: (self visit: aNode);\x0a\x09\x09yourself).\x0a\x0a\x09self method internalVariables add: variable.\x0a\x0a\x09^ variable",
messageSends: ["ifTrue:", "visit:", "isValueNode", "variable:", "name:", ",", "nextAlias", "new", "yourself", "add:", "sequence", "internalVariables", "method"],
referencedClasses: ["AliasVar", "IRVariable", "IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return self["@method"];
},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (anIRMethod){
var self=this;
self["@method"]=anIRMethod;
return self},
args: ["anIRMethod"],
source: "method: anIRMethod\x0a\x09method := anIRMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@nextAlias"]) == nil || $receiver == undefined){
self["@nextAlias"]=(0);
self["@nextAlias"];
} else {
self["@nextAlias"];
};
self["@nextAlias"]=smalltalk.send(self["@nextAlias"],"__plus",[(1)]);
$1=smalltalk.send(self["@nextAlias"],"_asString",[]);
return $1;
},
args: [],
source: "nextAlias\x0a\x09nextAlias ifNil: [ nextAlias := 0 ].\x0a\x09nextAlias := nextAlias + 1.\x0a\x09^ nextAlias asString",
messageSends: ["ifNil:", "+", "asString"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: 'accessing',
fn: function (){
var self=this;
return self["@sequence"];
},
args: [],
source: "sequence\x0a\x09^ sequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence_",
smalltalk.method({
selector: "sequence:",
category: 'accessing',
fn: function (anIRSequence){
var self=this;
self["@sequence"]=anIRSequence;
return self},
args: ["anIRSequence"],
source: "sequence: anIRSequence\x0a\x09sequence := anIRSequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return self["@source"];
},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@theClass"];
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2;
var left;
var right;
var assignment;
right=smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_right",[])]);
left=smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_left",[])]);
$1=smalltalk.send((smalltalk.IRAssignment || IRAssignment),"_new",[]);
smalltalk.send($1,"_add_",[left]);
smalltalk.send($1,"_add_",[right]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$2]);
return left;
},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| left right assignment |\x0a\x09right := self visit: aNode right.\x0a\x09left := self visit: aNode left.\x0a\x09self sequence add: (IRAssignment new \x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself).\x0a\x09^ left",
messageSends: ["visit:", "right", "left", "add:", "new", "yourself", "sequence"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2,$3,$4;
var closure;
$1=smalltalk.send((smalltalk.IRClosure || IRClosure),"_new",[]);
smalltalk.send($1,"_arguments_",[smalltalk.send(aNode,"_parameters",[])]);
smalltalk.send($1,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
$2=smalltalk.send($1,"_yourself",[]);
closure=$2;
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_temps",[]),"_do_",[(function(each){
$3=smalltalk.send((smalltalk.IRTempDeclaration || IRTempDeclaration),"_new",[]);
smalltalk.send($3,"_name_",[smalltalk.send(each,"_name",[])]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(closure,"_add_",[$4]);
})]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(closure,"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return closure;
},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new \x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09yourself) ].\x0a\x09aNode nodes do: [ :each | closure add: (self visit: each) ].\x0a\x09^ closure",
messageSends: ["arguments:", "parameters", "new", "scope:", "scope", "yourself", "do:", "add:", "name:", "name", "temps", "visit:", "nodes"],
referencedClasses: ["IRClosure", "IRTempDeclaration"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$3,$4,$1;
$1=smalltalk.send(self,"_withSequence_do_",[smalltalk.send((smalltalk.IRBlockSequence || IRBlockSequence),"_new",[]),(function(){
return smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_ifNotEmpty_",[(function(){
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
$2=smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[]),"_isReturnNode",[]);
if(smalltalk.assert($2)){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])])]);
} else {
$3=smalltalk.send((smalltalk.IRBlockReturn || IRBlockReturn),"_new",[]);
smalltalk.send($3,"_add_",[smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])])]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$4]);
};
})]);
})]);
return $1;
},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRBlockSequence new\x0a\x09\x09do: [ \x0a\x09\x09\x09aNode nodes ifNotEmpty: [\x0a\x09\x09\x09\x09aNode nodes allButLast do: [ :each | \x0a\x09\x09\x09\x09\x09self sequence add: (self visit: each) ].\x0a\x09\x09\x09\x09aNode nodes last isReturnNode \x0a\x09\x09\x09\x09\x09ifFalse: [ self sequence add: (IRBlockReturn new add: (self visit: aNode nodes last); yourself) ]\x0a\x09\x09\x09\x09\x09ifTrue: [ self sequence add: (self visit: aNode nodes last) ]]]",
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "do:", "add:", "visit:", "sequence", "allButLast", "nodes", "ifFalse:ifTrue:", "last", "yourself", "isReturnNode"],
referencedClasses: ["IRBlockSequence", "IRBlockReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2;
var alias;
$1=smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_isValueNode",[]);
if(! smalltalk.assert($1)){
alias=smalltalk.send(self,"_alias_",[smalltalk.send(aNode,"_receiver",[])]);
alias;
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(each,"_receiver_",[smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode),"_new",[]),"_binding_",[smalltalk.send(alias,"_variable",[])])]);
})]);
};
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
$2=smalltalk.send(self,"_alias_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])]);
return $2;
},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| alias |\x0a\x0a\x09aNode receiver isValueNode ifFalse: [ \x0a\x09\x09alias := self alias: aNode receiver.\x0a\x09\x09aNode nodes do: [ :each |\x0a\x09\x09\x09each receiver: (VariableNode new binding: alias variable) ]].\x0a\x0a\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09self sequence add: (self visit: each) ].\x0a\x0a\x09^ self alias: aNode nodes last",
messageSends: ["ifFalse:", "alias:", "receiver", "do:", "receiver:", "binding:", "variable", "new", "nodes", "isValueNode", "add:", "visit:", "sequence", "allButLast", "last"],
referencedClasses: ["VariableNode"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var array;
array=smalltalk.send((smalltalk.IRDynamicArray || IRDynamicArray),"_new",[]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(array,"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return array;
},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09array := IRDynamicArray new.\x0a\x09aNode nodes do: [ :each | array add: (self visit: each) ].\x0a\x09^ array",
messageSends: ["new", "do:", "add:", "visit:", "nodes"],
referencedClasses: ["IRDynamicArray"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var dictionary;
dictionary=smalltalk.send((smalltalk.IRDynamicDictionary || IRDynamicDictionary),"_new",[]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(dictionary,"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return dictionary;
},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| dictionary |\x0a\x09dictionary := IRDynamicDictionary new.\x0a\x09aNode nodes do: [ :each | dictionary add: (self visit: each) ].\x0a\x09^ dictionary",
messageSends: ["new", "do:", "add:", "visit:", "nodes"],
referencedClasses: ["IRDynamicDictionary"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRVerbatim || IRVerbatim),"_new",[]);
smalltalk.send($2,"_source_",[smalltalk.send(aNode,"_source",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ IRVerbatim new\x0a\x09\x09source: aNode source;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "new", "yourself"],
referencedClasses: ["IRVerbatim"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=smalltalk.send((smalltalk.IRMethod || IRMethod),"_new",[]);
smalltalk.send($1,"_source_",[smalltalk.send(self,"_source",[])]);
smalltalk.send($1,"_arguments_",[smalltalk.send(aNode,"_arguments",[])]);
smalltalk.send($1,"_selector_",[smalltalk.send(aNode,"_selector",[])]);
smalltalk.send($1,"_messageSends_",[smalltalk.send(aNode,"_messageSends",[])]);
smalltalk.send($1,"_classReferences_",[smalltalk.send(aNode,"_classReferences",[])]);
smalltalk.send($1,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(self,"_method_",[$2]);
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_temps",[]),"_do_",[(function(each){
$3=smalltalk.send((smalltalk.IRTempDeclaration || IRTempDeclaration),"_new",[]);
smalltalk.send($3,"_name_",[smalltalk.send(each,"_name",[])]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[$4]);
})]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
$5=smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_hasLocalReturn",[]);
if(! smalltalk.assert($5)){
$6=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($6,"_variable_",[smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_pseudoVars",[]),"_at_",["self"])]);
$7=smalltalk.send($6,"_yourself",[]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[])]),"_add_",[$7]);
};
$8=smalltalk.send(self,"_method",[]);
return $8;
},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x0a\x09self method: (IRMethod new\x0a\x09\x09source: self source;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09messageSends: aNode messageSends;\x0a\x09\x09classReferences: aNode classReferences;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself).\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self method add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09aNode nodes do: [ :each | self method add: (self visit: each) ].\x0a\x0a\x09aNode scope hasLocalReturn ifFalse: [\x0a\x09\x09(self method add: IRReturn new) add: (IRVariable new\x0a\x09\x09\x09variable: (aNode scope pseudoVars at: 'self');\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ self method",
messageSends: ["method:", "source:", "source", "new", "arguments:", "arguments", "selector:", "selector", "messageSends:", "messageSends", "classReferences:", "classReferences", "scope:", "scope", "yourself", "do:", "add:", "name:", "name", "method", "temps", "visit:", "nodes", "ifFalse:", "variable:", "at:", "pseudoVars", "hasLocalReturn"],
referencedClasses: ["IRMethod", "IRTempDeclaration", "IRVariable", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
var return_;
$1=smalltalk.send(aNode,"_nonLocalReturn",[]);
if(smalltalk.assert($1)){
return_=smalltalk.send((smalltalk.IRNonLocalReturn || IRNonLocalReturn),"_new",[]);
} else {
return_=smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
};
smalltalk.send(return_,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(return_,"_add_",[smalltalk.send(self,"_alias_",[each])]);
})]);
return return_;
},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09| return |\x0a\x09return := aNode nonLocalReturn \x0a\x09\x09ifTrue: [ IRNonLocalReturn new ]\x0a\x09\x09ifFalse: [ IRReturn new ].\x0a\x09return scope: aNode scope.\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09return add: (self alias: each) ].\x0a\x09^ return",
messageSends: ["ifTrue:ifFalse:", "new", "nonLocalReturn", "scope:", "scope", "do:", "add:", "alias:", "nodes"],
referencedClasses: ["IRNonLocalReturn", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2,$3,$4;
var send;
var receiver;
var arguments;
send=smalltalk.send((smalltalk.IRSend || IRSend),"_new",[]);
smalltalk.send(send,"_selector_",[smalltalk.send(aNode,"_selector",[])]);
$1=smalltalk.send(send,"_index_",[smalltalk.send(aNode,"_index",[])]);
$2=smalltalk.send(aNode,"_superSend",[]);
if(smalltalk.assert($2)){
smalltalk.send(send,"_classSend_",[smalltalk.send(smalltalk.send(self,"_theClass",[]),"_superclass",[])]);
};
$3=smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_shouldBeInlined",[]),"_or_",[(function(){
return smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_shouldBeAliased",[]);
})]);
if(smalltalk.assert($3)){
receiver=smalltalk.send(self,"_alias_",[smalltalk.send(aNode,"_receiver",[])]);
} else {
receiver=smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_receiver",[])]);
};
arguments=smalltalk.send(smalltalk.send(aNode,"_arguments",[]),"_collect_",[(function(each){
$4=smalltalk.send(each,"_shouldBeInlined",[]);
if(smalltalk.assert($4)){
return smalltalk.send(self,"_alias_",[each]);
} else {
return smalltalk.send(self,"_visit_",[each]);
};
})]);
smalltalk.send(send,"_add_",[receiver]);
smalltalk.send(arguments,"_do_",[(function(each){
return smalltalk.send(send,"_add_",[each]);
})]);
return send;
},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send receiver arguments |\x0a\x09send := IRSend new.\x0a\x09send \x0a\x09\x09selector: aNode selector;\x0a\x09\x09index: aNode index.\x0a\x09aNode superSend ifTrue: [ send classSend: self theClass superclass ].\x0a\x0a\x09receiver := (aNode receiver shouldBeInlined or: [ aNode receiver shouldBeAliased ])\x0a\x09\x09ifTrue: [ self alias: aNode receiver ]\x0a\x09\x09ifFalse: [ self visit: aNode receiver ].\x0a\x0a\x09arguments := aNode arguments collect: [ :each | \x0a\x09\x09each shouldBeInlined\x0a\x09\x09\x09ifTrue: [ self alias: each ]\x0a\x09\x09\x09ifFalse: [ self visit: each ]].\x0a\x0a\x09send add: receiver.\x0a\x09arguments do: [ :each | send add: each ].\x0a\x0a\x09^ send",
messageSends: ["new", "selector:", "selector", "index:", "index", "ifTrue:", "classSend:", "superclass", "theClass", "superSend", "ifTrue:ifFalse:", "alias:", "receiver", "visit:", "or:", "shouldBeAliased", "shouldBeInlined", "collect:", "arguments", "add:", "do:"],
referencedClasses: ["IRSend"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$1;
$1=smalltalk.send(self,"_withSequence_do_",[smalltalk.send((smalltalk.IRSequence || IRSequence),"_new",[]),(function(){
return smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
var instruction;
instruction=smalltalk.send(self,"_visit_",[each]);
instruction;
$2=smalltalk.send(instruction,"_isVariable",[]);
if(! smalltalk.assert($2)){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[instruction]);
};
})]);
})]);
return $1;
},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self \x0a\x09\x09withSequence: IRSequence new \x09\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes do: [ :each | | instruction |\x0a\x09\x09\x09\x09instruction := self visit: each.\x0a\x09\x09\x09\x09instruction isVariable ifFalse: [\x0a\x09\x09\x09\x09\x09self sequence add: instruction ]]]",
messageSends: ["withSequence:do:", "new", "do:", "visit:", "ifFalse:", "add:", "sequence", "isVariable", "nodes"],
referencedClasses: ["IRSequence"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRValue || IRValue),"_new",[]);
smalltalk.send($2,"_value_",[smalltalk.send(aNode,"_value",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ IRValue new \x0a\x09\x09value: aNode value; \x0a\x09\x09yourself",
messageSends: ["value:", "value", "new", "yourself"],
referencedClasses: ["IRValue"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($2,"_variable_",[smalltalk.send(aNode,"_binding",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ IRVariable new \x0a\x09\x09variable: aNode binding; \x0a\x09\x09yourself",
messageSends: ["variable:", "binding", "new", "yourself"],
referencedClasses: ["IRVariable"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_withSequence_do_",
smalltalk.method({
selector: "withSequence:do:",
category: 'accessing',
fn: function (aSequence,aBlock){
var self=this;
var outerSequence;
outerSequence=smalltalk.send(self,"_sequence",[]);
smalltalk.send(self,"_sequence_",[aSequence]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self,"_sequence_",[outerSequence]);
return aSequence;
},
args: ["aSequence", "aBlock"],
source: "withSequence: aSequence do: aBlock\x0a\x09| outerSequence |\x0a\x09outerSequence := self sequence.\x0a\x09self sequence: aSequence.\x0a\x09aBlock value.\x0a\x09self sequence: outerSequence.\x0a\x09^ aSequence",
messageSends: ["sequence", "sequence:", "value"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);



smalltalk.addClass('IRInstruction', smalltalk.Object, ['parent', 'instructions'], 'Compiler-IR');
smalltalk.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream. "
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInstruction_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInstruction: self",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'building',
fn: function (anObject){
var self=this;
var $1;
smalltalk.send(anObject,"_parent_",[self]);
$1=smalltalk.send(smalltalk.send(self,"_instructions",[]),"_add_",[anObject]);
return $1;
},
args: ["anObject"],
source: "add: anObject\x0a\x09anObject parent: self.\x0a\x09^ self instructions add: anObject",
messageSends: ["parent:", "add:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canBeAssigned\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_instructions",
smalltalk.method({
selector: "instructions",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@instructions"]) == nil || $receiver == undefined){
self["@instructions"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
$1=self["@instructions"];
} else {
$1=self["@instructions"];
};
return $1;
},
args: [],
source: "instructions\x0a\x09^ instructions ifNil: [ instructions := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isClosure\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isInlined\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSend\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSequence\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isTempDeclaration\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isVariable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return self["@parent"];
},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (anIRInstruction){
var self=this;
self["@parent"]=anIRInstruction;
return self},
args: ["anIRInstruction"],
source: "parent: anIRInstruction\x0a\x09parent := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
category: 'building',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_parent",[]),"_remove_",[self]);
return self},
args: [],
source: "remove\x0a\x09self parent remove: self",
messageSends: ["remove:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'building',
fn: function (anIRInstruction){
var self=this;
smalltalk.send(smalltalk.send(self,"_instructions",[]),"_remove_",[anIRInstruction]);
return self},
args: ["anIRInstruction"],
source: "remove: anIRInstruction\x0a\x09self instructions remove: anIRInstruction",
messageSends: ["remove:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
category: 'building',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
smalltalk.send(anotherIRInstruction,"_parent_",[self]);
smalltalk.send(smalltalk.send(self,"_instructions",[]),"_at_put_",[smalltalk.send(smalltalk.send(self,"_instructions",[]),"_indexOf_",[anIRInstruction]),anotherIRInstruction]);
return self},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "replace: anIRInstruction with: anotherIRInstruction\x0a\x09anotherIRInstruction parent: self.\x0a\x09self instructions \x0a\x09\x09at: (self instructions indexOf: anIRInstruction)\x0a\x09\x09put: anotherIRInstruction",
messageSends: ["parent:", "at:put:", "indexOf:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replaceWith_",
smalltalk.method({
selector: "replaceWith:",
category: 'building',
fn: function (anIRInstruction){
var self=this;
smalltalk.send(smalltalk.send(self,"_parent",[]),"_replace_with_",[self,anIRInstruction]);
return self},
args: ["anIRInstruction"],
source: "replaceWith: anIRInstruction\x0a\x09self parent replace: self with: anIRInstruction",
messageSends: ["replace:with:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBuilder){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_builder_",[aBuilder]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^ self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
messageSends: ["builder:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.IRInstruction.klass);


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRAssignment_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRAssignment: self",
messageSends: ["visitIRAssignment:"],
referencedClasses: []
}),
smalltalk.IRAssignment);



smalltalk.addClass('IRDynamicArray', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRDynamicArray_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicArray: self",
messageSends: ["visitIRDynamicArray:"],
referencedClasses: []
}),
smalltalk.IRDynamicArray);



smalltalk.addClass('IRDynamicDictionary', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRDynamicDictionary_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicDictionary: self",
messageSends: ["visitIRDynamicDictionary:"],
referencedClasses: []
}),
smalltalk.IRDynamicDictionary);



smalltalk.addClass('IRScopedInstruction', smalltalk.IRInstruction, ['scope'], 'Compiler-IR');
smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
self["@scope"]=aScope;
return self},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);



smalltalk.addClass('IRClosure', smalltalk.IRScopedInstruction, ['arguments'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRClosure_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRClosure: self",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@arguments"];
};
return $1;
},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isClosure\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
smalltalk.send(self,"_scope_",[aScope],smalltalk.IRScopedInstruction);
smalltalk.send(aScope,"_instruction_",[self]);
return self},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_instructions",[]),"_last",[]);
return $1;
},
args: [],
source: "sequence\x0a\x09^ self instructions last",
messageSends: ["last", "instructions"],
referencedClasses: []
}),
smalltalk.IRClosure);



smalltalk.addClass('IRMethod', smalltalk.IRScopedInstruction, ['source', 'selector', 'classReferences', 'messageSends', 'arguments', 'internalVariables'], 'Compiler-IR');
smalltalk.IRMethod.comment="I am a method instruction"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRMethod_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRMethod: self",
messageSends: ["visitIRMethod:"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return self["@arguments"];
},
args: [],
source: "arguments\x0a\x09^ arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: 'accessing',
fn: function (){
var self=this;
return self["@classReferences"];
},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@classReferences"]=aCollection;
return self},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_internalVariables",
smalltalk.method({
selector: "internalVariables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@internalVariables"]) == nil || $receiver == undefined){
self["@internalVariables"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
$1=self["@internalVariables"];
} else {
$1=self["@internalVariables"];
};
return $1;
},
args: [],
source: "internalVariables\x0a\x09^ internalVariables ifNil: [ internalVariables := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function (){
var self=this;
return self["@messageSends"];
},
args: [],
source: "messageSends\x0a\x09^ messageSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@messageSends"]=aCollection;
return self},
args: ["aCollection"],
source: "messageSends: aCollection\x0a\x09messageSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
smalltalk.send(self,"_scope_",[aScope],smalltalk.IRScopedInstruction);
smalltalk.send(aScope,"_instruction_",[self]);
return self},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return self["@source"];
},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);



smalltalk.addClass('IRReturn', smalltalk.IRScopedInstruction, [], 'Compiler-IR');
smalltalk.IRReturn.comment="I am a local return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRReturn_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRReturn: self",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "canBeAssigned\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBlockReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isLocalReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isNonLocalReturn",
smalltalk.method({
selector: "isNonLocalReturn",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_isLocalReturn",[]),"_not",[]);
return $1;
},
args: [],
source: "isNonLocalReturn\x0a\x09^ self isLocalReturn not",
messageSends: ["not", "isLocalReturn"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);



smalltalk.addClass('IRBlockReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.IRBlockReturn.comment="Smalltalk blocks return their last statement. I am a implicit block return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRBlockReturn_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockReturn: self",
messageSends: ["visitIRBlockReturn:"],
referencedClasses: []
}),
smalltalk.IRBlockReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBlockReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRBlockReturn);



smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JS statement.\x0a\x0aSee IRNonLocalReturnHandling class"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRNonLocalReturn_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturn: self",
messageSends: ["visitIRNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler-IR');
smalltalk.IRSend.comment="I am a message send instruction. "
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRSend_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSend: self",
messageSends: ["visitIRSend:"],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend",
smalltalk.method({
selector: "classSend",
category: 'accessing',
fn: function (){
var self=this;
return self["@classSend"];
},
args: [],
source: "classSend\x0a\x09^ classSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend_",
smalltalk.method({
selector: "classSend:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@classSend"]=aClass;
return self},
args: ["aClass"],
source: "classSend: aClass\x0a\x09classSend := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function (){
var self=this;
return self["@index"];
},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSend\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);



smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRSequence_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSequence: self",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSequence\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSequence);



smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRBlockSequence_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockSequence: self",
messageSends: ["visitIRBlockSequence:"],
referencedClasses: []
}),
smalltalk.IRBlockSequence);



smalltalk.addClass('IRTempDeclaration', smalltalk.IRInstruction, ['name'], 'Compiler-IR');
smalltalk.IRTempDeclaration.comment="I am a temporary variable declaration instruction"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRTempDeclaration_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRTempDeclaration: self",
messageSends: ["visitIRTempDeclaration:"],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
category: 'visiting',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isTempDeclaration\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return self["@name"];
},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);



smalltalk.addClass('IRValue', smalltalk.IRInstruction, ['value'], 'Compiler-IR');
smalltalk.IRValue.comment="I am the simplest possible instruction. I represent a value."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRValue_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRValue: self",
messageSends: ["visitIRValue:"],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return self["@value"];
},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@value"]=aString;
return self},
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);



smalltalk.addClass('IRVariable', smalltalk.IRInstruction, ['variable'], 'Compiler-IR');
smalltalk.IRVariable.comment="I am a variable instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRVariable_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVariable: self",
messageSends: ["visitIRVariable:"],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isVariable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
category: 'accessing',
fn: function (){
var self=this;
return self["@variable"];
},
args: [],
source: "variable\x0a\x09^ variable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
category: 'accessing',
fn: function (aScopeVariable){
var self=this;
self["@variable"]=aScopeVariable;
return self},
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09variable := aScopeVariable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);



smalltalk.addClass('IRVerbatim', smalltalk.IRInstruction, ['source'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRVerbatim_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVerbatim: self",
messageSends: ["visitIRVerbatim:"],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return self["@source"];
},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);



smalltalk.addClass('IRVisitor', smalltalk.Object, [], 'Compiler-IR');
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (anIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(anIRInstruction,"_accept_",[self]);
return $1;
},
args: ["anIRInstruction"],
source: "visit: anIRInstruction\x0a\x09^ anIRInstruction accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRAssignment]);
return $1;
},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ self visitIRInstruction: anIRAssignment",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockReturn_",
smalltalk.method({
selector: "visitIRBlockReturn:",
category: 'visiting',
fn: function (anIRBlockReturn){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRReturn_",[anIRBlockReturn]);
return $1;
},
args: ["anIRBlockReturn"],
source: "visitIRBlockReturn: anIRBlockReturn\x0a\x09^ self visitIRReturn: anIRBlockReturn",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
category: 'visiting',
fn: function (anIRBlockSequence){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRSequence_",[anIRBlockSequence]);
return $1;
},
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09^ self visitIRSequence: anIRBlockSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
category: 'visiting',
fn: function (anIRClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRClosure]);
return $1;
},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09^ self visitIRInstruction: anIRClosure",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
category: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRDynamicArray]);
return $1;
},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09^ self visitIRInstruction: anIRDynamicArray",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
category: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRDynamicDictionary]);
return $1;
},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09^ self visitIRInstruction: anIRDynamicDictionary",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRClosure_",[anIRInlinedClosure]);
return $1;
},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09^ self visitIRClosure: anIRInlinedClosure",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRSequence_",[anIRInlinedSequence]);
return $1;
},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09^ self visitIRSequence: anIRInlinedSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInstruction_",
smalltalk.method({
selector: "visitIRInstruction:",
category: 'visiting',
fn: function (anIRInstruction){
var self=this;
smalltalk.send(smalltalk.send(anIRInstruction,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return anIRInstruction;
},
args: ["anIRInstruction"],
source: "visitIRInstruction: anIRInstruction\x0a\x09anIRInstruction instructions do: [ :each | self visit: each ].\x0a\x09^ anIRInstruction",
messageSends: ["do:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
category: 'visiting',
fn: function (anIRMethod){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRMethod]);
return $1;
},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09^ self visitIRInstruction: anIRMethod",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRNonLocalReturn]);
return $1;
},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self visitIRInstruction: anIRNonLocalReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
category: 'visiting',
fn: function (anIRNonLocalReturnHandling){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRNonLocalReturnHandling]);
return $1;
},
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09^ self visitIRInstruction: anIRNonLocalReturnHandling",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRReturn]);
return $1;
},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ self visitIRInstruction: anIRReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRSend]);
return $1;
},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ self visitIRInstruction: anIRSend",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
category: 'visiting',
fn: function (anIRSequence){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRSequence]);
return $1;
},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09^ self visitIRInstruction: anIRSequence",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRTempDeclaration]);
return $1;
},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09^ self visitIRInstruction: anIRTempDeclaration",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
category: 'visiting',
fn: function (anIRValue){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRValue]);
return $1;
},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09^ self visitIRInstruction: anIRValue",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
category: 'visiting',
fn: function (anIRVariable){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRVariable]);
return $1;
},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09^ self visitIRInstruction: anIRVariable",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
category: 'visiting',
fn: function (anIRVerbatim){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRVerbatim]);
return $1;
},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09^ self visitIRInstruction: anIRVerbatim",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);



smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_stream",[]),"_contents",[]);
return $1;
},
args: [],
source: "contents\x0a\x09^ self stream contents",
messageSends: ["contents", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.IRVisitor);
self["@stream"]=smalltalk.send((smalltalk.JSStream || JSStream),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := JSStream new.",
messageSends: ["initialize", "new"],
referencedClasses: ["JSStream"]
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
category: 'accessing',
fn: function (){
var self=this;
return self["@stream"];
},
args: [],
source: "stream\x0a\x09^ stream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
category: 'accessing',
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_first",[])]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAssignment",[]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[])]);
return self},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self visit: anIRAssignment instructions first.\x0a\x09self stream nextPutAssignment.\x0a\x09self visit: anIRAssignment instructions last.",
messageSends: ["visit:", "first", "instructions", "nextPutAssignment", "stream", "last"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
category: 'visiting',
fn: function (anIRClosure){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutClosureWith_arguments_",[(function(){
return smalltalk.send(self,"_visitIRClosure_",[anIRClosure],smalltalk.IRVisitor);
}),smalltalk.send(anIRClosure,"_arguments",[])]);
return self},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self stream \x0a\x09\x09nextPutClosureWith: [ super visitIRClosure: anIRClosure ] \x0a\x09\x09arguments: anIRClosure arguments",
messageSends: ["nextPutClosureWith:arguments:", "visitIRClosure:", "arguments", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
category: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["["]);
smalltalk.send(smalltalk.send(anIRDynamicArray,"_instructions",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09self stream nextPutAll: '['.\x0a\x09anIRDynamicArray instructions\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
category: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.HashedCollection._fromPairs_(["]);
smalltalk.send(smalltalk.send(anIRDynamicDictionary,"_instructions",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["])"]);
return self},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09self stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.\x0a\x09\x09anIRDynamicDictionary instructions \x0a\x09\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09\x09separatedBy: [self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
category: 'visiting',
fn: function (anIRMethod){
var self=this;
var $1,$2;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutMethodDeclaration_with_",[anIRMethod,(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutFunctionWith_arguments_",[(function(){
$1=smalltalk.send(smalltalk.send(anIRMethod,"_internalVariables",[]),"_notEmpty",[]);
if(smalltalk.assert($1)){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutVars_",[smalltalk.send(smalltalk.send(smalltalk.send(anIRMethod,"_internalVariables",[]),"_asArray",[]),"_collect_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_variable",[]),"_alias",[]);
})])]);
};
$2=smalltalk.send(smalltalk.send(anIRMethod,"_scope",[]),"_hasNonLocalReturn",[]);
if(smalltalk.assert($2)){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnHandlingWith_",[(function(){
return smalltalk.send(self,"_visitIRMethod_",[anIRMethod],smalltalk.IRVisitor);
})]);
} else {
return smalltalk.send(self,"_visitIRMethod_",[anIRMethod],smalltalk.IRVisitor);
};
}),smalltalk.send(anIRMethod,"_arguments",[])]);
})]);
return self},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09self stream\x0a\x09\x09nextPutMethodDeclaration: anIRMethod \x0a\x09\x09with: [ self stream \x0a\x09\x09\x09nextPutFunctionWith: [ \x0a\x09\x09\x09\x09anIRMethod internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09self stream nextPutVars: (anIRMethod internalVariables asArray collect: [ :each |\x0a\x09\x09\x09\x09\x09\x09each variable alias ]) ].\x0a\x09\x09\x09\x09anIRMethod scope hasNonLocalReturn \x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09\x09\x09\x09\x09\x09super visitIRMethod: anIRMethod ]]\x0a\x09\x09\x09\x09\x09ifFalse: [ super visitIRMethod: anIRMethod ]]\x0a\x09\x09\x09arguments: anIRMethod arguments ]",
messageSends: ["nextPutMethodDeclaration:with:", "nextPutFunctionWith:arguments:", "ifTrue:", "nextPutVars:", "collect:", "alias", "variable", "asArray", "internalVariables", "stream", "notEmpty", "ifTrue:ifFalse:", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "hasNonLocalReturn", "scope", "arguments"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnWith_",[(function(){
return smalltalk.send(self,"_visitIRNonLocalReturn_",[anIRNonLocalReturn],smalltalk.IRVisitor);
})]);
return self},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09super visitIRNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["nextPutNonLocalReturnWith:", "visitIRNonLocalReturn:", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutReturnWith_",[(function(){
return smalltalk.send(self,"_visitIRReturn_",[anIRReturn],smalltalk.IRVisitor);
})]);
return self},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self stream nextPutReturnWith: [\x0a\x09\x09super visitIRReturn: anIRReturn ]",
messageSends: ["nextPutReturnWith:", "visitIRReturn:", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
var $1;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.send("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRSend,"_instructions",[]),"_first",[])]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(",\x22","__comma",[smalltalk.send(smalltalk.send(anIRSend,"_selector",[]),"_asSelector",[])]),"__comma",["\x22,["])]);
smalltalk.send(smalltalk.send(smalltalk.send(anIRSend,"_instructions",[]),"_allButFirst",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["]"]);
$1=smalltalk.send(anIRSend,"_classSend",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(",","__comma",[smalltalk.send(smalltalk.send(anIRSend,"_classSend",[]),"_asJavascript",[])])]);
};
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
return self},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09self stream nextPutAll: 'smalltalk.send('.\x0a\x09self visit: anIRSend instructions first.\x0a\x09self stream nextPutAll:  ',\x22', anIRSend selector asSelector, '\x22,['.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: ']'.\x0a\x09\x22anIRSend index > 1 \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09anIRSend classSend \x0a\x09\x09\x09\x09ifNil: [ self stream nextPutAll: ',undefined' ]\x0a\x09\x09\x09\x09ifNotNil: [ self stream nextPutAll: ',', anIRSend classSend asJavascript ].\x0a\x09\x09\x09self stream nextPutAll: ',', anIRSend index asString ]\x0a\x09\x09ifFalse: [\x22\x0a\x09\x09\x09anIRSend classSend ifNotNil: [  \x0a\x09\x09\x09\x09self stream nextPutAll: ',', anIRSend classSend asJavascript ]\x22]\x22.\x0a\x09self stream nextPutAll: ')'",
messageSends: ["nextPutAll:", "stream", "visit:", "first", "instructions", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst", "ifNotNil:", "asJavascript", "classSend"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
category: 'visiting',
fn: function (anIRSequence){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutSequenceWith_",[(function(){
return smalltalk.send(smalltalk.send(anIRSequence,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[smalltalk.send(self,"_visit_",[each])]);
})]);
})]);
return self},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09anIRSequence instructions do: [ :each |\x0a\x09\x09\x09self stream nextPutStatementWith: (self visit: each) ]]",
messageSends: ["nextPutSequenceWith:", "do:", "nextPutStatementWith:", "visit:", "stream", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutVar_",[smalltalk.send(smalltalk.send(anIRTempDeclaration,"_name",[]),"_asVariableName",[])]);
return self},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09self stream nextPutVar: anIRTempDeclaration name asVariableName",
messageSends: ["nextPutVar:", "asVariableName", "name", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
category: 'visiting',
fn: function (anIRValue){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(anIRValue,"_value",[]),"_asJavascript",[])]);
return self},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self stream nextPutAll: anIRValue value asJavascript",
messageSends: ["nextPutAll:", "asJavascript", "value", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
category: 'visiting',
fn: function (anIRVariable){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRVariable,"_variable",[]),"_name",[]),"__eq",["thisContext"]);
if(smalltalk.assert($1)){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.getThisContext()"]);
} else {
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(anIRVariable,"_variable",[]),"_alias",[])]);
};
return self},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09anIRVariable variable name = 'thisContext'\x0a    \x09ifTrue: [ self stream nextPutAll: 'smalltalk.getThisContext()' ]\x0a      \x09ifFalse: [ self stream nextPutAll: anIRVariable variable alias ]",
messageSends: ["ifTrue:ifFalse:", "nextPutAll:", "stream", "alias", "variable", "=", "name"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
category: 'visiting',
fn: function (anIRVerbatim){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(anIRVerbatim,"_source",[])]);
})]);
return self},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self stream nextPutAll: anIRVerbatim source ]",
messageSends: ["nextPutStatementWith:", "nextPutAll:", "source", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);



smalltalk.addClass('JSStream', smalltalk.Object, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@stream"],"_contents",[]);
return $1;
},
args: [],
source: "contents\x0a\x09^ stream contents",
messageSends: ["contents"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@stream"]=smalltalk.send("","_writeStream",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream.",
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: 'streaming',
fn: function (){
var self=this;
smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: [],
source: "lf\x0a\x09stream lf",
messageSends: ["lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
category: 'streaming',
fn: function (aString){
var self=this;
smalltalk.send(self["@stream"],"_nextPut_",[aString]);
return self},
args: ["aString"],
source: "nextPut: aString\x0a\x09stream nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
category: 'streaming',
fn: function (aString){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[aString]);
return self},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAssignment",
smalltalk.method({
selector: "nextPutAssignment",
category: 'streaming',
fn: function (){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["="]);
return self},
args: [],
source: "nextPutAssignment\x0a\x09stream nextPutAll: '='",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClosureWith_arguments_",
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
category: 'streaming',
fn: function (aBlock,anArray){
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["(function("]);
smalltalk.send(anArray,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asVariableName",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPut_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["})"]);
return self},
args: ["aBlock", "anArray"],
source: "nextPutClosureWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: '(function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutFunctionWith_arguments_",
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
category: 'streaming',
fn: function (aBlock,anArray){
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["fn: function("]);
smalltalk.send(anArray,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asVariableName",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPut_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["var self=this;"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self},
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09stream nextPutAll: 'var self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIf_with_",
smalltalk.method({
selector: "nextPutIf:with:",
category: 'streaming',
fn: function (aBlock,anotherBlock){
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["if("]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(anotherBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self},
args: ["aBlock", "anotherBlock"],
source: "nextPutIf: aBlock with: anotherBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09anotherBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIfElse_with_with_",
smalltalk.method({
selector: "nextPutIfElse:with:with:",
category: 'streaming',
fn: function (aBlock,ifBlock,elseBlock){
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["if("]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(ifBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["} else {"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(elseBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self},
args: ["aBlock", "ifBlock", "elseBlock"],
source: "nextPutIfElse: aBlock with: ifBlock with: elseBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09ifBlock value.\x0a\x09stream nextPutAll: '} else {'; lf.\x0a\x09elseBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutMethodDeclaration_with_",
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
category: 'streaming',
fn: function (aMethod,aBlock){
var self=this;
var $1,$2,$3;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.method({"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("selector: \x22","__comma",[smalltalk.send(aMethod,"_selector",[])]),"__comma",["\x22,"])]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("source: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_source",[]),"_asJavascript",[])]),"__comma",[","])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(",","__comma",[smalltalk.send((smalltalk.String || String),"_lf",[])]),"__comma",["messageSends: "])]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod,"_messageSends",[]),"_asArray",[]),"_asJavascript",[]),"__comma",[","])]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("args: ","__comma",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod,"_arguments",[]),"_collect_",[(function(each){
return smalltalk.send(each,"_value",[]);
})]),"_asArray",[]),"_asJavascript",[])]),"__comma",[","])]);
smalltalk.send(self["@stream"],"_lf",[]);
$2=smalltalk.send(self["@stream"],"_nextPutAll_",["referencedClasses: ["]);
smalltalk.send(smalltalk.send(aMethod,"_classReferences",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asJavascript",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
$3=smalltalk.send(self["@stream"],"_nextPutAll_",["})"]);
return self},
args: ["aMethod", "aBlock"],
source: "nextPutMethodDeclaration: aMethod with: aBlock\x0a\x09stream \x0a\x09\x09nextPutAll: 'smalltalk.method({'; lf;\x0a\x09\x09nextPutAll: 'selector: \x22', aMethod selector, '\x22,'; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.\x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;\x0a          \x09nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09aMethod classReferences \x0a\x09\x09do: [:each | stream nextPutAll: each asJavascript]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream \x0a\x09\x09nextPutAll: ']';\x0a\x09\x09nextPutAll: '})'",
messageSends: ["nextPutAll:", "lf", ",", "selector", "asJavascript", "source", "value", "asArray", "messageSends", "collect:", "arguments", "do:separatedBy:", "classReferences"],
referencedClasses: ["String"]
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnHandlingWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["var $early={};"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["try {"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["catch(e) {if(e===$early)return e[0]; throw e}"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["aBlock"],
source: "nextPutNonLocalReturnHandlingWith: aBlock\x0a\x09stream \x0a\x09\x09nextPutAll: 'var $early={};'; lf;\x0a\x09\x09nextPutAll: 'try {'; lf.\x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: '}'; lf;\x0a\x09\x09nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf",
messageSends: ["nextPutAll:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["throw $early=["]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self},
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: 'throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturn",
smalltalk.method({
selector: "nextPutReturn",
category: 'streaming',
fn: function (){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["return "]);
return self},
args: [],
source: "nextPutReturn\x0a\x09stream nextPutAll: 'return '",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturnWith_",
smalltalk.method({
selector: "nextPutReturnWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_nextPutReturn",[]);
smalltalk.send(aBlock,"_value",[]);
return self},
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09self nextPutReturn.\x0a\x09aBlock value",
messageSends: ["nextPutReturn", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSendTo_selector_arguments_",
smalltalk.method({
selector: "nextPutSendTo:selector:arguments:",
category: 'streaming',
fn: function (receiver,selector,arguments){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.send("]);
smalltalk.send(receiver,"_emitOn_",[self]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(",\x22","__comma",[smalltalk.send(selector,"_asSelector",[])]),"__comma",["\x22,["])]);
smalltalk.send(arguments,"_do_separatedBy_",[(function(each){
return smalltalk.send(each,"_emitOn_",[self]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["])"]);
return self},
args: ["receiver", "selector", "arguments"],
source: "nextPutSendTo: receiver selector: selector arguments: arguments\x0a\x09stream nextPutAll: 'smalltalk.send('.\x0a\x09receiver emitOn: self. \x0a\x09stream nextPutAll: ',\x22', selector asSelector, '\x22,['.\x0a\x09arguments \x0a\x09\x09do: [ :each | each emitOn: self ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "emitOn:", ",", "asSelector", "do:separatedBy:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSequenceWith_",
smalltalk.method({
selector: "nextPutSequenceWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
smalltalk.send(aBlock,"_value",[]);
return self},
args: ["aBlock"],
source: "nextPutSequenceWith: aBlock\x0a\x09\x22stream \x0a\x09\x09nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf.\x22\x0a\x09aBlock value.\x0a\x09\x22stream \x0a\x09\x09nextPutAll: '};'; lf\x22",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatement_with_",
smalltalk.method({
selector: "nextPutStatement:with:",
category: 'streaming',
fn: function (anInteger,aBlock){
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("case ","__comma",[smalltalk.send(anInteger,"_asString",[])]),"__comma",[":"])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self,"_nextPutStatementWith_",[aBlock]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("smalltalk.thisContext.pc=","__comma",[smalltalk.send(smalltalk.send(anInteger,"__plus",[(1)]),"_asString",[])]),"__comma",[";"])]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["anInteger", "aBlock"],
source: "nextPutStatement: anInteger with: aBlock\x0a\x09stream nextPutAll: 'case ', anInteger asString, ':'; lf.\x0a\x09self nextPutStatementWith: aBlock.\x0a\x09stream nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf",
messageSends: ["nextPutAll:", ",", "asString", "lf", "nextPutStatementWith:", "+"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatementWith_",
smalltalk.method({
selector: "nextPutStatementWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
var $1;
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["aBlock"],
source: "nextPutStatementWith: aBlock\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["value", "nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVar_",
smalltalk.method({
selector: "nextPutVar:",
category: 'streaming',
fn: function (aString){
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("var ","__comma",[aString]),"__comma",[";"])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["aString"],
source: "nextPutVar: aString\x0a\x09stream nextPutAll: 'var ', aString, ';'; lf",
messageSends: ["nextPutAll:", ",", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVars_",
smalltalk.method({
selector: "nextPutVars:",
category: 'streaming',
fn: function (aCollection){
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["var "]);
smalltalk.send(aCollection,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["aCollection"],
source: "nextPutVars: aCollection\x0a\x09stream nextPutAll: 'var '.\x0a\x09aCollection \x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["nextPutAll:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);



smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
category: '*Compiler-IR',
fn: function (anIRInstruction){
var self=this;
smalltalk.send(anIRInstruction,"_appendBlock_",[self]);
return self},
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a    anIRInstruction appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_asVariableName",
smalltalk.method({
selector: "asVariableName",
category: '*Compiler-IR',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_reservedWords",[]),"_includes_",[self]);
if(smalltalk.assert($2)){
$1=smalltalk.send(self,"__comma",["_"]);
} else {
$1=self;
};
return $1;
},
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk current reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", ",", "includes:", "reservedWords", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.String);

