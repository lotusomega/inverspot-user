import React, { Component } from 'react';
import {PropertyCardBig, FundCardBig} from './PropertyCardBig'
import { listProperty } from '../services/list'
import {Wizard} from '../index/Wizard'

class Project extends Component {

  constructor(props) {
    super(props)
    this.toggleWizard = this.toggleWizard.bind(this)
    this.state = {
      property: {
        address:{
          suburb:''
        },
        dataSheet:{
          investAmount:0,
          totalShares: 0,
          sharesSold: 0
        },
        marketResearch:{
          estimatedTime:0,
          yieldInTime:  0
        }
      }
    }
  }

  componentDidMount() {
    if( this.props.params.id) {
      listProperty({_id: this.props.params.id}, {}, 'title description image address dataSheet marketResearch status')
        .then( property => this.setState({ property: property[0] }) )
        .catch( e => alert(e) )
    }
  }

  toggleWizard( property ) {
    if(!this.state.show) {
      document.body.className += ' modal-open'
      return this.setState({show: true, property})
    }
    document.body.className = ''
    return this.setState({show: false})
  }

  render() {

    return (
      <div className="container">
        { this.state.show && <Wizard onClick={ this.toggleWizard } id={this.state.property._id} /> }
        <div className="row propiedades">
          <div className="spacer double"></div>
          <h1 className="text-center"><b>Proyecto </b></h1>
          <div className="spacer double"></div>
          {this.state.property.status === 'available' ? <PropertyCardBig property={this.state.property} onInvest={ this.toggleWizard } /> 
            : <FundCardBig property={this.state.property}/> }
          <div className="row bordered well" style={{backgroundImage: 'linear-gradient(to bottom,#ffffff 0,#ffffff 100%)', borderColor: '#ffffff'}}>
            <div className="col-sm-12">
              <div className="tab-content" style={{color: 'black'}}>
                {this.props.children}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
