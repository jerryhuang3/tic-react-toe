import React, { useState, useEffect, useContext } from "react";
import GameProvider from "./GameProvider";
import Setup from "./Setup";
import Board from "./Board";
import Details from "./Details";

const App = props => {
  const [gameStarted, setGameStarted] = useState(false);
  const [endGame, setEndGame] = useState(false);

  // Game starts when both players are initialized on the setup.
  const start = bool => {
    console.log("PROP RECEIVED", bool);
    setGameStarted(bool);
  };

  const end = bool => {
    setEndGame(bool);
  };

  let component;
  if (gameStarted) {
    component = <Setup init={start} />;
  }
  if (gameStarted && !endGame) {
    component = (
      <React.Fragment>
        <Details />
        <Board />
      </React.Fragment>
    );
  }
  if (gameStarted && endGame) {
  }

  return (
    <GameProvider winner={end}>
      <div className={"container"}>
        {component}
      </div>
    </GameProvider>
  );
};

export default App;
