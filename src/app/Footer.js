import React, { Component } from 'react'
import {Link} from 'react-router'

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
                <p className="logop">Tu punto de inversión inmobiliario</p>
                <ul>
                  <li><p>Avenida de las Palmas 1320<br/> Lomas de Chapultepec, CDMX</p></li>
                  <li><p><a href="tel:015580006555"></a>01 (55) 8000 6555</p></li>
                  <li><p><a href="mailto:hola@inverspot.mx">hola@inverspot.mx</a></p></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <h2><b>Recursos</b></h2>
                <ul>
                  <li><Link to="privacy">Políticas de privacidad</Link></li>
                  <li><a href="http://spot_files.softin.mx/2016/12/brochure.pdf" target="_blank">Brochure informativo</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <h2><b>Soporte</b></h2>
                <ul>
                  <li><Link to="faq's">Preguntas Frecuentes</Link></li>
                  <li><Link to="contact">Contacto</Link></li>
                  <li><Link to="how-does-it-work">Como Funciona</Link></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <h2><b>Inverspot.mx</b></h2>
                <ul>
                  <li><Link to="notice">Aviso de privacidad</Link></li>
                  <li><Link to="about-us">Nosotros</Link></li>
                  <li><Link to="warranty">Garantia</Link></li>
                  <li><a href="http://blog.inverspot.mx/" target="_blank">News</a></li>
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
