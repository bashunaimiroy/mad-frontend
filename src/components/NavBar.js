import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../mad-logo.png"
class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/"><img id="logo" src={logo} alt="logo"/></Link>
          <Link to="/submit">submit</Link>
          <Link to="/about">about this app</Link></div>
    );
  }
}

export default NavBar;