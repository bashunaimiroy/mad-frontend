import React, { Component } from 'react';
import Select from 'react-select'
import 'react-select/dist/react-select.css';


class GenreFilter extends Component {

  genres = [
    'Classical & Traditional',
    'DJ',
    'Electro/Pop',
    'Experimental',
    'Hip-Hop',
    'Jazz',
    'Metal',
    'Punk',
    'R&B, Soul, Funk',
    'Rock/Alternative',
    'Singer-Songwriter',
    'World & Reggae'
  ]
  allGenreOption = { value: "", label: "Show all Genres" }
  genreOptions = [this.allGenreOption,
    ...this.genres.map(val => ({ value: val, label: val }))]
    
  render() {
    const { genre } = this.props;
    const value = genre && genre.value;
    
    return (
        <Select
          className = "genre-filter"
          name="genre-selector"
          value={value}
          resetValue = {this.allGenreOption}
          onChange = {this.props.handleChange}
          options={this.genreOptions}
        />
    );
  }
}

export default GenreFilter;