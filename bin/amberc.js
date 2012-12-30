#!/usr/bin/env node
// This is a "compiler" for Amber code. Run without arguments for help.

var path = require('path'),
	util = require('util'),
	fs = require('fs'),
	exec = require('child_process').exec;


/**
 * Map the async filter function onto array and evaluate callback, once all have finished.
 * Taken from: http://howtonode.org/control-flow-part-iii
 */
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


/**
 * Combine several async functions and evaluate callback once all of them have finished.
 * Taken from: http://howtonode.org/control-flow
 */
function Combo(callback) {
  this.callback = callback;
  this.items = 0;
  this.results = [];
}

Combo.prototype = {
  add: function () {
    var self = this,
        id = this.items;
    this.items++;
    return function () {
      self.check(id, arguments);
    };
  },
  check: function (id, arguments) {
    this.results[id] = Array.prototype.slice.call(arguments);
    this.items--;
    if (this.items == 0) {
      this.callback.apply(this, this.results);
    }
  }
};

console.time('Compile Time');

/**
 * Stores default values.
 */
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
		'base': kernel_libraries,
		'compiler_libraries': kernel_libraries.concat(compiler_libs),
		'load': [],
		'init': path.join(amber_dir, 'js', 'init.js'),
		'main': undefined,
		'mainfile': undefined,
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


/**
 * Main program flow starts here.
 */
if (3 > process.argv.length) {
	usage();
} else {
	handle_options(process.argv.slice(2));
}


/**
 * Process given program options and update defaults values.
 * Followed by check_for_closure_compiler() and then collect_files().
 */
function handle_options(optionsArray) {
	var stFiles = [];
	var jsFiles = [];
	var programName = [];
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
				var fileSuffix = path.extname(currentItem);
				switch (fileSuffix) {
					case '.st':
						stFiles.push(currentItem);
						break;
					case '.js':
						jsFiles.push(currentItem);
						break;
					default:
						// Will end up being the last non js/st argument
						programName.push(currentItem);
						break;
				};
		};
		currentItem = optionsArray.shift();
	}

	if(1 < programName.length) {
		throw new Error('More than one name for ProgramName given: ' + programName);
	} else {
		defaults.program = programName[0];
	}

	check_for_closure_compiler(function() {
		collect_files(stFiles, jsFiles);
	});
}


/**
 * Print usage options and exit.
 */
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


/**
 * Checks if the java executable exists and afterwards,
 * if compiler.jar exists at the path stored in defaults.closure_jar.
 * All closure related entries are set to false upon failure.
 *
 * callback gets called in any case.
 */
function check_for_closure_compiler(callback) {
	if (defaults.closure) {
		exec('which java', function(error, stdout, stderr) {
			// stdout contains path to java executable
			if (null !== error) {
				console.warn('java is not installed and is needed for -O, -A or -o (Closure compiler).');
				defaults.closure = false;
				defaults.closure_parts = false;
				defaults.closure_full = false;
				callback();
				return;
			}
			path.exists(defaults.closure_jar, function(exists) {
				if (!exists) {
					console.warn('Can not find Closure compiler at: ' + defaults.closure_jar);
					defaults.closure = false;
					defaults.closure_parts = false;
					defaults.closure_full = false;
					callback();
					return;
				}
			});
		});
	} else {
		callback();
	}
}


/**
 * Check if the file given as parameter exists in the local directory or in $AMBER/js/.
 * '.js' is appended first.
 *
 * @param filename name of a file without '.js' prefix
 * @param callback gets called on success with path to .js file as parameter
 */
function resolve_js(filename, callback) {
	var jsFile = filename + defaults.loadsuffix + '.js';
	var amberJsFile = path.join(defaults.amber_dir, 'js', jsFile);
	console.log('Resolving: ' + jsFile);
	path.exists(jsFile, function(exists) {
		if (exists) {
			callback(jsFile);
		} else {
			path.exists(amberJsFile, function(exists) {
				if (exists) {
					callback(amberJsFile);
				} else {
					throw(new Error('JavaScript file not found: ' + jsFile));
				}
			});
		}
	});
}


/**
 * Always evaluates the callback parameter.
 * Used by Combo blocks to always call the next function,
 * even if all of the other functions did not run.
 */
function always_resolve(callback) {
	callback();
}


/**
 * Collect libraries and Smalltalk files looking
 * both locally and in $AMBER/js and $AMBER/st.
 * Followed by resolve_libraries().
 */
function collect_files(stFiles, jsFiles) {
	var collected_files = new Combo(function() {
		resolve_libraries();
	});
	collect_st_files(stFiles, collected_files.add());
	collect_js_files(jsFiles, collected_files.add());
}


/**
 * Resolve st files given by stFiles and add them to defaults.compile.
 * Respective categories get added to defaults.compile_categories.
 * callback is evaluated afterwards.
 */
function collect_st_files(stFiles, callback) {
	var collected_st_files = new Combo(function() {
		Array.prototype.slice.call(arguments).forEach(function(data) {
			if (undefined !== data[0]) {
				var stFile = data[0];
				var stCategory = data[1];
				defaults.compile.push(stFile);
				defaults.compiled_categories.push(stCategory);
				defaults.compiled.push(stCategory + defaults.suffix_used + '.js');
			}
		});
		callback();
	});

	stFiles.forEach(function(stFile) {
		var _callback = collected_st_files.add();
		console.log('Checking: ' + stFile);
		var category = path.basename(stFile, '.st');
		var amberStFile = path.join(defaults.amber_dir, 'st', stFile);
		path.exists(stFile, function(exists) {
			if (exists) {
				_callback(stFile, category);
			} else {
				path.exists(amberJsFile, function(exists) {
					if (exists) {
						_callback(amberStFile, category);
					} else {
						throw(new Error('JavaScript file not found: ' + jsFile));
					}
				});
			}
		});
	});

	always_resolve(collected_st_files.add());
}


/**
 * Resolve js files given by jsFiles and add them to defaults.libraries.
 * callback is evaluated afterwards.
 */
function collect_js_files(jsFiles, callback) {
	var collected_js_files = new Combo(function() {
		Array.prototype.slice.call(arguments).forEach(function(file) {
			if (undefined !== file[0]) {
				defaults.libraries.push(file[0]);
			}
		});
		callback();
	});

	jsFiles.forEach(function(jsFile) {
		resolve_js(currentFile, collected_js_files.add());
	});

	always_resolve(collected_js_files.add());
}


/**
 * Resolve kernel and compiler files.
 * Followed by resolve_init().
 */
function resolve_libraries() {
	// Resolve libraries listed in defaults.base
	var all_resolved = new Combo(function(resolved_library_files, resolved_compiler_files) {
		resolve_init(resolved_compiler_files[0]);
	});
	resolve_kernel(all_resolved.add());
	resolve_compiler(all_resolved.add());
}


/**
 * Resolve .js files needed by kernel
 * callback is evaluated afterwards.
 */
function resolve_kernel(callback) {
	var kernel_files = defaults.base.concat(defaults.load);
	var kernel_resolved = new Combo(function() {
		Array.prototype.slice.call(arguments).forEach(function(file) {
			if (undefined !== file[0]) {
				defaults.libraries.push(file[0]);
			}
		});
		callback(null);
	});

	kernel_files.forEach(function(file) {
		resolve_js(file, kernel_resolved.add());
	});

	always_resolve(kernel_resolved.add());
}


/**
 * Resolve .js files needed by compiler.
 * callback is evaluated afterwards with resolved files as argument.
 */
function resolve_compiler(callback) {
	// Resolve compiler libraries
	var compiler_files = defaults.compiler_libraries.concat(defaults.load);
	var compiler_resolved = new Combo(function() {
		var compilerFiles = [];
		Array.prototype.slice.call(arguments).forEach(function(file) {
			if (undefined !== file[0]) {
				compilerFiles.push(file[0]);
			}
		});
		callback(compilerFiles);
	});
	compiler_files.forEach(function(file) {
		resolve_js(file, compiler_resolved.add());
	});

	always_resolve(compiler_resolved.add());
}


/**
 * Resolves default.init and adds it to compilerFiles.
 * Followed by create_compiler().
 */
function resolve_init(compilerFiles) {
	// check and add init.js
	var initFile = defaults.init;
	if ('.js' !== path.extname(initFile)) {
		initFile = resolve_js(initFile);
		defaults.init = initFile;
	}
	compilerFiles.push(initFile);
	
	create_compiler(compilerFiles);
}


/**
 * Read all .js files needed by compiler and eval() them.
 * The finished Compiler gets stored in defaults.smalltalk.
 * Followed by compile().
 */
function create_compiler(compilerFilesArray) {
	var compiler_files = new Combo(function() {
		var content = '(function() {';
		Array.prototype.slice.call(arguments).forEach(function(data) {
			// data is an array where index 0 is the error code and index 1 contains the data
			content += data[1];
		});
		content = content + 'return smalltalk;})();';
		defaults.smalltalk = eval(content);
		console.log('Compiler loaded');

		compile();
	});

	compilerFilesArray.forEach(function(file) {
		console.log('Loading file: ' + file);
		fs.readFile(file, compiler_files.add());
	});
};


/**
 * Compile all given .st files by importing them.
 * Followed by category_export().
 */
function compile() {
	console.log('Compiling collected .st files')
	// import .st files
	var imports = new Combo(function() {
		Array.prototype.slice.call(arguments).forEach(function(code) {
			// get element 0 of code since all return values are stored inside an array by Combo
			defaults.smalltalk.Importer._new()._import_(code[0]._stream());
		});
		category_export();
	});

	defaults.compile.forEach(function(stFile) {
		if (/\.st/.test(stFile)) {
			console.log('Importing: ' + stFile);
			fs.readFile(stFile, 'utf8', function(err, data) {
				if (!err)
					imports.add()(data);
				else
					throw new Error('Could not import: ' + stFile);
			});
		}
	});
}


/**
 * Export compiled categories to JavaScript files.
 * Followed by verify().
 */
function category_export() {
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


/**
 * Verify if all .st files have been compiled.
 * Followed by compose_js_files() and optimize().
 */
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
			compose_js_files();
			optimize();
	});
}


/**
 * Synchronous function.
 * Concatenates compiled JavaScript files into one file in the correct order.
 * The name of the produced file is given by defaults.program (set by the last commandline option).
 */
function compose_js_files() {
	if (undefined !== defaults.program) {
		return;
	}
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


/**
 * Optimize created JavaScript files with Google Closure compiler depending
 * on the flags: defaults.closure_parts, defaults.closure_full.
 */
function optimize() {
	var optimization_done = new Combo(function() {
			console.timeEnd('Compile Time');
	});

	if (defaults.closure_parts) {
		console.log('Compiling all js files using Google closure compiler.');
		var allJsFiles = defaults.compiled.concat(defaults.libraries);
		allJsFiles.forEach(function(file) {
			var minifiedName = path.basename(file, '.js') + '.min.js';
			closure_compile(file, minifiedName, optimization_done.add());
		});
	}
	if (defaults.closure_full) {
		console.log('Compiling ' + defaults.program + '.js file using Google closure compiler.');
		closure_compile(defaults.program + '.js', defaults.program + '.min.js', optimization_done.add());
	}

	always_resolve(optimization_done.add());
}


/**
 * Compile sourceFile into minifiedFile with Google Closure compiler.
 * callback gets executed once finished.
 */
function closure_compile(sourceFile, minifiedFile, callback) {
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
			callback();
		}
	);
}
