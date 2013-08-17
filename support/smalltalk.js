define("amber_vm/smalltalk", ["require", "module", "./boot"], function (require, module, boot) {
    var smalltalk = boot.smalltalk;
    smalltalk._amd_require = require;
    smalltalk._amd_defaultNamespace = module.config().defaultNamespace;
    return  smalltalk;
});

