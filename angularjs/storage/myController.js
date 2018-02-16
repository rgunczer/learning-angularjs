angular.module('myApp')
    .controller('myController', function ($scope, myStorage) {
        $scope.data = {
            name: 'Joel'
        };
        myStorage.local.set('myName', 'Ellie');

        $scope.getValue = function () {
            var value = myStorage.local.get('myName');
            alert(value);
        };
        $scope.getValueOrDefault = function () {
            var value = myStorage.local.get('myJob', 'developer');
            alert(value);
        };
    });