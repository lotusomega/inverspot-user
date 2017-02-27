import React from 'react'

export default function(props) {
  return (
    <div className="container">
      <div className="row propiedades">
        <div className="spacer" />
        <h1 className="text-center"><b>Nosotros</b></h1>
        <div className="spacer double" />
        <div className="row main-container registro-section">
          <div className="spacer" />
          <h1 style={{color: 'red', fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>¿Quiénes somos?</h1>
          <p style={{fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: 100}}>Somos una plataforma que busca conformar grupos de personas interesadas en participar en desarrollos inmobiliarios con el fin de obtener atractivos rendimientos en desarrollos previamente valuados</p>
        </div>
        <div className="spacer triple" />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-cogs" /></div>
                <div className="info">
                  <h3 className="title">¿Qué es Inverspot?</h3>
                  <p>
                    Inverspot es la primer plataforma de participación colectiva en México que da la posibilidad de adquirir y participar en desarrollos inmobiliarios recibiendo excelentes rendimientos de una forma práctica, segura y confiable.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-users" /></div>
                <div className="info">
                  <h3 className="title">¿Quienes conforman Inverspot?</h3>
                  <p>
                    Somos un grupo de personas que hemos laborado en el sector financiero inmobiliario y tecnológico con más de 10 años de experiencia.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <div className="icon">
                <div className="image"><i className="fa fa-window-restore" /></div>
                <div className="info">
                  <h3 className="title">¿Qué es una PIC?</h3>
                  <p>
                    Una PIC es una Plataforma de Inversión Colectiva que genera una oportunidad práctica de partiipación, siendo asi la primer plataforma en México en conformar grupos solidos de participación, eliminando intermediarios.
                  </p>
                </div>
              </div>
              <div className="space" />
            </div>
          </div>
        </div>
        <div className="spacer double" />
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-image">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe src="https://player.vimeo.com/video/190621870?color=4B118E&title=0&byline=0&portrait=0" width={640} height={360} frameBorder={0} />
                </div>
              </div>
              <div className="card-content">
                <span className="card-title">¿Qué es Inverspot?</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-image">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe src="https://player.vimeo.com/video/182658897?color=4B118E&title=0&byline=0&portrait=0" width={640} height={360} frameBorder={0} />
                </div>
              </div>
              <div className="card-content">
                <span className="card-title">¿Cómo funciona Inverspot?</span>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer double" />
        <div className="container" style={{background: 'url(http://plat.mx/admin/wp-content/uploads/2017/01/12.jpg) no-repeat center center fixed', width: '100%', height: 500}}>
          <div className="row">
            <div className="col-md-6 col-sm-12" style={{backgroundColor: 'rgba(75, 17, 142, 0.53)'}}>
              <div className="spacer" />
              <h1 style={{fontSize: 30, color: 'white', fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>Misión</h1>
              <p style={{color: 'white', fontSize: 20, fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: 100}}>Lograr la mayor rentabilidad en el menor tiempo posible para quienes conforman los grupos de Inverspot.</p><br />
            </div>
          </div>
        </div>
        <div className="spacer double" />
        <div className="row main-container registro-section">
          <div className="spacer" />
          <h1 style={{color: 'red', fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>Comienza tú registro rápido, sencillo y seguro</h1>
          <p style={{fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: 100}}>Con el objetivo de optimizar los procesos y entrar de manera sencilla a un canal de participación inmobiliario; hemos desarrollado la primera plataforma de participación colectiva en México, operando bajo un modelo de negocio sencillo bajo una serie
          de procesos nada complicados. Participar en el mercado inmobiliario nunca fue tan fácil.</p>
          <button className="button" data-toggle="modal" onClick="openRegisterModal();">Comenzar registro</button>
        </div>
        <div className="spacer double" />
        <div className="container" style={{background: 'url(http://plat.mx/admin/wp-content/uploads/2017/01/sfRkE-o6kyDYokfKodpRQ.jpg) no-repeat center center fixed', width: '100%', height: 500}}>
          <div className="row">
            <div className="col-md-6 col-sm-12" style={{backgroundColor: 'rgba(75, 17, 142, 0.53)'}}>
              <div className="spacer" />
              <h1 style={{fontSize: 30, color: 'white', fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>Visión:</h1>
              <p style={{color: 'white', fontSize: 20, fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: 100}}>Lograr la mayor rentabilidad en el menor tiempo posible para quienes conforman los grupos de Inverspot.</p><br />
            </div>
          </div>
        </div>
        <div className="spacer double" />
        <div className="row main-container registro-section" style={{backgroundColor: '#fff!important'}}>
          <div className="spacer" />
          <h1 style={{fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>¿Porqué Inverspot?</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <center>
                <img alt="" src="http://plat.mx/admin/wp-content/uploads/2017/01/analiza.png" className="icon-circle" />
                <br />
                <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20}}>Nuestra plataforma</h4>
                <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Te mostramos día a día nuevas propiedades previamente revisadas que ofrecen atractivos rendimientos.<br />
                </p></center>
            </div>
            <div className="col-md-3">
              <center>
                <img alt="" src="http://plat.mx/admin/wp-content/uploads/2017/01/rendimientos.png" className="icon-circle" />
                <br />
                <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20}}>Rentabilidad</h4>
                <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Dependiendo cada proyecto, podrás recibir atractivos retornos al termino de ellos.<br />
                </p></center>
            </div>
            <div className="col-md-3">
              <center>
                <img alt="" src="http://plat.mx/admin/wp-content/uploads/2017/01/grupo.png" className="icon-circle" />
                <br />
                <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20}}>Flexibilidad</h4>
                <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Puedes donar, regalar, endosar, vender o dejar en garantía tus acciones notificándonoslo con anticipación.<br />
                </p></center>
            </div>
            <div className="col-md-3">
              <center>
                <img alt="" src="http://plat.mx/admin/wp-content/uploads/2017/01/documentacion.png" className="icon-circle" />
                <br />
                <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20}}>Seguridad</h4>
                <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Tu dinero esta invertido y respaldado con inmuebles, por lo que tu capital esta 100% seguro.<br />
                </p></center>
            </div>
          </div>
        </div>
        <div className="spacer" />
        <div className="row">
          <div className="col-md-3">
            <center>
              <img alt="" src="http://plat.mx/admin/wp-content/uploads/2017/01/pic.png" className="icon-circle" />
              <br />
              <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20}}>Plusvalía</h4>
              <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Tus participaciones van incrementando su valor conforme a la plusvalía de la proyecto.<br />
              </p></center>
          </div>
          <div className="col-md-3">
            <center>
              <img alt="" src="http://plat.mx/admin/wp-content/uploads/2017/01/elige.png" className="icon-circle" />
              <br />
              <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20}}>Diversificación</h4>
              <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>En vez de participar en un proyecto, puedes diversificar tu dinero en varios proyectos.<br />
              </p></center>
          </div>
          <div className="col-md-3">
            <center>
              <img alt="" src="http://plat.mx/admin/wp-content/uploads/2017/01/tu-pago.png" className="icon-circle" />
              <br />
              <h4 className="icon-tittle" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20}}>Motores de participación</h4>
              <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>Sin duda es la mejor forma de que inviertas tu dinero en proyectos inmobiliarios con montos accesibles.<br />
              </p></center>
          </div>
          <div className="col-md-3">
            <center>
              <img alt="" src="http://plat.mx/admin/wp-content/uploads/2017/01/rendimientos.png" className="icon-circle" />
              <br />
              <h4 className="icon-tittle" style={{fontFamily: 'AvenirNext-Regular', fontSize: 20}}>Participa a plazos</h4>
              <p className="icon-text" style={{fontFamily: 'AvenirNext-Regular', fontSize: 17, fontWeight: 400}}>En los proyectos para desarrollar y dependiendo cada proyecto, se podrá participar en distintas parcialidades y podrás participar con un anticipo desde $20,000.<br />
              </p></center>
          </div>
        </div>
        <div className="spacer double" />
        <div className="row main-container registro-section" style={{backgroundColor: '#fff'}}>
          <div className="spacer" />
          <h1 style={{color: 'red', fontFamily: 'AvenirNext-Regular', fontWeight: 900}}>Somos la primer Plataforma Colectiva Inmobiliaria en México</h1>
          <p style={{fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: 100}}>Participación fácil, segura y al alcance de todos</p>
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
        <div className="container">
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
                        <select defaultValue="na" id="subject" name="subject" className="form-control" required="required">
                          <option value="na">Elija uno:</option>
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
                  Teléfono: 01 (55) 8000 6555</abbr>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15051.065127692984!2d-99.2228893!3d19.4225017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b5eda574d2e7c4d!2sInverspot!5e0!3m2!1ses!2smx!4v1487832965550" width={400} height={200} frameBorder={0} style={{border: 0}} />
        </div>
        <div className="spacer double" />
      </div>
    </div>
  )
}
