import React, { Component } from 'react';
import { Link } from "react-router-dom";
import linelogo from "../mad-line-logo.png"
import SearchBar from "./SearchBar"
import GenreFilter from "./GenreFilter"
import PropTypes from 'prop-types'

class NavBar extends Component {
  constructor() {
    super()
    this.state = { genre: "", searchterm: "", navbarState:"hidden"}
  }

  handleGenreChange = (genreObject) => {
    this.navFoldUp()
    //this changes the controlled component value and clears the current searchterm
    this.setState({ genre: genreObject, searchterm: "" })
    //then does the API call for the results for the genre, all in one action
    this.props.loadBandIDs(genreObject.value)
  }
  //but search is split into two functions:
  handleSearchChange = (e) => {
    //this function changes the controlled component value
    this.setState({ searchterm: e.target.value })
  }
  navToggle = e=>{
    let navbarState = this.state.navbarState === "hidden"? "show" : "hidden";
    this.setState({navbarState})
  }
  navFoldUp = e=>{
    this.setState({navbarState:"hidden"})
  }
  search = (e) => {
    //and this one makes the API call, for when they submit a searchterm
    e.preventDefault()
    this.navFoldUp()
    this.setState({ genre: "" })
    this.props.loadBandIDs("", this.state.searchterm)
  }

  render() {
    return (
      <div className={"NavBar "+this.state.navbarState}>
        

        <div className="nav-category logo-category">
          <Link onClick={this.navFoldUp} to="/"><img src={linelogo} alt="logo" /></Link>
          <button onClick={this.navToggle} id="toggle">Menu</button>

        </div>
        <div className="nav-category">

          <Link onClick={this.navFoldUp} to="/submit">submit</Link></div>
        <div className="nav-category">
          <Link onClick={this.navFoldUp} to="/about">about</Link></div>


        <GenreFilter genre={this.state.genre} handleChange={this.handleGenreChange} type="menuBar" />

        <div className="nav-category">
          <SearchBar
            value={this.state.searchterm}
            onChange={this.handleSearchChange}
            onSubmit={this.search} />
        </div>
      </div>
    );
  }
}

NavBar.propTypes={
  loadBandIDs:PropTypes.func.isRequired
}
export default NavBar;