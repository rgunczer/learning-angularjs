angular.module('myApp', [])

.controller('myController', ['$scope', '$log', function ($scope, $log) {
    $scope.text = "If you can read this then AngularJS is working fine";
    $log.info('hello from myController');
    
    $scope.games = [
        {
            id: 1,
            Title: 'Last of Us',        
            Developer: 'Naughty Dog',
            Publication: '2013'
        },
        {
            id: 2,
            Title: 'Horizon: Zero Dawn',        
            Developer: 'Guerilla Games',
            Publication: '2017'
        }
    ];

    $scope.onVisit = function(id) {
        alert('parent onVisit: ' + id);
    }

}])


.directive('gameDetails', function() {

    return {
        restrict: 'E',
        templateUrl: 'template.html',
        scope: {
            data: '=',
            visit: '&'
        },
        link: function($scope) {
            $scope.onVisit = function(id) {
                alert('child onVisit id: ' + id);
                $scope.visit({id: id});
            }
        }
    }

})