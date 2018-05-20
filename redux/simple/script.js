function addColor(value) {
    return {
        type: "ADD",
        color: value
    };
}

function removeColor(value) {
    return {
        type: "REMOVE",
        color: value
    };
}

function favoriteColors(state, action)  {
    if (state === undefined) {
        state = [];
    }

    if (action.type === "ADD") {
        return state.concat(action.color);
    } else if (action.type === "REMOVE") {
        return state.filter(function(item) {
            return item !== action.color;
        });
    } else {
        return state;
    }
}

var store = Redux.createStore(favoriteColors);
store.subscribe(render);

function render() {
    console.log('render: ' + store.getState());
}

store.dispatch(addColor("blue"));
//console.log(store.getState());
store.dispatch(addColor("yellow"));
//console.log(store.getState());
store.dispatch(addColor("green"));
// console.log(store.getState());
store.dispatch(addColor("red"));
// console.log(store.getState());
store.dispatch(addColor("gray"));
// console.log(store.getState());
store.dispatch(addColor("orange"));
// console.log(store.getState());
store.dispatch(removeColor("gray"));
// console.log(store.getState());
