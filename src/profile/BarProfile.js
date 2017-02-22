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
                <h1 className="panel-title pull-left" style={styleb}>{this.props.user.name} <br/>
                <small>{this.props.user.email}</small> <i className="fa fa-check text-success" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Su cuenta de correo electrónico esta verificada"></i></h1>
              
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
