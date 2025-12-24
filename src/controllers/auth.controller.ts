import { Request, Response } from "express";
import { ResponseHandler } from "../utils/response.handler";
import {
  LoginSchema,
  LogoutSchema,
  RegisterSchema,
} from "../schemas/auth.schema";
import { AuthService } from "../services/auth.service";
import { getClientIp } from "../utils";

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

  static login = async (req: Request, res: Response) => {
    try {
      const { email, password, deviceInfo } = req.body as LoginSchema;

      const ipAddress = getClientIp(req);
      const data = await AuthService.login(
        email,
        password,
        deviceInfo?.userAgent,
        ipAddress
      );
      return ResponseHandler.success(res, "Logged in successfully", 200, data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return ResponseHandler.error(res, error.message, 401, null);
      }
      return ResponseHandler.error(
        res,
        "Something went wrong. Please try again later.",
        500,
        null
      );
    }
  };

  static logout = async (req: Request, res: Response) => {
    try {
      const { refreshToken } = req.body as LogoutSchema;

      await AuthService.logout(refreshToken);

      return ResponseHandler.success(res, "Logged out successfully", 200, null);
    } catch (error) {
      console.error(error);
      return ResponseHandler.error(
        res,
        "Something went wrong. Please try again later.",
        500,
        null
      );
    }
  };

  static getProfile = async (req: Request, res: Response) => {
    try {
      if (!req.user.id) {
        return ResponseHandler.error(res, "Unauthorized", 401, null);
      }
      const profile = await AuthService.getProfile(req.user.id);
      return ResponseHandler.success(res, undefined, 200, profile);
    } catch (error) {
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
