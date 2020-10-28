import BaseVueComponent from './BaseVueComponent';
import { Component } from 'vue-property-decorator';
import { Frame } from '@nativescript/core';
import { TabView } from '@nativescript/core';
import Home from './Home';

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
