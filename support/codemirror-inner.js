// Loading this in nested file so that require.config
// with shim dependencies is in effect.
// See http://stackoverflow.com/questions/21647956/how-to-config-requirejs-shim-dependencies-just-in-time/

define([
    'amber_lib/codemirror/lib/codemirror',
    'amber_lib/codemirror/mode/smalltalk/smalltalk',
    'amber_lib/codemirror/addon/hint/show-hint',
    'css!amber_lib/codemirror/theme/ambiance',
    'css!amber_lib/codemirror/lib/codemirror',
    'css!amber_lib/codemirror/addon/hint/show-hint'
]);
