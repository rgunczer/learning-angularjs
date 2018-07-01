<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
    <Test @openDialog="openDlg" />
    <b-modal ref="myModalRef" id="modal2" title="Bootstrap-Vue">
      <p>Hello from modal on App.vue</p>
    </b-modal>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test";

export default {
  name: "app",
  methods: {
    openDlg() {
      this.$refs.myModalRef.show()
    }
  },
  components: {
    HelloWorld,
    Test
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
