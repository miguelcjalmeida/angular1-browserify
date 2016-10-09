module.exports = function ($scope, $state){
    $scope.tabs = [
        { name: "Button", state: "button" },
        { name: "Todo", state: "todo" }
    ];

    $scope.selectTab = function(tab){
        $state.go(tab.state);
    }
}