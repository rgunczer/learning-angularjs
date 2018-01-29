// interface Todo {
//     name: string;
//     completed?: boolean;
// }

// var todo: Todo = {
//     name: "Pick up drycleaning",
//     completed: true
// }

interface Todo {
    name: string;
    //state: number;
    state: TodoState;
}

var todo: Todo = {
    name: "Pick up drycleaning",
    // state: 1
    state: TodoState.New
}

/*
New = 1
Active = 2
Completed = 3
Deleted = 4
*/

enum TodoState {
    New = 1,
    Active,
    Completed,
    Deleted
}

function delete(todo: Todo) {
    //if (todo.state != 3) {
    if (todo.state != TodoState.Deleted) {
        throw "Can't delete incomplete task!";
    }
}
