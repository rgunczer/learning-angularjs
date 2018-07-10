<template>
    <div style="background-color: grey; broder: 1px solid black; padding-top: 10px; min-height:30px;" @click="toggleSelection(fruit)">
        <div>{{fruit.name}}</div>
    </div>
</template>

<script>
export default {
    props: [ 'fruit' ],
    methods: {
        toggleSelection(fruit) {
            console.log(`toggle selection: ${fruit.id}`);
            this.$store.commit('setSelected', { id: fruit.id });
            // this.$forceUpdate()
        },
    }
}
</script>
