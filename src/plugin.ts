import Fab from './Fab';
import FabItem from './FabItem';
import { installMixins } from 'nativescript-material-core';
import ButtonPlugin from 'nativescript-material-button/vue';
installMixins();

const Plugin = {
    install(Vue) {
        Vue.component('FabItem', FabItem);
        Vue.component('Fab', Fab);
        Vue.use(ButtonPlugin);
    }
};

export default Plugin;
