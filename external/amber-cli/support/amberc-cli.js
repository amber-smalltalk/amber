#!/usr/bin/env node

var path = require('path');
var amberc = require('amber-dev/lib/amberc');

// get parameters passed to the command line script
// discard the first two parameters which are the node binary and the script name
var parameters = process.argv.slice(2);

// check if at least one parameter was passed to the script
if (1 > parameters.length) {
	print_usage_and_exit();
}


// Get Amber root directory from the location of this script so that
// we can find the st and js directories etc.
var amber_dir = path.normalize(path.join(__dirname, '..', 'node_modules', 'amber'));

var configuration = handle_options(parameters);

var compiler = new amberc.Compiler(amber_dir);

compiler.main(configuration);


/**
 * Process given program options and update defaults values.
 * Followed by check_for_closure_compiler() and then collect_files().
 */
function handle_options(optionsArray) {
	var programName = [];
	var currentItem = optionsArray.shift();
	var defaults = amberc.createDefaultConfiguration();

	while(undefined !== currentItem) {
		switch(currentItem) {
			case '-l':
				defaults.load.push.apply(defaults.load, optionsArray.shift().split(','));
				break;
			case '-L':
				defaults.jsLibraryDirs.push.apply(defaults.jsLibraryDirs, optionsArray.shift().split(','));
				break;
			case '-g':
				defaults.jsGlobals.push.apply(defaults.jsGlobals, optionsArray.shift().split(','));
				break;
			case '-n':
				defaults.amd_namespace = optionsArray.shift();
				break;
			case '-D':
				defaults.output_dir = optionsArray.shift();
				break;
			case '-d':
				amber_dir = path.normalize(optionsArray.shift());
				break;
			case '-v':
				defaults.verbose = true;
				break;
			case '-h':
			case '--help':
			case '?':
			case '-?':
				print_usage_and_exit();
				break;
			default:
				defaults.stFiles.push(currentItem);
				break;
		}
		currentItem = optionsArray.shift();
	}

	if(1 < programName.length) {
		throw new Error('More than one name for ProgramName given: ' + programName);
	} else {
		defaults.program = programName[0];
	}
	return defaults;
}


// print available flags
function print_usage_and_exit() {
	var usage = [
		'Usage: amberc [-L libdir1,libdir2...] [-l lib1,lib2...] [-g jsGlobal1,jsGlobal2]',
		'          [-n namespace] [-D output_dir] [-v] file1 file2 ...',
		'',
		'   amberc compiles Amber files.',
		'   Files are compiled into .js files before concatenation.',
		'   If not found we look in $AMBER/src/',
		'',
		'     NOTE: Each .st file is currently considered to be a fileout of a single class',
		'     category of the same name as the file!',
		'',
		'  -l library1,library2',
		'     Add listed JavaScript libraries in listed order.',
		'     Libraries are not separated by spaces or end with .js.',
		'',
		'  -L directory1,directory2',
		'     Add listed directories to the library search path.',
		'     The order of processing is:',
		'     1. current directory',
		'     2. directories specified by -L',
		'     3. $AMBER',
		'',
		'  -g jsGlobal1,jsGlobal2',
		'     Comma separated list of JS global variable names.',
		'     The names are added to a list containing "window", "document" and others.',
		'',
		'  -n amd_namespace',
		'     Export packages with <amd_namespace> as the require.js namespace.',
		'     Default value is "amber_core".',
		'',
		'  -v',
		'     Produce a more verbose output.',
		'',
		'  -D',
		'     Specifies the output directory for all generated .js files.',
		'     The hierarchy of the input files is not maintaned.',
		'     If this option is omitted all generated .js files are placed next to their input files',
		'',
		'  -d',
		'     Specifies the alternate directory to look for Amber files.',
		'     If not specified, the version embedded in CLI is used.',
		'',
		'     Example invocations:',
		'',
		'     Just compile Kernel-Objects.st to Kernel-Objects.js:',
		'',
		'        amberc Kernel-Objects.st',
	];
	usage.forEach(function (line) {
		console.log(line);
	});
	process.exit();
}
