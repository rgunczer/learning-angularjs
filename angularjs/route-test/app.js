angular.module('App', ['ngRoute'])
    .controller('myController', function($scope) {
        $scope.text = 'Joel';
    })
    .factory('myAuth', function($location) {
        return {
            checkAccess: function() {
                $location.path('/home');
            }
        };
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'root',
                template: '<h1>root</h1>',
                resolve: {
                    check: function($timeout, $log, myAuth, $location) { // eslint-disable-line no-unused-vars
                        return $timeout(function() {
                            $log.info('root resolved');
                            //myAuth.checkAccess();
                            //$location.path('/home');
                        }, 1000);
                    }
                }
            })
            .when('/home', {
                title: 'home',
                template: '<h1>home</h1>'
            })
            .when('/denied', {
                template: '<h1>denied</h1>',
                title: 'denied'
            })
            .otherwise({
                redirectTo: '/'
            });

    });