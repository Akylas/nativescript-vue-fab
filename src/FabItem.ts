import Vue from 'nativescript-vue';
import { View } from 'tns-core-modules/ui/page';
import { Component, Prop } from 'vue-property-decorator';
import Fab from './Fab';

@Component
export default class FabItem extends Vue {
    @Prop() icon: string;
    @Prop() title?: string;
    @Prop() color?: string;

    @Prop() buttonClass?: string;
    @Prop() titleClass?: string;
    @Prop() iconClass?: string;

    indexInParent = 0;
    parentChildrenCount = 0;
    actualActive = false;

    _readyToAnimate = false;

    get parentFab() {
        return (this.$parent as Fab)
    }

    mounted() {
        this.actualActive = this.parentFab.active;
        this.parentChildrenCount = this.$parent.$children.length;
        this.indexInParent = this.$parent.$children.indexOf(this);
        this._readyToAnimate = true;
        // console.log('fab mounted');
    }
    isReadyToAnimate() {
        return this._readyToAnimate === true;
    }

    get button() {
        return this.$refs.button['nativeView'] as View;
    }
    get titleLabel() {
        return this.$refs.titleLabel['nativeView'] as View;
    }
    get computedButttonClass() {
        let result = this.buttonClass ? (this.buttonClass + ' ') : '';
        if (this.iconClass) {
            result += this.iconClass + ' '
        }
        if (this.isReadyToAnimate()) {
            result += this.actualActive
                ? 'fab-item-button-show'
                : 'fab-item-button-hide';
        } else {
            result += this.actualActive ? '' : 'fab-item-button-hidden';
        }
        return result;
    }
    get computedTitleClass() {
        let result = this.titleClass ? (this.titleClass + ' ') : '';

        if (this.isReadyToAnimate()) {
            result += this.actualActive
                ? 'fab-item-title-show'
                : 'fab-item-title-hide';
        } else {
            result += this.actualActive ? '' : 'fab-item-title-hidden';
        }
        return result;
    }
    set visible(value) {
        if (value === this.actualActive) {
            return;
        }

        setTimeout(() => {
            this.actualActive = value;
        }, (value ? this.parentChildrenCount - 1 - this.indexInParent : this.indexInParent) * 40);
    }
    get visible() {
        return this.actualActive;
    }

    onButtonTap(args) {
        // console.log('onButtonTap', this.active);
        this.parentFab.active = false;
        this.$emit('tap', args);
    }
}
