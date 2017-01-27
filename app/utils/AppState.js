import {observable, toJS} from 'mobx'

const AppState = observable({
  cart: [],
  get getCartItems() {
	  return toJS(this.cart)
	},
	get getProduct() {
		return toJS(this.product);
	}
})

AppState.addItemToCart = function(variantId, optionId) {
	// TODO:
	// Change this function to take in an array or map of selected variantIds
	// {
	// 	"variantidvaluehereaskey": {"optionidvalueasvalue"}
	// }
	// Check if lineItem with the same variantIds and OptionIds combo exist

	var variants = []
	var lineItem = {
		image_url: this.product.image_url,
		price: this.product.price,
	}
	console.log(lineItem)
	var option;
	var variant = this.product.variants.filter(function(variant) {
		if (variant.id === variantId) { 
			option = variant.options.filter(function(option) {
				if(option.id === optionId) { 

			  	return option; 

			  }
			})
			
			variant.option = option[0];
	  	return variant; 

	  }
	})[0];


	variants.push(variant)
  lineItem.variants = variants;
  console.log(lineItem)
  this.cart.push(lineItem);
  console.log(toJS(this.cart))
  // console.log(option)
}

AppState.setProduct = function(product) {
	
  this.product = product
  
}

module.exports = AppState