<template>
    <div>
        <p>Employee Details</p>
        <p>Name: {{ emp.name }}</p>
        <p>Age: {{ emp.age }}</p>
        <p>Kills: {{ emp.kills }}</p>
        <button type="button" @click="makeOlder">Make older</button>
    </div>
</template>

<script>
import CreatedMixinLogger from '../mixins/created-mixin-logger.js'

export default {
    props: {
        emp: Object,
        required: true
    },
    methods: {
        makeOlder() {
            ++this.emp.age;
        }
    },
    mixins: [CreatedMixinLogger]
}
</script>

<style>

</style>
