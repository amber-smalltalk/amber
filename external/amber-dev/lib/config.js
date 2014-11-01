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

    function tryToFlattenPathsMapping(mapping) {
        if (Array.isArray(mapping)) {
            for (var i = 0; i < mapping.length; ++i) {
                var element = mapping[i];
                if (element.match(/(^|:)\/\//)) break;
                try {
                    var stat = fs.statSync(path.join(searchDir, element + ".js"));
                    if (stat.isDirectory()) break;
                    if (stat.isFile()) return element;
                } catch (e) {}
            }
        }
        return mapping;
    }

    configBuilder.produceConfigObject(searchDir, function (err, result) {
        if (err) return callback(err);
        for (var p in result.paths) {
            result.paths[p] = tryToFlattenPathsMapping(result.paths[p]);
        }
        var text = "/* DO NOT EDIT! This file is generated. */\n" +
            "\n" +
            "var require;\n" +
            "if (!require) require = {config: function (x) {require = x;}};\n" +
            "require.config(" + JSON.stringify(result, null, 2) + ");";
        fs.writeFile(path.join(searchDir, fileForConfig), text, callback);
    });
};
