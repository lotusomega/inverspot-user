import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './app/App';
import AppPanel from './app-panel/AppPanel';
import { isLogged } from './services/auth'
import Profile from './profile/Profile'
import InvestmentData from './investment-data/InvestmentData'
import Investments from './investments-user/Investments'
import Index from './index/Index'
import AboutUs from './about-us/AboutUs'
import Proyects from './proyects/Proyects'
import Project from './proyects/Project'
import Tab1 from './proyects/Tab1'
import Tab2 from './proyects/Tab2'
import Tab3 from './proyects/Tab3'
import Tab4 from './proyects/Tab4'
import Work from './how-does-it-work/Work'
import Faqs from './faqs/Faqs'
import Contact from './contact/Contact'
import Notice from './notice/Notice'

function requireAuth(nextState, replace) {
  if (!isLogged()) {
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={ App }>
			<IndexRoute component={Index}/>
			<Route path='about-us' component={AboutUs}/>
			<Route path='projects' component={Proyects}/>
			<Route path='projects/:id' component={Project}>
        <Route path='description' component={Tab1} />
        <Route path='market-research' component={Tab2} />
        <Route path='builder' component={Tab3} />
				<Route path='work-progress' component={Tab4} />
			</Route>
      <Route path='how-does-it-work' component={Work}/>
      <Route path="/faq's" component={Faqs}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/notice" component={Notice}/>
	  </Route>
		<Route path='/user' component={AppPanel} onEnter={ requireAuth }>
			<Route path='profile' component={Profile} />
			<Route path='investment-data' component={InvestmentData} />
			<Route path='investments' component={Investments} />
		</Route>
  </Router>,
  document.getElementById('root')
);
