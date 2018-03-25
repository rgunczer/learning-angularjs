angular.module('App', [])

    .controller('myController', function ($scope, $log) {
        $scope.text = 'If you can read this then AngularJS is working fine';
        $log.info('hello from myController');
    });

    npm install --save-dev @types/angular@1.5.11