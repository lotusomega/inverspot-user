import React from 'react'

export default function(props) {
  return (
    <div className="container">
      <div className="row propiedades">
        <div className="spacer" />
        <h1 className="text-center"><b></b></h1>
        <div className="spacer double" />

        <div className="col-xs-12 col-sm-12" style={{backgroundColor: "#f7f9f9", marginBottom: "20px"}}>
        <div className="spacer double" />
        <p className="text-center" style={{fontSize: "24px", color: "#4b118e",fontWeight: 100}}>Somos una plataforma que da la oportunidad a un grupo de personas para que inviertan desde <b style={{color: "#ff3c00"}}>$100,000 PESOS</b> en proyectos de construcción con la garantía del inmueble.<b style={{color: "#ff3c00"}}>*1*2*3</b></p>
        <div className="spacer double" />
        </div>


                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                    <div className="card-content">
                      <span className="card-title" style={{fontSize: "20px", color: "#4b118e",fontWeight: 900}}>¿Qué es Inverspot?</span>
                    </div>
                      <div className="card-image">
                        <div className="embed-responsive embed-responsive-16by9">
                          <iframe src="https://player.vimeo.com/video/190621870?color=4B118E&title=0&byline=0&portrait=0" width={640} height={360} frameBorder={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                    <div className="card-content">
                      <span className="card-title" style={{fontSize: "20px", color: "#4b118e",fontWeight: 900}}>¿Cómo funciona Inverspot?</span>
                    </div>
                      <div className="card-image">
                        <div className="embed-responsive embed-responsive-16by9">
                          <iframe src="https://player.vimeo.com/video/182658897?color=4B118E&title=0&byline=0&portrait=0" width={640} height={360} frameBorder={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

        <div style={{height: "70px"}}/>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-search" /></div>
                <div className="info">
                  <h3 className="title">Nuestra plataforma</h3>
                  <p>
                    Te mostramos día a día nuevas propiedades previamente revisadas que ofrecen atractivos rendimientos.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-file-text-o" /></div>
                <div className="info">
                  <h3 className="title">Proceso</h3>
                  <p>
                    Tu dinero esta respaldado con inmuebles, por lo que tu capital esta 100% seguro.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-check-circle-o" /></div>
                <div className="info">
                  <h3 className="title">Garantía</h3>
                  <p>
                    Tu dinero está invertido en proyectos previamente valuados por nosotros, por lo que te damos una garantía de devolución íntegra de tu capital si decides retirarte del proyecto.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
        </div>
        <div className="spacer double" />



        <div className="col-xs-12 col-sm-12" style={{backgroundColor: "#f7f9f9", marginBottom: "50px"}}>
        <div className="spacer double" />
        <h1 className="text-center" style={{fontSize: "31px", color: '#ff3c00', fontWeight: 900, marginBottom: "10px"}}>¿Quiénes conforman Inverspot?</h1>
        <p className="text-center" style={{fontSize: "24px", color: "black",fontWeight: 100}}>Somos un grupo de personas que hemos laborado en el sector financiero inmobiliario y tecnológico con más de 10 años de experiencia. El fundador y director de la empresa es David Agmon Mizrahi, licenciado en mercadotecnia y una maestría en banca y mercados financieros, cuenta con más de 5 años de experiencia en el sector financiero.
        El resto del equipo y socios, es gente preparada y con experiencia en el sector inmobiliario, administración y finanzas.</p>
        <div className="spacer" />
        </div>
        <div className="row"></div>

        <div className="container" style={{background: 'url(style/images/2.jpg) no-repeat center center fixed', width: '100%', height: 300}}>
          <div className="row">
          </div>
        </div>
        <div style={{height: "40px"}}/>

        <div className="col-xs-12 col-sm-12 registro-section" style={{marginBottom: "20px", padding: "10px 10px"}}>
        <h1 className="text-center" style={{fontSize: "31px", color: '#ff3c00', fontWeight: 900}}>¿Porqué Inverspot?</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <center>
                <img alt="" src="style/images/analiza.png" className="icon-circle" />
                <br />
                <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20, fontWeight:900, color: "#ff3c00"}}>Nuestra plataforma</h4>
                <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Te mostramos día a día nuevas propiedades previamente revisadas que ofrecen atractivos rendimientos.<br />
                </p></center>
            </div>
            <div className="col-md-3">
              <center>
                <img alt="" src="style/images/rendimientos.png" className="icon-circle" />
                <br />
                <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20, fontWeight:900, color: "#ff3c00"}}>Rentabilidad</h4>
                <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Dependiendo cada proyecto, podrás recibir atractivos retornos al termino de ellos.<br />
                </p></center>
            </div>
            <div className="col-md-3">
              <center>
                <img alt="" src="style/images/grupo.png" className="icon-circle" />
                <br />
                <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20, fontWeight:900, color: "#ff3c00"}}>Flexibilidad</h4>
                <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Puedes donar, regalar, endosar, vender o dejar en garantía tus acciones notificándonoslo con anticipación.<br />
                </p></center>
            </div>
            <div className="col-md-3">
              <center>
                <img alt="" src="style/images/documentacion.png" className="icon-circle" />
                <br />
                <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20, fontWeight:900, color: "#ff3c00"}}>Seguridad</h4>
                <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Tu dinero esta invertido y respaldado con inmuebles, por lo que tu capital esta 100% seguro.<br />
                </p></center>
            </div>
          </div>
        </div>
        <div className="spacer double" />
        <div className="row">
          <div className="col-md-3">
            <center>
              <img alt="" src="style/images/pic.png" className="icon-circle" />
              <br />
              <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20, fontWeight:900, color: "#ff3c00"}}>Plusvalía</h4>
              <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Tus participaciones van incrementando su valor conforme a la plusvalía de la proyecto.<br />
              </p></center>
          </div>
          <div className="col-md-3">
            <center>
              <img alt="" src="style/images/elige.png" className="icon-circle" />
              <br />
              <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20, fontWeight:900, color: "#ff3c00"}}>Diversificación</h4>
              <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>En vez de participar en un proyecto, puedes diversificar tu dinero en varios proyectos.<br />
              </p></center>
          </div>
          <div className="col-md-3">
            <center>
              <img alt="" src="style/images/tu-pago.png" className="icon-circle" />
              <br />
              <h4 className="icon-tittle" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20, fontWeight:900, color: "#ff3c00"}}>Motores de participación</h4>
              <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Sin duda es la mejor forma de que inviertas tu dinero en proyectos inmobiliarios con montos accesibles.<br />
              </p></center>
          </div>
          <div className="col-md-3">
            <center>
              <img alt="" src="style/images/rendimientos.png" className="icon-circle" />
              <br />
              <h4 className="icon-tittle" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20, fontWeight:900, color: "#ff3c00"}}>Participa a plazos</h4>
              <p className="icon-text" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>En los proyectos para desarrollar y dependiendo cada proyecto, se podrá participar en distintas parcialidades y podrás participar con un anticipo desde $20,000.<br />
              </p></center>
          </div>
        </div>
        <div style={{height: "20px"}}/>

                <div className="col-xs-12 col-sm-12 registro-section" style={{marginBottom: "20px", padding: "10px 10px"}}>
                <h1 className="text-center" style={{fontSize: "31px", color: '#ff3c00', fontWeight: 900}}>Somos la primer Plataforma Colectiva Inmobiliaria en México</h1>
                </div>

                <div className="col-xs-12 col-sm-12" style={{backgroundColor: "#fff", marginBottom: "70px"}}>
                <div className="spacer" />
                <h1 className="text-center" style={{fontSize: "31px", color: '#4B118E', fontWeight: 900, marginBottom: "10px"}}>Ponte en contacto con nosotros</h1>
                <p className="text-center" style={{fontSize: "24px", color: "black",fontWeight: 100}}>Puedes agendar una cita con nosotros en el corporativo en cualquier momento o pedir que un asesor te contacte para darte una mejor atención personalizada. Sabemos que cada persona tiene distintas necesidades y nuestro objetivo es lograr satisfacerlas</p>
                </div>

        <div className="row"></div>

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
        <div className="map-responsive">
          <iframe src="//mapkit.io/embed/BouyKL" width={400} height={200} frameBorder={0} style={{border: 0}} />
        </div>
        <div className="spacer double" />
      </div>
    </div>
  )
}
