import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetObjectInfo extends LightningElement {
    defaultRecordTypeId
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){
            console.log(data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
        }
        if(error){
            console.log(error.message);
        }
    }

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfoDetails
}
