import React from 'react'
import paper from '../img/paper.svg'
import scissors from '../img/scissors.svg'

const Main2 = () => {
  return (
    <div id="Main2">
      <h1>Rock Paper Scissors with Compose</h1>
      <div className="container1">
        <div className="title">RESET THE TOUR</div>
        <div className="score_text">
          <div className="player">
            <div className="score">PLAYER SCORE:</div>
          </div>
          <div className="computer">
            <div className="score">COMPUTER SCROE:</div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="game_result">COMPUTER WON ! 🎉</div>
        <div className="game_img">
          <div className="player">
            <img src={paper} alt="" />
          </div>
          <div className="computur">
            <img src={scissors} alt="" />
          </div>
        </div>
        <p>Choose your move, rock paper or scissors?</p>
      </div>
      <div className="container3">
        <div className="rock">ROCK</div>
        <div className="paper">PAPER</div>
        <div className="scissors">SCISSORS</div>
      </div>
    </div>
  )
}

export default Main2