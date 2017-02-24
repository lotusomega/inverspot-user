import React, { Component } from 'react';
import {PropertyCardBig, FundCardBig} from './PropertyCardBig'
import { listProperty } from '../services/list'

class Proyects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      property: {}
    }
  }

  componentDidMount() {
    if(this.props.params && this.props.params.id) {
      listProperty({_id: this.props.params.id}, {}, 'title address dataSheet marketResearch')
        .then( property => this.setState({ property }) )
        .catch( e => alert(e) )
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row propiedades">
        <div className="spacer triple"></div>

          <div className="spacer double"></div>
          <h1 className="text-center"><b>Proyecto </b></h1>
          <div className="spacer double"></div>
          {/* <PropertyCardBig property={this.state.property}/> */}


        </div>
      </div>
    );
  }
}

export default Proyects;
