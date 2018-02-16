import React from "react"
import FontAwesome from "react-fontawesome"
// takes in a band object with links(possibly null/undefined) returned from a band data query,
// returns only those which are present



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


export {SocialMediaButton, ButtonLine,ButtonGrid}