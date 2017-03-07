import React, { Component } from 'react'
import { Link } from 'react-router'

class Slider extends Component {
  render() {
    const stylesli={
      padding: "15px 20px", fontFamily: "AvenirNext-Bold", display: "inline-block"
    }
    return (
      <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="6500" id="bs-carousel">
            <ol className="carousel-indicators">
                <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#bs-carousel" data-slide-to="1"></li>
                <li data-target="#bs-carousel" data-slide-to="2"></li>
                <li data-target="#bs-carousel" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner">
            <div className="item slides active">
              <div style={{height: '100vh',backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat', backgroundImage: "url(/style/images/slide/slide1.jpg)"}} ></div>
              <div className="hero">
                <hgroup>
                    <h1>¡Participar desde $100,000 en<br/>inmuebles es posible!</h1>
                    <h3 className="hidden-xs hidden-sm">Inverspot, la primera plataforma de crowdfunding inmobiliario que te permite participar a plazo o de contado en México</h3>
                    <div className="hidden-xs hidden-sm btn-promo col-xs-6 col-sm-6 col-md-6">
                        <Link to='/proyectos'>
                        <button style={stylesli}>Ver proyectos</button></Link>
                    </div>
                    <div className="btn-promo col-xs-12 col-sm-6 col-md-6">
                        <button style={stylesli} data-toggle="modal">Registrate aquí</button>
                    </div>
                </hgroup>
              </div>
            </div>
            <div className="item slides">
              <div style={{height: '100vh',backgroundSize: 'cover',
                backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',
                backgroundImage: "url(/style/images/slide/slide2.jpg)"}} ></div>
              <div className="hero">
                <hgroup>
                    <h1>¡Participar desde $100,000 en<br/>inmuebles es posible!</h1>
                    <h3 className="hidden-xs hidden-sm">Inverspot, la primera plataforma de crowdfunding inmobiliario que te permite participar a plazo o de contado en México</h3>
                    <div className="hidden-xs hidden-sm btn-promo col-xs-6 col-sm-6 col-md-6">
                      <Link to='/proyectos'>
                      <button style={stylesli}>Ver proyectos</button></Link>
                    </div>
                    <div className="btn-promo col-xs-12 col-sm-6 col-md-6">
                        <button style={stylesli} data-toggle="modal" >Registrate aquí</button>
                    </div>
                </hgroup>
              </div>
            </div>
            <div className="item slides">
              <div style={{height: '100vh',backgroundSize: 'cover',
                backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',
                backgroundImage: "url(/style/images/slide/slide3.jpg)"}} ></div>
              <div className="hero">
                <hgroup>
                    <h1>¡Participar desde $100,000 en<br/>inmuebles es posible!</h1>
                    <h3 className="hidden-xs hidden-sm">Inverspot, la primera plataforma de crowdfunding inmobiliario que te permite participar a plazo o de contado en México</h3>
                    <div className="hidden-xs hidden-sm btn-promo col-xs-6 col-sm-6 col-md-6">
                      <Link to='/proyectos'>
                      <button style={stylesli}>Ver proyectos</button></Link>
                    </div>
                    <div className="btn-promo col-xs-12 col-sm-6 col-md-6">
                        <button style={stylesli} data-toggle="modal">Registrate aquí</button>
                    </div>
                </hgroup>
              </div>
            </div>
            <div className="item slides">
              <div style={{height: '100vh',backgroundSize: 'cover',
                backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',
                backgroundImage: "url(/style/images/slide/slide4.jpg)"}} ></div>
              <div className="hero">
                <hgroup>
                    <h1>¡Participar desde $100,000 en<br/>inmuebles es posible!</h1>
                    <h3 className="hidden-xs hidden-sm">Inverspot, la primera plataforma de crowdfunding inmobiliario que te permite participar a plazo o de contado en México</h3>
                    <div className="hidden-xs hidden-sm btn-promo col-xs-6 col-sm-6 col-md-6">
                        <Link to='/proyectos'>
                        <button style={stylesli}>Ver proyectos</button></Link>
                    </div>
                    <div className="btn-promo col-xs-12 col-sm-6 col-md-6">
                        <button style={stylesli} data-toggle="modal">Registrate aquí</button>
                    </div>
                </hgroup>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default Slider;
