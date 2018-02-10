define(function () {

    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: [
                '<div>',
                '<h1>name[{{name}}] is:{{1 + 1}}</h1>',
                '<button ng-click="clickMe()">ClickMe</button>',
                '</div>'
            ].join(''),
            controller: function($scope, $log) {
                $log.info('inside myDirective');
                $scope.name = 'jozef';
                $scope.clickMe = function() {
                    $scope.name = 'BigDaddy';
                };
            }
        };
    };

});