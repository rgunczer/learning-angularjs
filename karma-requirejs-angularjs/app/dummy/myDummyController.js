define(function() {

    return function($log, $scope) {
        $scope.dummyStuff = 'dummy';
        $scope.sayDummy = function() {
            $log.info('Dummy Here');
        };
        $scope.calculate = function () { 
            return 'stuff';
        };
    };

});
