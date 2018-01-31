import React, { Component } from 'react';
// import react-select from 'react-select'

class GenreFilter extends Component {
  render() {
    return (
      <div className="GenreFilter">
<select name="select a genre">
  <option value="all">Show All Genres</option>
  <option value="rockalt">Rock/Alternative</option>
  <option value="singer">Singer-Songwriter</option>
  <option value="electropop">Electro/Pop</option>
  <option value="hiphop">Hip-Hop</option>
  </select>
      </div>
    );
  }
}

export default GenreFilter;