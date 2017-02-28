import React, { Component } from 'react';
import { verify } from '../services/auth'

class Verify extends Component {

	componentDidMount() {
   	if(this.props.params.checker){ 
    	verify(this.props.params.checker)
    		.then( success => success && alert("Cuenta Activa"))
    }
  }

  render() {
    return (
      <div>
        <div className="container">
        <div className="spacer double"></div>
        <h1 className="text-center"><b>¡Felicidades!</b></h1>
            <div className="spacer double"></div>
            <div className="row main-container text-center">
          		<h1 style={{color: '#5a5a5a', fontSize: '26px', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>
          		Has completado tu registro, ahora puedes iniciar tu sesión</h1><br/>
          	</div>
            <div className="spacer" style={{height: '70px'}}></div>
        </div>
    </div>
    );
  }
}

export default Verify;
