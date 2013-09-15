module.exports = function(grunt) {
  grunt.loadTasks('../grunt/tasks/');

  grunt.registerTask('default', ['amberc:amber_test_runner','nodetest:all']);

  grunt.registerMultiTask('nodetest', 'Run a sub-gruntfile.', function() {
    var path = require('path');
    grunt.util.async.forEachSeries(this.filesSrc, function(nodefile, next) {
      grunt.util.spawn({
        cmd: 'node',
        args: [path.resolve(nodefile)],
      }, function(error, result) {
        if (error) {
          grunt.log.error(result.stdout).writeln();
          next(new Error('Error running nodefile "' + nodefile + '".'));
        } else {
          grunt.verbose.ok(result.stdout);
          next();
        }
      });
    }, this.async());
  });
  
  grunt.initConfig({
    nodetest: {
        all: {
            files: {src:['amber_test_runner.js']} 
        }                
    },
    amberc: {
        options: {
            amber_dir: '../',
            closure_jar: '',
            verbose: true
        },

        amber_test_runner: {            
            libraries: [
                'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
                'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', '@parser',
                'SUnit', 'Importer-Exporter',
                'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'],
            output_name: 'amber_test_runner',                                         
            src: ['Test.st']
        }
    }});
};