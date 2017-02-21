import React, { Component } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import ModalLogin from './ModalLogin'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="spacer triple"></div>
        {this.props.children}
        <div className="spacer triple"></div>
        <Footer />
        <div className="spacer"></div>
        <footer className="end-bar">©2017 inverspot.mx | All Rights reserved</footer>
        <ModalLogin/>
      </div>
    );
  }
}

export default App;
