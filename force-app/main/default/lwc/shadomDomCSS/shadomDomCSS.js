import { LightningElement } from 'lwc';

export default class ShadomDomCSS extends LightningElement {
    isLoaded = false
    renderedCallback(){
        if(this.isLoaded) return
        const style = document.createElement('style')
        style.innerText = `c-shadom-dom-c-s-s .slds-button{
            color: white;
            background: red;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded = true
    }
}