import React, { Component } from 'react'
import { Link,withRouter } from 'react-router'
import {logout} from '../services/auth'
import {Navbar, Nav} from 'react-bootstrap'

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
          <Navbar bsStyle="default" collapseOnSelect staticTop fluid>
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
            <Navbar.Collapse className="navbar-collapse collapse">
              <Nav className="nav navbar-nav">
                <li><Link to="/user/profile">Mi perfil</Link></li>
                <li><Link to="/user/investment-data">Información de Inversor</Link></li>
                <li><Link to="/user/investments">Mis Inversiones</Link></li>
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
