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

    it('should have "generations" array', function() {
        expect(solver.generations).toBeDefined();
        expect(solver.generations).toEqual(jasmine.any(Array));
    });

    it('should have "questionIndex" as number with initial values of 0', function() {
        expect(solver.questionIndex).toBeDefined();
        expect(solver.questionIndex).toEqual(jasmine.any(Number));
        expect(solver.questionIndex).toBe(0);
    });

    it('should have "quiz" object', function() {
        expect(solver.quiz).toBeDefined();
        expect(solver.quiz).toEqual(jasmine.any(Object));
    });

    it('should have "quiz" object with props', function() {
        expect(solver.quiz).toEqual({ questions: [], passingMark: 0});
    });

    it('should have "stop" prop as boolean', function() {
        expect(solver.stop).toBeDefined();
        expect(solver.stop).toBe(true);
    });

    it('should have "reset" function', function() {
        expect(solver.reset).toBeDefined();
        expect(solver.reset).toEqual(jasmine.any(Function));
    });

    it('should have "getCurrentAnswerForQuestion" function', function() {
        expect(solver.getCurrentAnswerForQuestion).toBeDefined();
        expect(solver.getCurrentAnswerForQuestion).toEqual(jasmine.any(Function));
    });

    it('should have "getQuestionsWithAnswers" function', function() {
        expect(solver.getQuestionsWithAnswers).toBeDefined();
        expect(solver.getQuestionsWithAnswers).toEqual(jasmine.any(Function));
    });

    it('should have "updateCurrentGenerationWithAssessmentResults" function', function() {
        expect(solver.updateCurrentGenerationWithAssessmentResults).toBeDefined();
        expect(solver.updateCurrentGenerationWithAssessmentResults).toEqual(jasmine.any(Function));
    });

    it('should have "insertNewGeneration" function', function() {
        expect(solver.insertNewGeneration).toBeDefined();
        expect(solver.insertNewGeneration).toEqual(jasmine.any(Function));
    });

    it('should have "getObjToSend" function', function() {
        expect(solver.getObjToSend).toBeDefined();
        expect(solver.getObjToSend).toEqual(jasmine.any(Function));
    });

    it('should have "getSelectedAnswerIndex" function', function() {
        expect(solver.getSelectedAnswerIndex).toBeDefined();
        expect(solver.getSelectedAnswerIndex).toEqual(jasmine.any(Function));
    });

    it('should have "getCurrentQuestion" function', function() {
        expect(solver.getCurrentQuestion).toBeDefined();
        expect(solver.getCurrentQuestion).toEqual(jasmine.any(Function));
    });

    it('should have "getCurrentGeneration" function', function() {
        expect(solver.getCurrentGeneration).toBeDefined();
        expect(solver.getCurrentGeneration).toEqual(jasmine.any(Function));
    });

    it('should have "getLastQuestion" function', function() {
        expect(solver.getLastQuestion).toBeDefined();
        expect(solver.getLastQuestion).toEqual(jasmine.any(Function));
    });

    it('should have "getLastGeneration" function', function() {
        expect(solver.getLastGeneration).toBeDefined();
        expect(solver.getLastGeneration).toEqual(jasmine.any(Function));
    });

    it('should have "update" function', function() {
        expect(solver.update).toBeDefined();
        expect(solver.update).toEqual(jasmine.any(Function));
    });

    it('should have "calcNext" function', function() {
        expect(solver.calcNext).toBeDefined();
        expect(solver.calcNext).toEqual(jasmine.any(Function));
    });

    it('should have "canContinue" function', function() {
        expect(solver.canContinue).toBeDefined();
        expect(solver.canContinue).toEqual(jasmine.any(Function));
    });

    // TODO: add more test cases
});