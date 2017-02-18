import React, { Component } from 'react'

class PasswordProfile extends Component {
  render() {
    const stylepa={
      color:"#FF0004"
    }
    const stylepa2={
      fontSize: "smaller"
    }
    const stylepa3={
      marginLeft: "10px"
    }
    return (
      <div className="panel panel-default">                
        <div className="panel-body">
            <h3 style={stylepa3}><strong>Cambio de Contraseña</strong></h3>
            <hr/>

            <div className="col-md-12 col-sm-12 col-xs-12 personal-info">
              <div className="form-horizontal">
               
                <div className="form-group">
                  <div className="container">
                   <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                      <p className="text-center">Introduzca su nueva contraseña</p>
                      <form method="post" id="passwordForm">
                        <input type="password" className="input-sm form-control" name="password1" id="password1" placeholder="Nueva contraseña" required/>
                        <div className="row">
                          <div className="col-sm-6" style={stylepa2}>
                            <span id="8char" className="glyphicon glyphicon-remove" style={stylepa}></span> 8 caracteres mínimo<br/><br/>
                          </div>
                        </div>
                        <input type="password" className="input-sm form-control" name="password2" id="password2" placeholder="Confirmar contraseña"/>
                        <div className="row">
                          <div className="col-sm-12" style={stylepa2}>
                            <span id="pwmatch" className="glyphicon glyphicon-remove" style={stylepa}></span> Contraseñas coinciden<br/><br/>
                          </div>
                        </div>
                        <input type="submit" className="btn btn-primary btn-load" data-loading-text="Cambiando Contraseña..." value="Cambiar Contraseña" required/>
                      </form> 
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

export default PasswordProfile;