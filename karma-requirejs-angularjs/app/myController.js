define(function() {

    return function($scope) {
        $scope.name = 'Andy';
        $scope.sampleArray = [1,2,3];
        
        $scope.brokeOnIe11 = function() {
            var array = [1, 2, 3];
            array.find(function(item) {
                return item === 2;
            });
        };

        $scope.getFilteredArray = function() {
            return $scope.sampleArray.filter(function(item) { return item < 3; });
        };
    };

});