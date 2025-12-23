import { createServer } from "node:http";
import app from "./app";
import { Server, Socket } from "socket.io";
import { env } from "./config/dotenv.config";

const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log(`A user connected with socket id ${socket.id}`);
});

server.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
