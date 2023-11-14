import { LightningElement } from 'lwc';
import pubSub from 'c/pubsub'
export default class PubsubComponentA extends LightningElement {
   msg
    inputHandler(event){
        this.msg = event.target.value
    }
    publishHandler(){
        pubSub.publish('componentA',this.msg)
    }
}