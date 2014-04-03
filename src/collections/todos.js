define([
    'localstore',
    'todoModel'
], function(localstore, TodoModel){
    var TodosCollection = Backbone.Collection.extend({
        model: TodoModel, 
        localStorage: new Backbone.LocalStorage("Todos"),

        initialize: function() {
        }
    });

    return TodosCollection;
});
