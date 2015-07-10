'use strict';

var grunt = require('grunt');
var path = require('path');
var fs = require('fs');

module.exports = function(){
    var config = this.data;
    var done = this.async();

    var files = grunt.file.expand(config.src);

    
    var dones = 0;
    var checkDone = function(){
        dones ++;
        if(dones >= files.length)
            done();
    };

    if(!files.length){
        done();
        return;
    }

    files.forEach(function(file){
        console.log("Replace file " + file );
        var fcontent = fs.readFileSync(file).toString();

        if(config.base){
            fcontent = fcontent.replace(/src=['"]\/(.+?)['"]/g , 'src="'+ config.base +'/$1"');
            fcontent = fcontent.replace(/<link (.*?)href=['"]\/(.+?)['"]/g , '<link $1href="'+ config.base +'/$2"');
            fcontent = fcontent.replace(/url\(['"]?\/(.+?)['"]?\)/g , 'url\("'+ config.base +'/$1"\)');
        }

        grunt.file.write( file, fcontent );
        checkDone();
        
    });
};


