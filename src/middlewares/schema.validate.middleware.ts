import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";
import { ResponseHandler } from "../utils/response.handler";

export const validate =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return ResponseHandler.error(
        res,
        "Invalid request body",
        400,
        result.error.issues
      );
    }

    req.body = result.data;

    next();
  };
