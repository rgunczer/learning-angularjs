'use strict';

angular.module('App', [])

    .controller('myController', function ($scope, $log, myApiService) {
        $scope.text = 'If you can read this then AngularJS is working fine';
        $log.info('hello from myController');

        $scope.getData = function() {
            $log.info('begin getting data');
            myApiService.getData('colors.json1')
                .then(function(data) {
                    if (angular.isDefined(data)) {
                        $log.info('data received successfully: ' + angular.toJson(data, true));
                        $scope.colors = data;
                    } else {
                        $log.warn('did not received data (api service logged the issue already)');
                    }
                })
                // .catch(function(error) {
                //     $log.error('myController: ' + angular.toJson(error, true));
                // })
                .finally(function() {
                    $log.info('finished getting data');
                });
        };
    })
    .service('myApiService', function($http, $log) {
        this.getData = function(jsonFileName) {
            return $http.get('../data/' + jsonFileName)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    $log.error('myApiService: ' + angular.toJson(error, true));
                    //throw error;
                });
        };
    });