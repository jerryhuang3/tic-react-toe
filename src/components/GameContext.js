import React from "react";

export default React.createContext({
  player1: "",
  player2: "",
  winner: "",
  setPlayerOneName: name => {
    setPlayerOneName(name);
  },
  setPlayerTwoName: name => {
    setPlayerTwoName(name);
  },
  winner: player => {
    setWinner(player);
  }
});
