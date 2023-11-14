import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    clickHandler(){
        this.showModal = true
    }
    msg
    closeHadnler(event){
        this.showModal =false;
        this.msg = event.detail.msg;
    }

}