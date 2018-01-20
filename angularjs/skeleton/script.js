angular.module('myApp', [])
.controller('myController', ['$scope', '$log', function ($scope, $log) {
    $scope.text = "If you can read this then AngularJS is working fine";
    $log.info('hello from myController');
}]);