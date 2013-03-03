smalltalk.addPackage('Documentation', {});
smalltalk.addClass('ChapterSelectionAnnouncement', smalltalk.Object, ['id'], 'Documentation');
smalltalk.addMethod(
"_id",
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{}, smalltalk.ChapterSelectionAnnouncement)})},
args: [],
source: "id\x0a\x09^id",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChapterSelectionAnnouncement);

smalltalk.addMethod(
"_id_",
smalltalk.method({
selector: "id:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@id"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{aString:aString}, smalltalk.ChapterSelectionAnnouncement)})},
args: ["aString"],
source: "id: aString\x0a\x09id := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChapterSelectionAnnouncement);



smalltalk.addClass('ClassSelectionAnnouncement', smalltalk.Object, ['theClass'], 'Documentation');
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{}, smalltalk.ClassSelectionAnnouncement)})},
args: [],
source: "theClass\x0a\x09^theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSelectionAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass}, smalltalk.ClassSelectionAnnouncement)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSelectionAnnouncement);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass}, smalltalk.ClassSelectionAnnouncement.klass)})},
args: ["aClass"],
source: "on: aClass\x0a\x09^self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ClassSelectionAnnouncement.klass);


smalltalk.addClass('DocChapter', smalltalk.Widget, ['title', 'contents', 'parent', 'level'], 'Documentation');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.DocumentationBuilder || DocumentationBuilder))._current())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.DocChapter)})},
args: [],
source: "announcer\x0a\x09^DocumentationBuilder current announcer",
messageSends: ["announcer", "current"],
referencedClasses: ["DocumentationBuilder"]
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return [];
}, function($ctx1) {$ctx1.fill(self,"chapters",{}, smalltalk.DocChapter)})},
args: [],
source: "chapters\x0a\x09\x22A doc chapter can contain sub chapters\x22\x0a\x09^#()",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@contents"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.DocChapter)})},
args: [],
source: "contents\x0a\x09^contents ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@contents"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString}, smalltalk.DocChapter)})},
args: ["aString"],
source: "contents: aString\x0a\x09contents := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "doc_chapter";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.DocChapter)})},
args: [],
source: "cssClass\x0a\x09^'doc_chapter'",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_displayChapter_",
smalltalk.method({
selector: "displayChapter:",
category: 'actions',
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.DocumentationBuilder || DocumentationBuilder))._current())._widget())._displayChapter_(aChapter);
return self}, function($ctx1) {$ctx1.fill(self,"displayChapter:",{aChapter:aChapter}, smalltalk.DocChapter)})},
args: ["aChapter"],
source: "displayChapter: aChapter\x0a\x09DocumentationBuilder current widget displayChapter: aChapter",
messageSends: ["displayChapter:", "widget", "current"],
referencedClasses: ["DocumentationBuilder"]
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_htmlContents",
smalltalk.method({
selector: "htmlContents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st((smalltalk.Showdown || Showdown))._at_(smalltalk.symbolFor("converter")))._new())._makeHtml_(_st(self)._contents());
return $1;
}, function($ctx1) {$ctx1.fill(self,"htmlContents",{}, smalltalk.DocChapter)})},
args: [],
source: "htmlContents\x0a\x09^(Showdown at: #converter) new makeHtml: self contents",
messageSends: ["makeHtml:", "contents", "new", "at:"],
referencedClasses: ["Showdown"]
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_id",
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._title())._replace_with_(" ","-");
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{}, smalltalk.DocChapter)})},
args: [],
source: "id\x0a\x09\x22The id is used in url fragments. \x0a\x09It must be unique amoung all chapters\x22\x0a\x09^self title replace: ' ' with: '-'",
messageSends: ["replace:with:", "title"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
_st(self)._subscribe();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.DocChapter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self subscribe",
messageSends: ["initialize", "subscribe"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._parent();
if(($receiver = $2) == nil || $receiver == undefined){
$1=(1);
} else {
$1=_st(_st(_st(self)._parent())._level()).__plus((1));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"level",{}, smalltalk.DocChapter)})},
args: [],
source: "level\x0a\x09^self parent ifNil: [1] ifNotNil: [self parent level +1]",
messageSends: ["ifNil:ifNotNil:", "+", "level", "parent"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@level"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"level:",{anInteger:anInteger}, smalltalk.DocChapter)})},
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{}, smalltalk.DocChapter)})},
args: [],
source: "parent\x0a\x09^parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parent"]=aChapter;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aChapter:aChapter}, smalltalk.DocChapter)})},
args: ["aChapter"],
source: "parent: aChapter\x0a\x09parent := aChapter",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_renderDocOn_",
smalltalk.method({
selector: "renderDocOn:",
category: 'rendering',
fn: function (html){
var self=this;
var div;
return smalltalk.withContext(function($ctx1) { _st(_st(html)._h1())._with_(_st(self)._title());
_st(self)._renderNavigationOn_(html);
div=_st(_st(html)._div())._class_("contents");
_st(_st(div)._asJQuery())._html_(_st(self)._htmlContents());
return self}, function($ctx1) {$ctx1.fill(self,"renderDocOn:",{html:html,div:div}, smalltalk.DocChapter)})},
args: ["html"],
source: "renderDocOn: html\x0a\x09| div |\x0a\x09html h1 with: self title.\x0a\x09self renderNavigationOn: html.\x0a\x09div := html div class: 'contents'.\x0a\x09div asJQuery html: self htmlContents",
messageSends: ["with:", "title", "h1", "renderNavigationOn:", "class:", "div", "html:", "htmlContents", "asJQuery"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_renderLinksOn_",
smalltalk.method({
selector: "renderLinksOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(html)._ul();
_st($1)._class_("links");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._chapters())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {$3=_st(html)._a();
_st($3)._with_(_st(each)._title());
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {return _st(self)._selectChapter_(each);
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderLinksOn:",{html:html}, smalltalk.DocChapter)})},
args: ["html"],
source: "renderLinksOn: html\x0a\x09html ul \x0a\x09\x09class: 'links';\x0a\x09\x09with: [\x0a\x09\x09\x09self chapters do: [:each |\x0a\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09with: each title;\x0a\x09\x09\x09\x09\x09\x09onClick: [self selectChapter: each]]]]",
messageSends: ["class:", "ul", "with:", "do:", "title", "a", "onClick:", "selectChapter:", "li", "chapters"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_renderNavigationOn_",
smalltalk.method({
selector: "renderNavigationOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$5,$3;
$1=_st(self)._parent();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(html)._div();
_st($2)._class_("navigation");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {$4=_st(html)._a();
_st($4)._with_(_st("← back to ").__comma(_st(_st(self)._parent())._title()));
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._selectChapter_(_st(self)._parent());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderNavigationOn:",{html:html}, smalltalk.DocChapter)})},
args: ["html"],
source: "renderNavigationOn: html\x0a\x09self parent ifNotNil: [\x0a\x09\x09html div \x0a\x09\x09\x09class: 'navigation'; with: [\x0a\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09with: '← back to ', self parent title;\x0a\x09\x09\x09\x09\x09onClick: [self selectChapter: self parent]]]",
messageSends: ["ifNotNil:", "class:", "div", "with:", ",", "title", "parent", "a", "onClick:", "selectChapter:"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_(_st(self)._cssClass());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._renderDocOn_(html);
return _st(self)._renderLinksOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.DocChapter)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: self cssClass;\x0a\x09\x09with: [\x0a\x09\x09\x09self renderDocOn: html.\x0a\x09\x09\x09self renderLinksOn: html]",
messageSends: ["class:", "cssClass", "div", "with:", "renderDocOn:", "renderLinksOn:"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_selectChapter_",
smalltalk.method({
selector: "selectChapter:",
category: 'actions',
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(document)._location())._hash_(_st(aChapter)._id());
return self}, function($ctx1) {$ctx1.fill(self,"selectChapter:",{aChapter:aChapter}, smalltalk.DocChapter)})},
args: ["aChapter"],
source: "selectChapter: aChapter\x0a\x09document location hash: aChapter id",
messageSends: ["hash:", "id", "location"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_selectClass_",
smalltalk.method({
selector: "selectClass:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.DocumentationBuilder || DocumentationBuilder))._current())._announcer())._announce_(_st((smalltalk.ClassSelectionAnnouncement || ClassSelectionAnnouncement))._on_(aClass));
return self}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass}, smalltalk.DocChapter)})},
args: ["aClass"],
source: "selectClass: aClass\x0a\x09DocumentationBuilder current announcer announce: (ClassSelectionAnnouncement on: aClass)",
messageSends: ["announce:", "on:", "announcer", "current"],
referencedClasses: ["ClassSelectionAnnouncement", "DocumentationBuilder"]
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_subscribe",
smalltalk.method({
selector: "subscribe",
category: 'subscriptions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._announcer())._on_do_((smalltalk.ChapterSelectionAnnouncement || ChapterSelectionAnnouncement),(function(ann){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(ann)._id()).__eq(_st(self)._id());
if(smalltalk.assert($1)){
return _st(self)._displayChapter_(self);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"subscribe",{}, smalltalk.DocChapter)})},
args: [],
source: "subscribe\x0a\x09self announcer on: ChapterSelectionAnnouncement do: [:ann |\x0a\x09\x09ann id = self id ifTrue: [self displayChapter: self]]",
messageSends: ["on:do:", "ifTrue:", "displayChapter:", "=", "id", "announcer"],
referencedClasses: ["ChapterSelectionAnnouncement"]
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@title"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.DocChapter)})},
args: [],
source: "title\x0a\x09^title ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString}, smalltalk.DocChapter)})},
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocChapter);



smalltalk.addClass('ClassDocChapter', smalltalk.DocChapter, ['theClass'], 'Documentation');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(_st(self)._theClass())._comment())._isEmpty();
if(smalltalk.assert($2)){
$1=_st(_st(_st(self)._theClass())._name()).__comma(" is not documented yet.");
} else {
$1=_st(_st(self)._theClass())._comment();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.ClassDocChapter)})},
args: [],
source: "contents\x0a\x09^self theClass comment isEmpty\x0a\x09\x09ifTrue: [self theClass name, ' is not documented yet.']\x0a\x09\x09ifFalse: [self theClass comment]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "theClass", "comment", "isEmpty"],
referencedClasses: []
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("doc_class ").__comma(smalltalk.DocChapter.fn.prototype._cssClass.apply(_st(self), []));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.ClassDocChapter)})},
args: [],
source: "cssClass\x0a\x09^'doc_class ', super cssClass",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_initializeWithClass_",
smalltalk.method({
selector: "initializeWithClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithClass:",{aClass:aClass}, smalltalk.ClassDocChapter)})},
args: ["aClass"],
source: "initializeWithClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_renderLinksOn_",
smalltalk.method({
selector: "renderLinksOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(html)._ul();
_st($1)._class_("links");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {$3=_st(html)._a();
_st($3)._with_("Browse this class");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st((smalltalk.Browser || Browser))._openOn_(_st(self)._theClass());
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderLinksOn:",{html:html}, smalltalk.ClassDocChapter)})},
args: ["html"],
source: "renderLinksOn: html\x0a\x09html ul \x0a\x09\x09class: 'links';\x0a\x09\x09with: [\x0a\x09\x09\x09html li with: [html a\x0a\x09\x09\x09\x09with: 'Browse this class';\x0a\x09\x09\x09\x09onClick: [Browser openOn: self theClass]]]",
messageSends: ["class:", "ul", "with:", "a", "onClick:", "openOn:", "theClass", "li"],
referencedClasses: ["Browser"]
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_subscribe",
smalltalk.method({
selector: "subscribe",
category: 'subscriptions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.DocChapter.fn.prototype._subscribe.apply(_st(self), []);
_st(_st(self)._announcer())._on_do_((smalltalk.ClassSelectionAnnouncement || ClassSelectionAnnouncement),(function(ann){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(ann)._theClass()).__eq(_st(self)._theClass());
if(smalltalk.assert($1)){
return _st(self)._selectChapter_(self);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"subscribe",{}, smalltalk.ClassDocChapter)})},
args: [],
source: "subscribe\x0a\x09super subscribe.\x0a\x09self announcer \x0a\x09\x09on: ClassSelectionAnnouncement do: [:ann |\x0a\x09\x09\x09ann theClass = self theClass ifTrue: [\x0a\x09\x09\x09\x09self selectChapter: self]]",
messageSends: ["subscribe", "on:do:", "ifTrue:", "selectChapter:", "=", "theClass", "announcer"],
referencedClasses: ["ClassSelectionAnnouncement"]
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{}, smalltalk.ClassDocChapter)})},
args: [],
source: "theClass\x0a\x09^theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._theClass())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.ClassDocChapter)})},
args: [],
source: "title\x0a\x09^self theClass name",
messageSends: ["name", "theClass"],
referencedClasses: []
}),
smalltalk.ClassDocChapter);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._basicNew();
_st($2)._initializeWithClass_(aClass);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass}, smalltalk.ClassDocChapter.klass)})},
args: ["aClass"],
source: "on: aClass\x0a\x09^self basicNew\x0a\x09\x09initializeWithClass: aClass;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["initializeWithClass:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.ClassDocChapter.klass);


smalltalk.addClass('ClassesIndexChapter', smalltalk.DocChapter, [], 'Documentation');
smalltalk.addMethod(
"_alphabet",
smalltalk.method({
selector: "alphabet",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}, function($ctx1) {$ctx1.fill(self,"alphabet",{}, smalltalk.ClassesIndexChapter)})},
args: [],
source: "alphabet\x0a\x09^'ABCDEFGHIJKLMNOPQRSTUVWXYZ'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("index_doc ").__comma(smalltalk.DocChapter.fn.prototype._cssClass.apply(_st(self), []));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.ClassesIndexChapter)})},
args: [],
source: "cssClass\x0a\x09^'index_doc ', super cssClass",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
"_renderDocOn_",
smalltalk.method({
selector: "renderDocOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(html)._h1())._with_(_st(self)._title());
_st(_st(self)._alphabet())._do_((function(letter){
var classes;
return smalltalk.withContext(function($ctx2) {classes=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._select_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(each)._name())._first()).__eq(letter);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
classes;
_st(classes)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(html)._h2())._with_(letter);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(classes)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {$1=_st(html)._a();
_st($1)._with_(_st(each)._name());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {return _st(self)._selectClass_(each);
}, function($ctx6) {$ctx6.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({letter:letter,classes:classes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderDocOn:",{html:html}, smalltalk.ClassesIndexChapter)})},
args: ["html"],
source: "renderDocOn: html\x0a\x09html h1 with: self title.\x0a\x09self alphabet do: [:letter || classes |\x0a\x09\x09classes := Smalltalk current classes select: [:each | each name first = letter].\x0a\x09\x09classes ifNotEmpty: [html h2 with: letter].\x0a\x09\x09html ul with: [\x0a\x09\x09\x09(classes sorted: [:a :b | a name < b name]) \x0a\x09\x09\x09\x09do: [:each |\x0a\x09\x09\x09\x09\x09html li with: [html a \x0a\x09\x09\x09\x09\x09\x09with: each name;\x0a\x09\x09\x09\x09\x09\x09onClick: [self selectClass: each]]]]]",
messageSends: ["with:", "title", "h1", "do:", "select:", "=", "first", "name", "classes", "current", "ifNotEmpty:", "h2", "a", "onClick:", "selectClass:", "li", "sorted:", "<", "ul", "alphabet"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Smalltalk classes by index";
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.ClassesIndexChapter)})},
args: [],
source: "title\x0a\x09^'Smalltalk classes by index'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesIndexChapter);



smalltalk.addClass('PackageDocChapter', smalltalk.DocChapter, ['package', 'chapters'], 'Documentation');
smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@chapters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chapters",{}, smalltalk.PackageDocChapter)})},
args: [],
source: "chapters\x0a\x09^chapters",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Classes in package ").__comma(_st(_st(self)._package())._name())).__comma(":");
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.PackageDocChapter)})},
args: [],
source: "contents\x0a\x09^'Classes in package ', self package name, ':'",
messageSends: [",", "name", "package"],
referencedClasses: []
}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
"_initializeWithPackage_",
smalltalk.method({
selector: "initializeWithPackage:",
category: 'initialization',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
self["@package"]=aPackage;
self["@chapters"]=_st(_st(_st(aPackage)._classes())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.ClassDocChapter || ClassDocChapter))._on_(each);
_st($1)._parent_(self);
$2=_st($1)._yourself();
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithPackage:",{aPackage:aPackage}, smalltalk.PackageDocChapter)})},
args: ["aPackage"],
source: "initializeWithPackage: aPackage\x0a\x09package := aPackage.\x0a\x09chapters := (aPackage classes sorted: [:a :b | a name < b name]) collect: [:each |\x0a\x09\x09(ClassDocChapter on: each)\x0a\x09\x09\x09parent: self;\x0a\x09\x09\x09yourself]",
messageSends: ["collect:", "parent:", "on:", "yourself", "sorted:", "<", "name", "classes"],
referencedClasses: ["ClassDocChapter"]
}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@package"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{}, smalltalk.PackageDocChapter)})},
args: [],
source: "package\x0a\x09^package",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("Package ").__comma(_st(_st(self)._package())._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.PackageDocChapter)})},
args: [],
source: "title\x0a\x09^'Package ', self package name",
messageSends: [",", "name", "package"],
referencedClasses: []
}),
smalltalk.PackageDocChapter);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._basicNew();
_st($2)._initializeWithPackage_(aPackage);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPackage:aPackage}, smalltalk.PackageDocChapter.klass)})},
args: ["aPackage"],
source: "on: aPackage\x0a\x09^self basicNew\x0a\x09\x09initializeWithPackage: aPackage;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["initializeWithPackage:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.PackageDocChapter.klass);


smalltalk.addClass('TutorialsChapter', smalltalk.DocChapter, [], 'Documentation');
smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=[_st(self)._firstAppChapter(),_st(self)._counterChapter()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chapters",{}, smalltalk.TutorialsChapter)})},
args: [],
source: "chapters\x0a\x09^{ self firstAppChapter. self counterChapter }",
messageSends: ["firstAppChapter", "counterChapter"],
referencedClasses: []
}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Here's a serie of tutorials. If you are new to Smalltalk, you can also learn Amber online with [ProfStef](http://www.amber-lang.net/learn.html)";
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.TutorialsChapter)})},
args: [],
source: "contents\x0a\x09^'Here''s a serie of tutorials. If you are new to Smalltalk, you can also learn Amber online with [ProfStef](http://www.amber-lang.net/learn.html)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
"_counterChapter",
smalltalk.method({
selector: "counterChapter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.DocChapter || DocChapter))._new();
_st($2)._title_("The counter application");
$3=_st($2)._contents_("\x0a\x0aThis tutorial will teach you how to build HTML with Amber using jQuery and the HTMLCanvas API. It is freely adapted from \x0athe [Seaside counter example](http://www.seaside.st/about/examples/counter)\x0a\x0a##The counter widget\x0a\x0aThe counter is the most basic example of a widget. It allows to increment and decrement a number by clicking a button.\x0a\x0aAmber already comes with a counter example in the `Examples` package. To avoid class name conflict, we'll name our counter class `TCounter`.\x0a\x0a    Widget subclass: #TCounter\x0a        instanceVariableNames: 'count header'\x0a        package: 'Tutorials'\x0a\x0aThe first method is used to initialize the component with the default state, in this case we set the counter to 0:\x0a\x0a    initialize\x0a        super initialize.\x0a        count := 0\x0a\x0aThe method used for rendering a widget is `#renderOn:`. It takes an instance of HTMLCanvas as parameter. \x0aThe `header` h1 kept as an instance variable, so when the count value change, we can update it's contents accordingly.\x0a\x0a    renderOn: html\x0a        header := html h1 \x0a            with: count asString;\x0a            yourself.\x0a        html button\x0a            with: '++';\x0a            onClick: [self increase].\x0a        html button\x0a            with: '--';\x0a            onClick: [self decrease]\x0a\x0aThe counter is almost ready. All we need now is to implement the two action methods `#increase` and `#decrease` to change the state \x0aof our counter and update its header.\x0a\x0a    increase\x0a        count := count + 1.\x0a        header contents: [:html | html with: count asString]\x0a\x0a    decrease\x0a        count := count - 1.\x0a        header contents: [:html | html with: count asString]\x0a\x0a\x0aThat's it! We can now display an instance of TCounter by rendering it on the page using jQuery:\x0a\x0a    TCounter new appendToJQuery: 'body' asJQuery\x0a\x0a");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"counterChapter",{}, smalltalk.TutorialsChapter)})},
args: [],
source: "counterChapter\x0a\x09^DocChapter new\x0a\x09\x09title: 'The counter application';\x0a\x09\x09contents: '\x0a\x0aThis tutorial will teach you how to build HTML with Amber using jQuery and the HTMLCanvas API. It is freely adapted from \x0athe [Seaside counter example](http://www.seaside.st/about/examples/counter)\x0a\x0a##The counter widget\x0a\x0aThe counter is the most basic example of a widget. It allows to increment and decrement a number by clicking a button.\x0a\x0aAmber already comes with a counter example in the `Examples` package. To avoid class name conflict, we''ll name our counter class `TCounter`.\x0a\x0a    Widget subclass: #TCounter\x0a        instanceVariableNames: ''count header''\x0a        package: ''Tutorials''\x0a\x0aThe first method is used to initialize the component with the default state, in this case we set the counter to 0:\x0a\x0a    initialize\x0a        super initialize.\x0a        count := 0\x0a\x0aThe method used for rendering a widget is `#renderOn:`. It takes an instance of HTMLCanvas as parameter. \x0aThe `header` h1 kept as an instance variable, so when the count value change, we can update it''s contents accordingly.\x0a\x0a    renderOn: html\x0a        header := html h1 \x0a            with: count asString;\x0a            yourself.\x0a        html button\x0a            with: ''++'';\x0a            onClick: [self increase].\x0a        html button\x0a            with: ''--'';\x0a            onClick: [self decrease]\x0a\x0aThe counter is almost ready. All we need now is to implement the two action methods `#increase` and `#decrease` to change the state \x0aof our counter and update its header.\x0a\x0a    increase\x0a        count := count + 1.\x0a        header contents: [:html | html with: count asString]\x0a\x0a    decrease\x0a        count := count - 1.\x0a        header contents: [:html | html with: count asString]\x0a\x0a\x0aThat''s it! We can now display an instance of TCounter by rendering it on the page using jQuery:\x0a\x0a    TCounter new appendToJQuery: ''body'' asJQuery\x0a\x0a'",
messageSends: ["title:", "new", "contents:"],
referencedClasses: ["DocChapter"]
}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
"_firstAppChapter",
smalltalk.method({
selector: "firstAppChapter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.DocChapter || DocChapter))._new();
_st($2)._title_("A first application");
$3=_st($2)._contents_("\x0a\x0aLet's make Hello World in Amber.\x0a\x0aFirst, you need a place for your new project. I made a new directory under amber:\x0a\x0a    amber/projects/hello\x0a\x0aThis will store your project files. To get started, add a new index.html file to this folder, as well as empty js and st folders.\x0a\x0aYour index.html can be really basic. The most important thing it does is include amber.js and run loadAmber. Here is a basic index.html you can use:\x0a\x0a\x0a    <!DOCTYPE html>\x0a    <html>\x0a      <head>\x0a        <title>My First Amber Project</title>\x0a        <script src=\x22../../js/amber.js\x22 type=\x22text/javascript\x22></script>\x0a        <script type=\x22text/javascript\x22>\x0a          loadAmber({\x0a            files: [],\x0a            prefix: 'projects/hello/js',\x0a            ready: function() {\x0a              \x0a            }}); \x0a        </script>\x0a      </head>\x0a      <body>\x0a        <article>\x0a          <h1>My First Amber Project</h1>\x0a          <button onclick=\x22smalltalk.Browser._open()\x22>class browser</button>\x0a          <button id=\x22sayHello\x22>say hello</button>\x0a        </article>\x0a      </body>\x0a    </html>\x0a\x0aNow start up amber with node.js and navigate to  http://localhost:4000/projects/hello/index.html\x0a\x0aIt's boring so far, so lets write some code. Click the button to open the class browser. Find an existing class and change its name to Hello and its package to HelloApp. \x0aThen click save. This creates a new class and leaves the old one intact, it doesn't overwrite it. Your class will look like this:\x0a\x0a    Object subclass: #Hello\x0a        instanceVariableNames: ''\x0a        package: 'HelloApp'\x0a\x0aNow click save and navigate to your new class in its new package.\x0a Then click 'commit package'. You just created a new class and saved your work. \x0aOn your file system check out your js and st folders. Your new class is now saved in both JavaScript and Smalltalk.\x0a\x0aNow, refresh your browser page and reopen the class browser. Oh no, your new class is gone! To load your new class automatically, you have to add it in index.html. Make your JavaScript look like this:\x0a\x0a\x0a    loadAmber({\x0a        files: ['HelloApp.js'],\x0a        prefix: 'projects/hello/js',\x0a        ready: function() {      \x0a    }}); \x0a\x0aSave and refresh again. Now your class is loaded and shows up in the class browser.\x0a\x0aNow, let's make this class do something. Create a new message in the class browser by navigating to your class, then clicking 'not yet classified' and fill in a simple message. Try this for example:\x0a\x0a    begin\x0a\x09\x22Makes me say hello to the user.\x22\x0a\x0a\x09| msg button |\x0a\x09msg := 'Hello world!'.\x0a\x09button := '#sayHello' asJQuery.\x0a\x09button click: [button after: '<p>' , msg , '</p>'].\x0a\x0aYour message isn't too helpful if it doesn't get called. Save it, commit the package, then edit index.html again. You can write JavaScript code that sends a message to Smalltalk:\x0a\x0a    loadAmber({\x0a        files: ['HelloApp.js'],\x0a        prefix: 'projects/hello/js', // path for js files i think\x0a        ready: function() {\x0a          $(function() {\x0a            smalltalk.Hello._new()._begin();\x0a          });\x0a    }}); \x0a\x0aFrom there, you can create new Smalltalk classes and messages to build up your app. Enjoy!\x0a");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstAppChapter",{}, smalltalk.TutorialsChapter)})},
args: [],
source: "firstAppChapter\x0a\x09^DocChapter new\x0a\x09\x09title: 'A first application';\x0a\x09\x09contents: '\x0a\x0aLet''s make Hello World in Amber.\x0a\x0aFirst, you need a place for your new project. I made a new directory under amber:\x0a\x0a    amber/projects/hello\x0a\x0aThis will store your project files. To get started, add a new index.html file to this folder, as well as empty js and st folders.\x0a\x0aYour index.html can be really basic. The most important thing it does is include amber.js and run loadAmber. Here is a basic index.html you can use:\x0a\x0a\x0a    <!DOCTYPE html>\x0a    <html>\x0a      <head>\x0a        <title>My First Amber Project</title>\x0a        <script src=\x22../../js/amber.js\x22 type=\x22text/javascript\x22></script>\x0a        <script type=\x22text/javascript\x22>\x0a          loadAmber({\x0a            files: [],\x0a            prefix: ''projects/hello/js'',\x0a            ready: function() {\x0a              \x0a            }}); \x0a        </script>\x0a      </head>\x0a      <body>\x0a        <article>\x0a          <h1>My First Amber Project</h1>\x0a          <button onclick=\x22smalltalk.Browser._open()\x22>class browser</button>\x0a          <button id=\x22sayHello\x22>say hello</button>\x0a        </article>\x0a      </body>\x0a    </html>\x0a\x0aNow start up amber with node.js and navigate to  http://localhost:4000/projects/hello/index.html\x0a\x0aIt''s boring so far, so lets write some code. Click the button to open the class browser. Find an existing class and change its name to Hello and its package to HelloApp. \x0aThen click save. This creates a new class and leaves the old one intact, it doesn''t overwrite it. Your class will look like this:\x0a\x0a    Object subclass: #Hello\x0a        instanceVariableNames: ''''\x0a        package: ''HelloApp''\x0a\x0aNow click save and navigate to your new class in its new package.\x0a Then click ''commit package''. You just created a new class and saved your work. \x0aOn your file system check out your js and st folders. Your new class is now saved in both JavaScript and Smalltalk.\x0a\x0aNow, refresh your browser page and reopen the class browser. Oh no, your new class is gone! To load your new class automatically, you have to add it in index.html. Make your JavaScript look like this:\x0a\x0a\x0a    loadAmber({\x0a        files: [''HelloApp.js''],\x0a        prefix: ''projects/hello/js'',\x0a        ready: function() {      \x0a    }}); \x0a\x0aSave and refresh again. Now your class is loaded and shows up in the class browser.\x0a\x0aNow, let''s make this class do something. Create a new message in the class browser by navigating to your class, then clicking ''not yet classified'' and fill in a simple message. Try this for example:\x0a\x0a    begin\x0a\x09\x22Makes me say hello to the user.\x22\x0a\x0a\x09| msg button |\x0a\x09msg := ''Hello world!''.\x0a\x09button := ''#sayHello'' asJQuery.\x0a\x09button click: [button after: ''<p>'' , msg , ''</p>''].\x0a\x0aYour message isn''t too helpful if it doesn''t get called. Save it, commit the package, then edit index.html again. You can write JavaScript code that sends a message to Smalltalk:\x0a\x0a    loadAmber({\x0a        files: [''HelloApp.js''],\x0a        prefix: ''projects/hello/js'', // path for js files i think\x0a        ready: function() {\x0a          $(function() {\x0a            smalltalk.Hello._new()._begin();\x0a          });\x0a    }}); \x0a\x0aFrom there, you can create new Smalltalk classes and messages to build up your app. Enjoy!\x0a'",
messageSends: ["title:", "new", "contents:"],
referencedClasses: ["DocChapter"]
}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Tutorials";
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.TutorialsChapter)})},
args: [],
source: "title\x0a\x09^'Tutorials'",
messageSends: [],
referencedClasses: []
}),
smalltalk.TutorialsChapter);



smalltalk.addClass('DocumentationBuilder', smalltalk.Object, ['chapters', 'announcer', 'widget'], 'Documentation');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "announcer\x0a\x09^announcer ifNil: [announcer := Announcer new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_build",
smalltalk.method({
selector: "build",
category: 'building',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._buildOnJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"build",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "build\x0a\x09self buildOnJQuery: ('body' asJQuery)",
messageSends: ["buildOnJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_buildChapters",
smalltalk.method({
selector: "buildChapters",
category: 'building',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(_st(self)._class())._methodDictionary())._values())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._selector()).__lt(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._category()).__eq("chapters");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._perform_(_st(each)._selector());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildChapters",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "buildChapters\x0a\x09^((self class methodDictionary values sorted: [:a :b | a selector < b selector])\x0a\x09\x09select: [:each | each category = 'chapters'])\x0a\x09\x09collect: [:each | self perform: each selector]",
messageSends: ["collect:", "perform:", "selector", "select:", "=", "category", "sorted:", "<", "values", "methodDictionary", "class"],
referencedClasses: []
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_buildOn_",
smalltalk.method({
selector: "buildOn:",
category: 'building',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(aCanvas)._with_(_st(self)._widget());
$1=self;
_st($1)._checkHashChange();
$2=_st($1)._checkHash();
return self}, function($ctx1) {$ctx1.fill(self,"buildOn:",{aCanvas:aCanvas}, smalltalk.DocumentationBuilder)})},
args: ["aCanvas"],
source: "buildOn: aCanvas\x0a\x09aCanvas with: self widget.\x0a\x09self \x0a\x09\x09checkHashChange;\x0a\x09\x09checkHash",
messageSends: ["with:", "widget", "checkHashChange", "checkHash"],
referencedClasses: []
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_buildOnJQuery_",
smalltalk.method({
selector: "buildOnJQuery:",
category: 'building',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._buildOn_(_st((smalltalk.HTMLCanvas || HTMLCanvas))._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"buildOnJQuery:",{aJQuery:aJQuery}, smalltalk.DocumentationBuilder)})},
args: ["aJQuery"],
source: "buildOnJQuery: aJQuery\x0a\x09self buildOn: (HTMLCanvas onJQuery: aJQuery)",
messageSends: ["buildOn:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch1introduction",
smalltalk.method({
selector: "ch1introduction",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.DocChapter || DocChapter))._new();
_st($2)._title_("Introduction");
$3=_st($2)._contents_("\x0a\x0a##Amber Smalltalk in a nutshell\x0a\x0aAmber is an implementation of the Smalltalk-80 language. It is designed to make client-side web development **faster, easier and more fun** as it allows developers to write HTML5 applications in a live Smalltalk environment!\x0a\x0aAmber is written in itself, including the IDE and the compiler and it runs **directly inside your browser**. The IDE is fairly complete with a class browser, workspace, transcript, unit test runner, object inspectors, cross reference tools and even a debugger.\x0a\x0aNoteworthy features:\x0a\x0a- Amber is semantically and syntactically very close to [Pharo Smalltalk](http://www.pharo-project.org). Pharo is considered the reference implementation.\x0a- Amber **seamlessly interacts with JavaScript** and can use its full eco system of libraries without any glue code needed.\x0a- Amber **has no dependencies** and can be used in any JavaScript runtime, not only inside browsers. An important example is [Node.js](http://nodejs.org).\x0a- Amber is a live Smalltalk that **compiles incrementally into efficient JavaScript** often mapping one-to-one with JavaScript equivalents.\x0a- Amber has a **Seaside influenced canvas library** to dynamically generate HTML.\x0a\x0a## Arguments for using Amber\x0aIn our humble opinion the main arguments for using Amber are:\x0a\x0a- JavaScript is quite a broken language with lots of traps and odd quirks. It is the assembler of the Internet which is cool, but we don't want to write in it.\x0a- Smalltalk as a language is immensely cleaner and more mature, both syntactically and semantically.\x0a- Smalltalk has a simple class model with a lightweight syntax for closures, it is in many ways a perfect match for the Good Parts of JavaScript.\x0a- Having a true live interactive incremental development environment where you can build your application directly in the browser is unbeatable.\x0a\x0a## Disclaimer\x0a\x0aThis documentation doesn't aim to teach Smalltalk. \x0aKnowledge of Smalltalk is needed to understand the topics covered in this documentation. \x0aIf you want to learn the Smalltalk language, you can read the excellent [Pharo By Example](http://www.pharobyexample.org) book.\x0a");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch1introduction",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch1introduction\x0a\x09^DocChapter new\x0a\x09\x09title: 'Introduction';\x0a\x09\x09contents: '\x0a\x0a##Amber Smalltalk in a nutshell\x0a\x0aAmber is an implementation of the Smalltalk-80 language. It is designed to make client-side web development **faster, easier and more fun** as it allows developers to write HTML5 applications in a live Smalltalk environment!\x0a\x0aAmber is written in itself, including the IDE and the compiler and it runs **directly inside your browser**. The IDE is fairly complete with a class browser, workspace, transcript, unit test runner, object inspectors, cross reference tools and even a debugger.\x0a\x0aNoteworthy features:\x0a\x0a- Amber is semantically and syntactically very close to [Pharo Smalltalk](http://www.pharo-project.org). Pharo is considered the reference implementation.\x0a- Amber **seamlessly interacts with JavaScript** and can use its full eco system of libraries without any glue code needed.\x0a- Amber **has no dependencies** and can be used in any JavaScript runtime, not only inside browsers. An important example is [Node.js](http://nodejs.org).\x0a- Amber is a live Smalltalk that **compiles incrementally into efficient JavaScript** often mapping one-to-one with JavaScript equivalents.\x0a- Amber has a **Seaside influenced canvas library** to dynamically generate HTML.\x0a\x0a## Arguments for using Amber\x0aIn our humble opinion the main arguments for using Amber are:\x0a\x0a- JavaScript is quite a broken language with lots of traps and odd quirks. It is the assembler of the Internet which is cool, but we don''t want to write in it.\x0a- Smalltalk as a language is immensely cleaner and more mature, both syntactically and semantically.\x0a- Smalltalk has a simple class model with a lightweight syntax for closures, it is in many ways a perfect match for the Good Parts of JavaScript.\x0a- Having a true live interactive incremental development environment where you can build your application directly in the browser is unbeatable.\x0a\x0a## Disclaimer\x0a\x0aThis documentation doesn''t aim to teach Smalltalk. \x0aKnowledge of Smalltalk is needed to understand the topics covered in this documentation. \x0aIf you want to learn the Smalltalk language, you can read the excellent [Pharo By Example](http://www.pharobyexample.org) book.\x0a'",
messageSends: ["title:", "new", "contents:"],
referencedClasses: ["DocChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch2differencesWithOtherSmalltalks",
smalltalk.method({
selector: "ch2differencesWithOtherSmalltalks",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.DocChapter || DocChapter))._new();
_st($2)._title_("Differences with other Smalltalks");
$3=_st($2)._contents_("\x0aAmber has some differences with other Smalltalk implementations. This makes porting code a non-trivial thing, but still quite manageable.\x0aBecause it maps Smalltalk constructs one-to-one with the JavaScript equivalent, including Smalltalk classes to JavaScript constructors, the core class library is simplified compared to Pharo Smalltalk.\x0aAnd since we want Amber to be useful in building lean browser apps we can't let it bloat too much.\x0a\x0aBut apart from missing things other Smalltalks may have, there are also things that are plain different:\x0a\x0a- The collection class hierarchy is much simpler compared to most Smalltalk implementations. In part this is because we want to map reasonably well with JavaScript counter parts.\x0a- As of today, there is no SortedCollection. The size of arrays is dynamic, and they behave like an ordered collection. They can also be sorted with the `#sort*` methods.\x0a- The `Date` class behaves like the `Date` and `TimeStamp` classes in Pharo Smalltalk. Therefore both `Date today` and `Date now` are valid in Amber.\x0a- Amber does not have class Character, but `String` does implement some of Character behavior so a single character String can work as a Character.\x0a- Amber does support **class instance variables**, but not class variables.\x0a- Amber only has global classes and packages, but not arbitrary objects. Use classes instead like `Smalltalk current` instead of `Smalltalk` etc.\x0a- Amber does not support pool dictionaries.\x0a- Amber uses **< ...javascript code... >** to inline JavaScript code and does not have pragmas.\x0a- Amber does not have class categories. The left side in the browser lists real Packages, but they feel much the same.\x0a");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch2differencesWithOtherSmalltalks",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch2differencesWithOtherSmalltalks\x0a\x09^DocChapter new\x0a\x09\x09title: 'Differences with other Smalltalks';\x0a\x09\x09contents: '\x0aAmber has some differences with other Smalltalk implementations. This makes porting code a non-trivial thing, but still quite manageable.\x0aBecause it maps Smalltalk constructs one-to-one with the JavaScript equivalent, including Smalltalk classes to JavaScript constructors, the core class library is simplified compared to Pharo Smalltalk.\x0aAnd since we want Amber to be useful in building lean browser apps we can''t let it bloat too much.\x0a\x0aBut apart from missing things other Smalltalks may have, there are also things that are plain different:\x0a\x0a- The collection class hierarchy is much simpler compared to most Smalltalk implementations. In part this is because we want to map reasonably well with JavaScript counter parts.\x0a- As of today, there is no SortedCollection. The size of arrays is dynamic, and they behave like an ordered collection. They can also be sorted with the `#sort*` methods.\x0a- The `Date` class behaves like the `Date` and `TimeStamp` classes in Pharo Smalltalk. Therefore both `Date today` and `Date now` are valid in Amber.\x0a- Amber does not have class Character, but `String` does implement some of Character behavior so a single character String can work as a Character.\x0a- Amber does support **class instance variables**, but not class variables.\x0a- Amber only has global classes and packages, but not arbitrary objects. Use classes instead like `Smalltalk current` instead of `Smalltalk` etc.\x0a- Amber does not support pool dictionaries.\x0a- Amber uses **< ...javascript code... >** to inline JavaScript code and does not have pragmas.\x0a- Amber does not have class categories. The left side in the browser lists real Packages, but they feel much the same.\x0a'",
messageSends: ["title:", "new", "contents:"],
referencedClasses: ["DocChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch3GettingStarted",
smalltalk.method({
selector: "ch3GettingStarted",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.DocChapter || DocChapter))._new();
_st($2)._title_("Getting started");
$3=_st($2)._contents_("\x0aTo get started hacking in Amber you can basically take three routes, independent of your platform:\x0a\x0a1. Just **try it out directly** at [www.amber-lang.net](http://www.amber-lang.net) - click the **Class browser** button there. But you will **not be able to save any code you write**! \x0a    Still, it works fine for looking at the IDE and playing around. Just **don't press F5/reload** - it will lose any code you have written.\x0a2. Download an Amber zip-ball, install [Nodejs](http://www.nodejs.org), fire up the Amber server and then open Amber from localhost - then you **can save code**. Detailed instructions are below!\x0a3. Same as above but install git first and get a proper clone from [http://github.com/NicolasPetton/amber](http://github.com/NicolasPetton/amber) instead of a zip/tar-ball. \x0a    If you want to **contribute to Amber itself** this is really what you want to do. In fact, in most cases this is what you want to do. It requires installing git first, but it is quite simple - although we leave this bit as an \x22exercise to the reader\x22 :)\x0a\x0a**PLEASE NOTE:** Amber core developers use Linux. \x0aWe do not want to introduce dependencies that aren't cross platform - but currently amberc (the command line compiler) is a bash script and we also use Makefiles \x0a(for building Amber itself and server side examples) written on Linux/Unix. So using Windows is currently a bit limited - you can't run \x22make\x22 in the .st directory to rebuild whole of Amber for example.\x0a BUT... if you only want to use Amber to build web client apps and not really get involved in hacking Amber itself - then you should be fine!\x0a\x0a## Downloading Amber\x0aCurrently you can download in zip or tar-ball format, either cutting edge or a release. [Downloads are available here](https://github.com/NicolasPetton/amber/archives/amber). \x0a\x0aUnpack wherever you like, but I would rename the directory that is unpacked to something slightly shorter - like say \x22amber\x22. :)\x0aAnd yes, at this point you can double click the index.html file in the amber directory to get the IDE up, but again, **you will not be able to save code**. So please continue below :)\x0a\x0a## Installing Node.js\x0a[Node](http://www.nodejs.org) (for short) is simply the V8 Javascript VM from Google (used in Chrome) hooked together with some hard core C-libraries for doing \x22evented I/O\x22.\x0aBasically it's JavaScript for the server - on asynch steroids. Amber runs fine in Node and we use it for several Amber tools, like amberc (the command line Amber compiler) or the Amber server (see below). \x0aThere are also several Amber-Node examples to look at if you want to play with running Amber programs server side. **In short - you really want to install Nodejs. :)**\x0a\x0a- Installing Node on Linux can be done using your package tool of choice (`apt-get install nodejs` for example) or any other way described at [the download page](http://nodejs.org/#download).\x0a- Installing Node on MacOS or Windows is probably done best by using the [installers available at Nodejs.org](http://nodejs.org/#download).\x0a\x0a## Starting Amber server\x0aNicolas has written a minimal webDAV server that is the easiest way to get up and running Amber with the ability to save code. This little server is written in... Amber! \x0aAnd it runs on top of Node. So to start it up serving your brand new directory tree of sweet Amber you do:\x0a\x0a\x09cd amber\x09(or whatever you called the directory you unpackaged)\x0a\x09./bin/server\x09(in windows you type `node server\x5cserver.js` instead)\x0a\x0aIt should say it is listening on port 4000. If it does, hooray! That means both Node and Amber are good. In Windows you might get a question about opening that port in the local firewall - yep, do it!\x0a\x0a## Firing up Amber\x0aThe Amber IDE is written in... Amber. It uses [jQuery](http://jquery.com) and runs right in your browser as a ... well, a web page. \x0aWe could open it up just using a file url - but the reason we performed the previous steps is so that we can load the IDE web page from a server that can handle PUTs (webDAV) of source code. \x0aAccording to web security Amber can only do PUT back to the same server it was loaded from. Thus we instead want to open it [through our little server now listening on port 4000](http://localhost:4000/index.html).\x0aClicking that link and then pressing the **Class browser** should get your Amber IDE running with the ability to commit modified packages locally.\x0a\x0aTo verify that you can indeed commit now - just select a Package in the browser, like say \x22Examples\x22 and press the **Commit** button below. **If all goes well nothing happens :)**. \x0aSo in order to really know if it worked we can check the modified date on the files **amber/st/Examples.st**, **amber/js/Examples.js** and **amber/js/Examples.deploy.js** - they should be brand new.\x0a\x0aNOTE: We can use any webDAV server and Apache2 has been used earlier and works fine. But the Amber server is smaller and simpler to start.\x0a");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch3GettingStarted",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch3GettingStarted\x0a\x09^DocChapter new\x0a\x09\x09title: 'Getting started';\x0a\x09\x09contents: '\x0aTo get started hacking in Amber you can basically take three routes, independent of your platform:\x0a\x0a1. Just **try it out directly** at [www.amber-lang.net](http://www.amber-lang.net) - click the **Class browser** button there. But you will **not be able to save any code you write**! \x0a    Still, it works fine for looking at the IDE and playing around. Just **don''t press F5/reload** - it will lose any code you have written.\x0a2. Download an Amber zip-ball, install [Nodejs](http://www.nodejs.org), fire up the Amber server and then open Amber from localhost - then you **can save code**. Detailed instructions are below!\x0a3. Same as above but install git first and get a proper clone from [http://github.com/NicolasPetton/amber](http://github.com/NicolasPetton/amber) instead of a zip/tar-ball. \x0a    If you want to **contribute to Amber itself** this is really what you want to do. In fact, in most cases this is what you want to do. It requires installing git first, but it is quite simple - although we leave this bit as an \x22exercise to the reader\x22 :)\x0a\x0a**PLEASE NOTE:** Amber core developers use Linux. \x0aWe do not want to introduce dependencies that aren''t cross platform - but currently amberc (the command line compiler) is a bash script and we also use Makefiles \x0a(for building Amber itself and server side examples) written on Linux/Unix. So using Windows is currently a bit limited - you can''t run \x22make\x22 in the .st directory to rebuild whole of Amber for example.\x0a BUT... if you only want to use Amber to build web client apps and not really get involved in hacking Amber itself - then you should be fine!\x0a\x0a## Downloading Amber\x0aCurrently you can download in zip or tar-ball format, either cutting edge or a release. [Downloads are available here](https://github.com/NicolasPetton/amber/archives/amber). \x0a\x0aUnpack wherever you like, but I would rename the directory that is unpacked to something slightly shorter - like say \x22amber\x22. :)\x0aAnd yes, at this point you can double click the index.html file in the amber directory to get the IDE up, but again, **you will not be able to save code**. So please continue below :)\x0a\x0a## Installing Node.js\x0a[Node](http://www.nodejs.org) (for short) is simply the V8 Javascript VM from Google (used in Chrome) hooked together with some hard core C-libraries for doing \x22evented I/O\x22.\x0aBasically it''s JavaScript for the server - on asynch steroids. Amber runs fine in Node and we use it for several Amber tools, like amberc (the command line Amber compiler) or the Amber server (see below). \x0aThere are also several Amber-Node examples to look at if you want to play with running Amber programs server side. **In short - you really want to install Nodejs. :)**\x0a\x0a- Installing Node on Linux can be done using your package tool of choice (`apt-get install nodejs` for example) or any other way described at [the download page](http://nodejs.org/#download).\x0a- Installing Node on MacOS or Windows is probably done best by using the [installers available at Nodejs.org](http://nodejs.org/#download).\x0a\x0a## Starting Amber server\x0aNicolas has written a minimal webDAV server that is the easiest way to get up and running Amber with the ability to save code. This little server is written in... Amber! \x0aAnd it runs on top of Node. So to start it up serving your brand new directory tree of sweet Amber you do:\x0a\x0a\x09cd amber\x09(or whatever you called the directory you unpackaged)\x0a\x09./bin/server\x09(in windows you type `node server\x5cserver.js` instead)\x0a\x0aIt should say it is listening on port 4000. If it does, hooray! That means both Node and Amber are good. In Windows you might get a question about opening that port in the local firewall - yep, do it!\x0a\x0a## Firing up Amber\x0aThe Amber IDE is written in... Amber. It uses [jQuery](http://jquery.com) and runs right in your browser as a ... well, a web page. \x0aWe could open it up just using a file url - but the reason we performed the previous steps is so that we can load the IDE web page from a server that can handle PUTs (webDAV) of source code. \x0aAccording to web security Amber can only do PUT back to the same server it was loaded from. Thus we instead want to open it [through our little server now listening on port 4000](http://localhost:4000/index.html).\x0aClicking that link and then pressing the **Class browser** should get your Amber IDE running with the ability to commit modified packages locally.\x0a\x0aTo verify that you can indeed commit now - just select a Package in the browser, like say \x22Examples\x22 and press the **Commit** button below. **If all goes well nothing happens :)**. \x0aSo in order to really know if it worked we can check the modified date on the files **amber/st/Examples.st**, **amber/js/Examples.js** and **amber/js/Examples.deploy.js** - they should be brand new.\x0a\x0aNOTE: We can use any webDAV server and Apache2 has been used earlier and works fine. But the Amber server is smaller and simpler to start.\x0a'",
messageSends: ["title:", "new", "contents:"],
referencedClasses: ["DocChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch4Tutorials",
smalltalk.method({
selector: "ch4Tutorials",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.TutorialsChapter || TutorialsChapter))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch4Tutorials",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch4Tutorials\x0a\x09^TutorialsChapter new",
messageSends: ["new"],
referencedClasses: ["TutorialsChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch5Index",
smalltalk.method({
selector: "ch5Index",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.ClassesIndexChapter || ClassesIndexChapter))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch5Index",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch5Index\x0a\x09^ClassesIndexChapter new",
messageSends: ["new"],
referencedClasses: ["ClassesIndexChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch6KernelObjects",
smalltalk.method({
selector: "ch6KernelObjects",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.PackageDocChapter || PackageDocChapter))._on_(_st((smalltalk.Package || Package))._named_("Kernel-Objects"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch6KernelObjects",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch6KernelObjects\x0a\x09^PackageDocChapter on: (Package named: 'Kernel-Objects')",
messageSends: ["on:", "named:"],
referencedClasses: ["Package", "PackageDocChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch7KernelClasses",
smalltalk.method({
selector: "ch7KernelClasses",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.PackageDocChapter || PackageDocChapter))._on_(_st((smalltalk.Package || Package))._named_("Kernel-Classes"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch7KernelClasses",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch7KernelClasses\x0a\x09^PackageDocChapter on: (Package named: 'Kernel-Classes')",
messageSends: ["on:", "named:"],
referencedClasses: ["Package", "PackageDocChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch8KernelCollection",
smalltalk.method({
selector: "ch8KernelCollection",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.PackageDocChapter || PackageDocChapter))._on_(_st((smalltalk.Package || Package))._named_("Kernel-Collections"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch8KernelCollection",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch8KernelCollection\x0a\x09^PackageDocChapter on: (Package named: 'Kernel-Collections')",
messageSends: ["on:", "named:"],
referencedClasses: ["Package", "PackageDocChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch9KernelMethods",
smalltalk.method({
selector: "ch9KernelMethods",
category: 'chapters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.PackageDocChapter || PackageDocChapter))._on_(_st((smalltalk.Package || Package))._named_("Kernel-Methods"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch9KernelMethods",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "ch9KernelMethods\x0a\x09^PackageDocChapter on: (Package named: 'Kernel-Methods')",
messageSends: ["on:", "named:"],
referencedClasses: ["Package", "PackageDocChapter"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@chapters"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@chapters"]=_st(self)._buildChapters();
$1=self["@chapters"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"chapters",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "chapters\x0a\x09^chapters ifNil: [chapters := self buildChapters]",
messageSends: ["ifNil:", "buildChapters"],
referencedClasses: []
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_checkHash",
smalltalk.method({
selector: "checkHash",
category: 'routing',
fn: function (){
var self=this;
var hash,presentation;
return smalltalk.withContext(function($ctx1) { var $1,$2;
hash=_st(_st(_st(document)._location())._hash())._replace_with_("^#","");
$1=_st((smalltalk.ChapterSelectionAnnouncement || ChapterSelectionAnnouncement))._new();
_st($1)._id_(hash);
$2=_st($1)._yourself();
_st(_st(self)._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"checkHash",{hash:hash,presentation:presentation}, smalltalk.DocumentationBuilder)})},
args: [],
source: "checkHash\x0a\x09| hash presentation |\x0a\x09hash := document location hash  replace: '^#' with: ''.\x0a\x09self announcer announce: (ChapterSelectionAnnouncement new \x0a\x09\x09id: hash; \x0a\x09\x09yourself)",
messageSends: ["replace:with:", "hash", "location", "announce:", "id:", "new", "yourself", "announcer"],
referencedClasses: ["ChapterSelectionAnnouncement"]
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_checkHashChange",
smalltalk.method({
selector: "checkHashChange",
category: 'routing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(window)._jQuery_(window))._bind_do_("hashchange",(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._checkHash();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkHashChange",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "checkHashChange\x0a\x09(window jQuery: window) bind: 'hashchange' do: [self checkHash]",
messageSends: ["bind:do:", "checkHash", "jQuery:"],
referencedClasses: []
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@chapters"]=nil;
self["@announcer"]=nil;
self["@widget"]=nil;
_st(_st(window)._jQuery_(".documentation"))._remove();
_st(self)._build();
return self}, function($ctx1) {$ctx1.fill(self,"update",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "update\x0a\x09chapters := nil.\x0a\x09announcer := nil.\x0a\x09widget := nil.\x0a\x09(window jQuery: '.documentation') remove.\x0a\x09self build",
messageSends: ["remove", "jQuery:", "build"],
referencedClasses: []
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_widget",
smalltalk.method({
selector: "widget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@widget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@widget"]=_st((smalltalk.DocumentationWidget || DocumentationWidget))._on_(self);
$1=self["@widget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget",{}, smalltalk.DocumentationBuilder)})},
args: [],
source: "widget\x0a\x09^widget ifNil: [widget := DocumentationWidget on: self]",
messageSends: ["ifNil:", "on:"],
referencedClasses: ["DocumentationWidget"]
}),
smalltalk.DocumentationBuilder);


smalltalk.DocumentationBuilder.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=_st(self)._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.DocumentationBuilder.klass)})},
args: [],
source: "current\x0a\x09^current ifNil: [current := self new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.DocumentationBuilder.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._build();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.DocumentationBuilder.klass)})},
args: [],
source: "initialize\x0a\x09self current build",
messageSends: ["build", "current"],
referencedClasses: []
}),
smalltalk.DocumentationBuilder.klass);


smalltalk.addClass('DocumentationWidget', smalltalk.Widget, ['builder', 'selectedChapter', 'chapterDiv'], 'Documentation');
smalltalk.addMethod(
"_builder",
smalltalk.method({
selector: "builder",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@builder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"builder",{}, smalltalk.DocumentationWidget)})},
args: [],
source: "builder\x0a\x09^builder",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_builder_",
smalltalk.method({
selector: "builder:",
category: 'accessing',
fn: function (aDocumentationBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@builder"]=aDocumentationBuilder;
return self}, function($ctx1) {$ctx1.fill(self,"builder:",{aDocumentationBuilder:aDocumentationBuilder}, smalltalk.DocumentationWidget)})},
args: ["aDocumentationBuilder"],
source: "builder: aDocumentationBuilder\x0a\x09builder := aDocumentationBuilder",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._builder())._chapters();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chapters",{}, smalltalk.DocumentationWidget)})},
args: [],
source: "chapters\x0a\x09^self builder chapters",
messageSends: ["chapters", "builder"],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_displayChapter_",
smalltalk.method({
selector: "displayChapter:",
category: 'actions',
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedChapter_(aChapter);
_st(self)._updateChapterDiv();
return self}, function($ctx1) {$ctx1.fill(self,"displayChapter:",{aChapter:aChapter}, smalltalk.DocumentationWidget)})},
args: ["aChapter"],
source: "displayChapter: aChapter\x0a\x09self selectedChapter: aChapter.\x0a\x09self updateChapterDiv",
messageSends: ["selectedChapter:", "updateChapterDiv"],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_renderChapterMenu_on_",
smalltalk.method({
selector: "renderChapterMenu:on:",
category: 'rendering',
fn: function (aChapter,html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._a();
_st($1)._with_(_st(aChapter)._title());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._selectChapter_(aChapter);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._ol())._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(aChapter)._chapters())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._renderChapterMenu_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderChapterMenu:on:",{aChapter:aChapter,html:html}, smalltalk.DocumentationWidget)})},
args: ["aChapter", "html"],
source: "renderChapterMenu: aChapter on: html\x0a\x09html a\x0a\x09\x09with: aChapter title;\x0a\x09\x09onClick: [\x0a\x09\x09\x09self selectChapter: aChapter].\x0a\x09html ol with: [\x0a\x09\x09\x09aChapter chapters do: [:each |\x0a\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09self renderChapterMenu: each on: html]]]",
messageSends: ["with:", "title", "a", "onClick:", "selectChapter:", "do:", "renderChapterMenu:on:", "li", "chapters", "ol"],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_renderMenuOn_",
smalltalk.method({
selector: "renderMenuOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("menu");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._ol())._with_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(self)._chapters())._do_((function(each){
return smalltalk.withContext(function($ctx4) {return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {return _st(self)._renderChapterMenu_on_(each,html);
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{html:html}, smalltalk.DocumentationWidget)})},
args: ["html"],
source: "renderMenuOn: html\x0a\x09html div \x0a\x09\x09class: 'menu';\x0a\x09\x09with: [\x0a\x09\x09\x09html ol with: [\x0a\x09\x09\x09\x09self chapters do: [:each |\x0a\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09self renderChapterMenu: each on: html]]]]",
messageSends: ["class:", "div", "with:", "do:", "renderChapterMenu:on:", "li", "chapters", "ol"],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("documentation");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._renderMenuOn_(html);
self["@chapterDiv"]=_st(html)._div();
self["@chapterDiv"];
return _st(self)._updateChapterDiv();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.DocumentationWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'documentation';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderMenuOn: html.\x0a\x09\x09\x09chapterDiv := html div.\x0a\x09\x09\x09self updateChapterDiv]",
messageSends: ["class:", "div", "with:", "renderMenuOn:", "updateChapterDiv"],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_selectChapter_",
smalltalk.method({
selector: "selectChapter:",
category: 'actions',
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(document)._location())._hash_(_st(aChapter)._id());
return self}, function($ctx1) {$ctx1.fill(self,"selectChapter:",{aChapter:aChapter}, smalltalk.DocumentationWidget)})},
args: ["aChapter"],
source: "selectChapter: aChapter\x0a\x09document location hash: aChapter id",
messageSends: ["hash:", "id", "location"],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_selectedChapter",
smalltalk.method({
selector: "selectedChapter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@selectedChapter"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@selectedChapter"]=_st(_st(self)._chapters())._first();
$1=self["@selectedChapter"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedChapter",{}, smalltalk.DocumentationWidget)})},
args: [],
source: "selectedChapter\x0a\x09^selectedChapter ifNil: [selectedChapter := self chapters first]",
messageSends: ["ifNil:", "first", "chapters"],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_selectedChapter_",
smalltalk.method({
selector: "selectedChapter:",
category: 'accessing',
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@selectedChapter"]=aChapter;
$1=self["@selectedChapter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedChapter:",{aChapter:aChapter}, smalltalk.DocumentationWidget)})},
args: ["aChapter"],
source: "selectedChapter: aChapter\x0a\x09^selectedChapter := aChapter",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_updateChapterDiv",
smalltalk.method({
selector: "updateChapterDiv",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@chapterDiv"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(html)._with_(_st(self)._selectedChapter());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateChapterDiv",{}, smalltalk.DocumentationWidget)})},
args: [],
source: "updateChapterDiv\x0a\x09chapterDiv contents: [:html |\x0a\x09\x09html with: self selectedChapter]",
messageSends: ["contents:", "with:", "selectedChapter"],
referencedClasses: []
}),
smalltalk.DocumentationWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._builder_(aBuilder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBuilder:aBuilder}, smalltalk.DocumentationWidget.klass)})},
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
messageSends: ["builder:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.DocumentationWidget.klass);


