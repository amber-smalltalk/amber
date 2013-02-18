smalltalk.addPackage('Canvas-Snippet', {});
smalltalk.addClass('HtmlSnippet', smalltalk.Object, ['snippets'], 'Canvas-Snippet');
smalltalk.addMethod(
"_addSnippet_",
smalltalk.method({
selector: "addSnippet:",
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
return self}, function($ctx1) {$ctx1.fill(self,"addSnippet:",{anAssociation:anAssociation,snippet:snippet}, smalltalk.HtmlSnippet)})}
}),
smalltalk.HtmlSnippet);

smalltalk.addMethod(
"_addSnippets_",
smalltalk.method({
selector: "addSnippets:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._associationsDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._addSnippet_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addSnippets:",{aCollection:aCollection}, smalltalk.HtmlSnippet)})}
}),
smalltalk.HtmlSnippet);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@snippets"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString}, smalltalk.HtmlSnippet)})}
}),
smalltalk.HtmlSnippet);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@snippets"])._at_ifAbsent_(aString,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock}, smalltalk.HtmlSnippet)})}
}),
smalltalk.HtmlSnippet);


smalltalk.HtmlSnippet.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
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
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.HtmlSnippet.klass)})}
}),
smalltalk.HtmlSnippet.klass);

smalltalk.addMethod(
"_digFromJQuery_",
smalltalk.method({
selector: "digFromJQuery:",
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
}, function($ctx1) {$ctx1.fill(self,"digFromJQuery:",{aJQuery:aJQuery,result:result}, smalltalk.HtmlSnippet.klass)})}
}),
smalltalk.HtmlSnippet.klass);


smalltalk.addMethod(
"_asSnippet",
smalltalk.method({
selector: "asSnippet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st((smalltalk.HtmlSnippet || HtmlSnippet))._current())._at_(_st(self)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSnippet",{}, smalltalk.CharacterArray)})}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_snip_",
smalltalk.method({
selector: "snip:",
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
}, function($ctx1) {$ctx1.fill(self,"snip:",{anElement:anElement,clone:clone,caret:caret}, smalltalk.HTMLCanvas)})}
}),
smalltalk.HTMLCanvas);

