define("amber_vm/smalltalk", ["require", "module", "./boot"], function (require, module, boot) {
    var smalltalk = boot.smalltalk;
	smalltalk.amdRequire = require;
//    var config = module.config && module.config();
//    if (config) {
//		smalltalk.defaultAMDNamespace = config.defaultNamespace;
//    }
    return  smalltalk;
});

