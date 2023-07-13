import { LightningElement, api } from 'lwc';

export default class RangeSelection extends LightningElement {
   @api variants = []

   selectionHandler(event){
        //destructuring
        const {value} = event.target
        console.log('selection value ', value)
        let selected = this.variants.find(item => item.variant === value)
        this.dispatchEvent(new CustomEvent('selection', {
            detail:{
                selected:selected,
                variant: value
            }
        }))
   }
}