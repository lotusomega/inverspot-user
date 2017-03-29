import React from 'react'

export default function(props) {
  return (
    <div className="container">
      <div className="row propiedades">
        {/* <div className="headspace" /> */}
        <div className="spacer" />
        <h1 className="text-center"><b></b></h1>
        <div className="spacer double" />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="well well-sm">
              <form target="_blank" method="POST" action="http://formspree.io/mkt@inverspot.mx">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">
                      Nombre *</label>
                      <input type="text" name="Nombre" className="form-control" id="name" placeholder="Ingrese su nombre" required="required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">
                      Teléfono *</label>
                      <input type="text" name="Teléfono" className="form-control" id="phone" placeholder="Ingrese su número teléfonico" required="required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                      Correo Electrónico *</label>
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope-o" aria-hidden="true" />
                        </span>
                        <input type="email" name="Correo electrónico" className="form-control" id="email" placeholder="Ingrese su correo" required="required" /></div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">
                      Asunto *</label>
                      <select id="subject" name="Asunto" className="form-control" required="required">
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
                      <textarea name="Mensaje" id="message" className="form-control" rows={9} cols={25} required="required" placeholder="Mensaje" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">
                  <button type="submit" id="btnContactUs"  style={{padding: '10px 20px', float: "right", fontFamily: 'AvenirNext-Bold', display: 'inline-block', backgroundColor: "#FF3C00", borderColor: "#FF3c00"}}>
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
                  Avenida Paseo de las Palmas 1320<br />
                  Lomas de Chapultepec, CDMX, México<br />
                  <abbr title="Phone">
                  Teléfono: 01 (55) 8000 6555</abbr>
                </address>
                <br />
                <address>
                  <strong>Inverspot Jalisco</strong><br />
                  Avenida Adolfo López Mateos 830<br />
                  Fracc. Chapalita 44500, Guadalajara, Jalisco<br />
                </address>
                <br />
                <address>
                  <strong>Correo Electrónico</strong><br />
                  <a href="mailto:#">hola@inverspot.mx</a>
                </address>
              </form>
            </div>
          </div>
        </div>
        <div className="spacer double" />
        <div className="container-fluid">
          <div className="row map-responsive">
            <iframe src="//mapkit.io/embed/BouyKL" width={400} height={200} frameBorder={0} style={{border: 0}} allowFullScreen />
          </div>
        </div>
      </div>
        <div  style={{height: "60px"}}/>
    </div>
  )
}
