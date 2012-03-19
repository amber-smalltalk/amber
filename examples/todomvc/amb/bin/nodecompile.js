// NOTE: This code is called using the amberc bash script - do not use directly.
// The arguments variable is a series of .st filenames and category names.
// If it is a .st file we import it, if it is a category name we export it
// as aCategoryName.js.
var sys = require('sys'), fs = require('fs');

// Only care about our arguments, strip away node, all.js and debug flag.
var arguments = process.argv.splice(4);

// First argument is also produce deploy files: "true" or "false"
var deploy = (process.argv[2] == "true");

// Second argument is suffix: "no-silly-suffix" means none
suffix = process.argv[3];
if (suffix == "no-silly-suffix") {
  suffix = "";
}

// If it ends with .st, import it, otherwise export category as .js
arguments.forEach(function(val, index, array) {
  if (/\.st/.test(val)) {
    sys.puts("Reading file " + val);
    code = fs.readFileSync(val, "utf8");
    smalltalk.Importer._new()._import_(code._stream());
  } else {
    sys.puts("Exporting " + (deploy ? "(debug + deploy)" : "(debug)") + " category "
		+ val + " as " + val + suffix + ".js" + (deploy ? " and " + val + suffix + ".deploy.js" : ""));
    fs.writeFileSync(val + suffix + ".js", smalltalk.Exporter._new()._exportPackage_(val));
    if (deploy) {
	fs.writeFileSync(val + suffix + ".deploy.js", smalltalk.StrippedExporter._new()._exportPackage_(val));
    }
  }
});
