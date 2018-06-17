// console.log('loaded');

import Vue from 'vue';
import AppLayout from './theme/Layout.vue';

Vue.component('app', {
    template: `
        <div id="app">
            <nav class="nav has-shadow">
                <div class="container">
                    <a href="/">
                        <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
                    </a>
                </div>
            </nav>
            <section class="main-section section"></section>
            <footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                        Follow us on 2
                        <a href="#" target="_blank">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    `
})


// const app = new Vue({
//     data: {
//         hello: 'hi there 221'
//     },
//     template: '<div id="app">{{hello}}</div>'
// });

const app = new Vue({
    // render: h => h('app')
    // render: h => h(AppLayout)
    ...AppLayout
});


export { app };