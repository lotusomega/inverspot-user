import React, { Component } from 'react';
import {PropertyCardBig, FundCardBig} from './PropertyCardBig'
import { listProperty } from '../services/list'

function PropertyCards(props) {
  return (
    <div>
    { props.element === 'PropertyCardBig' &&
       props.propertiesa.map(property => (<PropertyCardBig key={property._id} property={property}/>) ) }
    { props.element === 'FundCardBig' &&
        props.propertiesf.map(property => (<FundCardBig key={property._id} property={property}/>) )}
    </div>
  )
}

class Proyects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      propertiesa: [],
      propertiesf: []
    }
  }

  componentDidMount() {
    listProperty({status: 'available'}, {sort:'title', limit: 3}, 'title address dataSheet marketResearch')
      .then( propertiesa => this.setState({ propertiesa }) )
      .catch( e => alert(e) )
    listProperty({status: 'fund'}, {sort:'title', limit: 6}, 'title address dataSheet marketResearch')
      .then( propertiesf => this.setState({ propertiesf }) )
      .catch( e => alert(e) )
  }

  render() {
    return (
      <div className="container">
        <div className="row propiedades">
        <div className="spacer triple"></div>

          <div className="spacer double"></div>
          <h1 className="text-center"><b>Proyectos para Invertir</b></h1>
          <div className="spacer double"></div>
          <PropertyCards  propertiesa={ this.state.propertiesa } element='PropertyCardBig'/>
          <div className="spacer double"></div>
          <h1 className="text-center"><b>Proyectos Fondeados</b></h1>
          <div className="spacer double"></div>
          <PropertyCards  propertiesf={ this.state.propertiesf } element='FundCardBig'/>
        </div>
      </div>
    );
  }
}

export default Proyects;
