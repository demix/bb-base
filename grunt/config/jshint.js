
module.exports = {
    main:{
        cwd: 'build/',
        src:[
            '**/*.js',
            '!**/3rd/*.js'
        ],
        expand:true,


        options: {
            expr:true,
            laxcomma: true,
            sub: true,
            "-W018": true
        }
    }
};
