import React, { Component } from 'react';
import { listProperty } from '../services/list'

class Tab3 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      property: {
        builder: {
          name:   '',
          yearsWork:  0,
          completedWorks: 0,
          website: ''
        }
      }
    }
  }

  componentDidMount() {
    if( this.props.params.id) {
      listProperty({_id: this.props.params.id}, {populate: 'builder'}, 'builder')
        .then( property => this.setState({ property: property[0] }) )
        .catch( e => alert(e) )
    }
  }
  render(){
    let builder = this.state.property.builder
    return(
      <div className="tab-pane fade in active" id="tab3">
        <div className="col-sm-6">
           <h2 className="" style={{fontWeight: '700', marginTop: '0px'}}>Datos del Desarrollador</h2>
           <h3 style={{fontWeight: '700', marginTop: '-10px'}}>{builder.name}</h3>
        </div>
        <div className="spacer double"></div>
        <div className="col-sm-12 resumen-list" id="resume">
           <div className="spacer double"></div>
            <p className="text-justify">
              Años Trabajando: {builder.yearsWork}
            </p><br/>
            <p className="text-justify">
              Trabajos Completados: {builder.completedWorks}
            </p><br/>
            <p className="text-justify">
              Sitio Web:{builder.website}
            </p><br/>
            <div className="spacer double"></div>
        </div>
    </div>
  )
  }
}


export default Tab3;
