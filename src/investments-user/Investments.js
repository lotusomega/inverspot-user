import React, { Component } from 'react';
import InvestmentCard from './InvestmentCard'
import { list } from '../services/crud'

//Funcion para listar las tarjetas de propiedad en las que el usuario ha invertido
/*props
investments: contiene un arreglo con las inversiones del usuario
investment: contiene todos los datos de una inversion especifica*/
function InvestmentList(props) {
  return (
    <div>
      {props.investments.map(investment => (<InvestmentCard key={investment._id} investment={investment} />) )}
    </div>
  )
}

class Profile extends Component {
  /*state
  investments: contiene un arreglo con todas las inversiones del usuario*/
  constructor(props) {
    super(props)
    this.state = {
      investments: []
    }
  }
  /*componentDidMount funcion que se ejecuta antes de montar el componente y obtiene la informacion de
  usuario una vez que se ha iniciado sesion*/
  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }
  /*componentDidMount funcion que se ejecuta antes de montar el componente y lista todas las inversiones del usuario desde el api para
  asignarlas al estado investments*/
  componentDidMount() {
    list('investment', {investor: this.user._id}, {sort:'createdAt', populate:{path: 'property'}}, 'investor sharesNumber amount property')
      .then( investments => this.setState({investments}) )
      .catch( e => alert(e) )
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="dropdown pull-right" style={{  margin: "20px"}}>
            <button className="button-save btn-success" type="button" id="" aria-haspopup="true" aria-expanded="true" onClick={window.print}>
              Imprimir
            </button>
          </div>

          <div className="row">
            <div className="well">
              <h2 className="text-center">Mis Participaciones</h2>
              <div className="list-group">
                {/* INVERSPOT: Renderiza todas las inversiones del usuario en caso de que existan  */}
                {this.state.investments.length > 0 ? <InvestmentList investments={ this.state.investments }/> : <h1>No tienes participaciones aún</h1>}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Profile;
