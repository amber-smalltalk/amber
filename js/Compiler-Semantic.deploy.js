smalltalk.addPackage('Compiler-Semantic', {});
smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'instruction', 'temps', 'args', 'outerScope'], 'Compiler-Semantic');
smalltalk.addMethod(
"_addArg_",
smalltalk.method({
selector: "addArg:",
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_args", []), "_at_put_", [aString, smalltalk.send(smalltalk.ArgVar || ArgVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_args", []), "_at_", [aString]), "_scope_", [self]);
    return self;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addTemp_",
smalltalk.method({
selector: "addTemp:",
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_temps", []), "_at_put_", [aString, smalltalk.send(smalltalk.TempVar || TempVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_temps", []), "_at_", [aString]), "_scope_", [self]);
    return self;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_args", []), "_keys", []), "__comma", [smalltalk.send(smalltalk.send(self, "_temps", []), "_keys", [])]);
    return $1;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_args",
smalltalk.method({
selector: "args",
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
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
fn: function (aStringOrNode) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_pseudoVars", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return smalltalk.send(smalltalk.send(self, "_args", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return smalltalk.send(smalltalk.send(self, "_temps", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return nil;}]);}]);}]);
    return $1;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isInlined", []), "_and_", [function () {return smalltalk.send(smalltalk.send(self, "_outerScope", []), "_canInlineNonLocalReturns", []);}]);
    return $1;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction",
smalltalk.method({
selector: "instruction",
fn: function () {
    var self = this;
    return self['@instruction'];
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction_",
smalltalk.method({
selector: "instruction:",
fn: function (anIRInstruction) {
    var self = this;
    self['@instruction'] = anIRInstruction;
    return self;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isBlockScope",
smalltalk.method({
selector: "isBlockScope",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isMethodScope", []), "_not", []);
    return $1;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_instruction", []), "_isInlined", []);
    return $1;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_lookupVariable_",
smalltalk.method({
selector: "lookupVariable:",
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
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
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
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
fn: function () {
    var self = this;
    return self['@node'];
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
fn: function (aNode) {
    var self = this;
    self['@node'] = aNode;
    return self;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope",
smalltalk.method({
selector: "outerScope",
fn: function () {
    var self = this;
    return self['@outerScope'];
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope_",
smalltalk.method({
selector: "outerScope:",
fn: function (aLexicalScope) {
    var self = this;
    self['@outerScope'] = aLexicalScope;
    return self;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_methodScope", []), "_pseudoVars", []);
    return $1;
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_scopeLevel",
smalltalk.method({
selector: "scopeLevel",
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
}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
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
}
}),
smalltalk.LexicalScope);



smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler-Semantic');
smalltalk.addMethod(
"_addIVar_",
smalltalk.method({
selector: "addIVar:",
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_put_", [aString, smalltalk.send(smalltalk.InstanceVar || InstanceVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_", [aString]), "_scope_", [self]);
    return self;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_addNonLocalReturn_",
smalltalk.method({
selector: "addNonLocalReturn:",
fn: function (aScope) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_add_", [aScope]);
    return self;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_allVariableNames", [], smalltalk.LexicalScope), "__comma", [smalltalk.send(smalltalk.send(self, "_iVars", []), "_keys", [])]);
    return $1;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
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
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasLocalReturn",
smalltalk.method({
selector: "hasLocalReturn",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_localReturn", []);
    return $1;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasNonLocalReturn",
smalltalk.method({
selector: "hasNonLocalReturn",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_notEmpty", []);
    return $1;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_iVars",
smalltalk.method({
selector: "iVars",
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
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn",
smalltalk.method({
selector: "localReturn",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@localReturn']) == nil || $receiver == undefined) {
        $1 = false;
    } else {
        $1 = self['@localReturn'];
    }
    return $1;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn_",
smalltalk.method({
selector: "localReturn:",
fn: function (aBoolean) {
    var self = this;
    self['@localReturn'] = aBoolean;
    return self;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturns",
smalltalk.method({
selector: "nonLocalReturns",
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
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
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
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_removeNonLocalReturn_",
smalltalk.method({
selector: "removeNonLocalReturn:",
fn: function (aScope) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_remove_ifAbsent_", [aScope, function () {}]);
    return self;
}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
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
}
}),
smalltalk.MethodLexicalScope);



smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_name", []), "_asVariableName", []);
    return $1;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return self['@name'];
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString) {
    var self = this;
    self['@name'] = aString;
    return self;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function () {
    var self = this;
    return self['@scope'];
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope) {
    var self = this;
    self['@scope'] = aScope;
    return self;
}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_validateAssignment",
smalltalk.method({
selector: "validateAssignment",
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
}
}),
smalltalk.ScopeVar);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aString) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_name_", [aString]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.ScopeVar.klass);


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, ['node'], 'Compiler-Semantic');
smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
fn: function () {
    var self = this;
    return self['@node'];
}
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
fn: function (aNode) {
    var self = this;
    self['@node'] = aNode;
    return self;
}
}),
smalltalk.AliasVar);



smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.ArgVar);



smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [" || "]), "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [")"]);
    return $1;
}
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.ClassRefVar);



smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("self[\"@", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", ["\"]"]);
    return $1;
}
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.InstanceVar);



smalltalk.addClass('PseudoVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_name", []);
    return $1;
}
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.PseudoVar);



smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.TempVar);



smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.UnknownVar);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends'], 'Compiler-Semantic');
smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
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
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorShadowingVariable_",
smalltalk.method({
selector: "errorShadowingVariable:",
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.ShadowingVariableError || ShadowingVariableError, "_new", []);
    smalltalk.send($1, "_variableName_", [aString]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorUnknownVariable_",
smalltalk.method({
selector: "errorUnknownVariable:",
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
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
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
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newBlockScope",
smalltalk.method({
selector: "newBlockScope",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_newScopeOfClass_", [smalltalk.LexicalScope || LexicalScope]);
    return $1;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newMethodScope",
smalltalk.method({
selector: "newMethodScope",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_newScopeOfClass_", [smalltalk.MethodLexicalScope || MethodLexicalScope]);
    return $1;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newScopeOfClass_",
smalltalk.method({
selector: "newScopeOfClass:",
fn: function (aLexicalScopeClass) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(aLexicalScopeClass, "_new", []);
    smalltalk.send($2, "_outerScope_", [self['@currentScope']]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_popScope",
smalltalk.method({
selector: "popScope",
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
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pushScope_",
smalltalk.method({
selector: "pushScope:",
fn: function (aScope) {
    var self = this;
    smalltalk.send(aScope, "_outerScope_", [self['@currentScope']]);
    self['@currentScope'] = aScope;
    return self;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function () {
    var self = this;
    return self['@theClass'];
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass) {
    var self = this;
    self['@theClass'] = aClass;
    return self;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_validateVariableScope_",
smalltalk.method({
selector: "validateVariableScope:",
fn: function (aString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@currentScope'], "_lookupVariable_", [aString]);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(self, "_errorShadowingVariable_", [aString]);
    }
    return self;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitAssignmentNode_", [aNode], smalltalk.NodeVisitor);
    smalltalk.send(smalltalk.send(aNode, "_left", []), "_beAssigned", []);
    return self;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_pushScope_", [smalltalk.send(self, "_newBlockScope", [])]);
    smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
    smalltalk.send(self['@currentScope'], "_node_", [aNode]);
    smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_", [function (each) {smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addArg_", [each]);}]);
    smalltalk.send(self, "_visitBlockNode_", [aNode], smalltalk.NodeVisitor);
    smalltalk.send(self, "_popScope", []);
    return self;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
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
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode) {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(self, "_classReferences", []), "_add_", [smalltalk.send(aNode, "_value", [])]);
    $1 = smalltalk.send(smalltalk.ClassRefVar || ClassRefVar, "_new", []);
    smalltalk.send($1, "_name_", [smalltalk.send(aNode, "_value", [])]);
    $2 = smalltalk.send($1, "_yourself", []);
    smalltalk.send(aNode, "_binding_", [$2]);
    return self;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
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
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
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
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
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
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [function (each) {smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addTemp_", [each]);}]);
    smalltalk.send(self, "_visitSequenceNode_", [aNode], smalltalk.NodeVisitor);
    return self;
}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
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
}
}),
smalltalk.SemanticAnalyzer);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aClass) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_theClass_", [aClass]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.SemanticAnalyzer.klass);


