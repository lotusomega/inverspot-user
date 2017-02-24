import React, { Component } from 'react';

class ContactForm extends Component {

  render() {
    return (
      <div>
      <div className="contact">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 col-lg-12">
                      <h1 style={{fontSize: '31px', color: 'white', fontFamily: 'AvenirNext-Regular', fontWeight: '900', textAlign: 'center'}}>Contáctanos<small></small></h1>
                  </div>
              </div>
          </div>
      </div>
      <div className="spacer"></div>
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
                                      <span className="input-group-addon"><i className="fa fa-envelope-o" aria-hidden="true"></i>
                                      </span>
                                      <input type="email" className="form-control" id="email" placeholder="Ingrese su correo" required="required" /></div>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="subject">
                                      Asunto *</label>
                                  <select id="subject" name="subject" className="form-control" required="required">
                                      <option value="na" selected="">Elija uno:</option>
                                      <option value="service">General Customer Service</option>
                                      <option value="suggestions">Suggestions</option>
                                      <option value="product">Product Support</option>
                                  </select>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label htmlFor="name">
                                      Mensaje *</label>
                                  <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                      placeholder="Mensaje"></textarea>
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
                      <strong>Inverspot</strong><br/>
                      795 Folsom Ave, Suite 600<br/>
                      CD MX, México<br/>
                      <abbr title="Phone">
                          Teléfono:  (123) 456-7890</abbr>

                  </address>
                  <br/>
                  <address>
                      <strong>Correo Electrónico</strong><br/>
                      <a href="mailto:#">first.last@inverspot.mx</a>
                  </address>
                  </form>
              </div>
          </div>
      </div>
    </div>
    );
  }
}

export default ContactForm;
