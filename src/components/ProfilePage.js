import React, { Component } from 'react';
import { ButtonLine } from './SocialMediaButton'
import { linkChecker, emailChecker } from '../lib/validation'


const ContactList = (props) => {
  return <div>
    <h1>Contact:</h1>
    {props.contacts.map(contact => <div key={contact.name}>{contact.name} : <a href={`mailto:${contact.address}`}>{contact.address}</a></div>)}
  </div>
}

class ProfilePage extends Component {

  render() {

    const loaded = !!this.props.bandObject

    let bandInfo = <div className="ProfilePage">
      <img id="profile-photo" src={this.props.bandObject.full_photo_url} alt={this.props.bandObject.band_name} />
      <h1>{this.props.bandObject.band_name}</h1>
      <ButtonLine links={linkChecker(this.props.bandObject)} />
      <div>Genre: {this.props.bandObject.band_genre}</div>
      <div>Members: {this.props.bandObject.members}</div>
      <ContactList contacts={emailChecker(this.props.bandObject)} />

    </div>

    return (
      loaded ? bandInfo : "loading"
    );
  }
}

export default ProfilePage;