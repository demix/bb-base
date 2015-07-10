

exports.get = function(name){
    var data = localStorage.getItem(name) || '';
    try{
        data = JSON.parse(data);
    }catch(e){}
    return data;
};


exports.remove = function(name){
    localStorage.removeItem(name);
};

exports.set = function(name , data){
    if(typeof data == 'object') {
        data = JSON.stringify(data);
    }

    localStorage.setItem(name, data);
};
