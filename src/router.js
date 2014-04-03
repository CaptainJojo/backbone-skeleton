// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'todosView',
    'todoNewView',
    'todosCollection',
    'todoModel',
], function($, _, Backbone, TodosView, TodoNewView, TodosCollection, TodoModel) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
        },
    });

    var initialize = function(){

    var app_router = new AppRouter;
    var vent = _.extend({}, Backbone.Events);

    app_router.on('route:home', function (actions) {
        var todoNewView = new TodoNewView({el: '#form',  'collection': new TodosCollection(), 'vent': vent });
        todoNewView.render();

        var todosView = new TodosView({el: '#content',  'collection': new TodosCollection(), 'vent': vent });
        todosView.render();
    }); 

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };

});