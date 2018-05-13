'use strict';

describe('factor', function() {
    var element, parentScope, scope;

    beforeEach(function() {
        module('app', function($provide) { // eslint-disable-line no-unused-vars
            $provide.factory('api', function() {
                return {
                    init: function() {
                        return { q: '', a: '' };
                    }
                };
            });
        });
        inject(function($injector, $compile, $rootScope) {
            parentScope = $rootScope.$new();
            element = $compile('<factor></factor>')(parentScope);
        });
        parentScope.$digest();
        scope = element.scope();
    });

    it('should compile', function() {
        expect(element.find('button').length).toBeGreaterThan(0);
    });

    it('should "scope" be defined', function() {
        expect(scope).toBeDefined();
    });

    describe('"scope" functions', function() {

        it('should have "onBegin"', function() {
            expect(scope.onBegin).toBeDefined();
            expect(scope.onBegin).toEqual(jasmine.any(Function));
        });

        it('should have "onStop"', function() {
            expect(scope.onStop).toBeDefined();
            expect(scope.onStop).toEqual(jasmine.any(Function));
        });

        it('should have "onGetQuestions"', function() {
            expect(scope.onGetQuestions).toBeDefined();
            expect(scope.onGetQuestions).toEqual(jasmine.any(Function));
        });

        it('should have "onSend"', function() {
            expect(scope.onSend).toBeDefined();
            expect(scope.onSend).toEqual(jasmine.any(Function));
        });

        it('should have "onPersist"', function() {
            expect(scope.onPersist).toBeDefined();
            expect(scope.onPersist).toEqual(jasmine.any(Function));
        });

    });




});
