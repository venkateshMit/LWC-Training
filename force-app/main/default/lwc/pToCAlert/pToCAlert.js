import { LightningElement,api } from 'lwc';

export default class PToCAlert extends LightningElement {
    @api message
    @api cardHeading
    @api number
    @api isValid
}