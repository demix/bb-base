
var currentView = null;

var views = {};

module.exports = Backbone.View.extend({
    tagName: 'view',

    rememberScrollTop:1,

    navtpl: _.template(require('../templates/Nav.tpl')),
    headertpl: _.template(require('../templates/ViewHeader.tpl')),
    footertpl: _.template(require('../templates/ViewFooter.tpl')),
    popmenutpl: _.template(require('../templates/PopMenu.tpl')),

    _appendView: function(){
        if (!$('#views #' + this.id).length) {
            $('#views').append(this.el);
        }
    },
    initialize: function(){
        if(this.tpl && typeof this.tpl == 'string'){
            this.tpl = _.template(this.tpl);
        }
        
        this.$el.addClass(this.id).addClass('page-view');
        this._appendView();
        if(!this.$el.find('content').length)
            this.$el.append('<content></content>');
        this.$ct = this.$el.find('content');
        this.ct = this.$ct[0];
        
        views[this.id] = this;//cache
    },

    _getShowMethod: function(oldId){
        var oldView = views[oldId];
        var action = bb.app.getCurrentAction();

        if(action == 'init'){
            return 'init';
        } else if(action == 'forward'){//进入动画
            return this.anim ? [1, this.anim] : 'normal';
        } else { // 移除动画
            return oldView.anim ? [0, oldView.anim] : 'normal';
        }

        return 'normal';
    },
    
    hide: function(oldId){
        var view = views[oldId];
        if(view){
            view._currentScrollTop = $('#' + oldId).find('content')[0].scrollTop;
            $('#' + oldId).hide();
        }
    },
    
    show: function(){
        loading.hide();


        var newTarget = $('#' + this.id),
            oldTargetId = currentView;
        
        var showingMethod = this._getShowMethod(oldTargetId);


        if(showingMethod == 'init' || showingMethod == 'normal'){
            this.hide(oldTargetId);
            newTarget.show();
        } else {
            var isMovein = showingMethod[0],
                anim = showingMethod[1];
            var className = anim + (isMovein ? '-in' : '-out');

            var oldTarget = $('#' + oldTargetId);
            if(isMovein){
                newTarget.show();
                setTimeout(function(){
                    newTarget.addClass('showing');                    
                    newTarget.addClass(className);
                    setTimeout(function(){
                        this.hide(oldTargetId);
                        newTarget.removeClass(className).removeClass('showing');
                    }.bind(this), 400);
                }.bind(this), 10);
            } else {
                oldTarget.addClass('hiding');
                newTarget.show();
                oldTarget.addClass(className);
                setTimeout(function(){
                    oldTarget.removeClass('hiding').removeClass(className);
                    this.hide(oldTargetId);
                }.bind(this), 400);
            }
        }

        currentView = this.id;
        this._recoverScroll();
    },
    _recoverScroll: function(){
        var cview = views[this.id];
        if(cview && cview._currentScrollTop && cview.rememberScrollTop) {
            this.$ct[0].scrollTop = cview._currentScrollTop;
            cview._currentScrollTop = 0;
        }
    },
    
    headerData: {},//{title: 标题, right: 右侧文字}
    footerData: {},
    addHeader: function(){
        this.$el.prepend(this.headertpl({
            header: this.headerData
        }));
        this.$el.addClass('head-added');
    },
    addFooter: function(){
        this.$el.append(this.footertpl({
            footer: this.footerData
        }));
        this.$el.addClass('foot-added');
    },

    _popMenuDefault: {
        cancel: true
    },
    addPopMenu: function(opts){
        var option = _.merge({}, this._popMenuDefault, opts);
        this.$el.append(this.popmenutpl(option));

        this.$menu = this.$el.find('.pop-menu');
        this.$menuct = this.$menu.find('.menus');
    },
    openPopMenu: function(){
        var menu = this.$menu;
        menu.show();
        setTimeout(function(){
            menu.addClass('show');
        }, 10);
    },
    closePopMenu: function(noTimeout){
        var menu = this.$menu;
        if(typeof noTimeout == "boolean" && noTimeout){
            menu.hide();
            menu.removeClass('show');
            return;
        }
        menu.removeClass('show');
        setTimeout(function(){
            menu.hide();
        }, 300);
    },

    /**
     * 这里可以继续优化 看如何支持最少图片遍历
     */
    renderVisibleImg: function(){
        var scrollTop = this.$ct.scrollTop();
        var visibleArea = [Math.floor(scrollTop - 2* bb.config.height)
                           , Math.ceil(scrollTop + bb.config.height *2)];
        var imgs = this.$ct.find('img');

        
        [].slice.call(imgs).every(function(item){
            item = $(item);
            var top = item.offset().top + scrollTop;

            if(top < visibleArea[0]) {
                if(item.hasClass('show'))
                    item.attr('src', bb.config.blankImg).removeClass('show');
                return true;
            }
            if(top > visibleArea[0] && top < visibleArea[1] ){
                if(!item.hasClass('show'))
                    item.attr('src', item.data('img')).addClass('show');
                return true;
            }
            if(top > visibleArea[1] && item.hasClass('show') ){
                item.attr('src', bb.config.blankImg).removeClass('show');
                return true;
            }
            return false;
                
            
        });
    },
    goBack: function(){
        history.go(-1);
    },
    navigate: function(url, config){
        config = config || {trigger: true};
        bb.app.navigate.call(bb.app, url, config);
    },
    render: function(){
        if(this.tpl)
            this.$ct.html(this.tpl({}));
    }
    
});



module.exports.getCurrentView = function(){
    return currentView || {};
};
