<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Test msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'app',
  components: {
    Test
  }
}
</script>

<style>

</style>
