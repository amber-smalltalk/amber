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
    exports.initialize = function (options) {
        options = options || {};
        if (exports.defaultAmdNamespace) {
            console.warn("`smalltalk.defaultAmdNamespace = 'foo';` is deprecated. Please use `smalltalk.initialize({defaultAmdNamespace: 'foo'});` instead.");
            options.defaultAmdNamespace = options.defaultAmdNamespace || exports.defaultAmdNamespace;
        }
        vm.defaultAmdNamespace = options.defaultAmdNamespace || vm.defaultAmdNamespace;
        console.warn("smalltalk.ClassName is deprecated. Please  use smalltalk.globals.ClassName instead.");
        return vm.initialize();
    };

    // Backward compatibility, deprecated

    Object.defineProperty(exports, "smalltalk", {
        value: vm,
        enumerable: true, configurable: true, writable: false
    });
    exports.defaultAmdNamespace = null;

    // Exports

    return  exports;
});
