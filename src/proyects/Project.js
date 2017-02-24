import React, { Component } from 'react';
import {PropertyCardBig, FundCardBig} from './PropertyCardBig'
import { listProperty } from '../services/list'

function Tab1 (props){
  console.log(props.property);
  return (
    <div className="tab-pane fade in active" id="tab1">
        <div className="col-sm-6">
           <h2 className="" style={{fontWeight: '700', marginTop: '0px'}}>Resumen del Proyecto</h2>
           <h3 style={{fontWeight: '700', marginTop: '-10px'}}>{props.property.title}</h3>
        </div>
        <div className="col-sm-6">
            <h4 style={{float: 'right', fontWeight: '700'}}>{props.property.address && props.property.address.suburb}</h4><br/><br/>
            <h5 style={{float: 'right', fontWeight: '400', marginTop: '-8px'}}>Proyecto de departamento</h5>
        </div>
        <div className="spacer double"></div>
        <div className="col-sm-12 resumen-list" id="resume">
           <div className="spacer double"></div>
            <p className="text-justify">
              {props.property.description}
            </p>
            <div className="spacer double"></div>
        </div>
    </div>
  )
}

function Tab2 (props){
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
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>$2,450,000</td>
                        </tr>
                        <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Precio estimado de venta</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>$2,450,000</td>
                        </tr>
                        <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Comisión de venta</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>$2,450,000</td>
                        </tr>
                        <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Utilidad</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>$2,450,000</td>
                        </tr>
                        <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Rendimiento en 18 meses</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>34.9%</td>
                        </tr>
                        <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>Rendimiento anualizado</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>23.6%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-sm-12">

                <div className="col-xs-12 col-sm-4" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                  <div className="panel text-center price-panel panel-purple" style={{borderRadius: '0px'}}>
                    <div className="panel-body">
                      <h5 className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>Objetivo de captación</h5>
                      <p className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>$ 1,000,000</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-4" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                  <div className="panel text-center price-panel panel-red" style={{borderRadius: '0px'}}>
                    <div className="panel-body">
                      <h5 className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>Rendimiento<br/>Anual</h5>
                      <p className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>12%</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-4" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                  <div className="panel text-center price-panel panel-purple" style={{borderRadius: '0px'}}>
                    <div className="panel-body">
                      <h5 className="text-center" style={{fontFamily: 'AvenirNext-Bold'}}>Utilidad<br/>Esperada</h5>
                      <p className="text-center" style={{fontFamily: 'AvenirNext-Medium' }}>30%</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-sm-12">
                <div className="panel panel-primary">
                    <table className="table table-hover" id="dev-table">
                        <thead className="panel-heading" style={{backgroundColor: '#4B118E', color: 'white'}}>
                            <tr>
                            <th className="text-center" style={{fontFamily: 'AvenirNext-Bold', fontSize: '11px'}}>CORRIDA FINANCIERA</th>
                            <th className="text-center" style={{fontFamily: 'AvenirNext-Bold', fontSize: '11px'}}>DATOS</th>
                            <th className="text-center" style={{fontFamily: 'AvenirNext-Bold', fontSize: '11px'}}>CORRIDA FINANCIERA</th>
                            <th className={{fontFamily: 'AvenirNext-Bold', fontSize: '11px'}}>DATOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>Costo del departamento</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>$2,450,000</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>Costo del departamento</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>$2,450,000</td>
                            </tr>
                            <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>Precio estimado de venta</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>$2,450,000</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>Precio estimado de venta</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>$2,450,000</td>
                            </tr>
                            <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>Comisión de venta</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>$2,450,000</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>Comisión de venta</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>$2,450,000</td>
                            </tr>
                            <tr>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>Utilidad</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>$2,450,000</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>Utilidad</td>
                            <td className="text-center" style={{fontFamily: 'AvenirNext-Medium', fontSize: '12px'}}>$2,450,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="col-md-6">
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2648.833038448318!2d-89.2826271!3d48.402149400000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d59202c99c9252f%3A0x4cb61e2f5a8d87e!2s218+Humber+Crescent%2C+Thunder+Bay%2C+ON+P7C+5X2!5e0!3m2!1sen!2sca!4v1424370904204" width='100%' height="227" frameborder="0" style={{border:0}}></iframe>
            </div>
        </div>
    </div>

  )
}

function Tab3 (props){
  return(
    <div className="tab-pane fade in active" id="tab3">
        <div className="col-sm-6">
           <h2 className="" style={{fontWeight: '700', marginTop: '0px'}}>Datos del Desarrollador</h2>
           <h3 style={{fontWeight: '700', marginTop: '-10px'}}>Nombre de la empresa</h3>
        </div>
        <div className="col-sm-6">
            <h4 style={{float: 'right', fontWeight: '900'}}>COL SANTA MARÍA DE LA RIBERA</h4><br/><br/>
            <h5 style={{float: 'right', fontWeight: '400', marginTop: '-8px'}}>Proyecto de departamento</h5>
        </div>
        <div className="spacer double"></div>
        <div className="col-sm-12 resumen-list" id="resume">
           <div className="spacer double"></div>
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </p>
            <div className="spacer double"></div>
        </div>
    </div>
  )
}

function Tab4 (props){
  return(
    <div className="tab-pane fade in active" id="tab4">
      <h1 className="text-center">Avance de Obra</h1>
      <div className="spacer"></div>
      <div className="row">
          <div className="col-sm-3">
              <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                      <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" style={{textDecoration:'none'}}>
                             <span className="glyphicon glyphicon-folder-close"></span>&nbsp; Año 2014</a>
                          </h4>
                      </div>
                      <div id="collapseOne" className="panel-collapse collapse in">
                          <div className="panel-body">
                              <table className="table">
                                  <tr>
                                      <td>
                                          <span></span><a  className="btn-group" role="group" id="" href="#Item11" data-toggle="tab">Enero</a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <span></span><a  className="btn-group" role="group" id="" href="#Item12" data-toggle="tab">Febrero</a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <span></span><a  className="btn-group" role="group" id="" href="#Item13" data-toggle="tab">Marzo</a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <span></span><a  className="btn-group" role="group" id="" href="#Item14" data-toggle="tab">Abril</a>
                                      </td>
                                  </tr>
                              </table>
                          </div>
                      </div>
                  </div>

              </div>
          </div>

          <div className="col-sm-9 well" style={{backgroundImage: 'linear-gradient(to bottom,#ffffff 0,#ffffff 100%)', borderColor: '#ffffff'}}>
                  <div className="tab-content">
                      <div className="tab-pane fade in active" id="Item11">
                          <h5>Enero 2014</h5>
                          <div className="col-sm-12">
                              <div className="row">
                                  <div className="col-xs-12 col-sm-4">
                                          <a href="#" className="thumbnail">
                                            <img src="//placehold.it/300x200"/>
                                            <p className="text-center" style={{fontSize: '10px', color:'black'}}>Descripción de la imagen: <br/>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                                          </a>
                                  </div>
                              </div>
                          </div>
                      </div>

                </div>
          </div>
      </div>
    </div>
  )
}

class Project extends Component {

  constructor(props) {
    super(props)
    this.state = {
      property: {}
    }
  }

  componentDidMount() {
    if( this.props.params.id) {
      listProperty({_id: this.props.params.id}, {}, 'title description image address dataSheet marketResearch')
        .then( property => this.setState({ property: property[0] }) )
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
            <div className="row bordered well" style={{backgroundImage: 'linear-gradient(to bottom,#ffffff 0,#ffffff 100%)', borderColor: '#ffffff'}}>
              <div className="col-sm-12">
                  <div className="tab-content" style={{color: 'black'}}>

                    <Tab1 property={this.state.property}/>
                    {/* <Tab2/> */}
                    {/* <Tab3 /> */}
                    {/* <Tab4 /> */}

                  </div>
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Project;
