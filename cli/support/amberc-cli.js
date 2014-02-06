#!/usr/bin/env node

var path = require('path');
var amberc = require('./amberc.js');

// get parameters passed to the command line script
// discard the first two parameters which are the node binary and the script name
var parameters = process.argv.slice(2);

// check if at least one parameter was passed to the script
if (1 > parameters.length) {
	print_usage();
	process.exit();
}


// Get Amber root directory from the location of this script so that
// we can find the st and js directories etc.
var amber_dir = path.normalize(path.join(path.dirname(process.argv[1]), '..', '..'));

var compiler = new amberc.Compiler(amber_dir);

var configuration = handle_options(parameters);

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
			case '-m':
				defaults.main = optionsArray.shift();
				break;
			case '-M':
				defaults.mainfile = optionsArray.shift();
				break;
			case '-n':
				defaults.amd_namespace = optionsArray.shift();
				break;
			case '-D':
				defaults.output_dir = optionsArray.shift();
				break;
			case '-s':
				defaults.suffix = optionsArray.shift();
				defaults.suffix_used = defaults.suffix;
				break;
			case '-S':
				defaults.loadsuffix = optionsArray.shift();
				defaults.suffix_used = defaults.suffix;
				break;
			case '-v':
				defaults.verbose = true;
				break;
			case '-h':
			case '--help':
			case '?':
				print_usage();
				break;
			default:
				var fileSuffix = path.extname(currentItem);
				switch (fileSuffix) {
					case '.st':
						defaults.stFiles.push(currentItem);
						break;
					case '.js':
						defaults.jsFiles.push(currentItem);
						break;
					default:
						// Will end up being the last non js/st argument
						programName.push(currentItem);
						break;
				}
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
function print_usage() {
	var usage = [
		'Usage: amberc [-l lib1,lib2...] [-g jsGlobal1,jsGlobla2] [-m main_class] [-M main_file]',
		'          [-n namespace] [-D output_dir] [-v] [-s suffix] [-S suffix] [file1 [file2 ...]] [Program]',
		'',
		'   amberc compiles Amber files - either separately or into a complete runnable',
		'   program. If no .st files are listed only a linking stage is performed.',
		'   Files listed will be handled using the following rules:',
		'',
		'   *.js',
		'     Files are linked (concatenated) in listed order.',
		'     If not found we look in $AMBER/src/',
		'',
		'   *.st',
		'     Files are compiled into .js files before concatenation.',
		'     If not found we look in $AMBER/src/',
		'',
		'     NOTE: Each .st file is currently considered to be a fileout of a single class',
		'     category of the same name as the file!',
		'',
		'   If no <Program> is specified each given .st file will be compiled into',
		'   a matching .js file. Otherwise a <Program>.js file is linked together based on',
		'   the given options:',
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
		'  -m main_class',
		'     Add a call to the class method main_class>>main at the end of <Program>.',
		'',
		'  -M main_file',
		'     Add <main_file> at the end of <Program.js> acting as #main.',
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
		'  -s suffix',
		'     Add <suffix> to compiled .js files. File.st is then compiled into',
		'     File.<suffix>.js.',
		'',
		'  -S suffix',
		'     Use <suffix> for all libraries accessed using -l. This makes it possible',
		'     to have multiple flavors of Amber and libraries in the same place.',
		'',
		'',
		'     Example invocations:',
		'',
		'     Just compile Kernel-Objects.st to Kernel-Objects.js:',
		'',
		'        amberc Kernel-Objects.st',
		'',
		'     Compile Hello.st to Hello.js and create complete program called Program.js.',
		'     Additionally add a call to the class method Hello>>main:',
		'',
		'        amberc -m Hello Hello.st Program',
		'',
		'     Compile Cat1.st and Cat2.st files into corresponding .js files.',
		'     Link them with myboot.js and myKernel.js',
		'     and merge everything into a complete program named Program.js:',
		'',
		'        amberc -M main.js myboot.js myKernel.js Cat1.st Cat2.st Program',
	];
	usage.forEach(function (line) {
        console.log(line);
	});
}
