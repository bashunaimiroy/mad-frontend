import React, { Component } from 'react';
import GenreFilter from './GenreFilter'
import styled from 'styled-components';
import firebase from 'firebase';
import Dropzone from 'react-dropzone'
import validate from 'validate.js'


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

  handleImageChoose = (accepted,rejected) => {
    if(accepted){
    this.setState({ image: URL.createObjectURL(accepted[0]) })}
    else if(rejected){

    }
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
                onDrop={this.handleImageChoose}>
                <span style={{ display: "inline-block", margin: "48% auto" }}>Drop an image here or click to choose one</span>
              </Dropzone> :
              <img style={{ maxHeight: "500px" }} src={this.state.image} alt="user uploaded" />
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