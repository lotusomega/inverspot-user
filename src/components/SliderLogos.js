import React, { Component } from 'react';

class SliderLogos extends Component {
  render() {
    return (
      <div>
      <div className="hidden-xs hidden-sm conteiner">
           <div className="row">
              <div className="col-xs-12 col-centered">
                   <div className="spacer"></div>
                    <h1 className="text-center"><b>Ellos Hablan de Nosotros</b></h1>
                    <div className="spacer"></div>
              </div>
            </div>
        </div>

        <div className="hidden-xs hidden-sm container">
          <div className='row'>
            <div className='col-md-12'>
              <div className="carousel slide media-carousel" id="media">
                <div className="carousel-inner">
                  <div className="item  active">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/ebu.gif"/></a>
                      </div>          
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/econo.gif"/></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/expa.gif"/></a>
                      </div>        
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/mun.gif"/></a>
                      </div>          
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/neo.gif"/></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/noti.gif"/></a>
                      </div>        
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/sinem.gif"/></a>
                      </div>          
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/tecno.gif"/></a>
                      </div>
                      <div className="col-md-4">
                        <a className="thumbnail"><img alt="" src="style/images/logos/imag.gif"/></a>
                      </div>      
                    </div>
                  </div>
                </div>
                <a data-slide="prev" href="#media" className="left carousel-control">‹</a>
                <a data-slide="next" href="#media" className="right carousel-control">›</a>
              </div>                          
            </div>
          </div>
        </div>

        <div className="hidden-xs hidden-sm container">
          <div className='row'>
            <div className='col-md-2 col-md-offset-5'>
                <button type="button" className="btn button btn-lg btn-block"><a href="ellos-hablan-de-nosotros.html" style={{color: 'white'}}>Ver más</a></button>     
            </div>
          </div>
        </div>   
        
      </div>
    );
  }
}

export default SliderLogos;
