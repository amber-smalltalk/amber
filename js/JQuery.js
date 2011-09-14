smalltalk.addClass('JQuery', smalltalk.Object, ['jquery'], 'JQuery');
smalltalk.addMethod(
unescape('_append_'),
smalltalk.method({
selector: unescape('append%3A'),
category: 'DOM insertion',
fn: function (anObject){
var self=this;
smalltalk.send(anObject, "_appendToJQuery_", [self]);
return self;},
args: ["anObject"],
source: unescape('append%3A%20anObject%0A%20%20%20%20%22Append%20anObject%20at%20the%20end%20of%20the%20element.%22%0A%20%20%20%20anObject%20appendToJQuery%3A%20self'),
messageSends: ["appendToJQuery:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_appendElement_'),
smalltalk.method({
selector: unescape('appendElement%3A'),
category: 'DOM insertion',
fn: function (anElement){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["append", anElement]);
return self;},
args: ["anElement"],
source: unescape('appendElement%3A%20anElement%0A%20%20%20%20%22Append%20anElement%20at%20the%20end%20of%20the%20element.%0A%20%20%20%20%20Dont%27t%20call%20this%20method%20directly%2C%20use%20%23append%3A%20instead%22%0A%20%20%20%20self%20call%3A%20%27append%27%20withArgument%3A%20anElement'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
category: 'DOM insertion',
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_appendElement_", [self['@jquery']]);
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20aJQuery%20appendElement%3A%20jquery'),
messageSends: ["appendElement:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_contents_'),
smalltalk.method({
selector: unescape('contents%3A'),
category: 'DOM insertion',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_empty", []);
smalltalk.send(self, "_append_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('contents%3A%20anObject%0A%20%20%20%20self%20empty.%0A%20%20%20%20self%20append%3A%20anObject'),
messageSends: ["empty", "append:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_empty'),
smalltalk.method({
selector: unescape('empty'),
category: 'DOM insertion',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["empty"]);
return self;},
args: [],
source: unescape('empty%0A%20%20%20%20%5Eself%20call%3A%20%27empty%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_jquery'),
smalltalk.method({
selector: unescape('jquery'),
category: 'accessing',
fn: function (){
var self=this;
return self['@jquery'];
return self;},
args: [],
source: unescape('jquery%0A%09%5Ejquery'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_removeAttribute_'),
smalltalk.method({
selector: unescape('removeAttribute%3A'),
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_call_withArgument_", ["removeAttribute", aString]);
return self;},
args: ["aString"],
source: unescape('removeAttribute%3A%20aString%0A%20%20%20%20%22Remove%20an%20attribute%20from%20each%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27removeAttribute%27%20withArgument%3A%20aString'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_attr_'),
smalltalk.method({
selector: unescape('attr%3A'),
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_call_withArgument_", ["attr", aString]);
return self;},
args: ["aString"],
source: unescape('attr%3A%20aString%0A%20%20%20%20%22Get%20the%20value%20of%20an%20attribute%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27attr%27%20withArgument%3A%20aString'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_val'),
smalltalk.method({
selector: unescape('val'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["val"]);
return self;},
args: [],
source: unescape('val%0A%20%20%20%20%22Get%20the%20current%20value%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27val%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_val_'),
smalltalk.method({
selector: unescape('val%3A'),
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["val", aString]);
return self;},
args: ["aString"],
source: unescape('val%3A%20aString%0A%20%20%20%20self%20call%3A%20%27val%27%20withArgument%3A%20aString'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_attrAt_put_'),
smalltalk.method({
selector: unescape('attrAt%3Aput%3A'),
category: 'attributes',
fn: function (aString, anotherString){
var self=this;
self['@jquery'].attr(aString, anotherString);
return self;},
args: ["aString", "anotherString"],
source: unescape('attrAt%3A%20aString%20put%3A%20anotherString%0A%20%20%20%20%22Set%20the%20value%20of%20an%20attribute%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%3Cself%5B%27@jquery%27%5D.attr%28aString%2C%20anotherString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_cssAt_'),
smalltalk.method({
selector: unescape('cssAt%3A'),
category: 'css',
fn: function (aString){
var self=this;
return self['@jquery'].css(aString);
return self;},
args: ["aString"],
source: unescape('cssAt%3A%20aString%0A%09%3Creturn%20self%5B%27@jquery%27%5D.css%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_cssAt_put_'),
smalltalk.method({
selector: unescape('cssAt%3Aput%3A'),
category: 'css',
fn: function (aString, anotherString){
var self=this;
self['@jquery'].css(aString, anotherString);
return self;},
args: ["aString", "anotherString"],
source: unescape('cssAt%3A%20aString%20put%3A%20anotherString%0A%20%20%20%20%3Cself%5B%27@jquery%27%5D.css%28aString%2C%20anotherString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_addClass_'),
smalltalk.method({
selector: unescape('addClass%3A'),
category: 'css',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["addClass", aString]);
return self;},
args: ["aString"],
source: unescape('addClass%3A%20aString%0A%20%20%20%20%22Adds%20the%20specified%20class%28es%29%20to%20each%20of%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20self%20call%3A%20%27addClass%27%20withArgument%3A%20aString'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_removeClass_'),
smalltalk.method({
selector: unescape('removeClass%3A'),
category: 'css',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["removeClass", aString]);
return self;},
args: ["aString"],
source: unescape('removeClass%3A%20aString%0A%20%20%20%20%22Remove%20a%20single%20class%2C%20multiple%20classes%2C%20or%20all%20classes%20from%20each%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20self%20call%3A%20%27removeClass%27%20withArgument%3A%20aString'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_toggleClass_'),
smalltalk.method({
selector: unescape('toggleClass%3A'),
category: 'css',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["toggleClass", aString]);
return self;},
args: ["aString"],
source: unescape('toggleClass%3A%20aString%0A%20%20%20%20%22Add%20or%20remove%20one%20or%20more%20classes%20from%20each%20element%20in%20the%20set%20of%20matched%20elements%2C%20depending%20on%20either%20the%20class%27s%20presence%20or%20the%20value%20of%20the%20switch%20argument.%22%0A%20%20%20%20self%20call%3A%20%27toggleClass%27%20withArgument%3A%20aString'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["height"]);
return self;},
args: [],
source: unescape('height%20%0A%20%20%20%20%22Get%20the%20current%20computed%20height%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27height%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_height_'),
smalltalk.method({
selector: unescape('height%3A'),
category: 'css',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["height", anInteger]);
return self;},
args: ["anInteger"],
source: unescape('height%3A%20anInteger%0A%20%20%20%20self%20call%3A%20%27height%27%20withArgument%3A%20anInteger'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_width_'),
smalltalk.method({
selector: unescape('width%3A'),
category: 'css',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["width", anInteger]);
return self;},
args: ["anInteger"],
source: unescape('width%3A%20anInteger%0A%20%20%20%20self%20call%3A%20%27width%27%20withArgument%3A%20anInteger'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_width'),
smalltalk.method({
selector: unescape('width'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["width"]);
return self;},
args: [],
source: unescape('width%0A%20%20%20%20%22Get%20the%20current%20computed%20width%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27width%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_innerHeight'),
smalltalk.method({
selector: unescape('innerHeight'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["innerHeight"]);
return self;},
args: [],
source: unescape('innerHeight%0A%20%20%20%20%22Get%20the%20current%20computed%20height%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20including%20padding%20but%20not%20border.%22%0A%20%20%20%20%5Eself%20call%3A%20%27innerHeight%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_innerWidth'),
smalltalk.method({
selector: unescape('innerWidth'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["innerWidth"]);
return self;},
args: [],
source: unescape('innerWidth%0A%20%20%20%20%22Get%20the%20current%20computed%20width%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20including%20padding%20but%20not%20border.%22%0A%20%20%20%20%5Eself%20call%3A%20%27innerWidth%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_outerHeight'),
smalltalk.method({
selector: unescape('outerHeight'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["outerHeight"]);
return self;},
args: [],
source: unescape('outerHeight%0A%20%20%20%20%22Get%20the%20current%20computed%20height%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20including%20padding%2C%20border%2C%20and%20optionally%20margin.%22%0A%20%20%20%20%5Eself%20call%3A%20%27outerHeight%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_outerWidth'),
smalltalk.method({
selector: unescape('outerWidth'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["outerWidth"]);
return self;},
args: [],
source: unescape('outerWidth%0A%20%20%20%20%22Get%20the%20current%20computed%20width%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20including%20padding%20and%20border.%22%0A%20%20%20%20%5Eself%20call%3A%20%27outerWidth%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_top'),
smalltalk.method({
selector: unescape('top'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_call_", ["position"]), "_basicAt_", ["top"]);
return self;},
args: [],
source: unescape('top%0A%20%20%20%20%22Get%20the%20current%20y%20coordinate%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20relative%20to%20the%20offset%20parent.%22%0A%20%20%20%20%5E%28self%20call%3A%20%27position%27%29%20basicAt%3A%20%27top%27'),
messageSends: ["basicAt:", "call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_left'),
smalltalk.method({
selector: unescape('left'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_call_", ["position"]), "_basicAt_", ["left"]);
return self;},
args: [],
source: unescape('left%0A%20%20%20%20%22Get%20the%20current%20x%20coordinate%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20relative%20to%20the%20offset%20parent.%22%0A%20%20%20%20%5E%28self%20call%3A%20%27position%27%29%20basicAt%3A%20%27left%27'),
messageSends: ["basicAt:", "call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_offsetLeft'),
smalltalk.method({
selector: unescape('offsetLeft'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_call_", ["offset"]), "_basicAt_", ["left"]);
return self;},
args: [],
source: unescape('offsetLeft%0A%20%20%20%20%22Get%20the%20current%20coordinates%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20relative%20to%20the%20document.%22%0A%20%20%20%20%5E%28self%20call%3A%20%27offset%27%29%20basicAt%3A%20%27left%27'),
messageSends: ["basicAt:", "call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_offsetTop'),
smalltalk.method({
selector: unescape('offsetTop'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_call_", ["offset"]), "_basicAt_", ["top"]);
return self;},
args: [],
source: unescape('offsetTop%0A%20%20%20%20%22Get%20the%20current%20coordinates%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20relative%20to%20the%20document.%22%0A%20%20%20%20%5E%28self%20call%3A%20%27offset%27%29%20basicAt%3A%20%27top%27'),
messageSends: ["basicAt:", "call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_scrollLeft'),
smalltalk.method({
selector: unescape('scrollLeft'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["scrollLeft"]);
return self;},
args: [],
source: unescape('scrollLeft%0A%20%20%20%20%22Get%20the%20current%20horizontal%20position%20of%20the%20scroll%20bar%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27scrollLeft%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_scrollTop'),
smalltalk.method({
selector: unescape('scrollTop'),
category: 'css',
fn: function (){
var self=this;
return smalltalk.send(self, "_call_", ["scrollTop"]);
return self;},
args: [],
source: unescape('scrollTop%0A%20%20%20%20%22Get%20the%20current%20vertical%20position%20of%20the%20scroll%20bar%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27scrollTop%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_scrollLeft_'),
smalltalk.method({
selector: unescape('scrollLeft%3A'),
category: 'css',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["scrollLeft", anInteger]);
return self;},
args: ["anInteger"],
source: unescape('scrollLeft%3A%20anInteger%0A%20%20%20%20self%20call%3A%20%27scrollLeft%27%20withArgument%3A%20anInteger'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_scrollTop_'),
smalltalk.method({
selector: unescape('scrollTop%3A'),
category: 'css',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["scrollTop", anInteger]);
return self;},
args: ["anInteger"],
source: unescape('scrollTop%3A%20anInteger%0A%20%20%20%20self%20call%3A%20%27scrollTop%27%20withArgument%3A%20anInteger'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_fadeIn'),
smalltalk.method({
selector: unescape('fadeIn'),
category: 'effects',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["fadeIn"]);
return self;},
args: [],
source: unescape('fadeIn%0A%20%09self%20call%3A%20%27fadeIn%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_slideDown'),
smalltalk.method({
selector: unescape('slideDown'),
category: 'effects',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["slideDown"]);
return self;},
args: [],
source: unescape('slideDown%0A%20%09self%20call%3A%20%27slideDown%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_fadeInSlow'),
smalltalk.method({
selector: unescape('fadeInSlow'),
category: 'effects',
fn: function (){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["fadeIn", "slow"]);
return self;},
args: [],
source: unescape('fadeInSlow%0A%20%09self%20call%3A%20%27fadeIn%27%20withArgument%3A%20%27slow%27'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_fadeOut'),
smalltalk.method({
selector: unescape('fadeOut'),
category: 'effects',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["fadeOut"]);
return self;},
args: [],
source: unescape('fadeOut%0A%20%09self%20call%3A%20%27fadeOut%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_fadeOutSlow'),
smalltalk.method({
selector: unescape('fadeOutSlow'),
category: 'effects',
fn: function (){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["fadeOut", "slow"]);
return self;},
args: [],
source: unescape('fadeOutSlow%0A%20%09self%20call%3A%20%27fadeOut%27%20withArgument%3A%20%27slow%27'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_slideUp'),
smalltalk.method({
selector: unescape('slideUp'),
category: 'effects',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["slideUp"]);
return self;},
args: [],
source: unescape('slideUp%0A%20%09self%20call%3A%20%27slideUp%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_fadeOut_do_'),
smalltalk.method({
selector: unescape('fadeOut%3Ado%3A'),
category: 'effects',
fn: function (aString, aBlock){
var self=this;
self['@jquery'].fadeOut(aString, aBlock);
return self;},
args: ["aString", "aBlock"],
source: unescape('fadeOut%3A%20aString%20do%3A%20aBlock%0A%20%20%20%20%3Cself%5B%27@jquery%27%5D.fadeOut%28aString%2C%20aBlock%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_elementsDo_", [(function(anElement){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.JQuery || JQuery), "_fromElement_", [anElement])]);})]);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%20%20%20%20self%20elementsDo%3A%20%5B%3AanElement%7C%20%20aBlock%20value%3A%20%28JQuery%20fromElement%3A%20anElement%29%5D'),
messageSends: ["elementsDo:", "value:", "fromElement:"],
referencedClasses: [smalltalk.JQuery]
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_focus'),
smalltalk.method({
selector: unescape('focus'),
category: 'events',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["focus"]);
return self;},
args: [],
source: unescape('focus%0A%20%20%20%20self%20call%3A%20%27focus%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'events',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["show"]);
return self;},
args: [],
source: unescape('show%0A%20%20%20%20self%20call%3A%20%27show%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
category: 'events',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["hide"]);
return self;},
args: [],
source: unescape('hide%0A%20%20%20%20self%20call%3A%20%27hide%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'events',
fn: function (){
var self=this;
smalltalk.send(self, "_call_", ["remove"]);
return self;},
args: [],
source: unescape('remove%0A%20%20%20%20self%20call%3A%20%27remove%27'),
messageSends: ["call:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
category: 'events',
fn: function (anEventString, aBlock){
var self=this;
self['@jquery'].bind(anEventString, function(e){aBlock(e, self)});
return self;},
args: ["anEventString", "aBlock"],
source: unescape('on%3A%20anEventString%20do%3A%20aBlock%0A%20%20%20%20%22Attach%20aBlock%20for%20anEventString%20on%20the%20element%22%0A%20%20%20%20%3Cself%5B%27@jquery%27%5D.bind%28anEventString%2C%20function%28e%29%7BaBlock%28e%2C%20self%29%7D%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_removeEvents_'),
smalltalk.method({
selector: unescape('removeEvents%3A'),
category: 'events',
fn: function (aString){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["unbind", aString]);
return self;},
args: ["aString"],
source: unescape('removeEvents%3A%20aString%0A%20%20%20%20%22Unbind%20all%20handlers%20attached%20to%20the%20event%20aString%22%0A%20%20%20%20self%20call%3A%20%27unbind%27%20withArgument%3A%20aString'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_onLoadDo_'),
smalltalk.method({
selector: unescape('onLoadDo%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_call_withArgument_", ["load", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onLoadDo%3A%20aBlock%0A%09%22Bind%20an%20event%20handler%20to%20the%20%27load%27%20JavaScript%20event.%22%0A%09self%20call%3A%20%27load%27%20withArgument%3A%20aBlock'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_initializeWithJQueryObject_'),
smalltalk.method({
selector: unescape('initializeWithJQueryObject%3A'),
category: 'initialization',
fn: function (anObject){
var self=this;
self['@jquery']=anObject;
return self;},
args: ["anObject"],
source: unescape('initializeWithJQueryObject%3A%20anObject%0A%20%20%20%20jquery%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_call_'),
smalltalk.method({
selector: unescape('call%3A'),
category: 'private',
fn: function (aString){
var self=this;
return self['@jquery'][aString]();
return self;},
args: ["aString"],
source: unescape('call%3A%20aString%0A%09%3Creturn%20self%5B%27@jquery%27%5D%5BaString%5D%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_call_withArgument_'),
smalltalk.method({
selector: unescape('call%3AwithArgument%3A'),
category: 'private',
fn: function (aString, anObject){
var self=this;
return self['@jquery'][aString](anObject);
return self;},
args: ["aString", "anObject"],
source: unescape('call%3A%20aString%20withArgument%3A%20anObject%0A%20%20%20%20%3Creturn%20self%5B%27@jquery%27%5D%5BaString%5D%28anObject%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_elementsDo_'),
smalltalk.method({
selector: unescape('elementsDo%3A'),
category: 'private',
fn: function (aBlock){
var self=this;
self['@jquery'].each(function(index, element){aBlock(element, self)});
return self;},
args: ["aBlock"],
source: unescape('elementsDo%3A%20aBlock%0A%20%20%20%20%22Iterate%20over%20a%20jQuery%20object%2C%20executing%20a%20function%20for%20each%20matched%20element.%22%0A%20%20%20%20%3Cself%5B%27@jquery%27%5D.each%28function%28index%2C%20element%29%7BaBlock%28element%2C%20self%29%7D%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_hasClass_'),
smalltalk.method({
selector: unescape('hasClass%3A'),
category: 'testing',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_call_withArgument_", ["hasClass", aString]);
return self;},
args: ["aString"],
source: unescape('hasClass%3A%20aString%0A%20%20%20%20%22Determine%20whether%20any%20of%20the%20matched%20elements%20are%20assigned%20the%20given%20class.%22%0A%20%20%20%20%5Eself%20call%3A%20%27hasClass%27%20withArgument%3A%20aString'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
unescape('_find_'),
smalltalk.method({
selector: unescape('find%3A'),
category: 'traversing',
fn: function (aSelector){
var self=this;
return smalltalk.send(self, "_call_withArgument_", ["find", aSelector]);
return self;},
args: ["aSelector"],
source: unescape('find%3A%20aSelector%0A%20%20%20%20%22Get%20the%20descendants%20of%20each%20element%20in%20the%20current%20set%20of%20matched%20elements%2C%20filtered%20by%20a%20selector%2C%20jQuery%20object%2C%20or%20element.%22%0A%20%20%20%20%5E%20self%20call%3A%20%27find%27%20withArgument%3A%20aSelector'),
messageSends: ["call:withArgument:"],
referencedClasses: []
}),
smalltalk.JQuery);


smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
var newJQuery=nil;
newJQuery = jQuery(String(aString));
return smalltalk.send(self, "_from_", [newJQuery]);
return self;},
args: ["aString"],
source: unescape('fromString%3A%20aString%0A%20%20%20%20%7C%20newJQuery%20%7C%0A%20%20%20%20%3CnewJQuery%20%3D%20jQuery%28String%28aString%29%29%3E.%0A%20%20%20%20%5Eself%20from%3A%20newJQuery'),
messageSends: ["from:"],
referencedClasses: []
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
unescape('_from_'),
smalltalk.method({
selector: unescape('from%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeWithJQueryObject_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["anObject"],
source: unescape('from%3A%20anObject%0A%20%20%20%20%5Eself%20new%0A%09initializeWithJQueryObject%3A%20anObject%3B%0A%09yourself'),
messageSends: ["initializeWithJQueryObject:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
unescape('_window'),
smalltalk.method({
selector: unescape('window'),
category: 'instance creation',
fn: function (){
var self=this;
return self._from_(jQuery(window));
return self;},
args: [],
source: unescape('window%0A%09%3Creturn%20self._from_%28jQuery%28window%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
unescape('_body'),
smalltalk.method({
selector: unescape('body'),
category: 'instance creation',
fn: function (){
var self=this;
return self._from_(jQuery('body'));
return self;},
args: [],
source: unescape('body%0A%09%3Creturn%20self._from_%28jQuery%28%27body%27%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
unescape('_document'),
smalltalk.method({
selector: unescape('document'),
category: 'instance creation',
fn: function (){
var self=this;
return self._from_(jQuery(document));
return self;},
args: [],
source: unescape('document%0A%09%3Creturn%20self._from_%28jQuery%28document%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
unescape('_fromElement_'),
smalltalk.method({
selector: unescape('fromElement%3A'),
category: 'instance creation',
fn: function (anElement){
var self=this;
var newJQuery=nil;
newJQuery = jQuery(anElement);
return smalltalk.send(self, "_from_", [newJQuery]);
return self;},
args: ["anElement"],
source: unescape('fromElement%3A%20anElement%0A%20%20%20%20%7C%20newJQuery%20%7C%0A%20%20%20%20%3CnewJQuery%20%3D%20jQuery%28anElement%29%3E.%0A%20%20%20%20%5Eself%20from%3A%20newJQuery'),
messageSends: ["from:"],
referencedClasses: []
}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
unescape('_documentReady_'),
smalltalk.method({
selector: unescape('documentReady%3A'),
category: 'instance creation',
fn: function (aBlock){
var self=this;
jQuery(document).ready(aBlock);
return self;},
args: ["aBlock"],
source: unescape('documentReady%3A%20aBlock%0A%09%3CjQuery%28document%29.ready%28aBlock%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery.klass);


smalltalk.addClass('Ajax', smalltalk.Object, ['settings'], 'JQuery');
smalltalk.Ajax.comment=unescape('instance%20variable%20names%3A%0A-%20settings%20%20A%20set%20of%20key/value%20pairs%20that%20configure%20the%20Ajax%20request.%20All%20settings%20are%20optional.%0A%0AFull%20list%20of%20settings%20options%20at%20http%3A//api.jquery.com/jQuery.ajax/')
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.send(self['@settings'], "_at_ifAbsent_", [aKey, (function(){return nil;})]);
return self;},
args: ["aKey"],
source: unescape('at%3A%20aKey%0A%20%20%20%20%5Esettings%20at%3A%20aKey%20ifAbsent%3A%20%5Bnil%5D'),
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aKey, aValue){
var self=this;
smalltalk.send(self['@settings'], "_at_put_", [aKey, aValue]);
return self;},
args: ["aKey", "aValue"],
source: unescape('at%3A%20aKey%20put%3A%20aValue%0A%20%20%20%20settings%20at%3A%20aKey%20put%3A%20aValue'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", ["url"]);
return self;},
args: [],
source: unescape('url%0A%20%20%20%20%5Eself%20at%3A%20%27url%27'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_url_'),
smalltalk.method({
selector: unescape('url%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["url", aString]);
return self;},
args: ["aString"],
source: unescape('url%3A%20aString%0A%20%20%20%20self%20at%3A%20%27url%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_send'),
smalltalk.method({
selector: unescape('send'),
category: 'actions',
fn: function (){
var self=this;
jQuery.ajax(self['@settings']);
return self;},
args: [],
source: unescape('send%0A%20%20%20%20%3CjQuery.ajax%28self%5B%27@settings%27%5D%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_onSuccessDo_'),
smalltalk.method({
selector: unescape('onSuccessDo%3A'),
category: 'callbacks',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_at_put_", ["success", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onSuccessDo%3A%20aBlock%0A%09%22Set%20action%20to%20execute%20when%20Ajax%20request%20is%20successful.%20Pass%20received%20data%20as%20block%20argument.%20Block%20arguments%3A%20data%2C%20textStatus%2C%20jqXHR%22%0A%09self%20at%3A%20%27success%27%20put%3A%20aBlock'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_onCompleteDo_'),
smalltalk.method({
selector: unescape('onCompleteDo%3A'),
category: 'callbacks',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_at_put_", ["complete", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onCompleteDo%3A%20aBlock%0A%09%22A%20block%20to%20be%20called%20when%20the%20request%20finishes%20%28after%20success%20and%20error%20callbacks%20are%20executed%29.%20Block%20arguments%3A%20jqXHR%2C%20textStatus%22%0A%09self%20at%3A%20%27complete%27%20put%3A%20aBlock'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_onErrorDo_'),
smalltalk.method({
selector: unescape('onErrorDo%3A'),
category: 'callbacks',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_at_put_", ["error", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onErrorDo%3A%20aBlock%0A%09%22A%20block%20to%20be%20called%20if%20the%20request%20fails.Block%20arguments%3A%20jqXHR%2C%20textStatus%2C%20errorThrown%22%0A%09self%20at%3A%20%27error%27%20put%3A%20aBlock'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@settings']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20settings%20%3A%3D%20Dictionary%20new'),
messageSends: ["initialize", "new"],
referencedClasses: [smalltalk.Dictionary]
}),
smalltalk.Ajax);


smalltalk.addMethod(
unescape('_url_'),
smalltalk.method({
selector: unescape('url%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_url_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape('url%3A%20aString%0A%20%20%20%20%5Eself%20new%0A%09url%3A%20aString%3B%0A%09yourself'),
messageSends: ["url:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Ajax.klass);


smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
category: '*JQuery',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_value_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%09self%20value%3A%20%28HTMLCanvas%20onJQuery%3A%20aJQuery%29'),
messageSends: ["value:", "onJQuery:"],
referencedClasses: [smalltalk.HTMLCanvas]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: '*JQuery',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.JQuery || JQuery), "_fromString_", [self]);
return self;},
args: [],
source: unescape('asJQuery%0A%20%20%20%20%5EJQuery%20fromString%3A%20self'),
messageSends: ["fromString:"],
referencedClasses: [smalltalk.JQuery]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
category: '*JQuery',
fn: function (aJQuery){
var self=this;
aJQuery._appendElement_(String(self));
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20%3CaJQuery._appendElement_%28String%28self%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
category: '*JQuery',
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_appendElement_", [smalltalk.send(self['@root'], "_element", [])]);
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20aJQuery%20appendElement%3A%20root%20element'),
messageSends: ["appendElement:", "element"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

