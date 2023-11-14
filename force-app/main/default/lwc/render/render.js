import { LightningElement } from 'lwc';
import signInTemplate from './signIn.html';
import signUpTemplate from './signUp.html';
import renderTemplate from  './render.html';
export default class Render extends LightningElement {
    render(){
        return this.selectedButton==='SignUp' ? signUpTemplate:
                this.selectedButton==='SignIn' ? signInTemplate:
                renderTemplate;
    }
    selectedButton = ''
    handleClick(event){
        this.selectedButton = event.target.label;

    }
    submitHandler(event){
        console.log(`${event.target.label} Successfully!!!`)
    }
}