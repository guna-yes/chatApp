import React, { useEffect, useState } from "react";
import querystring from "query-string";
const Room = ({ location }) => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  useEffect(() => {
    const { name, room } = querystring.parse(location.search);
    setroom(room);
    setname(name);
    return () => {};
  }, []);
  return;
  <div>
      
  </div>;
};
export default Room;
