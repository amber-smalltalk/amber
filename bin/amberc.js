#!/usr/bin/env node
// This is a "compiler" for Amber code. Run without arguments for help.

var path = require('path'),
	util = require('util'),
	fs = require('fs'),
	exec = require('child_process').exec;

function map(array, filter, callback) {
	var counter = array.length;
	var new_array = [];
	array.forEach(function (item, index) {
		filter(item, function (err, result) {
			if (err) { callback(err); return; }
			new_array[index] = result;
			counter--;
			if (counter === 0) {
				callback(null, new_array);
			}
		});
	});
}

console.time('Compile Time');

var defaults = function() {
	// Get Amber root directory from the location of this script so that
	// we can find the st and js directories etc.
	var amber_dir = path.join(path.dirname(process.argv[1]), '..');
	amber_dir = path.normalize(amber_dir);

	var kernel_libraries = ['boot', 'Kernel-Objects', 'Kernel-Classes', 'Kernel-Methods', 'Kernel-Collections', 'Kernel-Exceptions', 'Kernel-Transcript', 'Kernel-Announcements'];
	var compiler_libs = ['parser', 'Compiler', 'Compiler-Exceptions'];//, 'Compiler-Core', 'Compiler-AST', 'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic'];

	return {
		'amber_dir': amber_dir,
		'smalltalk': {}, // the evaluated compiler will be stored in this variable (see create_compiler)
		'compiler_libraries': kernel_libraries.concat(compiler_libs),
		'init': path.join(amber_dir, 'js', 'init.js'),
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
		'compiled_categories': [],
		'compiled': [],
		'program': undefined
	};
}();


if (3 > process.argv.length) {
	usage();
} else {
	handle_options(process.argv.slice(2));
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
				break;
			case '-O':
				defaults.closure = true;
				defaults.closure_full = true;
				break;
			case '-A':
				defaults.closure = true;
				defaults.closure_options = defaults.closure_options + ' --compilation_level ADVANCED_OPTIMIZATIONS';
				defaults.closure_full = true;
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

	check_for_closure_compiler();
	
	collect_files(nonOptions);
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
		path.exists(defaults.closure_jar, function(exists) {
			if (!exists) {
				throw(new Error('Can not find Closure compiler at ' + defaults.closure_jar));
			}
		});
	});
}


function resolve_js(filename) {
	var jsFile = filename + defaults.loadsuffix + '.js';
	var amberJsFile = path.join(defaults.amber_dir, 'js', jsFile);
	console.log('Resolving: ' + jsFile);
	if (path.existsSync(jsFile)) {
		return jsFile;
	} else if (path.existsSync(amberJsFile)) {
		return amberJsFile;
	} else {
		throw(new Error('JavaScript file not found: ' + jsFile));
	}
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
		var amberFile = path.join(defaults.amber_dir, 'st', currentFile);
		switch (suffix) {
			case '.st':
				if (path.existsSync(currentFile)) {
					defaults.compile.push(currentFile);
					defaults.compiled_categories.push(category);
					defaults.compiled.push(category + defaults.suffix_used + '.js');
				} else if (path.existsSync(amberFile)) {
					defaults.compile.push(amberFile);
					defaults.compiled_categories.push(category);
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
	resolve_libraries();
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
	defaults.load.forEach(function(file) {
		var resolvedFile = resolve_js(file);
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
	
	create_compiler(compilerFiles);
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
	defaults.smalltalk = eval(content);
	console.log('Compiler loaded');
	
	compile();
};


function compile() {
	console.log('Compiling collected .st files to .js')
	// import .st files
	defaults.compile.forEach(function(stFile) {
		if (/\.st/.test(stFile)) {
			console.log("Importing: " + stFile);
			var code = fs.readFileSync(stFile, "utf8");
			defaults.smalltalk.Importer._new()._import_(code._stream());
		}
	});

	// export categories as .js
	map(defaults.compiled_categories, function(category, callback) {
		var jsFile = category + defaults.suffix_used + '.js';
		var jsFileDeploy = category + defaults.suffix_used + '.deploy.js';
		console.log('Exporting ' + (defaults.deploy ? '(debug + deploy)' : '(debug)')
			+ ' category ' + category + ' as ' + jsFile
			+ (defaults.deploy ? ' and ' + jsFileDeploy : ''));
		fs.writeFile(jsFile, defaults.smalltalk.Exporter._new()._exportPackage_(category), function(err) {
			if (defaults.deploy) {
				fs.writeFile(jsFileDeploy, defaults.smalltalk.StrippedExporter._new()._exportPackage_(category), callback);
			} else {
				callback(null, null);
			}
		});
	}, function(err, result){
		verify();
	});
}


function verify() {
	console.log('Verifying if all .st files were compiled');
	map(defaults.compiled, function(file, callback) {
			path.exists(file, function(exists) {
				if (exists)
					callback(null, null);
				else
					throw(new Error('Compilation failed of: ' + file));
			});
		}, function(err, result) {
			if (undefined !== defaults.program) {
				compose_js_files();
			}
			optimize();
	});
}


function compose_js_files() {
	var program_files = [];

	if (undefined !== defaults.libraries) {
		console.log('Collecting libraries: ' + defaults.libraries);
		program_files.push.apply(program_files, defaults.libraries);
	}

	if (undefined !== defaults.compiled) {
		console.log('Collecting compiled files: ' + defaults.compiled);
		program_files.push.apply(program_files, defaults.compiled);
	}

	if (undefined !== defaults.init) {
		console.log('Adding initializer ' + defaults.init);
		program_files.push(defaults.init);
	}

	console.log('Writing program file: %s.js', defaults.program);

	var fileStream = fs.createWriteStream(defaults.program + '.js');
	fileStream.on('error', function(error) {
		console.log(error);
	});

	program_files.forEach(function(file) {
		console.log('Checking : ' + file);
		if(path.existsSync(file)) {
			fileStream.write(fs.readFileSync(file));
		} else {
			throw(new Error('Can not find file ' + file));
		}
	});
	if (undefined !== defaults.main) {
		console.log('Adding call to: %s>>main', defaults.main);
		fileStream.write('smalltalk.' + defaults.main + '._main()');
	}

	if (undefined !== defaults.mainfile && path.existsSync(defaults.mainfile)) {
		console.log('Adding main file: ' + defaults.mainfile);
		fileStream.write(fs.readFileSync(defaults.mainfile));
	}

	fileStream.end();
	console.log('Done.');
}


function optimize() {
	if (defaults.closure_parts) {
		console.log('Compiling all js files using Google closure compiler.');
		var allJsFiles = defaults.compiled.concat(defaults.libraries);
		allJsFiles.forEach(function(file) {
			var minifiedName = path.basename(file, '.js') + '.min.js';
			closure_compile(file, minifiedName);
		});
	}
	if (defaults.closure_full) {
		console.log('Compiling ' + defaults.program + '.js file using Google closure compiler.');
		closure_compile(defaults.program + '.js', defaults.program + '.min.js');
	}
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