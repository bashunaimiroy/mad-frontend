import React, { Component } from 'react';
import {ButtonGrid} from './SocialMediaButton'
import {linkChecker} from '../lib/validation'
import { Link } from 'react-router-dom'
import defaultImage from '../leritz.jpg'
import styled from "styled-components"
import PropTypes from 'prop-types'



class ArtistCard extends Component {
  //this function should be passed the band prop
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  doNothing = () => {
    
  }

  validLinks = linkChecker(this.props.band)

  setHovered = (condition) => {
    this.setState({ hovered: condition })
  }

  render() {
    const thumbUrl = this.props.band.thumb_photo_url? this.props.band.thumb_photo_url : defaultImage
    const idInUrl = encodeURIComponent(this.props.band.band_id)
    //I used the react onMouseEnter and onMouseLeave events to make a hover overlay,
    //instead of css hover (which isn't supported in React afaik)
    return (
      <div onClick={this.doNothing} onMouseEnter={() => this.setHovered(true)}
        onMouseLeave={() => this.setHovered(false)}

        style={{ background:
         `#daa5208f url(${thumbUrl}) center/cover no-repeat` }}
         className="ArtistCard">

        {this.state.hovered ?
          <div style={{ margin: "auto", height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.35)" }}>
            <ButtonGrid links={this.validLinks} />
            <div className="artist-name"><Link to={`/band/${idInUrl}`}>
              {this.props.band.band_name}
            </Link></div>
          </div>
          : null}
      </div>
    );
  }
}

ArtistCard.propTypes = {
  band:PropTypes.object.isRequired
}

export default ArtistCard;