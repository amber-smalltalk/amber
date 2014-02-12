/* Amber package loading.
  Load this script as well as require.js (works in any order;
    either defines 'require', thus passing config, if loaded prior require.js;
    or calls require.config, if loaded post require.js).
  Usage example:
    require(['amber/devel'], function(amber) {
        amber.initialize({"transport.defaultAmdNamespace": "com_example_myproject"});

        amber.globals.Browser._open(); // for legacy IDE
        amber.popupHelios(); // for Helios IDE
    });
  For detailed explanation of amber loading, see:
  https://github.com/amber-smalltalk/amber/wiki/How-to-load-amber
 */

var require;

require = function (require) {
    function uniquelyMapped(symbolicPath) {
        if (require && typeof define !== "undefined" && define.amd) {
            var mappedPath = require.toUrl(symbolicPath),
                basePath = require.toUrl('') + symbolicPath;
            if (resolveViaDOM(mappedPath) !== resolveViaDOM(basePath)) {
                return mappedPath;
            }
        }
    }
    function myTag() {
        // To be able to use its path and attributes
        // to map other parts of Amber, this code must find its path.
        // It first looks if require is already present && 'amber' path mapped.
        // It not, it looks for id 'amber-path-mapper'.
        // When loading amber.js asynchronously, you must include this id,
        // or the code can not reliably find its <script>.
        // If neither 'amber' mapping, nor script#amber-path-mapper is present,
        // (the id is not necessary for inline <script> tag in HTML),
        // it uses the "find the last <script> tag present in the moment" method.
        var result = uniquelyMapped('amber/amber');
        if (result) {
            return {src: result, hasAttribute: function () { return false; }};
        }
        var me = document.getElementById("amber-path-mapper");
        if (me && me.tagName.toLowerCase() === "script") {
            return me;
        }
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1];
    }
    var me = myTag();
    var src = me.src;
    // strip the last two elements from the URL
    // e.g. http://app.com/amber/support/amber.js -> http://app.com/amber
    var amber_home = resolveViaDOM(src).replace(/\/[^\/]+\/[^\/]+$/, "");
    // In case of nonstandard deployment, you can specify libraries placement directly ...
    var library_home = uniquelyMapped('amber_lib') || me.hasAttribute('data-libs') && me.getAttribute('data-libs');

    // ... otherwise, this heuristics is used:
    if (!library_home) {
        // At the present moment, bower tries to have flat hierarchy,
        // which leads to two possible scenarios:
        // 1. amber itself was deployed via bower,
        //    its libraries are at the same bower dir
        //    where amber itself is placed
        // 2. amber was deployed in different fashion,
        //    its libraries are included by bower locally, inside amber
        // The detection is done by looking for '/bower_components/' in amber path.
        var match = amber_home.match(/^(.*\/bower_components)\//);
        library_home = match ? match[1] : amber_home + '/bower_components';
    }

    function resolveViaDOM(url) {
        var a = document.createElement("a");
        a.href = url;
        return a.href;
    }

    var config = {
        paths: {
            'amber': amber_home + '/support',
            'amber_vm': amber_home + '/support',
            'amber_css': amber_home + '/css',
            'amber_lib': library_home,
            'amber_core': amber_home + '/src',
            'amber_helios/html': amber_home,
            'jquery': library_home + '/jquery/jquery.min'
        },
        map: {
            '*': {
                'css': 'amber_lib/require-css/css'
            }
        },
        shim: {
            'ensure-console': {
                exports: 'console'
            }
        }
    };

    // This is to allow both alternatives of loading:
    // before require.js as well as after require.js
    // See http://requirejs.org/docs/api.html#config for details
    // of usage of 'require' global to allow to pre-define configuration
    // before require.js is loaded.
    if (require) {
        require.config(config);
        return require;
    } else {
        return config;
    }
}(require);
