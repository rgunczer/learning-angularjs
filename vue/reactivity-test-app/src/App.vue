<template>
  <div id="app">
    <button @click="addRandomFruit">Add Random Fruit</button>
    <!-- <FruitStore msg="Welcome to Your Vue.js App" :fruits="fruitsList"/> -->
    <FruitStore msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import _ from 'lodash';

import FruitStore from './components/FruitStore.vue';

export default {
  name: 'app',
  // computed: {
  //   fruitsList() {
  //     return this.$store.getters.fruits;
  //   },
  // },
  methods: {
    addRandomFruit() {
      console.log('add random fruit');
      const randomId = _.uniqueId();
      const obj = { id: randomId, name: 'apple-' + randomId, selected: false };
      // console.log(`obj is: ${JSON.stringify(obj)}`);

      this.$store.commit('addFruit', obj);
    },
  },
  components: {
    FruitStore,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
