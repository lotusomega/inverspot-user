import React, { Component } from 'react';
import CardProfile from '../Components/CardProfile'
import BarProfile from '../Components/BarProfile'
import DataProfile from '../Components/DataProfile'
import PasswordProfile from '../Components/PasswordProfile'

class Profile extends Component {
  render() {
    const stylep={
      paddingTop: "50px"
    }
    return (
      <div>
        <div style={stylep}> </div>
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
