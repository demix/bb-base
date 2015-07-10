'use strict';

var grunt = require('grunt');

var main = {
    cwd: 'web/',
    src:[
         '**'
        ],
    dest:'build/',
    expand:true
};


module.exports = {
    main:main
};
