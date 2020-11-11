import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "dT52j61muSZjsP8wSv"
    }
  }

search = (query) => {
  giphy('SWYb1KeBhSSbIuqtKYXAErkVCt41I37q').search({
    q: query,
    limit: 10,
    rating: 'g'
  }, (err, res) => {
    this.setState({
      gifs: res.data
    });
  });
}

  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
