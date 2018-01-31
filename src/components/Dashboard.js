import React, { Component } from 'react';
import PreviewPane from './PreviewPane';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import { Link } from "react-router-dom";
import logo from "../mad-logo.png"
class Dashboard extends Component {
  

  render() {
    return (
      <div className="Dashboard">
      <Link style={{margin:"0 auto"}}to="/"><img id="logo" src={logo} alt="logo"/></Link>


          {this.props.bands.length ?
            <PreviewPane bands={this.props.bands.slice(0, 12)} getTwelveBands={this.props.getTwelveBands}/> : null

          }
      </div>
    );
  }
}

export default Dashboard;