var parseOptions = function(options){
    return options;
};


var ajax = function(options){
    $.ajax({
        url: options.url,
        type: options.type,
        dataType: 'json',
        data: options.data,
        success: options.success ? options.success :
            function(){},
        fail: options.fail ? options.fail : function(){},
        error: function(){
            options.fail && options.fail({}, options);
            options.error && options.error.apply(null, arguments);
        },
        complete: options.complete ? options.complete :
            function(){}
    });
};



exports.post = function(options){
    options.type = 'POST';
    options = parseOptions(options);
    options.data = JSON.stringify(options.data);
    ajax(options);
};

exports.get = function(options){
    options.type = 'GET';
    ajax(options);
};
