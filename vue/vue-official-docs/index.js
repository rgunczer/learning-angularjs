
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Hummus' },
        ]
    },
    created: function() {
        console.log('created... ' + this.message);
    }
});