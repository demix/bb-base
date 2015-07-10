var svg = require('../../../assets/svg/loading-spokes.svg');

var Loading = Backbone.View.extend({
    id: 'GLoading',
    className: 'global-loading',

    initialize: function(){
        $(document.body).append(this.$el);
        this.$ct = $('<p>'+svg+'</p>');
        this.$el.append(this.$ct);
    },
    show: function(){
        this.$el.show();
    },
    hide: function(){
        this.$el.hide();
    }
});


var loading;
window.loading = exports.show = function(){
    if(!loading){
        loading = new Loading();
    }
    loading.show();
    return loading;
};

window.loading.hide = exports.hide = function(){
    loading && loading.hide();
};
