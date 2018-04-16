angular.module('App', [])
    .controller('myController', function ($scope, $log) {
        $scope.text = 'If you can read this then AngularJS is working fine';
        $log.info('hello from myController');
    });

// wait for dom ready
angular
    .element(document)
    .ready(function() {
        console.log('before angularjs bootstrap');
        angular.bootstrap(document, ['App']);
    });
