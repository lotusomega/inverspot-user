import React, { Component } from 'react'
import { Link,withRouter } from 'react-router'
import {logout} from '../services/auth'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.closeSession = this.closeSession.bind(this)
  }

  closeSession() {
    logout( success => {
      this.props.router.push('/')
    })
  }
  render() {
    const style = {
      marginRight:"-8px",
      marginTop:"-5px"
    }
    const style1 = {
      height: "28px"
    }
    const style2 = {
      marginBottom: "20px"
    }
    const style3 ={
      "marginBottom": "20px"
    }
    return (
      <div className="navbar-wrapper">
        <div className="container-fluid">
          <div className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only"></span> <span className="icon-bar"></span><span
                    className="icon-bar"></span><span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#/" style={style}>
                  <img alt="Brand" src="assets/images/inver.png" width="140px" style={style1}/>
                </a>

              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/user/profile">
                      Mi Perfil
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/investment-data">
                      Información de Inversor
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/investments">
                      Mis Inversiones
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="user-name" onClick={this.closeSession}>
                      Cerrar Sesión
                    </span>
                    <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="navbar-content">
                          <div className="row">
                            <div className="col-md-5">
                              <img src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" alt="Alternate Text" className="img-responsive" style={style3} width="120px" height="120px" />
                            </div>
                            <div className="col-md-7" style={style2}>
                              <span>{this.props.user.name}</span>
                              <p className="text-muted small">
                                {this.props.user.email}</p>
                              <div className="divider">
                              </div>
                              <a href="#" className="btn btn-default btn-xs"><i className="fa fa-question-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;Ayuda</a><br/>

                            </div>
                          </div>
                        </div>
                        <div className="navbar-footer">
                          <div className="navbar-footer-content">
                            <div className="row">
                              <div className="col-md-6">
                                <a href="#" className="btn btn-default btn-sm"><i className="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;&nbsp;Cambio de Contraseña</a>
                              </div>
                              <div className="col-md-6">
                                <a onClick={this.closeSession} className="btn btn-default btn-sm pull-right"><i className="fa fa-power-off" aria-hidden="true"></i>&nbsp;&nbsp;Salir</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter( NavBar);
