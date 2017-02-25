import React, { Component } from 'react';
import BannerText from '../components/BannerText'
import BannerImage from '../components/BannerImage'
import SliderLogos from '../components/SliderLogos'

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
                      <div className="more">
                          <a href="#" title="Title Link">
                              Leer Más <i className="fa fa-angle-double-right"></i>
                          </a>
                      </div>
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

function BigCard(props){
  return(
    <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-${props.cl}`}>
      <div className={`listing listing-radius listing-${props.color || 'purple'}`}>
          <div className="shape">
              <div className="shape-text">{props.number}</div>
          </div>
          <div className="listing-content">
              <h3 className="lead">{props.title}</h3>
              <p>{props.text}</p>
          </div>
      </div>
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
            <h1 className="text-center"><b>¿Cómo funciona?</b></h1>
            <div className="spacer double"></div>
            <div className="row main-container registro-section">
              <div className="spacer"></div>
              <p style={{fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: '100'}}>Inverspot ofrece una gran lista de inmuebles<br/>
                para que puedas invertir en el que más te convenza</p>
            </div> 
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
            <div className="row main-container">
              <div className="spacer"></div>
              <h1 style={{color: '#5a5a5a', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>¿Cómo paraticipar en los proyectos?</h1>
            </div> 
            <div className="spacer"></div>

            <BigCard cl='4' number='1' title="1. Analiza" text="Analiza las opciones de inversión."/>
            <BigCard cl='4' number='2' title="2. Tú eliges" text="Consulta nuestra lista de inmuebles y elige el que más se adapte a tus necesidades."/>
            <BigCard cl='4' number='3' title="3. Aparta tu lugar" text="Regístrate en la plataforma y aparta la cantidad que deseas invertir."/>
            <div className="spacer double" style={{float:'left'}}></div>
            <BigCard cl='3' number='4' title="4. Llena tus formatos" text="Llena tu solicitud de inversión que te aparecerá después de apartar tu lugar en un grupo."/>
            <BigCard cl='3' number='5' title="5. Adquiere tus contratos" text="Una vez que estén firmados los contratos, realiza tus aportaciones de forma segura."/>
            <BigCard cl='3' number='6' title="6. Invierte" text="Analiza las opciones de inversión."/>
            <BigCard color="red" cl='3' number='7' title="7. Recibe tus rendimientos" text="Una vez concluido el desarrolló recibirás tu capital más utilidad."/>
            <div className="spacer" style={{height: '60px', float: 'left'}}></div>

            <BannerText title="Comienza a llenar tu contrato aquí"
              text="Todo, en un sencillo proceso">
              <button className="button" data-toggle="modal" data-target="#inverModal-login">Regístrate</button>
            </BannerText>
            <div className="spacer double"></div>
            <SliderLogos />
            

          </div>
        </div>
    </div>
    );
  }
}

export default AboutUs;
