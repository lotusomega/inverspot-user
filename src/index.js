import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import Profile from './Pages/Profile.js'

ReactDOM.render(
	<Router history={hashHistory}>
   <Route path='/' component={App}>
      <Route path='user/:id' component={Profile} />
   </Route>
  </Router>,
  document.getElementById('root')
);
