import React, { useEffect, useState } from "react";
import querystring from "query-string";
import io from "socket.io-client";
export default function Room({ location }) {
  const ENDPOINT = "http://localhost:8000/";
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  useEffect(() => {
    const { name, room } = querystring.parse(location.search);
    setroom(room);
    setname(name);

    const socket = io(ENDPOINT);
    socket.emit("join", { name, room });
    return () => {
      socket.emit("disconnec");
      socket.off();
    };
  }, [ENDPOINT, location.search]);
  return( 
  <div>
  Room
  </div>
  );
}
