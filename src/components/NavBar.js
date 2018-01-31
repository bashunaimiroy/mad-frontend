import React, { Component } from 'react';
import { Link } from "react-router-dom";
import linelogo from "../mad-line-logo.png"
import SearchBar from "./SearchBar"
import GenreFilter from "./GenreFilter"

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="nav-category">
          <Link to="/"><img src={linelogo} alt="logo"/></Link>
          <Link to="/submit">submit</Link>
          <Link to="/about">about</Link></div>

          <div className="nav-category">
            <GenreFilter/>
            <SearchBar/>
            <button>Go</button>
            </div>
          </div>
    );
  }
}

export default NavBar;