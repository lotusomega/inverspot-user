import React, { Component } from 'react';
import FAQCollapse from '../components/FAQCollapse'
import {panelsLeft, panelsRight} from './panels'

class Faqs extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row propiedades">

            <div className="spacer"></div>
            <h1 className="text-center"><b></b></h1>
            <div className="spacer double"></div>

            <div className="container">
              <div className="row">
                <div className="container col-xs-12 col-lg-6">
                  <FAQCollapse panels={panelsLeft} />
                </div>

                <div className="container col-xs-12 col-lg-6">
                  <FAQCollapse panels={panelsRight} />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default Faqs;
