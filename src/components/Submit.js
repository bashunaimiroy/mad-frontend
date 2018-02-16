import React, { Component } from 'react';
import GenreFilter from './GenreFilter'
import styled from 'styled-components';
import firebase from 'firebase';
import Dropzone from 'react-dropzone'
import validate from 'validate.js'
import api from '../ApiWrapper'

const dropzoneStyle = {
  margin: "0 auto",
  height: "500px",
  width: "100%",
  border: "1px dashed black",
  textAlign: "center"
}

const Button = styled.button`
background-color: green;
color:white;
border:0px;
height:50px;
`

class Submit extends Component {

  constructor() {
    super()
    this.state = {
      admin_genre: { value: false, label: "Choose One" }
    }
  }

  
  handleGenre = option => this.setState({ admin_genre: option })

  handleImageDrop = (accepted,rejected) => {
    if(accepted){
    this.setState({ full_image_url: URL.createObjectURL(accepted[0])})}
    else if(rejected){

    }
  }

  formSubmit = () => {
    //todo: 
    // 1> resize image, set thumbnail to this.state.thumb_image_url
    // 2> upload both full_ and thumb_ image_url to firebase storage using firebase API
    // 2> get firebase/google cloud storage storage URLs
    // 2> update state with new URLs
    // 3>create band data object from this.state
    // 4> send band data object to server endpoint (to be created)
    let bandObject = {...this.state}
    
    // api.submitBand(bandObject)
  }

  render() {
    return (
      <div className="Submit">

        <h1>Submit</h1>
        <form onSubmit={this.formSubmit}>
          <fieldset>
            {!this.state.image ?
              <Dropzone
                style={dropzoneStyle}
                accept="image/*"
                multiple={false}
                onDrop={this.handleImageDrop}>
                <span style={{ display: "inline-block", margin: "48% auto" }}>Drop an image here or click to choose one</span>
              </Dropzone> :
              <img style={{ maxHeight: "500px" }} src={this.state.full_image_url} alt="user uploaded" />
            }
          </fieldset>

          <fieldset>
            <input style={{ height: "50px", fontSize: "1.5em" }} placeholder="Artist Name" onChange={e => this.setState({ band_name: e.target.value })} />
          </fieldset>

          <fieldset>
            <GenreFilter id="submit-selector" genre={this.state.admin_genre} handleChange={this.handleGenre} type="submit"/>
          </fieldset>
          <fieldset>
            <input placeholder="Genre" onChange={e => this.setState({ band_genre: e.target.value })} />
          </fieldset>
          <fieldset>
            <input placeholder="Music Link(Soundcloud or Bandcamp)" onChange={e => this.setState({ music_link: e.target.value })} />
            <input placeholder="Apple Music" onChange={e => this.setState({ apple_music_url: e.target.value })} />
            <input placeholder="Spotify" onChange={e => this.setState({ spotify_url: e.target.value })} />
            <input placeholder="Facebook" onChange={e => this.setState({ facebook_url: e.target.value })} />
            <input placeholder="Instagram" onChange={e => this.setState({ instagram_url: e.target.value })} />
            <input placeholder="Youtube" onChange={e => this.setState({ youtube_url: e.target.value })} />
            <input placeholder="Twitter" onChange={e => this.setState({ twitter_url: e.target.value })} />
          </fieldset>

          <fieldset>
            <input placeholder="Members" onChange={e => this.setState({ members: e.target.value })} />
          </fieldset>

          <fieldset>
            <input type="email" placeholder="Band Email" onChange={e => this.setState({ band_email: e.target.value })} />
            <input type="email" placeholder="Management Email" onChange={e => this.setState({ management_email: e.target.value })} />
            <input type="email" placeholder="Booking Email" onChange={e => this.setState({ booking_email: e.target.value })} />
            <input type="email" placeholder="PR Email" onChange={e => this.setState({ pr_email: e.target.value })} />
          </fieldset>
          <Button>Submit</Button>
        </form>

      </div>
    );
  }
}

export default Submit;