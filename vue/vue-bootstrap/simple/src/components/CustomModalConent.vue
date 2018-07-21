<template>
<div>
    <p>here is a custom modal content [{{ name }}]</p>
    <button class="btn btn-primary" @click="clickMe">Click Me</button>
</div>
</template>

<script>
export default {
    props: ['name'],
    methods: {
        clickMe() {
            this.$emit('mojo')
        }
    }
}
</script>
