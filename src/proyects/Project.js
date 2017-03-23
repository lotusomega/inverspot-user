import React, { Component } from 'react';
import {PropertyCardBig, FundCardBig} from './PropertyItem'
import { listProperty } from '../services/list'
import {Wizard} from '../index/Wizard'

class Project extends Component {
  /*states
  property: contiene todos los datos de la propiedad*/
  constructor(props) {
    super(props)
    this.toggleWizard = this.toggleWizard.bind(this)
    this.state = {
      property: {
        address:{
          suburb:''
        },
        dataSheet:{
          investAmount:0,
          totalShares: 0,
          sharesSold: 0
        },
        marketResearch:{
          estimatedTime:0,
          yieldInTime:  0
        }
      }
    }
  }
  /*componentDidMount funcion que se ejecuta antes de montar el componente que lista la propiedad especificada
  en el estado de property*/
  componentDidMount() {
    if( this.props.params.id) {
      listProperty({_id: this.props.params.id}, {}, 'title description image address dataSheet marketResearch status createdAt')
        .then( property => this.setState({ property: property[0] }) )
        .catch( e => alert(e) )
    }
    if( this.props.location.query.modal ){
      this.props.stepSet(3)
      this.props.showModal()
    }
  }
  //toggleWizard: agrega las clases necesarias para abrir el modal de inversion hecho en bootstrap y coloca el estado show(mostrar) en verdadero o falso
  toggleWizard( property ) {
    if(!this.state.show) {
      document.body.className += ' modal-open'
      return this.setState({show: true, property})
    }
    document.body.className = ''
    return this.setState({show: false})
  }

  render() {

    return (
      <div className="container">
        { this.state.show && <Wizard onClick={ this.toggleWizard } id={this.state.property._id} /> }
        <div className="row propiedades">
          <div className="spacer double"></div>
          <h1 className="text-center"><b>Proyecto </b></h1>
          <div className="spacer double"></div>
          {this.state.property.status === 'available' ? <PropertyCardBig property={this.state.property} onInvest={ this.toggleWizard } />
            : <FundCardBig property={this.state.property}/> }
          <div className="row bordered well" style={{backgroundImage: 'linear-gradient(to bottom,#ffffff 0,#ffffff 100%)', borderColor: '#ffffff'}}>
            <div className="col-sm-12">
              <div className="tab-content" style={{color: 'black'}}>
                {this.props.children}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
