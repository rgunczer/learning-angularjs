define(function() {
    return function($scope, mySrv) {
        $scope.name = 'myController: ' + mySrv.name;
    };
});