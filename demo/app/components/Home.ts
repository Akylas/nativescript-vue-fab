import BaseVueComponent from './BaseVueComponent';
import { Component } from 'vue-property-decorator';
import Vue from 'nativescript-vue';
// import Fab from './fab/Fab';
// import FabItem from './fab/FabItem';

@Component({
    components: {
        // Fab,
        // FabItem
    }
})
export default class Home extends BaseVueComponent {
    onTap(command, event) {
        console.log('onTap', command, event.active);
    }
}
