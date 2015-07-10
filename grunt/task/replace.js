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

    files.forEach(function(file){
        var fcontent = fs.readFileSync(file).toString();

        var reg = /{[%{].*?(\.length).*?[%}]}\n/,result;
        while((result = reg.exec(fcontent))){
            var sentence = fcontent.substring(result.index,reg.lastIndex);
            console.log(sentence)
        }
        dones = 100;checkDone();return;

        /*fcontent = fcontent.replace(/src=['"]\/(.+?)['"]/g , 'src="/templates/zz/$1"');
        fcontent = fcontent.replace(/<link (.*?)href=['"]\/(.+?)['"]/g , '<link $1href="/templates/zz/$2"');
        fcontent = fcontent.replace(/url\(['"]?\/(.+?)['"]?\)/g , 'url\("/templates/zz/$1"\)');
        fcontent = fcontent.replace(/\/admin\/static\/cover\//g , '/templates/zz/admin/static/cover/');
        */

        grunt.file.write( file, fcontent );
        checkDone();
        
    });
};


