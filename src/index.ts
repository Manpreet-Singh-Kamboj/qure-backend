import { initializeServer } from "./server.js";
import { initializeQueueCronJob } from "./cron/queue.cron.js";

initializeServer();
initializeQueueCronJob();
