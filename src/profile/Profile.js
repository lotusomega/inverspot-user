import React, { Component } from 'react';
import CardProfile from './CardProfile'
import BarProfile from './BarProfile'
import DataProfile from './DataProfile'
import PasswordProfile from './PasswordProfile'

class Profile extends Component {
  constructor(props){
    super(props)
    this.onUserInfoChange = this.onUserInfoChange.bind(this)
    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('my'))
    this.setState({user})
  }

  onUserInfoChange(user) {
    this.setState({user})
  }

  render() {
    return (
      <div>
        <CardProfile user={this.state.user}/>
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <BarProfile user={this.state.user}/>
          <DataProfile  userprofile={this.state.user} onChange={ this.onUserInfoChange } />
          <PasswordProfile userid={this.state.user._id} />
        </div>
      </div>
    );
  }
}

export default Profile;
