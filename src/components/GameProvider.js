import React, { useState } from "react";
import GameContext from "./GameContext";

const GameProvider = props => {
  const [winner, setWinner] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [p1, setPlayerOneName] = useState("");
  const [p2, setPlayerTwoName] = useState("");
  const [turn, setTurn] = useState(1);

  if (winner) {
    props.winner(winner);
  }

  return (
    <GameContext.Provider
      value={{
        player1: p1,
        player2: p2,
        turn: turn,
        playerOneTurn: playerOneTurn,
        winner: winner,
        setPlayerName: name => {
          playerOneTurn ? setPlayerOneName(name) : setPlayerTwoName(name);
        },
        setPlayerOneTurn: bool => {
          setPlayerOneTurn(!playerOneTurn);
        },
        setWinner: player => {
          setWinner(player);
        },
        nextTurn: add => {
          setTurn(add);
        }
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
