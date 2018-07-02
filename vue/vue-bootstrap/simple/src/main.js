import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import moment from 'moment';

Vue.config.productionTip = false

var config = {
  DateFormat: 'DD.MM.YYYY'
}

console.log('moment: ' + moment.locale());

Vue.filter('flDate', function(value) {
  return moment(value).format(config.DateFormat)
});

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')