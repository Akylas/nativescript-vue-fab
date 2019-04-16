import Vue from 'nativescript-vue';

Vue.config.silent = false;
Vue.config['debug'] = true;
// Vue.config.errorHandler = (e, vm, info) => {
//     console.log('+'.repeat(80));
//     console.log(e, vm, info);
//     console.dir(e);
//     console.log('+'.repeat(80));
// };

import './app.scss'

import ButtonPlugin from 'nativescript-material-button/vue';
import CardViewPlugin from 'nativescript-material-cardview/vue';
Vue.use(ButtonPlugin);
Vue.use(CardViewPlugin);

import FabPlugin from 'nativescript-vue-fab';
Vue.use(FabPlugin);

import { fonticon, TNSFontIcon } from 'nativescript-fonticon';
// TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    mdi: 'assets/materialdesignicons.min.css'
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

import App from '~/components/App';
new Vue({
    render: h => {
        return h('frame', [h(App)]);
    }
}).$start();
