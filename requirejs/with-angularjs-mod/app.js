define(function(require) {

    angular.module('myApp', ['ui.bootstrap'])
        .controller('myNestedController', function($scope, $log, $http, $timeout) {
            $scope.name = 'joel - from controller';
        })

        .directive('myDir', require('myDirective'))

        .controller('myCtr', require('myController'))

        .service('mySrv', require('myService'))

        .constant('CoPlayer', 'Ellie');

});