import React, { Component } from 'react';
import {ButtonGrid, linkChecker} from './SocialMediaButton'
import { Link } from 'react-router-dom'
import artistImage from '../artistImage.jpg'

class ArtistCard extends Component {
  //this function should be passed the band prop
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
  }


  validLinks = linkChecker(this.props.band)

  setHovered = (condition) => {
    this.setState({ hovered: condition })
  }

  render() {
    const idInUrl = encodeURIComponent(this.props.band.band_id)
    //To fix here: I've made a hovered state show another parent div inside the Artistcard,
    //containing ButtonGrid and the title Link. Need to play with dimensions.
    return (
      <div onMouseEnter={() => this.setHovered(true)}
        onMouseLeave={() => this.setHovered(false)}

        style={{ backgroundImage:
         `url('https://storage.cloud.google.com/montreal-artist-database.appspot.com/images/artist_images/${idInUrl}_thumb.jpg')` }}
         className="ArtistCard">

        {this.state.hovered ?
          <div style={{ margin: "auto", height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.35)" }}>
            <ButtonGrid links={this.validLinks} />
            <Link to={`/band/${idInUrl}`}>
              {this.props.band.band_name}
            </Link>
          </div>
          : null}
      </div>
    );
  }
}

export default ArtistCard;