import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import GenreFilter from './GenreFilter'
import styled from 'styled-components';
import firebase from 'firebase';
import Dropzone from 'react-dropzone'
import validate from 'validate.js'
import api from '../ApiWrapper'


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
      if (accepted[0].size / 1048576 > 2) {
        console.log(accepted[0].size / 1048576, "in mb. too big sir")
        this.setState({
          imageTooBig: true,
          imageName: accepted[0].name
        })
      }
      else {

        this.setState({
          chosenImage:accepted[0],
          imagePreviewUrl: URL.createObjectURL(accepted[0]),
          imageTooBig: false
        })
      }
    }
    else if (rejected) {
      console.log("rejected file from dropzone")
    }
  }



  removeImage = (event) => {
    event.preventDefault()
    window.URL.revokeObjectURL(this.state.imagePreviewUrl)
    this.setState({ imagePreviewUrl: null })
  }

  addBandToDatabase = () => {
    let { admin_genre,
      band_name,
      band_genre,
      music_link,
      apple_music_url = "",
      spotify_url = "",
      facebook_url = "",
      instagram_url = "",
      twitter_url = "",
      youtube_url = "",
      band_email = "",
      management_email = "",
      booking_email = "",
      pr_email = "",
      members = "",
      band_description = "" } = this.state

    let bandObj = {
      admin_genre:admin_genre.value,
      band_name,
      band_genre,
      music_link,
      apple_music_url,
      spotify_url,
      facebook_url,
      instagram_url,
      twitter_url,
      youtube_url,
      band_email,
      management_email,
      booking_email,
      pr_email,
      members,
      band_description
    }
    console.log("bandObj is", bandObj,". now submitting")
    return api.submitBand(bandObj)
  }

  formSubmit = (e) => {
    e.preventDefault()
    this.addBandToDatabase()
      .then(response => {
        console.log("uploading image",this.state.chosenImage,"with response",response)
        api.uploadImage(this.state.chosenImage, response.body.insertedId)
        .then(snapshot=>console.log(snapshot))
      })
  }

  render() {
    return (
      <div className="Submit">

        <h1>Submit</h1>
        <form onSubmit={this.formSubmit}>
          <fieldset className="submit__image-drop">
            {!this.state.imagePreviewUrl ?
              [<Dropzone
                key="dropzone"
                style={dropzoneStyle}
                accept="image/jpeg,image/png"
                multiple={false}
                onDrop={this.handleImageDrop}>
                <div style={{ display: "inline-block", margin: "44% auto" }}>
                  Images should be roughly square.
                  <p>2MB maximum, jpeg/png</p>
                </div>

              </Dropzone>
                , this.state.imageTooBig ? <span className="image-size-warning" key="too big message">{this.state.imageName} exceeds the 1mb max filesize</span> : null]
              :
              <div style={{ maxWidth: "90%", margin: "0 auto", position: "relative" }}>
                <img style={{ width: "100%" }} src={this.state.imagePreviewUrl} alt="user uploaded" />
                <DeleteButton onClick={this.removeImage}>
                  <FontAwesome size="4x" name="trash" />
                </DeleteButton>
              </div>
            }
          </fieldset>

          <fieldset className="submit__field">
            <input style={{ height: "50px", fontSize: "1.5em" }} placeholder="Artist Name" onChange={e => this.setState({ band_name: e.target.value })} />
          </fieldset>

          <fieldset className="submit__field">
            <GenreFilter id="submit-selector" genre={this.state.admin_genre} handleChange={this.handleGenre} type="submit" />
          </fieldset>
          <fieldset className="submit__field">
            <input placeholder="Genre" onChange={e => this.setState({ band_genre: e.target.value })} />
          </fieldset>
          <fieldset className="submit__field">
            <input placeholder="Music Link(Soundcloud, Bandcamp or Band Site)" onChange={e => this.setState({ music_link: e.target.value })} />
            <input placeholder="Apple Music" onChange={e => this.setState({ apple_music_url: e.target.value })} />
            <input placeholder="Spotify" onChange={e => this.setState({ spotify_url: e.target.value })} />
            <input placeholder="Facebook" onChange={e => this.setState({ facebook_url: e.target.value })} />
            <input placeholder="Instagram" onChange={e => this.setState({ instagram_url: e.target.value })} />
            <input placeholder="Youtube" onChange={e => this.setState({ youtube_url: e.target.value })} />
            <input placeholder="Twitter" onChange={e => this.setState({ twitter_url: e.target.value })} />
          </fieldset>

          <fieldset className="submit__field">
            <input placeholder="Members" onChange={e => this.setState({ members: e.target.value })} />

          </fieldset>
          <textarea className="submit__textarea" rows="5" placeholder="Short Bio (500~ characters)" onChange={e => this.setState({ band_description: e.target.value })} />

          <fieldset className="submit__field">
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