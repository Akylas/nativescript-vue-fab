import Fab from './Fab';
import FabItem from './FabItem';
import ButtonPlugin from '@nativescript-community/ui-material-button/vue';

const Plugin = {
    install(Vue) {
        Vue.component('FabItem', FabItem);
        Vue.component('Fab', Fab);
        Vue.use(ButtonPlugin);
    },
};

export default Plugin;
