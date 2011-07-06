// NOTE: This code is called using the jtalkc bash script - do not use directly.
// The arguments variable is a series of .st filenames and category names.
// If it is a .st file we import it, if it is a category name we export it
// as aCategoryName.js.
var sys = require('sys'), fs = require('fs');

// Only care about our arguments, strip away node, all.js and debug flag.
var arguments = process.argv.splice(4);

// First argument is debugMode: "true" or "false"
if (process.argv[2] == "true") {
  smalltalk.debugMode = true;
} else {
  smalltalk.debugMode = false;
}

// Second argument is prefix: "no-silly-prefix" means none
prefix = process.argv[3];
if (prefix == "no-silly-prefix") {
  prefix = "";
}

console.log("Compiling in debugMode: " + smalltalk.debugMode);

// If it ends with .st, import it, otherwise export category as .js
arguments.forEach(function(val, index, array) {
  if (/\.st/.test(val)) {
    sys.puts("Reading file " + val);
    code = fs.readFileSync(val, "utf8");
    smalltalk.Importer._new()._import_(code._stream());
  } else {
    sys.puts("Exporting category " + val + " as " + prefix + val + ".js");
    fs.writeFileSync(prefix + val + ".js", smalltalk.Exporter._new()._exportCategory_(val));
  }
});
