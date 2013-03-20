module.exports = function(grunt) {

  grunt.loadTasks('./grunt/tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-image-embed');
//  grunt.loadNpmTasks('grunt-contrib-mincss');

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
        src: 'js/parser.pegjs',
        dest: 'js/parser.js',
      }
    },

    amberc: {
      _config: {
        amber_dir: process.cwd(),
        closure_jar: ''
      },
      all: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Kernel-Objects.st', 'Kernel-Classes.st', 'Kernel-Methods.st', 'Kernel-Collections.st',
              'Kernel-Exceptions.st', 'Kernel-Transcript.st', 'Kernel-Announcements.st',
              'Importer-Exporter.st', 'Compiler-Exceptions.st', 'Compiler-Core.st', 'Compiler-AST.st',
              'Compiler-IR.st', 'Compiler-Inlining.st', 'Compiler-Semantic.st',
              'Canvas.st', 'SUnit.st', 'IDE.st',
              'Kernel-Tests.st', 'Compiler-Tests.st', 'SUnit-Tests.st'
              ],
        deploy: true
      },
      amber_kernel: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Kernel-Objects.st', 'Kernel-Classes.st', 'Kernel-Methods.st', 'Kernel-Collections.st',
              'Kernel-Exceptions.st', 'Kernel-Transcript.st', 'Kernel-Announcements.st'],
        deploy: true
      },
      amber_compiler: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Importer-Exporter.st', 'Compiler-Exceptions.st', 'Compiler-Core.st', 'Compiler-AST.st',
              'Compiler-IR.st', 'Compiler-Inlining.st', 'Compiler-Semantic.st'],
        output_name: 'Compiler',
        deploy: true
      },
      amber_canvas: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Canvas.st', 'SUnit.st'],
        deploy: true
      },
      amber_IDE: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['IDE.st'],
        libraries: ['Canvas'],
        deploy: true
      },
      amber_tests: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Kernel-Tests.st', 'Compiler-Tests.st', 'SUnit-Tests.st'],
        libraries: ['SUnit']
      },
      amber_test_runner: {
        working_dir: 'test',
        src: ['Test.st'],
        libraries: [
        'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
        'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser',
        'SUnit',
        'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'],
        output_name: 'amber_test_runner'
      },
      amber_dev: {
        working_dir: 'js',
        src: [
              'Compiler-Exceptions.js', 'Compiler-Core.js', 'Compiler-AST.js',
              'Compiler-IR.js', 'Compiler-Inlining.js', 'Compiler-Semantic.js',
              'Canvas.js', 'IDE.js', 'SUnit.js',
              'Kernel-Tests.js', 'Compiler-Tests.js', 'SUnit-Tests.js'],
        output_name: 'amber_dev'
      },
      server: {
        working_dir: 'server',
        src: ['FileServer.st'],
        main_class: 'FileServer',
        output_name: 'server'
      },
      repl: {
        working_dir: 'repl',
        src: ['REPL.st'],
        main_class: 'Repl',
        output_name: 'amber'
      }
    },

    jshint: {
      amber: ['js/*.js'],
      server: ['server/*.js'],
      repl: ['repl/*.js'],
      tests: ['test/*.js'],
      grunt: ['grunt.js', 'grunt/**/*.js']
    },
/*
    concat: {
      deploy: {
        src: ['tmp/amber-compiled.deploy.js'],
        dest: 'dist/amber-<%= pkg.version %>.deploy.js'
      },

      css: {
        src: [
          'css/amber.css',
          'js/lib/CodeMirror/codemirror.css',
          'js/lib/CodeMirror/amber.css'
        ],
        dest: 'tmp/amber.css'
      },

      dev: {
        src: [
          'js/lib/jQuery/jquery-ui-1.8.16.custom.min.js',
          'js/lib/jQuery/jquery.textarea.js',
          'js/lib/CodeMirror/codemirror.js',
          'js/lib/CodeMirror/smalltalk.js',
          'tmp/amber-compiled.js',
          'tmp/css.js'
        ],
        dest: 'dist/amber-<%= pkg.version %>.js'
      }
    },

    imageEmbed: {
      dev: {
        src: ['tmp/amber.css'],
        dest: 'tmp/amber-images.css',
        options: {baseDir: 'public'}
      }
    },

    mincss: {
      dev: {
        src: ['tmp/amber-images.css'],
        dest: 'tmp/amber.min.css'
      }
    },

    css2js: {
      dev: {
        src: 'tmp/amber.min.css',
        dest: 'tmp/css.js'
      }
    },

    min: {
      deploy: {
        src: 'dist/amber-<%= pkg.version %>.deploy.js',
        dest: 'dist/amber-<%= pkg.version %>.deploy.min.js'
      }
    }
*/
  });
};
