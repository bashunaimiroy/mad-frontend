import React, { Component } from 'react';
import {ButtonLine, linkChecker} from './SocialMediaButton'




class ProfilePage extends Component {

  
  render() {
    const idInUrl = encodeURIComponent(this.props.bandObject.band_id)
    
    const loaded = !!this.props.bandObject
    
    let bandInfo= <div className="ProfilePage">
            <img id="profile-photo" src={`https://storage.cloud.google.com/montreal-artist-database.appspot.com/images/artist_images/${idInUrl}_full.jpg`} alt={this.props.bandObject.band_name}/>
            <h1>{this.props.bandObject.band_name}</h1>
            <ButtonLine links={linkChecker(this.props.bandObject)}/>
            <div>Genre: {this.props.bandObject.band_genre}</div>
            <div>Members:{this.props.bandObject.members}</div>

          </div>

    return (
      loaded? bandInfo:"loading"
    );
  }
}

export default ProfilePage;