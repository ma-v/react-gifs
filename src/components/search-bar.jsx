import React, { Component } from 'react';

class SearchBar extends Component {
  handleInput = (event) => {
    const input = event.target.value;
    this.props.searchFunction(input);
  }

  render() {
    return(
      <input className="form-control form-search" onChange={this.handleInput}></input>
    )
  }
}

export default SearchBar;
