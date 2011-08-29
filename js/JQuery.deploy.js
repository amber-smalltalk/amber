smalltalk.addClass('JQuery', smalltalk.Object, ['jquery'], 'JQuery');
smalltalk.addMethod(
'_append_',
smalltalk.method({
selector: 'append:',
fn: function (anObject){
var self=this;
smalltalk.send(anObject, "_appendToJQuery_", [self]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_appendElement_',
smalltalk.method({
selector: 'appendElement:',
fn: function (anElement){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["append", anElement]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_appendElement_", [self['@jquery']]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_empty", []);
smalltalk.send(self, "_append_", [anObject]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_empty',
smalltalk.method({
selector: 'empty',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["empty"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_jquery',
smalltalk.method({
selector: 'jquery',
fn: function (){
var self=this;
return self['@jquery'];
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_removeAttribute_',
smalltalk.method({
selector: 'removeAttribute:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_call_withArgument_", ["removeAttribute", aString]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_attr_',
smalltalk.method({
selector: 'attr:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_call_withArgument_", ["attr", aString]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_val',
smalltalk.method({
selector: 'val',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["val"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_val_',
smalltalk.method({
selector: 'val:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["val", aString]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_cssAt_',
smalltalk.method({
selector: 'cssAt:',
fn: function (aString){
var self=this;
return self['@jquery'].css(aString);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_cssAt_put_',
smalltalk.method({
selector: 'cssAt:put:',
fn: function (aString, anotherString){
var self=this;
self['@jquery'].css(aString, anotherString);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_addClass_',
smalltalk.method({
selector: 'addClass:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["addClass", aString]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_removeClass_',
smalltalk.method({
selector: 'removeClass:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["removeClass", aString]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_toggleClass_',
smalltalk.method({
selector: 'toggleClass:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["toggleClass", aString]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["height"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_height_',
smalltalk.method({
selector: 'height:',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["height", anInteger]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_width_',
smalltalk.method({
selector: 'width:',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["width", anInteger]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["width"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_innerHeight',
smalltalk.method({
selector: 'innerHeight',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["innerHeight"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_innerWidth',
smalltalk.method({
selector: 'innerWidth',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["innerWidth"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_outerHeight',
smalltalk.method({
selector: 'outerHeight',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["outerHeight"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_outerWidth',
smalltalk.method({
selector: 'outerWidth',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["outerWidth"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_top',
smalltalk.method({
selector: 'top',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_call_", ["position"]), "_basicAt_", ["top"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_left',
smalltalk.method({
selector: 'left',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_call_", ["position"]), "_basicAt_", ["left"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_offsetLeft',
smalltalk.method({
selector: 'offsetLeft',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_call_", ["offset"]), "_basicAt_", ["left"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_offsetTop',
smalltalk.method({
selector: 'offsetTop',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_call_", ["offset"]), "_basicAt_", ["top"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_scrollLeft',
smalltalk.method({
selector: 'scrollLeft',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["scrollLeft"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_scrollTop',
smalltalk.method({
selector: 'scrollTop',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["scrollTop"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_scrollLeft_',
smalltalk.method({
selector: 'scrollLeft:',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["scrollLeft", anInteger]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_scrollTop_',
smalltalk.method({
selector: 'scrollTop:',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["scrollTop", anInteger]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_focus',
smalltalk.method({
selector: 'focus',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["focus"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_show',
smalltalk.method({
selector: 'show',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["show"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_hide',
smalltalk.method({
selector: 'hide',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["hide"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_remove',
smalltalk.method({
selector: 'remove',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["remove"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_on_do_',
smalltalk.method({
selector: 'on:do:',
fn: function (anEventString, aBlock){
var self=this;
self['@jquery'].bind(anEventString, function(e){aBlock(e, self)});
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_removeEvents_',
smalltalk.method({
selector: 'removeEvents:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["unbind", aString]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_initializeWithJQueryObject_',
smalltalk.method({
selector: 'initializeWithJQueryObject:',
fn: function (anObject){
var self=this;
self['@jquery']=anObject;
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_call_',
smalltalk.method({
selector: 'call:',
fn: function (aString){
var self=this;
return self['@jquery'][aString]();
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_call_withArgument_',
smalltalk.method({
selector: 'call:withArgument:',
fn: function (aString, anObject){
var self=this;
return self['@jquery'][aString](anObject);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_hasClass_',
smalltalk.method({
selector: 'hasClass:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_call_withArgument_", ["hasClass", aString]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_elementsDo_", [(function(anElement){return smalltalk.send(aBlock, "_value_", [smalltalk.send(smalltalk.JQuery, "_fromElement_", [anElement])]);})]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_elementsDo_',
smalltalk.method({
selector: 'elementsDo:',
fn: function (aBlock){
var self=this;
self['@jquery'].each(function(index, element){aBlock(element, self)});
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_attrAt_put_',
smalltalk.method({
selector: 'attrAt:put:',
fn: function (aString, anotherString){
var self=this;
self['@jquery'].attr(aString, anotherString);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
'_find_',
smalltalk.method({
selector: 'find:',
fn: function (aSelector){
var self=this;
return smalltalk.send(self, "_call_withArgument_", ["find", aSelector]);
return self;}
}),
smalltalk.JQuery);


smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
fn: function (aString){
var self=this;
var newJQuery=nil;
newJQuery = jQuery(String(aString));
return smalltalk.send(self, "_from_", [newJQuery]);
return self;}
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
'_from_',
smalltalk.method({
selector: 'from:',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeWithJQueryObject_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
'_window',
smalltalk.method({
selector: 'window',
fn: function (){
var self=this;
return self._from_(jQuery(window));
return self;}
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
'_body',
smalltalk.method({
selector: 'body',
fn: function (){
var self=this;
return self._from_(jQuery('body'));
return self;}
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
'_document',
smalltalk.method({
selector: 'document',
fn: function (){
var self=this;
return self._from_(jQuery(document));
return self;}
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
'_fromElement_',
smalltalk.method({
selector: 'fromElement:',
fn: function (anElement){
var self=this;
var newJQuery=nil;
newJQuery = jQuery(anElement);
return smalltalk.send(self, "_from_", [newJQuery]);
return self;}
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
'_documentReady_',
smalltalk.method({
selector: 'documentReady:',
fn: function (aBlock){
var self=this;
jQuery(document).ready(aBlock);
return self;}
}),
smalltalk.JQuery.klass);


smalltalk.addClass('Ajax', smalltalk.Object, ['settings'], 'JQuery');
smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
fn: function (aKey){
var self=this;
return smalltalk.send(self['@settings'], "_at_ifAbsent_", [aKey, (function(){return nil;})]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (aKey, aValue){
var self=this;
smalltalk.send(self['@settings'], "_at_put_", [aKey, aValue]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_url',
smalltalk.method({
selector: 'url',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", ["url"]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_url_',
smalltalk.method({
selector: 'url:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["url", aString]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_send',
smalltalk.method({
selector: 'send',
fn: function (){
var self=this;
jQuery.ajax(self['@settings']);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@settings']=smalltalk.send(smalltalk.Dictionary, "_new", []);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_onSuccessDo_',
smalltalk.method({
selector: 'onSuccessDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_at_put_", ["success", aBlock]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_onCompleteDo_',
smalltalk.method({
selector: 'onCompleteDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_at_put_", ["complete", aBlock]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_onErrorDo_',
smalltalk.method({
selector: 'onErrorDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_at_put_", ["error", aBlock]);
return self;}
}),
smalltalk.Ajax);


smalltalk.addMethod(
'_url_',
smalltalk.method({
selector: 'url:',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_url_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Ajax.klass);


smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_value_", [smalltalk.send(smalltalk.HTMLCanvas, "_onJQuery_", [aJQuery])]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_asJQuery',
smalltalk.method({
selector: 'asJQuery',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.JQuery, "_fromString_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
aJQuery._appendElement_(String(self));
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_appendElement_", [smalltalk.send(self['@root'], "_element", [])]);
return self;}
}),
smalltalk.HTMLCanvas);

