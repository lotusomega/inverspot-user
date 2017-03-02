import React, { Component } from 'react';
import CardProfile from './CardProfile'
import BarProfile from './BarProfile'
import DataProfile from './DataProfile'
import PasswordProfile from './PasswordProfile'

class Profile extends Component {
  /*state
  user: contiene los datos del usuario*/
  constructor(props){
    super(props)
    this.onUserInfoChange = this.onUserInfoChange.bind(this)
    this.state = {
      user: {
        name:'',
        email: '',
        state: '',
        telephone:'',
        invesmentData:{}
      }
    }
  }
  /*componentDidMount funcion que se ejecuta antes de montar el componente y obtiene la informacion de
  usuario una vez que se ha iniciado sesion ademas de asisgnarla al estado del usuario*/
  componentWillMount() {
    let user1 = JSON.parse(localStorage.getItem('my'))
    let user = Object.assign(this.state.user, user1)
    this.setState({ user })
  }
  //funcion para actualizar el estado del usuario si se modifica la informacion
  onUserInfoChange(user) {
    this.setState({user})
  }
  /*props
  user: contiene los datos del usuario
  onUserInfoChange: funcion para actualizar los datos del usuario*/
  render() {
    return (
      <div>
        <CardProfile user={this.state.user}/>
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <BarProfile user={this.state.user}/>
          <DataProfile  userprofile={this.state.user} onChange={ this.onUserInfoChange } />
          <PasswordProfile userid={this.state.user._id} />
        </div>
      </div>
    );
  }
}

export default Profile;
