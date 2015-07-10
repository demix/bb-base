
var Alert = Backbone.View.extend({
    id: 'AlertDialog',
    className: 'alert-dialog dialog',

    tpl: require('../templates/Alert.tpl'),

    events: {
        'click .dialog-footer .ok': 'hide'
    },

    defaultTheme: {
        confirm: {
            color: '',
            text: '确定'
        }
    },

    status: 'hide',
    queue: [],
    
    initialize: function(){
        this.$el.html(_.template(this.tpl, {}));
        this.$ct = this.$el.find('.dialog-body');
        $(document.body).append(this.$el);

        bb.app && bb.app.on('route', function(){
            this.hide();
        }.bind(this));
    },
    update: function(text, theme){
        if(this.status == 'show'){
            this.queue.push([text, theme]);
            return;
        }
        
        this.$ct.html(text);
        var confirmTheme = (theme && theme.confirm) || this.defaultTheme.confirm;

        this.$el.find('.ok').html(confirmTheme.text).css('color', confirmTheme.color);
    },
    show: function(){
        this.$el.show();
        this.status = 'show';
    },
    hide: function(){
        this.$el.hide();
        this.status = 'hide';

        if(this.queue.length){
            this.update.apply(this, this.queue.shift());
            this.show();
        }
    }
});
var alert;
window.alert = module.exports = function(){
    if(!alert){
        alert = new Alert();
    }

    alert.update.apply(alert, arguments);
    alert.show();
};
