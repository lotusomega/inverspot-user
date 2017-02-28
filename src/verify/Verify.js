import React, { Component } from 'react';
import { verify } from '../services/auth'
import Swal from 'react-swal'

class Verify extends Component {

	componentDidMount() {
   	if(this.props.params.checker){
    	verify(this.props.params.checker)
    		.then( success => success && this.props.showModal())
    }
  }

  render() {
    return (
      <div>
				<div className="container">
				<Swal
          title="Registro Exitoso"
          text="¿Desea comenzar a invertir?"
          confirmButtonText="Sí"
          confirmButtonColor="#f44336"
          cancelButtonText="Cancelar"
          type="success"
          isOpen={ this.props.showConfirm || false }
          callback={confirm => {
		        confirm && this.props.router.push('/projects')
		          .catch(alert)
		      }|| null } />
        <div className="spacer double"></div>
        <h1 className="text-center"><b>¡Felicidades!</b></h1>
            <div className="spacer double"></div>
            <div className="row main-container text-center">
          		<h1 style={{color: '#5a5a5a', fontSize: '26px', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>
          		Has completado tu registro</h1><br/>
          	</div>
            <div className="spacer" style={{height: '70px'}}></div>
        </div>
    </div>
    );
  }
}

export default Verify;
