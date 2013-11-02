define("{%= namespace %}/{%= name %}", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('{%= name %}');
smalltalk.packages["{%= name %}"].transport = {"type":"amd","amdNamespace":"{%= namespace %}"};

smalltalk.addClass('{%= name %}', smalltalk.Object, [], '{%= name %}');

});
