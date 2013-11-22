/* Amber package loading.
  Load this script as well as require.js (works in any order;
    either defines 'require', thus passing config, if loaded prior require.js;
    or calls require.config, if loaded post require.js).
  Usage example:
    require(['amber/devel'], function(smalltalk) {
        smallralk.initialize();

        smalltalk.Browser._open();
    });
  For detailed explanation of amber loading, see:
  https://github.com/amber-smalltalk/amber/wiki/How-to-load-amber
 */

var require;

require = function (require) {
    var scripts = document.getElementsByTagName("script");
    var me = scripts[scripts.length - 1];
    var src = me.src;
    // strip the last two elements from the URL
    // e.g. http://app.com/amber/support/amber.js -> http://app.com/amber
    var amber_home = resolveViaDOM(src).replace(/\/[^\/]+\/[^\/]+$/, "");
    // In case of nonstandard deployment, you can specify libraries placement directly ...
    var library_home = me.hasAttribute('data-libs') && me.getAttribute('data-libs');

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
            'amber_inc': amber_home + '/support',
            'amber_core': amber_home + '/js',
            'amber_core/_source': amber_home + '/st',
            'amber_html': amber_home,
            'jquery': library_home + '/jquery/jquery.min',
            'jquery-ui': amber_home + '/support/jQuery/jquery-ui-1.8.24.custom.min'
        },
        map: {
            '*': {
                'css': 'amber_lib/require-css/css'
            }
        },
        shim: {
            'jquery-ui': {
                deps: [ 'jquery' ]
            },
            'amber_lib/bootstrap/js/bootstrap': {
                deps: [ 'jquery', 'css!amber_lib/bootstrap/css/bootstrap' ]
            },
            'amber_lib/CodeMirror/codemirror': {
                deps: [ 'css!amber_lib/codemirror/lib/codemirror' ]
            },
            'amber_lib/jquery-tabby/jquery.textarea': {
                deps: [ 'jquery', 'jquery-ui' ]
            },
            'amber_inc/CodeMirror/smalltalk': {
                deps: [ 'amber_lib/codemirror/lib/codemirror' ]
            },
            'amber_lib/codemirror/addon/hint/show-hint': {
                deps: [ '../../lib/codemirror' ]
            },
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
