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
          trackLineAndColumn: true,
          cache: true,
          export_var: 'smalltalk.parser'
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
        output_dir : 'js',
        src: ['st/Kernel-Objects.st', 'st/Kernel-Classes.st', 'st/Kernel-Methods.st', 'st/Kernel-Collections.st',
              'st/Kernel-Infrastructure.st', 'st/Kernel-Exceptions.st', 'st/Kernel-Transcript.st', 'st/Kernel-Announcements.st',
              'st/Importer-Exporter.st', 'st/Compiler-Exceptions.st', 'st/Compiler-Core.st', 'st/Compiler-AST.st',
              'st/Compiler-IR.st', 'st/Compiler-Inlining.st', 'st/Compiler-Semantic.st', 'st/Compiler-Interpreter.st',
              'st/Canvas.st', 'st/SUnit.st', 'st/IDE.st',
              'st/Kernel-Tests.st', 'st/Compiler-Tests.st', 'st/SUnit-Tests.st',
              'st/Helios-Core.st', 'st/Helios-Exceptions.st', 'st/Helios-Announcements.st',
              'st/Helios-KeyBindings.st', 'st/Helios-Layout.st',
              'st/Helios-Commands-Core.st', 'st/Helios-Commands-Tools.st', 'st/Helios-Commands-Browser.st',
              'st/Helios-References.st', 'st/Helios-Inspector.st', 'st/Helios-Browser.st',
              'st/Helios-Transcript.st', 'st/Helios-Workspace.st', 'st/Helios-Debugger.st',
              'st/Helios-Workspace-Tests.st',
              'st/Benchfib.st', 'st/Examples.st', 'st/Spaces.st'
              ],
        jsGlobals: ['navigator']
      },
      amber_kernel: {
        output_dir : 'js',
        src: ['st/Kernel-Objects.st', 'st/Kernel-Classes.st', 'st/Kernel-Methods.st', 'st/Kernel-Collections.st',
              'st/Kernel-Infrastructure.st', 'st/Kernel-Exceptions.st', 'st/Kernel-Transcript.st', 'st/Kernel-Announcements.st']
      },
      amber_canvas: {
        output_dir : 'js',
        src: ['st/Canvas.st', 'st/SUnit.st']
      },
      amber_IDE: {
        output_dir : 'js',
        src: ['st/IDE.st'],
        libraries: ['Canvas']
      },
      amber_tests: {
        output_dir : 'js',
        src: ['st/Kernel-Tests.st', 'st/Compiler-Tests.st', 'st/SUnit-Tests.st'],
        libraries: ['SUnit']
      },
      amber_test_runner: {
        src: ['test/Test.st'],
        libraries: [
        'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
        'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser',
        'SUnit', 'Importer-Exporter',
        'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'],
        main_class: 'NodeTestRunner',
        output_name: 'test/amber_test_runner'
      },
      amber_cli: {
        output_dir: 'cli/js',
        src: ['cli/st/AmberCli.st'],
        libraries: [
            'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
            'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser'
        ],
        main_class: 'AmberCli',
        output_name: '../support/amber-cli',
        amd_namespace: 'amber_cli'
      }
    },

    jshint: {
      amber: ['js/*.js'],
      server: ['server/*.js'],
      repl: ['repl/*.js'],
      tests: ['test/*.js'],
      grunt: ['grunt.js', 'grunt/**/*.js']
    }
  });
};
