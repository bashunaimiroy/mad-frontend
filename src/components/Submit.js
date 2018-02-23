import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import GenreFilter from './GenreFilter'
import styled from 'styled-components';
import firebase from 'firebase';
import Dropzone from 'react-dropzone'
import validate from 'validate.js'
import api from '../ApiWrapper'

const cloudinaryPreset = "mhb4c6mg"

const dropzoneStyle = {
  margin: "0 auto",
  height: "400px",
  width: "90%",
  border: "6px dashed gray",
  textAlign: "center"
}

const Button = styled.button`
background-color: green;
color:white;
border:0px;
height:50px;
`

const DeleteButton = styled.button`
color:white;
border:0px;
height:60px;
width:60px;
background-color:rgba(0,0,0,0.2);
position: absolute;
right:0;
`

class Submit extends Component {

  constructor() {
    super()
    this.state = {
      admin_genre: { value: false, label: "Choose One" }
    }
  }


  handleGenre = option => this.setState({ admin_genre: option })

  handleImageDrop = (accepted, rejected) => {
    if (accepted) {
      if (accepted[0].size / 1048576 > 1) {
        console.log(accepted[0].size / 1048576, "in mb. too big sir")
        this.setState({ imageTooBig: true, 
          imageName: accepted[0].name })
      }
      else {

        this.setState({
          full_image_url: URL.createObjectURL(accepted[0]),
          imageTooBig: false
        })
        api.uploadImage(accepted[0])
      }
    }
    else if (rejected) {
      console.log("rejected file from dropzone")
    }
  }

  

  removeImage = (event) => {
    event.preventDefault()
    window.URL.revokeObjectURL(this.state.full_image_url)
    this.setState({ full_image_url: null })
  }


  formSubmit = () => {
    //todo: add image resizing with Firebase Functions. for now we simply limit image size
    let bandObject = { ...this.state }

    // api.submitBand(bandObject)
  }

  render() {
    return (
      <div className="Submit">

        <h1>Submit</h1>
        <form onSubmit={this.formSubmit}>
          <fieldset>
            {!this.state.full_image_url ?
              [<Dropzone
                key="dropzone"
                style={dropzoneStyle}
                accept="image/jpeg,image/png"
                multiple={false}
                onDrop={this.handleImageDrop}>
                <div style={{ display: "inline-block", margin: "44% auto" }}>
                  Images should be roughly square.
                  <p>1MB maximum, jpeg/png</p>
                </div>

              </Dropzone>
                , this.state.imageTooBig ? <span className="image-size-warning" key="too big message">{this.state.imageName} exceeds the 1mb max filesize</span> : null]
              :
              <div style={{ maxWidth: "90%", margin: "0 auto", position: "relative" }}>
                <img style={{ width: "100%" }} src={this.state.full_image_url} alt="user uploaded" />
                <DeleteButton onClick={this.removeImage}>
                  <FontAwesome size="4x" name="trash" />
                </DeleteButton>
              </div>
            }
          </fieldset>

          <fieldset>
            <input style={{ height: "50px", fontSize: "1.5em" }} placeholder="Artist Name" onChange={e => this.setState({ band_name: e.target.value })} />
          </fieldset>

          <fieldset>
            <GenreFilter id="submit-selector" genre={this.state.admin_genre} handleChange={this.handleGenre} type="submit" />
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