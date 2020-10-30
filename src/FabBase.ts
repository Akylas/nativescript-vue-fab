import { Color } from '@nativescript/core';
import Vue from 'nativescript-vue';
import { Prop } from 'vue-property-decorator';

export default abstract class FabBase extends Vue {
    @Prop({ type: String }) icon: string;
    @Prop({ type: String }) title?: string;
    @Prop() backgroundColor?: string | Color;
    @Prop() color?: string | Color;
    @Prop() rippleColor?: string | Color;

    @Prop({ type: String }) buttonClass?: string;
    @Prop({ type: String }) titleClass?: string;
    @Prop({ type: String }) iconClass?: string;

    mounted() {}

    public actualActive: boolean = false;
}
