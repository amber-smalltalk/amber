/**
 * This is a "compiler" for Amber code.
 * Put the following code into compiler.js:
 *     var amberc = require('amberc');
 *     var compiler = new amberc.Compiler('path/to/amber');
 *     var options = amberc.createDefaults();
 *     // edit options entries
 *     compiler.main(options);
 */

var path = require('path'),
    fs = require('fs'),
    Promise = require('es6-promise').Promise,
    requirejs = require('requirejs');

/**
 * AmberCompiler constructor function.
 * amber_dir: points to the location of an amber installation
 */
function AmberCompiler(amber_dir) {
    if (amber_dir == null || !fs.existsSync(amber_dir)) {
        throw new Error('amber_dir needs to be a valid directory');
    }

    this.amber_dir = amber_dir;
}


/**
 * Default values.
 */
var createDefaultConfiguration = function () {
    return {
        paths: {},
        configFile: null,
        load: [],
        stFiles: [],
        jsGlobals: [],
        amdNamespace: 'amber_core',
        compile: [],
        compiled: [],
        outputDir: undefined,
        verbose: false
    };
};


/**
 * Main function for executing the compiler.
 * If check_configuration_ok() returns successfully
 * the configuration is used to trigger the following compilation steps.
 */
AmberCompiler.prototype.main = function (configuration, finished_callback) {
    console.time('Compile Time');

    if (configuration.amdNamespace.length === 0) {
        configuration.amdNamespace = 'amber_core';
    }

    console.ambercLog = console.log;
    if (false === configuration.verbose) {
        console.log = function () {
        };
    }

    // the evaluated compiler will be stored in this variable (see create_compiler)
    configuration.core = {};
    configuration.globals = {};
    configuration.amber_dir = this.amber_dir;

    var rjsConfig;
    if (configuration.configFile) {
        var configSrc = fs.readFileSync(configuration.configFile, "utf8");
        rjsConfig = (function () {
            var require, requirejs;
            requirejs = require = {
                config: function (x) {
                    requirejs = require = x;
                }
            };
            eval(configSrc);
            return require;
        })();
    } else {
        rjsConfig = {
            paths: configuration.paths
        };
    }

    if (!rjsConfig.paths.amber) rjsConfig.paths.amber = path.join(this.amber_dir, 'support');
    if (!rjsConfig.paths.amber_core) rjsConfig.paths.amber_core = path.join(this.amber_dir, 'src');
    rjsConfig.paths['text'] = require.resolve('requirejs-text').replace(/\.js$/, "");
    rjsConfig.paths['amber/without-imports'] = path.join(__dirname, 'without-imports');
    rjsConfig.map = rjsConfig.map || {};
    rjsConfig.map["*"] = rjsConfig.map["*"] || {};
    rjsConfig.map["*"]["amber/Platform"] = "amber_core/Platform-Node";
    rjsConfig.nodeRequire = require;
    rjsConfig.context = "amberc";
    configuration.requirejs = requirejs.config(rjsConfig);

    check_configuration(configuration)
        .then(collect_st_files)
        .then(create_compiler)
        .then(compile)
        .then(category_export)
        .then(verify)
        .then(function () {
            console.timeEnd('Compile Time');
        }, function (error) {
            console.error(error);
        })
        .then(function () {
            console.log = console.ambercLog;
            finished_callback && finished_callback();
        });
};


/**
 * Check if the passed in configuration object has sufficient/nonconflicting values.
 * Returns a Promise which resolves into the configuration object.
 */
function check_configuration(configuration) {
    return new Promise(function (resolve, reject) {
        if (configuration == null) {
            reject(Error('AmberCompiler.check_configuration_ok(): missing configuration object'));
        }

        if (0 === configuration.stFiles.length) {
            reject(Error('AmberCompiler.check_configuration_ok(): no files to compile specified in configuration object'));
        }

        resolve(configuration);
    });
}


/**
 * Check if the file given as parameter exists in any of the following directories:
 *  1. current local directory
 *  2. $AMBER/
 *
 * @param filename name of a .st file
 * @param configuration the main amberc configuration object
 */
function resolve_st(filename, configuration) {
    return resolve_file(filename, [configuration.amber_dir]);
}


/**
 * Resolve the location of a file given as parameter filename.
 * First check if the file exists at given location,
 * then check in each of the directories specified in parameter searchDirectories.
 */
function resolve_file(filename, searchDirectories) {
    return new Promise(function (resolve, reject) {
        console.log('Resolving: ' + filename);
        fs.exists(filename, function (exists) {
            if (exists) {
                resolve(filename);
            } else {
                var alternativeFile = '';
                // check for filename in any of the given searchDirectories
                var found = searchDirectories.some(function (directory) {
                    alternativeFile = path.join(directory, filename);
                    return fs.existsSync(alternativeFile);
                });
                if (found) {
                    resolve(alternativeFile);
                } else {
                    reject(Error('File not found: ' + alternativeFile));
                }
            }
        });
    });
}


/**
 * Resolve st files given by stFiles and add them to configuration.compile.
 * Returns a Promise which resolves into the configuration object.
 */
function collect_st_files(configuration) {
    return Promise.all(
        configuration.stFiles.map(function (stFile) {
            return resolve_st(stFile, configuration);
        })
    )
        .then(function (data) {
            configuration.compile = configuration.compile.concat(data);
            return configuration;
        });
}


/**
 * Resolve .js files needed by compiler, read and eval() them.
 * The finished Compiler gets stored in configuration.{core,globals}.
 * Returns a Promise object which resolves into the configuration object.
 */
function create_compiler(configuration) {
    var include_files = configuration.load;
    return new Promise(configuration.requirejs.bind(null, ["amber/lang"]))
        .then(function (boot) {
            boot.api.initialize();
            configuration.core = boot.api;
            configuration.globals = boot.globals;
            var pluginPrefixedLibraries = include_files.map(function (each) {
                return 'amber/without-imports!' + each;
            });
            return new Promise(configuration.requirejs.bind(null, pluginPrefixedLibraries));
        })
        .then(function () {
            console.log('Compiler loaded');

            configuration.globals.ErrorHandler._register_(configuration.globals.RethrowErrorHandler._new());

            if (0 !== configuration.jsGlobals.length) {
                var jsGlobalVariables = configuration.core.globalJsVariables;
                jsGlobalVariables.push.apply(jsGlobalVariables, configuration.jsGlobals);
            }

            return configuration;
        });
}


/**
 * Compile all given .st files by importing them.
 * Returns a Promise object that resolves into the configuration object.
 */
function compile(configuration) {
    // return function which does the actual work
    // and use the compile function to reference the configuration object
    return Promise.all(
        configuration.compile.map(function (stFile) {
            return new Promise(function (resolve, reject) {
                if (/\.st/.test(stFile)) {
                    console.ambercLog('Reading: ' + stFile);
                    fs.readFile(stFile, 'utf8', function (err, data) {
                        if (!err)
                            resolve(data);
                        else
                            reject(Error('Could not read: ' + stFile));
                    });
                }
            });
        })
    )
        .then(function (fileContents) {
            console.log('Compiling collected .st files');
            // import/compile content of .st files
            return Promise.all(
                fileContents.map(function (code) {
                    return new Promise(function (resolve, reject) {
                        var importer = configuration.globals.Importer._new();
                        try {
                            importer._import_(code._stream());
                            resolve(true);
                        } catch (ex) {
                            reject(Error("Compiler error in section:\n" +
                                    importer._lastSection() + "\n\n" +
                                    "while processing chunk:\n" +
                                    importer._lastChunk() + "\n\n" +
                                    (ex._messageText && ex._messageText() || ex.message || ex))
                            );
                        }
                    });
                })
            );
        })
        .then(function () {
            return configuration;
        });
}


/**
 * Export compiled categories to JavaScript files.
 * Returns a Promise() that resolves into the configuration object.
 */
function category_export(configuration) {
    return Promise.all(
        configuration.compile.map(function (stFile) {
            return new Promise(function (resolve, reject) {
                var category = path.basename(stFile, '.st');
                var jsFilePath = configuration.outputDir;
                if (jsFilePath == null) {
                    jsFilePath = path.dirname(stFile);
                }
                var jsFile = category + '.js';
                jsFile = path.join(jsFilePath, jsFile);
                configuration.compiled.push(jsFile);
                var smalltalkGlobals = configuration.globals;
                var packageObject = smalltalkGlobals.Package._named_(category);
                packageObject._transport()._namespace_(configuration.amdNamespace);
                fs.writeFile(jsFile, smalltalkGlobals.String._streamContents_(function (stream) {
                    smalltalkGlobals.AmdExporter._new()._exportPackage_on_(packageObject, stream);
                }), function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve(true);
                });
            });
        })
    )
        .then(function () {
            return configuration;
        });
}


/**
 * Verify if all .st files have been compiled.
 * Returns a Promise() that resolves into the configuration object.
 */
function verify(configuration) {
    console.log('Verifying if all .st files were compiled');
    return Promise.all(
        configuration.compiled.map(function (file) {
            return new Promise(function (resolve, reject) {
                fs.exists(file, function (exists) {
                    if (exists)
                        resolve(true);
                    else
                        reject(Error('Compilation failed of: ' + file));
                });
            });
        })
    )
        .then(function () {
            return configuration;
        });
}


module.exports.Compiler = AmberCompiler;
module.exports.createDefaultConfiguration = createDefaultConfiguration;
