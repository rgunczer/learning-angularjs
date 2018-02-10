'use strict';

define(['testApp'], function() {

    describe('test myDummyController', function() {
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

        it('should dummyStuff be "dummy"', function() {
            expect(myController).toBeDefined();
            expect(scope.dummyStuff).toBe('dummy'); 
        });
        
        it('call to "calculate" return "stuff"', function() {
            var result = scope.calculate();

            expect(result).toBe('stuff');
        });
            

    });

});