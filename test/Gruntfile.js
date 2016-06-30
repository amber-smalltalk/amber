module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadTasks('../grunt/tasks/');
  grunt.loadNpmTasks('grunt-newer');  
  grunt.registerTask('default', ['watch']);
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


  var srcFiles = "Test.st";
  
  grunt.config.init({
    nodetest: {
        all: {
            files: {src:['amber_test_runner.js']} 
        }                
    },
    amberc: {
        options: {
            amber_dir: '../',
            closure_jar: ''
        },

        all: {            
            libraries: [
                'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
                'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', '@parser',
                'SUnit', 'Importer-Exporter',
                'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'],
            output_name: 'amber_test_runner',                                         
            src: [srcFiles]
        }
    },
    watch: {
        all: {
            files: srcFiles,
            tasks:['any-newer:amberc:all','nodetest:all']
        }
    }
    });
};