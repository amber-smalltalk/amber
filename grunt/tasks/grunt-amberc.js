module.exports = function(grunt) {

  var path = require('path');
  var fs = require('fs');
  var amberc = require('../../bin/amberc.js');

  /**
     Full config looks like this:
     amberc: {
       _config: {
         amber_dir: process.cwd(),     // REQUIRED
         closure_jar: '',              // optional
         verbose: true                 // optional
       },
       helloWorld: {
         src: ['projects/HelloWorld/st/HelloWorld.st'], // REQUIRED
         output_dir: 'projects/HelloWorld/js',  // optional
         libraries: 'Canvas',                   // optional
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
    // mark required properties
    this.requiresConfig('amberc.options.amber_dir');
    this.requiresConfig(['amberc', this.target, 'src']);

    var options = this.options({
      amber_dir: undefined,
      closure_jar: '',
      verbose: false
    });


    // mark task as async task
    var done = this.async();

    // create and initialize amberc
    var compiler = new amberc.Compiler(grunt.config('amberc.options.amber_dir'), grunt.config('amberc.options.closure_jar'));

    // generate the amberc configuration out of the given target properties
    var configuration = generateCompilerConfiguration(this.data, options, grunt.config('amberc.options.amber_dir'));
    if (typeof(configuration.test_return) == 'function') {
        // When test_return is a function call to preempt compile.main(configuration) function.
        // Call test_return(configuration) with the configuration passed to compiler.main()
        // preempt means we never really call compiler.main().
        grunt.util.hooker.hook(compiler,"main", {
            pre: function() {
                if (typeof(arguments[0]) !== 'undefined') {
                    configuration.test_return(arguments[0]);
                }
                if (typeof(arguments[1]) === 'function') {
                    arguments[1]();
                }
                return grunt.util.hooker.preempt();
            }
        });
    }
    // run the compiler and call the async callback once finished
    var self = this;
    compiler.main(configuration, function(){
      // signal that task has finished
      done();
    });
  });
  
  function generateCompilerConfiguration(data, options, amber_dir) {
    var configuration = amberc.createDefaults(amber_dir);
    var parameters = [];
    configuration.test_return = data.test_return;

    var libraries = data.libraries;
    if (undefined !== libraries) {
      configuration.load = libraries;
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
    var sourceFiles = data.src;
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
    configuration.verbose = data.verbose || options.verbose;
    return configuration;
  }
};
