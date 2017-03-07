//Contiene todas las rutas para navegar en la pagina
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactGA from 'react-ga'
import App from './app/App';
import AppPanel from './app-panel/AppPanel';
import { isLogged } from './services/auth'
import Profile from './profile/Profile'
import InvestmentData from './investment-data/InvestmentData'
import Investments from './investments-user/Investments'
import Index from './index/Index2'
import AboutUs from './about-us/Plain'
import Proyects from './proyects/Proyects'
import Project from './proyects/Project'
import Tab1 from './proyects/Tab1'
import Tab2 from './proyects/Tab2'
import Tab3 from './proyects/Tab3'
import Tab4 from './proyects/Tab4'
import Work from './how-does-it-work/Plain'
import Faqs from './faqs/Faqs'
import Contact from './contact/Plain'
import Notice from './notice/Notice'
import Press from './press/Plain'
import Privacy from './privacy/Plain'
import Warranty from './warranty/Plain'
import Verify from './verify/Verify'
import Recovery from './recovery/Recovery'

//funcion para verificar si el usuario esta logueado
function requireAuth(nextState, replace) {
  const path = nextState.location.pathname.split('/')
  if (!isLogged()) {
    if(path[1] === 'proyectos') {
      alert('Necesita iniciar sesión para poder acceder a esta sección')
      path.pop()
      path.push('ficha')
    }
    replace({
      pathname: path.join('/')
    })
  }
}

// Google Analytics
ReactGA.initialize('UA-90163231-1')

function logPageView() {
  ReactGA.set({ page: window.location.hash })
  ReactGA.pageview(window.location.hash)
  window.scrollTo(0, 0)
}


//Renderizado del contenido, cargando los componentes dependiendo de la ruta
ReactDOM.render(
	<Router onUpdate={logPageView} history={hashHistory}>
		<Route path='/' component={ App }>
			<IndexRoute component={Index}/>
			<Route path='nosotros' component={AboutUs}/>
			<Route path='proyectos' component={Proyects}/>
			<Route path='proyectos/:id' component={Project}>
        <Route path='ficha' component={Tab1} />
        <Route path='estudio-de-mercado' component={Tab2} onEnter={ requireAuth }/>
        <Route path='desarrollador' component={Tab3} onEnter={ requireAuth }/>
				<Route path='avance' component={Tab4} onEnter={ requireAuth }/>
			</Route>
      <Route path='como-funciona' component={Work}/>
      <Route path="/faqs" component={Faqs}/>
      <Route path="/contacto" component={Contact}/>
      <Route path="/ellos-hablan-de-nosotros" component={Press}/>
      <Route path="/aviso-de-privacidad" component={Notice}/>
      <Route path="/politicas-de-privacidad" component={Privacy}/>
      <Route path="/garantia" component={Warranty}/>
      <Route path="/verify/:checker" component={Verify}/>
      <Route path="/recovery/:checker" component={Recovery}/>
	  </Route>
		<Route path='/user' component={AppPanel} onEnter={ requireAuth }>
			<Route path='profile' component={Profile} />
			<Route path='investment-data' component={InvestmentData} />
			<Route path='investments' component={Investments} />
		</Route>
  </Router>,
  document.getElementById('root')
);
