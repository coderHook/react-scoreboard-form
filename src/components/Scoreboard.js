import React, { Component } from 'react'
import './Scoreboard.css'
import Player from './Player'


export default class Scoreboard extends Component {

  state = {
    players: [
      {
        id: 1,
        name: 'Wouter',
        score: 2
      },
      {
        id: 2,
        name: 'Mimi',
        score: 5
      },
      {
        id: 3,
        name: 'Pedro',
        score: 4
      }
    ]
  }

  renderPlayer = (player) => {
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        key={player.id}
        updatePlayerScore={this.updatePlayerScore}
      />
    )
  }

  updatePlayerScore = (id, score) => {
    const updatePlayers = this.state.players.map(
      player => {
        if (player.id === id) {
          return {
            ...player,
            score
          }
        } else {
          return player;
        }
      }
    )

    this.setState({ players: updatePlayers });
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
                    .sort((a,b) => b.score - a.score)
                    .map(this.renderPlayer)
          }
        </ul>
        
      </div>
    )
  }
}
