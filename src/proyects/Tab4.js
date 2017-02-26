import React, { Component } from 'react';
//import { listWork } from '../services/list'

class Tab4 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      workProgress: {}
    }
  }

  /*componentDidMount() {
    if( this.props.params.id) {
      listWork({ property:{ $in: [this.props.params.id] }}, {}, '')
        .then( workProgress => this.setState({ workProgress: workProgress[0] }) )
        .catch( e => alert(e) )
    }
  }*/
  render(){
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
                                            <img src="//placehold.it/300x200" alt="propiedad"/>
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
}


export default Tab4;
