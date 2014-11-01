module.exports = function (grunt) {
    /**
     Example Gruntfile.js entry:

     amberconfig: {
       options: {
         root_dir: process.cwd(), //optional
       },
       app: {
         dest: 'config.js' //required
       }
     }
     */

    grunt.registerMultiTask('amdconfig', 'Build amd config of AMD project', function () {
        // mark task as async task
        var done = this.async();

        var options = this.options({
            root_dir: '.'
        });

        if (this.files.length === 0) {
            grunt.fail.warn('No destination file specified.');
        }
        if (this.files.length > 1) {
            grunt.fail.warn('Only one destination file supported.');
        }

        require('../lib/config.js').writeConfig(options.root_dir, this.files[0].dest, function (err) {
            done(!err);
        })
    });
};
