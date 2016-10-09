module.exports = function ($scope){
    $scope.extraText = '';

    $scope.cool = function(){
        $scope.extraText += '!';
    }
}