import React, { Component } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import {LoginWizard} from './ModalLog'

class App extends Component {
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

  stepSet(step){
    this.setState({step: step})
    this.toggleWizardLogin()
  }

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

  render() {
    return (
      <div>
        <NavBar stepSet={this.stepSet}/>
        <div className="headspace"></div>
        {/* {this.props.children} */}
        {this.props.children && React.cloneElement(this.props.children, {
              stepSet: this.stepSet,
              showModal: this.showModal,
              showConfirm: this.state.showConfirm
        })}
        {/* <div className="spacer triple"></div> */}
        <Footer />
        <div className="spacer"></div>
        <footer className="end-bar">©2017 inverspot.mx | All Rights reserved</footer>
        { this.state.show && <LoginWizard onClick={ this.toggleWizardLogin } step={this.state.step}/>}
      </div>
    );
  }
}

export default App;
