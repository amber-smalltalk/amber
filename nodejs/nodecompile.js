var sys = require('sys'), fs = require('fs');

// Only care about our arguments, strip away node and all.js
var arguments = process.argv.splice(2);

// If it ends with .st, import it, otherwise export category as .js
arguments.forEach(function(val, index, array) {
  if (/\.st/.test(val)) {
    sys.puts("Reading file " + val);
    code = fs.readFileSync(val, "utf8");
    smalltalk.Importer._new()._import_(code._stream());
  } else {
    sys.puts("Exporting category " + val);
    fs.writeFileSync(val + ".js", smalltalk.Exporter._new()._exportCategory_(val));
  }
});
