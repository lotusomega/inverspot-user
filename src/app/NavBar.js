import React, { Component } from 'react'
import { Link } from 'react-router'

class NavBar extends Component {
  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }
  render() {
    const stylen={
      backgroundColor: "#fff"
    }
    const stylen1={
      backgroundColor: "#4B118E", width: "100%", height: "29px"
    }
    const stylen2={
      padding: "5px", marginLeft: "100px", fontSize: "12px", color: "white"
    }
    const stylen3={
      color: "#ffffff", textDecoration: "none"
    }
    const stylen4={
      float: "right", marginRight: "100px", color: "white"
    }
    const stylen5={
      backgroundColor: "#4b118e"
    }
    const stylen6={
      margin: "9px -15px"
    }
    return (

      <nav className="navbar navbar-light bg-faded navbar-fixed-top" style={stylen}>

        <div className="hidden-xs hidden-sm col-xs-12 col-lg-12" style={stylen1}>
          <p style={stylen2}>
          Atención al cliente | 01 (55) 8000 6555 |
          <a style={stylen3} href="mailto:hola@inverspot.mx">hola@inverspot.mx</a>
          <a style={stylen4} href="https://www.facebook.com/inverspot" target="_blank">
          <i className="fa fa-facebook" aria-hidden="true"></i></a></p>
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
              <Link to="/about-us">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/projects">
                Proyectos
              </Link>
            </li>
            <li><a href="como-funciona.html">Como Funciona</a></li>
            <li><a href="garantia.html">Garantia</a></li>
            <li><a href="faqs.html">FAQ's</a></li>
            <li><a href="contacto.html">Contacto</a></li>
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
