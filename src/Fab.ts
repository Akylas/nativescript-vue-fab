import Vue from 'nativescript-vue';
import { Component, Prop } from 'vue-property-decorator';
import FabItem from './FabItem';

@Component
export default class Fab extends Vue {
    @Prop({ type: Boolean, default: false }) isActive: boolean;

    @Prop() icon: string;
    @Prop() iconOn?: string;
    @Prop() title?: string;
    @Prop({ default: 'red' }) color: string;
    @Prop({ default: 'white' }) iconColor: string;
    @Prop() buttonClass?: string;
    @Prop() titleClass?: string;
    @Prop() iconClass?: string;

    private actualActive: boolean = this.isActive;

    _readyToAnimate = false;

    // beforeMount() {
    //     this._readyToAnimate = false;
    //     console.log('fab beforeMount');
    // }
    mounted() {
        this._readyToAnimate = true;
        // console.log('fab mounted');
    }
    // destroyed() {
    //     this._readyToAnimate = false;
    //     console.log('fab destroyed');
    // }
    isReadyToAnimate() {
        return this._readyToAnimate === true;
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
    }
    get active() {
        return !!this.actualActive;
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
        // console.log(
        //     'computedTitleClass',
        //     this._readyToAnimate,
        //     this.actualActive,
        //     this.titleClass,
        //     result
        // );
        return result;
    }
    get computedButttonClass() {
        let result = this.buttonClass ? (this.buttonClass + ' ') : '';
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
        let result = this.iconClass ? (this.iconClass + ' ') : '';
        if (this.isReadyToAnimate()) {
            result+=  this.actualActive
                ? 'fab-icon-show fab-icon-on-rotate-hide'
                : 'fab-icon-hide fab-icon-on-rotate-show';
        } else {
            result+=  this.actualActive ? '' : 'fab-icon-on-rotate-hidden';
        }
        // console.log('iconOnClass',result);
        return result;
    }
    get iconOffClass() {
        let result = this.iconClass ? (this.iconClass + ' ') : '';
        if (this.isReadyToAnimate()) {
            result+= !this.actualActive
                ? 'fab-icon-show fab-icon-rotate-hide'
                : 'fab-icon-hide fab-icon-rotate-show';
        } else {
            result+= this.actualActive ? '' : 'fab-icon-rotate-hidden';
        }
        // console.log('iconOffClass',result);
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
