import React, { Component } from 'react'
/*props
user.name: nombre del usuario
user.email: correo del usuario*/
class BarProfile extends Component {
  render() {
    const styleb2={
      textDecoration:"none"
    }
    return (
      <div className="panel panel-default">
        <div className="panel-body" style={{backgroundColor: "#4B118E"}}>
        <i className="fa fa-file-text-o fa-3x" aria-hidden="true" style={{color: "white", float: "right", marginRight: "30px", marginTop: "10px"}}></i>
            <span>
                <h1 className="panel-title pull-left">{this.props.user.name}  <br/>
                <small style={{color: "white"}}>{this.props.user.email}</small> <i className="fa fa-check text-success" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Su cuenta de correo electrónico esta verificada"></i></h1>
            </span>  <br/><br/>
            <div className="col-xs-12 col-md-12"><br/>
                <p className="text-center" style={{fontSize: "16px", color: "white", fontWeight: "bold"}}>Bienvenido a tu perfil de Inverspot, donde podrás consultar tus participaciones</p>
            </div>
            <br/><br/>
            <br/><br/><hr/>
            <span className="pull-right">
              <a href="#" className="btn btn-link" style={styleb2}>
              <i className="fa fa-lg fa-envelope-o" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Correo Electrónico" style={{color: "white"}}></i></a>
            </span>
        </div>
      </div>
    )
  }
}

export default BarProfile;
