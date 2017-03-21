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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15051.065127692984!2d-99.2228893!3d19.4225017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b5eda574d2e7c4d!2sInverspot!5e0!3m2!1ses!2smx!4v1487832965550" width="400" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>

        </div>
    </div>
    );
  }
}

export default Contact;
