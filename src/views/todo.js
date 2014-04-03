define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/todo/todo.html'
], function($, _, Backbone, TodoTemplate) {

    var TodoView = Backbone.View.extend({
        tagName: 'li',

        events: {
            "click a.destroy" : "clear",
        },

        initialize: function() {
           this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function() {
            var data = {
                todo: this.model,
                _: _
            };

            var compiledTemplate = _.template(TodoTemplate, data);
            this.$el.html(compiledTemplate);
            return this;
        },

        clear: function() {
            this.model.destroy();
        }
    });

    return TodoView;
});
