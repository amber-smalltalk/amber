module.exports = function(grunt) {

  var path = require('path');
  var fs = require('fs');
  var amberc = require('../../bin/amberc.js');

  /**
     Full config looks like this:
     amberc: {
       _config: {
         amber_dir: process.cwd(),     // REQUIRED
         closure_jar: ''               // optional
       },
       helloWorld: {
         src: ['projects/HelloWorld/st/HelloWorld.st'], // REQUIRED
         output_dir: 'projects/HelloWorld/js',  // optional
         main_class: 'HelloWorld',              // optional
         output_name: 'helloWorld',            // optional
         libraries: 'Canvas',                  // optional
         init: 'myInit',                       // optional
         main_file: 'myMain.js',               // optional
         deploy: true,                         // optional
         output_suffix: 'mySuffix',            // optional
         library_suffix: '-0.9',               // optional
         verbose: true                         // optional
       },
     },

   */
  grunt.registerMultiTask('amberc', 'Compile Smalltalk files with the amberc compiler', function() {
    // mark required properties
    this.requiresConfig('amberc._config.amber_dir');
    this.requiresConfig(['amberc', this.target, 'src']);

    // mark task as async task
    var done = this.async();

    // create and initialize amberc
    var compiler = new amberc.Compiler(grunt.config('amberc._config.amber_dir'), grunt.config('amberc._config.closure_jar'));

    // generate the amberc configuration out of the given target properties
    var configuration = generateCompilerConfiguration(this.data, grunt.config('amberc._config.amber_dir'));

    // run the compiler
    // change back to the old working directory and call the async callback once finished
    var self = this;
    compiler.main(configuration, function(){
      // signal that task has finished
      done();
    });
  });


  function generateCompilerConfiguration(data, amber_dir) {
    var configuration = amberc.createDefaults(amber_dir);
    var parameters = [];

    var libraries = data.libraries;
    if (undefined !== libraries) {
      configuration.load = libraries;
    }
    var initFile = data.init;
    if (undefined !== initFile) {
      configuration.init = initFile;
    }
    var mainClass = data.main_class;
    if (undefined !== mainClass) {
      configuration.main = mainClass;
    }
    var mainFile = data.main_file;
    if (undefined !== initFile) {
      configuration.mainfile = mainFile;
    }
    if (true === data.deploy) {
      configuration.deploy = true;
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
    if (undefined !== data.output_dir) {
    	configuration.output_dir = data.output_dir;
    }
    if (true === data.verbose) {
    	configuration.verbose = true;
    }
    return configuration;
  }
};
