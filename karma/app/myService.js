angular.module('myApp')
    .service('myService', function() {
        this.name = 'Joe';
        this.getName = function() {
            return 'Jack';
        }
    });

