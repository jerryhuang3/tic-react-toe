import React, { useContext } from "react";
import GameContext from "./GameContext";

const End = () => {
  const game = useContext(GameContext);

  let name = game.playerOneTurn ? game.player2 : game.player1;
  name = name.toUpperCase();

  const onClick = () => {
    window.location.reload();
  }

  return (
    <div className={"end"}>
      <h1>{`${name} WINS!!!`}</h1>
      <button class={'reload'} onClick={onClick}>NEW GAME</button>
    </div>
  );
};

export default End;
