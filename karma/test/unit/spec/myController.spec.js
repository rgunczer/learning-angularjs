
describe('test last of us names', function() {
    var scope, myController;
    var $rootScope;

    beforeEach(function() {
        module('myApp');
        inject(function(_$rootScope_, $controller) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            myController = $controller('myController', {
                '$scope': scope 
            })
        });
    });

    it('should be Joel', function() {
        dump(scope.$id);
        expect(scope.name).toEqual('Joel');
    });

    it('should work array find method', function() {
        scope.brokeOnIe11();
    });

});