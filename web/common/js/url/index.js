module.exports = {
    queryToJson: function(url) {
        url = url || location.search || location.hash;
        var query = url.substr(url.lastIndexOf('?') + 1),
            params = query.split('&'),
            len = params.length,
            result = {},
            i = 0,
            key, value, item, param;

        for (; i < len; i++) {
            if (!params[i]) {
                continue;
            }
            param = params[i].split('=');
            key = param[0];
            value = param[1];

            item = result[key];
            if ('undefined' == typeof item) {
                result[key] = value;
            } else if (item instanceof Array) {
                item.push(value);
            } else {
                result[key] = [item, value];
            }
        }

        return result;
    }
};
