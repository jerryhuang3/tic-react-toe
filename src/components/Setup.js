import React, { useState, useContext } from "react";
import GameContext from "./GameContext";

const Setup = props => {
  const game = useContext(GameContext);

  const [player1, setPlayer1] = useState(false);
  const [start, setStart] = useState(false);
  const [name, setName] = useState("");

  const onStartClick = () => {
    setStart(true);
  };

  const saveName = e => {
    e.preventDefault();
    setName("");
    player1
      ? (game.setPlayerName(name), game.setPlayerOneTurn(), startGame())
      : (game.setPlayerName(name), game.setPlayerOneTurn(), setPlayer1(true));
  };

  const typeName = e => {
    setName(e.target.value);
  };

  const startGame = () => {
    props.init(true);
  };

  return (
    <div className={"start"}>
      {start ? (
        <React.Fragment>
          {player1 ? (
            <form className={"player-one"} onSubmit={saveName}>
              <label>
                Player Two:
                <input
                  placeholder={"enter your name"}
                  autoFocus={"autofocus"}
                  onChange={typeName}
                  value={name}
                ></input>
              </label>
            </form>
          ) : (
            <form className={"player-one"} onSubmit={saveName}>
              <label>
                Player One:
                <input
                  placeholder={"enter your name"}
                  autoFocus={"autofocus"}
                  onChange={typeName}
                  value={name}
                ></input>
              </label>
            </form>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={"start-text"}>Welcome to the game!</div>
          <button onClick={onStartClick}>START</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Setup;
