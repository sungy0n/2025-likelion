import React, { useState } from 'react';
import paper from '../img/paper.svg';
import scissors from '../img/scissors.svg';
import rock from '../img/rock.svg';

const weaponImages = {
  rock: rock,
  paper: paper,
  scissors: scissors,
};

const Main2 = () => {
  const [playerChoice, setPlayerChoice] = useState('rock'); // 플레이어의 현재 선택
  const [computerChoice, setComputerChoice] = useState('rock'); // 컴퓨터의 현재 선택
  const [playerScore, setPlayerScore] = useState(0); // 플레이어 점수
  const [computerScore, setComputerScore] = useState(0); // 컴퓨터 점수
  const [gameResult, setGameResult] = useState("Let's start game!"); // 게임 결과 메시지

  // 현재 선택에 해당하는 이미지 경로
  const currentPlayerImage = weaponImages[playerChoice];
  const currentComputerImage = weaponImages[computerChoice];

  // 컴퓨터의 선택을 무작위로 결정하는 함수
  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  // 승패를 판단 로직
  const determineWinner = (player, computer) => {
    if (player === computer) {
      return 'draw'; // 무승부
    } 
    // 플레이어가 이기는 경우
    else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      return 'player';
    } 
    // 컴퓨터가 이기는 경우
    else {
      return 'computer';
    }
  };

  // 버튼 클릭 처리 함수 (가장 중요)
  const handlePlayerChoice = (playerMove) => {
    const computerMove = getComputerChoice(); // 컴퓨터의 랜덤 선택
    
    // 플레이어와 컴퓨터의 선택 상태 업데이트
    setPlayerChoice(playerMove);
    setComputerChoice(computerMove);

    // 승자 결정
    const winner = determineWinner(playerMove, computerMove);

    // 점수 및 결과 메시지 업데이트
    if (winner === 'player') {
      setPlayerScore(prevScore => prevScore + 1); // 기존 점수에 +1
      setGameResult("PLAYER WON! 🎉");
    } else if (winner === 'computer') {
      setComputerScore(prevScore => prevScore + 1); // 기존 점수에 +1
      setGameResult("COMPUTER WON! 💻");
    } else { // draw
      setGameResult("IT'S A DRAW! 🤝");
    }
  };
  
  // 게임 초기화 함수
  const handleReset = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setGameResult("Game Reset. Choose your move!");
    setPlayerChoice('rock');
    setComputerChoice('rock');
  };


  return (
    <div id="Main2">
      <h1>Rock Paper Scissors with Compose</h1>
      <div className="container1">
        <div className="title" onClick={handleReset} style={{cursor: 'pointer'}}>
          RESET THE TOUR
        </div>
        <div className="score_text">
          <div className="player">
            <div className="score">PLAYER SCORE: {playerScore}</div>
          </div>
          <div className="computer">
            <div className="score">COMPUTER SCROE: {computerScore}</div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="game_result">{gameResult}</div>
        <div className="game_img">
          <div className="player">
            <img src={currentPlayerImage} alt={playerChoice} />
            
          </div>
          <div className="computure">
            <img src={currentComputerImage} alt={computerChoice} />
          </div>
        </div>
        <p>Choose your move, rock paper or scissors?</p>
      </div>
      <div className="container3">
        <button 
          className="rock_btn" 
          onClick={() => handlePlayerChoice('rock')}
        >
          ROCK
        </button>
        <button 
          className="paper_btn" 
          onClick={() => handlePlayerChoice('paper')}
        >
          PAPER
        </button>
        <button 
          className="scissors_btn" 
          onClick={() => handlePlayerChoice('scissors')}
        >
          SCISSORS
        </button>
      </div>
    </div>
  )
}

export default Main2;