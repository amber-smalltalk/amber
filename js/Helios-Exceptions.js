define("amber_core/Helios-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Exceptions"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Exceptions');
smalltalk.packages["Helios-Exceptions"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLError', smalltalk.Error, [], 'Helios-Exceptions');
smalltalk.HLError.comment="I am the abstract superclass of all Helios-specific errors.";


smalltalk.addClass('HLChangeForbidden', smalltalk.HLError, [], 'Helios-Exceptions');
smalltalk.HLChangeForbidden.comment="I get signaled when a (often user) requested change is forbidden. A confirmation message can then be displayed to the user.\x0a\x0aSee `HLModel >> withChangesDo:`.";


smalltalk.addClass('HLListItemNotFound', smalltalk.HLError, [], 'Helios-Exceptions');
smalltalk.HLListItemNotFound.comment="I get signaled by a `HLListWidget` when a non-existing item in the list is activated.";

});
