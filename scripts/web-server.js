'use strict';

var swig = require('swig');
var express = require('express');
var path = require('path');
var browserify = require('browserify');
var stringify = require('stringify');
var less = require('less');
var fs = require('fs');
var watchify = require('watchify');
var cliArgs = require('command-line-args');
var livereload = require('livereload');

var _ = require('lodash');

var app = express();

var appbase = path.join(__dirname, '..', 'web');


var cli = cliArgs([
    {name: "no-livereload", type: Boolean, alias: 'n', description: 'Disable Livereload'},
    {name: 'help', type: Boolean, description: 'Print usage instruction.'}
]);

var options = cli.parse();

if(options.help){
    console.log(cli.getUsage());
    process.exit(-1);
}



app.engine('tpl', swig.renderFile);
app.set('view engine', 'tpl');
app.set('views', appbase);
app.set('view cache', false);
swig.setDefaults({
    cache: false
});

app.use('/assets', express.static(path.join(appbase, 'assets')));


var targetFolders = [];
fs.readdirSync(appbase).forEach(function(item){
    if(['common', 'assets'].indexOf(item) == -1)
        targetFolders.push(item);
});


app.get('/', function(req, res){
    var html = swig.render(fs.readFileSync(path.join(__dirname, 'sys', 'welcome.tpl')).toString(), {locals: {
        apps: targetFolders
    }});

    res.send(html);
});


var jsWatching = {};
app.get(/^\/static\/js\/(.+?).js/, function(req, res) {
    var truepath = req.params[0].split('/'),
        fpath, distpath;
    
    var appname = truepath[0], tplname = truepath[1] || 'index';
    fpath = path.join(appbase, appname, 'js', tplname + '.js'),
    distpath = path.join(appbase, '..', 'static', 'js', req.params[0] + '.js');

    if(jsWatching[distpath] && fs.existsSync(distpath)){
        res.type('application/javascript');
        res.send(fs.readFileSync(distpath));
        return;
    }
    
    if (!fs.existsSync(fpath)) {
        res.status(404).end();
        return;
    }

    var brs = browserify(_.merge({
        entries:fpath
    },{
        debug: true
    }));
    brs.transform(stringify(['.tpl', '.svg']));
    var w = watchify(brs);

    var update = function(res){
        var t = +new Date();
        w.bundle(function(err, src){
            if(err){
                console.log(err.stack);
                res && res.status(500).end();
                return;
            }
            console.log('Watchify for '+ fpath +', cost ' + (+new Date() - t) + 'ms');
            src = src.toString().replace(/ENV_DEBUG/g ,
                                         process.env.NODE_ENV == 'production'  ? false : true
                                        );
            src = src.toString().replace(/ENV_LOCAL/g , true);
            fs.writeFile(distpath, src);
            jsWatching[distpath] = 1;
            if(res){
                res.type('application/javascript');
                res.send(src);
            }
        });
    };
    
    w.on('update', function(){
        update();
    });
    update(res);
});

app.get(/^\/static\/css\/(.+?).css/, function(req, res) {
    var truepath = req.params[0].split('/'),
        fpath;
    
    var appname = truepath[0], tplname = truepath[1] || 'main';
    fpath = path.join(appbase, appname, 'less', tplname + '.less');

    if (!fs.existsSync(fpath)) {
        res.status(404).end();
    } else {
        fs.readFile(path.join(fpath), function(err, data){
            less.render(data.toString(), {
                paths: [path.dirname(fpath)],
                sourceMap: {sourceMapFileInline: true}
            }).then(function(output){
                res.type('text/css');
                res.send(output.css);
            }, function(error){
                error && console.log(error);
            });

        });
    }
});


app.get(/^\/(.+?)\/(.*?)\.html$/, function(req, res, next) {
    var appname = req.params[0],
        tplname = req.params[1];
    if(fs.existsSync(path.join(appbase, appname, tplname)) &&
       fs.statSync(path.join(appbase, appname, tplname)).isFile()){
        next();
        return;
    }
    if(!fs.existsSync(path.join(appbase, appname))){
        res.status(404).end();
        return;
    }
    if(!tplname || !fs.existsSync(path.join(appbase, appname, tplname + '.tpl'))){
        tplname = 'index';
    }

    var data = {
        appname: appname,
        tplname: tplname
    };

    var mockfile = path.join(appbase, 'common', 'parent.json'),
        mockdata;
    if (fs.existsSync(mockfile)) {
        mockdata = eval('(' + fs.readFileSync(mockfile).toString() + ')');
        _.merge(data, mockdata);
    }
    mockfile = path.join(appbase , appname, tplname ,'.json');
    if (fs.existsSync(mockfile)) {
        mockdata = eval('(' + fs.readFileSync(mockfile).toString() + ')');
        _.merge(data, mockdata, mockdata);
    }

    var filepath = path.join(appbase, appname, tplname + '.tpl');
    swig.renderFile(filepath, data, function(err, output){
        if(err){
            res.status(500).send();
            return;
        }
        res.type('text/html');
        res.send(output);
    });
});


app.use('/', express.static(appbase));



//var port = parseInt('9'+ Math.random() * 999);

app.set('port', process.env.PORT || 9999);
app.listen(app.get('port'));
console.log('Server start at port ' + app.get('port'));


if( !options['no-livereload']){
    var server = livereload.createServer({exts: ['less', 'js']});
    targetFolders.forEach(function(item){
        server.watch(path.join(appbase, item, 'less'));
    });

    server.watch(path.join(__dirname, '..', 'static'));
    console.log('Livereload also start.');
}
