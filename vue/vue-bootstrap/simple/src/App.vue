<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
    <Test @openDialog="openDlg" />
    <b-modal ref="myModalRef" id="modal2" title="Bootstrap-Vue">
      <p>Hello from modal on App.vue</p>
    </b-modal>
    <hr>
    {{ datum | flDate }}
    <hr>
    <button @click="openModal" class="btn btn-primary">Open</button>
    <b-modal
      ref="openModalRef"
      @ok="modalOkClick"
      ok-title="OKK">
      <p slot="modal-title">my custom title</p>
      <div>
        some text for the body
      </div>
      <!-- <div slot="modal-ok">Jancsi</div> -->
    </b-modal>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test";
import moment from 'moment'

export default {
  name: "app",
  data () {
    return {
      datum: new Date(2005, 0, 12)
    }
  },
  methods: {
    openDlg() {
      this.$refs.myModalRef.show()
    },
    openModal() {
      console.log('open modal clicked');
      this.$refs.openModalRef.show();
    },
    modalOkClick() {
      console.log('modal ok click');
    }
  },
  components: {
    HelloWorld,
    Test
  },
  created() {
    console.log('moment in created hook:' + moment.locale());
  },
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
