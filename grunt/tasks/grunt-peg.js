module.exports = function(grunt) {

  var PEG = require('pegjs');

  /**
    Full config looks like this:
    pegjs: {
       my_parser: {
         options: {                       // optional
           trackLineAndColumn: true,      // default: false
           cache: true,                   // default: false
           export_var: 'smalltalk.parser' // default: module.exports
         },
         src: 'parser.pegjs',
         dest: 'parser.js',
       }
     },
   */
  grunt.registerMultiTask('peg', 'Generate JavaScript parser from PEG.js grammar description', function() {
    var options = this.options({
      cache: false,
      trackLineAndColumn: false,
      export_var: 'module.exports'
    });
    var parser = PEG.buildParser(grunt.file.read(this.data.src), options);
    var content = options.export_var + ' = ' + parser.toSource() + ';\n';
    grunt.file.write(this.data.dest, content);
  });
};
