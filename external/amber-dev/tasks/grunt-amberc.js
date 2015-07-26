module.exports = function (grunt) {

    var amberc = require('../lib/amberc');

    /**
     A full example entry for a Gruntfile.js is available below.
     Please note that the verbose level is either specified globally
     or on a target specific level.
     However, it can additionally be triggered on the commandline by
     adding the '-v' or '--verbose' flag.

     Example Gruntfile.js entry:

     amberc: {
       options: {
         amber_dir: process.cwd(),                // REQUIRED
         verbose: true                            // optional
       },
       helloWorld: {
         // this 'options' object is optional as well as all parameters inside it
         // they can be used to override the global 'options'
         options: {
           verbose: true
         },
         src: ['projects/HelloWorld/src/HelloWorld.st'], // REQUIRED
         output_dir: 'projects/HelloWorld/src',  // optional
         libraries: 'Web',                       // optional
         jsGlobals: ['global1', 'global2'],     // optional
         amd_namespace: 'MyNamespace',          // optional (default: 'amber')
       },
     },

     */
    grunt.registerMultiTask('amberc', 'Compile Smalltalk files with the amberc compiler', function () {
        // mark task as async task
        var done = this.async();

        var options = this.options({
            amber_dir: undefined,
            configFile: null,
            paths: {},
            verbose: grunt.option('verbose') || false
        });
        this.data.verbose = options.verbose;
        this.data.configFile = options.configFile;
        this.data.paths = options.paths;

        // mark required properties
        this.requiresConfig('amberc.options.amber_dir');
        // raise error on missing source files
        if (this.filesSrc.length === 0) {
            grunt.fail.fatal('No source files to compile or link.');
        }

        // create and initialize amberc
        var compiler = new amberc.Compiler(grunt.config('amberc.options.amber_dir'));

        // generate the amberc configuration out of the given target properties
        var configuration = generateCompilerConfiguration(this.data, this.filesSrc);

        // run the compiler and call the async callback once finished
        var self = this;
        compiler.main(configuration, function () {
            // signal that task has finished
            done();
        });
    });


    function generateCompilerConfiguration(data, sourceFiles) {
        var configuration = amberc.createDefaultConfiguration();

        if (data.libraries != null) {
            configuration.load = data.libraries;
        }
        if (data.configFile != null) {
            configuration.configFile = data.configFile;
        }
        if (data.paths != null) {
            configuration.paths = data.paths;
        }
        if (sourceFiles != null) {
            configuration.stFiles = sourceFiles;
        }
        if (data.amd_namespace != null) {
            configuration.amdNamespace = data.amd_namespace;
        }
        if (data.output_dir != null) {
            configuration.outputDir = data.output_dir;
        }
        if (data.jsGlobals != null) {
            configuration.jsGlobals.push.apply(configuration.jsGlobals, data.jsGlobals);
        }
        if (data.verbose != null) {
            configuration.verbose = data.verbose;
        }
        return configuration;
    }
};
