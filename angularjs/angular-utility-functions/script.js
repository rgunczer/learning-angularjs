angular.module('myApp', [])
    .controller('myController', function($scope, $log) {
        $scope.text = "If you can read this then AngularJS is working fine";
        $log.info('hello from myController');

        // Creates a deep copy of source, which should be an object or an array.
        var source = {
            name: 'Joel',
            gender: 'male',
            age: 56
        };

        //backtick Alt + 96 = `

        // define hidden or non enumerable property on JS object
        Object.defineProperty(source, 'income', { value: 349, enumerable: false });


        $log.info("Joel's income:" + source.income);

        $log.info('source: ' + angular.toJson(source, true));
        var destination = angular.copy(source);
        $log.info('destination: ' + angular.toJson(destination, true));



    })