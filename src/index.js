import React from "react";
import { render } from "react-dom";
import "./styles/styles.scss";
import Board from "./components/Board";

const App = () => {
  return (
		<div className={'container'}>
      <Board />
			</div>
  );
};

render(<App />, document.getElementById("root"));
