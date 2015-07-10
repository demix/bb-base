'use strict';

var main = {
    expand:true,
    cwd: './build/static/css/',
    src:['*.css', '*/*.css'],
    dest: './build/static/css/'
};

var html={
    expand: true,
    cwd: './build/html/',
    src:['**/*.css'],
    dest:'./build/html/'
};


module.exports = {
    main:main,
    html:html
};
