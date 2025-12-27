import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Client Connected: ${socket.id}`);

  socket.on('join_room', (data)=>{
    socket.join(data)
  })

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", {
      message: data.message,
    });
  });
});

server.listen(3002, () => {
  console.log("Server running on port 3002");
});
