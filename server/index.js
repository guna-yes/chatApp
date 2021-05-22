const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const app=express();
const server=http.createServer(app);
const PORT=process.env.PORT||5000;
const io=socketio(server )

const router=require('./routers')

app.use(router)

server.listen(PORT,(req,res)=>{
    console.log(`running on port ${PORT}`)
})