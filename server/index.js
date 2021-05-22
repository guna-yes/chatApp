const express=require('express');
const http=require('http');
const app=express();
const server=http.createServer(app);
const cors = require("cors");
const PORT=8000;
const router=require('./routers')

const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
app.use(router)
app.use(cors());

io.on('connection',(socket) =>{
    console.log('New connection')

    socket.on('join',({name,room})=>{
        console.log(name,room)
    })
    socket.on('disconnect',() =>{
        console.log("Left")
    })
})





server.listen(PORT,(req,res)=>{
    console.log(`running on port ${PORT}`)
})