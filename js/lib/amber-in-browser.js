/* Amber package loading
 usage example:
 TODO
 */

var require;

require = function (require) {
    var scripts = document.getElementsByTagName("script");
    var src = scripts[ scripts.length - 1 ].src;
    var home = resolveViaDOM(src).replace(/[^\/]+$/, "");

    function resolveViaDOM(url) {
        var a = document.createElement("a");
        a.href = url;
        return a.href;
    }

    var config = {
        baseUrl: home,
        paths: {
            'amber': '..',
            'jquery': 'jQuery/jquery-1.8.2.min',
            'jquery-ui': 'jQuery/jquery-ui-1.8.16.custom.min',
            'smalltalk': '../boot'
        },
        map: {
            '*': {
                'css': 'require-css-0.0.6/css'
            }
        },
        shim: {
            'CodeMirror/smalltalk': {
                deps: [ 'CodeMirror/codemirror']
            },
            'CodeMirror/addon/hint/show-hint': {
                deps: [ 'CodeMirror/codemirror']
            }
        },
        deps: [
            'jquery', 'es5-shim-2.0.2/es5-shim.min', 'es5-shim-2.0.2/es5-sham.min', 'smalltalk'
        ]
    };

    if (require) {
        require.config(config);
        return require;
    } else {
        return config;
    }
}(require);