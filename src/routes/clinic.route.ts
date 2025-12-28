import { Router } from "express";
import {
  isAdmin,
  isAdminOrStaff,
  isAuthenticated,
} from "../middlewares/auth.middleware";
import { DoctorClinicController } from "../controllers/doctor.clinic.controller";
import { validate } from "../middlewares/schema.validate.middleware";
import {
  createDoctorClinicSchema,
  createDoctorClinicStaffBodySchema,
  createDoctorClinicStaffParamsSchema,
  getDoctorClinicSchema,
  getDoctorClinicsSchema,
  getDoctorClinicStaffParamsSchema,
} from "../schemas/doctor.clinic.schema";

const router: Router = Router();

router.post(
  "/",
  isAuthenticated,
  isAdmin,
  validate({ body: createDoctorClinicSchema }),
  DoctorClinicController.createClinic
);

router.get(
  "/",
  isAuthenticated,
  validate({ body: getDoctorClinicsSchema }),
  DoctorClinicController.getClinics
);

router.get(
  "/:clinicId",
  isAuthenticated,
  validate({ params: getDoctorClinicSchema }),
  DoctorClinicController.getClinic
);

router.post(
  "/:clinicId/staff",
  isAuthenticated,
  isAdmin,
  validate({
    params: createDoctorClinicStaffParamsSchema,
    body: createDoctorClinicStaffBodySchema,
  }),
  DoctorClinicController.createClinicStaff
);

router.get(
  "/:clinicId/staff",
  isAuthenticated,
  isAdminOrStaff,
  validate({ params: getDoctorClinicStaffParamsSchema }),
  DoctorClinicController.getClinicStaffMembers
);

export { router as clinicRouter };
