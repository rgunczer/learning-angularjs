interface Todo {
    name: string;
    completed?: boolean; // optional prop
}

var todo: Todo = {};
var todo = <Todo>{}; // casting syntax

var todo: Todo = { name: 123 };

var todo: Todo = {
    name: 'pick up drycleaning'
}

var todo: Todo = {
    name: 'pick up drycleaning',
    completed: true
}


interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}