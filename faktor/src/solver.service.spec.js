'use strict';

describe('solver', function() {
    var solver;

    beforeEach(function() {
        module('app', function($provide) { // eslint-disable-line no-unused-vars
            // empty
        });
        inject(function($injector) {
            solver = $injector.get('solver');
        });
    });

    it('should be defined', function() {
        expect(solver).toBeDefined();
    });

    // TODO: add more test cases
});