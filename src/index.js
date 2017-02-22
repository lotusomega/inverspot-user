import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './app/App';
import AppPanel from './app-panel/AppPanel';
import { isLogged } from './services/auth'
import Profile from './profile/Profile'
import InvestmentData from './investment-data/InvestmentData'
import Investments from './investments-user/Investments'
import Index from './index/Index.js'

function requireAuth(nextState, replace) {
  if (!isLogged()) {
    replace({
      pathname: '/index'
    })
  }
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={ App }>
			<Route path='index'component={Index}/>

	  </Route>
		<Route path='/user' component={AppPanel} onEnter={ requireAuth }>
			<Route path='profile' component={Profile} />
			<Route path='investment-data' component={InvestmentData} />
			<Route path='investments' component={Investments} />
		</Route>
  </Router>,
  document.getElementById('root')
);
