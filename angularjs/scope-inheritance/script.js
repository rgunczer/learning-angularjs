angular.module('myApp', [])
.controller('myController', function ($scope, $log) {
    $scope.text = "If you can read this then AngularJS is working fine";
    $log.info('hello from myController');

    $scope.myDialog = function(message) {
        alert('parent: ' + message);
    };

})
.directive('myDirectiveA', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'templateA.html',
        controller: function($scope, $log) {
            $log.info('inside myDirectiveA ' + $scope.$id);
            $scope.onClick = function() {
                alert('inside directive ' );
                $scope.myDialog('called from myDirectiveA');
            }
        }
    };
});