const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const cors = require("cors");
const PORT = 8000;
const router = require("./routers");

const { addUser, removeUser, getUsersInRoom, getUser } = require("./users.js");

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
app.use(router);
app.use(cors());

io.on("connection", (socket) => {
  console.log("New connection");

  socket.on("join", ({ name, room }, callback) => {
    // console.log(name, room);
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback(error);
    }
    socket.emit("message", {
      text: `${user.name},Welcome to the room ${user.room}`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name},has joined`,
    });
    socket.join(user.room);
    callback();
  });

  socket.on('sendMessage',(message,callback) => {
    const user =getUser(socket.id);
    io.to(user.room).emit("message",{user:user.name,text:message})
    callback();

  })

  socket.on("disconnec", () => {
    console.log("Left");
  });
});

server.listen(PORT, (req, res) => {
  console.log(`running on port ${PORT}`);
});
