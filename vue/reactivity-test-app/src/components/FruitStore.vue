<template>
    <div>
        <p>Here is the fruit store</p>
        <div v-for="f in fruits" :key="f.id" :class="{ 'sel-fruit': f.selected}">
            {{f.selected}}
            <fruit-panel :fruit="f"></fruit-panel>
        </div>
    </div>
</template>

<script>
import FruitPanel from './FruitPanel.vue'

export default {
    components: {
        'fruit-panel': FruitPanel
    },
    computed: {
        fruits() {
            return this.$store.getters.fruits;
        }
    },
    // props: ['msg', 'fruits'],
    props: ['msg'],
    methods: {
    },
};
</script>

<style>
    .sel-fruit {
        background-color: yellow
    }
</style>
