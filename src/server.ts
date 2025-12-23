import { createServer, Server as HttpServer } from "node:http";
import app from "./app";
import { env } from "./config/dotenv.config";
import { initializeSocket } from "./socket";

export function initializeServer() {
  const server: HttpServer = createServer(app);

  initializeSocket(server);

  server.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
}
