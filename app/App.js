import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory} from 'react-router'
import routes from './config/routes';



ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
)