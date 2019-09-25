import React from "react";

export default React.createContext({
  turn: 1,
  player1: "",
  player2: "",
  p1moves: [],
  p2moves: [],
  turn: turn,
  playerOneTurn: true,
  winner: false,
  setPlayerOneName: name => {
    setPlayerOneName(name);
  },
  setPlayerOneTurn: bool => {
    setPlayerOneTurn(!playerOneTurn);
  },
  setWinner: bool => {
    setWinner(bool);
  },
  addMove: move => {
    playerOneTurn
      ? setP1moves([...p1moves, move])
      : setP2moves([...p2moves, move]);
  },
  nextTurn: add => {
    setTurn(add);
  }
});
