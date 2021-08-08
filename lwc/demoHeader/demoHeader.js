import { LightningElement,api } from 'lwc';

export default class DemoHeader extends LightningElement {

    @api
    headertitle;
    

    constructor() {
        super();
        //do something
    }


}