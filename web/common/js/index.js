require('./base');


$(function(){
    require('fastclick')(document.body);


    $(document.body).on('click', 'a', function(e){
        var el = this,
            href = el.getAttribute('href');

        if(el.target != '_blank' && !+$(el).data('redirect') && href.indexOf('#') === 0){
            e && e.preventDefault();
            bb.app && bb.app.navigate(href.split('#')[1], {trigger: true});
        }
    });

    
    window.pageInit ?
        window.pageInit()
        : function(){};
});
