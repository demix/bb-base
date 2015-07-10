var oriLength = 0,
    historyStack = [];

var Router = Backbone.Router.extend({
    _length: 0,
    initialize: function(){
        this.on('route', this.routeChange, this);
        historyStack.push(this.routes[Backbone.history.getHash()]);
    },
    getCurrentAction: function(){
        var currentRoute = this.routes[Backbone.history.getFragment()];
        if(this._length === 0 ){
            return 'init';
        }
        if(this._length > oriLength){
            oriLength = this._length;
            return 'forward';
        }

        //现在只有通过history.go(-1) 或者浏览器前进后退发生的行为了
        //如果与记录栈最后一个相等，默认为进入吧。。也有问题，比如[list, index, list] 的情况
        if(historyStack[historyStack.length -1 ] == currentRoute){
            return 'forward';
        } else {
            return 'backward';
        }

        
        return '';
    },
    routeChange: function(route){
    },
    navigate: function(url){
        this._length ++;
        historyStack.push(this.routes[url]);
        Backbone.Router.prototype.navigate.apply(this, arguments);
    }
});


module.exports = Router;
