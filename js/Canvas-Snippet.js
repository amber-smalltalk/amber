smalltalk.addPackage('Canvas-Snippet', {});
smalltalk.addClass('HtmlSnippet', smalltalk.Object, ['snippets'], 'Canvas-Snippet');
smalltalk.addMethod(
"_addSnippet_",
smalltalk.method({
selector: "addSnippet:",
category: 'accessing',
fn: function (anAssociation){
var self=this;
var snippet;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@snippets"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@snippets"]=smalltalk.HashedCollection._fromPairs_([]);
$1=self["@snippets"];
} else {
$1=$2;
};
_st($1)._add_(anAssociation);
snippet=_st(anAssociation)._value();
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._installMethod_forClass_category_(_st(_st((function(htmlReceiver){
return smalltalk.withContext(function($ctx2) {return _st(htmlReceiver)._snip_(snippet);
}, function($ctx2) {$ctx2.fillBlock({htmlReceiver:htmlReceiver},$ctx1)})}))._currySelf())._asCompiledMethod_(_st(anAssociation)._key()),(smalltalk.HTMLCanvas || HTMLCanvas),"**snippets");
return self}, function($ctx1) {$ctx1.fill(self,"addSnippet:",{anAssociation:anAssociation,snippet:snippet}, smalltalk.HtmlSnippet)})},
args: ["anAssociation"],
source: "addSnippet: anAssociation\x0a\x09| snippet |\x0a\x09(snippets ifNil: [ snippets := #{} ]) add: anAssociation.\x0a    snippet := anAssociation value.\x0a    ClassBuilder new\x0a    \x09installMethod: ([ :htmlReceiver | htmlReceiver snip: snippet ] currySelf asCompiledMethod: anAssociation key)\x0a        forClass: HTMLCanvas\x0a        category: '**snippets'",
messageSends: ["add:", "ifNil:", "value", "installMethod:forClass:category:", "asCompiledMethod:", "key", "currySelf", "snip:", "new"],
referencedClasses: ["HTMLCanvas", "ClassBuilder"]
}),
smalltalk.HtmlSnippet);

smalltalk.addMethod(
"_addSnippets_",
smalltalk.method({
selector: "addSnippets:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._associationsDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._addSnippet_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addSnippets:",{aCollection:aCollection}, smalltalk.HtmlSnippet)})},
args: ["aCollection"],
source: "addSnippets: aCollection\x0a\x09aCollection associationsDo: [ :each | self addSnippet: each ]\x0a",
messageSends: ["associationsDo:", "addSnippet:"],
referencedClasses: []
}),
smalltalk.HtmlSnippet);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@snippets"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString}, smalltalk.HtmlSnippet)})},
args: ["aString"],
source: "at: aString\x0a\x09^ snippets at: aString",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.HtmlSnippet);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@snippets"])._at_ifAbsent_(aString,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock}, smalltalk.HtmlSnippet)})},
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09^ snippets at: aString ifAbsent: aBlock",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.HtmlSnippet);


smalltalk.HtmlSnippet.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st(self)._new();
_st($3)._addSnippets_(_st(self)._digFromJQuery_(_st(document)._asJQuery()));
$4=_st($3)._yourself();
self["@current"]=$4;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.HtmlSnippet.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [\x0a\x09\x09current := self new addSnippets: (self digFromJQuery: document asJQuery); yourself ]",
messageSends: ["ifNil:", "addSnippets:", "digFromJQuery:", "asJQuery", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HtmlSnippet.klass);

smalltalk.addMethod(
"_digFromJQuery_",
smalltalk.method({
selector: "digFromJQuery:",
category: 'action',
fn: function (aJQuery){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
result=smalltalk.HashedCollection._fromPairs_([]);
_st(_st(_st("[data-snippet]")._asJQuery())._toArray())._do_((function(each){
var jq,name;
return smalltalk.withContext(function($ctx2) {
jq=_st(each)._asJQuery();
jq;
name=_st(jq)._attr_("data-snippet");
name;
$1=_st(name).__eq("*");
if(! smalltalk.assert($1)){
$2=_st(_st("^\x5c*")._asRegexp())._test_(name);
if(smalltalk.assert($2)){
name=_st(name)._allButFirst();
name;
_st(jq)._attr_put_("data-snippet","*");
} else {
_st(jq)._removeAttr_("data-snippet");
};
return _st(result)._at_put_(name,_st(_st(jq)._detach())._get_((0)));
};
}, function($ctx2) {$ctx2.fillBlock({each:each,jq:jq,name:name},$ctx1)})}));
$3=result;
return $3;
}, function($ctx1) {$ctx1.fill(self,"digFromJQuery:",{aJQuery:aJQuery,result:result}, smalltalk.HtmlSnippet.klass)})},
args: ["aJQuery"],
source: "digFromJQuery: aJQuery\x0a\x09\x22Finds and takes out all snippets out of aJQuery\x22\x0a    | result |\x0a    result := #{}.\x0a\x09'[data-snippet]' asJQuery toArray do: [ :each |\x0a    \x09| jq name |\x0a        jq := each asJQuery.\x0a        name := jq attr: 'data-snippet'.\x0a        name = '*' ifFalse: [\x0a        \x09('^\x5c*' asRegexp test: name) ifTrue: [ name := name allButFirst. jq attr: 'data-snippet' put: '*' ]\x0a          \x09\x09ifFalse: [ jq removeAttr: 'data-snippet' ].\x0a            result at: name put: (jq detach get: 0) ]].\x0a\x09^result",
messageSends: ["do:", "asJQuery", "attr:", "ifFalse:", "ifTrue:ifFalse:", "allButFirst", "attr:put:", "removeAttr:", "test:", "asRegexp", "at:put:", "get:", "detach", "=", "toArray"],
referencedClasses: []
}),
smalltalk.HtmlSnippet.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.klass.fn.prototype._initialize.apply(_st(self), []);
_st(self)._current();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HtmlSnippet.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self current",
messageSends: ["initialize", "current"],
referencedClasses: []
}),
smalltalk.HtmlSnippet.klass);


smalltalk.addMethod(
"_asSnippet",
smalltalk.method({
selector: "asSnippet",
category: '*Canvas-Snippet',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st((smalltalk.HtmlSnippet || HtmlSnippet))._current())._at_(_st(self)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSnippet",{}, smalltalk.CharacterArray)})},
args: [],
source: "asSnippet\x0a\x09^ HtmlSnippet current at: self asString",
messageSends: ["at:", "asString", "current"],
referencedClasses: ["HtmlSnippet"]
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_snip_",
smalltalk.method({
selector: "snip:",
category: '*Canvas-Snippet',
fn: function (anElement){
var self=this;
var clone,caret;
return smalltalk.withContext(function($ctx1) { var $1,$2;
clone=_st(_st(anElement)._asJQuery())._clone();
_st(self)._with_(_st((smalltalk.TagBrush || TagBrush))._fromJQuery_canvas_(clone,self));
caret=_st(clone)._find_("[data-snippet=\x22*\x22]");
$1=_st(_st(caret)._toArray())._isEmpty();
if(smalltalk.assert($1)){
caret=clone;
caret;
};
$2=_st((smalltalk.TagBrush || TagBrush))._fromJQuery_canvas_(_st(caret)._removeAttr_("data-snippet"),self);
return $2;
}, function($ctx1) {$ctx1.fill(self,"snip:",{anElement:anElement,clone:clone,caret:caret}, smalltalk.HTMLCanvas)})},
args: ["anElement"],
source: "snip: anElement\x0a\x09\x22Adds clone of anElement, finds [data-snippet=\x22\x22*\x22\x22] subelement\x0a    and returns TagBrush as if that subelement was just added.\x0a    \x0a    Use with asSnippet -- (html snip: #mySnip asSnippet) with: [...]\x22\x0a    | clone caret |\x0a    clone := anElement asJQuery clone.\x0a    self with: (TagBrush fromJQuery: clone canvas: self).\x0a    caret := clone find: '[data-snippet=\x22*\x22]'.\x0a    caret toArray isEmpty ifTrue: [ caret := clone ].\x0a    ^TagBrush fromJQuery: (caret removeAttr: 'data-snippet') canvas: self",
messageSends: ["clone", "asJQuery", "with:", "fromJQuery:canvas:", "find:", "ifTrue:", "isEmpty", "toArray", "removeAttr:"],
referencedClasses: ["TagBrush"]
}),
smalltalk.HTMLCanvas);

