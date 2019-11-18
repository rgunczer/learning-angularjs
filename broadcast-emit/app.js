angular.module('App', [])

    .controller('myController', function ($scope) {
        $scope.text = 'myController';
        $scope.$on('talkToParent', function(event, args) {
            alert(event.name + ' ' + JSON.stringify(args));
        });
        $scope.onBroadcast = function() {
            $scope.$broadcast('talkToChildren', { msg: 'message' });
        };
    })

    .controller('myOtherController', function($scope) {
        $scope.text = 'myOtherController';
        $scope.onEmit = function () {
            $scope.$emit('talkToParent', { msg: 'myMessage' });
        };
        $scope.$on('talkToChildren', function(event, args) {
            alert(event.name + ' ' + JSON.stringify(args));
        });
    });