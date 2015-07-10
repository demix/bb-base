'use strict';

var _ = require('lodash');
var grunt = require('grunt');

var debug = {
    src: [
        './build/*/js/index.js',
        './build/share/js/*.js',
        './build/pc/js/*.js'
        //,'!./build/common/js/index.js'
    ],
    dest: './build/static/js',
    debug:true
};

var online = _.merge(_.clone(debug) , {
    debug:false
});

module.exports = {
    debug: debug,
    online: online
};
