smalltalk.addPackage('Tools', {});
smalltalk.addClass('Guid', smalltalk.Object, ['guidString'], 'Tools');
smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'conversion',
fn: function (){
var self=this;
return self['@guidString'];
return self;},
args: [],
source: unescape('asString%0A%09%5EguidString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Guid);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
(self['@guidString']=smalltalk.send(self, "_newGuidString", []));
return self;},
args: [],
source: unescape('initialize%0A%09guidString%20%3A%3D%20self%20newGuidString'),
messageSends: ["newGuidString"],
referencedClasses: []
}),
smalltalk.Guid);

smalltalk.addMethod(
unescape('_newGuidString'),
smalltalk.method({
selector: unescape('newGuidString'),
category: 'initialization',
fn: function (){
var self=this;
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
return self;},
args: [],
source: unescape('newGuidString%0A%09%3Creturn%20%27xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx%27.replace%28/%5Bxy%5D/g%2C%20function%28c%29%20%7B%0A%09%09var%20r%20%3D%20Math.random%28%29*16%7C0%2C%20v%20%3D%20c%20%3D%3D%20%27x%27%20%3F%20r%20%3A%20%28r%260x3%7C0x8%29%3B%0A%09%09return%20v.toString%2816%29%3B%0A%09%7D%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Guid);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("a%20Guid%7B"), "__comma", [self['@guidString']]), "__comma", [unescape("%7D")]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%27a%20Guid%7B%27%2C%20guidString%2C%20%27%7D%27'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.Guid);


smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Object.klass), "_initialize", []);
return self;},
args: [],
source: unescape('new%0A%09%5Esuper%20new%20initialize'),
messageSends: ["initialize", "new"],
referencedClasses: []
}),
smalltalk.Guid.klass);


smalltalk.addClass('ToolWidget', smalltalk.Widget, ['id', 'div', 'position', 'size', 'zIndex', 'topBar', 'label', 'body'], 'Tools');
smalltalk.ToolWidget.comment=unescape('A%20ToolWidget%3A%0A%09-%20floats%20on%20the%20DOM%20%28jQuery%20UI%20Draggable%29%0A%09-%20resizeable%20%28jQuery%20UI%20Resizable%29%0A%09-%20provides%20a%20blank%20canvas%20that%20subclasses%20should%20implement%0A%09-%20stores%20itself%20to%20localStorage%0A%09-%20allows%20for%20easy%20inspection%20of%20the%20tool%20%28double%20click%20on%20title%20bar%29')
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@div']=(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_domId", [])]);smalltalk.send($rec, "_class_", [smalltalk.send(self, "_cssClass", [])]);smalltalk.send($rec, "_style_", [smalltalk.send(self, "_style", [])]);return smalltalk.send($rec, "_with_", [(function(){(self['@topBar']=(function($rec){smalltalk.send($rec, "_class_", [unescape("draggable-handle")]);smalltalk.send($rec, "_style_", [unescape("cursor%3Amove%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("%23close")]);smalltalk.send($rec, "_style_", [unescape("position%3A%20absolute%3B%20right%3A%2020px%3B%20color%3A%20%23933")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_remove", []);})]);return smalltalk.send($rec, "_with_", ["x"]);})(smalltalk.send(html, "_a", []));return (self['@label']=smalltalk.send(html, "_span_", [smalltalk.send(self, "_labelString", [])]));})]);})(smalltalk.send(html, "_div", [])));return (self['@body']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["body"]));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(smalltalk.send(self['@topBar'], "_asJQuery", []), "_bind_do_", ["dblclick", (function(){return smalltalk.send(self, "_inspect", []);})]);
(function($rec){smalltalk.send($rec, "_initializeHandlers", []);smalltalk.send($rec, "_renderBody", []);return smalltalk.send($rec, "_updateMenu", []);})(self);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09div%20%3A%3D%20html%20div%0A%09%09id%3A%20self%20domId%3B%0A%09%09class%3A%20self%20cssClass%3B%0A%09%09style%3A%20self%20style%3B%0A%09%09with%3A%20%5B%0A%09%09%09topBar%20%3A%3D%20html%20div%0A%09%09%09%09class%3A%20%27draggable-handle%27%3B%0A%09%09%09%09style%3A%20%27cursor%3Amove%3B%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20a%0A%09%09%09%09%09%09href%3A%20%27%23close%27%3B%0A%09%09%09%09%09%09style%3A%20%27position%3A%20absolute%3B%20right%3A%2020px%3B%20color%3A%20%23933%27%3B%0A%09%09%09%09%09%09onClick%3A%20%5B%20self%20remove%20%5D%3B%0A%09%09%09%09%09%09with%3A%20%27x%27.%0A%09%09%09%09%09label%20%3A%3D%20html%20span%3A%20self%20labelString%20%5D.%0A%09%09%09body%20%3A%3D%20html%20div%20class%3A%20%27body%27%20%5D.%0A%0A%09topBar%20asJQuery%20bind%3A%20%27dblclick%27%20do%3A%20%5B%20self%20inspect%20%5D.%0A%09self%0A%09%09initializeHandlers%3B%0A%09%09renderBody%3B%0A%09%09updateMenu.'),
messageSends: ["id:", "domId", "class:", "cssClass", "style:", "style", "with:", "href:", "onClick:", "remove", "a", "span:", "labelString", "div", "bind:do:", "asJQuery", "inspect", "initializeHandlers", "renderBody", "updateMenu"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
smalltalk.send(smalltalk.send(self, "_class", []), "_remove_", [smalltalk.send(self['@id'], "_asString", [])]);
return self;},
args: [],
source: unescape('remove%0A%09div%20asJQuery%20remove.%0A%09self%20class%20remove%3A%20id%20asString'),
messageSends: ["remove", "asJQuery", "remove:", "class", "asString"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@id']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('id%3A%20anInteger%0A%09id%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@id']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.Guid || Guid), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('id%0A%09%5Eid%20ifNil%3A%20%5B%20Guid%20new%20%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Guid"]
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_domId'),
smalltalk.method({
selector: unescape('domId'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(unescape("tool-"), "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;},
args: [],
source: unescape('domId%0A%09%5E%27tool-%27%2C%20id%20asString'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
category: 'accessing',
fn: function (){
var self=this;
return self['@position'];
return self;},
args: [],
source: unescape('position%0A%09%5Eposition'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_position_'),
smalltalk.method({
selector: unescape('position%3A'),
category: 'accessing',
fn: function (aPoint){
var self=this;
self['@position']=aPoint;
smalltalk.send(self, "_save", []);
return self;},
args: ["aPoint"],
source: unescape('position%3A%20aPoint%0A%09position%20%3A%3D%20aPoint.%0A%09self%20save.'),
messageSends: ["save"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_asHashedCollection'),
smalltalk.method({
selector: unescape('asHashedCollection'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [smalltalk.send(self['@position'], "_x", [])]),smalltalk.send("y", "__minus_gt", [smalltalk.send(self['@position'], "_y", [])]),smalltalk.send("width", "__minus_gt", [smalltalk.send(self['@size'], "_x", [])]),smalltalk.send("height", "__minus_gt", [smalltalk.send(self['@size'], "_y", [])]),smalltalk.send("id", "__minus_gt", [smalltalk.send(self['@id'], "_asString", [])]),smalltalk.send("zIndex", "__minus_gt", [self['@zIndex']])]);
return self;},
args: [],
source: unescape('asHashedCollection%0A%09%5E%23%7B%0A%09%09%27x%27%20-%3E%20position%20x%20.%0A%09%09%27y%27%20-%3E%20position%20y%20.%0A%09%09%27width%27%20-%3E%20size%20x%20.%0A%09%09%27height%27%20-%3E%20size%20y%20.%0A%09%09%27id%27%20-%3E%20id%20asString%20.%0A%09%09%27zIndex%27%20-%3E%20zIndex%20%7D'),
messageSends: [unescape("-%3E"), "x", "y", "asString"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_class", []), "_saveAll", []);
return self;},
args: [],
source: unescape('save%0A%09self%20class%20saveAll'),
messageSends: ["saveAll", "class"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%0A%09border%3A1px%20solid%20black%3B%0A%09background-color%3A%23fff%3B%0A%09position%3Aabsolute%3B%0A%09left%3A"), "__comma", [smalltalk.send(smalltalk.send(self['@position'], "_x", []), "_printString", [])]), "__comma", [unescape("px%3B%0A%09top%3A")]), "__comma", [smalltalk.send(smalltalk.send(self['@position'], "_y", []), "_printString", [])]), "__comma", [unescape("px%3B%0A%09width%3A")]), "__comma", [smalltalk.send(smalltalk.send(self['@size'], "_x", []), "_printString", [])]), "__comma", [unescape("px%3B%0A%09height%3A")]), "__comma", [smalltalk.send(smalltalk.send(self['@size'], "_y", []), "_printString", [])]), "__comma", [unescape("px%3B%0A%09z-index%3A")]), "__comma", [smalltalk.send(self['@zIndex'], "_printString", [])]), "__comma", [unescape("%3B%0A%09")]);
return self;},
args: [],
source: unescape('style%0A%09%5E%27%0A%09border%3A1px%20solid%20black%3B%0A%09background-color%3A%23fff%3B%0A%09position%3Aabsolute%3B%0A%09left%3A%27%2C%20position%20x%20printString%2C%20%27px%3B%0A%09top%3A%27%2C%20position%20y%20printString%2C%20%27px%3B%0A%09width%3A%27%2C%20size%20x%20printString%2C%20%27px%3B%0A%09height%3A%27%2C%20size%20y%20printString%2C%20%27px%3B%0A%09z-index%3A%27%2C%20zIndex%20printString%2C%20%27%3B%0A%09%27'),
messageSends: [unescape("%2C"), "printString", "x", "y"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return self['@size'];
return self;},
args: [],
source: unescape('size%0A%09%5Esize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_size_'),
smalltalk.method({
selector: unescape('size%3A'),
category: 'accessing',
fn: function (aPoint){
var self=this;
self['@size']=aPoint;
smalltalk.send(self, "_save", []);
return self;},
args: ["aPoint"],
source: unescape('size%3A%20aPoint%0A%09size%20%3A%3D%20aPoint.%0A%09self%20save.'),
messageSends: ["save"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@id']=smalltalk.send((smalltalk.Guid || Guid), "_new", []));
(self['@position']=smalltalk.send((50), "__at", [(50)]));
(self['@size']=smalltalk.send((500), "__at", [(250)]));
(self['@zIndex']=(11000));
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09id%20%3A%3D%20Guid%20new.%0A%09position%20%3A%3D%2050@50.%0A%09size%20%3A%3D%20500@250.%0A%09zIndex%20%3A%3D%2011000.'),
messageSends: ["initialize", "new", unescape("@")],
referencedClasses: ["Guid"]
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_menuId'),
smalltalk.method({
selector: unescape('menuId'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(unescape("menu-"), "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;},
args: [],
source: unescape('menuId%0A%09%5E%27menu-%27%2C%20id%20asString'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_handleMenuAction_'),
smalltalk.method({
selector: unescape('handleMenuAction%3A'),
category: 'menu',
fn: function (anActionString){
var self=this;
smalltalk.send(self, "_perform_", [anActionString]);
return self;},
args: ["anActionString"],
source: unescape('handleMenuAction%3A%20anActionString%0A%09self%20perform%3A%20anActionString.'),
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_updateMenu'),
smalltalk.method({
selector: unescape('updateMenu'),
category: 'menu',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_contextMenu_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("selector", "__minus_gt", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_domId", [])])]),smalltalk.send("callback", "__minus_gt", [(function(key, options){return smalltalk.send(self, "_handleMenuAction_", [key]);})]),smalltalk.send("items", "__minus_gt", [smalltalk.send((smalltalk.JSON || JSON), "_parse_", [smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self, "_menuItems", [])])])])])]);
return self;},
args: [],
source: unescape('updateMenu%0A%09jQuery%20contextMenu%3A%20%23%7B%0A%09%09%27selector%27%20-%3E%20%28%27%23%27%2C%20self%20domId%29%20.%0A%09%09%27callback%27%20-%3E%20%5B%20%3Akey%20%3Aoptions%20%7C%20self%20handleMenuAction%3A%20key%20%5D%20.%0A%09%09%27items%27%20-%3E%20%28JSON%20parse%3A%20%28JSON%20stringify%3A%20self%20menuItems%29%29%20%7D'),
messageSends: ["contextMenu:", unescape("-%3E"), unescape("%2C"), "domId", "handleMenuAction:", "parse:", "stringify:", "menuItems"],
referencedClasses: ["JSON"]
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_initializeHandlers'),
smalltalk.method({
selector: unescape('initializeHandlers'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("handle", "__minus_gt", [unescape(".draggable-handle")]),smalltalk.send("stop", "__minus_gt", [(function(event, ui){return smalltalk.send(self, "_position_", [smalltalk.send(smalltalk.send(smalltalk.send(ui, "_position", []), "_left", []), "__at", [smalltalk.send(smalltalk.send(ui, "_position", []), "_top", [])])]);})])])]);
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_resizable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("stop", "__minus_gt", [(function(event, ui, size){self['@size']=ui.size;return smalltalk.send(self, "_size_", [smalltalk.send(smalltalk.send(self['@size'], "_width", []), "__at", [smalltalk.send(self['@size'], "_height", [])])]);})])])]);
return self;},
args: [],
source: unescape('initializeHandlers%0A%09div%20asJQuery%20draggable%3A%20%23%7B%0A%09%09%27handle%27%20-%3E%20%27.draggable-handle%27%20.%0A%09%09%27stop%27%20-%3E%20%5B%20%3Aevent%20%3Aui%20%7C%20self%20position%3A%20%28ui%20position%20left%29@%28ui%20position%20top%29%20%5D%20%7D.%0A%0A%09div%20asJQuery%20resizable%3A%20%23%7B%0A%09%09%27stop%27%20-%3E%20%5B%20%3Aevent%20%3Aui%20%3Asize%20%7C%0A%09%09%09size%20%3A%3D%20%3Cui.size%3E.%0A%09%09%09self%20size%3A%20%28size%20width%29@%28size%20height%29%20%5D%20%7D.'),
messageSends: ["draggable:", "asJQuery", unescape("-%3E"), "position:", unescape("@"), "left", "position", "top", "resizable:", "size:", "width", "height"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_inspect'),
smalltalk.method({
selector: unescape('inspect'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [unescape("ToolWidget%3E%3Einspect")]);
smalltalk.send(self, "_inspect", [], smalltalk.Widget);
return self;},
args: [],
source: unescape('inspect%0A%09console%20log%3A%20%27ToolWidget%3E%3Einspect%27.%0A%09super%20inspect'),
messageSends: ["log:", "inspect"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_renderBody'),
smalltalk.method({
selector: unescape('renderBody'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@body'], "_contents_", [(function(html){return smalltalk.send(html, "_p_", [unescape("%5B%20blank%20tool%20%5D")]);})]);
return self;},
args: [],
source: unescape('renderBody%0A%09body%20contents%3A%20%5B%20%3Ahtml%20%7C%20html%20p%3A%20%27%5B%20blank%20tool%20%5D%27%20%5D'),
messageSends: ["contents:", "p:"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_labelString'),
smalltalk.method({
selector: unescape('labelString'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_printString", []);
return self;},
args: [],
source: unescape('labelString%0A%09%5Eself%20class%20printString'),
messageSends: ["printString", "class"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_browse'),
smalltalk.method({
selector: unescape('browse'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [unescape("ToolWidget%3E%3Ebrowse")]);
smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_class", [])]);
return self;},
args: [],
source: unescape('browse%0A%09console%20log%3A%20%27ToolWidget%3E%3Ebrowse%27.%0A%09Browser%20openOn%3A%20self%20class'),
messageSends: ["log:", "openOn:", "class"],
referencedClasses: ["Browser"]
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_menuItems'),
smalltalk.method({
selector: unescape('menuItems'),
category: 'menu',
fn: function (){
var self=this;
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("inspect", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Inspect this tool"]),smalltalk.send("icon", "__minus_gt", ["quit"])])]),smalltalk.send("browse", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Browse this tool"]),smalltalk.send("icon", "__minus_gt", ["copy"])])]),smalltalk.send("reload", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Reload this tool"])])]),smalltalk.send("confirmRemove", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Remove this tool"]),smalltalk.send("icon", "__minus_gt", ["delete"])])])]);
return self;},
args: [],
source: unescape('menuItems%0A%09%22Answer%20a%20dictionary%20of%20menu%20items%3A%20%27methodName%27%20-%3E%20%23%7B%20%27name%27%20-%3E%20%27Display%20String%27%20...%22%0A%09%5E%20%23%7B%0A%09%27inspect%27%20-%3E%20%23%7B%20%27name%27%20-%3E%20%27Inspect%20this%20tool%27%20.%20%27icon%27%20-%3E%20%27quit%27%20%7D%20.%0A%09%27browse%27%20-%3E%20%23%7B%20%27name%27%20-%3E%20%27Browse%20this%20tool%27%20.%20%27icon%27%20-%3E%20%27copy%27%20%7D%20.%0A%09%27reload%27%20-%3E%20%23%7B%20%27name%27%20-%3E%20%27Reload%20this%20tool%27%20%7D%20.%0A%09%27confirmRemove%27%20-%3E%20%23%7B%20%27name%27%20-%3E%20%27Remove%20this%20tool%27%20.%20%27icon%27%20-%3E%20%27delete%27%20%7D%0A%09%7D'),
messageSends: [unescape("-%3E")],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_confirmedRemove'),
smalltalk.method({
selector: unescape('confirmedRemove'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
smalltalk.send(smalltalk.send(self, "_class", []), "_remove_", [self['@id']]);
return self;},
args: [],
source: unescape('confirmedRemove%0A%09div%20asJQuery%20remove.%0A%09self%20class%20remove%3A%20id'),
messageSends: ["remove", "asJQuery", "remove:", "class"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_confirmRemove'),
smalltalk.method({
selector: unescape('confirmRemove'),
category: 'actions',
fn: function (){
var self=this;
((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [unescape("Remove%20this%20tool%3F")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_remove", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_remove", []);})]));
return self;},
args: [],
source: unescape('confirmRemove%0A%09%28window%20confirm%3A%20%27Remove%20this%20tool%3F%27%29%0A%09%09ifTrue%3A%20%5B%20self%20remove%20%5D'),
messageSends: ["ifTrue:", "confirm:", "remove"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("amber-tool");
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27amber-tool%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_reload'),
smalltalk.method({
selector: unescape('reload'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_save", []);
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('reload%0A%09self%20save.%0A%09div%20asJQuery%20remove.%0A%09self%20appendToJQuery%3A%20%27body%27%20asJQuery.'),
messageSends: ["save", "remove", "asJQuery", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.ToolWidget);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('open%0A%09self%20appendToJQuery%3A%20%27body%27%20asJQuery.'),
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.ToolWidget);


smalltalk.ToolWidget.klass.iVarNames = ['allInstances','storage'];
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
self['@storage']=smalltalk.send((smalltalk.LocalStorage || LocalStorage), "_withScope_", [smalltalk.send(self, "_printString", [])]);
(function($rec){smalltalk.send($rec, "_initializeInstances", []);smalltalk.send($rec, "_load", []);return smalltalk.send($rec, "_saveAll", []);})(self);
return self;},
args: [],
source: unescape('initialize%0A%09storage%20%3A%3D%20LocalStorage%20withScope%3A%20self%20printString.%0A%09self%0A%09%09initializeInstances%3B%0A%09%09load%3B%0A%09%09saveAll.'),
messageSends: ["withScope:", "printString", "initializeInstances", "load", "saveAll"],
referencedClasses: ["LocalStorage"]
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_openNew'),
smalltalk.method({
selector: unescape('openNew'),
category: 'instance creation',
fn: function (){
var self=this;
var newInstance=nil;
newInstance=smalltalk.send(self, "_new", []);
smalltalk.send(self, "_persist_", [newInstance]);
smalltalk.send(newInstance, "_open", []);
return newInstance;
return self;},
args: [],
source: unescape('openNew%0A%09%7C%20newInstance%20%7C%0A%09newInstance%20%3A%3D%20self%20new.%0A%09self%20persist%3A%20newInstance.%0A%09newInstance%20open.%0A%09%5EnewInstance'),
messageSends: ["new", "persist:", "open"],
referencedClasses: []
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_allInstances'),
smalltalk.method({
selector: unescape('allInstances'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@allInstances']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeInstances", []);})() : $receiver;
return self['@allInstances'];
return self;},
args: [],
source: unescape('allInstances%0A%09allInstances%20ifNil%3A%20%5B%20self%20initializeInstances%20%5D.%0A%09%5EallInstances'),
messageSends: ["ifNil:", "initializeInstances"],
referencedClasses: []
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_removeAll'),
smalltalk.method({
selector: unescape('removeAll'),
category: 'persistence',
fn: function (){
var self=this;
smalltalk.send(self['@allInstances'], "_do_", [(function(ea){return smalltalk.send(ea, "_remove", []);})]);
smalltalk.send(self, "_initializeInstances", []);
return self;},
args: [],
source: unescape('removeAll%0A%09allInstances%20do%3A%20%5B%20%3Aea%20%7C%20ea%20remove%20%5D.%0A%09self%20initializeInstances.'),
messageSends: ["do:", "remove", "initializeInstances"],
referencedClasses: []
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_saveAll'),
smalltalk.method({
selector: unescape('saveAll'),
category: 'persistence',
fn: function (){
var self=this;
smalltalk.send(self['@storage'], "_at_put_", ["instances", smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self['@allInstances'], "_collect_", [(function(ea){return smalltalk.send(ea, "_asHashedCollection", []);})])])]);
return self;},
args: [],
source: unescape('saveAll%0A%09storage%0A%09%09at%3A%20%27instances%27%0A%09%09put%3A%20%28JSON%20stringify%3A%20%28allInstances%20collect%3A%20%5B%20%3Aea%20%7C%20ea%20asHashedCollection%20%5D%29%29'),
messageSends: ["at:put:", "stringify:", "collect:", "asHashedCollection"],
referencedClasses: ["JSON"]
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
category: 'instance creation',
fn: function (aJSON){
var self=this;
return (function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(aJSON, "_id", [])]);smalltalk.send($rec, "_position_", [smalltalk.send(smalltalk.send(aJSON, "_x", []), "__at", [smalltalk.send(aJSON, "_y", [])])]);smalltalk.send($rec, "_size_", [smalltalk.send(smalltalk.send(aJSON, "_width", []), "__at", [smalltalk.send(aJSON, "_height", [])])]);smalltalk.send($rec, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aJSON"],
source: unescape('fromJSON%3A%20aJSON%0A%09%5Eself%20new%0A%09%09id%3A%20aJSON%20id%3B%0A%09%09position%3A%20%28aJSON%20x%29@%28aJSON%20y%29%3B%0A%09%09size%3A%20%28aJSON%20width%29@%28aJSON%20height%29%3B%0A%09%09appendToJQuery%3A%20%27body%27%20asJQuery%3B%0A%09%09yourself.'),
messageSends: ["id:", "id", "position:", unescape("@"), "x", "y", "size:", "width", "height", "appendToJQuery:", "asJQuery", "yourself", "new"],
referencedClasses: []
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_load'),
smalltalk.method({
selector: unescape('load'),
category: 'persistence',
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
return self;},
args: [],
source: unescape('load%0A%09%7C%20jsObject%20dictionary%20%7C%0A%09dictionary%20%3A%3D%20Dictionary%20new.%0A%09jsObject%20%3A%3D%20%28JSON%20parse%3A%20%28storage%20at%3A%20%27instances%27%20ifAbsentPut%3A%20%27%7B%7D%27%29%29%20jsObject.%0A%09%3Cfor%28var%20i%20in%20jsObject%29%20%7B%0A%09%09dictionary._at_put_%28i%2C%20jsObject%5Bi%5D%29%3B%0A%09%7D%3E.%0A%09dictionary%20keysAndValuesDo%3A%20%5B%20%3Akey%20%3Avalue%20%7C%20allInstances%20at%3A%20key%20put%3A%20%28self%20fromJSON%3A%20value%29%20%5D.'),
messageSends: ["new", "jsObject", "parse:", "at:ifAbsentPut:", "keysAndValuesDo:", "at:put:", "fromJSON:"],
referencedClasses: ["Dictionary", "JSON"]
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'persistence',
fn: function (anInstanceId){
var self=this;
smalltalk.send(self['@allInstances'], "_removeKey_", [smalltalk.send(anInstanceId, "_asString", [])]);
smalltalk.send(self, "_saveAll", []);
return self;},
args: ["anInstanceId"],
source: unescape('remove%3A%20anInstanceId%0A%09allInstances%20removeKey%3A%20anInstanceId%20asString.%0A%09self%20saveAll.'),
messageSends: ["removeKey:", "asString", "saveAll"],
referencedClasses: []
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_initializeInstances'),
smalltalk.method({
selector: unescape('initializeInstances'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self['@storage'], "_at_ifAbsentPut_", ["instances", unescape("%7B%7D")]);
self['@allInstances']=smalltalk.HashedCollection._fromPairs_([]);
return self;},
args: [],
source: unescape('initializeInstances%0A%09storage%20at%3A%20%27instances%27%20ifAbsentPut%3A%20%27%7B%7D%27.%0A%09allInstances%20%3A%3D%20%23%7B%7D.'),
messageSends: ["at:ifAbsentPut:"],
referencedClasses: []
}),
smalltalk.ToolWidget.klass);

smalltalk.addMethod(
unescape('_persist_'),
smalltalk.method({
selector: unescape('persist%3A'),
category: 'persistence',
fn: function (aToolWidget){
var self=this;
smalltalk.send(smalltalk.send(self, "_allInstances", []), "_at_put_", [smalltalk.send(smalltalk.send(aToolWidget, "_id", []), "_asString", []), aToolWidget]);
smalltalk.send(self, "_saveAll", []);
return self;},
args: ["aToolWidget"],
source: unescape('persist%3A%20aToolWidget%0A%09self%20allInstances%20at%3A%20aToolWidget%20id%20asString%20put%3A%20aToolWidget.%0A%09self%20saveAll'),
messageSends: ["at:put:", "allInstances", "asString", "id", "saveAll"],
referencedClasses: []
}),
smalltalk.ToolWidget.klass);


smalltalk.addClass('WorkspaceTool', smalltalk.ToolWidget, ['editor', 'receiver', 'onDoIt'], 'Tools');
smalltalk.WorkspaceTool.comment=unescape('A%20WorkspaceTool%0A%09-%20has%20an%20Ace%20editor%0A%09-%20adds%20additional%20menuItems%20and%20keybindings%3A%0A%09%09-%20printIt%20%3CCTRL-p%3E%0A%09%09-%20doIt%20%3CCTRL-d%3E%0A%09%09-%20browseIt%20%3CCTRL-b%3E%0A%09%09-%20inspectIt%20%3CCTRL-i%3E')
smalltalk.addMethod(
unescape('_initializeCommands'),
smalltalk.method({
selector: unescape('initializeCommands'),
category: 'commands',
fn: function (){
var self=this;
smalltalk.send(self, "_addCommand_named_do_", [unescape("Ctrl-P"), "printIt", (function(){return smalltalk.send(self, "_printIt", []);})]);
smalltalk.send(self, "_addCommand_named_do_", [unescape("Ctrl-D"), "doIt", (function(){return smalltalk.send(self, "_doIt", []);})]);
smalltalk.send(self, "_addCommand_named_do_", [unescape("Ctrl-I"), "inspectIt", (function(){return smalltalk.send(self, "_inspectIt", []);})]);
smalltalk.send(self, "_addCommand_named_do_", [unescape("Ctrl-B"), "browseIt", (function(){return smalltalk.send(self, "_browseIt", []);})]);
return self;},
args: [],
source: unescape('initializeCommands%0A%09self%20addCommand%3A%20%27Ctrl-P%27%20named%3A%20%27printIt%27%20do%3A%20%5B%20self%20printIt%20%5D.%0A%09self%20addCommand%3A%20%27Ctrl-D%27%20named%3A%20%27doIt%27%20do%3A%20%5B%20self%20doIt%20%5D.%0A%09self%20addCommand%3A%20%27Ctrl-I%27%20named%3A%20%27inspectIt%27%20do%3A%20%5B%20self%20inspectIt%20%5D.%0A%09self%20addCommand%3A%20%27Ctrl-B%27%20named%3A%20%27browseIt%27%20do%3A%20%5B%20self%20browseIt%20%5D.'),
messageSends: ["addCommand:named:do:", "printIt", "doIt", "inspectIt", "browseIt"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_printIt'),
smalltalk.method({
selector: unescape('printIt'),
category: 'actions',
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
return self;},
args: [],
source: unescape('printIt%0A%09%7C%20result%20range%20newEnd%20%7C%0A%09result%20%3A%3D%20self%20doIt%20printString.%0A%09range%20%3A%3D%20editor%20getSelectionRange.%0A%09editor%20moveCursorToPosition%3A%20range%20end.%0A%09newEnd%20%3A%3D%20editor%20getSession%20insert%3A%20range%20end%20text%3A%20%27%20%27%2C%20result%2C%20%27%20%27.%0A%09range%20setStart%3A%20range%20end%3B%20setEnd%3A%20newEnd.%0A%09editor%20selection%20setSelectionRange%3A%20range.%0A%09self%20save.%0A%09editor%20focus.'),
messageSends: ["printString", "doIt", "getSelectionRange", "moveCursorToPosition:", "end", "insert:text:", "getSession", unescape("%2C"), "setStart:", "setEnd:", "setSelectionRange:", "selection", "save", "focus"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_addCommand_named_do_'),
smalltalk.method({
selector: unescape('addCommand%3Anamed%3Ado%3A'),
category: 'commands',
fn: function (aKeyBindingString, aNameString, aBlock){
var self=this;
smalltalk.send(smalltalk.send(self['@editor'], "_commands", []), "_addCommand_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", [aNameString]),smalltalk.send("bindKey", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("win", "__minus_gt", [aKeyBindingString]),smalltalk.send("mac", "__minus_gt", [aKeyBindingString]),smalltalk.send("sender", "__minus_gt", ["editor"])])]),smalltalk.send("exec", "__minus_gt", [aBlock])])]);
return self;},
args: ["aKeyBindingString", "aNameString", "aBlock"],
source: unescape('addCommand%3A%20aKeyBindingString%20named%3A%20aNameString%20do%3A%20aBlock%0A%09editor%20commands%20addCommand%3A%20%23%7B%0A%09%09%27name%27%20-%3E%20aNameString%20.%0A%09%09%27bindKey%27%20-%3E%20%23%7B%0A%09%09%09%27win%27%20-%3E%20aKeyBindingString%20.%0A%09%09%09%27mac%27%20-%3E%20aKeyBindingString%20.%0A%09%09%09%27sender%27%20-%3E%20%27editor%27%20%7D%20.%0A%09%09%27exec%27%20-%3E%20aBlock%20%7D.'),
messageSends: ["addCommand:", "commands", unescape("-%3E")],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_currentLine'),
smalltalk.method({
selector: unescape('currentLine'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursorPosition", []), "_row", [])]);
return self;},
args: [],
source: unescape('currentLine%0A%09%5Eeditor%20getSession%20getLine%3A%20editor%20getCursorPosition%20row'),
messageSends: ["getLine:", "getSession", "row", "getCursorPosition"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_currentLineOrSelection'),
smalltalk.method({
selector: unescape('currentLineOrSelection'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self['@editor'], "_getSelection", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_currentLine", []);})() : (function(){return smalltalk.send(self, "_selection", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_currentLine", []);}), (function(){return smalltalk.send(self, "_selection", []);})]));
return self;},
args: [],
source: unescape('currentLineOrSelection%0A%09%5Eeditor%20getSelection%20isEmpty%0A%09%09ifTrue%3A%20%5B%20self%20currentLine%20%5D%0A%09%09ifFalse%3A%20%5B%20self%20selection%20%5D'),
messageSends: ["ifTrue:ifFalse:", "isEmpty", "getSelection", "currentLine", "selection"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

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
smalltalk.WorkspaceTool);

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
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_selection'),
smalltalk.method({
selector: unescape('selection'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_doc", []), "_getTextRange_", [smalltalk.send(self['@editor'], "_getSelectionRange", [])]);
return self;},
args: [],
source: unescape('selection%0A%09%5Eeditor%20getSession%20doc%20getTextRange%3A%20editor%20getSelectionRange'),
messageSends: ["getTextRange:", "doc", "getSession", "getSelectionRange"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_val'),
smalltalk.method({
selector: unescape('val'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@editor']) == nil || $receiver == undefined) ? (function(){return "";})() : (function(){return smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_getValue", []);})();
return self;},
args: [],
source: unescape('val%0A%09%5Eeditor%0A%09%09ifNil%3A%20%5B%20%27%27%20%5D%0A%09%09ifNotNil%3A%20%5B%20editor%20getSession%20getValue%20%5D'),
messageSends: ["ifNil:ifNotNil:", "getValue", "getSession"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_val_'),
smalltalk.method({
selector: unescape('val%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_setValue_", [aString]);
return self;},
args: ["aString"],
source: unescape('val%3A%20aString%0A%09editor%20getSession%20setValue%3A%20aString'),
messageSends: ["setValue:", "getSession"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

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
source: unescape('clear%0A%09self%20val%3A%20%27%27'),
messageSends: ["val:"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

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
smalltalk.send(self, "_save", []);
return result;
return self;},
args: [],
source: unescape('doIt%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20self%20eval%3A%20self%20currentLineOrSelection.%0A%09self%20onDoIt%20ifNotNil%3A%20%5B%20self%20onDoIt%20value%20%5D.%0A%09self%20save.%0A%09%5Eresult'),
messageSends: ["eval:", "currentLineOrSelection", "ifNotNil:", "onDoIt", "value", "save"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

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
source: unescape('eval%3A%20aString%0A%09%7C%20compiler%20%20%7C%0A%09compiler%20%3A%3D%20Compiler%20new.%0A%09%5B%20compiler%20parseExpression%3A%20aString%20%5D%20on%3A%20Error%20do%3A%20%5B%20%3Aex%20%7C%0A%09%09%5Ewindow%20alert%3A%20ex%20messageText%20%5D.%0A%09%5E%28compiler%20load%3A%20%27doIt%20%5E%5B%27%2C%20aString%2C%20%27%5D%20value%27%20forClass%3A%20DoIt%29%20fn%20applyTo%3A%20self%20receiver%20arguments%3A%20%23%28%29'),
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "applyTo:arguments:", "fn", "load:forClass:", unescape("%2C"), "receiver"],
referencedClasses: ["Compiler", "Error", "DoIt"]
}),
smalltalk.WorkspaceTool);

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
source: unescape('receiver%0A%09%5Ereceiver%20ifNil%3A%20%5B%20DoIt%20new%20%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.WorkspaceTool);

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
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_inspectIt'),
smalltalk.method({
selector: unescape('inspectIt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_save", []);
smalltalk.send(smalltalk.send(self, "_doIt", []), "_inspect", []);
return self;},
args: [],
source: unescape('inspectIt%0A%09self%20save.%0A%09self%20doIt%20inspect'),
messageSends: ["save", "inspect", "doIt"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

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
source: unescape('fileIn%0A%09Importer%20new%20import%3A%20self%20currentLineOrSelection%20readStream'),
messageSends: ["import:", "new", "readStream", "currentLineOrSelection"],
referencedClasses: ["Importer"]
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_editorId'),
smalltalk.method({
selector: unescape('editorId'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(unescape("ace-"), "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;},
args: [],
source: unescape('editorId%0A%09%5E%27ace-%27%2C%20id%20asString'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_asHashedCollection'),
smalltalk.method({
selector: unescape('asHashedCollection'),
category: 'converting',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["val", smalltalk.send(self, "_val", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_asHashedCollection", [], smalltalk.ToolWidget));
return self;},
args: [],
source: unescape('asHashedCollection%0A%09%5E%20super%20asHashedCollection%0A%09%09at%3A%20%27val%27%20put%3A%20self%20val%3B%0A%09%09yourself.'),
messageSends: ["at:put:", "val", "yourself", "asHashedCollection"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
category: 'initialization',
fn: function (){
var self=this;
var mode=nil;
self['@editor']=smalltalk.send((typeof ace == 'undefined' ? nil : ace), "_edit_", [smalltalk.send(self, "_editorId", [])]);
mode=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_require_", [unescape("ace/mode/smalltalk")]), "_at_", ["Mode"]);
smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_setMode_", [smalltalk.send(mode, "_new", [])]);
smalltalk.send(self, "_initializeCommands", []);
smalltalk.send(self, "_val_", [unescape("%22Check%20out%20the%20contextmenu%20%28right%20click%29%22")]);
return self;},
args: [],
source: unescape('initializeEditor%0A%09%7C%20mode%20%7C%0A%09editor%20%3A%3D%20ace%20edit%3A%20self%20editorId.%0A%09mode%20%3A%3D%20%28window%20require%3A%20%27ace/mode/smalltalk%27%29%20at%3A%20%27Mode%27.%0A%09editor%20getSession%20setMode%3A%20mode%20new.%0A%09%22editor%20setTheme%3A%20%27ace/theme/solarized_dark%27.%22%0A%09self%20initializeCommands.%0A%09self%20val%3A%20%27%22Check%20out%20the%20contextmenu%20%28right%20click%29%22%27.%0A%09%22editor%20getSession%20on%3A%20%27change%27%20do%3A%20%5B%20self%20save%20%5D.%22'),
messageSends: ["edit:", "editorId", "at:", "require:", "setMode:", "getSession", "new", "initializeCommands", "val:"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_renderBody'),
smalltalk.method({
selector: unescape('renderBody'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@body'], "_contents_", [(function(html){return (function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_editorId", [])]);return smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("width:", "__comma", [smalltalk.send(smalltalk.send(self['@size'], "_x", []), "_printString", [])]), "__comma", [unescape("px%3B%20height%3A")]), "__comma", [smalltalk.send(((($receiver = smalltalk.send(self['@size'], "_y", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), "_printString", [])]), "__comma", [unescape("px%3B")])]);})(smalltalk.send(html, "_div", []));})]);
smalltalk.send(self, "_initializeEditor", []);
return self;},
args: [],
source: unescape('renderBody%0A%09body%20contents%3A%20%5B%20%3Ahtml%20%7C%0A%09%09html%20div%20id%3A%20self%20editorId%3B%20style%3A%20%27width%3A%27%2C%20size%20x%20printString%2C%20%27px%3B%20height%3A%27%2C%20%28size%20y%20-%2020%29%20printString%2C%20%27px%3B%27%20%5D.%0A%09self%20initializeEditor.'),
messageSends: ["contents:", "id:", "editorId", "style:", unescape("%2C"), "printString", "x", unescape("-"), "y", "div", "initializeEditor"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_menuItems'),
smalltalk.method({
selector: unescape('menuItems'),
category: 'menu',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["doIt", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Do It"]),smalltalk.send("accesskey", "__minus_gt", ["d"])])]);smalltalk.send($rec, "_at_put_", ["printIt", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Print It"]),smalltalk.send("accesskey", "__minus_gt", ["p"])])]);smalltalk.send($rec, "_at_put_", ["inspectIt", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Inspect It"]),smalltalk.send("accesskey", "__minus_gt", ["i"])])]);smalltalk.send($rec, "_at_put_", ["browseIt", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Browse It"]),smalltalk.send("accesskey", "__minus_gt", ["b"])])]);smalltalk.send($rec, "_at_put_", ["sep2", unescape("----------")]);smalltalk.send($rec, "_at_put_", ["fileIn", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["File In"]),smalltalk.send("accesskey", "__minus_gt", ["f"])])]);smalltalk.send($rec, "_at_put_", ["clear", smalltalk.HashedCollection._fromPairs_([smalltalk.send("name", "__minus_gt", ["Clear"])])]);smalltalk.send($rec, "_at_put_", ["sep1", unescape("----------")]);smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_menuItems", [], smalltalk.ToolWidget)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
return self;},
args: [],
source: unescape('menuItems%0A%09%5EHashedCollection%20new%0A%09%09at%3A%20%27doIt%27%20put%3A%20%23%7B%20%27name%27%20-%3E%20%27Do%20It%27%20.%20%27accesskey%27%20-%3E%20%27d%27%20%7D%3B%0A%09%09at%3A%20%27printIt%27%20put%3A%20%23%7B%20%27name%27%20-%3E%20%27Print%20It%27%20.%20%27accesskey%27%20-%3E%20%27p%27%20%7D%3B%0A%09%09at%3A%20%27inspectIt%27%20put%3A%20%23%7B%20%27name%27%20-%3E%20%27Inspect%20It%27%20.%20%27accesskey%27%20-%3E%20%27i%27%20%7D%3B%0A%09%09at%3A%20%27browseIt%27%20put%3A%20%23%7B%20%27name%27%20-%3E%20%27Browse%20It%27%20.%20%27accesskey%27%20-%3E%20%27b%27%20%7D%3B%0A%09%09at%3A%20%27sep2%27%20put%3A%20%27----------%27%3B%0A%09%09at%3A%20%27fileIn%27%20put%3A%20%23%7B%20%27name%27%20-%3E%20%27File%20In%27%20.%20%27accesskey%27%20-%3E%20%27f%27%20%7D%3B%0A%09%09at%3A%20%27clear%27%20put%3A%20%23%7B%20%27name%27%20-%3E%20%27Clear%27%20%7D%3B%0A%09%09at%3A%20%27sep1%27%20put%3A%20%27----------%27%3B%0A%09%09addAll%3A%20super%20menuItems%3B%0A%09%09yourself'),
messageSends: ["at:put:", unescape("-%3E"), "addAll:", "menuItems", "yourself", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@editor']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@editor'], "_destroy", []);})() : nil;
smalltalk.send(self, "_remove", [], smalltalk.ToolWidget);
return self;},
args: [],
source: unescape('remove%0A%09editor%20ifNotNil%3A%20%5B%20editor%20destroy%20%5D.%0A%09super%20remove'),
messageSends: ["ifNotNil:", "destroy", "remove"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_browseIt'),
smalltalk.method({
selector: unescape('browseIt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_save", []);
smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(smalltalk.send(self, "_doIt", []), "_class", [])]);
return self;},
args: [],
source: unescape('browseIt%0A%09self%20save.%0A%09Browser%20openOn%3A%20self%20doIt%20class'),
messageSends: ["save", "openOn:", "class", "doIt"],
referencedClasses: ["Browser"]
}),
smalltalk.WorkspaceTool);

smalltalk.addMethod(
unescape('_size_'),
smalltalk.method({
selector: unescape('size%3A'),
category: 'actions',
fn: function (aPoint){
var self=this;
smalltalk.send(self, "_size_", [aPoint], smalltalk.ToolWidget);
(($receiver = self['@editor']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@editor'], "_resize", []);})() : nil;
return self;},
args: ["aPoint"],
source: unescape('size%3A%20aPoint%0A%09super%20size%3A%20aPoint.%0A%09editor%20ifNotNil%3A%20%5B%20editor%20resize%20%5D.'),
messageSends: ["size:", "ifNotNil:", "resize"],
referencedClasses: []
}),
smalltalk.WorkspaceTool);


smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
category: 'not yet classified',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_val_", [smalltalk.send(anObject, "_val", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_fromJSON_", [anObject], smalltalk.ToolWidget.klass));
return self;},
args: ["anObject"],
source: unescape('fromJSON%3A%20anObject%0A%09%5E%28super%20fromJSON%3A%20anObject%29%0A%09%09val%3A%20anObject%20val%3B%0A%09%09yourself.'),
messageSends: ["val:", "val", "yourself", "fromJSON:"],
referencedClasses: []
}),
smalltalk.WorkspaceTool.klass);


smalltalk.addClass('InspectorTool', smalltalk.ToolWidget, ['object', 'variables'], 'Tools');
smalltalk.InspectorTool.comment=unescape('Examples%3A%0A%0A%09InspectorTool%20on%3A%20%27foo%27')
smalltalk.addMethod(
unescape('_inspect_'),
smalltalk.method({
selector: unescape('inspect%3A'),
category: 'initialization',
fn: function (anObject){
var self=this;
self['@object']=anObject;
self['@variables']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(self['@object'], "_inspectOn_", [self]);
return self;},
args: ["anObject"],
source: unescape('inspect%3A%20anObject%0A%09object%20%3A%3D%20anObject.%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09object%20inspectOn%3A%20self'),
messageSends: ["new", "inspectOn:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.InspectorTool);

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
smalltalk.InspectorTool);

smalltalk.addMethod(
unescape('_setVariables_'),
smalltalk.method({
selector: unescape('setVariables%3A'),
category: 'accessing',
fn: function (aDictionary){
var self=this;
smalltalk.send(self['@variables'], "_addAll_", [aDictionary]);
return self;},
args: ["aDictionary"],
source: unescape('setVariables%3A%20aDictionary%0A%09variables%20addAll%3A%20aDictionary'),
messageSends: ["addAll:"],
referencedClasses: []
}),
smalltalk.InspectorTool);

smalltalk.addMethod(
unescape('_renderBody'),
smalltalk.method({
selector: unescape('renderBody'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self['@body'], "_contents_", [(function(html){return smalltalk.send(html, "_h1_", [smalltalk.send(self['@object'], "_printString", [])]);})]);
return self;},
args: [],
source: unescape('renderBody%0A%09body%20contents%3A%20%5B%20%3Ahtml%20%7C%0A%09%09html%20h1%3A%20object%20printString%20%5D'),
messageSends: ["contents:", "h1:", "printString"],
referencedClasses: []
}),
smalltalk.InspectorTool);

smalltalk.addMethod(
unescape('_labelString'),
smalltalk.method({
selector: unescape('labelString'),
category: 'accessing',
fn: function (){
var self=this;
return self['@label'];
return self;},
args: [],
source: unescape('labelString%0A%09%5Elabel'),
messageSends: [],
referencedClasses: []
}),
smalltalk.InspectorTool);


smalltalk.addMethod(
unescape('_openOn_'),
smalltalk.method({
selector: unescape('openOn%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
var newInstance=nil;
newInstance=smalltalk.send(smalltalk.send(self, "_new", []), "_inspect_", [anObject]);
smalltalk.send(self, "_persist_", [newInstance]);
smalltalk.send(newInstance, "_open", []);
return newInstance;
return self;},
args: ["anObject"],
source: unescape('openOn%3A%20anObject%0A%09%7C%20newInstance%20%7C%0A%09newInstance%20%3A%3D%20self%20new%20inspect%3A%20anObject.%0A%09self%20persist%3A%20newInstance.%0A%09newInstance%20open.%0A%09%5EnewInstance%0A'),
messageSends: ["inspect:", "new", "persist:", "open"],
referencedClasses: []
}),
smalltalk.InspectorTool.klass);


