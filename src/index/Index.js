import React, { Component } from 'react';
import Slider from './Slider'
import PropertyCard from './PropertyCard'
import NewsLetter from './NewsLetter'

class Index extends Component {
  render() {
    return (
      <div>
        <Slider />
        <div className="container">
          <div className="row main-container propiedades">
            <div className="spacer double"></div>
            <h1><b>Proyectos para Invertir</b></h1>
            <div className="spacer triple"></div>
            <PropertyCard />

            <div className="spacer triple"></div>
            <NewsLetter />
            <div className="spacer triple"></div>


          </div>
        </div>
      </div>
    );
  }
}

export default Index;
