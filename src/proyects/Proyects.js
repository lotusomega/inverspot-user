import React, { Component } from 'react';
import {PropertyCardBig, FundCardBig} from './PropertyItem'
import { listProperty } from '../services/list'
import {Wizard} from '../index/Wizard'

//Funcion para listar las tarjetas de propiedad disponibles y fondeadas
/*props
element: nombre de la tarjeta PropertyCardBig(disponible) o FundCardBig(fondeada)
propertiesa: contiene un arreglo con todas las propiedades disponibles
propertiesf: contiene un arreglo con todas las propiedades fondeadas
onInvest: funcion que agrega las clases para mostrar o no el modal de inversion
property: contiene todos los datos de una propiedad especifica*/
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
  //Constructor Inicializa las funciones y los estados
  /*states
  propertiesa: contiene un arreglo con todas las propiedades disponibles
  propertiesf: contiene un arreglo con todas las propiedades fondeadas*/
  constructor(props) {
    super(props)
    this.toggleWizard = this.toggleWizard.bind(this)
    this.state = {
      propertiesa: [],
      propertiesf: []
    }
  }
  /*componentDidMount funcion que se ejecuta antes de montar el componente que lista todas las propiedades disponibles que se colocan
  en el estado propertiesa y todas las propiedades fondeadas que se colocan en el estado de propertiesf*/
  componentDidMount() {
    listProperty({status: 'available'}, {sort:'title'}, 'title address image dataSheet marketResearch createdAt')
      .then( propertiesa => this.setState({ propertiesa }) )
      .catch( e => alert(e) )
    listProperty({status: 'fund'}, {sort:'title'}, 'title address image dataSheet marketResearch createdAt')
      .then( propertiesf => this.setState({ propertiesf }) )
      .catch( e => alert(e) )
  }
  //toggleWizard: agrega las clases necesarias para abrir el modal de inversion hecho en bootstrap y coloca el estado show(mostrar) en verdadero o falso
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
          {/* Renderiza las propiedades disponibles */}
          <PropertyCards  onInvest={ this.toggleWizard } propertiesa={ this.state.propertiesa } element='PropertyCardBig'/>
          <div className="spacer double"></div>
          <h1 className="text-center"><b>Proyectos Fondeados</b></h1>
          <div className="spacer double"></div>
          {/* Renderiza las propiedades fondeadas */}
          <PropertyCards  propertiesf={ this.state.propertiesf } element='FundCardBig'/>
        </div>
        <div className="spacer double"></div>
      </div>
    );
  }
}

export default Proyects;
