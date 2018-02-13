import React from "react"
import FontAwesome from "react-fontawesome"
// takes in a band object with links(possibly null/undefined) returned from a band data query,
// returns only those which are present
const linkChecker = (band)=> [
    { name: "music", url: band.music_link },
    { name: "spotify", url: band.spotify_url },
    { name: "apple", url: band.apple_music_url },
    { name: "facebook", url: band.facebook_url },
    { name: "youtube", url: band.youtube_url },
    { name: "instagram", url: band.instagram_url },
    { name: "twitter", url: band.twitter_url }
  ].filter((val) => Boolean(val.url))
  // does the same with a list of emails
const emailChecker = (band)=> [
    { name: "Band", url: band.band_email },
    { name: "Management", url: band.management_email },
    { name: "Booking", url: band.booking_email },
    { name: "PR", url: band.pr_email }
  ].filter((val) => Boolean(val.url))



const SocialMediaButton = (props)=>{
        return (<div className="SocialMediaButton">
            <a href={props.url}>
                <FontAwesome size="3x" name={props.name} />
            </a>
            </div>)
            
    }


const ButtonLine = (props) => {
    return (<div style={{ display: "flex" }}>
      {props.links.map((link, index) => {
        return <SocialMediaButton name={link.name} url={link.url} key={index} />
      })}</div>)
  }
  const ButtonGrid = (props) => 
    //the button grid takes 4 social media links and returns a 2x2 grid of buttons for them
    (<div style={{
      height: "75%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <ButtonLine links={props.links.slice(0, 2)} />
      <ButtonLine links={props.links.slice(2, 4)} />  
    </div >)


export {SocialMediaButton, ButtonLine,ButtonGrid,linkChecker,emailChecker}