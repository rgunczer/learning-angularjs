angular.module('App', [])
    .controller('myController', function ($scope, $log, $http) {
        $http.get('../data/fruits.json')
            .then(function (response) {
                $scope.fruits = response.data.content;

                $log.info('dump: ' + angular.toJson($scope.fruits, true));
            });
    });