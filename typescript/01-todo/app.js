var container = document.getElementById('container');
function defaultParameters() {
    function countdown(initial, final, interval) {
        if (final === void 0) { final = 0; }
        if (interval === void 0) { interval = 1; }
        var current = initial;
        while (current > final) {
            container.innerHTML = current;
            current -= interval;
        }
    }
    countdown(10, 0, 1);
    countdown(10, 4);
    countdown(10, 6, 2);
}
function templateStrings() {
    var todo = {
        id: 123,
        name: 'Pick up drycleaning',
        completed: true
    };
    var displayName = "Todo #" + todo.id;
    container.innerHTML = "\n    <div todo='" + todo.id + "' class=\"list-group-item}\">\n        <i class=\"" + (todo.completed ? "" : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n        <span class=\"name\">" + todo.name + "</span>\n    </div>\n    ";
}
