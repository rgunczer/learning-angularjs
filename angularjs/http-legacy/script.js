angular.module('myApp', [])

    .config(function($httpProvider) {
        console.log('inside config fn');
        $httpProvider.useLegacyPromiseExtensions(false);

    // $http .success, $error returns
    ///angular.js:13642 Error: [$http:legacy] The method `success` on the promise returned from `$http` has been disabled.
    })

    .controller('myController', function ($scope, $log, $http) {
        $scope.text = "If you can read this then AngularJS is working fine";
        $log.info('hello from myController');

        $http.get('data.json')
            .success(function(response) {
                $log.info(angular.toJson(response));
            })
            .error(function(error) {
                $log.info(angular.toJson(error));
            })
    })