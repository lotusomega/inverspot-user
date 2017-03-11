//ModalLog componente que contiene todos los modales de inicio, registro y recuperacion de contraseña
import React, { Component } from 'react'
import { login, recovery, fbAuth } from '../services/auth'
import { create } from '../services/signup'
import { listUser } from '../services/list'
import { withRouter, Link } from 'react-router'

//function Register: contenido del modal de registro
/*props
handleSubmit: maneja el envio del formulario al api
handleInputRegister: asigna al estado del usuario el valor que posee el input cada que este cambia
handleFields: asigna el valor del input password1 a su estado cada que cambia
user.name: asigna el estado del nombre de usuario
user.email: asigna el estado del correo de usuario
user.password1: asigna el estado de la contraseña
user.password: asigna el estado de el paso repetir contraseña
user.telephone: asigna el estado del telefono del usuario
user.asesor: asigna el estado del asesor que atendio al usuario
user.state: asigna el estado del estado de la republica al que pertenece el usuario
user.contactFrom: asigna el estado del medio por el que el usuario conocio la pagina
onClick: contiene la función para mostrar o no el modal (true, false)
fbAuth: funcion para obtener la verificacion de facebook**/
function Register(props) {
  return(
    <div className="modal-body">
      <div className="box">
        <div className="content">
          <div className="form">
            <h1 style={{marginTop: "20px"}}>Regístrate <small style={{color: "4B118E"}}> Ingresa tus datos</small></h1>
            <hr/>
            <form onSubmit={ props.handleSubmit }  data-toggle="validator" role="form">

              <div className="form-group">
                <input type="text" name="name" className="form-control input-sm" placeholder="Tu nombre" required="required"
                  value={ props.user.name } onChange={ props.handleInputRegister }/>

                <input name="email" className="form-control input-sm" type="email" placeholder="Email" required="required"
                  value={ props.user.email } onChange={ props.handleInputRegister }/>

                <input id="password" className="form-control input-sm" type="password" placeholder="Password" name="password1" required
                  value={ props.password1 } onChange={ props.handleFields }/>

                <input id="password_confirmation" className="form-control input-sm" type="password" placeholder="Repeat Password" name="password" required="required"
                  value={ props.user.password } onChange={ props.handleInputRegister }/>

                <input type="text" className="form-control input-sm" name="telephone" id="phone" placeholder="Tu teléfono" required="required"
                  value={ props.user.telephone } onChange={ props.handleInputRegister }/>

                <div className="control-group">
                  <div className="select" style={{marginBottom: "5px"}}>
                    <select name="asesor" className="form-control" style={{height: "30px"}}
                      value={ props.user.asesor } onChange={ props.handleInputRegister} required>
                      <option defaultValue >¿Quién te atendió?</option>
                      {props.asesor.map(asesor => <option key={asesor._id} value={asesor._id}>{asesor.name}</option>)}
                    </select>
                    <div className="select__arrow"></div>
                  </div>
                </div>

                <div className="control-group">
                  <div className="select" style={{marginBottom: "5px"}}>
                    <select name="state" className="form-control" required="required" style={{height: "30px"}}
                      value={ props.user.state } onChange={ props.handleInputRegister }>
                      <option defaultValue>Estado</option>
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
                    <select name="contactFrom" className="form-control" required="required" style={{height: "30px"}}
                      value={ props.user.contactFrom } onChange={ props.handleInputRegister }>
                      <option defaultValue >¿Cómo nos conociste?</option>
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
                      <input type="checkbox" name="check" required/>
                      <Link to='/aviso-de-privacidad' onClick={props.onClick}>Acepto avisos de política y privacidad</Link>
                    </label>
                    {props.show && <label style={{fontSize: "11px", color:"red"}}>Contraseñas no coinciden</label>}
                  </div>
                </div>
              </div>
              <button className="button btn-login" type="submit">Enviar</button>
              <hr/>
              <button type="button" className="btn-social loginBtn loginBtn--facebook btn btn-block  btn-facebook" onClick={props.fbAuth}>Registro con Facebook</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

//function Login: contenido del modal de inicio de sesión
/* props
authenticate: funcion que verifica el correo y contraseña del usuario en el api para poder iniciar sesión
handleInput: asigna al estado del valor que posee el input cada que este cambia
email: asigna el estado del correo de usuario
password: asigna el estado de la contraseña
next: contiene el estado que puede tener el modal (0, 1 , 2)
fbAuth: funcion para obtener la verificacion de facebook*/
function Login (props){
  return(
    <div className="modal-body">
      <div className="box">
        <div className="content">
          <div className="form loginBox">
            <h1 style={{marginTop: "20px"}}>Iniciar Sesión</h1>
            <hr/>
            <div className="error"></div>
            <form onSubmit={ props.authenticate }>
              <input id="email" className="form-control" type="email" placeholder="Correo electrónico" name="email"
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
                <a onClick={() => props.next(0)}  className="close" style={{fontSize: "12px", marginTop: "8px", color: "black"}}>
                  ¿Olvide mi contraseña?
                </a>
              </div>
              <br/>
              <button className="button btn-login" type="submit">Enviar</button>
              <hr/>
              <button type="button" className="btn btn-block btn-social btn-facebook" onClick={props.fbAuth}><i className="fa fa-facebook"></i>Ingresa con Facebook</button>
              <br/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

//function Recover: contenido del modal de recuperacion de contraseña
/*props
send: funcion que envia el correo al api para recuper contraseña
handleInput: asigna al estado del valor que posee el input cada que este cambia
email: asigna el estado del correo de usuario*/
function Recover(props){
  return(
     <div className="modal-body">
      <div className="box">
        <div className="content">
          <div className="form loginBox">
            <h1>Recupera tu contraseña</h1>
            <hr/>
            <div className="error"></div>
            <form onSubmit={ props.send }>
              <input className="form-control" type="email" placeholder="Correo electrónico" name="email"
                value={ props.email }
                onChange={ props.handleInput }/>
              <br/>
              <button className="button btn-login" type="submit">Aceptar</button>
              <hr/>
              <br/>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

//function Header contiene la cabecera de todos los modales
function Header (props){
  return(
    <div className="modal-header header-holder">
      <div className="modal-tit">Bienvenido a</div>
      <img src="style/images/inverspot.png" className="img-fluid-login" alt="inverspot"/>
      <br/><br/>
    </div>
  )
}

//function FooterL contiene el pie del modal de inicio de sesión
function FooterL(props){
  return(
    <div className="modal-footer">
      <div className="login-footer">
        <span>
          <a onClick={() => props.next(1)} style={{cursor: "pointer", fontSize: "14px"}}>¿No tienes una cuenta? Registrate</a></span>
      </div>
    </div>
  )
}

//function FooterR contiene el pie del modal de registro
function FooterR(props){
  return(
    <div className="modal-footer">
      <div className="register-footer">
        <a onClick={() => props.next(2)} style={{cursor: "pointer", fontSize: "14px"}}>Ya tiene cuenta, Ingrese</a>
      </div>
    </div>
  )
}

//function Modal contiene la estructura del modal
//props.children: es utlizado para renderizar el contenido del modal
function Modal (props){
  return(
    <div className="modal fade login in" style={{display: 'block'}} id="loginModal">
      <div className="modal-dialog login animated">
        <div className="modal-content">
          <button type="button" className="close" style={{fontSize: '35px', marginRight: '20px'}} onClick={props.onClick}>&times;</button>
          {props.children}
        </div>
      </div>
    </div>
  )
}

//ModalLogin contiene el modal de inicio de sesión con su funcionalidad
/*states
emal: estado del correo de usuario
password: estado de la contraseña
props
next: contiene el estado que puede tener el modal (0, 1 , 2)
onClick: contiene la función para mostrar o no el modal (true, false)
authenticate: funcion que verifica el correo y contraseña del usuario en el api para poder iniciar sesión
handleInput: asigna al estado el valor que posee el input cada que este cambia
email: asigna el estado del correo de usuario
password: asigna el estado de la contraseña del usuario*/
class ModalLogin extends Component {
  constructor(props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.fbAccess = this.fbAccess.bind(this)
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

  fbAccess(){
    return fbAuth().then( success => {
      if(success) {
        this.props.onClick()
        this.props.router.push('/user/profile')
      }
    } )
  }

  authenticate(e) {
    e.preventDefault()
    if ( this.state.email !== "" && this.state.password !== "" ) {
      login(this.state.email, this.state.password)
      .then( success => {
        if (success) {
          this.props.postLogin ? this.props.postLogin() : this.props.router.push('/user/profile')
        }
        this.props.onClick()
      }, e => alert(e))
    }
    else {
      alert("Completa los campos")
    }
  }

  render() {
    return (
      <Modal onClick={this.props.onClick}>
        <Header/>
        <Login fbAuth={this.fbAccess} next={this.props.next} authenticate={this.authenticate} email={this.state.email} password={this.state.password} handleInput={this.handleInput}/>
        <FooterL next={this.props.next}/>
      </Modal>
    )
  }
}

//ModalRegister contiene el modal de inicio de sesión con su funcionalidad
/*states
show: estado del error para mostrar si la contraseñas no coinciden (true, false)
password1: estado de la contraseña para compararción con repetir contraseña
user:  estado de que contiene todos lo campos necearios para crear un nuevo usuario(nombre,correo, etc...)
asesor: estado que almacena todos los asesores disponibles para listar en la opcion Quien te atendio
props
next: contiene el estado que puede tener el modal (0, 1 , 2)
onClick: contiene la función para mostrar o no el modal (true, false)
show: contiene la función para mostrar o no el error al repetir contraseña (true, false)
handleSubmit: maneja el envio del formulario al api
handleInputRegister: asigna al estado del usuario el valor que posee el input cada que este cambia
handleFields: asigna el valor del input password1 a su estado cada que cambia
user: asigna el estado del usuario
asesor: asigna el estado de la lista de asesores*/
class ModalRegister extends Component {
  constructor(props) {
    super(props)
    this.handleInputRegister = this.handleInputRegister.bind(this)
    this.handleFields = this.handleFields.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fbAccess = this.fbAccess.bind(this)
    this.state = {
      password1: '',
      show: false,
      user: {},
      asesor: []
    }
  }

  fbAccess(){
    return fbAuth().then( success => {
      if(success) {
        this.props.onClick()
        this.props.router.push('/user/profile')
      }
    } )
  }

  /*componentDidMount funcion que se ejecuta antes de montar el componente y lista todos los asesores desde el api para
  asignarlos al estado asesor*/
  componentDidMount() {
    listUser({level:'asesor', status: 'active'}, {sort:'name'}, 'name _id')
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

  handleFields(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    newState[name] = e.target.value
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.password1 === this.state.user.password){
  		let newState = Object.assign( this.state )
  		newState.user['level'] = 'user'
  		this.setState(newState)
      create( this.state.user )
      .then( success => {
        success && alert("Registro exitoso, activa tu cuenta")
        this.props.onClick()
      }, this.props.onClick )
    }
    else
      this.state.password1 !== this.state.user.password && this.setState({ show: true })
  }

  render() {
    return (
      <Modal onClick={this.props.onClick}>
        <Header/>
        <Register fbAuth={this.fbAccess} show={this.state.show} onClick={this.props.onClick} handleSubmit={this.handleSubmit} user={this.state.user}
        password1={this.state.password1} handleFields={this.handleFields} asesor={this.state.asesor} handleInputRegister={this.handleInputRegister}/>
        <FooterR next={this.props.next}/>
      </Modal>
    )
  }
}

//ModalRecover contiene el modal para recuperación de contraseña
/*states
emal: estado del correo de usuario
props
next: contiene el estado que puede tener el modal (0, 1 , 2)
onClick: contiene la función para mostrar o no el modal (true, false)
send: funcion que envia el correo al api para recuper contraseña
handleInput: asigna al estado del valor que posee el input cada que este cambia
email: asigna el estado del correo de usuario*/
class ModalRecover extends Component {
  constructor(props) {
    super(props)
    this.send = this.send.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      email: ''
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = {}
    newState[name] = e.target.value
    this.setState(newState)
  }

  send(e) {
    e.preventDefault()
    if ( this.state.email !== "" ) {
      recovery(this.state.email)
      .then( success => success && alert("Correo enviado, recupera tu contraseña"),this.props.onClick())
    }
    else {
      alert("Introduce tu correo")
    }
  }

  render() {
    return (
      <Modal onClick={this.props.onClick}>
        <Header/>
        <Recover send={this.send} email={this.state.email} handleInput={this.handleInput}/>
        <FooterL next={this.props.next}/>
      </Modal>
    )
  }
}

//LoginWizard1 contiene todos los modales y la funcion para cambiarlos dependiendo del paso
/*states
step: contiene el estado que puede tener el modal (0, 1 , 2)
props
step: asigna el estado del paso que se desea para mostrar el modal
next: contiene el estado que puede tener el modal (0, 1 , 2)
onClick: contiene la función para mostrar o no el modal (true, false)*/
class LoginWizard1 extends Component {

  constructor(props) {
    super(props)
    this.goTo = this.goTo.bind(this)
    this.state = {
      step: this.props.step
    }
  }
  // goTo: funcion que asigna el paso al estado para cambiar de modal
  goTo( step ) {
    this.setState({step})
  }

  render(){
    let { step } = this.state
    let Element = undefined
    let passProps = {
      step: step,
      onClick: this.props.onClick,
      next: this.goTo
    }
    // switch: renderiza el componente correspondiente a cada paso (0= recuperacion de contraseña, 1= Registro, 2= Inicio de sesión)
    switch (step) {
      case 0:
        Element = ModalRecover
        break;
      case 1:
        Element = withRouter(ModalRegister)
        break;
      case 2:
        Element = withRouter(ModalLogin)
        break;
      default:
        break;
    }
    return (
      <div>
        <div className="modal-backdrop fade in"></div>
        <Element { ...passProps } />
      </div>
    )
  }
}

let LoginWizard = withRouter(LoginWizard1)
// export permite exportar los componentes para utlizarlos en cualquier parte de la página
export {LoginWizard, ModalRegister, ModalLogin, ModalRecover}
