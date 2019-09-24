import React, { useState, useEffect, useContext } from "react";
import GameProvider from "./GameProvider";
import Setup from "./Setup";
import Board from "./Board";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(false);

	// Game starts when both players are initialized on the setup.
  const start = bool => {
    console.log("PROP RECEIVED", bool);
    setGameStarted(bool);
  };

  return (
    <GameProvider>
      <div className={"container"}>
        {gameStarted ? <Board /> : <Setup init={start} />}
      </div>
    </GameProvider>
  );
};

export default App;
