'use strict';

var main = {
    cwd:'./build/',
    src: ['*/*.tpl'],
    dest: './build/views',
    reg: /(.+)\/(.+)\.tpl/
};


module.exports = {
    main:main
};
