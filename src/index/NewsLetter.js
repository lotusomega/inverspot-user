import React, { Component } from 'react'

class NewsLetter extends Component {
  render() {
    const stylel={
      marginTop: "6px", marginLeft: "-24px"
    }
    const stylel2={
      display: "inline-block", width: "100%"
    }

    return (
      <div className="row main-container registro-section suscribe" style={stylel2}>
        <div className="spacer"></div>
            <h2 className="text-center">Suscríbete para recibir e-mails con nuevos proyectos, noticias y mucho más</h2>
            <form data-toggle="validator" role="form">
              <div className="form-group col-xs-12 col-sm-8 col-sm-offset-1 col-centered">
                <input type="email" className="form-control input-sm caja" name="newsletter" placeholder=""/>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group col-xs-12 col-sm-2 col-centered" style={stylel}>
                <input className="button large-invertion bton" value="Enviar" type="button"/>
              </div>
           </form>
      </div>
    )
  }
}

export default NewsLetter;
