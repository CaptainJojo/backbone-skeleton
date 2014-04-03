define(['todoModel'], function(TodoModel)  {

  describe('Todo Model', function() {

    it('Test setTitle and getTitle', function() {
        var todo = new TodoModel();
        todo.setTitle('Test')
        
        expect(todo.getTitle()).toEqual('Test');
    });
  });
});
