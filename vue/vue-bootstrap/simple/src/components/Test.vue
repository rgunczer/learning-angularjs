<template>
    <div>
        <b-button @click="openDialog">I am a Button</b-button>
        <b-button v-b-modal.modal1 variant="primary">I am a Primary Button</b-button>
        <b-modal id="modal1" title="Bootstrap-Vue">
            <p>Hello from modal</p>
        </b-modal>

        <button @click="modalShow = !modalShow">sHow</button>
        <b-modal title="Bootstrap-Vue-Modal" v-model="modalShow">
            <p>Hello from modal using modalShow {{ datum | flDate }}</p>
        </b-modal>

    </div>
</template>


<script>
export default {
    data() {
        return {
            modalShow: false,
            datum: new Date()
        }
    },
    methods: {
        openDialog() {
            this.$emit('openDialog');
        }
    }
}
</script>

<style>

</style>
