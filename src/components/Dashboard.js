import React, { Component } from 'react';
import PreviewPane from './PreviewPane';
// import { Link } from "react-router-dom";
import logo from "../mad-logo.png"
class Dashboard extends Component {
  

  render() {
    const {bands,getTwelveBands,moreResults}=this.props
    return (
      <div className="Dashboard">
        <div className="header">
      <img id="logo" src={logo} alt="logo"/>
      </div>

          {this.props.bands.length ?
            <PreviewPane bands={bands} getTwelveBands={getTwelveBands} moreResults={moreResults}/> : 
            <div className="little-message">loading artists...</div>

          }
      </div>
    );
  }
}

export default Dashboard;