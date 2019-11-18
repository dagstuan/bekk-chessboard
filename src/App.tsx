import React from "react";
import useEnPassantHub from "./hooks/useEnPassantHub";
import Board from "./components/Board";
import useChess from "./hooks/useChess";

const App = () => {
  const boardState = useEnPassantHub();
  const board = useChess(boardState!);

  return (
    <div className="App">
      <Board boardAscii={board!} />
    </div>
  );
};

export default App;
