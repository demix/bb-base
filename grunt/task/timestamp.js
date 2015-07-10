'use strict';

var grunt = require('grunt');
var path = require('path');
var fs = require('fs');
var crypto = require('crypto');


var addZero = function(num){
    while(num.toString().length < 3){
        num = '0'+num;
    }
    return num;
};

var md5tonum = function(hex){
    var num = parseInt(hex,16);
    
    return [addZero((num/Math.pow(10,10))%997), addZero((num%Math.pow(10,10))%997)].join('');
};


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
        grunt.log.writeln('Add md5 for ' + file);
        
        var fcontent = fs.readFileSync(file).toString();

        var reg = /((src=|href=|url\()['"]?)(.+?)['"\)\ ]/ig,result;
        while((result = reg.exec(fcontent))){
            var asset_url = result[3];
            if(asset_url.indexOf('http') == 0)continue;
            if(asset_url.indexOf('?t=')!=-1) continue;
            var filepath = path.join(process.cwd(),path.dirname(file),'.',asset_url);
            if(!fs.existsSync(filepath))
                filepath = path.join(process.cwd(),'build',asset_url);
            if(!fs.existsSync(filepath))continue;
            if(fs.statSync(filepath).isDirectory())continue;
            var md5 = md5tonum(crypto.createHash('md5').update(fs.readFileSync(filepath)).digest('hex'));
            asset_url = asset_url + ((asset_url.indexOf('?') == -1) ? ('?t='+md5): ('&t='+md5));

            fcontent = fcontent.substring(0,result.index+result[1].length ) + asset_url + fcontent.substring(reg.lastIndex-1);
        }

        grunt.file.write( file, fcontent );
        checkDone();
        
    });
};


