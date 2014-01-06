module.exports = function(grunt) {

	var PEG = require('pegjs');

	/**
     Full config looks like this:
     pegjs: {
     my_parser: {
     options: {                       // optional
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
			output: 'source',
			export_var: 'module.exports'
		});
		var parser = PEG.buildParser(grunt.file.read(this.data.src), options);
		var content = 'define("amber_vm/parser", ["./smalltalk", "./nil"], function(smalltalk, nil) {\n'+options.export_var + ' = ' + parser + ';\n});';
		grunt.file.write(this.data.dest, content);
	});
};
