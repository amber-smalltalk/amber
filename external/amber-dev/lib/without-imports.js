function withImportsExcluded(data) {
    var srcLines = data.split(/\r\n|\r|\n/), dstLines = [], doCopy = true;
    srcLines.forEach(function (line) {
        if (line.replace(/\s/g, '') === '//>>excludeStart("imports",pragmas.excludeImports);') {
            doCopy = false;
        } else if (line.replace(/\s/g, '') === '//>>excludeEnd("imports");') {
            doCopy = true;
        } else if (doCopy) {
            dstLines.push(line);
        }
    });
    return dstLines.join('\n');
}

define({
    load: function (name, req, onload, config) {
        req(['text!' + name + '.js'], function (text) {
            text = withImportsExcluded(text);
            onload.fromText(text);
        });
    }
});
