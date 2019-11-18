import * as React from "react";

import * as signalR from "@microsoft/signalr";

type EnPassantBoardUpdate = {
  pgn: string;
};

export default () => {
  const [boardState, setBoardState] = React.useState<string>();

  React.useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://enpassanthub.azurewebsites.net/chessEvents")
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connection.on("BoardUpdate", payload => {
      console.log(payload);

      const parsed = JSON.parse(payload) as EnPassantBoardUpdate;

      setBoardState(parsed.pgn);
    });

    connection
      .start()
      .then(function() {
        console.log("connected");
      })
      .then(() =>
        fetch("https://enpassanthub.azurewebsites.net/sendTestEvent")
      );

    return () => {
      connection.stop();
    };
  }, [setBoardState]);

  return boardState;
};
