import React, { Component } from 'react';
import NavBar from './NavBar'

class App extends Component {

  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }

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
