import React, { Component } from 'react';
import SocialMediaButton from './SocialMediaButton'
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router-dom'


const ButtonGrid = (props) => {
  //the button grid takes the first 4 social media links and returns a grid of buttons for them
  return (<div><div style={{
    display: "flex"}
    }>
    {props.linksObj.slice(0, 2).map(link => {
      return <SocialMediaButton name={link.name} url={link.url} />
    })}</div> <div style={
      {display:"flex"}
}>
  {
    props.linksObj.slice(2, 4).map(link => {
      return <SocialMediaButton name={link.name} url={link.url} />
    })
  }</div >
  </div >)
}
class ArtistCard extends Component {
  //this function should be passed the band prop

  linksObj = [
    { name: "music", url: this.props.band.MusicLink },
    { name: "spotify", url: this.props.band.Spotify },
    { name: "apple", url: this.props.band.AppleMusic },
    { name: "facebook", url: this.props.band.Facebook },
    { name: "youtube", url: this.props.band.Youtube },
    { name: "instagram", url: this.props.band.Instagram },
    { name: "twitter", url: this.props.band.Twitter }
  ].filter((val) => val !== null)


  render() {
    return (
      <div className="ArtistCard">
        <ButtonGrid linksObj={this.linksObj} />
        <Link to={`/band/${this.props.band.Name}`}>
{this.props.band.Name}
</Link>
      </div>
    );
  }
}

export default ArtistCard;