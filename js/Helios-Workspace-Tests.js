(function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Workspace-Tests');

smalltalk.addClass('HLCodeWidgetTest', smalltalk.TestCase, [], 'Helios-Workspace-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testKeyMap",
category: 'tests',
fn: function (){
var self=this;
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st($HLCodeWidget())._pcKeyMap())._isKindOf_($HashedCollection()));
self._assert_(_st(_st($HLCodeWidget())._macKeyMap())._isKindOf_($HashedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testKeyMap",{},smalltalk.HLCodeWidgetTest)})},
args: [],
source: "testKeyMap\x0a\x09\x22Key maps are a collection of associations.\x22\x0a\x09self assert: (HLCodeWidget pcKeyMap isKindOf: HashedCollection).\x0a\x09self assert: (HLCodeWidget macKeyMap isKindOf: HashedCollection)",
messageSends: ["assert:", "isKindOf:", "pcKeyMap", "macKeyMap"],
referencedClasses: ["HLCodeWidget", "HashedCollection"]
}),
smalltalk.HLCodeWidgetTest);


})(global_smalltalk,global_nil,global__st);
