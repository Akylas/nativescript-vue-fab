import Vue, { NativeScriptVue } from 'nativescript-vue';
import { Page } from '@nativescript/core/ui/page';

export default class BaseVueComponent extends Vue {
    $refs: {
        page: NativeScriptVue<Page>
    };
    get page() {
        return this.getRef('page');
    }
    getRef(key: string) {
        if (this.$refs[key]) {
            return this.$refs[key].nativeView;
        }
    }
    mounted() {
        const page = this.page;
        if (this.page) {
            // page.backgroundSpanUnderStatusBar = true;
        }
    }
}
