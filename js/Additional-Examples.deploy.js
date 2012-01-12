smalltalk.addPackage('Additional-Examples', {});
smalltalk.addClass('ClassInitializationExample', smalltalk.Object, [], 'Additional-Examples');

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(smalltalk.send("Hello from inside the ", "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [" initialize method."])]);
return self;}
}),
smalltalk.ClassInitializationExample.klass);


