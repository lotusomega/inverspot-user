import React, { Component } from 'react'
import { Link,withRouter } from 'react-router'
import {logout} from '../services/auth'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.closeSession = this.closeSession.bind(this)
  }
  //Funcion para cerrar sesión, elimina el usuario y su token de localStorage
  closeSession() {
    logout( success => {
      this.props.router.push('/')
    })
  }
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="container-fluid">
          <Navbar className="navbr" bsStyle="default" collapseOnSelect staticTop fluid style={{borderBottomWidth: "3px", borderColor: "#81d742"}}>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" style={{marginRight: '-8px', marginTop: '-5px'}}>
                  <img alt="Brand" src="assets/images/inver.png" width="140px" style={{height: '28px'}} />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle className="navbar-toggle">
                <i style={{color: '#644898'}} className="fa fa-bars"></i>
              </Navbar.Toggle>
            </Navbar.Header>
            <Navbar.Collapse className="navbar-collapse collapse" style={{marginTop: "3px"}}>
              <Nav className="nav navbar-nav">
                <LinkContainer to="/user/profile">
                  <NavItem>Mi Perfil</NavItem>
                </LinkContainer>
                <LinkContainer to="/user/investment-data">
                  <NavItem>Datos de Participación</NavItem>
                </LinkContainer>
                <LinkContainer to="/user/investments">
                  <NavItem>Mis Participaciones</NavItem>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavItem>Regresar al Inicio</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight className="nav navbar-nav">
                <li onClick={this.closeSession}><a>Cerrar Sesión</a></li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}

export default withRouter( NavBar);
