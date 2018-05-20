'use strict';

describe('api', function() {
    var api;
    var $httpBackend;

    beforeEach(function() {
        module('app', function($provide) { // eslint-disable-line no-unused-vars
            // empty
        });
        inject(function($injector, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            api = $injector.get('api');
        });
    });

    it('should be defined', function() {
        expect(api).toBeDefined();
    });

    it('should have a function "init"', function() {
        expect(api.init).toBeDefinedFunction();
    });

    it('should have a function "getQuestions"', function() {
        expect(api.getQuestions).toBeDefinedFunction();
    });

    it('should have a function "postAnswers"', function() {
        expect(api.postAnswers).toBeDefinedFunction();
    });

    it('should get "api.json" on "init" ', function() {
        var data = {
            q: 'qq',
            a: 'aa'
        };

        $httpBackend
            .expectGET('data/api.json')
            .respond(data);

        api.init();
        $httpBackend.flush();

        expect(api.getUrlObject()).toEqual(data);
    });

    it('should log http error when init fails', function() {
        $httpBackend
            .expectGET('data/api.json')
            .respond(500, { message: 'err' });

        api.init();
        $httpBackend.flush();

        var lastHttpError = api.getLastHttpError();

        expect(lastHttpError).toEqual({ message: 'err' });
    });

    it('should get questions on call to "getQuestions"', function() {
        var quizId = 12;
        var xApiKey = 'abc';
        var quiz = {};

        $httpBackend
            .expectGET('data/api.json')
            .respond({ q: 'some/url?id=' });

        api.init();
        $httpBackend.flush();

        $httpBackend
            .expectGET('some/url?id=12')
            .respond(quiz);

        api.getQuestions(quizId, xApiKey).then(function(result) {
            expect(result).toEqual(quiz);
        });

        $httpBackend.flush();
    });

    it('should report error when "getQuestions" fail', function() {
        var quizId = 12;
        var xApiKey = 'abc';

        $httpBackend
            .expectGET('data/api.json')
            .respond({ q: 'some/url?id=' });

        api.init();
        $httpBackend.flush();

        $httpBackend
            .expectGET('some/url?id=12')
            .respond(500, { message: 'some error' });

        api.getQuestions(quizId, xApiKey);
        $httpBackend.flush();

        expect(api.getLastHttpError()).toEqual({ message: 'some error' });
    });

    it('should post answers successfully', function() {
        var obj = {};
        var xApiKey = 'abc';
        var res = {};

        $httpBackend
            .expectGET('data/api.json')
            .respond({ a: 'some/url' });

        api.init();
        $httpBackend.flush();

        $httpBackend
            .expectPOST('some/url')
            .respond(res);

        api.postAnswers(obj, xApiKey).then(function(result) {
            expect(result).toEqual(res);
        });

        $httpBackend.flush();
    });

    it('should post answers but fail', function() {
        var obj = {};
        var xApiKey = 'abc';

        $httpBackend
            .expectGET('data/api.json')
            .respond({ a: 'some/url' });

        api.init();
        $httpBackend.flush();

        $httpBackend
            .expectPOST('some/url')
            .respond(500, { message: 'not okay' });

        api.postAnswers(obj, xApiKey);
        $httpBackend.flush();

        expect(api.getLastHttpError()).toEqual({ message: 'not okay' });
    });


});
