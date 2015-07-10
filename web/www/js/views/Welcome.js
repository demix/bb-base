var BaseView = bb.View;

var view;

var WelcomeView = BaseView.extend({
    id: 'view-welcome',

    tpl: _.template(require('../templates/Welcome.tpl')),

    events:{
        'click header .right': 'goList',
        'click .alert': 'alert',
        'click .menu': 'menu',
        'click .pop-menu .cancel': 'closeMenu'
    },

    goList: function(){
        this.navigate('list/');
    },
    alert: function(){
        alert('你好');
    },
    menu: function(){
        this.openPopMenu();
    },
    closeMenu: function(){
        this.closePopMenu();
    },

    headerData: {
        title: 'Hello',
        right: 'List'
    },
    
    initialize: function(){
        BaseView.prototype.initialize.apply(this, arguments);

        this.addHeader();
        this.addPopMenu();
        this.render();
    }

    
});




exports.render = function(){
    if(!view)
        view = new WelcomeView();

    view.show();
};
