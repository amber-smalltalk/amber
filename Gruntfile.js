module.exports = function(grunt) {

  grunt.loadTasks('./grunt/tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['peg', 'amberc:all']);

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
      all: {
        output_dir : 'src',
        src: ['src/Kernel-Objects.st', 'src/Kernel-Classes.st', 'src/Kernel-Methods.st', 'src/Kernel-Collections.st',
              'src/Kernel-Infrastructure.st', 'src/Kernel-Exceptions.st', 'src/Kernel-Transcript.st', 'src/Kernel-Announcements.st',
              'src/Kernel-ImportExport.st', 'src/Compiler-Exceptions.st', 'src/Compiler-Core.st', 'src/Compiler-AST.st',
              'src/Compiler-IR.st', 'src/Compiler-Inlining.st', 'src/Compiler-Semantic.st', 'src/Compiler-Interpreter.st',
              'src/Web.st', 'src/SUnit.st', 'src/IDE.st',
              'src/Kernel-Tests.st', 'src/Compiler-Tests.st', 'src/SUnit-Tests.st',
              'src/Helios-Core.st', 'src/Helios-Exceptions.st', 'src/Helios-Announcements.st',
              'src/Helios-KeyBindings.st', 'src/Helios-Layout.st',
              'src/Helios-Commands-Core.st', 'src/Helios-Commands-Tools.st', 'src/Helios-Commands-Browser.st',
              'src/Helios-References.st', 'src/Helios-Inspector.st', 'src/Helios-Browser.st',
              'src/Helios-Transcript.st', 'src/Helios-Workspace.st', 'src/Helios-Debugger.st',
              'src/Helios-Workspace-Tests.st',
              'src/Benchfib.st', 'src/Examples.st', 'src/Spaces.st'
              ],
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
      amber_test_runner: {
        src: ['test/Test.st'],
        libraries: [
        'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
        'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser',
        'SUnit', 'Kernel-ImportExport',
        'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'],
        main_class: 'NodeTestRunner',
        output_name: 'test/amber_test_runner'
      },
      amber_cli: {
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
      amber: ['src/*.js'],
      server: ['server/*.js'],
      repl: ['repl/*.js'],
      tests: ['test/*.js'],
      grunt: ['grunt.js', 'grunt/**/*.js']
    }
  });
};
