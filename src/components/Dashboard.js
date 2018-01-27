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
      {this.props.bands.length?
        <PreviewPane bands={this.props.bands.slice(0,10)}/>:null
      
      }
      </div>
      </div>
    );
  }
}

export default Dashboard;