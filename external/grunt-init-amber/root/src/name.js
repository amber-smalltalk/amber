define("{%= namespace %}/{%= name %}", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st,globals){
smalltalk.addPackage('{%= name %}');
smalltalk.packages["{%= name %}"].transport = {"type":"amd","amdNamespace":"{%= namespace %}"};

smalltalk.addClass('{%= name %}', globals.Object, [], '{%= name %}');

});
