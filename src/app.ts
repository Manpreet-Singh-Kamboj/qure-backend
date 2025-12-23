import express, { Express, Response } from "express";
import { authRouter } from "./routes/auth.route";

const app: Express = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/health", (_, res: Response) => {
  res.status(200).json({
    health: "ok",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    message: "Server is running",
  });
});

export default app;
