import React, { useState } from "react";
import Item from "./Item";

const Board = () => {
  let board = [];

  const onClick = evt => {
    console.log("you clicked", evt.target.getAttribute("data-num"));
  };

  for (let i = 1; i <= 9; i++) {
    board.push(
      <div key={i} className={"board-item"} onClick={onClick} data-num={i}>
        <Item />
      </div>
    );
  }

  console.log(board[1]);

  return <div className={"board"}>{board}</div>;
};

export default Board;
