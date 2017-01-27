## Modern Planit Portal V2
```bash
npm install
webpack -w # for asset compilation
npm start # in a new terminal, to start the server
```
Go to "/products" for the `App is working. Welcome to Portal V2` page.

### Routing
We use React Router, so everything is defined in `app/config/routes.js`. To add a new route, just do add another line below the existing route like the following. You must point a route to a component.
```es2015
import React from 'react';
import Product from '../components/Product';
import { Router, Route, Link, hashHistory, browserHistory} from 'react-router'
import AppState from '../utils/AppState.js'

export default (
  <Router history={browserHistory}>
    <Route path="/">
	    <Route path="/products" component={Product} />
	    <Route path="/newroutes" component={NewComponent} />
	  </Route>
  </Router>
);
```

### mobX for state management

To Store state, call AppState.setterFuncName() to set state. You define setter in `AppState.js` like the example below. Super simple.
```es2015
AppState.setProduct = function(product) {
	this.product = product;
}
```

And you define getters as the following example. `cart` is an attribute store key so you can use it in the getter and setter.
```
const AppState = observable({
  cart: [],
  product: {},
  get getCart() {
    return toJS(this.cart)
  },
  get getProduct() {
    return toJS(this.product);
  }
})
```
Of course, there are more advanced techniques like dispatch etc that we won't need yet. So far, I really like mobx as a replacement for redux. Super simple and straight forward. You can and set and just make sure you import `AppState` wherever you intend to use it.

