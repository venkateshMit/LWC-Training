import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    userNames = ['John', 'Smith', 'Nike', 'Mike'];
 
    fetchDetailsHandleClick(){
       const elem =  this.template.querySelector('h1')
       console.log('Elelment is '+elem.innerText)
       elem.style.border = "1px solid red";
       const userElements = this.template.querySelectorAll('.name')
       const childElemet = this.template.querySelector('.child');
      
      childElemet.innerHTML = '<p> Iam Child </p>';

      //lwc:dom = "manual" use this directive whenever the tag is emapty and try add something

        Array.from(userElements).forEach(item=>{
            console.log('Each Item is :'+item.innerText) 
            item.styleAttribute('title',item.innerText)
      });
      
    }
}