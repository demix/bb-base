'use strict';

var main = {
    expand:true,
    src:[
        'build/*',
        '!build/views',
        '!build/static',
        '!build/assets',
        'build/assets/temp'
    ]
};


module.exports = {
    main:main
};
