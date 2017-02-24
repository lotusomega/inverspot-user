import React, { Component } from 'react';
import InvestmentCard from './InvestmentCard'
import { list } from '../services/crud'

function InvestmentList(props) {
    return (
      <div>
        {props.investments.map(investment => (<InvestmentCard key={investment._id} investment={investment} />) )}
      </div>
    )
  }

class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      investments: []
    }
  }

  componentDidMount() {
    list('investment',{investor: this.props.params.id}, {sort:'createdAt', populate:{path: 'property'}}, 'investor sharesNumber amount property')
      .then( investments => this.setState({investments}) )
      .catch( e => alert(e) )
  }

  render() {
    return (
      <div>
        <div className="container">
            <div className="dropdown pull-right" style={{  margin: "20px"}}>
              <button className="btn btn-success" type="button" id="" aria-haspopup="true" aria-expanded="true" onClick={window.print}>
                  Imprimir
              </button>
            </div>

            <div className="row">
              <div className="well">
              <h2 className="text-center" style={{paddingLeft: "140px"}}>Mis Inversiones</h2>
              <div className="list-group">
                <InvestmentList investments={ this.state.investments } />

              </div>
            </div>
          </div>
      </div>

      </div>
    );
  }
}

export default Profile;
