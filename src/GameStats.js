import React, { Component, PropTypes } from 'react';

import RestartButton from './RestartButton';
import { GAME_STARTED, GAME_WON } from './game-states';

import './GameStats.css';

class GameStats extends Component {
  render() {
    return (
      <div className="GameStats">
        <span><h2>Moves:</h2> <h4>{this.props.moves}</h4></span>
        {this._renderGameState()}
      </div>
    );
  }

  _renderGameState() {
    if (this.props.gameState === GAME_STARTED) {
      return null;
    }

    if (this.props.gameState === GAME_WON) {
      return (
        <div className="GameStats-Wrapper">
          <span className="GameStats-Message">Congrats!</span>
          <RestartButton onClick={this.props.onRestart} />
        </div>
      );
    }
  }
}

GameStats.propTypes = {
  gameState: PropTypes.symbol.isRequired,
  moves: PropTypes.number,
  onRestart: PropTypes.func.isRequired,
};

GameStats.defaultProps = {
  moves: 0,
};

export default GameStats;
