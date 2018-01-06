angular.module('myApp', [])
.controller('myController', ['$scope', '$log', function ($scope, $log) {
    $scope.text = "If you can read this then AngularJS is working fine";
    $log.info('hello from myController');

    $scope.onGameTypeChange = function() {
        $log.info('selected game type: ' + $scope.data.selectedGameType.value + ', name: ' + $scope.data.selectedGameType.name);
    }

    $scope.data = {
        gameTypes: [
            { value: '1', name: 'FPS' },
            { value: '2', name: 'Strategy' },
            { value: '3', name: 'Puzzle' }
        ],
        selectedGameType: { value: '2', name: 'Strategy' }
    };

}]);