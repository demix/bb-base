'use strict';

var main = {
    expand:true,
    cwd: './build/static/js/',
    src:['*.js', '*/*.js','!lib.js'],
    dest: './build/static/js/',
    options: {
        beautify: true
    }
};

var html = {
    expand:true,
    cwd: './build/html/',
    src:['**/*.js'],
    dest: './build/html/'
};



module.exports = {
    main:main,
    html:html
};
