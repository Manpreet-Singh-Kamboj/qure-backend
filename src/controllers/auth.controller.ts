import { Request, Response } from "express";
import { ResponseHandler } from "../utils/response.handler";
import { RegisterSchema } from "../schemas/auth.schema";
import { AuthService } from "../services/auth.service";

export class AuthController {
  static register = async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, password } =
        req.body as RegisterSchema;

      await AuthService.register(firstName, lastName, email, password);

      return ResponseHandler.success(
        res,
        "Registered successfully. Please login to continue.",
        200,
        null
      );
    } catch (error: any) {
      console.error(error);

      if (error.code === "P2002") {
        return ResponseHandler.error(res, "Email already exists.", 400, null);
      }

      return ResponseHandler.error(
        res,
        "Something went wrong. Please try again later.",
        500,
        null
      );
    }
  };
}
