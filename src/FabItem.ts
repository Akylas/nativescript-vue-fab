import { Component, Prop } from 'vue-property-decorator';
import Fab from './Fab';
import FabBase from './FabBase';

@Component
export default class FabItem extends FabBase {
    public index = 0;
    get parentFab() {
        return this.$parent as Fab;
    }
    mounted() {
        super.mounted();
        this.index = this.nativeView.index = this.$parent.$children.indexOf(this);
    }

    get isRight() {
        return this.parentFab.isRight;
    }
    get rPosition() {
        return this.parentFab.rPosition;
    }
    get fabColumns() {
        return this.isRight ? '*,auto,auto' : 'auto,auto,*';
    }
    get fabButtonCol() {
        return this.isRight ? 2 : 0;
    }

    get active() {
        return this.actualActive;
    }
    onButtonTap(args) {
        console.log('FabItem onButtonTap');
        this.$emit('tap', args);
        this.parentFab.active = false;
    }
}
