import React, { Component } from 'react'
import currency from '../services/currency'
import {Link} from 'react-router'

/*props
investment: contiene toda la informacion de una inversion
property.image: link de la imagen
property.title: nombre de la propiedad
property.description: descripcion de la propiedad
amount: costo total de mi inversion
sharesNumber: numero de acciones compradas
property.dataSheet.totalShares: numero total de acciones que vende la propiedad*/
class InvestmentCard extends Component {
  render() {
    let investment = this.props.investment

    return (
      <div style={{overflow: 'hidden'}} className="list-group-item">
        <div className="media col-md-3">
          <figure className="pull-left">
            <img className="media-object img-rounded img-responsive" src={'http://inverspot.mx/is-img/'+ investment.property.image} alt="Propiedad" />
          </figure>
        </div>
        <div className="col-md-6">
          <h4 className="list-group-item-heading"> {investment.property.title} <br/><small><b> Descripción </b></small></h4>
          <p className="list-group-item-text"> {investment.property.description}
          </p>
        </div>
        <div className="col-md-3 text-center">
          <h2><small> Mi Inversión {currency(investment.amount)} </small></h2>
          <Link to={`/proyectos/${investment.property._id}/avance`}>
            <button type="button" className="btn btn-primary btn-lg btn-block">Avance de Obra</button>
          </Link>
          <div>
            <p> Mis Acciones {investment.sharesNumber} de {investment.property.dataSheet.totalShares} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default InvestmentCard;
