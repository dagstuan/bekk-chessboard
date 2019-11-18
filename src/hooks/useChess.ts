import React from "react";
import chessjs from "chess.js";

const useChess = (pgnString: string) => {
  const [board, setBoard] = React.useState<string>();

  React.useEffect(() => {
    if (pgnString) {
      const chess = chessjs();
      chess.load_pgn(pgnString);
      setBoard(chess.ascii());
    }
  }, [pgnString]);

  return board;
};

export default useChess;
