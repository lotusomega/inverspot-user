//AppPanel componente principal que contiene el panel para administrar el usuario incluye la barra de navegación y el contenido de cada ruta
import React, { Component } from 'react';
import NavBar from './NavBar'

class App extends Component {

  /*componentDidMount funcion que se ejecuta antes de montar el componente y obtiene la informacion de
  usuario una vez que se ha iniciado sesion*/
  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }
  /*props
  user: contiene toda la imformacion del usuario(nombre, corereo, etc...)
  this.props.children: es utlizado para renderizar el contenido del panel dependiendo de la ruta*/
  render() {
    const stylep={
      paddingTop: "50px"
    }
    return (
     <div className="mainbody container-fluid">
        <div className="row">
          <NavBar user={ this.user } />
          <div style={stylep}> </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
