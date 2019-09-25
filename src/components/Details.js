import React, { useContext } from "react";
import GameContext from "./GameContext";

const Details = () => {
  const game = useContext(GameContext);

  let left;
	let right;
	
  if (game.turn > 9) {
    left = "GAME";
    right = "OVER";
  }
  return (
    <React.Fragment>
      <div className={"header"}>
        <h1>poop-cake-toe</h1>
        <h2>{game.playerOneTurn ? game.player1 : game.player2}'s Turn</h2>
      </div>
      <div className={"footer"}>
        <h1>{left} {right}</h1>
      </div>
      <div className={"left-side"}>
        <h3>{left}</h3>
      </div>
      <div className={"right-side"}>
        <h3>{right}</h3>
      </div>
    </React.Fragment>
  );
};

export default Details;
