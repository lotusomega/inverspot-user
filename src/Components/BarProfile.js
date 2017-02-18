import React, { Component } from 'react'

class BarProfile extends Component {
  render() {
    const styleb={
      fontSize:"30px"
    }
    const styleb2={
      textDecoration:"none"
    }
    return (
      <div className="panel panel-default">
        <div className="panel-body">
            <span>
                <h1 className="panel-title pull-left" style={styleb}>John Doe <br/>
                <small>example@pods.tld</small> <i className="fa fa-check text-success" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Su cuenta de correo electrónico esta verificada"></i></h1>
                <div className="dropdown pull-right">
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      Mis Inversiones
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <br/>
                      <li><a href="/panel/inversiones_usuario.html">Ver Todas</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#"><i className="fa fa-fw fa-plus" aria-hidden="true"></i> Agregar una Nueva Inversión</a></li>
                      <br/>
                    </ul>
                </div>
            </span>
            <br/><br/>
            <br/><br/><hr/>
            <span className="pull-right">
              <a href="#" className="btn btn-link" style={styleb2}>
              <i className="fa fa-lg fa-envelope-o" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Correo Electrónico"></i></a>
            </span>
        </div>
      </div>
    )
  }
}

export default BarProfile;