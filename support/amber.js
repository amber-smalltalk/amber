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
    var src = scripts[ scripts.length - 1 ].src;
    var home = resolveViaDOM(src).replace(/\/[^\/]+\/[^\/]+$/, "");

    function resolveViaDOM(url) {
        var a = document.createElement("a");
        a.href = url;
        return a.href;
    }

    var config = {
        paths: {
            'amber': home+'/support',
            'amber_vm': home+'/support',
            'amber_css': home+'/css',
            'amber_lib': home+'/bower_components',
            'amber_inc': home+'/support',
            'amber_core': home+'/js',
            'amber_core/_source': home+'/st',
            'amber_html': home,
            'jquery': home+'/bower_components/jquery/jquery.min',
            'jquery-ui': home+'/support/jQuery/jquery-ui-1.8.24.custom.min'
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
                deps: [ 'css!amber_lib/bootstrap/css/bootstrap' ]
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