define("amber/Helios-Workspace-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Workspace-Tests');
smalltalk.packages["Helios-Workspace-Tests"].transport = {"type":"amd","amdNamespace":"amber"};

smalltalk.addClass('HLCodeWidgetTest', smalltalk.TestCase, [], 'Helios-Workspace-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testKeyMap",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st($HLCodeWidget())._pcKeyMap())._isKindOf_($HashedCollection()));
self._assert_(_st(_st($HLCodeWidget())._macKeyMap())._isKindOf_($HashedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testKeyMap",{},smalltalk.HLCodeWidgetTest)})},
messageSends: ["assert:", "isKindOf:", "pcKeyMap", "macKeyMap"]}),
smalltalk.HLCodeWidgetTest);


});
