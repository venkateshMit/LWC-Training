import Country from '@salesforce/schema/Asset.Country';
import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = 'Salesforce Training';
    title = 'LWC';
    changeHandler(event){
        this.title = event.target.value;
    }
    @track address={
        city:'Bangalore',
        postCode: '560059',
        country:'India'
    }

    trackHandler(event){
        this.address.city = event.target.value;
    }

    // getter example
    users=['John', 'Smith','Nick'] 
    num1 =10
    num2 =20
    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get multiply(){
      return this.num1* this.num2
    }
}