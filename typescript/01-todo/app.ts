var container = document.getElementById('container');

function defaultParameters() {

    function countdown(initial, final = 0, interval = 1) {
        var current = initial;

        while(current > final) {
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
    }

    var displayName = `Todo #${todo.id}`;


    container.innerHTML = `
    <div todo='${todo.id}' class="list-group-item}">
        <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
        <span class="name">${todo.name}</span>
    </div>
    `;

}