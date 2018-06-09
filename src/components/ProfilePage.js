import React, { Component } from 'react';
import { ButtonLine } from './SocialMediaButton'
import { linkChecker, emailChecker } from '../lib/validation'
import PropTypes from 'prop-types'

const ContactList = (props) => {

  if (props.contacts.length) {
    return <div>
      <h3 className="profile__subheading">Contact:</h3>
      {props.contacts.map(contact => <div key={contact.name}>{contact.name} : <a href={`mailto:${contact.address}`}>{contact.address}</a></div>)}
    </div>
  }
  else { return null }
}
const MemberList = (props) => {
console.log(props.members)
  if (props.members) { 
    return <div style={{ whiteSpace: "pre-wrap" }}>
      <h3 className="profile__subheading">Members:</h3>
      {props.members}
    </div>

  }
  else { return null }
}

class ProfilePage extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  
  }
  
  render() {
    
    console.log("rendering")
    const loaded = !!this.props.bandObject

    let bandInfo = <div className="ProfilePage">
      <img id="profile-photo" src={this.props.bandObject.full_photo_url} alt={this.props.bandObject.band_name} />
      <h1 className="profile__heading">{this.props.bandObject.band_name}</h1>
      <ButtonLine links={linkChecker(this.props.bandObject)} size="3x"/>
      <div><h3 className="profile__subheading">Genre:</h3> {this.props.bandObject.band_genre}</div>
      <MemberList members={this.props.bandObject.members} />
      <ContactList contacts={emailChecker(this.props.bandObject)} />

    </div>

    return (
      loaded ? bandInfo : "loading"
    );
  }
}

ProfilePage.propTypes = {
  bandObject: PropTypes.object.isRequired
}

export default ProfilePage;