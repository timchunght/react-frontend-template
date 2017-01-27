import React from 'react'
import RouterGoTo from '../utils/RouteHelpers'
import Api from '../utils/Api.js'
import { observer } from 'mobx-react'
import AppState from '../utils/AppState.js'

const Product = observer(class Preorder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image_url: "",
      variants: [],
      price: 0,
      selectedVariantIds: {},
      submitted: false,
    }
   
  }

  render(){
   
    return (
      <div>
        App is working. Welcome to Portal V2
      
      </div>
    )
  }
})

export default Product