import { Redis } from "ioredis";
import { env } from "../config/dotenv.config.js";
import { Queue, Worker, Job } from "bullmq";

let bullMQRedis: Redis;
let redis: Redis;

if (process.env.NODE_ENV === "development") {
  bullMQRedis = new Redis({
    db: 0,
    maxRetriesPerRequest: null,
    port: 6379,
    host: "127.0.0.1",
  });
  redis = new Redis({ db: 0, port: 6379, host: "127.0.0.1" });
} else {
  bullMQRedis = new Redis(env.REDIS_URL!, {
    db: 0,
    maxRetriesPerRequest: null,
  });
  await bullMQRedis.flushdb();
  redis = new Redis(env.REDIS_URL!, { db: 0 });
  await redis.flushdb();
}

export { bullMQRedis, redis, Queue, Worker, Job };
