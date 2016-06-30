module.exports = function(grunt) {
  grunt.loadTasks('../../grunt/tasks/');

  grunt.registerTask('default',['amberc']);

  grunt.initConfig({

    amberc: {
        options: {
            amber_dir: '../../',
            closure_jar: '',
        },
        test1: { // Test task options setting
            options: {
                verbose: true
            },
            src: ['../Test.st'],
            output_dir: '../',
            libraries: [
            'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
            'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', '@parser',
            'SUnit', 'Importer-Exporter',
            'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'],
            output_name: 'amber_test_runner'
        }
    }
    
    });
};