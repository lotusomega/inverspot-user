import React, { Component } from 'react';
import BannerText from '../components/BannerText'
import BannerImage from '../components/BannerImage'
import ContactForm from '../components/ContactForm'

function Media (props){
  return(
    <div className="container">
      <div className="row">
          <div className="col-md-6 ">
            <div className="card">
                <div className="card-image">
                  <div className="embed-responsive embed-responsive-16by9">
                      <iframe src="https://player.vimeo.com/video/190621870?color=4B118E&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                  </div>
                </div>
                <div className="card-content">
                    <span className="card-title">¿Qué es Inverspot?</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="card">
                <div className="card-image">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://player.vimeo.com/video/182658897?color=4B118E&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                  </div>
                </div>
                <div className="card-content">
                  <span className="card-title">¿Cómo funciona Inverspot?</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

function Card (props){
    return(
      <div className="col-xs-12 col-sm-6 col-lg-4">
          <div className="box">
              <div className="icon">
                  <div className="image"><i className={`fa ${props.clas}`}></i></div>
                  <div className="info">
                      <h3 className="title">{props.title}</h3>
                      <p>
                        {props.text}
                      </p>
                  </div>
              </div>
              <div className="space"></div>
          </div>
      </div>
    )
}

function TitleCards (props){
  return(
    <div>
      <div className="row main-container">
        <div className="spacer"></div>
        <h1 style={{color: '#5a5a5a', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>{props.title}</h1>
      </div>
      <div className="spacer"></div>
      <div className="container">
          <div className="row">
            {props.children}
          </div>
      </div>
    </div>
  )
}

function MiniCard (props){
  return(
    <div className="col-md-3">
      <center>
        <img alt="icon" src={props.src} className="icon-circle"/>
        <br/>
        <h4 className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: '20px'}}>{props.title}</h4>
        <p className="footertext" style={{fontFamily: 'AvenirNext-Regular', fontSize: '17px', fontWeight: '400'}}>{props.text}</p>
        <br/>
      </center>
    </div>
  )
}

class AboutUs extends Component {

  render() {
    return (
      <div>
        <div className="container">

          <div className="row propiedades">
            <div className="spacer double"></div>
            <h1 className="text-center"><b>Nosotros</b></h1>
            <div className="spacer double"></div>
            <BannerText title=""
              text="Somos una plataforma que busca conformar grupos de personas interesadas en invertir en desarrollos inmobiliarios con el fin
              de obtener atractivos rendimientos en desarrollos previamente valuados"/>
            <div className="spacer double"></div>
            <TitleCards title="">
                  <Card title="¿Qué es Inverspot?" clas="fa-cogs"
                    text="Inverspot es la primer plataforma de inversión colectiva en México que da la posibilidad de adquirir e invertir en desarrollos
                    inmobiliarios recibiendo excelentes rendimientos de una forma práctica, segura y confiable."/>
                  <Card title="¿Quienes conforman Inverspot?" clas="fa-users"
                    text="Somos un grupo de personas que hemos laborado en el sector financiero inmobiliario y tecnológico con más de 10 años de experiencia."/>
                  <Card title="¿Qué es una PIC?" clas="fa-window-restore"
                    text="Una PIC es una Plataforma de Inversión Colectiva que genera una oportunidad práctica de inversión, siendo asi la primer plataforma en México en conformar grupos solidos de inversión, eliminando intermediarios."/>
            </TitleCards>
            <div className="spacer double"></div>
            <Media />
            <div className="spacer" style={{height: '60px'}}></div>
            <BannerImage src="http://plat.mx/admin/wp-content/uploads/2017/01/12.jpg" title='Misión'
            text1="Lograr la mayor rentabilidad en el menor tiempo posible"
            text2="para quienes conforman los grupos de Inverspot."/>
            <div className="spacer" style={{height: '60px'}}></div>

            <TitleCards title="¿Cómo valuamos los proyectos?">
                  <Card title="Análisis" clas="fa-folder-open-o"
                    text="Inverspot analiza la viabilidad financiera del proyecto de una forma práctica, segura y confiable."/>
                  <Card title="Aspecto del proyecto" clas="fa-desktop"
                    text="Valuamos la reputación e historial de quién construye el proyecto."/>
                  <Card title="Estructura legal" clas="fa-folder-o"
                    text="Revisamos detalladamente la estructura legal de cada proyecto. ESTO HACE QUE LOS PROYECTOS QUE OFRECEMOS SEAN PROYECTOS SEGUROS."/>
            </TitleCards>

            <div className="spacer" style={{height: '60px'}}></div>

            <BannerText title="Comienza tú registro rápido, sencillo y seguro"
              text="Con el objetivo de optimizar los procesos y entrar de manera sencilla a un canal de inversión inmobiliario; hemos desarrollado la primera plataforma de inversión colectiva en México, operando bajo un modelo de negocio sencillo bajo una
              serie de procesos nada complicados. Invertir en el mercado inmobiliario nunca fue tan fácil.">
              <button className="button" data-toggle="modal" data-target="#inverModal-login">Comenzar registro</button>
            </BannerText>
            <div className="spacer" style={{height: '60px'}}></div>
            <BannerImage src="http://plat.mx/admin/wp-content/uploads/2017/01/sfRkE-o6kyDYokfKodpRQ.jpg" title="Visión"
            text1="Lograr la mayor rentabilidad en el menor tiempo posible"
            text2="para quienes conforman los grupos de Inverspot."/>
            <div className="spacer" style={{height: '60px'}}></div>

            <TitleCards title="¿Porqué Inverspot?">
              <MiniCard title="Nuestra plataforma" src="http://plat.mx/admin/wp-content/uploads/2017/01/analiza.png"
              text="Te mostramos día a día nuevas propiedades previamente revisadas que ofrecen atractivos rendimientos."/>
              <MiniCard title="Rentabilidad" src="http://plat.mx/admin/wp-content/uploads/2017/01/rendimientos.png"
              text="Dependiendo cada proyecto, podrás recibir atractivos retornos al termino de ellos."/>
              <MiniCard title="Flexibilidad" src="http://plat.mx/admin/wp-content/uploads/2017/01/grupo.png"
              text="Puedes donar, regalar, endosar, vender o dejar en garantía tus acciones notificándonoslo con anticipación."/>
              <MiniCard title="Seguridad" src="http://plat.mx/admin/wp-content/uploads/2017/01/documentacion.png"
              text="Tu dinero esta invertido y respaldado con inmuebles, por lo que tu capital esta 100% seguro."/>

              <MiniCard title="Plusvalía" src="http://plat.mx/admin/wp-content/uploads/2017/01/pic.png"
              text="Tus participaciones van incrementando su valor conforme a la plusvalía de la proyecto."/>
              <MiniCard title="Diversificación" src="http://plat.mx/admin/wp-content/uploads/2017/01/elige.png"
              text="En vez de invertir en un proyecto, puedes diversificar tu dinero en varios proyectos."/>
              <MiniCard title="Motores de inversión" src="http://plat.mx/admin/wp-content/uploads/2017/01/tu-pago.png"
              text="Sin duda es la mejor forma de que inviertas tu dinero en proyectos inmobiliarios con montos accesibles."/>
              <MiniCard title="Invierte a plazos" src="http://plat.mx/admin/wp-content/uploads/2017/01/rendimientos.png"
              text="En los proyectos para desarrollar y dependiendo cada proyecto, se podrá invertir en distintas parcialidades y podrás invertir con un anticipo desde $20,000."/>
            </TitleCards>
            <div className="spacer" style={{height: '60px'}}></div>

            <div className="row main-container registro-section" style={{backgroundColor: '#fff'}}>
                <div className="spacer"></div>
                <h1 style={{color: 'red', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>Somos la primer Plataforma Colectiva Inmobiliaria en México</h1>
                <p style={{fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: '100'}}>Inversión fácil, segura y al alcance de todos</p>
            </div>
            <div className="spacer" style={{height: '60px'}}></div>
            <div className="contact">
              <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <h1 style={{fontSize: '31px', color: 'white', fontFamily: 'AvenirNext-Regular', fontWeight: '900', textAlign: 'center'}}>Contáctanos<small></small></h1>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
            <div className="spacer" style={{height: '60px'}}></div>

            <div className="map-responsive">
            <iframe src="//mapkit.io/embed/BouyKL" width="400" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>

          </div>
        </div>
    </div>
    );
  }
}

export default AboutUs;
