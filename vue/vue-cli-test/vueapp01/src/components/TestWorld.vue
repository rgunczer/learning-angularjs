<template>
    <div>
        <h1>Some Test {{stuff}} stuff goes here</h1>
        <button v-on:click="sayHello">Say Hello</button>
        <button v-on:click="counter++">Inc</button>
        <button v-on:click="counter--">Dec</button>
        <p>
            {{ counter }}
            <span v-if="counter === 0"> it's Zero</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'TestWorld',
    data() {
        return {
            stuff: 'WORLD',
            counter: 0
        }
    },
    methods: {
        sayHello() {
            alert('Hello from button click');
        }
    }
}
</script>

<style>

</style>
