import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SimilarList from './SimilarList.jsx';
import Together from './Together.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      similarGames: [],
      togetherGames: []
    }

    this.getInitalGame = this.getInitalGame.bind(this);
    this.getSimilarGames = this.getSimilarGames.bind(this);
    this.getTogetherGames = this.getTogetherGames.bind(this);
  }

  getInitalGame() {
    axios.get('/api/games/one')
      .then((res) => {
        console.log('res', res.data)
        this.getSimilarGames(res.data.system);
        this.getTogetherGames(res.data.system);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getSimilarGames(system) {
    axios.get(`/api/games/${system}/similar`)
      .then((res) => {
        console.log('similar games:', res.data)
        this.setState({
          similarGames: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getTogetherGames(system) {
    axios.get(`/api/games/${system}/together`)
      .then((res) => {
        console.log('together games', res.data)
        this.setState({
          togetherGames: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getInitalGame();
  }

  render() {
    if (this.state.similarGames.length === 0 || this.state.togetherGames.length !== 3) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div>
          <Together games={this.state.togetherGames} />
          <SimilarList games={this.state.similarGames} />
        </div>
      );
    }
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired
}

export default App;