import IORedis from "ioredis";
import { env } from "../config/dotenv.config";
import { Queue, Worker, Job } from "bullmq";

let bullMQRedis: IORedis;
let redis: IORedis;

if (process.env.NODE_ENV === "development") {
  bullMQRedis = new IORedis({
    db: 0,
    maxRetriesPerRequest: null,
    port: 6379,
    host: "127.0.0.1",
  });
  redis = new IORedis({ db: 0, port: 6379, host: "127.0.0.1" });
} else {
  bullMQRedis = new IORedis(env.REDIS_URL!, {
    db: 0,
    maxRetriesPerRequest: null,
  });
  await bullMQRedis.flushdb();
  redis = new IORedis(env.REDIS_URL!, { db: 0 });
  await redis.flushdb();
}

export { bullMQRedis, redis, Queue, Worker, Job };
