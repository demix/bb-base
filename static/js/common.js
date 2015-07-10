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
        a("./base"), $(function() {
            a("fastclick")(document.body), $(document.body).on("click", "a", function(a) {
                var b = this, c = b.getAttribute("href");
                "_blank" == b.target || +$(b).data("redirect") || 0 !== c.indexOf("#") || (a && a.preventDefault(), 
                bb.app && bb.app.navigate(c.split("#")[1], {
                    trigger: !0
                }));
            }), window.pageInit ? window.pageInit() : function() {};
        });
    }, {
        "./base": 13,
        fastclick: 32
    } ],
    2: [ function(a, b, c) {
        b.exports = '<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>\n  </path>\n</svg>\n';
    }, {} ],
    3: [ function(a, b, c) {
        !function(a, b) {
            "function" == typeof define && define.amd ? define([ "underscore", "jquery", "exports" ], function(c, d, e) {
                a.Backbone = b(a, e, c, d);
            }) : "undefined" != typeof c ? b(a, c, _) : a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$);
        }(this, function(a, b, c, d) {
            var e = a.Backbone, f = [], g = (f.push, f.slice);
            f.splice;
            b.VERSION = "1.1.2", b.$ = d, b.noConflict = function() {
                return a.Backbone = e, this;
            }, b.emulateHTTP = !1, b.emulateJSON = !1;
            var h = b.Events = {
                on: function(a, b, c) {
                    if (!j(this, "on", a, [ b, c ]) || !b) return this;
                    this._events || (this._events = {});
                    var d = this._events[a] || (this._events[a] = []);
                    return d.push({
                        callback: b,
                        context: c,
                        ctx: c || this
                    }), this;
                },
                once: function(a, b, d) {
                    if (!j(this, "once", a, [ b, d ]) || !b) return this;
                    var e = this, f = c.once(function() {
                        e.off(a, f), b.apply(this, arguments);
                    });
                    return f._callback = b, this.on(a, f, d);
                },
                off: function(a, b, d) {
                    var e, f, g, h, i, k, l, m;
                    if (!this._events || !j(this, "off", a, [ b, d ])) return this;
                    if (!a && !b && !d) return this._events = void 0, this;
                    for (h = a ? [ a ] : c.keys(this._events), i = 0, k = h.length; k > i; i++) if (a = h[i], 
                    g = this._events[a]) {
                        if (this._events[a] = e = [], b || d) for (l = 0, m = g.length; m > l; l++) f = g[l], 
                        (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) && e.push(f);
                        e.length || delete this._events[a];
                    }
                    return this;
                },
                trigger: function(a) {
                    if (!this._events) return this;
                    var b = g.call(arguments, 1);
                    if (!j(this, "trigger", a, b)) return this;
                    var c = this._events[a], d = this._events.all;
                    return c && k(c, b), d && k(d, arguments), this;
                },
                stopListening: function(a, b, d) {
                    var e = this._listeningTo;
                    if (!e) return this;
                    var f = !b && !d;
                    d || "object" != typeof b || (d = this), a && ((e = {})[a._listenId] = a);
                    for (var g in e) a = e[g], a.off(b, d, this), (f || c.isEmpty(a._events)) && delete this._listeningTo[g];
                    return this;
                }
            }, i = /\s+/, j = function(a, b, c, d) {
                if (!c) return !0;
                if ("object" == typeof c) {
                    for (var e in c) a[b].apply(a, [ e, c[e] ].concat(d));
                    return !1;
                }
                if (i.test(c)) {
                    for (var f = c.split(i), g = 0, h = f.length; h > g; g++) a[b].apply(a, [ f[g] ].concat(d));
                    return !1;
                }
                return !0;
            }, k = function(a, b) {
                var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
                switch (b.length) {
                  case 0:
                    for (;++d < e; ) (c = a[d]).callback.call(c.ctx);
                    return;

                  case 1:
                    for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f);
                    return;

                  case 2:
                    for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f, g);
                    return;

                  case 3:
                    for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f, g, h);
                    return;

                  default:
                    for (;++d < e; ) (c = a[d]).callback.apply(c.ctx, b);
                    return;
                }
            }, l = {
                listenTo: "on",
                listenToOnce: "once"
            };
            c.each(l, function(a, b) {
                h[b] = function(b, d, e) {
                    var f = this._listeningTo || (this._listeningTo = {}), g = b._listenId || (b._listenId = c.uniqueId("l"));
                    return f[g] = b, e || "object" != typeof d || (e = this), b[a](d, e, this), this;
                };
            }), h.bind = h.on, h.unbind = h.off, c.extend(b, h);
            var m = b.Model = function(a, b) {
                var d = a || {};
                b || (b = {}), this.cid = c.uniqueId("c"), this.attributes = {}, b.collection && (this.collection = b.collection), 
                b.parse && (d = this.parse(d, b) || {}), d = c.defaults({}, d, c.result(this, "defaults")), 
                this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments);
            };
            c.extend(m.prototype, h, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(a) {
                    return c.clone(this.attributes);
                },
                sync: function() {
                    return b.sync.apply(this, arguments);
                },
                get: function(a) {
                    return this.attributes[a];
                },
                escape: function(a) {
                    return c.escape(this.get(a));
                },
                has: function(a) {
                    return null != this.get(a);
                },
                set: function(a, b, d) {
                    var e, f, g, h, i, j, k, l;
                    if (null == a) return this;
                    if ("object" == typeof a ? (f = a, d = b) : (f = {})[a] = b, d || (d = {}), !this._validate(f, d)) return !1;
                    g = d.unset, i = d.silent, h = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = c.clone(this.attributes), 
                    this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in f && (this.id = f[this.idAttribute]);
                    for (e in f) b = f[e], c.isEqual(l[e], b) || h.push(e), c.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b, 
                    g ? delete l[e] : l[e] = b;
                    if (!i) {
                        h.length && (this._pending = d);
                        for (var m = 0, n = h.length; n > m; m++) this.trigger("change:" + h[m], this, l[h[m]], d);
                    }
                    if (j) return this;
                    if (!i) for (;this._pending; ) d = this._pending, this._pending = !1, this.trigger("change", this, d);
                    return this._pending = !1, this._changing = !1, this;
                },
                unset: function(a, b) {
                    return this.set(a, void 0, c.extend({}, b, {
                        unset: !0
                    }));
                },
                clear: function(a) {
                    var b = {};
                    for (var d in this.attributes) b[d] = void 0;
                    return this.set(b, c.extend({}, a, {
                        unset: !0
                    }));
                },
                hasChanged: function(a) {
                    return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a);
                },
                changedAttributes: function(a) {
                    if (!a) return this.hasChanged() ? c.clone(this.changed) : !1;
                    var b, d = !1, e = this._changing ? this._previousAttributes : this.attributes;
                    for (var f in a) c.isEqual(e[f], b = a[f]) || ((d || (d = {}))[f] = b);
                    return d;
                },
                previous: function(a) {
                    return null != a && this._previousAttributes ? this._previousAttributes[a] : null;
                },
                previousAttributes: function() {
                    return c.clone(this._previousAttributes);
                },
                fetch: function(a) {
                    a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                    var b = this, d = a.success;
                    return a.success = function(c) {
                        return b.set(b.parse(c, a), a) ? (d && d(b, c, a), void b.trigger("sync", b, c, a)) : !1;
                    }, L(this, a), this.sync("read", this, a);
                },
                save: function(a, b, d) {
                    var e, f, g, h = this.attributes;
                    if (null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d = c.extend({
                        validate: !0
                    }, d), e && !d.wait) {
                        if (!this.set(e, d)) return !1;
                    } else if (!this._validate(e, d)) return !1;
                    e && d.wait && (this.attributes = c.extend({}, h, e)), void 0 === d.parse && (d.parse = !0);
                    var i = this, j = d.success;
                    return d.success = function(a) {
                        i.attributes = h;
                        var b = i.parse(a, d);
                        return d.wait && (b = c.extend(e || {}, b)), c.isObject(b) && !i.set(b, d) ? !1 : (j && j(i, a, d), 
                        void i.trigger("sync", i, a, d));
                    }, L(this, d), f = this.isNew() ? "create" : d.patch ? "patch" : "update", "patch" === f && (d.attrs = e), 
                    g = this.sync(f, this, d), e && d.wait && (this.attributes = h), g;
                },
                destroy: function(a) {
                    a = a ? c.clone(a) : {};
                    var b = this, d = a.success, e = function() {
                        b.trigger("destroy", b, b.collection, a);
                    };
                    if (a.success = function(c) {
                        (a.wait || b.isNew()) && e(), d && d(b, c, a), b.isNew() || b.trigger("sync", b, c, a);
                    }, this.isNew()) return a.success(), !1;
                    L(this, a);
                    var f = this.sync("delete", this, a);
                    return a.wait || e(), f;
                },
                url: function() {
                    var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || K();
                    return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id);
                },
                parse: function(a, b) {
                    return a;
                },
                clone: function() {
                    return new this.constructor(this.attributes);
                },
                isNew: function() {
                    return !this.has(this.idAttribute);
                },
                isValid: function(a) {
                    return this._validate({}, c.extend(a || {}, {
                        validate: !0
                    }));
                },
                _validate: function(a, b) {
                    if (!b.validate || !this.validate) return !0;
                    a = c.extend({}, this.attributes, a);
                    var d = this.validationError = this.validate(a, b) || null;
                    return d ? (this.trigger("invalid", this, d, c.extend(b, {
                        validationError: d
                    })), !1) : !0;
                }
            });
            var n = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
            c.each(n, function(a) {
                m.prototype[a] = function() {
                    var b = g.call(arguments);
                    return b.unshift(this.attributes), c[a].apply(c, b);
                };
            });
            var o = b.Collection = function(a, b) {
                b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), 
                this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({
                    silent: !0
                }, b));
            }, p = {
                add: !0,
                remove: !0,
                merge: !0
            }, q = {
                add: !0,
                remove: !1
            };
            c.extend(o.prototype, h, {
                model: m,
                initialize: function() {},
                toJSON: function(a) {
                    return this.map(function(b) {
                        return b.toJSON(a);
                    });
                },
                sync: function() {
                    return b.sync.apply(this, arguments);
                },
                add: function(a, b) {
                    return this.set(a, c.extend({
                        merge: !1
                    }, b, q));
                },
                remove: function(a, b) {
                    var d = !c.isArray(a);
                    a = d ? [ a ] : c.clone(a), b || (b = {});
                    var e, f, g, h;
                    for (e = 0, f = a.length; f > e; e++) h = a[e] = this.get(a[e]), h && (delete this._byId[h.id], 
                    delete this._byId[h.cid], g = this.indexOf(h), this.models.splice(g, 1), this.length--, 
                    b.silent || (b.index = g, h.trigger("remove", h, this, b)), this._removeReference(h, b));
                    return d ? a[0] : a;
                },
                set: function(a, b) {
                    b = c.defaults({}, b, p), b.parse && (a = this.parse(a, b));
                    var d = !c.isArray(a);
                    a = d ? a ? [ a ] : [] : c.clone(a);
                    var e, f, g, h, i, j, k, l = b.at, n = this.model, o = this.comparator && null == l && b.sort !== !1, q = c.isString(this.comparator) ? this.comparator : null, r = [], s = [], t = {}, u = b.add, v = b.merge, w = b.remove, x = !o && u && w ? [] : !1;
                    for (e = 0, f = a.length; f > e; e++) {
                        if (i = a[e] || {}, g = i instanceof m ? h = i : i[n.prototype.idAttribute || "id"], 
                        j = this.get(g)) w && (t[j.cid] = !0), v && (i = i === h ? h.attributes : i, b.parse && (i = j.parse(i, b)), 
                        j.set(i, b), o && !k && j.hasChanged(q) && (k = !0)), a[e] = j; else if (u) {
                            if (h = a[e] = this._prepareModel(i, b), !h) continue;
                            r.push(h), this._addReference(h, b);
                        }
                        h = j || h, !x || !h.isNew() && t[h.id] || x.push(h), t[h.id] = !0;
                    }
                    if (w) {
                        for (e = 0, f = this.length; f > e; ++e) t[(h = this.models[e]).cid] || s.push(h);
                        s.length && this.remove(s, b);
                    }
                    if (r.length || x && x.length) if (o && (k = !0), this.length += r.length, null != l) for (e = 0, 
                    f = r.length; f > e; e++) this.models.splice(l + e, 0, r[e]); else {
                        x && (this.models.length = 0);
                        var y = x || r;
                        for (e = 0, f = y.length; f > e; e++) this.models.push(y[e]);
                    }
                    if (k && this.sort({
                        silent: !0
                    }), !b.silent) {
                        for (e = 0, f = r.length; f > e; e++) (h = r[e]).trigger("add", h, this, b);
                        (k || x && x.length) && this.trigger("sort", this, b);
                    }
                    return d ? a[0] : a;
                },
                reset: function(a, b) {
                    b || (b = {});
                    for (var d = 0, e = this.models.length; e > d; d++) this._removeReference(this.models[d], b);
                    return b.previousModels = this.models, this._reset(), a = this.add(a, c.extend({
                        silent: !0
                    }, b)), b.silent || this.trigger("reset", this, b), a;
                },
                push: function(a, b) {
                    return this.add(a, c.extend({
                        at: this.length
                    }, b));
                },
                pop: function(a) {
                    var b = this.at(this.length - 1);
                    return this.remove(b, a), b;
                },
                unshift: function(a, b) {
                    return this.add(a, c.extend({
                        at: 0
                    }, b));
                },
                shift: function(a) {
                    var b = this.at(0);
                    return this.remove(b, a), b;
                },
                slice: function() {
                    return g.apply(this.models, arguments);
                },
                get: function(a) {
                    return null == a ? void 0 : this._byId[a] || this._byId[a.id] || this._byId[a.cid];
                },
                at: function(a) {
                    return this.models[a];
                },
                where: function(a, b) {
                    return c.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                        for (var c in a) if (a[c] !== b.get(c)) return !1;
                        return !0;
                    });
                },
                findWhere: function(a) {
                    return this.where(a, !0);
                },
                sort: function(a) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return a || (a = {}), c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)), 
                    a.silent || this.trigger("sort", this, a), this;
                },
                pluck: function(a) {
                    return c.invoke(this.models, "get", a);
                },
                fetch: function(a) {
                    a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                    var b = a.success, d = this;
                    return a.success = function(c) {
                        var e = a.reset ? "reset" : "set";
                        d[e](c, a), b && b(d, c, a), d.trigger("sync", d, c, a);
                    }, L(this, a), this.sync("read", this, a);
                },
                create: function(a, b) {
                    if (b = b ? c.clone(b) : {}, !(a = this._prepareModel(a, b))) return !1;
                    b.wait || this.add(a, b);
                    var d = this, e = b.success;
                    return b.success = function(a, c) {
                        b.wait && d.add(a, b), e && e(a, c, b);
                    }, a.save(null, b), a;
                },
                parse: function(a, b) {
                    return a;
                },
                clone: function() {
                    return new this.constructor(this.models);
                },
                _reset: function() {
                    this.length = 0, this.models = [], this._byId = {};
                },
                _prepareModel: function(a, b) {
                    if (a instanceof m) return a;
                    b = b ? c.clone(b) : {}, b.collection = this;
                    var d = new this.model(a, b);
                    return d.validationError ? (this.trigger("invalid", this, d.validationError, b), 
                    !1) : d;
                },
                _addReference: function(a, b) {
                    this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a), a.collection || (a.collection = this), 
                    a.on("all", this._onModelEvent, this);
                },
                _removeReference: function(a, b) {
                    this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this);
                },
                _onModelEvent: function(a, b, c, d) {
                    ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), 
                    b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], 
                    null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments));
                }
            });
            var r = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample" ];
            c.each(r, function(a) {
                o.prototype[a] = function() {
                    var b = g.call(arguments);
                    return b.unshift(this.models), c[a].apply(c, b);
                };
            });
            var s = [ "groupBy", "countBy", "sortBy", "indexBy" ];
            c.each(s, function(a) {
                o.prototype[a] = function(b, d) {
                    var e = c.isFunction(b) ? b : function(a) {
                        return a.get(b);
                    };
                    return c[a](this.models, e, d);
                };
            });
            var t = b.View = function(a) {
                this.cid = c.uniqueId("view"), a || (a = {}), c.extend(this, c.pick(a, v)), this._ensureElement(), 
                this.initialize.apply(this, arguments), this.delegateEvents();
            }, u = /^(\S+)\s*(.*)$/, v = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
            c.extend(t.prototype, h, {
                tagName: "div",
                $: function(a) {
                    return this.$el.find(a);
                },
                initialize: function() {},
                render: function() {
                    return this;
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this;
                },
                setElement: function(a, c) {
                    return this.$el && this.undelegateEvents(), this.$el = a instanceof b.$ ? a : b.$(a), 
                    this.el = this.$el[0], c !== !1 && this.delegateEvents(), this;
                },
                delegateEvents: function(a) {
                    if (!a && !(a = c.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for (var b in a) {
                        var d = a[b];
                        if (c.isFunction(d) || (d = this[a[b]]), d) {
                            var e = b.match(u), f = e[1], g = e[2];
                            d = c.bind(d, this), f += ".delegateEvents" + this.cid, "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d);
                        }
                    }
                    return this;
                },
                undelegateEvents: function() {
                    return this.$el.off(".delegateEvents" + this.cid), this;
                },
                _ensureElement: function() {
                    if (this.el) this.setElement(c.result(this, "el"), !1); else {
                        var a = c.extend({}, c.result(this, "attributes"));
                        this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className"));
                        var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
                        this.setElement(d, !1);
                    }
                }
            }), b.sync = function(a, d, e) {
                var f = x[a];
                c.defaults(e || (e = {}), {
                    emulateHTTP: b.emulateHTTP,
                    emulateJSON: b.emulateJSON
                });
                var g = {
                    type: f,
                    dataType: "json"
                };
                if (e.url || (g.url = c.result(d, "url") || K()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", 
                g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", 
                g.data = g.data ? {
                    model: g.data
                } : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
                    g.type = "POST", e.emulateJSON && (g.data._method = f);
                    var h = e.beforeSend;
                    e.beforeSend = function(a) {
                        return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) : void 0;
                    };
                }
                "GET" === g.type || e.emulateJSON || (g.processData = !1), "PATCH" === g.type && w && (g.xhr = function() {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                });
                var i = e.xhr = b.ajax(c.extend(g, e));
                return d.trigger("request", d, i, e), i;
            };
            var w = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent), x = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
            b.ajax = function() {
                return b.$.ajax.apply(b.$, arguments);
            };
            var y = b.Router = function(a) {
                a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
            }, z = /\((.*?)\)/g, A = /(\(\?)?:\w+/g, B = /\*\w+/g, C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            c.extend(y.prototype, h, {
                initialize: function() {},
                route: function(a, d, e) {
                    c.isRegExp(a) || (a = this._routeToRegExp(a)), c.isFunction(d) && (e = d, d = ""), 
                    e || (e = this[d]);
                    var f = this;
                    return b.history.route(a, function(c) {
                        var g = f._extractParameters(a, c);
                        f.execute(e, g), f.trigger.apply(f, [ "route:" + d ].concat(g)), f.trigger("route", d, g), 
                        b.history.trigger("route", f, d, g);
                    }), this;
                },
                execute: function(a, b) {
                    a && a.apply(this, b);
                },
                navigate: function(a, c) {
                    return b.history.navigate(a, c), this;
                },
                _bindRoutes: function() {
                    if (this.routes) {
                        this.routes = c.result(this, "routes");
                        for (var a, b = c.keys(this.routes); null != (a = b.pop()); ) this.route(a, this.routes[a]);
                    }
                },
                _routeToRegExp: function(a) {
                    return a = a.replace(C, "\\$&").replace(z, "(?:$1)?").replace(A, function(a, b) {
                        return b ? a : "([^/?]+)";
                    }).replace(B, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$");
                },
                _extractParameters: function(a, b) {
                    var d = a.exec(b).slice(1);
                    return c.map(d, function(a, b) {
                        return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null;
                    });
                }
            });
            var D = b.History = function() {
                this.handlers = [], c.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, 
                this.history = window.history);
            }, E = /^[#\/]|\s+$/g, F = /^\/+|\/+$/g, G = /msie [\w.]+/, H = /\/$/, I = /#.*$/;
            D.started = !1, c.extend(D.prototype, h, {
                interval: 50,
                atRoot: function() {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root;
                },
                getHash: function(a) {
                    var b = (a || this).location.href.match(/#(.*)$/);
                    return b ? b[1] : "";
                },
                getFragment: function(a, b) {
                    if (null == a) if (this._hasPushState || !this._wantsHashChange || b) {
                        a = decodeURI(this.location.pathname + this.location.search);
                        var c = this.root.replace(H, "");
                        a.indexOf(c) || (a = a.slice(c.length));
                    } else a = this.getHash();
                    return a.replace(E, "");
                },
                start: function(a) {
                    if (D.started) throw new Error("Backbone.history has already been started");
                    D.started = !0, this.options = c.extend({
                        root: "/"
                    }, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, 
                    this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var d = this.getFragment(), e = document.documentMode, f = G.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
                    if (this.root = ("/" + this.root + "/").replace(F, "/"), f && this._wantsHashChange) {
                        var g = b.$('<iframe src="javascript:0" tabindex="-1">');
                        this.iframe = g.hide().appendTo("body")[0].contentWindow, this.navigate(d);
                    }
                    this._hasPushState ? b.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !f ? b.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
                    this.fragment = d;
                    var h = this.location;
                    if (this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), 
                        this.location.replace(this.root + "#" + this.fragment), !0;
                        this._hasPushState && this.atRoot() && h.hash && (this.fragment = this.getHash().replace(E, ""), 
                        this.history.replaceState({}, document.title, this.root + this.fragment));
                    }
                    return this.options.silent ? void 0 : this.loadUrl();
                },
                stop: function() {
                    b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), 
                    D.started = !1;
                },
                route: function(a, b) {
                    this.handlers.unshift({
                        route: a,
                        callback: b
                    });
                },
                checkUrl: function(a) {
                    var b = this.getFragment();
                    return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))), 
                    b === this.fragment ? !1 : (this.iframe && this.navigate(b), void this.loadUrl());
                },
                loadUrl: function(a) {
                    return a = this.fragment = this.getFragment(a), c.any(this.handlers, function(b) {
                        return b.route.test(a) ? (b.callback(a), !0) : void 0;
                    });
                },
                navigate: function(a, b) {
                    if (!D.started) return !1;
                    b && b !== !0 || (b = {
                        trigger: !!b
                    });
                    var c = this.root + (a = this.getFragment(a || ""));
                    if (a = a.replace(I, ""), this.fragment !== a) {
                        if (this.fragment = a, "" === a && "/" !== c && (c = c.slice(0, -1)), this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c); else {
                            if (!this._wantsHashChange) return this.location.assign(c);
                            this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), 
                            this._updateHash(this.iframe.location, a, b.replace));
                        }
                        return b.trigger ? this.loadUrl(a) : void 0;
                    }
                },
                _updateHash: function(a, b, c) {
                    if (c) {
                        var d = a.href.replace(/(javascript:|#).*$/, "");
                        a.replace(d + "#" + b);
                    } else a.hash = "#" + b;
                }
            }), b.history = new D();
            var J = function(a, b) {
                var d, e = this;
                d = a && c.has(a, "constructor") ? a.constructor : function() {
                    return e.apply(this, arguments);
                }, c.extend(d, e, b);
                var f = function() {
                    this.constructor = d;
                };
                return f.prototype = e.prototype, d.prototype = new f(), a && c.extend(d.prototype, a), 
                d.__super__ = e.prototype, d;
            };
            m.extend = o.extend = y.extend = t.extend = D.extend = J;
            var K = function() {
                throw new Error('A "url" property or function must be specified');
            }, L = function(a, b) {
                var c = b.error;
                b.error = function(d) {
                    c && c(a, d, b), a.trigger("error", a, d, b);
                };
            };
            return b;
        });
    }, {} ],
    4: [ function(a, b, c) {
        (function(a) {
            (function() {
                function d(a, b) {
                    if (a !== b) {
                        var c = a === a, d = b === b;
                        if (a > b || !c || "undefined" == typeof a && d) return 1;
                        if (b > a || !d || "undefined" == typeof b && c) return -1;
                    }
                    return 0;
                }
                function e(a, b, c) {
                    if (b !== b) return q(a, c);
                    c = (c || 0) - 1;
                    for (var d = a.length; ++c < d; ) if (a[c] === b) return c;
                    return -1;
                }
                function f(a) {
                    return "function" == typeof a || !1;
                }
                function g(a, b) {
                    var c = a.length;
                    for (a.sort(b); c--; ) a[c] = a[c].c;
                    return a;
                }
                function h(a) {
                    return "string" == typeof a ? a : null == a ? "" : a + "";
                }
                function i(a) {
                    return a.charCodeAt(0);
                }
                function j(a, b) {
                    for (var c = -1, d = a.length; ++c < d && -1 < b.indexOf(a.charAt(c)); ) ;
                    return c;
                }
                function k(a, b) {
                    for (var c = a.length; c-- && -1 < b.indexOf(a.charAt(c)); ) ;
                    return c;
                }
                function l(a, b) {
                    return d(a.a, b.a) || a.b - b.b;
                }
                function m(a, b) {
                    for (var c = -1, e = a.a, f = b.a, g = e.length; ++c < g; ) {
                        var h = d(e[c], f[c]);
                        if (h) return h;
                    }
                    return a.b - b.b;
                }
                function n(a) {
                    return La[a];
                }
                function o(a) {
                    return Ma[a];
                }
                function p(a) {
                    return "\\" + Pa[a];
                }
                function q(a, b, c) {
                    var d = a.length;
                    for (b = c ? b || d : (b || 0) - 1; c ? b-- : ++b < d; ) {
                        var e = a[b];
                        if (e !== e) return b;
                    }
                    return -1;
                }
                function r(a) {
                    return a && "object" == typeof a || !1;
                }
                function s(a) {
                    return 160 >= a && a >= 9 && 13 >= a || 32 == a || 160 == a || 5760 == a || 6158 == a || a >= 8192 && (8202 >= a || 8232 == a || 8233 == a || 8239 == a || 8287 == a || 12288 == a || 65279 == a);
                }
                function t(a, b) {
                    for (var c = -1, d = a.length, e = -1, f = []; ++c < d; ) a[c] === b && (a[c] = R, 
                    f[++e] = c);
                    return f;
                }
                function u(a) {
                    for (var b = -1, c = a.length; ++b < c && s(a.charCodeAt(b)); ) ;
                    return b;
                }
                function v(a) {
                    for (var b = a.length; b-- && s(a.charCodeAt(b)); ) ;
                    return b;
                }
                function w(a) {
                    return Na[a];
                }
                function x(a) {
                    function b(a) {
                        if (r(a) && !(Ge(a) || a instanceof La)) {
                            if (a instanceof s) return a;
                            if (Kd.call(a, "__chain__") && Kd.call(a, "__wrapped__")) return pc(a);
                        }
                        return new s(a);
                    }
                    function c() {}
                    function s(a, b, c) {
                        this.__wrapped__ = a, this.__actions__ = c || [], this.__chain__ = !!b;
                    }
                    function La(a) {
                        this.__wrapped__ = a, this.__actions__ = null, this.__dir__ = 1, this.__dropCount__ = 0, 
                        this.__filtered__ = !1, this.__iteratees__ = null, this.__takeCount__ = me, this.__views__ = null;
                    }
                    function Ma() {
                        this.__data__ = {};
                    }
                    function Na(a) {
                        var b = a ? a.length : 0;
                        for (this.data = {
                            hash: ce(null),
                            set: new Xd()
                        }; b--; ) this.push(a[b]);
                    }
                    function Oa(a, b) {
                        var c = a.data;
                        return ("string" == typeof b || $c(b) ? c.set.has(b) : c.hash[b]) ? 0 : -1;
                    }
                    function Pa(a, b) {
                        var c = -1, d = a.length;
                        for (b || (b = vd(d)); ++c < d; ) b[c] = a[c];
                        return b;
                    }
                    function Ra(a, b) {
                        for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a); ) ;
                        return a;
                    }
                    function Sa(a, b) {
                        for (var c = -1, d = a.length; ++c < d; ) if (!b(a[c], c, a)) return !1;
                        return !0;
                    }
                    function Ua(a, b) {
                        for (var c = -1, d = a.length, e = -1, f = []; ++c < d; ) {
                            var g = a[c];
                            b(g, c, a) && (f[++e] = g);
                        }
                        return f;
                    }
                    function Va(a, b) {
                        for (var c = -1, d = a.length, e = vd(d); ++c < d; ) e[c] = b(a[c], c, a);
                        return e;
                    }
                    function Wa(a) {
                        for (var b = -1, c = a.length, d = le; ++b < c; ) {
                            var e = a[b];
                            e > d && (d = e);
                        }
                        return d;
                    }
                    function Xa(a, b, c, d) {
                        var e = -1, f = a.length;
                        for (d && f && (c = a[++e]); ++e < f; ) c = b(c, a[e], e, a);
                        return c;
                    }
                    function Ya(a, b, c, d) {
                        var e = a.length;
                        for (d && e && (c = a[--e]); e--; ) c = b(c, a[e], e, a);
                        return c;
                    }
                    function Za(a, b) {
                        for (var c = -1, d = a.length; ++c < d; ) if (b(a[c], c, a)) return !0;
                        return !1;
                    }
                    function $a(a, b) {
                        return "undefined" == typeof a ? b : a;
                    }
                    function _a(a, b, c, d) {
                        return "undefined" != typeof a && Kd.call(d, c) ? a : b;
                    }
                    function ab(a, b, c) {
                        var d = Le(b);
                        if (!c) return cb(b, a, d);
                        for (var e = -1, f = d.length; ++e < f; ) {
                            var g = d[e], h = a[g], i = c(h, b[g], g, a, b);
                            (i === i ? i === h : h !== h) && ("undefined" != typeof h || g in a) || (a[g] = i);
                        }
                        return a;
                    }
                    function bb(a, b) {
                        for (var c = -1, d = a.length, e = hc(d), f = b.length, g = vd(f); ++c < f; ) {
                            var h = b[c];
                            e ? (h = parseFloat(h), g[c] = fc(h, d) ? a[h] : y) : g[c] = a[h];
                        }
                        return g;
                    }
                    function cb(a, b, c) {
                        c || (c = b, b = {});
                        for (var d = -1, e = c.length; ++d < e; ) {
                            var f = c[d];
                            b[f] = a[f];
                        }
                        return b;
                    }
                    function db(a, c, d) {
                        var e = typeof a;
                        if ("function" == e) {
                            if (e = "undefined" != typeof c) {
                                var e = b.support, f = !(e.funcNames ? a.name : e.funcDecomp);
                                if (!f) {
                                    var g = Id.call(a);
                                    e.funcNames || (f = !wa.test(g)), f || (f = Da.test(g) || _c(a), ve(a, f));
                                }
                                e = f;
                            }
                            a = e ? Kb(a, c, d) : a;
                        } else a = null == a ? rd : "object" == e ? xb(a) : "undefined" == typeof c ? Ab(a + "") : yb(a + "", c);
                        return a;
                    }
                    function eb(a, b, c, d, e, f, g) {
                        var h;
                        if (c && (h = e ? c(a, d, e) : c(a)), "undefined" != typeof h) return h;
                        if (!$c(a)) return a;
                        if (d = Ge(a)) {
                            if (h = cc(a), !b) return Pa(a, h);
                        } else {
                            var i = Md.call(a), j = i == X;
                            if (i != Z && i != S && (!j || e)) return Ja[i] ? ec(a, i, b) : e ? a : {};
                            if (h = dc(j ? {} : a), !b) return cb(a, h, Le(a));
                        }
                        for (f || (f = []), g || (g = []), e = f.length; e--; ) if (f[e] == a) return g[e];
                        return f.push(a), g.push(h), (d ? Ra : qb)(a, function(d, e) {
                            h[e] = eb(d, b, c, e, a, f, g);
                        }), h;
                    }
                    function fb(a, b, c, d) {
                        if ("function" != typeof a) throw new Ed(Q);
                        return Yd(function() {
                            a.apply(y, Db(c, d));
                        }, b);
                    }
                    function gb(a, b) {
                        var c = a ? a.length : 0, d = [];
                        if (!c) return d;
                        var f = -1, g = bc(), h = g == e, i = h && 200 <= b.length ? we(b) : null, j = b.length;
                        i && (g = Oa, h = !1, b = i);
                        a: for (;++f < c; ) if (i = a[f], h && i === i) {
                            for (var k = j; k--; ) if (b[k] === i) continue a;
                            d.push(i);
                        } else 0 > g(b, i) && d.push(i);
                        return d;
                    }
                    function hb(a, b) {
                        var c = a ? a.length : 0;
                        if (!hc(c)) return qb(a, b);
                        for (var d = -1, e = oc(a); ++d < c && !1 !== b(e[d], d, e); ) ;
                        return a;
                    }
                    function ib(a, b) {
                        var c = a ? a.length : 0;
                        if (!hc(c)) return rb(a, b);
                        for (var d = oc(a); c-- && !1 !== b(d[c], c, d); ) ;
                        return a;
                    }
                    function jb(a, b) {
                        var c = !0;
                        return hb(a, function(a, d, e) {
                            return c = !!b(a, d, e);
                        }), c;
                    }
                    function kb(a, b) {
                        var c = [];
                        return hb(a, function(a, d, e) {
                            b(a, d, e) && c.push(a);
                        }), c;
                    }
                    function lb(a, b, c, d) {
                        var e;
                        return c(a, function(a, c, f) {
                            return b(a, c, f) ? (e = d ? c : a, !1) : void 0;
                        }), e;
                    }
                    function mb(a, b, c, d) {
                        d = (d || 0) - 1;
                        for (var e = a.length, f = -1, g = []; ++d < e; ) {
                            var h = a[d];
                            if (r(h) && hc(h.length) && (Ge(h) || Xc(h))) {
                                b && (h = mb(h, b, c));
                                var i = -1, j = h.length;
                                for (g.length += j; ++i < j; ) g[++f] = h[i];
                            } else c || (g[++f] = h);
                        }
                        return g;
                    }
                    function nb(a, b, c) {
                        var d = -1, e = oc(a);
                        c = c(a);
                        for (var f = c.length; ++d < f; ) {
                            var g = c[d];
                            if (!1 === b(e[g], g, e)) break;
                        }
                        return a;
                    }
                    function ob(a, b, c) {
                        var d = oc(a);
                        c = c(a);
                        for (var e = c.length; e--; ) {
                            var f = c[e];
                            if (!1 === b(d[f], f, d)) break;
                        }
                        return a;
                    }
                    function pb(a, b) {
                        nb(a, b, gd);
                    }
                    function qb(a, b) {
                        return nb(a, b, Le);
                    }
                    function rb(a, b) {
                        return ob(a, b, Le);
                    }
                    function sb(a, b) {
                        for (var c = -1, d = b.length, e = -1, f = []; ++c < d; ) {
                            var g = b[c];
                            Ie(a[g]) && (f[++e] = g);
                        }
                        return f;
                    }
                    function tb(a, b, c) {
                        var d = -1, e = "function" == typeof b, f = a ? a.length : 0, g = hc(f) ? vd(f) : [];
                        return hb(a, function(a) {
                            var f = e ? b : null != a && a[b];
                            g[++d] = f ? f.apply(a, c) : y;
                        }), g;
                    }
                    function ub(a, b, c, d, e, f) {
                        if (a === b) return 0 !== a || 1 / a == 1 / b;
                        var g = typeof a, h = typeof b;
                        if ("function" != g && "object" != g && "function" != h && "object" != h || null == a || null == b) a = a !== a && b !== b; else a: {
                            var g = ub, h = Ge(a), i = Ge(b), j = T, k = T;
                            h || (j = Md.call(a), j == S ? j = Z : j != Z && (h = dd(a))), i || (k = Md.call(b), 
                            k == S ? k = Z : k != Z && dd(b));
                            var l = j == Z, i = k == Z, k = j == k;
                            if (!k || h || l) if (j = l && Kd.call(a, "__wrapped__"), i = i && Kd.call(b, "__wrapped__"), 
                            j || i) a = g(j ? a.value() : a, i ? b.value() : b, c, d, e, f); else if (k) {
                                for (e || (e = []), f || (f = []), j = e.length; j--; ) if (e[j] == a) {
                                    a = f[j] == b;
                                    break a;
                                }
                                e.push(a), f.push(b), a = (h ? Yb : $b)(a, b, g, c, d, e, f), e.pop(), f.pop();
                            } else a = !1; else a = Zb(a, b, j);
                        }
                        return a;
                    }
                    function vb(a, b, c, d, e) {
                        var f = b.length;
                        if (null == a) return !f;
                        for (var g = -1, h = !e; ++g < f; ) if (h && d[g] ? c[g] !== a[b[g]] : !Kd.call(a, b[g])) return !1;
                        for (g = -1; ++g < f; ) {
                            var i = b[g];
                            if (h && d[g]) i = Kd.call(a, i); else {
                                var j = a[i], k = c[g], i = e ? e(j, k, i) : y;
                                "undefined" == typeof i && (i = ub(k, j, e, !0));
                            }
                            if (!i) return !1;
                        }
                        return !0;
                    }
                    function wb(a, b) {
                        var c = [];
                        return hb(a, function(a, d, e) {
                            c.push(b(a, d, e));
                        }), c;
                    }
                    function xb(a) {
                        var b = Le(a), c = b.length;
                        if (1 == c) {
                            var d = b[0], e = a[d];
                            if (ic(e)) return function(a) {
                                return null != a && a[d] === e && Kd.call(a, d);
                            };
                        }
                        for (var f = vd(c), g = vd(c); c--; ) e = a[b[c]], f[c] = e, g[c] = ic(e);
                        return function(a) {
                            return vb(a, b, f, g);
                        };
                    }
                    function yb(a, b) {
                        return ic(b) ? function(c) {
                            return null != c && c[a] === b;
                        } : function(c) {
                            return null != c && ub(b, c[a], null, !0);
                        };
                    }
                    function zb(a, b, c, d, e) {
                        if (!$c(a)) return a;
                        var f = hc(b.length) && (Ge(b) || dd(b));
                        return (f ? Ra : qb)(b, function(b, g, h) {
                            if (r(b)) {
                                d || (d = []), e || (e = []);
                                a: {
                                    b = d;
                                    for (var i = e, j = b.length, k = h[g]; j--; ) if (b[j] == k) {
                                        a[g] = i[j], g = void 0;
                                        break a;
                                    }
                                    j = a[g], h = c ? c(j, k, g, a, h) : y;
                                    var l = "undefined" == typeof h;
                                    l && (h = k, hc(k.length) && (Ge(k) || dd(k)) ? h = Ge(j) ? j : j ? Pa(j) : [] : Je(k) || Xc(k) ? h = Xc(j) ? ed(j) : Je(j) ? j : {} : l = !1), 
                                    b.push(k), i.push(h), l ? a[g] = zb(h, k, c, b, i) : (h === h ? h !== j : j === j) && (a[g] = h), 
                                    g = void 0;
                                }
                                return g;
                            }
                            i = a[g], h = c ? c(i, b, g, a, h) : y, (k = "undefined" == typeof h) && (h = b), 
                            !f && "undefined" == typeof h || !k && (h === h ? h === i : i !== i) || (a[g] = h);
                        }), a;
                    }
                    function Ab(a) {
                        return function(b) {
                            return null == b ? y : b[a];
                        };
                    }
                    function Bb(a, b) {
                        return a + Td(ke() * (b - a + 1));
                    }
                    function Cb(a, b, c, d, e) {
                        return e(a, function(a, e, f) {
                            c = d ? (d = !1, a) : b(c, a, e, f);
                        }), c;
                    }
                    function Db(a, b, c) {
                        var d = -1, e = a.length;
                        for (b = null == b ? 0 : +b || 0, 0 > b && (b = -b > e ? 0 : e + b), c = "undefined" == typeof c || c > e ? e : +c || 0, 
                        0 > c && (c += e), e = b > c ? 0 : c - b >>> 0, b >>>= 0, c = vd(e); ++d < e; ) c[d] = a[d + b];
                        return c;
                    }
                    function Eb(a, b) {
                        var c;
                        return hb(a, function(a, d, e) {
                            return c = b(a, d, e), !c;
                        }), !!c;
                    }
                    function Fb(a, b) {
                        var c = -1, d = bc(), f = a.length, g = d == e, h = g && f >= 200, i = h ? we() : null, j = [];
                        i ? (d = Oa, g = !1) : (h = !1, i = b ? [] : j);
                        a: for (;++c < f; ) {
                            var k = a[c], l = b ? b(k, c, a) : k;
                            if (g && k === k) {
                                for (var m = i.length; m--; ) if (i[m] === l) continue a;
                                b && i.push(l), j.push(k);
                            } else 0 > d(i, l) && ((b || h) && i.push(l), j.push(k));
                        }
                        return j;
                    }
                    function Gb(a, b) {
                        for (var c = -1, d = b.length, e = vd(d); ++c < d; ) e[c] = a[b[c]];
                        return e;
                    }
                    function Hb(a, b) {
                        var c = a;
                        c instanceof La && (c = c.value());
                        for (var d = -1, e = b.length; ++d < e; ) {
                            var c = [ c ], f = b[d];
                            Vd.apply(c, f.args), c = f.func.apply(f.thisArg, c);
                        }
                        return c;
                    }
                    function Ib(a, b, c) {
                        var d = 0, e = a ? a.length : d;
                        if ("number" == typeof b && b === b && pe >= e) {
                            for (;e > d; ) {
                                var f = d + e >>> 1, g = a[f];
                                (c ? b >= g : b > g) ? d = f + 1 : e = f;
                            }
                            return e;
                        }
                        return Jb(a, b, rd, c);
                    }
                    function Jb(a, b, c, d) {
                        b = c(b);
                        for (var e = 0, f = a ? a.length : 0, g = b !== b, h = "undefined" == typeof b; f > e; ) {
                            var i = Td((e + f) / 2), j = c(a[i]), k = j === j;
                            (g ? k || d : h ? k && (d || "undefined" != typeof j) : d ? b >= j : b > j) ? e = i + 1 : f = i;
                        }
                        return ge(f, oe);
                    }
                    function Kb(a, b, c) {
                        if ("function" != typeof a) return rd;
                        if ("undefined" == typeof b) return a;
                        switch (c) {
                          case 1:
                            return function(c) {
                                return a.call(b, c);
                            };

                          case 3:
                            return function(c, d, e) {
                                return a.call(b, c, d, e);
                            };

                          case 4:
                            return function(c, d, e, f) {
                                return a.call(b, c, d, e, f);
                            };

                          case 5:
                            return function(c, d, e, f, g) {
                                return a.call(b, c, d, e, f, g);
                            };
                        }
                        return function() {
                            return a.apply(b, arguments);
                        };
                    }
                    function Lb(a) {
                        return Qd.call(a, 0);
                    }
                    function Mb(a, b, c) {
                        for (var d = c.length, e = -1, f = fe(a.length - d, 0), g = -1, h = b.length, i = vd(f + h); ++g < h; ) i[g] = b[g];
                        for (;++e < d; ) i[c[e]] = a[e];
                        for (;f--; ) i[g++] = a[e++];
                        return i;
                    }
                    function Nb(a, b, c) {
                        for (var d = -1, e = c.length, f = -1, g = fe(a.length - e, 0), h = -1, i = b.length, j = vd(g + i); ++f < g; ) j[f] = a[f];
                        for (g = f; ++h < i; ) j[g + h] = b[h];
                        for (;++d < e; ) j[g + c[d]] = a[f++];
                        return j;
                    }
                    function Ob(a, b) {
                        return function(c, d, e) {
                            var f = b ? b() : {};
                            if (d = ac(d, e, 3), Ge(c)) {
                                e = -1;
                                for (var g = c.length; ++e < g; ) {
                                    var h = c[e];
                                    a(f, h, d(h, e, c), c);
                                }
                            } else hb(c, function(b, c, e) {
                                a(f, b, d(b, c, e), e);
                            });
                            return f;
                        };
                    }
                    function Pb(a) {
                        return function() {
                            var b = arguments.length, c = arguments[0];
                            if (2 > b || null == c) return c;
                            if (b > 3 && gc(arguments[1], arguments[2], arguments[3]) && (b = 2), b > 3 && "function" == typeof arguments[b - 2]) var d = Kb(arguments[--b - 1], arguments[b--], 5); else b > 2 && "function" == typeof arguments[b - 1] && (d = arguments[--b]);
                            for (var e = 0; ++e < b; ) {
                                var f = arguments[e];
                                f && a(c, f, d);
                            }
                            return c;
                        };
                    }
                    function Qb(a, b) {
                        function c() {
                            return (this instanceof c ? d : a).apply(b, arguments);
                        }
                        var d = Sb(a);
                        return c;
                    }
                    function Rb(a) {
                        return function(b) {
                            var c = -1;
                            b = nd(id(b));
                            for (var d = b.length, e = ""; ++c < d; ) e = a(e, b[c], c);
                            return e;
                        };
                    }
                    function Sb(a) {
                        return function() {
                            var b = ue(a.prototype), c = a.apply(b, arguments);
                            return $c(c) ? c : b;
                        };
                    }
                    function Tb(a, b) {
                        return function(c, d, e) {
                            e && gc(c, d, e) && (d = null);
                            var f = ac(), g = null == d;
                            if (f === db && g || (g = !1, d = f(d, e, 3)), g) {
                                if (d = Ge(c), d || !cd(c)) return a(d ? c : nc(c));
                                d = i;
                            }
                            return _b(c, d, b);
                        };
                    }
                    function Ub(a, b, c, d, e, f, g, h, i, j) {
                        function k() {
                            for (var u = arguments.length, v = u, w = vd(u); v--; ) w[v] = arguments[v];
                            if (d && (w = Mb(w, d, e)), f && (w = Nb(w, f, g)), o || q) {
                                var v = k.placeholder, x = t(w, v), u = u - x.length;
                                if (j > u) {
                                    var z = h ? Pa(h) : null, u = fe(j - u, 0), C = o ? x : null, x = o ? null : x, D = o ? w : null, w = o ? null : w;
                                    return b |= o ? F : G, b &= ~(o ? G : F), p || (b &= ~(A | B)), w = Ub(a, b, c, D, C, w, x, z, i, u), 
                                    w.placeholder = v, w;
                                }
                            }
                            if (v = m ? c : this, n && (a = v[s]), h) for (z = w.length, u = ge(h.length, z), 
                            C = Pa(w); u--; ) x = h[u], w[u] = fc(x, z) ? C[x] : y;
                            return l && i < w.length && (w.length = i), (this instanceof k ? r || Sb(a) : a).apply(v, w);
                        }
                        var l = b & I, m = b & A, n = b & B, o = b & D, p = b & C, q = b & E, r = !n && Sb(a), s = a;
                        return k;
                    }
                    function Vb(a, b, c) {
                        return a = a.length, b = +b, b > a && de(b) ? (b -= a, c = null == c ? " " : c + "", 
                        ld(c, Rd(b / c.length)).slice(0, b)) : "";
                    }
                    function Wb(a, b, c, d) {
                        function e() {
                            for (var b = -1, h = arguments.length, i = -1, j = d.length, k = vd(h + j); ++i < j; ) k[i] = d[i];
                            for (;h--; ) k[i++] = arguments[++b];
                            return (this instanceof e ? g : a).apply(f ? c : this, k);
                        }
                        var f = b & A, g = Sb(a);
                        return e;
                    }
                    function Xb(a, b, c, d, e, f, g, h) {
                        var i = b & B;
                        if (!i && "function" != typeof a) throw new Ed(Q);
                        var j = d ? d.length : 0;
                        if (j || (b &= ~(F | G), d = e = null), j -= e ? e.length : 0, b & G) {
                            var k = d, l = e;
                            d = e = null;
                        }
                        var m = !i && xe(a);
                        if (c = [ a, b, c, d, e, k, l, f, g, h ], m && !0 !== m) {
                            d = c[1], b = m[1], h = d | b, f = I | H, e = A | B, g = f | e | C | E;
                            var k = d & I && !(b & I), l = d & H && !(b & H), n = (l ? c : m)[7], o = (k ? c : m)[8];
                            f = h >= f && g >= h && (H > d || (l || k) && n.length <= o), (!(d >= H && b > e || d > e && b >= H) || f) && (b & A && (c[2] = m[2], 
                            h |= d & A ? 0 : C), (d = m[3]) && (e = c[3], c[3] = e ? Mb(e, d, m[4]) : Pa(d), 
                            c[4] = e ? t(c[3], R) : Pa(m[4])), (d = m[5]) && (e = c[5], c[5] = e ? Nb(e, d, m[6]) : Pa(d), 
                            c[6] = e ? t(c[5], R) : Pa(m[6])), (d = m[7]) && (c[7] = Pa(d)), b & I && (c[8] = null == c[8] ? m[8] : ge(c[8], m[8])), 
                            null == c[9] && (c[9] = m[9]), c[0] = m[0], c[1] = h), b = c[1], h = c[9];
                        }
                        return c[9] = null == h ? i ? 0 : a.length : fe(h - j, 0) || 0, (m ? ve : ye)(b == A ? Qb(c[0], c[2]) : b != F && b != (A | F) || c[4].length ? Ub.apply(y, c) : Wb.apply(y, c), c);
                    }
                    function Yb(a, b, c, d, e, f, g) {
                        var h = -1, i = a.length, j = b.length, k = !0;
                        if (i != j && (!e || i >= j)) return !1;
                        for (;k && ++h < i; ) {
                            var l = a[h], m = b[h], k = y;
                            if (d && (k = e ? d(m, l, h) : d(l, m, h)), "undefined" == typeof k) if (e) for (var n = j; n-- && (m = b[n], 
                            !(k = l && l === m || c(l, m, d, e, f, g))); ) ; else k = l && l === m || c(l, m, d, e, f, g);
                        }
                        return !!k;
                    }
                    function Zb(a, b, c) {
                        switch (c) {
                          case U:
                          case V:
                            return +a == +b;

                          case W:
                            return a.name == b.name && a.message == b.message;

                          case Y:
                            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

                          case $:
                          case _:
                            return a == b + "";
                        }
                        return !1;
                    }
                    function $b(a, b, c, d, e, f, g) {
                        var h = Le(a), i = h.length, j = Le(b).length;
                        if (i != j && !e) return !1;
                        for (var k, j = -1; ++j < i; ) {
                            var l = h[j], m = Kd.call(b, l);
                            if (m) {
                                var n = a[l], o = b[l], m = y;
                                d && (m = e ? d(o, n, l) : d(n, o, l)), "undefined" == typeof m && (m = n && n === o || c(n, o, d, e, f, g));
                            }
                            if (!m) return !1;
                            k || (k = "constructor" == l);
                        }
                        return k || (c = a.constructor, d = b.constructor, !(c != d && "constructor" in a && "constructor" in b) || "function" == typeof c && c instanceof c && "function" == typeof d && d instanceof d) ? !0 : !1;
                    }
                    function _b(a, b, c) {
                        var d = c ? me : le, e = d, f = e;
                        return hb(a, function(a, g, h) {
                            g = b(a, g, h), ((c ? e > g : g > e) || g === d && g === f) && (e = g, f = a);
                        }), f;
                    }
                    function ac(a, c, d) {
                        var e = b.callback || pd, e = e === pd ? db : e;
                        return d ? e(a, c, d) : e;
                    }
                    function bc(a, c, d) {
                        var f = b.indexOf || uc, f = f === uc ? e : f;
                        return a ? f(a, c, d) : f;
                    }
                    function cc(a) {
                        var b = a.length, c = new a.constructor(b);
                        return b && "string" == typeof a[0] && Kd.call(a, "index") && (c.index = a.index, 
                        c.input = a.input), c;
                    }
                    function dc(a) {
                        return a = a.constructor, "function" == typeof a && a instanceof a || (a = Bd), 
                        new a();
                    }
                    function ec(a, b, c) {
                        var d = a.constructor;
                        switch (b) {
                          case aa:
                            return Lb(a);

                          case U:
                          case V:
                            return new d(+a);

                          case ba:
                          case ca:
                          case da:
                          case ea:
                          case fa:
                          case ga:
                          case ha:
                          case ia:
                          case ja:
                            return b = a.buffer, new d(c ? Lb(b) : b, a.byteOffset, a.length);

                          case Y:
                          case _:
                            return new d(a);

                          case $:
                            var e = new d(a.source, va.exec(a));
                            e.lastIndex = a.lastIndex;
                        }
                        return e;
                    }
                    function fc(a, b) {
                        return a = +a, b = null == b ? re : b, a > -1 && 0 == a % 1 && b > a;
                    }
                    function gc(a, b, c) {
                        if (!$c(c)) return !1;
                        var d = typeof b;
                        return "number" == d ? (d = c.length, d = hc(d) && fc(b, d)) : d = "string" == d && b in c, 
                        d ? (b = c[b], a === a ? a === b : b !== b) : !1;
                    }
                    function hc(a) {
                        return "number" == typeof a && a > -1 && 0 == a % 1 && re >= a;
                    }
                    function ic(a) {
                        return a === a && (0 === a ? 1 / a > 0 : !$c(a));
                    }
                    function jc(a, b) {
                        a = oc(a);
                        for (var c = -1, d = b.length, e = {}; ++c < d; ) {
                            var f = b[c];
                            f in a && (e[f] = a[f]);
                        }
                        return e;
                    }
                    function kc(a, b) {
                        var c = {};
                        return pb(a, function(a, d, e) {
                            b(a, d, e) && (c[d] = a);
                        }), c;
                    }
                    function lc(a) {
                        var b;
                        if (!r(a) || Md.call(a) != Z || !(Kd.call(a, "constructor") || (b = a.constructor, 
                        "function" != typeof b || b instanceof b))) return !1;
                        var c;
                        return pb(a, function(a, b) {
                            c = b;
                        }), "undefined" == typeof c || Kd.call(a, c);
                    }
                    function mc(a) {
                        for (var c = gd(a), d = c.length, e = d && a.length, f = b.support, f = e && hc(e) && (Ge(a) || f.nonEnumArgs && Xc(a)), g = -1, h = []; ++g < d; ) {
                            var i = c[g];
                            (f && fc(i, e) || Kd.call(a, i)) && h.push(i);
                        }
                        return h;
                    }
                    function nc(a) {
                        return null == a ? [] : hc(a.length) ? $c(a) ? a : Bd(a) : hd(a);
                    }
                    function oc(a) {
                        return $c(a) ? a : Bd(a);
                    }
                    function pc(a) {
                        return a instanceof La ? a.clone() : new s(a.__wrapped__, a.__chain__, Pa(a.__actions__));
                    }
                    function qc(a, b, c) {
                        return a && a.length ? ((c ? gc(a, b, c) : null == b) && (b = 1), Db(a, 0 > b ? 0 : b)) : [];
                    }
                    function rc(a, b, c) {
                        var d = a ? a.length : 0;
                        return d ? ((c ? gc(a, b, c) : null == b) && (b = 1), b = d - (+b || 0), Db(a, 0, 0 > b ? 0 : b)) : [];
                    }
                    function sc(a, b, c) {
                        var d = -1, e = a ? a.length : 0;
                        for (b = ac(b, c, 3); ++d < e; ) if (b(a[d], d, a)) return d;
                        return -1;
                    }
                    function tc(a) {
                        return a ? a[0] : y;
                    }
                    function uc(a, b, c) {
                        var d = a ? a.length : 0;
                        if (!d) return -1;
                        if ("number" == typeof c) c = 0 > c ? fe(d + c, 0) : c || 0; else if (c) return c = Ib(a, b), 
                        a = a[c], (b === b ? b === a : a !== a) ? c : -1;
                        return e(a, b, c);
                    }
                    function vc(a) {
                        return qc(a, 1);
                    }
                    function wc(a, b, c, d) {
                        if (!a || !a.length) return [];
                        null != b && "boolean" != typeof b && (d = c, c = gc(a, b, d) ? null : b, b = !1);
                        var f = ac();
                        if ((f !== db || null != c) && (c = f(c, d, 3)), b && bc() == e) {
                            b = c;
                            var g;
                            c = -1, d = a.length;
                            for (var f = -1, h = []; ++c < d; ) {
                                var i = a[c], j = b ? b(i, c, a) : i;
                                c && g === j || (g = j, h[++f] = i);
                            }
                            a = h;
                        } else a = Fb(a, c);
                        return a;
                    }
                    function xc(a) {
                        for (var b = -1, c = (a && a.length && Wa(Va(a, Jd))) >>> 0, d = vd(c); ++b < c; ) d[b] = Va(a, Ab(b));
                        return d;
                    }
                    function yc(a, b) {
                        var c = -1, d = a ? a.length : 0, e = {};
                        for (!d || b || Ge(a[0]) || (b = []); ++c < d; ) {
                            var f = a[c];
                            b ? e[f] = b[c] : f && (e[f[0]] = f[1]);
                        }
                        return e;
                    }
                    function zc(a) {
                        return a = b(a), a.__chain__ = !0, a;
                    }
                    function Ac(a, b, c) {
                        return b.call(c, a);
                    }
                    function Bc(a, b, c) {
                        var d = Ge(a) ? Sa : jb;
                        return ("function" != typeof b || "undefined" != typeof c) && (b = ac(b, c, 3)), 
                        d(a, b);
                    }
                    function Cc(a, b, c) {
                        var d = Ge(a) ? Ua : kb;
                        return b = ac(b, c, 3), d(a, b);
                    }
                    function Dc(a, b, c) {
                        return Ge(a) ? (b = sc(a, b, c), b > -1 ? a[b] : y) : (b = ac(b, c, 3), lb(a, b, hb));
                    }
                    function Ec(a, b, c) {
                        return "function" == typeof b && "undefined" == typeof c && Ge(a) ? Ra(a, b) : hb(a, Kb(b, c, 3));
                    }
                    function Fc(a, b, c) {
                        if ("function" == typeof b && "undefined" == typeof c && Ge(a)) for (c = a.length; c-- && !1 !== b(a[c], c, a); ) ; else a = ib(a, Kb(b, c, 3));
                        return a;
                    }
                    function Gc(a, b, c) {
                        var d = a ? a.length : 0;
                        return hc(d) || (a = hd(a), d = a.length), d ? (c = "number" == typeof c ? 0 > c ? fe(d + c, 0) : c || 0 : 0, 
                        "string" == typeof a || !Ge(a) && cd(a) ? d > c && -1 < a.indexOf(b, c) : -1 < bc(a, b, c)) : !1;
                    }
                    function Hc(a, b, c) {
                        var d = Ge(a) ? Va : wb;
                        return b = ac(b, c, 3), d(a, b);
                    }
                    function Ic(a, b, c, d) {
                        return (Ge(a) ? Xa : Cb)(a, ac(b, d, 4), c, 3 > arguments.length, hb);
                    }
                    function Jc(a, b, c, d) {
                        return (Ge(a) ? Ya : Cb)(a, ac(b, d, 4), c, 3 > arguments.length, ib);
                    }
                    function Kc(a, b, c) {
                        return (c ? gc(a, b, c) : null == b) ? (a = nc(a), b = a.length, b > 0 ? a[Bb(0, b - 1)] : y) : (a = Lc(a), 
                        a.length = ge(0 > b ? 0 : +b || 0, a.length), a);
                    }
                    function Lc(a) {
                        a = nc(a);
                        for (var b = -1, c = a.length, d = vd(c); ++b < c; ) {
                            var e = Bb(0, b);
                            b != e && (d[b] = d[e]), d[e] = a[b];
                        }
                        return d;
                    }
                    function Mc(a, b, c) {
                        var d = Ge(a) ? Za : Eb;
                        return ("function" != typeof b || "undefined" != typeof c) && (b = ac(b, c, 3)), 
                        d(a, b);
                    }
                    function Nc(a, b) {
                        var c;
                        if ("function" != typeof b) {
                            if ("function" != typeof a) throw new Ed(Q);
                            var d = a;
                            a = b, b = d;
                        }
                        return function() {
                            return 0 < --a ? c = b.apply(this, arguments) : b = null, c;
                        };
                    }
                    function Oc(a, b) {
                        var c = A;
                        if (2 < arguments.length) var d = Db(arguments, 2), e = t(d, Oc.placeholder), c = c | F;
                        return Xb(a, c, b, d, e);
                    }
                    function Pc(a, b) {
                        var c = A | B;
                        if (2 < arguments.length) var d = Db(arguments, 2), e = t(d, Pc.placeholder), c = c | F;
                        return Xb(b, c, a, d, e);
                    }
                    function Qc(a, b, c) {
                        return c && gc(a, b, c) && (b = null), a = Xb(a, D, null, null, null, null, null, b), 
                        a.placeholder = Qc.placeholder, a;
                    }
                    function Rc(a, b, c) {
                        return c && gc(a, b, c) && (b = null), a = Xb(a, E, null, null, null, null, null, b), 
                        a.placeholder = Rc.placeholder, a;
                    }
                    function Sc(a, b, c) {
                        function d() {
                            var c = b - (Fe() - j);
                            0 >= c || c > b ? (h && Sd(h), c = m, h = l = m = y, c && (n = Fe(), i = a.apply(k, g), 
                            l || h || (g = k = null))) : l = Yd(d, c);
                        }
                        function e() {
                            l && Sd(l), h = l = m = y, (p || o !== b) && (n = Fe(), i = a.apply(k, g), l || h || (g = k = null));
                        }
                        function f() {
                            if (g = arguments, j = Fe(), k = this, m = p && (l || !q), !1 === o) var c = q && !l; else {
                                h || q || (n = j);
                                var f = o - (j - n), r = 0 >= f || f > o;
                                r ? (h && (h = Sd(h)), n = j, i = a.apply(k, g)) : h || (h = Yd(e, f));
                            }
                            return r && l ? l = Sd(l) : l || b === o || (l = Yd(d, b)), c && (r = !0, i = a.apply(k, g)), 
                            !r || l || h || (g = k = null), i;
                        }
                        var g, h, i, j, k, l, m, n = 0, o = !1, p = !0;
                        if ("function" != typeof a) throw new Ed(Q);
                        if (b = 0 > b ? 0 : +b || 0, !0 === c) var q = !0, p = !1; else $c(c) && (q = c.leading, 
                        o = "maxWait" in c && fe(+c.maxWait || 0, b), p = "trailing" in c ? c.trailing : p);
                        return f.cancel = function() {
                            l && Sd(l), h && Sd(h), h = l = m = y;
                        }, f;
                    }
                    function Tc() {
                        var a = arguments, b = a.length - 1;
                        if (0 > b) return function(a) {
                            return a;
                        };
                        if (!Sa(a, f)) throw new Ed(Q);
                        return function() {
                            for (var c = b, d = a[c].apply(this, arguments); c--; ) d = a[c].call(this, d);
                            return d;
                        };
                    }
                    function Uc(a, b) {
                        function c() {
                            var d = c.cache, e = b ? b.apply(this, arguments) : arguments[0];
                            if (d.has(e)) return d.get(e);
                            var f = a.apply(this, arguments);
                            return d.set(e, f), f;
                        }
                        if ("function" != typeof a || b && "function" != typeof b) throw new Ed(Q);
                        return c.cache = new Uc.Cache(), c;
                    }
                    function Vc(a) {
                        var b = Db(arguments, 1), c = t(b, Vc.placeholder);
                        return Xb(a, F, null, b, c);
                    }
                    function Wc(a) {
                        var b = Db(arguments, 1), c = t(b, Wc.placeholder);
                        return Xb(a, G, null, b, c);
                    }
                    function Xc(a) {
                        return hc(r(a) ? a.length : y) && Md.call(a) == S || !1;
                    }
                    function Yc(a) {
                        return a && 1 === a.nodeType && r(a) && -1 < Md.call(a).indexOf("Element") || !1;
                    }
                    function Zc(a) {
                        return r(a) && "string" == typeof a.message && Md.call(a) == W || !1;
                    }
                    function $c(a) {
                        var b = typeof a;
                        return "function" == b || a && "object" == b || !1;
                    }
                    function _c(a) {
                        return null == a ? !1 : Md.call(a) == X ? Od.test(Id.call(a)) : r(a) && ya.test(a) || !1;
                    }
                    function ad(a) {
                        return "number" == typeof a || r(a) && Md.call(a) == Y || !1;
                    }
                    function bd(a) {
                        return r(a) && Md.call(a) == $ || !1;
                    }
                    function cd(a) {
                        return "string" == typeof a || r(a) && Md.call(a) == _ || !1;
                    }
                    function dd(a) {
                        return r(a) && hc(a.length) && Ia[Md.call(a)] || !1;
                    }
                    function ed(a) {
                        return cb(a, gd(a));
                    }
                    function fd(a) {
                        return sb(a, gd(a));
                    }
                    function gd(a) {
                        if (null == a) return [];
                        $c(a) || (a = Bd(a));
                        for (var b = a.length, b = b && hc(b) && (Ge(a) || te.nonEnumArgs && Xc(a)) && b || 0, c = a.constructor, d = -1, c = "function" == typeof c && c.prototype === a, e = vd(b), f = b > 0; ++d < b; ) e[d] = d + "";
                        for (var g in a) f && fc(g, b) || "constructor" == g && (c || !Kd.call(a, g)) || e.push(g);
                        return e;
                    }
                    function hd(a) {
                        return Gb(a, Le(a));
                    }
                    function id(a) {
                        return (a = h(a)) && a.replace(za, n);
                    }
                    function jd(a) {
                        return (a = h(a)) && Ca.test(a) ? a.replace(Ba, "\\$&") : a;
                    }
                    function kd(a, b, c) {
                        return c && gc(a, b, c) && (b = 0), je(a, b);
                    }
                    function ld(a, b) {
                        var c = "";
                        if (a = h(a), b = +b, 1 > b || !a || !de(b)) return c;
                        do b % 2 && (c += a), b = Td(b / 2), a += a; while (b);
                        return c;
                    }
                    function md(a, b, c) {
                        var d = a;
                        return (a = h(a)) ? (c ? gc(d, b, c) : null == b) ? a.slice(u(a), v(a) + 1) : (b += "", 
                        a.slice(j(a, b), k(a, b) + 1)) : a;
                    }
                    function nd(a, b, c) {
                        return c && gc(a, b, c) && (b = null), a = h(a), a.match(b || Fa) || [];
                    }
                    function od() {
                        var a = arguments.length, b = arguments[0];
                        try {
                            for (var c = vd(a ? a - 1 : 0); 0 < --a; ) c[a - 1] = arguments[a];
                            return b.apply(y, c);
                        } catch (d) {
                            return Zc(d) ? d : new xd(d);
                        }
                    }
                    function pd(a, b, c) {
                        return c && gc(a, b, c) && (b = null), r(a) ? sd(a) : db(a, b);
                    }
                    function qd(a) {
                        return function() {
                            return a;
                        };
                    }
                    function rd(a) {
                        return a;
                    }
                    function sd(a) {
                        return xb(eb(a, !0));
                    }
                    function td(a, b, c) {
                        if (null == c) {
                            var d = $c(b), e = d && Le(b);
                            ((e = e && e.length && sb(b, e)) ? e.length : d) || (e = !1, c = b, b = a, a = this);
                        }
                        e || (e = sb(b, Le(b)));
                        var f = !0, d = -1, g = Ie(a), h = e.length;
                        !1 === c ? f = !1 : $c(c) && "chain" in c && (f = c.chain);
                        for (;++d < h; ) {
                            c = e[d];
                            var i = b[c];
                            a[c] = i, g && (a.prototype[c] = function(b) {
                                return function() {
                                    var c = this.__chain__;
                                    if (f || c) {
                                        var d = a(this.__wrapped__);
                                        return (d.__actions__ = Pa(this.__actions__)).push({
                                            func: b,
                                            args: arguments,
                                            thisArg: a
                                        }), d.__chain__ = c, d;
                                    }
                                    return c = [ this.value() ], Vd.apply(c, arguments), b.apply(a, c);
                                };
                            }(i));
                        }
                        return a;
                    }
                    function ud() {}
                    a = a ? Ta.defaults(Qa.Object(), a, Ta.pick(Qa, Ha)) : Qa;
                    var vd = a.Array, wd = a.Date, xd = a.Error, yd = a.Function, zd = a.Math, Ad = a.Number, Bd = a.Object, Cd = a.RegExp, Dd = a.String, Ed = a.TypeError, Fd = vd.prototype, Gd = Bd.prototype, Hd = (Hd = a.window) && Hd.document, Id = yd.prototype.toString, Jd = Ab("length"), Kd = Gd.hasOwnProperty, Ld = 0, Md = Gd.toString, Nd = a._, Od = Cd("^" + jd(Md).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Pd = _c(Pd = a.ArrayBuffer) && Pd, Qd = _c(Qd = Pd && new Pd(0).slice) && Qd, Rd = zd.ceil, Sd = a.clearTimeout, Td = zd.floor, Ud = _c(Ud = Bd.getPrototypeOf) && Ud, Vd = Fd.push, Wd = Gd.propertyIsEnumerable, Xd = _c(Xd = a.Set) && Xd, Yd = a.setTimeout, Zd = Fd.splice, $d = _c($d = a.Uint8Array) && $d, _d = _c(_d = a.WeakMap) && _d, ae = function() {
                        try {
                            var b = _c(b = a.Float64Array) && b, c = new b(new Pd(10), 0, 1) && b;
                        } catch (d) {}
                        return c;
                    }(), be = _c(be = vd.isArray) && be, ce = _c(ce = Bd.create) && ce, de = a.isFinite, ee = _c(ee = Bd.keys) && ee, fe = zd.max, ge = zd.min, he = _c(he = wd.now) && he, ie = _c(ie = Ad.isFinite) && ie, je = a.parseInt, ke = zd.random, le = Ad.NEGATIVE_INFINITY, me = Ad.POSITIVE_INFINITY, ne = zd.pow(2, 32) - 1, oe = ne - 1, pe = ne >>> 1, qe = ae ? ae.BYTES_PER_ELEMENT : 0, re = zd.pow(2, 53) - 1, se = _d && new _d(), te = b.support = {};
                    !function(b) {
                        te.funcDecomp = !_c(a.WinRTError) && Da.test(x), te.funcNames = "string" == typeof yd.name;
                        try {
                            te.dom = 11 === Hd.createDocumentFragment().nodeType;
                        } catch (c) {
                            te.dom = !1;
                        }
                        try {
                            te.nonEnumArgs = !Wd.call(arguments, 1);
                        } catch (d) {
                            te.nonEnumArgs = !0;
                        }
                    }(0, 0), b.templateSettings = {
                        escape: ra,
                        evaluate: sa,
                        interpolate: ta,
                        variable: "",
                        imports: {
                            _: b
                        }
                    };
                    var ue = function() {
                        function b() {}
                        return function(c) {
                            if ($c(c)) {
                                b.prototype = c;
                                var d = new b();
                                b.prototype = null;
                            }
                            return d || a.Object();
                        };
                    }(), ve = se ? function(a, b) {
                        return se.set(a, b), a;
                    } : rd;
                    Qd || (Lb = Pd && $d ? function(a) {
                        var b = a.byteLength, c = ae ? Td(b / qe) : 0, d = c * qe, e = new Pd(b);
                        if (c) {
                            var f = new ae(e, 0, c);
                            f.set(new ae(a, 0, c));
                        }
                        return b != d && (f = new $d(e, d), f.set(new $d(a, d))), e;
                    } : qd(null));
                    var we = ce && Xd ? function(a) {
                        return new Na(a);
                    } : qd(null), xe = se ? function(a) {
                        return se.get(a);
                    } : ud, ye = function() {
                        var a = 0, b = 0;
                        return function(c, d) {
                            var e = Fe(), f = M - (e - b);
                            if (b = e, f > 0) {
                                if (++a >= L) return c;
                            } else a = 0;
                            return ve(c, d);
                        };
                    }(), ze = Ob(function(a, b, c) {
                        Kd.call(a, c) ? ++a[c] : a[c] = 1;
                    }), Ae = Ob(function(a, b, c) {
                        Kd.call(a, c) ? a[c].push(b) : a[c] = [ b ];
                    }), Be = Ob(function(a, b, c) {
                        a[c] = b;
                    }), Ce = Tb(Wa), De = Tb(function(a) {
                        for (var b = -1, c = a.length, d = me; ++b < c; ) {
                            var e = a[b];
                            d > e && (d = e);
                        }
                        return d;
                    }, !0), Ee = Ob(function(a, b, c) {
                        a[c ? 0 : 1].push(b);
                    }, function() {
                        return [ [], [] ];
                    }), Fe = he || function() {
                        return new wd().getTime();
                    }, Ge = be || function(a) {
                        return r(a) && hc(a.length) && Md.call(a) == T || !1;
                    };
                    te.dom || (Yc = function(a) {
                        return a && 1 === a.nodeType && r(a) && !Je(a) || !1;
                    });
                    var He = ie || function(a) {
                        return "number" == typeof a && de(a);
                    }, Ie = f(/x/) || $d && !f($d) ? function(a) {
                        return Md.call(a) == X;
                    } : f, Je = Ud ? function(a) {
                        if (!a || Md.call(a) != Z) return !1;
                        var b = a.valueOf, c = _c(b) && (c = Ud(b)) && Ud(c);
                        return c ? a == c || Ud(a) == c : lc(a);
                    } : lc, Ke = Pb(ab), Le = ee ? function(a) {
                        if (a) var b = a.constructor, c = a.length;
                        return "function" == typeof b && b.prototype === a || "function" != typeof a && c && hc(c) ? mc(a) : $c(a) ? ee(a) : [];
                    } : mc, Me = Pb(zb), Ne = Rb(function(a, b, c) {
                        return b = b.toLowerCase(), a + (c ? b.charAt(0).toUpperCase() + b.slice(1) : b);
                    }), Oe = Rb(function(a, b, c) {
                        return a + (c ? "-" : "") + b.toLowerCase();
                    });
                    8 != je(Ga + "08") && (kd = function(a, b, c) {
                        return (c ? gc(a, b, c) : null == b) ? b = 0 : b && (b = +b), a = md(a), je(a, b || (xa.test(a) ? 16 : 10));
                    });
                    var Pe = Rb(function(a, b, c) {
                        return a + (c ? "_" : "") + b.toLowerCase();
                    }), Qe = Rb(function(a, b, c) {
                        return a + (c ? " " : "") + (b.charAt(0).toUpperCase() + b.slice(1));
                    });
                    return b.prototype = c.prototype, s.prototype = ue(c.prototype), s.prototype.constructor = s, 
                    La.prototype = ue(c.prototype), La.prototype.constructor = La, Ma.prototype["delete"] = function(a) {
                        return this.has(a) && delete this.__data__[a];
                    }, Ma.prototype.get = function(a) {
                        return "__proto__" == a ? y : this.__data__[a];
                    }, Ma.prototype.has = function(a) {
                        return "__proto__" != a && Kd.call(this.__data__, a);
                    }, Ma.prototype.set = function(a, b) {
                        return "__proto__" != a && (this.__data__[a] = b), this;
                    }, Na.prototype.push = function(a) {
                        var b = this.data;
                        "string" == typeof a || $c(a) ? b.set.add(a) : b.hash[a] = !0;
                    }, Uc.Cache = Ma, b.after = function(a, b) {
                        if ("function" != typeof b) {
                            if ("function" != typeof a) throw new Ed(Q);
                            var c = a;
                            a = b, b = c;
                        }
                        return a = de(a = +a) ? a : 0, function() {
                            return 1 > --a ? b.apply(this, arguments) : void 0;
                        };
                    }, b.ary = function(a, b, c) {
                        return c && gc(a, b, c) && (b = null), b = a && null == b ? a.length : fe(+b || 0, 0), 
                        Xb(a, I, null, null, null, null, b);
                    }, b.assign = Ke, b.at = function(a) {
                        return hc(a ? a.length : 0) && (a = nc(a)), bb(a, mb(arguments, !1, !1, 1));
                    }, b.before = Nc, b.bind = Oc, b.bindAll = function(a) {
                        for (var b = a, c = 1 < arguments.length ? mb(arguments, !1, !1, 1) : fd(a), d = -1, e = c.length; ++d < e; ) {
                            var f = c[d];
                            b[f] = Xb(b[f], A, b);
                        }
                        return b;
                    }, b.bindKey = Pc, b.callback = pd, b.chain = zc, b.chunk = function(a, b, c) {
                        b = (c ? gc(a, b, c) : null == b) ? 1 : fe(+b || 1, 1), c = 0;
                        for (var d = a ? a.length : 0, e = -1, f = vd(Rd(d / b)); d > c; ) f[++e] = Db(a, c, c += b);
                        return f;
                    }, b.compact = function(a) {
                        for (var b = -1, c = a ? a.length : 0, d = -1, e = []; ++b < c; ) {
                            var f = a[b];
                            f && (e[++d] = f);
                        }
                        return e;
                    }, b.constant = qd, b.countBy = ze, b.create = function(a, b, c) {
                        var d = ue(a);
                        return c && gc(a, b, c) && (b = null), b ? cb(b, d, Le(b)) : d;
                    }, b.curry = Qc, b.curryRight = Rc, b.debounce = Sc, b.defaults = function(a) {
                        if (null == a) return a;
                        var b = Pa(arguments);
                        return b.push($a), Ke.apply(y, b);
                    }, b.defer = function(a) {
                        return fb(a, 1, arguments, 1);
                    }, b.delay = function(a, b) {
                        return fb(a, b, arguments, 2);
                    }, b.difference = function() {
                        for (var a = -1, b = arguments.length; ++a < b; ) {
                            var c = arguments[a];
                            if (Ge(c) || Xc(c)) break;
                        }
                        return gb(c, mb(arguments, !1, !0, ++a));
                    }, b.drop = qc, b.dropRight = rc, b.dropRightWhile = function(a, b, c) {
                        var d = a ? a.length : 0;
                        if (!d) return [];
                        for (b = ac(b, c, 3); d-- && b(a[d], d, a); ) ;
                        return Db(a, 0, d + 1);
                    }, b.dropWhile = function(a, b, c) {
                        var d = a ? a.length : 0;
                        if (!d) return [];
                        var e = -1;
                        for (b = ac(b, c, 3); ++e < d && b(a[e], e, a); ) ;
                        return Db(a, e);
                    }, b.fill = function(a, b, c, d) {
                        var e = a ? a.length : 0;
                        if (!e) return [];
                        for (c && "number" != typeof c && gc(a, b, c) && (c = 0, d = e), e = a.length, c = null == c ? 0 : +c || 0, 
                        0 > c && (c = -c > e ? 0 : e + c), d = "undefined" == typeof d || d > e ? e : +d || 0, 
                        0 > d && (d += e), e = c > d ? 0 : d >>> 0, c >>>= 0; e > c; ) a[c++] = b;
                        return a;
                    }, b.filter = Cc, b.flatten = function(a, b, c) {
                        var d = a ? a.length : 0;
                        return c && gc(a, b, c) && (b = !1), d ? mb(a, b) : [];
                    }, b.flattenDeep = function(a) {
                        return a && a.length ? mb(a, !0) : [];
                    }, b.flow = function() {
                        var a = arguments, b = a.length;
                        if (!b) return function(a) {
                            return a;
                        };
                        if (!Sa(a, f)) throw new Ed(Q);
                        return function() {
                            for (var c = 0, d = a[c].apply(this, arguments); ++c < b; ) d = a[c].call(this, d);
                            return d;
                        };
                    }, b.flowRight = Tc, b.forEach = Ec, b.forEachRight = Fc, b.forIn = function(a, b, c) {
                        return ("function" != typeof b || "undefined" != typeof c) && (b = Kb(b, c, 3)), 
                        nb(a, b, gd);
                    }, b.forInRight = function(a, b, c) {
                        return b = Kb(b, c, 3), ob(a, b, gd);
                    }, b.forOwn = function(a, b, c) {
                        return ("function" != typeof b || "undefined" != typeof c) && (b = Kb(b, c, 3)), 
                        qb(a, b);
                    }, b.forOwnRight = function(a, b, c) {
                        return b = Kb(b, c, 3), ob(a, b, Le);
                    }, b.functions = fd, b.groupBy = Ae, b.indexBy = Be, b.initial = function(a) {
                        return rc(a, 1);
                    }, b.intersection = function() {
                        for (var a = [], b = -1, c = arguments.length, d = [], f = bc(), g = f == e; ++b < c; ) {
                            var h = arguments[b];
                            (Ge(h) || Xc(h)) && (a.push(h), d.push(g && 120 <= h.length ? we(b && h) : null));
                        }
                        var c = a.length, g = a[0], i = -1, j = g ? g.length : 0, k = [], l = d[0];
                        a: for (;++i < j; ) if (h = g[i], 0 > (l ? Oa(l, h) : f(k, h))) {
                            for (b = c; --b; ) {
                                var m = d[b];
                                if (0 > (m ? Oa(m, h) : f(a[b], h))) continue a;
                            }
                            l && l.push(h), k.push(h);
                        }
                        return k;
                    }, b.invert = function(a, b, c) {
                        c && gc(a, b, c) && (b = null), c = -1;
                        for (var d = Le(a), e = d.length, f = {}; ++c < e; ) {
                            var g = d[c], h = a[g];
                            b ? Kd.call(f, h) ? f[h].push(g) : f[h] = [ g ] : f[h] = g;
                        }
                        return f;
                    }, b.invoke = function(a, b) {
                        return tb(a, b, Db(arguments, 2));
                    }, b.keys = Le, b.keysIn = gd, b.map = Hc, b.mapValues = function(a, b, c) {
                        var d = {};
                        return b = ac(b, c, 3), qb(a, function(a, c, e) {
                            d[c] = b(a, c, e);
                        }), d;
                    }, b.matches = sd, b.matchesProperty = function(a, b) {
                        return yb(a + "", eb(b, !0));
                    }, b.memoize = Uc, b.merge = Me, b.mixin = td, b.negate = function(a) {
                        if ("function" != typeof a) throw new Ed(Q);
                        return function() {
                            return !a.apply(this, arguments);
                        };
                    }, b.omit = function(a, b, c) {
                        if (null == a) return {};
                        if ("function" != typeof b) {
                            var d = Va(mb(arguments, !1, !1, 1), Dd);
                            return jc(a, gb(gd(a), d));
                        }
                        return b = Kb(b, c, 3), kc(a, function(a, c, d) {
                            return !b(a, c, d);
                        });
                    }, b.once = function(a) {
                        return Nc(a, 2);
                    }, b.pairs = function(a) {
                        for (var b = -1, c = Le(a), d = c.length, e = vd(d); ++b < d; ) {
                            var f = c[b];
                            e[b] = [ f, a[f] ];
                        }
                        return e;
                    }, b.partial = Vc, b.partialRight = Wc, b.partition = Ee, b.pick = function(a, b, c) {
                        return null == a ? {} : "function" == typeof b ? kc(a, Kb(b, c, 3)) : jc(a, mb(arguments, !1, !1, 1));
                    }, b.pluck = function(a, b) {
                        return Hc(a, Ab(b));
                    }, b.property = function(a) {
                        return Ab(a + "");
                    }, b.propertyOf = function(a) {
                        return function(b) {
                            return null == a ? y : a[b];
                        };
                    }, b.pull = function() {
                        var a = arguments[0];
                        if (!a || !a.length) return a;
                        for (var b = 0, c = bc(), d = arguments.length; ++b < d; ) for (var e = 0, f = arguments[b]; -1 < (e = c(a, f, e)); ) Zd.call(a, e, 1);
                        return a;
                    }, b.pullAt = function(a) {
                        var b = a || [], c = mb(arguments, !1, !1, 1), e = c.length, f = bb(b, c);
                        for (c.sort(d); e--; ) {
                            var g = parseFloat(c[e]);
                            if (g != h && fc(g)) {
                                var h = g;
                                Zd.call(b, g, 1);
                            }
                        }
                        return f;
                    }, b.range = function(a, b, c) {
                        c && gc(a, b, c) && (b = c = null), a = +a || 0, c = null == c ? 1 : +c || 0, null == b ? (b = a, 
                        a = 0) : b = +b || 0;
                        var d = -1;
                        b = fe(Rd((b - a) / (c || 1)), 0);
                        for (var e = vd(b); ++d < b; ) e[d] = a, a += c;
                        return e;
                    }, b.rearg = function(a) {
                        var b = mb(arguments, !1, !1, 1);
                        return Xb(a, H, null, null, null, b);
                    }, b.reject = function(a, b, c) {
                        var d = Ge(a) ? Ua : kb;
                        return b = ac(b, c, 3), d(a, function(a, c, d) {
                            return !b(a, c, d);
                        });
                    }, b.remove = function(a, b, c) {
                        var d = -1, e = a ? a.length : 0, f = [];
                        for (b = ac(b, c, 3); ++d < e; ) c = a[d], b(c, d, a) && (f.push(c), Zd.call(a, d--, 1), 
                        e--);
                        return f;
                    }, b.rest = vc, b.shuffle = Lc, b.slice = function(a, b, c) {
                        var d = a ? a.length : 0;
                        return d ? (c && "number" != typeof c && gc(a, b, c) && (b = 0, c = d), Db(a, b, c)) : [];
                    }, b.sortBy = function(a, b, c) {
                        var d = -1, e = a ? a.length : 0, f = hc(e) ? vd(e) : [];
                        return c && gc(a, b, c) && (b = null), b = ac(b, c, 3), hb(a, function(a, c, e) {
                            f[++d] = {
                                a: b(a, c, e),
                                b: d,
                                c: a
                            };
                        }), g(f, l);
                    }, b.sortByAll = function(a) {
                        var b = arguments;
                        3 < b.length && gc(b[1], b[2], b[3]) && (b = [ a, b[1] ]);
                        var c = -1, d = a ? a.length : 0, e = mb(b, !1, !1, 1), f = hc(d) ? vd(d) : [];
                        return hb(a, function(a) {
                            for (var b = e.length, d = vd(b); b--; ) d[b] = null == a ? y : a[e[b]];
                            f[++c] = {
                                a: d,
                                b: c,
                                c: a
                            };
                        }), g(f, m);
                    }, b.spread = function(a) {
                        if ("function" != typeof a) throw new Ed(Q);
                        return function(b) {
                            return a.apply(this, b);
                        };
                    }, b.take = function(a, b, c) {
                        return a && a.length ? ((c ? gc(a, b, c) : null == b) && (b = 1), Db(a, 0, 0 > b ? 0 : b)) : [];
                    }, b.takeRight = function(a, b, c) {
                        var d = a ? a.length : 0;
                        return d ? ((c ? gc(a, b, c) : null == b) && (b = 1), b = d - (+b || 0), Db(a, 0 > b ? 0 : b)) : [];
                    }, b.takeRightWhile = function(a, b, c) {
                        var d = a ? a.length : 0;
                        if (!d) return [];
                        for (b = ac(b, c, 3); d-- && b(a[d], d, a); ) ;
                        return Db(a, d + 1);
                    }, b.takeWhile = function(a, b, c) {
                        var d = a ? a.length : 0;
                        if (!d) return [];
                        var e = -1;
                        for (b = ac(b, c, 3); ++e < d && b(a[e], e, a); ) ;
                        return Db(a, 0, e);
                    }, b.tap = function(a, b, c) {
                        return b.call(c, a), a;
                    }, b.throttle = function(a, b, c) {
                        var d = !0, e = !0;
                        if ("function" != typeof a) throw new Ed(Q);
                        return !1 === c ? d = !1 : $c(c) && (d = "leading" in c ? !!c.leading : d, e = "trailing" in c ? !!c.trailing : e), 
                        Ka.leading = d, Ka.maxWait = +b, Ka.trailing = e, Sc(a, b, Ka);
                    }, b.thru = Ac, b.times = function(a, b, c) {
                        if (a = +a, 1 > a || !de(a)) return [];
                        var d = -1, e = vd(ge(a, ne));
                        for (b = Kb(b, c, 1); ++d < a; ) ne > d ? e[d] = b(d) : b(d);
                        return e;
                    }, b.toArray = function(a) {
                        var b = a ? a.length : 0;
                        return hc(b) ? b ? Pa(a) : [] : hd(a);
                    }, b.toPlainObject = ed, b.transform = function(a, b, c, d) {
                        var e = Ge(a) || dd(a);
                        return b = ac(b, d, 4), null == c && (e || $c(a) ? (d = a.constructor, c = e ? Ge(a) ? new d() : [] : ue(Ie(d) && d.prototype)) : c = {}), 
                        (e ? Ra : qb)(a, function(a, d, e) {
                            return b(c, a, d, e);
                        }), c;
                    }, b.union = function() {
                        return Fb(mb(arguments, !1, !0));
                    }, b.uniq = wc, b.unzip = xc, b.values = hd, b.valuesIn = function(a) {
                        return Gb(a, gd(a));
                    }, b.where = function(a, b) {
                        return Cc(a, xb(b));
                    }, b.without = function(a) {
                        return gb(a, Db(arguments, 1));
                    }, b.wrap = function(a, b) {
                        return b = null == b ? rd : b, Xb(b, F, null, [ a ], []);
                    }, b.xor = function() {
                        for (var a = -1, b = arguments.length; ++a < b; ) {
                            var c = arguments[a];
                            if (Ge(c) || Xc(c)) var d = d ? gb(d, c).concat(gb(c, d)) : c;
                        }
                        return d ? Fb(d) : [];
                    }, b.zip = function() {
                        for (var a = arguments.length, b = vd(a); a--; ) b[a] = arguments[a];
                        return xc(b);
                    }, b.zipObject = yc, b.backflow = Tc, b.collect = Hc, b.compose = Tc, b.each = Ec, 
                    b.eachRight = Fc, b.extend = Ke, b.iteratee = pd, b.methods = fd, b.object = yc, 
                    b.select = Cc, b.tail = vc, b.unique = wc, td(b, b), b.attempt = od, b.camelCase = Ne, 
                    b.capitalize = function(a) {
                        return (a = h(a)) && a.charAt(0).toUpperCase() + a.slice(1);
                    }, b.clone = function(a, b, c, d) {
                        return b && "boolean" != typeof b && gc(a, b, c) ? b = !1 : "function" == typeof b && (d = c, 
                        c = b, b = !1), c = "function" == typeof c && Kb(c, d, 1), eb(a, b, c);
                    }, b.cloneDeep = function(a, b, c) {
                        return b = "function" == typeof b && Kb(b, c, 1), eb(a, !0, b);
                    }, b.deburr = id, b.endsWith = function(a, b, c) {
                        a = h(a), b += "";
                        var d = a.length;
                        return c = ("undefined" == typeof c ? d : ge(0 > c ? 0 : +c || 0, d)) - b.length, 
                        c >= 0 && a.indexOf(b, c) == c;
                    }, b.escape = function(a) {
                        return (a = h(a)) && qa.test(a) ? a.replace(oa, o) : a;
                    }, b.escapeRegExp = jd, b.every = Bc, b.find = Dc, b.findIndex = sc, b.findKey = function(a, b, c) {
                        return b = ac(b, c, 3), lb(a, b, qb, !0);
                    }, b.findLast = function(a, b, c) {
                        return b = ac(b, c, 3), lb(a, b, ib);
                    }, b.findLastIndex = function(a, b, c) {
                        var d = a ? a.length : 0;
                        for (b = ac(b, c, 3); d--; ) if (b(a[d], d, a)) return d;
                        return -1;
                    }, b.findLastKey = function(a, b, c) {
                        return b = ac(b, c, 3), lb(a, b, rb, !0);
                    }, b.findWhere = function(a, b) {
                        return Dc(a, xb(b));
                    }, b.first = tc, b.has = function(a, b) {
                        return a ? Kd.call(a, b) : !1;
                    }, b.identity = rd, b.includes = Gc, b.indexOf = uc, b.inRange = function(a, b, c) {
                        return b = +b || 0, "undefined" == typeof c ? (c = b, b = 0) : c = +c || 0, a >= b && c > a;
                    }, b.isArguments = Xc, b.isArray = Ge, b.isBoolean = function(a) {
                        return !0 === a || !1 === a || r(a) && Md.call(a) == U || !1;
                    }, b.isDate = function(a) {
                        return r(a) && Md.call(a) == V || !1;
                    }, b.isElement = Yc, b.isEmpty = function(a) {
                        if (null == a) return !0;
                        var b = a.length;
                        return hc(b) && (Ge(a) || cd(a) || Xc(a) || r(a) && Ie(a.splice)) ? !b : !Le(a).length;
                    }, b.isEqual = function(a, b, c, d) {
                        return c = "function" == typeof c && Kb(c, d, 3), !c && ic(a) && ic(b) ? a === b : (d = c ? c(a, b) : y, 
                        "undefined" == typeof d ? ub(a, b, c) : !!d);
                    }, b.isError = Zc, b.isFinite = He, b.isFunction = Ie, b.isMatch = function(a, b, c, d) {
                        var e = Le(b), f = e.length;
                        if (c = "function" == typeof c && Kb(c, d, 3), !c && 1 == f) {
                            var g = e[0];
                            if (d = b[g], ic(d)) return null != a && d === a[g] && Kd.call(a, g);
                        }
                        for (var g = vd(f), h = vd(f); f--; ) d = g[f] = b[e[f]], h[f] = ic(d);
                        return vb(a, e, g, h, c);
                    }, b.isNaN = function(a) {
                        return ad(a) && a != +a;
                    }, b.isNative = _c, b.isNull = function(a) {
                        return null === a;
                    }, b.isNumber = ad, b.isObject = $c, b.isPlainObject = Je, b.isRegExp = bd, b.isString = cd, 
                    b.isTypedArray = dd, b.isUndefined = function(a) {
                        return "undefined" == typeof a;
                    }, b.kebabCase = Oe, b.last = function(a) {
                        var b = a ? a.length : 0;
                        return b ? a[b - 1] : y;
                    }, b.lastIndexOf = function(a, b, c) {
                        var d = a ? a.length : 0;
                        if (!d) return -1;
                        var e = d;
                        if ("number" == typeof c) e = (0 > c ? fe(d + c, 0) : ge(c || 0, d - 1)) + 1; else if (c) return e = Ib(a, b, !0) - 1, 
                        a = a[e], (b === b ? b === a : a !== a) ? e : -1;
                        if (b !== b) return q(a, e, !0);
                        for (;e--; ) if (a[e] === b) return e;
                        return -1;
                    }, b.max = Ce, b.min = De, b.noConflict = function() {
                        return a._ = Nd, this;
                    }, b.noop = ud, b.now = Fe, b.pad = function(a, b, c) {
                        a = h(a), b = +b;
                        var d = a.length;
                        return b > d && de(b) ? (d = (b - d) / 2, b = Td(d), d = Rd(d), c = Vb("", d, c), 
                        c.slice(0, b) + a + c) : a;
                    }, b.padLeft = function(a, b, c) {
                        return (a = h(a)) && Vb(a, b, c) + a;
                    }, b.padRight = function(a, b, c) {
                        return (a = h(a)) && a + Vb(a, b, c);
                    }, b.parseInt = kd, b.random = function(a, b, c) {
                        c && gc(a, b, c) && (b = c = null);
                        var d = null == a, e = null == b;
                        return null == c && (e && "boolean" == typeof a ? (c = a, a = 1) : "boolean" == typeof b && (c = b, 
                        e = !0)), d && e && (b = 1, e = !1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, 
                        c || a % 1 || b % 1 ? (c = ke(), ge(a + c * (b - a + parseFloat("1e-" + ((c + "").length - 1))), b)) : Bb(a, b);
                    }, b.reduce = Ic, b.reduceRight = Jc, b.repeat = ld, b.result = function(a, b, c) {
                        return b = null == a ? y : a[b], "undefined" == typeof b && (b = c), Ie(b) ? b.call(a) : b;
                    }, b.runInContext = x, b.size = function(a) {
                        var b = a ? a.length : 0;
                        return hc(b) ? b : Le(a).length;
                    }, b.snakeCase = Pe, b.some = Mc, b.sortedIndex = function(a, b, c, d) {
                        var e = ac(c);
                        return e === db && null == c ? Ib(a, b) : Jb(a, b, e(c, d, 1));
                    }, b.sortedLastIndex = function(a, b, c, d) {
                        var e = ac(c);
                        return e === db && null == c ? Ib(a, b, !0) : Jb(a, b, e(c, d, 1), !0);
                    }, b.startCase = Qe, b.startsWith = function(a, b, c) {
                        return a = h(a), c = null == c ? 0 : ge(0 > c ? 0 : +c || 0, a.length), a.lastIndexOf(b, c) == c;
                    }, b.template = function(a, c, d) {
                        var e = b.templateSettings;
                        d && gc(a, c, d) && (c = d = null), a = h(a), c = ab(ab({}, d || c), e, _a), d = ab(ab({}, c.imports), e.imports, _a);
                        var f, g, i = Le(d), j = Gb(d, i), k = 0;
                        d = c.interpolate || Aa;
                        var l = "__p+='";
                        d = Cd((c.escape || Aa).source + "|" + d.source + "|" + (d === ta ? ua : Aa).source + "|" + (c.evaluate || Aa).source + "|$", "g");
                        var m = "sourceURL" in c ? "//# sourceURL=" + c.sourceURL + "\n" : "";
                        if (a.replace(d, function(b, c, d, e, h, i) {
                            return d || (d = e), l += a.slice(k, i).replace(Ea, p), c && (f = !0, l += "'+__e(" + c + ")+'"), 
                            h && (g = !0, l += "';" + h + ";\n__p+='"), d && (l += "'+((__t=(" + d + "))==null?'':__t)+'"), 
                            k = i + b.length, b;
                        }), l += "';", (c = c.variable) || (l = "with(obj){" + l + "}"), l = (g ? l.replace(ka, "") : l).replace(la, "$1").replace(ma, "$1;"), 
                        l = "function(" + (c || "obj") + "){" + (c ? "" : "obj||(obj={});") + "var __t,__p=''" + (f ? ",__e=_.escape" : "") + (g ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}", 
                        c = od(function() {
                            return yd(i, m + "return " + l).apply(y, j);
                        }), c.source = l, Zc(c)) throw c;
                        return c;
                    }, b.trim = md, b.trimLeft = function(a, b, c) {
                        var d = a;
                        return (a = h(a)) ? a.slice((c ? gc(d, b, c) : null == b) ? u(a) : j(a, b + "")) : a;
                    }, b.trimRight = function(a, b, c) {
                        var d = a;
                        return (a = h(a)) ? (c ? gc(d, b, c) : null == b) ? a.slice(0, v(a) + 1) : a.slice(0, k(a, b + "") + 1) : a;
                    }, b.trunc = function(a, b, c) {
                        c && gc(a, b, c) && (b = null);
                        var d = J;
                        if (c = K, null != b) if ($c(b)) {
                            var e = "separator" in b ? b.separator : e, d = "length" in b ? +b.length || 0 : d;
                            c = "omission" in b ? h(b.omission) : c;
                        } else d = +b || 0;
                        if (a = h(a), d >= a.length) return a;
                        if (d -= c.length, 1 > d) return c;
                        if (b = a.slice(0, d), null == e) return b + c;
                        if (bd(e)) {
                            if (a.slice(d).search(e)) {
                                var f, g = a.slice(0, d);
                                for (e.global || (e = Cd(e.source, (va.exec(e) || "") + "g")), e.lastIndex = 0; a = e.exec(g); ) f = a.index;
                                b = b.slice(0, null == f ? d : f);
                            }
                        } else a.indexOf(e, d) != d && (e = b.lastIndexOf(e), e > -1 && (b = b.slice(0, e)));
                        return b + c;
                    }, b.unescape = function(a) {
                        return (a = h(a)) && pa.test(a) ? a.replace(na, w) : a;
                    }, b.uniqueId = function(a) {
                        var b = ++Ld;
                        return h(a) + b;
                    }, b.words = nd, b.all = Bc, b.any = Mc, b.contains = Gc, b.detect = Dc, b.foldl = Ic, 
                    b.foldr = Jc, b.head = tc, b.include = Gc, b.inject = Ic, td(b, function() {
                        var a = {};
                        return qb(b, function(c, d) {
                            b.prototype[d] || (a[d] = c);
                        }), a;
                    }(), !1), b.sample = Kc, b.prototype.sample = function(a) {
                        return this.__chain__ || null != a ? this.thru(function(b) {
                            return Kc(b, a);
                        }) : Kc(this.value());
                    }, b.VERSION = z, Ra("bind bindKey curry curryRight partial partialRight".split(" "), function(a) {
                        b[a].placeholder = b;
                    }), Ra([ "filter", "map", "takeWhile" ], function(a, b) {
                        var c = b == N || b == P;
                        La.prototype[a] = function(a, d) {
                            var e = this.clone(), f = e.__iteratees__ || (e.__iteratees__ = []);
                            return e.__filtered__ = e.__filtered__ || c, f.push({
                                iteratee: ac(a, d, 3),
                                type: b
                            }), e;
                        };
                    }), Ra([ "drop", "take" ], function(a, b) {
                        var c = "__" + a + "Count__", d = a + "While";
                        La.prototype[a] = function(d) {
                            d = null == d ? 1 : fe(Td(d) || 0, 0);
                            var e = this.clone();
                            if (e.__filtered__) {
                                var f = e[c];
                                e[c] = b ? ge(f, d) : f + d;
                            } else (e.__views__ || (e.__views__ = [])).push({
                                size: d,
                                type: a + (0 > e.__dir__ ? "Right" : "")
                            });
                            return e;
                        }, La.prototype[a + "Right"] = function(b) {
                            return this.reverse()[a](b).reverse();
                        }, La.prototype[a + "RightWhile"] = function(a, b) {
                            return this.reverse()[d](a, b).reverse();
                        };
                    }), Ra([ "first", "last" ], function(a, b) {
                        var c = "take" + (b ? "Right" : "");
                        La.prototype[a] = function() {
                            return this[c](1).value()[0];
                        };
                    }), Ra([ "initial", "rest" ], function(a, b) {
                        var c = "drop" + (b ? "" : "Right");
                        La.prototype[a] = function() {
                            return this[c](1);
                        };
                    }), Ra([ "pluck", "where" ], function(a, b) {
                        var c = b ? "filter" : "map", d = b ? xb : Ab;
                        La.prototype[a] = function(a) {
                            return this[c](d(a));
                        };
                    }), La.prototype.compact = function() {
                        return this.filter(rd);
                    }, La.prototype.dropWhile = function(a, b) {
                        var c, d, e = 0 > this.__dir__;
                        return a = ac(a, b, 3), this.filter(function(b, f, g) {
                            return c = c && (e ? d > f : f > d), d = f, c || (c = !a(b, f, g));
                        });
                    }, La.prototype.reject = function(a, b) {
                        return a = ac(a, b, 3), this.filter(function(b, c, d) {
                            return !a(b, c, d);
                        });
                    }, La.prototype.slice = function(a, b) {
                        a = null == a ? 0 : +a || 0;
                        var c = 0 > a ? this.takeRight(-a) : this.drop(a);
                        return "undefined" != typeof b && (b = +b || 0, c = 0 > b ? c.dropRight(-b) : c.take(b - a)), 
                        c;
                    }, La.prototype.toArray = function() {
                        return this.drop(0);
                    }, qb(La.prototype, function(a, c) {
                        var d = b[c], e = /^(?:first|last)$/.test(c);
                        b.prototype[c] = function() {
                            function c(a) {
                                return a = [ a ], Vd.apply(a, g), d.apply(b, a);
                            }
                            var f = this.__wrapped__, g = arguments, h = this.__chain__, i = !!this.__actions__.length, j = f instanceof La, k = j && !i;
                            return e && !h ? k ? a.call(f) : d.call(b, this.value()) : j || Ge(f) ? (f = a.apply(k ? f : new La(this), g), 
                            e || !i && !f.__actions__ || (f.__actions__ || (f.__actions__ = [])).push({
                                func: Ac,
                                args: [ c ],
                                thisArg: b
                            }), new s(f, h)) : this.thru(c);
                        };
                    }), Ra("concat join pop push shift sort splice unshift".split(" "), function(a) {
                        var c = Fd[a], d = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", e = /^(?:join|pop|shift)$/.test(a);
                        b.prototype[a] = function() {
                            var a = arguments;
                            return e && !this.__chain__ ? c.apply(this.value(), a) : this[d](function(b) {
                                return c.apply(b, a);
                            });
                        };
                    }), La.prototype.clone = function() {
                        var a = this.__actions__, b = this.__iteratees__, c = this.__views__, d = new La(this.__wrapped__);
                        return d.__actions__ = a ? Pa(a) : null, d.__dir__ = this.__dir__, d.__dropCount__ = this.__dropCount__, 
                        d.__filtered__ = this.__filtered__, d.__iteratees__ = b ? Pa(b) : null, d.__takeCount__ = this.__takeCount__, 
                        d.__views__ = c ? Pa(c) : null, d;
                    }, La.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var a = new La(this);
                            a.__dir__ = -1, a.__filtered__ = !0;
                        } else a = this.clone(), a.__dir__ *= -1;
                        return a;
                    }, La.prototype.value = function() {
                        var a = this.__wrapped__.value();
                        if (!Ge(a)) return Hb(a, this.__actions__);
                        var b, c = this.__dir__, d = 0 > c;
                        b = a.length;
                        for (var e = this.__views__, f = 0, g = -1, h = e ? e.length : 0; ++g < h; ) {
                            var i = e[g], j = i.size;
                            switch (i.type) {
                              case "drop":
                                f += j;
                                break;

                              case "dropRight":
                                b -= j;
                                break;

                              case "take":
                                b = ge(b, f + j);
                                break;

                              case "takeRight":
                                f = fe(f, b - j);
                            }
                        }
                        b = {
                            start: f,
                            end: b
                        }, g = b.start, h = b.end, b = h - g, e = this.__dropCount__, f = ge(b, this.__takeCount__), 
                        d = d ? h : g - 1, h = (g = this.__iteratees__) ? g.length : 0, i = 0, j = [];
                        a: for (;b-- && f > i; ) {
                            for (var d = d + c, k = -1, l = a[d]; ++k < h; ) {
                                var m = g[k], n = m.iteratee(l, d, a), m = m.type;
                                if (m == O) l = n; else if (!n) {
                                    if (m == N) continue a;
                                    break a;
                                }
                            }
                            e ? e-- : j[i++] = l;
                        }
                        return j;
                    }, b.prototype.chain = function() {
                        return zc(this);
                    }, b.prototype.commit = function() {
                        return new s(this.value(), this.__chain__);
                    }, b.prototype.plant = function(a) {
                        for (var b, d = this; d instanceof c; ) {
                            var e = pc(d);
                            b ? f.__wrapped__ = e : b = e;
                            var f = e, d = d.__wrapped__;
                        }
                        return f.__wrapped__ = a, b;
                    }, b.prototype.reverse = function() {
                        var a = this.__wrapped__;
                        return a instanceof La ? (this.__actions__.length && (a = new La(this)), new s(a.reverse(), this.__chain__)) : this.thru(function(a) {
                            return a.reverse();
                        });
                    }, b.prototype.toString = function() {
                        return this.value() + "";
                    }, b.prototype.run = b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = function() {
                        return Hb(this.__wrapped__, this.__actions__);
                    }, b.prototype.collect = b.prototype.map, b.prototype.head = b.prototype.first, 
                    b.prototype.select = b.prototype.filter, b.prototype.tail = b.prototype.rest, b;
                }
                var y, z = "3.3.1", A = 1, B = 2, C = 4, D = 8, E = 16, F = 32, G = 64, H = 128, I = 256, J = 30, K = "...", L = 150, M = 16, N = 0, O = 1, P = 2, Q = "Expected a function", R = "__lodash_placeholder__", S = "[object Arguments]", T = "[object Array]", U = "[object Boolean]", V = "[object Date]", W = "[object Error]", X = "[object Function]", Y = "[object Number]", Z = "[object Object]", $ = "[object RegExp]", _ = "[object String]", aa = "[object ArrayBuffer]", ba = "[object Float32Array]", ca = "[object Float64Array]", da = "[object Int8Array]", ea = "[object Int16Array]", fa = "[object Int32Array]", ga = "[object Uint8Array]", ha = "[object Uint8ClampedArray]", ia = "[object Uint16Array]", ja = "[object Uint32Array]", ka = /\b__p\+='';/g, la = /\b(__p\+=)''\+/g, ma = /(__e\(.*?\)|\b__t\))\+'';/g, na = /&(?:amp|lt|gt|quot|#39|#96);/g, oa = /[&<>"'`]/g, pa = RegExp(na.source), qa = RegExp(oa.source), ra = /<%-([\s\S]+?)%>/g, sa = /<%([\s\S]+?)%>/g, ta = /<%=([\s\S]+?)%>/g, ua = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, va = /\w*$/, wa = /^\s*function[ \n\r\t]+\w/, xa = /^0[xX]/, ya = /^\[object .+?Constructor\]$/, za = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, Aa = /($^)/, Ba = /[.*+?^${}()|[\]\/\\]/g, Ca = RegExp(Ba.source), Da = /\bthis\b/, Ea = /['\n\r\u2028\u2029\\]/g, Fa = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]{2,}(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"), Ga = " 	\f \ufeff\n\r\u2028\u2029 ᠎             　", Ha = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window WinRTError".split(" "), Ia = {};
                Ia[ba] = Ia[ca] = Ia[da] = Ia[ea] = Ia[fa] = Ia[ga] = Ia[ha] = Ia[ia] = Ia[ja] = !0, 
                Ia[S] = Ia[T] = Ia[aa] = Ia[U] = Ia[V] = Ia[W] = Ia[X] = Ia["[object Map]"] = Ia[Y] = Ia[Z] = Ia[$] = Ia["[object Set]"] = Ia[_] = Ia["[object WeakMap]"] = !1;
                var Ja = {};
                Ja[S] = Ja[T] = Ja[aa] = Ja[U] = Ja[V] = Ja[ba] = Ja[ca] = Ja[da] = Ja[ea] = Ja[fa] = Ja[Y] = Ja[Z] = Ja[$] = Ja[_] = Ja[ga] = Ja[ha] = Ja[ia] = Ja[ja] = !0, 
                Ja[W] = Ja[X] = Ja["[object Map]"] = Ja["[object Set]"] = Ja["[object WeakMap]"] = !1;
                var Ka = {
                    leading: !1,
                    maxWait: 0,
                    trailing: !1
                }, La = {
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss"
                }, Ma = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "`": "&#96;"
                }, Na = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'",
                    "&#96;": "`"
                }, Oa = {
                    "function": !0,
                    object: !0
                }, Pa = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, Qa = Oa[typeof window] && window !== (this && this.window) ? window : this, Ra = Oa[typeof c] && c && !c.nodeType && c, Oa = Oa[typeof b] && b && !b.nodeType && b, Sa = Ra && Oa && "object" == typeof a && a;
                !Sa || Sa.global !== Sa && Sa.window !== Sa && Sa.self !== Sa || (Qa = Sa);
                var Sa = Oa && Oa.exports === Ra && Ra, Ta = x();
                "function" == typeof define && "object" == typeof define.amd && define.amd ? (Qa._ = Ta, 
                define(function() {
                    return Ta;
                })) : Ra && Oa ? Sa ? (Oa.exports = Ta)._ = Ta : Ra._ = Ta : Qa._ = Ta;
            }).call(this);
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {} ],
    5: [ function(a, b, c) {
        !function() {
            var a = {
                VERSION: "2.3.5",
                Result: {
                    SUCCEEDED: 1,
                    NOTRANSITION: 2,
                    CANCELLED: 3,
                    PENDING: 4
                },
                Error: {
                    INVALID_TRANSITION: 100,
                    PENDING_TRANSITION: 200,
                    INVALID_CALLBACK: 300
                },
                WILDCARD: "*",
                ASYNC: "async",
                create: function(b, c) {
                    var d = "string" == typeof b.initial ? {
                        state: b.initial
                    } : b.initial, e = b.terminal || b["final"], f = c || b.target || {}, g = b.events || [], h = b.callbacks || {}, i = {}, j = {}, k = function(b) {
                        var c = b.from instanceof Array ? b.from : b.from ? [ b.from ] : [ a.WILDCARD ];
                        i[b.name] = i[b.name] || {};
                        for (var d = 0; d < c.length; d++) j[c[d]] = j[c[d]] || [], j[c[d]].push(b.name), 
                        i[b.name][c[d]] = b.to || c[d];
                    };
                    d && (d.event = d.event || "startup", k({
                        name: d.event,
                        from: "none",
                        to: d.state
                    }));
                    for (var l = 0; l < g.length; l++) k(g[l]);
                    for (var m in i) i.hasOwnProperty(m) && (f[m] = a.buildEvent(m, i[m]));
                    for (var m in h) h.hasOwnProperty(m) && (f[m] = h[m]);
                    return f.current = "none", f.is = function(a) {
                        return a instanceof Array ? a.indexOf(this.current) >= 0 : this.current === a;
                    }, f.can = function(b) {
                        return !this.transition && (i[b].hasOwnProperty(this.current) || i[b].hasOwnProperty(a.WILDCARD));
                    }, f.cannot = function(a) {
                        return !this.can(a);
                    }, f.transitions = function() {
                        return j[this.current];
                    }, f.isFinished = function() {
                        return this.is(e);
                    }, f.error = b.error || function(a, b, c, d, e, f, g) {
                        throw g || f;
                    }, d && !d.defer && f[d.event](), f;
                },
                doCallback: function(b, c, d, e, f, g) {
                    if (c) try {
                        return c.apply(b, [ d, e, f ].concat(g));
                    } catch (h) {
                        return b.error(d, e, f, g, a.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", h);
                    }
                },
                beforeAnyEvent: function(b, c, d, e, f) {
                    return a.doCallback(b, b.onbeforeevent, c, d, e, f);
                },
                afterAnyEvent: function(b, c, d, e, f) {
                    return a.doCallback(b, b.onafterevent || b.onevent, c, d, e, f);
                },
                leaveAnyState: function(b, c, d, e, f) {
                    return a.doCallback(b, b.onleavestate, c, d, e, f);
                },
                enterAnyState: function(b, c, d, e, f) {
                    return a.doCallback(b, b.onenterstate || b.onstate, c, d, e, f);
                },
                changeState: function(b, c, d, e, f) {
                    return a.doCallback(b, b.onchangestate, c, d, e, f);
                },
                beforeThisEvent: function(b, c, d, e, f) {
                    return a.doCallback(b, b["onbefore" + c], c, d, e, f);
                },
                afterThisEvent: function(b, c, d, e, f) {
                    return a.doCallback(b, b["onafter" + c] || b["on" + c], c, d, e, f);
                },
                leaveThisState: function(b, c, d, e, f) {
                    return a.doCallback(b, b["onleave" + d], c, d, e, f);
                },
                enterThisState: function(b, c, d, e, f) {
                    return a.doCallback(b, b["onenter" + e] || b["on" + e], c, d, e, f);
                },
                beforeEvent: function(b, c, d, e, f) {
                    return !1 === a.beforeThisEvent(b, c, d, e, f) || !1 === a.beforeAnyEvent(b, c, d, e, f) ? !1 : void 0;
                },
                afterEvent: function(b, c, d, e, f) {
                    a.afterThisEvent(b, c, d, e, f), a.afterAnyEvent(b, c, d, e, f);
                },
                leaveState: function(b, c, d, e, f) {
                    var g = a.leaveThisState(b, c, d, e, f), h = a.leaveAnyState(b, c, d, e, f);
                    return !1 === g || !1 === h ? !1 : a.ASYNC === g || a.ASYNC === h ? a.ASYNC : void 0;
                },
                enterState: function(b, c, d, e, f) {
                    a.enterThisState(b, c, d, e, f), a.enterAnyState(b, c, d, e, f);
                },
                buildEvent: function(b, c) {
                    return function() {
                        var d = this.current, e = c[d] || c[a.WILDCARD] || d, f = Array.prototype.slice.call(arguments);
                        if (this.transition) return this.error(b, d, e, f, a.Error.PENDING_TRANSITION, "event " + b + " inappropriate because previous transition did not complete");
                        if (this.cannot(b)) return this.error(b, d, e, f, a.Error.INVALID_TRANSITION, "event " + b + " inappropriate in current state " + this.current);
                        if (!1 === a.beforeEvent(this, b, d, e, f)) return a.Result.CANCELLED;
                        if (d === e) return a.afterEvent(this, b, d, e, f), a.Result.NOTRANSITION;
                        var g = this;
                        this.transition = function() {
                            return g.transition = null, g.current = e, a.enterState(g, b, d, e, f), a.changeState(g, b, d, e, f), 
                            a.afterEvent(g, b, d, e, f), a.Result.SUCCEEDED;
                        }, this.transition.cancel = function() {
                            g.transition = null, a.afterEvent(g, b, d, e, f);
                        };
                        var h = a.leaveState(this, b, d, e, f);
                        return !1 === h ? (this.transition = null, a.Result.CANCELLED) : a.ASYNC === h ? a.Result.PENDING : this.transition ? this.transition() : void 0;
                    };
                }
            };
            "undefined" != typeof c ? ("undefined" != typeof b && b.exports && (c = b.exports = a), 
            c.StateMachine = a) : "function" == typeof define && define.amd ? define(function(b) {
                return a;
            }) : "undefined" != typeof window ? window.StateMachine = a : "undefined" != typeof self && (self.StateMachine = a);
        }();
    }, {} ],
    6: [ function(a, b, c) {
        var d = function() {
            function a(a) {
                return null == a ? String(a) : U[V.call(a)] || "object";
            }
            function b(b) {
                return "function" == a(b);
            }
            function c(a) {
                return null != a && a == a.window;
            }
            function d(a) {
                return null != a && a.nodeType == a.DOCUMENT_NODE;
            }
            function e(b) {
                return "object" == a(b);
            }
            function f(a) {
                return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype;
            }
            function g(a) {
                return "number" == typeof a.length;
            }
            function h(a) {
                return D.call(a, function(a) {
                    return null != a;
                });
            }
            function i(a) {
                return a.length > 0 ? x.fn.concat.apply([], a) : a;
            }
            function j(a) {
                return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
            }
            function k(a) {
                return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)");
            }
            function l(a, b) {
                return "number" != typeof b || H[j(a)] ? b : b + "px";
            }
            function m(a) {
                var b, c;
                return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), 
                b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c), F[a];
            }
            function n(a) {
                return "children" in a ? C.call(a.children) : x.map(a.childNodes, function(a) {
                    return 1 == a.nodeType ? a : void 0;
                });
            }
            function o(a, b, c) {
                for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), 
                o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w]);
            }
            function p(a, b) {
                return null == b ? x(a) : x(a).filter(b);
            }
            function q(a, c, d, e) {
                return b(c) ? c.call(a, d, e) : c;
            }
            function r(a, b, c) {
                null == c ? a.removeAttribute(b) : a.setAttribute(b, c);
            }
            function s(a, b) {
                var c = a.className || "", d = c && c.baseVal !== v;
                return b === v ? d ? c.baseVal : c : void (d ? c.baseVal = b : a.className = b);
            }
            function t(a) {
                try {
                    return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : +a + "" == a ? +a : /^[\[\{]/.test(a) ? x.parseJSON(a) : a) : a;
                } catch (b) {
                    return a;
                }
            }
            function u(a, b) {
                b(a);
                for (var c = 0, d = a.childNodes.length; d > c; c++) u(a.childNodes[c], b);
            }
            var v, w, x, y, z, A, B = [], C = B.slice, D = B.filter, E = window.document, F = {}, G = {}, H = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            }, I = /^\s*<(\w+|!)[^>]*>/, J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, L = /^(?:body|html)$/i, M = /([A-Z])/g, N = [ "val", "css", "html", "text", "data", "width", "height", "offset" ], O = [ "after", "prepend", "before", "append" ], P = E.createElement("table"), Q = E.createElement("tr"), R = {
                tr: E.createElement("tbody"),
                tbody: P,
                thead: P,
                tfoot: P,
                td: Q,
                th: Q,
                "*": E.createElement("div")
            }, S = /complete|loaded|interactive/, T = /^[\w-]*$/, U = {}, V = U.toString, W = {}, X = E.createElement("div"), Y = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, Z = Array.isArray || function(a) {
                return a instanceof Array;
            };
            return W.matches = function(a, b) {
                if (!b || !a || 1 !== a.nodeType) return !1;
                var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
                if (c) return c.call(a, b);
                var d, e = a.parentNode, f = !e;
                return f && (e = X).appendChild(a), d = ~W.qsa(e, b).indexOf(a), f && X.removeChild(a), 
                d;
            }, z = function(a) {
                return a.replace(/-+(.)?/g, function(a, b) {
                    return b ? b.toUpperCase() : "";
                });
            }, A = function(a) {
                return D.call(a, function(b, c) {
                    return a.indexOf(b) == c;
                });
            }, W.fragment = function(a, b, c) {
                var d, e, g;
                return J.test(a) && (d = x(E.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(K, "<$1></$2>")), 
                b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, 
                d = x.each(C.call(g.childNodes), function() {
                    g.removeChild(this);
                })), f(c) && (e = x(d), x.each(c, function(a, b) {
                    N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b);
                })), d;
            }, W.Z = function(a, b) {
                return a = a || [], a.__proto__ = x.fn, a.selector = b || "", a;
            }, W.isZ = function(a) {
                return a instanceof W.Z;
            }, W.init = function(a, c) {
                var d;
                if (!a) return W.Z();
                if ("string" == typeof a) if (a = a.trim(), "<" == a[0] && I.test(a)) d = W.fragment(a, RegExp.$1, c), 
                a = null; else {
                    if (c !== v) return x(c).find(a);
                    d = W.qsa(E, a);
                } else {
                    if (b(a)) return x(E).ready(a);
                    if (W.isZ(a)) return a;
                    if (Z(a)) d = h(a); else if (e(a)) d = [ a ], a = null; else if (I.test(a)) d = W.fragment(a.trim(), RegExp.$1, c), 
                    a = null; else {
                        if (c !== v) return x(c).find(a);
                        d = W.qsa(E, a);
                    }
                }
                return W.Z(d, a);
            }, x = function(a, b) {
                return W.init(a, b);
            }, x.extend = function(a) {
                var b, c = C.call(arguments, 1);
                return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
                    o(a, c, b);
                }), a;
            }, W.qsa = function(a, b) {
                var c, e = "#" == b[0], f = !e && "." == b[0], g = e || f ? b.slice(1) : b, h = T.test(g);
                return d(a) && h && e ? (c = a.getElementById(g)) ? [ c ] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b));
            }, x.contains = E.documentElement.contains ? function(a, b) {
                return a !== b && a.contains(b);
            } : function(a, b) {
                for (;b && (b = b.parentNode); ) if (b === a) return !0;
                return !1;
            }, x.type = a, x.isFunction = b, x.isWindow = c, x.isArray = Z, x.isPlainObject = f, 
            x.isEmptyObject = function(a) {
                var b;
                for (b in a) return !1;
                return !0;
            }, x.inArray = function(a, b, c) {
                return B.indexOf.call(b, a, c);
            }, x.camelCase = z, x.trim = function(a) {
                return null == a ? "" : String.prototype.trim.call(a);
            }, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function(a, b) {
                var c, d, e, f = [];
                if (g(a)) for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c); else for (e in a) c = b(a[e], e), 
                null != c && f.push(c);
                return i(f);
            }, x.each = function(a, b) {
                var c, d;
                if (g(a)) {
                    for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a;
                } else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
                return a;
            }, x.grep = function(a, b) {
                return D.call(a, b);
            }, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                U["[object " + b + "]"] = b.toLowerCase();
            }), x.fn = {
                forEach: B.forEach,
                reduce: B.reduce,
                push: B.push,
                sort: B.sort,
                indexOf: B.indexOf,
                concat: B.concat,
                map: function(a) {
                    return x(x.map(this, function(b, c) {
                        return a.call(b, c, b);
                    }));
                },
                slice: function() {
                    return x(C.apply(this, arguments));
                },
                ready: function(a) {
                    return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded", function() {
                        a(x);
                    }, !1), this;
                },
                get: function(a) {
                    return a === v ? C.call(this) : this[a >= 0 ? a : a + this.length];
                },
                toArray: function() {
                    return this.get();
                },
                size: function() {
                    return this.length;
                },
                remove: function() {
                    return this.each(function() {
                        null != this.parentNode && this.parentNode.removeChild(this);
                    });
                },
                each: function(a) {
                    return B.every.call(this, function(b, c) {
                        return a.call(b, c, b) !== !1;
                    }), this;
                },
                filter: function(a) {
                    return b(a) ? this.not(this.not(a)) : x(D.call(this, function(b) {
                        return W.matches(b, a);
                    }));
                },
                add: function(a, b) {
                    return x(A(this.concat(x(a, b))));
                },
                is: function(a) {
                    return this.length > 0 && W.matches(this[0], a);
                },
                not: function(a) {
                    var c = [];
                    if (b(a) && a.call !== v) this.each(function(b) {
                        a.call(this, b) || c.push(this);
                    }); else {
                        var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
                        this.forEach(function(a) {
                            d.indexOf(a) < 0 && c.push(a);
                        });
                    }
                    return x(c);
                },
                has: function(a) {
                    return this.filter(function() {
                        return e(a) ? x.contains(this, a) : x(this).find(a).size();
                    });
                },
                eq: function(a) {
                    return -1 === a ? this.slice(a) : this.slice(a, +a + 1);
                },
                first: function() {
                    var a = this[0];
                    return a && !e(a) ? a : x(a);
                },
                last: function() {
                    var a = this[this.length - 1];
                    return a && !e(a) ? a : x(a);
                },
                find: function(a) {
                    var b, c = this;
                    return b = a ? "object" == typeof a ? x(a).filter(function() {
                        var a = this;
                        return B.some.call(c, function(b) {
                            return x.contains(b, a);
                        });
                    }) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function() {
                        return W.qsa(this, a);
                    }) : x();
                },
                closest: function(a, b) {
                    var c = this[0], e = !1;
                    for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a)); ) c = c !== b && !d(c) && c.parentNode;
                    return x(c);
                },
                parents: function(a) {
                    for (var b = [], c = this; c.length > 0; ) c = x.map(c, function(a) {
                        return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0;
                    });
                    return p(b, a);
                },
                parent: function(a) {
                    return p(A(this.pluck("parentNode")), a);
                },
                children: function(a) {
                    return p(this.map(function() {
                        return n(this);
                    }), a);
                },
                contents: function() {
                    return this.map(function() {
                        return C.call(this.childNodes);
                    });
                },
                siblings: function(a) {
                    return p(this.map(function(a, b) {
                        return D.call(n(b.parentNode), function(a) {
                            return a !== b;
                        });
                    }), a);
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = "";
                    });
                },
                pluck: function(a) {
                    return x.map(this, function(b) {
                        return b[a];
                    });
                },
                show: function() {
                    return this.each(function() {
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName));
                    });
                },
                replaceWith: function(a) {
                    return this.before(a).remove();
                },
                wrap: function(a) {
                    var c = b(a);
                    if (this[0] && !c) var d = x(a).get(0), e = d.parentNode || this.length > 1;
                    return this.each(function(b) {
                        x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d);
                    });
                },
                wrapAll: function(a) {
                    if (this[0]) {
                        x(this[0]).before(a = x(a));
                        for (var b; (b = a.children()).length; ) a = b.first();
                        x(a).append(this);
                    }
                    return this;
                },
                wrapInner: function(a) {
                    var c = b(a);
                    return this.each(function(b) {
                        var d = x(this), e = d.contents(), f = c ? a.call(this, b) : a;
                        e.length ? e.wrapAll(f) : d.append(f);
                    });
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        x(this).replaceWith(x(this).children());
                    }), this;
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(!0);
                    });
                },
                hide: function() {
                    return this.css("display", "none");
                },
                toggle: function(a) {
                    return this.each(function() {
                        var b = x(this);
                        (a === v ? "none" == b.css("display") : a) ? b.show() : b.hide();
                    });
                },
                prev: function(a) {
                    return x(this.pluck("previousElementSibling")).filter(a || "*");
                },
                next: function(a) {
                    return x(this.pluck("nextElementSibling")).filter(a || "*");
                },
                html: function(a) {
                    return 0 in arguments ? this.each(function(b) {
                        var c = this.innerHTML;
                        x(this).empty().append(q(this, a, b, c));
                    }) : 0 in this ? this[0].innerHTML : null;
                },
                text: function(a) {
                    return 0 in arguments ? this.each(function(b) {
                        var c = q(this, a, b, this.textContent);
                        this.textContent = null == c ? "" : "" + c;
                    }) : 0 in this ? this[0].textContent : null;
                },
                attr: function(a, b) {
                    var c;
                    return "string" != typeof a || 1 in arguments ? this.each(function(c) {
                        if (1 === this.nodeType) if (e(a)) for (w in a) r(this, w, a[w]); else r(this, a, q(this, b, c, this.getAttribute(a)));
                    }) : this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : v;
                },
                removeAttr: function(a) {
                    return this.each(function() {
                        1 === this.nodeType && a.split(" ").forEach(function(a) {
                            r(this, a);
                        }, this);
                    });
                },
                prop: function(a, b) {
                    return a = Y[a] || a, 1 in arguments ? this.each(function(c) {
                        this[a] = q(this, b, c, this[a]);
                    }) : this[0] && this[0][a];
                },
                data: function(a, b) {
                    var c = "data-" + a.replace(M, "-$1").toLowerCase(), d = 1 in arguments ? this.attr(c, b) : this.attr(c);
                    return null !== d ? t(d) : v;
                },
                val: function(a) {
                    return 0 in arguments ? this.each(function(b) {
                        this.value = q(this, a, b, this.value);
                    }) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
                        return this.selected;
                    }).pluck("value") : this[0].value);
                },
                offset: function(a) {
                    if (a) return this.each(function(b) {
                        var c = x(this), d = q(this, a, b, c.offset()), e = c.offsetParent().offset(), f = {
                            top: d.top - e.top,
                            left: d.left - e.left
                        };
                        "static" == c.css("position") && (f.position = "relative"), c.css(f);
                    });
                    if (!this.length) return null;
                    var b = this[0].getBoundingClientRect();
                    return {
                        left: b.left + window.pageXOffset,
                        top: b.top + window.pageYOffset,
                        width: Math.round(b.width),
                        height: Math.round(b.height)
                    };
                },
                css: function(b, c) {
                    if (arguments.length < 2) {
                        var d, e = this[0];
                        if (!e) return;
                        if (d = getComputedStyle(e, ""), "string" == typeof b) return e.style[z(b)] || d.getPropertyValue(b);
                        if (Z(b)) {
                            var f = {};
                            return x.each(b, function(a, b) {
                                f[b] = e.style[z(b)] || d.getPropertyValue(b);
                            }), f;
                        }
                    }
                    var g = "";
                    if ("string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
                        this.style.removeProperty(j(b));
                    }); else for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" : this.each(function() {
                        this.style.removeProperty(j(w));
                    });
                    return this.each(function() {
                        this.style.cssText += ";" + g;
                    });
                },
                index: function(a) {
                    return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0]);
                },
                hasClass: function(a) {
                    return a ? B.some.call(this, function(a) {
                        return this.test(s(a));
                    }, k(a)) : !1;
                },
                addClass: function(a) {
                    return a ? this.each(function(b) {
                        if ("className" in this) {
                            y = [];
                            var c = s(this), d = q(this, a, b, c);
                            d.split(/\s+/g).forEach(function(a) {
                                x(this).hasClass(a) || y.push(a);
                            }, this), y.length && s(this, c + (c ? " " : "") + y.join(" "));
                        }
                    }) : this;
                },
                removeClass: function(a) {
                    return this.each(function(b) {
                        if ("className" in this) {
                            if (a === v) return s(this, "");
                            y = s(this), q(this, a, b, y).split(/\s+/g).forEach(function(a) {
                                y = y.replace(k(a), " ");
                            }), s(this, y.trim());
                        }
                    });
                },
                toggleClass: function(a, b) {
                    return a ? this.each(function(c) {
                        var d = x(this), e = q(this, a, c, s(this));
                        e.split(/\s+/g).forEach(function(a) {
                            (b === v ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a);
                        });
                    }) : this;
                },
                scrollTop: function(a) {
                    if (this.length) {
                        var b = "scrollTop" in this[0];
                        return a === v ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function() {
                            this.scrollTop = a;
                        } : function() {
                            this.scrollTo(this.scrollX, a);
                        });
                    }
                },
                scrollLeft: function(a) {
                    if (this.length) {
                        var b = "scrollLeft" in this[0];
                        return a === v ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function() {
                            this.scrollLeft = a;
                        } : function() {
                            this.scrollTo(a, this.scrollY);
                        });
                    }
                },
                position: function() {
                    if (this.length) {
                        var a = this[0], b = this.offsetParent(), c = this.offset(), d = L.test(b[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : b.offset();
                        return c.top -= parseFloat(x(a).css("margin-top")) || 0, c.left -= parseFloat(x(a).css("margin-left")) || 0, 
                        d.top += parseFloat(x(b[0]).css("border-top-width")) || 0, d.left += parseFloat(x(b[0]).css("border-left-width")) || 0, 
                        {
                            top: c.top - d.top,
                            left: c.left - d.left
                        };
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position"); ) a = a.offsetParent;
                        return a;
                    });
                }
            }, x.fn.detach = x.fn.remove, [ "width", "height" ].forEach(function(a) {
                var b = a.replace(/./, function(a) {
                    return a[0].toUpperCase();
                });
                x.fn[a] = function(e) {
                    var f, g = this[0];
                    return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
                        g = x(this), g.css(a, q(this, e, b, g[a]()));
                    });
                };
            }), O.forEach(function(b, c) {
                var d = c % 2;
                x.fn[b] = function() {
                    var b, e, f = x.map(arguments, function(c) {
                        return b = a(c), "object" == b || "array" == b || null == c ? c : W.fragment(c);
                    }), g = this.length > 1;
                    return f.length < 1 ? this : this.each(function(a, b) {
                        e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null;
                        var h = x.contains(E.documentElement, e);
                        f.forEach(function(a) {
                            if (g) a = a.cloneNode(!0); else if (!e) return x(a).remove();
                            e.insertBefore(a, b), h && u(a, function(a) {
                                null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML);
                            });
                        });
                    });
                }, x.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
                    return x(a)[b](this), this;
                };
            }), W.Z.prototype = x.fn, W.uniq = A, W.deserializeValue = t, x.zepto = W, x;
        }();
        window.Zepto = d, void 0 === window.$ && (window.$ = d), function(a) {
            function b(a) {
                return a._zid || (a._zid = m++);
            }
            function c(a, c, f, g) {
                if (c = d(c), c.ns) var h = e(c.ns);
                return (q[b(a)] || []).filter(function(a) {
                    return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g);
                });
            }
            function d(a) {
                var b = ("" + a).split(".");
                return {
                    e: b[0],
                    ns: b.slice(1).sort().join(" ")
                };
            }
            function e(a) {
                return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)");
            }
            function f(a, b) {
                return a.del && !s && a.e in t || !!b;
            }
            function g(a) {
                return u[a] || s && t[a] || a;
            }
            function h(c, e, h, i, k, m, n) {
                var o = b(c), p = q[o] || (q[o] = []);
                e.split(/\s/).forEach(function(b) {
                    if ("ready" == b) return a(document).ready(h);
                    var e = d(b);
                    e.fn = h, e.sel = k, e.e in u && (h = function(b) {
                        var c = b.relatedTarget;
                        return !c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0;
                    }), e.del = m;
                    var o = m || h;
                    e.proxy = function(a) {
                        if (a = j(a), !a.isImmediatePropagationStopped()) {
                            a.data = i;
                            var b = o.apply(c, a._args == l ? [ a ] : [ a ].concat(a._args));
                            return b === !1 && (a.preventDefault(), a.stopPropagation()), b;
                        }
                    }, e.i = p.length, p.push(e), "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n));
                });
            }
            function i(a, d, e, h, i) {
                var j = b(a);
                (d || "").split(/\s/).forEach(function(b) {
                    c(a, b, e, h).forEach(function(b) {
                        delete q[j][b.i], "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i));
                    });
                });
            }
            function j(b, c) {
                return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y, function(a, d) {
                    var e = c[a];
                    b[a] = function() {
                        return this[d] = v, e && e.apply(c, arguments);
                    }, b[d] = w;
                }), (c.defaultPrevented !== l ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)), 
                b;
            }
            function k(a) {
                var b, c = {
                    originalEvent: a
                };
                for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
                return j(c, a);
            }
            var l, m = 1, n = Array.prototype.slice, o = a.isFunction, p = function(a) {
                return "string" == typeof a;
            }, q = {}, r = {}, s = "onfocusin" in window, t = {
                focus: "focusin",
                blur: "focusout"
            }, u = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
            r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", a.event = {
                add: h,
                remove: i
            }, a.proxy = function(c, d) {
                var e = 2 in arguments && n.call(arguments, 2);
                if (o(c)) {
                    var f = function() {
                        return c.apply(d, e ? e.concat(n.call(arguments)) : arguments);
                    };
                    return f._zid = b(c), f;
                }
                if (p(d)) return e ? (e.unshift(c[d], c), a.proxy.apply(null, e)) : a.proxy(c[d], c);
                throw new TypeError("expected function");
            }, a.fn.bind = function(a, b, c) {
                return this.on(a, b, c);
            }, a.fn.unbind = function(a, b) {
                return this.off(a, b);
            }, a.fn.one = function(a, b, c, d) {
                return this.on(a, b, c, d, 1);
            };
            var v = function() {
                return !0;
            }, w = function() {
                return !1;
            }, x = /^([A-Z]|returnValue$|layer[XY]$)/, y = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            a.fn.delegate = function(a, b, c) {
                return this.on(b, a, c);
            }, a.fn.undelegate = function(a, b, c) {
                return this.off(b, a, c);
            }, a.fn.live = function(b, c) {
                return a(document.body).delegate(this.selector, b, c), this;
            }, a.fn.die = function(b, c) {
                return a(document.body).undelegate(this.selector, b, c), this;
            }, a.fn.on = function(b, c, d, e, f) {
                var g, j, m = this;
                return b && !p(b) ? (a.each(b, function(a, b) {
                    m.on(a, c, d, b, f);
                }), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, 
                d = l), e === !1 && (e = w), m.each(function(l, m) {
                    f && (g = function(a) {
                        return i(m, a.type, e), e.apply(this, arguments);
                    }), c && (j = function(b) {
                        var d, f = a(b.target).closest(c, m).get(0);
                        return f && f !== m ? (d = a.extend(k(b), {
                            currentTarget: f,
                            liveFired: m
                        }), (g || e).apply(f, [ d ].concat(n.call(arguments, 1)))) : void 0;
                    }), h(m, b, e, d, c, j || g);
                }));
            }, a.fn.off = function(b, c, d) {
                var e = this;
                return b && !p(b) ? (a.each(b, function(a, b) {
                    e.off(a, c, b);
                }), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function() {
                    i(this, b, d, c);
                }));
            }, a.fn.trigger = function(b, c) {
                return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b), b._args = c, this.each(function() {
                    b.type in t && "function" == typeof this[b.type] ? this[b.type]() : "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c);
                });
            }, a.fn.triggerHandler = function(b, d) {
                var e, f;
                return this.each(function(g, h) {
                    e = k(p(b) ? a.Event(b) : b), e._args = d, e.target = h, a.each(c(h, b.type || b), function(a, b) {
                        return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0;
                    });
                }), f;
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
                a.fn[b] = function(a) {
                    return 0 in arguments ? this.bind(b, a) : this.trigger(b);
                };
            }), a.Event = function(a, b) {
                p(a) || (b = a, a = b.type);
                var c = document.createEvent(r[a] || "Events"), d = !0;
                if (b) for (var e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
                return c.initEvent(a, d, !0), j(c);
            };
        }(d), function(a) {
            function b(b, c, d) {
                var e = a.Event(c);
                return a(b).trigger(e, d), !e.isDefaultPrevented();
            }
            function c(a, c, d, e) {
                return a.global ? b(c || s, d, e) : void 0;
            }
            function d(b) {
                b.global && 0 === a.active++ && c(b, null, "ajaxStart");
            }
            function e(b) {
                b.global && !--a.active && c(b, null, "ajaxStop");
            }
            function f(a, b) {
                var d = b.context;
                return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [ a, b ]) === !1 ? !1 : void c(b, d, "ajaxSend", [ a, b ]);
            }
            function g(a, b, d, e) {
                var f = d.context, g = "success";
                d.success.call(f, a, g, b), e && e.resolveWith(f, [ a, g, b ]), c(d, f, "ajaxSuccess", [ b, d, a ]), 
                i(g, b, d);
            }
            function h(a, b, d, e, f) {
                var g = e.context;
                e.error.call(g, d, b, a), f && f.rejectWith(g, [ d, b, a ]), c(e, g, "ajaxError", [ d, e, a || b ]), 
                i(b, d, e);
            }
            function i(a, b, d) {
                var f = d.context;
                d.complete.call(f, b, a), c(d, f, "ajaxComplete", [ b, d ]), e(d);
            }
            function j() {}
            function k(a) {
                return a && (a = a.split(";", 2)[0]), a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text";
            }
            function l(a, b) {
                return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?");
            }
            function m(b) {
                b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), 
                !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), 
                b.data = void 0);
            }
            function n(b, c, d, e) {
                return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d, 
                d = void 0), {
                    url: b,
                    data: c,
                    success: d,
                    dataType: e
                };
            }
            function o(b, c, d, e) {
                var f, g = a.isArray(c), h = a.isPlainObject(c);
                a.each(c, function(c, i) {
                    f = a.type(i), e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), 
                    !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i);
                });
            }
            var p, q, r = 0, s = window.document, t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, u = /^(?:text|application)\/javascript/i, v = /^(?:text|application)\/xml/i, w = "application/json", x = "text/html", y = /^\s*$/, z = s.createElement("a");
            z.href = window.location.href, a.active = 0, a.ajaxJSONP = function(b, c) {
                if (!("type" in b)) return a.ajax(b);
                var d, e, i = b.jsonpCallback, j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r, k = s.createElement("script"), l = window[j], m = function(b) {
                    a(k).triggerHandler("error", b || "abort");
                }, n = {
                    abort: m
                };
                return c && c.promise(n), a(k).on("load error", function(f, i) {
                    clearTimeout(e), a(k).off().remove(), "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c), 
                    window[j] = l, d && a.isFunction(l) && l(d[0]), l = d = void 0;
                }), f(n, b) === !1 ? (m("abort"), n) : (window[j] = function() {
                    d = arguments;
                }, k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function() {
                    m("timeout");
                }, b.timeout)), n);
            }, a.ajaxSettings = {
                type: "GET",
                beforeSend: j,
                success: j,
                error: j,
                complete: j,
                context: null,
                global: !0,
                xhr: function() {
                    return new window.XMLHttpRequest();
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: w,
                    xml: "application/xml, text/xml",
                    html: x,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0
            }, a.ajax = function(b) {
                var c, e = a.extend({}, b || {}), i = a.Deferred && a.Deferred();
                for (p in a.ajaxSettings) void 0 === e[p] && (e[p] = a.ajaxSettings[p]);
                d(e), e.crossDomain || (c = s.createElement("a"), c.href = e.url, c.href = c.href, 
                e.crossDomain = z.protocol + "//" + z.host != c.protocol + "//" + c.host), e.url || (e.url = window.location.toString()), 
                m(e);
                var n = e.dataType, o = /\?.+=\?/.test(e.url);
                if (o && (n = "jsonp"), e.cache !== !1 && (b && b.cache === !0 || "script" != n && "jsonp" != n) || (e.url = l(e.url, "_=" + Date.now())), 
                "jsonp" == n) return o || (e.url = l(e.url, e.jsonp ? e.jsonp + "=?" : e.jsonp === !1 ? "" : "callback=?")), 
                a.ajaxJSONP(e, i);
                var r, t = e.accepts[n], u = {}, v = function(a, b) {
                    u[a.toLowerCase()] = [ a, b ];
                }, w = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol, x = e.xhr(), A = x.setRequestHeader;
                if (i && i.promise(x), e.crossDomain || v("X-Requested-With", "XMLHttpRequest"), 
                v("Accept", t || "*/*"), (t = e.mimeType || t) && (t.indexOf(",") > -1 && (t = t.split(",", 2)[0]), 
                x.overrideMimeType && x.overrideMimeType(t)), (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && v("Content-Type", e.contentType || "application/x-www-form-urlencoded"), 
                e.headers) for (q in e.headers) v(q, e.headers[q]);
                if (x.setRequestHeader = v, x.onreadystatechange = function() {
                    if (4 == x.readyState) {
                        x.onreadystatechange = j, clearTimeout(r);
                        var b, c = !1;
                        if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == w) {
                            n = n || k(e.mimeType || x.getResponseHeader("content-type")), b = x.responseText;
                            try {
                                "script" == n ? (1, eval)(b) : "xml" == n ? b = x.responseXML : "json" == n && (b = y.test(b) ? null : a.parseJSON(b));
                            } catch (d) {
                                c = d;
                            }
                            c ? h(c, "parsererror", x, e, i) : g(b, x, e, i);
                        } else h(x.statusText || null, x.status ? "error" : "abort", x, e, i);
                    }
                }, f(x, e) === !1) return x.abort(), h(null, "abort", x, e, i), x;
                if (e.xhrFields) for (q in e.xhrFields) x[q] = e.xhrFields[q];
                var B = "async" in e ? e.async : !0;
                x.open(e.type, e.url, B, e.username, e.password);
                for (q in u) A.apply(x, u[q]);
                return e.timeout > 0 && (r = setTimeout(function() {
                    x.onreadystatechange = j, x.abort(), h(null, "timeout", x, e, i);
                }, e.timeout)), x.send(e.data ? e.data : null), x;
            }, a.get = function() {
                return a.ajax(n.apply(null, arguments));
            }, a.post = function() {
                var b = n.apply(null, arguments);
                return b.type = "POST", a.ajax(b);
            }, a.getJSON = function() {
                var b = n.apply(null, arguments);
                return b.dataType = "json", a.ajax(b);
            }, a.fn.load = function(b, c, d) {
                if (!this.length) return this;
                var e, f = this, g = b.split(/\s/), h = n(b, c, d), i = h.success;
                return g.length > 1 && (h.url = g[0], e = g[1]), h.success = function(b) {
                    f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b), i && i.apply(f, arguments);
                }, a.ajax(h), this;
            };
            var A = encodeURIComponent;
            a.param = function(b, c) {
                var d = [];
                return d.add = function(b, c) {
                    a.isFunction(c) && (c = c()), null == c && (c = ""), this.push(A(b) + "=" + A(c));
                }, o(d, b, c), d.join("&").replace(/%20/g, "+");
            };
        }(d), function(a) {
            function b(a, b) {
                var c = this.os = {}, d = this.browser = {}, e = a.match(/Web[kK]it[\/]{0,1}([\d.]+)/), f = a.match(/(Android);?[\s\/]+([\d.]+)?/), g = !!a.match(/\(Macintosh\; Intel /), h = a.match(/(iPad).*OS\s([\d_]+)/), i = a.match(/(iPod)(.*OS\s([\d_]+))?/), j = !h && a.match(/(iPhone\sOS)\s([\d_]+)/), k = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), l = /Win\d{2}|Windows/.test(b), m = a.match(/Windows Phone ([\d.]+)/), n = k && a.match(/TouchPad/), o = a.match(/Kindle\/([\d.]+)/), p = a.match(/Silk\/([\d._]+)/), q = a.match(/(BlackBerry).*Version\/([\d.]+)/), r = a.match(/(BB10).*Version\/([\d.]+)/), s = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/), t = a.match(/PlayBook/), u = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/), v = a.match(/Firefox\/([\d.]+)/), w = a.match(/MSIE\s([\d.]+)/) || a.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/), x = !u && a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), y = x || a.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
                (d.webkit = !!e) && (d.version = e[1]), f && (c.android = !0, c.version = f[2]), 
                j && !i && (c.ios = c.iphone = !0, c.version = j[2].replace(/_/g, ".")), h && (c.ios = c.ipad = !0, 
                c.version = h[2].replace(/_/g, ".")), i && (c.ios = c.ipod = !0, c.version = i[3] ? i[3].replace(/_/g, ".") : null), 
                m && (c.wp = !0, c.version = m[1]), k && (c.webos = !0, c.version = k[2]), n && (c.touchpad = !0), 
                q && (c.blackberry = !0, c.version = q[2]), r && (c.bb10 = !0, c.version = r[2]), 
                s && (c.rimtabletos = !0, c.version = s[2]), t && (d.playbook = !0), o && (c.kindle = !0, 
                c.version = o[1]), p && (d.silk = !0, d.version = p[1]), !p && c.android && a.match(/Kindle Fire/) && (d.silk = !0), 
                u && (d.chrome = !0, d.version = u[1]), v && (d.firefox = !0, d.version = v[1]), 
                w && (d.ie = !0, d.version = w[1]), y && (g || c.ios || l) && (d.safari = !0, c.ios || (d.version = y[1])), 
                x && (d.webview = !0), c.tablet = !!(h || t || f && !a.match(/Mobile/) || v && a.match(/Tablet/) || w && !a.match(/Phone/) && a.match(/Touch/)), 
                c.phone = !(c.tablet || c.ipod || !(f || j || k || q || r || u && a.match(/Android/) || u && a.match(/CriOS\/([\d.]+)/) || v && a.match(/Mobile/) || w && a.match(/Touch/)));
            }
            b.call(a, navigator.userAgent, navigator.platform), a.__detect = b;
        }(d), function(a) {
            function b(a, b, c, d) {
                return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down";
            }
            function c() {
                k = null, m.last && (m.el.trigger("longTap"), m = {});
            }
            function d() {
                k && clearTimeout(k), k = null;
            }
            function e() {
                h && clearTimeout(h), i && clearTimeout(i), j && clearTimeout(j), k && clearTimeout(k), 
                h = i = j = k = null, m = {};
            }
            function f(a) {
                return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary;
            }
            function g(a, b) {
                return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b;
            }
            var h, i, j, k, l, m = {}, n = 750;
            a(document).ready(function() {
                var o, p, q, r, s = 0, t = 0;
                "MSGesture" in window && (l = new MSGesture(), l.target = document.body), a(document).bind("MSGestureEnd", function(a) {
                    var b = a.velocityX > 1 ? "Right" : a.velocityX < -1 ? "Left" : a.velocityY > 1 ? "Down" : a.velocityY < -1 ? "Up" : null;
                    b && (m.el.trigger("swipe"), m.el.trigger("swipe" + b));
                }).on("touchstart MSPointerDown pointerdown", function(b) {
                    (!(r = g(b, "down")) || f(b)) && (q = r ? b : b.touches[0], b.touches && 1 === b.touches.length && m.x2 && (m.x2 = void 0, 
                    m.y2 = void 0), o = Date.now(), p = o - (m.last || o), m.el = a("tagName" in q.target ? q.target : q.target.parentNode), 
                    h && clearTimeout(h), m.x1 = q.pageX, m.y1 = q.pageY, p > 0 && 250 >= p && (m.isDoubleTap = !0), 
                    m.last = o, k = setTimeout(c, n), l && r && l.addPointer(b.pointerId));
                }).on("touchmove MSPointerMove pointermove", function(a) {
                    (!(r = g(a, "move")) || f(a)) && (q = r ? a : a.touches[0], d(), m.x2 = q.pageX, 
                    m.y2 = q.pageY, s += Math.abs(m.x1 - m.x2), t += Math.abs(m.y1 - m.y2));
                }).on("touchend MSPointerUp pointerup", function(c) {
                    (!(r = g(c, "up")) || f(c)) && (d(), m.x2 && Math.abs(m.x1 - m.x2) > 30 || m.y2 && Math.abs(m.y1 - m.y2) > 30 ? j = setTimeout(function() {
                        m.el.trigger("swipe"), m.el.trigger("swipe" + b(m.x1, m.x2, m.y1, m.y2)), m = {};
                    }, 0) : "last" in m && (30 > s && 30 > t ? i = setTimeout(function() {
                        var b = a.Event("tap");
                        b.cancelTouch = e, m.el.trigger(b), m.isDoubleTap ? (m.el && m.el.trigger("doubleTap"), 
                        m = {}) : h = setTimeout(function() {
                            h = null, m.el && m.el.trigger("singleTap"), m = {};
                        }, 250);
                    }, 0) : m = {}), s = t = 0);
                }).on("touchcancel MSPointerCancel pointercancel", e), a(window).on("scroll", e);
            }), [ "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap" ].forEach(function(b) {
                a.fn[b] = function(a) {
                    return this.on(b, a);
                };
            });
        }(d), function(a) {
            function b(a) {
                return "tagName" in a ? a : a.parentNode;
            }
            if (a.os.ios) {
                var c, d = {};
                a(document).bind("gesturestart", function(a) {
                    var e = Date.now();
                    e - (d.last || e), d.target = b(a.target), c && clearTimeout(c), d.e1 = a.scale, 
                    d.last = e;
                }).bind("gesturechange", function(a) {
                    d.e2 = a.scale;
                }).bind("gestureend", function() {
                    d.e2 > 0 ? (0 != Math.abs(d.e1 - d.e2) && a(d.target).trigger("pinch") && a(d.target).trigger("pinch" + (d.e1 - d.e2 > 0 ? "In" : "Out")), 
                    d.e1 = d.e2 = d.last = 0) : "last" in d && (d = {});
                }), [ "pinch", "pinchIn", "pinchOut" ].forEach(function(b) {
                    a.fn[b] = function(a) {
                        return this.bind(b, a);
                    };
                });
            }
        }(d);
    }, {} ],
    7: [ function(a, b, c) {
        var d = function(a) {
            return a;
        }, e = function(a) {
            $.ajax({
                url: a.url,
                type: a.type,
                dataType: "json",
                data: a.data,
                success: a.success ? a.success : function() {},
                fail: a.fail ? a.fail : function() {},
                error: function() {
                    a.fail && a.fail({}, a), a.error && a.error.apply(null, arguments);
                },
                complete: a.complete ? a.complete : function() {}
            });
        };
        c.post = function(a) {
            a.type = "POST", a = d(a), a.data = JSON.stringify(a.data), e(a);
        }, c.get = function(a) {
            a.type = "GET", e(a);
        };
    }, {} ],
    8: [ function(a, b, c) {
        b.exports = {};
    }, {} ],
    9: [ function(a, b, c) {
        var d = {
            initialize: function() {
                this.stateMachine = {}, this.stateMachine.destroy = this.stateMachine.fetch = StateMachine.create({
                    initial: "unlock",
                    events: [ {
                        name: "lock",
                        from: "unlock",
                        to: "lock"
                    }, {
                        name: "unlock",
                        from: "lock",
                        to: "unlock"
                    } ]
                });
            },
            _baseFetchOption: {
                type: "POST",
                dataType: "json"
            },
            fetchEnd: !1,
            fetchOption: {},
            fetchData: {},
            fetchSuccess: function() {},
            fetchError: function() {},
            fetchFail: function() {},
            fetchComplete: function() {
                this.stateMachine.fetch.unlock();
            },
            destroyComplete: function() {
                this.stateMachine.destroy.unlock();
            },
            fetch: function(a) {
                if (!this.fetchEnd && "lock" != this.stateMachine.fetch.current) {
                    this.stateMachine.fetch.lock();
                    var b = {};
                    b = _.merge({}, this._baseFetchOption, this.fetchOption), b.success = function(b) {
                        1 != +b.ret ? this.fetchFail.apply(this, b, a) : this.fetchSuccess.call(this, b.data);
                    }.bind(this), b.error = function() {
                        this.fetchError.apply(this, arguments);
                    }.bind(this), b.complete = this.fetchComplete.bind(this), a = _.merge({}, this.getFetchData(), a), 
                    b.data = JSON.stringify(a), Backbone.sync.call(this, "read", this, b);
                }
            }
        };
        c.Model = Backbone.Model.extend(d), c.Collection = Backbone.Collection.extend(d);
    }, {} ],
    10: [ function(a, b, c) {
        var d = 0, e = [], f = Backbone.Router.extend({
            _length: 0,
            initialize: function() {
                this.on("route", this.routeChange, this), e.push(this.routes[Backbone.history.getHash()]);
            },
            getCurrentAction: function() {
                var a = this.routes[Backbone.history.getFragment()];
                return 0 === this._length ? "init" : this._length > d ? (d = this._length, "forward") : e[e.length - 1] == a ? "forward" : "backward";
            },
            routeChange: function(a) {},
            navigate: function(a) {
                this._length++, e.push(this.routes[a]), Backbone.Router.prototype.navigate.apply(this, arguments);
            }
        });
        b.exports = f;
    }, {} ],
    11: [ function(a, b, c) {
        var d = null, e = {};
        b.exports = Backbone.View.extend({
            tagName: "view",
            rememberScrollTop: 1,
            navtpl: _.template(a("../templates/Nav.tpl")),
            headertpl: _.template(a("../templates/ViewHeader.tpl")),
            footertpl: _.template(a("../templates/ViewFooter.tpl")),
            popmenutpl: _.template(a("../templates/PopMenu.tpl")),
            _appendView: function() {
                $("#views #" + this.id).length || $("#views").append(this.el);
            },
            initialize: function() {
                this.tpl && "string" == typeof this.tpl && (this.tpl = _.template(this.tpl)), this.$el.addClass(this.id).addClass("page-view"), 
                this._appendView(), this.$el.find("content").length || this.$el.append("<content></content>"), 
                this.$ct = this.$el.find("content"), this.ct = this.$ct[0], e[this.id] = this;
            },
            _getShowMethod: function(a) {
                var b = e[a], c = bb.app.getCurrentAction();
                return "init" == c ? "init" : "forward" == c ? this.anim ? [ 1, this.anim ] : "normal" : b.anim ? [ 0, b.anim ] : "normal";
            },
            hide: function(a) {
                var b = e[a];
                b && (b._currentScrollTop = $("#" + a).find("content")[0].scrollTop, $("#" + a).hide());
            },
            show: function() {
                loading.hide();
                var a = $("#" + this.id), b = d, c = this._getShowMethod(b);
                if ("init" == c || "normal" == c) this.hide(b), a.show(); else {
                    var e = c[0], f = c[1], g = f + (e ? "-in" : "-out"), h = $("#" + b);
                    e ? (a.show(), setTimeout(function() {
                        a.addClass("showing"), a.addClass(g), setTimeout(function() {
                            this.hide(b), a.removeClass(g).removeClass("showing");
                        }.bind(this), 400);
                    }.bind(this), 10)) : (h.addClass("hiding"), a.show(), h.addClass(g), setTimeout(function() {
                        h.removeClass("hiding").removeClass(g), this.hide(b);
                    }.bind(this), 400));
                }
                d = this.id, this._recoverScroll();
            },
            _recoverScroll: function() {
                var a = e[this.id];
                a && a._currentScrollTop && a.rememberScrollTop && (this.$ct[0].scrollTop = a._currentScrollTop, 
                a._currentScrollTop = 0);
            },
            headerData: {},
            footerData: {},
            addHeader: function() {
                this.$el.prepend(this.headertpl({
                    header: this.headerData
                })), this.$el.addClass("head-added");
            },
            addFooter: function() {
                this.$el.append(this.footertpl({
                    footer: this.footerData
                })), this.$el.addClass("foot-added");
            },
            _popMenuDefault: {
                cancel: !0
            },
            addPopMenu: function(a) {
                var b = _.merge({}, this._popMenuDefault, a);
                this.$el.append(this.popmenutpl(b)), this.$menu = this.$el.find(".pop-menu"), this.$menuct = this.$menu.find(".menus");
            },
            openPopMenu: function() {
                var a = this.$menu;
                a.show(), setTimeout(function() {
                    a.addClass("show");
                }, 10);
            },
            closePopMenu: function(a) {
                var b = this.$menu;
                return "boolean" == typeof a && a ? (b.hide(), void b.removeClass("show")) : (b.removeClass("show"), 
                void setTimeout(function() {
                    b.hide();
                }, 300));
            },
            renderVisibleImg: function() {
                var a = this.$ct.scrollTop(), b = [ Math.floor(a - 2 * bb.config.height), Math.ceil(a + 2 * bb.config.height) ], c = this.$ct.find("img");
                [].slice.call(c).every(function(c) {
                    c = $(c);
                    var d = c.offset().top + a;
                    return d < b[0] ? (c.hasClass("show") && c.attr("src", bb.config.blankImg).removeClass("show"), 
                    !0) : d > b[0] && d < b[1] ? (c.hasClass("show") || c.attr("src", c.data("img")).addClass("show"), 
                    !0) : d > b[1] && c.hasClass("show") ? (c.attr("src", bb.config.blankImg).removeClass("show"), 
                    !0) : !1;
                });
            },
            goBack: function() {
                history.go(-1);
            },
            navigate: function(a, b) {
                b = b || {
                    trigger: !0
                }, bb.app.navigate.call(bb.app, a, b);
            },
            render: function() {
                this.tpl && this.$ct.html(this.tpl({}));
            }
        }), b.exports.getCurrentView = function() {
            return d || {};
        };
    }, {
        "../templates/Nav.tpl": 26,
        "../templates/PopMenu.tpl": 27,
        "../templates/ViewFooter.tpl": 28,
        "../templates/ViewHeader.tpl": 29
    } ],
    12: [ function(a, b, c) {
        c.Model = a("./Model").Model, c.Collection = a("./Model").Collection, c.Router = a("./Router"), 
        c.View = a("./View");
    }, {
        "./Model": 9,
        "./Router": 10,
        "./View": 11
    } ],
    13: [ function(a, b, c) {
        a("./3rd/zepto"), window.jQuery = window.Zepto, window._ = a("./3rd/lodash"), window.Backbone = a("./3rd/backbone"), 
        window.Backbone.$ = $, void 0 === Function.prototype.bind && (Function.prototype.bind = function() {
            var a = this, b = Array.prototype.slice.call(arguments), c = b.shift();
            return function() {
                return a.apply(c, b.concat(Array.prototype.slice.call(arguments)));
            };
        }), ($.os.android && parseInt($.os.version) < 4 || $.os.ios && parseInt($.os.version) <= 5) && (_.isRegExp = function(a) {
            return a instanceof RegExp;
        }), window.bb = {
            config: a("./config"),
            sm: a("./3rd/state-machine"),
            url: a("./url"),
            ajax: a("./ajax"),
            api: a("./api"),
            utils: a("./utils"),
            component: a("./component"),
            cookie: a("./cookie"),
            storage: a("./storage"),
            View: a("./backbone").View,
            Model: a("./backbone").Model,
            Collection: a("./backbone").Collection,
            Router: a("./backbone").Router,
            log: Function.prototype.bind.call(console.log, console)
        };
    }, {
        "./3rd/backbone": 3,
        "./3rd/lodash": 4,
        "./3rd/state-machine": 5,
        "./3rd/zepto": 6,
        "./ajax": 7,
        "./api": 8,
        "./backbone": 12,
        "./component": 19,
        "./config": 20,
        "./cookie": 21,
        "./storage": 22,
        "./url": 30,
        "./utils": 31
    } ],
    14: [ function(a, b, c) {
        var d, e = Backbone.View.extend({
            id: "AlertDialog",
            className: "alert-dialog dialog",
            tpl: a("../templates/Alert.tpl"),
            events: {
                "click .dialog-footer .ok": "hide"
            },
            defaultTheme: {
                confirm: {
                    color: "",
                    text: "确定"
                }
            },
            status: "hide",
            queue: [],
            initialize: function() {
                this.$el.html(_.template(this.tpl, {})), this.$ct = this.$el.find(".dialog-body"), 
                $(document.body).append(this.$el), bb.app && bb.app.on("route", function() {
                    this.hide();
                }.bind(this));
            },
            update: function(a, b) {
                if ("show" == this.status) return void this.queue.push([ a, b ]);
                this.$ct.html(a);
                var c = b && b.confirm || this.defaultTheme.confirm;
                this.$el.find(".ok").html(c.text).css("color", c.color);
            },
            show: function() {
                this.$el.show(), this.status = "show";
            },
            hide: function() {
                this.$el.hide(), this.status = "hide", this.queue.length && (this.update.apply(this, this.queue.shift()), 
                this.show());
            }
        });
        window.alert = b.exports = function() {
            d || (d = new e()), d.update.apply(d, arguments), d.show();
        };
    }, {
        "../templates/Alert.tpl": 23
    } ],
    15: [ function(a, b, c) {
        var d, e = Backbone.View.extend({
            id: "ConfirmDialog",
            className: "confirm-dialog dialog",
            tpl: a("../templates/Confirm.tpl"),
            events: {
                "click .dialog-footer .ok": "confirm",
                "click .dialog-footer .cancel": "cancel"
            },
            defaultTheme: {
                cancel: {
                    color: "",
                    text: "取消"
                },
                confirm: {
                    color: "",
                    text: "确定"
                }
            },
            initialize: function() {
                this.$el.html(_.template(this.tpl, {})), this.$ct = this.$el.find(".dialog-body"), 
                $(document.body).append(this.$el), bb.app && bb.app.on("route", function() {
                    this.hide();
                }.bind(this));
            },
            update: function(a, b, c, d) {
                arguments.length < 4 && (d = c, c = b, b = {}), this.$ct.html(a), c && (this.onConfirm = c), 
                d && (this.onCancel = d);
                var e = b.cancel || this.defaultTheme.cancel;
                this.$el.find(".cancel").html(e.text).css("color", e.color);
                var f = b.confirm || this.defaultTheme.confirm;
                this.$el.find(".ok").html(f.text).css("color", f.color);
            },
            confirm: function() {
                this.onConfirm() && this.hide();
            },
            cancel: function() {
                this.onCancel(), this.hide();
            },
            onConfirm: function() {
                return !0;
            },
            onCancel: function() {},
            show: function() {
                this.$el.show();
            },
            hide: function() {
                this.$el.hide();
            }
        });
        window.confirm = b.exports = function() {
            d || (d = new e()), d.update.apply(d, arguments), d.show();
        }, window.confirm.hide = b.exports.hide = function() {
            d && d.hide();
        };
    }, {
        "../templates/Confirm.tpl": 24
    } ],
    16: [ function(a, b, c) {
        var d, e = a("../../../assets/svg/loading-spokes.svg"), f = Backbone.View.extend({
            id: "GLoading",
            className: "global-loading",
            initialize: function() {
                $(document.body).append(this.$el), this.$ct = $("<p>" + e + "</p>"), this.$el.append(this.$ct);
            },
            show: function() {
                this.$el.show();
            },
            hide: function() {
                this.$el.hide();
            }
        });
        window.loading = c.show = function() {
            return d || (d = new f()), d.show(), d;
        }, window.loading.hide = c.hide = function() {
            d && d.hide();
        };
    }, {
        "../../../assets/svg/loading-spokes.svg": 2
    } ],
    17: [ function(a, b, c) {
        var d, e = Backbone.View.extend({
            id: "MenuDialog",
            className: "menu-dialog dialog",
            tpl: _.template(a("../templates/Menu.tpl")),
            events: {
                "click .dialog-body p": "handleClick",
                click: "handleClose"
            },
            _items: [],
            handleClick: function(a) {
                var b = +$(a.target).data("idx"), c = this._items[b][1];
                c && c();
            },
            handleClose: function(a) {
                a.target.id == this.id && this.hide();
            },
            initialize: function() {
                $(document.body).append(this.$el), bb.app && bb.app.on("route", function() {
                    this.hide();
                }.bind(this));
            },
            update: function(a, b) {
                this._items = b, this.$el.html(this.tpl({
                    title: a,
                    items: b
                }));
            },
            show: function() {
                this.$el.show();
            },
            hide: function() {
                this.$el.hide();
            }
        });
        window.menu = b.exports = function() {
            d || (d = new e()), d.update.apply(d, arguments), d.show();
        }, window.menu.hide = b.exports.hide = function() {
            d && d.hide();
        };
    }, {
        "../templates/Menu.tpl": 25
    } ],
    18: [ function(a, b, c) {
        var d, e = Backbone.View.extend({
            id: "Toast",
            className: "toast",
            queue: [],
            status: "hide",
            tm: null,
            initialize: function() {
                $(document.body).append(this.$el), this.$ct = $("<p></p>"), this.$el.append(this.$ct);
            },
            update: function(a) {
                return a == this.$ct.html() ? void this.show() : "show" == this.status ? void this.queue.push(a) : void this.$ct.html(a);
            },
            show: function() {
                this.$el.show(), this.status = "show", clearTimeout(this.tm), this.tm = setTimeout(this.hide.bind(this), 2e3);
            },
            hide: function() {
                this.$el.hide(), this.status = "hide", this.queue.length && (this.update(this.queue.shift()), 
                this.show());
            }
        });
        window.toast = b.exports = function() {
            d || (d = new e()), d.update.apply(d, arguments), d.show();
        };
    }, {} ],
    19: [ function(a, b, c) {
        b.exports = {
            alert: a("./Alert"),
            confirm: a("./Confirm"),
            toast: a("./Toast"),
            loading: a("./Loading"),
            menu: a("./Menu")
        };
    }, {
        "./Alert": 14,
        "./Confirm": 15,
        "./Loading": 16,
        "./Menu": 17,
        "./Toast": 18
    } ],
    20: [ function(a, b, c) {
        var d = {
            blankImg: "/assets/img/blank.gif",
            width: $("ws").width(),
            height: $("ws").height()
        };
        b.exports = d;
    }, {} ],
    21: [ function(a, b, c) {
        c.get = function(a) {
            var b = new RegExp("(^| )" + a + "=([^;]*)(;|$)"), c = b.exec(document.cookie);
            return c ? c[2] || null : null;
        }, c.set = function(a, b, c) {
            c = c || {};
            var d = c.expires;
            "number" == typeof c.expires && (d = new Date(), d.setTime(d.getTime() + c.expires)), 
            document.cookie = a + "=" + b + ("; path=" + (c.path ? c.path : "/")) + (d ? "; expires=" + d.toGMTString() : "") + (c.domain ? "; domain=" + c.domain : "") + (c.secure ? "; secure" : "");
        }, c.remove = function(a, b) {
            b = b || {}, b.expires = new Date(0), this.set(a, "", b);
        };
    }, {} ],
    22: [ function(a, b, c) {
        c.get = function(a) {
            var b = localStorage.getItem(a) || "";
            try {
                b = JSON.parse(b);
            } catch (c) {}
            return b;
        }, c.remove = function(a) {
            localStorage.removeItem(a);
        }, c.set = function(a, b) {
            "object" == typeof b && (b = JSON.stringify(b)), localStorage.setItem(a, b);
        };
    }, {} ],
    23: [ function(a, b, c) {
        b.exports = '<div class="dialog-inner">\n    <div class="dialog-header"></div>\n    <div class="dialog-body"></div>\n    <div class="dialog-footer">\n        <span class="ok">确定</span>\n    </div>\n</div>\n';
    }, {} ],
    24: [ function(a, b, c) {
        b.exports = '<div class="dialog-inner">\n    <div class="dialog-header"></div>\n    <div class="dialog-body"></div>\n    <div class="dialog-footer">\n        <span class="cancel">取消</span>\n        <span class="ok">确定</span>\n    </div>\n</div>\n';
    }, {} ],
    25: [ function(a, b, c) {
        b.exports = '<div class="dialog-inner">\n    <div class="dialog-header"><%=title%></div>\n    <div class="dialog-body">\n        <% items.forEach(function(item, idx){ %>\n        <p data-idx="<%= idx %>"><%= item[0] %></p>\n        <% }) %>\n    </div>\n</div>\n \n';
    }, {} ],
    26: [ function(a, b, c) {
        b.exports = "";
    }, {} ],
    27: [ function(a, b, c) {
        b.exports = '<div class="pop-menu pop-menu-main">\n    <div class="menus">\n        \n    </div>\n    <% if(cancel) { %>\n    <div class="cancel">关闭</div>\n    <% } %>\n</div>\n<div class="pop-menu pop-menu-bg"></div>\n';
    }, {} ],
    28: [ function(a, b, c) {
        b.exports = '<footer>\n    <span class="left"><%= footer.left || \'\'%></span>\n    <span class="title"><%= footer.title %></span>\n    <span class="right"><%= footer.right || \'\' %></span>\n</footer>\n';
    }, {} ],
    29: [ function(a, b, c) {
        b.exports = '<header>\n    <span class="left-wrapper"><button class="left"><%=header.left || \'\'%></button></span>\n    <span class="title"><%= header.title %></span>\n    <span class="right-wrapper"><button class="right"><%= header.right || \'\'%></button></span>\n</header>\n';
    }, {} ],
    30: [ function(a, b, c) {
        b.exports = {
            queryToJson: function(a) {
                a = a || location.search || location.hash;
                for (var b, c, d, e, f = a.substr(a.lastIndexOf("?") + 1), g = f.split("&"), h = g.length, i = {}, j = 0; h > j; j++) g[j] && (e = g[j].split("="), 
                b = e[0], c = e[1], d = i[b], "undefined" == typeof d ? i[b] = c : d instanceof Array ? d.push(c) : i[b] = [ d, c ]);
                return i;
            }
        };
    }, {} ],
    31: [ function(a, b, c) {
        c.addZero = function(a, b) {
            for (a = a.toString(); a.length < b; ) a = "0" + a;
            return a;
        }, c.getByteLength = function(a) {
            return String(a).replace(/[^\x00-\xff]/g, "ci").length;
        }, c.subByte = function(a, b, c) {
            return a = String(a), c = c || "", 0 > b || this.getByteLength(a) <= b ? a + c : (a = a.substr(0, b).replace(/([^\x00-\xff])/g, "$1 ").substr(0, b).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1"), 
            a + c);
        }, c.escape = function(a) {
            return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
        };
    }, {} ],
    32: [ function(a, b, c) {
        !function() {
            "use strict";
            function a(b, c) {
                function e(a, b) {
                    return function() {
                        return a.apply(b, arguments);
                    };
                }
                var f;
                if (c = c || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
                this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = c.touchBoundary || 10, 
                this.layer = b, this.tapDelay = c.tapDelay || 200, this.tapTimeout = c.tapTimeout || 700, 
                !a.notNeeded(b)) {
                    for (var g = [ "onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel" ], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = e(h[g[i]], h);
                    d && (b.addEventListener("mouseover", this.onMouse, !0), b.addEventListener("mousedown", this.onMouse, !0), 
                    b.addEventListener("mouseup", this.onMouse, !0)), b.addEventListener("click", this.onClick, !0), 
                    b.addEventListener("touchstart", this.onTouchStart, !1), b.addEventListener("touchmove", this.onTouchMove, !1), 
                    b.addEventListener("touchend", this.onTouchEnd, !1), b.addEventListener("touchcancel", this.onTouchCancel, !1), 
                    Event.prototype.stopImmediatePropagation || (b.removeEventListener = function(a, c, d) {
                        var e = Node.prototype.removeEventListener;
                        "click" === a ? e.call(b, a, c.hijacked || c, d) : e.call(b, a, c, d);
                    }, b.addEventListener = function(a, c, d) {
                        var e = Node.prototype.addEventListener;
                        "click" === a ? e.call(b, a, c.hijacked || (c.hijacked = function(a) {
                            a.propagationStopped || c(a);
                        }), d) : e.call(b, a, c, d);
                    }), "function" == typeof b.onclick && (f = b.onclick, b.addEventListener("click", function(a) {
                        f(a);
                    }, !1), b.onclick = null);
                }
            }
            var c = navigator.userAgent.indexOf("Windows Phone") >= 0, d = navigator.userAgent.indexOf("Android") > 0 && !c, e = /iP(ad|hone|od)/.test(navigator.userAgent) && !c, f = e && /OS 4_\d(_\d)?/.test(navigator.userAgent), g = e && /OS [6-7]_\d/.test(navigator.userAgent), h = navigator.userAgent.indexOf("BB10") > 0;
            a.prototype.needsClick = function(a) {
                switch (a.nodeName.toLowerCase()) {
                  case "button":
                  case "select":
                  case "textarea":
                    if (a.disabled) return !0;
                    break;

                  case "input":
                    if (e && "file" === a.type || a.disabled) return !0;
                    break;

                  case "label":
                  case "iframe":
                  case "video":
                    return !0;
                }
                return /\bneedsclick\b/.test(a.className);
            }, a.prototype.needsFocus = function(a) {
                switch (a.nodeName.toLowerCase()) {
                  case "textarea":
                    return !0;

                  case "select":
                    return !d;

                  case "input":
                    switch (a.type) {
                      case "button":
                      case "checkbox":
                      case "file":
                      case "image":
                      case "radio":
                      case "submit":
                        return !1;
                    }
                    return !a.disabled && !a.readOnly;

                  default:
                    return /\bneedsfocus\b/.test(a.className);
                }
            }, a.prototype.sendClick = function(a, b) {
                var c, d;
                document.activeElement && document.activeElement !== a && document.activeElement.blur(), 
                d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), 
                c.forwardedTouchEvent = !0, a.dispatchEvent(c);
            }, a.prototype.determineEventType = function(a) {
                return d && "select" === a.tagName.toLowerCase() ? "mousedown" : "click";
            }, a.prototype.focus = function(a) {
                var b;
                e && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, 
                a.setSelectionRange(b, b)) : a.focus();
            }, a.prototype.updateScrollParent = function(a) {
                var b, c;
                if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
                    c = a;
                    do {
                        if (c.scrollHeight > c.offsetHeight) {
                            b = c, a.fastClickScrollParent = c;
                            break;
                        }
                        c = c.parentElement;
                    } while (c);
                }
                b && (b.fastClickLastScrollTop = b.scrollTop);
            }, a.prototype.getTargetElementFromEventTarget = function(a) {
                return a.nodeType === Node.TEXT_NODE ? a.parentNode : a;
            }, a.prototype.onTouchStart = function(a) {
                var b, c, d;
                if (a.targetTouches.length > 1) return !0;
                if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], 
                e) {
                    if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !0;
                    if (!f) {
                        if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), 
                        !1;
                        this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b);
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, 
                this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), 
                !0;
            }, a.prototype.touchHasMoved = function(a) {
                var b = a.changedTouches[0], c = this.touchBoundary;
                return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1;
            }, a.prototype.onTouchMove = function(a) {
                return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, 
                this.targetElement = null), !0) : !0;
            }, a.prototype.findControl = function(a) {
                return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
            }, a.prototype.onTouchEnd = function(a) {
                var b, c, h, i, j, k = this.targetElement;
                if (!this.trackingClick) return !0;
                if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, 
                !0;
                if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, 
                this.trackingClick = !1, this.trackingClickStart = 0, g && (j = a.changedTouches[0], 
                k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, 
                k.fastClickScrollParent = this.targetElement.fastClickScrollParent), h = k.tagName.toLowerCase(), 
                "label" === h) {
                    if (b = this.findControl(k)) {
                        if (this.focus(k), d) return !1;
                        k = b;
                    }
                } else if (this.needsFocus(k)) return a.timeStamp - c > 100 || e && window.top !== window && "input" === h ? (this.targetElement = null, 
                !1) : (this.focus(k), this.sendClick(k, a), e && "select" === h || (this.targetElement = null, 
                a.preventDefault()), !1);
                return e && !f && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 : (this.needsClick(k) || (a.preventDefault(), 
                this.sendClick(k, a)), !1);
            }, a.prototype.onTouchCancel = function() {
                this.trackingClick = !1, this.targetElement = null;
            }, a.prototype.onMouse = function(a) {
                return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, 
                a.stopPropagation(), a.preventDefault(), !1) : !0 : !0;
            }, a.prototype.onClick = function(a) {
                var b;
                return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, 
                !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), 
                b || (this.targetElement = null), b);
            }, a.prototype.destroy = function() {
                var a = this.layer;
                d && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), 
                a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), 
                a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), 
                a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1);
            }, a.notNeeded = function(a) {
                var b, c, e, f;
                if ("undefined" == typeof window.ontouchstart) return !0;
                if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1]) {
                    if (!d) return !0;
                    if (b = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                        if (c > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
                    }
                }
                if (h && (e = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), e[1] >= 10 && e[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
                    if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
                }
                return "none" === a.style.msTouchAction || "manipulation" === a.style.touchAction ? !0 : (f = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1], 
                f >= 27 && (b = document.querySelector("meta[name=viewport]"), b && (-1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 : !1);
            }, a.attach = function(b, c) {
                return new a(b, c);
            }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
                return a;
            }) : "undefined" != typeof b && b.exports ? (b.exports = a.attach, b.exports.FastClick = a) : window.FastClick = a;
        }();
    }, {} ]
}, {}, [ 1 ]);