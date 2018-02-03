import React, { Component } from 'react';
import PreviewPane from './PreviewPane';
// import { Link } from "react-router-dom";
import logo from "../mad-logo.png"

class Dashboard extends Component {
  

  render() {
    const {bands,getTwelveBands,moreResults,genreDisplayed,searchtermDisplayed}=this.props
    const genreResults = !!genreDisplayed?<span>displaying results for {genreDisplayed}</span>:null
    const searchtermResults = !!searchtermDisplayed?<span>displaying results for {searchtermDisplayed}</span>:null
    
    return (
      <div className="Dashboard">
        <div className="header">
      <img id="logo" src={logo} alt="logo"/>      
      </div>
      {genreResults}
          {searchtermResults}
          {this.props.bands.length ?
            <PreviewPane bands={bands} getTwelveBands={getTwelveBands} moreResults={moreResults}/>: 
            <span className="little-message">loading artists...</span>

          }
      </div>
    );
  }
}

export default Dashboard;