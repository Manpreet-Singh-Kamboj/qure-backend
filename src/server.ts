import { createServer, Server as HttpServer } from "node:http";
import { Express } from "express";
import { env } from "./config/dotenv.config";
import { initializeSocket } from "./socket";
import { initializeExpressServer } from "./app";

export function initializeServer(): void {
  const app: Express = initializeExpressServer();
  const server: HttpServer = createServer(app);

  initializeSocket(server);

  server.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
}
