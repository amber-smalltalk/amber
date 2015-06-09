function nodeWrapper() {
    return {
        start: "(function(define, require){\n" +
        "define('__wrap__', function (requirejs) {\n" +
        "requirejs.resolve = require.resolve;\n" +
        "require = requirejs;\n",
        end: "});\n" +
        "define.require('__wrap__');\n" +
        "}((" +
        require("amdefine") +
        "(module)), require));"
    };
}

var SHEBANG = "#!/usr/bin/env node",
    WRAPPER = nodeWrapper(),
    WRAPPER_WITH_SHEBANG = nodeWrapper();

WRAPPER_WITH_SHEBANG.start = SHEBANG + "\n" + WRAPPER_WITH_SHEBANG.start;

module.exports = {
    libPath: __dirname,
    nodeShebang: SHEBANG,
    nodeWrapper: WRAPPER,
    nodeWrapperWithShebang: WRAPPER_WITH_SHEBANG
};
