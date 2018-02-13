import React, { Component } from 'react';
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types'

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

  defaultOption = this.props.type==="menuBar" ?
    { value: "", label: "Show all Genres"} :
    { value: false, label: "Choose a Category" }

  genreOptions = this.props.type==="menuBar" ?
    [this.defaultOption, ...this.genres.map(val => ({ value: val, label: val }))] :
    [...this.genres.map(val => ({ value: val, label: val }))]

  render() {
    const { genre } = this.props;
    const value = genre && genre.value;

    return (
      <Select
        className="genre-filter"
        name="genre-selector"
        value={value}
        resetValue={this.defaultOption}
        onChange={this.props.handleChange}
        options={this.genreOptions}
        placeholder={this.defaultOption.label}
      />
    );
  }
}

const TYPES = ["menuBar","submit"]


GenreFilter.propTypes = {
  genre:PropTypes.any,
  type:PropTypes.oneOf(TYPES),
  handleChange:PropTypes.func.isRequired
}

export default GenreFilter;