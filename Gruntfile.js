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
      options: {
        amber_dir: process.cwd(),
        closure_jar: ''
      },
      all: {
        output_dir : 'js',
        src: ['st/Kernel-Objects.st', 'st/Kernel-Classes.st', 'st/Kernel-Methods.st', 'st/Kernel-Collections.st',
              'st/Kernel-Exceptions.st', 'st/Kernel-Transcript.st', 'st/Kernel-Announcements.st',
              'st/Importer-Exporter.st', 'st/Compiler-Exceptions.st', 'st/Compiler-Core.st', 'st/Compiler-AST.st',
              'st/Compiler-IR.st', 'st/Compiler-Inlining.st', 'st/Compiler-Semantic.st',
              'st/Canvas.st', 'st/SUnit.st', 'st/IDE.st',
              'st/Kernel-Tests.st', 'st/Compiler-Tests.st', 'st/SUnit-Tests.st'
              ],
        deploy: true
      },
      amber_kernel: {
        output_dir : 'js',
        src: ['st/Kernel-Objects.st', 'st/Kernel-Classes.st', 'st/Kernel-Methods.st', 'st/Kernel-Collections.st',
              'st/Kernel-Exceptions.st', 'st/Kernel-Transcript.st', 'st/Kernel-Announcements.st'],
        deploy: true
      },
      amber_compiler: {
        output_dir : 'js',
        src: ['st/Importer-Exporter.st', 'st/Compiler-Exceptions.st', 'st/Compiler-Core.st', 'st/Compiler-AST.st',
              'st/Compiler-IR.st', 'st/Compiler-Inlining.st', 'st/Compiler-Semantic.st'],
        output_name: 'Compiler',
        deploy: true
      },
      amber_canvas: {
        output_dir : 'js',
        src: ['st/Canvas.st', 'st/SUnit.st'],
        deploy: true
      },
      amber_IDE: {
        output_dir : 'js',
        src: ['st/IDE.st'],
        libraries: ['Canvas'],
        deploy: true
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
        'SUnit',
        'Kernel-Tests', 'Compiler-Tests', 'SUnit-Tests'],
        output_name: 'test/amber_test_runner'
      },
      amber_dev: {
        src: [
              'Compiler-Exceptions.js', 'Compiler-Core.js', 'Compiler-AST.js',
              'Compiler-IR.js', 'Compiler-Inlining.js', 'Compiler-Semantic.js',
              'Canvas.js', 'IDE.js', 'SUnit.js',
              'Kernel-Tests.js', 'Compiler-Tests.js', 'SUnit-Tests.js'],
        output_name: 'js/amber_dev'
      },
      amber_cli: {
        output_dir: 'cli/js',
        src: ['cli/st/AmberCli.st'],
        libraries: [
            'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
            'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser'
        ],
        main_class: 'AmberCli',
        output_name: 'amber-cli'
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
