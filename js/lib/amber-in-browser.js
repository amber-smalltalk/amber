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
            'jquery-ui': 'jQuery/jquery-ui-1.8.16.custom.min'
        },
        map: {
            '*': {
                'css': 'require-css-0.0.6/css'
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
                deps: [ 'CodeMirror/codemirror' ]
            },
            'CodeMirror/addon/hint/show-hint': {
                deps: [ 'CodeMirror/codemirror' ]
            },
            'ensure-console': {
                exports: 'console'
            },
            'amber/Kernel-Objects.deploy': {
                deps: [ 'smalltalk', 'nil', '_st' ]
            },
            'amber/Kernel-Classes.deploy': {
                deps: [ 'amber/Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Methods.deploy': {
                deps: [ 'amber/Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Collections.deploy': {
                deps: [ 'amber/Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Exceptions.deploy': {
                deps: [ 'amber/Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Transcript.deploy': {
                deps: [ 'amber/Kernel-Objects.deploy' ]
            },
            'amber/Kernel-Announcements.deploy': {
                deps: [ 'amber/Kernel-Objects.deploy' ]
            },
            'amber/Canvas.deploy': {
                deps: [ 'amber/Kernel-Objects.deploy' ]
            },
             'amber/Kernel-Objects': {
                deps: [ 'smalltalk', 'nil' ]
            },
            'amber/Kernel-Classes': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Kernel-Methods': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Kernel-Collections': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Kernel-Exceptions': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Kernel-Transcript': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Kernel-Announcements': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Canvas': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/SUnit': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Importer-Exporter': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Compiler-Exceptions': {
                deps: [ 'amber/Kernel-Exceptions' ]
            },
            'amber/Compiler-Core': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Compiler-AST': {
                deps: [ 'amber/Compiler-Core' ]
            },
            'amber/Compiler-Semantic': {
                deps: [ 'amber/Compiler-Core' ]
            },
            'amber/Compiler-IR': {
                deps: [ 'amber/Compiler-Core' ]
            },
            'amber/Compiler-Inlining': {
                deps: [ 'amber/Compiler-IR' ]
            },
            'amber/Compiler-Interpreter': {
                deps: [ 'amber/Compiler-Core' ]
            },
            'amber/parser': {
                deps: [ 'smalltalk' ]
            },
            'amber/IDE': {
                deps: [ 'amber/Canvas', 'amber/Kernel-Exceptions' ]
            },
            'amber/Examples': {
                deps: [ 'amber/Canvas' ]
            },
            'amber/Benchfib': {
                deps: [ 'amber/Kernel-Objects' ]
            },
            'amber/Kernel-Tests': {
                deps: [ 'amber/SUnit' ]
            },
            'amber/Compiler-Tests': {
                deps: [ 'amber/SUnit' ]
            },
            'amber/SUnit-Tests': {
                deps: [ 'amber/SUnit' ]
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