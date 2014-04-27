define("amber/helpers", ["amber_vm/smalltalk", "amber_vm/globals", "require"], function (vm, globals, require) {
    var exports = Object.create(globals);

    // API

    exports.popupHelios = function () {
        window.open(require.toUrl('helios/index.html'), "Helios", "menubar=no, width=1000, height=600");
    };
    Object.defineProperty(exports, "vm", {
        value: vm,
        enumerable: true, configurable: true, writable: false
    });
    Object.defineProperty(exports, "globals", {
        value: globals,
        enumerable: true, configurable: true, writable: false
    });

    function mixinToSettings(source) {
        var settings = globals.SmalltalkSettings;
        Object.keys(source).forEach(function (key) {
            settings[key] = source[key];
        });
    }

    function settingsInLocalStorage() {
        var global = new Function('return this')(),
            storage = 'localStorage' in global && global.localStorage;

        if (storage) {
            var fromStorage;
            try {
                fromStorage = JSON.parse(storage.getItem('amber.SmalltalkSettings'));
            } catch (ex) {
                // pass
            }
            mixinToSettings(fromStorage || {});
            if (typeof window !== "undefined") {
                requirejs(['jquery'], function ($) {
                    $(window).on('beforeunload', function () {
                        storage.setItem('amber.SmalltalkSettings', JSON.stringify(globals.SmalltalkSettings));
                    });
                });
            }
        }
    }

    exports.initialize = function (options) {
        globals.SmalltalkSettings['transport.defaultAmdNamespace'] = vm.defaultAmdNamespace;
        settingsInLocalStorage();
        if (exports.defaultAmdNamespace) {
            console.warn("`smalltalk.defaultAmdNamespace = 'namespace';` is deprecated. Please use `smalltalk.initialize({'transport.defaultAmdNamespace': 'namespace'});` instead.");
            globals.SmalltalkSettings['transport.defaultAmdNamespace'] = globals.SmalltalkSettings['transport.defaultAmdNamespace'] || exports.defaultAmdNamespace;
        }
        mixinToSettings(options || {});
        console.warn("smalltalk.ClassName is deprecated. Please use smalltalk.globals.ClassName instead.");
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
