import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class demoTitleListItem extends NavigationMixin(LightningElement) {
    @api title;
    @api url;
    @api year;
    }
