'use strict';

// define(['/base/app/myService'], function(service) {
//     angular.module('testApp', [])
//         .service('myService', service);
// });

define(function(require) {
    angular.module('testApp', [])
        .service('myService', require('/base/app/myService'))
        .controller('myController', require('/base/app/myController'))
        .directive('myDirective', require('/base/app/myDirective'))
        .controller('myDummyController', require('/base/app/dummy/myDummyController'));
});