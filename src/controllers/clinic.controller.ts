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
  static createClinic = async (
    req: Request<object, unknown, CreateClinicSchema>,
    res: Response
  ) => {
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
      } = req.body;
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
      await ClinicService.createClinic(
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

  static getClinics = async (
    req: Request<undefined, undefined, GetClinicsSchema>,
    res: Response
  ) => {
    try {
      const {
        latitude,
        longitude,
        radius,
        page = 1,
        limit = 10,
      } = req.body ?? {};
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

  static getClinic = async (
    req: Request<GetClinicSchema, undefined, undefined>,
    res: Response
  ) => {
    try {
      const { clinicId } = req.params;
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

  static createClinicStaff = async (
    req: Request<
      CreateClinicStaffParamsSchema,
      undefined,
      CreateClinicStaffBodySchema
    >,
    res: Response
  ) => {
    try {
      const { clinicId } = req.params;
      const { userId } = req.body;
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
      const { clinicId } = req.params;
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
