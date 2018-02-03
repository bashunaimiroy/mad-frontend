import React, { Component } from 'react';
import { Link } from "react-router-dom";
import linelogo from "../mad-line-logo.png"
import SearchBar from "./SearchBar"
import GenreFilter from "./GenreFilter"

class NavBar extends Component {
  constructor(){
    super()
    this.state={genre:""}
  }

  genreSet = (genre)=>{
    this.setState({genre})
    this.props.loadBandIDs(genre.value)
  }

  render() {
    return (
      <div className="NavBar">
      <GenreFilter genre={this.state.genre} handleChange = {this.genreSet}/>

        <div className="nav-category">
          <Link to="/"><img src={linelogo} alt="logo"/></Link>
          <Link to="/submit">submit</Link>
          <Link to="/about">about</Link></div>

          <div className="nav-category">
            <SearchBar/>
            <button onClick={()=>this.props.loadGenreIDs(this.state.genre)}>Go</button>
            </div>
          </div>
    );
  }
}

export default NavBar;