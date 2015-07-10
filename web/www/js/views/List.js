var BaseView = bb.View;

var view;

var ListView = BaseView.extend({
    id: 'view-list',
    anim: 'slide',

    tpl: _.template(require('../templates/List.tpl')),

    events:{},
    headerData: {
        title: 'List'
    },

    initialize: function(){
        BaseView.prototype.initialize.apply(this, arguments);

        this.addHeader();
        this.render();
    }

    
});




exports.render = function(){
    if(!view)
        view = new ListView();

    view.show();
};
