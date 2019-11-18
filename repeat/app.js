angular.module('App', [])
    .directive('myTile', function() {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            template: '<div>{{data.text}}</div>'
        };
    })
    .directive('myTiles', function () {
        return {
            restrict: 'E',
            scope: {
                confName: '@'
            },
            template: [
                '<h2>{{title}}:[{{items.length}}]</h2>',
                '<div ng-repeat="item in items">',
                '   <my-tile data="item"></my-tile>',
                '</div>'
            ].join(''),
            controller: function($scope, $log, $http) {
                $log.info('hello from myTiles: ' + $scope.confName);
                $scope.title = 'Tiles';
                $http.get('../data/' + $scope.confName + '.json')
                    .then(function (response) {
                        $scope.items = response.data.content;
                    });
            }
        };
    });