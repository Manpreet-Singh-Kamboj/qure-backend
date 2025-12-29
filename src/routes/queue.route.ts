import { Router } from "express";
import {
  isAdminOrStaff,
  isAuthenticated,
} from "../middlewares/auth.middleware";
import { validate } from "../middlewares/schema.validate.middleware";
import {
  getQueueStatusParamsSchema,
  initializeQueueBodySchema,
  initializeQueueParamsSchema,
} from "../schemas/queue.schema";
import { QueueController } from "../controllers/queue.controller";

const router = Router();

router.post(
  "/init/:clinicId",
  isAuthenticated,
  isAdminOrStaff,
  validate({
    params: initializeQueueParamsSchema,
    body: initializeQueueBodySchema,
  }),
  QueueController.initializeQueue
);

router.get(
  "/:queueId/status",
  isAuthenticated,
  validate({
    params: getQueueStatusParamsSchema,
  }),
  QueueController.getQueueStatus
);

export { router as queueRouter };
