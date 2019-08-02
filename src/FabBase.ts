import Vue from 'nativescript-vue';
import { View } from 'tns-core-modules/ui/page';
import { Component, Prop } from 'vue-property-decorator';
import { themer } from 'nativescript-material-core';

let defaultColor;
export default abstract class FabBase extends Vue {
    @Prop() icon: string;
    @Prop() title?: string;
    @Prop() backgroundColor?: string;
    @Prop({}) color?: string;
    @Prop({}) rippleColor?: string;

    @Prop() buttonClass?: string;
    @Prop() titleClass?: string;
    @Prop() iconClass?: string;

    get actualBackgroundColor() {
        if (this.backgroundColor) {
            return this.backgroundColor;
        }
        if (!defaultColor) {
            defaultColor = themer.getPrimaryColor();
        }
        return defaultColor;
    }
    get actualRippleColor() {
        if (this.rippleColor) {
            return this.rippleColor;
        }
        if (!defaultColor) {
            defaultColor = themer.getPrimaryColor();
        }
        return defaultColor;
    }

    protected actualActive = false;

    protected _readyToAnimate = false;

    abstract position: string;
    get isLeft() {
        return this.position === 'left';
    }
    get isRight() {
        return this.position === 'right';
    }
    mounted() {
        this._readyToAnimate = true;
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
    get computedTitleClass() {
        let result = this.titleClass ? this.titleClass + ' ' : '';

        if (this.isReadyToAnimate()) {
            result += this.actualActive
                ? 'fab-item-title-show'
                : 'fab-item-title-hide';
            if (this.isLeft) {
                result += '-left';
            }
        } else if (!this.actualActive) {
            result += 'fab-item-title-hidden';
            if (this.isLeft) {
                result += '-left';
            }
        }
        return result;
    }
}
