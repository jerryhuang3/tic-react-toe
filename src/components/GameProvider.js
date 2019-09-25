import React, { useState } from "react";
import GameContext from "./GameContext";

const GameProvider = props => {
  const [winner, setWinner] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [p1, setPlayerOneName] = useState("");
  const [p2, setPlayerTwoName] = useState("");
  const [p1moves, setP1moves] = useState([]);
  const [p2moves, setP2moves] = useState([]);
  const [turn, setTurn] = useState(1);

  if (winner) {
    props.winner(winner);
  }

  return (
    <GameContext.Provider
      value={{
        player1: p1,
        player2: p2,
        p1moves: p1moves,
        p2moves: p2moves,
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
        addMove: move => {
          playerOneTurn
            ? setP1moves([...p1moves, move])
            : setP2moves([...p2moves, move]);
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
