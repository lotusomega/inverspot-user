import React, {Component} from 'react'
import currency from '../services/currency'
import {Link, withRouter} from 'react-router'
import Countdown from '../components/Countdown'
import moment from 'moment'

//funcion CardHeader: contiene el estilo de la cabecera de la tarjeta
/*props
address.suburb: colonia donde se ubica la propiedad*/
function CardHeader(props) {
  let { title, address } = props
  return (
    <div className="row" style={{background: '#4B118E', marginBottom: '30px'}}>
      <div className="col-sm-4">
        <h3 className="t1">{title}</h3>
      </div>
      <div className="col-sm-8">
        <h5 className="t2">{address.suburb}</h5>
      </div>
    </div>
  )
}

//funcion CardMedia: contiene el estilo de la imagen de la propiedad
/*props
src: limk de la imagen*/
function CardMedia(props) {
  return (
    <div className="card-v">
      <div className="main-card-image" style={{width: "100%"}}>
        <a href="#">
          <img src={props.src} alt="Propiedad"/>
          {props.children}
        </a>
      </div>
    </div>
  )
}

//funcion CardProgress: contiene el estilo del progreso de la barra de inversion
/*props
current: acciones vendidas
max: total de acciones que posee la propiedad
multiplier: costo individual por accion
progress: calculo del progreso de la barra multiplicando el numero de acciones vendidas por 100 entre el numero total de acciones de la propiedad*/
function CardProgress(props) {
  let { current, max, multiplier } = props, progress = current * 100 / max
  return (
    <div className="row progress-bar-holder image-card">
      <div className="col-xs-6 left">
        <p style={{fontWeight: "bold", color:"#f00"}}>{currency(multiplier * current)}</p>
      </div>
      <div className="col-xs-6 right"><p style={{fontWeight: "bold", color:"#f00"}}>{currency(multiplier * max)}</p></div>
      <div className="col-xs-12 range-holder">
        <div className="range" style={{backgroundColor: progress < 100 ? "#f26438" : "#00cc99", width: `${ progress }%`}}></div>
      </div>
      <div className="col-xs-12 range-txt">
        <p className="purple-text"><b>{max - current}</b> participaciones disponibles de <b>{max}</b></p>
      </div>
      <hr className="hr-card"/>
    </div>
  )
}

//funcion Fact: contiene el estilo de monto a participar, plazo estimado y rendimiento estimado
/*props
title: titulo del componente
icon: nombre del icono del componente
text: texto del componente*/
function Fact(props) {
  return (
    <div className="col-sm-4 col-centered col-max circle">
      <img src={props.icon} alt="Icono" className="iconlarge"/>
      <p className="tittle">{props.title.toUpperCase()}</p>
      <p className="subtittle">{props.text}</p>
    </div>

  )
}

//funcion CardButton: contiene el estilo del boton para invertir
/*props
clas: nombre de la clase de estilo del boton
text: nombre del boton */
function CardButton(props) {
  return (
    <div className="col-sm-6">
      {props.children}
      <h5 className={`subtitulo ${props.clas}`}><b>{props.text}</b></h5>
    </div>
  )
}

//funcion CardFund: contiene el estilo para las tarjetas fondeadas
function CardFund (props){
  return(
    <div className="col-sm-12">
      <h5 className="text-center fondeado-title">Proyecto Fondeado</h5>
      <h3 className="text-center fondeado-subtitle">¡Contacta un asesor aquí!</h3>
    </div>
  )
}

//funcion CardActions: contiene el estilo para los botones que detallan la propiedad (resumen, estudio de mercado, desarrollador, avance de obra )
/*props
property._id: identificador de la propiedad a consultar*/
function CardActions(props) {
  return (
    <div className="col-sm-12 form-inline text-center">
      <div className="spacer"></div>
      <Link to={`/proyectos/${ props.property._id }/ficha`} >
        <button type="button" className="btnn button btn-grande">
          <span style={{textDecoration: 'none', color: '#fff'}} >Resumen del Proyecto</span>
        </button>&nbsp;
      </Link>

      <Link to={`/proyectos/${ props.property._id }/estudio-de-mercado`} >
        <button type="button" className="btnn button btn-grande">
          <span style={{textDecoration: 'none', color: '#fff'}} >Estudio de Mercado</span>
        </button>&nbsp;
      </Link>

      <Link to={`/proyectos/${ props.property._id }/desarrollador`} >
        <button type="button" className="btnn button btn-grande">
          <span style={{textDecoration: 'none', color: '#fff'}} >Acerca del Desarrollador</span>
        </button>&nbsp;
      </Link>

      <Link to={`/proyectos/${ props.property._id }/avance`} >
        <button type="button" className="btnn button btn-grande">
          <span style={{textDecoration: 'none', color: '#fff'}} >Avance de Obra</span>
        </button>&nbsp;
      </Link>

      <div className="spacer"></div>
    </div>
  )
}

//funcion PropertyCardBig1: tarjeta de propiedad disponible para invertir
/*props
property.dataSheet.investAmount: costo de una accion
remain: tiempo de la propiedad disponible para invertir
property.marketResearch.estimatedTime: tiempo estimado en meses
property.marketResearch.yieldInTime: porcentaje del rendimiento estimado
property.title: nombre de la propiedad
property.image: link de la imagen de la propiedad
property.address: direccion de la propiedad
property.dataSheet.sharesSold: numero de acciones vendidas por la propiedad
property.dataSheet.totalShares: numero de acciones con las que cuenta la propiedad
property.dataSheet.investAmount: costo por accion
property._id: identificador de la propiedad*/
class PropertyCardBig1 extends Component  {
  render() {
    let property = this.props.property, address = property.address
    let remain = moment(property.createdAt).add(30, 'days').diff(moment())
    console.log(remain);
    let facts = [
      {
        title: 'Monto a Invertir',
        icon: 'style/images/bill.png',
        text: currency(property.dataSheet.investAmount)
      },
      {
        title: 'Plazo Estimado',
        icon: 'style/images/calendar.png',
        text: property.marketResearch.estimatedTime + ' MESES'
      },
      {
        title: 'Rendimiento Estimado',
        icon: 'style/images/graphy.png',
        text: property.marketResearch.yieldInTime + ' %'
      }
    ]
    return (
      <div>
        <div className="row bordered">
          <CardHeader title={property.title} address={address} />
          <div className="col-sm-12">
            <div className="col-sm-4">
              <CardMedia src={'http://192.169.174.96/is-img/'+ property.image} />
              <CardProgress
                current={property.dataSheet.sharesSold}
                max={property.dataSheet.totalShares}
                multiplier={ property.dataSheet.investAmount } />
            </div>
            <div className="col-sm-8 card-large">
              {/* Renderiza los 3 componentes de monto a participar, plazo estimado y rendimiento estimado */}
              { facts.map( f => <Fact key={f.title} title={f.title} icon={f.icon} text={f.text} /> ) }
              <div className="spacer"></div>
              <CardButton text="¡Contacta un asesor aquí!" clas="subtitulo">
                <button className="button large-invertion" onClick={ () => this.props.onInvest(property) }>Aparta tu lugar aquí</button>
              </CardButton>
              <CardButton text="Para que puedas invertir en este proyecto" clas="counter2">
                <h5 className="text-center counter"><b>Quedan</b></h5>
                <Countdown initialTimeRemaining={ remain } />
                {/* <Countdown initialTimeRemaining={ 2471520399 } /> */}
              </CardButton>
              <CardActions property={property}/>
            </div>
          </div>
        </div>
        <div className="spacer double"></div>
      </div>
    )
  }
}

//funcion FundCardBig1: tarjeta de propiedad fondeada
/*props
property.dataSheet.investAmount: costo de una accion
property.marketResearch.estimatedTime: tiempo estimado en meses
property.marketResearch.yieldInTime: porcentaje del rendimiento estimado
property.title: nombre de la propiedad
property.image: link de la imagen de la propiedad
property.address: direccion de la propiedad
property.dataSheet.sharesSold: numero de acciones vendidas por la propiedad
property.dataSheet.totalShares: numero de acciones con las que cuenta la propiedad
property.dataSheet.investAmount: costo por accion
property._id: identificador de la propiedad*/
class FundCardBig1 extends Component  {
  render(){
    let property = this.props.property, address = property.address
    let facts = [
      {
        title: 'Monto a Invertir',
        icon: 'style/images/bill.png',
        text: currency(property.dataSheet.investAmount)
      },
      {
        title: 'Plazo Estimado',
        icon: 'style/images/calendar.png',
        text: property.marketResearch.estimatedTime + ' MESES'
      },
      {
        title: 'Rendimiento Estimado',
        icon: 'style/images/graphy.png',
        text: property.marketResearch.yieldInTime + ' %'
      }
    ]
    return (
      <div>
        <div className="row bordered">
          <CardHeader title={property.title} address={address} />
          <div className="col-sm-12">
            <div className="col-sm-4">
              <CardMedia src={'http://192.169.174.96/is-img/' + property.image}>
                <div className="fondeada-layer" style={{display: 'block'}}>
                  <p>PROYECTO<br/>FONDEADO</p>
                </div>
              </CardMedia>
              <CardProgress
              current={property.dataSheet.sharesSold}
              max={property.dataSheet.totalShares}
              multiplier={ property.dataSheet.investAmount } />
            </div>
            <div className="col-sm-8 card-large">
              {/* Renderiza los 3 componentes de monto a participar, plazo estimado y rendimiento estimado */}
              { facts.map( f => <Fact key={f.title} title={f.title} icon={f.icon} text={f.text} /> ) }
              <div className="spacer"></div>
              <CardFund />
              <CardActions property={property}/>
            </div>
          </div>
        </div>
        <div className="spacer double"></div>
      </div>
    )
  }
}

let PropertyCardBig =  withRouter(PropertyCardBig1)
let FundCardBig = withRouter(FundCardBig1)

export { PropertyCardBig, FundCardBig }
