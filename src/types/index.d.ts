import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export type ResponseMeta = Record<string, any>;

export type HttpStatusCode =
  | 200 // OK
  | 201 // Created
  | 202 // Accepted
  | 204 // No Content
  | 400 // Bad Request
  | 401 // Unauthorized
  | 403 // Forbidden
  | 404 // Not Found
  | 409 // Conflict
  | 422 // Unprocessable Entity
  | 500 // Internal Server Error
  | 502 // Bad Gateway
  | 503; // Service Unavailable;

export interface AccessTokenPayload extends JwtPayload {
  id: string;
  email?: string;
  role?: string;
  type: "access";
}

declare global {
  namespace Express {
    interface Request {
      user: AccessTokenPayload;
      files?: {
        images: string[];
      };
    }
  }
}

export type UploadedImage = {
  name: string;
  data: {
    type: "Buffer";
    data: number[];
  };
  size: number;
  encoding: string;
  tempFilePath: string;
  truncated: boolean;
  mimetype: string;
  md5: string;
};
