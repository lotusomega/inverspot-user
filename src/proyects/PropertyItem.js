import React, {Component} from 'react'
import currency from '../services/currency'
import {Link, withRouter} from 'react-router'
import Countdown from '../components/Countdown'
import moment from 'moment'

function Spacer(props) {
  return (
    <div className="spacer"></div>
  )
}

function Card(props) {
  return (
    <div className="row bordered">
      {props.children}
    </div>
  )
}

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

function CardMedia(props) {
  return (
    <div className="card-v">
      {/* <div className="main-card-image" style={{width: "100%"}}> */}
      <div className="main-card-image">
        <a href="#">
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
        <div className="range" style={{backgroundColor: progress < 100 ? "#f26438" : "#00cc99", width: `${ progress }%`}}></div>
      </div>
      <div className="col-xs-12 range-txt">
        <p className="purple-text"><b>{max - current}</b> participaciones disponibles de <b>{max}</b></p>
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

function Fact(props) {
  return (
    <div className="col-sm-4 col-centered col-max circle">
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
        <b>{props.support}</b>
      </h5>
    </div>
  )
}

function CardCountdown(props) {
  return (
    <div className="col-sm-6">
      <h5 className="text-center counter">
        <b>Quedan</b>
      </h5>
      <Countdown initialTimeRemaining={props.remain} />
      <h5 className="text-center counter2">
        <b>Para que puedas participar en este proyecto</b>
      </h5>
    </div>
  )
}

function CardHero (props){
  return(
    <div className="col-sm-12">
      <h5 className="text-center fondeado-title">Proyecto Fondeado</h5>
      <h3 className="text-center fondeado-subtitle">¡Contacta un asesor aquí!</h3>
    </div>
  )
}

function CardActionButton(props) {
  return (
    <Link to={`/projects/${ props.id }/${props.to}`} >
      <button type="button" className="btnn button btn-grande">
        <span style={{textDecoration: 'none', color: '#fff'}} >{props.text}</span>
      </button>&nbsp;
    </Link>
  )
}

function CardActions(props) {
  let {property} = props
  return (
    <div className="col-sm-12 form-inline text-center">
      <Spacer />
      <CardActionButton id={property._id}
        to="description" text="Resumen del Proyecto" />
      <CardActionButton id={property._id}
        to="market-research" text="Estudio de Mercado" />
      <CardActionButton id={property._id}
        to="builder" text="Acerca del Desarrollador" />
      <CardActionButton id={property._id}
        to="work-progress" text="Avance de Obra" />
      <Spacer />
    </div>
  )
}

class PropertyCardBig1 extends Component  {
  render() {
    let property = this.props.property, address = property.address
    // let remain = moment(property.createdAt).add(30, 'days').diff(moment())
    let remain = moment(property.createdAt).diff(moment())
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
