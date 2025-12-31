import { Router } from "express";
import {
  isAdminOrStaff,
  isAuthenticated,
} from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/schema.validate.middleware.js";
import {
  getQueueStatusParamsSchema,
  initializeQueueBodySchema,
  initializeQueueParamsSchema,
} from "../schemas/queue.schema.js";
import { QueueController } from "../controllers/queue.controller.js";

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
