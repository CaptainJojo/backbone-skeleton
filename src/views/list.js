define([
    'text!templates/todo/list.html',
    'todoView',
], function(TodosTemplate, TodoView) {
    var TodosView = Backbone.View.extend({
        initialize: function(options) {
            this.vent = options.vent;
            this.vent.bind("addModel", _.bind(this.render, this));
        },

        render: function() {
            this.$el.html(TodosTemplate);
            this.collection.fetch();
            this.collection.each(this.addOne, this);
        },

        addOne: function(todo) {
            var view = new TodoView({model : todo})
            this.$("#todos-list").append(view.render().el);
        },
    });

    return TodosView;
});
