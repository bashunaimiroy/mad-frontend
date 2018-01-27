import React, { Component } from 'react';
import SocialMediaButton from './SocialMediaButton'
import { Link } from 'react-router-dom'

const ButtonLine = (props)=>{
return(<div style={{display: "flex"}}>
    {props.links.map((link,index) => {
      return <SocialMediaButton name={link.name} url={link.url} key={index} />
})}</div> )
}
const ButtonGrid = (props) => {
  //the button grid takes the first 4 social media links and returns a grid of buttons for them
  return (<div style={props.style}>
    <ButtonLine links={props.linksObj.slice(0, 2)}/>
    <ButtonLine links={props.linksObj.slice(2, 4)}/>
   
    
  </div >)
}
class ArtistCard extends Component {
  //this function should be passed the band prop

  linksObj = [
    { name: "music", url: this.props.band.music_link },
    { name: "spotify", url: this.props.band.spotify_url },
    { name: "apple", url: this.props.band.apple_music_url },
    { name: "facebook", url: this.props.band.facebook_url },
    { name: "youtube", url: this.props.band.youtube_url },
    { name: "instagram", url: this.props.band.instagram_url },
    { name: "twitter", url: this.props.band.twitter_url }
  ].filter((val) => Boolean(val.url))

  
  render() {
    return (
      <div className="ArtistCard">
        <ButtonGrid style={{height:"80%"}} linksObj={this.linksObj} />
        <Link to={`/band/${encodeURIComponent(this.props.band.band_name)}`}>
          {this.props.band.band_name}
        </Link>
      </div>
    );
  }
}

export default ArtistCard;