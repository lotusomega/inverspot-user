import React, { Component } from 'react';
import {PropertyCardBig, FundCardBig} from './PropertyItem'
import { listProperty } from '../services/list'
import {Wizard} from '../index/Wizard'

function PropertyCards(props) {
  return (
    <div>
      { props.element === 'PropertyCardBig' &&
        props.propertiesa.map(property => {
          return (
            <div>
              <PropertyCardBig key={property._id} onInvest={ props.onInvest } property={property}/>
              <div className="spacer double"></div>
            </div>
          )
        } ) }
      { props.element === 'FundCardBig' &&
        props.propertiesf.map(property => {
          return (
            <div>
              <FundCardBig key={property._id} onInvest={ props.onInvest } property={property}/>
              <div className="spacer double"></div>
            </div>
          )
        } )
      }
    </div>
  )
}

class Proyects extends Component {

  constructor(props) {
    super(props)
    this.toggleWizard = this.toggleWizard.bind(this)
    this.state = {
      propertiesa: [],
      propertiesf: []
    }
  }

  componentDidMount() {
    listProperty({status: 'available'}, {sort:'title'}, 'title address image dataSheet marketResearch')
      .then( propertiesa => this.setState({ propertiesa }) )
      .catch( e => alert(e) )
    listProperty({status: 'fund'}, {sort:'title'}, 'title address image dataSheet marketResearch')
      .then( propertiesf => this.setState({ propertiesf }) )
      .catch( e => alert(e) )
  }

  toggleWizard( property ) {
    // TODO: Invertir
    console.log('Investing...', property);
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
          <div className="spacer"></div>
          <h1 className="text-center"><b>Proyectos para Participar</b></h1>
          <div className="spacer double"></div>
          <PropertyCards  onInvest={ this.toggleWizard } propertiesa={ this.state.propertiesa } element='PropertyCardBig'/>
          <div className="spacer double"></div>
          <h1 className="text-center"><b>Proyectos Fondeados</b></h1>
          <div className="spacer double"></div>
          <PropertyCards  propertiesf={ this.state.propertiesf } element='FundCardBig'/>
        </div>
        <div className="spacer triple"></div>
      </div>
    );
  }
}

export default Proyects;
