var button = require('../ex-button/button.component');
var todo = require('../ex-todo/todo.component');

module.exports = function($stateProvider){
    $stateProvider.state('button',
        angular.extend({ url: '/button' },
            button));

    $stateProvider.state('todo',
        angular.extend({ url: '/todo' },
            todo));
}