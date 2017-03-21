//App componente principal que contiene toda la pagina web incluye la barra de navegación, el contenido de cada ruta y el pie de página
import React, { Component } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import {LoginWizard} from './ModalLog'

class App extends Component {
  //Constructor Inicializa las funciones y los estados
  /*state show: false, es utilizada para mostrar o no el modal de registro e inicio de sesión
  state step:0 , es utilizado para cambiar los estados del modal step: 0 modal de recuperacion de contraseña, step: 1 modal de registro,
  step 2, modal de inicio de seión*/
  constructor(props) {
    super(props)
    this.toggleWizardLogin = this.toggleWizardLogin.bind(this)
    this.stepSet = this.stepSet.bind(this)
    this.showModal = this.showModal.bind(this)
    this.state = {
      show: false,
      step:0,
      showConfirm: false
    }
  }
  //stepSet: recibe el numero de estado en que se desea colocar el modal antes de abrirlo
  stepSet(step){
    this.setState({step: step})
    this.toggleWizardLogin()
  }
  //toggleWizardLogin: agrega las clases necesarias para abrir el modal hecho en bootstrap y coloca el estado show(mostrar) en verdadero o falso
  toggleWizardLogin( ) {
    if(!this.state.show) {
      document.body.className += ' modal-open'
      return this.setState({show: true})
    }
    document.body.className = ''
    return this.setState({show: false})
  }

  showModal() {
    this.setState({
      showConfirm: true
    })
  }
  //NavBar prop stepSet: contiene la función para cambiar el estado del modal desde la barra de navegación
  //this.props.children: es utlizado para renderizar el contenido de la pagina dependiendo de la ruta
  /*LoginWizard: componente que contiene todos los modales de inicio, registro y recuperacion de contraseña
  prop onClick: contiene la función para mostrar o no el modal (true, false)
  prop step: contiene el estado que puede tener el modal (0, 1 , 2)*/
  render() {
    return (
      <div>
        <NavBar stepSet={this.stepSet}/>
        {this.props.children && React.cloneElement(this.props.children, {
              stepSet: this.stepSet,
              showModal: this.showModal,
              showConfirm: this.state.showConfirm
        })}
        <Footer />
        <div className="spacer"></div>
        <footer className="end-bar">©2017 inverspot.mx | All Rights Reserved</footer>
        { this.state.show && <LoginWizard onClick={ this.toggleWizardLogin } step={this.state.step}/>}
      </div>
    );
  }
}

export default App;
