'use strict';

define(['testApp'], function() {

    describe('test myController', function() {
        var scope, myController;
        var $rootScope;

        beforeEach(function() {
            module('testApp');
            inject(function(_$rootScope_, $controller) {
                $rootScope = _$rootScope_;
                scope = $rootScope.$new();
                myController = $controller('myDummyController', {
                    '$scope': scope 
                });
            });
        });

        it('should', function() {
            expect(myController).toBeDefined();
            expect(scope.dummyStuff).toBe('dummy'); 
        });
            

    });

});