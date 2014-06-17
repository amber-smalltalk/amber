/**
 * Wrapper around amd-config-builder.
 * Can be used in cli and in grunt task.
 */

var configBuilder = require('amd-config-builder'),
    path = require('path'),
    fs = require('fs');

exports.writeConfig = function (searchDir, fileForConfig) {
    searchDir = searchDir || path.join(__dirname, '../../..');
    fileForConfig = fileForConfig || 'config.js';

    configBuilder.produceConfigObject(searchDir, function (err, result) {
        if (err) throw err;
        var text = "/* DO NOT EDIT! This file is generated. */\n" +
            "\n" +
            "require.config(" + JSON.stringify(result, null, 2) + ");";
        fs.writeFile(path.join(searchDir, fileForConfig), text, function (err) {
            if (err) throw err;
        });
    });
};
