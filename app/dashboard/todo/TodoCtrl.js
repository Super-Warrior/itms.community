"use strict";

export default (app)=>{
  app.controller('TodoCtrl', function ($scope, $timeout, Todo) {
    $scope.newTodo = undefined;

    $scope.states = ['Critical', 'Important', 'Completed'];

    $scope.todos = Todo.getList().$object;

    // $scope.$watch('todos', function(){ }, true)

    $scope.toggleAdd = function () {
      if (!$scope.newTodo) {
        $scope.newTodo = {
          state: 'Important'
        };
      } else {
        $scope.newTodo = undefined;
      }
    };

    $scope.createTodo = function () {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = undefined;
      // $scope.newTodo.$save(function (respoonse) {
      //     $scope.todos.push(respoonse);
      //     $scope.newTodo = undefined;
      // });
    };

    $scope.deleteTodo = function (todo) {
      todo.remove().then(function () {
        $scope.todos.splice($scope.todos.indexOf(todo), 1);
      });

    };

  });
}
