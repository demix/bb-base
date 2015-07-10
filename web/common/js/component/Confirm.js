

var Confirm = Backbone.View.extend({
    id: 'ConfirmDialog',
    className: 'confirm-dialog dialog',

    tpl: require('../templates/Confirm.tpl'),

    events: {
        'click .dialog-footer .ok': 'confirm',
        'click .dialog-footer .cancel': 'cancel'
        
    },
    
    defaultTheme: {
        cancel: {
            color: '',
            text: '取消'
        },
        confirm: {
            color: '',
            text: '确定'
        }
    },

    initialize: function(){
        this.$el.html(_.template(this.tpl, {}));
        this.$ct = this.$el.find('.dialog-body');
        $(document.body).append(this.$el);

        bb.app && bb.app.on('route', function(){
            this.hide();
        }.bind(this));
    },
    update: function(text, theme, onConfirm, onCancel){
        if(arguments.length < 4) {
            onCancel = onConfirm;
            onConfirm = theme;
            theme = {};
        }
        this.$ct.html(text);

        onConfirm && (this.onConfirm = onConfirm);
        onCancel && (this.onCancel = onCancel);

        var themeCancel = theme.cancel || this.defaultTheme.cancel;
        this.$el.find('.cancel').html(themeCancel.text).css('color', themeCancel.color);
        var themeConfirm = theme.confirm || this.defaultTheme.confirm;
        this.$el.find('.ok').html(themeConfirm.text).css('color', themeConfirm.color);
    },
    confirm: function(){
        if(this.onConfirm()){
            this.hide();
        }
    },
    cancel: function(){
        this.onCancel();
        this.hide();
    },
    onConfirm: function(){
        return true;
    },
    onCancel: function(){},
    show: function(){
        this.$el.show();
    },
    hide: function(){
        this.$el.hide();
    }
});


var confirm;
window.confirm = module.exports = function(){
    if(!confirm){
        confirm = new Confirm();
    }

    confirm.update.apply(confirm, arguments);
    confirm.show();
};

window.confirm.hide = module.exports.hide = function(){
    confirm && confirm.hide();
};
