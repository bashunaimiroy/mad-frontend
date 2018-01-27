import React, { Component } from 'react';
import PreviewPane from './PreviewPane';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import FontAwesome from 'react-fontawesome'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">

      <SearchBar/>
      <div style={{display:"flex"}}>

      <GenreFilter/>
      <PreviewPane bands={this.props.bands.slice(0,10)}/>
      </div>
      </div>
    );
  }
}

export default Dashboard;