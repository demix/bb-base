'use strict';

var swig = require('swig');
var grunt = require('grunt');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

module.exports = function(){
    var config = this.data;
    var done = this.async();

    var files = grunt.file.expand({cwd:config.cwd},config.src);


    swig.setDefaults({cache: false});

    
    var dones = 0;
    var checkDone = function(){
        dones ++;
        if(dones >= files.length)
            done();
    };

    files.forEach(function(file){
        var appname = file.match(config.reg)[1],
        tplname = file.match(config.reg)[2];

        if(appname == 'common'){
            checkDone();
            return;
        }

        grunt.log.writeln('Render template for ' + file);

        var data = {
            appname: appname,
            tplname:tplname
        };
        //console.log('buildtype: ' + buildtype);
        var mockfile = path.join(process.cwd(),'build','common', 'parent.json'),
            mockdata;
        if (fs.existsSync(mockfile)) {
            mockdata = eval('(' + fs.readFileSync(mockfile).toString() + ')');
            _.merge(data, mockdata);
        }

        mockfile = path.join(process.cwd(),'build',appname,tplname+'.json');
        if(fs.existsSync(mockfile)){
            /*mockdata = eval('('+fs.readFileSync(mockfile).toString() +')');
            var mockdata_other = mockdata['_'+buildtype];
            delete mockdata._local;
            delete mockdata._online;
            _.merge(data,mockdata,mockdata_other);*/
            mockdata = eval('('+fs.readFileSync(mockfile).toString() +')');
            _.merge(data,mockdata);
        }

        
        swig.renderFile(path.join(process.cwd(),config.cwd,file), data , function(err , output){
            if( err ){
                grunt.log.error(err);
                checkDone();
            }
            grunt.file.write( path.join( config.dest , appname ,tplname+'.html' ), output );

            checkDone();
        });

    });
};


