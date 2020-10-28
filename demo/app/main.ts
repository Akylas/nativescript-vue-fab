import Vue from 'nativescript-vue';

Vue.config.silent = true;
Vue.config['debug'] = false;
// Vue.config.errorHandler = (e, vm, info) => {
//     console.log('+'.repeat(80));
//     console.log(e, vm, info);
//     console.dir(e);
//     console.log('+'.repeat(80));
// };

import './app.scss'

import FabPlugin from 'nativescript-vue-fab';
Vue.use(FabPlugin);

import App from '~/components/App';
new Vue({
    render: h => {
        return h('frame', [h(App)]);
    }
}).$start();
