import React, { useContext } from "react";
import GameContext from "./GameContext";

const Details = () => {
  const game = useContext(GameContext);

  return (
    <React.Fragment>
      <div className={"header"}>
        <h1>poop-cake-toe</h1>
        <h2>Current Turn: {game.turn}</h2>
      </div>
      <div className={"footer"}>
        <h1>
          {game.playerOneTurn ? game.player1 : game.player2}'s Turn
        </h1>
      </div>
      <div className={"left-side"}>
        <h3>{game.player1}'s moves</h3>
        <p>
          {game.p1moves.map(move => (
            <li key={move}>{move}</li>
          ))}
        </p>
      </div>
      <div className={"right-side"}>
        <h3>{game.player2}'s moves</h3>
        <p>
          {game.p2moves.map(move => (
            <li key={move}>{move}</li>
          ))}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Details;
