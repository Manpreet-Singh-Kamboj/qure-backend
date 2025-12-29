import { Request, Response } from "express";
import {
  GetQueueStatusParamsSchema,
  InitializeQueueBodySchema,
  InitializeQueueParamsSchema,
} from "../schemas/queue.schema";
import { QueueService } from "../services/queue.service";
import { ResponseHandler } from "../utils/response.handler";

export class QueueController {
  static async initializeQueue(req: Request, res: Response) {
    try {
      const { clinicId } = req.params as InitializeQueueParamsSchema;
      const { maxQueueSize } = req.body as InitializeQueueBodySchema;
      const queue = await QueueService.initializeQueue(clinicId, maxQueueSize);
      return ResponseHandler.success(
        res,
        "Queue initialized successfully",
        201,
        queue
      );
    } catch (error: any) {
      if (error.code === "P2002") {
        return ResponseHandler.error(res, error.message, 400, null);
      }

      if (error instanceof Error) {
        return ResponseHandler.error(res, error.message, 400, null);
      }

      console.error(error);
      return ResponseHandler.error(
        res,
        "Something went wrong. Please try again later.",
        500,
        null
      );
    }
  }

  static async getQueueStatus(req: Request, res: Response) {
    try {
      const { queueId } = req.params as GetQueueStatusParamsSchema;
      const queueStatus = await QueueService.getQueueStatus(queueId);
      return ResponseHandler.success(
        res,
        "Queue status fetched successfully",
        200,
        queueStatus
      );
    } catch (error: any) {
      if (error instanceof Error) {
        return ResponseHandler.error(res, error.message, 400, null);
      }
      console.error(error);
      return ResponseHandler.error(
        res,
        "Something went wrong. Please try again later.",
        500,
        null
      );
    }
  }
}
