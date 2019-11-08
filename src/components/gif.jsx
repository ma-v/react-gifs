import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    console.log(event.target.id);
    this.props.selectGiffunction(event.target.id);
  };

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} className="gif" id={this.props.id} onClick={this.handleClick}/>
    );
  }
}

export default Gif;
