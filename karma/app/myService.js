angular.module('myApp')
    .service('myService', function($http) {
        this.name = 'Joe';
        this.getName = function() {
            return 'Jack';
        };
        this.getNames = function(uuid) {
            return $http.get('api/get/names.json')
                .then(function(response) {
                    response.data.forEach(function(item) {
                        item.uuid = uuid;
                    });
                    return response.data;
                });
        };
    });

