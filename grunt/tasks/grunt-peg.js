module.exports = function(grunt) {

  var PEG = require('pegjs');

  /**
     Full config looks like this:
    pegjs: {
       my_parser: {
         src: 'parser.pegjs',        // REQUIRED
         dest: 'parser.js',          // REQUIRED
         trackLineAndColumn: true,      // optional (default: false)
         cache: true,                   // optional (default: false)
         export_var: 'smalltalk.parser' // optional (default: module.exports)
       }
     },
   */
  grunt.registerMultiTask('pegjs', 'Generate JavaScript parser from PEG.js grammar description', function() {
    var pegOptions = {
      cache: this.data.cache || false,
      trackLineAndColumn: this.data.trackLineAndColumn || false
    };
    var export_var = this.data.export_var || 'module.exports';
    var parser = PEG.buildParser(grunt.file.read(this.data.src), pegOptions);
    var content = export_var + ' = ' + parser.toSource() + ';\n';
    grunt.file.write(this.data.dest, content);
  });
};
