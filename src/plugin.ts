import Fab from './Fab.vue';
import FabItem from './FabItem.vue';
// import { installMixins } from 'nativescript-material-core';
import ButtonPlugin from 'nativescript-material-button/vue';
// installMixins();

const Plugin = {
    install(Vue) {
        Vue.component('FabItem', FabItem);
        Vue.component('Fab', Fab);
        Vue.use(ButtonPlugin);
    },
};

export default Plugin;
