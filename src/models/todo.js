define(['backbone'
], function(Backbone) {
    var TodoModel = Backbone.Model.extend({
        initialize: function Doc() {
        },

        getId: function() {
            return this.get('id');
        },

        setId: function(value) {
            this.set({id: value});
        },

        getTitle: function() {
            return this.get('title');
        },

        setTitle: function(value) {
            this.set({title: value}, {validate: true});
        },
    });

    return TodoModel;
});
