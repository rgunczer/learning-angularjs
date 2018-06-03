'use strict';

angular.module('App', ['ngMessages'])

    .controller('myController', function ($scope, $log) {
        $scope.text = 'If you can read this then AngularJS is working fine';
        $log.info('hello from myController');
        $scope.user = {
            name: 'joel',
            age: 42
        };
        $scope.submit = function() {
            $log.info('submit');

            $log.info(angular.toJson($scope.userForm, true));
        };
    });
