import React, { useContext } from "react";
import GameContext from "./GameContext";

const End = props => {
  const game = useContext(GameContext);

  let name = game.playerOneTurn ? game.player2 : game.player1;
  name = name.toUpperCase();

  return (
    <div className={"end"}>
      <h1>{`${name} WINS!!!`}</h1>
    </div>
  );
};

export default End;
