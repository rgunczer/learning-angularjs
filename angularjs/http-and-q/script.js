'use strict';

angular.module('myApp', [])
    .controller('myController', ['$scope', '$log', 'myData', function ($scope, $log, myData) {
        $scope.text = "If you can read this then AngularJS is working fine";
        $log.info('hello from myController');
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
        myData.load()
            .then(function(result) {
                $log.info('all data is received in myOtherController');
            }, function (error) {
                $log.info('error loading data in myOtherController ' + angular.toJson(error));
            });
    }])
    .service('myData', ['$http', '$log', '$q', function ($http, $log, $q) {
        $log.info('myData BEGIN...');

        var deferred = $q.defer();

        var countriesPromise;
        var colorsPromise;

        this.countries = [];
        this.colors = [];
        var that = this;

        function getCountries() {
            var prefix = 'countries ';
            var url = 'http://127.0.0.1:8080/data/countries.json';
            return $http.get(url);
                // .then(function (response){
                //     $log.info(prefix + 'data received...');
                //     $log.info(response.data);
                //     that.countries.length = 0;
                //     response.data.forEach(function(element) {
                //         that.countries.push(element);
                //     });
                // }, function (error) {
                //     $log.info(prefix + 'error unable to receive data...' + angular.toJson(error));
                // })
                // .finally(function() {
                //     $log.info(prefix + 'data load finally block...');
                // });
        }

        function getColors() {
            var prefix = 'colors';
            var url = 'http://127.0.0.1:8080/data/colors1.json';
            return $http.get(url);
                // .then(function (response) {
                //     $log.info(prefix + 'data received...');
                //     $log.info(response.data);
                // }, function(error) {
                //     $log.info(prefix + 'error unable to receie data...' + angular.toJson(error));
                // })
                // .finally(function() {

                // });
        }

        this.load = function() {
            $log.info('myData load...');
            if (angular.isUndefined(countriesPromise)) {
                countriesPromise = getCountries();
            }
            if (angular.isUndefined(colorsPromise)) {
                colorsPromise = getColors();
            }

            $q.all([colorsPromise, countriesPromise])
                .then(function (results) {
                    $log.info(angular.toJson(results));
                    deferred.resolve(results);
                }, function (errors) {
                    deferred.reject(errors);
                })
                .finally(function () {

                });
            return deferred.promise;
        }

    }]);

