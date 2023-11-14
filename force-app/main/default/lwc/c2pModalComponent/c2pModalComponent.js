import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        const myEvt = new CustomEvent('close',{
            bubbles: true,
            detail: {
                msg:'Modal Closed Successfully'
            }
        })
        this.dispatchEvent(myEvt)
    }
    footerHandler(){
        console.log('footerHandler called')
    }
}