smalltalk.addPackage('IDE', {});
smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function () {
    var self = this;
    return self['@browser'];
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedPackage", []);
    return $1;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_getNodes",
smalltalk.method({
selector: "getNodes",
fn: function () {
    var self = this;
    var $1, $2;
    var classes;
    var children;
    var others;
    classes = smalltalk.send(smalltalk.send(self, "_browser", []), "_classes", []);
    children = [];
    others = [];
    smalltalk.send(classes, "_do_", [function (each) {$1 = smalltalk.send(classes, "_includes_", [smalltalk.send(each, "_superclass", [])]);if (smalltalk.assert($1)) {return smalltalk.send(others, "_add_", [each]);} else {return smalltalk.send(children, "_add_", [each]);}}]);
    $2 = smalltalk.send(children, "_collect_", [function (each) {return smalltalk.send(smalltalk.ClassesListNode || ClassesListNode, "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, 0]);}]);
    return $2;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function () {
    var self = this;
    if (($receiver = self['@nodes']) == nil || $receiver == undefined) {
        self['@nodes'] = smalltalk.send(self, "_getNodes", []);
        self['@nodes'];
    } else {
        self['@nodes'];
    }
    return self['@nodes'];
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_ul", []);
    smalltalk.send($1, "_class_", ["amber_column browser classes"]);
    $2 = smalltalk.send($1, "_yourself", []);
    self['@ul'] = $2;
    smalltalk.send(self, "_updateNodes", []);
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_resetNodes",
smalltalk.method({
selector: "resetNodes",
fn: function () {
    var self = this;
    self['@nodes'] = nil;
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_updateNodes",
smalltalk.method({
selector: "updateNodes",
fn: function () {
    var self = this;
    smalltalk.send(self['@ul'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);}]);
    return self;
}
}),
smalltalk.ClassesList);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBrowser) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_browser_", [aBrowser]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function () {
    var self = this;
    return self['@browser'];
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
fn: function (aCollection) {
    var self = this;
    var $1;
    var children;
    var others;
    children = [];
    others = [];
    smalltalk.send(aCollection, "_do_", [function (each) {$1 = smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [smalltalk.send(self, "_theClass", [])]);if (smalltalk.assert($1)) {return smalltalk.send(children, "_add_", [each]);} else {return smalltalk.send(others, "_add_", [each]);}}]);
    self['@nodes'] = smalltalk.send(children, "_collect_", [function (each) {return smalltalk.send(smalltalk.ClassesListNode || ClassesListNode, "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, smalltalk.send(smalltalk.send(self, "_level", []), "__plus", [1])]);}]);
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    var $1;
    var str;
    str = smalltalk.send(smalltalk.send(smalltalk.String || String, "_new", []), "_writeStream", []);
    smalltalk.send(smalltalk.send(self, "_level", []), "_timesRepeat_", [function () {return smalltalk.send(str, "_nextPutAll_", ["&nbsp;&nbsp;&nbsp;&nbsp;"]);}]);
    smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", [])]);
    $1 = smalltalk.send(str, "_contents", []);
    return $1;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
fn: function () {
    var self = this;
    return self['@level'];
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
fn: function (anInteger) {
    var self = this;
    self['@level'] = anInteger;
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function () {
    var self = this;
    return self['@nodes'];
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    var li;
    var cssClass;
    cssClass = "";
    li = smalltalk.send(smalltalk.send(html, "_li", []), "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectClass_", [smalltalk.send(self, "_theClass", [])]);}]);
    smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_html_", [smalltalk.send(self, "_label", [])]);
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedClass", []), "__eq", [smalltalk.send(self, "_theClass", [])]);
    if (smalltalk.assert($1)) {
        cssClass = smalltalk.send(cssClass, "__comma", [" selected"]);
    }
    $2 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_comment", []), "_isEmpty", []);
    if (!smalltalk.assert($2)) {
        cssClass = smalltalk.send(cssClass, "__comma", [" commented"]);
    }
    smalltalk.send(li, "_class_", [cssClass]);
    smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function () {
    var self = this;
    return self['@theClass'];
}
}),
smalltalk.ClassesListNode);

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
smalltalk.ClassesListNode);


smalltalk.addMethod(
"_on_browser_classes_level_",
smalltalk.method({
selector: "on:browser:classes:level:",
fn: function (aClass, aBrowser, aCollection, anInteger) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_theClass_", [aClass]);
    smalltalk.send($2, "_browser_", [aBrowser]);
    smalltalk.send($2, "_level_", [anInteger]);
    smalltalk.send($2, "_getNodesFrom_", [aCollection]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
"_handleError_",
smalltalk.method({
selector: "handleError:",
fn: function (anError) {
    var self = this;
    var $1, $2;
    smalltalk.send(function () {$1 = smalltalk.send(smalltalk.Debugger || Debugger, "_new", []);smalltalk.send($1, "_error_", [anError]);$2 = smalltalk.send($1, "_open", []);return $2;}, "_on_do_", [smalltalk.Error || Error, function (error) {return smalltalk.send(smalltalk.send(smalltalk.ErrorHandler || ErrorHandler, "_new", []), "_handleError_", [error]);}]);
    return self;
}
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_register", []);
    return self;
}
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function () {
    var self = this;
    smalltalk.send(self, "_val_", [""]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLine",
smalltalk.method({
selector: "currentLine",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursor", []), "_line", [])]);
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLineOrSelection",
smalltalk.method({
selector: "currentLineOrSelection",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self['@editor'], "_somethingSelected", []);
    if (smalltalk.assert($2)) {
        $1 = smalltalk.send(self, "_selection", []);
    } else {
        $1 = smalltalk.send(self, "_currentLine", []);
    }
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
fn: function () {
    var self = this;
    var $1;
    var result;
    result = smalltalk.send(self, "_eval_", [smalltalk.send(self, "_currentLineOrSelection", [])]);
    $1 = smalltalk.send(self, "_onDoIt", []);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(smalltalk.send(self, "_onDoIt", []), "_value", []);
    }
    return result;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
fn: function () {
    var self = this;
    return self['@editor'];
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString) {
    var self = this;
    var $1, $2;
    var $early = {};
    try {
        var compiler;
        compiler = smalltalk.send(smalltalk.Compiler || Compiler, "_new", []);
        smalltalk.send(function () {return smalltalk.send(compiler, "_parseExpression_", [aString]);}, "_on_do_", [smalltalk.Error || Error, function (ex) {$1 = smalltalk.send(window, "_alert_", [smalltalk.send(ex, "_messageText", [])]);throw $early = [$1];}]);
        $2 = smalltalk.send(smalltalk.send(smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compile_forClass_", [smalltalk.send(smalltalk.send("doIt ^[", "__comma", [aString]), "__comma", ["] value"]), smalltalk.DoIt || DoIt])]), "_fn", []), "_applyTo_arguments_", [smalltalk.send(self, "_receiver", []), []]);
        return $2;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Importer || Importer, "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_currentLineOrSelection", []), "_readStream", [])]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_editor",[]),"_focus",[]);
return self}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_handleKeyDown_",
smalltalk.method({
selector: "handleKeyDown:",
fn: function (anEvent) {
    var self = this;
    if (anEvent.ctrlKey) {
        if (anEvent.keyCode === 80) {
            self._printIt();
            anEvent.preventDefault();
            return false;
        }
        if (anEvent.keyCode === 68) {
            self._doIt();
            anEvent.preventDefault();
            return false;
        }
        if (anEvent.keyCode === 73) {
            self._inspectIt();
            anEvent.preventDefault();
            return false;
        }
    }
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_doIt", []), "_inspect", []);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function () {
    var self = this;
    return self['@onDoIt'];
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt_",
smalltalk.method({
selector: "onDoIt:",
fn: function (aBlock) {
    var self = this;
    self['@onDoIt'] = aBlock;
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self['@div'], "_onKeyDown_", [aBlock]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyUp_",
smalltalk.method({
selector: "onKeyUp:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self['@div'], "_onKeyUp_", [aBlock]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
fn: function (aString) {
    var self = this;
    var start;
    var stop;
    start = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    stop = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    smalltalk.send(start, "_at_put_", ["line", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_line", [])]);
    smalltalk.send(start, "_at_put_", ["ch", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_ch", [])]);
    smalltalk.send(stop, "_at_put_", ["line", smalltalk.send(start, "_at_", ["line"])]);
    smalltalk.send(stop, "_at_put_", ["ch", smalltalk.send(smalltalk.send(smalltalk.send(start, "_at_", ["ch"]), "__plus", [smalltalk.send(aString, "_size", [])]), "__plus", [2])]);
    smalltalk.send(self['@editor'], "_replaceSelection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@editor'], "_getSelection", []), "__comma", [" "]), "__comma", [aString]), "__comma", [" "])]);
    smalltalk.send(self['@editor'], "_setCursor_", [smalltalk.send(self['@editor'], "_getCursor_", [true])]);
    smalltalk.send(self['@editor'], "_setSelection_end_", [stop, start]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function (){
var self=this;
smalltalk.send(self,"_print_",[smalltalk.send(smalltalk.send(self,"_doIt",[]),"_printString",[])]);
smalltalk.send(self,"_focus",[]);
return self}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@receiver']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.DoIt || DoIt, "_new", []);
    } else {
        $1 = self['@receiver'];
    }
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject) {
    var self = this;
    self['@receiver'] = anObject;
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var textarea;
    self['@div'] = smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["source"]);
    smalltalk.send(self['@div'], "_with_", [function () {textarea = smalltalk.send(html, "_textarea", []);return textarea;}]);
    smalltalk.send(self, "_setEditorOn_", [smalltalk.send(textarea, "_element", [])]);
    smalltalk.send(self['@div'], "_onKeyDown_", [function (e) {return smalltalk.send(self, "_handleKeyDown_", [e]);}]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getSelection", []);
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionEnd", []);
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionEnd_", [anInteger]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionStart", []);
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionStart_", [anInteger]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
fn: function (aTextarea) {
    var self = this;
    self['@editor'] = CodeMirror.fromTextArea(aTextarea, {theme: "amber", lineNumbers: true, enterMode: "flat", matchBrackets: true, electricChars: false});
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getValue", []);
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val_",
smalltalk.method({
selector: "val:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self['@editor'], "_setValue_", [aString]);
    return self;
}
}),
smalltalk.SourceArea);



smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_add_", [aWidget]);
    smalltalk.send(aWidget, "_appendToJQuery_", [smalltalk.send("#amber", "_asJQuery", [])]);
    smalltalk.send(aWidget, "_hide", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
    var self = this;
    if (smalltalk.assert(self['@opened'])) {
        smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_hide", []);
        smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);
        smalltalk.send(self['@selectedTab'], "_hide", []);
        smalltalk.send(self, "_removeBodyMargin", []);
        smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["amberBody"]);
        self['@opened'] = false;
        self['@opened'];
    }
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_closeTab_",
smalltalk.method({
selector: "closeTab:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(self, "_removeTab_", [aWidget]);
    smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
    smalltalk.send(aWidget, "_remove", []);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    var $1, $2, $3;
    smalltalk.send(self, "_initialize", [], smalltalk.Widget);
    self['@opened'] = true;
    smalltalk.send(function (html) {return smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["amber"]);}, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amberBody"]);
    smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("#amber", "_asJQuery", [])]);
    smalltalk.send(self, "_addTab_", [smalltalk.send(smalltalk.IDETranscript || IDETranscript, "_current", [])]);
    smalltalk.send(self, "_addTab_", [smalltalk.send(smalltalk.Workspace || Workspace, "_new", [])]);
    $1 = smalltalk.send(self, "_addTab_", [smalltalk.send(smalltalk.TestRunner || TestRunner, "_new", [])]);
    smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
    smalltalk.send(self, "_onResize_", [function () {smalltalk.send(self, "_updateBodyMargin", []);$2 = smalltalk.send(self, "_updatePosition", []);return $2;}]);
    $3 = smalltalk.send(self, "_onWindowResize_", [function () {return smalltalk.send(self, "_updatePosition", []);}]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_labelFor_",
smalltalk.method({
selector: "labelFor:",
fn: function (aWidget) {
    var self = this;
    var $1;
    var label;
    var maxSize;
    maxSize = 15;
    label = smalltalk.send(smalltalk.send(aWidget, "_label", []), "_copyFrom_to_", [0, smalltalk.send(smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", []), "_min_", [maxSize])]);
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", []), "__gt", [maxSize]);
    if (smalltalk.assert($1)) {
        label = smalltalk.send(label, "__comma", ["..."]);
    }
    return label;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_newBrowserTab",
smalltalk.method({
selector: "newBrowserTab",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.Browser || Browser, "_open", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onResize_",
smalltalk.method({
selector: "onResize:",
fn: function (aBlock) {
    var self = this;
    jQuery("#amber").resizable({handles: "n", resize: aBlock, minHeight: 230});
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onWindowResize_",
smalltalk.method({
selector: "onWindowResize:",
fn: function (aBlock) {
    var self = this;
    jQuery(window).resize(aBlock);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    if (!smalltalk.assert(self['@opened'])) {
        smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amberBody"]);
        smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_show", []);
        smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);
        smalltalk.send(self, "_updateBodyMargin", []);
        smalltalk.send(self['@selectedTab'], "_show", []);
        self['@opened'] = true;
        self['@opened'];
    }
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeBodyMargin",
smalltalk.method({
selector: "removeBodyMargin",
fn: function () {
    var self = this;
    smalltalk.send(self, "_setBodyMargin_", [0]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_remove_", [aWidget]);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["logo"]);
    smalltalk.send(self, "_renderToolbarOn_", [html]);
    $1 = smalltalk.send(html, "_ul", []);
    smalltalk.send($1, "_id_", ["amberTabs"]);
    $2 = smalltalk.send($1, "_yourself", []);
    self['@ul'] = $2;
    smalltalk.send(self, "_renderTabs", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabFor_on_",
smalltalk.method({
selector: "renderTabFor:on:",
fn: function (aWidget, html) {
    var self = this;
    var $1, $2, $4, $5, $6, $3, $7;
    var li;
    li = smalltalk.send(html, "_li", []);
    $1 = smalltalk.send(self['@selectedTab'], "__eq", [aWidget]);
    if (smalltalk.assert($1)) {
        smalltalk.send(li, "_class_", ["selected"]);
    }
    smalltalk.send(li, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);$2 = smalltalk.send(html, "_span", []);smalltalk.send($2, "_class_", ["mtab"]);$3 = smalltalk.send($2, "_with_", [function () {$4 = smalltalk.send(aWidget, "_canBeClosed", []);if (smalltalk.assert($4)) {$5 = smalltalk.send(html, "_span", []);smalltalk.send($5, "_class_", ["close"]);smalltalk.send($5, "_with_", ["x"]);$6 = smalltalk.send($5, "_onClick_", [function () {return smalltalk.send(self, "_closeTab_", [aWidget]);}]);$6;}return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_labelFor_", [aWidget])]);}]);$3;return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);
    $7 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [aWidget]);}]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabs",
smalltalk.method({
selector: "renderTabs",
fn: function () {
    var self = this;
    var $1, $2, $3, $4;
    smalltalk.send(self['@ul'], "_contents_", [function (html) {smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [function (each) {return smalltalk.send(self, "_renderTabFor_on_", [each, html]);}]);$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_class_", ["newtab"]);smalltalk.send($1, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);$2 = smalltalk.send(html, "_span", []);smalltalk.send($2, "_class_", ["mtab"]);$3 = smalltalk.send($2, "_with_", [" + "]);$3;return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);$4 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_newBrowserTab", []);}]);return $4;}]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderToolbarOn_",
smalltalk.method({
selector: "renderToolbarOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $4, $5, $6, $7, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_id_", ["amber_toolbar"]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_input", []);smalltalk.send($3, "_class_", ["implementors"]);$4 = smalltalk.send($3, "_yourself", []);self['@input'] = $4;self['@input'];smalltalk.send(self['@input'], "_onKeyPress_", [function (event) {$5 = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [13]);if (smalltalk.assert($5)) {return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}}]);$6 = smalltalk.send(html, "_div", []);smalltalk.send($6, "_id_", ["amber_close"]);$7 = smalltalk.send($6, "_onClick_", [function () {return smalltalk.send(self, "_close", []);}]);return $7;}]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString) {
    var self = this;
    var $1;
    var searchedClass;
    searchedClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);
    $1 = smalltalk.send(searchedClass, "_isClass", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [searchedClass]);
    } else {
        smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [aString]);
    }
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(self, "_open", []);
    self['@selectedTab'] = aWidget;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [function (each) {return smalltalk.send(each, "_hide", []);}]);
    smalltalk.send(aWidget, "_show", []);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_setBodyMargin_",
smalltalk.method({
selector: "setBodyMargin:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(".amberBody", "_asJQuery", []), "_css_put_", ["margin-bottom", smalltalk.send(smalltalk.send(anInteger, "_asString", []), "__comma", ["px"])]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@tabs']) == nil || $receiver == undefined) {
        self['@tabs'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
        $1 = self['@tabs'];
    } else {
        $1 = self['@tabs'];
    }
    return $1;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function () {
    var self = this;
    smalltalk.send(self, "_renderTabs", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updateBodyMargin",
smalltalk.method({
selector: "updateBodyMargin",
fn: function () {
    var self = this;
    smalltalk.send(self, "_setBodyMargin_", [smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_height", [])]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updatePosition",
smalltalk.method({
selector: "updatePosition",
fn: function () {
    var self = this;
    jQuery("#amber").css("top", "").css("bottom", "0px");
    return self;
}
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@current']) == nil || $receiver == undefined) {
        self['@current'] = smalltalk.send(self, "_new", [], smalltalk.Widget.klass);
        $1 = self['@current'];
    } else {
        $1 = self['@current'];
    }
    return $1;
}
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    smalltalk.send(self, "_shouldNotImplement", []);
    return self;
}
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_closeTab_", [self]);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_hide", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_addTab_", [self]);
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_selectTab_", [self]);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["amberTool"]);
    $2 = smalltalk.send($1, "_yourself", []);
    self['@div'] = $2;
    smalltalk.send(self, "_renderTab", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderTab",
smalltalk.method({
selector: "renderTab",
fn: function () {
    var self = this;
    var $1, $2, $3, $4;
    smalltalk.send(self['@div'], "_contents_", [function (html) {$1 = smalltalk.send(html, "_div", []);smalltalk.send($1, "_class_", ["amber_box"]);$2 = smalltalk.send($1, "_with_", [function () {return smalltalk.send(self, "_renderBoxOn_", [html]);}]);$2;$3 = smalltalk.send(html, "_div", []);smalltalk.send($3, "_class_", ["amber_buttons"]);$4 = smalltalk.send($3, "_with_", [function () {return smalltalk.send(self, "_renderButtonsOn_", [html]);}]);return $4;}]);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_show", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function () {
    var self = this;
    smalltalk.send(self, "_renderTab", []);
    return self;
}
}),
smalltalk.TabWidget);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
    return $1;
}
}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
smalltalk.addMethod(
"_addInstanceVariableNamed_toClass_",
smalltalk.method({
selector: "addInstanceVariableNamed:toClass:",
fn: function (aString, aClass) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_copy", []);
    smalltalk.send($1, "_add_", [aString]);
    $2 = smalltalk.send($1, "_yourself", []);
    smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_addSubclassOf_named_instanceVariableNames_package_", [smalltalk.send(aClass, "_superclass", []), smalltalk.send(aClass, "_name", []), $2, smalltalk.send(smalltalk.send(aClass, "_package", []), "_name", [])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewClass",
smalltalk.method({
selector: "addNewClass",
fn: function () {
    var self = this;
    var $1, $2;
    var className;
    className = smalltalk.send(window, "_prompt_", ["New class"]);
    $1 = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [function () {return smalltalk.send(className, "_notEmpty", []);}]);
    if (smalltalk.assert($1)) {
        smalltalk.send(smalltalk.Object || Object, "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);
        smalltalk.send(self, "_resetClassesList", []);
        $2 = smalltalk.send(self, "_updateClassesList", []);
        smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewProtocol",
smalltalk.method({
selector: "addNewProtocol",
fn: function () {
    var self = this;
    var $1;
    var newProtocol;
    newProtocol = smalltalk.send(window, "_prompt_", ["New method protocol"]);
    $1 = smalltalk.send(smalltalk.send(newProtocol, "_notNil", []), "_and_", [function () {return smalltalk.send(newProtocol, "_notEmpty", []);}]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);
        smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_ajaxPutAt_data_",
smalltalk.method({
selector: "ajaxPutAt:data:",
fn: function (anURL, aString) {
    var self = this;
    smalltalk.send(jQuery, "_ajax_options_", [anURL, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]), smalltalk.send("data", "__minus_gt", [aString]), smalltalk.send("contentType", "__minus_gt", ["text/plain;charset=UTF-8"]), smalltalk.send("error", "__minus_gt", [function () {return smalltalk.send(window, "_alert_", [smalltalk.send("PUT request failed at:  ", "__comma", [anURL])]);}])])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_cancelChanges",
smalltalk.method({
selector: "cancelChanges",
fn: function () {
    var self = this;
    var $1;
    if (smalltalk.assert(self['@unsavedChanges'])) {
        $1 = smalltalk.send(window, "_confirm_", ["Cancel changes?"]);
    } else {
        $1 = true;
    }
    return $1;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classCommentSource",
smalltalk.method({
selector: "classCommentSource",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@selectedClass'], "_comment", []);
    return $1;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationSource",
smalltalk.method({
selector: "classDeclarationSource",
fn: function () {
    var self = this;
    var $1, $2, $3, $4;
    var stream;
    stream = smalltalk.send("", "_writeStream", []);
    if (($receiver = self['@selectedClass']) == nil ||
        $receiver == undefined) {
        $1 = smalltalk.send(self, "_classDeclarationTemplate", []);
        return $1;
    } else {
        self['@selectedClass'];
    }
    smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@selectedClass'], "_superclass", []), "_asString", [])]);
    smalltalk.send(stream, "_nextPutAll_", [" subclass: #"]);
    smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_name", [])]);
    smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.String || String, "_lf", []), "__comma", [smalltalk.send(smalltalk.String || String, "_tab", [])])]);
    $2 = smalltalk.send(stream, "_nextPutAll_", ["instanceVariableNames: '"]);
    smalltalk.send(smalltalk.send(self['@selectedClass'], "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(stream, "_nextPutAll_", [each]);}, function () {return smalltalk.send(stream, "_nextPutAll_", [" "]);}]);
    smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send("'", "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])]), "__comma", [smalltalk.send(smalltalk.String || String, "_tab", [])])]);
    smalltalk.send(stream, "_nextPutAll_", ["package: '"]);
    smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_category", [])]);
    $3 = smalltalk.send(stream, "_nextPutAll_", ["'"]);
    $4 = smalltalk.send(stream, "_contents", []);
    return $4;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationTemplate",
smalltalk.method({
selector: "classDeclarationTemplate",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("Object subclass: #NameOfSubclass\n\tinstanceVariableNames: ''\n\tpackage: '", "__comma", [smalltalk.send(self, "_selectedPackage", [])]), "__comma", ["'"]);
    return $1;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedPackage']]);}]), "_sort_", [function (a, b) {return smalltalk.send(smalltalk.send(a, "_name", []), "__lt", [smalltalk.send(b, "_name", [])]);}]), "_asSet", []);
    return $1;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_commitPackage",
smalltalk.method({
selector: "commitPackage",
fn: function () {
    var self = this;
    if (($receiver = self['@selectedPackage']) == nil ||
        $receiver == undefined) {
        self['@selectedPackage'];
    } else {
        var package;
        package = smalltalk.send(smalltalk.Package || Package, "_named_", [self['@selectedPackage']]);
        smalltalk.send([smalltalk.send(smalltalk.Exporter || Exporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".js"])]), smalltalk.send(smalltalk.StrippedExporter || StrippedExporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".deploy.js"])]), smalltalk.send(smalltalk.ChunkExporter || ChunkExporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathSt", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".st"])])], "_do_", [function (commitStrategy) {var fileContents;fileContents = smalltalk.send(smalltalk.send(smalltalk.send(commitStrategy, "_key", []), "_new", []), "_exportPackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_ajaxPutAt_data_", [smalltalk.send(commitStrategy, "_value", []), fileContents]);}]);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compile",
smalltalk.method({
selector: "compile",
fn: function () {
    var self = this;
    var $1, $2;
    var currentEditLine;
    smalltalk.send(self, "_disableSaveButton", []);
    currentEditLine = smalltalk.send(smalltalk.send(self['@sourceArea'], "_editor", []), "_getCursor", []);
    $1 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")]);
    if (smalltalk.assert($1)) {
        if (($receiver = self['@selectedClass']) == nil ||
            $receiver == undefined) {
            self['@selectedClass'];
        } else {
            smalltalk.send(self, "_compileClassComment", []);
        }
    } else {
        $2 = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}]);
        if (smalltalk.assert($2)) {
            smalltalk.send(self, "_compileMethodDefinition", []);
        } else {
            smalltalk.send(self, "_compileDefinition", []);
        }
    }
    smalltalk.send(smalltalk.send(self['@sourceArea'], "_editor", []), "_setCursor_", [currentEditLine]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileClassComment",
smalltalk.method({
selector: "compileClassComment",
fn: function () {
    var self = this;
    smalltalk.send(self['@selectedClass'], "_comment_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileDefinition",
smalltalk.method({
selector: "compileDefinition",
fn: function () {
    var self = this;
    var $1;
    var newClass;
    newClass = smalltalk.send(smalltalk.send(smalltalk.Compiler || Compiler, "_new", []), "_evaluateExpression_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
    smalltalk.send(self, "_resetClassesList", []);
    smalltalk.send(self, "_updateCategoriesList", []);
    $1 = smalltalk.send(self, "_updateClassesList", []);
    smalltalk.send(self, "_selectClass_", [newClass]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinition",
smalltalk.method({
selector: "compileMethodDefinition",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);
    } else {
        smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinitionFor_",
smalltalk.method({
selector: "compileMethodDefinitionFor:",
fn: function (aClass) {
    var self = this;
    var $1, $2, $3, $4, $5;
    var $early = {};
    try {
        var compiler;
        var method;
        var source;
        var node;
        source = smalltalk.send(self['@sourceArea'], "_val", []);
        if (($receiver = self['@selectedProtocol']) == nil ||
            $receiver == undefined) {
            self['@selectedProtocol'] = smalltalk.send(self['@selectedMethod'], "_category", []);
            self['@selectedProtocol'];
        } else {
            self['@selectedProtocol'];
        }
        compiler = smalltalk.send(smalltalk.Compiler || Compiler, "_new", []);
        smalltalk.send(compiler, "_source_", [source]);
        node = smalltalk.send(compiler, "_parse_", [source]);
        $1 = smalltalk.send(node, "_isParseFailure", []);
        if (smalltalk.assert($1)) {
            $2 = smalltalk.send(window, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [", position: "]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])]);
            return $2;
        }
        smalltalk.send(compiler, "_currentClass_", [aClass]);
        method = smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compileNode_", [node])]);
        smalltalk.send(method, "_category_", [self['@selectedProtocol']]);
        smalltalk.send(smalltalk.send(compiler, "_unknownVariables", []), "_do_", [function (each) {$3 = smalltalk.send(window, "_at_", [each]);if (($receiver = $3) == nil || $receiver == undefined) {$4 = smalltalk.send(window, "_confirm_", [smalltalk.send(smalltalk.send("Declare '", "__comma", [each]), "__comma", ["' as instance variable?"])]);if (smalltalk.assert($4)) {smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);$5 = smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass]);throw $early = [$5];}} else {return $3;}}]);
        smalltalk.send(aClass, "_addCompiledMethod_", [method]);
        smalltalk.send(compiler, "_setupClass_", [aClass]);
        smalltalk.send(self, "_updateMethodsList", []);
        smalltalk.send(self, "_selectMethod_", [method]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_copyClass",
smalltalk.method({
selector: "copyClass",
fn: function () {
    var self = this;
    var $1, $2;
    var className;
    className = smalltalk.send(window, "_prompt_", ["Copy class"]);
    $1 = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [function () {return smalltalk.send(className, "_notEmpty", []);}]);
    if (smalltalk.assert($1)) {
        smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_copyClass_named_", [smalltalk.send(self, "_selectedClass", []), className]);
        smalltalk.send(self, "_resetClassesList", []);
        $2 = smalltalk.send(self, "_updateClassesList", []);
        smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_declarationSource",
smalltalk.method({
selector: "declarationSource",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")]);
    if (smalltalk.assert($2)) {
        $1 = smalltalk.send(self, "_classDeclarationSource", []);
    } else {
        $1 = smalltalk.send(self, "_metaclassDeclarationSource", []);
    }
    return $1;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_disableSaveButton",
smalltalk.method({
selector: "disableSaveButton",
fn: function () {
    var self = this;
    if (($receiver = self['@saveButton']) == nil || $receiver == undefined) {
        self['@saveButton'];
    } else {
        smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);
    }
    self['@unsavedChanges'] = false;
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_dummyMethodSource",
smalltalk.method({
selector: "dummyMethodSource",
fn: function () {
    var self = this;
    return "messageSelectorAndArgumentNames\n\t\"comment stating purpose of message\"\n\n\t| temporary variable names |\n\tstatements";
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_handleSourceAreaKeyDown_",
smalltalk.method({
selector: "handleSourceAreaKeyDown:",
fn: function (anEvent) {
    var self = this;
    if (anEvent.ctrlKey) {
        if (anEvent.keyCode === 83) {
            self._compile();
            anEvent.preventDefault();
            return false;
        }
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideClassButtons",
smalltalk.method({
selector: "hideClassButtons",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_hide", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideMethodButtons",
smalltalk.method({
selector: "hideMethodButtons",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_hide", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
    self['@selectedTab'] = smalltalk.symbolFor("instance");
    self['@selectedPackage'] = smalltalk.send(smalltalk.send(self, "_packages", []), "_first", []);
    self['@unsavedChanges'] = false;
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@selectedClass']) == nil ||
        $receiver == undefined) {
        $1 = "Browser (nil)";
    } else {
        $1 = smalltalk.send("Browser: ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]);
    }
    return $1;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_metaclassDeclarationSource",
smalltalk.method({
selector: "metaclassDeclarationSource",
fn: function () {
    var self = this;
    var $1, $2;
    var stream;
    stream = smalltalk.send("", "_writeStream", []);
    if (($receiver = self['@selectedClass']) == nil ||
        $receiver == undefined) {
        self['@selectedClass'];
    } else {
        smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_asString", [])]);
        smalltalk.send(stream, "_nextPutAll_", [" class "]);
        $1 = smalltalk.send(stream, "_nextPutAll_", ["instanceVariableNames: '"]);
        smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(stream, "_nextPutAll_", [each]);}, function () {return smalltalk.send(stream, "_nextPutAll_", [" "]);}]);
        smalltalk.send(stream, "_nextPutAll_", ["'"]);
    }
    $2 = smalltalk.send(stream, "_contents", []);
    return $2;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methodSource",
smalltalk.method({
selector: "methodSource",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@selectedMethod']) == nil ||
        $receiver == undefined) {
        $1 = smalltalk.send(self, "_dummyMethodSource", []);
    } else {
        $1 = smalltalk.send(self['@selectedMethod'], "_source", []);
    }
    return $1;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methods",
smalltalk.method({
selector: "methods",
fn: function () {
    var self = this;
    var $1, $2, $4, $3;
    var klass;
    $1 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")]);
    if (smalltalk.assert($1)) {
        return [];
    }
    if (($receiver = self['@selectedClass']) == nil ||
        $receiver == undefined) {
        self['@selectedClass'];
    } else {
        $2 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")]);
        if (smalltalk.assert($2)) {
            klass = self['@selectedClass'];
        } else {
            klass = smalltalk.send(self['@selectedClass'], "_class", []);
        }
    }
    if (($receiver = self['@selectedProtocol']) == nil ||
        $receiver == undefined) {
        if (($receiver = klass) == nil || $receiver == undefined) {
            $4 = [];
        } else {
            $4 = smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []);
        }
    } else {
        $4 = smalltalk.send(smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedProtocol']]);}]);
    }
    $3 = smalltalk.send($4, "_sort_", [function (a, b) {return smalltalk.send(smalltalk.send(a, "_selector", []), "__lt", [smalltalk.send(b, "_selector", [])]);}]);
    return $3;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function () {
    var self = this;
    var $1, $2;
    var packages;
    packages = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_do_", [function (each) {$1 = smalltalk.send(packages, "_includes_", [smalltalk.send(each, "_category", [])]);if (!smalltalk.assert($1)) {return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);}}]);
    $2 = smalltalk.send(packages, "_sort", []);
    return $2;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
fn: function () {
    var self = this;
    var $1, $2, $3, $4, $5, $6;
    var klass;
    if (($receiver = self['@selectedClass']) == nil ||
        $receiver == undefined) {
        self['@selectedClass'];
    } else {
        $1 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")]);
        if (smalltalk.assert($1)) {
            return [];
        }
        $2 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")]);
        if (smalltalk.assert($2)) {
            klass = self['@selectedClass'];
        } else {
            klass = smalltalk.send(self['@selectedClass'], "_class", []);
        }
        $3 = smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_isEmpty", []);
        if (smalltalk.assert($3)) {
            $4 = smalltalk.send(smalltalk.Array || Array, "_with_", ["not yet classified"]);
            return $4;
        }
        $5 = smalltalk.send(klass, "_protocols", []);
        return $5;
    }
    $6 = smalltalk.send(smalltalk.Array || Array, "_new", []);
    return $6;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeClass",
smalltalk.method({
selector: "removeClass",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]), "__comma", ["?"])]);
    if (smalltalk.assert($1)) {
        smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removeClass_", [self['@selectedClass']]);
        smalltalk.send(self, "_resetClassesList", []);
        smalltalk.send(self, "_selectClass_", [nil]);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeMethod",
smalltalk.method({
selector: "removeMethod",
fn: function () {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(self, "_cancelChanges", []);
    if (smalltalk.assert($1)) {
        $2 = smalltalk.send(window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove #", "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", ["?"])]);
        if (smalltalk.assert($2)) {
            $3 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")]);
            if (smalltalk.assert($3)) {
                smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);
            } else {
                smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);
            }
            smalltalk.send(self, "_selectMethod_", [nil]);
        }
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removePackage",
smalltalk.method({
selector: "removePackage",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove the whole package ", "__comma", [self['@selectedPackage']]), "__comma", [" with all its classes?"])]);
    if (smalltalk.assert($1)) {
        smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removePackage_", [self['@selectedPackage']]);
        smalltalk.send(self, "_updateCategoriesList", []);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renameClass",
smalltalk.method({
selector: "renameClass",
fn: function () {
    var self = this;
    var $1, $2;
    var newName;
    newName = smalltalk.send(window, "_prompt_", [smalltalk.send("Rename class ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])])]);
    $1 = smalltalk.send(smalltalk.send(newName, "_notNil", []), "_and_", [function () {return smalltalk.send(newName, "_notEmpty", []);}]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self['@selectedClass'], "_rename_", [newName]);
        smalltalk.send(self, "_updateClassesList", []);
        $2 = smalltalk.send(self, "_updateSourceAndButtons", []);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renamePackage",
smalltalk.method({
selector: "renamePackage",
fn: function () {
    var self = this;
    var $1;
    var newName;
    newName = smalltalk.send(window, "_prompt_", [smalltalk.send("Rename package ", "__comma", [self['@selectedPackage']])]);
    if (($receiver = newName) == nil || $receiver == undefined) {
    } else {
        $1 = smalltalk.send(newName, "_notEmpty", []);
        if (smalltalk.assert($1)) {
            smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);
            smalltalk.send(self, "_updateCategoriesList", []);
        }
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["amber_sourceCode"]);
    $2 = smalltalk.send($1, "_with_", [function () {self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);self['@sourceArea'];smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);smalltalk.send(self['@sourceArea'], "_onKeyDown_", [function (e) {return smalltalk.send(self, "_handleSourceAreaKeyDown_", [e]);}]);return smalltalk.send(self['@sourceArea'], "_onKeyUp_", [function () {return smalltalk.send(self, "_updateStatus", []);}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    var $1;
    smalltalk.send(self, "_renderTopPanelOn_", [html]);
    smalltalk.send(self, "_renderTabsOn_", [html]);
    $1 = smalltalk.send(self, "_renderBottomPanelOn_", [html]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    var $1, $2, $4, $5, $6, $7, $8, $9, $3;
    self['@saveButton'] = smalltalk.send(html, "_button", []);
    smalltalk.send(self['@saveButton'], "_with_", ["Save"]);
    $1 = smalltalk.send(self['@saveButton'], "_onClick_", [function () {return smalltalk.send(self, "_compile", []);}]);
    self['@methodButtons'] = smalltalk.send(html, "_span", []);
    self['@classButtons'] = smalltalk.send(html, "_span", []);
    $2 = smalltalk.send(html, "_div", []);
    smalltalk.send($2, "_class_", ["right"]);
    $3 = smalltalk.send($2, "_with_", [function () {$4 = smalltalk.send(html, "_button", []);smalltalk.send($4, "_with_", ["DoIt"]);$5 = smalltalk.send($4, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_doIt", []);}]);$5;$6 = smalltalk.send(html, "_button", []);smalltalk.send($6, "_with_", ["PrintIt"]);$7 = smalltalk.send($6, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_printIt", []);}]);$7;$8 = smalltalk.send(html, "_button", []);smalltalk.send($8, "_with_", ["InspectIt"]);$9 = smalltalk.send($8, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_inspectIt", []);}]);return $9;}]);
    smalltalk.send(self, "_updateSourceAndButtons", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html) {
    var self = this;
    self['@tabsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_tabs amber_browser"]);
    smalltalk.send(self, "_updateTabsList", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $5, $6, $7, $8, $9, $10, $4, $11, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["top"]);
    $2 = smalltalk.send($1, "_with_", [function () {self['@packagesList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser packages"]);self['@packagesList'];$3 = smalltalk.send(html, "_div", []);smalltalk.send($3, "_class_", ["amber_packagesButtons"]);$4 = smalltalk.send($3, "_with_", [function () {$5 = smalltalk.send(html, "_button", []);smalltalk.send($5, "_title_", ["Commit classes in this package to disk"]);smalltalk.send($5, "_onClick_", [function () {return smalltalk.send(self, "_commitPackage", []);}]);$6 = smalltalk.send($5, "_with_", ["Commit"]);$6;$7 = smalltalk.send(html, "_button", []);smalltalk.send($7, "_title_", ["Rename package"]);smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(self, "_renamePackage", []);}]);$8 = smalltalk.send($7, "_with_", ["Rename"]);$8;$9 = smalltalk.send(html, "_button", []);smalltalk.send($9, "_title_", ["Remove this package from the system"]);smalltalk.send($9, "_onClick_", [function () {return smalltalk.send(self, "_removePackage", []);}]);$10 = smalltalk.send($9, "_with_", ["Remove"]);return $10;}]);$4;self['@classesList'] = smalltalk.send(smalltalk.ClassesList || ClassesList, "_on_", [self]);self['@classesList'];smalltalk.send(self['@classesList'], "_renderOn_", [html]);self['@protocolsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser protocols"]);self['@protocolsList'];self['@methodsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser methods"]);self['@methodsList'];smalltalk.send(self, "_updateCategoriesList", []);smalltalk.send(self, "_updateClassesList", []);smalltalk.send(self, "_updateProtocolsList", []);$11 = smalltalk.send(self, "_updateMethodsList", []);$11;return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["amber_clear"]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_resetClassesList",
smalltalk.method({
selector: "resetClassesList",
fn: function () {
    var self = this;
    smalltalk.send(self['@classesList'], "_resetNodes", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(self, "_cancelChanges", []);
    if (smalltalk.assert($1)) {
        var searchedClass;
        searchedClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);
        $2 = smalltalk.send(searchedClass, "_isClass", []);
        if (smalltalk.assert($2)) {
            smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);
        } else {
            smalltalk.send(self, "_searchReferencesOf_", [aString]);
        }
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchClassReferences",
smalltalk.method({
selector: "searchClassReferences",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [smalltalk.send(self['@selectedClass'], "_name", [])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchReferencesOf_",
smalltalk.method({
selector: "searchReferencesOf:",
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [aString]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectCategory_",
smalltalk.method({
selector: "selectCategory:",
fn: function (aCategory) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(self, "_cancelChanges", []);
    if (smalltalk.assert($1)) {
        self['@selectedPackage'] = aCategory;
        self['@selectedPackage'];
        self['@selectedMethod'] = nil;
        self['@selectedProtocol'] = self['@selectedMethod'];
        self['@selectedClass'] = self['@selectedProtocol'];
        self['@selectedClass'];
        smalltalk.send(self, "_resetClassesList", []);
        smalltalk.send(self, "_updateCategoriesList", []);
        smalltalk.send(self, "_updateClassesList", []);
        smalltalk.send(self, "_updateProtocolsList", []);
        smalltalk.send(self, "_updateMethodsList", []);
        $2 = smalltalk.send(self, "_updateSourceAndButtons", []);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectClass_",
smalltalk.method({
selector: "selectClass:",
fn: function (aClass) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(self, "_cancelChanges", []);
    if (smalltalk.assert($1)) {
        self['@selectedClass'] = aClass;
        self['@selectedClass'];
        self['@selectedMethod'] = nil;
        self['@selectedProtocol'] = self['@selectedMethod'];
        self['@selectedProtocol'];
        smalltalk.send(self, "_updateClassesList", []);
        smalltalk.send(self, "_updateProtocolsList", []);
        smalltalk.send(self, "_updateMethodsList", []);
        $2 = smalltalk.send(self, "_updateSourceAndButtons", []);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectMethod_",
smalltalk.method({
selector: "selectMethod:",
fn: function (aMethod) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(self, "_cancelChanges", []);
    if (smalltalk.assert($1)) {
        self['@selectedMethod'] = aMethod;
        self['@selectedMethod'];
        smalltalk.send(self, "_updateProtocolsList", []);
        smalltalk.send(self, "_updateMethodsList", []);
        $2 = smalltalk.send(self, "_updateSourceAndButtons", []);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectProtocol_",
smalltalk.method({
selector: "selectProtocol:",
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(self, "_cancelChanges", []);
    if (smalltalk.assert($1)) {
        self['@selectedProtocol'] = aString;
        self['@selectedProtocol'];
        self['@selectedMethod'] = nil;
        self['@selectedMethod'];
        smalltalk.send(self, "_updateProtocolsList", []);
        smalltalk.send(self, "_updateMethodsList", []);
        $2 = smalltalk.send(self, "_updateSourceAndButtons", []);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
fn: function (aString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_cancelChanges", []);
    if (smalltalk.assert($1)) {
        self['@selectedTab'] = aString;
        self['@selectedTab'];
        smalltalk.send(self, "_selectProtocol_", [nil]);
        smalltalk.send(self, "_updateTabsList", []);
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
fn: function () {
    var self = this;
    return self['@selectedClass'];
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
fn: function () {
    var self = this;
    return self['@selectedPackage'];
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_setMethodProtocol_",
smalltalk.method({
selector: "setMethodProtocol:",
fn: function (aString) {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(self, "_cancelChanges", []);
    if (smalltalk.assert($1)) {
        $2 = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString]);
        if (smalltalk.assert($2)) {
            smalltalk.send(self['@selectedMethod'], "_category_", [aString]);
            self['@selectedProtocol'] = aString;
            self['@selectedProtocol'];
            self['@selectedMethod'] = self['@selectedMethod'];
            self['@selectedMethod'];
            smalltalk.send(self, "_updateProtocolsList", []);
            smalltalk.send(self, "_updateMethodsList", []);
            $3 = smalltalk.send(self, "_updateSourceAndButtons", []);
        } else {
            smalltalk.send(self, "_addNewProtocol", []);
        }
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showClassButtons",
smalltalk.method({
selector: "showClassButtons",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_show", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showMethodButtons",
smalltalk.method({
selector: "showMethodButtons",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_show", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
    var self = this;
    var $1, $3, $2, $4;
    $1 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")]);
    if (!smalltalk.assert($1)) {
        $3 = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}]);
        if (smalltalk.assert($3)) {
            $2 = smalltalk.send(self, "_methodSource", []);
        } else {
            $2 = smalltalk.send(self, "_declarationSource", []);
        }
        return $2;
    }
    if (($receiver = self['@selectedClass']) == nil ||
        $receiver == undefined) {
        $4 = "";
    } else {
        $4 = smalltalk.send(self, "_classCommentSource", []);
    }
    return $4;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
fn: function () {
    var self = this;
    var $1, $2, $3;
    smalltalk.send(self['@packagesList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [function (each) {var li;var label;$1 = smalltalk.send(each, "_isEmpty", []);if (smalltalk.assert($1)) {label = "Unclassified";} else {label = each;}li = smalltalk.send(html, "_li", []);$2 = smalltalk.send(self['@selectedPackage'], "__eq", [each]);if (smalltalk.assert($2)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(li, "_with_", [label]);$3 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectCategory_", [each]);}]);return $3;}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_update", []);
    smalltalk.send(self['@classesList'], "_updateNodes", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(self['@methodsList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [function (each) {var li;li = smalltalk.send(html, "_li", []);$1 = smalltalk.send(self['@selectedMethod'], "__eq", [each]);if (smalltalk.assert($1)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(li, "_with_", [smalltalk.send(each, "_selector", [])]);$2 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectMethod_", [each]);}]);return $2;}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateProtocolsList",
smalltalk.method({
selector: "updateProtocolsList",
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(self['@protocolsList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [function (each) {var li;li = smalltalk.send(html, "_li", []);$1 = smalltalk.send(self['@selectedProtocol'], "__eq", [each]);if (smalltalk.assert($1)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(li, "_with_", [each]);$2 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectProtocol_", [each]);}]);return $2;}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateSourceAndButtons",
smalltalk.method({
selector: "updateSourceAndButtons",
fn: function () {
    var self = this;
    var $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $14, $15, $16, $17, $18, $19, $13, $20, $22, $23, $24, $25, $21, $26, $27;
    var currentProtocol;
    smalltalk.send(self, "_disableSaveButton", []);
    smalltalk.send(self['@classButtons'], "_contents_", [function (html) {$1 = smalltalk.send(html, "_button", []);smalltalk.send($1, "_title_", ["Create a new class"]);smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_addNewClass", []);}]);$2 = smalltalk.send($1, "_with_", ["New class"]);$2;$3 = smalltalk.send(html, "_button", []);smalltalk.send($3, "_with_", ["Rename class"]);$4 = smalltalk.send($3, "_onClick_", [function () {return smalltalk.send(self, "_renameClass", []);}]);$4;$5 = smalltalk.send(html, "_button", []);smalltalk.send($5, "_with_", ["Copy class"]);$6 = smalltalk.send($5, "_onClick_", [function () {return smalltalk.send(self, "_copyClass", []);}]);$6;$7 = smalltalk.send(html, "_button", []);smalltalk.send($7, "_with_", ["Remove class"]);$8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(self, "_removeClass", []);}]);$8;$9 = smalltalk.send(html, "_button", []);smalltalk.send($9, "_with_", ["References"]);$10 = smalltalk.send($9, "_onClick_", [function () {return smalltalk.send(self, "_searchClassReferences", []);}]);return $10;}]);
    smalltalk.send(self['@methodButtons'], "_contents_", [function (html) {var protocolSelect;var referencesSelect;$11 = smalltalk.send(html, "_button", []);smalltalk.send($11, "_with_", ["Remove method"]);$12 = smalltalk.send($11, "_onClick_", [function () {return smalltalk.send(self, "_removeMethod", []);}]);$12;protocolSelect = smalltalk.send(html, "_select", []);smalltalk.send(protocolSelect, "_onChange_", [function () {return smalltalk.send(self, "_setMethodProtocol_", [smalltalk.send(smalltalk.send(protocolSelect, "_asJQuery", []), "_val", [])]);}]);$13 = smalltalk.send(protocolSelect, "_with_", [function () {$14 = smalltalk.send(html, "_option", []);smalltalk.send($14, "_with_", ["Method protocol"]);$15 = smalltalk.send($14, "_at_put_", ["disabled", "disabled"]);$15;$16 = smalltalk.send(html, "_option", []);smalltalk.send($16, "_class_", ["important"]);$17 = smalltalk.send($16, "_with_", ["New..."]);$17;currentProtocol = self['@selectedProtocol'];currentProtocol;$18 = smalltalk.send(smalltalk.send(currentProtocol, "_isNil", []), "_and_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}]);if (smalltalk.assert($18)) {currentProtocol = smalltalk.send(self['@selectedMethod'], "_category", []);currentProtocol;}return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [function (each) {option = smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);option;$19 = smalltalk.send(currentProtocol, "__eq", [each]);if (smalltalk.assert($19)) {return smalltalk.send(option, "_at_put_", ["selected", "selected"]);}}]);}]);$13;$20 = smalltalk.send(self['@selectedMethod'], "_isNil", []);if (!smalltalk.assert($20)) {referencesSelect = smalltalk.send(html, "_select", []);smalltalk.send(referencesSelect, "_onChange_", [function () {return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);}]);$21 = smalltalk.send(referencesSelect, "_with_", [function () {var option;$22 = smalltalk.send(html, "_option", []);smalltalk.send($22, "_with_", ["References"]);$23 = smalltalk.send($22, "_at_put_", ["disabled", "disabled"]);$23;$24 = smalltalk.send(html, "_option", []);smalltalk.send($24, "_class_", ["important"]);$25 = smalltalk.send($24, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);$25;return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);}]);}]);return $21;}}]);
    $26 = smalltalk.send(self['@selectedMethod'], "_isNil", []);
    if (smalltalk.assert($26)) {
        smalltalk.send(self, "_hideMethodButtons", []);
        $27 = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [function () {return smalltalk.send(self['@selectedProtocol'], "_notNil", []);}]);
        if (smalltalk.assert($27)) {
            smalltalk.send(self, "_hideClassButtons", []);
        } else {
            smalltalk.send(self, "_showClassButtons", []);
        }
    } else {
        smalltalk.send(self, "_hideClassButtons", []);
        smalltalk.send(self, "_showMethodButtons", []);
    }
    smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])]);
    if (smalltalk.assert($1)) {
        if (($receiver = self['@saveButton']) == nil ||
            $receiver == undefined) {
            self['@saveButton'];
        } else {
            smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);
        }
        self['@unsavedChanges'] = false;
        self['@unsavedChanges'];
    } else {
        if (($receiver = self['@saveButton']) == nil ||
            $receiver == undefined) {
            self['@saveButton'];
        } else {
            smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);
        }
        self['@unsavedChanges'] = true;
        self['@unsavedChanges'];
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateTabsList",
smalltalk.method({
selector: "updateTabsList",
fn: function () {
    var self = this;
    var $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12;
    smalltalk.send(self['@tabsList'], "_contents_", [function (html) {var li;li = smalltalk.send(html, "_li", []);$1 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")]);if (smalltalk.assert($1)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(li, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);$2 = smalltalk.send(html, "_span", []);smalltalk.send($2, "_class_", ["mtab"]);$3 = smalltalk.send($2, "_with_", ["Instance"]);$3;return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);$4 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("instance")]);}]);$4;li = smalltalk.send(html, "_li", []);$5 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("class")]);if (smalltalk.assert($5)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(li, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);$6 = smalltalk.send(html, "_span", []);smalltalk.send($6, "_class_", ["mtab"]);$7 = smalltalk.send($6, "_with_", ["Class"]);$7;return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);$8 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("class")]);}]);$8;li = smalltalk.send(html, "_li", []);$9 = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")]);if (smalltalk.assert($9)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(li, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);$10 = smalltalk.send(html, "_span", []);smalltalk.send($10, "_class_", ["mtab"]);$11 = smalltalk.send($10, "_with_", ["Comment"]);$11;return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);$12 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("comment")]);}]);return $12;}]);
    return self;
}
}),
smalltalk.Browser);


smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
fn: function () {
    var self = this;
    return "js";
}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
fn: function () {
    var self = this;
    return "st";
}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
    return self;
}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_openOn_",
smalltalk.method({
selector: "openOn:",
fn: function (aClass) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_open", []);
    smalltalk.send($2, "_selectCategory_", [smalltalk.send(aClass, "_category", [])]);
    $3 = smalltalk.send($2, "_selectClass_", [aClass]);
    $1 = $3;
    return $1;
}
}),
smalltalk.Browser.klass);


smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_method", []);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self['@selectedContext'], "_temps", []), "_collect_", [function (each) {return nil;}]);
    } else {
        $1 = smalltalk.send(smalltalk.send(self, "_method", []), "_arguments", []);
    }
    return $1;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error",
smalltalk.method({
selector: "error",
fn: function () {
    var self = this;
    return self['@error'];
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function (anError) {
    var self = this;
    self['@error'] = anError;
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
    smalltalk.send(self['@unsavedChanges'], "__eq", [false]);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_inspectSelectedVariable",
smalltalk.method({
selector: "inspectSelectedVariable",
fn: function () {
    var self = this;
    smalltalk.send(self['@selectedVariable'], "_inspect", []);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "[Debugger]";
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_methodAt_", [smalltalk.send(self['@selectedContext'], "_selector", [])]);
    return $1;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_proceed",
smalltalk.method({
selector: "proceed",
fn: function () {
    var self = this;
    smalltalk.send(self, "_close", []);
    smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_perform_withArguments_", [smalltalk.send(self['@selectedContext'], "_selector", []), smalltalk.send(self['@selectedContext'], "_temps", [])]);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@selectedContext'], "_receiver", []);
    return $1;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["amber_sourceCode debugger"]);
    $2 = smalltalk.send($1, "_with_", [function () {self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);self['@sourceArea'];return smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);}]);
    self['@ul2'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column debugger variables"]);
    self['@inspector'] = smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["amber_column debugger inspector"]);
    smalltalk.send(self['@sourceArea'], "_onKeyUp_", [function () {return smalltalk.send(self, "_updateStatus", []);}]);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    var $1;
    smalltalk.send(self, "_renderTopPanelOn_", [html]);
    $1 = smalltalk.send(self, "_renderBottomPanelOn_", [html]);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    var $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15;
    $1 = smalltalk.send(html, "_button", []);
    smalltalk.send($1, "_with_", ["Save"]);
    $2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_save", []);}]);
    self['@saveButton'] = $2;
    $3 = smalltalk.send(html, "_button", []);
    smalltalk.send($3, "_with_", ["DoIt"]);
    $4 = smalltalk.send($3, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_doIt", []);}]);
    $5 = smalltalk.send(html, "_button", []);
    smalltalk.send($5, "_with_", ["PrintIt"]);
    $6 = smalltalk.send($5, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_printIt", []);}]);
    $7 = smalltalk.send(html, "_button", []);
    smalltalk.send($7, "_with_", ["InspectIt"]);
    $8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_inspectIt", []);}]);
    $9 = smalltalk.send(html, "_button", []);
    smalltalk.send($9, "_with_", ["Proceed"]);
    $10 = smalltalk.send($9, "_onClick_", [function () {return smalltalk.send(self, "_proceed", []);}]);
    $11 = smalltalk.send(html, "_button", []);
    smalltalk.send($11, "_with_", ["Abandon"]);
    $12 = smalltalk.send($11, "_onClick_", [function () {return smalltalk.send(self, "_close", []);}]);
    $13 = smalltalk.send(html, "_button", []);
    smalltalk.send($13, "_class_", ["amber_button debugger inspect"]);
    smalltalk.send($13, "_with_", ["Inspect"]);
    $14 = smalltalk.send($13, "_onClick_", [function () {return smalltalk.send(self, "_inspectSelectedVariable", []);}]);
    self['@inspectButton'] = $14;
    smalltalk.send(self, "_updateSourceArea", []);
    smalltalk.send(self, "_updateStatus", []);
    smalltalk.send(self, "_updateVariablesList", []);
    $15 = smalltalk.send(self, "_updateInspector", []);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderContext_on_",
smalltalk.method({
selector: "renderContext:on:",
fn: function (aContext, html) {
    var self = this;
    var $1, $2, $3;
    var li;
    li = smalltalk.send(html, "_li", []);
    $1 = smalltalk.send(self['@selectedContext'], "__eq", [aContext]);
    if (smalltalk.assert($1)) {
        smalltalk.send(li, "_class_", ["selected"]);
    }
    smalltalk.send(li, "_with_", [smalltalk.send(aContext, "_asString", [])]);
    $2 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectContext_", [aContext]);}]);
    $3 = smalltalk.send(aContext, "_home", []);
    if (($receiver = $3) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(self, "_renderContext_on_", [smalltalk.send(aContext, "_home", []), html]);
    }
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $4, $5, $6, $2;
    self['@selectedContext'] = smalltalk.send(smalltalk.send(self, "_error", []), "_context", []);
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["top"]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_div", []);smalltalk.send($3, "_class_", ["label"]);$4 = smalltalk.send($3, "_with_", [smalltalk.send(smalltalk.send(self, "_error", []), "_messageText", [])]);$4;$5 = smalltalk.send(html, "_ul", []);smalltalk.send($5, "_class_", ["amber_column debugger contexts"]);$6 = smalltalk.send($5, "_with_", [function () {return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(smalltalk.send(self, "_error", []), "_context", []), html]);}]);self['@ul'] = $6;return self['@ul'];}]);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_save",
smalltalk.method({
selector: "save",
fn: function () {
    var self = this;
    var protocol;
    protocol = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_methodDictionary", []), "_at_", [smalltalk.send(self['@selectedContext'], "_selector", [])]), "_category", []);
    smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_compile_category_", [smalltalk.send(self['@sourceArea'], "_val", []), protocol]);
    smalltalk.send(self, "_updateStatus", []);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_selectContext_",
smalltalk.method({
selector: "selectContext:",
fn: function (aContext) {
    var self = this;
    var $1;
    self['@selectedContext'] = aContext;
    self['@selectedVariable'] = nil;
    self['@selectedVariableName'] = nil;
    smalltalk.send(self, "_updateContextsList", []);
    smalltalk.send(self, "_updateSourceArea", []);
    smalltalk.send(self, "_updateInspector", []);
    smalltalk.send(self, "_updateVariablesList", []);
    $1 = smalltalk.send(self, "_updateStatus", []);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_selectVariable_named_",
smalltalk.method({
selector: "selectVariable:named:",
fn: function (anObject, aString) {
    var self = this;
    self['@selectedVariable'] = anObject;
    self['@selectedVariableName'] = aString;
    smalltalk.send(self['@inspector'], "_contents_", [function (html) {return smalltalk.send(html, "_with_", [smalltalk.send(anObject, "_printString", [])]);}]);
    smalltalk.send(self, "_updateVariablesList", []);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_method", []);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = "Method doesn't exist!";
    } else {
        $1 = smalltalk.send(smalltalk.send(self, "_method", []), "_source", []);
    }
    return $1;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateContextsList",
smalltalk.method({
selector: "updateContextsList",
fn: function () {
    var self = this;
    smalltalk.send(self['@ul'], "_contents_", [function (html) {return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(smalltalk.send(self, "_error", []), "_context", []), html]);}]);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateInspector",
smalltalk.method({
selector: "updateInspector",
fn: function () {
    var self = this;
    smalltalk.send(self['@inspector'], "_contents_", [function (html) {}]);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateSourceArea",
smalltalk.method({
selector: "updateSourceArea",
fn: function () {
    var self = this;
    smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])]);
    if (smalltalk.assert($1)) {
        if (($receiver = self['@saveButton']) == nil ||
            $receiver == undefined) {
            self['@saveButton'];
        } else {
            smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);
        }
        self['@unsavedChanges'] = false;
        self['@unsavedChanges'];
    } else {
        if (($receiver = self['@saveButton']) == nil ||
            $receiver == undefined) {
            self['@saveButton'];
        } else {
            smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);
        }
        self['@unsavedChanges'] = true;
        self['@unsavedChanges'];
    }
    return self;
}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateVariablesList",
smalltalk.method({
selector: "updateVariablesList",
fn: function () {
    var self = this;
    var $1, $2, $3, $4, $5, $6, $7, $8, $9;
    smalltalk.send(self['@ul2'], "_contents_", [function (html) {var li;$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_with_", ["self"]);$2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_selectVariable_named_", [smalltalk.send(self, "_receiver", []), "self"]);}]);li = $2;$3 = smalltalk.send(self['@selectedVariableName'], "__eq", ["self"]);if (smalltalk.assert($3)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(smalltalk.send(self, "_arguments", []), "_withIndexDo_", [function (each, index) {var param;param = smalltalk.send(smalltalk.send(self['@selectedContext'], "_temps", []), "_at_", [index]);$4 = smalltalk.send(html, "_li", []);smalltalk.send($4, "_with_", [each]);$5 = smalltalk.send($4, "_onClick_", [function () {return smalltalk.send(self, "_selectVariable_named_", [param, each]);}]);li = $5;li;$6 = smalltalk.send(self['@selectedVariableName'], "__eq", [each]);if (smalltalk.assert($6)) {return smalltalk.send(li, "_class_", ["selected"]);}}]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_allInstanceVariableNames", []), "_do_", [function (each) {var ivar;ivar = smalltalk.send(smalltalk.send(self, "_receiver", []), "_instVarAt_", [each]);$7 = smalltalk.send(html, "_li", []);smalltalk.send($7, "_with_", [each]);$8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(self, "_selectVariable_named_", [ivar, each]);}]);li = $8;li;$9 = smalltalk.send(self['@selectedVariableName'], "__eq", [each]);if (smalltalk.assert($9)) {return smalltalk.send(li, "_class_", ["selected"]);}}]);}]);
    if (($receiver = self['@selectedVariable']) == nil ||
        $receiver == undefined) {
        smalltalk.send(self['@inspectButton'], "_at_put_", ["disabled", true]);
    } else {
        smalltalk.send(self['@inspectButton'], "_removeAt_", ["disabled"]);
    }
    return self;
}
}),
smalltalk.Debugger);



smalltalk.addClass('IDETranscript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [""]);
    return self;
}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val", []), "__comma", [smalltalk.send(smalltalk.String || String, "_cr", [])])]);
    return self;
}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "Transcript";
}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.TabManager || TabManager, "_current", []);
    smalltalk.send($1, "_open", []);
    $2 = smalltalk.send($1, "_selectTab_", [self]);
    return self;
}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    var $1;
    self['@textarea'] = smalltalk.send(html, "_textarea", []);
    smalltalk.send(self['@textarea'], "_class_", ["amber_transcript"]);
    $1 = smalltalk.send(self['@textarea'], "_at_put_", ["spellcheck", "false"]);
    return self;
}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_button", []);
    smalltalk.send($1, "_with_", ["Clear transcript"]);
    $2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_clear", []);}]);
    return self;
}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (anObject) {
    var self = this;
    if (($receiver = self['@textarea']) == nil || $receiver == undefined) {
        smalltalk.send(self, "_open", []);
    } else {
        self['@textarea'];
    }
    smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val", []), "__comma", [smalltalk.send(anObject, "_asString", [])])]);
    return self;
}
}),
smalltalk.IDETranscript);


smalltalk.IDETranscript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@current']) == nil || $receiver == undefined) {
        self['@current'] = smalltalk.send(self, "_new", [], smalltalk.TabWidget.klass);
        $1 = self['@current'];
    } else {
        $1 = self['@current'];
    }
    return $1;
}
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.Transcript || Transcript, "_register_", [smalltalk.send(self, "_current", [])]);
    return self;
}
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    smalltalk.send(self, "_shouldNotImplement", []);
    return self;
}
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.TabManager || TabManager, "_current", []);
    smalltalk.send($1, "_open", []);
    $2 = smalltalk.send($1, "_selectTab_", [smalltalk.send(self, "_current", [])]);
    return self;
}
}),
smalltalk.IDETranscript.klass);


smalltalk.addClass('Inspector', smalltalk.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'diveButton', 'sourceArea'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_dive",
smalltalk.method({
selector: "dive",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_inspect", []);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_inspect_",
smalltalk.method({
selector: "inspect:",
fn: function (anObject) {
    var self = this;
    self['@object'] = anObject;
    self['@variables'] = [];
    smalltalk.send(self['@object'], "_inspectOn_", [self]);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@label']) == nil || $receiver == undefined) {
        $1 = "Inspector (nil)";
    } else {
        $1 = self['@label'];
    }
    return $1;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(self, "_inspect_", [self['@object']]);
    smalltalk.send(self, "_updateVariablesList", []);
    $1 = smalltalk.send(self, "_updateValueTextarea", []);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $4, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["amber_sourceCode"]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);smalltalk.send($3, "_receiver_", [self['@object']]);smalltalk.send($3, "_onDoIt_", [function () {return smalltalk.send(self, "_refresh", []);}]);$4 = smalltalk.send($3, "_yourself", []);self['@sourceArea'] = $4;self['@sourceArea'];return smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);}]);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    var $1;
    smalltalk.send(self, "_renderTopPanelOn_", [html]);
    $1 = smalltalk.send(self, "_renderBottomPanelOn_", [html]);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    var $1, $2, $3, $4, $5, $6;
    $1 = smalltalk.send(html, "_button", []);
    smalltalk.send($1, "_with_", ["DoIt"]);
    $2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_doIt", []);}]);
    $3 = smalltalk.send(html, "_button", []);
    smalltalk.send($3, "_with_", ["PrintIt"]);
    $4 = smalltalk.send($3, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_printIt", []);}]);
    $5 = smalltalk.send(html, "_button", []);
    smalltalk.send($5, "_with_", ["InspectIt"]);
    $6 = smalltalk.send($5, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_inspectIt", []);}]);
    smalltalk.send(self, "_updateButtons", []);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $4, $5, $7, $8, $9, $10, $6, $2, $11;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["top"]);
    $2 = smalltalk.send($1, "_with_", [function () {self['@variablesList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column variables"]);self['@variablesList'];$3 = smalltalk.send(html, "_textarea", []);smalltalk.send($3, "_class_", ["amber_column value"]);$4 = smalltalk.send($3, "_at_put_", ["readonly", "readonly"]);self['@valueTextarea'] = $4;self['@valueTextarea'];$5 = smalltalk.send(html, "_div", []);smalltalk.send($5, "_class_", ["amber_tabs inspector"]);$6 = smalltalk.send($5, "_with_", [function () {$7 = smalltalk.send(html, "_button", []);smalltalk.send($7, "_class_", ["amber_button inspector refresh"]);smalltalk.send($7, "_with_", ["Refresh"]);$8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(self, "_refresh", []);}]);$8;$9 = smalltalk.send(html, "_button", []);smalltalk.send($9, "_class_", ["amber_button inspector dive"]);smalltalk.send($9, "_with_", ["Dive"]);$10 = smalltalk.send($9, "_onClick_", [function () {return smalltalk.send(self, "_dive", []);}]);self['@diveButton'] = $10;return self['@diveButton'];}]);$6;return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["amber_clear"]);}]);
    smalltalk.send(self, "_updateVariablesList", []);
    $11 = smalltalk.send(self, "_updateValueTextarea", []);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectVariable_",
smalltalk.method({
selector: "selectVariable:",
fn: function (aString) {
    var self = this;
    var $1;
    smalltalk.send(self, "_selectedVariable_", [aString]);
    smalltalk.send(self, "_updateVariablesList", []);
    smalltalk.send(self, "_updateValueTextarea", []);
    $1 = smalltalk.send(self, "_updateButtons", []);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectedVariable",
smalltalk.method({
selector: "selectedVariable",
fn: function () {
    var self = this;
    return self['@selectedVariable'];
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectedVariable_",
smalltalk.method({
selector: "selectedVariable:",
fn: function (aString) {
    var self = this;
    self['@selectedVariable'] = aString;
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_setLabel_",
smalltalk.method({
selector: "setLabel:",
fn: function (aString) {
    var self = this;
    self['@label'] = aString;
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_setVariables_",
smalltalk.method({
selector: "setVariables:",
fn: function (aCollection) {
    var self = this;
    self['@variables'] = aCollection;
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_sourceArea",
smalltalk.method({
selector: "sourceArea",
fn: function () {
    var self = this;
    return self['@sourceArea'];
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateButtons",
smalltalk.method({
selector: "updateButtons",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "_notNil", []), "_and_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_notNil", []);}]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self['@diveButton'], "_removeAt_", ["disabled"]);
    } else {
        smalltalk.send(self['@diveButton'], "_at_put_", ["disabled", true]);
    }
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateValueTextarea",
smalltalk.method({
selector: "updateValueTextarea",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "_isNil", []);
    if (smalltalk.assert($2)) {
        $1 = "";
    } else {
        $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_printString", []);
    }
    smalltalk.send(smalltalk.send(self['@valueTextarea'], "_asJQuery", []), "_val_", [$1]);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateVariablesList",
smalltalk.method({
selector: "updateVariablesList",
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(self['@variablesList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_keys", []), "_do_", [function (each) {var li;li = smalltalk.send(html, "_li", []);smalltalk.send(li, "_with_", [each]);$1 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_selectVariable_", [each]);}]);$1;$2 = smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "__eq", [each]);if (smalltalk.assert($2)) {return smalltalk.send(li, "_class_", ["selected"]);}}]);}]);
    return self;
}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function () {
    var self = this;
    return self['@variables'];
}
}),
smalltalk.Inspector);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_inspect_", [anObject]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.Inspector.klass);


smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'IDE');
smalltalk.addMethod(
"_percent",
smalltalk.method({
selector: "percent",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@percent']) == nil || $receiver == undefined) {
        $1 = 0;
    } else {
        $1 = self['@percent'];
    }
    return $1;
}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_percent_",
smalltalk.method({
selector: "percent:",
fn: function (aNumber) {
    var self = this;
    self['@percent'] = aNumber;
    return self;
}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["progress_bar"]);
    $2 = smalltalk.send($1, "_yourself", []);
    self['@div'] = $2;
    smalltalk.send(self, "_renderProgressBar", []);
    return self;
}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_renderProgressBar",
smalltalk.method({
selector: "renderProgressBar",
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(self['@div'], "_contents_", [function (html) {$1 = smalltalk.send(html, "_div", []);smalltalk.send($1, "_class_", ["progress"]);$2 = smalltalk.send($1, "_style_", [smalltalk.send(smalltalk.send("width:", "__comma", [smalltalk.send(smalltalk.send(self, "_percent", []), "_asString", [])]), "__comma", ["%"])]);return $2;}]);
    return self;
}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_updatePercent_",
smalltalk.method({
selector: "updatePercent:",
fn: function (aNumber) {
    var self = this;
    smalltalk.send(self, "_percent_", [aNumber]);
    smalltalk.send(self, "_renderProgressBar", []);
    return self;
}
}),
smalltalk.ProgressBar);



smalltalk.addClass('ReferencesBrowser', smalltalk.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList', 'matches', 'matchesList'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_classesAndMetaclasses",
smalltalk.method({
selector: "classesAndMetaclasses",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_collect_", [function (each) {return smalltalk.send(each, "_class", []);}])]);
    return $1;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_implementors",
smalltalk.method({
selector: "implementors",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@implementors']) == nil ||
        $receiver == undefined) {
        self['@implementors'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
        $1 = self['@implementors'];
    } else {
        $1 = self['@implementors'];
    }
    return $1;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
    self['@selector'] = "";
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "[References]";
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_matches",
smalltalk.method({
selector: "matches",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@matches']) == nil || $receiver == undefined) {
        self['@matches'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
        $1 = self['@matches'];
    } else {
        $1 = self['@matches'];
    }
    return $1;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_openBrowserOn_",
smalltalk.method({
selector: "openBrowserOn:",
fn: function (aMethod) {
    var self = this;
    var $2, $1, $3, $4;
    var browser;
    $2 = smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_isMetaclass", []);
    if (smalltalk.assert($2)) {
        $1 = smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_instanceClass", []);
    } else {
        $1 = smalltalk.send(aMethod, "_methodClass", []);
    }
    browser = smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [$1]);
    $3 = smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_isMetaclass", []);
    if (smalltalk.assert($3)) {
        smalltalk.send(browser, "_selectTab_", [smalltalk.symbolFor("class")]);
    }
    smalltalk.send(browser, "_selectProtocol_", [smalltalk.send(aMethod, "_category", [])]);
    $4 = smalltalk.send(browser, "_selectMethod_", [aMethod]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@referencedClasses']) == nil ||
        $receiver == undefined) {
        self['@referencedClasses'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
        $1 = self['@referencedClasses'];
    } else {
        $1 = self['@referencedClasses'];
    }
    return $1;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    var $1;
    smalltalk.send(self, "_renderInputOn_", [html]);
    smalltalk.send(self, "_renderImplementorsOn_", [html]);
    smalltalk.send(self, "_renderSendersOn_", [html]);
    smalltalk.send(self, "_renderReferencedClassesOn_", [html]);
    $1 = smalltalk.send(self, "_renderMatchesOn_", [html]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderImplementorsOn_",
smalltalk.method({
selector: "renderImplementorsOn:",
fn: function (html) {
    var self = this;
    self['@implementorsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column implementors"]);
    smalltalk.send(self, "_updateImplementorsList", []);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderInputOn_",
smalltalk.method({
selector: "renderInputOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_input", []);
    smalltalk.send($1, "_class_", ["implementors"]);
    $2 = smalltalk.send($1, "_yourself", []);
    self['@input'] = $2;
    smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val_", [self['@selector']]);
    smalltalk.send(self, "_setInputEvents", []);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderMatchesOn_",
smalltalk.method({
selector: "renderMatchesOn:",
fn: function (html) {
    var self = this;
    self['@matchesList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column matches"]);
    smalltalk.send(self, "_updateMatchesList", []);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderReferencedClassesOn_",
smalltalk.method({
selector: "renderReferencedClassesOn:",
fn: function (html) {
    var self = this;
    self['@referencedClassesList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column referenced_classes"]);
    smalltalk.send(self, "_updateReferencedClassesList", []);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderSendersOn_",
smalltalk.method({
selector: "renderSendersOn:",
fn: function (html) {
    var self = this;
    self['@sendersList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column senders"]);
    smalltalk.send(self, "_updateSendersList", []);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString) {
    var self = this;
    var $1;
    smalltalk.send(self, "_searchReferencesFor_", [aString]);
    smalltalk.send(self, "_updateImplementorsList", []);
    smalltalk.send(self, "_updateSendersList", []);
    smalltalk.send(self, "_updateReferencedClassesList", []);
    $1 = smalltalk.send(self, "_updateMatchesList", []);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchMethodSource",
smalltalk.method({
selector: "searchMethodSource",
fn: function () {
    var self = this;
    var $1;
    var regex;
    regex = smalltalk.send(self['@selector'], "_allButFirst", []);
    smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [function (value) {$1 = smalltalk.send(smalltalk.send(value, "_source", []), "_match_", [regex]);if (smalltalk.assert($1)) {return smalltalk.send(smalltalk.send(self, "_matches", []), "_add_", [value]);}}]);}]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchReferencedClasses",
smalltalk.method({
selector: "searchReferencedClasses",
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [function (value) {$1 = smalltalk.send(smalltalk.send(value, "_referencedClasses", []), "_includes_", [self['@selector']]);if (smalltalk.assert($1)) {return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_add_", [value]);}}]);}]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchReferencesFor_",
smalltalk.method({
selector: "searchReferencesFor:",
fn: function (aString) {
    var self = this;
    var $1;
    self['@selector'] = aString;
    self['@implementors'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@senders'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@referencedClasses'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@matches'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(self, "_searchMethodSource", []);
    $1 = smalltalk.send(self['@selector'], "_match_", ["^[A-Z]"]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_searchReferencedClasses", []);
    } else {
        smalltalk.send(self, "_searchSelectorReferences", []);
    }
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchSelectorReferences",
smalltalk.method({
selector: "searchSelectorReferences",
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_keysAndValuesDo_", [function (key, value) {$1 = smalltalk.send(key, "__eq", [self['@selector']]);if (smalltalk.assert($1)) {smalltalk.send(smalltalk.send(self, "_implementors", []), "_add_", [value]);}$2 = smalltalk.send(smalltalk.send(value, "_messageSends", []), "_includes_", [self['@selector']]);if (smalltalk.assert($2)) {return smalltalk.send(smalltalk.send(self, "_senders", []), "_add_", [value]);}}]);}]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
    var self = this;
    return self['@selector'];
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_senders",
smalltalk.method({
selector: "senders",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@senders']) == nil || $receiver == undefined) {
        self['@senders'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
        $1 = self['@senders'];
    } else {
        $1 = self['@senders'];
    }
    return $1;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_setInputEvents",
smalltalk.method({
selector: "setInputEvents",
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(self['@input'], "_onKeyUp_", [function () {self['@timer'] = smalltalk.send(function () {return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}, "_valueWithTimeout_", [100]);return self['@timer'];}]);
    $1 = smalltalk.send(self['@input'], "_onKeyDown_", [function () {if (($receiver = self['@timer']) == nil || $receiver == undefined) {return self['@timer'];} else {return smalltalk.send(self['@timer'], "_clearTimeout", []);}}]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateImplementorsList",
smalltalk.method({
selector: "updateImplementorsList",
fn: function () {
    var self = this;
    var $1, $2, $3;
    smalltalk.send(self['@implementorsList'], "_contents_", [function (html) {$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_class_", ["column_label"]);smalltalk.send($1, "_with_", [smalltalk.send(smalltalk.send("Implementors (", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_implementors", []), "_size", []), "_asString", [])]), "__comma", [")"])]);$2 = smalltalk.send($1, "_style_", ["font-weight: bold"]);$2;return smalltalk.send(smalltalk.send(self, "_implementors", []), "_do_", [function (each) {var li;li = smalltalk.send(html, "_li", []);smalltalk.send(li, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [" >> "]), "__comma", [smalltalk.send(self, "_selector", [])])]);$3 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_openBrowserOn_", [each]);}]);return $3;}]);}]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateMatchesList",
smalltalk.method({
selector: "updateMatchesList",
fn: function () {
    var self = this;
    var $1, $2, $3;
    smalltalk.send(self['@matchesList'], "_contents_", [function (html) {$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_class_", ["column_label"]);smalltalk.send($1, "_with_", [smalltalk.send(smalltalk.send("Regex matches (", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_matches", []), "_size", []), "_asString", [])]), "__comma", [")"])]);$2 = smalltalk.send($1, "_style_", ["font-weight: bold"]);$2;return smalltalk.send(smalltalk.send(self, "_matches", []), "_do_", [function (each) {var li;li = smalltalk.send(html, "_li", []);smalltalk.send(li, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [" >> "]), "__comma", [smalltalk.send(each, "_selector", [])])]);$3 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_openBrowserOn_", [each]);}]);return $3;}]);}]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateReferencedClassesList",
smalltalk.method({
selector: "updateReferencedClassesList",
fn: function () {
    var self = this;
    var $1, $2, $3, $4;
    smalltalk.send(self['@referencedClassesList'], "_contents_", [function (html) {$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_class_", ["column_label"]);smalltalk.send($1, "_with_", [smalltalk.send(smalltalk.send("Class references (", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_size", []), "_asString", [])]), "__comma", [")"])]);$2 = smalltalk.send($1, "_style_", ["font-weight: bold"]);$2;return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_do_", [function (each) {$3 = smalltalk.send(html, "_li", []);smalltalk.send($3, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [" >> "]), "__comma", [smalltalk.send(each, "_selector", [])])]);$4 = smalltalk.send($3, "_onClick_", [function () {return smalltalk.send(self, "_openBrowserOn_", [each]);}]);return $4;}]);}]);
    return self;
}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateSendersList",
smalltalk.method({
selector: "updateSendersList",
fn: function () {
    var self = this;
    var $1, $2, $3, $4;
    smalltalk.send(self['@sendersList'], "_contents_", [function (html) {$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_class_", ["column_label"]);smalltalk.send($1, "_with_", [smalltalk.send(smalltalk.send("Senders (", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_senders", []), "_size", []), "_asString", [])]), "__comma", [")"])]);$2 = smalltalk.send($1, "_style_", ["font-weight: bold"]);$2;return smalltalk.send(smalltalk.send(self, "_senders", []), "_do_", [function (each) {$3 = smalltalk.send(html, "_li", []);smalltalk.send($3, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [" >> "]), "__comma", [smalltalk.send(each, "_selector", [])])]);$4 = smalltalk.send($3, "_onClick_", [function () {return smalltalk.send(self, "_openBrowserOn_", [each]);}]);return $4;}]);}]);
    return self;
}
}),
smalltalk.ReferencesBrowser);


smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_searchReferencesFor_", [aString]);
    $3 = smalltalk.send($2, "_open", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.ReferencesBrowser.klass);


smalltalk.addClass('TestRunner', smalltalk.TabWidget, ['selectedCategories', 'packagesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'IDE');
smalltalk.addMethod(
"_allClasses",
smalltalk.method({
selector: "allClasses",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.TestCase || TestCase, "_allSubclasses", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_isAbstract", []), "_not", []);}]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_allClasses", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [smalltalk.send(each, "_category", [])]);}]), "_sort_", [function (a, b) {return smalltalk.send(smalltalk.send(a, "_name", []), "__gt", [smalltalk.send(b, "_name", [])]);}]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
    self['@result'] = smalltalk.send(smalltalk.TestResult || TestResult, "_new", []);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_isSelectedCategory_",
smalltalk.method({
selector: "isSelectedCategory:",
fn: function (aCategory) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [aCategory]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_isSelectedClass_",
smalltalk.method({
selector: "isSelectedClass:",
fn: function (aClass) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [aClass]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "SUnit";
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function () {
    var self = this;
    var $1, $2;
    var packages;
    packages = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(self, "_allClasses", []), "_do_", [function (each) {$1 = smalltalk.send(packages, "_includes_", [smalltalk.send(each, "_category", [])]);if (!smalltalk.assert($1)) {return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);}}]);
    $2 = smalltalk.send(packages, "_sort", []);
    return $2;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_performFailure_",
smalltalk.method({
selector: "performFailure:",
fn: function (aTestCase) {
    var self = this;
    smalltalk.send(aTestCase, "_setUp", []);
    smalltalk.send(function () {return smalltalk.send(aTestCase, "_perform_", [smalltalk.send(aTestCase, "_selector", [])]);}, "_ensure_", [function () {return smalltalk.send(aTestCase, "_tearDown", []);}]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printErrors",
smalltalk.method({
selector: "printErrors",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", []), "_asString", []), "__comma", [" errors, "]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printFailures",
smalltalk.method({
selector: "printFailures",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []), "_asString", []), "__comma", [" failures"]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printPasses",
smalltalk.method({
selector: "printPasses",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_total", []), "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", [])]), "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", [])]), "_asString", []), "__comma", [" passes, "]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printTotal",
smalltalk.method({
selector: "printTotal",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_total", []), "_asString", []), "__comma", [" runs, "]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_progressBar",
smalltalk.method({
selector: "progressBar",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@progressBar']) == nil || $receiver == undefined) {
        self['@progressBar'] = smalltalk.send(smalltalk.ProgressBar || ProgressBar, "_new", []);
        $1 = self['@progressBar'];
    } else {
        $1 = self['@progressBar'];
    }
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    var $1;
    smalltalk.send(self, "_renderCategoriesOn_", [html]);
    smalltalk.send(self, "_renderClassesOn_", [html]);
    $1 = smalltalk.send(self, "_renderResultsOn_", [html]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_button", []);
    smalltalk.send($1, "_with_", ["Run selected"]);
    $2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_run_", [smalltalk.send(self, "_testCases", [])]);}]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderCategoriesOn_",
smalltalk.method({
selector: "renderCategoriesOn:",
fn: function (html) {
    var self = this;
    self['@packagesList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column sunit packages"]);
    smalltalk.send(self, "_updateCategoriesList", []);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderClassesOn_",
smalltalk.method({
selector: "renderClassesOn:",
fn: function (html) {
    var self = this;
    self['@classesList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column sunit classes"]);
    smalltalk.send(self, "_updateClassesList", []);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderErrorsOn_",
smalltalk.method({
selector: "renderErrorsOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_do_", [function (each) {$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_class_", ["errors"]);smalltalk.send($1, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_class", []), "_name", []), "__comma", [" >> "]), "__comma", [smalltalk.send(each, "_selector", [])])]);$2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_performFailure_", [each]);}]);return $2;}]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderFailuresOn_",
smalltalk.method({
selector: "renderFailuresOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_do_", [function (each) {$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_class_", ["failures"]);smalltalk.send($1, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_class", []), "_name", []), "__comma", [" >> "]), "__comma", [smalltalk.send(each, "_selector", [])])]);$2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_performFailure_", [each]);}]);return $2;}]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderResultsOn_",
smalltalk.method({
selector: "renderResultsOn:",
fn: function (html) {
    var self = this;
    self['@statusDiv'] = smalltalk.send(html, "_div", []);
    smalltalk.send(html, "_with_", [smalltalk.send(self, "_progressBar", [])]);
    self['@methodsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column sunit results"]);
    smalltalk.send(self, "_updateMethodsList", []);
    smalltalk.send(self, "_updateStatusDiv", []);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function () {
    var self = this;
    return self['@result'];
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_run_",
smalltalk.method({
selector: "run:",
fn: function (aCollection) {
    var self = this;
    var $1;
    self['@result'] = smalltalk.send(smalltalk.TestResult || TestResult, "_new", []);
    smalltalk.send(self, "_updateStatusDiv", []);
    $1 = smalltalk.send(self, "_updateMethodsList", []);
    smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [0]);
    smalltalk.send(self['@result'], "_total_", [smalltalk.send(aCollection, "_size", [])]);
    smalltalk.send(aCollection, "_do_", [function (each) {return smalltalk.send(function () {smalltalk.send(each, "_runCaseFor_", [self['@result']]);smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@result'], "_runs", []), "__slash", [smalltalk.send(self['@result'], "_total", [])]), "__star", [100])]);smalltalk.send(self, "_updateStatusDiv", []);return smalltalk.send(self, "_updateMethodsList", []);}, "_valueWithTimeout_", [100]);}]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectAllCategories",
smalltalk.method({
selector: "selectAllCategories",
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [function (each) {$1 = smalltalk.send(self['@selectedCategories'], "_includes_", [each]);if (!smalltalk.assert($1)) {return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_add_", [each]);}}]);
    smalltalk.send(self, "_updateCategoriesList", []);
    $2 = smalltalk.send(self, "_updateClassesList", []);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectAllClasses",
smalltalk.method({
selector: "selectAllClasses",
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [function (each) {$1 = smalltalk.send(self['@selectedClasses'], "_includes_", [each]);if (!smalltalk.assert($1)) {return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_add_", [each]);}}]);
    smalltalk.send(self, "_updateCategoriesList", []);
    $2 = smalltalk.send(self, "_updateClassesList", []);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectedCategories",
smalltalk.method({
selector: "selectedCategories",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@selectedCategories']) == nil ||
        $receiver == undefined) {
        self['@selectedCategories'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
        $1 = self['@selectedCategories'];
    } else {
        $1 = self['@selectedCategories'];
    }
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectedClasses",
smalltalk.method({
selector: "selectedClasses",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@selectedClasses']) == nil ||
        $receiver == undefined) {
        self['@selectedClasses'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
        $1 = self['@selectedClasses'];
    } else {
        $1 = self['@selectedClasses'];
    }
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_statusInfo",
smalltalk.method({
selector: "statusInfo",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printTotal", []), "__comma", [smalltalk.send(self, "_printPasses", [])]), "__comma", [smalltalk.send(self, "_printErrors", [])]), "__comma", [smalltalk.send(self, "_printFailures", [])]);
    return $1;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_testCases",
smalltalk.method({
selector: "testCases",
fn: function () {
    var self = this;
    var testCases;
    testCases = [];
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [smalltalk.send(each, "_category", [])]);}]), "_do_", [function (each) {return smalltalk.send(testCases, "_addAll_", [smalltalk.send(each, "_buildSuite", [])]);}]);
    return testCases;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_toggleCategory_",
smalltalk.method({
selector: "toggleCategory:",
fn: function (aCategory) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(self, "_isSelectedCategory_", [aCategory]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self['@selectedCategories'], "_remove_", [aCategory]);
    } else {
        smalltalk.send(self['@selectedCategories'], "_add_", [aCategory]);
    }
    smalltalk.send(self, "_updateCategoriesList", []);
    $2 = smalltalk.send(self, "_updateClassesList", []);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_toggleClass_",
smalltalk.method({
selector: "toggleClass:",
fn: function (aClass) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_isSelectedClass_", [aClass]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self['@selectedClasses'], "_remove_", [aClass]);
    } else {
        smalltalk.send(self['@selectedClasses'], "_add_", [aClass]);
    }
    smalltalk.send(self, "_updateClassesList", []);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
fn: function () {
    var self = this;
    var $1, $2, $3, $4;
    smalltalk.send(self['@packagesList'], "_contents_", [function (html) {$1 = smalltalk.send(html, "_li", []);smalltalk.send($1, "_class_", ["all"]);smalltalk.send($1, "_with_", ["All"]);$2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_selectAllCategories", []);}]);$2;return smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [function (each) {var li;li = smalltalk.send(html, "_li", []);$3 = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [each]);if (smalltalk.assert($3)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(li, "_with_", [each]);$4 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_toggleCategory_", [each]);}]);return $4;}]);}]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
fn: function () {
    var self = this;
    var $1, $2, $3, $4, $5;
    smalltalk.send(self['@classesList'], "_contents_", [function (html) {$1 = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_isEmpty", []);if (!smalltalk.assert($1)) {$2 = smalltalk.send(html, "_li", []);smalltalk.send($2, "_class_", ["all"]);smalltalk.send($2, "_with_", ["All"]);$3 = smalltalk.send($2, "_onClick_", [function () {return smalltalk.send(self, "_selectAllClasses", []);}]);$3;}return smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [function (each) {var li;li = smalltalk.send(html, "_li", []);$4 = smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [each]);if (smalltalk.assert($4)) {smalltalk.send(li, "_class_", ["selected"]);}smalltalk.send(li, "_with_", [smalltalk.send(each, "_name", [])]);$5 = smalltalk.send(li, "_onClick_", [function () {return smalltalk.send(self, "_toggleClass_", [each]);}]);return $5;}]);}]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
fn: function () {
    var self = this;
    smalltalk.send(self['@methodsList'], "_contents_", [function (html) {smalltalk.send(self, "_renderErrorsOn_", [html]);return smalltalk.send(self, "_renderFailuresOn_", [html]);}]);
    return self;
}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateStatusDiv",
smalltalk.method({
selector: "updateStatusDiv",
fn: function () {
    var self = this;
    smalltalk.send(self['@statusDiv'], "_class_", [smalltalk.send("sunit status ", "__comma", [smalltalk.send(self['@result'], "_status", [])])]);
    smalltalk.send(self['@statusDiv'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_statusInfo", [])]);}]);
    return self;
}
}),
smalltalk.TestRunner);



smalltalk.addClass('Workspace', smalltalk.TabWidget, ['sourceArea'], 'IDE');
smalltalk.addMethod(
"_clearWorkspace",
smalltalk.method({
selector: "clearWorkspace",
fn: function () {
    var self = this;
    smalltalk.send(self['@sourceArea'], "_clear", []);
    return self;
}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
fn: function () {
    var self = this;
    smalltalk.send(self['@sourceArea'], "_doIt", []);
    return self;
}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
fn: function () {
    var self = this;
    smalltalk.send(self['@sourceArea'], "_fileIn", []);
    return self;
}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function () {
    var self = this;
    smalltalk.send(self['@sourceArea'], "_inspectIt", []);
    return self;
}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "Workspace";
}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function () {
    var self = this;
    smalltalk.send(self['@sourceArea'], "_printIt", []);
    return self;
}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);
    smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);
    return self;
}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    var $1, $2, $3, $4, $5, $6, $7, $8, $9, $10;
    $1 = smalltalk.send(html, "_button", []);
    smalltalk.send($1, "_with_", ["DoIt"]);
    smalltalk.send($1, "_title_", ["ctrl+d"]);
    $2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(self, "_doIt", []);}]);
    $3 = smalltalk.send(html, "_button", []);
    smalltalk.send($3, "_with_", ["PrintIt"]);
    smalltalk.send($3, "_title_", ["ctrl+p"]);
    $4 = smalltalk.send($3, "_onClick_", [function () {return smalltalk.send(self, "_printIt", []);}]);
    $5 = smalltalk.send(html, "_button", []);
    smalltalk.send($5, "_with_", ["InspectIt"]);
    smalltalk.send($5, "_title_", ["ctrl+i"]);
    $6 = smalltalk.send($5, "_onClick_", [function () {return smalltalk.send(self, "_inspectIt", []);}]);
    $7 = smalltalk.send(html, "_button", []);
    smalltalk.send($7, "_with_", ["FileIn"]);
    smalltalk.send($7, "_title_", ["ctrl+f"]);
    $8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(self, "_fileIn", []);}]);
    $9 = smalltalk.send(html, "_button", []);
    smalltalk.send($9, "_with_", ["Clear workspace"]);
    $10 = smalltalk.send($9, "_onClick_", [function () {return smalltalk.send(self, "_clearWorkspace", []);}]);
    return self;
}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
smalltalk.send(self,"_show",[],smalltalk.TabWidget);
smalltalk.send(self["@sourceArea"],"_focus",[]);
return self}
}),
smalltalk.Workspace);



smalltalk.addMethod(
"_inspect",
smalltalk.method({
selector: "inspect",
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.Inspector || Inspector, "_new", []);
    smalltalk.send($1, "_inspect_", [self]);
    $2 = smalltalk.send($1, "_open", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var $1;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", self]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [function (each) {return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(self, "_instVarAt_", [each])]);}]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    $1 = smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var $1;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", self]);
    smalltalk.send(self, "_withIndexDo_", [function (each, i) {return smalltalk.send(variables, "_at_put_", [i, each]);}]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    $1 = smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var $1;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", self]);
    smalltalk.send(variables, "_at_put_", ["#keys", smalltalk.send(self, "_keys", [])]);
    smalltalk.send(self, "_keysAndValuesDo_", [function (key, value) {return smalltalk.send(variables, "_at_put_", [key, value]);}]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    $1 = smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var $1;
    var label;
    smalltalk.send(self, "_inspectOn_", [anInspector], smalltalk.CharacterArray);
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", []), "_size", []), "__gt", [30]);
    if (smalltalk.assert($1)) {
        label = smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", []), "_copyFrom_to_", [1, 30]), "__comma", ["...'"]);
    } else {
        label = smalltalk.send(self, "_printString", []);
    }
    smalltalk.send(anInspector, "_setLabel_", [label]);
    return self;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var $1;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", self]);
    smalltalk.send(self['@elements'], "_withIndexDo_", [function (each, i) {return smalltalk.send(variables, "_at_put_", [i, each]);}]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    $1 = smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
}
}),
smalltalk.Set);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var $1;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", self]);
    smalltalk.send(variables, "_at_put_", ["#year", smalltalk.send(self, "_year", [])]);
    smalltalk.send(variables, "_at_put_", ["#month", smalltalk.send(self, "_month", [])]);
    smalltalk.send(variables, "_at_put_", ["#day", smalltalk.send(self, "_day", [])]);
    smalltalk.send(variables, "_at_put_", ["#hours", smalltalk.send(self, "_hours", [])]);
    smalltalk.send(variables, "_at_put_", ["#minutes", smalltalk.send(self, "_minutes", [])]);
    smalltalk.send(variables, "_at_put_", ["#seconds", smalltalk.send(self, "_seconds", [])]);
    smalltalk.send(variables, "_at_put_", ["#milliseconds", smalltalk.send(self, "_milliseconds", [])]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    $1 = smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var $1;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", self]);
    smalltalk.send(variables, "_at_put_", ["#year", smalltalk.send(self, "_year", [])]);
    smalltalk.send(variables, "_at_put_", ["#month", smalltalk.send(self, "_month", [])]);
    smalltalk.send(variables, "_at_put_", ["#day", smalltalk.send(self, "_day", [])]);
    smalltalk.send(variables, "_at_put_", ["#hours", smalltalk.send(self, "_hours", [])]);
    smalltalk.send(variables, "_at_put_", ["#minutes", smalltalk.send(self, "_minutes", [])]);
    smalltalk.send(variables, "_at_put_", ["#seconds", smalltalk.send(self, "_seconds", [])]);
    smalltalk.send(variables, "_at_put_", ["#milliseconds", smalltalk.send(self, "_milliseconds", [])]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    $1 = smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var $1;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", self]);
    smalltalk.send(variables, "_at_put_", ["#home", smalltalk.send(self, "_home", [])]);
    smalltalk.send(variables, "_at_put_", ["#receiver", smalltalk.send(self, "_receiver", [])]);
    smalltalk.send(variables, "_at_put_", ["#selector", smalltalk.send(self, "_selector", [])]);
    smalltalk.send(variables, "_at_put_", ["#temps", smalltalk.send(self, "_temps", [])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [function (each) {return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(self, "_instVarAt_", [each])]);}]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    $1 = smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
}
}),
smalltalk.MethodContext);

