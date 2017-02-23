import React, { Component } from 'react';

class BannerText extends Component {
  render() {
    return (
      <div className="row main-container registro-section">
          <div className="spacer"></div>
          <h1 style={{color: 'red', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>{this.props.title}</h1>
          <p style={{fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: '100'}}>{this.props.text}</p>
          {this.props.children}
      </div>
    );
  }
}

export default BannerText;
