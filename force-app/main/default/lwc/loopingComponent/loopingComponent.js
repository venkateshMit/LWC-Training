import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {
    carList = ['TATA Punch','Hundai','Mercedeze','Hundai', 'Maruthi','Ford']
    ceoList = [
        {
            id:1,
            Company: 'Google',
            Name : 'Sundar Pichai'
        },
        {
            id:2,
            Company: 'Apple Inc',
            Name : 'Tim Cook'
        },
        {
            id:3,
            Company: 'Facebook',
            Name : 'Mark Zuckerberg'
        },
        {
            id:4,
            Company: 'Amazon',
            Name : 'Jeff Bezos'
        }
    ]
}