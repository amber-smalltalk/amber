module.exports = function(grunt) {
  grunt.loadTasks('../../tasks/');

  grunt.registerTask('default',['amberc']);
  
  var assert = require('assert');

  grunt.initConfig({

    amberc: {
        options: {
            amber_dir: '../../../',
            closure_jar: '',
            verbose: 1, // Override built in setting to 1
            printConfigAndStop: true
        },
        test1: { // Test task options setting
            src: ['./Gruntfile.js'],
            test_return: function(value) {assert(value.verbose == 1,"verbose (set by task options) should be 1!");},
        },
        test2: { // Test target options setting
            options: {verbose: 2}, // Set it here to 2
            src: ['./Gruntfile.js'],
            test_return: function(value) {assert(value.verbose == 2,"verbose (set by target options) should be 2!");},
        },
        test3: { // Test target as a property setting
            verbose: 3, // Set it here to 3
            src: ['./Gruntfile.js'],
            test_return: function(value) {assert(value.verbose == 3,"verbose set by target property should be 3!");},
        }   
    }
    
    });
};