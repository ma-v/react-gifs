import React, { Component } from 'react';

import Gif from "./gif"

class GifList extends Component {
  ListGifs = () => {
    return this.props.gifs.map((gif) => {
        return <Gif id={gif.id} key={gif.id} selectGiffunction = {this.props.selectGiffunction}/>
    });
  }

  render() {
    return(
      <div className="gif-list">
        {this.ListGifs()}
      </div>
    )
  }
}

export default GifList;
