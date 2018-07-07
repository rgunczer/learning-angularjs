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
        <hr>
        <button class="btn btn-primary" @click="showMessageBox">Show MessageBox</button>
        <button class="btn btn-primary" @click="showMessageBoxWithHtml">Show MessageBox With HTML</button>
        <hr>
        <button class="btn btn-primary" @click="showNotification">Show Notification</button>
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
        },
        showMessageBox () {
            this.$alert({
                title: 'Information',
                size: 'md',
                content: 'Some important message to the user'
            }, msg => {
                console.log(`you selected ${msg}`);
            })
        },
        showMessageBoxWithHtml () {
            this.$alert({
                title: 'Information',
                size: 'md',
                okText: 'Confirm',
                html: true,
                content: '<p class="text-info">Some important <strong>message</strong> to the user</p>'
            }, msg => {
                console.log(`you selected ${msg}`);
            })
        },
        showNotification () {
            this.$notify({
                title: 'Title',
                content: 'This notification will not dismiss automatically.',
                duration: 0
            })
        }
    },
    components: {
        Login
    }
}
</script>
