<template>
    <div>
        <p>Hello there: {{ msg }}</p>
        <hr>
        <button class="btn btn-primary" @click="showModal1 = !showModal1">Open Modal 1</button>
        <hr>
        {{ showModal }}
        <modal v-movable
            title="Modal 1"
            v-model="showModal1"
        >
            <h4>Text in modal</h4>
            <!-- <btn type="info" @click="showModal2 = !showModal2">Open Modal 2</btn> -->
            <button type="button" class="btn btn-primary" @click="showModal2 = !showModal2">Open Modal 2</button>
        </modal>
        <modal v-movable v-model="showModal2" title="Modal 2">
            <p>This is a nested modal</p>
        </modal>
    </div>
</template>

<script>
export default {
    props: ['msg'],
    data() {
        return {
            showModal1: false,
            showModal2: false,
            showModal3: false
        }
    }
}
</script>
