"use strict"; // generated on: 2018-05-13T19:28:21.890Z

angular
	.module("htmls", [])
	.run(function($templateCache) {

$templateCache.put("src/factor.directive.html",
"<div>\n" +
"    <h2>fAkToR</h2>\n" +
"    <div>\n" +
"        <label for=\"apiKey\">x-api-key:</label><input name=\"apiKey\" type=\"text\" size=50 ng-model=\"params.xApiKey\">\n" +
"    </div>\n" +
"    <div>\n" +
"        <label for=\"quizId\">quiz Id:</label><input type=\"text\" ng-model=\"params.quizId\">\n" +
"    </div>\n" +
"    <div>\n" +
"        <label for=\"progressId\">progress Id:</label><input type=\"text\" ng-model=\"params.progressId\">\n" +
"    </div>\n" +
"    <div>\n" +
"        <label for=\"sectionId\">section Id:</label><input type=\"text\" ng-model=\"params.sectionId\">\n" +
"    </div>\n" +
"    <div>\n" +
"        <lable>Parameters:</lable>\n" +
"        <button  ng-click=\"onPersist('save')\">Save</button>\n" +
"        <button ng-click=\"onPersist('load')\">Load</button>\n" +
"    </div>\n" +
"    <hr>\n" +
"    Actions:\n" +
"    <button ng-click=\"onGetQuestions()\">Get Questions</button>\n" +
"    <span ng-show=\"loadingQuestions\">Loading...</span>\n" +
"    <button ng-disabled=\"quiz.questions.length === 0\" ng-click=\"onSend()\">Send One</button>\n" +
"    <button ng-disabled=\"quiz.questions.length === 0\" ng-click=\"onBegin()\">Begin</button>\n" +
"    <button ng-click=\"onStop()\">Stop</button>\n" +
"    <span ng-show=\"loadingAnswers\">Loading...</span>\n" +
"    <hr>\n" +
"    <h3>\n" +
"        Questions: {{ solver.quiz.questions.length }},\n" +
"        Passing: {{ solver.quiz.passingMark }},\n" +
"        Score {{ solver.assessment.score }},\n" +
"        Result: {{ solver.assessment.result }}</h3>\n" +
"    <hr>\n" +
"    <h3>Generations: {{ solver.generations.length }}</h3>\n" +
"    <div ng-repeat=\"g in solver.generations\">\n" +
"        {{ $index }}.)\n" +
"        score: {{ g.score + ' [' + g.result + ']' }},\n" +
"        Q: {{ g.questionIndex }} A: {{ g.answerIndex }}\n" +
"        {{ g.info }}\n" +
"    </div>\n" +
"    <hr>\n" +
"    <div ng-repeat=\"q in solver.quiz.questions\">\n" +
"        <question q=\"q\" index=\"{{ $index }}\"></question>\n" +
"    </div>\n" +
"</div>\n" +
"");

$templateCache.put("src/question.directive.html",
"<strong>\n" +
"    <div>nr: {{ index }}</div>\n" +
"    <div>id: {{ q.id }}</div>\n" +
"    <div>question: {{ q.question }}</div>\n" +
"    <div>type: {{ q.question_type }}</div>\n" +
"</strong>\n" +
"<div ng-repeat=\"a  in q.answers\">\n" +
"    id: {{ a.id }}\n" +
"    answer: {{ a.answer }}\n" +
"    <input type=\"checkbox\" ng-model=\"a.selected\">\n" +
"</div>\n" +
"<br>\n" +
"");

});