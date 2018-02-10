define(function(require) {

    angular.module('myApp', [])
        .controller('myController', require('../app/myController'))
        .directive('myDirective', require('../app/myDirective'))
        .service('myService', require('../app/myService'));
        
});
