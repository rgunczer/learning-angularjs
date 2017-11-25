define(function() {
    angular.module('core', [])
        .controller('coreController', function($scope) {
            $scope.name = 'core';
        });
})