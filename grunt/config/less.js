'use strict';

var _ = require('lodash');

var debug = {
    src: [
        './build/*/less/main.less',
        './build/share/less/*.less'
    ],
    ext:'.css',
    expand:true,
    sourceMap: true
};

var online = _.merge(_.clone(debug) , {
    cleancss:true,
    sourceMap: false
});

module.exports = {
    debug: debug,
    online: online
};
