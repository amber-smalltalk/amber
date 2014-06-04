var path = require('path');

module.exports = function(grunt) {

  grunt.loadTasks('./internal/grunt-tasks');
  grunt.loadNpmTasks('amber-dev');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', ['peg', 'amberc:all']);
  grunt.registerTask('amberc:all', ['amberc:core', 'amberc:cli', 'amberc:helios']);
  grunt.registerTask('test', ['amberc:test_runner', 'execute:test_runner', 'clean:test_runner']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*!\n <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n License: <%= pkg.license.type %> \n*/\n'
    },

    peg: {
      amber_parser: {
        options: {
          cache: true,
          export_var: 'globals.SmalltalkParser'
        },
        src: 'support/parser.pegjs',
        dest: 'support/parser.js',
      }
    },

    amberc: {
      options: {
        amber_dir: process.cwd(),
        closure_jar: ''
      },
      core: {
        output_dir : 'src',
        src: ['src/Kernel-Objects.st', 'src/Kernel-Classes.st', 'src/Kernel-Methods.st', 'src/Kernel-Collections.st',
              'src/Kernel-Infrastructure.st', 'src/Kernel-Exceptions.st', 'src/Kernel-Transcript.st', 'src/Kernel-Announcements.st',
              'src/Kernel-ImportExport.st', 'src/Compiler-Exceptions.st', 'src/Compiler-Core.st', 'src/Compiler-AST.st',
              'src/Compiler-IR.st', 'src/Compiler-Inlining.st', 'src/Compiler-Semantic.st', 'src/Compiler-Interpreter.st',
              'src/Web.st', 'src/SUnit.st', 'src/IDE.st',
              'src/Kernel-Tests.st', 'src/Compiler-Tests.st', 'src/SUnit-Tests.st',
              'src/Benchfib.st', 'src/Examples.st'
              ],
        jsGlobals: ['navigator']
      },
      helios: {
        output_dir : 'support/helios/src',
        src: ['support/helios/src/Helios-Core.st', 'support/helios/src/Helios-Exceptions.st', 'support/helios/src/Helios-Announcements.st',
              'support/helios/src/Helios-KeyBindings.st', 'support/helios/src/Helios-Layout.st',
              'support/helios/src/Helios-Commands-Core.st', 'support/helios/src/Helios-Commands-Tools.st', 'support/helios/src/Helios-Commands-Browser.st',
              'support/helios/src/Helios-References.st', 'support/helios/src/Helios-Inspector.st', 'support/helios/src/Helios-Browser.st',
              'support/helios/src/Helios-Transcript.st', 'support/helios/src/Helios-Workspace.st', 'support/helios/src/Helios-Debugger.st',
              'support/helios/src/Helios-Workspace-Tests.st'
              ],
        libraries: ['Web', 'SUnit'],
        amd_namespace: 'helios',
        jsGlobals: ['navigator']
      },
      amber_kernel: {
        output_dir : 'src',
        src: ['src/Kernel-Objects.st', 'src/Kernel-Classes.st', 'src/Kernel-Methods.st', 'src/Kernel-Collections.st',
              'src/Kernel-Infrastructure.st', 'src/Kernel-Exceptions.st', 'src/Kernel-Transcript.st', 'src/Kernel-Announcements.st']
      },
      amber_web: {
        output_dir : 'src',
        src: ['src/Web.st', 'src/SUnit.st']
      },
      amber_IDE: {
        output_dir : 'src',
        src: ['src/IDE.st'],
        libraries: ['Web']
      },
      amber_tests: {
        output_dir : 'src',
        src: ['src/Kernel-Tests.st', 'src/Compiler-Tests.st', 'src/SUnit-Tests.st'],
        libraries: ['SUnit']
      },
      cli: {
        output_dir: 'external/amber-cli/src',
        src: ['external/amber-cli/src/AmberCli.st'],
        libraries: [
          'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
          'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser',
          'SUnit', 'Kernel-ImportExport',
          'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'
        ],
        main_class: 'AmberCli',
        output_name: '../support/amber-cli',
        amd_namespace: 'amber_cli'
      },
      dev: {
        output_dir: 'external/amber-dev/lib',
        src: ['external/amber-dev/lib/Test.st']
      },
      test_runner: {
        src: ['node_modules/amber-dev/lib/Test.st'],
        libraries: [
        'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
        'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser',
        'SUnit', 'Kernel-ImportExport',
        'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'],
        main_class: 'NodeTestRunner',
        output_name: 'test_runner'
      }
    },

    execute: {
      test_runner: {
        src: ['test_runner.js']
      }
    },

    clean: {
      test_runner: ['test_runner.js']
    },

    jshint: {
      amber: ['src/*.js'],
      cli: ['external/amber-cli/src/*.js', 'external/amber-cli/support/*.js'],
      dev: ['external/amber-dev/lib/*.js'],
      grunt: ['Gruntfile.js', 'internal/grunt-tasks/*.js', 'external/amber-dev/tasks/*.js']
    }
  });
};
