module.exports = function(grunt) {

  var path = require('path');
  var amberc = require('../../bin/amberc.js');

  /**
     Full config looks like this:
     amberc: {
       _config: {
         amber_dir: process.cwd(),     // REQUIRED
         closure_jar: ''               // optional
       },
       helloWorld: {
         src: ['HelloWorld.st'],             // REQUIRED
         working_dir: 'projects/HelloWorld', // optional
         main_class: 'HelloWorld',           // optional
         output_name: 'helloWorld',          // optional
         libraries: 'Canvas',                // optional
         init: 'myInit',                     // optional
         main_file: 'myMain.js',             // optional
         deploy: true,                       // optional
         output_suffix: 'mySuffix',          // optional
         library_suffix: '-0.9',             // optional
       },
     },

   */
  grunt.registerMultiTask('amberc', 'Compile Smalltalk files with the amberc compiler', function() {
    // mark required properties
    this.requiresConfig('amberc._config.amber_dir');
    this.requiresConfig(['amberc', this.target, 'src']);

    // change working directory if the working_dir property is set on the target
    var current_dir = process.cwd();
    var working_dir = this.data.working_dir;
    if (undefined !== working_dir) {
      grunt.file.setBase(working_dir);
    }

    // mark task as async task
    var done = this.async();
    
    // create and initialize amberc
    var compiler = new amberc.Compiler(grunt.config('amberc._config.amber_dir'), grunt.config('amberc._config.closure_jar'));

    // generate the amberc parameter string out of the given target properties
    var parameters = generateParameterArray(this.data);
    
    // run the compiler
    // change back to the old working directory and call the async callback once finished
    compiler.main(parameters, function(){
      grunt.file.setBase(current_dir);
      done();
    });
  });


  function generateParameterArray(data) {
    var parameters = [];

    var libraries = data.libraries;
    if (undefined !== libraries) {
      parameters.push('-l');
      parameters.push(libraries.join(','));
    }
    var initFile = data.init;
    if (undefined !== initFile) {
      parameters.push('-i');
      parameters.push(initFile);
    }
    var mainClass = data.main_class;
    if (undefined !== mainClass) {
      parameters.push('-m');
      parameters.push(mainClass);
    }
    var mainFile = data.main_file;
    if (undefined !== initFile) {
      parameters.push('-M');
      parameters.push(mainFile);
    }
    if (true === data.deploy) {
      parameters.push('-d');
    }
    var outputSuffix = data.output_suffix;
    if (undefined !== outputSuffix) {
      parameters.push('-s');
      parameters.push(outputSuffix);
    }
    var librarySuffix = data.library_suffix;
    if (undefined !== librarySuffix) {
      parameters.push('-S');
      parameters.push(librarySuffix);
    }
    var sourceFiles = data.src;
    if (undefined !== sourceFiles) {
      parameters.push.apply(parameters, sourceFiles);
    }
    var outpuName = data.output_name;
    if (undefined !== outpuName) {
      parameters.push(outpuName);
    }
    return parameters;
  }

};
