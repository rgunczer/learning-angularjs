
describe('MainCtrl', function() {
    
    beforeEach(module('cookbook'));

    it('should assign the correct name to scope', inject(function($controller, $rootScope) {
        var $scope = $rootScope.$new();
        $controller('MainCtrl', {
            $scope: $scope
        });

        expect($scope.name).toEqual('Joel');
    }));
        

});
    
