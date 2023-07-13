import { LightningElement } from 'lwc';
const CRV_VARIANTS = [
    {
      variant:"VTi",
      price:38900,
      formattedPrice:"$38,900",
      fuelConsumption:40,
      seatingCapacity:5,
      alloyWheels:17,
      checked:true,
      imageName:"crystal_black"
    },
    {
      variant:"VTi 7",
      formattedPrice:"$42,900",
      price:42900,
      fuelConsumption:44,
      seatingCapacity:7,
      alloyWheels:17,
      imageName:"crystal_black"
    },
    {
      variant:"VTi X",
      formattedPrice:"$45,900",
      price:45900,
      fuelConsumption:48,
      seatingCapacity:5,
      alloyWheels:18,
      imageName:"crystal_black"
    },
    {
      variant:"VTi LX AWD",
      formattedPrice:"$53,600",
      price:53600,
      fuelConsumption:55,
      seatingCapacity:5,
      alloyWheels:19,
      imageName:"crystal_black"
    }
  ]

  // Define the colors available for the car
  const COLORS = [
    {label:"Ignite Red (Metallic)", value:"ignite_red", checked:true},
    {label:"Brilliant Sporty Blue", value:"sporty_blue"},
    {label:"Crystal Black", value:"crystal_black"},
    {label:"Platinum White (Pearlescent)", value:"platinum_white"}
  ]
  const ANIMATED_STARTING_PRICE = 38000
export default class BuildAndPrice extends LightningElement {
    showModal = false
    crvVariants = CRV_VARIANTS
    colorsList = COLORS
    selectedVariant = CRV_VARIANTS[0]
    selectedPrice = this.selectedVariant.price
    selectedImageName = this.colorsList[0].value
    selectedColorName = this.colorsList[0].label
    animatedPriceValue

    // on page load
    connectedCallback(){
      this.animatePrice()
    }

    //Handler for when a variant is selected
    selectionHandler(event){
        console.log("selected record", event.detail.selected)
        console.log("selected variant", event.detail.variant)
        const {selected, variant} = event.detail
        this.selectedVariant = {...selected, imageName:this.selectedImageName}
        this.selectedPrice = this.selectedVariant.price
        this.updateVariants(variant)
        this.animatePrice()
    }
    //Handler for when a color is selected
    colorSelectionHandler(event){
      console.log("selected color", event.detail)
      this.selectedImageName = event.detail
      this.selectedVariant = {...this.selectedVariant, imageName:this.selectedImageName }
      this.updateColors(this.selectedImageName)
    }

    // update the checked property for the colors based on the selected value
    updateColors(value){
        this.colorsList = this.colorsList.map(item=>{
          let checked = item.value === value
          if(checked){
            this.selectedColorName = item.label
          }
          return {...item, checked}
        })
    }

    // Update the checked property for the variants based on the selected variant
    updateVariants(value){
      this.crvVariants = this.crvVariants.map(item=>{
        let checked = item.variant === value
        return {...item, checked}
      })
    }


    //open the modal 
    openModalHandler(){
      this.showModal = true
    }
    cancelHandler(){
      this.showModal = false
    }
    submitHander(){
      console.log("Form Submitted!!")
    }

    //method to animate the price
    animatePrice(){
        this.animatedPriceValue = ANIMATED_STARTING_PRICE
        let interval = window.setInterval(()=>{
            if(this.selectedPrice !== this.animatedPriceValue){
                this.animatedPriceValue = this.animatedPriceValue+100
            } else {
              window.clearInterval(interval)  
            }
        }, 10)
    }
}