import { LightningElement } from 'lwc';
import pubSub from 'c/pubsub'
export default class PubSubComponentB extends LightningElement {
    connectedCallback(){
        this.callsubsriber();
    }
    message
    callsubsriber(){
        pubSub.subscribe('componentA',(message)=>{
            this.message = message
        })
    }
}