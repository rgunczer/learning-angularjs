angular.module('myApp', [])
.service('myService', function($http: ng.IHttpService) {
    $http.get()
})