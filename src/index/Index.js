import React, { Component } from 'react';
import Slider from './Slider'
import { PropertyCard, FundCard } from './PropertyCard'
import NewsLetter from './NewsLetter'
import SectionIndex from './SectionIndex'
import { listProperty } from '../services/list'
import {Wizard} from './Wizard'
import SliderLogos from '../components/SliderLogos'

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
    this.toggleWizard = this.toggleWizard.bind(this)
    this.state = {
      propertiesa: [],
      propertiesf: []
    }
  }

  toggleWizard( property ) {
    if(!this.state.show) {
      document.body.className += ' modal-open'
      return this.setState({show: true, property})
    }
    document.body.className = ''
    return this.setState({show: false})
  }

  componentDidMount() {
    listProperty({status: 'available'}, {sort:'title', limit: 3}, 'title image address dataSheet marketResearch')
      .then( propertiesa => this.setState({ propertiesa }) )
      .catch( e => alert(e) )
    listProperty({status: 'fund'}, {sort:'title', limit: 3}, 'title address image dataSheet marketResearch')
      .then( propertiesf => this.setState({ propertiesf }) )
      .catch( e => alert(e) )
  }

  render() {
    return (
        <div>
          { this.state.show && <Wizard onClick={ this.toggleWizard } id={this.state.property._id} /> }
          <Slider />
          <div className="container">
            <div className="row main-container propiedades">
            <div className="spacer double"></div>
            <h1><b>Proyectos para Invertir</b></h1>
            <div className="spacer double"></div>
            <PropertyCards onInvest={ this.toggleWizard } propertiesa={ this.state.propertiesa } element='PropertyCard'/>

            <NewsLetter />
            <div className="row main-container propiedades">
                <div className="spacer double"></div>
                <h1><b>Proyectos Fondeados</b></h1>
                <div className="spacer double"></div>
                <PropertyCards propertiesf={ this.state.propertiesf } element='FundCard'/>

            </div>
            <SectionIndex />

            <div className="spacer double"></div>

            <div className="container">
                <div className="row jumbotron main-container registro-section">
                    <div className="spacer"></div>
                    <h2>Invertir con nosotros es rápido, seguro y sencillo</h2>
                    <div className="spacer"></div>
                    <p>Con el objetivo de democratizar la inversión en el sector inmobiliario, hemos diseñado un método sencillo para la selección de inmueble ideal. Invertir nunca fue más sencillo.</p>
                    <button className="button" data-launchWizard="modal" >Comenzar registro</button>
                </div>
            </div>
            <div className="spacer double"></div>
            <SliderLogos/>
        
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
