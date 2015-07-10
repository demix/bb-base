

var Toast = Backbone.View.extend({
    id: 'Toast',
    className: 'toast',

    queue: [],
    status: 'hide',
    tm: null,
    initialize: function(){
        $(document.body).append(this.$el);
        this.$ct = $('<p></p>');
        this.$el.append(this.$ct);
    },
    update: function(text){
        if(text == this.$ct.html()){
            this.show();
            return;
        }
        
        if(this.status == 'show'){
            this.queue.push(text);
            return;
        }
        this.$ct.html(text);
    },
    show: function(){
        this.$el.show();
        this.status = 'show';
        clearTimeout(this.tm);
        this.tm = setTimeout(this.hide.bind(this), 2000);
    },
    hide: function(){
        this.$el.hide();
        this.status = 'hide';

        if(this.queue.length){
            this.update(this.queue.shift());
            this.show();
        }
        
    }
});


var toast;
window.toast = module.exports = function(){
    if(!toast){
        toast = new Toast();
    }
    toast.update.apply(toast, arguments);
    toast.show();
};
