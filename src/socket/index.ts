import { Server as HttpServer } from "node:http";
import { Server, Socket } from "socket.io";
import { handleConnection } from "./handlers/connection";

let io: Server;

export function initializeSocket(server: HttpServer) {
  io = new Server(server, {
    cors: {
      origin: ["*"],
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => handleConnection(io, socket));

  console.log("🔌 Socket.IO initialized");
}

export function getSocketIO() {
  if (!io) throw new Error("Socket.io is not initialized.");
  return io;
}
