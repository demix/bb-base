
var Menu = Backbone.View.extend({
    id: 'MenuDialog',
    className: 'menu-dialog dialog',

    tpl: _.template(require('../templates/Menu.tpl')),

    events: {
        'click .dialog-body p': 'handleClick',
        'click': 'handleClose'
    },

    _items: [],

    handleClick: function(e){
        var idx = +$(e.target).data('idx');
        var cb = this._items[idx][1];
        cb && cb();
    },

    handleClose: function(e){
        if(e.target.id == this.id){
            this.hide();
        }
    },

    initialize: function(){
        $(document.body).append(this.$el);

        bb.app && bb.app.on('route', function(){
            this.hide();
        }.bind(this));
    },
    update: function(title, items){
        this._items = items;
        this.$el.html(this.tpl({
            title: title,
            items: items
        }));
    },
    show: function(){
        this.$el.show();
    },
    hide: function(){
        this.$el.hide();
    }
});
var menu;
window.menu = module.exports = function(){
    if(!menu){
        menu = new Menu();
    }

    menu.update.apply(menu, arguments);
    menu.show();
};


window.menu.hide = module.exports.hide = function(){
    menu && menu.hide();
};
