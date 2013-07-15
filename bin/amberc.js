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
	this.closure_jar = closure_jar || '';
	this.kernel_libraries = ['boot', 'Kernel-Objects', 'Kernel-Classes', 'Kernel-Methods',
	                         'Kernel-Collections', 'Kernel-Exceptions', 'Kernel-Transcript',
	                         'Kernel-Announcements'];
	this.compiler_libraries = this.kernel_libraries.concat(['parser', 'Importer-Exporter', 'Compiler-Exceptions',
	                          'Compiler-Core', 'Compiler-AST', 'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic']);
}


/**
 * Default values.
 */
var createDefaults = function(amber_dir, finished_callback){
	if (undefined === amber_dir) {
		throw new Error('createDefaults() function needs a valid amber_dir parameter');
	}

	return {
		'load': [],
		'init': path.join(amber_dir, 'js', 'init.js'),
		'main': undefined,
		'mainfile': undefined,
		'stFiles': [],
		'jsFiles': [],
		'jsGlobals': [],
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
		'compiled': [],
		'program': undefined,
		'output_dir': undefined,
		'verbose': false,
		'finished_callback': finished_callback
	};
};


/**
 * Main function for executing the compiler.
 * If check_configuration_ok() returns successfully the configuration is set on the current compiler
 * instance and check_for_closure_compiler() gets called.
 * The last step is to call collect_files().
 */
AmberC.prototype.main = function(configuration, finished_callback) {
	console.time('Compile Time');
	if (undefined !== finished_callback) {
		configuration.finished_callback = finished_callback;
	}

	if (configuration.closure || configuration.closure_parts || configuration.closure_full) {
		configuration.deploy = true;
	}

	console.ambercLog = console.log;
	if (false === configuration.verbose) {
		console.log = function() {};
	}

	if (this.check_configuration_ok(configuration)) {
		this.defaults = configuration;
		this.defaults.smalltalk = {}; // the evaluated compiler will be stored in this variable (see create_compiler)
		var self = this;
		this.check_for_closure_compiler(function(){
			self.collect_files(self.defaults.stFiles, self.defaults.jsFiles)
		});
	}
};


/**
 * Check if the passed in configuration object has sufficient/nonconflicting values
 */
AmberC.prototype.check_configuration_ok = function(configuration) {
	if (undefined === configuration) {
		throw new Error('AmberC.check_configuration_ok(): missing configuration object');
	}
	if (undefined === configuration.init) {
		throw new Error('AmberC.check_configuration_ok(): init value missing in configuration object');
	}

	if (0 === configuration.jsFiles.length && 0 === configuration.stFiles.lenght) {
		throw new Error('AmberC.check_configuration_ok(): no files to compile/link specified in configuration object');
	}
	return true;
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
				console.warn('java is not installed but is needed for running the Closure compiler (-O, -A or -o flags).');
				defaults.closure = false;
				defaults.closure_parts = false;
				defaults.closure_full = false;
				callback();
				return;
			}
			fs.exists(self.closure_jar, function(exists) {
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
	fs.exists(jsFile, function(exists) {
		if (exists) {
			callback(jsFile);
		} else {
			fs.exists(amberJsFile, function(exists) {
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
			defaults.compile.push(stFile);
		});
		callback();
	});

	stFiles.forEach(function(stFile) {
		var _callback = collected_st_files.add();
		console.log('Checking: ' + stFile);
		var amberStFile = path.join(self.amber_dir, 'st', stFile);
		fs.exists(stFile, function(exists) {
			if (exists) {
				_callback(stFile);
			} else {
				console.log('Checking: ' + amberStFile);
				fs.exists(amberStFile, function(exists) {
					if (exists) {
						_callback(amberStFile);
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
	var all_resolved = new Combo(function(resolved_kernel_files, resolved_compiler_files) {
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
		var foundLibraries = [];
		Array.prototype.slice.call(arguments).forEach(function(file) {
			if (undefined !== file[0]) {
				foundLibraries.push(file[0]);
			}
		});
		// boot.js and Kernel files need to be used first
		// otherwise the global smalltalk object is undefined
		self.defaults.libraries = foundLibraries.concat(self.defaults.libraries);
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
		self.defaults.smalltalk.ErrorHandler._setCurrent_(self.defaults.smalltalk.RethrowErrorHandler._new());

		if(0 != self.defaults.jsGlobals.length) {
			var jsGlobalVariables = self.defaults.smalltalk.globalJsVariables;
			jsGlobalVariables.push.apply(jsGlobalVariables, self.defaults.jsGlobals);
		}

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
			console.ambercLog('Importing: ' + stFile);
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
	async_map(defaults.compile, function(stFile, callback) {
		var category = path.basename(stFile, '.st');
		var jsFilePath = defaults.output_dir;
		if (undefined === jsFilePath) {
			jsFilePath = path.dirname(stFile);
		}
		var jsFile = category + defaults.suffix_used + '.js';
		jsFile = path.join(jsFilePath, jsFile);
		defaults.compiled.push(jsFile);
		var jsFileDeploy = category + defaults.suffix_used + '.deploy.js';
		jsFileDeploy = path.join(jsFilePath, jsFileDeploy);

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
	// copy array
	var compiledFiles = this.defaults.compiled.slice(0);
	// append deploy files if necessary
	if (true === this.defaults.deploy) {
		this.defaults.compiled.forEach(function(file) {
			compiledFiles.push(file.replace(/\.js/g, '.deploy.js'));
		});
	}

	async_map(compiledFiles,
		function(file, callback) {
			fs.exists(file, function(exists) {
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
	var self = this;
	var programFile = defaults.program;
	if (undefined === programFile) {
		self.optimize();
		return;
	}
	if (undefined !== defaults.output_dir) {
		programFile = path.join(defaults.output_dir, programFile);
	}

	var program_files = [];
	if (0 !== defaults.libraries.length) {
		console.log('Collecting libraries: ' + defaults.libraries);
		program_files.push.apply(program_files, defaults.libraries);
	}

	if (0 !== defaults.compiled.length) {
		var compiledFiles = defaults.compiled.slice(0);
		if (true === defaults.deploy) {
			compiledFiles = compiledFiles.map(function(file) {
				return file.replace(/\.js$/g, '.deploy.js');
			});
		}
		console.log('Collecting compiled files: ' + compiledFiles);
		program_files.push.apply(program_files, compiledFiles);
	}

	if (undefined !== defaults.init) {
		console.log('Adding initializer ' + defaults.init);
		program_files.push(defaults.init);
	}

	console.ambercLog('Writing program file: %s.js', programFile);

	var fileStream = fs.createWriteStream(programFile + defaults.suffix_used + '.js');
	fileStream.on('error', function(error) {
		fileStream.end();
		console.ambercLog(error);
	});

	fileStream.on('close', function(){
		self.optimize();
	});

	program_files.forEach(function(file) {
		if(fs.existsSync(file)) {
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

	if (undefined !== defaults.mainfile && fs.existsSync(defaults.mainfile)) {
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
		console.log = console.ambercLog;
		console.timeEnd('Compile Time');
		if (undefined !== defaults.finished_callback) {
			defaults.finished_callback();
		}
	});

	if (defaults.closure_parts) {
		console.log('Compiling all js files using Google closure compiler.');
		defaults.compiled.forEach(function(file) {
			var deployFile = file.replace(/\.js$/g, '.deploy.js');
			console.log('Compiling ' + deployFile + ' file using Google closure compiler.');
			var minifiedName = deployFile.replace(/\.js$/g, '.min.js');
			self.closure_compile(deployFile, minifiedName, optimization_done.add());
		});
	}
	if (defaults.closure_full && (undefined !== defaults.program)) {
		var programFile = defaults.program;
		if (undefined !== defaults.output_dir) {
			programFile = path.join(defaults.output_dir, programFile);
		}
		console.log('Compiling ' + programFile + '.js file using Google closure compiler.');
		self.closure_compile(programFile + '.js', programFile + '.min.js', optimization_done.add());
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
module.exports.createDefaults = createDefaults;
module.exports.Combo = Combo;
module.exports.map = async_map;
