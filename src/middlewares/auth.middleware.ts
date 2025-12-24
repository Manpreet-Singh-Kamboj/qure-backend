import { NextFunction, Request, Response } from "express";
import { ResponseHandler } from "../utils/response.handler";
import { verifyAccessToken } from "../utils/token.util";
import { Role } from "../generated/prisma";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return ResponseHandler.error(res, "Unauthorized", 401, null);
    }
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return ResponseHandler.error(res, error.message, 401, null);
    }
    return ResponseHandler.error(res, "Unauthorized", 401, null);
  }
};

export const isPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.user.role !== Role.PATIENT) {
      return ResponseHandler.error(res, "Unauthorized", 401, null);
    }
    next();
  } catch (error) {
    console.error(error);
    return ResponseHandler.error(res, "Unauthorized", 401, null);
  }
};

export const isStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.user.role !== Role.STAFF) {
      return ResponseHandler.error(res, "Unauthorized", 401, null);
    }
    next();
  } catch (error) {
    console.error(error);
    return ResponseHandler.error(res, "Unauthorized", 401, null);
  }
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.user.role !== Role.ADMIN) {
      return ResponseHandler.error(res, "Unauthorized", 401, null);
    }
    next();
  } catch (error) {
    console.error(error);
    return ResponseHandler.error(res, "Unauthorized", 401, null);
  }
};
