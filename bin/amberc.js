#!/usr/bin/env node
// This is a "compiler" for Amber code. Run without arguments for help.
//
// Get Amber root directory from the location of this script so that
// we can find the st and js directories etc.

var path = require('path'),
	util = require('util'),
	fs = require('fs'),
	exec = require('child_process').exec;

// the evaluated compiler will be stored in this variable
// see create_compiler()
var smalltalk = {};

console.time('Compile Time');

var AMBER_DIR = path.join(path.dirname(process.argv[1]), '..');
AMBER_DIR = path.normalize(AMBER_DIR);
console.log('$AMBER: ' + AMBER_DIR);

var defaults = function() {
	var kernel_libraries = ['boot', 'Kernel-Objects', 'Kernel-Classes', 'Kernel-Methods', 'Kernel-Collections', 'Kernel-Exceptions', 'Kernel-Transcript', 'Kernel-Announcements'];
	var compiler_libs = ['parser', 'Compiler', 'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST', 'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic'];
	// suffix -> undefined?
	return {
		'compiler_libraries': kernel_libraries.concat(compiler_libs),
		'init': path.join(AMBER_DIR, 'js', 'init.js'),
		'main': undefined,
		'mainfile': undefined,
		'base': kernel_libraries,
		'load': [],
		'closure': false,
		'closure_parts': false,
		'closure_full': false,
		'closure_options': '',
		'closure_jar': path.resolve(path.join(process.env['HOME'], 'compiler.jar')),
		'suffix': '',
		'loadsuffix': '',
		'suffix_used': '',
		'deploy': false,
		'libraries': [],
		'compile': [],
		'compiled': [],
		'program': undefined
	};
}();

if (3 > process.argv.length) {
	usage();
} else {
	var files = handle_options(process.argv.slice(2));
	var compilerFiles = resolve_libraries();
	collect_files(files);
	create_compiler(compilerFiles);
	compile();
	if (undefined !== defaults.program) {
		compose_js_files();
	}
}

function handle_options(optionsArray) {
	var nonOptions = [];
	var currentItem = optionsArray.shift();

	while(undefined !== currentItem) {
		switch(currentItem) {
			case '-l':
				defaults.load.push.apply(defaults.load, optionsArray.shift().split(','));
				break;
			case '-i':
				defaults.init = optionsArray.shift();
				break;
			case '-m':
				defaults.main = optionsArray.shift();
				break;
			case '-M':
				defaults.mainfile = optionsArray.shift();
				break;
			case '-o':
				defaults.closure = true;
				defaults.closure_parts = true;
				check_for_closure_compiler();
				break;
			case '-O':
				defaults.closure = true;
				defaults.closure_full = true;
				check_for_closure_compiler();
				break;
			case '-A':
				defaults.closure = true;
				defaults.closure_options = defaults.closure_options + ' --compilation_level ADVANCED_OPTIMIZATIONS';
				defaults.closure_full = true;
				check_for_closure_compiler();
				break;
			case '-d':
				defaults.deploy = true;
				break;
			case '-s':
				defaults.suffix = optionsArray.shift();
				defaults.suffix_used = defaults.suffix;
				break;
			case '-S':
				defaults.loadsuffix = optionsArray.shift();
				defaults.suffix_used = defaults.suffix;
				break;
			case '-h':
			case '--help':
			case '?':
				usage();
				break;
			default:
				nonOptions.push(currentItem);
		};
		currentItem = optionsArray.shift();
	}
	
	return nonOptions;
}

// print options and exit
function usage() {
	console.log('Usage: $0 [-l lib1,lib2...] [-i init_file] [-m main_class] [-M main_file]');
	console.log('          [-o] [-O|-A] [-d] [-s suffix] [-S suffix] [file1 [file2 ...]] [Program]');
	console.log('');
	console.log('   amberc compiles Amber files - either separately or into a complete runnable');
	console.log('   program. If no .st files are listed only a linking stage is performed.');
	console.log('   Files listed will be handled using the following rules:');
	console.log('');
	console.log('   *.js');
	console.log('     Files are linked (concatenated) in listed order.');
	console.log('     If not found we look in $AMBER/js/');
	console.log('');
	console.log('   *.st');
	console.log('     Files are compiled into .js files before concatenation.');
	console.log('     If not found we look in $AMBER/st/.');
	console.log('');
	console.log('     NOTE: Each file is currently considered to be a fileout of a single class');
	console.log('     category of the same name as the file!');
	console.log('');
	console.log('   If no Program is specified each given .st file will be compiled into');
	console.log('   a .js file. Otherwise a <Program>.js file is linked together based on');
	console.log('   the options:');
	console.log('');
	console.log('  -l library1,library2');
	console.log('     Additionally add listed JavaScript libraries (no spaces or .js) in listed order.');
	console.log('');
	console.log('  -i init_file');
	console.log('     Add library initializer <init_file> instead of default $AMBER/js/init.js ');
	console.log('');
	console.log('  -m main_class');
	console.log('     Add at end a call to #main in class <main_class>.');
	console.log('');
	console.log('  -M main_file');
	console.log('     Add at end javascript file <main_file> acting as main.');
	console.log('');
	console.log('  -o');
	console.log('     Optimize each .js file using the Google closure compiler.');
	console.log('     Using Closure compiler found at ~/compiler.jar');
	console.log('');
	console.log('  -O');
	console.log('     Optimize final <Program>.js using the Google closure compiler.');
	console.log('     Using Closure compiler found at ~/compiler.jar');
	console.log('');
	console.log('  -A Same as -O but use --compilation_level ADVANCED_OPTIMIZATIONS');
	console.log('');
	console.log('  -d');
	console.log('     Additionally export code for deploy - stripped from source etc.');
	console.log('     Uses suffix ".deploy.js" in addition to any explicit given suffic using -s.');
	console.log('');
	console.log('  -s suffix');
	console.log('     Add <suffix> to compiled js files so that File.st is compiled into');
	console.log('     File.<suffix>.js.');
	console.log('');
	console.log('  -S suffix');
	console.log('     Use <suffix> for all libraries accessed using -L or -l. This makes it possible');
	console.log('     to have multiple flavors of Amber and libraries in the same place.');
	console.log('');
	console.log('');
	console.log('     Example invocations:');
	console.log('');
	console.log('     Just compile Kernel-Objects.st to Kernel-Objects.js:');
	console.log('');
	console.log('        amberc Kernel-Objects.st');
	console.log('');
	console.log('     Compile Hello.st to Hello.js and create complete program called');
	console.log('     Program.js and adding a call to class method #main in class Hello:');
	console.log('');
	console.log('        amberc -m Hello Hello.st Program');
	console.log('');
	console.log('     Compile two .st files into corresponding .js files,');
	console.log('     and link with specific myboot.js, myKernel.js, myinit.js');
	console.log('     and main.js and create complete program called Program.js:');
	console.log('');
	console.log('        amberc -M main.js myinit.js myboot.js myKernel.js Cat1.st Cat2.st Program');

	process.exit();
}

function check_for_closure_compiler() {
	if (!defaults.closure) {
		return;
	}
	
	exec('which java', function(error, stdout, stderr) {
		// stdout contains path to java executable
		if (null !== error) {
			throw(new Error('java is not installed and is needed for -O, -A or -o (Closure compiler).'));
		}
		if (!path.existsSync(defaults.closure_jar)) {
			throw(new Error('Can not find Closure compiler at ' + defaults.closure_jar));
		}
	});
}

function resolve_js(filename) {
	var jsFile = filename + defaults.loadsuffix + '.js';
	var amberJsFile = path.join(AMBER_DIR, 'js', jsFile);
	console.log('Resolving: ' + jsFile);
	if (path.existsSync(jsFile)) {
		return jsFile;
	} else if (path.existsSync(amberJsFile)) {
		return amberJsFile;
	} else {
		throw(new Error('JavaScript file not found: ' + jsFile));
	}
}


function resolve_libraries() {
	// Resolve libraries listed in defaults.base
	defaults.base.forEach(function(file) {
		defaults.libraries.push(resolve_js(file));
	});

	// Resolve libraries listed in defaults.compiler
	var compilerFiles = [];
	defaults.compiler_libraries.forEach(function(file) {
		compilerFiles.push(resolve_js(file));
	});

	// Resolve libraries listed in defaults.load
	var toLoad = [];
	defaults.load.forEach(function(file) {
		var resolvedFile = resolve_js(file);
		toLoad.push(resolvedFile);
		compilerFiles.push(resolvedFile);
		defaults.libraries.push(resolvedFile);
	});

	// check and add init.js
	var initFile = defaults.init;
	if ('.js' !== path.extname(initFile)) {
		initFile = resolve_js(initFile);
		defaults.init = initFile;
	}
	compilerFiles.push(initFile);
	
	return compilerFiles;
}


// --------------------------------------------------
// Collect libraries and Smalltalk files looking
// both locally and in $AMBER/js and $AMBER/st 
// --------------------------------------------------
function collect_files(filesArray) {
	var currentFile = filesArray.shift();
	while (undefined !== currentFile) {
		var suffix = path.extname(currentFile);
		var category = path.basename(currentFile, '.st');
		var amberFile = path.join(AMBER_DIR, 'st', currentFile);
		switch (suffix) {
			case '.st':
				if (path.existsSync(currentFile)) {
					defaults.compile.push(currentFile, category);
					defaults.compiled.push(category + defaults.suffix_used + '.js');
				} else if (path.existsSync(amberFile)) {
					defaults.compile.push(amberFile, category);
					defaults.compiled.push(category + defaults.suffix_used + '.js');
				} else {
					throw(new Error('File not found: ' + currentFile));
				}
				break;
			case '.js':
				defaults.libraries.push(resolve_js(currentFile));
				break;
			default:
				// Will end up being the last non js/st argument
				defaults.program = currentFile
				break;
		};
		currentFile = filesArray.shift();
	};
}

function create_compiler(compilerFilesArray) {
	// load all files from parameter <-> require?
	// create compiler in memory -> should be faster
	var content = '(function() {';
	compilerFilesArray.forEach(function(file) {
		console.log('Loading file: ' + file);
		content = content + fs.readFileSync(file);
	});
	content = content + 'return smalltalk;})();';
	smalltalk = eval(content);
};


function compile() {
	console.log('Compiling collected .st files to .js')
	node_compile(defaults.compile);

	console.log('Verifying if all .st files were compiled');
	defaults.compiled.forEach(function(file) {
		if (!path.existsSync(file)) {
			throw(new Error('Compilation failed of: ' + file));
		}
	});
	
	if (!defaults.closure_parts) {
		return;
	}
	
	console.log('Compiling all js files using Google closure compiler.');
	var allJsFiles = defaults.compiled.concat(defaults.libraries);
	allJsFiles.forEach(function(file) {
		var minifiedName = path.basename(file, '.js') + '.min.js';
		closure_compile(file, minifiedName);
	});
}


function compose_js_files() {
	var fileStream = fs.createWriteStream(defaults.program + '.js');
	fileStream.on('error', function(error) {
		console.log(error);
	});

	if (undefined !== defaults.libraries) {
		console.log('Collecting libraries: ' + defaults.libraries);
		defaults.libraries.forEach(function(file) {
			fileStream.write(fs.readFileSync(file));
		});
	}

	if (undefined !== defaults.compiled) {
		console.log('Collecting compiled files: ' + defaults.compiled);
		defaults.compiled.forEach(function(file) {
			fileStream.write(fs.readFileSync(file));
		});
	}

	if (undefined !== defaults.init) {
		console.log('Checking for init file: ' + defaults.init);
		if (!path.existsSync(defaults.init)) {
			throw(new Error('Can not find init file ' + defaults.init));
		}
		console.log('Adding initializer ' + defaults.init);
		fileStream.write(fs.readFileSync(defaults.init));
	}

	if (undefined !== defaults.main) {
		console.log('Adding call to: %s>>main', defaults.main);
		fileStream.write('smalltalk.' + defaults.main + '._main()');
	}
	
	if (undefined !== defaults.mainfile) {
		console.log('Checking for main file: ' + defaults.mainfile);
		if (!path.existsSync(defaults.mainFile)) {
			throw(new Error('Can not find main file ' + defaults.mainfile));
		}
		console.log('Adding main file: ' + defaults.mainfile);
		fileStream.write(fs.readFileSync(defaults.mainfile));
	}

	console.log('Writing program file: %s.js', defaults.program);
	fileStream.end()
	console.log('Done.');

	if (!defaults.closure_full) {
		return;
	}
	console.log('Compiling ' + defaults.program + '.js file using Google closure compiler.');
	closure_compile(defaults.program + '.js', defaults.program + '.min.js');
}


function node_compile(filesArray) {
	// The filesArray variable is a series of .st filenames and category names.
	// If it is a .st file we import it, if it is a category name we export it
	// as aCategoryName.js.

	// If it ends with .st, import it, otherwise export category as .js
	filesArray.forEach(function(val, index, array) {
		if (/\.st/.test(val)) {
			console.log("Reading file " + val);
			code = fs.readFileSync(val, "utf8");
			smalltalk.Importer._new()._import_(code._stream());
		} else {
			console.log("Exporting " + (defaults.deploy ? "(debug + deploy)" : "(debug)") + " category "
				+ val + " as " + val + defaults.suffix_used + ".js" + (defaults.deploy ? " and " + val + defaults.suffix_used + ".deploy.js" : ""));
			fs.writeFileSync(val + defaults.suffix_used + ".js", smalltalk.Exporter._new()._exportPackage_(val));
			if (defaults.deploy) {
				fs.writeFileSync(val + defaults.suffix_used + ".deploy.js", smalltalk.StrippedExporter._new()._exportPackage_(val));
			}
		}
	});
}

function closure_compile(sourceFile, minifiedFile) {
	// exec is asynchronous
	exec(
		'java -jar ' +
		defaults.closure_jar + ' ' +
		defaults.closure_options +
		' --js '+ sourceFile +
		' --js_output_file '+ minifiedFile,
		function (error, stdout, stderr) {
			if (error) {
				console.log(stderr);
			} else {
				console.log(stdout);
				console.log(' '+ minifiedFile + ' built.');
			}
		}
	);
}

console.timeEnd('Compile Time');