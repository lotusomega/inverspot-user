import React from 'react'
import {Link, withRouter} from 'react-router'
import currency from '../services/currency'

//funcion CardHeader: contiene el estilo de la cabecera de la tarjeta
/*props
addres.street: nombre de la calle donde se ubica la propiedad
address.number: numero de la propiedad
address.suburb: colonia donde se ubica la propiedad*/
function CardHeader(props) {
  let { title, address } = props
  return (
    <div className="row header-holder head-card">
      <div className="col-xs-12 col-sm-4 col-md-4 left margin-head">
        <h1 style={{color: 'white', fontWeight: 900}}>{title}</h1>
      </div>
      <div className="col-xs-12 col-sm-8 col-md-8 right margin-head">
        <p style={{fontSize: 12, fontWeight: 400, color: 'white'}}>{address.street + ' ' + address.number}</p>
        <p style={{fontSize: 12, fontWeight: 400, color: 'white'}}>{address.suburb}</p>
      </div>
    </div>
  )
}

//funcion CardPromo: contiene el estilo del subtitulo de la tarjeta
function CardPromo(props) {
  return (
    <div className="row header-holder" style={{marginTop: '-20px'}}>
      <div className="col-xs-12 col-sm-12 col-md-12 investment-holder ">
        <p className="p-promo" style={{marginTop: 14, textTransform: 'none'}}>{ props.children }</p>
      </div>
    </div>
  )
}

//funcion CardMedia: contiene el estilo de la imagen de la propiedad
/*props
src: limk de la imagen*/
function CardMedia(props) {
  return (
    <figure className="main-card-image">
      <img alt={props.src} src={props.src}/>
      {props.children}
    </figure>
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
    <div className="row progress-bar-holder">
      <div className="col-xs-6 col-sm-6 col-md-6 left">
        <p style={{fontWeight: "bold", color:"#f00"}}>{currency(multiplier * current)}</p>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 right"><p style={{fontWeight: "bold", color:"#f00"}}>{currency(multiplier * max)}</p></div>
      <div className="col-xs-12 col-sm-12 col-md-12 range-holder">
        <div className="range" style={{backgroundColor: progress < 100 ? "#FF3C00" : "#00cc99", width: `${ progress }%`}}></div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 range-txt">
        <p style={{color: '#f00'}}>Quedan <span style={{color: '#f00'}}>{max - current}</span> participaciones de <span style={{color: '#f00'}}>{max}</span></p>
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
    <div className="col col-xs-4 col-sm-4 col-md-4">
      <p className="tit">{props.title.toUpperCase()}</p>
      <div className={`icon ${props.icon}`}></div>
      <p>{props.text}</p>
    </div>
  )
}

//funcion CardFacts: para mostar todos los componentes de monto a participar, plazo estimado y rendimiento estimado
function CardFacts(props) {
  return (
    <div className="info-cols-holder ">
      { props.facts.map( f => <Fact key={f.title} title={f.title} icon={f.icon} text={f.text} /> ) }
    </div>
  )
}

//funcion CardActions: estructura de seccion de botones en la tarjeta
function CardActions(props) {
  return (
    <div className="row btns-holder">
      {props.children}
    </div>
  )
}

//funcion Card: estructura de la tarjeta
function Card(props) {
  return (
    <div className="col-v col-xs-12 col-sm-4 col-md-4" style={{marginBottom: "20px"}}>
      <div className="card-v fondeada">
        {props.children}
      </div>
    </div>
  )
}

//funcion PropertyCard: tarjeta de propiedad disponible para invertir
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
function PropertyCard (props) {
  let property = props.property, address = property.address
  let facts = [
    {
      title: 'Monto para participar',
      icon: 'icon-bill',
      text: currency(property.dataSheet.investAmount)
    },
    {
      title: 'Plazo Estimado',
      icon: 'icon-calendar',
      text: property.marketResearch.estimatedTime + ' MESES'
    },
    {
      title: 'Rendimiento Estimado',
      icon: 'icon-coins',
      text: property.marketResearch.yieldInTime + ' %'
    }
  ]
  return (
    <Card>
      <CardHeader title={property.title} address={address} />
      <CardPromo>
        Participa desde <span>{currency(property.dataSheet.investAmount)}</span> pesos
      </CardPromo>
      <Link to={`/proyectos/${ property._id }/ficha`} >
      <CardMedia src={'http://192.169.174.96/is-img/'+ property.image} />
      </Link>


      <CardProgress
        current={property.dataSheet.sharesSold}
        max={property.dataSheet.totalShares}
        multiplier={ property.dataSheet.investAmount } />
      <CardFacts facts={facts} />
      <CardActions>
        <Link to={`/proyectos/${ property._id }/ficha`} >
          <button className="button btn-v-card left">Ver más</button>
        </Link>
        <button className="button btn-v-card right" onClick={ () => props.onInvest(property) }>Participar</button>
      </CardActions>
    </Card>
  )
}

//funcion FundCard: tarjeta de propiedad fondeada
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
function FundCard (props) {
  let property = props.property, address = property.address
  let facts = [
    {
      title: 'Monto para participar',
      icon: 'icon-bill',
      text: currency(property.dataSheet.investAmount)
    },
    {
      title: 'Plazo Estimado',
      icon: 'icon-calendar',
      text: property.marketResearch.estimatedTime + ' MESES'
    },
    {
      title: 'Rendimiento Estimado',
      icon: 'icon-coins',
      text: property.marketResearch.yieldInTime + ' %'
    }
  ]

  return (
    <Card>
      <CardHeader title={property.title} address={address} />
      <CardMedia src={'http://192.169.174.96/is-img/' + property.image}>
        <div className="fondeada-layer">
          <p>PROYECTO<br/>FONDEADO</p>
        </div>
      </CardMedia>
      <CardProgress
        current={property.dataSheet.sharesSold}
        max={property.dataSheet.totalShares}
        multiplier={ property.dataSheet.investAmount } />
      <CardFacts facts={facts} />
      <div className="row btns-alone btns-holder">
        <Link to={`/proyectos/${ props.property._id }/ficha`} >
          <button className="button btn-v-card left">Detalles de la Propiedad</button>
        </Link>
      </div>
    </Card>
  )
}


export { PropertyCard, FundCard }
