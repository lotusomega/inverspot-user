import React, { Component } from 'react'
import currency from '../services/currency'

class InvestmentCard extends Component {
  render() {
    let investment = this.props.investment

    return (
      <a href="#" className="list-group-item">
        <div className="media col-md-3">
          <figure className="pull-left">
            <img className="media-object img-rounded img-responsive" src={'http://192.169.174.96/is-img/'+ investment.property.image} alt="Propiedad" />
          </figure>
        </div>
        <div className="col-md-6">
          <h4 className="list-group-item-heading"> {investment.property.title} <br/><small><b> Descripción </b></small></h4>
          <p className="list-group-item-text"> {investment.property.description}
          </p>
        </div>
        <div className="col-md-3 text-center">
            <h2><small> Mi Inversión {currency(investment.amount)} </small></h2>
            <button type="button" className="btn btn-primary btn-lg btn-block">Avance de Obra</button>
            <div>
                <p> Mis Acciones {investment.sharesNumber} de {investment.property.dataSheet.totalShares} </p>
            </div>
        </div>
      </a>
    )
  }
}

export default InvestmentCard;
