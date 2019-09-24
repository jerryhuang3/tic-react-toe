import React from "react";

export default React.createContext({
  player1: "",
	player2: "",
	gameStarted: bool => {
		setGameStarted(bool);
	},
});
