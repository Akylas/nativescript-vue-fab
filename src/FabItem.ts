import Vue from 'nativescript-vue';
import { View } from 'tns-core-modules/ui/page';
import { Component, Prop } from 'vue-property-decorator';
import Fab from './Fab';
import FabBase from './FabBase';

@Component
export default class FabItem extends FabBase {
    @Prop({ default: false }) debug: boolean;


    indexInParent = 0;
    parentChildrenCount = 0;


    get parentFab() {
        return this.$parent as Fab;
    }

    get position() {
        return this.parentFab.position;
    }

    mounted() {
        super.mounted();
        this.actualActive = this.parentFab.active;
        this.parentChildrenCount = this.$parent.$children.length;
        this.indexInParent = this.$parent.$children.indexOf(this);
        // console.log('fab mounted');
    }

    get computedButttonClass() {
        let result = this.buttonClass ? this.buttonClass + ' ' : '';
        if (this.iconClass) {
            result += this.iconClass + ' ';
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
        this.parentFab.active = false;
        this.$emit('tap', args);
    }
}
