import BaseVueComponent from './BaseVueComponent';
import { Component } from 'vue-property-decorator';
import { Frame } from 'ui/frame/frame';
import { TabView } from 'ui/tab-view/tab-view';
import Vue from 'nativescript-vue';
import Home from './Home';
import { GC } from 'tns-core-modules/utils/utils';

@Component({
    components: {
        Home
    }
})
export default class App extends BaseVueComponent {
    constructor() {
        super();
    }
    mounted() {
        super.mounted();
        // GC();
    }
    getTabView() {
        return this.getRef('tabView') as TabView;
    }
}
