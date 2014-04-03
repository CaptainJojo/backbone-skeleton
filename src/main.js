requirejs.config({
    paths: {
        jquery: '../lib/jquery/jquery.min',
        underscore: '../lib/underscore/underscore.min',
        backbone: '../lib/backbone/backbone.min',
        localstore: '../lib/backbone/backbone.localStorage',
        text: '../lib/require/text',
        templates: '../templates',
        todoModel: '../src/models/todo',
        todosCollection: '../src/collections/todos',
        todosView: '../src/views/list',
        todoView: '../src/views/todo',
        todoNewView: '../src/views/new',
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'text' : {
            exports : 'text'
        }
    },
});

requirejs([
    // Load our app module and pass it to our definition function
    'app',
], function(App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
