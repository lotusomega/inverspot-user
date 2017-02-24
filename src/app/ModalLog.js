import React, { Component } from 'react'
import { login } from '../services/auth'
import { create } from '../services/signup'
import { listUser } from '../services/list'
import { withRouter } from 'react-router'

function Register(props) {
  return(
    <div className="modal-body">
      <div className="box">
          <div className="content">
              <div className="form">
                  <h1>Regístrate <small style={{color: "4B118E"}}> Ingresa tus datos</small></h1>
                      <hr/>
                      <form onSubmit={ props.handleSubmit }  data-toggle="validator" role="form">

                      <div className="form-group">
                          <input type="text" name="name" className="form-control input-sm" placeholder="Tu nombre" required="required"
                          value={ props.user.name } onChange={ props.handleInputRegister }/>

                          <input id="email" name="email" className="form-control input-sm" type="email" data-error="La dirección de correo es invalida"   placeholder="Email" required="required"
                          value={ props.user.email } onChange={ props.handleInputRegister }/>

                          <input id="password" className="form-control input-sm" type="password" placeholder="Password" name="password" required="required"/>

                          <input id="password_confirmation" className="form-control input-sm" type="password" placeholder="Repeat Password" name="password" required="required"
                          value={ props.user.password } onChange={ props.handleInputRegister }/>

                          <input type="text" className="form-control input-sm" name="telephone" id="phone" placeholder="Tu teléfono" required="required"
                          value={ props.user.telephone } onChange={ props.handleInputRegister }/>

                          <div className="control-group">
                              <div className="select" style={{marginBottom: "5px"}}>
                                  <select id="subject" name="asesor" className="form-control" required="required" style={{height: "30px"}}
                                    value={ props.user.asesor } onChange={ props.handleInputRegister }>
                                      <option value="na" selected="">¿Quién te atendió?</option>
                                      {props.asesor.map(asesor => <option key={asesor._id} value={asesor._id}>{asesor.name}</option>)}
                                  </select>
                                  <div className="select__arrow"></div>
                              </div>
                          </div>

                          <div className="control-group">
                              <div className="select" style={{marginBottom: "5px"}}>
                                  <select id="subject" name="state" className="form-control" required="required" style={{height: "30px"}}
                                    value={ props.user.state } onChange={ props.handleInputRegister }>
                                      <option value="na" selected="">Estado</option>
                                      <option value="Aguascalientes">Aguascalientes</option>
                                      <option value="Baja California">Baja California</option>
                                      <option value="Baja California Sur">Baja California Sur</option>
                                      <option value="Campeche">Campeche</option>
                                      <option value="Chiapas">Chiapas</option>
                                      <option value="Chihuahua">Chihuahua</option>
                                      <option value="Ciudad de México">Ciudad de México</option>
                                      <option value="Coahuila">Coahuila</option>
                                      <option value="Colima">Colima</option>
                                      <option value="Durango">Durango</option>
                                      <option value="Estado de México">Estado de México</option>
                                      <option value="Guanajuato">Guanajuato</option>
                                      <option value="Guerrero">Guerrero</option>
                                      <option value="Hidalgo">Hidalgo</option>
                                      <option value="Jalisco">Jalisco</option>
                                      <option value="Michoacán">Michoacán</option>
                                      <option value="Morelos">Morelos</option>
                                      <option value="Nayarit">Nayarit</option>
                                      <option value="Nuevo León">Nuevo León</option>
                                      <option value="Oaxaca">Oaxaca</option>
                                      <option value="Puebla">Puebla</option>
                                      <option value="Querétaro">Querétaro</option>
                                      <option value="Quintana Roo">Quintana Roo</option>
                                      <option value="San Luis Potosí">San Luis Potosí</option>
                                      <option value="Sinaloa">Sinaloa</option>
                                      <option value="Sonora">Sonora</option>
                                      <option value="Tabasco">Tabasco</option>
                                      <option value="Tamaulipas">Tamaulipas</option>
                                      <option value="Tlaxcala">Tlaxcala</option>
                                      <option value="Veracruz">Veracruz</option>
                                      <option value="Yucatán">Yucatán</option>
                                      <option value="Zacatecas">Zacatecas</option>
                                  </select>
                                  <div className="select__arrow"></div>
                              </div>
                            </div>

                          <div className="control-group">
                              <div className="select" style={{marginBottom: "5px"}}>
                                  <select id="subject" name="contactFrom" className="form-control" required="required" style={{height: "30px"}}
                                    value={ props.user.contactFrom } onChange={ props.handleInputRegister }>
                                      <option>¿Cómo nos conociste?</option>
                                      <option value="Facebook">Facebook</option>
                                      <option value="Twitter">Twitter</option>
                                      <option value="Google">Google</option>
                                      <option value="Asesor">Asesor</option>
                                      <option value="Otro">Otro</option>
                                  </select>
                                  <div className="select__arrow"></div>
                              </div>
                          </div>

                          <div className="input-group" style={{float: "left", marginLeft: "10px"}}>
                            <div className="checkbox">
                                <label style={{fontSize: "12px"}}>
                                    <input id="login-remember" type="checkbox" name="remember" value="1"/> Acepto avisos de política y privacidad
                                </label>
                            </div>
                          </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-6">
                              <button className="loginBtn loginBtn--facebook">Sing in with Facebook</button>
                          </div>
                          <div className="col-sm-6">
                              <button className="button btn-register" type="submit">Enviar</button>
                          </div>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>

  )
}

function Login (props){
  return(
    <div className="modal-body">
        <div className="box">
            <div className="content">
                <div className="form loginBox">
                    <h1>Iniciar sesión</h1>
                        <hr/>
                          <div className="error"></div>
                          <form onSubmit={ props.authenticate }>
                            <input id="email" className="form-control" type="text" placeholder="Usuario o correo electrónico" name="email"
                              value={ props.email }
                              onChange={ props.handleInput }/>
                            <input id="password" className="form-control" type="password" placeholder="Contraseña" name="password"
                              value={ props.password }
                              onChange={ props.handleInput }/>
                            <div className="input-group" style={{float: "left", marginLeft: "10px"}}>
                              <div className="checkbox">
                                  <label style={{fontSize: "12px"}}>
                                      <input id="login-remember" type="checkbox" name="remember" value="1"/> No cerrar sesión
                                  </label>
                              </div>
                            </div>
                            <div className="control control-login" style={{  marginTop: "8px"}}>
                                <a  data-target="#pwdModal" data-toggle="modal" className="close" data-dismiss="modal" style={{fontSize: "12px", marginTop: "8px", color: "black"}}>
                                    ¿Olvide mi contraseña?
                                </a>
                            </div>
                            <br/>
                            <button className="button btn-login" type="submit">Enviar</button>
                            <hr/>
                            <a className="btn btn-block btn-social btn-facebook">
                                <i className="fa fa-facebook"></i> Login with Facebook
                            </a><br/>
                          </form>
                      </div>
                  </div>
              </div>
        </div>
  )
}

function Header (props){
  return(
    <div className="modal-header header-holder">
      <div className="modal-tit">Bienvenido a</div>
      <img src="style/images/inverspot.png" className="img-fluid-login" alt="inverspot"/>
      <br/><br/>
    </div>
  )
}

function Footer(props){
  return(
    <div className="modal-footer">
        <div className="forgot login-footer">
            <span>¿No tienes una cuenta?
                 <a href="javascript: showRegisterForm();" style={{ fontSize: "14px"}}>Registrate con Nosotros</a></span>
        </div>
        <div className="forgot register-footer">
             <span>Ya tengo mi cuenta</span>
             <a href="javascript: showLoginForm();" style={{ fontSize: "14px"}}>Ingresa</a>
        </div>
    </div>
  )
}

function Modal (props){
  return(
    <div className="modal fade login" id="loginModal">
      <div className="modal-dialog login animated">
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          {props.children}
        </div>
      </div>
    </div>
  )
}

class ModalLogin1 extends Component {
  constructor(props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = {}
    newState[name] = e.target.value
    this.setState(newState)
  }

  authenticate(e) {
    e.preventDefault()
    if ( this.state.email !== "" && this.state.password !== "" ) {
      login(this.state.email, this.state.password)
      .then( success => success && this.props.router.push('/user/profile'), e => alert(e) )
    }
    else {
      alert("Completa los campos")
    }
  }

  render() {
    return (
      <Modal>
        <Header/>
        <Login authenticate={this.authenticate} email={this.state.email} password={this.state.password} handleInput={this.handleInput}/>
        <Footer/>
      </Modal>
    )
  }
}

class ModalRegister1 extends Component {
  constructor(props) {
    super(props)
    this.handleInputRegister = this.handleInputRegister.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      user: {},
      asesor: []
    }
  }

  componentDidMount() {
    listUser({level:{ $in: ['user', 'asesor'] }}, {sort:'name'}, 'name _id')
      .then( asesor => this.setState({ asesor }) )
      .catch( e => alert(e) )
  }

  handleInputRegister(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    newState.user[name] = e.target.value
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()
		let newState = Object.assign( this.state )
		newState.user['level'] = 'user'
		this.setState(newState)
    create( this.state.user )
    .then( success => success && this.props.router.push('/users/profile') )
  }

  render() {
    return (
      <Modal>
        <Header/>
        <Register handleSubmit={this.handleSubmit} user={this.state.user} asesor={this.state.asesor} handleInputRegister={this.handleInputRegister}/>
        <Footer/>
      </Modal>
    )
  }
}

let ModalRegister = withRouter(ModalRegister1)
let ModalLogin = withRouter(ModalLogin1)

export {ModalLogin, ModalRegister};
