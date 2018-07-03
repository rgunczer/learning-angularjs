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
    <button @click="openModal" class="btn btn-primary">OpeNN</button>
    <b-modal
      v-model="openModald"
      @ok="modalOkClick"
      ok-title="OKK">
      <p slot="modal-title">my custom title</p>
      <custom-modal-content :name="'jancsi'" @mojo="doMojo"/>
      <!-- <div slot="modal-ok">Jancsi</div> -->
    </b-modal>
    <hr>
    <dialogs-wrapper></dialogs-wrapper>
    <hr>
    <b-modal
    v-model="modalShowMojo"
    ok-title="OK mojo">
      <p>some content mojo</p>
    </b-modal>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test";
import moment from 'moment'
import * as ModalDialogs from 'vue-modal-dialogs'
import CustomModalContent from "./components/CustomModalConent";

export default {
  name: "app",
  data () {
    return {
      datum: new Date(2005, 0, 12),
      modalShowMojo: false,
      openModald: false
    }
  },
  methods: {
    doMojo() {
      //alert('mojo')
      // this.$refs.modalRefMojo.show()
      this.modalShowMojo = true
    },
    openDlg() {
      // this.$refs.myModalRef.show()
      this.openModald = true
    },
    openModal() {
      console.log('open modal clicked');
      // this.$refs.openModalRef.show();
      this.openModald = true
    },
    modalOkClick() {
      console.log('modal ok click');
    }
  },
  components: {
    HelloWorld,
    Test,
    CustomModalContent
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
