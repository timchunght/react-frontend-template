import React from 'react';
import Product from '../components/Product';
import { Router, Route, Link, hashHistory, browserHistory} from 'react-router'
import AppState from '../utils/AppState.js'

export default (
  <Router history={browserHistory}>
    <Route path="/">
	    <Route path="/products" component={Product} />
	  </Route>
  </Router>
);