import React, { Component } from 'react'
import { edit } from '../services/user'
import { withRouter } from 'react-router'

class DataProfile extends Component {
  /*state
  usercopy: contiene los datos originales del usuario al inicializar el componente
  user: contiene los datos del usuario
  show: utilizado para mostrar los campos en caso de editar perfil*/
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.cancel = this.cancel.bind(this)
    this.state = {
      usercopy:{},
      user: {
        name:'',
        email: '',
        state: '',
        telephone:''
      },
      show: false
    }
  }
  /*componentDidMount funcion que se ejecuta antes de montar el componente y asigna la informacion de
  usuario a su estado*/
   componentDidMount() {
     let user = {
       name: this.props.userprofile.name,
       email: this.props.userprofile.email,
       state: this.props.userprofile.state,
       telephone: this.props.userprofile.telephone,
       _id: this.props.userprofile._id
     }
     let userc = Object.assign(this.state.usercopy, user)
     this.setState({user: user, usercopy: userc})
   }
   //funcion para mostrar los campos en caso de editar perfil
   editProfile(){
      this.setState({show: true})
   }
   //funcion para regresar al estado original los datos del usuario al cancelar la edicion
   cancel(){
     let userc = Object.assign(this.state.user, this.state.usercopy)
     this.setState({show: false, user: userc})
   }
   // asigna al estado del usuario el valor que posee el input cada que este cambia
  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    newState.user[name] = e.target.value
    this.setState(newState)
  }
  //maneja el envio del formulario al api para actualizar el usuario
  handleSubmit(e) {
    e.preventDefault()
    edit( this.state.user )
      .then( success => success && this.props.onChange( this.state.user ), this.setState({show: false}) )
  }

  render() {
    const styledata={
      float: "right",
      margin: "30px"
    }
    const styledata2={
      marginLeft: "10px"
    }
    return (
      <div className="panel panel-default"  style={{backgroundColor: "#f7f7f7"}}>
        <div style={styledata}>
          <div className="btn-group">
            {this.state.show === false && <a onClick={this.editProfile}>
              <button className="btn button-panel bton"><span>Editar Perfil</span></button>
            </a>}
          </div>
        </div>

        <div className="panel-body">
          <h3 style={styledata2}><strong style={{color: "#FF3C00"}}>Mis Datos</strong></h3>
          <br/>
          <hr/>

          <div className="col-md-12 col-sm-12 col-xs-12 personal-info">
            <form className="form-horizontal" data-toggle="validator" role="form" onSubmit={ this.handleSubmit }>
              <div className="form-group">
                <label className="col-md-3 control-label">Nombre completo:</label>
                <div className="col-md-8">
                  {this.state.show === false ? <input className="form-control input-sm" name="name" type="text" required
                  value={ this.state.user.name } readOnly onChange={ this.handleInput }/> :
                <input className="form-control input-sm" name="name" type="text" required
                  value={ this.state.user.name } onChange={ this.handleInput }/>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Correo electrónico:</label>
                <div className="col-lg-8">
                  {this.state.show === false ? <input type="email" name="email" className="form-control input-sm" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required
                  value={ this.state.user.email } readOnly onChange={ this.handleInput }/>:
                  <input type="email" name="email" className="form-control input-sm" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required
                  value={ this.state.user.email } onChange={ this.handleInput }/>}
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Estado:</label>
                <div className="col-lg-8">
                {this.state.show === false ? <input type="text" name="state" className="form-control input-sm" data-error="Bruh, that email address is invalid" required
                  value={ this.state.user.state } readOnly onChange={ this.handleInput }/> :
                  <select name="state" className="form-control" id="sel1"
                    value={ this.state.user.state } onChange={ this.handleInput }>
                     <option value="na">Elige</option>
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
                  </select>}
                </div>
              </div>


              <div className="form-group">
                <label className="col-md-3 control-label">Teléfono fijo:</label>
                <div className="col-md-8">
                  {this.state.show === false ? <input className="form-control input-sm" id="phone" type="phone" name="telephone" required
                  value={ this.state.user.telephone } readOnly onChange={ this.handleInput }/> :
                  <input className="form-control input-sm" id="phone" type="phone" name="telephone" required
                  value={ this.state.user.telephone } onChange={ this.handleInput }/>}
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-xs-12 col-md-8">
                  {this.state.show === true &&<button className="button-cancel btn-danger" onClick={this.cancel} style={styledata2} > Cancelar</button>}
                  <span></span>
                  {this.state.show === true && <button className="button-save btn-success" type="submit" >Guardar Cambios</button>}
                </div>
              </div>
            </form>
          </div>
          <hr/>
        </div>
      </div>

    )
  }
}

export default withRouter(DataProfile);
