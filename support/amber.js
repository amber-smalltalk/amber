/* Amber package loading
 usage example:
 TODO
 */

var require;

require = function (require) {
    var scripts = document.getElementsByTagName("script");
    var src = scripts[ scripts.length - 1 ].src;
    var home = resolveViaDOM(src).replace(/\/[^\/]+$/, "");

    function resolveViaDOM(url) {
        var a = document.createElement("a");
        a.href = url;
        return a.href;
    }

    var config = {
        baseUrl: home,
        paths: {
            'amber_set': '.',
            'amber_vm': '.',
            'amber': '../js',
            'amber/_source': '../st',
            'jquery': 'jQuery/jquery-1.8.2.min',
            'jquery-ui': 'jQuery/jquery-ui-1.8.16.custom.min'
        },
        map: {
            '*': {
                'css': 'requirejs/require-css-0.0.6/css'
            }
        },
        shim: {
            'jquery-ui': {
                deps: [ 'jquery' ]
            },
            'jQuery/jquery.textarea': {
                deps: [ 'jquery', 'jquery-ui' ]
            },
            'CodeMirror/smalltalk': {
                deps: [ './codemirror' ]
            },
            'CodeMirror/addon/hint/show-hint': {
                deps: [ '../../codemirror' ]
            },
            'ensure-console': {
                exports: 'console'
            },
            'amber/Kernel-Objects.deploy': {
                deps: []
            },
            'amber/Kernel-Classes.deploy': {
                deps: [ './Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Methods.deploy': {
                deps: [ './Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Collections.deploy': {
                deps: [ './Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Infrastructure.deploy': {
                deps: [ './Kernel-Collections.deploy' ]
            },
            'amber/Kernel-Exceptions.deploy': {
                deps: [ './Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Transcript.deploy': {
                deps: [ './Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Announcements.deploy': {
                deps: [ './Kernel-Objects.deploy' ]
            },
            'amber/Canvas.deploy': {
                deps: [ './Kernel-Objects.deploy' ]
            },
            'amber/Canvas': {
                deps: [ './Kernel-Infrastructure' ]
            },
            'amber/SUnit': {
                deps: [ './Kernel-Objects' ]
            },
            'amber/Importer-Exporter': {
                deps: [ './Kernel-Infrastructure' ]
            },
            'amber/Compiler-Exceptions': {
                deps: [ './Kernel-Exceptions', './Compiler-AST' ]
            },
            'amber/Compiler-Core': {
                deps: [ './Kernel-Objects' ]
            },
            'amber/Compiler-AST': {
                deps: [ './Compiler-Core' ]
            },
            'amber/Compiler-Semantic': {
                deps: [ './Compiler-Core' ]
            },
            'amber/Compiler-IR': {
                deps: [ './Compiler-Core' ]
            },
            'amber/Compiler-Inlining': {
                deps: [ './Compiler-IR' ]
            },
            'amber/Compiler-Interpreter': {
                deps: [ './Compiler-AST' ]
            },
            'amber/IDE': {
                deps: [ './Canvas', './Kernel-Exceptions' ]
            },
            'amber/Examples': {
                deps: [ './Canvas' ]
            },
            'amber/Benchfib': {
                deps: [ './Kernel-Objects' ]
            },
            'amber/Kernel-Tests': {
                deps: [ './SUnit' ]
            },
            'amber/Compiler-Tests': {
                deps: [ './SUnit' ]
            },
            'amber/SUnit-Tests': {
                deps: [ './SUnit' ]
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