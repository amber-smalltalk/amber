smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (anObject) {
    var self = this;
    return function () {return self == anObject;}();
    return self;
},
source: unescape('%3D%20anObject%0A%09%5E%7B%27return%20self%20%3D%3D%20anObject%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_~_eq',
smalltalk.method({
selector: '~=',
category: 'comparing',
fn: function (anObject) {
    var self = this;
    return self.__eq(anObject).__eq_eq(false);
    return self;
},
source: unescape('%7E%3D%20anObject%0A%09%5E%28self%20%3D%20anObject%29%20%3D%3D%20false%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
source: unescape('initialize%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_yourself',
smalltalk.method({
selector: 'yourself',
category: 'accessing',
fn: function () {
    var self = this;
    return self;
    return self;
},
source: unescape('yourself%0A%09%5Eself%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_class',
smalltalk.method({
selector: 'class',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.klass;}();
    return self;
},
source: unescape('class%0A%09%5E%7B%27return%20self.klass%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function () {
    var self = this;
    self._error_("Object not indexable");
    return self;
},
source: unescape('size%0A%09self%20error%3A%20%27Object%20not%20indexable%27%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_copy',
smalltalk.method({
selector: 'copy',
category: 'copying',
fn: function () {
    var self = this;
    return self._shallowCopy()._postCopy();
    return self;
},
source: unescape('copy%0A%09%5Eself%20shallowCopy%20postCopy%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function () {
    var self = this;
    return function () {var copy = self.klass._new();for (var i in self) {if (/^@.+/.test(i)) {copy[i] = self[i];}}return copy;}();
    return self;
},
source: unescape('shallowCopy%0A%09%5E%7B%27%0A%09%20%20%20%20var%20copy%20%3D%20self.klass._new%28%29%3B%0A%09%20%20%20%20for%28var%20i%20in%20self%29%20%7B%0A%09%09if%28/%5E@.+/.test%28i%29%29%20%7B%0A%09%09%20%20%20%20copy%5Bi%5D%20%3D%20self%5Bi%5D%3B%0A%09%09%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20copy%3B%0A%09%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function () {
    var self = this;
    (function () {var copy = self.klass._new();for (var i in self) {if (/^@.+/.test(i)) {copy[i] = self[i]._deepCopy();}}return copy;}());
    return self;
},
source: unescape('deepCopy%0A%09%7B%27%09%20%20%20%20%0A%09%20%20%20%20var%20copy%20%3D%20self.klass._new%28%29%3B%0A%09%20%20%20%20for%28var%20i%20in%20self%29%20%7B%0A%09%09if%28/%5E@.+/.test%28i%29%29%20%7B%0A%09%09%20%20%20%20copy%5Bi%5D%20%3D%20self%5Bi%5D._deepCopy%28%29%3B%0A%09%09%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20copy%3B%0A%09%27%7D.%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_postCopy',
smalltalk.method({
selector: 'postCopy',
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
source: unescape('postCopy%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'__minus_gt',
smalltalk.method({
selector: '->',
category: 'converting',
fn: function (anObject) {
    var self = this;
    return smalltalk.Association._key_value_(self, anObject);
    return self;
},
source: unescape('-%3E%20anObject%0A%09%5EAssociation%20key%3A%20self%20value%3A%20anObject%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'converting',
fn: function () {
    var self = this;
    return self._printString();
    return self;
},
source: unescape('asString%0A%09%5Eself%20printString%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
category: 'converting',
fn: function () {
    var self = this;
    return self._asString();
    return self;
},
source: unescape('asJavascript%0A%09%5Eself%20asString%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_perform_',
smalltalk.method({
selector: 'perform:',
category: 'message handling',
fn: function (aSymbol) {
    var self = this;
    return self._perform_withArguments_(aSymbol, []);
    return self;
},
source: unescape('perform%3A%20aSymbol%0A%09%5Eself%20perform%3A%20aSymbol%20withArguments%3A%20%23%28%29%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_perform_withArguments_',
smalltalk.method({
selector: 'perform:withArguments:',
category: 'error handling',
fn: function (aSymbol, aCollection) {
    var self = this;
    return self._basicPerform_withArguments_(aSymbol._asSelector(), aCollection);
    return self;
},
source: unescape('perform%3A%20aSymbol%20withArguments%3A%20aCollection%0A%09%5Eself%20basicPerform%3A%20aSymbol%20asSelector%20withArguments%3A%20aCollection%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_instVarAt_',
smalltalk.method({
selector: 'instVarAt:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    return function () {var value = self["@" + aString];if (typeof value == "undefined") {return nil;} else {return value;}}();
    return self;
},
source: unescape('instVarAt%3A%20aString%0A%09%5E%7B%27%0A%09%20%20%20%20var%20value%20%3D%20self%5B%27%27@%27%27+aString%5D%3B%0A%09%20%20%20%20if%28typeof%28value%29%20%3D%3D%20%27%27undefined%27%27%29%20%7B%0A%09%09return%20nil%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20value%3B%0A%09%20%20%20%20%7D%0A%09%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_instVarAt_put_',
smalltalk.method({
selector: 'instVarAt:put:',
category: 'accessing',
fn: function (aString, anObject) {
    var self = this;
    return function () {self["@" + aString] = anObject;}();
    return self;
},
source: unescape('instVarAt%3A%20aString%20put%3A%20anObject%0A%09%5E%7B%27self%5B%27%27@%27%27%20+%20aString%5D%20%3D%20anObject%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_basicAt_',
smalltalk.method({
selector: 'basicAt:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    return function () {var value = self[aString];if (typeof value == "undefined") {return nil;} else {return value;}}();
    return self;
},
source: unescape('basicAt%3A%20aString%0A%09%5E%7B%27%0A%09%20%20%20%20var%20value%20%3D%20self%5BaString%5D%3B%0A%09%20%20%20%20if%28typeof%28value%29%20%3D%3D%20%27%27undefined%27%27%29%20%7B%0A%09%09return%20nil%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20value%3B%0A%09%20%20%20%20%7D%0A%09%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_basicAt_put_',
smalltalk.method({
selector: 'basicAt:put:',
category: 'accessing',
fn: function (aString, anObject) {
    var self = this;
    return function () {return self[aString] = anObject;}();
    return self;
},
source: unescape('basicAt%3A%20aString%20put%3A%20anObject%0A%09%5E%7B%27return%20self%5BaString%5D%20%3D%20anObject%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_error_',
smalltalk.method({
selector: 'error:',
category: 'error handling',
fn: function (aString) {
    var self = this;
    smalltalk.Error._signal_(aString);
    return self;
},
source: unescape('error%3A%20aString%0A%09Error%20signal%3A%20aString%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_subclassResponsibility',
smalltalk.method({
selector: 'subclassResponsibility',
category: 'error handling',
fn: function () {
    var self = this;
    self._error_("This method is a responsibility of a subclass");
    return self;
},
source: unescape('subclassResponsibility%0A%09self%20error%3A%20%27This%20method%20is%20a%20responsibility%20of%20a%20subclass%27%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_shouldNotImplement',
smalltalk.method({
selector: 'shouldNotImplement',
category: 'error handling',
fn: function () {
    var self = this;
    self._error_("This method should not be implemented in ".__comma(self._class()._name()));
    return self;
},
source: unescape('shouldNotImplement%0A%09self%20error%3A%20%27This%20method%20should%20not%20be%20implemented%20in%20%27%2C%20self%20class%20name%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_try_catch_',
smalltalk.method({
selector: 'try:catch:',
category: 'error handling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    (function () {try {aBlock();} catch (e) {anotherBlock(e);}}());
    return self;
},
source: unescape('try%3A%20aBlock%20catch%3A%20anotherBlock%0A%09%7B%27try%7BaBlock%28%29%7D%20catch%28e%29%20%7BanotherBlock%28e%29%7D%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function () {
    var self = this;
    return "a ".__comma(self._class()._name());
    return self;
},
source: unescape('printString%0A%09%5E%27a%20%27%2C%20self%20class%20name%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_printNl',
smalltalk.method({
selector: 'printNl',
category: 'printing',
fn: function () {
    var self = this;
    (function () {console.log(self);}());
    return self;
},
source: unescape('printNl%0A%09%7B%27console.log%28self%29%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_isKindOf_',
smalltalk.method({
selector: 'isKindOf:',
category: 'testing',
fn: function (aClass) {
    var self = this;
    return self._isMemberOf_(aClass)._ifTrue_ifFalse_(function () {return true;}, function () {return self._class()._inheritsFrom_(aClass);});
    return self;
},
source: unescape('isKindOf%3A%20aClass%0A%09%5E%28self%20isMemberOf%3A%20aClass%29%0A%09%20%20%20%20ifTrue%3A%20%5Btrue%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20class%20inheritsFrom%3A%20aClass%5D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_isMemberOf_',
smalltalk.method({
selector: 'isMemberOf:',
category: 'testing',
fn: function (aClass) {
    var self = this;
    return self._class().__eq(aClass);
    return self;
},
source: unescape('isMemberOf%3A%20aClass%0A%09%5Eself%20class%20%3D%20aClass%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNil_',
smalltalk.method({
selector: 'ifNil:',
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return self;
    return self;
},
source: unescape('ifNil%3A%20aBlock%0A%09%5Eself%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNil_ifNotNil_',
smalltalk.method({
selector: 'ifNil:ifNotNil:',
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return anotherBlock._value();
    return self;
},
source: unescape('ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0A%09%5EanotherBlock%20value%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNotNil_',
smalltalk.method({
selector: 'ifNotNil:',
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return aBlock._value();
    return self;
},
source: unescape('ifNotNil%3A%20aBlock%0A%09%5EaBlock%20value%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNotNil_ifNil_',
smalltalk.method({
selector: 'ifNotNil:ifNil:',
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return aBlock._value();
    return self;
},
source: unescape('ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0A%09%5EaBlock%20value%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_isNil',
smalltalk.method({
selector: 'isNil',
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
source: unescape('isNil%0A%09%5Efalse%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_notNil',
smalltalk.method({
selector: 'notNil',
category: 'testing',
fn: function () {
    var self = this;
    return self._isNil()._not();
    return self;
},
source: unescape('notNil%0A%09%5Eself%20isNil%20not%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_isClass',
smalltalk.method({
selector: 'isClass',
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
source: unescape('isClass%0A%09%5Efalse%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_isMetaclass',
smalltalk.method({
selector: 'isMetaclass',
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
source: unescape('isMetaclass%0A%09%5Efalse%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_isNumber',
smalltalk.method({
selector: 'isNumber',
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
source: unescape('isNumber%0A%09%5Efalse%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_isString',
smalltalk.method({
selector: 'isString',
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
source: unescape('isString%0A%09%5Efalse%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_isParseFailure',
smalltalk.method({
selector: 'isParseFailure',
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
source: unescape('isParseFailure%0A%09%5Efalse%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_basicPerform_',
smalltalk.method({
selector: 'basicPerform:',
category: 'error handling',
fn: function (aSymbol) {
    var self = this;
    return self._basicPerform_withArguments_(aSymbol, []);
    return self;
},
source: unescape('basicPerform%3A%20aSymbol%20%0A%20%20%20%20%5Eself%20basicPerform%3A%20aSymbol%20withArguments%3A%20%23%28%29%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_basicPerform_withArguments_',
smalltalk.method({
selector: 'basicPerform:withArguments:',
category: 'error handling',
fn: function (aSymbol, aCollection) {
    var self = this;
    return function () {return self[aSymbol].apply(self, aCollection);}();
    return self;
},
source: unescape('basicPerform%3A%20aSymbol%20withArguments%3A%20aCollection%0A%09%5E%7B%27return%20self%5BaSymbol%5D.apply%28self%2C%20aCollection%29%3B%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: '*Canvas',
fn: function (aTagBrush) {
    var self = this;
    aTagBrush._append_(self._asString());
    return self;
},
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20aTagBrush%20append%3A%20self%20asString%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_basicDelete_',
smalltalk.method({
selector: 'basicDelete:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    (function () {delete self[aString];}());
    return self;
},
source: unescape('basicDelete%3A%20aString%0A%20%20%20%20%7B%27delete%20self%5BaString%5D%27%7D%0A')}),
smalltalk.Object);

smalltalk.addMethod(
'_inspect',
smalltalk.method({
selector: 'inspect',
category: '*IDE',
fn: function () {
    var self = this;
    (function ($rec) {$rec._inspect_(self);return $rec._open();}(smalltalk.Inspector._new()));
    return self;
},
source: unescape('inspect%0A%09Inspector%20new%20%0A%09%09inspect%3A%20self%3B%0A%09%09open')}),
smalltalk.Object);

smalltalk.addMethod(
'_inspectOn_',
smalltalk.method({
selector: 'inspectOn:',
category: '*IDE',
fn: function (anInspector) {
    var self = this;
    var variables = nil;
    variables = smalltalk.Dictionary._new();
    variables._at_put_(unescape("%23self"), self);
    self._class()._instanceVariableNames()._do_(function (each) {return variables._at_put_(each, self._instVarAt_(each));});
    (function ($rec) {$rec._setLabel_(self._printString());return $rec._setVariables_(variables);}(anInspector));
    return self;
},
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20variables%20%7C%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09variables%20at%3A%20%27%23self%27%20put%3A%20self.%0A%09self%20class%20instanceVariableNames%20do%3A%20%5B%3Aeach%20%7C%0A%09%09variables%20at%3A%20each%20put%3A%20%28self%20instVarAt%3A%20each%29%5D.%0A%09anInspector%20%0A%09%09setLabel%3A%20self%20printString%3B%0A%09%09setVariables%3A%20variables%0A%09%0A%09')}),
smalltalk.Object);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_classes',
smalltalk.method({
selector: 'classes',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.classes();}();
    return self;
},
source: unescape('classes%0A%09%5E%7B%27return%20self.classes%28%29%27%7D%0A')}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return smalltalk;}();
    return self;
},
source: unescape('current%0A%09%20%20%20%20%5E%7B%27return%20smalltalk%27%7D%0A')}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'instance creation',
fn: function () {
    var self = this;
    return function ($rec) {$rec._initialize();return $rec._yourself();}(self._basicNew());
    return self;
},
source: unescape('new%0A%09%5Eself%20basicNew%20%0A%09%20%20%20%20initialize%3B%0A%09%20%20%20%20yourself%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_basicNew',
smalltalk.method({
selector: 'basicNew',
category: 'instance creation',
fn: function () {
    var self = this;
    return function () {return new self.fn;}();
    return self;
},
source: unescape('basicNew%0A%09%5E%7B%27return%20new%20self.fn%28%29%3B%27%7D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.className || nil;}();
    return self;
},
source: unescape('name%0A%09%5E%7B%27return%20self.className%20%7C%7C%20nil%27%7D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_superclass',
smalltalk.method({
selector: 'superclass',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.superclass || nil;}();
    return self;
},
source: unescape('superclass%0A%09%5E%7B%27return%20self.superclass%20%7C%7C%20nil%27%7D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_subclasses',
smalltalk.method({
selector: 'subclasses',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return smalltalk.subclasses(self);}();
    return self;
},
source: unescape('subclasses%0A%09%5E%7B%27return%20smalltalk.subclasses%28self%29%27%7D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_allSubclasses',
smalltalk.method({
selector: 'allSubclasses',
category: 'accessing',
fn: function () {
    var self = this;
    var result = nil;
    result = self._subclasses();
    self._subclasses()._do_(function (each) {return result._addAll_(each._allSubclasses());});
    return result;
    return self;
},
source: unescape('allSubclasses%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20self%20subclasses.%0A%09self%20subclasses%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20result%20addAll%3A%20each%20allSubclasses%5D.%0A%09%5Eresult%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_withAllSubclasses',
smalltalk.method({
selector: 'withAllSubclasses',
category: 'accessing',
fn: function () {
    var self = this;
    return function ($rec) {$rec._addAll_(self._allSubclasses());return $rec._yourself();}(smalltalk.Array._with_(self));
    return self;
},
source: unescape('withAllSubclasses%0A%09%5E%28Array%20with%3A%20self%29%20addAll%3A%20self%20allSubclasses%3B%20yourself%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_prototype',
smalltalk.method({
selector: 'prototype',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.fn.prototype;}();
    return self;
},
source: unescape('prototype%0A%09%5E%7B%27return%20self.fn.prototype%27%7D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodDictionary',
smalltalk.method({
selector: 'methodDictionary',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {var dict = smalltalk.Dictionary._new();var methods = self.fn.prototype.methods;for (var i in methods) {if (methods[i].selector) {dict._at_put_(methods[i].selector, methods[i]);}}return dict;}();
    return self;
},
source: unescape('methodDictionary%0A%09%5E%7B%27var%20dict%20%3D%20smalltalk.Dictionary._new%28%29%3B%0A%09var%20methods%20%3D%20self.fn.prototype.methods%3B%0A%09for%28var%20i%20in%20methods%29%20%7B%0A%09%09if%28methods%5Bi%5D.selector%29%20%7B%0A%09%09%09dict._at_put_%28methods%5Bi%5D.selector%2C%20methods%5Bi%5D%29%3B%0A%09%09%7D%0A%09%7D%3B%0A%09return%20dict%27%7D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_instVarNames',
smalltalk.method({
selector: 'instVarNames',
category: '',
fn: function () {
    var self = this;
    return function () {return self.iVarNames;}();
    return self;
},
source: unescape('')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodsFor_',
smalltalk.method({
selector: 'methodsFor:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    return function ($rec) {$rec._class_category_(self, aString);return $rec._yourself();}(smalltalk.ClassCategoryReader._new());
    return self;
},
source: unescape('methodsFor%3A%20aString%0A%09%5EClassCategoryReader%20new%0A%09%20%20%20%20class%3A%20self%20category%3A%20aString%3B%0A%09%20%20%20%20yourself%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_addCompiledMethod_',
smalltalk.method({
selector: 'addCompiledMethod:',
category: 'accessing',
fn: function (aMethod) {
    var self = this;
    (function () {self.fn.prototype[aMethod.selector._asSelector()] = aMethod.fn;self.fn.prototype.methods[aMethod.selector] = aMethod;}());
    return self;
},
source: unescape('addCompiledMethod%3A%20aMethod%0A%09%7B%27self.fn.prototype%5BaMethod.selector._asSelector%28%29%5D%20%3D%20aMethod.fn%3B%0A%09self.fn.prototype.methods%5BaMethod.selector%5D%20%3D%20aMethod%27%7D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_instanceVariableNames',
smalltalk.method({
selector: 'instanceVariableNames',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.iVarNames;}();
    return self;
},
source: unescape('instanceVariableNames%0A%09%5E%7B%27return%20self.iVarNames%27%7D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_comment',
smalltalk.method({
selector: 'comment',
category: 'accessing',
fn: function () {
    var self = this;
    return self._basicAt_("comment")._ifNil_(function () {return "";});
    return self;
},
source: unescape('comment%0A%20%20%20%20%5E%28self%20basicAt%3A%20%27comment%27%29%20ifNil%3A%20%5B%27%27%5D%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_comment_',
smalltalk.method({
selector: 'comment:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    self._basicAt_put_("comment", aString);
    return self;
},
source: unescape('comment%3A%20aString%0A%20%20%20%20self%20basicAt%3A%20%27comment%27%20put%3A%20aString%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_commentStamp',
smalltalk.method({
selector: 'commentStamp',
category: 'accessing',
fn: function () {
    var self = this;
    return function ($rec) {$rec._class_(self);return $rec._yourself();}(smalltalk.ClassCommentReader._new());
    return self;
},
source: unescape('commentStamp%0A%20%20%20%20%5EClassCommentReader%20new%0A%09class%3A%20self%3B%0A%09yourself%0A')}),
smalltalk.Behavior);

smalltalk.addMethod(
'_removeCompiledMethod_',
smalltalk.method({
selector: 'removeCompiledMethod:',
category: 'accessing',
fn: function (aMethod) {
    var self = this;
    (function () {delete self.fn.prototype[aMethod.selector._asSelector()];delete self.fn.prototype.methods[aMethod.selector];}());
    return self;
},
source: unescape('removeCompiledMethod%3A%20aMethod%0A%09%7B%27delete%20self.fn.prototype%5BaMethod.selector._asSelector%28%29%5D%3B%0A%09delete%20self.fn.prototype.methods%5BaMethod.selector%5D%27%7D%0A')}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
'_category',
smalltalk.method({
selector: 'category',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.category;}();
    return self;
},
source: unescape('category%0A%09%5E%7B%27return%20self.category%27%7D%0A')}),
smalltalk.Class);

smalltalk.addMethod(
'_category_',
smalltalk.method({
selector: 'category:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    (function () {self.category = aString;}());
    return self;
},
source: unescape('category%3A%20aString%0A%09%7B%27self.category%20%3D%20aString%27%7D%0A')}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:',
category: 'class creation',
fn: function (aString, anotherString) {
    var self = this;
    return self._subclass_instanceVariableNames_category_(aString, anotherString, nil);
    return self;
},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%20category%3A%20nil%0A')}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_category_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:category:',
category: 'class creation',
fn: function (aString, aString2, aString3) {
    var self = this;
    return smalltalk.ClassBuilder._new()._superclass_subclass_instanceVariableNames_category_(self, aString, aString2, aString3);
    return self;
},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%5EClassBuilder%20new%0A%09%20%20%20%20superclass%3A%20self%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A')}),
smalltalk.Class);

smalltalk.addMethod(
'_isClass',
smalltalk.method({
selector: 'isClass',
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
source: unescape('isClass%0A%09%5Etrue%0A')}),
smalltalk.Class);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function () {
    var self = this;
    return self._name();
    return self;
},
source: unescape('printString%0A%09%5Eself%20name%0A')}),
smalltalk.Class);

smalltalk.addMethod(
'_rename_',
smalltalk.method({
selector: 'rename:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    (function () {smalltalk[aString] = self;delete smalltalk[self.className];self.className = aString;}());
    return self;
},
source: unescape('rename%3A%20aString%0A%09%7B%27%0A%09%09smalltalk%5BaString%5D%20%3D%20self%3B%0A%09%09delete%20smalltalk%5Bself.className%5D%3B%0A%09%09self.className%20%3D%20aString%3B%0A%09%27%7D')}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
'_instanceClass',
smalltalk.method({
selector: 'instanceClass',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.instanceClass;}();
    return self;
},
source: unescape('instanceClass%0A%09%5E%7B%27return%20self.instanceClass%27%7D%0A')}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_instanceVariableNames_',
smalltalk.method({
selector: 'instanceVariableNames:',
category: 'accessing',
fn: function (aCollection) {
    var self = this;
    smalltalk.ClassBuilder._new()._class_instanceVariableNames_(self, aCollection);
    return self;
},
source: unescape('instanceVariableNames%3A%20aCollection%0A%09ClassBuilder%20new%0A%09%20%20%20%20class%3A%20self%20instanceVariableNames%3A%20aCollection%0A')}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_isMetaclass',
smalltalk.method({
selector: 'isMetaclass',
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
source: unescape('isMetaclass%0A%09%5Etrue%0A')}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function () {
    var self = this;
    return self._instanceClass()._name().__comma(" class");
    return self;
},
source: unescape('printString%0A%09%5Eself%20instanceClass%20name%2C%20%27%20class%27%0A')}),
smalltalk.Metaclass);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
category: 'accessing',
fn: function () {
    var self = this;
    return self._basicAt_("source")._ifNil_(function () {return "";});
    return self;
},
source: unescape('source%0A%09%5E%28self%20basicAt%3A%20%27source%27%29%20ifNil%3A%20%5B%27%27%5D%0A')}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    self._basicAt_put_("source", aString);
    return self;
},
source: unescape('source%3A%20aString%0A%09self%20basicAt%3A%20%27source%27%20put%3A%20aString%0A')}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_category',
smalltalk.method({
selector: 'category',
category: 'accessing',
fn: function () {
    var self = this;
    return self._basicAt_("category")._ifNil_(function () {return "";});
    return self;
},
source: unescape('category%0A%09%5E%28self%20basicAt%3A%20%27category%27%29%20ifNil%3A%20%5B%27%27%5D%0A')}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_category_',
smalltalk.method({
selector: 'category:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    self._basicAt_put_("category", aString);
    return self;
},
source: unescape('category%3A%20aString%0A%09self%20basicAt%3A%20%27category%27%20put%3A%20aString%0A')}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
category: 'accessing',
fn: function () {
    var self = this;
    return self._basicAt_("selector");
    return self;
},
source: unescape('selector%0A%09%5Eself%20basicAt%3A%20%27selector%27%0A')}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    self._basicAt_put_("selector", aString);
    return self;
},
source: unescape('selector%3A%20aString%0A%09self%20basicAt%3A%20%27selector%27%20put%3A%20aString%0A')}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_fn',
smalltalk.method({
selector: 'fn',
category: 'accessing',
fn: function () {
    var self = this;
    return self._basicAt_("fn");
    return self;
},
source: unescape('fn%0A%09%5Eself%20basicAt%3A%20%27fn%27%0A')}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_fn_',
smalltalk.method({
selector: 'fn:',
category: 'accessing',
fn: function (aBlock) {
    var self = this;
    self._basicAt_put_("fn", aBlock);
    return self;
},
source: unescape('fn%3A%20aBlock%0A%09self%20basicAt%3A%20%27fn%27%20put%3A%20aBlock%0A')}),
smalltalk.CompiledMethod);



smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return function () {return Number(self) == aNumber;}();
    return self;
},
source: unescape('%3D%20aNumber%0A%09%5E%7B%27return%20Number%28self%29%20%3D%3D%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return function () {return self > aNumber;}();
    return self;
},
source: unescape('%3E%20aNumber%0A%09%5E%7B%27return%20self%20%3E%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return function () {return self < aNumber;}();
    return self;
},
source: unescape('%3C%20aNumber%0A%09%5E%7B%27return%20self%20%3C%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return function () {return self >= aNumber;}();
    return self;
},
source: unescape('%3E%3D%20aNumber%0A%09%5E%7B%27return%20self%20%3E%3D%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return function () {return self <= aNumber;}();
    return self;
},
source: unescape('%3C%3D%20aNumber%0A%09%5E%7B%27return%20self%20%3C%3D%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__plus',
smalltalk.method({
selector: '+',
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return function () {return self + aNumber;}();
    return self;
},
source: unescape('+%20aNumber%0A%09%5E%7B%27return%20self%20+%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__minus',
smalltalk.method({
selector: '-',
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return function () {return self - aNumber;}();
    return self;
},
source: unescape('-%20aNumber%0A%09%5E%7B%27return%20self%20-%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__star',
smalltalk.method({
selector: '*',
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return function () {return self * aNumber;}();
    return self;
},
source: unescape('*%20aNumber%0A%09%5E%7B%27return%20self%20*%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return function () {return self / aNumber;}();
    return self;
},
source: unescape('/%20aNumber%0A%09%5E%7B%27return%20self%20/%20aNumber%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_max_',
smalltalk.method({
selector: 'max:',
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return function () {return Math.max(self, aNumber);}();
    return self;
},
source: unescape('max%3A%20aNumber%0A%09%5E%7B%27return%20Math.max%28self%2C%20aNumber%29%3B%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_min_',
smalltalk.method({
selector: 'min:',
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return function () {return Math.min(self, aNumber);}();
    return self;
},
source: unescape('min%3A%20aNumber%0A%09%5E%7B%27return%20Math.min%28self%2C%20aNumber%29%3B%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_rounded',
smalltalk.method({
selector: 'rounded',
category: 'converting',
fn: function () {
    var self = this;
    return function () {return Math.round(self);}();
    return self;
},
source: unescape('rounded%0A%09%5E%7B%27return%20Math.round%28self%29%3B%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_truncated',
smalltalk.method({
selector: 'truncated',
category: 'converting',
fn: function () {
    var self = this;
    return function () {return Math.floor(self);}();
    return self;
},
source: unescape('truncated%0A%09%5E%7B%27return%20Math.floor%28self%29%3B%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_to_',
smalltalk.method({
selector: 'to:',
category: 'converting',
fn: function (aNumber) {
    var self = this;
    var array = nil;
    var first = nil;
    var last = nil;
    var count = nil;
    first = self._truncated();
    last = aNumber._truncated().__plus(1);
    count = 1;
    first.__lt_eq(last)._ifFalse_(function () {return self._error_("Wrong interval");});
    array = smalltalk.Array._new();
    last.__minus(first)._timesRepeat_(function () {array._at_put_(count, first);count = count.__plus(1);return first = first.__plus(1);});
    return array;
    return self;
},
source: unescape('to%3A%20aNumber%0A%09%7C%20array%20first%20last%20count%20%7C%0A%09first%20%3A%3D%20self%20truncated.%0A%09last%20%3A%3D%20aNumber%20truncated%20+%201.%0A%09count%20%3A%3D%201.%0A%09%28first%20%3C%3D%20last%29%20ifFalse%3A%20%5Bself%20error%3A%20%27Wrong%20interval%27%5D.%0A%09array%20%3A%3D%20Array%20new.%0A%09%28last%20-%20first%29%20timesRepeat%3A%20%5B%0A%09%20%20%20%20array%20at%3A%20count%20put%3A%20first.%0A%09%20%20%20%20count%20%3A%3D%20count%20+%201.%0A%09%20%20%20%20first%20%3A%3D%20first%20+%201%5D.%0A%09%5Earray%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_timesRepeat_',
smalltalk.method({
selector: 'timesRepeat:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    var integer = nil;
    var count = nil;
    integer = self._truncated();
    count = 1;
    (function () {return count.__gt(self);}._whileFalse_(function () {aBlock._value();return count = count.__plus(1);}));
    return self;
},
source: unescape('timesRepeat%3A%20aBlock%0A%09%7C%20integer%20count%20%7C%0A%09integer%20%3A%3D%20self%20truncated.%0A%09count%20%3A%3D%201.%0A%09%5Bcount%20%3E%20self%5D%20whileFalse%3A%20%5B%0A%09%20%20%20%20aBlock%20value.%0A%09%20%20%20%20count%20%3A%3D%20count%20+%201%5D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_to_do_',
smalltalk.method({
selector: 'to:do:',
category: 'enumerating',
fn: function (aNumber, aBlock) {
    var self = this;
    return self._to_(aNumber)._do_(aBlock);
    return self;
},
source: unescape('to%3A%20aNumber%20do%3A%20aBlock%0A%09%5E%28self%20to%3A%20aNumber%29%20do%3A%20aBlock%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'converting',
fn: function () {
    var self = this;
    return self._printString();
    return self;
},
source: unescape('asString%0A%09%5Eself%20printString%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
category: 'converting',
fn: function () {
    var self = this;
    return unescape("%28").__comma(self._printString()).__comma(unescape("%29"));
    return self;
},
source: unescape('asJavascript%0A%09%5E%27%28%27%2C%20self%20printString%2C%20%27%29%27%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function () {
    var self = this;
    return function () {return String(self);}();
    return self;
},
source: unescape('printString%0A%09%5E%7B%27return%20String%28self%29%27%7D%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_isNumber',
smalltalk.method({
selector: 'isNumber',
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
source: unescape('isNumber%0A%09%5Etrue%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'_atRandom',
smalltalk.method({
selector: 'atRandom',
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.Random._new()._next().__star(self)._truncated().__plus(1);
    return self;
},
source: unescape('atRandom%0A%20%20%20%20%5E%28Random%20new%20next%20*%20self%29%20truncated%20+%201%0A')}),
smalltalk.Number);

smalltalk.addMethod(
'__at',
smalltalk.method({
selector: '@',
category: 'converting',
fn: function (aNumber) {
    var self = this;
    return smalltalk.Point._x_y_(self, aNumber);
    return self;
},
source: unescape('@%20aNumber%0A%09%5EPoint%20x%3A%20self%20y%3A%20aNumber')}),
smalltalk.Number);

smalltalk.addMethod(
'_asPoint',
smalltalk.method({
selector: 'asPoint',
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.Point._x_y_(self, self);
    return self;
},
source: unescape('asPoint%0A%09%5EPoint%20x%3A%20self%20y%3A%20self')}),
smalltalk.Number);

smalltalk.addMethod(
'_clearInterval',
smalltalk.method({
selector: 'clearInterval',
category: 'intervals',
fn: function () {
    var self = this;
    (function () {clearInterval(Number(self));}());
    return self;
},
source: unescape('clearInterval%0A%09%7B%27clearInterval%28Number%28self%29%29%27%7D')}),
smalltalk.Number);


smalltalk.addMethod(
'_pi',
smalltalk.method({
selector: 'pi',
category: 'instance creation',
fn: function () {
    var self = this;
    return function () {return Math.PI;}();
    return self;
},
source: unescape('pi%0A%09%5E%7B%27return%20Math.PI%27%7D')}),
smalltalk.Number.klass);


smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_compiledSource',
smalltalk.method({
selector: 'compiledSource',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.toString();}();
    return self;
},
source: unescape('compiledSource%0A%09%5E%7B%27return%20self.toString%28%29%27%7D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileTrue_',
smalltalk.method({
selector: 'whileTrue:',
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    (function () {while (self()) {aBlock();}}());
    return self;
},
source: unescape('whileTrue%3A%20aBlock%0A%09%7B%27while%28self%28%29%29%20%7BaBlock%28%29%7D%27%7D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileFalse_',
smalltalk.method({
selector: 'whileFalse:',
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    (function () {while (!self()) {aBlock();}}());
    return self;
},
source: unescape('whileFalse%3A%20aBlock%0A%09%7B%27while%28%21self%28%29%29%20%7BaBlock%28%29%7D%27%7D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
category: 'evaluating',
fn: function () {
    var self = this;
    return function () {return self();}();
    return self;
},
source: unescape('value%0A%09%5E%7B%27return%20self%28%29%3B%27%7D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
category: 'evaluating',
fn: function (anArg) {
    var self = this;
    return function () {return self(anArg);}();
    return self;
},
source: unescape('value%3A%20anArg%0A%09%5E%7B%27return%20self%28anArg%29%3B%27%7D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_value_',
smalltalk.method({
selector: 'value:value:',
category: 'evaluating',
fn: function (firstArg, secondArg) {
    var self = this;
    return function () {return self(firstArg, secondArg);}();
    return self;
},
source: unescape('value%3A%20firstArg%20value%3A%20secondArg%0A%09%5E%7B%27return%20self%28firstArg%2C%20secondArg%29%3B%27%7D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_value_value_',
smalltalk.method({
selector: 'value:value:value:',
category: 'evaluating',
fn: function (firstArg, secondArg, thirdArg) {
    var self = this;
    return function () {return self(firstArg, secondArg, thirdArg);}();
    return self;
},
source: unescape('value%3A%20firstArg%20value%3A%20secondArg%20value%3A%20thirdArg%0A%09%5E%7B%27return%20self%28firstArg%2C%20secondArg%2C%20thirdArg%29%3B%27%7D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithPossibleArguments_',
smalltalk.method({
selector: 'valueWithPossibleArguments:',
category: 'evaluating',
fn: function (aCollection) {
    var self = this;
    return function () {return self.apply(null, aCollection);}();
    return self;
},
source: unescape('valueWithPossibleArguments%3A%20aCollection%0A%09%5E%7B%27return%20self.apply%28null%2C%20aCollection%29%3B%27%7D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_on_do_',
smalltalk.method({
selector: 'on:do:',
category: 'error handling',
fn: function (anErrorClass, aBlock) {
    var self = this;
    self._try_catch_(self, function (error) {return error._isKindOf_(anErrorClass)._ifTrue_ifFalse_(function () {return aBlock._value();}, function () {return error._signal();});});
    return self;
},
source: unescape('on%3A%20anErrorClass%20do%3A%20aBlock%0A%09self%20try%3A%20self%20catch%3A%20%5B%3Aerror%20%7C%0A%09%20%20%20%20%28error%20isKindOf%3A%20anErrorClass%29%20%0A%09%20%20%20%20%20ifTrue%3A%20%5BaBlock%20value%5D%0A%09%20%20%20%20%20ifFalse%3A%20%5Berror%20signal%5D%5D%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
category: '*JQuery',
fn: function (aJQuery) {
    var self = this;
    var canvas = nil;
    canvas = smalltalk.HTMLCanvas._new();
    self._value_(canvas);
    aJQuery._append_(canvas);
    return self;
},
source: unescape('appendToJQuery%3A%20aJQuery%0A%09%7C%20canvas%20%7C%0A%09canvas%20%3A%3D%20HTMLCanvas%20new.%0A%09self%20value%3A%20canvas.%0A%09aJQuery%20append%3A%20canvas%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: '*Canvas',
fn: function (aTagBrush) {
    var self = this;
    aTagBrush._appendBlock_(self);
    return self;
},
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20aTagBrush%20appendBlock%3A%20self%0A')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithTimeout_',
smalltalk.method({
selector: 'valueWithTimeout:',
category: 'timeout/interval',
fn: function (aNumber) {
    var self = this;
    (function () {setTimeout(self, aNumber);}());
    return self;
},
source: unescape('valueWithTimeout%3A%20aNumber%0A%09%7B%27setTimeout%28self%2C%20aNumber%29%27%7D')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithInterval_',
smalltalk.method({
selector: 'valueWithInterval:',
category: 'timeout/interval',
fn: function (aNumber) {
    var self = this;
    return function () {return setInterval(self, aNumber);}();
    return self;
},
source: unescape('valueWithInterval%3A%20aNumber%0A%09%5E%7B%27return%20setInterval%28self%2C%20aNumber%29%27%7D')}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_ensure_',
smalltalk.method({
selector: 'ensure:',
category: 'evaluating',
fn: function (aBlock) {
    var self = this;
    (function () {var success = true;try {self();} catch (e) {success = false;aBlock();throw e;}if (success) {aBlock();}}());
    return self;
},
source: unescape('ensure%3A%20aBlock%0A%09%22Evaluate%20a%20termination%20block%20after%20evaluating%20the%20receiver%2C%20regardless%20of%0A%09%20whether%20the%20receiver%27s%20evaluation%20completes.%22%0A%09%7B%27%0A%09%09var%20success%20%3D%20true%3B%0A%09%09try%7Bself%28%29%7D%20catch%28e%29%20%7B%0A%09%09%09success%20%3D%20false%3B%0A%09%09%09aBlock%28%29%3B%0A%09%09%09throw%28e%29%7D%0A%09%09if%28success%29%7BaBlock%28%29%7D%0A%09%27%7D')}),
smalltalk.BlockClosure);



smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (aBoolean) {
    var self = this;
    return function () {return Boolean(self == true) == aBoolean;}();
    return self;
},
source: unescape('%3D%20aBoolean%0A%20%20%20%20%09%5E%7B%27return%20Boolean%28self%20%3D%3D%20true%29%20%3D%3D%20aBoolean%27%7D%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function () {
    var self = this;
    return self;
    return self;
},
source: unescape('shallowCopy%0A%09%5Eself%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function () {
    var self = this;
    return self;
    return self;
},
source: unescape('deepCopy%0A%09%5Eself%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifTrue_',
smalltalk.method({
selector: 'ifTrue:',
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    return self._ifTrue_ifFalse_(aBlock, function () {return nil;});
    return self;
},
source: unescape('ifTrue%3A%20aBlock%0A%09%5Eself%20ifTrue%3A%20aBlock%20ifFalse%3A%20%5B%5D%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifFalse_',
smalltalk.method({
selector: 'ifFalse:',
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    return self._ifTrue_ifFalse_(function () {return nil;}, aBlock);
    return self;
},
source: unescape('ifFalse%3A%20aBlock%0A%09%5Eself%20ifTrue%3A%20%5B%5D%20ifFalse%3A%20aBlock%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifFalse_ifTrue_',
smalltalk.method({
selector: 'ifFalse:ifTrue:',
category: 'controlling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return self._ifTrue_ifFalse_(anotherBlock, aBlock);
    return self;
},
source: unescape('ifFalse%3A%20aBlock%20ifTrue%3A%20anotherBlock%0A%09%5Eself%20ifTrue%3A%20anotherBlock%20ifFalse%3A%20aBlock%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifTrue_ifFalse_',
smalltalk.method({
selector: 'ifTrue:ifFalse:',
category: 'controlling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return function () {if (self == true) {return aBlock();} else {return anotherBlock();}}();
    return self;
},
source: unescape('ifTrue%3A%20aBlock%20ifFalse%3A%20anotherBlock%0A%09%5E%7B%27%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20aBlock%28%29%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20anotherBlock%28%29%3B%0A%09%20%20%20%20%7D%0A%09%27%7D%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_and_',
smalltalk.method({
selector: 'and:',
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    return self.__eq(true)._ifTrue_ifFalse_(aBlock, function () {return false;});
    return self;
},
source: unescape('and%3A%20aBlock%0A%09%5Eself%20%3D%20true%0A%09%20%20%20%20ifTrue%3A%20aBlock%0A%09%20%20%20%20ifFalse%3A%20%5Bfalse%5D%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_or_',
smalltalk.method({
selector: 'or:',
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    return self.__eq(true)._ifTrue_ifFalse_(function () {return true;}, aBlock);
    return self;
},
source: unescape('or%3A%20aBlock%0A%09%5Eself%20%3D%20true%0A%09%20%20%20%20ifTrue%3A%20%5Btrue%5D%0A%09%20%20%20%20ifFalse%3A%20aBlock%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_not',
smalltalk.method({
selector: 'not',
category: 'controlling',
fn: function () {
    var self = this;
    return self.__eq(false);
    return self;
},
source: unescape('not%0A%09%5Eself%20%3D%20false%0A')}),
smalltalk.Boolean);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function () {
    var self = this;
    return function () {return self.toString();}();
    return self;
},
source: unescape('printString%0A%09%5E%7B%27return%20self.toString%28%29%27%7D%0A')}),
smalltalk.Boolean);



smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_subclass_instanceVariableNames_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:',
category: 'class creation',
fn: function (aString, anotherString) {
    var self = this;
    return self._subclass_instanceVariableNames_category_(aString, anotherString, nil);
    return self;
},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%20category%3A%20nil%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_subclass_instanceVariableNames_category_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:category:',
category: 'class creation',
fn: function (aString, aString2, aString3) {
    var self = this;
    return smalltalk.ClassBuilder._new()._superclass_subclass_instanceVariableNames_category_(self, aString, aString2, aString3);
    return self;
},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%5EClassBuilder%20new%0A%09%20%20%20%20superclass%3A%20self%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function () {
    var self = this;
    return self;
    return self;
},
source: unescape('shallowCopy%0A%09%5Eself%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function () {
    var self = this;
    return self;
    return self;
},
source: unescape('deepCopy%0A%09%5Eself%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNil_',
smalltalk.method({
selector: 'ifNil:',
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return self._ifNil_ifNotNil_(aBlock, function () {return nil;});
    return self;
},
source: unescape('ifNil%3A%20aBlock%0A%09%5Eself%20ifNil%3A%20aBlock%20ifNotNil%3A%20%5B%5D%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNotNil_',
smalltalk.method({
selector: 'ifNotNil:',
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return self;
    return self;
},
source: unescape('ifNotNil%3A%20aBlock%0A%09%5Eself%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNil_ifNotNil_',
smalltalk.method({
selector: 'ifNil:ifNotNil:',
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return aBlock._value();
    return self;
},
source: unescape('ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0A%09%5EaBlock%20value%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNotNil_ifNil_',
smalltalk.method({
selector: 'ifNotNil:ifNil:',
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return anotherBlock._value();
    return self;
},
source: unescape('ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0A%09%5EanotherBlock%20value%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_isNil',
smalltalk.method({
selector: 'isNil',
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
source: unescape('isNil%0A%09%5Etrue%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_notNil',
smalltalk.method({
selector: 'notNil',
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
source: unescape('notNil%0A%09%5Efalse%0A')}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function () {
    var self = this;
    return "nil";
    return self;
},
source: unescape('printString%0A%20%20%20%20%5E%27nil%27%0A')}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'instance creation',
fn: function () {
    var self = this;
    self._error_("You cannot create new instances of UndefinedObject. Use nil");
    return self;
},
source: unescape('new%0A%09%20%20%20%20self%20error%3A%20%27You%20cannot%20create%20new%20instances%20of%20UndefinedObject.%20Use%20nil%27%0A')}),
smalltalk.UndefinedObject.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function () {
    var self = this;
    self._subclassResponsibility();
    return self;
},
source: unescape('size%0A%09self%20subclassResponsibility%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
category: 'accessing',
fn: function (anIndex) {
    var self = this;
    return self._at_ifAbsent_(anIndex, function () {return self._errorNotFound();});
    return self;
},
source: unescape('at%3A%20anIndex%0A%09%5Eself%20at%3A%20anIndex%20ifAbsent%3A%20%5B%0A%09%20%20%20%20self%20errorNotFound%5D%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'accessing',
fn: function (anIndex, anObject) {
    var self = this;
    self._subclassResponsibility();
    return self;
},
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09self%20subclassResponsibility%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
category: 'accessing',
fn: function (anIndex, aBlock) {
    var self = this;
    self._subclassResponsibility();
    return self;
},
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%09self%20subclassResponsibility%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_first',
smalltalk.method({
selector: 'first',
category: 'accessing',
fn: function () {
    var self = this;
    return self._at_(1);
    return self;
},
source: unescape('first%0A%09%5Eself%20at%3A%201%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_second',
smalltalk.method({
selector: 'second',
category: 'accessing',
fn: function () {
    var self = this;
    return self._at_(2);
    return self;
},
source: unescape('second%0A%09%5Eself%20at%3A%202%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_third',
smalltalk.method({
selector: 'third',
category: 'accessing',
fn: function () {
    var self = this;
    return self._at_(3);
    return self;
},
source: unescape('third%0A%09%5Eself%20at%3A%203%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_fourth',
smalltalk.method({
selector: 'fourth',
category: 'accessing',
fn: function () {
    var self = this;
    return self._at_(4);
    return self;
},
source: unescape('fourth%0A%09%5Eself%20at%3A%204%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_last',
smalltalk.method({
selector: 'last',
category: 'accessing',
fn: function () {
    var self = this;
    return self._at_(self._size());
    return self;
},
source: unescape('last%0A%09%5Eself%20at%3A%20self%20size%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_readStream',
smalltalk.method({
selector: 'readStream',
category: 'accessing',
fn: function () {
    var self = this;
    return self._stream();
    return self;
},
source: unescape('readStream%0A%09%5Eself%20stream%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_writeStream',
smalltalk.method({
selector: 'writeStream',
category: 'accessing',
fn: function () {
    var self = this;
    return self._stream();
    return self;
},
source: unescape('writeStream%0A%09%5Eself%20stream%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_stream',
smalltalk.method({
selector: 'stream',
category: 'accessing',
fn: function () {
    var self = this;
    return self._streamClass()._on_(self);
    return self;
},
source: unescape('stream%0A%09%5Eself%20streamClass%20on%3A%20self%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
category: 'accessing',
fn: function () {
    var self = this;
    return self._class()._streamClass();
    return self;
},
source: unescape('streamClass%0A%09%5Eself%20class%20streamClass%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
category: 'adding/removing',
fn: function (anObject) {
    var self = this;
    self._subclassResponsibility();
    return self;
},
source: unescape('add%3A%20anObject%0A%09self%20subclassResponsibility%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_addAll_',
smalltalk.method({
selector: 'addAll:',
category: 'adding/removing',
fn: function (aCollection) {
    var self = this;
    aCollection._do_(function (each) {return self._add_(each);});
    return aCollection;
    return self;
},
source: unescape('addAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20add%3A%20each%5D.%0A%09%5EaCollection%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'copying',
fn: function (aCollection) {
    var self = this;
    return function ($rec) {$rec._addAll_(aCollection);return $rec._yourself();}(self._copy());
    return self;
},
source: unescape('%2C%20aCollection%0A%09%5Eself%20copy%20%0A%09%20%20%20%20addAll%3A%20aCollection%3B%20%0A%09%20%20%20%20yourself%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
category: 'copying',
fn: function (anIndex, anotherIndex) {
    var self = this;
    self._subclassResponsibility();
    return self;
},
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09self%20subclassResponsibility%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_copyWith_',
smalltalk.method({
selector: 'copyWith:',
category: 'copying',
fn: function (anObject) {
    var self = this;
    return function ($rec) {$rec._add_(anObject);return $rec._yourself();}(self._copy());
    return self;
},
source: unescape('copyWith%3A%20anObject%0A%09%5Eself%20copy%20add%3A%20anObject%3B%20yourself%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_copyWithAll_',
smalltalk.method({
selector: 'copyWithAll:',
category: 'copying',
fn: function (aCollection) {
    var self = this;
    return function ($rec) {$rec._addAll_(aCollection);return $rec._yourself();}(self._copy());
    return self;
},
source: unescape('copyWithAll%3A%20aCollection%0A%09%5Eself%20copy%20addAll%3A%20aCollection%3B%20yourself%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_asArray',
smalltalk.method({
selector: 'asArray',
category: 'converting',
fn: function () {
    var self = this;
    var array = nil;
    var index = nil;
    array = smalltalk.Array._new();
    index = 0;
    self._do_(function (each) {index = index.__plus(1);return array._at_put_(index, each);});
    return array;
    return self;
},
source: unescape('asArray%0A%09%7C%20array%20index%20%7C%0A%09array%20%3A%3D%20Array%20new.%0A%09index%20%3A%3D%200.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%20%20%20%20array%20at%3A%20index%20put%3A%20each%5D.%0A%09%5Earray%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    (function () {for (var i = 0; i < self.length; i++) {aBlock(self[i]);}}());
    return self;
},
source: unescape('do%3A%20aBlock%0A%09%7B%27for%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7BaBlock%28self%5Bi%5D%29%3B%7D%27%7D%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_collect_',
smalltalk.method({
selector: 'collect:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    var stream = nil;
    stream = self._class()._new()._writeStream();
    self._do_(function (each) {return stream._nextPut_(aBlock._value_(each));});
    return stream._contents();
    return self;
},
source: unescape('collect%3A%20aBlock%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20self%20class%20new%20writeStream.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20stream%20nextPut%3A%20%28aBlock%20value%3A%20each%29%5D.%0A%09%5Estream%20contents%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_detect_',
smalltalk.method({
selector: 'detect:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    return self._detect_ifNone_(aBlock, function () {return self._errorNotFound();});
    return self;
},
source: unescape('detect%3A%20aBlock%0A%09%5Eself%20detect%3A%20aBlock%20ifNone%3A%20%5Bself%20errorNotFound%5D%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
category: 'enumerating',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return function () {for (var i = 0; i < self.length; i++) {if (aBlock(self[i])) {return self[i];}}return anotherBlock();}();
    return self;
},
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%5E%7B%27%0A%09for%28var%20i%20%3D%200%3B%20i%20%3C%20self.length%3B%20i++%29%0A%09%09if%28aBlock%28self%5Bi%5D%29%29%0A%09%09%09return%20self%5Bi%5D%3B%0A%09return%20anotherBlock%28%29%3B%0A%09%27%7D%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_do_separatedBy_',
smalltalk.method({
selector: 'do:separatedBy:',
category: 'enumerating',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var first = nil;
    first = true;
    self._do_(function (each) {first._ifTrue_ifFalse_(function () {return first = false;}, function () {return anotherBlock._value();});return aBlock._value_(each);});
    return self;
},
source: unescape('do%3A%20aBlock%20separatedBy%3A%20anotherBlock%0A%20%20%20%20%09%7C%20first%20%7C%0A%20%20%20%20%09first%20%3A%3D%20true.%0A%20%20%20%20%09self%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%09%20%20%20%20first%0A%20%20%20%20%09%09ifTrue%3A%20%5Bfirst%20%3A%3D%20false%5D%0A%20%20%20%20%09%09ifFalse%3A%20%5BanotherBlock%20value%5D.%0A%20%20%20%20%09%20%20%20%20aBlock%20value%3A%20each%5D%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_inject_into_',
smalltalk.method({
selector: 'inject:into:',
category: 'enumerating',
fn: function (anObject, aBlock) {
    var self = this;
    var result = nil;
    result = anObject;
    self._do_(function (each) {return result = aBlock._value_value_(result, each);});
    return result;
    return self;
},
source: unescape('inject%3A%20anObject%20into%3A%20aBlock%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20anObject.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%20%20%20%20result%20%3A%3D%20aBlock%20value%3A%20result%20value%3A%20each%5D.%0A%09%5Eresult%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_reject_',
smalltalk.method({
selector: 'reject:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    return self._select_(function (each) {return aBlock._value_(each).__eq(false);});
    return self;
},
source: unescape('reject%3A%20aBlock%0A%09%5Eself%20select%3A%20%5B%3Aeach%20%7C%20%28aBlock%20value%3A%20each%29%20%3D%20false%5D%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_select_',
smalltalk.method({
selector: 'select:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    var stream = nil;
    stream = self._class()._new()._writeStream();
    self._do_(function (each) {return aBlock._value_(each)._ifTrue_(function () {return stream._nextPut_(each);});});
    return stream._contents();
    return self;
},
source: unescape('select%3A%20aBlock%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20self%20class%20new%20writeStream.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20%28aBlock%20value%3A%20each%29%20ifTrue%3A%20%5B%0A%09%09stream%20nextPut%3A%20each%5D%5D.%0A%09%5Estream%20contents%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_errorNotFound',
smalltalk.method({
selector: 'errorNotFound',
category: 'error handling',
fn: function () {
    var self = this;
    self._error_("Object is not in the collection");
    return self;
},
source: unescape('errorNotFound%0A%09self%20error%3A%20%27Object%20is%20not%20in%20the%20collection%27%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
category: 'testing',
fn: function (anObject) {
    var self = this;
    return function () {var i = self.length;while (i--) {if (self[i].__eq(anObject)) {return true;}}return false;}();
    return self;
},
source: unescape('includes%3A%20anObject%0A%09%5E%7B%27%0A%09%09var%20i%20%3D%20self.length%3B%0A%09%09while%20%28i--%29%20%7B%0A%09%09%09if%20%28self%5Bi%5D.__eq%28anObject%29%29%20%7B%0A%09%09%09%09return%20true%3B%0A%09%09%09%7D%09%0A%09%09%7D%0A%09%09return%20false%3B%0A%0A%09%27%7D%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_notEmpty',
smalltalk.method({
selector: 'notEmpty',
category: 'testing',
fn: function () {
    var self = this;
    return self._isEmpty()._not();
    return self;
},
source: unescape('notEmpty%0A%09%5Eself%20isEmpty%20not%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_isEmpty',
smalltalk.method({
selector: 'isEmpty',
category: 'testing',
fn: function () {
    var self = this;
    return self._size().__eq(0);
    return self;
},
source: unescape('isEmpty%0A%09%5Eself%20size%20%3D%200%0A')}),
smalltalk.Collection);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
category: 'adding/removing',
fn: function (anObject) {
    var self = this;
    self._subclassResponsibility();
    return self;
},
source: unescape('remove%3A%20anObject%0A%20%20%20%20self%20subclassResponsibility%0A')}),
smalltalk.Collection);


smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.Stream;
    return self;
},
source: unescape('streamClass%0A%09%20%20%20%20%5EStream%0A')}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
category: 'instance creation',
fn: function (anObject) {
    var self = this;
    return function ($rec) {$rec._add_(anObject);return $rec._yourself();}(self._new());
    return self;
},
source: unescape('with%3A%20anObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20anObject%3B%0A%09%09yourself%0A')}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_with_',
smalltalk.method({
selector: 'with:with:',
category: 'instance creation',
fn: function (anObject, anotherObject) {
    var self = this;
    return function ($rec) {$rec._add_(anObject);$rec._add_(anotherObject);return $rec._yourself();}(self._new());
    return self;
},
source: unescape('with%3A%20anObject%20with%3A%20anotherObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20anObject%3B%0A%09%09add%3A%20anotherObject%3B%0A%09%09yourself%0A')}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_with_with_',
smalltalk.method({
selector: 'with:with:with:',
category: 'instance creation',
fn: function (firstObject, secondObject, thirdObject) {
    var self = this;
    return function ($rec) {$rec._add_(firstObject);$rec._add_(secondObject);$rec._add_(thirdObject);return $rec._yourself();}(self._new());
    return self;
},
source: unescape('with%3A%20firstObject%20with%3A%20secondObject%20with%3A%20thirdObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20firstObject%3B%0A%09%09add%3A%20secondObject%3B%0A%09%09add%3A%20thirdObject%3B%0A%09%09yourself%0A')}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_withAll_',
smalltalk.method({
selector: 'withAll:',
category: 'instance creation',
fn: function (aCollection) {
    var self = this;
    return function ($rec) {$rec._addAll_(aCollection);return $rec._yourself();}(self._new());
    return self;
},
source: unescape('withAll%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%0A%09%09addAll%3A%20aCollection%3B%0A%09%09yourself%0A')}),
smalltalk.Collection.klass);


smalltalk.addClass('String', smalltalk.Collection, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (aString) {
    var self = this;
    return function () {return String(self) == aString;}();
    return self;
},
source: unescape('%3D%20aString%0A%09%5E%7B%27return%20String%28self%29%20%3D%3D%20aString%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.length;}();
    return self;
},
source: unescape('size%0A%09%5E%7B%27return%20self.length%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
category: 'accessing',
fn: function (anIndex) {
    var self = this;
    return function () {return self[anIndex - 1] || nil;}();
    return self;
},
source: unescape('at%3A%20anIndex%0A%20%20%20%20%09%5E%7B%27return%20self%5BanIndex%20-%201%5D%20%7C%7C%20nil%3B%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'accessing',
fn: function (anIndex, anObject) {
    var self = this;
    self._errorReadOnly();
    return self;
},
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%20%20%20%20%09self%20errorReadOnly%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
category: 'accessing',
fn: function (anIndex, aBlock) {
    var self = this;
    self._at_(anIndex)._ifNil_(function () {return aBlock;});
    return self;
},
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%20%20%20%20%09%28self%20at%3A%20anIndex%29%20ifNil%3A%20%5BaBlock%5D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_escaped',
smalltalk.method({
selector: 'escaped',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return escape(self);}();
    return self;
},
source: unescape('escaped%0A%09%5E%7B%27return%20escape%28self%29%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_unescaped',
smalltalk.method({
selector: 'unescaped',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return unescape(self);}();
    return self;
},
source: unescape('unescaped%0A%09%5E%7B%27return%20unescape%28self%29%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    self._errorReadOnly();
    return self;
},
source: unescape('add%3A%20anObject%0A%20%20%20%20%09self%20errorReadOnly%0A')}),
smalltalk.String);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'copying',
fn: function (aString) {
    var self = this;
    return function () {return self + aString;}();
    return self;
},
source: unescape('%2C%20aString%0A%20%20%20%20%09%5E%7B%27return%20self%20+%20aString%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
category: 'copying',
fn: function (anIndex, anotherIndex) {
    var self = this;
    return function () {return self.substring(anIndex - 1, anotherIndex);}();
    return self;
},
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%20%20%20%20%09%5E%7B%27return%20self.substring%28anIndex%20-%201%2C%20anotherIndex%29%3B%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function () {
    var self = this;
    return self._class()._fromString_(self);
    return self;
},
source: unescape('shallowCopy%0A%20%20%20%20%09%5Eself%20class%20fromString%3A%20self%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function () {
    var self = this;
    return self._shallowCopy();
    return self;
},
source: unescape('deepCopy%0A%20%20%20%20%09%5Eself%20shallowCopy%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_asSelector',
smalltalk.method({
selector: 'asSelector',
category: 'converting',
fn: function () {
    var self = this;
    var selector = nil;
    selector = "_".__comma(self);
    selector = selector._replace_with_(":", "_");
    selector = selector._replace_with_(unescape("%5B+%5D"), "_plus");
    selector = selector._replace_with_(unescape("-"), "_minus");
    selector = selector._replace_with_(unescape("%5B*%5D"), "_star");
    selector = selector._replace_with_(unescape("%5B/%5D"), "_slash");
    selector = selector._replace_with_(unescape("%3E"), "_gt");
    selector = selector._replace_with_(unescape("%3C"), "_lt");
    selector = selector._replace_with_(unescape("%3D"), "_eq");
    selector = selector._replace_with_(unescape("%2C"), "_comma");
    selector = selector._replace_with_(unescape("%5B@%5D"), "_at");
    return selector;
    return self;
},
source: unescape('asSelector%0A%09%7C%20selector%20%7C%0A%09selector%20%3A%3D%20%27_%27%2C%20self.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3A%27%20with%3A%20%27_%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B+%5D%27%20with%3A%20%27_plus%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27-%27%20with%3A%20%27_minus%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B*%5D%27%20with%3A%20%27_star%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B/%5D%27%20with%3A%20%27_slash%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3E%27%20with%3A%20%27_gt%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3C%27%20with%3A%20%27_lt%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3D%27%20with%3A%20%27_eq%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%2C%27%20with%3A%20%27_comma%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B@%5D%27%20with%3A%20%27_at%27.%0A%09%5Eselector%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
category: 'converting',
fn: function () {
    var self = this;
    return function () {if (self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1) {return "unescape(\"" + escape(self) + "\")";} else {return "\"" + self + "\"";}}();
    return self;
},
source: unescape('asJavascript%0A%09%5E%7B%27%0A%09if%28self.search%28/%5E%5Ba-zA-Z0-9_%3A.%24%20%5D*%24/%29%20%3D%3D%20-1%29%0A%09%09return%20%22unescape%28%5C%22%22%20+%20escape%28self%29%20+%20%22%5C%22%29%22%3B%0A%09else%0A%09%09return%20%22%5C%22%22%20+%20self%20+%20%22%5C%22%22%3B%0A%09%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_replace_with_',
smalltalk.method({
selector: 'replace:with:',
category: 'regular expressions',
fn: function (aString, anotherString) {
    var self = this;
    return self._replaceRegexp_with_(smalltalk.RegularExpression._fromString_flag_(aString, "g"), anotherString);
    return self;
},
source: unescape('replace%3A%20aString%20with%3A%20anotherString%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20aString%20flag%3A%20%27g%27%29%20with%3A%20anotherString%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_replaceRegexp_with_',
smalltalk.method({
selector: 'replaceRegexp:with:',
category: 'regular expressions',
fn: function (aRegexp, aString) {
    var self = this;
    return function () {return self.replace(aRegexp, aString);}();
    return self;
},
source: unescape('replaceRegexp%3A%20aRegexp%20with%3A%20aString%0A%20%20%20%20%09%5E%7B%27return%20self.replace%28aRegexp%2C%20aString%29%3B%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_tokenize_',
smalltalk.method({
selector: 'tokenize:',
category: 'converting',
fn: function (aString) {
    var self = this;
    return function () {return self.split(aString);}();
    return self;
},
source: unescape('tokenize%3A%20aString%0A%09%5E%7B%27return%20self.split%28aString%29%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_match_',
smalltalk.method({
selector: 'match:',
category: 'regular expressions',
fn: function (aRegexp) {
    var self = this;
    return function () {return self.search(aRegexp) != -1;}();
    return self;
},
source: unescape('match%3A%20aRegexp%0A%20%20%20%20%09%5E%7B%27return%20self.search%28aRegexp%29%20%21%3D%20-1%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'converting',
fn: function () {
    var self = this;
    return self;
    return self;
},
source: unescape('asString%0A%20%20%20%20%09%5Eself%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_asNumber',
smalltalk.method({
selector: 'asNumber',
category: 'converting',
fn: function () {
    var self = this;
    return function () {return Number(self);}();
    return self;
},
source: unescape('asNumber%0A%09%5E%7B%27return%20Number%28self%29%3B%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_asParser',
smalltalk.method({
selector: 'asParser',
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.PPStringParser._new()._string_(self);
    return self;
},
source: unescape('asParser%0A%20%20%20%20%09%5EPPStringParser%20new%20string%3A%20self%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_asChoiceParser',
smalltalk.method({
selector: 'asChoiceParser',
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.PPChoiceParser._withAll_(self._asArray()._collect_(function (each) {return each._asParser();}));
    return self;
},
source: unescape('asChoiceParser%0A%20%20%20%20%09%5EPPChoiceParser%20withAll%3A%20%28self%20asArray%20collect%3A%20%5B%3Aeach%20%7C%20each%20asParser%5D%29%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_asCharacterParser',
smalltalk.method({
selector: 'asCharacterParser',
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.PPCharacterParser._new()._string_(self);
    return self;
},
source: unescape('asCharacterParser%0A%20%20%20%20%09%5EPPCharacterParser%20new%20string%3A%20self%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_errorReadOnly',
smalltalk.method({
selector: 'errorReadOnly',
category: 'error handling',
fn: function () {
    var self = this;
    self._error_(unescape("Object%20is%20read-only"));
    return self;
},
source: unescape('errorReadOnly%0A%20%20%20%20%09self%20error%3A%20%27Object%20is%20read-only%27%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function () {
    var self = this;
    return unescape("%27").__comma(self).__comma(unescape("%27"));
    return self;
},
source: unescape('printString%0A%20%20%20%20%09%5E%27%27%27%27%2C%20self%2C%20%27%27%27%27%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_printNl',
smalltalk.method({
selector: 'printNl',
category: 'printing',
fn: function () {
    var self = this;
    (function () {console.log(self);}());
    return self;
},
source: unescape('printNl%0A%09%7B%27console.log%28self%29%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_isString',
smalltalk.method({
selector: 'isString',
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
source: unescape('isString%0A%20%20%20%20%09%5Etrue%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_asJQuery',
smalltalk.method({
selector: 'asJQuery',
category: '*JQuery',
fn: function () {
    var self = this;
    return smalltalk.JQuery._fromString_(self);
    return self;
},
source: unescape('asJQuery%0A%20%20%20%20%5EJQuery%20fromString%3A%20self%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
category: '*JQuery',
fn: function (aJQuery) {
    var self = this;
    (function () {aJQuery._appendElement_(String(self));}());
    return self;
},
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20%7B%27aJQuery._appendElement_%28String%28self%29%29%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: '*Canvas',
fn: function (aTagBrush) {
    var self = this;
    aTagBrush._appendString_(self);
    return self;
},
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20aTagBrush%20appendString%3A%20self%0A')}),
smalltalk.String);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
category: 'comparing',
fn: function (aString) {
    var self = this;
    return function () {return String(self) > aString;}();
    return self;
},
source: unescape('%3E%20aString%0A%09%5E%7B%27return%20String%28self%29%20%3E%20aString%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
category: 'comparing',
fn: function (aString) {
    var self = this;
    return function () {return String(self) < aString;}();
    return self;
},
source: unescape('%3C%20aString%0A%09%5E%7B%27return%20String%28self%29%20%3C%20aString%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
category: 'comparing',
fn: function (aString) {
    var self = this;
    return function () {return String(self) >= aString;}();
    return self;
},
source: unescape('%3E%3D%20aString%0A%09%5E%7B%27return%20String%28self%29%20%3E%3D%20aString%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
category: 'comparing',
fn: function (aString) {
    var self = this;
    return function () {return String(self) <= aString;}();
    return self;
},
source: unescape('%3C%3D%20aString%0A%09%5E%7B%27return%20String%28self%29%20%3C%3D%20aString%27%7D%0A')}),
smalltalk.String);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    self._errorReadOnly();
    return self;
},
source: unescape('remove%3A%20anObject%0A%20%20%20%20self%20errorReadOnly%0A')}),
smalltalk.String);


smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.StringStream;
    return self;
},
source: unescape('streamClass%0A%09%20%20%20%20%5EStringStream%0A')}),
smalltalk.String.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
category: 'instance creation',
fn: function (aString) {
    var self = this;
    return function () {return new self.fn(aString);}();
    return self;
},
source: unescape('fromString%3A%20aString%0A%09%20%20%20%20%5E%7B%27return%20new%20self.fn%28aString%29%3B%27%7D%0A')}),
smalltalk.String.klass);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return "\n";}();
    return self;
},
source: unescape('cr%0A%09%20%20%20%20%5E%7B%27%7Breturn%20%27%27%5Cn%27%27%7D%3B%27%7D%0A')}),
smalltalk.String.klass);

smalltalk.addMethod(
'_lf',
smalltalk.method({
selector: 'lf',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return "\r";}();
    return self;
},
source: unescape('lf%0A%09%20%20%20%20%5E%7B%27return%20%27%27%5Cr%27%27%3B%27%7D%0A')}),
smalltalk.String.klass);

smalltalk.addMethod(
'_space',
smalltalk.method({
selector: 'space',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return " ";}();
    return self;
},
source: unescape('space%0A%09%20%20%20%20%5E%7B%27return%20%27%27%20%27%27%3B%27%7D%0A')}),
smalltalk.String.klass);

smalltalk.addMethod(
'_tab',
smalltalk.method({
selector: 'tab',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return "\t";}();
    return self;
},
source: unescape('tab%0A%09%20%20%20%20%5E%7B%27return%20%27%27%5Ct%27%27%3B%27%7D%0A')}),
smalltalk.String.klass);


smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_compile_',
smalltalk.method({
selector: 'compile:',
category: 'evaluating',
fn: function (aString) {
    var self = this;
    return function () {return self.compile(aString);}();
    return self;
},
source: unescape('compile%3A%20aString%0A%09%5E%7B%27return%20self.compile%28aString%29%3B%27%7D%0A')}),
smalltalk.RegularExpression);

smalltalk.addMethod(
'_exec_',
smalltalk.method({
selector: 'exec:',
category: 'evaluating',
fn: function (aString) {
    var self = this;
    return function () {return self.exec(aString);}();
    return self;
},
source: unescape('exec%3A%20aString%0A%09%5E%7B%27return%20self.exec%28aString%29%3B%27%7D%0A')}),
smalltalk.RegularExpression);

smalltalk.addMethod(
'_test_',
smalltalk.method({
selector: 'test:',
category: 'evaluating',
fn: function (aString) {
    var self = this;
    return function () {return self.test(aString);}();
    return self;
},
source: unescape('test%3A%20aString%0A%09%5E%7B%27return%20self.test%28aString%29%3B%27%7D%0A')}),
smalltalk.RegularExpression);


smalltalk.addMethod(
'_fromString_flag_',
smalltalk.method({
selector: 'fromString:flag:',
category: 'instance creation',
fn: function (aString, anotherString) {
    var self = this;
    return function () {return new RegExp(aString, anotherString);}();
    return self;
},
source: unescape('fromString%3A%20aString%20flag%3A%20anotherString%0A%09%20%20%20%20%5E%7B%27return%20new%20RegExp%28aString%2C%20anotherString%29%3B%27%7D%0A')}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
category: 'instance creation',
fn: function (aString) {
    var self = this;
    return self._fromString_flag_(aString, "");
    return self;
},
source: unescape('fromString%3A%20aString%0A%09%20%20%20%20%5Eself%20fromString%3A%20aString%20flag%3A%20%27%27%0A')}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Array', smalltalk.Collection, [], 'Kernel');
smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return self.length;}();
    return self;
},
source: unescape('size%0A%09%5E%7B%27return%20self.length%27%7D%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'accessing',
fn: function (anIndex, anObject) {
    var self = this;
    return function () {return self[anIndex - 1] = anObject;}();
    return self;
},
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09%5E%7B%27return%20self%5BanIndex%20-%201%5D%20%3D%20anObject%27%7D%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
category: 'accessing',
fn: function (anIndex, aBlock) {
    var self = this;
    return function () {var value = self[anIndex - 1];if (value === undefined) {return aBlock();} else {return value;}}();
    return self;
},
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%09%5E%7B%27%0A%09%20%20%20%20var%20value%20%3D%20self%5BanIndex%20-%201%5D%3B%0A%09%20%20%20%20if%28value%20%3D%3D%3D%20undefined%29%20%7B%0A%09%09return%20aBlock%28%29%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20value%3B%0A%09%20%20%20%20%7D%0A%09%27%7D%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    return function () {self.push(anObject);return anObject;}();
    return self;
},
source: unescape('add%3A%20anObject%0A%09%5E%7B%27self.push%28anObject%29%3B%20return%20anObject%3B%27%7D%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_addLast_',
smalltalk.method({
selector: 'addLast:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    return self._add_(anObject);
    return self;
},
source: unescape('addLast%3A%20anObject%0A%09%5Eself%20add%3A%20anObject%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function () {
    var self = this;
    var newCollection = nil;
    newCollection = self._class()._new();
    self._do_(function (each) {return newCollection._add_(each);});
    return newCollection;
    return self;
},
source: unescape('shallowCopy%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20newCollection%20add%3A%20each%5D.%0A%09%5EnewCollection%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function () {
    var self = this;
    var newCollection = nil;
    newCollection = self._class()._new();
    self._do_(function (each) {return newCollection._add_(each._deepCopy());});
    return newCollection;
    return self;
},
source: unescape('deepCopy%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20newCollection%20add%3A%20each%20deepCopy%5D.%0A%09%5EnewCollection%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
category: 'copying',
fn: function (anIndex, anotherIndex) {
    var self = this;
    var array = nil;
    array = self._class()._new();
    anIndex._to_do_(anotherIndex, function (each) {return array._add_(self._at_(each));});
    return array;
    return self;
},
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09%7C%20array%20%7C%0A%09array%20%3A%3D%20self%20class%20new.%0A%09anIndex%20to%3A%20anotherIndex%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20array%20add%3A%20%28self%20at%3A%20each%29%5D.%0A%09%5Earray%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_join_',
smalltalk.method({
selector: 'join:',
category: 'enumerating',
fn: function (aString) {
    var self = this;
    return function () {return self.join(aString);}();
    return self;
},
source: unescape('join%3A%20aString%0A%09%5E%7B%27return%20self.join%28aString%29%3B%27%7D%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
category: 'converting',
fn: function () {
    var self = this;
    return unescape("%5B").__comma(self._collect_(function (each) {return each._asJavascript();})._join_(unescape("%2C%20"))).__comma(unescape("%5D"));
    return self;
},
source: unescape('asJavascript%0A%09%5E%27%5B%27%2C%20%28%28self%20collect%3A%20%5B%3Aeach%20%7C%20each%20asJavascript%5D%29%20join%3A%20%27%2C%20%27%29%2C%20%20%27%5D%27%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_sort',
smalltalk.method({
selector: 'sort',
category: 'enumerating',
fn: function () {
    var self = this;
    return self._copy()._basicPerform_("sort");
    return self;
},
source: unescape('sort%0A%20%20%20%20%5Eself%20copy%20basicPerform%3A%20%27sort%27%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_sort_',
smalltalk.method({
selector: 'sort:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    return self._copy()._basicPerform_withArguments_("sort", smalltalk.Array._with_(aBlock));
    return self;
},
source: unescape('sort%3A%20aBlock%0A%20%20%20%20%5Eself%20copy%20basicPerform%3A%20%27sort%27%20withArguments%3A%20%28Array%20with%3A%20aBlock%29%0A')}),
smalltalk.Array);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    (function () {for (var i = 0; i < self.length; i++) {if (self[i] == anObject) {self.splice(i, 1);break;}}}());
    return self;
},
source: unescape('remove%3A%20anObject%0A%20%20%20%20%7B%27for%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%20%7B%0A%09if%28self%5Bi%5D%20%3D%3D%20anObject%29%20%7B%0A%09%09self.splice%28i%2C1%29%3B%0A%09%09break%3B%0A%09%7D%0A%20%20%20%20%7D%27%7D%0A')}),
smalltalk.Array);



smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel');
smalltalk.addMethod(
'_messageText',
smalltalk.method({
selector: 'messageText',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@messageText'];
    return self;
},
source: unescape('messageText%0A%09%5EmessageText%0A')}),
smalltalk.Error);

smalltalk.addMethod(
'_messageText_',
smalltalk.method({
selector: 'messageText:',
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@messageText'] = aString;
    return self;
},
source: unescape('messageText%3A%20aString%0A%09messageText%20%3A%3D%20aString%0A')}),
smalltalk.Error);

smalltalk.addMethod(
'_signal',
smalltalk.method({
selector: 'signal',
category: 'signaling',
fn: function () {
    var self = this;
    return function () {throw {smalltalkError: self};}();
    return self;
},
source: unescape('signal%0A%09%5E%7B%27throw%28%7BsmalltalkError%3A%20self%7D%29%27%7D%0A')}),
smalltalk.Error);


smalltalk.addMethod(
'_signal_',
smalltalk.method({
selector: 'signal:',
category: 'instance creation',
fn: function (aString) {
    var self = this;
    return function ($rec) {$rec._messageText_(aString);return $rec._signal();}(self._new());
    return self;
},
source: unescape('signal%3A%20aString%0A%09%20%20%20%20%5Eself%20new%0A%09%09messageText%3A%20aString%3B%0A%09%09signal%0A')}),
smalltalk.Error.klass);


smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (anAssociation) {
    var self = this;
    return self._class().__eq(anAssociation._class())._and_(function () {return self._key().__eq(anAssociation._key())._and_(function () {return self._value().__eq(anAssociation._value());});});
    return self;
},
source: unescape('%3D%20anAssociation%0A%09%5Eself%20class%20%3D%20anAssociation%20class%20and%3A%20%5B%0A%09%20%20%20%20self%20key%20%3D%20anAssociation%20key%20and%3A%20%5B%0A%09%09self%20value%20%3D%20anAssociation%20value%5D%5D%0A')}),
smalltalk.Association);

smalltalk.addMethod(
'_key_',
smalltalk.method({
selector: 'key:',
category: 'accessing',
fn: function (aKey) {
    var self = this;
    self['@key'] = aKey;
    return self;
},
source: unescape('key%3A%20aKey%0A%09key%20%3A%3D%20aKey%0A')}),
smalltalk.Association);

smalltalk.addMethod(
'_key',
smalltalk.method({
selector: 'key',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@key'];
    return self;
},
source: unescape('key%0A%09%5Ekey%0A')}),
smalltalk.Association);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
category: 'accessing',
fn: function (aValue) {
    var self = this;
    self['@value'] = aValue;
    return self;
},
source: unescape('value%3A%20aValue%0A%09value%20%3A%3D%20aValue%0A')}),
smalltalk.Association);

smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@value'];
    return self;
},
source: unescape('value%0A%09%5Evalue%0A')}),
smalltalk.Association);


smalltalk.addMethod(
'_key_value_',
smalltalk.method({
selector: 'key:value:',
category: 'instance creation',
fn: function (aKey, aValue) {
    var self = this;
    return function ($rec) {$rec._key_(aKey);$rec._value_(aValue);return $rec._yourself();}(self._new());
    return self;
},
source: unescape('key%3A%20aKey%20value%3A%20aValue%0A%09%20%20%20%20%5Eself%20new%0A%09%09key%3A%20aKey%3B%0A%09%09value%3A%20aValue%3B%0A%09%09yourself%0A')}),
smalltalk.Association.klass);


smalltalk.addClass('Dictionary', smalltalk.Collection, ['keys'], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (aDictionary) {
    var self = this;
    try {
        self._class().__eq(aDictionary._class())._ifFalse_(function () {return function () {throw {name: "stReturn", selector: "__eq", fn: function () {return false;}};}();});
        self._associationsDo_(function (assoc) {return aDictionary._at_ifAbsent_(assoc._key(), function () {return function () {throw {name: "stReturn", selector: "__eq", fn: function () {return false;}};}();}).__eq(assoc._value())._ifFalse_(function () {return function () {throw {name: "stReturn", selector: "__eq", fn: function () {return false;}};}();});});
        (function () {throw {name: "stReturn", selector: "__eq", fn: function () {return true;}};}());
        return self;
    } catch (e) {
        if (e.name === "stReturn" && e.selector === "__eq") {
            return e.fn();
        }
        throw e;
    }
},
source: unescape('%3D%20aDictionary%0A%09self%20class%20%3D%20aDictionary%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09self%20associationsDo%3A%20%5B%3Aassoc%20%7C%0A%09%20%20%20%20%28aDictionary%20at%3A%20assoc%20key%20ifAbsent%3A%20%5B%5Efalse%5D%29%20%3D%20assoc%20value%20%0A%09%09ifFalse%3A%20%5B%5Efalse%5D%5D.%0A%09%5Etrue%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function () {
    var self = this;
    var copy = nil;
    copy = self._class()._new();
    self._associationsDo_(function (each) {return copy._at_put_(each._key(), each._value());});
    return copy;
    return self;
},
source: unescape('shallowCopy%0A%09%7C%20copy%20%7C%0A%09copy%20%3A%3D%20self%20class%20new.%0A%09self%20associationsDo%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20copy%20at%3A%20each%20key%20%20put%3A%20each%20value%5D.%0A%09%5Ecopy%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function () {
    var self = this;
    self.klass.superclass.fn.prototype._initialize.apply(self, []);
    self['@keys'] = [];
    return self;
},
source: unescape('initialize%0A%20%20%20%20%09super%20initialize.%0A%20%20%20%20%09keys%20%3A%3D%20%23%28%29%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@keys']._size();
    return self;
},
source: unescape('size%0A%09%5Ekeys%20size%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_associations',
smalltalk.method({
selector: 'associations',
category: 'accessing',
fn: function () {
    var self = this;
    var associations = nil;
    associations = [];
    self['@keys']._do_(function (each) {return associations._add_(smalltalk.Association._key_value_(each, self._at_(each)));});
    return associations;
    return self;
},
source: unescape('associations%0A%09%7C%20associations%20%7C%0A%09associations%20%3A%3D%20%23%28%29.%0A%09keys%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20associations%20add%3A%20%28Association%20key%3A%20each%20value%3A%20%28self%20at%3A%20each%29%29%5D.%0A%09%5Eassociations%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_keys',
smalltalk.method({
selector: 'keys',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@keys']._copy();
    return self;
},
source: unescape('keys%0A%09%5Ekeys%20copy%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_values',
smalltalk.method({
selector: 'values',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@keys']._collect_(function (each) {return self._at_(each);});
    return self;
},
source: unescape('values%0A%20%20%20%20%09%5Ekeys%20collect%3A%20%5B%3Aeach%20%7C%20self%20at%3A%20each%5D%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'accessing',
fn: function (aKey, aValue) {
    var self = this;
    self['@keys']._includes_(aKey)._ifFalse_(function () {return self['@keys']._add_(aKey);});
    return self._basicAt_put_(aKey, aValue);
    return self;
},
source: unescape('at%3A%20aKey%20put%3A%20aValue%0A%09%28keys%20includes%3A%20aKey%29%20ifFalse%3A%20%5Bkeys%20add%3A%20aKey%5D.%0A%09%5Eself%20basicAt%3A%20aKey%20put%3A%20aValue%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
category: 'accessing',
fn: function (aKey, aBlock) {
    var self = this;
    return self._basicAt_(aKey)._ifNil_(aBlock);
    return self;
},
source: unescape('at%3A%20aKey%20ifAbsent%3A%20aBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%20ifNil%3A%20aBlock%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifAbsentPut_',
smalltalk.method({
selector: 'at:ifAbsentPut:',
category: 'accessing',
fn: function (aKey, aBlock) {
    var self = this;
    return self._at_ifAbsent_(aKey, function () {return self._at_put_(aKey, aBlock._value());});
    return self;
},
source: unescape('at%3A%20aKey%20ifAbsentPut%3A%20aBlock%0A%20%20%20%20%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5B%0A%20%20%20%20%09%20%20%20%20self%20at%3A%20aKey%20put%3A%20aBlock%20value%5D%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifPresent_',
smalltalk.method({
selector: 'at:ifPresent:',
category: 'accessing',
fn: function (aKey, aBlock) {
    var self = this;
    return self._basicAt_(aKey)._ifNotNil_(function () {return aBlock._value_(self._at_(aKey));});
    return self;
},
source: unescape('at%3A%20aKey%20ifPresent%3A%20aBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%20ifNotNil%3A%20%5BaBlock%20value%3A%20%28self%20at%3A%20aKey%29%5D%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifPresent_ifAbsent_',
smalltalk.method({
selector: 'at:ifPresent:ifAbsent:',
category: 'accessing',
fn: function (aKey, aBlock, anotherBlock) {
    var self = this;
    return self._basicAt_(aKey)._ifNil_ifNotNil_(anotherBlock, function () {return aBlock._value_(self._at_(aKey));});
    return self;
},
source: unescape('at%3A%20aKey%20ifPresent%3A%20aBlock%20ifAbsent%3A%20anotherBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%0A%09%20%20%20%20ifNil%3A%20anotherBlock%0A%09%20%20%20%20ifNotNil%3A%20%5BaBlock%20value%3A%20%28self%20at%3A%20aKey%29%5D%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
category: 'adding/removing',
fn: function (anAssociation) {
    var self = this;
    self._at_put_(anAssociation._key(), anAssociation._value());
    return self;
},
source: unescape('add%3A%20anAssociation%0A%20%20%20%20%09self%20at%3A%20anAssociation%20key%20put%3A%20anAssociation%20value%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_addAll_',
smalltalk.method({
selector: 'addAll:',
category: 'adding/removing',
fn: function (aDictionary) {
    var self = this;
    self.klass.superclass.fn.prototype._addAll_.apply(self, [aDictionary._associations()]);
    return aDictionary;
    return self;
},
source: unescape('addAll%3A%20aDictionary%0A%20%20%20%20%09super%20addAll%3A%20aDictionary%20associations.%0A%20%20%20%20%09%5EaDictionary%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'copying',
fn: function (aCollection) {
    var self = this;
    self._shouldNotImplement();
    return self;
},
source: unescape('%2C%20aCollection%0A%09self%20shouldNotImplement%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
category: 'copying',
fn: function (anIndex, anotherIndex) {
    var self = this;
    self._shouldNotImplement();
    return self;
},
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09self%20shouldNotImplement%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_associationsDo_',
smalltalk.method({
selector: 'associationsDo:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    self._associations()._do_(aBlock);
    return self;
},
source: unescape('associationsDo%3A%20aBlock%0A%20%20%20%20%09self%20associations%20do%3A%20aBlock%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_keysAndValuesDo_',
smalltalk.method({
selector: 'keysAndValuesDo:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    self._associationsDo_(function (each) {return aBlock._value_value_(each._key(), each._value());});
    return self;
},
source: unescape('keysAndValuesDo%3A%20aBlock%0A%20%20%20%20%09self%20associationsDo%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%09%20%20%20%20aBlock%20value%3A%20each%20key%20value%3A%20each%20value%5D%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    self._values()._do_(aBlock);
    return self;
},
source: unescape('do%3A%20aBlock%0A%20%20%20%20%09self%20values%20do%3A%20aBlock%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_select_',
smalltalk.method({
selector: 'select:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    var newDict = nil;
    newDict = self._class()._new();
    self._keysAndValuesDo_(function (key, value) {return aBlock._value_(value)._ifTrue_(function () {return newDict._at_put_(key, value);});});
    return newDict;
    return self;
},
source: unescape('select%3A%20aBlock%0A%20%20%20%20%09%7C%20newDict%20%7C%0A%20%20%20%20%09newDict%20%3A%3D%20self%20class%20new.%0A%20%20%20%20%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%20%20%20%20%09%20%20%20%20%28aBlock%20value%3A%20value%29%20ifTrue%3A%20%5BnewDict%20at%3A%20key%20put%3A%20value%5D%5D.%0A%20%20%20%20%09%5EnewDict%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_collect_',
smalltalk.method({
selector: 'collect:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    var newDict = nil;
    newDict = self._class()._new();
    self._keysAndValuesDo_(function (key, value) {return aBlock._value_(value)._ifTrue_(function () {return newDict._at_put_(key, value);});});
    return newDict;
    return self;
},
source: unescape('collect%3A%20aBlock%0A%20%20%20%20%09%7C%20newDict%20%7C%0A%20%20%20%20%09newDict%20%3A%3D%20self%20class%20new.%0A%20%20%20%20%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%20%20%20%20%09%20%20%20%20%28aBlock%20value%3A%20value%29%20ifTrue%3A%20%5BnewDict%20at%3A%20key%20put%3A%20value%5D%5D.%0A%20%20%20%20%09%5EnewDict%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
category: 'enumerating',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return self._values()._detect_ifNone_(aBlock, anotherBlock);
    return self;
},
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%5Eself%20values%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
category: 'enumerating',
fn: function (anObject) {
    var self = this;
    return self._values()._includes_(anObject);
    return self;
},
source: unescape('includes%3A%20anObject%0A%09%5Eself%20values%20includes%3A%20anObject%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
category: 'adding/removing',
fn: function (aKey) {
    var self = this;
    self._removeKey_(aKey);
    return self;
},
source: unescape('remove%3A%20aKey%0A%20%20%20%20self%20removeKey%3A%20aKey%0A')}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_removeKey_',
smalltalk.method({
selector: 'removeKey:',
category: 'adding/removing',
fn: function (aKey) {
    var self = this;
    self['@keys']._remove_(aKey);
    return self;
},
source: unescape('removeKey%3A%20aKey%0A%20%20%20%20keys%20remove%3A%20aKey%0A')}),
smalltalk.Dictionary);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_superclass_subclass_',
smalltalk.method({
selector: 'superclass:subclass:',
category: 'class creation',
fn: function (aClass, aString) {
    var self = this;
    self._superclass_subclass_instanceVariableNames_category_(aClass, aString, "", nil);
    return self;
},
source: unescape('superclass%3A%20aClass%20subclass%3A%20aString%0A%09self%20superclass%3A%20aClass%20subclass%3A%20aString%20instanceVariableNames%3A%20%27%27%20category%3A%20nil%0A')}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_superclass_subclass_instanceVariableNames_category_',
smalltalk.method({
selector: 'superclass:subclass:instanceVariableNames:category:',
category: 'class creation',
fn: function (aClass, aString, aString2, aString3) {
    var self = this;
    var newClass = nil;
    newClass = self._addSubclassOf_named_instanceVariableNames_(aClass, aString, self._instanceVariableNamesFor_(aString2));
    self._setupClass_(newClass);
    newClass._category_(aString3._ifNil_(function () {return "unclassified";}));
    return self;
},
source: unescape('superclass%3A%20aClass%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%7C%20newClass%20%7C%0A%09newClass%20%3A%3D%20self%20addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20%28self%20instanceVariableNamesFor%3A%20aString2%29.%0A%09self%20setupClass%3A%20newClass.%0A%09newClass%20category%3A%20%28aString3%20ifNil%3A%20%5B%27unclassified%27%5D%29%0A')}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_class_instanceVariableNames_',
smalltalk.method({
selector: 'class:instanceVariableNames:',
category: 'class creation',
fn: function (aClass, aString) {
    var self = this;
    aClass._isMetaclass()._ifFalse_(function () {return self._error_(aClass._name().__comma(" is not a metaclass"));});
    aClass._basicAt_put_("iVarNames", self._instanceVariableNamesFor_(aString));
    self._setupClass_(aClass);
    return self;
},
source: unescape('class%3A%20aClass%20instanceVariableNames%3A%20aString%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20error%3A%20aClass%20name%2C%20%27%20is%20not%20a%20metaclass%27%5D.%0A%09aClass%20basicAt%3A%20%27iVarNames%27%20put%3A%20%28self%20instanceVariableNamesFor%3A%20aString%29.%0A%09self%20setupClass%3A%20aClass%0A')}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_instanceVariableNamesFor_',
smalltalk.method({
selector: 'instanceVariableNamesFor:',
category: 'private',
fn: function (aString) {
    var self = this;
    return aString._tokenize_(" ")._reject_(function (each) {return each._isEmpty();});
    return self;
},
source: unescape('instanceVariableNamesFor%3A%20aString%0A%09%5E%28aString%20tokenize%3A%20%27%20%27%29%20reject%3A%20%5B%3Aeach%20%7C%20each%20isEmpty%5D%0A')}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_addSubclassOf_named_instanceVariableNames_',
smalltalk.method({
selector: 'addSubclassOf:named:instanceVariableNames:',
category: 'private',
fn: function (aClass, aString, aCollection) {
    var self = this;
    return function () {smalltalk.addClass(aString, aClass, aCollection);return smalltalk[aString];}();
    return self;
},
source: unescape('addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20aCollection%0A%09%5E%7B%27smalltalk.addClass%28aString%2C%20aClass%2C%20aCollection%29%3B%0A%09%20%20%20%20return%20smalltalk%5BaString%5D%27%7D%0A')}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_setupClass_',
smalltalk.method({
selector: 'setupClass:',
category: 'private',
fn: function (aClass) {
    var self = this;
    (function () {smalltalk.init(aClass);}());
    return self;
},
source: unescape('setupClass%3A%20aClass%0A%09%7B%27smalltalk.init%28aClass%29%3B%27%7D%0A')}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function () {
    var self = this;
    self.klass.superclass.fn.prototype._initialize.apply(self, []);
    self['@chunkParser'] = smalltalk.ChunkParser._new();
    return self;
},
source: unescape('initialize%0A%09super%20initialize.%0A%09chunkParser%20%3A%3D%20ChunkParser%20new.%0A')}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_class_category_',
smalltalk.method({
selector: 'class:category:',
category: 'accessing',
fn: function (aClass, aString) {
    var self = this;
    self['@class'] = aClass;
    self['@category'] = aString;
    return self;
},
source: unescape('class%3A%20aClass%20category%3A%20aString%0A%09class%20%3A%3D%20aClass.%0A%09category%20%3A%3D%20aString%0A')}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_scanFrom_',
smalltalk.method({
selector: 'scanFrom:',
category: 'fileIn',
fn: function (aStream) {
    var self = this;
    var nextChunk = nil;
    nextChunk = self['@chunkParser']._emptyChunk().__slash(self['@chunkParser']._chunk())._parse_(aStream);
    nextChunk._isEmptyChunk()._ifFalse_(function () {self._compileMethod_(nextChunk._contents());return self._scanFrom_(aStream);});
    return self;
},
source: unescape('scanFrom%3A%20aStream%0A%09%7C%20nextChunk%20%7C%0A%09nextChunk%20%3A%3D%20%28chunkParser%20emptyChunk%20/%20chunkParser%20chunk%29%20parse%3A%20aStream.%0A%09nextChunk%20isEmptyChunk%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20compileMethod%3A%20nextChunk%20contents.%0A%09%20%20%20%20self%20scanFrom%3A%20aStream%5D.%0A')}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_compileMethod_',
smalltalk.method({
selector: 'compileMethod:',
category: 'private',
fn: function (aString) {
    var self = this;
    var method = nil;
    method = smalltalk.Compiler._new()._load_forClass_(aString, self['@class']);
    method._category_(self['@category']);
    self['@class']._addCompiledMethod_(method);
    return self;
},
source: unescape('compileMethod%3A%20aString%0A%09%7C%20method%20%7C%0A%09method%20%3A%3D%20Compiler%20new%20load%3A%20aString%20forClass%3A%20class.%0A%09method%20category%3A%20category.%0A%09class%20addCompiledMethod%3A%20method%0A')}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel');
smalltalk.addMethod(
'_collection',
smalltalk.method({
selector: 'collection',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@collection'];
    return self;
},
source: unescape('collection%0A%09%5Ecollection%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_setCollection_',
smalltalk.method({
selector: 'setCollection:',
category: 'accessing',
fn: function (aCollection) {
    var self = this;
    self['@collection'] = aCollection;
    return self;
},
source: unescape('setCollection%3A%20aCollection%0A%09collection%20%3A%3D%20aCollection%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@position']._ifNil_(function () {return self['@position'] = 0;});
    return self;
},
source: unescape('position%0A%09%5Eposition%20ifNil%3A%20%5Bposition%20%3A%3D%200%5D%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    self['@position'] = anInteger;
    return self;
},
source: unescape('position%3A%20anInteger%0A%09position%20%3A%3D%20anInteger%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_streamSize',
smalltalk.method({
selector: 'streamSize',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@streamSize'];
    return self;
},
source: unescape('streamSize%0A%09%5EstreamSize%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_setStreamSize_',
smalltalk.method({
selector: 'setStreamSize:',
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    self['@streamSize'] = anInteger;
    return self;
},
source: unescape('setStreamSize%3A%20anInteger%0A%09streamSize%20%3A%3D%20anInteger%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
category: 'accessing',
fn: function () {
    var self = this;
    return self._collection()._copyFrom_to_(1, self._streamSize());
    return self;
},
source: unescape('contents%0A%09%5Eself%20collection%0A%09%20%20%20%20copyFrom%3A%201%20%0A%09%20%20%20%20to%3A%20self%20streamSize%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function () {
    var self = this;
    return self._streamSize();
    return self;
},
source: unescape('size%0A%09%5Eself%20streamSize%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_reset',
smalltalk.method({
selector: 'reset',
category: 'actions',
fn: function () {
    var self = this;
    self._position_(0);
    return self;
},
source: unescape('reset%0A%09self%20position%3A%200%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_close',
smalltalk.method({
selector: 'close',
category: 'actions',
fn: function () {
    var self = this;
    return self;
},
source: unescape('close%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_flush',
smalltalk.method({
selector: 'flush',
category: 'actions',
fn: function () {
    var self = this;
    return self;
},
source: unescape('flush%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_resetContents',
smalltalk.method({
selector: 'resetContents',
category: 'actions',
fn: function () {
    var self = this;
    self._reset();
    self._setStreamSize_(0);
    return self;
},
source: unescape('resetContents%0A%09self%20reset.%0A%09self%20setStreamSize%3A%200%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    (function () {return self._atEnd();}._whileFalse_(function () {return aBlock._value_(self._next());}));
    return self;
},
source: unescape('do%3A%20aBlock%0A%09%5Bself%20atEnd%5D%20whileFalse%3A%20%5BaBlock%20value%3A%20self%20next%5D%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_setToEnd',
smalltalk.method({
selector: 'setToEnd',
category: 'positioning',
fn: function () {
    var self = this;
    self._position_(self._size());
    return self;
},
source: unescape('setToEnd%0A%09self%20position%3A%20self%20size%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_skip_',
smalltalk.method({
selector: 'skip:',
category: 'positioning',
fn: function (anInteger) {
    var self = this;
    self._position_(self._position().__plus(anInteger)._min_max_(self._size(), 0));
    return self;
},
source: unescape('skip%3A%20anInteger%0A%09self%20position%3A%20%28%28self%20position%20+%20anInteger%29%20min%3A%20self%20size%20max%3A%200%29%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
category: 'reading',
fn: function () {
    var self = this;
    self._position_(self._position().__plus(1));
    return self['@collection']._at_(self._position());
    return self;
},
source: unescape('next%0A%09self%20position%3A%20self%20position%20+%201.%20%0A%09%5Ecollection%20at%3A%20self%20position%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
category: 'reading',
fn: function (anInteger) {
    var self = this;
    var tempCollection = nil;
    tempCollection = self._collection()._class()._new();
    anInteger._timesRepeat_(function () {return self._atEnd()._ifFalse_(function () {return tempCollection._add_(self._next());});});
    return tempCollection;
    return self;
},
source: unescape('next%3A%20anInteger%0A%09%7C%20tempCollection%20%7C%0A%09tempCollection%20%3A%3D%20self%20collection%20class%20new.%0A%09anInteger%20timesRepeat%3A%20%5B%0A%09%20%20%20%20self%20atEnd%20ifFalse%3A%20%5B%0A%09%09tempCollection%20add%3A%20self%20next%5D%5D.%0A%09%5EtempCollection%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_nextPut_',
smalltalk.method({
selector: 'nextPut:',
category: 'writing',
fn: function (anObject) {
    var self = this;
    self._position_(self._position().__plus(1));
    self._collection()._at_put_(self._position(), anObject);
    self._setStreamSize_(self._streamSize()._max_(self._position()));
    return self;
},
source: unescape('nextPut%3A%20anObject%0A%09self%20position%3A%20self%20position%20+%201.%0A%09self%20collection%20at%3A%20self%20position%20put%3A%20anObject.%0A%09self%20setStreamSize%3A%20%28self%20streamSize%20max%3A%20self%20position%29%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_nextPutAll_',
smalltalk.method({
selector: 'nextPutAll:',
category: 'writing',
fn: function (aCollection) {
    var self = this;
    aCollection._do_(function (each) {return self._nextPut_(each);});
    return self;
},
source: unescape('nextPutAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20nextPut%3A%20each%5D%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_peek',
smalltalk.method({
selector: 'peek',
category: 'reading',
fn: function () {
    var self = this;
    return self._atEnd()._ifFalse_(function () {return self._collection()._at_(self._position().__plus(1));});
    return self;
},
source: unescape('peek%0A%09%5Eself%20atEnd%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20collection%20at%3A%20self%20position%20+%201%5D%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_atEnd',
smalltalk.method({
selector: 'atEnd',
category: 'testing',
fn: function () {
    var self = this;
    return self._position().__eq(self._size());
    return self;
},
source: unescape('atEnd%0A%09%5Eself%20position%20%3D%20self%20size%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_atStart',
smalltalk.method({
selector: 'atStart',
category: 'testing',
fn: function () {
    var self = this;
    return self._position().__eq(0);
    return self;
},
source: unescape('atStart%0A%09%5Eself%20position%20%3D%200%0A')}),
smalltalk.Stream);

smalltalk.addMethod(
'_isEmpty',
smalltalk.method({
selector: 'isEmpty',
category: 'testing',
fn: function () {
    var self = this;
    return self._size().__eq(0);
    return self;
},
source: unescape('isEmpty%0A%09%5Eself%20size%20%3D%200%0A')}),
smalltalk.Stream);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
category: 'instance creation',
fn: function (aCollection) {
    var self = this;
    return function ($rec) {$rec._setCollection_(aCollection);$rec._setStreamSize_(aCollection._size());return $rec._yourself();}(self._new());
    return self;
},
source: unescape('on%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%20%0A%09%09setCollection%3A%20aCollection%3B%0A%09%09setStreamSize%3A%20aCollection%20size%3B%0A%09%09yourself%0A')}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel');
smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
category: 'reading',
fn: function (anInteger) {
    var self = this;
    var tempCollection = nil;
    tempCollection = self._collection()._class()._new();
    anInteger._timesRepeat_(function () {return self._atEnd()._ifFalse_(function () {return tempCollection = tempCollection.__comma(self._next());});});
    return tempCollection;
    return self;
},
source: unescape('next%3A%20anInteger%0A%09%7C%20tempCollection%20%7C%0A%09tempCollection%20%3A%3D%20self%20collection%20class%20new.%0A%09anInteger%20timesRepeat%3A%20%5B%0A%09%20%20%20%20self%20atEnd%20ifFalse%3A%20%5B%0A%09%09tempCollection%20%3A%3D%20tempCollection%2C%20self%20next%5D%5D.%0A%09%5EtempCollection%0A')}),
smalltalk.StringStream);

smalltalk.addMethod(
'_nextPut_',
smalltalk.method({
selector: 'nextPut:',
category: 'writing',
fn: function (aString) {
    var self = this;
    self._nextPutAll_(aString);
    return self;
},
source: unescape('nextPut%3A%20aString%0A%09self%20nextPutAll%3A%20aString%0A')}),
smalltalk.StringStream);

smalltalk.addMethod(
'_nextPutAll_',
smalltalk.method({
selector: 'nextPutAll:',
category: 'writing',
fn: function (aString) {
    var self = this;
    self._setCollection_(self._collection()._copyFrom_to_(1, self._position()).__comma(aString).__comma(self._collection()._copyFrom_to_(self._position().__plus(1).__plus(aString._size()), self._collection()._size())));
    self._position_(self._position().__plus(aString._size()));
    self._setStreamSize_(self._streamSize()._max_(self._position()));
    return self;
},
source: unescape('nextPutAll%3A%20aString%0A%09self%20setCollection%3A%20%0A%09%20%20%20%20%28self%20collection%20copyFrom%3A%201%20to%3A%20self%20position%29%2C%0A%09%20%20%20%20aString%2C%0A%09%20%20%20%20%28self%20collection%20copyFrom%3A%20%28self%20position%20+%201%20+%20aString%20size%29%20to%3A%20self%20collection%20size%29.%0A%09self%20position%3A%20self%20position%20+%20aString%20size.%0A%09self%20setStreamSize%3A%20%28self%20streamSize%20max%3A%20self%20position%29%0A')}),
smalltalk.StringStream);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
'_class_',
smalltalk.method({
selector: 'class:',
category: 'accessing',
fn: function (aClass) {
    var self = this;
    self['@class'] = aClass;
    return self;
},
source: unescape('class%3A%20aClass%0A%09class%20%3A%3D%20aClass%0A')}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_scanFrom_',
smalltalk.method({
selector: 'scanFrom:',
category: 'fileIn',
fn: function (aStream) {
    var self = this;
    var nextChunk = nil;
    nextChunk = self['@chunkParser']._emptyChunk().__slash(self['@chunkParser']._chunk())._parse_(aStream);
    nextChunk._isEmptyChunk()._ifFalse_(function () {return self._setComment_(nextChunk._contents());});
    return self;
},
source: unescape('scanFrom%3A%20aStream%0A%09%7C%20nextChunk%20%7C%0A%09nextChunk%20%3A%3D%20%28chunkParser%20emptyChunk%20/%20chunkParser%20chunk%29%20parse%3A%20aStream.%0A%09nextChunk%20isEmptyChunk%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20setComment%3A%20nextChunk%20contents%5D.%0A')}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function () {
    var self = this;
    self.klass.superclass.fn.prototype._initialize.apply(self, []);
    self['@chunkParser'] = smalltalk.ChunkParser._new();
    return self;
},
source: unescape('initialize%0A%09super%20initialize.%0A%09chunkParser%20%3A%3D%20ChunkParser%20new.%0A')}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_setComment_',
smalltalk.method({
selector: 'setComment:',
category: 'private',
fn: function (aString) {
    var self = this;
    self['@class']._comment_(aString);
    return self;
},
source: unescape('setComment%3A%20aString%0A%20%20%20%20class%20comment%3A%20aString%0A')}),
smalltalk.ClassCommentReader);



smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
category: 'accessing',
fn: function () {
    var self = this;
    return function () {return Math.random();}();
    return self;
},
source: unescape('next%0A%20%20%20%20%5E%7B%27return%20Math.random%28%29%27%7D%0A')}),
smalltalk.Random);

smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    return (1)._to_collect_(anInteger, function (each) {return self._next();});
    return self;
},
source: unescape('next%3A%20anInteger%0A%20%20%20%20%5E1%20to%3A%20anInteger%20collect%3A%20%5B%3Aeach%20%7C%20self%20next%5D%0A')}),
smalltalk.Random);



smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel');
smalltalk.addMethod(
'_x',
smalltalk.method({
selector: 'x',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@x'];
    return self;
},
source: unescape('x%0A%09%5Ex')}),
smalltalk.Point);

smalltalk.addMethod(
'_y',
smalltalk.method({
selector: 'y',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@y'];
    return self;
},
source: unescape('y%0A%09%5Ey')}),
smalltalk.Point);

smalltalk.addMethod(
'_y_',
smalltalk.method({
selector: 'y:',
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@y'] = aNumber;
    return self;
},
source: unescape('y%3A%20aNumber%0A%09y%20%3A%3D%20aNumber')}),
smalltalk.Point);

smalltalk.addMethod(
'_x_',
smalltalk.method({
selector: 'x:',
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@x'] = aNumber;
    return self;
},
source: unescape('x%3A%20aNumber%0A%09x%20%3A%3D%20aNumber')}),
smalltalk.Point);

smalltalk.addMethod(
'__star',
smalltalk.method({
selector: '*',
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    return smalltalk.Point._x_y_(self._x().__star(aPoint._asPoint()._x()), self._y().__star(aPoint._asPoint()._y()));
    return self;
},
source: unescape('*%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20*%20aPoint%20asPoint%20x%20y%3A%20self%20y%20*%20aPoint%20asPoint%20y')}),
smalltalk.Point);

smalltalk.addMethod(
'__plus',
smalltalk.method({
selector: '+',
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    return smalltalk.Point._x_y_(self._x().__plus(aPoint._asPoint()._x()), self._y().__plus(aPoint._asPoint()._y()));
    return self;
},
source: unescape('+%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20+%20aPoint%20asPoint%20x%20y%3A%20self%20y%20+%20aPoint%20asPoint%20y')}),
smalltalk.Point);

smalltalk.addMethod(
'__minus',
smalltalk.method({
selector: '-',
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    return smalltalk.Point._x_y_(self._x().__minus(aPoint._asPoint()._x()), self._y().__minus(aPoint._asPoint()._y()));
    return self;
},
source: unescape('-%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20-%20aPoint%20asPoint%20x%20y%3A%20self%20y%20-%20aPoint%20asPoint%20y')}),
smalltalk.Point);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    return smalltalk.Point._x_y_(self._x().__slash(aPoint._asPoint()._x()), self._y().__slash(aPoint._asPoint()._y()));
    return self;
},
source: unescape('/%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20/%20aPoint%20asPoint%20x%20y%3A%20self%20y%20/%20aPoint%20asPoint%20y')}),
smalltalk.Point);

smalltalk.addMethod(
'_asPoint',
smalltalk.method({
selector: 'asPoint',
category: 'converting',
fn: function () {
    var self = this;
    return self;
    return self;
},
source: unescape('asPoint%0A%09%5Eself')}),
smalltalk.Point);


smalltalk.addMethod(
'_x_y_',
smalltalk.method({
selector: 'x:y:',
category: 'instance creation',
fn: function (aNumber, anotherNumber) {
    var self = this;
    return function ($rec) {$rec._x_(aNumber);$rec._y_(anotherNumber);return $rec._yourself();}(self._new());
    return self;
},
source: unescape('x%3A%20aNumber%20y%3A%20anotherNumber%0A%09%5Eself%20new%0A%09%09x%3A%20aNumber%3B%0A%09%09y%3A%20anotherNumber%3B%0A%09%09yourself')}),
smalltalk.Point.klass);


