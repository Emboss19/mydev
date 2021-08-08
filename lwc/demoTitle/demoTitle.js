import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class DemoTitle extends NavigationMixin(LightningElement) {
@track
programType = ['Program Series','Program Movies'];

handleViewDetailsClick(event) {
    var type = event.currentTarget.dataset.name;
    console.log('type 1'+JSON.stringify(type));
    var compDefinition = {
        componentDef: "c:demoTitleList",
        attributes: {
            fromType: type,
        }
    };
    var encodedCompDef = btoa(JSON.stringify(compDefinition));
    this[NavigationMixin.Navigate]({
        type: 'standard__webPage',
        attributes: {
            url: '/one/one.app#' + encodedCompDef
        }
    });
}
}
