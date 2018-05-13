'use strict';

describe('question', function() {
    var element, parentScope, scope;

    beforeEach(function() {
        module('app', function($provide) { // eslint-disable-line no-unused-vars
            // empty
        });
        inject(function($injector, $compile, $rootScope) {
            parentScope = $rootScope.$new();
            parentScope.question = {
                name: 'a'
            };

            element = $compile('<question q="question"></question>')(parentScope);
        });
        parentScope.$digest();
        scope = element.isolateScope();
    });

    it('should compile', function() {
        expect(element.find('strong').length).toBeGreaterThan(0);
    });

    it('should define "scope"', function() {
        expect(scope).toBeDefined();
    });

    it('should have "question" reference on "scope"', function() {
        expect(scope.q).toBe(parentScope.question);
        expect(scope.q.name).toBe('a');
    });

});
