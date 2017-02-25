import React, { Component } from 'react';
import BannerText from '../components/BannerText'
import BannerImage from '../components/BannerImage'
import SliderLogos from '../components/SliderLogos'

class Faqs extends Component {

  render() {
    return (
      <div>
      <div className="container">
            <div className="row propiedades">
                
                <div className="spacer"></div>
                <h1 className="text-center"><b>Preguntas Frecuentes</b></h1>
                <div className="spacer double"></div>

                <div className="container">
                  <div className="row">
                        <div className="container col-xs-12 col-lg-6">
                            <div className="panel-group" id="faqAccordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                            ¿QUÉ TIPOS DE PROYECTOS MANEJA INVERSPOT?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Todos los proyectos que Inverspot tiene en su plataforma tienen como finalidad el participar con el respaldo de una propiedad, lo que hace una participación muy segura y con atractivos rendimientos e incrementos en la plusvalía de la misma.
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                            ¿QUE ES PLUSVALÍA?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Es el resultado del aumento de valor de un inmueble en función a la demanda que este obtiene, de los contratos de renta que obtenga y principalmente depende de un  tiempo transcurrido.
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                            ¿CÓMO ESCOGE INVERSPOT LOS INMUEBLES?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Nos basamos principalmente en 4 cosas:</p>
                                            <p>1.- La zona en la que está</p>
                                            <p>2.- El precio de costo y el precio al que se vende el proyecto</p>
                                            <p>3.- La estructura legal de proyecto</p>
                                            <p>4.- El historial y experiencia del Desarollador</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                                            ¿NO ME LLEGO MI CORREO DE CONFIRMACIÓN?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse4" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>El correo de confirmación puede llegar a tu bandeja de spam o correos no deseados, esto se debe al tipo de configuración de tu e-mail. Si no lo encuentras en una de las carpetas antes indicadas, escríbenos un correo a hola@inverspot.mx.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                                            ¿EN CASO DE QUE SEA UN DESARROLLO, COMO SE AMPARA MI INVERSIÓN?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse5" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Inverspot firma con los desarrolladores la participación en la que entrara al proyecto y con los inversionistas la parte en la que estos decidieron entrar. Tu participación está amparada bajo contratos.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                                            ¿SE PUEDE VER EL INMUEBLE?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse6" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Por supuesto, tendrás la dirección de tu propiedad y puedes cerciorarte de que existe no solo en documentación sino en físico.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                                            ¿QUE OTRAS GARANTÍAS OBTENGO APARTE DE LA PROPIEDAD?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse7" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Garantizamos la devolución de tu participación a valor costo (solamente capital invertido) cuando lo desees, con 5 días de anticipación.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse8">
                                            ¿CUANDO RECIBIO MI UTILIDAD?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse8" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Una vez que el proyecto concluya y se venda se repartirá el capital más la utilidad que este haya generado. Si se va vendiendo el proyecto en el transcurso de la obra, dejaremos de aportar capital y muy  probablemente recuperaremos nuestro capital y la utilidad anticipada</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse9">
                                            ¿QUE SEGURIDAD HAY DE REALMENTE RECIBIR LOS RENDIMIENTOS QUE OFRECEN? </a>
                                        </h4>
                                    </div>
                                    <div id="collapse9" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Somos conservadores al momento de analizar un proyecto y estimar los ingresos que se tendrán, sin embargo, puede que el proyecto de construcción se alargue y los rendimientos se vean afectados.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                                            ¿DÓNDE ES MEJOR INVERTIR? </a>
                                        </h4>
                                    </div>
                                    <div id="collapse10" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Nosotros recomendamos diversificar lo más que se pueda, recomendamos que cheques que opción se acomoda más a tus posibilidades.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse11">
                                            ¿USTEDES TIENEN UNA GARANTÍA SOBRE LOS PROYECTOS?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse11" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Claro, como nosotros les garantizamos el capital a los inversionistas, somos los primeros interesados en tener un respaldo legal sobre cada proyecto que subimos a la plataforma.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse12">
                                            ¿EN QUÉ CASOS INVERSPOT NO ASEGURA EL CAPITAL?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse12" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Si existen guerras en el país, temblores o situaciones donde todos los proyectos de Inverspot se vean afectados, no podremos garantizar la devolución del capital, no obstante, la tierra y el proyecto seguirá tendiendo un valor el cual respalda su participación.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse13">
                                            SI QUISIERA CONOCERLOS PARA SABER DONDE ESTOY INVIRTIENDO<br/>¿CÓMO LE PUEDO HACER?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse13" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Con gusto puedes agendar una cita en el corporativo donde te mostraremos la estructura legal que manejamos.</p>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>  

                        <div className="container col-xs-12 col-lg-6">

                            <div className="panel-group" id="faqAccordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse14">
                                            ¿QUE PASA SI LA PROPIEDAD TIENE ALGÚN PROBLEMA LEGAL?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse14" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Previa a la compra del inmueble se checa toda la situación legal del inmueble, sin embargo se pueden presentar casos fortuitos que Inverspot atendería absorbiendo los costos con el fin de salvaguardar siempre el patrimonio de los socios.
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse15">
                                            ¿SE PAGA ALGÚN TIPO DE COMISIÓN O IMPUESTOS?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse15" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Las comisiones ya vienen contempladas en el monto total a invertir. Una vez que hagamos la devolución del capital se hará una retención del 20% de impuestos sobre la utilidad⁠⁠⁠⁠.
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse16">
                                            ¿QUE PASA SI NO SE LOGRA CONCRETAR EL GRUPO AL QUE INVERTÍ?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse16" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>En caso de que no se concrete la conformación del grupo, Inverspot realizará los pagos.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse17">
                                            ¿COMO PUEDO VENDER MI PARTICIPACIÓN?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse17" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>En caso de que te quieras salir del proyecto antes que se concluya o se venda, podrás conseguir por tu lado a algún comprador o nosotros te devolvemos tu capital.</p>
                                            <p>Próximamente tendremos un espacio para que revendas tu participación.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse18">
                                            ¿COMO ES LA FORMA DE PAGO AL RETIRAR MIS PARTICIPACIONES?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse18" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Se devuelve el capital integro más la plusvalía que se haya generado a la fecha de venta. Se hace la retención de dicha plusvalía por concepto de ISR y se te entrega una constancia.</p>

                                            <p>Para más información, favor de concretar una cita y se les explicara mas a detalle.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse19">
                                            ¿QUE PUEDO HACER CON MI PARTICIPACIÓN A PARTE DE VENDERLA?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse19" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Puedes empeñarla para obtener liquidez inmediata, donarla, regalarla, dejarla en garantía o simplemente ir acumulándolas, en cualquiera de los primeros casos, deberás notificarnos.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse20">
                                            ¿QUE PASA EN CASO DE FALLECIMIENTO?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse20" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Bajo contrato hay un beneficiario qué pasaría a ser titular el cual podrá decidir si decide con la participación o prefiere recuperar el capital.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse21">
                                            ¿ES POSIBLE INVERTIR DESDE OTRO PAÍS?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse21" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Si, es posible participar desde otro país. Para ello pedimos que se contacten vía email para poder apoyarlos.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse22">
                                            ¿PUEDO REVISAR LOS CONTRATOS QUE AMPARAN MI INVERSIÓN?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse22" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Por supuesto, solicita a hola@inverspot.mx que te envíen los contratos para tu revisión.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse23">
                                            ¿CUANTO TIEMPO LLEVAN EN EL MERCADO?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse23" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Como plataforma tecnológica llevamos desde febrero del 2016. Sin embargo, los socios de Inverspot llevamos más de 6 años en el sector financiero e invirtiendo en inmuebles.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse24">
                                            ¿QUE RIESGOS TENGO AL INVERTIR EN INMUEBLES?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse24" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Existen factores variables como el tiempo que Inverspot no puede controlar, es decir, si los proyectos se tardan en vender o la obra se atrasa, es un riesgo que corre el inversionista. Igualmente el rendimiento es una variable que puede mejorar por la plusvalía en la zona o empeorar según el precio al que se venda el inmueble si hay mucha oferta en la zona.</p>
                                            <p>En cuanto al capital, Inverspot lo asegura.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse25">
                                            ¿INVERSPOT ESTA REGULADO?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse25" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>No existe una regulación sobre el fondeo colectivo en México como lo hay en USA o Inglaterra, sin embargo, el inversionista tiene el respaldo de su capital en desarrollos inmobiliarios sólidos.</p>
                                        </div>
                                    </div>
                                </div>
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="spacer triple"></div>
      </div>
    );
  }
}

export default Faqs;
