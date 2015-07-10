'use strict';



var main = {
    src: [
        './build/views/**/*.html',
        './build/static/css/*.css',
        './build/static/js/*.js'

    ],
    dest: './build/',
    base: '/bb-base'
};


module.exports = {
    main:main
};
