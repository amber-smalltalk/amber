module.exports = function(grunt) {
  grunt.registerMultiTask('css2js', 'Embed CSS into JS', function() {
    var cssContent = grunt.task.directive(grunt.file.expandFiles(this.data.src)[0], grunt.file.read);
    var content =
      'var css="' + cssContent + '";' +
      'var cssTag = document.createElement("link");' +
      'document.head = document.head || document.getElementsByTagName("head")[0];' +
      'cssTag.href = "data:text/css,"+css;' +
      'cssTag.rel = "stylesheet";' +
      'document.head.appendChild(cssTag);';

    grunt.file.write(this.data.dest, content);

    grunt.log.writeln('File "' + this.data.dest + '" created.');
  });

};