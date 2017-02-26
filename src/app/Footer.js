import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <section>
          <div className="container">
            <div className="row">
              <div className="divider col-xs-3 col-sm-3 col-lg-12">
              </div>
            </div>
          </div>

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="icon-logo-main"></div>
                        <p className="logop">Tu punto de inversión inmubiliario</p>
                            <ul>
                                <li><p>Avenida de las Palmas 1320<br/> Lomas de Chapultepec, CDMX</p></li>
                                <li><p><a href="tel:015580006555"></a>01 (55) 8000 6555</p></li>
                                <li><p><a href="mailto:hola@inverspot.mx">hola@inverspot.mx</a></p></li>
                            </ul>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <h2><b>Recursos</b></h2>
                        <ul>
                            <li><a href="politicas-de-privacidad.html">Políticas de privacidad</a></li>
                            <li><a href="http://spot_files.softin.mx/2016/12/brochure.pdf">Brochure informativo</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <h2><b>Soporte</b></h2>
                        <ul>
                          <li><a href="faqs.html">Preguntas Frecuentes</a></li>
                          <li><a href="contacto.html">Contacto</a></li>
                          <li><a href="como-funciona.html">Como Funciona</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <h2><b>Inverspot.mx</b></h2>
                        <ul>
                          <li><a href="aviso-de-privacidad.html">Aviso de privacidad</a></li>
                          <li><a href="nosotros.html">Nosotros</a></li>
                          <li><a href="garantia.html">Garantia</a></li>
                          <li><a href="#">News</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
      </section>

    )
  }
}

export default Footer;
