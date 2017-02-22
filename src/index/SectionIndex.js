import React, { Component } from 'react'

class SectionIndex extends Component {
  render() {
    const staylei={
      float: "right", width: "370px"
    }
    const staylei2={
      fontSize: "26px", textAlign: "right"
    }
    const staylei3={
      float: "left", width: "250px"
    }
    const staylei4={
      fontSize: "26px", textAlign: "left"
    }
    const stylei5={
      display: "inline-block", width: "100%"
    }

    return (
      <div className="container" style={stylei5}>
        <div className="col-xs-12 col-sm-6 col-centered">
          <div className="box-banner">
            <div>
              <img src="style/images/sellspot.png" className="img-fluid" style={staylei3} alt="Responsive"/>
              <div className="col-xs-12">
                  <h2 style={staylei4}>Promueve propiedades y gana<br/>comisiones</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-centered">
            <div className="box-banner">
                <div>
                    <img src="style/images/premiumspot.png" className="img-fluid" style={staylei} alt="Responsive"/>
                    <div  className="col-xs-12">
                        <h2 style={staylei2}>Buscas inversiones superiores<br/>a <b>$500,000</b></h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default SectionIndex;
