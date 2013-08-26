define("amber_vm/smalltalk", ["require", "module", "./boot"], function (require, module, boot) {
    var smalltalk = boot.smalltalk;
	smalltalk.setAMDRequire(require);
    var config = module.config && module.config();
    if (config) {
		smalltalk.setDefaultAMDNamespace(config.defaultNamespace);
    }
    return  smalltalk;
});

