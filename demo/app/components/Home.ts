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
    active = false
    onTap(command, event) {
        console.log('onTap', command, this.active,  event.object.active);
        event.object.active = !this.active;
        this.active = !this.active;
        event.object.notify({
            eventName: "activeChange",
            object: event.object,
            propertyName: "active",
            value: event.object.active
        });
    }
}
