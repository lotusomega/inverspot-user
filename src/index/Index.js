import React, { Component } from 'react';
import Slider from './Slider'
import { PropertyCard, FundCard } from './PropertyCard'
import NewsLetter from './NewsLetter'
import SectionIndex from './SectionIndex'
import { listProperty } from '../services/list'
import {Wizard} from './Wizard'

function PropertyCards(props) {
  return (
    <div>
    { props.element === 'PropertyCard' &&
       props.propertiesa.map(property => (<PropertyCard key={property._id} onInvest={ props.onInvest } property={property}/>) ) }
    { props.element === 'FundCard' &&
        props.propertiesf.map(property => (<FundCard key={property._id} property={property}/>) )}
    </div>
  )
}


class Index extends Component {

  constructor(props) {
    super(props)
    this.launchWizard = this.launchWizard.bind(this)
    this.state = {
      propertiesa: [],
      propertiesf: []
    }
  }

  launchWizard( property ) {
    // TODO: Invertir
    console.log('Investing...', property);
    if(!this.state.show) {
      document.body.className += ' modal-open'
      return this.setState({show: true, property})
    }
    document.body.className = ''
    return this.setState({show: false})
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
        <div>
          { this.state.show && <Wizard onClick={ this.launchWizard } id={this.state.property._id} /> }
          <Slider />
          <div className="container">
            <div className="row main-container propiedades">
            <div className="spacer double"></div>
            <h1><b>Proyectos para Invertir</b></h1>
            <div className="spacer triple"></div>
            <PropertyCards onInvest={ this.launchWizard } propertiesa={ this.state.propertiesa } element='PropertyCard'/>

            <div className="spacer triple"></div>
            <NewsLetter />
            <div className="spacer triple"></div>
            <div className="row main-container propiedades">
                <div className="spacer double"></div>
                <h1><b>Proyectos Fondeados</b></h1>
                <div className="spacer triple"></div>
                <PropertyCards propertiesf={ this.state.propertiesf } element='FundCard'/>

            </div>
            <div className="spacer triple"></div>
            <SectionIndex />

            <div className="spacer triple"></div>

            <div className="container">
                <div className="row jumbotron main-container registro-section">
                    <div className="spacer"></div>
                    <h2>Invertir con nosotros es rápido, seguro y sencillo</h2>
                    <div className="spacer"></div>
                    <p>Con el objetivo de democratizar la inversión en el sector inmobiliario, hemos diseñado un método sencillo para la selección de inmueble ideal. Invertir nunca fue más sencillo.</p>
                    <button className="button" data-launchWizard="modal" href="javascript:openRegisterModal()" >Comenzar registro</button>
                </div>
            </div>

            <div className="spacer triple"></div>

            <div className="container">
               <div className="row">
                  <div className="col-xs-12 col-centered">
                       <div className="spacer double"></div>
                        <h1 className="text-center"><b>Ellos Hablan de Nosotros</b></h1>
                        <div className="spacer double"></div>
                  </div>
                </div>
            </div>
            <div className="spacer triple"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
