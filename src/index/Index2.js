import React, { Component } from 'react'
import { PropertyCard, FundCard } from './PropertyCard'
import { listProperty } from '../services/list'
import {Wizard} from './Wizard'
import {Link} from 'react-router'

//Funcion para listar las tarjetas de propiedad disponibles y fondeadas
/*props
element: nombre de la tarjeta PropertyCard(disponible) o FundCard(fondeada)
propertiesa: contiene un arreglo con 3 propiedades disponibles
propertiesf: contiene un arreglo con 3 propiedades fondeadas
onInvest: funcion que agrega las clases para mostrar o no el modal de inversion
property: contiene todos los datos de una propiedad especifica*/
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

export default class Index extends Component {
  //Constructor Inicializa las funciones y los estados
  /*states
  propertiesa: contiene un arreglo con 3 propiedades disponibles
  propertiesf: contiene un arreglo con 3 propiedades fondeadas*/
  constructor(props) {
    super(props)
    this.toggleWizard = this.toggleWizard.bind(this)
    this.state = {
      propertiesa: [],
      propertiesf: []
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

  /*componentDidMount funcion que se ejecuta antes de montar el componente que lista 3 propiedades disponibles que se colocan
  en el estado propertiesa y 3 propiedades fondeadas que se colocan en el estado de propertiesf*/
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
        <div className="carousel fade-carousel slide" data-ride="carousel" data-interval={6500} id="bs-carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#bs-carousel" data-slide-to={0} className="active" />
            <li data-target="#bs-carousel" data-slide-to={1} />
            <li data-target="#bs-carousel" data-slide-to={2} />
            <li data-target="#bs-carousel" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="item slides active">
              <div className="slide-1" />
              <div className="hero">
                <hgroup>
                  <h1>¡Participar desde $100,000 en<br />inmuebles es posible!</h1>
                  <h3 className="hidden-xs hidden-sm">Inverspot, la primera plataforma de crowdfunding inmobiliario que te permite participar a plazo o de contado en México</h3>
                  <div className="hidden-xs hidden-sm btn-promo col-xs-6 col-sm-6 col-md-6">
                    <Link to="proyectos">
                      <button style={{padding: '15px 20px', fontFamily: 'AvenirNext-Bold', display: 'inline-block'}}>Ver proyectos</button></Link>
                  </div>
                  <div className="btn-promo col-xs-12 col-sm-6 col-md-6">
                    <button style={{padding: '15px 20px', fontFamily: 'AvenirNext-Bold', display: 'inline-block'}} onClick={ () => this.props.stepSet(1) }>Registrate aquí</button>
                  </div>
                </hgroup>
              </div>
            </div>
            <div className="item slides">
              <div className="slide-2" />
              <div className="hero">
                <hgroup>
                  <h1>¡Participar desde $100,000 en<br />inmuebles es posible!</h1>
                  <h3 className="hidden-xs hidden-sm">Inverspot, la primera plataforma de crowdfunding inmobiliario que te permite participar a plazo o de contado en México</h3>
                  <div className="hidden-xs hidden-sm btn-promo col-xs-6 col-sm-6 col-md-6">
                    <Link to="proyectos">
                      <button style={{padding: '15px 20px', fontFamily: 'AvenirNext-Bold', display: 'inline-block'}}>Ver proyectos</button></Link>
                  </div>
                  <div className="btn-promo col-xs-12 col-sm-6 col-md-6">
                    <button style={{padding: '15px 20px', fontFamily: 'AvenirNext-Bold', display: 'inline-block'}} onClick={ () => this.props.stepSet(1) }>Registrate aquí</button>
                  </div>
                </hgroup>
              </div>
            </div>
            <div className="item slides">
              <div className="slide-3" />
              <div className="hero">
                <hgroup>
                  <h1>¡Participar desde $100,000 en<br />inmuebles es posible!</h1>
                  <h3 className="hidden-xs hidden-sm">Inverspot, la primera plataforma de crowdfunding inmobiliario que te permite participar a plazo o de contado en México</h3>
                  <div className="hidden-xs hidden-sm btn-promo col-xs-6 col-sm-6 col-md-6">
                    <Link to="proyectos">
                      <button style={{padding: '15px 20px', fontFamily: 'AvenirNext-Bold', display: 'inline-block'}}>Ver proyectos</button></Link>
                  </div>
                  <div className="btn-promo col-xs-12 col-sm-6 col-md-6">
                    <button style={{padding: '15px 20px', fontFamily: 'AvenirNext-Bold', display: 'inline-block'}} onClick={ () => this.props.stepSet(1) }>Registrate aquí</button>
                  </div>
                </hgroup>
              </div>
            </div>
            <div className="item slides">
              <div className="slide-4" />
              <div className="hero">
                <hgroup>
                  <h1>¡Participar desde $100,000 en<br />inmuebles es posible!</h1>
                  <h3 className="hidden-xs hidden-sm">Inverspot, la primera plataforma de crowdfunding inmobiliario que te permite participar a plazo o de contado en México</h3>
                  <div className="hidden-xs hidden-sm btn-promo col-xs-6 col-sm-6 col-md-6">
                    <Link to="proyectos">
                      <button style={{padding: '15px 20px', fontFamily: 'AvenirNext-Bold', display: 'inline-block'}}>Ver proyectos</button></Link>
                  </div>
                  <div className="btn-promo col-xs-12 col-sm-6 col-md-6">
                    <button style={{padding: '15px 20px', fontFamily: 'AvenirNext-Bold', display: 'inline-block'}} onClick={ () => this.props.stepSet(1) }>Registrate aquí</button>
                  </div>
                </hgroup>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/*Fichas de las Propiedades*/}
          <div className="row main-container propiedades">
            <div style={{height: "60px"}}/>
            <h1>
              <b>Proyectos para Participar &nbsp;&nbsp;&nbsp;&nbsp;</b>
              <button type="button" className="btn button"><Link to="proyectos" style={{color: 'white'}}>Ver Más</Link></button>
            </h1>
            <div style={{height: "80px"}}/>
            {/* INVERSPOT: Renderiza las últimas 3 propiedades disponibles */}
            <PropertyCards onInvest={ this.toggleWizard } propertiesa={ this.state.propertiesa } element='PropertyCard'/>
          </div>
          <div className="spacer double" />
          {/*Newsletter*/}
          <div className="row suscribe" style={{backgroundColor: '#4b118e'}}>
            <div className="spacer" />
            <h1 className="text-center">Newsletter</h1>
            <h2 className="text-center">Suscríbete</h2>
            <p className="text-center hidden-xs hidden-sm">Suscríbete para recibir e-mails con nuevos proyectos, noticias y mucho más</p>
            <form target="_blank" role="form" method="POST" action="http://formspree.io/mkt@inverspot.mx">
              <div className="form-group col-xs-12 col-sm-3 col-sm-offset-2" style={{marginTop: "-5px"}}>
                <input type="email" placeholder="Correo Electrónico" className="form-control caja" name="Newsletter"/>
              </div>
              <div className="form-group col-xs-12 col-sm-3" style={{marginTop: "5px"}} >
                <input type="phone" placeholder="Teléfono" className="form-control caja" name="Teléfono"/>
              </div>
              <div className="form-group col-xs-12 col-sm-2">
                <input className="btn button large-invertion bton" type="submit" defaultValue="Enviar"/>
              </div>
            </form>
          <div className="spacer double" />
          </div>
          {/*Fichas de las Propiedades Fondeadas*/}
          <div className="row main-container propiedades">
            <div style={{height: "60px"}}/>
            <h1><b>Proyectos Fondeados &nbsp;&nbsp;&nbsp;&nbsp;</b>
              <button type="button" className="btn button"><Link to="proyectos" style={{color: 'white'}}>Ver Más</Link></button> </h1>
            <div style={{height: "80px"}}/>
            <PropertyCards propertiesf={ this.state.propertiesf } element='FundCard'/>
          </div>
        </div>
        <div className="container">
          <div className="col-xs-12 col-sm-6 col-centered">
            <a href="http://sellspot.mx/" target="_blank">
              <div className="box-banner" style={{cursor: 'pointer'}}>
                <div>
                  <img src="style/images/sellspot.png" className="img-fluid" style={{float: 'left', width: 250}} alt="" />
                  <div className="col-xs-12">
                    <h2 style={{fontSize: 26, textAlign: 'left'}}>Promueve propiedades y gana<br />comisiones<br />Ir al sitio</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-centered">
            <a href="http://premiumspot.mx/" target="_blank">
              <div className="box-banner" style={{cursor: 'pointer'}}>
                <div>
                  <img src="style/images/premiumspot.png" className="img-responsive" style={{float: 'right', width: 370}} alt="" />
                  <div className="col-xs-12">
                    <h2 style={{fontSize: 26, textAlign: 'right'}}>Buscas inversiones superiores<br />a <b>$500,000</b><br />Ir al sitio</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="spacer" />
        {/*Suscribe*/}
        <div className="container">
          <div className="row jumbotron main-container registro-section">
            <div className="spacer" />
            <h2>Participar con nosotros es rápido, seguro y sencillo</h2>
            <div className="spacer" />
            <p>Con el objetivo de democratizar la participación en el sector inmobiliario, hemos diseñado un método sencillo para la selección del inmueble ideal. Participar nunca fue más sencillo.</p>
            <button className="button" onClick={ () => this.props.stepSet(1) }>Comenzar registro</button>
          </div>
        </div>
        <div  style={{height: "60px"}}/>
        {/*Slider ellos hablan*/}
        <div className="hidden-xs hidden-sm conteiner">
          <div className="row">
            <div className="col-xs-12 col-centered">
              <h1 className="text-center"><b>Ellos Hablan de Nosotros</b></h1>
              <div style={{height: "30px"}}/>
            </div>
          </div>
        </div>
        {/*slider ellos hablan*/}
        <div className="hidden-xs hidden-sm container">
          <div className="row">
            <div className="col-md-12">
              <div className="carousel slide media-carousel" id="media">
                <div className="carousel-inner">
                  <div className="item  active">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/ebu.gif" /></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/econo.gif" /></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/expa.gif" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/mun.gif" /></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/neo.gif" /></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/noti.gif" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/sinem.gif" /></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/tecno.gif" /></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/imag.gif" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <a data-slide="prev" href="#media" className="left carousel-control">‹</a>
                <a data-slide="next" href="#media" className="right carousel-control">›</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden-xs hidden-sm container">
          <div className="row">
            <div className="col-md-2 col-md-offset-5">
              <button type="button" className="btn button btn-lg btn-block">
                <Link to="ellos-hablan-de-nosotros" style={{color: 'white'}}>Ver Más</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="spacer double" />
      </div>
    )
  }
}
