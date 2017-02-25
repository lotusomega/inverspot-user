import React, { Component } from 'react';
import { listProperty } from '../services/list'

class Tab1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      property: {
        address: {
          suburb: ''
        }
      }
    }
  }

  componentDidMount() {
    if( this.props.params.id) {
      listProperty({_id: this.props.params.id}, {}, 'title description address')
        .then( property => this.setState({ property: property[0] }) )
        .catch( e => alert(e) )
    }
  }
  render(){
    let property = this.state.property
    return (
      <div className="tab-pane fade in active" id="tab1">
          <div className="col-sm-6">
             <h2 className="" style={{fontWeight: '700', marginTop: '0px'}}>Resumen del Proyecto</h2>
             <h3 style={{fontWeight: '700', marginTop: '-10px'}}>{property.title}</h3>
          </div>
          <div className="col-sm-6">
              <h4 style={{float: 'right', fontWeight: '700'}}>{property.address.suburb}</h4><br/><br/>
              <h5 style={{float: 'right', fontWeight: '400', marginTop: '-8px'}}>Proyecto de {property.title}</h5>
          </div>
          <div className="spacer double"></div>
          <div className="col-sm-12 resumen-list" id="resume">
             <div className="spacer double"></div>
              <p className="text-justify">
                {property.description}
              </p>
              <div className="spacer double"></div>
          </div>
      </div>
    )
  }
}


export default Tab1;
