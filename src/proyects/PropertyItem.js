import React, {Component} from 'react'
import currency from '../services/currency'
import {Link, withRouter} from 'react-router'
import Countdown2 from '../components/Countdown2'
import moment from 'moment'

function Spacer(props) {
  return (
    <div className="spacer"></div>
  )
}

//funcion Card: contiene el estilo del contenedor de la tarjeta
function Card(props) {
  return (
    <div className="row bordered">
      {props.children}
    </div>
  )
}

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

//funcion del estilo del cuerpo de la tarjeta
function CardBody(props) {
  return (
    <div className="col-sm-12">
      {props.children}
    </div>
  )
}

function CardLeft(props) {
  return (
    <div className="col-sm-4">
      {props.children}
    </div>
  )
}
//funcion CardMedia: contiene el estilo de la imagen de la propiedad
/*props
src: link de la imagen*/
function CardMedia(props) {
  return (
    <div className="card-v">
      {/* <div className="main-card-image" style={{width: "100%"}}> */}
      <div className="main-card-image">
        <a>
          <img src={props.src} alt="Propiedad"/>
          { props.fund &&
            <div className="fondeada-layer" style={{display: 'block'}}>
              <p>PROYECTO<br/>FONDEADO</p>
            </div>
          }
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
        <p><b>{currency(multiplier * current)}</b></p>
      </div>
      <div className="col-xs-6 right">
        <p><b>{currency(multiplier * max)}</b></p>
      </div>
      <div className="col-xs-12 range-holder">
        <div className="range" style={{backgroundColor: progress < 100 ? "#FF3C00" : "#00cc99", width: `${ progress }%`}}></div>
      </div>
      <div className="col-xs-12 range-txt">
        <p className="purple-text">Quedan <b>{max - current}</b> participaciones de <b>{max}</b></p>
      </div>
    </div>
  )
}

function CardRight(props) {
  return (
    <div className="col-sm-8 card-large">
      {props.children}
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
    <div className="col-xs-4 col-sm-4 col-centered circle">
      <img src={props.icon} alt="Icono" className="iconlarge"/>
      <p className="tittle">{props.title.toUpperCase()}</p>
      <p className="subtittle">{props.text}</p>
    </div>
  )
}

function CardCTA(props) {
  return (
    <div className="col-sm-6">
      <button onClick={props.onPress} className="button large-invertion">
        {props.cta}
      </button>
      <h5 className="subtitulo text-center">
        <b><a href="http://192.169.174.96/#/contacto">{props.support}</a></b>
      </h5>
    </div>
  )
}

//funcion CardCountdown: contiene el estilo del boton con la cuenta regresiva
function CardCountdown(props) {
  return (
    <div className="col-sm-6">
      <h5 className="text-center counter">
        <b>Quedan</b>
      </h5>
      <Countdown2 duration={props.remain} />
      <h5 className="text-center counter2">
        <b>para que puedas participar en este proyecto</b>
      </h5>
    </div>
  )
}

function CardHero (props){
  return(
    <div className="col-sm-12">
      <h5 className="text-center fondeado-title">Proyecto Fondeado</h5>
      <h3 className="text-center fondeado-subtitle">
      <a href="http://192.169.174.96/#/contacto">¡Contacta un asesor aquí!</a></h3>
    </div>
  )
}

function CardActionButton(props) {
  return (
    <Link to={`/proyectos/${ props.id }/${props.to}`} >
      <button type="button" className="btnn button btn-grande">
        <span style={{textDecoration: 'none', color: '#fff'}} >{props.text}</span>
      </button>&nbsp;
    </Link>
  )
}

//funcion CardActions: contiene el estilo para los botones que detallan la propiedad (resumen, estudio de mercado, desarrollador, avance de obra )
/*props
property._id: identificador de la propiedad a consultar*/
function CardActions(props) {
  let {property} = props
  return (
    <div className="col-sm-12 form-inline text-center">
      <Spacer />

      <div className="col-xs-12 col-sm-3" style={{paddingLeft: "2px", paddingRight: "2px", marginBottom: "-5px"}}>
      <CardActionButton id={property._id}
        to="ficha" text="Resumen del Proyecto" />
      </div>

      <div className="col-xs-12 col-sm-3" style={{paddingLeft: "2px", paddingRight: "2px", marginBottom: "-5px"}}>
      <CardActionButton id={property._id}
        to="estudio-de-mercado" text="Estudio de Mercado" />
      </div>

      <div className="col-xs-12 col-sm-3" style={{paddingLeft: "2px", paddingRight: "2px", marginBottom: "-5px"}}>
      <CardActionButton id={property._id}
        to="desarrollador" text="Acerca del Desarrollador" />
      </div>

      <div className="col-xs-12 col-sm-3" style={{paddingLeft: "2px", paddingRight: "2px"}}>
      <CardActionButton id={property._id}
        to="avance" text="Avance de Obra" />
      </div>

      <Spacer />
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
    let remain = moment(property.createdAt).add(30, 'days').diff(moment()) / 1000
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
      <Card>
        <CardHeader title={property.title} address={address} />
        <CardBody>
          <CardLeft>
            <CardMedia src={'http://192.169.174.96/is-img/'+ property.image} />
            <CardProgress
              current={property.dataSheet.sharesSold}
              max={property.dataSheet.totalShares}
              multiplier={ property.dataSheet.investAmount } />
          </CardLeft>
          <CardRight>
            { facts.map( f => <Fact key={f.title} title={f.title} icon={f.icon} text={f.text} /> ) }
            <Spacer />
            <CardCTA cta="Aparta tu lugar aquí" support="¡Contacta un asesor aquí!" onPress={ () => this.props.onInvest(property) } />
            <CardCountdown remain={remain} />
            <CardActions property={property}/>
          </CardRight>
        </CardBody>
      </Card>
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
      <Card>
        <CardHeader title={property.title} address={address} />
        <CardBody>
          <CardLeft>
            <CardMedia src={'http://192.169.174.96/is-img/'+ property.image} fund={true} />
            <CardProgress
              current={property.dataSheet.sharesSold}
              max={property.dataSheet.totalShares}
              multiplier={ property.dataSheet.investAmount } />
          </CardLeft>
          <CardRight>
            { facts.map( f => <Fact key={f.title} title={f.title} icon={f.icon} text={f.text} /> ) }
            <Spacer />
            <CardHero />
            <CardActions property={property}/>
          </CardRight>
        </CardBody>
      </Card>
    )
  }
}

let PropertyCardBig =  withRouter(PropertyCardBig1)
let FundCardBig = withRouter(FundCardBig1)

export { PropertyCardBig, FundCardBig }
