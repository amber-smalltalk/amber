define("amber/Helios-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber/Kernel-Exceptions"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Exceptions');
smalltalk.packages["Helios-Exceptions"].transport = {"type":"amd","amdNamespace":"amber"};

smalltalk.addClass('HLError', smalltalk.Error, [], 'Helios-Exceptions');


smalltalk.addClass('HLChangeForbidden', smalltalk.HLError, [], 'Helios-Exceptions');

});
