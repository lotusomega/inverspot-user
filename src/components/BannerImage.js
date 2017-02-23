import React, { Component } from 'react';

class BannerImage extends Component {
  render() {
    return (
      <div className="container" style={{background: `url(${ this.props.src }) no-repeat center center fixed`, width: '100%', height: '500px'}}>
          <div className="row">
              <div className="col-md-6 col-sm-12">
                  <div className="spacer"></div>
                  <h1 style={{fontSize: '30px', color: 'white', fontFamily: 'AvenirNext-Regular', fontWeight: '900'}}>The Big Picture</h1>
                  <p style={{color: 'white', fontSize: '20px', fontFamily: 'AvenirNext-Regular', fontStyle: 'normal', fontWeight: '100'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iusto, unde, sunt incidunt id sapiente rerum soluta voluptate harum veniam fuga odit ea pariatur vel eaque sint sequi tenetur eligendi.</p>
              </div>,
          </div>
      </div>
    );
  }
}

export default BannerImage;
