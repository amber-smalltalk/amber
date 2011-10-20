smalltalk.addPackage('IDE', {});
smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
smalltalk.addMethod(
unescape('_tabs'),
smalltalk.method({
selector: unescape('tabs'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@tabs']) == nil || $receiver == undefined) ? (function(){return self['@tabs']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('tabs%0A%20%20%20%20%5Etabs%20ifNil%3A%20%5Btabs%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_labelFor_'),
smalltalk.method({
selector: unescape('labelFor%3A'),
category: 'accessing',
fn: function (aWidget){
var self=this;
var label=nil;
var maxSize=nil;
maxSize=(15);
label=smalltalk.send(smalltalk.send(aWidget, "_label", []), "_copyFrom_to_", [(0), smalltalk.send(smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", []), "_min_", [maxSize])]);
((($receiver = ((($receiver = smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxSize : smalltalk.send($receiver, "__gt", [maxSize]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return label=smalltalk.send(label, "__comma", ["..."]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return label=smalltalk.send(label, "__comma", ["..."]);})]));
return label;
return self;},
args: ["aWidget"],
source: unescape('labelFor%3A%20aWidget%0A%09%7C%20label%20maxSize%20%7C%0A%09maxSize%20%3A%3D%2015.%0A%09label%20%3A%3D%20aWidget%20label%20copyFrom%3A%200%20to%3A%20%28aWidget%20label%20size%20min%3A%20maxSize%29.%0A%09aWidget%20label%20size%20%3E%20maxSize%20ifTrue%3A%20%5B%0A%09%09label%20%3A%3D%20label%2C%20%27...%27%5D.%0A%09%5Elabel'),
messageSends: ["copyFrom:to:", "label", "min:", "size", "ifTrue:", unescape("%3E"), unescape("%2C")],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_updateBodyMargin'),
smalltalk.method({
selector: unescape('updateBodyMargin'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_setBodyMargin_", [smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_height", [])]);
return self;},
args: [],
source: unescape('updateBodyMargin%0A%20%20%20%20self%20setBodyMargin%3A%20%27%23jtalk%27%20asJQuery%20height'),
messageSends: ["setBodyMargin:", "height", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_updatePosition'),
smalltalk.method({
selector: unescape('updatePosition'),
category: 'actions',
fn: function (){
var self=this;
jQuery('#jtalk').css('top', '').css('bottom', '0px');
return self;},
args: [],
source: unescape('updatePosition%0A%20%20%20%20%3CjQuery%28%27%23jtalk%27%29.css%28%27top%27%2C%20%27%27%29.css%28%27bottom%27%2C%20%270px%27%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_removeBodyMargin'),
smalltalk.method({
selector: unescape('removeBodyMargin'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_setBodyMargin_", [(0)]);
return self;},
args: [],
source: unescape('removeBodyMargin%0A%20%20%20%20self%20setBodyMargin%3A%200'),
messageSends: ["setBodyMargin:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_setBodyMargin_'),
smalltalk.method({
selector: unescape('setBodyMargin%3A'),
category: 'actions',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(".jtalkBody", "_asJQuery", []), "_css_put_", [unescape("margin-bottom"), smalltalk.send(smalltalk.send(anInteger, "_asString", []), "__comma", ["px"])]);
return self;},
args: ["anInteger"],
source: unescape('setBodyMargin%3A%20anInteger%0A%20%20%20%20%27.jtalkBody%27%20asJQuery%20css%3A%20%27margin-bottom%27%20put%3A%20anInteger%20asString%2C%20%27px%27'),
messageSends: ["css:put:", "asJQuery", unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_onResize_'),
smalltalk.method({
selector: unescape('onResize%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
jQuery('#jtalk').resizable({
	handles: 'n', 
	resize: aBlock,
	minHeight: 230
});
return self;},
args: ["aBlock"],
source: unescape('onResize%3A%20aBlock%0A%20%20%20%20%3CjQuery%28%27%23jtalk%27%29.resizable%28%7B%0A%09handles%3A%20%27n%27%2C%20%0A%09resize%3A%20aBlock%2C%0A%09minHeight%3A%20230%0A%7D%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_onWindowResize_'),
smalltalk.method({
selector: unescape('onWindowResize%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
jQuery(window).resize(aBlock);
return self;},
args: ["aBlock"],
source: unescape('onWindowResize%3A%20aBlock%0A%20%20%20%20%3CjQuery%28window%29.resize%28aBlock%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;
((($receiver = self['@opened']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["jtalkBody"]);smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return self['@opened']=true;})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["jtalkBody"]);smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return self['@opened']=true;})]));
return self;},
args: [],
source: unescape('open%0A%20%20%20%20opened%20ifFalse%3A%20%5B%0A%09%27body%27%20asJQuery%20addClass%3A%20%27jtalkBody%27.%0A%09%27%23jtalk%27%20asJQuery%20show.%0A%09ul%20asJQuery%20show.%0A%09self%20updateBodyMargin.%0A%09selectedTab%20show.%0A%09opened%20%3A%3D%20true%5D'),
messageSends: ["ifFalse:", "addClass:", "asJQuery", "show", "updateBodyMargin"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
category: 'actions',
fn: function (){
var self=this;
((($receiver = self['@opened']).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["jtalkBody"]);return self['@opened']=false;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["jtalkBody"]);return self['@opened']=false;})]));
return self;},
args: [],
source: unescape('close%0A%20%20%20%20opened%20ifTrue%3A%20%5B%0A%09%27%23jtalk%27%20asJQuery%20hide.%0A%09ul%20asJQuery%20hide.%0A%09selectedTab%20hide.%0A%09self%20removeBodyMargin.%0A%09%27body%27%20asJQuery%20removeClass%3A%20%27jtalkBody%27.%0A%09opened%20%3A%3D%20false%5D'),
messageSends: ["ifTrue:", "hide", "asJQuery", "removeBodyMargin", "removeClass:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_newBrowserTab'),
smalltalk.method({
selector: unescape('newBrowserTab'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Browser || Browser), "_open", []);
return self;},
args: [],
source: unescape('newBrowserTab%0A%20%20%20%20Browser%20open'),
messageSends: ["open"],
referencedClasses: ["Browser"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_selectTab_'),
smalltalk.method({
selector: unescape('selectTab%3A'),
category: 'actions',
fn: function (aWidget){
var self=this;
smalltalk.send(self, "_open", []);
self['@selectedTab']=aWidget;
smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [(function(each){return smalltalk.send(each, "_hide", []);})]);
smalltalk.send(aWidget, "_show", []);
smalltalk.send(self, "_update", []);
return self;},
args: ["aWidget"],
source: unescape('selectTab%3A%20aWidget%0A%20%20%20%20self%20open.%0A%20%20%20%20selectedTab%20%3A%3D%20aWidget.%0A%20%20%20%20self%20tabs%20do%3A%20%5B%3Aeach%20%7C%0A%09each%20hide%5D.%0A%20%20%20%20aWidget%20show.%0A%09%0A%20%20%20%20self%20update'),
messageSends: ["open", "do:", "tabs", "hide", "show", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_closeTab_'),
smalltalk.method({
selector: unescape('closeTab%3A'),
category: 'actions',
fn: function (aWidget){
var self=this;
smalltalk.send(self, "_removeTab_", [aWidget]);
smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
smalltalk.send(aWidget, "_remove", []);
smalltalk.send(self, "_update", []);
return self;},
args: ["aWidget"],
source: unescape('closeTab%3A%20aWidget%0A%20%20%20%20self%20removeTab%3A%20aWidget.%0A%20%20%20%20self%20selectTab%3A%20self%20tabs%20last.%0A%20%20%20%20aWidget%20remove.%0A%20%20%20%20self%20update'),
messageSends: ["removeTab:", "selectTab:", "last", "tabs", "remove", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_search_'),
smalltalk.method({
selector: unescape('search%3A'),
category: 'actions',
fn: function (aString){
var self=this;
var searchedClass=nil;
searchedClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [aString]);
((($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [searchedClass]);})() : (function(){return smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [searchedClass]);}), (function(){return smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [aString]);})]));
return self;},
args: ["aString"],
source: unescape('search%3A%20aString%0A%09%7C%20searchedClass%20%7C%0A%09searchedClass%20%3A%3D%20Smalltalk%20current%20at%3A%20aString.%0A%09%09searchedClass%20isClass%0A%09%09%09ifTrue%3A%20%5BBrowser%20openOn%3A%20searchedClass%5D%0A%09%09%09ifFalse%3A%20%5BReferencesBrowser%20search%3A%20aString%5D'),
messageSends: ["at:", "current", "ifTrue:ifFalse:", "isClass", "openOn:", "search:"],
referencedClasses: ["Smalltalk", "Browser", "ReferencesBrowser"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_addTab_'),
smalltalk.method({
selector: unescape('addTab%3A'),
category: 'adding/Removing',
fn: function (aWidget){
var self=this;
smalltalk.send(smalltalk.send(self, "_tabs", []), "_add_", [aWidget]);
smalltalk.send(aWidget, "_appendToJQuery_", [smalltalk.send(unescape("%23jtalk"), "_asJQuery", [])]);
smalltalk.send(aWidget, "_hide", []);
return self;},
args: ["aWidget"],
source: unescape('addTab%3A%20aWidget%0A%20%20%20%20self%20tabs%20add%3A%20aWidget.%0A%20%20%20%20aWidget%20appendToJQuery%3A%20%27%23jtalk%27%20asJQuery.%0A%20%20%20%20aWidget%20hide'),
messageSends: ["add:", "tabs", "appendToJQuery:", "asJQuery", "hide"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_removeTab_'),
smalltalk.method({
selector: unescape('removeTab%3A'),
category: 'adding/Removing',
fn: function (aWidget){
var self=this;
smalltalk.send(smalltalk.send(self, "_tabs", []), "_remove_", [aWidget]);
smalltalk.send(self, "_update", []);
return self;},
args: ["aWidget"],
source: unescape('removeTab%3A%20aWidget%0A%20%20%20%20self%20tabs%20remove%3A%20aWidget.%0A%20%20%20%20self%20update'),
messageSends: ["remove:", "tabs", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@opened']=true;
smalltalk.send((function(html){return smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["jtalk"]);}), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["jtalkBody"]);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(unescape("%23jtalk"), "_asJQuery", [])]);
(function($rec){smalltalk.send($rec, "_addTab_", [smalltalk.send((smalltalk.IDETranscript || IDETranscript), "_current", [])]);smalltalk.send($rec, "_addTab_", [smalltalk.send((smalltalk.Workspace || Workspace), "_new", [])]);return smalltalk.send($rec, "_addTab_", [smalltalk.send((smalltalk.TestRunner || TestRunner), "_new", [])]);})(self);
smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
(function($rec){smalltalk.send($rec, "_onResize_", [(function(){return (function($rec){smalltalk.send($rec, "_updateBodyMargin", []);return smalltalk.send($rec, "_updatePosition", []);})(self);})]);return smalltalk.send($rec, "_onWindowResize_", [(function(){return smalltalk.send(self, "_updatePosition", []);})]);})(self);
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20opened%20%3A%3D%20true.%0A%20%20%20%20%5B%3Ahtml%20%7C%20html%20div%20id%3A%20%27jtalk%27%5D%20appendToJQuery%3A%20%27body%27%20asJQuery.%0A%20%20%20%20%27body%27%20asJQuery%20%0A%09addClass%3A%20%27jtalkBody%27.%0A%20%20%20%20self%20appendToJQuery%3A%20%27%23jtalk%27%20asJQuery.%0A%20%20%20%20self%20%0A%09addTab%3A%20IDETranscript%20current%3B%0A%09addTab%3A%20Workspace%20new%3B%0A%09addTab%3A%20TestRunner%20new.%0A%20%20%20%20self%20selectTab%3A%20self%20tabs%20last.%0A%20%20%20%20self%20%0A%09onResize%3A%20%5Bself%20updateBodyMargin%3B%20updatePosition%5D%3B%0A%09onWindowResize%3A%20%5Bself%20updatePosition%5D'),
messageSends: ["initialize", "appendToJQuery:", "id:", "div", "asJQuery", "addClass:", "addTab:", "current", "new", "selectTab:", "last", "tabs", "onResize:", "updateBodyMargin", "updatePosition", "onWindowResize:"],
referencedClasses: ["IDETranscript", "Workspace", "TestRunner"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["logo"]);
smalltalk.send(self, "_renderToolbarOn_", [html]);
self['@ul']=(function($rec){smalltalk.send($rec, "_id_", ["jtalkTabs"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_ul", []));
smalltalk.send(self, "_renderTabs", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20id%3A%20%27logo%27.%0A%09self%20renderToolbarOn%3A%20html.%0A%09ul%20%3A%3D%20html%20ul%0A%09%09id%3A%20%27jtalkTabs%27%3B%0A%09%09yourself.%0A%09self%20renderTabs'),
messageSends: ["id:", "div", "renderToolbarOn:", "yourself", "ul", "renderTabs"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_renderTabFor_on_'),
smalltalk.method({
selector: unescape('renderTabFor%3Aon%3A'),
category: 'rendering',
fn: function (aWidget, html){
var self=this;
var li=nil;
li=smalltalk.send(html, "_li", []);
((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [aWidget])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));
(function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", [(function(){((($receiver = smalltalk.send(aWidget, "_canBeClosed", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeTab_", [aWidget]);})]);})(smalltalk.send(html, "_span", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeTab_", [aWidget]);})]);})(smalltalk.send(html, "_span", []));})]));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_labelFor_", [aWidget])]);})]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", [aWidget]);})]);})(li);
return self;},
args: ["aWidget", "html"],
source: unescape('renderTabFor%3A%20aWidget%20on%3A%20html%0A%09%7C%20li%20%7C%0A%09li%20%3A%3D%20html%20li.%0A%09selectedTab%20%3D%20aWidget%20ifTrue%3A%20%5B%0A%09li%20class%3A%20%27selected%27%5D.%0A%09li%20with%3A%20%5B%0A%09%09html%20span%20class%3A%20%27ltab%27.%0A%09%09html%20span%0A%09%09%09class%3A%20%27mtab%27%3B%0A%09%09%09with%3A%20%5B%0A%09%09%09%09aWidget%20canBeClosed%20ifTrue%3A%20%5B%0A%09%09%09%09%09html%20span%20%0A%09%09%09%09%09%09class%3A%20%27close%27%3B%0A%09%09%09%09%09%09with%3A%20%27x%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20closeTab%3A%20aWidget%5D%5D.%0A%09%09%09html%20span%20with%3A%20%28self%20labelFor%3A%20aWidget%29%5D.%0A%09%09html%20span%20class%3A%20%27rtab%27%5D%3B%0A%09onClick%3A%20%5Bself%20selectTab%3A%20aWidget%5D'),
messageSends: ["li", "ifTrue:", unescape("%3D"), "class:", "with:", "span", "canBeClosed", "onClick:", "closeTab:", "labelFor:", "selectTab:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_renderTabs'),
smalltalk.method({
selector: unescape('renderTabs'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [(function(each){return smalltalk.send(self, "_renderTabFor_on_", [each, html]);})]);return (function($rec){smalltalk.send($rec, "_class_", ["newtab"]);smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", [unescape("%20+%20")]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_newBrowserTab", []);})]);})(smalltalk.send(html, "_li", []));})]);
return self;},
args: [],
source: unescape('renderTabs%0A%09ul%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%20%20%20%20self%20tabs%20do%3A%20%5B%3Aeach%20%7C%0A%09%09self%20renderTabFor%3A%20each%20on%3A%20html%5D.%0A%09%20%20%20%20html%20li%0A%09%09class%3A%20%27newtab%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%20class%3A%20%27ltab%27.%0A%09%09%09html%20span%20class%3A%20%27mtab%27%3B%20with%3A%20%27%20+%20%27.%0A%09%09%09html%20span%20class%3A%20%27rtab%27%5D%3B%0A%09%09onClick%3A%20%5Bself%20newBrowserTab%5D%5D'),
messageSends: ["contents:", "do:", "tabs", "renderTabFor:on:", "class:", "with:", "span", "onClick:", "newBrowserTab", "li"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_renderToolbarOn_'),
smalltalk.method({
selector: unescape('renderToolbarOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["jt_toolbar"]);return smalltalk.send($rec, "_with_", [(function(){self['@input']=(function($rec){smalltalk.send($rec, "_class_", ["implementors"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_input", []));smalltalk.send(self['@input'], "_onKeyPress_", [(function(event){return ((($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);})]));})]);return (function($rec){smalltalk.send($rec, "_id_", ["jt_close"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_close", []);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderToolbarOn%3A%20html%0A%09html%20div%20%0A%09%09id%3A%20%27jt_toolbar%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09input%20%3A%3D%20html%20input%20%0A%09%09%09%09class%3A%20%27implementors%27%3B%0A%09%09%09%09yourself.%0A%09%09%09input%20onKeyPress%3A%20%5B%3Aevent%20%7C%0A%09%09%09%09event%20keyCode%20%3D%2013%20ifTrue%3A%20%5B%0A%09%09%09%09self%20search%3A%20input%20asJQuery%20val%5D%5D.%0A%09%09%09html%20div%20id%3A%20%27jt_close%27%3B%20onClick%3A%20%5Bself%20close%5D%5D'),
messageSends: ["id:", "with:", "class:", "yourself", "input", "onKeyPress:", "ifTrue:", unescape("%3D"), "keyCode", "search:", "val", "asJQuery", "onClick:", "close", "div"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self, "_renderTabs", []);
return self;},
args: [],
source: unescape('update%0A%09self%20renderTabs'),
messageSends: ["renderTabs"],
referencedClasses: []
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'instance creation',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return self['@current']=smalltalk.send(self, "_new", [], smalltalk.Widget.klass);})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%20%20%20%20%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20super%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: [],
source: unescape('new%0A%20%20%20%20self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('label%0A%20%20%20%20self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_addTab_", [self]);
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_selectTab_", [self]);
return self;},
args: [],
source: unescape('open%0A%20%20%20%20TabManager%20current%20addTab%3A%20self.%0A%20%20%20%20TabManager%20current%20selectTab%3A%20self'),
messageSends: ["addTab:", "current", "selectTab:"],
referencedClasses: ["TabManager"]
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_show", []);
return self;},
args: [],
source: unescape('show%0A%09div%20asJQuery%20show'),
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_hide", []);
return self;},
args: [],
source: unescape('hide%0A%09div%20asJQuery%20hide'),
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
return self;},
args: [],
source: unescape('remove%0A%09div%20asJQuery%20remove'),
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_closeTab_", [self]);
return self;},
args: [],
source: unescape('close%0A%20%20%20%20TabManager%20current%20closeTab%3A%20self'),
messageSends: ["closeTab:", "current"],
referencedClasses: ["TabManager"]
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["jtalkTool"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderTab", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09div%20%3A%3D%20html%20div%0A%09%09class%3A%20%27jtalkTool%27%3B%0A%09%09yourself.%0A%09self%20renderTab'),
messageSends: ["class:", "yourself", "div", "renderTab"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderBoxOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self, "_renderTab", []);
return self;},
args: [],
source: unescape('update%0A%09self%20renderTab'),
messageSends: ["renderTab"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_renderTab'),
smalltalk.method({
selector: unescape('renderTab'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["jt_box"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderBoxOn_", [html]);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["jt_buttons"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);
return self;},
args: [],
source: unescape('renderTab%0A%09div%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%20%20%20%20html%20div%0A%09%09class%3A%20%27jt_box%27%3B%0A%09%09with%3A%20%5Bself%20renderBoxOn%3A%20html%5D.%0A%09%20%20%20%20html%20div%0A%09%09class%3A%20%27jt_buttons%27%3B%0A%09%09with%3A%20%5Bself%20renderButtonsOn%3A%20html%5D%5D'),
messageSends: ["contents:", "class:", "with:", "renderBoxOn:", "div", "renderButtonsOn:"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('canBeClosed%0A%20%20%20%20%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);


smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
return self;},
args: [],
source: unescape('open%0A%20%20%20%20%5Eself%20new%20open'),
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Workspace', smalltalk.TabWidget, ['sourceArea'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
return "Workspace";
return self;},
args: [],
source: unescape('label%0A%20%20%20%20%5E%27Workspace%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_clearWorkspace'),
smalltalk.method({
selector: unescape('clearWorkspace'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_clear", []);
return self;},
args: [],
source: unescape('clearWorkspace%0A%20%20%20%20sourceArea%20clear'),
messageSends: ["clear"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_doIt'),
smalltalk.method({
selector: unescape('doIt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_doIt", []);
return self;},
args: [],
source: unescape('doIt%0A%20%20%20sourceArea%20doIt'),
messageSends: ["doIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_printIt'),
smalltalk.method({
selector: unescape('printIt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_printIt", []);
return self;},
args: [],
source: unescape('printIt%0A%09sourceArea%20printIt'),
messageSends: ["printIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_inspectIt'),
smalltalk.method({
selector: unescape('inspectIt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_inspectIt", []);
return self;},
args: [],
source: unescape('inspectIt%0A%20%20%20%20sourceArea%20inspectIt'),
messageSends: ["inspectIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_fileIn'),
smalltalk.method({
selector: unescape('fileIn'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_fileIn", []);
return self;},
args: [],
source: unescape('fileIn%0A%20%20%20%20sourceArea%20fileIn'),
messageSends: ["fileIn"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []);
smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20sourceArea%20%3A%3D%20SourceArea%20new.%0A%20%20%20%20sourceArea%20renderOn%3A%20html'),
messageSends: ["new", "renderOn:"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+d")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+p")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+i")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["FileIn"]);smalltalk.send($rec, "_title_", [unescape("ctrl+f")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_fileIn", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["Clear workspace"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_clearWorkspace", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%20%20%20%20html%20button%0A%09with%3A%20%27DoIt%27%3B%0A%09title%3A%20%27ctrl+d%27%3B%0A%09onClick%3A%20%5Bself%20doIt%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27PrintIt%27%3B%0A%09title%3A%20%27ctrl+p%27%3B%0A%09onClick%3A%20%5Bself%20printIt%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27InspectIt%27%3B%0A%09title%3A%20%27ctrl+i%27%3B%0A%09onClick%3A%20%5Bself%20inspectIt%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27FileIn%27%3B%0A%09title%3A%20%27ctrl+f%27%3B%0A%09onClick%3A%20%5Bself%20fileIn%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27Clear%20workspace%27%3B%0A%09onClick%3A%20%5Bself%20clearWorkspace%5D'),
messageSends: ["with:", "title:", "onClick:", "doIt", "button", "printIt", "inspectIt", "fileIn", "clearWorkspace"],
referencedClasses: []
}),
smalltalk.Workspace);



smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@selectedClass']) == nil || $receiver == undefined) ? (function(){return unescape("Browser%20%28nil%29");})() : (function(){return smalltalk.send("Browser: ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]);})();
return self;},
args: [],
source: unescape('label%0A%20%20%20%20%5EselectedClass%20%0A%09ifNil%3A%20%5B%27Browser%20%28nil%29%27%5D%0A%09ifNotNil%3A%20%5B%27Browser%3A%20%27%2C%20selectedClass%20name%5D'),
messageSends: ["ifNil:ifNotNil:", unescape("%2C"), "name"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_packages'),
smalltalk.method({
selector: unescape('packages'),
category: 'accessing',
fn: function (){
var self=this;
var packages=nil;
packages=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(packages, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(packages, "_sort", []);
return self;},
args: [],
source: unescape('packages%0A%20%20%20%20%7C%20packages%20%7C%0A%20%20%20%20packages%20%3A%3D%20Array%20new.%0A%20%20%20%20Smalltalk%20current%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%28packages%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0A%09%20%20%20%20packages%20add%3A%20each%20category%5D%5D.%0A%20%20%20%20%5Epackages%20sort'),
messageSends: ["new", "do:", "classes", "current", "ifFalse:", "includes:", "category", "add:", "sort"],
referencedClasses: ["Array", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedPackage']]);})]), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]));})]);
return self;},
args: [],
source: unescape('classes%0A%20%20%20%20%5E%28Smalltalk%20current%20classes%20%0A%09select%3A%20%5B%3Aeach%20%7C%20each%20category%20%3D%20selectedPackage%5D%29%0A%09sort%3A%20%5B%3Aa%20%3Ab%20%7C%20a%20name%20%3C%20b%20name%5D'),
messageSends: ["sort:", "select:", "classes", "current", unescape("%3D"), "category", unescape("%3C"), "name"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_protocols'),
smalltalk.method({
selector: unescape('protocols'),
category: 'accessing',
fn: function (){
var self=this;
try{var klass=nil;
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return []}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return []}})})();})]));klass=((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@selectedClass'];})() : (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@selectedClass'];}), (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})]));((($receiver = smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_with_", ["not yet classified"])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_with_", ["not yet classified"])}})})();})]));return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send(klass, "_protocols", [])}})})();})() : nil;
(function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_new", [])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_protocols'){return e.fn()} throw(e)}},
args: [],
source: unescape('protocols%0A%20%20%20%20%7C%20klass%20%7C%0A%20%20%20%20selectedClass%20ifNotNil%3A%20%5B%0A%09selectedTab%20%3D%20%23comment%20ifTrue%3A%20%5B%5E%23%28%29%5D.%0A%09klass%20%3A%3D%20selectedTab%20%3D%20%23instance%0A%09%20%20%20%20ifTrue%3A%20%5BselectedClass%5D%0A%09%20%20%20%20ifFalse%3A%20%5BselectedClass%20class%5D.%0A%09klass%20methodDictionary%20isEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20%5EArray%20with%3A%20%27not%20yet%20classified%27%5D.%0A%09%5Eklass%20protocols%5D.%0A%20%20%20%20%5EArray%20new'),
messageSends: ["ifNotNil:", "ifTrue:", unescape("%3D"), "ifTrue:ifFalse:", "class", "isEmpty", "methodDictionary", "with:", "protocols", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_methods'),
smalltalk.method({
selector: unescape('methods'),
category: 'accessing',
fn: function (){
var self=this;
try{var klass=nil;
((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return []}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return []}})})();})]));
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return klass=((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@selectedClass'];})() : (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@selectedClass'];}), (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})]));})() : nil;
(function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return smalltalk.send((($receiver = self['@selectedProtocol']) == nil || $receiver == undefined) ? (function(){return (($receiver = klass) == nil || $receiver == undefined) ? (function(){return [];})() : (function(){return smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []);})();})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedProtocol']]);})]);})(), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_selector", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_selector", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_selector", [])]));})])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_methods'){return e.fn()} throw(e)}},
args: [],
source: unescape('methods%0A%20%20%20%20%7C%20klass%20%7C%0A%20%20%20%20selectedTab%20%3D%20%23comment%20ifTrue%3A%20%5B%5E%23%28%29%5D.%0A%20%20%20%20selectedClass%20ifNotNil%3A%20%5B%0A%09klass%20%3A%3D%20selectedTab%20%3D%20%23instance%0A%09%20%20%20%20ifTrue%3A%20%5BselectedClass%5D%0A%09%20%20%20%20ifFalse%3A%20%5BselectedClass%20class%5D%5D.%0A%20%20%20%20%5E%28selectedProtocol%20%0A%09ifNil%3A%20%5B%0A%09%20%20%20%20klass%20%0A%09%09ifNil%3A%20%5B%23%28%29%5D%20%0A%09%09ifNotNil%3A%20%5Bklass%20methodDictionary%20values%5D%5D%0A%09ifNotNil%3A%20%5B%0A%09%20%20%20%20klass%20methodDictionary%20values%20select%3A%20%5B%3Aeach%20%7C%0A%09%09each%20category%20%3D%20selectedProtocol%5D%5D%29%20sort%3A%20%5B%3Aa%20%3Ab%20%7C%20a%20selector%20%3C%20b%20selector%5D'),
messageSends: ["ifTrue:", unescape("%3D"), "ifNotNil:", "ifTrue:ifFalse:", "class", "sort:", "ifNil:ifNotNil:", "values", "methodDictionary", "select:", "category", unescape("%3C"), "selector"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_source', fn: function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_declarationSource", []);})() : (function(){return smalltalk.send(self, "_methodSource", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_declarationSource", []);}), (function(){return smalltalk.send(self, "_methodSource", []);})]))}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_source', fn: function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_declarationSource", []);})() : (function(){return smalltalk.send(self, "_methodSource", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_declarationSource", []);}), (function(){return smalltalk.send(self, "_methodSource", []);})]))}})})();})]));
(function(){throw({name: 'stReturn', selector: '_source', fn: function(){return (($receiver = self['@selectedClass']) == nil || $receiver == undefined) ? (function(){return "";})() : (function(){return smalltalk.send(self, "_classCommentSource", []);})()}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_source'){return e.fn()} throw(e)}},
args: [],
source: unescape('source%0A%20%20%20%20selectedTab%20%3D%20%23comment%20ifFalse%3A%20%5B%0A%09%5E%28selectedProtocol%20notNil%20or%3A%20%5BselectedMethod%20notNil%5D%29%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20declarationSource%5D%0A%09%20%20%20%20ifTrue%3A%20%5Bself%20methodSource%5D%5D.%0A%20%20%20%20%5EselectedClass%0A%09ifNil%3A%20%5B%27%27%5D%0A%09ifNotNil%3A%20%5Bself%20classCommentSource%5D'),
messageSends: ["ifFalse:", unescape("%3D"), "ifFalse:ifTrue:", "or:", "notNil", "declarationSource", "methodSource", "ifNil:ifNotNil:", "classCommentSource"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_methodSource'),
smalltalk.method({
selector: unescape('methodSource'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@selectedMethod']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_dummyMethodSource", []);})() : (function(){return smalltalk.send(self['@selectedMethod'], "_source", []);})();
return self;},
args: [],
source: unescape('methodSource%0A%20%20%20%20%5EselectedMethod%0A%09ifNil%3A%20%5Bself%20dummyMethodSource%5D%0A%09ifNotNil%3A%20%5BselectedMethod%20source%5D'),
messageSends: ["ifNil:ifNotNil:", "dummyMethodSource", "source"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_dummyMethodSource'),
smalltalk.method({
selector: unescape('dummyMethodSource'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("messageSelectorAndArgumentNames%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%09%7C%20temporary%20variable%20names%20%7C%0A%09statements");
return self;},
args: [],
source: unescape('dummyMethodSource%0A%20%20%20%20%5E%27messageSelectorAndArgumentNames%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%09%7C%20temporary%20variable%20names%20%7C%0A%09statements%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_declarationSource'),
smalltalk.method({
selector: unescape('declarationSource'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_classDeclarationSource", []);})() : (function(){return smalltalk.send(self, "_metaclassDeclarationSource", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_classDeclarationSource", []);}), (function(){return smalltalk.send(self, "_metaclassDeclarationSource", []);})]));
return self;},
args: [],
source: unescape('declarationSource%0A%20%20%20%20%5EselectedTab%20%3D%20%23instance%0A%09ifTrue%3A%20%5Bself%20classDeclarationSource%5D%0A%09ifFalse%3A%20%5Bself%20metaclassDeclarationSource%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "classDeclarationSource", "metaclassDeclarationSource"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_classDeclarationSource'),
smalltalk.method({
selector: unescape('classDeclarationSource'),
category: 'accessing',
fn: function (){
var self=this;
try{var stream=nil;
stream=smalltalk.send("", "_writeStream", []);
(($receiver = self['@selectedClass']) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_classDeclarationSource', fn: function(){return smalltalk.send(self, "_classDeclarationTemplate", [])}})})();})() : $receiver;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@selectedClass'], "_superclass", []), "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20subclass%3A%20%23")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_name", [])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send((smalltalk.String || String), "_lf", []), "__comma", [smalltalk.send((smalltalk.String || String), "_tab", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("instanceVariableNames%3A%20%27")]);})(stream);
smalltalk.send(smalltalk.send(self['@selectedClass'], "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [" "]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [smalltalk.send((smalltalk.String || String), "_tab", [])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("package%3A%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_category", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%27")]);})(stream);
(function(){throw({name: 'stReturn', selector: '_classDeclarationSource', fn: function(){return smalltalk.send(stream, "_contents", [])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_classDeclarationSource'){return e.fn()} throw(e)}},
args: [],
source: unescape('classDeclarationSource%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09selectedClass%20ifNil%3A%20%5B%5Eself%20classDeclarationTemplate%5D.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20selectedClass%20superclass%20asString%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%20subclass%3A%20%23%27%3B%0A%09%20%20%20%20nextPutAll%3A%20selectedClass%20name%3B%0A%09%20%20%20%20nextPutAll%3A%20String%20lf%2C%20String%20tab%3B%0A%09%20%20%20%20nextPutAll%3A%20%27instanceVariableNames%3A%20%27%27%27.%0A%09selectedClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%5D%20%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%20%27%5D.%0A%09stream%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20String%20lf%2C%20String%20tab%3B%0A%09%20%20%20%20nextPutAll%3A%20%27package%3A%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20selectedClass%20category%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "ifNil:", "classDeclarationTemplate", "nextPutAll:", "asString", "superclass", "name", unescape("%2C"), "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "contents"],
referencedClasses: ["String"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_metaclassDeclarationSource'),
smalltalk.method({
selector: unescape('metaclassDeclarationSource'),
category: 'accessing',
fn: function (){
var self=this;
var stream=nil;
stream=smalltalk.send("", "_writeStream", []);
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [" class "]);return smalltalk.send($rec, "_nextPutAll_", [unescape("instanceVariableNames%3A%20%27")]);})(stream);smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [" "]);})]);return smalltalk.send(stream, "_nextPutAll_", [unescape("%27")]);})() : nil;
return smalltalk.send(stream, "_contents", []);
return self;},
args: [],
source: unescape('metaclassDeclarationSource%0A%20%20%20%20%7C%20stream%20%7C%0A%20%20%20%20stream%20%3A%3D%20%27%27%20writeStream.%0A%20%20%20%20selectedClass%20ifNotNil%3A%20%5B%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20selectedClass%20asString%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%20class%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27instanceVariableNames%3A%20%27%27%27.%0A%09selectedClass%20class%20instanceVariableNames%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%20%27%5D.%0A%09stream%20nextPutAll%3A%20%27%27%27%27%5D.%0A%20%20%20%20%5Estream%20contents'),
messageSends: ["writeStream", "ifNotNil:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames", "class", "contents"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_classCommentSource'),
smalltalk.method({
selector: unescape('classCommentSource'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@selectedClass'], "_comment", []);
return self;},
args: [],
source: unescape('classCommentSource%0A%20%20%20%20%5EselectedClass%20comment'),
messageSends: ["comment"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectedClass'),
smalltalk.method({
selector: unescape('selectedClass'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selectedClass'];
return self;},
args: [],
source: unescape('selectedClass%0A%09%5EselectedClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_classDeclarationTemplate'),
smalltalk.method({
selector: unescape('classDeclarationTemplate'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("Object%20subclass%3A%20%23NameOfSubclass%0A%09instanceVariableNames%3A%20%27%27%0A%09package%3A%20%27"), "__comma", [smalltalk.send(self, "_selectedPackage", [])]), "__comma", [unescape("%27")]);
return self;},
args: [],
source: unescape('classDeclarationTemplate%0A%09%5E%27Object%20subclass%3A%20%23NameOfSubclass%0A%09instanceVariableNames%3A%20%27%27%27%27%0A%09package%3A%20%27%27%27%2C%20self%20selectedPackage%2C%20%27%27%27%27'),
messageSends: [unescape("%2C"), "selectedPackage"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectedPackage'),
smalltalk.method({
selector: unescape('selectedPackage'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selectedPackage'];
return self;},
args: [],
source: unescape('selectedPackage%0A%09%5EselectedPackage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_disableSaveButton'),
smalltalk.method({
selector: unescape('disableSaveButton'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;
self['@unsavedChanges']=false;
return self;},
args: [],
source: unescape('disableSaveButton%0A%20%20%20%20saveButton%20ifNotNil%3A%20%5B%0A%09saveButton%20at%3A%20%27disabled%27%20put%3A%20true%5D.%0A%20%20%20%20unsavedChanges%20%3A%3D%20false'),
messageSends: ["ifNotNil:", "at:put:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_hideClassButtons'),
smalltalk.method({
selector: unescape('hideClassButtons'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_hide", []);
return self;},
args: [],
source: unescape('hideClassButtons%0A%20%20%20%20classButtons%20asJQuery%20hide'),
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_showClassButtons'),
smalltalk.method({
selector: unescape('showClassButtons'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_show", []);
return self;},
args: [],
source: unescape('showClassButtons%0A%20%20%20%20classButtons%20asJQuery%20show'),
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_hideMethodButtons'),
smalltalk.method({
selector: unescape('hideMethodButtons'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_hide", []);
return self;},
args: [],
source: unescape('hideMethodButtons%0A%20%20%20%20methodButtons%20asJQuery%20hide'),
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_showMethodButtons'),
smalltalk.method({
selector: unescape('showMethodButtons'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_show", []);
return self;},
args: [],
source: unescape('showMethodButtons%0A%20%20%20%20methodButtons%20asJQuery%20show'),
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compile'),
smalltalk.method({
selector: unescape('compile'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_disableSaveButton", []);
((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_compileClassComment", []);})() : nil;})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_compileDefinition", []);})() : (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_compileDefinition", []);}), (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_compileClassComment", []);})() : nil;}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_compileDefinition", []);})() : (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_compileDefinition", []);}), (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})]));})]));
return self;},
args: [],
source: unescape('compile%0A%20%20%20%20self%20disableSaveButton.%0A%20%20%20%20selectedTab%20%3D%20%23comment%20%0A%09ifTrue%3A%20%5B%0A%09%09%09selectedClass%20ifNotNil%3A%20%5B%0A%09%09%09%09self%20compileClassComment%5D%5D%0A%09ifFalse%3A%20%5B%0A%09%09%09%28selectedProtocol%20notNil%20or%3A%20%5BselectedMethod%20notNil%5D%29%0A%09%09%09%09ifFalse%3A%20%5Bself%20compileDefinition%5D%0A%09%09%09%09ifTrue%3A%20%5Bself%20compileMethodDefinition%5D%5D'),
messageSends: ["disableSaveButton", "ifTrue:ifFalse:", unescape("%3D"), "ifNotNil:", "compileClassComment", "ifFalse:ifTrue:", "or:", "notNil", "compileDefinition", "compileMethodDefinition"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compileClassComment'),
smalltalk.method({
selector: unescape('compileClassComment'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@selectedClass'], "_comment_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
return self;},
args: [],
source: unescape('compileClassComment%0A%20%20%20%20selectedClass%20comment%3A%20sourceArea%20val'),
messageSends: ["comment:", "val"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compileMethodDefinition'),
smalltalk.method({
selector: unescape('compileMethodDefinition'),
category: 'actions',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);})() : (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);}), (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);})]));
return self;},
args: [],
source: unescape('compileMethodDefinition%0A%20%20%20%20selectedTab%20%3D%20%23instance%0A%09ifTrue%3A%20%5Bself%20compileMethodDefinitionFor%3A%20selectedClass%5D%0A%09ifFalse%3A%20%5Bself%20compileMethodDefinitionFor%3A%20selectedClass%20class%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "compileMethodDefinitionFor:", "class"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compileMethodDefinitionFor_'),
smalltalk.method({
selector: unescape('compileMethodDefinitionFor%3A'),
category: 'actions',
fn: function (aClass){
var self=this;
try{var compiler=nil;
var method=nil;
var source=nil;
var node=nil;
source=smalltalk.send(self['@sourceArea'], "_val", []);
(($receiver = self['@selectedProtocol']) == nil || $receiver == undefined) ? (function(){return self['@selectedProtocol']=smalltalk.send(self['@selectedMethod'], "_category", []);})() : $receiver;
compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []);
smalltalk.send(compiler, "_source_", [source]);
node=smalltalk.send(compiler, "_parse_", [source]);
((($receiver = smalltalk.send(node, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [unescape("%2C%20position%3A%20")]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [unescape("%2C%20position%3A%20")]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])}})})();})]));
smalltalk.send(compiler, "_currentClass_", [aClass]);
method=smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compileNode_", [node])]);
smalltalk.send(method, "_category_", [self['@selectedProtocol']]);
smalltalk.send(smalltalk.send(compiler, "_unknownVariables", []), "_do_", [(function(each){return (($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", [each])) == nil || $receiver == undefined) ? (function(){return ((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send(unescape("Declare%20%27"), "__comma", [each]), "__comma", [unescape("%27%20as%20instance%20variable%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass])}})})();})]));})() : $receiver;})]);
smalltalk.send(aClass, "_addCompiledMethod_", [method]);
smalltalk.send(compiler, "_setupClass_", [aClass]);
smalltalk.send(self, "_updateMethodsList", []);
smalltalk.send(self, "_selectMethod_", [method]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_compileMethodDefinitionFor_'){return e.fn()} throw(e)}},
args: ["aClass"],
source: unescape('compileMethodDefinitionFor%3A%20aClass%0A%20%20%20%20%7C%20compiler%20method%20source%20node%20%7C%20%0A%20%20%20%20source%20%3A%3D%20sourceArea%20val.%0A%20%20%20%20selectedProtocol%20ifNil%3A%20%5BselectedProtocol%20%3A%3D%20selectedMethod%20category%5D.%0A%20%20%20%20compiler%20%3A%3D%20Compiler%20new.%0A%20%20%20%20compiler%20source%3A%20source.%0A%20%20%20%20node%20%3A%3D%20compiler%20parse%3A%20source.%0A%20%20%20%20node%20isParseFailure%20ifTrue%3A%20%5B%0A%09%5Ewindow%20alert%3A%20%27PARSE%20ERROR%3A%20%27%2C%20node%20reason%2C%20%27%2C%20position%3A%20%27%2C%20node%20position%20asString%5D.%0A%20%20%20%20compiler%20currentClass%3A%20aClass.%0A%20%20%20%20method%20%3A%3D%20compiler%20eval%3A%20%28compiler%20compileNode%3A%20node%29.%0A%20%20%20%20method%20category%3A%20selectedProtocol.%0A%20%20%20%20compiler%20unknownVariables%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%20%20%20%20%20%22Do%20not%20try%20to%20redeclare%20javascript%27s%20objects%22%0A%20%20%20%20%20%20%20%20%20%28window%20at%3A%20each%29%20ifNil%3A%20%5B%0A%09%20%09%28window%20confirm%3A%20%27Declare%20%27%27%27%2C%20each%2C%20%27%27%27%20as%20instance%20variable%3F%27%29%20ifTrue%3A%20%5B%0A%09%09%09self%20addInstanceVariableNamed%3A%20each%20toClass%3A%20aClass.%0A%09%09%09%5Eself%20compileMethodDefinitionFor%3A%20aClass%5D%5D%5D.%0A%20%20%20%20aClass%20addCompiledMethod%3A%20method.%0A%20%20%20%20compiler%20setupClass%3A%20aClass.%0A%20%20%20%20self%20updateMethodsList.%0A%20%20%20%20self%20selectMethod%3A%20method'),
messageSends: ["val", "ifNil:", "category", "new", "source:", "parse:", "ifTrue:", "isParseFailure", "alert:", unescape("%2C"), "reason", "asString", "position", "currentClass:", "eval:", "compileNode:", "category:", "do:", "unknownVariables", "at:", "confirm:", "addInstanceVariableNamed:toClass:", "compileMethodDefinitionFor:", "addCompiledMethod:", "setupClass:", "updateMethodsList", "selectMethod:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compileDefinition'),
smalltalk.method({
selector: unescape('compileDefinition'),
category: 'actions',
fn: function (){
var self=this;
var newClass=nil;
newClass=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
(function($rec){smalltalk.send($rec, "_resetClassesList", []);smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
smalltalk.send(self, "_selectClass_", [newClass]);
return self;},
args: [],
source: unescape('compileDefinition%0A%20%20%20%20%7C%20newClass%20%7C%0A%20%20%20%20newClass%20%3A%3D%20Compiler%20new%20loadExpression%3A%20sourceArea%20val.%0A%20%20%20%20self%20%0A%09resetClassesList%3B%0A%09updateCategoriesList%3B%0A%09updateClassesList.%0A%20%20%20%20self%20selectClass%3A%20newClass'),
messageSends: ["loadExpression:", "new", "val", "resetClassesList", "updateCategoriesList", "updateClassesList", "selectClass:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_cancelChanges'),
smalltalk.method({
selector: unescape('cancelChanges'),
category: 'actions',
fn: function (){
var self=this;
return ((($receiver = self['@unsavedChanges']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [unescape("Cancel%20changes%3F")]);})() : (function(){return true;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [unescape("Cancel%20changes%3F")]);}), (function(){return true;})]));
return self;},
args: [],
source: unescape('cancelChanges%0A%20%20%20%20%5EunsavedChanges%20%0A%09ifTrue%3A%20%5Bwindow%20confirm%3A%20%27Cancel%20changes%3F%27%5D%0A%09ifFalse%3A%20%5Btrue%5D'),
messageSends: ["ifTrue:ifFalse:", "confirm:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_removeClass'),
smalltalk.method({
selector: unescape('removeClass'),
category: 'actions',
fn: function (){
var self=this;
((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);})]));
return self;},
args: [],
source: unescape('removeClass%0A%20%20%20%20%28window%20confirm%3A%20%27Do%20you%20really%20want%20to%20remove%20%27%2C%20selectedClass%20name%2C%20%27%3F%27%29%0A%09ifTrue%3A%20%5B%0A%09%20%20%20%20Smalltalk%20current%20removeClass%3A%20selectedClass.%0A%09%20%20%20%20self%20resetClassesList.%0A%09%20%20%20%20self%20selectClass%3A%20nil%5D'),
messageSends: ["ifTrue:", "confirm:", unescape("%2C"), "name", "removeClass:", "current", "resetClassesList", "selectClass:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_removeMethod'),
smalltalk.method({
selector: unescape('removeMethod'),
category: 'actions',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send(unescape("Do%20you%20really%20want%20to%20remove%20%23"), "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]));return smalltalk.send(self, "_selectMethod_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]));return smalltalk.send(self, "_selectMethod_", [nil]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send(unescape("Do%20you%20really%20want%20to%20remove%20%23"), "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]));return smalltalk.send(self, "_selectMethod_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]));return smalltalk.send(self, "_selectMethod_", [nil]);})]));})]));
return self;},
args: [],
source: unescape('removeMethod%0A%20%20%20%20self%20cancelChanges%20ifTrue%3A%20%5B%0A%09%28window%20confirm%3A%20%27Do%20you%20really%20want%20to%20remove%20%23%27%2C%20selectedMethod%20selector%2C%20%27%3F%27%29%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09selectedTab%20%3D%20%23instance%20%0A%09%09%09ifTrue%3A%20%5BselectedClass%20removeCompiledMethod%3A%20selectedMethod%5D%0A%09%09%09ifFalse%3A%20%5BselectedClass%20class%20removeCompiledMethod%3A%20selectedMethod%5D.%0A%09%09self%20selectMethod%3A%20nil%5D%5D'),
messageSends: ["ifTrue:", "cancelChanges", "confirm:", unescape("%2C"), "selector", "ifTrue:ifFalse:", unescape("%3D"), "removeCompiledMethod:", "class", "selectMethod:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_setMethodProtocol_'),
smalltalk.method({
selector: unescape('setMethodProtocol%3A'),
category: 'actions',
fn: function (aString){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_addNewProtocol", []);})() : (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol']=aString;self['@selectedMethod']=self['@selectedMethod'];return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_addNewProtocol", []);}), (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol']=aString;self['@selectedMethod']=self['@selectedMethod'];return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_addNewProtocol", []);})() : (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol']=aString;self['@selectedMethod']=self['@selectedMethod'];return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_addNewProtocol", []);}), (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol']=aString;self['@selectedMethod']=self['@selectedMethod'];return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));})]));
return self;},
args: ["aString"],
source: unescape('setMethodProtocol%3A%20aString%0A%20%20%20%20self%20cancelChanges%20ifTrue%3A%20%5B%0A%09%28self%20protocols%20includes%3A%20aString%29%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20addNewProtocol%5D%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09selectedMethod%20category%3A%20aString.%0A%09%09selectedProtocol%20%3A%3D%20aString.%0A%09%09selectedMethod%20%3A%3D%20selectedMethod.%0A%09%09self%20%0A%09%09%20%20%20%20updateProtocolsList%3B%0A%09%09%20%20%20%20updateMethodsList%3B%0A%09%09%20%20%20%20updateSourceAndButtons%5D%5D'),
messageSends: ["ifTrue:", "cancelChanges", "ifFalse:ifTrue:", "includes:", "protocols", "addNewProtocol", "category:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_addNewProtocol'),
smalltalk.method({
selector: unescape('addNewProtocol'),
category: 'actions',
fn: function (){
var self=this;
var newProtocol=nil;
newProtocol=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", ["New method protocol"]);
((($receiver = smalltalk.send(smalltalk.send(newProtocol, "_notNil", []), "_and_", [(function(){return smalltalk.send(newProtocol, "_notEmpty", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);})]));
return self;},
args: [],
source: unescape('addNewProtocol%0A%20%20%20%20%7C%20newProtocol%20%7C%0A%20%20%20%20newProtocol%20%3A%3D%20window%20prompt%3A%20%27New%20method%20protocol%27.%0A%20%20%20%20%28newProtocol%20notNil%20and%3A%20%5BnewProtocol%20notEmpty%5D%29%20ifTrue%3A%20%5B%0A%09selectedMethod%20category%3A%20newProtocol.%0A%09self%20setMethodProtocol%3A%20newProtocol%5D'),
messageSends: ["prompt:", "ifTrue:", "and:", "notNil", "notEmpty", "category:", "setMethodProtocol:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectCategory_'),
smalltalk.method({
selector: unescape('selectCategory%3A'),
category: 'actions',
fn: function (aCategory){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedPackage']=aCategory;self['@selectedClass']=self['@selectedProtocol']=self['@selectedMethod']=nil;smalltalk.send(self, "_resetClassesList", []);return (function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedPackage']=aCategory;self['@selectedClass']=self['@selectedProtocol']=self['@selectedMethod']=nil;smalltalk.send(self, "_resetClassesList", []);return (function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;},
args: ["aCategory"],
source: unescape('selectCategory%3A%20aCategory%0A%20%20%20%20self%20cancelChanges%20ifTrue%3A%20%5B%0A%09selectedPackage%20%3A%3D%20aCategory.%0A%09selectedClass%20%3A%3D%20selectedProtocol%20%3A%3D%20selectedMethod%20%3A%3D%20%20nil.%0A%09self%20resetClassesList.%0A%09self%20%0A%09%20%20%20%20updateCategoriesList%3B%0A%09%20%20%20%20updateClassesList%3B%0A%09%20%20%20%20updateProtocolsList%3B%0A%09%20%20%20%20updateMethodsList%3B%0A%09%20%20%20%20updateSourceAndButtons%5D'),
messageSends: ["ifTrue:", "cancelChanges", "resetClassesList", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectClass_'),
smalltalk.method({
selector: unescape('selectClass%3A'),
category: 'actions',
fn: function (aClass){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedClass']=aClass;self['@selectedProtocol']=self['@selectedMethod']=nil;return (function($rec){smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedClass']=aClass;self['@selectedProtocol']=self['@selectedMethod']=nil;return (function($rec){smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;},
args: ["aClass"],
source: unescape('selectClass%3A%20aClass%0A%20%20%20%20self%20cancelChanges%20ifTrue%3A%20%5B%0A%09selectedClass%20%3A%3D%20aClass.%0A%09selectedProtocol%20%3A%3D%20selectedMethod%20%3A%3D%20nil.%0A%09self%20%0A%09%20%20%20%20updateClassesList%3B%0A%09%20%20%20%20updateProtocolsList%3B%0A%09%20%20%20%20updateMethodsList%3B%0A%09%20%20%20%20updateSourceAndButtons%5D'),
messageSends: ["ifTrue:", "cancelChanges", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectProtocol_'),
smalltalk.method({
selector: unescape('selectProtocol%3A'),
category: 'actions',
fn: function (aString){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedProtocol']=aString;self['@selectedMethod']=nil;return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedProtocol']=aString;self['@selectedMethod']=nil;return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;},
args: ["aString"],
source: unescape('selectProtocol%3A%20aString%0A%20%20%20%20self%20cancelChanges%20ifTrue%3A%20%5B%0A%09selectedProtocol%20%3A%3D%20aString.%0A%09selectedMethod%20%3A%3D%20nil.%0A%09self%20%0A%09%20%20%20%20updateProtocolsList%3B%0A%09%20%20%20%20updateMethodsList%3B%0A%09%20%20%20%20updateSourceAndButtons%5D'),
messageSends: ["ifTrue:", "cancelChanges", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectMethod_'),
smalltalk.method({
selector: unescape('selectMethod%3A'),
category: 'actions',
fn: function (aMethod){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedMethod']=aMethod;return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedMethod']=aMethod;return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;},
args: ["aMethod"],
source: unescape('selectMethod%3A%20aMethod%0A%20%20%20%20self%20cancelChanges%20ifTrue%3A%20%5B%0A%09selectedMethod%20%3A%3D%20aMethod.%0A%09self%20%0A%09%20%20%20%20updateProtocolsList%3B%0A%09%20%20%20%20updateMethodsList%3B%0A%09%20%20%20%20updateSourceAndButtons%5D'),
messageSends: ["ifTrue:", "cancelChanges", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectTab_'),
smalltalk.method({
selector: unescape('selectTab%3A'),
category: 'actions',
fn: function (aString){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){self['@selectedTab']=aString;smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){self['@selectedTab']=aString;smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);})]));
return self;},
args: ["aString"],
source: unescape('selectTab%3A%20aString%0A%20%20%20%20self%20cancelChanges%20ifTrue%3A%20%5B%0A%09selectedTab%20%3A%3D%20aString.%0A%09self%20selectProtocol%3A%20nil.%0A%09self%20updateTabsList%5D'),
messageSends: ["ifTrue:", "cancelChanges", "selectProtocol:", "updateTabsList"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renameClass'),
smalltalk.method({
selector: unescape('renameClass'),
category: 'actions',
fn: function (){
var self=this;
var newName=nil;
newName=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", [smalltalk.send("Rename class ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])])]);
((($receiver = smalltalk.send(smalltalk.send(newName, "_notNil", []), "_and_", [(function(){return smalltalk.send(newName, "_notEmpty", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return (function($rec){smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return (function($rec){smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;},
args: [],
source: unescape('renameClass%0A%20%20%20%20%7C%20newName%20%7C%0A%20%20%20%20newName%20%3A%3D%20window%20prompt%3A%20%27Rename%20class%20%27%2C%20selectedClass%20name.%0A%20%20%20%20%28newName%20notNil%20and%3A%20%5BnewName%20notEmpty%5D%29%20ifTrue%3A%20%5B%0A%09selectedClass%20rename%3A%20newName.%0A%09self%20%0A%09%09updateClassesList%3B%0A%09%09updateSourceAndButtons%5D'),
messageSends: ["prompt:", unescape("%2C"), "name", "ifTrue:", "and:", "notNil", "notEmpty", "rename:", "updateClassesList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_addInstanceVariableNamed_toClass_'),
smalltalk.method({
selector: unescape('addInstanceVariableNamed%3AtoClass%3A'),
category: 'actions',
fn: function (aString, aClass){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_addSubclassOf_named_instanceVariableNames_package_", [smalltalk.send(aClass, "_superclass", []), smalltalk.send(aClass, "_name", []), (function($rec){smalltalk.send($rec, "_add_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_copy", [])), smalltalk.send(smalltalk.send(aClass, "_package", []), "_name", [])]);
return self;},
args: ["aString", "aClass"],
source: unescape('addInstanceVariableNamed%3A%20aString%20toClass%3A%20aClass%0A%09ClassBuilder%20new%0A%09%09addSubclassOf%3A%20aClass%20superclass%20%0A%09%09named%3A%20aClass%20name%20%0A%09%09instanceVariableNames%3A%20%28aClass%20instanceVariableNames%20copy%20add%3A%20aString%3B%20yourself%29%0A%09%09package%3A%20aClass%20package%20name'),
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "new", "superclass", "name", "add:", "yourself", "copy", "instanceVariableNames", "package"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_searchReferencesOf_'),
smalltalk.method({
selector: unescape('searchReferencesOf%3A'),
category: 'actions',
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [aString]);
return self;},
args: ["aString"],
source: unescape('searchReferencesOf%3A%20aString%0A%09ReferencesBrowser%20search%3A%20aString'),
messageSends: ["search:"],
referencedClasses: ["ReferencesBrowser"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_searchClassReferences'),
smalltalk.method({
selector: unescape('searchClassReferences'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [smalltalk.send(self['@selectedClass'], "_name", [])]);
return self;},
args: [],
source: unescape('searchClassReferences%0A%09ReferencesBrowser%20search%3A%20selectedClass%20name'),
messageSends: ["search:", "name"],
referencedClasses: ["ReferencesBrowser"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_search_'),
smalltalk.method({
selector: unescape('search%3A'),
category: 'actions',
fn: function (aString){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var searchedClass=nil;
searchedClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [aString]);return ((($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);})() : (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}), (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var searchedClass=nil;
searchedClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [aString]);return ((($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);})() : (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}), (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})]));})]));
return self;},
args: ["aString"],
source: unescape('search%3A%20aString%0A%09self%20cancelChanges%20ifTrue%3A%20%5B%7C%20searchedClass%20%7C%0A%09%09searchedClass%20%3A%3D%20Smalltalk%20current%20at%3A%20aString.%0A%09%09searchedClass%20isClass%0A%09%09%09ifTrue%3A%20%5Bself%20class%20openOn%3A%20searchedClass%5D%0A%09%09%09ifFalse%3A%20%5Bself%20searchReferencesOf%3A%20aString%5D%5D'),
messageSends: ["ifTrue:", "cancelChanges", "at:", "current", "ifTrue:ifFalse:", "isClass", "openOn:", "class", "searchReferencesOf:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_handleSourceAreaKeyDown_'),
smalltalk.method({
selector: unescape('handleSourceAreaKeyDown%3A'),
category: 'actions',
fn: function (anEvent){
var self=this;
if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 83) { //ctrl+s
			self._compile();
			anEvent.preventDefault();
			return false;
		}
	}
	;
return self;},
args: ["anEvent"],
source: unescape('handleSourceAreaKeyDown%3A%20anEvent%0A%09%20%3Cif%28anEvent.ctrlKey%29%20%7B%0A%09%09if%28anEvent.keyCode%20%3D%3D%3D%2083%29%20%7B%20//ctrl+s%0A%09%09%09self._compile%28%29%3B%0A%09%09%09anEvent.preventDefault%28%29%3B%0A%09%09%09return%20false%3B%0A%09%09%7D%0A%09%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_commitPackage'),
smalltalk.method({
selector: unescape('commitPackage'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@selectedPackage']) != nil && $receiver != undefined) ? (function(){smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_commitPathJs", []), "__comma", [unescape("/")]), "__comma", [self['@selectedPackage']]), "__comma", [".js"]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(smalltalk.send((smalltalk.Exporter || Exporter), "_new", []), "_exportPackage_", [self['@selectedPackage']])]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [unescape("Commit%20failed%21")]);})])])]);smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_commitPathJs", []), "__comma", [unescape("/")]), "__comma", [self['@selectedPackage']]), "__comma", [".deploy.js"]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(smalltalk.send((smalltalk.StrippedExporter || StrippedExporter), "_new", []), "_exportPackage_", [self['@selectedPackage']])]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [unescape("Commit%20failed%21")]);})])])]);return smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_commitPathSt", []), "__comma", [unescape("/")]), "__comma", [self['@selectedPackage']]), "__comma", [".st"]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(smalltalk.send((smalltalk.ChunkExporter || ChunkExporter), "_new", []), "_exportPackage_", [self['@selectedPackage']])]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [unescape("Commit%20failed%21")]);})])])]);})() : nil;
return self;},
args: [],
source: unescape('commitPackage%0A%09selectedPackage%20ifNotNil%3A%20%5B%0A%09%09jQuery%20%0A%09%09%09ajax%3A%20self%20class%20commitPathJs%2C%20%27/%27%2C%20selectedPackage%2C%20%27.js%27%0A%09%09%09options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%09%09%27data%27%20-%3E%20%28Exporter%20new%20exportPackage%3A%20selectedPackage%29.%0A%09%09%09%09%27error%27%20-%3E%20%5Bwindow%20alert%3A%20%27Commit%20failed%21%27%5D%0A%09%09%09%7D.%0A%09%09jQuery%20%0A%09%09%09ajax%3A%20self%20class%20commitPathJs%2C%20%27/%27%2C%20selectedPackage%2C%20%27.deploy.js%27%0A%09%09%09options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%09%09%27data%27%20-%3E%20%28StrippedExporter%20new%20exportPackage%3A%20selectedPackage%29.%0A%09%09%09%09%27error%27%20-%3E%20%5Bwindow%20alert%3A%20%27Commit%20failed%21%27%5D%0A%09%09%09%7D.%0A%09%09jQuery%20%0A%09%09%09ajax%3A%20self%20class%20commitPathSt%2C%20%27/%27%2C%20selectedPackage%2C%20%27.st%27%0A%09%09%09options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%09%09%27data%27%20-%3E%20%28ChunkExporter%20new%20exportPackage%3A%20selectedPackage%29.%0A%09%09%09%09%27error%27%20-%3E%20%5Bwindow%20alert%3A%20%27Commit%20failed%21%27%5D%0A%09%09%09%7D%5D'),
messageSends: ["ifNotNil:", "ajax:options:", unescape("%2C"), "commitPathJs", "class", unescape("-%3E"), "exportPackage:", "new", "alert:", "commitPathSt"],
referencedClasses: ["Exporter", "StrippedExporter", "ChunkExporter"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renamePackage'),
smalltalk.method({
selector: unescape('renamePackage'),
category: 'actions',
fn: function (){
var self=this;
var newName=nil;
newName=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", [smalltalk.send("Rename package ", "__comma", [self['@selectedPackage']])]);
(($receiver = newName) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(newName, "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);return smalltalk.send(self, "_updateCategoriesList", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);return smalltalk.send(self, "_updateCategoriesList", []);})]));})() : nil;
return self;},
args: [],
source: unescape('renamePackage%0A%0A%20%20%7C%20newName%20%7C%0A%20%20newName%20%3A%3D%20window%20prompt%3A%20%27Rename%20package%20%27%2C%20selectedPackage.%0A%20%20newName%20ifNotNil%3A%20%5B%0A%20%20%20%20newName%20notEmpty%20ifTrue%3A%20%5B%0A%09Smalltalk%20current%20renamePackage%3A%20selectedPackage%20to%3A%20newName.%0A%09self%20updateCategoriesList%5D%5D'),
messageSends: ["prompt:", unescape("%2C"), "ifNotNil:", "ifTrue:", "notEmpty", "renamePackage:to:", "current", "updateCategoriesList"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_removePackage'),
smalltalk.method({
selector: unescape('removePackage'),
category: 'actions',
fn: function (){
var self=this;
((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove the whole package ", "__comma", [self['@selectedPackage']]), "__comma", [unescape("%20with%20all%20its%20classes%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removePackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_updateCategoriesList", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removePackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_updateCategoriesList", []);})]));
return self;},
args: [],
source: unescape('removePackage%0A%0A%20%20%28window%20confirm%3A%20%27Do%20you%20really%20want%20to%20remove%20the%20whole%20package%20%27%2C%20selectedPackage%2C%20%27%20with%20all%20its%20classes%3F%27%29%0A%09ifTrue%3A%20%5B%0A%09%20%20%20%20Smalltalk%20current%20removePackage%3A%20selectedPackage.%0A%09%20%20%20%20self%20updateCategoriesList%5D'),
messageSends: ["ifTrue:", "confirm:", unescape("%2C"), "removePackage:", "current", "updateCategoriesList"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_commitPackageToLocalStorage'),
smalltalk.method({
selector: unescape('commitPackageToLocalStorage'),
category: 'actions',
fn: function (){
var self=this;
var key=nil;
var sourceCode=nil;
(($receiver = self['@selectedPackage']) != nil && $receiver != undefined) ? (function(){key=smalltalk.send("smalltalk.packages.", "__comma", [self['@selectedPackage']]);sourceCode=smalltalk.send(smalltalk.send((smalltalk.Exporter || Exporter), "_new", []), "_exportPackage_", [self['@selectedPackage']]);return localStorage[key] = sourceCode;})() : nil;
return self;},
args: [],
source: unescape('commitPackageToLocalStorage%0A%09%7C%20key%20sourceCode%20%7C%0A%09selectedPackage%20ifNotNil%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09key%20%3A%3D%20%27smalltalk.packages.%27%20%2C%20selectedPackage.%0A%09%09sourceCode%20%3A%3D%20%28Exporter%20new%20exportPackage%3A%20selectedPackage%29.%0A%09%09%3ClocalStorage%5Bkey%5D%20%3D%20sourceCode%3E%5D'),
messageSends: ["ifNotNil:", unescape("%2C"), "exportPackage:", "new"],
referencedClasses: ["Exporter"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_addNewClass'),
smalltalk.method({
selector: unescape('addNewClass'),
category: 'actions',
fn: function (){
var self=this;
var className=nil;
className=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", ["New class"]);
((($receiver = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [(function(){return smalltalk.send(className, "_notEmpty", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((smalltalk.Object || Object), "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);(function($rec){smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [className])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((smalltalk.Object || Object), "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);(function($rec){smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [className])]);})]));
return self;},
args: [],
source: unescape('addNewClass%0A%09%7C%20className%20%7C%0A%09className%20%3A%3D%20window%20prompt%3A%20%27New%20class%27.%0A%09%28className%20notNil%20and%3A%20%5BclassName%20notEmpty%5D%29%20ifTrue%3A%20%5B%0A%09%09Object%20subclass%3A%20className%20instanceVariableNames%3A%20%27%27%20package%3A%20self%20selectedPackage.%0A%20%20%20%20%20%20%20%20%20%20%09%20self%20%0A%09%09%09resetClassesList%3B%0A%09%09%09updateClassesList.%0A%09%09self%20selectClass%3A%20%28Smalltalk%20current%20at%3A%20className%29%5D'),
messageSends: ["prompt:", "ifTrue:", "and:", "notNil", "notEmpty", "subclass:instanceVariableNames:package:", "selectedPackage", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current"],
referencedClasses: ["Object", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
self['@selectedTab']="instance";
self['@selectedPackage']=smalltalk.send(smalltalk.send(self, "_packages", []), "_first", []);
self['@unsavedChanges']=false;
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20selectedTab%20%3A%3D%20%23instance.%0A%20%20%20%20selectedPackage%20%3A%3D%20self%20packages%20first.%0A%20%20%20%20unsavedChanges%20%3A%3D%20false'),
messageSends: ["initialize", "first", "packages"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);smalltalk.send($rec, "_renderTabsOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;},
args: ["html"],
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20self%20%0A%09renderTopPanelOn%3A%20html%3B%0A%09renderTabsOn%3A%20html%3B%0A%09renderBottomPanelOn%3A%20html'),
messageSends: ["renderTopPanelOn:", "renderTabsOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderTopPanelOn_'),
smalltalk.method({
selector: unescape('renderTopPanelOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){self['@packagesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser packages"]);(function($rec){smalltalk.send($rec, "_class_", ["jt_packagesButtons"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_title_", ["Commit classes in this package to disk"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_commitPackage", []);})]);return smalltalk.send($rec, "_with_", ["Commit"]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_title_", ["Commit classes in this package to local storage"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_commitPackageToLocalStorage", []);})]);return smalltalk.send($rec, "_with_", ["Local"]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_title_", ["Rename package"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_renamePackage", []);})]);return smalltalk.send($rec, "_with_", ["Rename"]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_title_", ["Remove this package from the system"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_removePackage", []);})]);return smalltalk.send($rec, "_with_", ["Remove"]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));self['@classesList']=smalltalk.send((smalltalk.ClassesList || ClassesList), "_on_", [self]);smalltalk.send(self['@classesList'], "_renderOn_", [html]);self['@protocolsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser protocols"]);self['@methodsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser methods"]);(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);return smalltalk.send($rec, "_updateMethodsList", []);})(self);return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["jt_clear"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderTopPanelOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27top%27%3B%20%0A%09%09with%3A%20%5B%0A%09%09%09packagesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20browser%20packages%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09html%20div%20class%3A%20%27jt_packagesButtons%27%3B%20with%3A%20%5B%0A%09%09%09%09html%20button%20%0A%09%09%09%09%09title%3A%20%27Commit%20classes%20in%20this%20package%20to%20disk%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20commitPackage%5D%3B%0A%09%09%09%09%09with%3A%20%27Commit%27.%0A%20%20%20%20%20%20%20%20%09%09%09html%20button%20%0A%09%09%09%09%09title%3A%20%27Commit%20classes%20in%20this%20package%20to%20local%20storage%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20commitPackageToLocalStorage%5D%3B%0A%09%09%09%09%09with%3A%20%27Local%27.%0A%20%20%20%20%20%20%20%20%09%09%09html%20button%0A%09%09%09%09%09title%3A%20%27Rename%20package%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20renamePackage%5D%3B%0A%09%09%09%09%09with%3A%20%27Rename%27.%0A%20%20%20%20%20%20%20%20%09%09%09html%20button%0A%09%09%09%09%09title%3A%20%27Remove%20this%20package%20from%20the%20system%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20removePackage%5D%3B%0A%09%09%09%09%09with%3A%20%27Remove%27%5D.%0A%09%09%09classesList%20%3A%3D%20ClassesList%20on%3A%20self.%0A%09%09%09classesList%20renderOn%3A%20html.%0A%09%09%09protocolsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20browser%20protocols%27.%0A%09%09%09methodsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20browser%20methods%27.%0A%09%09%09self%0A%09%09%09%09updateCategoriesList%3B%0A%09%09%09%09updateClassesList%3B%0A%09%09%09%09updateProtocolsList%3B%0A%09%09%09%09updateMethodsList.%0A%09%09%09html%20div%20class%3A%20%27jt_clear%27%5D'),
messageSends: ["class:", "with:", "ul", "title:", "onClick:", "commitPackage", "button", "commitPackageToLocalStorage", "renamePackage", "removePackage", "div", "on:", "renderOn:", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList"],
referencedClasses: ["ClassesList"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderTabsOn_'),
smalltalk.method({
selector: unescape('renderTabsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@tabsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_tabs jt_browser"]);
smalltalk.send(self, "_updateTabsList", []);
return self;},
args: ["html"],
source: unescape('renderTabsOn%3A%20html%0A%20%20%20%20tabsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_tabs%20jt_browser%27.%0A%20%20%20%20self%20updateTabsList.'),
messageSends: ["class:", "ul", "updateTabsList"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderBottomPanelOn_'),
smalltalk.method({
selector: unescape('renderBottomPanelOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode"]);return smalltalk.send($rec, "_with_", [(function(){self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []);smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);smalltalk.send(self['@sourceArea'], "_onKeyDown_", [(function(e){return smalltalk.send(self, "_handleSourceAreaKeyDown_", [e]);})]);return smalltalk.send(self['@sourceArea'], "_onKeyUp_", [(function(){return smalltalk.send(self, "_updateStatus", []);})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderBottomPanelOn%3A%20html%0A%20%20%20%20html%20div%0A%09class%3A%20%27jt_sourceCode%27%3B%0A%09with%3A%20%5B%0A%09%20%20%20%20sourceArea%20%3A%3D%20SourceArea%20new.%0A%09%20%20%20%20sourceArea%20renderOn%3A%20html.%0A%20%20%20%20%20%20%20%20%20%20%20%20sourceArea%20onKeyDown%3A%20%5B%3Ae%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20handleSourceAreaKeyDown%3A%20e%5D.%0A%09%20%20%20%20sourceArea%20onKeyUp%3A%20%5Bself%20updateStatus%5D%5D'),
messageSends: ["class:", "with:", "new", "renderOn:", "onKeyDown:", "handleSourceAreaKeyDown:", "onKeyUp:", "updateStatus", "div"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@saveButton']=smalltalk.send(html, "_button", []);
(function($rec){smalltalk.send($rec, "_with_", ["Save"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_compile", []);})]);})(self['@saveButton']);
self['@methodButtons']=smalltalk.send(html, "_span", []);
self['@classButtons']=smalltalk.send(html, "_span", []);
(function($rec){smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_doIt", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_printIt", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_updateSourceAndButtons", []);
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%20%20%20%20saveButton%20%3A%3D%20html%20button.%0A%20%20%20%20saveButton%20%0A%09with%3A%20%27Save%27%3B%0A%09onClick%3A%20%5Bself%20compile%5D.%0A%20%20%20%20methodButtons%20%3A%3D%20html%20span.%0A%20%20%20%20classButtons%20%3A%3D%20html%20span.%0A%20%20%20%20html%20div%20%0A%09class%3A%20%27right%27%3B%0A%09with%3A%20%5B%0A%09%09html%20button%0A%09%09%09with%3A%20%27DoIt%27%3B%0A%09%09%09onClick%3A%20%5BsourceArea%20doIt%5D.%0A%09%09html%20button%0A%09%09%09with%3A%20%27PrintIt%27%3B%0A%09%09%09onClick%3A%20%5BsourceArea%20printIt%5D.%0A%09%09html%20button%20with%3A%20%27InspectIt%27%3B%0A%09%09%09onClick%3A%20%5BsourceArea%20inspectIt%5D%5D.%20%0A%20%20%20%20self%20updateSourceAndButtons'),
messageSends: ["button", "with:", "onClick:", "compile", "span", "class:", "doIt", "printIt", "inspectIt", "div", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('canBeClosed%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateCategoriesList'),
smalltalk.method({
selector: unescape('updateCategoriesList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@packagesList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [(function(each){var li=nil;
var label=nil;
((($receiver = smalltalk.send(each, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return label="Unclassified";})() : (function(){return label=each;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return label="Unclassified";}), (function(){return label=each;})]));li=smalltalk.send(html, "_li", []);((($receiver = smalltalk.send(self['@selectedPackage'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [label]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectCategory_", [each]);})]);})(li);})]);})]);
return self;},
args: [],
source: unescape('updateCategoriesList%0A%20%20%20%20packagesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09self%20packages%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20label%20%7C%0A%09%20%20%20%20each%20isEmpty%20%0A%09%09ifTrue%3A%20%5Blabel%20%3A%3D%20%27Unclassified%27%5D%0A%09%09ifFalse%3A%20%5Blabel%20%3A%3D%20each%5D.%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20selectedPackage%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%0A%09%09with%3A%20label%3B%0A%09%09onClick%3A%20%5Bself%20selectCategory%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "do:", "packages", "ifTrue:ifFalse:", "isEmpty", "li", "ifTrue:", unescape("%3D"), "class:", "with:", "onClick:", "selectCategory:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateClassesList'),
smalltalk.method({
selector: unescape('updateClassesList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_update", []);
smalltalk.send(self['@classesList'], "_updateNodes", []);
return self;},
args: [],
source: unescape('updateClassesList%0A%20%20%20%20TabManager%20current%20update.%0A%20%20%20%20classesList%20updateNodes.%0A%20%20%20%20%22classesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09self%20classes%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20selectedClass%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%0A%09%09with%3A%20each%20name%3B%0A%09%09onClick%3A%20%5Bself%20selectClass%3A%20each%5D%5D%5D%22'),
messageSends: ["update", "current", "updateNodes"],
referencedClasses: ["TabManager"]
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateProtocolsList'),
smalltalk.method({
selector: unescape('updateProtocolsList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@protocolsList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);((($receiver = smalltalk.send(self['@selectedProtocol'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectProtocol_", [each]);})]);})(li);})]);})]);
return self;},
args: [],
source: unescape('updateProtocolsList%0A%20%20%20%20protocolsList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09self%20protocols%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20selectedProtocol%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%20%0A%09%09with%3A%20each%3B%0A%09%09onClick%3A%20%5Bself%20selectProtocol%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "do:", "protocols", "li", "ifTrue:", unescape("%3D"), "class:", "with:", "onClick:", "selectProtocol:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateMethodsList'),
smalltalk.method({
selector: unescape('updateMethodsList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@methodsList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);((($receiver = smalltalk.send(self['@selectedMethod'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_selector", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectMethod_", [each]);})]);})(li);})]);})]);
return self;},
args: [],
source: unescape('updateMethodsList%0A%20%20%20%20methodsList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09self%20methods%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20selectedMethod%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%0A%09%09with%3A%20each%20selector%3B%0A%09%09onClick%3A%20%5Bself%20selectMethod%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "do:", "methods", "li", "ifTrue:", unescape("%3D"), "class:", "with:", "selector", "onClick:", "selectMethod:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateTabsList'),
smalltalk.method({
selector: unescape('updateTabsList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@tabsList'], "_contents_", [(function(html){var li=nil;
li=smalltalk.send(html, "_li", []);((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["instance"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));(function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Instance"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", ["instance"]);})]);})(li);li=smalltalk.send(html, "_li", []);((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["class"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));(function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Class"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", ["class"]);})]);})(li);li=smalltalk.send(html, "_li", []);((($receiver = smalltalk.send(self['@selectedTab'], "__eq", ["comment"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Comment"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", ["comment"]);})]);})(li);})]);
return self;},
args: [],
source: unescape('updateTabsList%0A%20%20%20%20tabsList%20contents%3A%20%5B%3Ahtml%20%7C%7C%20li%20%7C%0A%09li%20%3A%3D%20html%20li.%0A%09selectedTab%20%3D%20%23instance%20ifTrue%3A%20%5Bli%20class%3A%20%27selected%27%5D.%0A%09li%0A%09%20%20%20%20with%3A%20%5B%0A%09%09html%20span%20class%3A%20%27ltab%27.%0A%09%09html%20span%20class%3A%20%27mtab%27%3B%20with%3A%20%27Instance%27.%0A%09%09html%20span%20class%3A%20%27rtab%27%5D%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20selectTab%3A%20%23instance%5D.%0A%09li%20%3A%3D%20html%20li.%0A%09selectedTab%20%3D%20%23class%20ifTrue%3A%20%5Bli%20class%3A%20%27selected%27%5D.%0A%09li%0A%09%20%20%20%20with%3A%20%5B%0A%09%09html%20span%20class%3A%20%27ltab%27.%0A%09%09html%20span%20class%3A%20%27mtab%27%3B%20with%3A%20%27Class%27.%0A%09%09html%20span%20class%3A%20%27rtab%27%5D%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20selectTab%3A%20%23class%5D.%0A%09li%20%3A%3D%20html%20li.%0A%09selectedTab%20%3D%20%23comment%20ifTrue%3A%20%5Bli%20class%3A%20%27selected%27%5D.%0A%09li%0A%09%20%20%20%20with%3A%20%5B%0A%09%09html%20span%20class%3A%20%27ltab%27.%0A%09%09html%20span%20class%3A%20%27mtab%27%3B%20with%3A%20%27Comment%27.%0A%09%09html%20span%20class%3A%20%27rtab%27%5D%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20selectTab%3A%20%23comment%5D%5D'),
messageSends: ["contents:", "li", "ifTrue:", unescape("%3D"), "class:", "with:", "span", "onClick:", "selectTab:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateSourceAndButtons'),
smalltalk.method({
selector: unescape('updateSourceAndButtons'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self, "_disableSaveButton", []);
smalltalk.send(self['@classButtons'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_title_", ["Create a new class"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_addNewClass", []);})]);return smalltalk.send($rec, "_with_", ["New class"]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["Rename class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_renameClass", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["Remove class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_removeClass", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_searchClassReferences", []);})]);})(smalltalk.send(html, "_button", []));})]);
smalltalk.send(self['@methodButtons'], "_contents_", [(function(html){var protocolSelect=nil;
var referencesSelect=nil;
(function($rec){smalltalk.send($rec, "_with_", ["Remove method"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_removeMethod", []);})]);})(smalltalk.send(html, "_button", []));protocolSelect=smalltalk.send(html, "_select", []);(function($rec){smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_setMethodProtocol_", [smalltalk.send(smalltalk.send(protocolSelect, "_asJQuery", []), "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["Method protocol"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", ["New..."]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);})]);})]);})(protocolSelect);return ((($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){referencesSelect=smalltalk.send(html, "_select", []);return (function($rec){smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);})]);})]);})(referencesSelect);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){referencesSelect=smalltalk.send(html, "_select", []);return (function($rec){smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);})]);})]);})(referencesSelect);})]));})]);
((($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_hideMethodButtons", []);return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedProtocol'], "_notNil", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_hideClassButtons", []);})() : (function(){return smalltalk.send(self, "_showClassButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_hideClassButtons", []);}), (function(){return smalltalk.send(self, "_showClassButtons", []);})]));})() : (function(){smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self, "_hideMethodButtons", []);return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedProtocol'], "_notNil", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_hideClassButtons", []);})() : (function(){return smalltalk.send(self, "_showClassButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_hideClassButtons", []);}), (function(){return smalltalk.send(self, "_showClassButtons", []);})]));}), (function(){smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);})]));
smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
return self;},
args: [],
source: unescape('updateSourceAndButtons%0A%09self%20disableSaveButton.%0A%09classButtons%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09html%20button%0A%09%09%09title%3A%20%27Create%20a%20new%20class%27%3B%0A%09%09%09onClick%3A%20%5Bself%20addNewClass%5D%3B%0A%09%09%09with%3A%20%27New%20class%27.%0A%09%09html%20button%0A%09%09%09with%3A%20%27Rename%20class%27%3B%0A%09%09%09onClick%3A%20%5Bself%20renameClass%5D.%0A%09%09html%20button%0A%09%09%09with%3A%20%27Remove%20class%27%3B%0A%09%09%09onClick%3A%20%5Bself%20removeClass%5D.%0A%09%09html%20button%0A%09%09%09with%3A%20%27References%27%3B%0A%09%09%09onClick%3A%20%5Bself%20searchClassReferences%5D%5D.%0A%09methodButtons%20contents%3A%20%5B%3Ahtml%20%7C%20%7C%20protocolSelect%20referencesSelect%20%7C%0A%09%09html%20button%0A%09%09%09with%3A%20%27Remove%20method%27%3B%0A%09%09%09onClick%3A%20%5Bself%20removeMethod%5D.%0A%09%09protocolSelect%20%3A%3D%20html%20select.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20protocolSelect%0A%09%09%09onChange%3A%20%5B%20self%20setMethodProtocol%3A%20protocolSelect%20asJQuery%20val%5D%3B%0A%09%09%09with%3A%20%5B%0A%09%09%09%09html%20option%0A%09%09%09%09%09with%3A%20%27Method%20protocol%27%3B%0A%09%09%09%09%09at%3A%20%27disabled%27%20put%3A%20%27disabled%27.%0A%09%09%09%09html%20option%0A%09%09%09%09%09class%3A%20%27important%27%3B%0A%09%09%09%09%09with%3A%20%27New...%27.%0A%09%09%09%09self%20protocols%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%09%09%09html%20option%20with%3A%20each%5D%5D.%0A%09%09selectedMethod%20isNil%20ifFalse%3A%20%5B%0A%09%09%09referencesSelect%20%3A%3D%20html%20select.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20referencesSelect%0A%09%09%09%09onChange%3A%20%5Bself%20searchReferencesOf%3A%20referencesSelect%20asJQuery%20val%5D%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20option%0A%09%09%09%09%09%09with%3A%20%27References%27%3B%0A%09%09%09%09%09%09at%3A%20%27disabled%27%20put%3A%20%27disabled%27.%0A%09%09%09%09%09html%20option%0A%09%09%09%09%09%09class%3A%20%27important%27%3B%0A%09%09%09%09%09%09with%3A%20selectedMethod%20selector.%0A%09%09%09%09%09selectedMethod%20messageSends%20sorted%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%09%09%09%09html%20option%20with%3A%20each%5D%5D%5D%5D.%0A%09selectedMethod%20isNil%0A%09%09ifTrue%3A%20%5B%0A%09%09%09self%20hideMethodButtons.%0A%09%09%09%09%28selectedClass%20isNil%20or%3A%20%5BselectedProtocol%20notNil%5D%29%0A%09%09%09%09%09ifTrue%3A%20%5Bself%20hideClassButtons%5D%0A%09%09%09%09%09ifFalse%3A%20%5Bself%20showClassButtons%5D%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09self%20hideClassButtons.%0A%09%09%09self%20showMethodButtons%5D.%0A%09sourceArea%20val%3A%20self%20source'),
messageSends: ["disableSaveButton", "contents:", "title:", "onClick:", "addNewClass", "with:", "button", "renameClass", "removeClass", "searchClassReferences", "removeMethod", "select", "onChange:", "setMethodProtocol:", "val", "asJQuery", "at:put:", "option", "class:", "do:", "protocols", "ifFalse:", "isNil", "searchReferencesOf:", "selector", "sorted", "messageSends", "ifTrue:ifFalse:", "hideMethodButtons", "or:", "notNil", "hideClassButtons", "showClassButtons", "showMethodButtons", "val:", "source"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateStatus'),
smalltalk.method({
selector: unescape('updateStatus'),
category: 'updating',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return self['@unsavedChanges']=false;})() : (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return self['@unsavedChanges']=true;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return self['@unsavedChanges']=false;}), (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return self['@unsavedChanges']=true;})]));
return self;},
args: [],
source: unescape('updateStatus%0A%09sourceArea%20val%20%3D%20self%20source%0A%09%09ifTrue%3A%20%5B%0A%09%09%09saveButton%20ifNotNil%3A%20%5B%0A%09%09%09%09saveButton%20at%3A%20%27disabled%27%20put%3A%20true%5D.%0A%09%09%09%09unsavedChanges%20%3A%3D%20false%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09saveButton%20ifNotNil%3A%20%5B%0A%09%09%09%09saveButton%20removeAt%3A%20%27disabled%27%5D.%0A%09%09%09unsavedChanges%20%3A%3D%20true%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "val", "source", "ifNotNil:", "at:put:", "removeAt:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_resetClassesList'),
smalltalk.method({
selector: unescape('resetClassesList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@classesList'], "_resetNodes", []);
return self;},
args: [],
source: unescape('resetClassesList%0A%09classesList%20resetNodes'),
messageSends: ["resetNodes"],
referencedClasses: []
}),
smalltalk.Browser);


smalltalk.addMethod(
unescape('_commitPathJs'),
smalltalk.method({
selector: unescape('commitPathJs'),
category: 'accessing',
fn: function (){
var self=this;
return "js";
return self;},
args: [],
source: unescape('commitPathJs%0A%09%5E%27js%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
unescape('_commitPathSt'),
smalltalk.method({
selector: unescape('commitPathSt'),
category: 'accessing',
fn: function (){
var self=this;
return "st";
return self;},
args: [],
source: unescape('commitPathSt%0A%09%5E%27st%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
unescape('_openOn_'),
smalltalk.method({
selector: unescape('openOn%3A'),
category: 'convenience',
fn: function (aClass){
var self=this;
return (function($rec){smalltalk.send($rec, "_open", []);smalltalk.send($rec, "_selectCategory_", [smalltalk.send(aClass, "_category", [])]);return smalltalk.send($rec, "_selectClass_", [aClass]);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aClass"],
source: unescape('openOn%3A%20aClass%0A%20%20%20%20%5Eself%20new%0A%09open%3B%0A%09selectCategory%3A%20aClass%20category%3B%0A%09selectClass%3A%20aClass'),
messageSends: ["open", "selectCategory:", "category", "selectClass:", "new"],
referencedClasses: []
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'convenience',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
return self;},
args: [],
source: unescape('open%0A%20%20%20%20self%20new%20open'),
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.Browser.klass);


smalltalk.addClass('Inspector', smalltalk.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'diveButton', 'sourceArea'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@label']) == nil || $receiver == undefined) ? (function(){return unescape("Inspector%20%28nil%29");})() : $receiver;
return self;},
args: [],
source: unescape('label%0A%09%5Elabel%20ifNil%3A%20%5B%27Inspector%20%28nil%29%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_variables'),
smalltalk.method({
selector: unescape('variables'),
category: 'accessing',
fn: function (){
var self=this;
return self['@variables'];
return self;},
args: [],
source: unescape('variables%0A%09%5Evariables'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_setVariables_'),
smalltalk.method({
selector: unescape('setVariables%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@variables']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('setVariables%3A%20aCollection%0A%09variables%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_setLabel_'),
smalltalk.method({
selector: unescape('setLabel%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@label']=aString;
return self;},
args: ["aString"],
source: unescape('setLabel%3A%20aString%0A%09label%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_selectedVariable'),
smalltalk.method({
selector: unescape('selectedVariable'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selectedVariable'];
return self;},
args: [],
source: unescape('selectedVariable%0A%09%5EselectedVariable'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_selectedVariable_'),
smalltalk.method({
selector: unescape('selectedVariable%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@selectedVariable']=aString;
return self;},
args: ["aString"],
source: unescape('selectedVariable%3A%20aString%0A%09selectedVariable%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_sourceArea'),
smalltalk.method({
selector: unescape('sourceArea'),
category: 'accessing',
fn: function (){
var self=this;
return self['@sourceArea'];
return self;},
args: [],
source: unescape('sourceArea%0A%09%5EsourceArea'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_inspect_'),
smalltalk.method({
selector: unescape('inspect%3A'),
category: 'actions',
fn: function (anObject){
var self=this;
self['@object']=anObject;
self['@variables']=[];
smalltalk.send(self['@object'], "_inspectOn_", [self]);
return self;},
args: ["anObject"],
source: unescape('inspect%3A%20anObject%0A%09object%20%3A%3D%20anObject.%0A%09variables%20%3A%3D%20%23%28%29.%0A%09object%20inspectOn%3A%20self'),
messageSends: ["inspectOn:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_dive'),
smalltalk.method({
selector: unescape('dive'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_inspect", []);
return self;},
args: [],
source: unescape('dive%0A%09%28self%20variables%20at%3A%20self%20selectedVariable%29%20inspect'),
messageSends: ["inspect", "at:", "variables", "selectedVariable"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'actions',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_inspect_", [self['@object']]);smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateValueTextarea", []);})(self);
return self;},
args: [],
source: unescape('refresh%0A%09self%20%0A%09%09inspect%3A%20object%3B%20%0A%09%09updateVariablesList%3B%0A%09%09updateValueTextarea'),
messageSends: ["inspect:", "updateVariablesList", "updateValueTextarea"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;},
args: ["html"],
source: unescape('renderBoxOn%3A%20html%0A%09self%20%0A%09%09renderTopPanelOn%3A%20html%3B%0A%09%09renderBottomPanelOn%3A%20html'),
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_renderTopPanelOn_'),
smalltalk.method({
selector: unescape('renderTopPanelOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){self['@variablesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column variables"]);self['@valueTextarea']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column value"]);return smalltalk.send($rec, "_at_put_", ["readonly", "readonly"]);})(smalltalk.send(html, "_textarea", []));(function($rec){smalltalk.send($rec, "_class_", ["jt_tabs inspector"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["jt_button inspector refresh"]);smalltalk.send($rec, "_with_", ["Refresh"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_refresh", []);})]);})(smalltalk.send(html, "_button", []));return self['@diveButton']=(function($rec){smalltalk.send($rec, "_class_", ["jt_button inspector dive"]);smalltalk.send($rec, "_with_", ["Dive"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_dive", []);})]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["jt_clear"]);})]);})(smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateValueTextarea", []);})(self);
return self;},
args: ["html"],
source: unescape('renderTopPanelOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27top%27%3B%20%0A%09%09with%3A%20%5B%0A%09%09%09variablesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20variables%27.%0A%09%09%09valueTextarea%20%3A%3D%20html%20textarea%20class%3A%20%27jt_column%20value%27%3B%20at%3A%20%27readonly%27%20put%3A%20%27readonly%27.%0A%09%09%09html%20div%20class%3A%20%27jt_tabs%20inspector%27%3B%20with%3A%20%5B%0A%09%09%09%09html%20button%0A%09%09%09%09%09class%3A%20%27jt_button%20inspector%20refresh%27%3B%0A%09%09%09%09%09with%3A%20%27Refresh%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20refresh%5D.%0A%09%09%09%09diveButton%20%3A%3D%20html%20button%20%0A%09%09%09%09%09class%3A%20%27jt_button%20inspector%20dive%27%3B%0A%09%09%09%09%09with%3A%20%27Dive%27%3B%20%0A%09%09%09%09%09onClick%3A%20%5Bself%20dive%5D%5D.%0A%09%09%09html%20div%20class%3A%20%27jt_clear%27%5D.%0A%09self%0A%09%09updateVariablesList%3B%0A%09%09updateValueTextarea.'),
messageSends: ["class:", "with:", "ul", "at:put:", "textarea", "onClick:", "refresh", "button", "dive", "div", "updateVariablesList", "updateValueTextarea"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_renderBottomPanelOn_'),
smalltalk.method({
selector: unescape('renderBottomPanelOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode"]);return smalltalk.send($rec, "_with_", [(function(){self['@sourceArea']=(function($rec){smalltalk.send($rec, "_receiver_", [self['@object']]);smalltalk.send($rec, "_onDoIt_", [(function(){return smalltalk.send(self, "_refresh", []);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []));return smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderBottomPanelOn%3A%20html%0A%20%20%20%20html%20div%0A%09class%3A%20%27jt_sourceCode%27%3B%0A%09with%3A%20%5B%0A%09%20%20%20%20sourceArea%20%3A%3D%20SourceArea%20new%0A%09%09receiver%3A%20object%3B%0A%09%09onDoIt%3A%20%5Bself%20refresh%5D%3B%0A%09%09yourself.%0A%20%20%20%20%20%20%20%20%20%20%20%20sourceArea%20renderOn%3A%20html%5D'),
messageSends: ["class:", "with:", "receiver:", "onDoIt:", "refresh", "yourself", "new", "renderOn:", "div"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
smalltalk.send(self, "_updateButtons", []);
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%09html%20button%20%0A%09%09with%3A%20%27DoIt%27%3B%0A%09%09onClick%3A%20%5Bself%20sourceArea%20doIt%5D.%0A%09html%20button%20%0A%09%09with%3A%20%27PrintIt%27%3B%0A%09%09onClick%3A%20%5Bself%20sourceArea%20printIt%5D.%0A%09html%20button%20%0A%09%09with%3A%20%27InspectIt%27%3B%0A%09%09onClick%3A%20%5Bself%20sourceArea%20inspectIt%5D.%0A%09self%20updateButtons'),
messageSends: ["with:", "onClick:", "doIt", "sourceArea", "button", "printIt", "inspectIt", "updateButtons"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('canBeClosed%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_updateVariablesList'),
smalltalk.method({
selector: unescape('updateVariablesList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@variablesList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_keys", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);(function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_", [each]);})]);})(li);return ((($receiver = smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));})]);})]);
return self;},
args: [],
source: unescape('updateVariablesList%0A%09variablesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09self%20variables%20keys%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%09%09li%20%3A%3D%20html%20li.%0A%09%09%09li%0A%09%09%09%09with%3A%20each%3B%0A%09%09%09%09onClick%3A%20%5Bself%20selectVariable%3A%20each%5D.%0A%09%09%09self%20selectedVariable%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09%09%09li%20class%3A%20%27selected%27%5D%5D%5D'),
messageSends: ["contents:", "do:", "keys", "variables", "li", "with:", "onClick:", "selectVariable:", "ifTrue:", unescape("%3D"), "selectedVariable", "class:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_selectVariable_'),
smalltalk.method({
selector: unescape('selectVariable%3A'),
category: 'updating',
fn: function (aString){
var self=this;
smalltalk.send(self, "_selectedVariable_", [aString]);
(function($rec){smalltalk.send($rec, "_updateVariablesList", []);smalltalk.send($rec, "_updateValueTextarea", []);return smalltalk.send($rec, "_updateButtons", []);})(self);
return self;},
args: ["aString"],
source: unescape('selectVariable%3A%20aString%0A%09self%20selectedVariable%3A%20aString.%0A%09self%20%0A%09%09updateVariablesList%3B%0A%09%09updateValueTextarea%3B%0A%09%09updateButtons'),
messageSends: ["selectedVariable:", "updateVariablesList", "updateValueTextarea", "updateButtons"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_updateValueTextarea'),
smalltalk.method({
selector: unescape('updateValueTextarea'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@valueTextarea'], "_asJQuery", []), "_val_", [((($receiver = smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "";})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_printString", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "";}), (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_printString", []);})]))]);
return self;},
args: [],
source: unescape('updateValueTextarea%0A%09valueTextarea%20asJQuery%20val%3A%20%28self%20selectedVariable%20isNil%0A%09%09ifTrue%3A%20%5B%27%27%5D%0A%09%09ifFalse%3A%20%5B%28self%20variables%20at%3A%20self%20selectedVariable%29%20printString%5D%29'),
messageSends: ["val:", "asJQuery", "ifTrue:ifFalse:", "isNil", "selectedVariable", "printString", "at:", "variables"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_updateButtons'),
smalltalk.method({
selector: unescape('updateButtons'),
category: 'updating',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "_notNil", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@diveButton'], "_at_put_", ["disabled", true]);})() : (function(){return smalltalk.send(self['@diveButton'], "_removeAt_", ["disabled"]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@diveButton'], "_at_put_", ["disabled", true]);}), (function(){return smalltalk.send(self['@diveButton'], "_removeAt_", ["disabled"]);})]));
return self;},
args: [],
source: unescape('updateButtons%0A%09%28self%20selectedVariable%20notNil%20and%3A%20%5B%28self%20variables%20at%3A%20self%20selectedVariable%29%20notNil%5D%29%0A%09%09ifFalse%3A%20%5BdiveButton%20at%3A%20%27disabled%27%20put%3A%20true%5D%20%0A%09%09ifTrue%3A%20%5BdiveButton%20removeAt%3A%20%27disabled%27%5D'),
messageSends: ["ifFalse:ifTrue:", "and:", "notNil", "selectedVariable", "at:", "variables", "at:put:", "removeAt:"],
referencedClasses: []
}),
smalltalk.Inspector);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_inspect_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["anObject"],
source: unescape('on%3A%20anObject%0A%09%5Eself%20new%0A%09%09inspect%3A%20anObject%3B%0A%09%09yourself'),
messageSends: ["inspect:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Inspector.klass);


smalltalk.addClass('ReferencesBrowser', smalltalk.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList'], 'IDE');
smalltalk.addMethod(
unescape('_implementors'),
smalltalk.method({
selector: unescape('implementors'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@implementors']) == nil || $receiver == undefined) ? (function(){return self['@implementors']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('implementors%0A%09%5Eimplementors%20ifNil%3A%20%5Bimplementors%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%5BReferences%5D");
return self;},
args: [],
source: unescape('label%0A%09%5E%27%5BReferences%5D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_senders'),
smalltalk.method({
selector: unescape('senders'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@senders']) == nil || $receiver == undefined) ? (function(){return self['@senders']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('senders%0A%09%5Esenders%20ifNil%3A%20%5Bsenders%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_classesAndMetaclasses'),
smalltalk.method({
selector: unescape('classesAndMetaclasses'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]);
return self;},
args: [],
source: unescape('classesAndMetaclasses%0A%09%5ESmalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29'),
messageSends: [unescape("%2C"), "classes", "current", "collect:", "class"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_referencedClasses'),
smalltalk.method({
selector: unescape('referencedClasses'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@referencedClasses']) == nil || $receiver == undefined) ? (function(){return self['@referencedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('referencedClasses%0A%09%5EreferencedClasses%20ifNil%3A%20%5BreferencedClasses%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_openBrowserOn_'),
smalltalk.method({
selector: unescape('openBrowserOn%3A'),
category: 'actions',
fn: function (aMethod){
var self=this;
var browser=nil;
browser=smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [((($receiver = smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_instanceClass", []);})() : (function(){return smalltalk.send(aMethod, "_methodClass", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_instanceClass", []);}), (function(){return smalltalk.send(aMethod, "_methodClass", []);})]))]);
((($receiver = smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(browser, "_selectTab_", ["class"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(browser, "_selectTab_", ["class"]);})]));
(function($rec){smalltalk.send($rec, "_selectProtocol_", [smalltalk.send(aMethod, "_category", [])]);return smalltalk.send($rec, "_selectMethod_", [aMethod]);})(browser);
return self;},
args: ["aMethod"],
source: unescape('openBrowserOn%3A%20aMethod%0A%20%20%20%20%20%20%20%7C%20browser%20%7C%0A%20%20%20%20%20%20%20browser%20%3A%3D%20Browser%20openOn%3A%20%28aMethod%20methodClass%20isMetaclass%20%0A%09%09ifTrue%3A%20%5BaMethod%20methodClass%20instanceClass%5D%20ifFalse%3A%20%5BaMethod%20methodClass%5D%29.%0A%20%20%20%20%20%20%20aMethod%20methodClass%20isMetaclass%20ifTrue%3A%20%5Bbrowser%20selectTab%3A%20%23class%5D.%0A%20%20%20%20%20%20%20browser%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectProtocol%3A%20aMethod%20category%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectMethod%3A%20aMethod'),
messageSends: ["openOn:", "ifTrue:ifFalse:", "isMetaclass", "methodClass", "instanceClass", "ifTrue:", "selectTab:", "selectProtocol:", "category", "selectMethod:"],
referencedClasses: ["Browser"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_searchReferencesFor_'),
smalltalk.method({
selector: unescape('searchReferencesFor%3A'),
category: 'actions',
fn: function (aString){
var self=this;
self['@selector']=aString;
self['@implementors']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@senders']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@referencedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []);
((($receiver = smalltalk.send(self['@selector'], "_match_", [unescape("%5E%5BA-Z%5D")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_searchSelectorReferencesFor_", [self['@selector']]);})() : (function(){return smalltalk.send(self, "_searchReferencedClassesFor_", [self['@selector']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_searchSelectorReferencesFor_", [self['@selector']]);}), (function(){return smalltalk.send(self, "_searchReferencedClassesFor_", [self['@selector']]);})]));
return self;},
args: ["aString"],
source: unescape('searchReferencesFor%3A%20aString%0A%09selector%20%3A%3D%20aString.%0A%09implementors%20%3A%3D%20Array%20new.%0A%09senders%20%3A%3D%20Array%20new.%0A%09referencedClasses%20%3A%3D%20Array%20new.%0A%09%28selector%20match%3A%20%27%5E%5BA-Z%5D%27%29%20%0A%09%09ifFalse%3A%20%5Bself%20searchSelectorReferencesFor%3A%20selector%5D%0A%09%09ifTrue%3A%20%5Bself%20searchReferencedClassesFor%3A%20selector%5D'),
messageSends: ["new", "ifFalse:ifTrue:", "match:", "searchSelectorReferencesFor:", "searchReferencedClassesFor:"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_search_'),
smalltalk.method({
selector: unescape('search%3A'),
category: 'actions',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_searchReferencesFor_", [aString]);smalltalk.send($rec, "_updateImplementorsList", []);smalltalk.send($rec, "_updateSendersList", []);return smalltalk.send($rec, "_updateReferencedClassesList", []);})(self);
return self;},
args: ["aString"],
source: unescape('search%3A%20aString%0A%09self%20%0A%09%09searchReferencesFor%3A%20aString%3B%0A%09%09updateImplementorsList%3B%0A%09%09updateSendersList%3B%0A%09%09updateReferencedClassesList'),
messageSends: ["searchReferencesFor:", "updateImplementorsList", "updateSendersList", "updateReferencedClassesList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_searchReferencedClassesFor_'),
smalltalk.method({
selector: unescape('searchReferencedClassesFor%3A'),
category: 'actions',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(value){return ((($receiver = smalltalk.send(smalltalk.send(value, "_referencedClasses", []), "_includes_", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_add_", [value]);})]));})]);})]);
return self;},
args: ["aString"],
source: unescape('searchReferencedClassesFor%3A%20aString%0A%09self%20classesAndMetaclasses%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20values%20do%3A%20%5B%3Avalue%20%7C%0A%09%09%09%28value%20referencedClasses%20includes%3A%20selector%29%20ifTrue%3A%20%5B%0A%09%09%09%09self%20referencedClasses%20add%3A%20value%5D%5D%5D'),
messageSends: ["do:", "classesAndMetaclasses", "values", "methodDictionary", "ifTrue:", "includes:", "referencedClasses", "add:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_searchSelectorReferencesFor_'),
smalltalk.method({
selector: unescape('searchSelectorReferencesFor%3A'),
category: 'actions',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [(function(each){smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_keysAndValuesDo_", [(function(key, value){return ((($receiver = smalltalk.send(key, "__eq", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_implementors", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_implementors", []), "_add_", [value]);})]));})]);return smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_keysAndValuesDo_", [(function(key, value){return ((($receiver = smalltalk.send(smalltalk.send(value, "_messageSends", []), "_includes_", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_senders", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_senders", []), "_add_", [value]);})]));})]);})]);
return self;},
args: ["aString"],
source: unescape('searchSelectorReferencesFor%3A%20aString%0A%09self%20classesAndMetaclasses%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09each%20methodDictionary%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%20%0A%09%09%09key%20%3D%20selector%20ifTrue%3A%20%5Bself%20implementors%20add%3A%20value%5D%5D.%0A%09%09each%20methodDictionary%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%20%0A%09%09%09%28value%20messageSends%20includes%3A%20selector%29%20ifTrue%3A%20%5B%0A%09%09%09%09self%20senders%20add%3A%20value%5D%5D%5D'),
messageSends: ["do:", "classesAndMetaclasses", "keysAndValuesDo:", "methodDictionary", "ifTrue:", unescape("%3D"), "add:", "implementors", "includes:", "messageSends", "senders"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
self['@selector']="";
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09selector%20%3A%3D%20%27%27'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_setInputEvents'),
smalltalk.method({
selector: unescape('setInputEvents'),
category: 'private',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_onKeyUp_", [(function(){return self['@timer']=smalltalk.send((function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}), "_valueWithTimeout_", [(100)]);})]);return smalltalk.send($rec, "_onKeyDown_", [(function(){return (($receiver = self['@timer']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@timer'], "_clearTimeout", []);})() : nil;})]);})(self['@input']);
return self;},
args: [],
source: unescape('setInputEvents%0A%09input%0A%09%09onKeyUp%3A%20%5Btimer%20%3A%3D%20%5Bself%20search%3A%20input%20asJQuery%20val%5D%20valueWithTimeout%3A%20100%5D%3B%0A%09%09onKeyDown%3A%20%5Btimer%20ifNotNil%3A%20%5Btimer%20clearTimeout%5D%5D'),
messageSends: ["onKeyUp:", "valueWithTimeout:", "search:", "val", "asJQuery", "onKeyDown:", "ifNotNil:", "clearTimeout"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderInputOn_", [html]);smalltalk.send($rec, "_renderImplementorsOn_", [html]);smalltalk.send($rec, "_renderSendersOn_", [html]);return smalltalk.send($rec, "_renderReferencedClassesOn_", [html]);})(self);
return self;},
args: ["html"],
source: unescape('renderBoxOn%3A%20html%0A%09self%20%0A%09%09renderInputOn%3A%20html%3B%0A%09%09renderImplementorsOn%3A%20html%3B%0A%09%09renderSendersOn%3A%20html%3B%0A%09%09renderReferencedClassesOn%3A%20html'),
messageSends: ["renderInputOn:", "renderImplementorsOn:", "renderSendersOn:", "renderReferencedClassesOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderInputOn_'),
smalltalk.method({
selector: unescape('renderInputOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@input']=(function($rec){smalltalk.send($rec, "_class_", ["implementors"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_input", []));
smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val_", [self['@selector']]);
smalltalk.send(self, "_setInputEvents", []);
return self;},
args: ["html"],
source: unescape('renderInputOn%3A%20html%0A%09input%20%3A%3D%20html%20input%20%0A%09%09class%3A%20%27implementors%27%3B%0A%09%09yourself.%0A%09input%20asJQuery%20val%3A%20selector.%0A%09self%20setInputEvents'),
messageSends: ["class:", "yourself", "input", "val:", "asJQuery", "setInputEvents"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderImplementorsOn_'),
smalltalk.method({
selector: unescape('renderImplementorsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@implementorsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column implementors"]);
smalltalk.send(self, "_updateImplementorsList", []);
return self;},
args: ["html"],
source: unescape('renderImplementorsOn%3A%20html%0A%09implementorsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20implementors%27.%0A%09self%20updateImplementorsList'),
messageSends: ["class:", "ul", "updateImplementorsList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderSendersOn_'),
smalltalk.method({
selector: unescape('renderSendersOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@sendersList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column senders"]);
smalltalk.send(self, "_updateSendersList", []);
return self;},
args: ["html"],
source: unescape('renderSendersOn%3A%20html%0A%09sendersList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20senders%27.%0A%09self%20updateSendersList'),
messageSends: ["class:", "ul", "updateSendersList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderReferencedClassesOn_'),
smalltalk.method({
selector: unescape('renderReferencedClassesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@referencedClassesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column referenced_classes"]);
smalltalk.send(self, "_updateReferencedClassesList", []);
return self;},
args: ["html"],
source: unescape('renderReferencedClassesOn%3A%20html%0A%09referencedClassesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20referenced_classes%27.%0A%09self%20updateReferencedClassesList'),
messageSends: ["class:", "ul", "updateReferencedClassesList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('canBeClosed%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_updateImplementorsList'),
smalltalk.method({
selector: unescape('updateImplementorsList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@implementorsList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Implementors%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_implementors", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_implementors", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(li);})]);})]);
return self;},
args: [],
source: unescape('updateImplementorsList%0A%20%20%20%20implementorsList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09html%20li%0A%09%09class%3A%20%27column_label%27%3B%20%0A%09%09with%3A%20%27Implementors%20%28%27%2C%20self%20implementors%20size%20asString%2C%20%27%29%27%3B%0A%09%09style%3A%20%27font-weight%3A%20bold%27.%0A%09self%20implementors%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20li%0A%09%09with%3A%20%28each%20methodClass%20asString%2C%20%27%20%3E%3E%20%27%2C%20self%20selector%29%3B%0A%09%09onClick%3A%20%5Bself%20openBrowserOn%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "class:", "with:", unescape("%2C"), "asString", "size", "implementors", "style:", "li", "do:", "methodClass", "selector", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_updateSendersList'),
smalltalk.method({
selector: unescape('updateSendersList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@sendersList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Senders%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_senders", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_senders", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);})]);
return self;},
args: [],
source: unescape('updateSendersList%0A%09sendersList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09html%20li%0A%09%09class%3A%20%27column_label%27%3B%20%0A%09%09with%3A%20%27Senders%20%28%27%2C%20self%20senders%20size%20asString%2C%20%27%29%27%3B%0A%09%09style%3A%20%27font-weight%3A%20bold%27.%0A%09self%20senders%20do%3A%20%5B%3Aeach%20%7C%0A%09%09html%20li%0A%09%09%09with%3A%20%28each%20methodClass%20asString%2C%20%27%20%3E%3E%20%27%2C%20each%20selector%29%3B%0A%09%09%09onClick%3A%20%5Bself%20openBrowserOn%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "class:", "with:", unescape("%2C"), "asString", "size", "senders", "style:", "li", "do:", "methodClass", "selector", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_updateReferencedClassesList'),
smalltalk.method({
selector: unescape('updateReferencedClassesList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@referencedClassesList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Class%20references%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);})]);
return self;},
args: [],
source: unescape('updateReferencedClassesList%0A%09referencedClassesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09html%20li%0A%09%09class%3A%20%27column_label%27%3B%20%0A%09%09with%3A%20%27Class%20references%20%28%27%2C%20self%20referencedClasses%20size%20asString%2C%20%27%29%27%3B%0A%09%09style%3A%20%27font-weight%3A%20bold%27.%0A%09self%20referencedClasses%20do%3A%20%5B%3Aeach%20%7C%0A%09%09html%20li%0A%09%09%09with%3A%20%28each%20methodClass%20asString%2C%20%27%20%3E%3E%20%27%2C%20each%20selector%29%3B%0A%09%09%09onClick%3A%20%5Bself%20openBrowserOn%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "class:", "with:", unescape("%2C"), "asString", "size", "referencedClasses", "style:", "li", "do:", "methodClass", "selector", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);


smalltalk.addMethod(
unescape('_search_'),
smalltalk.method({
selector: unescape('search%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_searchReferencesFor_", [aString]);return smalltalk.send($rec, "_open", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape('search%3A%20aString%0A%09%5Eself%20new%0A%09%09searchReferencesFor%3A%20aString%3B%0A%09%09open'),
messageSends: ["searchReferencesFor:", "open", "new"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
unescape('_val'),
smalltalk.method({
selector: unescape('val'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getValue", []);
return self;},
args: [],
source: unescape('val%0A%20%20%20%20%5Eeditor%20getValue'),
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_val_'),
smalltalk.method({
selector: unescape('val%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self['@editor'], "_setValue_", [aString]);
return self;},
args: ["aString"],
source: unescape('val%3A%20aString%0A%20%20%20%20editor%20setValue%3A%20aString'),
messageSends: ["setValue:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_currentLine'),
smalltalk.method({
selector: unescape('currentLine'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursor", []), "_line", [])]);
return self;},
args: [],
source: unescape('currentLine%0A%20%20%20%20%5Eeditor%20getLine%3A%20%28editor%20getCursor%20line%29'),
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selection'),
smalltalk.method({
selector: unescape('selection'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getSelection", []);
return self;},
args: [],
source: unescape('selection%0A%09%5Eeditor%20getSelection'),
messageSends: ["getSelection"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selectionEnd'),
smalltalk.method({
selector: unescape('selectionEnd'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionEnd", []);
return self;},
args: [],
source: unescape('selectionEnd%0A%20%20%20%5Etextarea%20element%20selectionEnd'),
messageSends: ["selectionEnd", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selectionStart'),
smalltalk.method({
selector: unescape('selectionStart'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionStart", []);
return self;},
args: [],
source: unescape('selectionStart%0A%20%20%20%5Etextarea%20element%20selectionStart'),
messageSends: ["selectionStart", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selectionStart_'),
smalltalk.method({
selector: unescape('selectionStart%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionStart_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('selectionStart%3A%20anInteger%0A%20%20%20textarea%20element%20selectionStart%3A%20anInteger'),
messageSends: ["selectionStart:", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selectionEnd_'),
smalltalk.method({
selector: unescape('selectionEnd%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionEnd_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('selectionEnd%3A%20anInteger%0A%20%20%20textarea%20element%20selectionEnd%3A%20anInteger'),
messageSends: ["selectionEnd:", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_setEditorOn_'),
smalltalk.method({
selector: unescape('setEditorOn%3A'),
category: 'accessing',
fn: function (aTextarea){
var self=this;
self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'jtalk',
                lineNumbers: true,
                enterMode: 'classic',
                matchBrackets: true,
                electricChars: false
	});
return self;},
args: ["aTextarea"],
source: unescape('setEditorOn%3A%20aTextarea%0A%09%3Cself%5B%27@editor%27%5D%20%3D%20CodeMirror.fromTextArea%28aTextarea%2C%20%7B%0A%09%09theme%3A%20%27jtalk%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineNumbers%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enterMode%3A%20%27classic%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20matchBrackets%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20electricChars%3A%20false%0A%09%7D%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_editor'),
smalltalk.method({
selector: unescape('editor'),
category: 'accessing',
fn: function (){
var self=this;
return self['@editor'];
return self;},
args: [],
source: unescape('editor%0A%09%5Eeditor'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@receiver']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.DoIt || DoIt), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('receiver%0A%09%5Ereceiver%20ifNil%3A%20%5BDoIt%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
self['@receiver']=anObject;
return self;},
args: ["anObject"],
source: unescape('receiver%3A%20anObject%0A%09receiver%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_onDoIt_'),
smalltalk.method({
selector: unescape('onDoIt%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
self['@onDoIt']=aBlock;
return self;},
args: ["aBlock"],
source: unescape('onDoIt%3A%20aBlock%0A%09onDoIt%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_onDoIt'),
smalltalk.method({
selector: unescape('onDoIt'),
category: 'accessing',
fn: function (){
var self=this;
return self['@onDoIt'];
return self;},
args: [],
source: unescape('onDoIt%0A%09%5EonDoIt'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_currentLineOrSelection'),
smalltalk.method({
selector: unescape('currentLineOrSelection'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self['@editor'], "_somethingSelected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_currentLine", []);})() : (function(){return smalltalk.send(self, "_selection", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_currentLine", []);}), (function(){return smalltalk.send(self, "_selection", []);})]));
return self;},
args: [],
source: unescape('currentLineOrSelection%0A%20%20%20%20%5Eeditor%20somethingSelected%0A%09ifFalse%3A%20%5Bself%20currentLine%5D%0A%09ifTrue%3A%20%5Bself%20selection%5D'),
messageSends: ["ifFalse:ifTrue:", "somethingSelected", "currentLine", "selection"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_val_", [""]);
return self;},
args: [],
source: unescape('clear%0A%20%20%20%20%20%20self%20val%3A%20%27%27'),
messageSends: ["val:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_doIt'),
smalltalk.method({
selector: unescape('doIt'),
category: 'actions',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(self, "_eval_", [smalltalk.send(self, "_currentLineOrSelection", [])]);
(($receiver = smalltalk.send(self, "_onDoIt", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_onDoIt", []), "_value", []);})() : nil;
return result;
return self;},
args: [],
source: unescape('doIt%0A%20%20%20%20%7C%20result%20%7C%0A%20%20%20%20result%20%3A%3D%20self%20eval%3A%20self%20currentLineOrSelection.%0A%20%20%20%20self%20onDoIt%20ifNotNil%3A%20%5Bself%20onDoIt%20value%5D.%0A%20%20%20%20%5Eresult'),
messageSends: ["eval:", "currentLineOrSelection", "ifNotNil:", "onDoIt", "value"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_eval_'),
smalltalk.method({
selector: unescape('eval%3A'),
category: 'actions',
fn: function (aString){
var self=this;
try{var compiler=nil;
compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []);
smalltalk.send((function(){return smalltalk.send(compiler, "_parseExpression_", [aString]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return (function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(ex, "_messageText", [])])}})})();})]);
(function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send(smalltalk.send(smalltalk.send(compiler, "_load_forClass_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")]), (smalltalk.DoIt || DoIt)]), "_fn", []), "_applyTo_arguments_", [smalltalk.send(self, "_receiver", []), []])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_eval_'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('eval%3A%20aString%0A%09%7C%20compiler%20%20%7C%0A%09compiler%20%3A%3D%20Compiler%20new.%0A%09%5Bcompiler%20parseExpression%3A%20aString%5D%20on%3A%20Error%20do%3A%20%5B%3Aex%20%7C%0A%09%09%5Ewindow%20alert%3A%20ex%20messageText%5D.%0A%09%5E%28compiler%20load%3A%20%27doIt%20%5E%5B%27%2C%20aString%2C%20%27%5D%20value%27%20forClass%3A%20DoIt%29%20fn%20applyTo%3A%20self%20receiver%20arguments%3A%20%23%28%29'),
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "applyTo:arguments:", "fn", "load:forClass:", unescape("%2C"), "receiver"],
referencedClasses: ["Compiler", "Error", "DoIt"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_handleKeyDown_'),
smalltalk.method({
selector: unescape('handleKeyDown%3A'),
category: 'actions',
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
return self;},
args: ["anEvent"],
source: unescape('handleKeyDown%3A%20anEvent%0A%20%20%20%20%3Cif%28anEvent.ctrlKey%29%20%7B%0A%09%09if%28anEvent.keyCode%20%3D%3D%3D%2080%29%20%7B%20//ctrl+p%0A%09%09%09self._printIt%28%29%3B%0A%09%09%09anEvent.preventDefault%28%29%3B%0A%09%09%09return%20false%3B%0A%09%09%7D%0A%09%09if%28anEvent.keyCode%20%3D%3D%3D%2068%29%20%7B%20//ctrl+d%0A%09%09%09self._doIt%28%29%3B%0A%09%09%09anEvent.preventDefault%28%29%3B%0A%09%09%09return%20false%3B%0A%09%09%7D%0A%09%09if%28anEvent.keyCode%20%3D%3D%3D%2073%29%20%7B%20//ctrl+i%0A%09%09%09self._inspectIt%28%29%3B%0A%09%09%09anEvent.preventDefault%28%29%3B%0A%09%09%09return%20false%3B%0A%09%09%7D%0A%09%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_inspectIt'),
smalltalk.method({
selector: unescape('inspectIt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_doIt", []), "_inspect", []);
return self;},
args: [],
source: unescape('inspectIt%0A%20%20%20%20self%20doIt%20inspect'),
messageSends: ["inspect", "doIt"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_print_'),
smalltalk.method({
selector: unescape('print%3A'),
category: 'actions',
fn: function (aString){
var self=this;
var start=nil;
var stop=nil;
start=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
stop=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(start, "_at_put_", ["line", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_line", [])]);
smalltalk.send(start, "_at_put_", ["ch", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_ch", [])]);
smalltalk.send(stop, "_at_put_", ["line", smalltalk.send(start, "_at_", ["line"])]);
smalltalk.send(stop, "_at_put_", ["ch", ((($receiver = ((($receiver = smalltalk.send(start, "_at_", ["ch"])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])]))).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)]))]);
smalltalk.send(self['@editor'], "_replaceSelection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@editor'], "_getSelection", []), "__comma", [" "]), "__comma", [aString]), "__comma", [" "])]);
smalltalk.send(self['@editor'], "_setCursor_", [smalltalk.send(self['@editor'], "_getCursor_", [true])]);
smalltalk.send(self['@editor'], "_setSelection_end_", [stop, start]);
return self;},
args: ["aString"],
source: unescape('print%3A%20aString%0A%09%7C%20start%20stop%20%7C%0A%09start%20%3A%3D%20Dictionary%20new.%0A%09stop%20%3A%3D%20Dictionary%20new.%0A%09start%20at%3A%20%27line%27%20put%3A%20%28editor%20getCursor%3A%20false%29%20line.%0A%09start%20at%3A%20%27ch%27%20put%3A%20%28editor%20getCursor%3A%20false%29%20ch.%0A%09stop%20at%3A%20%27line%27%20put%3A%20%28start%20at%3A%20%27line%27%29.%0A%09stop%20at%3A%20%27ch%27%20put%3A%20%28%28start%20at%3A%20%27ch%27%29%20+%20aString%20size%20+%202%29.%0A%09editor%20replaceSelection%3A%20%28editor%20getSelection%2C%20%27%20%27%2C%20aString%2C%20%27%20%27%29.%0A%09editor%20setCursor%3A%20%28editor%20getCursor%3A%20true%29.%0A%09editor%20setSelection%3A%20stop%20end%3A%20start'),
messageSends: ["new", "at:put:", "line", "getCursor:", "ch", "at:", unescape("+"), "size", "replaceSelection:", unescape("%2C"), "getSelection", "setCursor:", "setSelection:end:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_printIt'),
smalltalk.method({
selector: unescape('printIt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_print_", [smalltalk.send(smalltalk.send(self, "_doIt", []), "_printString", [])]);
return self;},
args: [],
source: unescape('printIt%0A%20%20%20%20self%20print%3A%20self%20doIt%20printString'),
messageSends: ["print:", "printString", "doIt"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_fileIn'),
smalltalk.method({
selector: unescape('fileIn'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_currentLineOrSelection", []), "_readStream", [])]);
return self;},
args: [],
source: unescape('fileIn%0A%20%20%20%20Importer%20new%20import%3A%20self%20currentLineOrSelection%20readStream'),
messageSends: ["import:", "new", "readStream", "currentLineOrSelection"],
referencedClasses: ["Importer"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_onKeyUp_'),
smalltalk.method({
selector: unescape('onKeyUp%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@div'], "_onKeyUp_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onKeyUp%3A%20aBlock%0A%09div%20onKeyUp%3A%20aBlock'),
messageSends: ["onKeyUp:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_onKeyDown_'),
smalltalk.method({
selector: unescape('onKeyDown%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@div'], "_onKeyDown_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onKeyDown%3A%20aBlock%0A%09div%20onKeyDown%3A%20aBlock'),
messageSends: ["onKeyDown:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var textarea=nil;
self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["source"]);
smalltalk.send(self['@div'], "_with_", [(function(){return textarea=smalltalk.send(html, "_textarea", []);})]);
smalltalk.send(self, "_setEditorOn_", [smalltalk.send(textarea, "_element", [])]);
smalltalk.send(self['@div'], "_onKeyDown_", [(function(e){return smalltalk.send(self, "_handleKeyDown_", [e]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%20%20%20%20%7C%20textarea%20%7C%0A%20%20%20%20div%20%3A%3D%20html%20div%20class%3A%20%27source%27.%0A%20%20%20%20div%20with%3A%20%5Btextarea%20%3A%3D%20html%20textarea%5D.%0A%20%20%20%20self%20setEditorOn%3A%20textarea%20element.%0A%20%20%20%20div%20onKeyDown%3A%20%5B%3Ae%20%7C%20self%20handleKeyDown%3A%20e%5D'),
messageSends: ["class:", "div", "with:", "textarea", "setEditorOn:", "element", "onKeyDown:", "handleKeyDown:"],
referencedClasses: []
}),
smalltalk.SourceArea);



smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedPackage", []);
return self;},
args: [],
source: unescape('category%0A%09%5Eself%20browser%20selectedPackage'),
messageSends: ["selectedPackage", "browser"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_nodes'),
smalltalk.method({
selector: unescape('nodes'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@nodes']) == nil || $receiver == undefined) ? (function(){return self['@nodes']=smalltalk.send(self, "_getNodes", []);})() : $receiver;
return self['@nodes'];
return self;},
args: [],
source: unescape('nodes%0A%09nodes%20ifNil%3A%20%5Bnodes%20%3A%3D%20self%20getNodes%5D.%0A%09%5Enodes'),
messageSends: ["ifNil:", "getNodes"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_browser'),
smalltalk.method({
selector: unescape('browser'),
category: 'accessing',
fn: function (){
var self=this;
return self['@browser'];
return self;},
args: [],
source: unescape('browser%0A%09%5Ebrowser'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_browser_'),
smalltalk.method({
selector: unescape('browser%3A'),
category: 'accessing',
fn: function (aBrowser){
var self=this;
self['@browser']=aBrowser;
return self;},
args: ["aBrowser"],
source: unescape('browser%3A%20aBrowser%0A%09browser%20%3A%3D%20aBrowser'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_getNodes'),
smalltalk.method({
selector: unescape('getNodes'),
category: 'accessing',
fn: function (){
var self=this;
var classes=nil;
var children=nil;
var others=nil;
classes=smalltalk.send(smalltalk.send(self, "_browser", []), "_classes", []);
children=[];
others=[];
smalltalk.send(classes, "_do_", [(function(each){return ((($receiver = smalltalk.send(classes, "_includes_", [smalltalk.send(each, "_superclass", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(children, "_add_", [each]);})() : (function(){return smalltalk.send(others, "_add_", [each]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(children, "_add_", [each]);}), (function(){return smalltalk.send(others, "_add_", [each]);})]));})]);
return smalltalk.send(children, "_collect_", [(function(each){return smalltalk.send((smalltalk.ClassesListNode || ClassesListNode), "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, (0)]);})]);
return self;},
args: [],
source: unescape('getNodes%0A%09%7C%20classes%20children%20others%20%7C%0A%09classes%20%3A%3D%20self%20browser%20classes.%0A%09children%20%3A%3D%20%23%28%29.%0A%09others%20%3A%3D%20%23%28%29.%0A%09classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%28classes%20includes%3A%20each%20superclass%29%0A%09%09%09ifFalse%3A%20%5Bchildren%20add%3A%20each%5D%0A%09%09%09ifTrue%3A%20%5Bothers%20add%3A%20each%5D%5D.%0A%09%5Echildren%20collect%3A%20%5B%3Aeach%20%7C%0A%09%09ClassesListNode%20on%3A%20each%20browser%3A%20self%20browser%20classes%3A%20others%20level%3A%200%5D'),
messageSends: ["classes", "browser", "do:", "ifFalse:ifTrue:", "includes:", "superclass", "add:", "collect:", "on:browser:classes:level:"],
referencedClasses: ["ClassesListNode"]
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_resetNodes'),
smalltalk.method({
selector: unescape('resetNodes'),
category: 'accessing',
fn: function (){
var self=this;
self['@nodes']=nil;
return self;},
args: [],
source: unescape('resetNodes%0A%09nodes%20%3A%3D%20nil'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@ul']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column browser classes"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_ul", []));
smalltalk.send(self, "_updateNodes", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09ul%20%3A%3D%20html%20ul%0A%09%09class%3A%20%27jt_column%20browser%20classes%27%3B%0A%09%09yourself.%0A%09self%20updateNodes'),
messageSends: ["class:", "yourself", "ul", "updateNodes"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_updateNodes'),
smalltalk.method({
selector: unescape('updateNodes'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_renderOn_", [html]);})]);})]);
return self;},
args: [],
source: unescape('updateNodes%0A%09ul%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09self%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%09each%20renderOn%3A%20html%5D%5D'),
messageSends: ["contents:", "do:", "nodes", "renderOn:"],
referencedClasses: []
}),
smalltalk.ClassesList);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'instance creation',
fn: function (aBrowser){
var self=this;
return (function($rec){smalltalk.send($rec, "_browser_", [aBrowser]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aBrowser"],
source: unescape('on%3A%20aBrowser%0A%09%5Eself%20new%20%0A%09%09browser%3A%20aBrowser%3B%20%0A%09%09yourself'),
messageSends: ["browser:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: '',
fn: function (html){
var self=this;
var li=nil;
var cssClass=nil;
cssClass="";
li=smalltalk.send(smalltalk.send(html, "_li", []), "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectClass_", [smalltalk.send(self, "_theClass", [])]);})]);
smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_html_", [smalltalk.send(self, "_label", [])]);
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedClass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return cssClass=smalltalk.send(cssClass, "__comma", [" selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return cssClass=smalltalk.send(cssClass, "__comma", [" selected"]);})]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_comment", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return cssClass=smalltalk.send(cssClass, "__comma", [" commented"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return cssClass=smalltalk.send(cssClass, "__comma", [" commented"]);})]));
smalltalk.send(li, "_class_", [cssClass]);
smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_renderOn_", [html]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7C%20li%20cssClass%20%7C%0A%09cssClass%20%3A%3D%20%27%27.%0A%09li%20%3A%3D%20html%20li%20%0A%09%09onClick%3A%20%5Bself%20browser%20selectClass%3A%20self%20theClass%5D.%20%0A%09li%20asJQuery%20html%3A%20self%20label.%0A%0A%09self%20browser%20selectedClass%20%3D%20self%20theClass%20ifTrue%3A%20%20%5B%0A%09%09cssClass%20%3A%3D%20cssClass%2C%20%27%20selected%27%5D.%0A%0A%09self%20theClass%20comment%20isEmpty%20ifFalse%3A%20%5B%0A%09%09cssClass%20%3A%3D%20cssClass%2C%20%27%20commented%27%5D.%0A%0A%09li%20class%3A%20cssClass.%0A%0A%09self%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20renderOn%3A%20html%5D'),
messageSends: ["onClick:", "li", "selectClass:", "browser", "theClass", "html:", "asJQuery", "label", "ifTrue:", unescape("%3D"), "selectedClass", unescape("%2C"), "ifFalse:", "isEmpty", "comment", "class:", "do:", "nodes", "renderOn:"],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_nodes'),
smalltalk.method({
selector: unescape('nodes'),
category: 'accessing',
fn: function (){
var self=this;
return self['@nodes'];
return self;},
args: [],
source: unescape('nodes%0A%09%5Enodes'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_theClass'),
smalltalk.method({
selector: unescape('theClass'),
category: 'accessing',
fn: function (){
var self=this;
return self['@theClass'];
return self;},
args: [],
source: unescape('theClass%0A%09%5EtheClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_theClass_'),
smalltalk.method({
selector: unescape('theClass%3A'),
category: 'accessing',
fn: function (aClass){
var self=this;
self['@theClass']=aClass;
return self;},
args: ["aClass"],
source: unescape('theClass%3A%20aClass%0A%09theClass%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_browser'),
smalltalk.method({
selector: unescape('browser'),
category: 'accessing',
fn: function (){
var self=this;
return self['@browser'];
return self;},
args: [],
source: unescape('browser%0A%09%5Ebrowser'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_browser_'),
smalltalk.method({
selector: unescape('browser%3A'),
category: 'accessing',
fn: function (aBrowser){
var self=this;
self['@browser']=aBrowser;
return self;},
args: ["aBrowser"],
source: unescape('browser%3A%20aBrowser%0A%09browser%20%3A%3D%20aBrowser'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_level'),
smalltalk.method({
selector: unescape('level'),
category: 'accessing',
fn: function (){
var self=this;
return self['@level'];
return self;},
args: [],
source: unescape('level%0A%09%5Elevel'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_level_'),
smalltalk.method({
selector: unescape('level%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@level']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('level%3A%20anInteger%0A%09level%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
var str=nil;
str=smalltalk.send(smalltalk.send((smalltalk.String || String), "_new", []), "_writeStream", []);
smalltalk.send(smalltalk.send(self, "_level", []), "_timesRepeat_", [(function(){return smalltalk.send(str, "_nextPutAll_", [unescape("%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B")]);})]);
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", [])]);
return smalltalk.send(str, "_contents", []);
return self;},
args: [],
source: unescape('label%0A%09%7C%20str%20%7C%0A%09str%20%3A%3D%20String%20new%20writeStream.%0A%09self%20level%20timesRepeat%3A%20%5B%0A%09%09str%20nextPutAll%3A%20%27%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%27%5D.%0A%09str%20nextPutAll%3A%20self%20theClass%20name.%0A%09%5Estr%20contents'),
messageSends: ["writeStream", "new", "timesRepeat:", "level", "nextPutAll:", "name", "theClass", "contents"],
referencedClasses: ["String"]
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_getNodesFrom_'),
smalltalk.method({
selector: unescape('getNodesFrom%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
var children=nil;
var others=nil;
children=[];
others=[];
smalltalk.send(aCollection, "_do_", [(function(each){return ((($receiver = smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(children, "_add_", [each]);})() : (function(){return smalltalk.send(others, "_add_", [each]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(children, "_add_", [each]);}), (function(){return smalltalk.send(others, "_add_", [each]);})]));})]);
self['@nodes']=smalltalk.send(children, "_collect_", [(function(each){return smalltalk.send((smalltalk.ClassesListNode || ClassesListNode), "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, ((($receiver = smalltalk.send(self, "_level", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]);
return self;},
args: ["aCollection"],
source: unescape('getNodesFrom%3A%20aCollection%0A%09%7C%20children%20others%20%7C%0A%09children%20%3A%3D%20%23%28%29.%0A%09others%20%3A%3D%20%23%28%29.%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%28each%20superclass%20%3D%20self%20theClass%29%0A%09%09%09ifTrue%3A%20%5Bchildren%20add%3A%20each%5D%0A%09%09%09ifFalse%3A%20%5Bothers%20add%3A%20each%5D%5D.%0A%09nodes%3A%3D%20children%20collect%3A%20%5B%3Aeach%20%7C%0A%09%09ClassesListNode%20on%3A%20each%20browser%3A%20self%20browser%20classes%3A%20others%20level%3A%20self%20level%20+%201%5D'),
messageSends: ["do:", "ifTrue:ifFalse:", unescape("%3D"), "superclass", "theClass", "add:", "collect:", "on:browser:classes:level:", "browser", unescape("+"), "level"],
referencedClasses: ["ClassesListNode"]
}),
smalltalk.ClassesListNode);


smalltalk.addMethod(
unescape('_on_browser_classes_level_'),
smalltalk.method({
selector: unescape('on%3Abrowser%3Aclasses%3Alevel%3A'),
category: 'instance creation',
fn: function (aClass, aBrowser, aCollection, anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_theClass_", [aClass]);smalltalk.send($rec, "_browser_", [aBrowser]);smalltalk.send($rec, "_level_", [anInteger]);smalltalk.send($rec, "_getNodesFrom_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aClass", "aBrowser", "aCollection", "anInteger"],
source: unescape('on%3A%20aClass%20browser%3A%20aBrowser%20classes%3A%20aCollection%20level%3A%20anInteger%0A%09%5Eself%20new%0A%09%09theClass%3A%20aClass%3B%0A%09%09browser%3A%20aBrowser%3B%0A%09%09level%3A%20anInteger%3B%0A%09%09getNodesFrom%3A%20aCollection%3B%0A%09%09yourself'),
messageSends: ["theClass:", "browser:", "level:", "getNodesFrom:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
smalltalk.addMethod(
unescape('_error'),
smalltalk.method({
selector: unescape('error'),
category: 'accessing',
fn: function (){
var self=this;
return self['@error'];
return self;},
args: [],
source: unescape('error%0A%09%5Eerror'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_error_'),
smalltalk.method({
selector: unescape('error%3A'),
category: 'accessing',
fn: function (anError){
var self=this;
self['@error']=anError;
return self;},
args: ["anError"],
source: unescape('error%3A%20anError%0A%09error%20%3A%3D%20anError'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%5BDebugger%5D");
return self;},
args: [],
source: unescape('label%0A%09%5E%27%5BDebugger%5D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_method", [])) == nil || $receiver == undefined) ? (function(){return unescape("Method%20doesn%27t%20exist%21");})() : (function(){return smalltalk.send(smalltalk.send(self, "_method", []), "_source", []);})();
return self;},
args: [],
source: unescape('source%0A%09%5Eself%20method%20%0A%09%09ifNil%3A%20%5B%27Method%20doesn%27%27t%20exist%21%27%5D%0A%09%09ifNotNil%3A%20%5Bself%20method%20source%5D'),
messageSends: ["ifNil:ifNotNil:", "method", "source"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_method'),
smalltalk.method({
selector: unescape('method'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_methodAt_", [smalltalk.send(self['@selectedContext'], "_selector", [])]);
return self;},
args: [],
source: unescape('method%0A%09%5EselectedContext%20receiver%20class%20methodAt%3A%20selectedContext%20selector'),
messageSends: ["methodAt:", "class", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_method", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@selectedContext'], "_temps", []), "_collect_", [(function(each){return nil;})]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_method", []), "_arguments", []);})();
return self;},
args: [],
source: unescape('arguments%0A%09%5Eself%20method%20%0A%09%09ifNil%3A%20%5BselectedContext%20temps%20collect%3A%20%5B%3Aeach%20%7C%20nil%5D%5D%0A%09%09ifNotNil%3A%20%5Bself%20method%20arguments%5D'),
messageSends: ["ifNil:ifNotNil:", "method", "collect:", "temps", "arguments"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@selectedContext'], "_receiver", []);
return self;},
args: [],
source: unescape('receiver%0A%09%5EselectedContext%20receiver'),
messageSends: ["receiver"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_selectContext_'),
smalltalk.method({
selector: unescape('selectContext%3A'),
category: 'actions',
fn: function (aContext){
var self=this;
self['@selectedContext']=aContext;
self['@selectedVariable']=nil;
self['@selectedVariableName']=nil;
(function($rec){smalltalk.send($rec, "_updateContextsList", []);smalltalk.send($rec, "_updateSourceArea", []);smalltalk.send($rec, "_updateInspector", []);smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateStatus", []);})(self);
return self;},
args: ["aContext"],
source: unescape('selectContext%3A%20aContext%0A%09selectedContext%20%3A%3D%20aContext.%0A%09selectedVariable%20%3A%3D%20nil.%0A%09selectedVariableName%20%3A%3D%20nil.%0A%09self%20%0A%09%09updateContextsList%3B%0A%09%09updateSourceArea%3B%0A%09%09updateInspector%3B%0A%09%09updateVariablesList%3B%0A%09%09updateStatus'),
messageSends: ["updateContextsList", "updateSourceArea", "updateInspector", "updateVariablesList", "updateStatus"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_proceed'),
smalltalk.method({
selector: unescape('proceed'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_close", []);
smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_perform_withArguments_", [smalltalk.send(self['@selectedContext'], "_selector", []), smalltalk.send(self['@selectedContext'], "_temps", [])]);
return self;},
args: [],
source: unescape('proceed%0A%09self%20close.%0A%09selectedContext%20receiver%20perform%3A%20selectedContext%20selector%20withArguments%3A%20selectedContext%20temps'),
messageSends: ["close", "perform:withArguments:", "receiver", "selector", "temps"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
category: 'actions',
fn: function (){
var self=this;
var protocol=nil;
protocol=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_methodDictionary", []), "_at_", [smalltalk.send(self['@selectedContext'], "_selector", [])]), "_category", []);
smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_compile_category_", [smalltalk.send(self['@sourceArea'], "_val", []), protocol]);
smalltalk.send(self, "_updateStatus", []);
return self;},
args: [],
source: unescape('save%0A%09%7C%20protocol%20%7C%0A%09protocol%20%3A%3D%20%28selectedContext%20receiver%20class%20methodDictionary%20at%3A%20selectedContext%20selector%29%20category.%0A%09selectedContext%20receiver%20class%20compile%3A%20sourceArea%20val%20category%3A%20protocol.%0A%09self%20updateStatus'),
messageSends: ["category", "at:", "methodDictionary", "class", "receiver", "selector", "compile:category:", "val", "updateStatus"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_selectVariable_named_'),
smalltalk.method({
selector: unescape('selectVariable%3Anamed%3A'),
category: 'actions',
fn: function (anObject, aString){
var self=this;
self['@selectedVariable']=anObject;
self['@selectedVariableName']=aString;
smalltalk.send(self['@inspector'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(anObject, "_printString", [])]);})]);
smalltalk.send(self, "_updateVariablesList", []);
return self;},
args: ["anObject", "aString"],
source: unescape('selectVariable%3A%20anObject%20named%3A%20aString%0A%09selectedVariable%20%3A%3D%20anObject.%0A%09selectedVariableName%20%3A%3D%20aString.%0A%09inspector%20contents%3A%20%5B%3Ahtml%20%7C%20html%20with%3A%20anObject%20printString%5D.%0A%09self%20updateVariablesList'),
messageSends: ["contents:", "with:", "printString", "updateVariablesList"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_inspectSelectedVariable'),
smalltalk.method({
selector: unescape('inspectSelectedVariable'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@selectedVariable'], "_inspect", []);
return self;},
args: [],
source: unescape('inspectSelectedVariable%0A%09selectedVariable%20inspect'),
messageSends: ["inspect"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
smalltalk.send(self['@unsavedChanges'], "__eq", [false]);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09unsavedChanges%20%3D%20false'),
messageSends: ["initialize", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderTopPanelOn_'),
smalltalk.method({
selector: unescape('renderTopPanelOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@selectedContext']=smalltalk.send(smalltalk.send(self, "_error", []), "_context", []);
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["label"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_error", []), "_messageText", [])]);})(smalltalk.send(html, "_div", []));return self['@ul']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column debugger contexts"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(smalltalk.send(self, "_error", []), "_context", []), html]);})]);})(smalltalk.send(html, "_ul", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderTopPanelOn%3A%20html%0A%09selectedContext%20%3A%3D%20self%20error%20context.%0A%09html%20div%20%0A%09%09class%3A%20%27top%27%3B%20%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%20%0A%09%09%09%09class%3A%20%27label%27%3B%0A%09%09%09%09with%3A%20self%20error%20messageText.%0A%09%09%09ul%20%3A%3D%20html%20ul%20%0A%09%09%09%09class%3A%20%27jt_column%20debugger%20contexts%27%3B%0A%09%09%09%09with%3A%20%5Bself%20renderContext%3A%20self%20error%20context%20on%3A%20html%5D%5D'),
messageSends: ["context", "error", "class:", "with:", "messageText", "div", "renderContext:on:", "ul"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderContext_on_'),
smalltalk.method({
selector: unescape('renderContext%3Aon%3A'),
category: 'rendering',
fn: function (aContext, html){
var self=this;
var li=nil;
li=smalltalk.send(html, "_li", []);
((($receiver = smalltalk.send(self['@selectedContext'], "__eq", [aContext])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(aContext, "_asString", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectContext_", [aContext]);})]);})(li);
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(aContext, "_home", []), html]);})() : nil;
return self;},
args: ["aContext", "html"],
source: unescape('renderContext%3A%20aContext%20on%3A%20html%0A%09%7C%20li%20%7C%0A%09li%20%3A%3D%20html%20li.%0A%09selectedContext%20%3D%20aContext%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09li%20%0A%09%09with%3A%20aContext%20asString%3B%0A%09%09onClick%3A%20%5Bself%20selectContext%3A%20aContext%5D.%0A%09aContext%20home%20ifNotNil%3A%20%5Bself%20renderContext%3A%20aContext%20home%20on%3A%20html%5D'),
messageSends: ["li", "ifTrue:", unescape("%3D"), "class:", "with:", "asString", "onClick:", "selectContext:", "ifNotNil:", "home", "renderContext:on:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderBottomPanelOn_'),
smalltalk.method({
selector: unescape('renderBottomPanelOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode debugger"]);return smalltalk.send($rec, "_with_", [(function(){self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []);return smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
self['@ul2']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column debugger variables"]);
self['@inspector']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["jt_column debugger inspector"]);
smalltalk.send(self['@sourceArea'], "_onKeyUp_", [(function(){return smalltalk.send(self, "_updateStatus", []);})]);
return self;},
args: ["html"],
source: unescape('renderBottomPanelOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27jt_sourceCode%20debugger%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09sourceArea%20%3A%3D%20SourceArea%20new.%0A%09%09%09sourceArea%20renderOn%3A%20html%5D.%0A%09ul2%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20debugger%20variables%27.%0A%09inspector%20%3A%3D%20html%20div%20class%3A%20%27jt_column%20debugger%20inspector%27.%0A%09sourceArea%0A%09%09onKeyUp%3A%20%5Bself%20updateStatus%5D'),
messageSends: ["class:", "with:", "new", "renderOn:", "div", "ul", "onKeyUp:", "updateStatus"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@saveButton']=(function($rec){smalltalk.send($rec, "_with_", ["Save"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_save", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["Proceed"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_proceed", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["Abandon"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_close", []);})]);})(smalltalk.send(html, "_button", []));
self['@inspectButton']=(function($rec){smalltalk.send($rec, "_class_", ["jt_button debugger inspect"]);smalltalk.send($rec, "_with_", ["Inspect"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_inspectSelectedVariable", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_updateSourceArea", []);smalltalk.send($rec, "_updateStatus", []);smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateInspector", []);})(self);
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%09saveButton%20%3A%3D%20html%20button%0A%09%09with%3A%20%27Save%27%3B%0A%09%09onClick%3A%20%5Bself%20save%5D.%0A%09html%20button%0A%09%09with%3A%20%27DoIt%27%3B%0A%09%09onClick%3A%20%5BsourceArea%20doIt%5D.%0A%09html%20button%0A%09%09with%3A%20%27PrintIt%27%3B%0A%09%09onClick%3A%20%5BsourceArea%20printIt%5D.%0A%09html%20button%0A%09%09with%3A%20%27InspectIt%27%3B%0A%09%09onClick%3A%20%5BsourceArea%20inspectIt%5D.%0A%09html%20button%20%0A%09%09with%3A%20%27Proceed%27%3B%0A%09%09onClick%3A%20%5Bself%20proceed%5D.%0A%09html%20button%0A%09%09with%3A%20%27Abandon%27%3B%0A%09%09onClick%3A%20%5Bself%20close%5D.%0A%09inspectButton%20%3A%3D%20html%20button%0A%09%09class%3A%20%27jt_button%20debugger%20inspect%27%3B%0A%09%09with%3A%20%27Inspect%27%3B%0A%09%09onClick%3A%20%5Bself%20inspectSelectedVariable%5D.%0A%09%20self%20%0A%09%09updateSourceArea%3B%0A%09%09updateStatus%3B%0A%09%09updateVariablesList%3B%0A%09%09updateInspector'),
messageSends: ["with:", "onClick:", "save", "button", "doIt", "printIt", "inspectIt", "proceed", "close", "class:", "inspectSelectedVariable", "updateSourceArea", "updateStatus", "updateVariablesList", "updateInspector"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;},
args: ["html"],
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20self%20%0A%09renderTopPanelOn%3A%20html%3B%0A%09renderBottomPanelOn%3A%20html'),
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('canBeClosed%0A%20%20%20%20%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateContextsList'),
smalltalk.method({
selector: unescape('updateContextsList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(smalltalk.send(self, "_error", []), "_context", []), html]);})]);
return self;},
args: [],
source: unescape('updateContextsList%0A%09ul%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09self%20renderContext%3A%20self%20error%20context%20on%3A%20html%5D'),
messageSends: ["contents:", "renderContext:on:", "context", "error"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateSourceArea'),
smalltalk.method({
selector: unescape('updateSourceArea'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
return self;},
args: [],
source: unescape('updateSourceArea%0A%09%20sourceArea%20val%3A%20self%20source'),
messageSends: ["val:", "source"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateStatus'),
smalltalk.method({
selector: unescape('updateStatus'),
category: 'updating',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return self['@unsavedChanges']=false;})() : (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return self['@unsavedChanges']=true;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return self['@unsavedChanges']=false;}), (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return self['@unsavedChanges']=true;})]));
return self;},
args: [],
source: unescape('updateStatus%0A%09sourceArea%20val%20%3D%20self%20source%0A%09%09ifTrue%3A%20%5B%0A%09%09%09saveButton%20ifNotNil%3A%20%5B%0A%09%09%09%09saveButton%20at%3A%20%27disabled%27%20put%3A%20true%5D.%0A%09%09%09unsavedChanges%20%3A%3D%20false%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09saveButton%20ifNotNil%3A%20%5B%0A%09%09%09%09saveButton%20removeAt%3A%20%27disabled%27%5D.%0A%09%09%09unsavedChanges%20%3A%3D%20true%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "val", "source", "ifNotNil:", "at:put:", "removeAt:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateInspector'),
smalltalk.method({
selector: unescape('updateInspector'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@inspector'], "_contents_", [(function(html){return nil;})]);
return self;},
args: [],
source: unescape('updateInspector%0A%09inspector%20contents%3A%20%5B%3Ahtml%20%7C%5D'),
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateVariablesList'),
smalltalk.method({
selector: unescape('updateVariablesList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@ul2'], "_contents_", [(function(html){var li=nil;
li=(function($rec){smalltalk.send($rec, "_with_", ["self"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_named_", [smalltalk.send(self, "_receiver", []), "self"]);})]);})(smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(self['@selectedVariableName'], "__eq", ["self"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));smalltalk.send(smalltalk.send(self, "_arguments", []), "_withIndexDo_", [(function(each, index){var param=nil;
param=smalltalk.send(smalltalk.send(self['@selectedContext'], "_temps", []), "_at_", [index]);li=(function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_named_", [param, each]);})]);})(smalltalk.send(html, "_li", []));return ((($receiver = smalltalk.send(self['@selectedVariableName'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));})]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_allInstanceVariableNames", []), "_do_", [(function(each){var ivar=nil;
ivar=smalltalk.send(smalltalk.send(self, "_receiver", []), "_instVarAt_", [each]);li=(function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_named_", [ivar, each]);})]);})(smalltalk.send(html, "_li", []));return ((($receiver = smalltalk.send(self['@selectedVariableName'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));})]);})]);
(($receiver = self['@selectedVariable']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self['@inspectButton'], "_at_put_", ["disabled", true]);})() : (function(){return smalltalk.send(self['@inspectButton'], "_removeAt_", ["disabled"]);})();
return self;},
args: [],
source: unescape('updateVariablesList%0A%09ul2%20contents%3A%20%5B%3Ahtml%20%7C%20%7C%20li%20%7C%0A%09%09li%20%3A%3D%20html%20li%20%0A%09%09%09with%3A%20%27self%27%3B%0A%09%09%09onClick%3A%20%5Bself%20selectVariable%3A%20self%20receiver%20named%3A%20%27self%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedVariableName%20%3D%20%27self%27%20ifTrue%3A%20%5B%0A%09%09%09li%20class%3A%20%27selected%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20arguments%20withIndexDo%3A%20%5B%3Aeach%20%3Aindex%20%7C%20%7C%20param%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20param%20%3A%3D%20selectedContext%20temps%20at%3A%20index.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20li%20%3A%3D%20html%20li%20%0A%09%09%09%09with%3A%20each%3B%0A%09%09%09%09onClick%3A%20%5Bself%20selectVariable%3A%20param%20named%3A%20each%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedVariableName%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09%09%09li%20class%3A%20%27selected%27%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20receiver%20class%20allInstanceVariableNames%20do%3A%20%5B%3Aeach%20%7C%20%7C%20ivar%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ivar%20%3A%3D%20self%20receiver%20instVarAt%3A%20each.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20li%20%3A%3D%20html%20li%20%0A%09%09%09%09with%3A%20each%3B%0A%09%09%09%09onClick%3A%20%5Bself%20selectVariable%3A%20ivar%20named%3A%20each%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedVariableName%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09%09%09li%20class%3A%20%27selected%27%5D%5D%5D.%0A%09selectedVariable%20ifNil%3A%20%5BinspectButton%20at%3A%20%27disabled%27%20put%3A%20true%5D%20ifNotNil%3A%20%5BinspectButton%20removeAt%3A%20%27disabled%27%5D'),
messageSends: ["contents:", "with:", "onClick:", "selectVariable:named:", "receiver", "li", "ifTrue:", unescape("%3D"), "class:", "withIndexDo:", "arguments", "at:", "temps", "do:", "allInstanceVariableNames", "class", "instVarAt:", "ifNil:ifNotNil:", "at:put:", "removeAt:"],
referencedClasses: []
}),
smalltalk.Debugger);



smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
unescape('_handleError_'),
smalltalk.method({
selector: unescape('handleError%3A'),
category: 'error handling',
fn: function (anError){
var self=this;
smalltalk.send((function(){return (function($rec){smalltalk.send($rec, "_error_", [anError]);return smalltalk.send($rec, "_open", []);})(smalltalk.send((smalltalk.Debugger || Debugger), "_new", []));}), "_on_do_", [(smalltalk.Error || Error), (function(error){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [error]);})]);
return self;},
args: ["anError"],
source: unescape('handleError%3A%20anError%0A%09%5BDebugger%20new%0A%09%09error%3A%20anError%3B%0A%09%09open%5D%20on%3A%20Error%20do%3A%20%5B%3Aerror%20%7C%0A%09%09%09ErrorHandler%20new%20handleError%3A%20error%5D'),
messageSends: ["on:do:", "error:", "open", "new", "handleError:"],
referencedClasses: ["Debugger", "Error", "ErrorHandler"]
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;},
args: [],
source: unescape('initialize%0A%09self%20register'),
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'IDE');
smalltalk.addMethod(
unescape('_percent'),
smalltalk.method({
selector: unescape('percent'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@percent']) == nil || $receiver == undefined) ? (function(){return (0);})() : $receiver;
return self;},
args: [],
source: unescape('percent%0A%09%5Epercent%20ifNil%3A%20%5B0%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
unescape('_percent_'),
smalltalk.method({
selector: unescape('percent%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@percent']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('percent%3A%20aNumber%0A%09percent%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["progress_bar"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderProgressBar", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%20%0A%09div%20%3A%3D%20html%20div%20%0A%09%09class%3A%20%27progress_bar%27%3B%0A%09%09yourself.%0A%09self%20renderProgressBar'),
messageSends: ["class:", "yourself", "div", "renderProgressBar"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
unescape('_renderProgressBar'),
smalltalk.method({
selector: unescape('renderProgressBar'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return (function($rec){smalltalk.send($rec, "_class_", ["progress"]);return smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send("width:", "__comma", [smalltalk.send(smalltalk.send(self, "_percent", []), "_asString", [])]), "__comma", [unescape("%25")])]);})(smalltalk.send(html, "_div", []));})]);
return self;},
args: [],
source: unescape('renderProgressBar%0A%09div%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09html%20div%20%0A%09%09%09class%3A%20%27progress%27%3B%0A%09%09%09style%3A%20%27width%3A%27%2C%20self%20percent%20asString%2C%20%27%25%27%5D'),
messageSends: ["contents:", "class:", "style:", unescape("%2C"), "asString", "percent", "div"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
unescape('_updatePercent_'),
smalltalk.method({
selector: unescape('updatePercent%3A'),
category: 'updating',
fn: function (aNumber){
var self=this;
smalltalk.send(self, "_percent_", [aNumber]);
smalltalk.send(self, "_renderProgressBar", []);
return self;},
args: ["aNumber"],
source: unescape('updatePercent%3A%20aNumber%0A%09self%20percent%3A%20aNumber.%0A%09self%20renderProgressBar'),
messageSends: ["percent:", "renderProgressBar"],
referencedClasses: []
}),
smalltalk.ProgressBar);



smalltalk.addClass('TestRunner', smalltalk.TabWidget, ['selectedCategories', 'packagesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
return "SUnit";
return self;},
args: [],
source: unescape('label%0A%20%20%20%20%5E%27SUnit%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_packages'),
smalltalk.method({
selector: unescape('packages'),
category: 'accessing',
fn: function (){
var self=this;
var packages=nil;
packages=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(self, "_allClasses", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(packages, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(packages, "_sort", []);
return self;},
args: [],
source: unescape('packages%0A%20%20%20%20%7C%20packages%20%7C%0A%20%20%20%20packages%20%3A%3D%20Array%20new.%0A%20%20%20%20self%20allClasses%20do%3A%20%5B%3Aeach%20%7C%0A%09%28packages%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0A%09%20%20%20%20packages%20add%3A%20each%20category%5D%5D.%0A%20%20%20%20%5Epackages%20sort'),
messageSends: ["new", "do:", "allClasses", "ifFalse:", "includes:", "category", "add:", "sort"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_allClasses", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [smalltalk.send(each, "_category", [])]);})]), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(b, "_name", [])]));})]);
return self;},
args: [],
source: unescape('classes%0A%20%20%20%20%5E%28self%20allClasses%20%0A%09select%3A%20%5B%3Aeach%20%7C%20self%20selectedCategories%20includes%3A%20each%20category%5D%29%0A%09sort%3A%20%5B%3Aa%20%3Ab%20%7C%20a%20name%20%3E%20b%20name%5D'),
messageSends: ["sort:", "select:", "allClasses", "includes:", "selectedCategories", "category", unescape("%3E"), "name"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_selectedCategories'),
smalltalk.method({
selector: unescape('selectedCategories'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@selectedCategories']) == nil || $receiver == undefined) ? (function(){return self['@selectedCategories']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('selectedCategories%0A%09%5EselectedCategories%20ifNil%3A%20%5BselectedCategories%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_allClasses'),
smalltalk.method({
selector: unescape('allClasses'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.TestCase || TestCase), "_allSubclasses", []);
return self;},
args: [],
source: unescape('allClasses%0A%09%5ETestCase%20allSubclasses'),
messageSends: ["allSubclasses"],
referencedClasses: ["TestCase"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_selectedClasses'),
smalltalk.method({
selector: unescape('selectedClasses'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@selectedClasses']) == nil || $receiver == undefined) ? (function(){return self['@selectedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('selectedClasses%0A%09%5EselectedClasses%20%20ifNil%3A%20%5BselectedClasses%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_progressBar'),
smalltalk.method({
selector: unescape('progressBar'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@progressBar']) == nil || $receiver == undefined) ? (function(){return self['@progressBar']=smalltalk.send((smalltalk.ProgressBar || ProgressBar), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('progressBar%0A%09%5EprogressBar%20ifNil%3A%20%5BprogressBar%20%3A%3D%20ProgressBar%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["ProgressBar"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_statusInfo'),
smalltalk.method({
selector: unescape('statusInfo'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printTotal", []), "__comma", [smalltalk.send(self, "_printPasses", [])]), "__comma", [smalltalk.send(self, "_printErrors", [])]), "__comma", [smalltalk.send(self, "_printFailures", [])]);
return self;},
args: [],
source: unescape('statusInfo%0A%09%5Eself%20printTotal%2C%20self%20printPasses%2C%20self%20printErrors%2C%20self%20printFailures'),
messageSends: [unescape("%2C"), "printTotal", "printPasses", "printErrors", "printFailures"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_result'),
smalltalk.method({
selector: unescape('result'),
category: 'accessing',
fn: function (){
var self=this;
return self['@result'];
return self;},
args: [],
source: unescape('result%0A%09%5Eresult'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_testCases'),
smalltalk.method({
selector: unescape('testCases'),
category: 'accessing',
fn: function (){
var self=this;
var testCases=nil;
testCases=[];
smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_do_", [(function(each){return smalltalk.send(testCases, "_addAll_", [smalltalk.send(each, "_buildSuite", [])]);})]);
return testCases;
return self;},
args: [],
source: unescape('testCases%0A%09%7C%20testCases%20%7C%0A%09testCases%20%3A%3D%20%23%28%29.%0A%09self%20selectedClasses%20do%3A%20%5B%3Aeach%20%7C%20testCases%20addAll%3A%20each%20buildSuite%5D.%0A%09%5EtestCases'),
messageSends: ["do:", "selectedClasses", "addAll:", "buildSuite"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_selectAllCategories'),
smalltalk.method({
selector: unescape('selectAllCategories'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(self['@selectedCategories'], "_includes_", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_add_", [each]);})]));})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;},
args: [],
source: unescape('selectAllCategories%0A%09self%20packages%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09%28selectedCategories%20includes%3A%20each%29%20ifFalse%3A%20%5B%0A%09%09%09self%20selectedCategories%20add%3A%20each%5D%5D.%0A%09self%20%0A%09%20%20%20%20updateCategoriesList%3B%0A%09%20%20%20%20updateClassesList'),
messageSends: ["do:", "packages", "ifFalse:", "includes:", "add:", "selectedCategories", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_toggleCategory_'),
smalltalk.method({
selector: unescape('toggleCategory%3A'),
category: 'actions',
fn: function (aCategory){
var self=this;
((($receiver = smalltalk.send(self, "_isSelectedCategory_", [aCategory])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@selectedCategories'], "_add_", [aCategory]);})() : (function(){return smalltalk.send(self['@selectedCategories'], "_remove_", [aCategory]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@selectedCategories'], "_add_", [aCategory]);}), (function(){return smalltalk.send(self['@selectedCategories'], "_remove_", [aCategory]);})]));
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;},
args: ["aCategory"],
source: unescape('toggleCategory%3A%20aCategory%0A%09%28self%20isSelectedCategory%3A%20aCategory%29%20%0A%09%09ifFalse%3A%20%5BselectedCategories%20add%3A%20aCategory%5D%0A%09%09ifTrue%3A%20%5BselectedCategories%20remove%3A%20aCategory%5D.%0A%09self%20%0A%09%20%20%20%20updateCategoriesList%3B%0A%09%20%20%20%20updateClassesList'),
messageSends: ["ifFalse:ifTrue:", "isSelectedCategory:", "add:", "remove:", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_toggleClass_'),
smalltalk.method({
selector: unescape('toggleClass%3A'),
category: 'actions',
fn: function (aClass){
var self=this;
((($receiver = smalltalk.send(self, "_isSelectedClass_", [aClass])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@selectedClasses'], "_add_", [aClass]);})() : (function(){return smalltalk.send(self['@selectedClasses'], "_remove_", [aClass]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@selectedClasses'], "_add_", [aClass]);}), (function(){return smalltalk.send(self['@selectedClasses'], "_remove_", [aClass]);})]));
smalltalk.send(self, "_updateClassesList", []);
return self;},
args: ["aClass"],
source: unescape('toggleClass%3A%20aClass%0A%09%28self%20isSelectedClass%3A%20aClass%29%20%0A%09%09ifFalse%3A%20%5BselectedClasses%20add%3A%20aClass%5D%0A%09%09ifTrue%3A%20%5BselectedClasses%20remove%3A%20aClass%5D.%0A%09self%20%0A%09%20%20%20%20updateClassesList'),
messageSends: ["ifFalse:ifTrue:", "isSelectedClass:", "add:", "remove:", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_selectAllClasses'),
smalltalk.method({
selector: unescape('selectAllClasses'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(self['@selectedClasses'], "_includes_", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_add_", [each]);})]));})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;},
args: [],
source: unescape('selectAllClasses%0A%09self%20classes%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09%28selectedClasses%20includes%3A%20each%29%20ifFalse%3A%20%5B%0A%09%09%09self%20selectedClasses%20add%3A%20each%5D%5D.%0A%09self%20%0A%09%20%20%20%20updateCategoriesList%3B%0A%09%20%20%20%20updateClassesList'),
messageSends: ["do:", "classes", "ifFalse:", "includes:", "add:", "selectedClasses", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_run_'),
smalltalk.method({
selector: unescape('run%3A'),
category: 'actions',
fn: function (aCollection){
var self=this;
self['@result']=smalltalk.send((smalltalk.TestResult || TestResult), "_new", []);
(function($rec){smalltalk.send($rec, "_updateStatusDiv", []);return smalltalk.send($rec, "_updateMethodsList", []);})(self);
smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [(0)]);
smalltalk.send(self['@result'], "_total_", [smalltalk.send(aCollection, "_size", [])]);
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send((function(){smalltalk.send(each, "_runCaseFor_", [self['@result']]);smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [((($receiver = ((($receiver = smalltalk.send(self['@result'], "_runs", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@result'], "_total", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@result'], "_total", [])]))).klass === smalltalk.Number) ? $receiver *(100) : smalltalk.send($receiver, "__star", [(100)]))]);smalltalk.send(self, "_updateStatusDiv", []);return smalltalk.send(self, "_updateMethodsList", []);}), "_valueWithTimeout_", [(100)]);})]);
return self;},
args: ["aCollection"],
source: unescape('run%3A%20aCollection%0A%09result%20%3A%3D%20TestResult%20new.%0A%09self%20%0A%09%09updateStatusDiv%3B%0A%09%09updateMethodsList.%0A%09self%20progressBar%20updatePercent%3A%200.%0A%09result%20total%3A%20aCollection%20size.%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09%5Beach%20runCaseFor%3A%20result.%0A%09%09self%20progressBar%20updatePercent%3A%20result%20runs%20/%20result%20total%20*%20100.%0A%09%09self%20updateStatusDiv.%0A%09%09self%20updateMethodsList%5D%20valueWithTimeout%3A%20100%5D.'),
messageSends: ["new", "updateStatusDiv", "updateMethodsList", "updatePercent:", "progressBar", "total:", "size", "do:", "valueWithTimeout:", "runCaseFor:", unescape("*"), unescape("/"), "runs", "total"],
referencedClasses: ["TestResult"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_performFailure_'),
smalltalk.method({
selector: unescape('performFailure%3A'),
category: 'actions',
fn: function (aTestCase){
var self=this;
smalltalk.send(aTestCase, "_perform_", [smalltalk.send(aTestCase, "_selector", [])]);
return self;},
args: ["aTestCase"],
source: unescape('performFailure%3A%20aTestCase%0A%09aTestCase%20perform%3A%20aTestCase%20selector'),
messageSends: ["perform:", "selector"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
self['@result']=smalltalk.send((smalltalk.TestResult || TestResult), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09result%20%3A%3D%20TestResult%20new'),
messageSends: ["initialize", "new"],
referencedClasses: ["TestResult"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_printErrors'),
smalltalk.method({
selector: unescape('printErrors'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", []), "_asString", []), "__comma", [unescape("%20errors%2C%20")]);
return self;},
args: [],
source: unescape('printErrors%0A%09%5Eself%20result%20errors%20size%20asString%20%2C%20%27%20errors%2C%20%27'),
messageSends: [unescape("%2C"), "asString", "size", "errors", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_printFailures'),
smalltalk.method({
selector: unescape('printFailures'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []), "_asString", []), "__comma", [" failures"]);
return self;},
args: [],
source: unescape('printFailures%0A%09%5Eself%20result%20failures%20size%20asString%2C%20%27%20failures%27'),
messageSends: [unescape("%2C"), "asString", "size", "failures", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_printPasses'),
smalltalk.method({
selector: unescape('printPasses'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_result", []), "_total", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", [])]))).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", [])])), "_asString", []), "__comma", [unescape("%20passes%2C%20")]);
return self;},
args: [],
source: unescape('printPasses%0A%09%5E%28self%20result%20total%20-%20self%20result%20errors%20size%20-%20self%20result%20failures%20size%29%20asString%20%2C%20%27%20passes%2C%20%27'),
messageSends: [unescape("%2C"), "asString", unescape("-"), "total", "result", "size", "errors", "failures"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_printTotal'),
smalltalk.method({
selector: unescape('printTotal'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_total", []), "_asString", []), "__comma", [unescape("%20runs%2C%20")]);
return self;},
args: [],
source: unescape('printTotal%0A%09%5Eself%20result%20total%20asString%2C%20%27%20runs%2C%20%27'),
messageSends: [unescape("%2C"), "asString", "total", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderCategoriesOn_", [html]);smalltalk.send($rec, "_renderClassesOn_", [html]);return smalltalk.send($rec, "_renderResultsOn_", [html]);})(self);
return self;},
args: ["html"],
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20self%20%0A%09renderCategoriesOn%3A%20html%3B%0A%09renderClassesOn%3A%20html%3B%0A%09renderResultsOn%3A%20html'),
messageSends: ["renderCategoriesOn:", "renderClassesOn:", "renderResultsOn:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["Run selected"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_run_", [smalltalk.send(self, "_testCases", [])]);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%20%20%20%20html%20button%0A%09with%3A%20%27Run%20selected%27%3B%0A%09onClick%3A%20%5Bself%20run%3A%20self%20testCases%5D'),
messageSends: ["with:", "onClick:", "run:", "testCases", "button"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderCategoriesOn_'),
smalltalk.method({
selector: unescape('renderCategoriesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@packagesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit packages"]);
smalltalk.send(self, "_updateCategoriesList", []);
return self;},
args: ["html"],
source: unescape('renderCategoriesOn%3A%20html%0A%09packagesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20sunit%20packages%27.%0A%09self%20updateCategoriesList'),
messageSends: ["class:", "ul", "updateCategoriesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderClassesOn_'),
smalltalk.method({
selector: unescape('renderClassesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@classesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit classes"]);
smalltalk.send(self, "_updateClassesList", []);
return self;},
args: ["html"],
source: unescape('renderClassesOn%3A%20html%0A%09classesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20sunit%20classes%27.%0A%09self%20updateClassesList'),
messageSends: ["class:", "ul", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderResultsOn_'),
smalltalk.method({
selector: unescape('renderResultsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@statusDiv']=smalltalk.send(html, "_div", []);
smalltalk.send(html, "_with_", [smalltalk.send(self, "_progressBar", [])]);
self['@methodsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit results"]);
smalltalk.send(self, "_updateMethodsList", []);
smalltalk.send(self, "_updateStatusDiv", []);
return self;},
args: ["html"],
source: unescape('renderResultsOn%3A%20html%0A%09statusDiv%20%3A%3D%20html%20div.%0A%09html%20with%3A%20self%20progressBar.%0A%09methodsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20sunit%20results%27.%0A%09self%20updateMethodsList.%0A%09self%20updateStatusDiv'),
messageSends: ["div", "with:", "progressBar", "class:", "ul", "updateMethodsList", "updateStatusDiv"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderFailuresOn_'),
smalltalk.method({
selector: unescape('renderFailuresOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["failures"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_class", []), "_name", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_performFailure_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);
return self;},
args: ["html"],
source: unescape('renderFailuresOn%3A%20html%0A%09self%20result%20failures%20do%3A%20%5B%3Aeach%20%7C%0A%09%09html%20li%20%0A%09%09%09class%3A%20%27failures%27%3B%0A%09%09%09with%3A%20each%20class%20name%2C%20%27%20%3E%3E%20%27%2C%20each%20selector%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3A%20%5Bself%20performFailure%3A%20each%5D%5D'),
messageSends: ["do:", "failures", "result", "class:", "with:", unescape("%2C"), "name", "class", "selector", "onClick:", "performFailure:", "li"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderErrorsOn_'),
smalltalk.method({
selector: unescape('renderErrorsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["errors"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_class", []), "_name", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_performFailure_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);
return self;},
args: ["html"],
source: unescape('renderErrorsOn%3A%20html%0A%09self%20result%20errors%20do%3A%20%5B%3Aeach%20%7C%0A%09%09html%20li%20%0A%09%09%09class%3A%20%27errors%27%3B%0A%09%09%09with%3A%20each%20class%20name%2C%20%27%20%3E%3E%20%27%2C%20each%20selector%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3A%20%5Bself%20performFailure%3A%20each%5D%5D'),
messageSends: ["do:", "errors", "result", "class:", "with:", unescape("%2C"), "name", "class", "selector", "onClick:", "performFailure:", "li"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_isSelectedClass_'),
smalltalk.method({
selector: unescape('isSelectedClass%3A'),
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [aClass]);
return self;},
args: ["aClass"],
source: unescape('isSelectedClass%3A%20aClass%0A%09%5E%28self%20selectedClasses%20includes%3A%20aClass%29'),
messageSends: ["includes:", "selectedClasses"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_isSelectedCategory_'),
smalltalk.method({
selector: unescape('isSelectedCategory%3A'),
category: 'testing',
fn: function (aCategory){
var self=this;
return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [aCategory]);
return self;},
args: ["aCategory"],
source: unescape('isSelectedCategory%3A%20aCategory%0A%09%5E%28self%20selectedCategories%20includes%3A%20aCategory%29'),
messageSends: ["includes:", "selectedCategories"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_updateCategoriesList'),
smalltalk.method({
selector: unescape('updateCategoriesList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@packagesList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllCategories", []);})]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);((($receiver = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleCategory_", [each]);})]);})(li);})]);})]);
return self;},
args: [],
source: unescape('updateCategoriesList%0A%20%20%20%20packagesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%20%20%20%20html%20li%20%0A%09%09class%3A%20%27all%27%3B%0A%09%09with%3A%20%27All%27%3B%0A%09%09onClick%3A%20%5Bself%20selectAllCategories%5D.%0A%09self%20packages%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20%28self%20selectedCategories%20includes%3A%20each%29%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%0A%09%09with%3A%20each%3B%0A%09%09onClick%3A%20%5Bself%20toggleCategory%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "class:", "with:", "onClick:", "selectAllCategories", "li", "do:", "packages", "ifTrue:", "includes:", "selectedCategories", "toggleCategory:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_updateClassesList'),
smalltalk.method({
selector: unescape('updateClassesList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@classesList'], "_contents_", [(function(html){((($receiver = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllClasses", []);})]);})(smalltalk.send(html, "_li", []));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllClasses", []);})]);})(smalltalk.send(html, "_li", []));})]));return smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);((($receiver = smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_name", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleClass_", [each]);})]);})(li);})]);})]);
return self;},
args: [],
source: unescape('updateClassesList%0A%20%20%20%20classesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%28self%20selectedCategories%20isEmpty%29%20ifFalse%3A%20%5B%0A%09%09html%20li%0A%09%09%09class%3A%20%27all%27%3B%0A%09%09%09with%3A%20%27All%27%3B%0A%09%09%09onClick%3A%20%5Bself%20selectAllClasses%5D%5D.%0A%09self%20classes%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%09li%20%3A%3D%20html%20li.%0A%09%09%28self%20selectedClasses%20includes%3A%20each%29%20ifTrue%3A%20%5B%0A%09%09%09li%20class%3A%20%27selected%27%5D.%0A%09%09li%0A%09%09%09with%3A%20each%20name%3B%0A%09%09%09onClick%3A%20%5Bself%20toggleClass%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "ifFalse:", "isEmpty", "selectedCategories", "class:", "with:", "onClick:", "selectAllClasses", "li", "do:", "classes", "ifTrue:", "includes:", "selectedClasses", "name", "toggleClass:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_updateMethodsList'),
smalltalk.method({
selector: unescape('updateMethodsList'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@methodsList'], "_contents_", [(function(html){smalltalk.send(self, "_renderErrorsOn_", [html]);return smalltalk.send(self, "_renderFailuresOn_", [html]);})]);
return self;},
args: [],
source: unescape('updateMethodsList%0A%09methodsList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09self%20renderErrorsOn%3A%20html.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20renderFailuresOn%3A%20html%5D'),
messageSends: ["contents:", "renderErrorsOn:", "renderFailuresOn:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_updateStatusDiv'),
smalltalk.method({
selector: unescape('updateStatusDiv'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@statusDiv'], "_class_", [smalltalk.send("sunit status ", "__comma", [smalltalk.send(self['@result'], "_status", [])])]);
smalltalk.send(self['@statusDiv'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_statusInfo", [])]);})]);
return self;},
args: [],
source: unescape('updateStatusDiv%0A%09statusDiv%20class%3A%20%27sunit%20status%20%27%2C%20result%20status.%0A%09statusDiv%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09html%20span%20with%3A%20self%20statusInfo%5D'),
messageSends: ["class:", unescape("%2C"), "status", "contents:", "with:", "span", "statusInfo"],
referencedClasses: []
}),
smalltalk.TestRunner);



smalltalk.addClass('IDETranscript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
category: 'accessing',
fn: function (){
var self=this;
return "Transcript";
return self;},
args: [],
source: unescape('label%0A%20%20%20%20%5E%27Transcript%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [""]);
return self;},
args: [],
source: unescape('clear%0A%20%20%20%20textarea%20asJQuery%20val%3A%20%27%27'),
messageSends: ["val:", "asJQuery"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val", []), "__comma", [smalltalk.send((smalltalk.String || String), "_cr", [])])]);
return self;},
args: [],
source: unescape('cr%0A%20%20%20%20textarea%20asJQuery%20val%3A%20textarea%20asJQuery%20val%2C%20String%20cr.'),
messageSends: ["val:", "asJQuery", unescape("%2C"), "val", "cr"],
referencedClasses: ["String"]
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_show_'),
smalltalk.method({
selector: unescape('show%3A'),
category: 'actions',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val", []), "__comma", [smalltalk.send(anObject, "_asString", [])])]);
return self;},
args: ["anObject"],
source: unescape('show%3A%20anObject%0A%20%20%20%20textarea%20asJQuery%20val%3A%20textarea%20asJQuery%20val%2C%20anObject%20asString.'),
messageSends: ["val:", "asJQuery", unescape("%2C"), "val", "asString"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_open", []);return smalltalk.send($rec, "_selectTab_", [self]);})(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []));
return self;},
args: [],
source: unescape('open%0A%20%20%20%20TabManager%20current%20%0A%09open%3B%0A%09selectTab%3A%20self'),
messageSends: ["open", "selectTab:", "current"],
referencedClasses: ["TabManager"]
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@textarea']=smalltalk.send(html, "_textarea", []);
(function($rec){smalltalk.send($rec, "_class_", ["jt_transcript"]);return smalltalk.send($rec, "_at_put_", ["spellcheck", "false"]);})(self['@textarea']);
return self;},
args: ["html"],
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20textarea%20%3A%3D%20html%20textarea.%0A%20%20%20%20textarea%20%0A%09class%3A%20%27jt_transcript%27%3B%0A%09at%3A%20%27spellcheck%27%20put%3A%20%27false%27'),
messageSends: ["textarea", "class:", "at:put:"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["Clear transcript"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_clear", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%20%20%20%20html%20button%0A%09with%3A%20%27Clear%20transcript%27%3B%0A%09onClick%3A%20%5Bself%20clear%5D'),
messageSends: ["with:", "onClick:", "clear", "button"],
referencedClasses: []
}),
smalltalk.IDETranscript);


smalltalk.IDETranscript.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_register_", [smalltalk.send(self, "_current", [])]);
return self;},
args: [],
source: unescape('initialize%0A%09Transcript%20register%3A%20self%20current'),
messageSends: ["register:", "current"],
referencedClasses: ["Transcript"]
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: [],
source: unescape('new%0A%20%20%20%20self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'instance creation',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_open", []);return smalltalk.send($rec, "_selectTab_", [smalltalk.send(self, "_current", [])]);})(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []));
return self;},
args: [],
source: unescape('open%0A%20%20%20%20TabManager%20current%20%0A%09open%3B%0A%09selectTab%3A%20self%20current'),
messageSends: ["open", "selectTab:", "current"],
referencedClasses: ["TabManager"]
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'instance creation',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return self['@current']=smalltalk.send(self, "_new", [], smalltalk.TabWidget.klass);})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%09%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20super%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.IDETranscript.klass);


smalltalk.addMethod(
unescape('_inspect'),
smalltalk.method({
selector: unescape('inspect'),
category: '*IDE',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_inspect_", [self]);return smalltalk.send($rec, "_open", []);})(smalltalk.send((smalltalk.Inspector || Inspector), "_new", []));
return self;},
args: [],
source: unescape('inspect%0A%09Inspector%20new%20%0A%09%09inspect%3A%20self%3B%0A%09%09open'),
messageSends: ["inspect:", "open", "new"],
referencedClasses: ["Inspector"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
category: '*IDE',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(self, "_instVarAt_", [each])]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;},
args: ["anInspector"],
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20variables%20%7C%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09variables%20at%3A%20%27%23self%27%20put%3A%20self.%0A%09self%20class%20allInstanceVariableNames%20do%3A%20%5B%3Aeach%20%7C%0A%09%09variables%20at%3A%20each%20put%3A%20%28self%20instVarAt%3A%20each%29%5D.%0A%09anInspector%20%0A%09%09setLabel%3A%20self%20printString%3B%0A%09%09setVariables%3A%20variables'),
messageSends: ["new", "at:put:", "do:", "allInstanceVariableNames", "class", "instVarAt:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
category: '*IDE',
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
return self;},
args: ["anInspector"],
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20variables%20%7C%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09variables%20at%3A%20%27%23self%27%20put%3A%20self.%0A%09variables%20at%3A%20%27%23year%27%20put%3A%20self%20year.%0A%09variables%20at%3A%20%27%23month%27%20put%3A%20self%20month.%0A%09variables%20at%3A%20%27%23day%27%20put%3A%20self%20day.%0A%09variables%20at%3A%20%27%23hours%27%20put%3A%20self%20hours.%0A%09variables%20at%3A%20%27%23minutes%27%20put%3A%20self%20minutes.%0A%09variables%20at%3A%20%27%23seconds%27%20put%3A%20self%20seconds.%0A%09variables%20at%3A%20%27%23milliseconds%27%20put%3A%20self%20milliseconds.%0A%09anInspector%20%0A%09%09setLabel%3A%20self%20printString%3B%0A%09%09setVariables%3A%20variables'),
messageSends: ["new", "at:put:", "year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
category: '*IDE',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(self, "_withIndexDo_", [(function(each, i){return smalltalk.send(variables, "_at_put_", [i, each]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;},
args: ["anInspector"],
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20variables%20%7C%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09variables%20at%3A%20%27%23self%27%20put%3A%20self.%0A%09self%20withIndexDo%3A%20%5B%3Aeach%20%3Ai%20%7C%0A%09%09variables%20at%3A%20i%20put%3A%20each%5D.%0A%09anInspector%20%0A%09%09setLabel%3A%20self%20printString%3B%0A%09%09setVariables%3A%20variables'),
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
category: '*IDE',
fn: function (anInspector){
var self=this;
var label=nil;
smalltalk.send(self, "_inspectOn_", [anInspector], smalltalk.SequenceableCollection);
((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_printString", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(30) : smalltalk.send($receiver, "__gt", [(30)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return label=smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", []), "_copyFrom_to_", [(1), (30)]), "__comma", [unescape("...%27")]);})() : (function(){return label=smalltalk.send(self, "_printString", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return label=smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", []), "_copyFrom_to_", [(1), (30)]), "__comma", [unescape("...%27")]);}), (function(){return label=smalltalk.send(self, "_printString", []);})]));
smalltalk.send(anInspector, "_setLabel_", [label]);
return self;},
args: ["anInspector"],
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20label%20%7C%0A%09super%20inspectOn%3A%20anInspector.%0A%09self%20printString%20size%20%3E%2030%20%0A%09%09ifTrue%3A%20%5Blabel%20%3A%3D%20%28self%20printString%20copyFrom%3A%201%20to%3A%2030%29%2C%20%27...%27%27%27%5D%0A%09%09ifFalse%3A%20%5Blabel%20%3A%3D%20self%20printString%5D.%20%0A%09anInspector%20setLabel%3A%20label'),
messageSends: ["inspectOn:", "ifTrue:ifFalse:", unescape("%3E"), "size", "printString", unescape("%2C"), "copyFrom:to:", "setLabel:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
category: '*IDE',
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
return self;},
args: ["anInspector"],
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20variables%20%7C%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09variables%20at%3A%20%27%23self%27%20put%3A%20self.%0A%09variables%20at%3A%20%27%23home%27%20put%3A%20self%20home.%0A%09variables%20at%3A%20%27%23receiver%27%20put%3A%20self%20receiver.%0A%09variables%20at%3A%20%27%23selector%27%20put%3A%20self%20selector.%0A%09variables%20at%3A%20%27%23temps%27%20put%3A%20self%20temps.%0A%09self%20class%20instanceVariableNames%20do%3A%20%5B%3Aeach%20%7C%0A%09%09variables%20at%3A%20each%20put%3A%20%28self%20instVarAt%3A%20each%29%5D.%0A%09anInspector%20%0A%09%09setLabel%3A%20self%20printString%3B%0A%09%09setVariables%3A%20variables'),
messageSends: ["new", "at:put:", "home", "receiver", "selector", "temps", "do:", "instanceVariableNames", "class", "instVarAt:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
category: '*IDE',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(variables, "_at_put_", [unescape("%23keys"), smalltalk.send(self, "_keys", [])]);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(variables, "_at_put_", [key, value]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;},
args: ["anInspector"],
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20variables%20%7C%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09variables%20at%3A%20%27%23self%27%20put%3A%20self.%0A%09variables%20at%3A%20%27%23keys%27%20put%3A%20self%20keys.%0A%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09variables%20at%3A%20key%20put%3A%20value%5D.%0A%09anInspector%20%0A%09%09setLabel%3A%20self%20printString%3B%0A%09%09setVariables%3A%20variables'),
messageSends: ["new", "at:put:", "keys", "keysAndValuesDo:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Dictionary);

