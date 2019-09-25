import React, { useContext } from "react";
import GameContext from "./GameContext";

const Details = () => {
  const game = useContext(GameContext);

  const onClick = () => {
    window.location.reload();
  }

  let left;
  let right;

  if (game.turn > 9) {
    left = "GAME";
    right = "OVER";
  }
  return (
    <React.Fragment>
      <div className={"header"}>
      {game.turn > 9 ? (<button className={'reload'} onClick={onClick}>NEW GAME</button>) : ""}
        <h1>tic tac toe</h1>
      </div>
      <div className={"footer"}>
        <h2>{game.playerOneTurn ? game.player1 : game.player2}'s turn</h2>
      </div>
      <div className={"left-side"}>
        <h1>{left}</h1>
      </div>
      <div className={"right-side"}>
        <h1>{right}</h1>
      </div>
    </React.Fragment>
  );
};

export default Details;
