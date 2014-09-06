/**
 * Wrapper around amd-config-builder.
 * Can be used in cli and in grunt task.
 */

var configBuilder = require('amd-config-builder'),
    path = require('path'),
    fs = require('fs');

exports.writeConfig = function (searchDir, fileForConfig, callback) {
    searchDir = searchDir || path.join(__dirname, '../../..');
    fileForConfig = fileForConfig || 'config.js';
    callback = callback || function (err) { if (err) throw err; };

    configBuilder.produceConfigObject(searchDir, function (err, result) {
        if (err) return callback(err);
        var text = "/* DO NOT EDIT! This file is generated. */\n" +
            "\n" +
            "var require;\n" +
            "if (!require) require = {config: function (x) {require = x;}};\n" +
            "require.config(" + JSON.stringify(result, null, 2) + ");";
        fs.writeFile(path.join(searchDir, fileForConfig), text, callback);
    });
};
