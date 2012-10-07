smalltalk.addPackage('Compiler-Semantic', {});
smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'instruction', 'temps', 'args', 'outerScope'], 'Compiler-Semantic');
smalltalk.LexicalScope.comment="I represent a lexical scope where variable names are associated with ScopeVars\x0aInstances are used for block scopes. Method scopes are instances of MethodLexicalScope.\x0a\x0aI am attached to a ScopeVar and method/block nodes.\x0aEach context (method/closure) get a fresh scope that inherits from its outer scope."
smalltalk.addMethod(
"_addArg_",
smalltalk.method({
selector: "addArg:",
category: 'adding',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_args", []), "_at_put_", [aString, smalltalk.send(smalltalk.ArgVar || ArgVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_args", []), "_at_", [aString]), "_scope_", [self]);
    return self;
},
args: ["aString"],
source: "addArg: aString\x0a\x09self args at: aString put: (ArgVar on: aString).\x0a\x09(self args at: aString) scope: self",
messageSends: ["at:put:", "on:", "args", "scope:", "at:"],
referencedClasses: ["ArgVar"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addTemp_",
smalltalk.method({
selector: "addTemp:",
category: 'adding',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_temps", []), "_at_put_", [aString, smalltalk.send(smalltalk.TempVar || TempVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_temps", []), "_at_", [aString]), "_scope_", [self]);
    return self;
},
args: ["aString"],
source: "addTemp: aString\x0a\x09self temps at: aString put: (TempVar on: aString).\x0a\x09(self temps at: aString) scope: self",
messageSends: ["at:put:", "on:", "temps", "scope:", "at:"],
referencedClasses: ["TempVar"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_args", []), "_keys", []), "__comma", [smalltalk.send(smalltalk.send(self, "_temps", []), "_keys", [])]);
    return $1;
},
args: [],
source: "allVariableNames\x0a\x09^ self args keys, self temps keys",
messageSends: [",", "keys", "temps", "args"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_args",
smalltalk.method({
selector: "args",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@args']) == nil || $receiver == undefined) {
        self['@args'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        $1 = self['@args'];
    } else {
        $1 = self['@args'];
    }
    return $1;
},
args: [],
source: "args\x0a\x09^ args ifNil: [ args := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
category: 'accessing',
fn: function (aStringOrNode) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_pseudoVars", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return smalltalk.send(smalltalk.send(self, "_args", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return smalltalk.send(smalltalk.send(self, "_temps", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return nil;}]);}]);}]);
    return $1;
},
args: ["aStringOrNode"],
source: "bindingFor: aStringOrNode\x0a\x09^ self pseudoVars at: aStringOrNode value ifAbsent: [ \x0a\x09\x09self args at: aStringOrNode value ifAbsent: [\x0a\x09\x09\x09self temps at: aStringOrNode value ifAbsent: [ nil ]]]",
messageSends: ["at:ifAbsent:", "value", "temps", "args", "pseudoVars"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isInlined", []), "_and_", [function () {return smalltalk.send(smalltalk.send(self, "_outerScope", []), "_canInlineNonLocalReturns", []);}]);
    return $1;
},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ self isInlined and: [ self outerScope canInlineNonLocalReturns ]",
messageSends: ["and:", "canInlineNonLocalReturns", "outerScope", "isInlined"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction",
smalltalk.method({
selector: "instruction",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@instruction'];
},
args: [],
source: "instruction\x0a\x09^ instruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction_",
smalltalk.method({
selector: "instruction:",
category: 'accessing',
fn: function (anIRInstruction) {
    var self = this;
    self['@instruction'] = anIRInstruction;
    return self;
},
args: ["anIRInstruction"],
source: "instruction: anIRInstruction\x0a\x09instruction := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isBlockScope",
smalltalk.method({
selector: "isBlockScope",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isMethodScope", []), "_not", []);
    return $1;
},
args: [],
source: "isBlockScope\x0a\x09^ self isMethodScope not",
messageSends: ["not", "isMethodScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_instruction", []), "_isInlined", []);
    return $1;
},
args: [],
source: "isInlined\x0a\x09^ self instruction isInlined",
messageSends: ["isInlined", "instruction"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isMethodScope\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_lookupVariable_",
smalltalk.method({
selector: "lookupVariable:",
category: 'accessing',
fn: function (aNode) {
    var self = this;
    var $1;
    var lookup;
    lookup = smalltalk.send(self, "_bindingFor_", [aNode]);
    if (($receiver = lookup) == nil || $receiver == undefined) {
        $1 = smalltalk.send(self, "_outerScope", []);
        if (($receiver = $1) == nil || $receiver == undefined) {
            lookup = $1;
        } else {
            lookup = smalltalk.send(smalltalk.send(self, "_outerScope", []), "_lookupVariable_", [aNode]);
        }
    } else {
    }
    return lookup;
},
args: ["aNode"],
source: "lookupVariable: aNode\x0a\x09| lookup |\x0a\x09lookup := (self bindingFor: aNode).\x0a\x09lookup ifNil: [\x0a\x09\x09lookup := self outerScope ifNotNil: [ \x0a\x09\x09\x09(self outerScope lookupVariable: aNode) ]].\x0a\x09^ lookup",
messageSends: ["bindingFor:", "ifNil:", "ifNotNil:", "lookupVariable:", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_outerScope", []);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = $2;
    } else {
        $1 = smalltalk.send(smalltalk.send(self, "_outerScope", []), "_methodScope", []);
    }
    return $1;
},
args: [],
source: "methodScope\x0a\x09^ self outerScope ifNotNil: [\x0a\x09\x09self outerScope methodScope ]",
messageSends: ["ifNotNil:", "methodScope", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@node'];
},
args: [],
source: "node\x0a\x09\x22Answer the node in which I am defined\x22\x0a\x09\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
category: 'accessing',
fn: function (aNode) {
    var self = this;
    self['@node'] = aNode;
    return self;
},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope",
smalltalk.method({
selector: "outerScope",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@outerScope'];
},
args: [],
source: "outerScope\x0a\x09^ outerScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope_",
smalltalk.method({
selector: "outerScope:",
category: 'accessing',
fn: function (aLexicalScope) {
    var self = this;
    self['@outerScope'] = aLexicalScope;
    return self;
},
args: ["aLexicalScope"],
source: "outerScope: aLexicalScope\x0a\x09outerScope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_methodScope", []), "_pseudoVars", []);
    return $1;
},
args: [],
source: "pseudoVars\x0a\x09^ self methodScope pseudoVars",
messageSends: ["pseudoVars", "methodScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_scopeLevel",
smalltalk.method({
selector: "scopeLevel",
category: 'accessing',
fn: function () {
    var self = this;
    var $3, $2, $1;
    $3 = smalltalk.send(self, "_outerScope", []);
    if (($receiver = $3) == nil || $receiver == undefined) {
        $2 = 0;
    } else {
        $2 = smalltalk.send(smalltalk.send(self, "_outerScope", []), "_scopeLevel", []);
    }
    $1 = smalltalk.send($2, "__plus", [1]);
    return $1;
},
args: [],
source: "scopeLevel\x0a\x09^ (self outerScope \x0a\x09\x09ifNil: [ 0 ]\x0a\x09\x09ifNotNil: [ self outerScope scopeLevel ]) + 1",
messageSends: ["+", "ifNil:ifNotNil:", "scopeLevel", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@temps']) == nil || $receiver == undefined) {
        self['@temps'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        $1 = self['@temps'];
    } else {
        $1 = self['@temps'];
    }
    return $1;
},
args: [],
source: "temps\x0a\x09^ temps ifNil: [ temps := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.LexicalScope);



smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler-Semantic');
smalltalk.MethodLexicalScope.comment="I represent a method scope."
smalltalk.addMethod(
"_addIVar_",
smalltalk.method({
selector: "addIVar:",
category: 'adding',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_put_", [aString, smalltalk.send(smalltalk.InstanceVar || InstanceVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_", [aString]), "_scope_", [self]);
    return self;
},
args: ["aString"],
source: "addIVar: aString\x0a\x09self iVars at: aString put: (InstanceVar on: aString).\x0a\x09(self iVars at: aString) scope: self",
messageSends: ["at:put:", "on:", "iVars", "scope:", "at:"],
referencedClasses: ["InstanceVar"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_addNonLocalReturn_",
smalltalk.method({
selector: "addNonLocalReturn:",
category: 'adding',
fn: function (aScope) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_add_", [aScope]);
    return self;
},
args: ["aScope"],
source: "addNonLocalReturn: aScope\x0a\x09self nonLocalReturns add: aScope",
messageSends: ["add:", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_allVariableNames", [], smalltalk.LexicalScope), "__comma", [smalltalk.send(smalltalk.send(self, "_iVars", []), "_keys", [])]);
    return $1;
},
args: [],
source: "allVariableNames\x0a\x09^ super allVariableNames, self iVars keys",
messageSends: [",", "keys", "iVars", "allVariableNames"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
category: 'accessing',
fn: function (aNode) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_bindingFor_", [aNode], smalltalk.LexicalScope);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_ifAbsent_", [smalltalk.send(aNode, "_value", []), function () {return nil;}]);
    } else {
        $1 = $2;
    }
    return $1;
},
args: ["aNode"],
source: "bindingFor: aNode\x0a\x09^ (super bindingFor: aNode) ifNil: [\x0a\x09\x09self iVars at: aNode value ifAbsent: [ nil ]]",
messageSends: ["ifNil:", "at:ifAbsent:", "value", "iVars", "bindingFor:"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasLocalReturn",
smalltalk.method({
selector: "hasLocalReturn",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_localReturn", []);
    return $1;
},
args: [],
source: "hasLocalReturn\x0a\x09^ self localReturn",
messageSends: ["localReturn"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasNonLocalReturn",
smalltalk.method({
selector: "hasNonLocalReturn",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_notEmpty", []);
    return $1;
},
args: [],
source: "hasNonLocalReturn\x0a\x09^ self nonLocalReturns notEmpty",
messageSends: ["notEmpty", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_iVars",
smalltalk.method({
selector: "iVars",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@iVars']) == nil || $receiver == undefined) {
        self['@iVars'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        $1 = self['@iVars'];
    } else {
        $1 = self['@iVars'];
    }
    return $1;
},
args: [],
source: "iVars\x0a\x09^ iVars ifNil: [ iVars := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isMethodScope\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn",
smalltalk.method({
selector: "localReturn",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@localReturn']) == nil || $receiver == undefined) {
        $1 = false;
    } else {
        $1 = self['@localReturn'];
    }
    return $1;
},
args: [],
source: "localReturn\x0a\x09^ localReturn ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn_",
smalltalk.method({
selector: "localReturn:",
category: 'accessing',
fn: function (aBoolean) {
    var self = this;
    self['@localReturn'] = aBoolean;
    return self;
},
args: ["aBoolean"],
source: "localReturn: aBoolean\x0a\x09localReturn := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "methodScope\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturns",
smalltalk.method({
selector: "nonLocalReturns",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@nonLocalReturns']) == nil ||
        $receiver == undefined) {
        self['@nonLocalReturns'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
        $1 = self['@nonLocalReturns'];
    } else {
        $1 = self['@nonLocalReturns'];
    }
    return $1;
},
args: [],
source: "nonLocalReturns\x0a\x09^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
category: 'accessing',
fn: function () {
    var self = this;
    var $1, $2;
    if (($receiver = self['@pseudoVars']) == nil || $receiver == undefined) {
        self['@pseudoVars'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        self['@pseudoVars'];
        smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_pseudoVariableNames", []), "_do_", [function (each) {$1 = smalltalk.send(smalltalk.PseudoVar || PseudoVar, "_on_", [each]);smalltalk.send($1, "_scope_", [smalltalk.send(self, "_methodScope", [])]);$2 = smalltalk.send($1, "_yourself", []);return smalltalk.send(self['@pseudoVars'], "_at_put_", [each, $2]);}]);
    } else {
        self['@pseudoVars'];
    }
    return self['@pseudoVars'];
},
args: [],
source: "pseudoVars\x0a\x09pseudoVars ifNil: [\x0a\x09\x09pseudoVars := Dictionary new.\x0a\x09\x09Smalltalk current pseudoVariableNames do: [ :each |\x0a\x09\x09\x09pseudoVars at: each put: ((PseudoVar on: each)\x0a\x09\x09\x09\x09scope: self methodScope;\x0a\x09\x09\x09\x09yourself) ]].\x0a\x09^ pseudoVars",
messageSends: ["ifNil:", "new", "do:", "at:put:", "scope:", "methodScope", "on:", "yourself", "pseudoVariableNames", "current"],
referencedClasses: ["Dictionary", "PseudoVar", "Smalltalk"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_removeNonLocalReturn_",
smalltalk.method({
selector: "removeNonLocalReturn:",
category: 'adding',
fn: function (aScope) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_remove_ifAbsent_", [aScope, function () {}]);
    return self;
},
args: ["aScope"],
source: "removeNonLocalReturn: aScope\x0a\x09self nonLocalReturns remove: aScope ifAbsent: []",
messageSends: ["remove:ifAbsent:", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@unknownVariables']) == nil ||
        $receiver == undefined) {
        self['@unknownVariables'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
        $1 = self['@unknownVariables'];
    } else {
        $1 = self['@unknownVariables'];
    }
    return $1;
},
args: [],
source: "unknownVariables\x0a\x09^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MethodLexicalScope);



smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler-Semantic');
smalltalk.ScopeVar.comment="I am an entry in a LexicalScope that gets associated with variable nodes of the same name.  \x0aThere are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars."
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_name", []), "_asVariableName", []);
    return $1;
},
args: [],
source: "alias\x0a\x09^ self name asVariableName",
messageSends: ["asVariableName", "name"],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isArgVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isClassRefVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isInstanceVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isPseudoVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isTempVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isUnknownVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@name'];
},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@name'] = aString;
    return self;
},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@scope'];
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope) {
    var self = this;
    self['@scope'] = aScope;
    return self;
},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_validateAssignment",
smalltalk.method({
selector: "validateAssignment",
category: 'testing',
fn: function () {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(smalltalk.send(self, "_isArgVar", []), "_or_", [function () {return smalltalk.send(self, "_isPseudoVar", []);}]);
    if (smalltalk.assert($1)) {
        $2 = smalltalk.send(smalltalk.InvalidAssignmentError || InvalidAssignmentError, "_new", []);
        smalltalk.send($2, "_variableName_", [smalltalk.send(self, "_name", [])]);
        $3 = smalltalk.send($2, "_signal", []);
    }
    return self;
},
args: [],
source: "validateAssignment\x0a\x09(self isArgVar or: [ self isPseudoVar ]) ifTrue: [\x0a\x09\x09InvalidAssignmentError new\x0a\x09\x09\x09variableName: self name;\x0a\x09\x09\x09signal]",
messageSends: ["ifTrue:", "variableName:", "name", "new", "signal", "or:", "isPseudoVar", "isArgVar"],
referencedClasses: ["InvalidAssignmentError"]
}),
smalltalk.ScopeVar);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aString) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_name_", [aString]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aString"],
source: "on: aString\x0a\x09^ self new \x0a\x09\x09name: aString;\x0a\x09\x09yourself",
messageSends: ["name:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ScopeVar.klass);


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, ['node'], 'Compiler-Semantic');
smalltalk.AliasVar.comment="I am an internally defined variable by the compiler"
smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@node'];
},
args: [],
source: "node\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
category: 'accessing',
fn: function (aNode) {
    var self = this;
    self['@node'] = aNode;
    return self;
},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AliasVar);



smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.ArgVar.comment="I am an argument of a method or block."
smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isArgVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ArgVar);



smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.ClassRefVar.comment="I am an class reference variable"
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [" || "]), "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [")"]);
    return $1;
},
args: [],
source: "alias\x0a\x09^ '(smalltalk.', self name, ' || ', self name, ')'",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isClassRefVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassRefVar);



smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.InstanceVar.comment="I am an instance variable of a method or block."
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("self[\"@", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", ["\"]"]);
    return $1;
},
args: [],
source: "alias\x0a\x09^ 'self[\x22@', self name, '\x22]'",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isInstanceVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.InstanceVar);



smalltalk.addClass('PseudoVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.PseudoVar.comment="I am an pseudo variable.\x0a\x0aThe five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'"
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_name", []);
    return $1;
},
args: [],
source: "alias\x0a\x09^ self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isPseudoVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.PseudoVar);



smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.TempVar.comment="I am an temporary variable of a method or block."
smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isTempVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.TempVar);



smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.UnknownVar.comment="I am an unknown variable. Amber uses unknown variables as JavaScript globals"
smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isUnknownVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVar);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends'], 'Compiler-Semantic');
smalltalk.SemanticAnalyzer.comment="I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes."
smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@classReferences']) == nil ||
        $receiver == undefined) {
        self['@classReferences'] = smalltalk.send(smalltalk.Set || Set, "_new", []);
        $1 = self['@classReferences'];
    } else {
        $1 = self['@classReferences'];
    }
    return $1;
},
args: [],
source: "classReferences\x0a\x09^ classReferences ifNil: [ classReferences := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorShadowingVariable_",
smalltalk.method({
selector: "errorShadowingVariable:",
category: 'error handling',
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.ShadowingVariableError || ShadowingVariableError, "_new", []);
    smalltalk.send($1, "_variableName_", [aString]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
},
args: ["aString"],
source: "errorShadowingVariable: aString\x0a\x09ShadowingVariableError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
messageSends: ["variableName:", "new", "signal"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorUnknownVariable_",
smalltalk.method({
selector: "errorUnknownVariable:",
category: 'error handling',
fn: function (aNode) {
    var self = this;
    var $1, $2;
    var notDefined;
    notDefined = eval("typeof " + aNode._value() + " == \"undefined\"");
    if (smalltalk.assert(notDefined)) {
        $1 = smalltalk.send(smalltalk.UnknownVariableError || UnknownVariableError, "_new", []);
        smalltalk.send($1, "_variableName_", [smalltalk.send(aNode, "_value", [])]);
        $2 = smalltalk.send($1, "_signal", []);
    } else {
        smalltalk.send(smalltalk.send(smalltalk.send(self['@currentScope'], "_methodScope", []), "_unknownVariables", []), "_add_", [smalltalk.send(aNode, "_value", [])]);
    }
    return self;
},
args: ["aNode"],
source: "errorUnknownVariable: aNode\x0a\x09\x22Throw an error if the variable is undeclared in the global JS scope (i.e. window)\x22\x0a\x0a\x09| notDefined |\x0a\x0a\x09notDefined := <eval('typeof ' + aNode._value() + ' == \x22undefined\x22')>.\x0a\x0a\x09notDefined\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09UnknownVariableError new\x0a\x09\x09\x09\x09variableName: aNode value;\x0a\x09\x09\x09\x09signal ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09currentScope methodScope unknownVariables add: aNode value. ]",
messageSends: ["ifTrue:ifFalse:", "variableName:", "value", "new", "signal", "add:", "unknownVariables", "methodScope"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@messageSends']) == nil ||
        $receiver == undefined) {
        self['@messageSends'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        $1 = self['@messageSends'];
    } else {
        $1 = self['@messageSends'];
    }
    return $1;
},
args: [],
source: "messageSends\x0a\x09^ messageSends ifNil: [ messageSends := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newBlockScope",
smalltalk.method({
selector: "newBlockScope",
category: 'factory',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_newScopeOfClass_", [smalltalk.LexicalScope || LexicalScope]);
    return $1;
},
args: [],
source: "newBlockScope\x0a\x09^ self newScopeOfClass: LexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["LexicalScope"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newMethodScope",
smalltalk.method({
selector: "newMethodScope",
category: 'factory',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_newScopeOfClass_", [smalltalk.MethodLexicalScope || MethodLexicalScope]);
    return $1;
},
args: [],
source: "newMethodScope\x0a\x09^ self newScopeOfClass: MethodLexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["MethodLexicalScope"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newScopeOfClass_",
smalltalk.method({
selector: "newScopeOfClass:",
category: 'factory',
fn: function (aLexicalScopeClass) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(aLexicalScopeClass, "_new", []);
    smalltalk.send($2, "_outerScope_", [self['@currentScope']]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aLexicalScopeClass"],
source: "newScopeOfClass: aLexicalScopeClass\x0a\x09^ aLexicalScopeClass new \x0a\x09\x09outerScope: currentScope;\x0a\x09\x09yourself",
messageSends: ["outerScope:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_popScope",
smalltalk.method({
selector: "popScope",
category: 'scope',
fn: function () {
    var self = this;
    if (($receiver = self['@currentScope']) == nil ||
        $receiver == undefined) {
        self['@currentScope'];
    } else {
        self['@currentScope'] = smalltalk.send(self['@currentScope'], "_outerScope", []);
        self['@currentScope'];
    }
    return self;
},
args: [],
source: "popScope\x0a\x09currentScope ifNotNil: [\x0a\x09\x09currentScope := currentScope outerScope ]",
messageSends: ["ifNotNil:", "outerScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pushScope_",
smalltalk.method({
selector: "pushScope:",
category: 'scope',
fn: function (aScope) {
    var self = this;
    smalltalk.send(aScope, "_outerScope_", [self['@currentScope']]);
    self['@currentScope'] = aScope;
    return self;
},
args: ["aScope"],
source: "pushScope: aScope\x0a\x09aScope outerScope: currentScope.\x0a\x09currentScope := aScope",
messageSends: ["outerScope:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@theClass'];
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass) {
    var self = this;
    self['@theClass'] = aClass;
    return self;
},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_validateVariableScope_",
smalltalk.method({
selector: "validateVariableScope:",
category: 'scope',
fn: function (aString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@currentScope'], "_lookupVariable_", [aString]);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(self, "_errorShadowingVariable_", [aString]);
    }
    return self;
},
args: ["aString"],
source: "validateVariableScope: aString\x0a\x09\x22Validate the variable scope in by doing a recursive lookup, up to the method scope\x22\x0a\x0a\x09(currentScope lookupVariable: aString) ifNotNil: [\x0a\x09\x09self errorShadowingVariable: aString ]",
messageSends: ["ifNotNil:", "errorShadowingVariable:", "lookupVariable:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitAssignmentNode_", [aNode], smalltalk.NodeVisitor);
    smalltalk.send(smalltalk.send(aNode, "_left", []), "_beAssigned", []);
    return self;
},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09super visitAssignmentNode: aNode.\x0a\x09aNode left beAssigned",
messageSends: ["visitAssignmentNode:", "beAssigned", "left"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_pushScope_", [smalltalk.send(self, "_newBlockScope", [])]);
    smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
    smalltalk.send(self['@currentScope'], "_node_", [aNode]);
    smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_", [function (each) {smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addArg_", [each]);}]);
    smalltalk.send(self, "_visitBlockNode_", [aNode], smalltalk.NodeVisitor);
    smalltalk.send(self, "_popScope", []);
    return self;
},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self pushScope: self newBlockScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x09\x0a\x09aNode parameters do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitBlockNode: aNode.\x0a\x09self popScope",
messageSends: ["pushScope:", "newBlockScope", "scope:", "node:", "do:", "validateVariableScope:", "addArg:", "parameters", "visitBlockNode:", "popScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_receiver_", [smalltalk.send(aNode, "_receiver", [])]);}]);
    smalltalk.send(self, "_visitCascadeNode_", [aNode], smalltalk.NodeVisitor);
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", []), "_superSend", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_superSend_", [true]);}]);
    }
    return self;
},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09\x22Populate the receiver into all children\x22\x0a\x09aNode nodes do: [ :each | \x0a\x09\x09each receiver: aNode receiver ].\x0a\x09super visitCascadeNode: aNode.\x0a\x09aNode nodes first superSend ifTrue: [\x0a\x09\x09aNode nodes do: [ :each | each superSend: true ]]",
messageSends: ["do:", "receiver:", "receiver", "nodes", "visitCascadeNode:", "ifTrue:", "superSend:", "superSend", "first"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(self, "_classReferences", []), "_add_", [smalltalk.send(aNode, "_value", [])]);
    $1 = smalltalk.send(smalltalk.ClassRefVar || ClassRefVar, "_new", []);
    smalltalk.send($1, "_name_", [smalltalk.send(aNode, "_value", [])]);
    $2 = smalltalk.send($1, "_yourself", []);
    smalltalk.send(aNode, "_binding_", [$2]);
    return self;
},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09self classReferences add: aNode value.\x0a\x09aNode binding: (ClassRefVar new name: aNode value; yourself)",
messageSends: ["add:", "value", "classReferences", "binding:", "name:", "new", "yourself"],
referencedClasses: ["ClassRefVar"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1;
    smalltalk.send(self, "_pushScope_", [smalltalk.send(self, "_newMethodScope", [])]);
    smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
    smalltalk.send(self['@currentScope'], "_node_", [aNode]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_allInstanceVariableNames", []), "_do_", [function (each) {return smalltalk.send(self['@currentScope'], "_addIVar_", [each]);}]);
    smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_", [function (each) {smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addArg_", [each]);}]);
    smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.NodeVisitor);
    smalltalk.send(aNode, "_classReferences_", [smalltalk.send(self, "_classReferences", [])]);
    $1 = smalltalk.send(aNode, "_messageSends_", [smalltalk.send(smalltalk.send(self, "_messageSends", []), "_keys", [])]);
    smalltalk.send(self, "_popScope", []);
    return self;
},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self pushScope: self newMethodScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x0a\x09self theClass allInstanceVariableNames do: [:each | \x0a\x09\x09currentScope addIVar: each ].\x0a\x09aNode arguments do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitMethodNode: aNode.\x0a\x0a\x09aNode \x0a\x09\x09classReferences: self classReferences;\x0a\x09\x09messageSends: self messageSends keys.\x0a\x09self popScope",
messageSends: ["pushScope:", "newMethodScope", "scope:", "node:", "do:", "addIVar:", "allInstanceVariableNames", "theClass", "validateVariableScope:", "addArg:", "arguments", "visitMethodNode:", "classReferences:", "classReferences", "messageSends:", "keys", "messageSends", "popScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1;
    smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
    $1 = smalltalk.send(self['@currentScope'], "_isMethodScope", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(self['@currentScope'], "_localReturn_", [true]);
    } else {
        smalltalk.send(smalltalk.send(self['@currentScope'], "_methodScope", []), "_addNonLocalReturn_", [self['@currentScope']]);
    }
    smalltalk.send(self, "_visitReturnNode_", [aNode], smalltalk.NodeVisitor);
    return self;
},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09aNode scope: currentScope.\x0a\x09currentScope isMethodScope\x0a\x09\x09ifTrue: [ currentScope localReturn: true ]\x0a\x09\x09ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].\x0a\x09super visitReturnNode: aNode",
messageSends: ["scope:", "ifTrue:ifFalse:", "localReturn:", "addNonLocalReturn:", "methodScope", "isMethodScope", "visitReturnNode:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_receiver", []), "_value", []), "__eq", ["super"]);
    if (smalltalk.assert($1)) {
        smalltalk.send(aNode, "_superSend_", [true]);
        smalltalk.send(smalltalk.send(aNode, "_receiver", []), "_value_", ["self"]);
    } else {
        $2 = smalltalk.send(smalltalk.send(smalltalk.IRSendInliner || IRSendInliner, "_inlinedSelectors", []), "_includes_", [smalltalk.send(aNode, "_selector", [])]);
        if (smalltalk.assert($2)) {
            smalltalk.send(aNode, "_shouldBeInlined_", [true]);
            $3 = smalltalk.send(smalltalk.send(aNode, "_receiver", []), "_isValueNode", []);
            if (!smalltalk.assert($3)) {
                smalltalk.send(smalltalk.send(aNode, "_receiver", []), "_shouldBeAliased_", [true]);
            }
        }
    }
    smalltalk.send(smalltalk.send(self, "_messageSends", []), "_at_ifAbsentPut_", [smalltalk.send(aNode, "_selector", []), function () {return smalltalk.send(smalltalk.Set || Set, "_new", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_messageSends", []), "_at_", [smalltalk.send(aNode, "_selector", [])]), "_add_", [aNode]);
    smalltalk.send(aNode, "_index_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_messageSends", []), "_at_", [smalltalk.send(aNode, "_selector", [])]), "_size", [])]);
    smalltalk.send(self, "_visitSendNode_", [aNode], smalltalk.NodeVisitor);
    return self;
},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x0a\x09aNode receiver value = 'super' \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09aNode superSend: true.\x0a\x09\x09\x09aNode receiver value: 'self' ]\x0a\x09\x09ifFalse: [ (IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [\x0a\x09\x09\x09aNode shouldBeInlined: true.\x0a\x09\x09\x09aNode receiver isValueNode ifFalse: [ aNode receiver shouldBeAliased: true ] ] ].\x0a\x0a\x09self messageSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09(self messageSends at: aNode selector) add: aNode.\x0a\x0a\x09aNode index: (self messageSends at: aNode selector) size.\x0a\x0a\x09super visitSendNode: aNode",
messageSends: ["ifTrue:ifFalse:", "superSend:", "value:", "receiver", "ifTrue:", "shouldBeInlined:", "ifFalse:", "shouldBeAliased:", "isValueNode", "includes:", "selector", "inlinedSelectors", "=", "value", "at:ifAbsentPut:", "new", "messageSends", "add:", "at:", "index:", "size", "visitSendNode:"],
referencedClasses: ["IRSendInliner", "Set"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [function (each) {smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addTemp_", [each]);}]);
    smalltalk.send(self, "_visitSequenceNode_", [aNode], smalltalk.NodeVisitor);
    return self;
},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addTemp: each ].\x0a\x0a\x09super visitSequenceNode: aNode",
messageSends: ["do:", "validateVariableScope:", "addTemp:", "temps", "visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $2, $3, $4, $1;
    $2 = smalltalk.send(self['@currentScope'], "_lookupVariable_", [aNode]);
    if (($receiver = $2) == nil || $receiver == undefined) {
        smalltalk.send(self, "_errorUnknownVariable_", [aNode]);
        $3 = smalltalk.send(smalltalk.UnknownVar || UnknownVar, "_new", []);
        smalltalk.send($3, "_name_", [smalltalk.send(aNode, "_value", [])]);
        $4 = smalltalk.send($3, "_yourself", []);
        $1 = $4;
    } else {
        $1 = $2;
    }
    smalltalk.send(aNode, "_binding_", [$1]);
    return self;
},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09\x22Bind a ScopeVar to aNode by doing a lookup in the current scope.\x0a\x09If no ScopeVar is found, bind a UnknowVar and throw an error\x22\x0a\x0a\x09aNode binding: ((currentScope lookupVariable: aNode) ifNil: [ \x0a\x09\x09self errorUnknownVariable: aNode.\x0a\x09\x09UnknownVar new name: aNode value; yourself ])",
messageSends: ["binding:", "ifNil:", "errorUnknownVariable:", "name:", "value", "new", "yourself", "lookupVariable:"],
referencedClasses: ["UnknownVar"]
}),
smalltalk.SemanticAnalyzer);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aClass) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_theClass_", [aClass]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer.klass);


