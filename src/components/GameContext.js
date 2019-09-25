import React from "react";

export default React.createContext({
  turn: 1,
  player1: "",
  player2: "",
  turn: Number,
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
  nextTurn: add => {
    setTurn(add);
  }
});
