import React, { Component } from 'react';
import InvestmentCard from './InvestmentCard'

class Profile extends Component {
  render() {
    const stylei={
      margin: "20px"
    }
    const stylei2={
      paddingLeft: "140px"
    }
    return (
      <div>
        <div className="container">
            <div className="dropdown pull-right" style={stylei}>
              <button className="btn btn-success" type="button" id="" aria-haspopup="true" aria-expanded="true">
                  Imprimir
              </button>
            </div>

            <div className="row">
              <div className="well">
              <h2 className="text-center" style={stylei2}>Mis Inversiones</h2>
              <div className="list-group">
                <InvestmentCard />

              </div>
            </div>
          </div>
      </div>

      </div>
    );
  }
}

export default Profile;
