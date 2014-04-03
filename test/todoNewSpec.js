define(['todoNewView', 'todosCollection'], function(TodoNewView, TodosCollection)  {
    var todoNewView;

    describe('Todo Form View', function() {

        beforeEach(function() {
            el = $('<div></div>');
            var vent = _.extend({}, Backbone.Events);

            var todosCollection = new TodosCollection();
            todosCollection.fetch();
            todosCollection.each(function(model) {
                  model.destroy();
            });

            todoNewView = new TodoNewView({'el': el, 'collection': todosCollection, 'vent': vent });
            todoNewView.render();
        });

        afterEach(function() {
            var todosCollection = new TodosCollection();
            todosCollection.fetch();
            todosCollection.each(function(model) {
                  model.destroy();
            });
        });

        it('Initiate view', function() {
            expect(todoNewView.$('#title').attr('type')).toBe('text');
        });

        it('Add post', function() {
            todoNewView.$('#title').val('Nouvelle todo');
            todoNewView.$("form").trigger('submit');
            
            expect(todoNewView.$('#title').val()).toBe('');
            expect(todoNewView.collection.length).toBe(1);
        });

        it('Add post', function() {
            todoNewView.$('#title').val('Nouvelle todo');
            todoNewView.$("form").trigger('submit');
            todoNewView.$("form").trigger('submit');
            

            expect(todoNewView.$('#title').val()).toBe('');
            expect(todoNewView.collection.length).toBe(2);
        });
    });
});
