import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/">LOGO</Link>
          <Link to="/submit">submit</Link>
          <Link to="/about">about this app</Link></div>
    );
  }
}

export default NavBar;