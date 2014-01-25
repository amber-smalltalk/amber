define("amber/helpers", ["amber_vm/smalltalk", "amber_vm/globals", "require"], function (vm, globals, require) {
    var exports = Object.create(globals);

    var storage = (function (global) {
        return 'localStorage' in global && global.localStorage;
    })(new Function('return this')());

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
        function mixinToSettings(source) {
            Object.keys(source).forEach(function (key) {
                settings[key] = source[key];
            });
        }
        settings['transport.defaultAmdNamespace'] = vm.defaultAmdNamespace;
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
        if (exports.defaultAmdNamespace) {
            console.warn("`smalltalk.defaultAmdNamespace = 'namespace';` is deprecated. Please use `smalltalk.initialize({'transport.defaultAmdNamespace': 'namespace'});` instead.");
            settings['transport.defaultAmdNamespace'] = settings['transport.defaultAmdNamespace'] || exports.defaultAmdNamespace;
        }
        mixinToSettings(options || {});
        console.warn("smalltalk.ClassName is deprecated. Please use smalltalk.globals.ClassName instead.");
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
