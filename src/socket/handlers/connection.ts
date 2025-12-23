import { Server, Socket } from "socket.io";

export const handleConnection = (io: Server, socket: Socket) => {
  console.log(`🟢 Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`🔴 Client disconnected: ${socket.id}`);
  });
};
