angular
    .module('app')
    .directive('factor', function() {

        function controller($scope, $log, $timeout, $window, api, solver) {

            $scope.params = {
                xApiKey: '-',
                quizId: 0,
                sectionId: 0,
                progressId: 0
            };
            $scope.solver = solver;

            $scope.onBegin = function() {
                solver.stop = false;
                $scope.onPersist('save');
                $scope.onSend();
            };

            $scope.onStop = function() {
                solver.stop = true;
            };

            $scope.onGetQuestions = function() {
                solver.reset();

                $scope.loadingQuestions = true;
                api.getQuestions($scope.params.quizId, $scope.params.xApiKey)
                    .then((data) => {
                        solver.quiz.questions.length = 0;
                        solver.quiz.passingMark = data.assessment.passing_marks;
                        data.assessment.sections[0].questions.forEach(q => {
                            q.answers[0].selected = true;
                            solver.quiz.questions.push(q);
                        });
                    })
                    .finally(() => {
                        $scope.loadingQuestions = false;
                    });
            };

            $scope.onSend = function() {
                $scope.loadingAnswers = true;

                const obj = solver.getObjToSend($scope.params);

                solver.insertNewGeneration();

                api.postAnswers(obj, $scope.params.xApiKey)
                    .then((data) => {
                        solver.update(data.assessment.user_score, data.assessment.result);

                        if (solver.canContinue()) {
                            solver.calcNext();
                            $timeout(() => {
                                $scope.onSend();
                            }, 1000);
                        }
                    })
                    .finally(() => {
                        $scope.loadingAnswers = false;
                    });
            };

            $scope.onPersist = function(way) {
                const key = 'fAkToRpArAmS';
                if (way === 'save') {
                    $window.localStorage.setItem(key, JSON.stringify($scope.params));
                } else if (way === 'load') {
                    const str = $window.localStorage.getItem(key);
                    if (str) {
                        $scope.params = JSON.parse(str);
                    }
                }
            };

            $scope.onPersist('load');
            api.init();
        }

        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: 'src/factor.directive.html',
            controller: controller
        };
    });