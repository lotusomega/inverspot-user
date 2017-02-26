import React from 'react'
import {Link} from 'react-router'
import currency from '../services/currency'

function CardHeader(props) {
  let { title, address } = props, style = { fontSize: "12px", fontWeight: "400", color: "white" }
  return (
    <div className="row header-holder head-card">
        <div className="col-xs-12 col-sm-4 col-md-4 left margin-head">
            <h1>{title}</h1>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-8 right margin-head">
            <p style={style}>{address.street + ' ' + address.number}</p>
            <p style={style}>{address.suburb}</p>
        </div>
    </div>
  )
}

function CardPromo(props) {
  const stylepc1 = {
    marginTop: '-20px'
  }
  const stylepc2 = {
    marginTop: '14px', textTransform: 'none'
  }
  return (
    <div className="row header-holder" style={stylepc1}>
      <div className="col-xs-12 col-sm-12 col-md-12 investment-holder ">
        <p className="p-promo" style={stylepc2}>{ props.children }</p>
      </div>
    </div>
  )
}

function CardMedia(props) {
  return (
    <figure className="main-card-image">
        <img alt={props.src} src={props.src}/>
        {props.children}
    </figure>
  )
}

function CardProgress(props) {
  let { current, max, multiplier } = props, progress = current * 100 / max
  return (
    <div className="row progress-bar-holder">
      <div className="col-xs-6 col-sm-6 col-md-6 left">
        <p style={{fontWeight: "bold", color:"#f00"}}>{currency(multiplier * current)}</p>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 right"><p style={{fontWeight: "bold", color:"#f00"}}>{currency(multiplier * max)}</p></div>
      <div className="col-xs-12 col-sm-12 col-md-12 range-holder">
        <div className="range" style={{backgroundColor: progress < 100 ? "#f26438" : "#00cc99", width: `${ progress }%`}}></div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 range-txt">
        <p style={{color: '#f00'}}><span style={{color: '#f00'}}>{max - current}</span> Acciones disponibles de <span style={{color: '#f00'}}>{max}</span></p>
      </div>
      <hr className="hr-card"/>
    </div>
  )
}

function Fact(props) {
  return (
    <div className="col col-xs-4 col-sm-4 col-md-4">
      <p className="tit">{props.title.toUpperCase()}</p>
      <div className={`icon ${props.icon}`}></div>
      <p>{props.text}</p>
    </div>
  )
}

function CardFacts(props) {
  return (
    <div className="info-cols-holder ">
      { props.facts.map( f => <Fact key={f.title} title={f.title} icon={f.icon} text={f.text} /> ) }
    </div>
  )
}

function CardActions(props) {
  return (
    <div className="row btns-holder">
      {props.children}
    </div>
  )
}

function Card(props) {
  return (
    <div className="col-v col-xs-12 col-sm-4 col-md-4">
      <div className="card-v fondeada">
        {props.children}
      </div>
    </div>
  )
}

function PropertyCard (props) {
  let property = props.property, address = property.address
  let facts = [
    {
      title: 'Monto a Invertir',
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
        Invierte desde <span>{currency(property.dataSheet.investAmount)}</span> pesos
      </CardPromo>
      <CardMedia src={'http://192.169.174.96/is-img/'+ property.image} />
      <CardProgress
        current={property.dataSheet.sharesSold}
        max={property.dataSheet.totalShares}
        multiplier={ property.dataSheet.investAmount } />
      <CardFacts facts={facts} />
      <CardActions>
        <Link to={`/projects/${ property._id }/description`} >
          <button className="button btn-v-card left">Ver Más</button>
        </Link>
        <button className="button btn-v-card right" onClick={ () => props.onInvest(property) }>Invertir</button>
      </CardActions>
    </Card>
  )
}

function FundCard (props) {
  let property = props.property, address = property.address
  let facts = [
    {
      title: 'Monto a Invertir',
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
        <Link to={`/projects/${ props.property._id }/description`} >
          <button className="button btn-v-card left">Detalles de la Propiedad</button>
        </Link>
      </div>
    </Card>
  )
}


export { PropertyCard, FundCard }
