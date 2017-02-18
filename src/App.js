import React, { Component } from 'react';
import NavBar from './Components/NavBar'

class App extends Component {
  render() {
    return (
     <div className="mainbody container-fluid">
        <div className="row">
          <NavBar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
