import React, { Component } from 'react';

class BannerImage extends Component {
  render() {
    return (
      <div className="container" style={{background: `url(${ this.props.src }) no-repeat center center fixed`, width: '100%', height: '500px'}}>
          <div className="row">
              <div class="col-md-6 col-sm-12" style={{backgroundColor: 'rgba(75, 17, 142, 0.53)'}}>
                <div class="spacer"></div>
                <h1 style={{fontSize: '30px', color: 'white', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>{this.props.title}</h1>
                <p style={{color: 'white', fontSize: '20px', fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: '100'}}>{this.props.text1}</p>
                <p style={{color: 'white', fontSize: '20px', fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: '100'}}>{this.props.text2}</p><br/>
            </div>
          </div>
      </div>
    );
  }
}

export default BannerImage;
