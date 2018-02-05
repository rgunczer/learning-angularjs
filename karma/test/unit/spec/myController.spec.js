
describe('test myController', function() {
    var scope, myController;
    var $rootScope;

    beforeEach(function() {
        module('myApp');
        inject(function(_$rootScope_, $controller) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            myController = $controller('myController', {
                '$scope': scope 
            });
        });
    });

    it('should myController be defined', function() {
        expect(myController).not.toBeUndefined();
    });

    it('should be Joel', function() {
        expect(scope.name).toEqual('Andy');
    });

    it('should work array find method', function() {
        scope.brokeOnIe11();
    });

    it('should filter the array', function() {
        var resultArray = scope.getFilteredArray([1, 2, 3]);
        
        expect(resultArray).toEqual([1, 2]);
    });
});