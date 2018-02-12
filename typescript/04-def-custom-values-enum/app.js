// interface Todo {
//     name: string;
//     completed?: boolean;
// }
var todo = {
    name: "Pick up drycleaning",
    // state: 1
    state: TodoState.New
};
/*
New = 1
Active = 2
Completed = 3
Deleted = 4
*/
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Completed"] = 3] = "Completed";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
function () { }
delete (todo);
Todo;
{
    //if (todo.state != 3) {
    if (todo.state != TodoState.Deleted) {
        throw "Can't delete incomplete task!";
    }
}
