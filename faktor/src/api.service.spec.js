'use strict';

describe('api', function() {
    var api;

    beforeEach(function() {
        module('app', function($provide) { // eslint-disable-line no-unused-vars
            // empty
        });
        inject(function($injector) {
            api = $injector.get('api');
        });
    });

    it('should be defined', function() {
        expect(api).toBeDefined();
    });

    it('should have a function "init"', function() {
        expect(api.init).toBeDefined();
        expect(api.init).toEqual(jasmine.any(Function));
    });

    it('should have a function "getQuestions"', function() {
        expect(api.getQuestions).toBeDefined();
        expect(api.getQuestions).toEqual(jasmine.any(Function));
    });

    it('should have a function "postAnswers"', function() {
        expect(api.postAnswers).toBeDefined();
        expect(api.postAnswers).toEqual(jasmine.any(Function));
    });

});
