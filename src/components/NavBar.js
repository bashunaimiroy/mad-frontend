import React, { Component } from 'react';
import { Link} from "react-router-dom";
import linelogo from "../Katalogue-Montreal.png"
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'
import {ButtonLine} from './SocialMediaButton'

class NavBar extends Component {
  constructor() {
    super()
    this.state = { genre: "", searchterm: "", navbarState: "hidden", showSearch: false }
  }
  kickDrumLinks = [
    {name:"facebook",url:"https://www.facebook.com/kickdrumMTL"},
    {name:"instagram",url:"https://www.instagram.com/kickdrummtl"},
    {name:"twitter",url:"https://www.twitter.com/KickDrumMTL"},
    {name:"soundcloud",url:"https://www.soundcloud.com/kickdrummtl"},
    {name:"spotify",url:"http://spoti.fi/2H3XdzC"},
    {name:"youtube",url:"https://www.youtube.com/channel/UCs_OZ1ylUehBu7zEbiAm-oA"},
    
  ]
  handleGenreChange = (genreObject) => {
    this.navFoldUp()
    //this changes the controlled component value and clears the current searchterm
    this.setState({ genre: genreObject, searchterm: "" })
    //then does the API call for the results for the genre, all in one action
    this.props.setupDashboard(genreObject.value)
  }
  //but search is split into two functions:
  handleSearchChange = (e) => {
    //this function changes the controlled component value
    this.setState({ searchterm: e.target.value })
  }
  navToggle = e => {
    let navbarState = this.state.navbarState === "hidden" ? "show" : "hidden";
    this.setState({ navbarState })
  }
  navFoldUp = e => {
    this.setState({ navbarState: "hidden" })
  }
  toggleSearchBar = e => {
    this.setState(st => ({ showSearch: !st.showSearch }))
  }
  search = (e) => {
    //and this one makes the API call, for when they submit a searchterm
    e.preventDefault()
    this.navFoldUp()
    this.setState({ genre: "" })
    this.props.setupDashboard("", this.state.searchterm)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="NavBar" onClick={this.props.onClick}>
      <div className="nav-category nav-category--center">
        <div className="nav-category nav-category__spacer--left">
          {/* nothing in here, just needs to take up space */}
        </div>
        <div className="nav-category logo-category">
          <div className="logo-category__logo">
            <Link onClick={this.navFoldUp} to="/"><img src={linelogo} alt="logo" id="navbar-logo"/></Link>
            <div className="logo-category__social-media-icons">
              <ButtonLine links={this.kickDrumLinks} size="2x"/>
            </div>
          </div>
        </div>
        <button className="nav-category--right" onClick={this.navToggle} id="toggle">
            <FontAwesome name='bars'/>
        </button>
      </div>
        <div className="nav-category genre-filter large-screen">
          <GenreFilter genre={this.state.genre} handleChange={this.handleGenreChange} type="menuBar" />

        </div>
        
        <div className="nav-category large-screen nav-category--right">
        {this.state.showSearch? null : 
         [ <Link onClick={this.navFoldUp} to="/submit" key="submit">submit</Link>,
          <Link onClick={this.navFoldUp} to="/about" key="about">about</Link>]
        }

          <SearchBar
            value={this.state.searchterm}
            onChange={this.handleSearchChange}
            onSubmit={this.search}
            showSearch={this.state.showSearch} 
            toggleSearch={this.toggleSearchBar}/>
        </div>

        <div className={"mobile-navbar mobile-navbar--" + this.state.navbarState}>
          <div className="nav-category genre-filter small-screen">
            <GenreFilter genre={this.state.genre} handleChange={this.handleGenreChange} type="menuBar" />

          </div>
          
          <div className="nav-category small-screen">
          <Link onClick={this.navFoldUp} to="/submit" key="submit">submit</Link>
          </div>

          <div className="nav-category small-screen">
            <Link onClick={this.navFoldUp} to="/about" key="about">about</Link>
          </div>
          <div className="nav-category small-screen">
            <SearchBar
              value={this.state.searchterm}
              onChange={this.handleSearchChange}
              onSubmit={this.search}
              mobileSearch={true}
              toggleSearch={this.toggleSearchBar}/>
          </div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  setupDashboard: PropTypes.func.isRequired
}
export default NavBar;