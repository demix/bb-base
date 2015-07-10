'use strict';

var less = require('less');
var grunt = require('grunt');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

module.exports = function(){
    var config = this.data;
    var done = this.async();

    var files = grunt.file.expand(config.src);

    var options = {

    };

    var dones = 0;
    var checkDone = function(){
        dones ++;
        if(dones >= files.length)
            done();
    };

    files.forEach(function(file){
        grunt.log.writeln('LessCSS for ' + file);

        var file2 = file.split('/');
        var filename = file2.pop();
        var parser = new(less.Parser)({
            paths: [file2.join('/')], 
            filename: filename 
        });
        fs.readFile(file, function(err, data){
            less.render(data.toString(), {
                paths: [file2.join('/')],
                sourceMap: {sourceMapFileInline: config.sourceMap}
            }).then(function(output){
                var reg = /build\/(.+?)\/less\/(.+?).less/;
                var result = file.match(reg);

                var appname = result[1], tplname = result[2];
                if(tplname == 'main'){
                    file = path.join('build', 'static', 'css', appname + '.css');
                } else {
                    file = path.join('build', 'static', 'css', appname, tplname + '.css');
                }


                grunt.file.write( file , output.css );
                checkDone();
            });
            
        });
            
    });
};


