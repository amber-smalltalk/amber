smalltalk.addPackage('Documentation', {});
smalltalk.addClass('ChapterSelectionAnnouncement', smalltalk.Object, ['id'], 'Documentation');
smalltalk.addMethod(
"_id",
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{}, smalltalk.ChapterSelectionAnnouncement)})},
messageSends: []}),
smalltalk.ChapterSelectionAnnouncement);

smalltalk.addMethod(
"_id_",
smalltalk.method({
selector: "id:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@id"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{aString:aString}, smalltalk.ChapterSelectionAnnouncement)})},
messageSends: []}),
smalltalk.ChapterSelectionAnnouncement);



smalltalk.addClass('ClassSelectionAnnouncement', smalltalk.Object, ['theClass'], 'Documentation');
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{}, smalltalk.ClassSelectionAnnouncement)})},
messageSends: []}),
smalltalk.ClassSelectionAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass}, smalltalk.ClassSelectionAnnouncement)})},
messageSends: []}),
smalltalk.ClassSelectionAnnouncement);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass}, smalltalk.ClassSelectionAnnouncement.klass)})},
messageSends: ["theClass:", "new", "yourself"]}),
smalltalk.ClassSelectionAnnouncement.klass);


smalltalk.addClass('DocChapter', smalltalk.Widget, ['title', 'contents', 'parent', 'level'], 'Documentation');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.DocumentationBuilder || DocumentationBuilder))._current())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.DocChapter)})},
messageSends: ["announcer", "current"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return [];
}, function($ctx1) {$ctx1.fill(self,"chapters",{}, smalltalk.DocChapter)})},
messageSends: []}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
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
messageSends: ["ifNil:"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@contents"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString}, smalltalk.DocChapter)})},
messageSends: []}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "doc_chapter";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.DocChapter)})},
messageSends: []}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_displayChapter_",
smalltalk.method({
selector: "displayChapter:",
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.DocumentationBuilder || DocumentationBuilder))._current())._widget())._displayChapter_(aChapter);
return self}, function($ctx1) {$ctx1.fill(self,"displayChapter:",{aChapter:aChapter}, smalltalk.DocChapter)})},
messageSends: ["displayChapter:", "widget", "current"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_htmlContents",
smalltalk.method({
selector: "htmlContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st((smalltalk.Showdown || Showdown))._at_(smalltalk.symbolFor("converter")))._new())._makeHtml_(_st(self)._contents());
return $1;
}, function($ctx1) {$ctx1.fill(self,"htmlContents",{}, smalltalk.DocChapter)})},
messageSends: ["makeHtml:", "contents", "new", "at:"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_id",
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._title())._replace_with_(" ","-");
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{}, smalltalk.DocChapter)})},
messageSends: ["replace:with:", "title"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
_st(self)._subscribe();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.DocChapter)})},
messageSends: ["initialize", "subscribe"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
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
messageSends: ["ifNil:ifNotNil:", "+", "level", "parent"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@level"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"level:",{anInteger:anInteger}, smalltalk.DocChapter)})},
messageSends: []}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{}, smalltalk.DocChapter)})},
messageSends: []}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parent"]=aChapter;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aChapter:aChapter}, smalltalk.DocChapter)})},
messageSends: []}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_renderDocOn_",
smalltalk.method({
selector: "renderDocOn:",
fn: function (html){
var self=this;
var div;
return smalltalk.withContext(function($ctx1) { _st(_st(html)._h1())._with_(_st(self)._title());
_st(self)._renderNavigationOn_(html);
div=_st(_st(html)._div())._class_("contents");
_st(_st(div)._asJQuery())._html_(_st(self)._htmlContents());
return self}, function($ctx1) {$ctx1.fill(self,"renderDocOn:",{html:html,div:div}, smalltalk.DocChapter)})},
messageSends: ["with:", "title", "h1", "renderNavigationOn:", "class:", "div", "html:", "htmlContents", "asJQuery"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_renderLinksOn_",
smalltalk.method({
selector: "renderLinksOn:",
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
messageSends: ["class:", "ul", "with:", "do:", "title", "a", "onClick:", "selectChapter:", "li", "chapters"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_renderNavigationOn_",
smalltalk.method({
selector: "renderNavigationOn:",
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
messageSends: ["ifNotNil:", "class:", "div", "with:", ",", "title", "parent", "a", "onClick:", "selectChapter:"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["class:", "cssClass", "div", "with:", "renderDocOn:", "renderLinksOn:"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_selectChapter_",
smalltalk.method({
selector: "selectChapter:",
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(document)._location())._hash_(_st(aChapter)._id());
return self}, function($ctx1) {$ctx1.fill(self,"selectChapter:",{aChapter:aChapter}, smalltalk.DocChapter)})},
messageSends: ["hash:", "id", "location"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_selectClass_",
smalltalk.method({
selector: "selectClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.DocumentationBuilder || DocumentationBuilder))._current())._announcer())._announce_(_st((smalltalk.ClassSelectionAnnouncement || ClassSelectionAnnouncement))._on_(aClass));
return self}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass}, smalltalk.DocChapter)})},
messageSends: ["announce:", "on:", "announcer", "current"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_subscribe",
smalltalk.method({
selector: "subscribe",
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
messageSends: ["on:do:", "ifTrue:", "displayChapter:", "=", "id", "announcer"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
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
messageSends: ["ifNil:"]}),
smalltalk.DocChapter);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString}, smalltalk.DocChapter)})},
messageSends: []}),
smalltalk.DocChapter);



smalltalk.addClass('ClassDocChapter', smalltalk.DocChapter, ['theClass'], 'Documentation');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
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
messageSends: ["ifTrue:ifFalse:", ",", "name", "theClass", "comment", "isEmpty"]}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("doc_class ").__comma(smalltalk.DocChapter.fn.prototype._cssClass.apply(_st(self), []));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.ClassDocChapter)})},
messageSends: [",", "cssClass"]}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_initializeWithClass_",
smalltalk.method({
selector: "initializeWithClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithClass:",{aClass:aClass}, smalltalk.ClassDocChapter)})},
messageSends: []}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_renderLinksOn_",
smalltalk.method({
selector: "renderLinksOn:",
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
messageSends: ["class:", "ul", "with:", "a", "onClick:", "openOn:", "theClass", "li"]}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_subscribe",
smalltalk.method({
selector: "subscribe",
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
messageSends: ["subscribe", "on:do:", "ifTrue:", "selectChapter:", "=", "theClass", "announcer"]}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{}, smalltalk.ClassDocChapter)})},
messageSends: []}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._theClass())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.ClassDocChapter)})},
messageSends: ["name", "theClass"]}),
smalltalk.ClassDocChapter);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
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
messageSends: ["initializeWithClass:", "basicNew", "initialize", "yourself"]}),
smalltalk.ClassDocChapter.klass);


smalltalk.addClass('ClassesIndexChapter', smalltalk.DocChapter, [], 'Documentation');
smalltalk.addMethod(
"_alphabet",
smalltalk.method({
selector: "alphabet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}, function($ctx1) {$ctx1.fill(self,"alphabet",{}, smalltalk.ClassesIndexChapter)})},
messageSends: []}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("index_doc ").__comma(smalltalk.DocChapter.fn.prototype._cssClass.apply(_st(self), []));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.ClassesIndexChapter)})},
messageSends: [",", "cssClass"]}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
"_renderDocOn_",
smalltalk.method({
selector: "renderDocOn:",
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
messageSends: ["with:", "title", "h1", "do:", "select:", "=", "first", "name", "classes", "current", "ifNotEmpty:", "h2", "a", "onClick:", "selectClass:", "li", "sorted:", "<", "ul", "alphabet"]}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Smalltalk classes by index";
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.ClassesIndexChapter)})},
messageSends: []}),
smalltalk.ClassesIndexChapter);



smalltalk.addClass('PackageDocChapter', smalltalk.DocChapter, ['package', 'chapters'], 'Documentation');
smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@chapters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chapters",{}, smalltalk.PackageDocChapter)})},
messageSends: []}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Classes in package ").__comma(_st(_st(self)._package())._name())).__comma(":");
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.PackageDocChapter)})},
messageSends: [",", "name", "package"]}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
"_initializeWithPackage_",
smalltalk.method({
selector: "initializeWithPackage:",
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
messageSends: ["collect:", "parent:", "on:", "yourself", "sorted:", "<", "name", "classes"]}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@package"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{}, smalltalk.PackageDocChapter)})},
messageSends: []}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("Package ").__comma(_st(_st(self)._package())._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.PackageDocChapter)})},
messageSends: [",", "name", "package"]}),
smalltalk.PackageDocChapter);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
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
messageSends: ["initializeWithPackage:", "basicNew", "initialize", "yourself"]}),
smalltalk.PackageDocChapter.klass);


smalltalk.addClass('TutorialsChapter', smalltalk.DocChapter, [], 'Documentation');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "You can find a list of [Tutorials](https://github.com/amber-smalltalk/amber/wiki/Tutorials) on the [Github wiki](https://github.com/amber-smalltalk/amber/wiki). If you are new to Smalltalk, you can also learn Amber online with [ProfStef](http://www.amber-lang.net/learn.html).";
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.TutorialsChapter)})},
messageSends: []}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Tutorials";
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.TutorialsChapter)})},
messageSends: []}),
smalltalk.TutorialsChapter);



smalltalk.addClass('DocumentationBuilder', smalltalk.Object, ['chapters', 'announcer', 'widget'], 'Documentation');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_build",
smalltalk.method({
selector: "build",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._buildOnJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"build",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["buildOnJQuery:", "asJQuery"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_buildChapters",
smalltalk.method({
selector: "buildChapters",
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
messageSends: ["collect:", "perform:", "selector", "select:", "=", "category", "sorted:", "<", "values", "methodDictionary", "class"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_buildOn_",
smalltalk.method({
selector: "buildOn:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(aCanvas)._with_(_st(self)._widget());
$1=self;
_st($1)._checkHashChange();
$2=_st($1)._checkHash();
return self}, function($ctx1) {$ctx1.fill(self,"buildOn:",{aCanvas:aCanvas}, smalltalk.DocumentationBuilder)})},
messageSends: ["with:", "widget", "checkHashChange", "checkHash"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_buildOnJQuery_",
smalltalk.method({
selector: "buildOnJQuery:",
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._buildOn_(_st((smalltalk.HTMLCanvas || HTMLCanvas))._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"buildOnJQuery:",{aJQuery:aJQuery}, smalltalk.DocumentationBuilder)})},
messageSends: ["buildOn:", "onJQuery:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch1introduction",
smalltalk.method({
selector: "ch1introduction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.DocChapter || DocChapter))._new();
_st($2)._title_("Introduction");
$3=_st($2)._contents_("\x0a\x0a##Amber Smalltalk in a nutshell\x0a\x0aAmber is an implementation of the Smalltalk-80 language. It is designed to make client-side web development **faster, easier and more fun** as it allows developers to write HTML5 applications in a live Smalltalk environment!\x0a\x0aAmber is written in itself, including the IDE and the compiler and it runs **directly inside your browser**. The IDE is fairly complete with a class browser, workspace, transcript, unit test runner, object inspectors, cross reference tools and even a debugger.\x0a\x0aNoteworthy features:\x0a\x0a- Amber is semantically and syntactically very close to [Pharo Smalltalk](http://www.pharo-project.org). Pharo is considered the reference implementation.\x0a- Amber **seamlessly interacts with JavaScript** and can use its full eco system of libraries without any glue code needed.\x0a- Amber **has no dependencies** and can be used in any JavaScript runtime, not only inside browsers. An important example is [Node.js](http://nodejs.org).\x0a- Amber is a live Smalltalk that **compiles incrementally into efficient JavaScript** often mapping one-to-one with JavaScript equivalents.\x0a- Amber has a **Seaside influenced canvas library** to dynamically generate HTML.\x0a\x0a## Why Amber?\x0a\x0a- JavaScript is quite a broken language with lots of traps and odd quirks. It is the assembler of the Internet which is cool, but we don't want to write in it.\x0a- Amber is a language and environment built for the web. With Amber, client-side web development finally gets the power and productivity that exists in other Smalltalk dialects.\x0a- Smalltalk has a simple class model with a lightweight syntax for closures, it is in many ways a perfect match for the Good Parts of JavaScript. \x0a  Smalltalk stands head and shoulders above most other languages for clarity, conciseness, and human-friendliness.\x0a  As a language, it is immensely clean and mature, both syntactically and semantically. It is a pure OO language, with objects all the way down.\x0a- Having a true live & incremental development environment where you can build your application interactively in the browser is unbeatable.\x0a\x0a## Disclaimer\x0a\x0aThis documentation doesn't aim to teach Smalltalk. \x0aKnowledge of Smalltalk is needed to understand the topics covered in this documentation. \x0aIf you want to learn the Smalltalk language, you can read the excellent [Pharo By Example](http://www.pharobyexample.org) book.\x0a");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch1introduction",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["title:", "new", "contents:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch2differencesWithOtherSmalltalks",
smalltalk.method({
selector: "ch2differencesWithOtherSmalltalks",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.DocChapter || DocChapter))._new();
_st($2)._title_("Differences with other Smalltalks");
$3=_st($2)._contents_("\x0aAmber has some differences with other Smalltalk implementations. This makes porting code a non-trivial thing, but still quite manageable.\x0aBecause it maps Smalltalk constructs one-to-one with the JavaScript equivalent, including Smalltalk classes to JavaScript constructors, the core class library is simplified compared to Pharo Smalltalk.\x0aAnd since we want Amber to be useful in building lean browser apps we can't let it bloat too much.\x0a\x0aBut apart from missing things other Smalltalks may have, there are also things that are plain different:\x0a\x0a- The collection class hierarchy is much simpler compared to most Smalltalk implementations. In part this is because we want to map reasonably well with JavaScript counter parts.\x0a- As of today, there is no SortedCollection. The size of arrays is dynamic, and they behave like an ordered collection. They can also be sorted with the `#sort*` methods.\x0a- The `Date` class behaves like the `Date` and `TimeStamp` classes in Pharo Smalltalk. Therefore both `Date today` and `Date now` are valid in Amber.\x0a- Amber does not have class Character, but `String` does implement some of Character behavior so a single character String can work as a Character.\x0a- Amber does support **class instance variables**, but not class variables.\x0a- Amber only has global classes and packages, but not arbitrary objects. Use classes instead like `Smalltalk current` instead of `Smalltalk` etc.\x0a- Amber does not support pool dictionaries.\x0a- Amber uses **< ...javascript code... >** to inline JavaScript code and does not have pragmas.\x0a- Amber does not have class categories. The left side in the browser lists real Packages, but they feel much the same.\x0a");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch2differencesWithOtherSmalltalks",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["title:", "new", "contents:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch3GettingStarted",
smalltalk.method({
selector: "ch3GettingStarted",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.DocChapter || DocChapter))._new();
_st($2)._title_("Getting started");
$3=_st($2)._contents_("\x0aTo get started hacking in Amber you can basically take three routes, independent of your platform:\x0a\x0a1. Just **try it out directly** at [www.amber-lang.net](http://www.amber-lang.net) - click the **Class browser** button there. But you will **not be able to save any code you write**! \x0a    Still, it works fine for looking at the IDE and playing around. Just **don't press F5/reload** - it will lose any code you have written.\x0a2. Download an Amber zip-ball, install [Nodejs](http://www.nodejs.org), fire up the Amber server and then open Amber from localhost - then you **can save code**. Detailed instructions are below!\x0a3. Same as above but install git first and get a proper clone from [http://github.com/NicolasPetton/amber](http://github.com/NicolasPetton/amber) instead of a zip/tar-ball. \x0a    If you want to **contribute to Amber itself** this is really what you want to do. In fact, in most cases this is what you want to do. It requires installing git first, but it is quite simple - although we leave this bit as an \x22exercise to the reader\x22 :)\x0a\x0a\x0a## Downloading Amber\x0aCurrently you can download in zip or tar-ball format, either cutting edge or a release. [Downloads are available here](https://github.com/NicolasPetton/amber/archives/amber). \x0a\x0aUnpack wherever you like, but I would rename the directory that is unpacked to something slightly shorter - like say \x22amber\x22. :)\x0aAnd yes, at this point you can double click the index.html file in the amber directory to get the IDE up, but again, **you will not be able to save code**. So please continue below :)\x0a\x0a## Installing Node.js\x0a[Node](http://www.nodejs.org) (for short) is simply the V8 Javascript VM from Google (used in Chrome) hooked together with some hard core C-libraries for doing \x22evented I/O\x22.\x0aBasically it's JavaScript for the server - on asynch steroids. Amber runs fine in Node and we use it for several Amber tools, like amberc (the command line Amber compiler) or the Amber server (see below). \x0aThere are also several Amber-Node examples to look at if you want to play with running Amber programs server side. **In short - you really want to install Nodejs. :)**\x0a\x0a- Installing Node on Linux can be done using your package tool of choice (`apt-get install nodejs` for example) or any other way described at [the download page](http://nodejs.org/#download).\x0a- Installing Node on MacOS or Windows is probably done best by using the [installers available at Nodejs.org](http://nodejs.org/#download).\x0a\x0a## Starting Amber server\x0aNicolas has written a minimal webDAV server that is the easiest way to get up and running Amber with the ability to save code. This little server is written in... Amber! \x0aAnd it runs on top of Node. So to start it up serving your brand new directory tree of sweet Amber you do:\x0a\x0a\x09cd amber\x09(or whatever you called the directory you unpackaged)\x0a\x09./bin/server\x09(in windows you type `node server\x5cserver.js` instead)\x0a\x0aIt should say it is listening on port 4000. If it does, hooray! That means both Node and Amber are good. In Windows you might get a question about opening that port in the local firewall - yep, do it!\x0a\x0a## Firing up Amber\x0aThe Amber IDE is written in... Amber. It uses [jQuery](http://jquery.com) and runs right in your browser as a ... well, a web page. \x0aWe could open it up just using a file url - but the reason we performed the previous steps is so that we can load the IDE web page from a server that can handle PUTs (webDAV) of source code. \x0aAccording to web security Amber can only do PUT back to the same server it was loaded from. Thus we instead want to open it [through our little server now listening on port 4000](http://localhost:4000/index.html).\x0aClicking that link and then pressing the **Class browser** should get your Amber IDE running with the ability to commit modified packages locally.\x0a\x0aTo verify that you can indeed commit now - just select a Package in the browser, like say \x22Examples\x22 and press the **Commit** button below. **If all goes well nothing happens :)**. \x0aSo in order to really know if it worked we can check the modified date on the files **amber/st/Examples.st**, **amber/js/Examples.js** and **amber/js/Examples.deploy.js** - they should be brand new.\x0a\x0aNOTE: We can use any webDAV server and Apache2 has been used earlier and works fine. But the Amber server is smaller and simpler to start.\x0a");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch3GettingStarted",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["title:", "new", "contents:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch4Tutorials",
smalltalk.method({
selector: "ch4Tutorials",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.TutorialsChapter || TutorialsChapter))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch4Tutorials",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["new"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch5Index",
smalltalk.method({
selector: "ch5Index",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.ClassesIndexChapter || ClassesIndexChapter))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch5Index",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["new"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch6KernelObjects",
smalltalk.method({
selector: "ch6KernelObjects",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.PackageDocChapter || PackageDocChapter))._on_(_st((smalltalk.Package || Package))._named_("Kernel-Objects"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch6KernelObjects",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["on:", "named:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch7KernelClasses",
smalltalk.method({
selector: "ch7KernelClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.PackageDocChapter || PackageDocChapter))._on_(_st((smalltalk.Package || Package))._named_("Kernel-Classes"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch7KernelClasses",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["on:", "named:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch8KernelCollection",
smalltalk.method({
selector: "ch8KernelCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.PackageDocChapter || PackageDocChapter))._on_(_st((smalltalk.Package || Package))._named_("Kernel-Collections"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch8KernelCollection",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["on:", "named:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_ch9KernelMethods",
smalltalk.method({
selector: "ch9KernelMethods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.PackageDocChapter || PackageDocChapter))._on_(_st((smalltalk.Package || Package))._named_("Kernel-Methods"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ch9KernelMethods",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["on:", "named:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
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
messageSends: ["ifNil:", "buildChapters"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_checkHash",
smalltalk.method({
selector: "checkHash",
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
messageSends: ["replace:with:", "hash", "location", "announce:", "id:", "new", "yourself", "announcer"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_checkHashChange",
smalltalk.method({
selector: "checkHashChange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(window)._jQuery_(window))._bind_do_("hashchange",(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._checkHash();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkHashChange",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["bind:do:", "checkHash", "jQuery:"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@chapters"]=nil;
self["@announcer"]=nil;
self["@widget"]=nil;
_st(_st(window)._jQuery_(".documentation"))._remove();
_st(self)._build();
return self}, function($ctx1) {$ctx1.fill(self,"update",{}, smalltalk.DocumentationBuilder)})},
messageSends: ["remove", "jQuery:", "build"]}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
"_widget",
smalltalk.method({
selector: "widget",
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
messageSends: ["ifNil:", "on:"]}),
smalltalk.DocumentationBuilder);


smalltalk.DocumentationBuilder.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.DocumentationBuilder.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._build();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.DocumentationBuilder.klass)})},
messageSends: ["build", "current"]}),
smalltalk.DocumentationBuilder.klass);


smalltalk.addClass('DocumentationWidget', smalltalk.Widget, ['builder', 'selectedChapter', 'chapterDiv'], 'Documentation');
smalltalk.addMethod(
"_builder",
smalltalk.method({
selector: "builder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@builder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"builder",{}, smalltalk.DocumentationWidget)})},
messageSends: []}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_builder_",
smalltalk.method({
selector: "builder:",
fn: function (aDocumentationBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@builder"]=aDocumentationBuilder;
return self}, function($ctx1) {$ctx1.fill(self,"builder:",{aDocumentationBuilder:aDocumentationBuilder}, smalltalk.DocumentationWidget)})},
messageSends: []}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_chapters",
smalltalk.method({
selector: "chapters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._builder())._chapters();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chapters",{}, smalltalk.DocumentationWidget)})},
messageSends: ["chapters", "builder"]}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_displayChapter_",
smalltalk.method({
selector: "displayChapter:",
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedChapter_(aChapter);
_st(self)._updateChapterDiv();
return self}, function($ctx1) {$ctx1.fill(self,"displayChapter:",{aChapter:aChapter}, smalltalk.DocumentationWidget)})},
messageSends: ["selectedChapter:", "updateChapterDiv"]}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_renderChapterMenu_on_",
smalltalk.method({
selector: "renderChapterMenu:on:",
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
messageSends: ["with:", "title", "a", "onClick:", "selectChapter:", "do:", "renderChapterMenu:on:", "li", "chapters", "ol"]}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_renderMenuOn_",
smalltalk.method({
selector: "renderMenuOn:",
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
messageSends: ["class:", "div", "with:", "do:", "renderChapterMenu:on:", "li", "chapters", "ol"]}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["class:", "div", "with:", "renderMenuOn:", "updateChapterDiv"]}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_selectChapter_",
smalltalk.method({
selector: "selectChapter:",
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(document)._location())._hash_(_st(aChapter)._id());
return self}, function($ctx1) {$ctx1.fill(self,"selectChapter:",{aChapter:aChapter}, smalltalk.DocumentationWidget)})},
messageSends: ["hash:", "id", "location"]}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_selectedChapter",
smalltalk.method({
selector: "selectedChapter",
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
messageSends: ["ifNil:", "first", "chapters"]}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_selectedChapter_",
smalltalk.method({
selector: "selectedChapter:",
fn: function (aChapter){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@selectedChapter"]=aChapter;
$1=self["@selectedChapter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedChapter:",{aChapter:aChapter}, smalltalk.DocumentationWidget)})},
messageSends: []}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
"_updateChapterDiv",
smalltalk.method({
selector: "updateChapterDiv",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@chapterDiv"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(html)._with_(_st(self)._selectedChapter());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateChapterDiv",{}, smalltalk.DocumentationWidget)})},
messageSends: ["contents:", "with:", "selectedChapter"]}),
smalltalk.DocumentationWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._builder_(aBuilder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBuilder:aBuilder}, smalltalk.DocumentationWidget.klass)})},
messageSends: ["builder:", "new", "yourself"]}),
smalltalk.DocumentationWidget.klass);


