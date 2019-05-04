import Fab from './Fab';
import FabItem from './FabItem';
import * as application from 'tns-core-modules/application';

const Plugin = {
    install(Vue) {
        Vue.component('FabItem', FabItem);
        Vue.component('Fab', Fab);
        // const cssExport = require('./style/style.scss');
        // if (cssExport.length > 0 && cssExport[0].length > 1) {
        //     // applying the second item of the export as it contains the css contents
        //     application.addCss(cssExport[0][1]);
        // }
    }
};

export default Plugin;
