import React, { Component } from 'react'

class DataProfile extends Component {
  render() {
    const styledata={
      float: "right", 
      margin: "30px"
    }
    const styledata2={
      marginLeft: "10px"
    }
    return (
      <div className="panel panel-default">
        <div style={styledata}>
          <div className="btn-group">
            <a className="btn btn-info" href="#">
              Editar Perfil 
            </a>
          </div>
        </div>
        
        <div className="panel-body">
          <h3 style={styledata2}><strong>Mis Datos</strong></h3>
          <br/>
          <hr/>

          <div className="col-md-12 col-sm-12 col-xs-12 personal-info">
            <form className="form-horizontal" data-toggle="validator" role="form">
              <div className="form-group">
                <label className="col-md-3 control-label">Nombre Completo:</label>
                <div className="col-md-8">
                  <input className="form-control input-sm" id="name" type="text" required />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Correo electrónico:</label>
                <div className="col-lg-8">
                  <input type="email" className="form-control input-sm" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3">Estado:</label>
                <div className="col-lg-8">
                  <select className="form-control" id="sel1">
                     <option value="na">Elige</option>
                     <option value="Agu">Aguascalientes</option>
                     <option value="Bc">Baja California</option>
                     <option value="Bcs">Baja California Sur</option>
                     <option value="Cam">Campeche</option>
                     <option value="Chis">Chiapas</option>
                     <option value="Chi">Chihuahua</option>
                     <option value="Cdm">Ciudad de México</option>
                     <option value="Coa">Coahuila</option>
                     <option value="Col">Colima</option>
                     <option value="Dur">Durango</option>
                     <option value="Edm">Estado de México</option>
                     <option value="Gua">Guanajuato</option>
                     <option value="Gue">Guerrero</option>
                     <option value="Hid">Hidalgo</option>
                     <option value="Jal">Jalisco</option>
                     <option value="Mic">Michoacán</option>
                     <option value="Mor">Morelos</option>
                     <option value="Nay">Nayarit</option>
                     <option value="Nle">Nuevo León</option>
                     <option value="Oax">Oaxaca</option>
                     <option value="Pue">Puebla</option>
                     <option value="Qro">Querétaro</option>
                     <option value="Qur">Quintana Roo</option>
                     <option value="Snl">San Luis Potosí</option>
                     <option value="Sin">Sinaloa</option>
                     <option value="Son">Sonora</option>
                     <option value="Tab">Tabasco</option>
                     <option value="Tam">Tamaulipas</option>
                     <option value="Tla">Tlaxcala</option>
                     <option value="Ver">Veracruz</option>
                     <option value="Yuc">Yucatán</option>
                     <option value="Zac">Zacatecas</option>
                  </select>
                </div>
              </div>

              
              <div className="form-group">
                <label className="col-md-3 control-label">Teléfono Fijo:</label>
                <div className="col-md-8">
                  <input className="form-control input-sm" id="phone" type="phone" required/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Celular:</label>
                <div className="col-md-8">
                  <input className="form-control input-sm" id="celphone" type="phone" required />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-8">
                  <input className="btn btn-primary" type="submit" value="Guardar Cambios" type="button" />
                  <span></span>
                  <input className="btn btn-default" value="Cancelar" type="reset" style={styledata2} />
                </div>
              </div>
            </form>
          </div>
          <hr/>
        </div>
      </div>
            
    )
  }
}

export default DataProfile;