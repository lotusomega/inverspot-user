import React, { Component } from 'react';
import { listProperty } from '../services/list'
import currency from '../services/currency'

function EdiTableRender(props) {
  if(!props.data || props.data.length <= 0) return null;
  let header = props.data.slice(0,1)[0]
  let body = props.data.slice(1)
  return (
    <table className="table table-hover" id="dev-table">
      <thead className="panel-heading" style={{backgroundColor: '#4B118E', color: 'white'}}>
        <tr>
        { header.map( (title, i) => <th key={`H${i}`} className="text-center" style={{fontFamily: 'AvenirNext-Bold', fontSize: '11px'}}>{title || ''}</th> ) }
        </tr>
      </thead>
      <tbody>
        {
          body.map( (r, i) => {
            return (<tr key={`B${i}`}>
              { r.map( (cell, i) => <td key={`C${i}`} className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>{cell}</td> ) }
            </tr>)
          } )
        }
      </tbody>
    </table>
  )
}

class Tab2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      property: {
        address:{
          coordinates:''
        },
        fixedData:{
          objectiveFundraising: 0,
          expectedAnnualYield:  0,
          expectedUtility:      0
        },
        capitalOutflow:{
          totalCost:  0,
          salePrice: 0,
          salesCommission: 0,
          utility: 0,
          estimatedTime: 0,
          yieldIn18Months: 0,
          annualYield: 0
        },
        supplementaryData: [["",""],["",""]]
      }
    }
  }

  componentDidMount() {
    if( this.props.params.id) {
      listProperty({_id: this.props.params.id}, {}, 'address fixedData capitalOutflow supplementaryData')
        .then( property => this.setState({ property: property[0] }) )
        .catch( e => alert(e) )
    }
  }

  render() {
    let property = this.state.property
    let coordinates = property.address.coordinates, co=[0,0]
    if(coordinates.indexOf(',') > -1){
      co = coordinates.split(',')
    }
    return(
      <div className="tab-pane fade in active" id="tab2">
          <div className="col-sm-6">

              <div className="panel panel-primary">
                  <table className="table table-hover" id="dev-table">
                      <thead className="panel-heading" style={{backgroundColor: '#4B118E', color: 'white', borderRadious: '0px'}}>
                          <tr>
                            <th className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>CORRIDA FINANCIERA</th>
                            <th className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>DATOS</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Costo del departamento</td>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>{ property.capitalOutflow.totalCost }</td>
                        </tr>
                        <tr>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Precio estimado de venta</td>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>{ property.capitalOutflow.salePrice }</td>
                        </tr>
                        <tr>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Comisión de venta</td>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>{ property.capitalOutflow.salesCommission }</td>
                        </tr>
                        <tr>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Utilidad</td>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>{ property.capitalOutflow.utility }</td>
                        </tr>
                        <tr>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Rendimiento en 18 meses</td>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>{ property.capitalOutflow.yieldIn18Months }</td>
                        </tr>
                        <tr>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Rendimiento anualizado</td>
                          <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>{ property.capitalOutflow.annualYield }</td>
                        </tr>
                      </tbody>
                  </table>
              </div>

              <div className="col-sm-12">

                  <div className="col-xs-12 col-sm-4" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                    <div className="panel text-center price-panel panel-purple" style={{borderRadius: '0px'}}>
                      <div className="panel-body">
                        <h5 className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>Objetivo de captación</h5>
                        <p className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>{ currency(property.fixedData.objectiveFundraising)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-4" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                    <div className="panel text-center price-panel panel-red" style={{borderRadius: '0px'}}>
                      <div className="panel-body">
                        <h5 className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>Rendimiento<br/>Anual</h5>
                        <p className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>{property.fixedData.expectedAnnualYield + '%'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-4" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                    <div className="panel text-center price-panel panel-purple" style={{borderRadius: '0px'}}>
                      <div className="panel-body">
                        <h5 className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>Utilidad<br/>Esperada</h5>
                        <p className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>{property.fixedData.expectedUtility + '%'}</p>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="col-sm-12">
                <div className="panel panel-primary">
                  <EdiTableRender data={property.supplementaryData} />
                </div>
              </div>
          </div>

          <div className="col-md-6">
              <div>
                <iframe src={`https://www.google.com/maps/embed/v1/place?q=${co[0]}++${co[1]}
                &key=AIzaSyCjbpxgy_fpNywsVbmQ-WCSFgIGAGGBvCY`} width='100%' height="227" frameBorder="0" style={{border:0}}></iframe>
              </div>
          </div>
      </div>

    )
  }
}

export default Tab2;
