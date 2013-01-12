/**
 * This is a "compiler" for Amber code.
 * Put the following code into compiler.js:
 *     var amberc = require('amberc');
 *     var compiler = new amberc.Compiler('path/to/amber', ['/optional/path/to/compiler.jar]);
 *     compiler.main();
 *
 * Execute 'node compiler.js' without arguments or with -h / --help for help.
 */

/**
 * Map the async filter function onto array and evaluate callback, once all have finished.
 * Taken from: http://howtonode.org/control-flow-part-iii
 */
function async_map(array, filter, callback) {
	if (0 === array.length) {
		callback(null, null);
		return;
	}
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
 * Always evaluates the callback parameter.
 * Used by Combo blocks to always call the next function,
 * even if all of the other functions did not run.
 */
function always_resolve(callback) {
	callback();
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

var path = require('path'),
	util = require('util'),
	fs = require('fs'),
	exec = require('child_process').exec;

/**
 * AmberC constructor function.
 * amber_dir: points to the location of an amber installation
 * closure_jar: location of compiler.jar (can be left undefined)
 */
function AmberC(amber_dir, closure_jar) {
	this.amber_dir = amber_dir;
	this.closure_jar = closure_jar;
	this.kernel_libraries = ['boot', 'Kernel-Objects', 'Kernel-Classes', 'Kernel-Methods',
	                         'Kernel-Collections', 'Kernel-Exceptions', 'Kernel-Transcript',
	                         'Kernel-Announcements'];
	this.compiler_libraries = this.kernel_libraries.concat(['parser', 'Compiler', 'Compiler-Exceptions']);
	                          //, 'Compiler-Core', 'Compiler-AST', 'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic'];
}


/**
 * Default values.
 */
var createDefaults = function(amber_dir, finished_callback){
	return {
		'smalltalk': {}, // the evaluated compiler will be stored in this variable (see create_compiler)
		'load': [],
		'init': path.join(amber_dir, 'js', 'init.js'),
		'main': undefined,
		'mainfile': undefined,
		'closure': false,
		'closure_parts': false,
		'closure_full': false,
		'closure_options': ' --language_in=ECMASCRIPT5 ',
		'suffix': '',
		'loadsuffix': '',
		'suffix_used': '',
		'deploy': false,
		'libraries': [],
		'compile': [],
		'compiled_categories': [],
		'compiled': [],
		'program': undefined,
		'finished_callback': finished_callback
	};
};


/**
 * Main function for executing the compiler.
 */
AmberC.prototype.main = function(parameters, finished_callback) {
	console.time('Compile Time');
	var options = parameters || process.argv.slice(2);

	if (1 > options.length) {
		this.usage();
	} else {
		this.defaults = createDefaults(this.amber_dir, finished_callback);
		this.handle_options(options);
	}
};


/**
 * Process given program options and update defaults values.
 * Followed by check_for_closure_compiler() and then collect_files().
 */
AmberC.prototype.handle_options = function(optionsArray) {
	var stFiles = [];
	var jsFiles = [];
	var programName = [];
	var currentItem = optionsArray.shift();
	var defaults = this.defaults;

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
				this.usage();
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

	var self = this;
	this.check_for_closure_compiler(function(){
		self.collect_files(stFiles, jsFiles)
	});
};


/**
 * Print usage options and exit.
 */
AmberC.prototype.usage = function() {
	console.log('Usage: amberc [-l lib1,lib2...] [-i init_file] [-m main_class] [-M main_file]');
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
	console.log('     NOTE: Each .st file is currently considered to be a fileout of a single class');
	console.log('     category of the same name as the file!');
	console.log('');
	console.log('   If no <Program> is specified each given .st file will be compiled into');
	console.log('   a matching .js file. Otherwise a <Program>.js file is linked together based on');
	console.log('   the given options:');
	console.log('  -l library1,library2');
	console.log('     Add listed JavaScript libraries in listed order.');
	console.log('     Libraries are not separated by spaces or end with .js.');
	console.log('');
	console.log('  -i init_file');
	console.log('     Add library initializer <init_file> instead of default $AMBER/js/init.js ');
	console.log('');
	console.log('  -m main_class');
	console.log('     Add a call to the class method main_class>>main at the end of <Program>.');
	console.log('');
	console.log('  -M main_file');
	console.log('     Add <main_file> at the end of <Program.js> acting as #main.');
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
	console.log('     Uses suffix ".deploy.js" in addition to any explicit suffic set by -s.');
	console.log('');
	console.log('  -s suffix');
	console.log('     Add <suffix> to compiled .js files. File.st is then compiled into');
	console.log('     File.<suffix>.js.');
	console.log('');
	console.log('  -S suffix');
	console.log('     Use <suffix> for all libraries accessed using -l. This makes it possible');
	console.log('     to have multiple flavors of Amber and libraries in the same place.');
	console.log('');
	console.log('');
	console.log('     Example invocations:');
	console.log('');
	console.log('     Just compile Kernel-Objects.st to Kernel-Objects.js:');
	console.log('');
	console.log('        amberc Kernel-Objects.st');
	console.log('');
	console.log('     Compile Hello.st to Hello.js and create complete program called Program.js.');
	console.log('     Additionally add a call to the class method Hello>>main:');
	console.log('');
	console.log('        amberc -m Hello Hello.st Program');
	console.log('');
	console.log('     Compile Cat1.st and Cat2.st files into corresponding .js files.');
	console.log('     Link them with myboot.js and myKernel.js and add myinit.js as custom');
	console.log('     initializer file. Add main.js last which contains the startup code');
	console.log('      and merge everything into a complete program named Program.js:');
	console.log('');
	console.log('        amberc -M main.js -i myinit.js myboot.js myKernel.js Cat1.st Cat2.st Program');

	process.exit();
};


/**
 * Checks if the java executable exists and afterwards,
 * if compiler.jar exists at the path stored in this.closure_jar.
 * All closure related entries are set to false upon failure.
 *
 * callback gets called in any case.
 */
AmberC.prototype.check_for_closure_compiler = function(callback) {
	var defaults = this.defaults;
	var self = this;
	if (defaults.closure) {
		exec('which java', function(error, stdout, stderr) {
			// stdout contains path to java executable
			if (null !== error) {
				console.warn('java is not installed but is needed for -O, -A or -o (Closure compiler).');
				defaults.closure = false;
				defaults.closure_parts = false;
				defaults.closure_full = false;
				callback();
				return;
			}
			path.exists(self.closure_jar, function(exists) {
				if (!exists) {
					console.warn('Can not find Closure compiler at: ' + self.closure_jar);
					defaults.closure = false;
					defaults.closure_parts = false;
					defaults.closure_full = false;
				} else {
					console.warn('Closure compiler found at: ' + self.closure_jar);
				}
				callback();
				return;
			});
		});
	} else {
		callback();
	}
};


/**
 * Check if the file given as parameter exists in the local directory or in $AMBER/js/.
 * '.js' is appended first.
 *
 * @param filename name of a file without '.js' prefix
 * @param callback gets called on success with path to .js file as parameter
 */
AmberC.prototype.resolve_js = function(filename, callback) {
	var baseName = path.basename(filename, '.js');
	var jsFile = baseName + this.defaults.loadsuffix + '.js';
	var amberJsFile = path.join(this.amber_dir, 'js', jsFile);
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
};


/**
 * Collect libraries and Smalltalk files looking
 * both locally and in $AMBER/js and $AMBER/st.
 * Followed by resolve_libraries().
 */
AmberC.prototype.collect_files = function(stFiles, jsFiles) {
	var self = this;
	var collected_files = new Combo(function() {
		self.resolve_libraries();
	});
	if (0 !== stFiles.length) {
		self.collect_st_files(stFiles, collected_files.add());
	}
	if (0 !== jsFiles.length) {
		self.collect_js_files(jsFiles, collected_files.add());
	}
};


/**
 * Resolve st files given by stFiles and add them to defaults.compile.
 * Respective categories get added to defaults.compile_categories.
 * callback is evaluated afterwards.
 */
AmberC.prototype.collect_st_files = function(stFiles, callback) {
	var defaults = this.defaults;
	var self = this;
	var collected_st_files = new Combo(function() {
		Array.prototype.slice.call(arguments).forEach(function(data) {
			var stFile = data[0];
			var stCategory = data[1];
			defaults.compile.push(stFile);
			defaults.compiled_categories.push(stCategory);
			defaults.compiled.push(stCategory + defaults.suffix_used + '.js');
		});
		callback();
	});

	stFiles.forEach(function(stFile) {
		var _callback = collected_st_files.add();
		console.log('Checking: ' + stFile);
		var category = path.basename(stFile, '.st');
		var amberStFile = path.join(self.amber_dir, 'st', stFile);
		path.exists(stFile, function(exists) {
			if (exists) {
				_callback(stFile, category);
			} else {
				path.exists(amberStFile, function(exists) {
					if (exists) {
						_callback(amberStFile, category);
					} else {
						throw(new Error('Smalltalk file not found: ' + amberStFile));
					}
				});
			}
		});
	});
};


/**
 * Resolve js files given by jsFiles and add them to defaults.libraries.
 * callback is evaluated afterwards.
 */
AmberC.prototype.collect_js_files = function(jsFiles, callback) {
	var self = this;
	var collected_js_files = new Combo(function() {
		Array.prototype.slice.call(arguments).forEach(function(file) {
			self.defaults.libraries.push(file[0]);
		});
		callback();
	});

	jsFiles.forEach(function(jsFile) {
		self.resolve_js(jsFile, collected_js_files.add());
	});
};


/**
 * Resolve kernel and compiler files.
 * Followed by resolve_init().
 */
AmberC.prototype.resolve_libraries = function() {
	// Resolve libraries listed in this.kernel_libraries
	var self = this;
	var all_resolved = new Combo(function(resolved_library_files, resolved_compiler_files) {
		self.resolve_init(resolved_compiler_files[0]);
	});
	this.resolve_kernel(all_resolved.add());
	this.resolve_compiler(all_resolved.add());
};


/**
 * Resolve .js files needed by kernel
 * callback is evaluated afterwards.
 */
AmberC.prototype.resolve_kernel = function(callback) {
	var self = this;
	var kernel_files = this.kernel_libraries.concat(this.defaults.load);
	var kernel_resolved = new Combo(function() {
		Array.prototype.slice.call(arguments).forEach(function(file) {
			if (undefined !== file[0]) {
				self.defaults.libraries.push(file[0]);
			}
		});
		callback(null);
	});

	kernel_files.forEach(function(file) {
		self.resolve_js(file, kernel_resolved.add());
	});

	always_resolve(kernel_resolved.add());
};


/**
 * Resolve .js files needed by compiler.
 * callback is evaluated afterwards with resolved files as argument.
 */
AmberC.prototype.resolve_compiler = function(callback) {
	// Resolve compiler libraries
	var compiler_files = this.compiler_libraries.concat(this.defaults.load);
	var compiler_resolved = new Combo(function() {
		var compilerFiles = [];
		Array.prototype.slice.call(arguments).forEach(function(file) {
			if (undefined !== file[0]) {
				compilerFiles.push(file[0]);
			}
		});
		callback(compilerFiles);
	});
	var self = this
	compiler_files.forEach(function(file) {
		self.resolve_js(file, compiler_resolved.add());
	});

	always_resolve(compiler_resolved.add());
};


/**
 * Resolves default.init and adds it to compilerFiles.
 * Followed by create_compiler().
 */
AmberC.prototype.resolve_init = function(compilerFiles) {
	// check and add init.js
	var initFile = this.defaults.init;
	if ('.js' !== path.extname(initFile)) {
		initFile = this.resolve_js(initFile);
		this.defaults.init = initFile;
	}
	compilerFiles.push(initFile);

	this.create_compiler(compilerFiles);
};


/**
 * Read all .js files needed by compiler and eval() them.
 * The finished Compiler gets stored in defaults.smalltalk.
 * Followed by compile().
 */
AmberC.prototype.create_compiler = function(compilerFilesArray) {
	var self = this;
	var compiler_files = new Combo(function() {
		var content = '(function() {';
		Array.prototype.slice.call(arguments).forEach(function(data) {
			// data is an array where index 0 is the error code and index 1 contains the data
			content += data[1];
		});
		content = content + 'return smalltalk;})();';
		self.defaults.smalltalk = eval(content);
		console.log('Compiler loaded');

		self.compile();
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
AmberC.prototype.compile = function() {
	console.log('Compiling collected .st files')
	// import .st files
	var self = this;
	var imports = new Combo(function() {
		Array.prototype.slice.call(arguments).forEach(function(code) {
			if (undefined !== code[0]) {
				// get element 0 of code since all return values are stored inside an array by Combo
				self.defaults.smalltalk.Importer._new()._import_(code[0]._stream());
			}
		});
		self.category_export();
	});

	this.defaults.compile.forEach(function(stFile) {
		var callback = imports.add();
		if (/\.st/.test(stFile)) {
			console.log('Importing: ' + stFile);
			fs.readFile(stFile, 'utf8', function(err, data) {
				if (!err)
					callback(data);
				else
					throw new Error('Could not import: ' + stFile);
			});
		}
	});
	always_resolve(imports.add());
};


/**
 * Export compiled categories to JavaScript files.
 * Followed by verify().
 */
AmberC.prototype.category_export = function() {
	var defaults = this.defaults;
	var self = this;
	// export categories as .js
	async_map(defaults.compiled_categories, function(category, callback) {
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
		self.verify();
	});
};


/**
 * Verify if all .st files have been compiled.
 * Followed by compose_js_files() and optimize().
 */
AmberC.prototype.verify = function() {
	console.log('Verifying if all .st files were compiled');
	var self = this;
	async_map(this.defaults.compiled, function(file, callback) {
			path.exists(file, function(exists) {
				if (exists)
					callback(null, null);
				else
					throw(new Error('Compilation failed of: ' + file));
			});
		}, function(err, result) {
			self.compose_js_files();
	});
};


/**
 * Synchronous function.
 * Concatenates compiled JavaScript files into one file in the correct order.
 * The name of the produced file is given by defaults.program (set by the last commandline option).
 */
AmberC.prototype.compose_js_files = function() {
	var defaults = this.defaults;
	if (undefined === defaults.program) {
		return;
	}
	var program_files = [];

	if (0 !== defaults.libraries.length) {
		console.log('Collecting libraries: ' + defaults.libraries);
		program_files.push.apply(program_files, defaults.libraries);
	}

	if (0 !== defaults.compiled.length) {
		console.log('Collecting compiled files: ' + defaults.compiled);
		program_files.push.apply(program_files, defaults.compiled);
	}

	if (undefined !== defaults.init) {
		console.log('Adding initializer ' + defaults.init);
		program_files.push(defaults.init);
	}

	console.log('Writing program file: %s.js', defaults.program);

	var fileStream = fs.createWriteStream(defaults.program + defaults.suffix_used + '.js');
	fileStream.on('error', function(error) {
		fileStream.end();
		console.log(error);
	});
	var self = this;
	fileStream.on('close', function(){
		self.optimize();
	});

	program_files.forEach(function(file) {
		if(path.existsSync(file)) {
			console.log('Adding : ' + file);
			fileStream.write(fs.readFileSync(file));
		} else {
			fileStream.end();
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

	console.log('Done.');
	fileStream.end();
};


/**
 * Optimize created JavaScript files with Google Closure compiler depending
 * on the flags: defaults.closure_parts, defaults.closure_full.
 */
AmberC.prototype.optimize = function() {
	var defaults = this.defaults;
	var self = this;
	var optimization_done = new Combo(function() {
		console.timeEnd('Compile Time');
		if (undefined !== defaults.finished_callback) {
			defaults.finished_callback();
		}
	});

	if (defaults.closure_parts) {
		console.log('Compiling all js files using Google closure compiler.');
		var allJsFiles = defaults.compiled.concat(defaults.libraries);
		allJsFiles.forEach(function(file) {
			var minifiedName = path.basename(file, '.js') + '.min.js';
			self.closure_compile(file, minifiedName, optimization_done.add());
		});
	}
	if (defaults.closure_full) {
		console.log('Compiling ' + defaults.program + '.js file using Google closure compiler.');
		self.closure_compile(defaults.program + '.js', defaults.program + '.min.js', optimization_done.add());
	}

	always_resolve(optimization_done.add());
};


/**
 * Compile sourceFile into minifiedFile with Google Closure compiler.
 * callback gets executed once finished.
 */
AmberC.prototype.closure_compile = function(sourceFile, minifiedFile, callback) {
	// exec is asynchronous
	var self = this;
	exec(
		'java -jar ' +
		self.closure_jar + ' ' +
		self.defaults.closure_options +
		' --js '+ sourceFile +
		' --js_output_file '+ minifiedFile,
		function (error, stdout, stderr) {
			if (error) {
				console.log(stderr);
			} else {
				console.log(stdout);
				console.log('Minified: '+ minifiedFile);
			}
			callback();
		}
	);
};

module.exports.Compiler = AmberC;
module.exports.Combo = Combo;
module.exports.map = async_map;
