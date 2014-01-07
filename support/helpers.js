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
        var settings = globals.SmalltalkSettings;
        settings['vm.defaultAmdNamespace'] = vm.defaultAmdNamespace;
        // TODO load saved contents from localStorage
        if (exports.defaultAmdNamespace) {
            console.warn("`smalltalk.defaultAmdNamespace = 'namespace';` is deprecated. Please use `smalltalk.initialize({'vm.defaultAmdNamespace': 'namespace'});` instead.");
            settings['vm.defaultAmdNamespace'] = settings['vm.defaultAmdNamespace'] || exports.defaultAmdNamespace;
        }
        Object.keys(options).forEach(function (key) {
            settings[key] = options[key];
        });
        console.warn("smalltalk.ClassName is deprecated. Please  use smalltalk.globals.ClassName instead.");
        globals.SmalltalkSettings = settings;
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
