import React from "react"
import FontAwesome from "react-fontawesome"
// takes in a band object with links(possibly null/undefined) returned from a band data query,
// returns only those which are present



const SocialMediaButton = (props)=>{
        return (<div className="SocialMediaButton">
            <a target="_blank" href={props.url}>
                <FontAwesome size={props.size} name={props.name} />
            </a>
            </div>)
            
    }


const ButtonLine = (props) => {
    let size = props.size || "3x"
    return (<div style={{ display: "flex" }}>
      {props.links.map((link, index) => {
        return <SocialMediaButton name={link.name} url={link.url} key={index} size={size}/>
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