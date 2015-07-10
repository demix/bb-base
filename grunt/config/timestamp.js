'use strict';



var main = {
    expand:true,
    src: [
          './build/views/**/*.html'
          ,'./build/static/js/*.js'
          ,'./build/static/css/*.css'
         ],
    dest: './build/'
};

module.exports = {
    main:main
};
