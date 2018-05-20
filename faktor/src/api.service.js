'use strict';

angular
    .module('app')
    .service('api', function($log, $http) {
        var url = {
            q: '',
            a: ''
        };
        var lastHttpError = null;

        function logHttpError(response) {
            lastHttpError = response.data;
            $log.error(angular.toJson(lastHttpError, true));
        }

        this.getUrlObject = function() {
            return url;
        };

        this.getLastHttpError = function() {
            return lastHttpError;
        };

        this.init = function() {
            $http.get('data/api.json')
                .then((response) => {
                    url = response.data;
                    $log.info('url: ' + angular.toJson(url, true));
                })
                .catch((response) => {
                    logHttpError(response);
                });
        };

        this.getQuestions = function(quizId, xApiKey) {
            $log.debug(`getQuestions quizId=${quizId}`);
            return $http({
                method: 'GET',
                url: url.q + quizId,
                headers: {
                    'X-Api-Key': xApiKey
                }
            })
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    logHttpError(response);
                });
        };

        this.postAnswers = function(obj, xApiKey) {
            return $http({
                method: 'POST',
                url: url.a,
                headers: {
                    'X-Api-Key': xApiKey
                },
                data: { data: JSON.stringify(obj) }
            })
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    logHttpError(response);
                });
        };
    });
