import { Request, Response } from "express";
import { ResponseHandler } from "../utils/response.handler";
import { CreateClinicSchema, GetClinicsSchema } from "../schemas/clinic.schema";
import { ClinicService } from "../services/clinic.service";

export class ClinicController {
  static createClinic = async (req: Request, res: Response) => {
    try {
      const {
        name,
        address,
        latitude,
        longitude,
        phone,
        email,
        website,
        description,
      } = req.body as CreateClinicSchema;
      const logo = req.files?.logo;
      const images = req.files?.images;
      if (!logo || !images) {
        return ResponseHandler.error(
          res,
          "Logo and images are required.",
          400,
          null
        );
      }
      const clinic = await ClinicService.createClinic(
        name,
        address,
        latitude,
        longitude,
        phone,
        email,
        website,
        description,
        logo,
        images
      );

      return ResponseHandler.success(
        res,
        "Clinic created successfully.",
        201,
        clinic
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

  static getClinics = async (req: Request, res: Response) => {
    try {
      const { latitude, longitude, radius, page, limit } =
        req.body || ({} as GetClinicsSchema);
      const clinics = await ClinicService.getClinics(
        latitude,
        longitude,
        radius,
        page,
        limit
      );
      return ResponseHandler.success(
        res,
        "Clinics fetched successfully.",
        200,
        clinics
      );
    } catch (error) {
      if (error instanceof Error) {
        return ResponseHandler.error(res, error.message, 400, null);
      }
    }
  };
}
