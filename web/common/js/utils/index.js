
exports.addZero = function(num, len){
    num = num.toString();
    while(num.length< len){
        num = '0' + num;
    }
    return num;
};

exports.getByteLength = function (source) {
    return String(source).replace(/[^\x00-\xff]/g, "ci").length;
};
exports.subByte = function (source, length, tail) {
    source = String(source);
    tail = tail || '';
    if (length < 0 || this.getByteLength(source) <= length) {
        return source + tail;
    }

    source = source.substr(0,length).replace(/([^\x00-\xff])/g,"\x241 ")
        .substr(0,length)
        .replace(/[^\x00-\xff]$/,"")
        .replace(/([^\x00-\xff]) /g,"\x241");
    return source + tail;

};

exports.escape = function (source) {
    return String(source)
        .replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
};

