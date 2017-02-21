import React, { Component } from 'react'
import { Link } from 'react-router'

class PropertyCard extends Component {
  render() {
    const stylepc={
      fontSize: "12px", fontWeight: "400", color: "white"
    }
    const stylepc1={
      marginTop: "-20px"
    }
    const stylepc2={
      marginTop: "14px", textTransform: "none"
    }
    const stylepc3={
      fontWeight: "bold", color:"#f00"
    }
    const stylepc4={
      backgroundColor: "#4b118e", width:"65%"
    }
    const stylepc5={
      color:"#f00"
    }
    return (
      <div className="col-v col-xs-12 col-sm-4 col-md-4">
          <div className="card-v fondeada">
              <div className="row header-holder head-card">
                  <div className="col-xs-12 col-sm-4 col-md-4 left margin-head">
                      <h1>San Juan 125</h1>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-md-8 right margin-head">
                      <p style={stylepc}>Claudio Bernad 24</p>
                      <p style={stylepc}>Col Doctores</p>
                  </div>
              </div>
              <div className="row header-holder" style={stylepc1}>
                  <div className="col-xs-12 col-sm-12 col-md-12 investment-holder ">
                      <p className="p-promo" style={stylepc2}>Invierte desde <span>$100,000</span> pesos</p>
                  </div>
              </div>
              <figure className="main-card-image">
                  <a href="/inmuebles/doctores"><img src="http://placehold.it/400"/></a>
              </figure>
              <div className="row progress-bar-holder">
                  <div className="col-xs-6 col-sm-6 col-md-6 left"><p style={stylepc3}>$650,000</p></div>
                  <div className="col-xs-6 col-sm-6 col-md-6 right"><p style={stylepc3}>$1,000,000</p></div>
                  <div className="col-xs-12 col-sm-12 col-md-12 range-holder">
                      <div className="range" style={stylepc4}></div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 range-txt">
                      <p style={stylepc5}><span style={stylepc5}>13</span> Acciones disponibles de <span style={stylepc5}>20</span></p>
                  </div>
                  <hr className="hr-card"/>
              </div>
              <div className="info-cols-holder ">

                  <div className="col col-xs-4 col-sm-4 col-md-4">
                      <p className="tit">MONTO A INVERTIR</p>
                      <div className="icon icon-bill"></div>
                      <p>$150,000</p>
                  </div>
                  <div className="col col-xs-4 col-sm-4 col-md-4">
                      <p className="tit">PLAZO ESTIMADO</p>
                      <div className="icon icon-calendar"></div>
                      <p>22 MESES</p>
                  </div>
                  <div className="col col-xs-4 col-sm-4 col-md-4">
                      <p className="tit">RENDIMIENTO ESTIMADO</p>
                      <div className="icon icon-coins"></div>
                      <p>46 %</p>
                  </div>
              </div>
              <div className="row btns-holder">
                  <a href="#"><button className="button btn-v-card left">Ver Más</button></a>
                  <button className="button  btn-v-card right" data-toggle="modal" data-target="#invertir-modal">Invertir</button>
              </div>
          </div>
      </div>

    )
  }
}

export default PropertyCard;
