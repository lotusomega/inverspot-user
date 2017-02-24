import React, {Component} from 'react'
import currency from '../services/currency'
import {Link, withRouter} from 'react-router'

function CardHeader(props) {
  let { title, address } = props, style = { fontSize: "12px", fontWeight: "400", color: "white" }
  return (
    <div className="row" style={{background: '#4B118E', marginBottom: '30px'}}>
        <div className="col-sm-4">
            <h3 className="t1">{title}</h3>
        </div>
        <div className="col-sm-8">
            <h5 className="t2">{address && address.suburb}</h5>
        </div>
    </div>
  )
}

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

function CardProgress(props) {
  let { current, max, multiplier } = props, progress = current * 100 / max
  return (
    <div className="row progress-bar-holder image-card">
      <div className="col-xs-6 left">
        <p style={{fontWeight: "bold", color:"#f00"}}>{currency(multiplier * current)}</p>
      </div>
      <div className="col-xs-6 right"><p style={{fontWeight: "bold", color:"#f00"}}>{currency(multiplier * max)}</p></div>
      <div className="col-xs-12 range-holder">
        <div className="range" style={{backgroundColor: "#4b118e", width: `${ progress }%`}}></div>
      </div>
      <div className="col-xs-12 range-txt">
        <p className="purple-text"><b>{max - current}</b> participaciones disponibles de <b>{max}</b></p>
      </div>
      <hr className="hr-card"/>
    </div>
  )
}

function Fact(props) {
  return (
    <div className="col-sm-4 col-centered col-max circle">
      <img src={props.icon} alt="Icono" className="iconlarge"/>
      <p className="tittle">{props.title.toUpperCase()}</p>
      <p className="subtittle">{props.text}</p>
    </div>

  )
}

function CardButton(props) {
  return (
    <div className="col-sm-6">
      {props.children}
      <h5 className={`subtitulo ${props.clas}`}><b>{props.text}</b></h5>
    </div>
  )
}

function CardFund (props){
  return(
    <div className="col-sm-12">
        <h5 className="text-center fondeado-title">Proyecto Fondeado</h5>
        <h3 className="text-center fondeado-subtitle">¡Contacta un asesor aquí!</h3>
    </div>
  )
}

function CardActions(props) {
  return (
    <div className="col-sm-12 form-inline text-center">
      <div className="spacer"></div>
      <Link to={`/projects/${ props.property._id }`} >
      <button type="button" className="btnn button btn-grande">
        <a style={{textDecoration: 'none', color: '#fff'}} >Resumen del Proyecto</a>
      </button>&nbsp;
    </Link>

    <Link to={`/projects/${ props.property._id }`} >
      <button type="button" className="btnn button btn-grande">
        <a style={{textDecoration: 'none', color: '#fff'}} >Estudio de Mercado</a>
      </button>&nbsp;
    </Link>

    <Link to={`/projects/${ props.property._id }`} >
      <button type="button" className="btnn button btn-grande">
        <a style={{textDecoration: 'none', color: '#fff'}} >Acerca del Desarrollador</a>
      </button>&nbsp;
    </Link>

    <Link to={`/projects/${ props.property._id }`} >
      <button type="button" className="btnn button btn-grande">
        <a style={{textDecoration: 'none', color: '#fff'}} >Avance de Obra</a>
      </button>&nbsp;
    </Link>

      <div className="spacer"></div>
    </div>
  )
}

class PropertyCardBig1 extends Component  {
  render() {
    let property = this.props.property, address = property.address
    let facts = [
      {
        title: 'Monto a Invertir',
        icon: 'style/images/bill.png',
        text: currency(property.dataSheet && property.dataSheet.investAmount)
      },
      {
        title: 'Plazo Estimado',
        icon: 'style/images/calendar.png',
        text: property.marketResearch && property.marketResearch.estimatedTime + ' MESES'
      },
      {
        title: 'Rendimiento Estimado',
        icon: 'style/images/graphy.png',
        text: property.marketResearch && property.marketResearch.yieldInTime + ' %'
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
              current={property.dataSheet && property.dataSheet.sharesSold}
              max={property.dataSheet && property.dataSheet.totalShares}
              multiplier={ property.dataSheet && property.dataSheet.investAmount } />
            </div>
            <div className="col-sm-8 card-large">
              { facts.map( f => <Fact key={f.title} title={f.title} icon={f.icon} text={f.text} /> ) }
              <div className="spacer"></div>
              <CardButton text="¡Contacta un asesor aquí!" clas="subtitulo">
                <button className="button large-invertion" onClick={ () => this.props.onInvest(property) }>Aparta tu lugar aquí</button>
              </CardButton>
              <CardButton text="Para que puedas invertir en este proyecto" clas="counter2">
                <h5 className="text-center counter"><b>Quedan</b></h5>
                <button id="demo1" className="button large-counter"></button>
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
