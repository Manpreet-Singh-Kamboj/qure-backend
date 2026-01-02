import { Request, Response } from "express";
import { ResponseHandler } from "../utils/response.handler.js";
import {
  DeleteTokenForClinicSchema,
  GenerateTokenForClinicSchema,
} from "../schemas/token.schema.js";
import { TokenService } from "../services/token.service.js";
import { getIO } from "../socket/index.js";
import { QueueService } from "../services/queue.service.js";
import { redis } from "../redis/index.js";

export class TokenController {
  static generateTokenForClinic = async (req: Request, res: Response) => {
    try {
      const { queueId } = req.body as GenerateTokenForClinicSchema;
      const patientId = req.user.id;

      const token = await TokenService.generateTokenForClinic(
        queueId,
        patientId
      );
      return ResponseHandler.success(
        res,
        "Token generated successfully",
        201,
        token
      );
    } catch (error) {
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
  };

  static deleteTokenForClinic = async (req: Request, res: Response) => {
    try {
      const { tokenId } = req.params as DeleteTokenForClinicSchema;
      const patientId = req.user.id;
      const { queueId } = await TokenService.deleteTokenForClinic(
        tokenId,
        patientId
      );

      await redis.del(`queue:status:${queueId}`);
      const queueStatus = await QueueService.getQueueStatus(queueId);
      getIO().to(`queue:${queueId}`).emit("queue:status_update", queueStatus);

      return ResponseHandler.success(
        res,
        "Token deleted successfully",
        200,
        null
      );
    } catch (error) {
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
  };
}
