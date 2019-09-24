import React, { useState } from "react";
import GameContext from "./GameContext";

const GameProvider = props => {
  const [winner, setWinner] = useState(false);

  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  return (
    <GameContext.Provider
      value={{
        player1: playerOneName,
        player2: playerTwoName,
        winner: winner,
        setPlayerOneName: name => {
          setPlayerOneName(name);
        },
        setPlayerTwoName: name => {
          setPlayerTwoName(name);
        },
      	setWinner: player => {
          setWinner(player);
        }
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
