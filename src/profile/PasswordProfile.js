import React, { Component } from 'react'
import { edit } from '../services/user'

class PasswordProfile extends Component {
  /*states
  show: estado del error para mostrar si las contraseñas no coinciden (true, false)
  password1: estado de la contraseña para compararción con repetir contraseña
  user:  estado de que contiene todos lo campos necearios para crear un nuevo usuario(nombre,correo, etc...)
  props
  userid: identificador del usuario*/
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleInput2 = this.handleInput2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      password1: '',
      show: false,
      user: {
        password:''
      }
    }
  }
  /*componentDidMount funcion que se ejecuta antes de montar el componente inserta el id del usuario en su estado*/
   componentDidMount() {
     let user = {
       _id: this.props.userid
     }
     this.setState({user: user})
   }

   // asigna al estado del usuario el valor que posee el input cada que este cambia
  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    newState.user[name] = e.target.value
    this.setState(newState)
  }
  // asigna al estado password1 el valor que posee el input cada que este cambia
  handleInput2(e) {
    e.preventDefault()
    let newState = Object.assign( this.state )
    newState.password1 = e.target.value
    this.setState(newState)
  }
  //maneja el envio del formulario al api para actualizar la contraseña del usuario
  handleSubmit(e) {
    e.preventDefault()
    if(this.state.password1 !== this.state.user.password){
      this.setState({show: true})
    }
    else{
      edit( this.state.user )
        .then( success => success && alert("Contraseña Actualizada"), this.setState({show: false}) )
    }
  }

  render() {
    return (
      <div className="panel panel-default" style={{backgroundColor: "#f7f7f7"}}>
        <div className="panel-body">
        <i className="fa fa-refresh fa-3x" aria-hidden="true" style={{color: "#4B118E", float: "right", marginRight: "30px", marginTop: "10px", marginBottom: "30px"}}></i>
            <h3 style={{marginLeft: "10px"}}><strong style={{color: "#FF3C00"}}>Cambio de Contraseña</strong></h3>
            <hr/>

            <div className="col-md-12 col-sm-12 col-xs-12 personal-info">
              <div className="form-horizontal">

                <div className="form-group">
                  <div className="container">
                   <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                      <h3 className="text-center" style={{fontSize: "16px", fontFamily: "AvenirNext-Bold", color: "#4B118E"}}>Introduzca su nueva contraseña</h3>
                      <form onSubmit={ this.handleSubmit }>
                        <input type="password" className="input-sm form-control" name="password1" placeholder="Nueva contraseña"
                        value={ this.state.password1 } onChange={ this.handleInput2 } required/>
                        <div className="row">
                        <br/><br/>
                        </div>
                        <input type="password" name="password" className="input-sm form-control" placeholder="Confirmar contraseña"
                        value={ this.state.user.password } onChange={ this.handleInput } required/>
                        <div className="row">
                          <div className="col-sm-12" style={{fontSize: "smaller"}}>
                            {this.state.show && <p style={{color:"#FF0004"}}>Contraseñas no coinciden</p>}<br/><br/>
                          </div>
                        </div>
                        <button type="submit" className="button-save btn-success" required>Cambiar Contraseña</button>
                      </form>
                    </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PasswordProfile;
