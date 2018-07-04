import Vue from 'vue'
import App from './App.vue'
import './bootstrap/css/bootstrap.min.css'
import * as uiv from 'uiv'

Vue.config.productionTip = false

Vue.use(uiv)

Vue.directive('movable', {
  inserted: function(e) {
    var dialog = $('.modal-dialog');

    if (dialog) {
        dialog.draggable({
            handle: '.modal-header',
            scroll: false
        });
    }

    $('.modal').on('hidden.bs.modal', function () {
        $(this).css({ top: 0, left: 0 });
    });
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
