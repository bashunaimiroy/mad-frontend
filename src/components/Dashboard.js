import React, { Component } from 'react';
import PreviewPane from './PreviewPane';
import { Link } from "react-router-dom";
import logo from "../mad-logo.png"
class Dashboard extends Component {
  

  render() {
    return (
      <div className="Dashboard">
      <Link style={{margin:"0 auto"}}to="/"><img id="logo" src={logo} alt="logo"/></Link>


          {this.props.bands.length ?
            <PreviewPane bands={this.props.bands} getTwelveBands={this.props.getTwelveBands} moreResults={this.props.moreResults}/> : null

          }
      </div>
    );
  }
}

export default Dashboard;