import React, { Component } from 'react';
import giphy from "giphy-api";

import SearchBar from "./search-bar";
import Gif from "./gif";
import GifList from "./gif-list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected:  "l44t77fhXkwa55U2ou",
      gifs: []
    }
  }

  search = (input) => {
    giphy("TIDuXc1lMsk4xx4kcnBJHUMiDVOLjxb2")
         .search({
          q: input,
          rating: 'g',
          limit: 10
        }, (err, res) => {
            this.setState({
              gifs: res.data
            })
         });
  }

  selectGif = (id) => {
    this.setState({
      selected: id
    })
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selected}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGiffunction={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
