import { LightningElement } from 'lwc';

export default class LifeCycleHook extends LightningElement {
   
    name
    isChildVisible = false
    constructor(){
        super();
        //this.template // when you want to listen at parent level like mouseover, addevent listner
        console.log('Parent Constructor Called');
    }
    connectedCallback(){
        console.log('Parent connectedCallback Called');
       
    }

    renderedCallback(){
        console.log('Parent renderedCallback Called');
    }
    changeHandler(event){
        this.name = event.target.name; 
    }
    handleClick(){
        this.isChildVisible = !this.isChildVisible;
    }
    errorCallback(error,stack){
        console.log(stack)
        console.log(error.message)
    }
   
}