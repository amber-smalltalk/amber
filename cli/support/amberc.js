/**
 * This is a "compiler" for Amber code.
 * Put the following code into compiler.js:
 *     var amberc = require('amberc');
 *     var compiler = new amberc.Compiler('path/to/amber');
 *     var options = amberc.createDefaults();
 *     // edit options entries
 *     compiler.main(options);
 *
 * Execute 'node compiler.js' without arguments or with -h / --help for help.
 */

/**
 * Helper for concatenating Amber generated AMD modules.
 * The produced output can be exported and run as an independent program.
 *
 * var concatenator = createConcatenator();
 * concatenator.start(); // write the required AMD define header
 * concatenator.add(module1);
 * concatenator.addId(module1_ID);
 * //...
 * concatenator.finish("//some last code");
 * var concatenation = concatenator.toString();
 * // The variable concatenation contains the concatenated result
 * // which can either be stored in a file or interpreted with eval().
 */
function createConcatenator () {
	return {
		elements: [],
		ids: [],
		add: function () {
			this.elements.push.apply(this.elements, arguments);
		},
		addId: function () {
			this.ids.push.apply(this.ids, arguments);
		},
		forEach: function () {
			this.elements.forEach.apply(this.elements, arguments);
		},
		start: function () {
			this.add(
				'var define = (' + require('amdefine') + ')(null, function (id) { throw new Error("Dependency not found: " +  id); }), requirejs = define.require;',
				'define("amber_vm/browser-compatibility", [], {});'
			);
		},
		finish: function (realWork) {
			this.add(
				'define("amber_vm/_init", ["amber_vm/smalltalk","' + this.ids.join('","') + '"], function (smalltalk) {',
				'smalltalk.initialize();',
				realWork,
				'});',
				'requirejs("amber_vm/_init");'
			);
		},
		toString: function () {
			return this.elements.join('\n');
		}
	};
}


var path = require('path'),
	fs = require('fs'),
	Promise = require('es6-promise').Promise;

/**
 * AmberC constructor function.
 * amber_dir: points to the location of an amber installation
 */
function AmberC(amber_dir) {
	if (undefined === amber_dir || !fs.existsSync(amber_dir)) {
		throw new Error('amber_dir needs to be a valid directory');
	}

	this.amber_dir = amber_dir;
	this.kernel_libraries = ['boot', 'smalltalk', 'nil', '_st', 'Kernel-Objects', 'Kernel-Classes', 'Kernel-Methods',
							'Kernel-Collections', 'Kernel-Infrastructure', 'Kernel-Exceptions', 'Kernel-Transcript',
							'Kernel-Announcements'];
	this.compiler_libraries = this.kernel_libraries.concat(['parser', 'Kernel-ImportExport', 'Compiler-Exceptions',
							'Compiler-Core', 'Compiler-AST', 'Compiler-Exceptions', 'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic']);
}


/**
 * Default values.
 */
var createDefaults = function(finished_callback){
	return {
		'load': [],
		'main': undefined,
		'mainfile': undefined,
		'stFiles': [],
		'jsFiles': [],
		'jsGlobals': [],
		'amd_namespace': 'amber_core',
		'suffix': '',
		'loadsuffix': '',
		'suffix_used': '',
		'libraries': [],
		'jsLibraryDirs': [],
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

	if (configuration.amd_namespace.length === 0) {
		configuration.amd_namespace = 'amber_core';
	}

	if (undefined !== configuration.jsLibraryDirs) {
		configuration.jsLibraryDirs.push(path.join(this.amber_dir, 'js'));
		configuration.jsLibraryDirs.push(path.join(this.amber_dir, 'support'));
	}

	console.ambercLog = console.log;
	if (false === configuration.verbose) {
		console.log = function() {};
	}

	var self = this;
	check_configuration(configuration).then(function(configuration) {
		self.defaults = configuration;
		self.defaults.smalltalk = {}; // the evaluated compiler will be stored in this variable (see create_compiler)
		self.defaults.kernel_libraries = self.kernel_libraries;
		self.defaults.compiler_libraries = self.compiler_libraries;
		self.defaults.amber_dir = self.amber_dir;
		self.collect_files(self.defaults)
	}, function (error) {
		console.log(error);
	});
};


/**
 * Check if the passed in configuration object has sufficient/nonconflicting values.
 * Calls reject with an Error object upon failure and resolve(configuration) upon success.
 */
function check_configuration(configuration) {
	return new Promise(function(resolve, reject) {
		if (undefined === configuration) {
			reject(Error('AmberC.check_configuration_ok(): missing configuration object'));
		}

		if (0 === configuration.jsFiles.length && 0 === configuration.stFiles.length) {
			reject(Error('AmberC.check_configuration_ok(): no files to compile/link specified in configuration object'));
		}

		resolve(configuration);
	});
};


/**
 * Check if the file given as parameter exists in any of the following directories:
 *  1. current local directory
 *  2. defauls.jsLibraryDirs
 *  3. $AMBER/js/
 *  3. $AMBER/support/
 *
 * @param filename name of a file without '.js' prefix
 * @param callback gets called on success with path to .js file as parameter
 */
function resolve_js(filename, configuration, callback) {
	var baseName = path.basename(filename, '.js');
	var jsFile = baseName + configuration.loadsuffix + '.js';
	console.log('Resolving: ' + jsFile);
	fs.exists(jsFile, function(exists) {
		if (exists) {
			callback(jsFile);
		} else {
			var amberJsFile = '';
			// check for specified .js file in any of the directories from jsLibraryDirs
			var found = configuration.jsLibraryDirs.some(function(directory) {
				amberJsFile = path.join(directory, jsFile);
				return fs.existsSync(amberJsFile);
			});
			if (found) {
				callback(amberJsFile);
			} else {
				throw(new Error('JavaScript file not found: ' + jsFile));
			}
		}
	});
};


/**
 * Collect libraries and Smalltalk files looking
 * both locally and in $AMBER/js and $AMBER/st.
 * Followed by resolve_libraries().
 */
AmberC.prototype.collect_files = function(configuration) {
	collect_st_files(configuration)
	.then(collect_js_files)
	.then(resolve_kernel)
	.then(resolve_compiler)
	.then(create_compiler(configuration))
	.then(function(resolve) {
		return configuration;
	}).then(readFiles)
	.then(compile(configuration)
	, function(error) {
		console.error(error);
	}).then(function() {
		return configuration;
	}).then(category_export)
	.then(function(resolve) {
		return configuration;
	}, function(error) {
		console.error(error);
	}).then(verify)
	.then(function(resolve) {
		return configuration;
	}, function(error) {
		console.error(error);
	}).then(compose_js_files);
};


/**
 * Resolve st files given by stFiles and add them to defaults.compile.
 * Returns a Promise which resolves to configuration.
 */
function collect_st_files(configuration) {
	return new Promise(function(resolve, error) {
		Promise.all(
			configuration.stFiles.map(function(stFile) {
				return new Promise(function(resolve, error) {
					console.log('Checking: ' + stFile);
					var amberStFile = path.join(configuration.amber_dir, 'st', stFile);
					fs.exists(stFile, function(exists) {
						if (exists) {
							resolve(stFile);
						} else {
							console.log('Checking: ' + amberStFile);
							fs.exists(amberStFile, function(exists) {
								if (exists) {
									resolve(amberStFile);
								} else {
									error(Error('Smalltalk file not found: ' + amberStFile));
								}
							});
						}
					});
				});
			})
		).then(function(data) {
			configuration.compile = configuration.compile.concat(data);
			resolve(configuration);
		}, function(error) {
			error(error);
		});
	});
};


/**
 * Resolve js files given by jsFiles and add them to configuration.libraries.
 * Returns a Promise which resolves with configuration.
 */
function collect_js_files(configuration) {
	return new Promise(function(resolve, error) {
		Promise.all(
			configuration.jsFiles.map(function(file) {
				return new Promise(function(resolve, error) {
					resolve_js(file, configuration, resolve);
				});
			})
		).then(function(data) {
			configuration.libraries = configuration.libraries.concat(data);
			resolve(configuration);
		}, function(error) {
			error(error);
		});
	});
};


/**
 * Resolve .js files needed by kernel.
 * Returns a Promise which resolves with the configuration object.
 */
function resolve_kernel(configuration) {
	var kernel_files = configuration.kernel_libraries.concat(configuration.load);
	return new Promise(function(resolve, error) {
		Promise.all(
			kernel_files.map(function(file) {
				return new Promise(function(resolve, error) {
					resolve_js(file, configuration, resolve);
				});
			})
		).then(function(data) {
			// boot.js and Kernel files need to be used first
			// otherwise the global smalltalk object is undefined
			configuration.libraries = data.concat(configuration.libraries);
			resolve(configuration);
		}, function(error) {
			error(error);
		});
	});
};


/**
 * Resolve .js files needed by compiler.
 * Returns a Promise which resolves with an array of all compiler related files.
 */
function resolve_compiler(configuration) {
	// Resolve compiler libraries
	var compiler_files = configuration.compiler_libraries.concat(configuration.load);
	return new Promise(function(resolve, error) {
		Promise.all(
			compiler_files.map(function(file) {
				return new Promise(function(resolve, error) {
					resolve_js(file, configuration, resolve);
				});
			})
		).then(function(compilerFiles) {
			resolve(compilerFiles);
		}, function(error) {
			error(error);
		});
	});
};


/**
 * Read all .js files needed by compiler and eval() them.
 * The finished Compiler gets stored in configuration.smalltalk.
 * Returns a Promise object.
 */
function create_compiler(configuration) {
	return function(compilerFilesArray) {
		return new Promise(function(resolve, error) {
			Promise.all(
				compilerFilesArray.map(function(file) {
					return new Promise(function(resolve, error) {
						console.log('Loading file: ' + file);
						fs.readFile(file, function(err, data) {
							if (err)
								error(err);
							else
								resolve(data);
						});
					});
				})
			).then(function(files) {
				var builder = createConcatenator();
				builder.add('(function() {');
				builder.start();

				files.forEach(function(data) {
					// data is an array where index 0 is the error code and index 1 contains the data
					builder.add(data);
					// matches and returns the "module_id" string in the AMD definition: define("module_id", ...)
					var match = ('' + data).match(/^define\("([^"]*)"/);
					if (match) {
						builder.addId(match[1]);
					}
				});
				// store the generated smalltalk env in self.defaults.smalltalk
				builder.finish('configuration.smalltalk = smalltalk;');
				builder.add('})();');

				eval(builder.toString());
				console.log('Compiler loaded');
				configuration.smalltalk.ErrorHandler._setCurrent_(configuration.smalltalk.RethrowErrorHandler._new());

				if(0 !== configuration.jsGlobals.length) {
					var jsGlobalVariables = configuration.smalltalk.globalJsVariables;
					jsGlobalVariables.push.apply(jsGlobalVariables, configuration.jsGlobals);
				}

				resolve(true);
			}, function(error) {
				error(Error('Error creating compiler'));
			});
		});
	};
};


/**
 * Compile all given .st files by importing them.
 * Captures the configuration object in a closure and returns a function that
 * does the actual work and returns a Promise.all() object.
 */
function compile(configuration) {
	// return function which does the actual work
	// and use the compile function to reference the configuration object
	return function(fileContents) {
		console.log('Compiling collected .st files');
		// import/compile content of .st files
		return Promise.all(
			fileContents.map(function(code) {
				return new Promise(function(resolve, error) {
					var importer = configuration.smalltalk.Importer._new();
					try {
						importer._import_(code._stream());
						resolve(true);
					} catch (ex) {
						error(Error("Import error in section:\n" +
							importer._lastSection() + "\n\n" +
							"while processing chunk:\n" +
							importer._lastChunk() + "\n\n" +
							(ex._messageText && ex._messageText() || ex.message || ex))
						);
					}
				});
			})
		);
	};
};

/**
 * Read the content of all files into memory.
 * Returns a Promise.all() object.
 */
function readFiles(configuration) {
	return Promise.all(
		configuration.compile.map(function(stFile) {
			return new Promise(function(resolve, error) {
				if (/\.st/.test(stFile)) {
					console.ambercLog('Importing: ' + stFile);
					fs.readFile(stFile, 'utf8', function(err, data) {
						if (!err)
							resolve(data);
						else
							error(Error('Could not import: ' + stFile));
					});
				}
			});
		})
	);
};


/**
 * Export compiled categories to JavaScript files.
 * Returns a Promise.all() object.
 */
function category_export(configuration) {
	return Promise.all(
		configuration.compile.map(function(stFile) {
			return new Promise(function(resolve, error) {
				var category = path.basename(stFile, '.st');
				var jsFilePath = configuration.output_dir;
				if (undefined === jsFilePath) {
					jsFilePath = path.dirname(stFile);
				}
				var jsFile = category + configuration.suffix_used + '.js';
				jsFile = path.join(jsFilePath, jsFile);
				configuration.compiled.push(jsFile);
				var smalltalk = configuration.smalltalk;
				var packageObject = smalltalk.Package._named_(category);
				packageObject._transport()._namespace_(configuration.amd_namespace);
				fs.writeFile(jsFile, smalltalk.String._streamContents_(function (stream) {
					smalltalk.AmdExporter._new()._exportPackage_on_(packageObject, stream);
				}), function(err) {
					if (err)
						error(err);
					else
						resolve(true);
				});
			});
		})
	);
};


/**
 * Verify if all .st files have been compiled.
 * Returns a Promise.all() object.
 */
function verify(configuration) {
	console.log('Verifying if all .st files were compiled');

	return Promise.all(
		configuration.compiled.map(function(file) {
			return new Promise(function(resolve, error) {
				fs.exists(file, function(exists) {
					if (exists)
						resolve(true);
					else
						error(Error('Compilation failed of: ' + file));
				});
			});
		})
	);
};


/**
 * Synchronous function.
 * Concatenates compiled JavaScript files into one file in the correct order.
 * The name of the produced file is given by configuration.program (set by the last commandline option).
 * Returns a Promise.
 */
function compose_js_files(configuration) {
	return new Promise(function(resolve, reject) {
		var defaults = configuration;
		var programFile = defaults.program;
		if (undefined === programFile) {
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

			console.log('Collecting compiled files: ' + compiledFiles);
			program_files.push.apply(program_files, compiledFiles);
		}

		console.ambercLog('Writing program file: %s.js', programFile);

		var fileStream = fs.createWriteStream(programFile + defaults.suffix_used + '.js');
		fileStream.on('error', function(error) {
			fileStream.end();
			console.ambercLog(error);
		});

		fileStream.on('close', function(){
			return;
		});

		var builder = createConcatenator();
		builder.add('#!/usr/bin/env node');
		builder.start();

		program_files.forEach(function(file) {
			if(fs.existsSync(file)) {
				console.log('Adding : ' + file);
				var buffer = fs.readFileSync(file);
				// matches and returns the "module_id" string in the AMD define: define("module_id", ...)
				var match = buffer.toString().match(/^define\("([^"]*)"/);
				if (match /*&& match[1].slice(0,9) !== "amber_vm/"*/) {
					builder.addId(match[1]);
				}
				builder.add(buffer);
			} else {
				fileStream.end();
				throw(new Error('Can not find file ' + file));
			}
		});

		var mainFunctionOrFile = '';

		if (undefined !== defaults.main) {
			console.log('Adding call to: %s>>main', defaults.main);
			mainFunctionOrFile += 'smalltalk.' + defaults.main + '._main();';
		}

		if (undefined !== defaults.mainfile && fs.existsSync(defaults.mainfile)) {
			console.log('Adding main file: ' + defaults.mainfile);
			mainFunctionOrFile += '\n' + fs.readFileSync(defaults.mainfile);
		}

		builder.finish(mainFunctionOrFile);

		console.log('Writing...');
		builder.forEach(function (element) {
			fileStream.write(element);
			fileStream.write('\n');
		});
		console.log('Done.');
		fileStream.end();
		resolve(true);
	});
};


module.exports.Compiler = AmberC;
module.exports.createDefaults = createDefaults;
