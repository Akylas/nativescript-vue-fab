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


import { Client as FlipperClient } from 'nativescript-flipper';
const flipper = new FlipperClient();
flipper.start({
    plugins: ['inspector']
});

import FabPlugin from 'nativescript-vue-fab';
Vue.use(FabPlugin);

import { fonticon, TNSFontIcon } from 'nativescript-akylas-fonticon';
// TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    mdi: './assets/materialdesignicons.min.css'
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

import App from '~/components/App';
new Vue({
    render: h => {
        return h('frame', [h(App)]);
    }
}).$start();
