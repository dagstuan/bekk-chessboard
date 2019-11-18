import * as React from "react";

type BoardProps = {
  boardAscii: string;
};

const Board = (props: BoardProps) => {
  const { boardAscii } = props;

  return (
    <div
      style={{
        maxWidth: "100px",
        fontFamily: "monospace",
        whiteSpace: "pre"
      }}
    >
      {boardAscii}
    </div>
  );
};

export default Board;
