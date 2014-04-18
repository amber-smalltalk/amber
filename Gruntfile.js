module.exports = function(grunt) {
  var path = require('path');

  grunt.loadNpmTasks('amber-dev');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['amberc:cli']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*!\n <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n License: <%= pkg.license.type %> \n*/\n'
    },

    amberc: {
      options: {
        amber_dir: path.normalize(path.join(__dirname, "node_modules", "amber"))
      },
      amber_tests: {
        output_dir : 'src',
        src: ['src/Kernel-Tests.st', 'src/Compiler-Tests.st', 'src/SUnit-Tests.st'],
        libraries: ['SUnit']
      },
      cli: {
        output_dir: 'cli/src',
        src: ['cli/src/AmberCli.st'],
        libraries: [
            'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
            'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser',
            'SUnit', 'Kernel-ImportExport',
            'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'
        ],
        main_class: 'AmberCli',
        output_name: '../support/amber-cli',
        amd_namespace: 'amber_cli'
      }
    },

    jshint: {
      cli: ['cli/src/*.js', 'cli/support/*.js']
    }
  });
};
