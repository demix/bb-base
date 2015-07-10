
exports.get=function(name) {
    var expr = new RegExp("(^| )" + name + "=([^;]*)(;|\x24)"),
        result = expr.exec(document.cookie);
    if (result) {
        return result[2] || null;
    }
    return null;
};
exports.set =function(name, value, options) {
    options = options || {};
    var expires = options.expires;
    if ("number" == typeof options.expires) {
        expires = new Date();
        expires.setTime(expires.getTime() + options.expires);
    }
    document.cookie = name + "=" + value + ("; path=" + (options.path ? options.path : "/")) + (expires ? "; expires=" + expires.toGMTString() : "") + (options.domain ? "; domain=" + options.domain : "") + (options.secure ? "; secure" : "");
};
exports.remove = function(name, options) {
    options = options || {};
    options.expires = new Date(0);
    this.set(name, "", options);
};
