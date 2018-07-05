<template>
    <div>
        <p>Hello there: {{ msg }}</p>
        <hr>
        <button class="btn btn-primary" @click="toggleModal">Open Modal 1</button>
        <hr>
        <!-- <modal v-movable title="Modal 1" v-model="showModal1">
            <h4>Text in modal</h4>
            <btn type="info" @click="showModal2 = !showModal2">Open Modal 2</btn> -->
            <!-- <button type="button" class="btn btn-primary" @click="showModal2 = !showModal2">Open Modal 2</button> -->
        <!-- </modal> -->
        <login @login="handleLogin" v-if="showModal1"/>
        <p v-if="showModal1">now you see me</p>
    </div>
</template>

<script>
import Login from './Login.vue'

export default {
    props: ['msg'],
    data() {
        return {
            showModal1: false
        }
    },
    methods: {
        handleLogin (payload) {
            console.log('handle login here...' + JSON.stringify(payload));
        },
        toggleModal () {
            this.showModal1 = !this.showModal1
        }
    },
    components: {
        Login
    }
}
</script>
