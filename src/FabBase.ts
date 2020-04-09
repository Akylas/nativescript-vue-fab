import Vue from 'nativescript-vue';
import { Prop } from 'vue-property-decorator';

export default abstract class FabBase extends Vue {
    @Prop({ type: String }) icon: string;
    @Prop({ type: String }) title?: string;
    @Prop({ type: String }) backgroundColor?: string;
    @Prop({ type: String }) color?: string;
    @Prop({ type: String }) rippleColor?: string;

    @Prop({ type: String }) buttonClass?: string;
    @Prop({ type: String }) titleClass?: string;
    @Prop({ type: String }) iconClass?: string;

    mounted() {}

    public actualActive: boolean = false;
}
