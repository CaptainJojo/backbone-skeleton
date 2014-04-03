requirejs.config({
    waitSeconds: 10,
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
        jasmine: '../lib/tests/jasmine',
        'jasmine-html': '../lib/tests/jasmine-html',
        boot: '../lib/tests/boot',
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
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'jasmine'
        }
    },
});

require(['jquery', 'boot'], function ($, jasmine) {

    var specs = [];

    specs.push('../test/todosSpec', '../test/modelTodoSpec', '../test/todoNewSpec');

    $(function () {
        require(specs, function (spec) {
            window.onload();
        });
    });

});
