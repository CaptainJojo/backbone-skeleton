define(['todosView', 'todosCollection', 'todoModel'], function(TodosView, TodosCollection, TodoModel) {
    var todosView;

    describe('Todos View', function() {

        beforeEach(function() {
            el = $('<div></div>');
            var vent = _.extend({}, Backbone.Events);

            var todosCollection = new TodosCollection();
            todosCollection.fetch();
            todosCollection.each(function(model) {
                  model.destroy();
            });

            todosView = new TodosView({el: el,  'collection': new TodosCollection(), 'vent': vent });
            todosView.render();
        });

        it('Initiate view', function() {
            expect(todosView.$('li').size()).toBe(0);
        });
    });

    describe('Todos view with collection not empty', function() {
        beforeEach(function() {
            el = $('<div></div>');
            var vent = _.extend({}, Backbone.Events);

            var todosCollection = new TodosCollection();
            todosCollection.fetch();
            todosCollection.each(function(model) {
                  model.destroy();
            });

            var todoModel = new TodoModel();
            todoModel.setTitle('test');
            todosCollection.add(todoModel);
            todoModel.save();
            var todoModel = new TodoModel();
            todoModel.setTitle('test2');
            todosCollection.add(todoModel);
            todoModel.save();
            todosView = new TodosView({'el': el, 'collection': todosCollection, 'vent': vent });
            todosView.render();
        });

        afterEach(function() {
            var todosCollection = new TodosCollection();
            todosCollection.fetch();
            todosCollection.each(function(model) {
                  model.destroy();
            });
        });

        it('View collections', function() {
            expect(todosView.$('li').size()).toBe(2);
        });

        it('Delete one model', function() {
            todosView.$('a.destroy:first').trigger('click');
            expect(todosView.$('li').size()).toBe(1);
        });
    });
});
