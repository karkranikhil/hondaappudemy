import { LightningElement, api } from 'lwc';

export default class CarDetails extends LightningElement {

    _selectedVariant={}

    //using getter setter to allow for transformation on the data received - not using property
    @api 
    get selectedVariant(){
        return this._selectedVariant
    }
    set selectedVariant(data){
        if(data){
            let model = data.variant.toLowerCase().replaceAll(' ', '')
            let selectedimage = `public/assets/honda/${model}/${data.imageName}.png`
            console.log("this is the selectedimage property ", selectedimage)
            this._selectedVariant = {...data, "selectedimage":selectedimage}
        }
    }
}