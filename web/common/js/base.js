require('./3rd/zepto');
window.jQuery = window.Zepto;
window._ = require('./3rd/lodash');
window.Backbone = require('./3rd/backbone');
window.Backbone.$ = $;



if(Function.prototype.bind === undefined){
    Function.prototype.bind = function ()
    {
        var fn = this,
            args = Array.prototype.slice.call(arguments),
            object = args.shift();
        return function () {
            return fn.apply(object,args.concat(Array.prototype.slice.call(arguments)));
        };
    };
}
if(($.os.android && parseInt($.os.version) < 4) ||
   ($.os.ios && parseInt($.os.version) <= 5)){
    _.isRegExp = function isRegExp(value) {
        return value instanceof RegExp;
    };
}



window.bb = {
    config: require('./config'),
    sm: require('./3rd/state-machine'),
    url: require('./url'),
    ajax: require('./ajax'),
    api: require('./api'),
    utils: require('./utils'),
    component: require('./component'),
    cookie: require('./cookie'),
    storage: require('./storage'),
    View: require('./backbone').View,
    Model: require('./backbone').Model,
    Collection: require('./backbone').Collection,
    Router: require('./backbone').Router,
    log: ENV_DEBUG ? Function.prototype.bind.call(console.log, console) : function(){}
};
