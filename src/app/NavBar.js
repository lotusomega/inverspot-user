import React, { Component } from 'react'
import { Link } from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
      backgroundColor: "#4B118E",
      marginBottom: '0'
    }
    const stylen2={
      padding: "5px", marginLeft: "100px", fontSize: "16px", color: "white"
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
    return (
        <Navbar bsStyle="none" collapseOnSelect className="navbar navbar-light bg-faded" style={stylen}>
          <div className="barra hidden-xs hidden-sm">
            <p style={stylen2}>
              Atención al cliente | <b>01 (55) 8000 6555</b> |
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
          <Navbar.Header className="navbar-header top-logo-holder">
            <Link to="/">
              <div className="icon-logo-main"></div>
            </Link>
            <p>Tu punto de inversión inmobiliario</p>
            <Navbar.Toggle style={stylen5}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </Navbar.Toggle>
          </Navbar.Header>
          <Navbar.Collapse className="navbar-collapse collapse top-tittle-holder">
            <Nav>
              <LinkContainer to="/nosotros">
                <NavItem>Nosotros</NavItem>
              </LinkContainer>
              <LinkContainer to="/proyectos">
                <NavItem>Proyectos</NavItem>
              </LinkContainer>
              <LinkContainer to="/como-funciona">
                <NavItem>Cómo Funciona</NavItem>
              </LinkContainer>
              <LinkContainer to="/garantia">
                <NavItem>Riesgos y Garantias</NavItem>
              </LinkContainer>
              <LinkContainer to="/faqs">
                <NavItem>FAQ´s</NavItem>
              </LinkContainer>
              <LinkContainer to="/contacto">
                <NavItem>Contacto</NavItem>
              </LinkContainer>
              { !this.user &&
                <li onClick={() => this.props.stepSet(1)} style={{cursor: "pointer"}}><a>Regístro</a></li>
              }
              { !this.user &&
                <li onClick={() => this.props.stepSet(2)} style={{cursor: "pointer"}}><a>Inicio de Sesión</a></li>
              }

              {this.user &&
                <li><Link to="/user/profile">Mi perfil</Link></li> }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default NavBar;
