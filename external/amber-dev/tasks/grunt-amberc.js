module.exports = function(grunt) {

  var path = require('path');
  var fs = require('fs');
  var amberc = require('../lib/amberc.js');

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
         library_dirs: ['dir1', '/usr/local/js'], // optional
         verbose: true                            // optional
       },
       helloWorld: {
         // this 'options' object is optional as well as all parameters inside it
         // they can be used to override the global 'options'
         options: {
           library_dirs: ['dir1', '/usr/local/js'], // optional
           verbose: true
         },
         src: ['projects/HelloWorld/src/HelloWorld.st'], // REQUIRED
         output_dir: 'projects/HelloWorld/src',  // optional
         libraries: 'Web',                       // optional
         jsGlobals: ['global1', 'global2'],     // optional
         main_class: 'HelloWorld',              // optional
         output_name: 'helloWorld',             // optional
         amd_namespace: 'MyNamespace',          // optional (default: 'amber')
         main_file: 'myMain.js',                // optional
         output_suffix: 'mySuffix',             // optional
         library_suffix: '-0.9'                 // optional
       },
     },

   */
  grunt.registerMultiTask('amberc', 'Compile Smalltalk files with the amberc compiler', function() {
    // mark task as async task
    var done = this.async();

    var options = this.options({
      amber_dir: undefined,
      library_dirs: [],
      verbose: grunt.option('verbose') || false
    });
    this.data.verbose = options.verbose;
    this.data.library_dirs = options.library_dirs;

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
    compiler.main(configuration, function(){
      // signal that task has finished
      done();
    });
  });


  function generateCompilerConfiguration(data, sourceFiles) {
    var configuration = amberc.createDefaultConfiguration();
    var parameters = [];

    var libraries = data.libraries;
    if (undefined !== libraries) {
      configuration.load = libraries;
    }
    var library_dirs = data.library_dirs;
    if (undefined !== library_dirs) {
      configuration.jsLibraryDirs = library_dirs;
    }
    var mainClass = data.main_class;
    if (undefined !== mainClass) {
      configuration.main = mainClass;
    }
    var mainFile = data.main_file;
    if (undefined !== mainFile) {
      configuration.mainfile = mainFile;
    }
    var outputSuffix = data.output_suffix;
    if (undefined !== outputSuffix) {
      configuration.suffix = outputSuffix;
      configuration.suffix_used = outputSuffix;
    }
    var librarySuffix = data.library_suffix;
    if (undefined !== librarySuffix) {
      configuration.loadsuffix = librarySuffix;
      configuration.suffix_used = librarySuffix;
    }
    if (undefined !== sourceFiles) {
      sourceFiles.forEach(function(currentItem){
        var fileSuffix = path.extname(currentItem);
        switch (fileSuffix) {
          case '.st':
            configuration.stFiles.push(currentItem);
          break;
          case '.js':
            configuration.jsFiles.push(currentItem);
          break;
        }
      });
    }
    var outputName = data.output_name;
    if (undefined !== outputName) {
      configuration.program = outputName;
    }
    var amdNamespace = data.amd_namespace;
    if (undefined !== amdNamespace) {
      configuration.amd_namespace = amdNamespace;
    }
    if (undefined !== data.output_dir) {
      configuration.output_dir = data.output_dir;
    }
    if (undefined !== data.jsGlobals) {
      configuration.jsGlobals.push.apply(configuration.jsGlobals, data.jsGlobals);
    }
    configuration.verbose = data.verbose;
    return configuration;
  }
};
