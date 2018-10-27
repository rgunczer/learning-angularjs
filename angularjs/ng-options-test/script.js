angular.module('myApp', [])
    .controller('myController', function($scope, $log) {
        $scope.name = 'Test';
        $log.info('here');

        $scope.selectedDType = '';
        $scope.tileData = {
            DTypes: [
                {
                    Key: 'key1',
                    Value: 'value1'
                },
                {
                    Key: 'key2',
                    Value: 'value2'
                },
                {
                    Key: 'key3',
                    Value: 'value3'
                }
            ]
        };
    });