import React, { Component } from 'react';
import CardProfile from './CardProfile'
import BarProfile from './BarProfile'
import DataProfile from './DataProfile'
import PasswordProfile from './PasswordProfile'

class Profile extends Component {
  render() {
    return (
      <div>
        <CardProfile />
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <BarProfile />
          <DataProfile />
          <PasswordProfile />
        </div>
      </div>
    );
  }
}

export default Profile;
