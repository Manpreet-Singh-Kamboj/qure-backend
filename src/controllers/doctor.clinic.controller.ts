import { Request, Response } from "express";
import { ResponseHandler } from "../utils/response.handler.js";
import {
  CreateDoctorClinicSchema,
  CreateDoctorClinicStaffBodySchema,
  CreateDoctorClinicStaffParamsSchema,
  GetDoctorClinicSchema,
  GetDoctorClinicsSchema,
  GetDoctorClinicStaffParamsSchema,
} from "../schemas/doctor.clinic.schema.js";
import { DoctorClinicService } from "../services/doctor.clinic.service.js";
import { ClinicFiles } from "../types/index.js";

export class DoctorClinicController {
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
        openingHours,
        type,
      } = req.body as CreateDoctorClinicSchema;
      const files = req.files as ClinicFiles | null;
      if (!files || !files?.logo || !files?.images) {
        return ResponseHandler.error(
          res,
          "Logo and images are required.",
          400,
          null
        );
      }
      const { logo, images } = files;
      await DoctorClinicService.createClinic(
        name,
        address,
        latitude,
        longitude,
        phone,
        email,
        website,
        description,
        logo,
        images,
        openingHours,
        type
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
        req.body || ({} as GetDoctorClinicsSchema);
      const clinics = await DoctorClinicService.getClinics(
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
      const { clinicId } = req.params as GetDoctorClinicSchema;
      const clinic = await DoctorClinicService.getClinic(clinicId);
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
      const { clinicId } = req.params as CreateDoctorClinicStaffParamsSchema;
      const { userId } = req.body as CreateDoctorClinicStaffBodySchema;
      await DoctorClinicService.createClinicStaff(clinicId, userId);
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
    req: Request<GetDoctorClinicStaffParamsSchema, undefined, undefined>,
    res: Response
  ) => {
    try {
      const { clinicId } = req.params as GetDoctorClinicStaffParamsSchema;
      const staffMembers = await DoctorClinicService.getClinicStaffMembers(
        clinicId
      );
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
