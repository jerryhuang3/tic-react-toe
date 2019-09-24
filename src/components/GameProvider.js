import React, { useState } from "react";
import GameContext from "./GameContext";

const GameProvider = props => {
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState("");

  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  return (
    <GameContext.Provider
      value={{
        p1: playerOne,
        p2: playerTwo,
        winner: winner,
        game: gameStarted,
        gameStarted: bool => {
          setGameStarted(bool);
        },
        playerOne: name => {
          setPlayerOne(name);
        },
        playerTwo: name => {
          setPlayerTwo(name);
        },
        winner: player => {
          setWinner(player);
        }
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
