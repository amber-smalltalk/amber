define("amber/helpers", ["amber/boot", "require"], function (boot, require) {
    var globals = boot.globals,
        exports = {},
        api = boot.api,
        nil = boot.nil;

    // API

    exports.popupHelios = function () {
        require(['helios/index'], function (helios) {
            helios.popup();
        }, function (err) {
            window.alert("Error loading helios.\nIf not present, you can install it with 'bower install helios --save-dev'.\nThe error follows:\n" + err);
        });
    };
    Object.defineProperty(exports, "api", {
        value: api,
        enumerable: true, configurable: true, writable: false
    });
    Object.defineProperty(exports, "globals", {
        value: globals,
        enumerable: true, configurable: true, writable: false
    });
    Object.defineProperty(exports, "nil", {
        value: nil,
        enumerable: true, configurable: true, writable: false
    });

    function mixinToSettings(source) {
        var settings = globals.SmalltalkSettings;
        Object.keys(source).forEach(function (key) {
            settings[key] = source[key];
        });
    }

    function settingsInLocalStorage() {
        //jshint evil:true
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
        globals.SmalltalkSettings['transport.defaultAmdNamespace'] = api.defaultAmdNamespace;
        settingsInLocalStorage();
        mixinToSettings(options || {});
        return api.initialize();
    };

    // Exports

    return  exports;
});
