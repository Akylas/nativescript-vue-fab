import Vue from 'nativescript-vue';
import { Component, Prop } from 'vue-property-decorator';
import FabItem from './FabItem';
import FabBase from './FabBase';

@Component
export default class Fab extends FabBase {
    @Prop({ type: Boolean, default: false }) isActive: boolean;

    @Prop() iconOn?: string;
    @Prop({ default: 'right' }) position: string;
    @Prop({ default: false }) debug: boolean;

    protected actualActive: boolean = this.isActive;
    protected realActive: boolean = this.isActive;

    // beforeMount() {
    //     this._readyToAnimate = false;
    //     console.log('fab beforeMount');
    // }
    mounted() {
        super.mounted();
        // console.log('fab mounted');
    }

    set active(value) {
        if (value === this.actualActive) {
            return;
        }
        this.actualActive = value;
        this.$children.forEach((c, i) => {
            if (c instanceof FabItem) {
                c.visible = value;
            }
        });
        if (value) {
            this.realActive = this.actualActive;
        } else {
            setTimeout(() => {
                // animation duration
                this.realActive = this.actualActive;
            }, 250);
        }
    }
    get active() {
        return !!this.actualActive;
    }

    get computedButttonClass() {
        let result = this.buttonClass ? this.buttonClass + ' ' : '';
        if (this.isReadyToAnimate()) {
            result += this.actualActive ? 'fab-button-show' : 'fab-button-hide';
        } else {
            result += this.actualActive ? '' : 'fab-button-hidden';
        }
        // console.log(
        //     'computedButttonClass',
        //     this._readyToAnimate,
        //     this.actualActive,
        //     this.buttonClass,
        //     result
        // );
        return result;
    }
    get classBackdrop() {
        if (this.isReadyToAnimate()) {
            return this.actualActive ? 'fab-backdrop-show' : 'fab-backdrop-hide';
        } else {
            return this.actualActive ? '' : 'fab-backdrop-hidden';
        }
    }
    get iconOnClass() {
        let result = this.iconClass ? this.iconClass + ' ' : '';
        if (this.isReadyToAnimate()) {
            result += this.actualActive
                ? 'fab-icon-show fab-icon-on-rotate-hide'
                : 'fab-icon-hide fab-icon-on-rotate-show';
        } else {
            result += this.actualActive ? '' : 'fab-icon-on-rotate-hidden';
        }
        // console.log('iconOnClass', result);
        return result;
    }
    get iconOffClass() {
        let result = this.iconClass ? this.iconClass + ' ' : '';
        if (this.isReadyToAnimate()) {
            result += !this.actualActive
                ? 'fab-icon-show fab-icon-rotate-hide'
                : 'fab-icon-hide fab-icon-rotate-show';
        } else {
            result += this.actualActive ? '' : 'fab-icon-rotate-hidden';
        }
        // console.log('iconOffClass', result);
        return result;
    }
    onButtonTap(args) {
        // console.log('onButtonTap', this.active);
        args.active = this.active;
        this.active = !this.active;
        this.$emit('tap', args);
    }
    onBackdropTap(args) {
        this.active = false;
    }
}
