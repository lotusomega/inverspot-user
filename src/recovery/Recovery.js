import React, { Component } from 'react';
import { verify } from '../services/auth'

class Verify extends Component {
  /*states
  show: estado del error para mostrar si las contraseñas no coinciden (true, false)
  password1: estado de la contraseña para compararción con repetir contraseña
  password:  estado de repetir contraseña */
  constructor(props){
    super(props)
    this.recover = this.recover.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      password1:'',
      password: '',
      show: false
    }
  }
  // asigna el valor al estado que posee el input cada que cambia
  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = {}
    newState[name] = e.target.value
    this.setState(newState)
  }
  //funcion para mandar la nueva contraseña
	recover(e) {
    e.preventDefault()
   	if(this.state.password === this.state.password1){
    	verify(this.props.params.checker, this.state.password)
    		.then( success => success && alert("Contraseña Cambiada"))
    }
    else{
      this.setState({show: true})
    }
  }

  render() {
    return (
      <div>
        <div className="container">
        <div className="spacer double"></div>
        <h1 className="text-center"><b>Recupera tu contraseña</b></h1>
            <div className="spacer double"></div>
            <div className="row main-container text-center">
            <form onSubmit={ this.recover }>
              <input className="form-control" type="password" placeholder="Nueva Contraseña" name="password1"
                value={ this.state.password1} onChange={ this.handleInput } required style={{width: '400px', margin: '0 auto'}}/><br/>
              <input className="form-control" type="password" placeholder="Repite la Contraseña" name="password"
                value={ this.state.password } onChange={ this.handleInput } required style={{width: '400px', margin: '0 auto'}}/><br/>
              {this.state.show && <p style={{color: 'red'}}>Contraseñas no coinciden</p>}
              <br/>
              <button className="button" type="submit" >Cambiar contraseña</button>
            </form>
          	</div>
            <div className="spacer" style={{height: '70px'}}></div>
        </div>
    </div>
    );
  }
}

export default Verify;
