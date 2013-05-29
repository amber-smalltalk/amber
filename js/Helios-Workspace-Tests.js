smalltalk.addPackage('Helios-Workspace-Tests');
smalltalk.addClass('HLCodeWidgetTest', smalltalk.TestCase, [], 'Helios-Workspace-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testKeyMap",
category: 'tests',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st($HLCodeWidget())._pcKeyMap())._isKindOf_($HashedCollection()));
self._assert_(_st(_st($HLCodeWidget())._macKeyMap())._isKindOf_($HashedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testKeyMap",{},smalltalk.HLCodeWidgetTest)})},
args: [],
source: "testKeyMap\x0a\x22Key maps are a collection of associations.\x22\x0aself assert: ( HLCodeWidget pcKeyMap isKindOf: HashedCollection ).\x0aself assert: ( HLCodeWidget macKeyMap isKindOf: HashedCollection ).",
messageSends: ["assert:", "isKindOf:", "pcKeyMap", "macKeyMap"],
referencedClasses: ["HashedCollection", "HLCodeWidget"]
}),
smalltalk.HLCodeWidgetTest);



