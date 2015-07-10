'use strict';

var browserifyTask = require('./grunt/task/browserify');
var lessTask = require('./grunt/task/less');
var tsTask = require('./grunt/task/timestamp');
var replaceTask = require('./grunt/task/replace');
var swigTask = require('./grunt/task/swig');


var testip = '118.192.75.247';
var onlineip = '118.192.87.155';
module.exports = function(grunt){



    grunt.initConfig({
        "pkg": grunt.file.readJSON('package.json'),
        "browserify": require('./grunt/config/browserify'),
        "ts": require('./grunt/config/timestamp'),
        "copy": require('./grunt/config/copy'),
        "cssmin": require('./grunt/config/cssmin'),
        "less": require('./grunt/config/less'),
        "uglify": require('./grunt/config/uglify'),
        "swig": require('./grunt/config/swig'),
        "clean": require('./grunt/config/clean'),
        "replace": require('./grunt/config/replace'),
        "jshint": require('./grunt/config/jshint'),
        "shell": require('./grunt/config/shell'),
        "watch":require('./grunt/config/watch')
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('delete-build', function() {
        if (grunt.file.exists('build')) {
            grunt.file.delete('build');
        }
    });

    grunt.registerTask('mk-build', function() {
        if (!grunt.file.exists('build')) {
            grunt.file.mkdir('build');
        }
    });



    grunt.registerMultiTask('browserify', browserifyTask);
    grunt.registerMultiTask('less', lessTask);
    grunt.registerMultiTask('ts', tsTask);
    grunt.registerMultiTask('replace', replaceTask);
    grunt.registerMultiTask('swig', swigTask);

    grunt.registerTask('base' , ['delete-build', 'mk-build', 'copy:main', 'jshint:main']);

    grunt.registerTask('default' , ['base', 'browserify:online' , 'less:online', 'cssmin:main',  'swig', 'uglify:main','ts:main', 'replace:main' , 'clean:main']);


};
