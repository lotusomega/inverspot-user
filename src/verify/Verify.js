import React, { Component } from 'react';
import { verify } from '../services/auth'

class Verify extends Component {

	constructor(props) {
    super(props)
		this.change = this.change.bind(this)
    this.state = {
      show: false
    }
  }

	componentDidMount() {
   	if(this.props.params.checker){
    	verify(this.props.params.checker)
    		.then( success => success && this.setState({show: true}))
    }
  }

	change(){
		this.props.router.push('/projects')
	}

  render() {
    return (
      <div>
				<div className="container">
        <div className="spacer double"></div>
        {this.state.show ? <h1 className="text-center"><b>¡Felicidades!</b></h1> :
			<h1 className="text-center"><b style={{color:"red"}}>Error al completar registro</b></h1>}
            <div className="spacer double"></div>
            <div className="row main-container text-center">
          		{this.state.show ? <h1 style={{color: '#5a5a5a', fontSize: '26px', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>
          		Has completado tu registro</h1>: <h1 style={{color: '#5a5a5a', fontSize: '26px', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>
          		Hubo un error al verificar el codigo de tu correo</h1>} <br/><br/><br/>
							{this.state.show && <button className="button" onClick={this.change}>Comenzar a Participar</button>}
          	</div>
            <div className="spacer" style={{height: '70px'}}></div>
        </div>
    </div>
    );
  }
}

export default Verify;
