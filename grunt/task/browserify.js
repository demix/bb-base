'use strict';

var browserify = require('browserify');
var stringify = require('stringify');
var babelify = require('babelify');
var grunt = require('grunt');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

module.exports = function(){
    var config = this.data;
    var done = this.async();

    var files = grunt.file.expand(config.src);


    var options = {
        debug: config.debug
    };

    var dones = 0;
    var checkDone = function(){
        dones ++;
        if(dones >= files.length)
            done();
    };
    if(!files.length) checkDone();
    files.forEach(function(file){
        grunt.log.writeln('Browserify for ' + file);

        var reg = /\/([\w_-]*?)\/js\/(.+?)\.js/i;
        var result = file.match(reg);
        var appname = result[1],
            tplname = result[2];

        var brs = browserify(_.merge({
            entries:file
        },options));
        brs.transform(stringify(['.tpl', '.svg']));
        brs.transform(babelify, {presets: ["es2015"]})

        brs.bundle( function(err, src){
            if( err ){
                grunt.log.error(err);
                checkDone();
            }
            src = src.toString().replace(/ENV_DEBUG/g ,
                                         process.env.NODE_ENV == 'production'  ? false : true
                                        );
            src = src.toString().replace(/ENV_LOCAL/g , false);


            var finalpath;
            if(tplname == 'index'){
                finalpath = path.join( config.dest , appname + '.js' );
            } else {
                finalpath = path.join(config.dest, appname, tplname + '.js');
            }
            grunt.file.write( finalpath, src );
            

            checkDone();
        });

    });
};


