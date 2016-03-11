



const WorkSpace = bb.Router.extend({
    routes: {
        "": "index",
        "list/": "list"
    },
    index: require('./views/Welcome').render,
    list: require('./views/List').render
});




const app = new WorkSpace();
bb.app = app;

Backbone.history.start({
    root: "/www/"
});





