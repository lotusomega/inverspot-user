import React, { Component } from 'react'

class InvestmentCard extends Component {
  render() {

    return (
      <a href="#" className="list-group-item">
        <div className="media col-md-3">
          <figure className="pull-left">
            <img className="media-object img-rounded img-responsive" src="http://placehold.it/350x250" alt="placehold.it/350x250" />
          </figure>
        </div>
        <div className="col-md-6">
          <h4 className="list-group-item-heading"> COL DOCTORES <br/><small><b> Proyecto de departamento </b></small></h4>
          <p className="list-group-item-text"> Eu eum corpora torquatos, ne postea constituto mea, quo tale lorem facer no. Ut sed odio appetere partiendo, quo meliore salutandi ex. Vix an sanctus vivendo, sed vocibus accumsan petentium ea.
              Sed integre saperet at, no nec debet erant, quo dico incorrupte comprehensam ut. Et minimum consulatu ius, an dolores iracundia est, oportere vituperata interpretaris sea an. Sed id error quando indoctum, mel suas saperet at.
          </p>
        </div>
        <div className="col-md-3 text-center">
            <h2><small> Mi Inversión  $100,000.00 </small></h2>
            <button type="button" className="btn btn-primary btn-lg btn-block">Avance de Obra</button>
            <div>
                <p> Mis Acciones 10 de 30 </p>
            </div>
        </div>
      </a>
    )
  }
}

export default InvestmentCard;
