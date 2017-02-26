import React, { Component } from 'react'
import { edit } from '../services/user'

class PasswordProfile extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleInput2 = this.handleInput2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      password1:'',
      show: false,
      user: {
        password:''
      }
    }
  }

   componentDidMount() {
     let user = {
       _id: this.props.userid
     }
     this.setState({user: user})
   }


  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    newState.user[name] = e.target.value
    this.setState(newState)
  }

  handleInput2(e) {
    e.preventDefault()
    let newState = Object.assign( this.state )
    newState.password1 = e.target.value
    this.setState(newState)
  }

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
      <div className="panel panel-default">
        <div className="panel-body">
            <h3 style={{marginLeft: "10px"}}><strong>Cambio de Contraseña</strong></h3>
            <hr/>

            <div className="col-md-12 col-sm-12 col-xs-12 personal-info">
              <div className="form-horizontal">

                <div className="form-group">
                  <div className="container">
                   <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                      <p className="text-center">Introduzca su nueva contraseña</p>
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
                        <button type="submit" className="btn btn-primary btn-load" required>Cambiar Contraseña</button>
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
