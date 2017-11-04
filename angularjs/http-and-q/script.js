'use strict';

angular.module('myApp', [])
    .run(['$http', '$log', '$rootScope', function($http, $log, $rootScope) {
        $rootScope.$watch(function () {
            var pending = $http.pendingRequests.length > 0;
            $log.info('WATCHER >>>>>>>>>>>>>>>>>>>>> pending count: ' + $http.pendingRequests.length);
            return pending;
        }, function(newValue, oldValue) {
            $log.info('BROADCASTING');
            var urls = $http.pendingRequests.map(function(x) {
                return x.url;
            });
            $log.info('pending requests: ' + urls);
            $rootScope.$broadcast('$httpEvent', { urls: urls });
        });
    }])
    .controller('myController', ['$scope', '$log', 'myData', function ($scope, $log, myData) {
        $scope.text = "If you can read this then AngularJS is working fine";
        $log.info('hello from myController');
        $scope.urlsToWatch = ['data/countries.json', 'data/colors.json'];
        $scope.submit = function() {
            // myData.load()
            // .then(function(result) {
            //     $log.info('submit then: ' + result);
            // });
            myData.loadSomethingOther();
        };

        myData.load()
            .then(function (result) {
                $log.info('all data is received in myController');
            }, function (error) {
                $log.info('error loading data in myController ' + angular.toJson(error));
            });

        $scope.countries = myData.countries;
        $scope.colors = myData.colors;

        $log.info('countries count: ' + $scope.countries.length);
        $log.info('colors count: ' + $scope.colors.length);
    }])
    .controller('myOtherController', ['$scope', '$log', 'myData', function ($scope, $log, myData) {
        $scope.text = "Hello from myOtherController If you can read this then AngularJS is working fine";
        $log.info('hello from myOtherController');
        $scope.urlsToWatch = ['*'];
        myData.load()
            .then(function(result) {
                $log.info('all data is received in myOtherController');
            }, function (error) {
                $log.info('error loading data in myOtherController ' + angular.toJson(error));
            });

        $scope.countries = myData.countries;
        $scope.colors = myData.colors;
    }])
    .directive('myLoading', [function() {
        return {
            restrict: 'E',
            scope: {
                urls: '='
            },
            template: '<div>loading status: {{loading}}</div>',
            controller: ['$scope', '$http', '$log', function($scope, $http, $log) {
                $scope.loading = false;

                $scope.$on('$httpEvent', function(event, data) {
                    $log.info('Got httpEvent in: ' + $scope.$id);
                    if ($scope.urls.length === 1 && $scope.urls[0] === '*') {
                        $scope.loading = data.urls.length > 0;
                    } else {
                        var pendingCount = 0;
                        for(var i = 0; i < data.urls.length; ++i) {
                            for(var j = 0; j < $scope.urls.length; ++j) {
                                if (data.urls[i].indexOf($scope.urls[j]) !== -1) {
                                    ++pendingCount;
                                }
                            }
                        }

                        $log.info('urls: ' + $scope.urls);
                        $scope.loading = pendingCount > 0;
                    }
                });

                // $scope.$watch(function () {
                //     $log.info('WATCHER>>>>>>>>>>>>>>>>>>>>>');
                //     var pendingCount = 0;
                //     for(var i = 0; i < $http.pendingRequests.length; ++i) {
                //         for(var j = 0; j < $scope.urls.length; ++j) {
                //             if ($http.pendingRequests[i].url.indexOf($scope.urls[j]) !== -1) {
                //                 ++pendingCount;
                //             }
                //         }
                //     }
                //     $log.info('urls: ' + $scope.urls);
                //     //return $http.pendingRequests.length > 0;
                //     return pendingCount;
                // }, function(hasPending) {
                //     if (hasPending) {
                //         $scope.loading = true;
                //     } else {
                //         $scope.loading = false;
                //     }
                // });

            }]
        }
    }])
    .service('myData', ['$http', '$log', '$q', function ($http, $log, $q) {
        $log.info('myData Service instantiated...');

        var deferred = $q.defer();

        this.getUrlCountries = function() {
            return 'http://127.0.0.1:8080/data/countries.json';
        };

        this.getUrlColors = function() {
            return 'http://127.0.0.1:8080/data/colors.json';
        }

        var countriesPromise;
        var colorsPromise;

        this.countries = [];
        this.colors = [];
        var that = this;

        function processCountries(data){
            that.countries.length = 0;
            data.forEach(function(element) {
                that.countries.push(element);
            });
        }

        function processColors(data) {
            that.colors.length = 0;
            data.forEach(function(element) {
                that.colors.push(element);
            });
        }

        this.load = function() {
            $log.info('myData load...');
            if (angular.isUndefined(countriesPromise)) {
                countriesPromise = $http.get(this.getUrlCountries());
            }
            if (angular.isUndefined(colorsPromise)) {
                colorsPromise = $http.get(this.getUrlColors());
            }

            if (this.colors.length > 0 && this.countries.length > 0) {
                return $q.when('ok');
            }

            $q.all([colorsPromise, countriesPromise])
                .then(function (results) {
                    $log.info(angular.toJson(results));
                    processColors(results[0].data);
                    processCountries(results[1].data);

                    deferred.resolve('ok');
                }, function (errors) {
                    deferred.reject(errors);
                })
                .finally(function () {

                });
            return deferred.promise;
        };

        this.loadSomethingOther = function() {
            $http.get('http://127.0.0.1:8080/data/colors1.json');
        }

    }]);

