import React, { Component } from 'react';
import { Link } from "react-router-dom";
import linelogo from "../mad-line-logo.png"
import SearchBar from "./SearchBar"
import GenreFilter from "./GenreFilter"

class NavBar extends Component {
  constructor() {
    super()
    this.state = { genre: "",searchterm:""}
  }

  handleGenreChange = (genreObject) => {
    //this changes the controlled component value
    this.setState({ genre: genreObject, searchterm:""})
    //then does the API call for the results for the genre, all in one action
    this.props.loadBandIDs(genreObject.value)
  }
  //but search is split into two functions:
  handleSearchChange = (e) => {
    //this function changes the controlled component value
    this.setState({ searchterm: e.target.value })
  }
  search = (e) => {
    //and this one makes the API call, for when they submit a searchterm
    e.preventDefault()
    this.setState({genre:""})
    this.props.loadBandIDs("", this.state.searchterm)
  }

  render() {
    return (
      <div className="NavBar">
        <GenreFilter genre={this.state.genre} handleChange={this.handleGenreChange} />

        <div className="nav-category">
          <Link to="/"><img src={linelogo} alt="logo" /></Link>
          <Link to="/submit">submit</Link>
          <Link to="/about">about</Link></div>

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

export default NavBar;