import React, { useState, useContext } from "react";
import GameContext from "./GameContext";
import checkWin from "../check";

const Item = props => {
  const game = useContext(GameContext);

  const [mark, setMark] = useState("💩");
  const [selected, setSelected] = useState(false);

  const onClick = evt => {
    game.addMove(parseInt(evt.target.id));
    evt.target.value = game.playerOneTurn ? "💩" : "🎂"; // set box value

    if (game.turn > 4) {
      const gameOver = checkWin(game.turn);
      if (gameOver) {
        game.setWinner(true);
      }
    }

    evt.target.setAttribute("disabled", "disabled");
    setSelected(!selected);
    game.playerOneTurn ? setMark("💩") : setMark("🎂"); // set box display
    game.setPlayerOneTurn();
    const addTurn = game.turn + 1;
    game.nextTurn(addTurn);
    console.log("changed player");
  };

  return (
    <button id={props.value} className={`item`} onClick={onClick} value={""}>
      {selected ? mark : ""}
    </button>
  );
};

export default Item;
