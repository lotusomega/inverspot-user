import React, { Component } from 'react';
import ContactForm from '../components/ContactForm'

class Contact extends Component {

  render() {
    return (
      <div>
        <div className="container">
        <div className="spacer double"></div>
        <h1 className="text-center"><b></b></h1>
            <div className="spacer double"></div>
            <ContactForm />
            <div className="spacer" style={{height: '60px'}}></div>

            <div className="map-responsive">
            <iframe src="//mapkit.io/embed/BouyKL" width="400" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>

        </div>
    </div>
    );
  }
}

export default Contact;
