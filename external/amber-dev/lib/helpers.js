exports.testRunnerPath = require.resolve('./Test').replace(/\.js$/, "");

exports.nodeWrap = function (id) {
    var wrapSource = JSON.stringify('_wrap_' + id),
        idSource = JSON.stringify(id);
    return {
        start: "#!/usr/bin/env/node\n" +
        "(function(define){\n" +
        "define(" + wrapSource + ", function (require) {\n",
        end: "require(" + idSource + ");\n" +
        "});\n" +
        "define.require(" + wrapSource + ");\n" +
        "}(" +
        require("amdefine") +
        "(module)));"
    };
};
