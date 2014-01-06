define("amber/helpers", ["amber_vm/smalltalk", "amber_vm/globals", "require"], function (vm, globals, require) {
    var exports = Object.create(globals);

    // API

    exports.popupHelios = function () {
        window.open(require.toUrl('amber_helios/html/helios.html'), "Helios", "menubar=no, status=no, scrollbars=no, menubar=no, width=1000, height=600");
    };
    Object.defineProperty(exports, "vm", {
        value: vm,
        enumerable: true, configurable: true, writable: false
    });
    Object.defineProperty(exports, "globals", {
        value: globals,
        enumerable: true, configurable: true, writable: false
    });

    // Backward compatibility, deprecated

    Object.defineProperty(exports, "smalltalk", {
        value: vm,
        enumerable: true, configurable: true, writable: false
    });
    exports.defaultAmdNamespace = null;
    exports.initialize = function () {
        console.warn("smalltalk.defaultAmdNamespace is deprecated. Please use smalltalk.vm.defaultAmdNamespace instead.");
        console.warn("smalltalk.initialize is deprecated. Please  use smalltalk.vm.initialize instead.");
        console.warn("smalltalk.ClassName is deprecated. Please  use smalltalk.globals.ClassName instead.");
        vm.defaultAmdNamespace = exports.defaultAmdNamespace || vm.defaultAmdNamespace;
        return vm.initialize();
    };

    // Exports

    return  exports;
});
