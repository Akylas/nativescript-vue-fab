import { Component, Prop } from 'vue-property-decorator';
import FabBase from './FabBase';

@Component()
export default class Fab extends FabBase {
    @Prop({ type: Boolean, default: false }) isActive: boolean;
    @Prop({ type: String }) iconOn?: string;
    @Prop({ type: String, default: 'right' }) position: string;
    @Prop({ type: String, default: 'vertical' }) orientation: string;
    constructor() {
        super();
        this.actualActive = this.isActive;
        this.rPosition = this.position;
    }
    mounted() {
        super.mounted();
        (this.nativeView as any).fabPosition = this.rPosition;
        // this.nativeView.notify({
        //     eventName: 'fabPositionChange',
        //     object: this.nativeView,
        //     propertyName: 'fabPosition',
        //     value: this.rPosition,
        // });
    }

    set active(value) {
        if (value === this.actualActive) {
            return;
        }
        this.actualActive = value;
        if (this.nativeView) {
            (this.nativeView as any).active = value;
            this.nativeView.notify({
                eventName: 'activeChange',
                object: this.nativeView,
                propertyName: 'active',
                value,
            });
        }
    }
    get active() {
        return this.actualActive;
    }

    public rPosition: string = 'right';

    get isLeft() {
        return this.rPosition === 'left';
    }
    get isRight() {
        return this.rPosition === 'right';
    }

    get fabColumns() {
        return this.isRight ? '*,auto,auto' : 'auto,auto,*';
    }
    get fabButtonCol() {
        return this.isRight ? 2 : 0;
    }

    onButtonTap(args) {
        args.active = this.active;
        this.active = !this.active;
        this.$emit('tap', args);
    }
    onBackdropTap(args) {
        this.active = false;
    }
}
