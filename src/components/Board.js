import React, { useState, useContext } from "react";
import GameContext from "./GameContext";
import Item from "./Item";

import checkWin from "../check";

const Board = props => {
	const game = useContext(GameContext);
	
	
	// if (game.turn > 4) {
	// 	console.log(game.playerOneTurn ? game.player1 : game.player2)
	// 	const gameOver = checkWin(game.turn)
	// 	if (gameOver) {
	// 		console.log(
	// 			`BOARDjs ${game.playerOneTurn ? game.player1 : game.player2} wins!!!!!!`
	// 		);
	// 		// props.gameOver(true);
	// 	}
	// }


  let boardItem = [];

  for (let i = 1; i <= 9; i++) {
    boardItem.push(
      <div key={i} className={"board-item"} >
        <Item value={i} />
      </div>
    );
  }

  return <div className={"board"}>{boardItem}</div>;
};

export default Board;
