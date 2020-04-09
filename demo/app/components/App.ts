import BaseVueComponent from './BaseVueComponent';
import { Component } from 'vue-property-decorator';
import { Frame } from '@nativescript/core/ui/frame/frame';
import { TabView } from '@nativescript/core/ui/tab-view/tab-view';
import Vue from 'nativescript-vue';
import Home from './Home';
import { GC } from '@nativescript/core/utils/utils';

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
