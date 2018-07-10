var app = new Vue({
    el: '#app',
    data: {
        message: 'Hi There!',
        fruits: [{ name: 'apple'}, { name: 'banana'}, { name: 'kiwi'}]
    },
    computed: {
        fruts() {
            return this.fruits
        }
    },
    methods: {
        addFruit () {
            this.fruits.push({ type: 'fruit',  name: 'Apple', uuid: _.uniqueId('frt-')})
        },
        editFruit () {
            // this.fruits[1] = { name: 'Apple2' }
            this.fruits[1].name = 'Apple2'
        }
    }
});
