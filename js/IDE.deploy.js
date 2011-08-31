smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul'], 'IDE');
smalltalk.addMethod(
'_tabs',
smalltalk.method({
selector: 'tabs',
fn: function (){
var self=this;
return (($receiver = self['@tabs']) == nil || $receiver == undefined) ? (function(){return self['@tabs']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_updateBodyMargin',
smalltalk.method({
selector: 'updateBodyMargin',
fn: function (){
var self=this;
smalltalk.send(self, "_setBodyMargin_", [(($receiver = smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_height", [])).klass === smalltalk.Number) ? $receiver +(27) : smalltalk.send($receiver, "__plus", [(27)])]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_updatePosition',
smalltalk.method({
selector: 'updatePosition',
fn: function (){
var self=this;
jQuery('#jtalk').css('top', '').css('bottom', '27px');
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_removeBodyMargin',
smalltalk.method({
selector: 'removeBodyMargin',
fn: function (){
var self=this;
smalltalk.send(self, "_setBodyMargin_", [(0)]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_setBodyMargin_',
smalltalk.method({
selector: 'setBodyMargin:',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(".jtalkBody", "_asJQuery", []), "_cssAt_put_", [unescape("margin-bottom"), smalltalk.send(smalltalk.send(anInteger, "_asString", []), "__comma", ["px"])]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_onResize_',
smalltalk.method({
selector: 'onResize:',
fn: function (aBlock){
var self=this;
jQuery('#jtalk').resizable({
	handles: 'n', 
	resize: aBlock,
	minHeight: 230
});
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_onWindowResize_',
smalltalk.method({
selector: 'onWindowResize:',
fn: function (aBlock){
var self=this;
jQuery(window).resize(aBlock);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function (){
var self=this;
(($receiver = self['@opened']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["jtalkBody"]);smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return self['@opened']=true;})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["jtalkBody"]);smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return self['@opened']=true;})]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_close',
smalltalk.method({
selector: 'close',
fn: function (){
var self=this;
(($receiver = self['@opened']).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["jtalkBody"]);return self['@opened']=false;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["jtalkBody"]);return self['@opened']=false;})]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_newBrowserTab',
smalltalk.method({
selector: 'newBrowserTab',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Browser || Browser), "_open", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_selectTab_',
smalltalk.method({
selector: 'selectTab:',
fn: function (aWidget){
var self=this;
smalltalk.send(self, "_open", []);
self['@selectedTab']=aWidget;
smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [(function(each){return smalltalk.send(each, "_hide", []);})]);
smalltalk.send(aWidget, "_show", []);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_closeTab_',
smalltalk.method({
selector: 'closeTab:',
fn: function (aWidget){
var self=this;
smalltalk.send(self, "_removeTab_", [aWidget]);
smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
smalltalk.send(aWidget, "_remove", []);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_addTab_',
smalltalk.method({
selector: 'addTab:',
fn: function (aWidget){
var self=this;
smalltalk.send(smalltalk.send(self, "_tabs", []), "_add_", [aWidget]);
smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_append_", [aWidget]);
smalltalk.send(aWidget, "_hide", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_removeTab_',
smalltalk.method({
selector: 'removeTab:',
fn: function (aWidget){
var self=this;
smalltalk.send(smalltalk.send(self, "_tabs", []), "_remove_", [aWidget]);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@opened']=true;
(function($rec){smalltalk.send($rec, "_append_", [self]);smalltalk.send($rec, "_append_", [(function(html){return smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["jtalk"]);})]);return smalltalk.send($rec, "_addClass_", ["jtalkBody"]);})(smalltalk.send("body", "_asJQuery", []));
(function($rec){smalltalk.send($rec, "_addTab_", [smalltalk.send((smalltalk.Transcript || Transcript), "_current", [])]);return smalltalk.send($rec, "_addTab_", [smalltalk.send((smalltalk.Workspace || Workspace), "_new", [])]);})(self);
smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
(function($rec){smalltalk.send($rec, "_onResize_", [(function(){return (function($rec){smalltalk.send($rec, "_updateBodyMargin", []);return smalltalk.send($rec, "_updatePosition", []);})(self);})]);return smalltalk.send($rec, "_onWindowResize_", [(function(){return smalltalk.send(self, "_updatePosition", []);})]);})(self);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@ul']=(function($rec){smalltalk.send($rec, "_id_", ["jtalkTabs"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_ul", []));
smalltalk.send(self, "_renderTabs", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_renderTabFor_on_',
smalltalk.method({
selector: 'renderTabFor:on:',
fn: function (aWidget, html){
var self=this;
var li=nil;
li=smalltalk.send(html, "_li", []);
(($receiver = smalltalk.send(self['@selectedTab'], "__eq", [aWidget])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);
smalltalk.send(li, "_with_", [(function(){(($receiver = smalltalk.send(aWidget, "_canBeClosed", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeTab_", [aWidget]);})]);})(smalltalk.send(html, "_span", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeTab_", [aWidget]);})]);})(smalltalk.send(html, "_span", []));})]);return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(aWidget, "_label", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", [aWidget]);})]);})(smalltalk.send(html, "_span", []));})]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_renderTabs',
smalltalk.method({
selector: 'renderTabs',
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["closeAll"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_close", []);})]);})(smalltalk.send(html, "_li", []));smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [(function(each){return smalltalk.send(self, "_renderTabFor_on_", [each, html]);})]);return (function($rec){smalltalk.send($rec, "_class_", ["newtab"]);smalltalk.send($rec, "_with_", [unescape("%20+%20")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_newBrowserTab", []);})]);})(smalltalk.send(html, "_li", []));})]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
'_update',
smalltalk.method({
selector: 'update',
fn: function (){
var self=this;
smalltalk.send(self, "_renderTabs", []);
return self;}
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return self['@current']=smalltalk.send(self, "_new", [], smalltalk.Widget.klass);})() : $receiver;
return self;}
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_addTab_", [self]);
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_selectTab_", [self]);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_show',
smalltalk.method({
selector: 'show',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_hide',
smalltalk.method({
selector: 'hide',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_hide", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_remove',
smalltalk.method({
selector: 'remove',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["jtalkTool"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderTab", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
fn: function (html){
var self=this;

return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
fn: function (html){
var self=this;

return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_update',
smalltalk.method({
selector: 'update',
fn: function (){
var self=this;
smalltalk.send(self, "_renderTab", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_renderTab',
smalltalk.method({
selector: 'renderTab',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["jt_box"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderBoxOn_", [html]);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["jt_buttons"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.TabWidget);


smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
return self;}
}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Workspace', smalltalk.TabWidget, ['sourceArea'], 'IDE');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
return unescape("%5BWorkspace%5D");
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
'_clearWorkspace',
smalltalk.method({
selector: 'clearWorkspace',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_clear", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
'_doIt',
smalltalk.method({
selector: 'doIt',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_doIt", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
'_printIt',
smalltalk.method({
selector: 'printIt',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_printIt", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
'_inspectIt',
smalltalk.method({
selector: 'inspectIt',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_inspectIt", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
fn: function (html){
var self=this;
self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []);
smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+d")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+p")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+i")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["Clear workspace"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_clearWorkspace", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.Workspace);



smalltalk.addClass('Transcript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
return unescape("%5BTranscript%5D");
return self;}
}),
smalltalk.Transcript);

smalltalk.addMethod(
'_show_',
smalltalk.method({
selector: 'show:',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val", []), "__comma", [smalltalk.send(anObject, "_asString", [])])]);
return self;}
}),
smalltalk.Transcript);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val", []), "__comma", [smalltalk.send((smalltalk.String || String), "_cr", [])])]);
return self;}
}),
smalltalk.Transcript);

smalltalk.addMethod(
'_clear',
smalltalk.method({
selector: 'clear',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [""]);
return self;}
}),
smalltalk.Transcript);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
fn: function (html){
var self=this;
self['@textarea']=smalltalk.send(html, "_textarea", []);
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_call_", ["tabby"]);
(function($rec){smalltalk.send($rec, "_class_", ["jt_transcript"]);return smalltalk.send($rec, "_at_put_", ["spellcheck", "false"]);})(self['@textarea']);
return self;}
}),
smalltalk.Transcript);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["Clear transcript"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_clear", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.Transcript);


smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_open", []);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return self['@current']=smalltalk.send(self, "_new", [], smalltalk.TabWidget.klass);})() : $receiver;
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_show_',
smalltalk.method({
selector: 'show:',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [anObject]);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_clear',
smalltalk.method({
selector: 'clear',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_clear", []);
return self;}
}),
smalltalk.Transcript.klass);


smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedCategory', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'commitButton', 'categoriesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges', 'input'], 'IDE');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
return (($receiver = self['@selectedClass']) == nil || $receiver == undefined) ? (function(){return unescape("Browser%20%28nil%29");})() : (function(){return smalltalk.send(self['@selectedClass'], "_name", []);})();
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_categories',
smalltalk.method({
selector: 'categories',
fn: function (){
var self=this;
var categories=nil;
categories=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_do_", [(function(each){return (($receiver = smalltalk.send(categories, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(categories, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(categories, "_add_", [smalltalk.send(each, "_category", [])]);})]);})]);
return smalltalk.send(categories, "_sort", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_classes',
smalltalk.method({
selector: 'classes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedCategory']]);})]), "_sort_", [(function(a, b){return (($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_protocols',
smalltalk.method({
selector: 'protocols',
fn: function (){
var self=this;
try{var klass=nil;
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return []}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return []}})})();})]);klass=(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@selectedClass'];})() : (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@selectedClass'];}), (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})]);(($receiver = smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_with_", ["not yet classified"])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_with_", ["not yet classified"])}})})();})]);return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send(klass, "_protocols", [])}})})();})() : nil;
(function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_new", [])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_protocols'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_methods',
smalltalk.method({
selector: 'methods',
fn: function (){
var self=this;
try{var klass=nil;
(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return []}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return []}})})();})]);
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return klass=(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@selectedClass'];})() : (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@selectedClass'];}), (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})]);})() : nil;
(function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return smalltalk.send((($receiver = self['@selectedProtocol']) == nil || $receiver == undefined) ? (function(){return (($receiver = klass) == nil || $receiver == undefined) ? (function(){return [];})() : (function(){return smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []);})();})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedProtocol']]);})]);})(), "_sort_", [(function(a, b){return (($receiver = smalltalk.send(a, "_selector", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_selector", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_selector", [])]);})])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_methods'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
fn: function (){
var self=this;
try{(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_source', fn: function(){return (($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_declarationSource", []);})() : (function(){return smalltalk.send(self, "_methodSource", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_declarationSource", []);}), (function(){return smalltalk.send(self, "_methodSource", []);})])}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_source', fn: function(){return (($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_declarationSource", []);})() : (function(){return smalltalk.send(self, "_methodSource", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_declarationSource", []);}), (function(){return smalltalk.send(self, "_methodSource", []);})])}})})();})]);
(function(){throw({name: 'stReturn', selector: '_source', fn: function(){return (($receiver = self['@selectedClass']) == nil || $receiver == undefined) ? (function(){return "";})() : (function(){return smalltalk.send(self, "_classCommentSource", []);})()}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_source'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_methodSource',
smalltalk.method({
selector: 'methodSource',
fn: function (){
var self=this;
return (($receiver = self['@selectedMethod']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_dummyMethodSource", []);})() : (function(){return smalltalk.send(self['@selectedMethod'], "_source", []);})();
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_dummyMethodSource',
smalltalk.method({
selector: 'dummyMethodSource',
fn: function (){
var self=this;
return unescape("messageSelectorAndArgumentNames%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%09%7C%20temporary%20variable%20names%20%7C%0A%09statements");
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_declarationSource',
smalltalk.method({
selector: 'declarationSource',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_classDeclarationSource", []);})() : (function(){return smalltalk.send(self, "_metaclassDeclarationSource", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_classDeclarationSource", []);}), (function(){return smalltalk.send(self, "_metaclassDeclarationSource", []);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_classDeclarationSource',
smalltalk.method({
selector: 'classDeclarationSource',
fn: function (){
var self=this;
var stream=nil;
stream=smalltalk.send("", "_writeStream", []);
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@selectedClass'], "_superclass", []), "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20subclass%3A%20%23")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_name", [])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send((smalltalk.String || String), "_lf", []), "__comma", [smalltalk.send((smalltalk.String || String), "_tab", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("instanceVariableNames%3A%20%27")]);})(stream);smalltalk.send(smalltalk.send(self['@selectedClass'], "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [smalltalk.send((smalltalk.String || String), "_tab", [])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("category%3A%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_category", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%27")]);})(stream);})() : nil;
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_metaclassDeclarationSource',
smalltalk.method({
selector: 'metaclassDeclarationSource',
fn: function (){
var self=this;
var stream=nil;
stream=smalltalk.send("", "_writeStream", []);
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [" class "]);return smalltalk.send($rec, "_nextPutAll_", [unescape("instanceVariableNames%3A%20%27")]);})(stream);smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [" "]);})]);return smalltalk.send(stream, "_nextPutAll_", [unescape("%27")]);})() : nil;
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_classCommentSource',
smalltalk.method({
selector: 'classCommentSource',
fn: function (){
var self=this;
return smalltalk.send(self['@selectedClass'], "_comment", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectedClass',
smalltalk.method({
selector: 'selectedClass',
fn: function (){
var self=this;
return self['@selectedClass'];
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_disableSaveButton',
smalltalk.method({
selector: 'disableSaveButton',
fn: function (){
var self=this;
(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;
self['@unsavedChanges']=false;
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_hideClassButtons',
smalltalk.method({
selector: 'hideClassButtons',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_hide", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_showClassButtons',
smalltalk.method({
selector: 'showClassButtons',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_hideMethodButtons',
smalltalk.method({
selector: 'hideMethodButtons',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_hide", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_showMethodButtons',
smalltalk.method({
selector: 'showMethodButtons',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_compile',
smalltalk.method({
selector: 'compile',
fn: function (){
var self=this;
smalltalk.send(self, "_disableSaveButton", []);
(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_compileClassComment", []);})() : nil;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_compileClassComment", []);})() : nil;})]);
(($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_compileDefinition", []);})() : (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_compileDefinition", []);}), (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_compileClassComment',
smalltalk.method({
selector: 'compileClassComment',
fn: function (){
var self=this;
smalltalk.send(self['@selectedClass'], "_comment_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_compileMethodDefinition',
smalltalk.method({
selector: 'compileMethodDefinition',
fn: function (){
var self=this;
(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);})() : (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);}), (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_compileMethodDefinitionFor_',
smalltalk.method({
selector: 'compileMethodDefinitionFor:',
fn: function (aClass){
var self=this;
try{var compiler=nil;
var method=nil;
var source=nil;
var node=nil;
source=smalltalk.send(self['@sourceArea'], "_val", []);
(($receiver = self['@selectedProtocol']) == nil || $receiver == undefined) ? (function(){return self['@selectedProtocol']=smalltalk.send(self['@selectedMethod'], "_category", []);})() : $receiver;
compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []);
node=smalltalk.send(compiler, "_parse_", [source]);
(($receiver = smalltalk.send(node, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send(self, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [unescape("%2C%20position%3A%20")]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send(self, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [unescape("%2C%20position%3A%20")]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])}})})();})]);
smalltalk.send(compiler, "_currentClass_", [aClass]);
method=smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compileNode_", [node])]);
smalltalk.send(method, "_category_", [self['@selectedProtocol']]);
smalltalk.send(smalltalk.send(compiler, "_unknownVariables", []), "_do_", [(function(each){return (($receiver = smalltalk.send(self, "_confirm_", [smalltalk.send(smalltalk.send(unescape("Declare%20%27"), "__comma", [each]), "__comma", [unescape("%27%20as%20instance%20variable%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass])}})})();})]);})]);
smalltalk.send(aClass, "_addCompiledMethod_", [method]);
smalltalk.send(compiler, "_setupClass_", [aClass]);
smalltalk.send(self, "_updateMethodsList", []);
smalltalk.send(self, "_selectMethod_", [method]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_compileMethodDefinitionFor_'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_compileDefinition',
smalltalk.method({
selector: 'compileDefinition',
fn: function (){
var self=this;
var newClass=nil;
newClass=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
(function($rec){smalltalk.send($rec, "_resetClassesList", []);smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_commitCategory',
smalltalk.method({
selector: 'commitCategory',
fn: function (){
var self=this;
(($receiver = self['@selectedCategory']) != nil && $receiver != undefined) ? (function(){(function($rec){smalltalk.send($rec, "_at_put_", ["type", "PUT"]);smalltalk.send($rec, "_at_put_", ["data", smalltalk.send(smalltalk.send((smalltalk.Exporter || Exporter), "_new", []), "_exportCategory_", [self['@selectedCategory']])]);smalltalk.send($rec, "_at_put_", ["error", (function(){return smalltalk.send(self, "_alert_", [unescape("Commit%20failed%21")]);})]);return smalltalk.send($rec, "_send", []);})(smalltalk.send((smalltalk.Ajax || Ajax), "_url_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_commitPathJs", []), "__comma", [unescape("/")]), "__comma", [self['@selectedCategory']]), "__comma", [".js"])]));(function($rec){smalltalk.send($rec, "_at_put_", ["type", "PUT"]);smalltalk.send($rec, "_at_put_", ["data", smalltalk.send(smalltalk.send((smalltalk.StrippedExporter || StrippedExporter), "_new", []), "_exportCategory_", [self['@selectedCategory']])]);smalltalk.send($rec, "_at_put_", ["error", (function(){return smalltalk.send(self, "_alert_", [unescape("Commit%20failed%21")]);})]);return smalltalk.send($rec, "_send", []);})(smalltalk.send((smalltalk.Ajax || Ajax), "_url_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_commitPathJs", []), "__comma", [unescape("/")]), "__comma", [self['@selectedCategory']]), "__comma", [".deploy.js"])]));return (function($rec){smalltalk.send($rec, "_at_put_", ["type", "PUT"]);smalltalk.send($rec, "_at_put_", ["data", smalltalk.send(smalltalk.send((smalltalk.ChunkExporter || ChunkExporter), "_new", []), "_exportCategory_", [self['@selectedCategory']])]);smalltalk.send($rec, "_at_put_", ["error", (function(){return smalltalk.send(self, "_alert_", [unescape("Commit%20failed%21")]);})]);return smalltalk.send($rec, "_send", []);})(smalltalk.send((smalltalk.Ajax || Ajax), "_url_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_commitPathSt", []), "__comma", [unescape("/")]), "__comma", [self['@selectedCategory']]), "__comma", [".st"])]));})() : nil;
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_cancelChanges',
smalltalk.method({
selector: 'cancelChanges',
fn: function (){
var self=this;
return (($receiver = self['@unsavedChanges']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_confirm_", [unescape("Cancel%20changes%3F")]);})() : (function(){return true;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_confirm_", [unescape("Cancel%20changes%3F")]);}), (function(){return true;})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_removeClass',
smalltalk.method({
selector: 'removeClass',
fn: function (){
var self=this;
(($receiver = smalltalk.send(self, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_removeMethod',
smalltalk.method({
selector: 'removeMethod',
fn: function (){
var self=this;
(($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_confirm_", [smalltalk.send(smalltalk.send(unescape("Do%20you%20really%20want%20to%20remove%20%23"), "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]);return smalltalk.send(self, "_selectMethod_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]);return smalltalk.send(self, "_selectMethod_", [nil]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_confirm_", [smalltalk.send(smalltalk.send(unescape("Do%20you%20really%20want%20to%20remove%20%23"), "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]);return smalltalk.send(self, "_selectMethod_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]);return smalltalk.send(self, "_selectMethod_", [nil]);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_setMethodProtocol_',
smalltalk.method({
selector: 'setMethodProtocol:',
fn: function (aString){
var self=this;
(($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_addNewProtocol", []);})() : (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol']=aString;self['@selectedMethod']=self['@selectedMethod'];return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_addNewProtocol", []);}), (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol']=aString;self['@selectedMethod']=self['@selectedMethod'];return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_addNewProtocol", []);})() : (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol']=aString;self['@selectedMethod']=self['@selectedMethod'];return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_addNewProtocol", []);}), (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol']=aString;self['@selectedMethod']=self['@selectedMethod'];return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_addNewProtocol',
smalltalk.method({
selector: 'addNewProtocol',
fn: function (){
var self=this;
var newProtocol=nil;
newProtocol=smalltalk.send(self, "_prompt_", ["New method protocol"]);
(($receiver = smalltalk.send(newProtocol, "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectCategory_',
smalltalk.method({
selector: 'selectCategory:',
fn: function (aCategory){
var self=this;
(($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedCategory']=aCategory;self['@selectedClass']=self['@selectedProtocol']=self['@selectedMethod']=nil;smalltalk.send(self, "_resetClassesList", []);return (function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedCategory']=aCategory;self['@selectedClass']=self['@selectedProtocol']=self['@selectedMethod']=nil;smalltalk.send(self, "_resetClassesList", []);return (function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectClass_',
smalltalk.method({
selector: 'selectClass:',
fn: function (aClass){
var self=this;
(($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedClass']=aClass;self['@selectedProtocol']=self['@selectedMethod']=nil;return (function($rec){smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedClass']=aClass;self['@selectedProtocol']=self['@selectedMethod']=nil;return (function($rec){smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectProtocol_',
smalltalk.method({
selector: 'selectProtocol:',
fn: function (aString){
var self=this;
(($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedProtocol']=aString;self['@selectedMethod']=nil;return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedProtocol']=aString;self['@selectedMethod']=nil;return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectMethod_',
smalltalk.method({
selector: 'selectMethod:',
fn: function (aMethod){
var self=this;
(($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedMethod']=aMethod;return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedMethod']=aMethod;return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectTab_',
smalltalk.method({
selector: 'selectTab:',
fn: function (aString){
var self=this;
(($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedTab']=aString;smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedTab']=aString;smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_renameClass',
smalltalk.method({
selector: 'renameClass',
fn: function (){
var self=this;
var newName=nil;
newName=smalltalk.send(self, "_prompt_", [smalltalk.send("Rename class ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])])]);
(($receiver = smalltalk.send(newName, "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return (function($rec){smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return (function($rec){smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_addInstanceVariableNamed_toClass_',
smalltalk.method({
selector: 'addInstanceVariableNamed:toClass:',
fn: function (aString, aClass){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_addSubclassOf_named_instanceVariableNames_", [smalltalk.send(aClass, "_superclass", []), smalltalk.send(aClass, "_name", []), (function($rec){smalltalk.send($rec, "_add_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_copy", []))]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_searchReferencesOf_',
smalltalk.method({
selector: 'searchReferencesOf:',
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [aString]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_searchClassReferences',
smalltalk.method({
selector: 'searchClassReferences',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [smalltalk.send(self['@selectedClass'], "_name", [])]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_search_',
smalltalk.method({
selector: 'search:',
fn: function (aString){
var self=this;
(($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var searchedClass=nil;
searchedClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [aString]);return (($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);})() : (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}), (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var searchedClass=nil;
searchedClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [aString]);return (($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);})() : (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}), (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
self['@selectedTab']="instance";
self['@unsavedChanges']=false;
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);smalltalk.send($rec, "_renderTabsOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderTopPanelOn_',
smalltalk.method({
selector: 'renderTopPanelOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderInputOn_", [html]);self['@categoriesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser categories"]);self['@commitButton']=(function($rec){smalltalk.send($rec, "_class_", ["jt_commit"]);smalltalk.send($rec, "_title_", ["Commit classes in this category to disk"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_commitCategory", []);})]);return smalltalk.send($rec, "_with_", ["Commit category"]);})(smalltalk.send(html, "_button", []));self['@classesList']=smalltalk.send((smalltalk.ClassesList || ClassesList), "_on_", [self]);smalltalk.send(self['@classesList'], "_renderOn_", [html]);self['@protocolsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser protocols"]);self['@methodsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser methods"]);(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);return smalltalk.send($rec, "_updateMethodsList", []);})(self);return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["jt_clear"]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderTabsOn_',
smalltalk.method({
selector: 'renderTabsOn:',
fn: function (html){
var self=this;
self['@tabsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_tabs"]);
smalltalk.send(self, "_updateTabsList", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderBottomPanelOn_',
smalltalk.method({
selector: 'renderBottomPanelOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode"]);return smalltalk.send($rec, "_with_", [(function(){self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []);smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);return smalltalk.send(self['@sourceArea'], "_onKeyUp_", [(function(){return smalltalk.send(self, "_updateStatus", []);})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
fn: function (html){
var self=this;
self['@saveButton']=smalltalk.send(html, "_button", []);
(function($rec){smalltalk.send($rec, "_with_", ["Save"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_compile", []);})]);})(self['@saveButton']);
self['@methodButtons']=smalltalk.send(html, "_span", []);
self['@classButtons']=smalltalk.send(html, "_span", []);
(function($rec){smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_doIt", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_printIt", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_inspectit", []);})]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_updateSourceAndButtons", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderInputOn_',
smalltalk.method({
selector: 'renderInputOn:',
fn: function (html){
var self=this;
self['@input']=(function($rec){smalltalk.send($rec, "_class_", ["implementors"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_input", []));
smalltalk.send(self['@input'], "_onKeyPress_", [(function(event){return (($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateCategoriesList',
smalltalk.method({
selector: 'updateCategoriesList',
fn: function (){
var self=this;
smalltalk.send(self['@categoriesList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_categories", []), "_do_", [(function(each){var li=nil;
var label=nil;
(($receiver = smalltalk.send(each, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return label="Unclassified";})() : (function(){return label=each;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return label="Unclassified";}), (function(){return label=each;})]);li=smalltalk.send(html, "_li", []);(($receiver = smalltalk.send(self['@selectedCategory'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);return (function($rec){smalltalk.send($rec, "_with_", [label]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectCategory_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateClassesList',
smalltalk.method({
selector: 'updateClassesList',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_update", []);
smalltalk.send(self['@classesList'], "_updateNodes", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateProtocolsList',
smalltalk.method({
selector: 'updateProtocolsList',
fn: function (){
var self=this;
smalltalk.send(self['@protocolsList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);(($receiver = smalltalk.send(self['@selectedProtocol'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);return (function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectProtocol_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateMethodsList',
smalltalk.method({
selector: 'updateMethodsList',
fn: function (){
var self=this;
smalltalk.send(self['@methodsList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);(($receiver = smalltalk.send(self['@selectedMethod'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_selector", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectMethod_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateTabsList',
smalltalk.method({
selector: 'updateTabsList',
fn: function (){
var self=this;
smalltalk.send(self['@tabsList'], "_contents_", [(function(html){var li=nil;
li=smalltalk.send(html, "_li", []);(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);(function($rec){smalltalk.send($rec, "_with_", ["Instance"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", ["instance"]);})]);})(li);li=smalltalk.send(html, "_li", []);(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["class"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);(function($rec){smalltalk.send($rec, "_with_", ["Class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", ["class"]);})]);})(li);li=smalltalk.send(html, "_li", []);(($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["Comment"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", ["comment"]);})]);})(li);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateSourceAndButtons',
smalltalk.method({
selector: 'updateSourceAndButtons',
fn: function (){
var self=this;
smalltalk.send(self, "_disableSaveButton", []);
smalltalk.send(self['@classButtons'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_with_", ["Rename class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_renameClass", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["Remove class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_removeClass", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_searchClassReferences", []);})]);})(smalltalk.send(html, "_button", []));})]);
smalltalk.send(self['@methodButtons'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_with_", ["Remove method"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_removeMethod", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_onChange_", [(function(e, select){return smalltalk.send(self, "_setMethodProtocol_", [smalltalk.send(select, "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["Method protocol"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", ["New..."]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);})]);})]);})(smalltalk.send(html, "_select", []));return (($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function($rec){smalltalk.send($rec, "_onChange_", [(function(e, select){return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(select, "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);})]);})]);})(smalltalk.send(html, "_select", []));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_onChange_", [(function(e, select){return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(select, "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);})]);})]);})(smalltalk.send(html, "_select", []));})]);})]);
(($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_hideMethodButtons", []);return (($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedProtocol'], "_notNil", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_hideClassButtons", []);})() : (function(){return smalltalk.send(self, "_showClassButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_hideClassButtons", []);}), (function(){return smalltalk.send(self, "_showClassButtons", []);})]);})() : (function(){smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self, "_hideMethodButtons", []);return (($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedProtocol'], "_notNil", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_hideClassButtons", []);})() : (function(){return smalltalk.send(self, "_showClassButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_hideClassButtons", []);}), (function(){return smalltalk.send(self, "_showClassButtons", []);})]);}), (function(){smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);})]);
smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateStatus',
smalltalk.method({
selector: 'updateStatus',
fn: function (){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return self['@unsavedChanges']=false;})() : (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return self['@unsavedChanges']=true;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return self['@unsavedChanges']=false;}), (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return self['@unsavedChanges']=true;})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
'_resetClassesList',
smalltalk.method({
selector: 'resetClassesList',
fn: function (){
var self=this;
smalltalk.send(self['@classesList'], "_resetNodes", []);
return self;}
}),
smalltalk.Browser);


smalltalk.addMethod(
'_commitPathJs',
smalltalk.method({
selector: 'commitPathJs',
fn: function (){
var self=this;
return "js";
return self;}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
'_commitPathSt',
smalltalk.method({
selector: 'commitPathSt',
fn: function (){
var self=this;
return "st";
return self;}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
'_openOn_',
smalltalk.method({
selector: 'openOn:',
fn: function (aClass){
var self=this;
return (function($rec){smalltalk.send($rec, "_open", []);smalltalk.send($rec, "_selectCategory_", [smalltalk.send(aClass, "_category", [])]);return smalltalk.send($rec, "_selectClass_", [aClass]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
return self;}
}),
smalltalk.Browser.klass);


smalltalk.addClass('Inspector', smalltalk.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'workspaceTextarea', 'diveButton'], 'IDE');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
return (($receiver = self['@label']) == nil || $receiver == undefined) ? (function(){return unescape("Inspector%20%28nil%29");})() : $receiver;
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_variables',
smalltalk.method({
selector: 'variables',
fn: function (){
var self=this;
return self['@variables'];
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_setVariables_',
smalltalk.method({
selector: 'setVariables:',
fn: function (aCollection){
var self=this;
self['@variables']=aCollection;
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_setLabel_',
smalltalk.method({
selector: 'setLabel:',
fn: function (aString){
var self=this;
self['@label']=aString;
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_selectedVariable',
smalltalk.method({
selector: 'selectedVariable',
fn: function (){
var self=this;
return self['@selectedVariable'];
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_selectedVariable_',
smalltalk.method({
selector: 'selectedVariable:',
fn: function (aString){
var self=this;
self['@selectedVariable']=aString;
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_inspect_',
smalltalk.method({
selector: 'inspect:',
fn: function (anObject){
var self=this;
self['@object']=anObject;
self['@variables']=[];
smalltalk.send(self['@object'], "_inspectOn_", [self]);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_dive',
smalltalk.method({
selector: 'dive',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_inspect", []);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_refresh',
smalltalk.method({
selector: 'refresh',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_inspect_", [self['@object']]);smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateValueTextarea", []);})(self);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_renderTopPanelOn_',
smalltalk.method({
selector: 'renderTopPanelOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){self['@variablesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column variables"]);self['@valueTextarea']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column value"]);return smalltalk.send($rec, "_at_put_", ["readonly", "readonly"]);})(smalltalk.send(html, "_textarea", []));(function($rec){smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateValueTextarea", []);})(self);return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["jt_clear"]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_renderBottomPanelOn_',
smalltalk.method({
selector: 'renderBottomPanelOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode"]);return smalltalk.send($rec, "_with_", [(function(){self['@workspaceTextarea']=(function($rec){smalltalk.send($rec, "_class_", ["source"]);return smalltalk.send($rec, "_at_put_", ["spellcheck", "false"]);})(smalltalk.send(html, "_textarea", []));return smalltalk.send(smalltalk.send(self['@workspaceTextarea'], "_asJQuery", []), "_call_", ["tabby"]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["Refresh"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_refresh", []);})]);})(smalltalk.send(html, "_button", []));
self['@diveButton']=(function($rec){smalltalk.send($rec, "_with_", ["Dive"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_dive", []);})]);})(smalltalk.send(html, "_button", []));
smalltalk.send(self, "_updateButtons", []);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_updateVariablesList',
smalltalk.method({
selector: 'updateVariablesList',
fn: function (){
var self=this;
smalltalk.send(self['@variablesList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_keys", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);(function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_", [each]);})]);})(li);return (($receiver = smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);})]);})]);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_selectVariable_',
smalltalk.method({
selector: 'selectVariable:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_selectedVariable_", [aString]);
(function($rec){smalltalk.send($rec, "_updateVariablesList", []);smalltalk.send($rec, "_updateValueTextarea", []);return smalltalk.send($rec, "_updateButtons", []);})(self);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_updateValueTextarea',
smalltalk.method({
selector: 'updateValueTextarea',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@valueTextarea'], "_asJQuery", []), "_val_", [(($receiver = smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "";})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_printString", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "";}), (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_printString", []);})])]);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
'_updateButtons',
smalltalk.method({
selector: 'updateButtons',
fn: function (){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "_notNil", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@diveButton'], "_at_put_", ["disabled", true]);})() : (function(){return smalltalk.send(self['@diveButton'], "_removeAt_", ["disabled"]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@diveButton'], "_at_put_", ["disabled", true]);}), (function(){return smalltalk.send(self['@diveButton'], "_removeAt_", ["disabled"]);})]);
return self;}
}),
smalltalk.Inspector);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_inspect_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Inspector.klass);


smalltalk.addClass('ReferencesBrowser', smalltalk.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList'], 'IDE');
smalltalk.addMethod(
'_implementors',
smalltalk.method({
selector: 'implementors',
fn: function (){
var self=this;
return (($receiver = self['@implementors']) == nil || $receiver == undefined) ? (function(){return self['@implementors']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
return unescape("%5BReferencesBrowser%5D");
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_senders',
smalltalk.method({
selector: 'senders',
fn: function (){
var self=this;
return (($receiver = self['@senders']) == nil || $receiver == undefined) ? (function(){return self['@senders']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_classesAndMetaclasses',
smalltalk.method({
selector: 'classesAndMetaclasses',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_referencedClasses',
smalltalk.method({
selector: 'referencedClasses',
fn: function (){
var self=this;
return (($receiver = self['@referencedClasses']) == nil || $receiver == undefined) ? (function(){return self['@referencedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_openBrowserOn_',
smalltalk.method({
selector: 'openBrowserOn:',
fn: function (aMethod){
var self=this;
var browser=nil;
browser=smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(($receiver = smalltalk.send(smalltalk.send(aMethod, "_class", []), "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_instanceClass", []);})() : (function(){return smalltalk.send(aMethod, "_methodClass", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_instanceClass", []);}), (function(){return smalltalk.send(aMethod, "_methodClass", []);})])]);
(($receiver = smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(browser, "_selectTab_", ["class"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(browser, "_selectTab_", ["class"]);})]);
(function($rec){smalltalk.send($rec, "_selectProtocol_", [smalltalk.send(aMethod, "_category", [])]);return smalltalk.send($rec, "_selectMethod_", [aMethod]);})(browser);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_searchReferencesFor_',
smalltalk.method({
selector: 'searchReferencesFor:',
fn: function (aString){
var self=this;
self['@selector']=aString;
self['@implementors']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@senders']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@referencedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []);
(($receiver = smalltalk.send(self['@selector'], "_match_", [unescape("%5E%5BA-Z%5D")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_searchSelectorReferencesFor_", [self['@selector']]);})() : (function(){return smalltalk.send(self, "_searchReferencedClassesFor_", [self['@selector']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_searchSelectorReferencesFor_", [self['@selector']]);}), (function(){return smalltalk.send(self, "_searchReferencedClassesFor_", [self['@selector']]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_search_',
smalltalk.method({
selector: 'search:',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_searchReferencesFor_", [aString]);smalltalk.send($rec, "_updateImplementorsList", []);smalltalk.send($rec, "_updateSendersList", []);return smalltalk.send($rec, "_updateReferencedClassesList", []);})(self);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_searchReferencedClassesFor_',
smalltalk.method({
selector: 'searchReferencedClassesFor:',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(value){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(value, "_referencedClasses", []), "_select_", [(function(each){return smalltalk.send(each, "_notNil", []);})]), "_collect_", [(function(each){return smalltalk.send(each, "_name", []);})]), "_includes_", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_add_", [value]);})]);})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_searchSelectorReferencesFor_',
smalltalk.method({
selector: 'searchSelectorReferencesFor:',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [(function(each){smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_keysAndValuesDo_", [(function(key, value){return (($receiver = smalltalk.send(key, "__eq", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_implementors", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_implementors", []), "_add_", [value]);})]);})]);return smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_keysAndValuesDo_", [(function(key, value){return (($receiver = smalltalk.send(smalltalk.send(value, "_messageSends", []), "_includes_", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_senders", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_senders", []), "_add_", [value]);})]);})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
self['@selector']="";
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_setInputEvents',
smalltalk.method({
selector: 'setInputEvents',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_onKeyUp_", [(function(){return self['@timer']=smalltalk.send((function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}), "_valueWithTimeout_", [(100)]);})]);return smalltalk.send($rec, "_onKeyDown_", [(function(){return (($receiver = self['@timer']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@timer'], "_clearTimeout", []);})() : nil;})]);})(self['@input']);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderInputOn_", [html]);smalltalk.send($rec, "_renderImplementorsOn_", [html]);smalltalk.send($rec, "_renderSendersOn_", [html]);return smalltalk.send($rec, "_renderReferencedClassesOn_", [html]);})(self);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_renderInputOn_',
smalltalk.method({
selector: 'renderInputOn:',
fn: function (html){
var self=this;
self['@input']=(function($rec){smalltalk.send($rec, "_class_", ["implementors"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_input", []));
smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val_", [self['@selector']]);
smalltalk.send(self, "_setInputEvents", []);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_renderImplementorsOn_',
smalltalk.method({
selector: 'renderImplementorsOn:',
fn: function (html){
var self=this;
self['@implementorsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column implementors"]);
smalltalk.send(self, "_updateImplementorsList", []);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_renderSendersOn_',
smalltalk.method({
selector: 'renderSendersOn:',
fn: function (html){
var self=this;
self['@sendersList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column senders"]);
smalltalk.send(self, "_updateSendersList", []);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_renderReferencedClassesOn_',
smalltalk.method({
selector: 'renderReferencedClassesOn:',
fn: function (html){
var self=this;
self['@referencedClassesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column referenced_classes"]);
smalltalk.send(self, "_updateReferencedClassesList", []);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_updateImplementorsList',
smalltalk.method({
selector: 'updateImplementorsList',
fn: function (){
var self=this;
smalltalk.send(self['@implementorsList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Implementors%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_implementors", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_implementors", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_updateSendersList',
smalltalk.method({
selector: 'updateSendersList',
fn: function (){
var self=this;
smalltalk.send(self['@sendersList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Senders%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_senders", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_senders", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
'_updateReferencedClassesList',
smalltalk.method({
selector: 'updateReferencedClassesList',
fn: function (){
var self=this;
smalltalk.send(self['@referencedClassesList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Class%20references%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);


smalltalk.addMethod(
'_search_',
smalltalk.method({
selector: 'search:',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_searchReferencesFor_", [aString]);return smalltalk.send($rec, "_open", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ReferencesBrowser.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div'], 'IDE');
smalltalk.addMethod(
'_val',
smalltalk.method({
selector: 'val',
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getValue", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_val_',
smalltalk.method({
selector: 'val:',
fn: function (aString){
var self=this;
smalltalk.send(self['@editor'], "_setValue_", [aString]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_currentLine',
smalltalk.method({
selector: 'currentLine',
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursor", []), "_line", [])]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_selection',
smalltalk.method({
selector: 'selection',
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getSelection", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_selectionEnd',
smalltalk.method({
selector: 'selectionEnd',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionEnd", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_selectionStart',
smalltalk.method({
selector: 'selectionStart',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionStart", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_selectionStart_',
smalltalk.method({
selector: 'selectionStart:',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionStart_", [anInteger]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_selectionEnd_',
smalltalk.method({
selector: 'selectionEnd:',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionEnd_", [anInteger]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_setEditorOn_',
smalltalk.method({
selector: 'setEditorOn:',
fn: function (aTextarea){
var self=this;
self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
        	theme: 'jtalk',
                lineNumbers: true,
                enterMode: 'classic',
                matchBrackets: true,
                electricChars: false,
	});
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_editor',
smalltalk.method({
selector: 'editor',
fn: function (){
var self=this;
return self['@editor'];
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_clear',
smalltalk.method({
selector: 'clear',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_asJQuery", []), "_val_", [""]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_doIt',
smalltalk.method({
selector: 'doIt',
fn: function (){
var self=this;
var selection=nil;
(($receiver = smalltalk.send(self['@editor'], "_somethingSelected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return selection=smalltalk.send(self, "_currentLine", []);})() : (function(){return selection=smalltalk.send(self, "_selection", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return selection=smalltalk.send(self, "_currentLine", []);}), (function(){return selection=smalltalk.send(self, "_selection", []);})]);
return smalltalk.send(self, "_eval_", [selection]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_eval_',
smalltalk.method({
selector: 'eval:',
fn: function (aString){
var self=this;
try{var compiler=nil;
var node=nil;
compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []);
node=smalltalk.send(compiler, "_parseExpression_", [aString]);
(($receiver = smalltalk.send(node, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send(self, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send(node, "_reason", []), "__comma", [unescape("%2C%20position%3A%20")]), "__comma", [smalltalk.send(node, "_position", [])])])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send(self, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send(node, "_reason", []), "__comma", [unescape("%2C%20position%3A%20")]), "__comma", [smalltalk.send(node, "_position", [])])])}})})();})]);
(function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send(compiler, "_loadExpression_", [aString])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_eval_'){return e.fn()} throw(e)}}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_handleKeyDown_',
smalltalk.method({
selector: 'handleKeyDown:',
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
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_inspectIt',
smalltalk.method({
selector: 'inspectIt',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_doIt", []), "_inspect", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_print_',
smalltalk.method({
selector: 'print:',
fn: function (aString){
var self=this;
var start=nil;
var stop=nil;
start=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
stop=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(start, "_at_put_", ["line", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_line", [])]);
smalltalk.send(start, "_at_put_", ["ch", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_ch", [])]);
smalltalk.send(stop, "_at_put_", ["line", smalltalk.send(start, "_at_", ["line"])]);
smalltalk.send(stop, "_at_put_", ["ch", (($receiver = (($receiver = smalltalk.send(start, "_at_", ["ch"])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])])).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)])]);
smalltalk.send(self['@editor'], "_replaceSelection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@editor'], "_getSelection", []), "__comma", [" "]), "__comma", [aString]), "__comma", [" "])]);
smalltalk.send(self['@editor'], "_setCursor_", [smalltalk.send(self['@editor'], "_getCursor_", [true])]);
smalltalk.send(self['@editor'], "_setSelection_end_", [stop, start]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_printIt',
smalltalk.method({
selector: 'printIt',
fn: function (){
var self=this;
smalltalk.send(self, "_print_", [smalltalk.send(smalltalk.send(self, "_doIt", []), "_printString", [])]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_onKeyUp_',
smalltalk.method({
selector: 'onKeyUp:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@div'], "_onKeyUp_", [aBlock]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_onKeyDown_',
smalltalk.method({
selector: 'onKeyDown:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@div'], "_onKeyDown_", [aBlock]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
var textarea=nil;
self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["source"]);
smalltalk.send(self['@div'], "_with_", [(function(){return textarea=smalltalk.send(html, "_textarea", []);})]);
smalltalk.send(self, "_setEditorOn_", [smalltalk.send(textarea, "_element", [])]);
smalltalk.send(self['@div'], "_onKeyDown_", [(function(e){return smalltalk.send(self, "_handleKeyDown_", [e]);})]);
return self;}
}),
smalltalk.SourceArea);



smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
'_category',
smalltalk.method({
selector: 'category',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedCategory", []);
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
'_nodes',
smalltalk.method({
selector: 'nodes',
fn: function (){
var self=this;
(($receiver = self['@nodes']) == nil || $receiver == undefined) ? (function(){return self['@nodes']=smalltalk.send(self, "_getNodes", []);})() : $receiver;
return self['@nodes'];
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
'_browser',
smalltalk.method({
selector: 'browser',
fn: function (){
var self=this;
return self['@browser'];
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
'_browser_',
smalltalk.method({
selector: 'browser:',
fn: function (aBrowser){
var self=this;
self['@browser']=aBrowser;
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
'_getNodes',
smalltalk.method({
selector: 'getNodes',
fn: function (){
var self=this;
var classes=nil;
var children=nil;
var others=nil;
classes=smalltalk.send(smalltalk.send(self, "_browser", []), "_classes", []);
children=[];
others=[];
smalltalk.send(classes, "_do_", [(function(each){return (($receiver = smalltalk.send(classes, "_includes_", [smalltalk.send(each, "_superclass", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(children, "_add_", [each]);})() : (function(){return smalltalk.send(others, "_add_", [each]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(children, "_add_", [each]);}), (function(){return smalltalk.send(others, "_add_", [each]);})]);})]);
return smalltalk.send(children, "_collect_", [(function(each){return smalltalk.send((smalltalk.ClassesListNode || ClassesListNode), "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, (0)]);})]);
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
'_resetNodes',
smalltalk.method({
selector: 'resetNodes',
fn: function (){
var self=this;
self['@nodes']=nil;
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@ul']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column browser classes"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_ul", []));
smalltalk.send(self, "_updateNodes", []);
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
'_updateNodes',
smalltalk.method({
selector: 'updateNodes',
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_renderOn_", [html]);})]);})]);
return self;}
}),
smalltalk.ClassesList);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aBrowser){
var self=this;
return (function($rec){smalltalk.send($rec, "_browser_", [aBrowser]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
'_nodes',
smalltalk.method({
selector: 'nodes',
fn: function (){
var self=this;
return self['@nodes'];
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_theClass',
smalltalk.method({
selector: 'theClass',
fn: function (){
var self=this;
return self['@theClass'];
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_theClass_',
smalltalk.method({
selector: 'theClass:',
fn: function (aClass){
var self=this;
self['@theClass']=aClass;
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_browser',
smalltalk.method({
selector: 'browser',
fn: function (){
var self=this;
return self['@browser'];
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_browser_',
smalltalk.method({
selector: 'browser:',
fn: function (aBrowser){
var self=this;
self['@browser']=aBrowser;
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_level',
smalltalk.method({
selector: 'level',
fn: function (){
var self=this;
return self['@level'];
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_level_',
smalltalk.method({
selector: 'level:',
fn: function (anInteger){
var self=this;
self['@level']=anInteger;
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
var str=nil;
str=smalltalk.send(smalltalk.send((smalltalk.String || String), "_new", []), "_writeStream", []);
smalltalk.send(smalltalk.send(self, "_level", []), "_timesRepeat_", [(function(){return smalltalk.send(str, "_nextPutAll_", [unescape("%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B")]);})]);
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", [])]);
return smalltalk.send(str, "_contents", []);
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_getNodesFrom_',
smalltalk.method({
selector: 'getNodesFrom:',
fn: function (aCollection){
var self=this;
var children=nil;
var others=nil;
children=[];
others=[];
smalltalk.send(aCollection, "_do_", [(function(each){return (($receiver = smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(children, "_add_", [each]);})() : (function(){return smalltalk.send(others, "_add_", [each]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(children, "_add_", [each]);}), (function(){return smalltalk.send(others, "_add_", [each]);})]);})]);
self['@nodes']=smalltalk.send(children, "_collect_", [(function(each){return smalltalk.send((smalltalk.ClassesListNode || ClassesListNode), "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, (($receiver = smalltalk.send(self, "_level", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);})]);
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
var li=nil;
li=smalltalk.send(smalltalk.send(html, "_li", []), "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectClass_", [smalltalk.send(self, "_theClass", [])]);})]);
smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_contents_", [smalltalk.send(self, "_label", [])]);
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedClass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);
smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_renderOn_", [html]);})]);
return self;}
}),
smalltalk.ClassesListNode);


smalltalk.addMethod(
'_on_browser_classes_level_',
smalltalk.method({
selector: 'on:browser:classes:level:',
fn: function (aClass, aBrowser, aCollection, anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_theClass_", [aClass]);smalltalk.send($rec, "_browser_", [aBrowser]);smalltalk.send($rec, "_level_", [anInteger]);smalltalk.send($rec, "_getNodesFrom_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul'], 'IDE');
smalltalk.addMethod(
'_error',
smalltalk.method({
selector: 'error',
fn: function (){
var self=this;
return self['@error'];
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_error_',
smalltalk.method({
selector: 'error:',
fn: function (anError){
var self=this;
self['@error']=anError;
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
return unescape("%5BDebugger%5D");
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_selectContext_',
smalltalk.method({
selector: 'selectContext:',
fn: function (aContext){
var self=this;
self['@selectedContext']=aContext;
smalltalk.send(self, "_updateContextsList", []);
smalltalk.send(self, "_updateSourceArea", []);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_renderTopPanelOn_',
smalltalk.method({
selector: 'renderTopPanelOn:',
fn: function (html){
var self=this;
self['@selectedContext']=smalltalk.send(smalltalk.send(self, "_error", []), "_context", []);
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["label"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_error", []), "_messageText", [])]);})(smalltalk.send(html, "_div", []));return self['@ul']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column debugger contexts"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(smalltalk.send(self, "_error", []), "_context", []), html]);})]);})(smalltalk.send(html, "_ul", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_renderContext_on_',
smalltalk.method({
selector: 'renderContext:on:',
fn: function (aContext, html){
var self=this;
var li=nil;
li=smalltalk.send(html, "_li", []);
(($receiver = smalltalk.send(self['@selectedContext'], "__eq", [aContext])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(aContext, "_asString", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectContext_", [aContext]);})]);})(li);
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(aContext, "_home", []), html]);})() : nil;
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_renderBottomPanelOn_',
smalltalk.method({
selector: 'renderBottomPanelOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode"]);return smalltalk.send($rec, "_with_", [(function(){self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []);return smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_updateSourceArea", []);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_updateContextsList',
smalltalk.method({
selector: 'updateContextsList',
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(smalltalk.send(self, "_error", []), "_context", []), html]);})]);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
'_updateSourceArea',
smalltalk.method({
selector: 'updateSourceArea',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_methodAt_", [smalltalk.send(self['@selectedContext'], "_selector", [])]), "_source", [])]);
return self;}
}),
smalltalk.Debugger);



smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
'_handleError_',
smalltalk.method({
selector: 'handleError:',
fn: function (anError){
var self=this;
smalltalk.send((function(){return (function($rec){smalltalk.send($rec, "_error_", [anError]);return smalltalk.send($rec, "_open", []);})(smalltalk.send((smalltalk.Debugger || Debugger), "_new", []));}), "_on_do_", [(smalltalk.Error || Error), (function(error){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [error]);})]);
return self;}
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;}
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addMethod(
'_inspect',
smalltalk.method({
selector: 'inspect',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_inspect_", [self]);return smalltalk.send($rec, "_open", []);})(smalltalk.send((smalltalk.Inspector || Inspector), "_new", []));
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_inspectOn_',
smalltalk.method({
selector: 'inspectOn:',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(self, "_instVarAt_", [each])]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_inspectOn_',
smalltalk.method({
selector: 'inspectOn:',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(variables, "_at_put_", [unescape("%23year"), smalltalk.send(self, "_year", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23month"), smalltalk.send(self, "_month", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23day"), smalltalk.send(self, "_day", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23hours"), smalltalk.send(self, "_hours", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23minutes"), smalltalk.send(self, "_minutes", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23seconds"), smalltalk.send(self, "_seconds", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23milliseconds"), smalltalk.send(self, "_milliseconds", [])]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_inspectOn_',
smalltalk.method({
selector: 'inspectOn:',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(self, "_withIndexDo_", [(function(each, i){return smalltalk.send(variables, "_at_put_", [i, each]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_inspectOn_',
smalltalk.method({
selector: 'inspectOn:',
fn: function (anInspector){
var self=this;
var label=nil;
smalltalk.send(self, "_inspectOn_", [anInspector], smalltalk.SequenceableCollection);
(($receiver = (($receiver = smalltalk.send(smalltalk.send(self, "_printString", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(30) : smalltalk.send($receiver, "__gt", [(30)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return label=smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", []), "_copyFrom_to_", [(1), (30)]), "__comma", [unescape("...%27")]);})() : (function(){return label=smalltalk.send(self, "_printString", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return label=smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", []), "_copyFrom_to_", [(1), (30)]), "__comma", [unescape("...%27")]);}), (function(){return label=smalltalk.send(self, "_printString", []);})]);
smalltalk.send(anInspector, "_setLabel_", [label]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_inspectOn_',
smalltalk.method({
selector: 'inspectOn:',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(variables, "_at_put_", [unescape("%23home"), smalltalk.send(self, "_home", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23receiver"), smalltalk.send(self, "_receiver", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23selector"), smalltalk.send(self, "_selector", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23temps"), smalltalk.send(self, "_temps", [])]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(self, "_instVarAt_", [each])]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_inspectOn_',
smalltalk.method({
selector: 'inspectOn:',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(variables, "_at_put_", [unescape("%23keys"), smalltalk.send(self, "_keys", [])]);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(variables, "_at_put_", [key, value]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Dictionary);

