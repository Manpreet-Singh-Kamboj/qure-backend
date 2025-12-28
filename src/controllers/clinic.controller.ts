import { Request, Response } from "express";
import { ResponseHandler } from "../utils/response.handler";
import {
  CreateClinicSchema,
  CreateClinicStaffBodySchema,
  CreateClinicStaffParamsSchema,
  GetClinicSchema,
  GetClinicsSchema,
  GetClinicStaffParamsSchema,
} from "../schemas/clinic.schema";
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
        "New clinic created successfully.",
        201,
        undefined
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

  static getClinic = async (req: Request, res: Response) => {
    try {
      const { clinicId } = req.params as GetClinicSchema;
      const clinic = await ClinicService.getClinic(clinicId);
      return ResponseHandler.success(
        res,
        "Clinic fetched successfully.",
        200,
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

  static createClinicStaff = async (req: Request, res: Response) => {
    try {
      const { clinicId } = req.params as CreateClinicStaffParamsSchema;
      const { userId } = req.body as CreateClinicStaffBodySchema;
      await ClinicService.createClinicStaff(clinicId, userId);
      return ResponseHandler.success(
        res,
        "Staff member added to clinic successfully.",
        201,
        undefined
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

  static getClinicStaffMembers = async (
    req: Request<GetClinicStaffParamsSchema, undefined, undefined>,
    res: Response
  ) => {
    try {
      const { clinicId } = req.params as GetClinicStaffParamsSchema;
      const staffMembers = await ClinicService.getClinicStaffMembers(clinicId);
      return ResponseHandler.success(
        res,
        "Staff members fetched successfully.",
        200,
        staffMembers
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
