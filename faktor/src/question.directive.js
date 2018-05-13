'use strict';

angular
    .module('app')
    .directive('question', function() {
        return {
            restrict: 'E',
            templateUrl: 'src/question.directive.html',
            scope: {
                q: '=',
                index: '@'
            }
        };
    });
