import { Request, Response } from "express";
import { ResponseHandler } from "../utils/response.handler.js";
import { GenerateTokenForClinicSchema } from "../schemas/token.schema.js";
import { TokenService } from "../services/token.service.js";

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
}
