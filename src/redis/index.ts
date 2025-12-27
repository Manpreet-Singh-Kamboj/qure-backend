import IORedis from "ioredis";
import { env } from "../config/dotenv.config";
import { Queue, Worker, Job } from "bullmq";

const bullMQRedis = new IORedis(env.REDIS_URL!, {
  db: 0,
  maxRetriesPerRequest: null,
});
await bullMQRedis.flushdb();
const redis = new IORedis(env.REDIS_URL!, { db: 0 });
redis.flushdb();

export { bullMQRedis, redis, Queue, Worker, Job };
