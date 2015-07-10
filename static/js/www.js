!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j;
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a);
            }, k, k.exports, a, b, c, d);
        }
        return c[g].exports;
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e;
}({
    1: [ function(a, b, c) {
        var d = bb.Router.extend({
            routes: {
                "": "index",
                "list/": "list"
            },
            index: a("./views/Welcome").render,
            list: a("./views/List").render
        }), e = new d();
        bb.app = e, Backbone.history.start({
            root: "/www/"
        });
    }, {
        "./views/List": 4,
        "./views/Welcome": 5
    } ],
    2: [ function(a, b, c) {
        b.exports = "fjlsdjfsdklfjlasfjlasdfjlsadjfs\n";
    }, {} ],
    3: [ function(a, b, c) {
        b.exports = 'fjdkl\n<br/>\n<br/>\n\n<a href="#list/">To List by A Tag</a>\n\n\n<br/>\n<br/>\n\n\n<button class="alert">alert</button>\n\n\n<br/>\n<br/>\n\n\n<button class="menu">Menu</button>\n';
    }, {} ],
    4: [ function(a, b, c) {
        var d, e = bb.View, f = e.extend({
            id: "view-list",
            anim: "slide",
            tpl: _.template(a("../templates/List.tpl")),
            events: {},
            headerData: {
                title: "List"
            },
            initialize: function() {
                e.prototype.initialize.apply(this, arguments), this.addHeader(), this.render();
            }
        });
        c.render = function() {
            d || (d = new f()), d.show();
        };
    }, {
        "../templates/List.tpl": 2
    } ],
    5: [ function(a, b, c) {
        var d, e = bb.View, f = e.extend({
            id: "view-welcome",
            tpl: _.template(a("../templates/Welcome.tpl")),
            events: {
                "click header .right": "goList",
                "click .alert": "alert",
                "click .menu": "menu",
                "click .pop-menu .cancel": "closeMenu"
            },
            goList: function() {
                this.navigate("list/");
            },
            alert: function() {
                alert("你好");
            },
            menu: function() {
                this.openPopMenu();
            },
            closeMenu: function() {
                this.closePopMenu();
            },
            headerData: {
                title: "Hello",
                right: "List"
            },
            initialize: function() {
                e.prototype.initialize.apply(this, arguments), this.addHeader(), this.addPopMenu(), 
                this.render();
            }
        });
        c.render = function() {
            d || (d = new f()), d.show();
        };
    }, {
        "../templates/Welcome.tpl": 3
    } ]
}, {}, [ 1 ]);