import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        //this.template // when you want to listen at parent level like mouseover, addevent listner
        console.log('Child Constructor Called');
    }
    connectedCallback(){
        console.log('Child connectedCallback Called');
        throw new Error('Loading child is Failed')
        // window.addEventListener('click',this.handleClick)
    }

    renderedCallback(){
        console.log('Child renderedCallback Called');
    }
    disconnectedCallback(){
        alert('Child disconnectedCallback Called');
        // window.removeEventListener('click',this.handleClick)
    }
}