angular.module('myApp', [])
    .controller('myController', ['$scope', '$log', function ($scope, $log) {
        $scope.text = 'Angular JS ' + angular.version.full;
        $log.info('hello from myController');
    }])
    .directive('myValidation', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelController) {
                modelController.$parsers.push(function(inputValue) {
                    var transformedInput = inputValue.toLowerCase().replace(/ /g, '');
                    if (transformedInput !== inputValue) {
                        modelController.$setViewValue(transformedInput);
                        modelController.$render();
                    }
                    return transformedInput;
                });
            }
        };
    });
