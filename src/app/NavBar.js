import React, { Component } from 'react'
import { Link } from 'react-router'

class NavBar extends Component {
  /*componentDidMount funcion que se ejecuta antes de montar el componente y obtiene la informacion de
  usuario una vez que se ha iniciado sesion*/
  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }
  /* props
  stepSet: contiene el estado que puede tener el modal (0= recuperacion de contraseña, 1= Registro, 2= Inicio de sesión)*/
  render() {
    const stylen={
      backgroundColor: "#fff"
    }
    const stylen2={
      padding: "5px", marginLeft: "100px", fontSize: "12px", color: "white"
    }
    const stylen3={
      color: "#ffffff", textDecoration: "none"
    }
    const stylen4={
      float: "right", marginLeft: "10px", color: "white"
    }
    const stylen5={
      backgroundColor: "#4b118e"
    }
    const stylen6={
      margin: "9px -15px"
    }
    return (

      <nav className="navbar navbar-light bg-faded" style={stylen}>

        <div className="hidden-xs hidden-sm col-xs-12 col-lg-12" style={{backgroundColor: '#81D742', width:'100%', height:'29px'}}>
          <p style={stylen2}>
            Atención al cliente | 01 (55) 8000 6555 |
            <a style={stylen3} href="mailto:hola@inverspot.mx"> hola@inverspot.mx</a>


            <a style={{float:'right', marginRight: '100px', marginLeft: '10px', color: 'white',}} href="https://vimeo.com/190621870" target="_blank"><i className="fa fa-vimeo" aria-hidden="true"></i></a>

            <a style={stylen4} href="https://www.waze.com/es-419/livemap?zoom=17&lat=19.42268&lon=-99.22286" target="_blank">
              <i className="fa fa-crosshairs" aria-hidden="true"></i></a>

            <a style={stylen4} href="https://www.youtube.com/channel/UCvr85MwH36lbTAvOdmeDtxg" target="_blank">
              <i className="fa fa-youtube" aria-hidden="true"></i></a>

            <a style={stylen4} href="https://twitter.com/Inverspot2017" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i></a>

            <a style={stylen4} href="https://www.facebook.com/inverspot" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i></a>
          </p>
        </div>

        <div className="navbar-header top-logo-holder">
          <Link to="/">
            <div className="icon-logo-main"></div>
          </Link>
          <p>Tu punto de inversión inmobiliario</p>
          <button style={stylen5} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>


        <div className="navbar-collapse collapse top-tittle-holder">
          <ul className="nav navbar-nav" style={stylen6}>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/proyectos">Proyectos</Link>
            </li>
            <li><Link to="/como-funciona">Como Funciona</Link></li>
            <li><Link to="/faqs">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            {!this.user &&
              <li id='reg'><a data-toggle="modal" onClick={() => this.props.stepSet(1)} style={{cursor: "pointer"}}>Regístro</a></li> }
            {!this.user &&
              <li id='acc'><a data-toggle="modal" onClick={() => this.props.stepSet(2)} style={{cursor: "pointer"}}>Inicio de Sesión</a></li> }
            {this.user &&
              <li>
                <Link to="/user/profile">
                  Mi perfil
                </Link>
              </li> }

          </ul>
        </div>
      </nav>

    )
  }
}

export default NavBar;
