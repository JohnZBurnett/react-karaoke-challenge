import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor() {
    super(); 

    this.state = {
      currentSongs: []
    };
  }

  componentDidMount() {
    this.setState({
      currentSongs: songs
    })
  }

  componentDidUpdate() {
    console.log("currentSongs:", this.state.currentSongs)
  }
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={this.state.currentSongs}/>
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
