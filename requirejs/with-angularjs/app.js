define(function() {
    angular.module('app', ['core'])
        .controller('mainController', function($scope) { 
            $scope.name = 'main';
        });
});