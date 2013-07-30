define("amber_vm/smalltalk", ["require", "./boot"], function (require, boot) {
    var smalltalk = boot.smalltalk;
    smalltalk._amd_require = require;
    return  smalltalk;
});
