angular.module('App', [])

    .directive('myParentDirective', function () {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            template: [
                '<div> {{ name }}',
                '   <div ng-transclude></div>',
                //'<my-child-directive></my-child-directive>',
                '</div>'
            ].join(''),
            controller: function ($scope) {
                $scope.name = 'Joel';
                $scope.showAlert = function(msg) {
                    alert('alert: ' + msg);
                };

                this.showAlert = function(msg) {
                    $scope.showAlert(msg);
                };
            }
        };
    })

    .directive('myChildDirective', function() {
        return {
            restrict: 'E',
            scope: {},
            require: '^^myParentDirective',
            template: [
                '<div> {{ name }} ',
                ' <button ng-click="myClickHandler()">Click Me</button>',
                '</div>'
            ].join(''),
            controller: function($scope) {
                $scope.name = 'Ellie';
                $scope.myClickHandler = function() {
                    $scope.parentCtrl.showAlert('from child');
                };
            },
            link: function(scope, element, attrs, myParentDirectiveCtrl) {
                scope.parentCtrl = myParentDirectiveCtrl;
            }
        };
    });