/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "require-css": "bower_components/require-css",
    "jquery": "bower_components/jquery/jquery.min",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui.min",
    "amber_lib/es5-shim": "bower_components/es5-shim",
    "amber_lib/codemirror": "bower_components/codemirror",
    "amber_lib/showdown": "my/helios/bower_components/showdown",
    "bootstrap2.3.2": "my/helios/bower_components/bootstrap2.3.2/bootstrap",
    "amber": "support",
    "amber_vm": "support/deprecated-vm-files",
    "amber_vm/_st": "support/deprecated-vm-files/as-receiver",
    "amber_css": "support/resources",
    "amber_core": "src",
    "helios": "my/helios/src",
    "helios/set": "my/helios/set",
    "helios/resources": "my/helios/resources",
    "helios/index": "my/helios/index",
    "amber_cli": "external/amber-cli/src"
  },
  "map": {
    "*": {
      "css": "require-css/css"
    }
  },
  "shim": {
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery",
        "jquery"
      ]
    },
    "amber_lib/codemirror/lib/codemirror": {
      "deps": [
        "css!amber_lib/codemirror/lib/codemirror",
        "css!amber_lib/codemirror/lib/codemirror"
      ]
    },
    "amber_lib/codemirror/mode/smalltalk/smalltalk": {
      "deps": [
        "../../lib/codemirror",
        "../../lib/codemirror"
      ]
    },
    "amber_lib/codemirror/addon/hint/show-hint": {
      "deps": [
        "../../lib/codemirror",
        "../../lib/codemirror"
      ]
    },
    "bootstrap2.3.2/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap2.3.2/css/bootstrap"
      ]
    },
    "ensure-console": {
      "exports": "console"
    }
  }
});