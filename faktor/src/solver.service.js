'use strict';

angular
    .module('app')
    .service('solver', function() {
        this.generations = [];
        this.questionIndex = 0;
        this.quiz = {
            questions: [],
            passingMark: 0,
        };
        this.assessment = {
            score: 0,
            result: ''
        };
        this.stop = true;

        this.reset = function() {
            this.stop = false;
            this.quiz.questions.length = 0;
            this.quiz.passingMark = 0;
            this.assessment.score = 0;
            this.assessment.result = '';
            this.questionIndex = 0;
            this.generations.length = 0;
        };

        this.getCurrentAnswerForQuestion = function(q) {
            for(let i = 0; i < q.answers.length; ++i) {
                if (q.answers[i].selected) {
                    return [ q.answers[i].id ];
                }
            }
        };

        this.getQuestionsWithAnswers = function(questions) {
            var qa = [];
            questions.forEach(q => {
                qa.push({
                    question_id: q.id,
                    answer_ids: this.getCurrentAnswerForQuestion(q)
                });
            });
            return qa;
        };

        this.updateCurrentGenerationWithAssessmentResults = function() {
            var g = this.getCurrentGeneration();
            g.score = this.assessment.score;
            g.result = this.assessment.result;
        };

        this.insertNewGeneration = function() {
            this.generations.push({
                score: -1,
                result: '...',
                questionIndex: this.questionIndex,
                answerIndex: this.getSelectedAnswerIndex(this.getCurrentQuestion())
            });
        };

        this.getObjToSend = function(params) {
            return {
                progress_id: params.progressId,
                content_id: params.quizId,
                sections: [
                    {
                        section_id: params.sectionId,
                        questions: this.getQuestionsWithAnswers(this.quiz.questions)
                    }
                ]
            };
        };

        this.getSelectedAnswerIndex = function(q) {
            for(let i = 0; i < q.answers.length; ++i) {
                if (q.answers[i].selected) {
                    return i;
                }
            }
        };

        this.getCurrentQuestion = function() {
            let q = this.quiz.questions[this.questionIndex];
            return q;
        };

        this.getCurrentGeneration = function() {
            let g = this.generations[this.generations.length - 1];
            return g;
        };

        this.getLastQuestion = function() {
            let q = this.quiz.questions[this.quiz.questions.length - 1];
            return q;
        };

        this.getLastGeneration = function() {
            let g = this.generations[this.generations.length - 2];
            return g;
        };

        this.update = function(userScore, result) {
            this.assessment.score = userScore;
            this.assessment.result = result;
            this.updateCurrentGenerationWithAssessmentResults();
        };

        this.calcNext = function() {
            var self = this;

            function selectNextAnswer(q) {
                let index = self.getSelectedAnswerIndex(q);
                let length = q.answers.length;

                if (index < length - 1) {
                    q.answers[index].selected = false;
                    q.answers[++index].selected = true;
                    return true;
                }
                return false;
            }

            function moveToNextQuestion() {
                let question = self.getCurrentQuestion();
                let lastQuestion = self.getLastQuestion();

                if (question.id !== lastQuestion.id) {
                    ++self.questionIndex;
                }
            }

            function checkToStop() { // FIXME: rewrite
                let question = self.getCurrentQuestion();
                let lastQuestion = self.getLastQuestion();

                if (question.id === lastQuestion.id) {
                    let answerIndex = self.getSelectedAnswerIndex(question);
                    if (answerIndex === question.answers.length - 1) {
                        this.stop = true;
                    }
                }
            }

            function markCorrectAnswerInGeneration(g) {
                g.info = 'Correct!';
            }

            function compareGenerationsAndSelectNextQuestionOrAnswer() {
                let question = self.getCurrentQuestion();
                let answerIndex = self.getSelectedAnswerIndex(question);
                let lastGeneration = self.getLastGeneration();
                let currentGeneration = self.getCurrentGeneration();

                if (currentGeneration.score > lastGeneration.score) {
                    markCorrectAnswerInGeneration(currentGeneration);
                    moveToNextQuestion();
                } else if (currentGeneration.score < lastGeneration.score) {
                    question.answers[answerIndex].selected = false;
                    question.answers[answerIndex - 1].selected = true;
                    currentGeneration.score = lastGeneration.score; // adjust score!
                    markCorrectAnswerInGeneration(lastGeneration);
                    moveToNextQuestion();
                } else if (currentGeneration.score === lastGeneration.score) {
                    selectNextAnswer(question);
                }
            }

            if (this.generations.length >= 2) {
                compareGenerationsAndSelectNextQuestionOrAnswer();
            } else {
                let question = self.getCurrentQuestion();
                selectNextAnswer(question);
            }
            checkToStop(); // FIXME: rewrite this function
        };

        this.canContinue = function() {
            let can = this.assessment.result === 'FAIL' && !this.stop;
            return can;
        };
    });
