/* Amber package loading
 usage example:
 TODO
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
            'amber_lib': home+'/support',
            'amber_core': home+'/js',
            'amber_core/_source': home+'/st',
            'jquery': home+'/support/jQuery/jquery-1.8.2.min',
            'jquery-ui': home+'/support/jQuery/jquery-ui-1.8.16.custom.min'
        },
        map: {
            '*': {
                'css': 'amber_lib/requirejs/require-css-0.0.6/css'
            },
            'amber/helios': {
                'jquery-ui': 'amber_lib/jQuery/jquery-ui-1.8.24.custom.min'
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
                deps: [ 'css!amber_lib/CodeMirror/codemirror' ]
            },
            'amber_lib/jQuery/jquery.textarea': {
                deps: [ 'jquery', 'jquery-ui' ]
            },
            'amber_lib/CodeMirror/smalltalk': {
                deps: [ './codemirror' ]
            },
            'amber_lib/CodeMirror/addon/hint/show-hint': {
                deps: [ '../../codemirror' ]
            },
            'ensure-console': {
                exports: 'console'
            }
        }
    };

    if (require) {
        require.config(config);
        return require;
    } else {
        return config;
    }
}(require);