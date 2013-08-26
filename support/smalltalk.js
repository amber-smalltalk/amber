define("amber_vm/smalltalk", ["require", "module", "./boot"], function (require, module, boot) {
    var smalltalk = boot.smalltalk;
    smalltalk._amd_require = require;
    smalltalk._defaultTransportType = "amd";
    var config = module.config && module.config();
    if (config) {
        smalltalk._amd_defaultNamespace = config.defaultNamespace;
    }
    return  smalltalk;
});

