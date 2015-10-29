// このモデルによって Globalに Todos が使えるようにしてるのか。

Todos = new Mongo.Collection("todos");

Todo = {
  findAll: function() {
    return Todos.find({}).fetch();
  }
}
