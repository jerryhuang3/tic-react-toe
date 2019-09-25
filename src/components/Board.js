import React from "react";
import Item from "./Item";

const Board = () => {
  let boardItem = [];
  for (let i = 1; i <= 9; i++) {
    boardItem.push(
      <div key={i} className={"board-item"}>
        <Item value={i} />
      </div>
    );
  }
  return <div className={"board"}>{boardItem}</div>;
};

export default Board;
