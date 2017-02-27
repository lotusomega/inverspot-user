import React from 'react'

export default function(props) {
  return (
    <div className="container">
      <div className="row propiedades">
        {/* <div className="headspace" /> */}
        {/*Fichas de las Propiedades Disponibles*/}
        <div className="spacer" />
        <h1 className="text-center"><b>Garantía</b></h1>
        <div className="spacer double" />
        <div className="row main-container registro-section">
          <div className="spacer" style={{height: 40}} />
          <h1 style={{color: 'red', fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>Garantía de tu participación</h1>
          <p style={{fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: 100}}>Entendemos la importancia de tu participación, con el objetivo de garantizar un excelente proceso te presentamos las diferentes funciones que ofrecemos como garantía</p>
        </div>
        <div className="spacer double" />
        <div className="row main-container">
          <div className="spacer" />
          <h1 style={{color: '#5a5a5a', fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>Modelos de garantía</h1>
        </div>
        <div className="spacer" />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-money" aria-hidden="true" /></div>
                <div className="info">
                  <h3 className="title">Devolución de tu dinero<br />cuando lo requieras</h3>
                  <p>
                    Te damos como garantía la devolución íntegra de tu capital invertido cuando nos lo solicites sin penalizaciones pero sin utilidad.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-building" aria-hidden="true" /></div>
                <div className="info">
                  <h3 className="title">Respaldo de tu dinero<br />en inmuebles</h3>
                  <p>
                    Cada desarrollo está respaldado con documentación legal como contratos, participaciones en fideicomisos y escrituras. Puedes comprobarlo en el corporativo agendando una cita.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-calendar-check-o" aria-hidden="true" /></div>
                <div className="info">
                  <h3 className="title">Utilidad y plazos<br /><br /></h3>
                  <p>
                    La utilidad y los plazos son estimados. Es una garantía que no podemos ofrecer al 100% porque estos factores dependen del mercado. Es necesario que concluya y se termine el proyecto para que obtengas la utilidad.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
        </div>
        <div className="spacer double" />
        <div className="row main-container registro-section" style={{backgroundColor: '#fff'}}>
          <div className="spacer" />
          <h1 style={{color: 'red', fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>Somos la primer Plataforma Colectiva Inmobiliaria en México</h1>
          <p style={{fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: 100}}>Inversión fácil, segura y al alcance de todos</p>
        </div>
        <div className="spacer double" />
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <h1 style={{fontSize: 31, color: 'white', fontFamily: 'AvenirNext-Regular', fontWeight: 900, textAlign: 'center'}}>Contáctanos<small /></h1>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" />
        <div className="row">
          <div className="col-md-8">
            <div className="well well-sm">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">
                      Nombre *</label>
                      <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" required="required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">
                      Teléfono *</label>
                      <input type="text" className="form-control" id="phone" placeholder="Ingrese su número teléfonico" required="required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                      Correo Electrónico *</label>
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope-o" aria-hidden="true" />
                        </span>
                        <input type="email" className="form-control" id="email" placeholder="Ingrese su correo" required="required" /></div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">
                      Asunto *</label>
                      <select id="subject" name="subject" className="form-control" required="required">
                        <option value="na" selected>Elija uno:</option>
                        <option value="service">Soy desarrollador y deseo subir mi proyecto</option>
                        <option value="suggestions">Soy proveedor y deseo brindar mis servicios</option>
                        <option value="product">Soy cliente y tengo dudas</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">
                      Mensaje *</label>
                      <textarea name="message" id="message" className="form-control" rows={9} cols={25} required="required" placeholder="Mensaje" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                    Enviar Mensaje</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <form>
              <legend>Dirección</legend>
              <address>
                <strong>Inverspot</strong><br />
                Avenida de las Palmas 1320<br />
                Lomas de Chapultepec, CDMX, México<br />
                <abbr title="Phone">
                Teléfono: (55) 800-06555</abbr>
              </address>
              <br />
              <address>
                <strong>Correo Electrónico</strong><br />
                <a href="mailto:#">hola@inverspot.mx</a>
              </address>
            </form>
          </div>
        </div>
        <div className="spacer double" />
      </div>
    </div>
  )
}
