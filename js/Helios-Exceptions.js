define("amber_core/Helios-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Exceptions"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Exceptions');
smalltalk.packages["Helios-Exceptions"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLError', smalltalk.Error, [], 'Helios-Exceptions');


smalltalk.addClass('HLChangeForbidden', smalltalk.HLError, [], 'Helios-Exceptions');

});
