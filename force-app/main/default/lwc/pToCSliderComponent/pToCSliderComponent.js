import { LightningElement,api } from 'lwc';

export default class PToCSliderComponent extends LightningElement {
    val=30

    changeHandler(event){
        this.val= event.target.value
    }

    @api resetSlider(){
        this.val= 50
    }
}