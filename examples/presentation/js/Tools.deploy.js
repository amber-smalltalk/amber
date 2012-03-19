smalltalk.addPackage('Tools', {});
smalltalk.addClass('Guid', smalltalk.Object, ['guidString'], 'Tools');
smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function (){
var self=this;
return self['@guidString'];
return self;}
}),
smalltalk.Guid);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@guidString']=smalltalk.send(self, "_newGuidString", []));
return self;}
}),
smalltalk.Guid);

smalltalk.addMethod(
unescape('_newGuidString'),
smalltalk.method({
selector: unescape('newGuidString'),
fn: function (){
var self=this;
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
return self;}
}),
smalltalk.Guid);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("a%20Guid%7B"), "__comma", [self['@guidString']]), "__comma", [unescape("%7D")]);
return self;}
}),
smalltalk.Guid);


smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Object.klass), "_initialize", []);
return self;}
}),
smalltalk.Guid.klass);


smalltalk.addClass('ToolWidget', smalltalk.Widget, ['id', 'div', 'position', 'size', 'zIndex', 'topBar', 'label', 'body'], 'Tools');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@div']=(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_domId", [])]);smalltalk.send($rec, "_class_", [smalltalk.send(self, "_cssClass", [])]);smalltalk.send($rec, "_style_", [smalltalk.send(self, "_style", [])]);return smalltalk.send($rec, "_with_", [(function(){(self['@topBar']=(function($rec){smalltalk.send($rec, "_class_", [unescape("draggable-handle")]);smalltalk.send($rec, "_style_", [unescape("cursor%3Amove%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("%23close")]);smalltalk.send($rec, "_style_", [unescape("position%3A%20absolute%3B%20right%3A%2020px%3B%20color%3A%20%23933")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_remove", []);})]);return smalltalk.send($rec, "_with_", ["x"]);})(smalltalk.send(html, "_a", []));return (self['@label']=smalltalk.send(html, "_span_", [smalltalk.send(self, "_labelString", [])]));})]);})(smalltalk.send(html, "_div", [])));return (self['@body']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["body"]));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(smalltalk.send(self['@topBar'], "_asJQuery", []), "_bind_do_", ["dblclick", (function(){return smalltalk.send(self, "_inspect", []);})]);
(function($rec){smalltalk.send($rec, "_initializeHandlers", []);smalltalk.send($rec, "_renderBody", []);return smalltalk.send($rec, "_updateMenu", []);})(self);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
smalltalk.send(smalltalk.send(self, "_class", []), "_remove_", [smalltalk.send(self['@id'], "_asString", [])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
fn: function (anInteger){
var self=this;
self['@id']=anInteger;
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
fn: function (){
var self=this;
return (($receiver = self['@id']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.Guid || Guid), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_domId'),
smalltalk.method({
selector: unescape('domId'),
fn: function (){
var self=this;
return smalltalk.send(unescape("tool-"), "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
fn: function (){
var self=this;
return self['@position'];
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_position_'),
smalltalk.method({
selector: unescape('position%3A'),
fn: function (aPoint){
var self=this;
self['@position']=aPoint;
smalltalk.send(self, "_save", []);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_asHashedCollection'),
smalltalk.method({
selector: unescape('asHashedCollection'),
fn: function (){
var self=this;
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [smalltalk.send(self['@position'], "_x", [])]),smalltalk.send("y", "__minus_gt", [smalltalk.send(self['@position'], "_y", [])]),smalltalk.send("width", "__minus_gt", [smalltalk.send(self['@size'], "_x", [])]),smalltalk.send("height", "__minus_gt", [smalltalk.send(self['@size'], "_y", [])]),smalltalk.send("id", "__minus_gt", [smalltalk.send(self['@id'], "_asString", [])]),smalltalk.send("zIndex", "__minus_gt", [self['@zIndex']])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_class", []), "_saveAll", []);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%0A%09border%3A1px%20solid%20black%3B%0A%09background-color%3A%23fff%3B%0A%09position%3Aabsolute%3B%0A%09left%3A"), "__comma", [smalltalk.send(smalltalk.send(self['@position'], "_x", []), "_printString", [])]), "__comma", [unescape("px%3B%0A%09top%3A")]), "__comma", [smalltalk.send(smalltalk.send(self['@position'], "_y", []), "_printString", [])]), "__comma", [unescape("px%3B%0A%09width%3A")]), "__comma", [smalltalk.send(smalltalk.send(self['@size'], "_x", []), "_printString", [])]), "__comma", [unescape("px%3B%0A%09height%3A")]), "__comma", [smalltalk.send(smalltalk.send(self['@size'], "_y", []), "_printString", [])]), "__comma", [unescape("px%3B%0A%09z-index%3A")]), "__comma", [smalltalk.send(self['@zIndex'], "_printString", [])]), "__comma", [unescape("%3B%0A%09")]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function (){
var self=this;
return self['@size'];
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_size_'),
smalltalk.method({
selector: unescape('size%3A'),
fn: function (aPoint){
var self=this;
self['@size']=aPoint;
smalltalk.send(self, "_save", []);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@id']=smalltalk.send((smalltalk.Guid || Guid), "_new", []));
(self['@position']=smalltalk.send((50), "__at", [(50)]));
(self['@size']=smalltalk.send((500), "__at", [(250)]));
(self['@zIndex']=(11000));
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_menuId'),
smalltalk.method({
selector: unescape('menuId'),
fn: function (){
var self=this;
return smalltalk.send(unescape("menu-"), "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_handleMenuAction_'),
smalltalk.method({
selector: unescape('handleMenuAction%3A'),
fn: function (anActionString){
var self=this;
smalltalk.send(self, "_perform_", [anActionString]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_updateMenu'),
smalltalk.method({
selector: unescape('updateMenu'),
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_contextMenu_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("selector", "__minus_gt", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_domId", [])])]),smalltalk.send("callback", "__minus_gt", [(function(key, options){return smalltalk.send(self, "_handleMenuAction_", [key]);})]),smalltalk.send("items", "__minus_gt", [smalltalk.send((smalltalk.JSON || JSON), "_parse_", [smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self, "_menuItems", [])])])])])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_initializeHandlers'),
smalltalk.method({
selector: unescape('initializeHandlers'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("handle", "__minus_gt", [unescape(".draggable-handle")]),smalltalk.send("stop", "__minus_gt", [(function(event, ui){return smalltalk.send(self, "_position_", [smalltalk.send(smalltalk.send(smalltalk.send(ui, "_position", []), "_left", []), "__at", [smalltalk.send(smalltalk.send(ui, "_position", []), "_top", [])])]);})])])]);
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_resizable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("stop", "__minus_gt", [(function(event, ui, size){self['@size']=ui.size;return smalltalk.send(self, "_size_", [smalltalk.send(smalltalk.send(self['@size'], "_width", []), "__at", [smalltalk.send(self['@size'], "_height", [])])]);})])])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_inspect'),
smalltalk.method({
selector: unescape('inspect'),
fn: function (){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [unescape("ToolWidget%3E%3Einspect")]);
smalltalk.send(self, "_inspect", [], smalltalk.Widget);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_renderBody'),
smalltalk.method({
selector: unescape('renderBody'),
fn: function (){
var self=this;
smalltalk.send(self['@body'], "_contents_", [(function(html){return smalltalk.send(html, "_p_", [unescape("%5B%20blank%20tool%20%5D")]);})]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_labelString'),
smalltalk.method({
selector: unescape('labelString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_printString", []);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_browse'),
smalltalk.method({
selector: unescape('browse'),
fn: function (){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [unescape("ToolWidget%3E%3Ebrowse")]);
smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_class", [])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_menuItems'),
smalltalk.method({
selector: unescape('menuItems'),
fn: function (){
var self=this;
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("inspect", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Inspect this tool"]),smalltalk.send("icon", "__minus_gt", ["quit"])])]),smalltalk.send("browse", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Browse this tool"]),smalltalk.send("icon", "__minus_gt", ["copy"])])]),smalltalk.send("reload", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Reload this tool"])])]),smalltalk.send("confirmRemove", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Remove this tool"]),smalltalk.send("icon", "__minus_gt", ["delete"])])])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_confirmedRemove'),
smalltalk.method({
selector: unescape('confirmedRemove'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
smalltalk.send(smalltalk.send(self, "_class", []), "_remove_", [self['@id']]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_confirmRemove'),
smalltalk.method({
selector: unescape('confirmRemove'),
fn: function (){
var self=this;
((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [unescape("Remove%20this%20tool%3F")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_remove", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_remove", []);})]));
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return unescape("amber-tool");
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_reload'),
smalltalk.method({
selector: unescape('reload'),
fn: function (){
var self=this;
smalltalk.send(self, "_save", []);
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.ToolWidget);


smalltalk.ToolWidget.klass.iVarNames = ['allInstances','storage'];
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
self['@storage']=smalltalk.send((smalltalk.LocalStorage || LocalStorage), "_withScope_", [smalltalk.send(self, "_printString", [])]);
(function($rec){smalltalk.send($rec, "_initializeInstances", []);smalltalk.send($rec, "_load", []);return smalltalk.send($rec, "_saveAll", []);})(self);
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_openNew'),
smalltalk.method({
selector: unescape('openNew'),
fn: function (){
var self=this;
var newInstance=nil;
newInstance=smalltalk.send(self, "_new", []);
smalltalk.send(self, "_persist_", [newInstance]);
smalltalk.send(newInstance, "_open", []);
return newInstance;
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_allInstances'),
smalltalk.method({
selector: unescape('allInstances'),
fn: function (){
var self=this;
(($receiver = self['@allInstances']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeInstances", []);})() : $receiver;
return self['@allInstances'];
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_removeAll'),
smalltalk.method({
selector: unescape('removeAll'),
fn: function (){
var self=this;
smalltalk.send(self['@allInstances'], "_do_", [(function(ea){return smalltalk.send(ea, "_remove", []);})]);
smalltalk.send(self, "_initializeInstances", []);
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_saveAll'),
smalltalk.method({
selector: unescape('saveAll'),
fn: function (){
var self=this;
smalltalk.send(self['@storage'], "_at_put_", ["instances", smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self['@allInstances'], "_collect_", [(function(ea){return smalltalk.send(ea, "_asHashedCollection", []);})])])]);
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
fn: function (aJSON){
var self=this;
return (function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(aJSON, "_id", [])]);smalltalk.send($rec, "_position_", [smalltalk.send(smalltalk.send(aJSON, "_x", []), "__at", [smalltalk.send(aJSON, "_y", [])])]);smalltalk.send($rec, "_size_", [smalltalk.send(smalltalk.send(aJSON, "_width", []), "__at", [smalltalk.send(aJSON, "_height", [])])]);smalltalk.send($rec, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_load'),
smalltalk.method({
selector: unescape('load'),
fn: function (){
var self=this;
var jsObject=nil;
var dictionary=nil;
dictionary=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
jsObject=smalltalk.send(smalltalk.send((smalltalk.JSON || JSON), "_parse_", [smalltalk.send(self['@storage'], "_at_ifAbsentPut_", ["instances", unescape("%7B%7D")])]), "_jsObject", []);
for(var i in jsObject) {
		dictionary._at_put_(i, jsObject[i]);
	};
smalltalk.send(dictionary, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@allInstances'], "_at_put_", [key, smalltalk.send(self, "_fromJSON_", [value])]);})]);
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
fn: function (anInstanceId){
var self=this;
smalltalk.send(self['@allInstances'], "_removeKey_", [smalltalk.send(anInstanceId, "_asString", [])]);
smalltalk.send(self, "_saveAll", []);
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_initializeInstances'),
smalltalk.method({
selector: unescape('initializeInstances'),
fn: function (){
var self=this;
smalltalk.send(self['@storage'], "_at_ifAbsentPut_", ["instances", unescape("%7B%7D")]);
self['@allInstances']=smalltalk.HashedCollection._fromPairs_([]);
return self;}
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_persist_'),
smalltalk.method({
selector: unescape('persist%3A'),
fn: function (aToolWidget){
var self=this;
smalltalk.send(smalltalk.send(self, "_allInstances", []), "_at_put_", [smalltalk.send(smalltalk.send(aToolWidget, "_id", []), "_asString", []), aToolWidget]);
smalltalk.send(self, "_saveAll", []);
return self;}
}),
smalltalk.ToolWidget.klass);


smalltalk.addClass('WorkspaceTool', smalltalk.ToolWidget, ['editor', 'receiver', 'onDoIt'], 'Tools');
smalltalk.addMethod(
unescape('_initializeCommands'),
smalltalk.method({
selector: unescape('initializeCommands'),
fn: function (){
var self=this;
smalltalk.send(self, "_addCommand_named_do_", [unescape("Ctrl-P"), "printIt", (function(){return smalltalk.send(self, "_printIt", []);})]);
smalltalk.send(self, "_addCommand_named_do_", [unescape("Ctrl-D"), "doIt", (function(){return smalltalk.send(self, "_doIt", []);})]);
smalltalk.send(self, "_addCommand_named_do_", [unescape("Ctrl-I"), "inspectIt", (function(){return smalltalk.send(self, "_inspectIt", []);})]);
smalltalk.send(self, "_addCommand_named_do_", [unescape("Ctrl-B"), "browseIt", (function(){return smalltalk.send(self, "_browseIt", []);})]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_printIt'),
smalltalk.method({
selector: unescape('printIt'),
fn: function (){
var self=this;
var result=nil;
var range=nil;
var newEnd=nil;
result=smalltalk.send(smalltalk.send(self, "_doIt", []), "_printString", []);
range=smalltalk.send(self['@editor'], "_getSelectionRange", []);
smalltalk.send(self['@editor'], "_moveCursorToPosition_", [smalltalk.send(range, "_end", [])]);
newEnd=smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_insert_text_", [smalltalk.send(range, "_end", []), smalltalk.send(smalltalk.send(" ", "__comma", [result]), "__comma", [" "])]);
(function($rec){smalltalk.send($rec, "_setStart_", [smalltalk.send(range, "_end", [])]);return smalltalk.send($rec, "_setEnd_", [newEnd]);})(range);
smalltalk.send(smalltalk.send(self['@editor'], "_selection", []), "_setSelectionRange_", [range]);
smalltalk.send(self, "_save", []);
smalltalk.send(self['@editor'], "_focus", []);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_addCommand_named_do_'),
smalltalk.method({
selector: unescape('addCommand%3Anamed%3Ado%3A'),
fn: function (aKeyBindingString, aNameString, aBlock){
var self=this;
smalltalk.send(smalltalk.send(self['@editor'], "_commands", []), "_addCommand_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", [aNameString]),smalltalk.send("bindKey", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("win", "__minus_gt", [aKeyBindingString]),smalltalk.send("mac", "__minus_gt", [aKeyBindingString]),smalltalk.send("sender", "__minus_gt", ["editor"])])]),smalltalk.send("exec", "__minus_gt", [aBlock])])]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_currentLine'),
smalltalk.method({
selector: unescape('currentLine'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursorPosition", []), "_row", [])]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_currentLineOrSelection'),
smalltalk.method({
selector: unescape('currentLineOrSelection'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self['@editor'], "_getSelection", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_currentLine", []);})() : (function(){return smalltalk.send(self, "_selection", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_currentLine", []);}), (function(){return smalltalk.send(self, "_selection", []);})]));
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_onDoIt_'),
smalltalk.method({
selector: unescape('onDoIt%3A'),
fn: function (aBlock){
var self=this;
self['@onDoIt']=aBlock;
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_onDoIt'),
smalltalk.method({
selector: unescape('onDoIt'),
fn: function (){
var self=this;
return self['@onDoIt'];
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_selection'),
smalltalk.method({
selector: unescape('selection'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_doc", []), "_getTextRange_", [smalltalk.send(self['@editor'], "_getSelectionRange", [])]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_val'),
smalltalk.method({
selector: unescape('val'),
fn: function (){
var self=this;
return (($receiver = self['@editor']) == nil || $receiver == undefined) ? (function(){return "";})() : (function(){return smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_getValue", []);})();
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_val_'),
smalltalk.method({
selector: unescape('val%3A'),
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_setValue_", [aString]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
fn: function (){
var self=this;
smalltalk.send(self, "_val_", [""]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_doIt'),
smalltalk.method({
selector: unescape('doIt'),
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(self, "_eval_", [smalltalk.send(self, "_currentLineOrSelection", [])]);
(($receiver = smalltalk.send(self, "_onDoIt", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_onDoIt", []), "_value", []);})() : nil;
smalltalk.send(self, "_save", []);
return result;
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_eval_'),
smalltalk.method({
selector: unescape('eval%3A'),
fn: function (aString){
var self=this;
try{var compiler=nil;
compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []);
smalltalk.send((function(){return smalltalk.send(compiler, "_parseExpression_", [aString]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return (function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(ex, "_messageText", [])])}})})();})]);
(function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send(smalltalk.send(smalltalk.send(compiler, "_load_forClass_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")]), (smalltalk.DoIt || DoIt)]), "_fn", []), "_applyTo_arguments_", [smalltalk.send(self, "_receiver", []), []])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_eval_'){return e.fn()} throw(e)}}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
fn: function (){
var self=this;
return (($receiver = self['@receiver']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.DoIt || DoIt), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
fn: function (anObject){
var self=this;
self['@receiver']=anObject;
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_inspectIt'),
smalltalk.method({
selector: unescape('inspectIt'),
fn: function (){
var self=this;
smalltalk.send(self, "_save", []);
smalltalk.send(smalltalk.send(self, "_doIt", []), "_inspect", []);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_fileIn'),
smalltalk.method({
selector: unescape('fileIn'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_currentLineOrSelection", []), "_readStream", [])]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_editorId'),
smalltalk.method({
selector: unescape('editorId'),
fn: function (){
var self=this;
return smalltalk.send(unescape("ace-"), "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_asHashedCollection'),
smalltalk.method({
selector: unescape('asHashedCollection'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["val", smalltalk.send(self, "_val", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_asHashedCollection", [], smalltalk.ToolWidget));
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
fn: function (){
var self=this;
var mode=nil;
self['@editor']=smalltalk.send((typeof ace == 'undefined' ? nil : ace), "_edit_", [smalltalk.send(self, "_editorId", [])]);
mode=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_require_", [unescape("ace/mode/smalltalk")]), "_at_", ["Mode"]);
smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_setMode_", [smalltalk.send(mode, "_new", [])]);
smalltalk.send(self, "_initializeCommands", []);
smalltalk.send(self, "_val_", [unescape("%22Check%20out%20the%20contextmenu%20%28right%20click%29%22")]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_renderBody'),
smalltalk.method({
selector: unescape('renderBody'),
fn: function (){
var self=this;
smalltalk.send(self['@body'], "_contents_", [(function(html){return (function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_editorId", [])]);return smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("width:", "__comma", [smalltalk.send(smalltalk.send(self['@size'], "_x", []), "_printString", [])]), "__comma", [unescape("px%3B%20height%3A")]), "__comma", [smalltalk.send(((($receiver = smalltalk.send(self['@size'], "_y", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), "_printString", [])]), "__comma", [unescape("px%3B")])]);})(smalltalk.send(html, "_div", []));})]);
smalltalk.send(self, "_initializeEditor", []);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_menuItems'),
smalltalk.method({
selector: unescape('menuItems'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["doIt", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Do It"]),smalltalk.send("accesskey", "__minus_gt", ["d"])])]);smalltalk.send($rec, "_at_put_", ["printIt", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Print It"]),smalltalk.send("accesskey", "__minus_gt", ["p"])])]);smalltalk.send($rec, "_at_put_", ["inspectIt", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Inspect It"]),smalltalk.send("accesskey", "__minus_gt", ["i"])])]);smalltalk.send($rec, "_at_put_", ["browseIt", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Browse It"]),smalltalk.send("accesskey", "__minus_gt", ["b"])])]);smalltalk.send($rec, "_at_put_", ["sep2", unescape("----------")]);smalltalk.send($rec, "_at_put_", ["fileIn", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["File In"]),smalltalk.send("accesskey", "__minus_gt", ["f"])])]);smalltalk.send($rec, "_at_put_", ["clear", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Clear"])])]);smalltalk.send($rec, "_at_put_", ["sep1", unescape("----------")]);smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_menuItems", [], smalltalk.ToolWidget)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
(($receiver = self['@editor']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@editor'], "_destroy", []);})() : nil;
smalltalk.send(self, "_remove", [], smalltalk.ToolWidget);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_browseIt'),
smalltalk.method({
selector: unescape('browseIt'),
fn: function (){
var self=this;
smalltalk.send(self, "_save", []);
smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(smalltalk.send(self, "_doIt", []), "_class", [])]);
return self;}
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_size_'),
smalltalk.method({
selector: unescape('size%3A'),
fn: function (aPoint){
var self=this;
smalltalk.send(self, "_size_", [aPoint], smalltalk.ToolWidget);
(($receiver = self['@editor']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@editor'], "_resize", []);})() : nil;
return self;}
}),
smalltalk.WorkspaceTool);


smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_val_", [smalltalk.send(anObject, "_val", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_fromJSON_", [anObject], smalltalk.ToolWidget.klass));
return self;}
}),
smalltalk.WorkspaceTool.klass);


smalltalk.addClass('InspectorTool', smalltalk.ToolWidget, ['object', 'variables'], 'Tools');
smalltalk.addMethod(
unescape('_inspect_'),
smalltalk.method({
selector: unescape('inspect%3A'),
fn: function (anObject){
var self=this;
self['@object']=anObject;
self['@variables']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(self['@object'], "_inspectOn_", [self]);
return self;}
}),
smalltalk.InspectorTool);

smalltalk.addMethod(
unescape('_setLabel_'),
smalltalk.method({
selector: unescape('setLabel%3A'),
fn: function (aString){
var self=this;
self['@label']=aString;
return self;}
}),
smalltalk.InspectorTool);

smalltalk.addMethod(
unescape('_setVariables_'),
smalltalk.method({
selector: unescape('setVariables%3A'),
fn: function (aDictionary){
var self=this;
smalltalk.send(self['@variables'], "_addAll_", [aDictionary]);
return self;}
}),
smalltalk.InspectorTool);

smalltalk.addMethod(
unescape('_renderBody'),
smalltalk.method({
selector: unescape('renderBody'),
fn: function (){
var self=this;
smalltalk.send(self['@body'], "_contents_", [(function(html){return smalltalk.send(html, "_h1_", [smalltalk.send(self['@object'], "_printString", [])]);})]);
return self;}
}),
smalltalk.InspectorTool);

smalltalk.addMethod(
unescape('_labelString'),
smalltalk.method({
selector: unescape('labelString'),
fn: function (){
var self=this;
return self['@label'];
return self;}
}),
smalltalk.InspectorTool);


smalltalk.addMethod(
unescape('_openOn_'),
smalltalk.method({
selector: unescape('openOn%3A'),
fn: function (anObject){
var self=this;
var newInstance=nil;
newInstance=smalltalk.send(smalltalk.send(self, "_new", []), "_inspect_", [anObject]);
smalltalk.send(self, "_persist_", [newInstance]);
smalltalk.send(newInstance, "_open", []);
return newInstance;
return self;}
}),
smalltalk.InspectorTool.klass);


