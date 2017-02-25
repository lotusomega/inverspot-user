import React, { Component } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import {LoginWizard} from './ModalLog'

class App extends Component {
  constructor(props) {
    super(props)
    this.toggleWizardLogin = this.toggleWizardLogin.bind(this)
    this.stepSet = this.stepSet.bind(this)
    this.state = {
      show: false,
      step:0
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
  render() {
    return (
      <div>
        <NavBar stepSet={this.stepSet}/>
        <div className="spacer triple"></div>
        {this.props.children}
        <div className="spacer triple"></div>
        <Footer />
        <div className="spacer"></div>
        <footer className="end-bar">©2017 inverspot.mx | All Rights reserved</footer>
        { this.state.show && <LoginWizard onClick={ this.toggleWizardLogin } step={this.state.step}/>}
      </div>
    );
  }
}

export default App;
