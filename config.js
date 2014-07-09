/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "amber": "support",
    "amber_vm": "support/deprecated-vm-files",
    "amber_vm/_st": "support/deprecated-vm-files/as-receiver",
    "amber_css": "support/resources",
    "amber_core": "src",
    "amber_cli": "external/amber-cli/src",
    "helios": "my/helios/src",
    "helios/set": "my/helios/set",
    "helios/resources": "my/helios/resources",
    "helios/index": "my/helios/index",
    "amber_lib/codemirror": "bower_components/codemirror",
    "amber_lib/es5-shim": "bower_components/es5-shim",
    "amber_lib/jquery-tabby": "bower_components/jquery-tabby",
    "jquery-ui": [
      "bower_components/jquery-ui/jquery-ui.min",
      "bower_components/jquery-ui/ui/minified/jquery-ui.min",
      "bower_components/jquery-ui/jquery-ui.min",
      "bower_components/jquery-ui/ui/minified/jquery-ui.min"
    ],
    "jquery": [
      "bower_components/jquery/dist/jquery.min",
      "bower_components/jquery/jquery.min",
      "bower_components/jquery/dist/jquery.min",
      "bower_components/jquery/jquery.min"
    ],
    "require-css": "bower_components/require-css",
    "bootstrap2.3.2": "bower_components/bootstrap2.3.2/bootstrap",
    "amber_lib/showdown": "bower_components/showdown"
  },
  "shim": {
    "ensure-console": {
      "exports": "console"
    },
    "amber_lib/codemirror/lib/codemirror": {
      "deps": [
        "css!amber_lib/codemirror/lib/codemirror"
      ]
    },
    "amber_lib/codemirror/mode/smalltalk/smalltalk": {
      "deps": [
        "../../lib/codemirror"
      ]
    },
    "amber_lib/codemirror/addon/hint/show-hint": {
      "deps": [
        "../../lib/codemirror"
      ]
    },
    "amber_lib/jquery-tabby/jquery.textarea": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "bootstrap2.3.2/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap2.3.2/css/bootstrap"
      ]
    }
  },
  "map": {
    "*": {
      "css": "require-css/css"
    }
  }
});