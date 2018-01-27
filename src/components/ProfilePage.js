import React, { Component } from 'react';




class ProfilePage extends Component {
  render() {
    return (
      <div className="ProfilePage">
        
        <h1>{this.props.match.params.bandname}</h1>
        Here we'd make an call to our backend API to get the large image, the bio, emails, etc.

      </div>
    );
  }
}

export default ProfilePage;