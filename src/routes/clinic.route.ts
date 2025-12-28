import { Router } from "express";
import {
  isAdmin,
  isAdminOrStaff,
  isAuthenticated,
  isStaff,
} from "../middlewares/auth.middleware";
import { DoctorClinicController } from "../controllers/doctor.clinic.controller";
import { validate } from "../middlewares/schema.validate.middleware";
import {
  createClinicSchema,
  createClinicStaffBodySchema,
  createClinicStaffParamsSchema,
  getClinicSchema,
  getClinicsSchema,
  getClinicStaffParamsSchema,
} from "../schemas/doctor.clinic.schema";

const router: Router = Router();

router.post(
  "/",
  isAuthenticated,
  isAdmin,
  validate({ body: createClinicSchema }),
  DoctorClinicController.createClinic
);

router.get(
  "/",
  isAuthenticated,
  validate({ body: getClinicsSchema }),
  DoctorClinicController.getClinics
);

router.get(
  "/:clinicId",
  isAuthenticated,
  validate({ params: getClinicSchema }),
  DoctorClinicController.getClinic
);

router.post(
  "/:clinicId/staff",
  isAuthenticated,
  isAdmin,
  validate({
    params: createClinicStaffParamsSchema,
    body: createClinicStaffBodySchema,
  }),
  DoctorClinicController.createClinicStaff
);

router.get(
  "/:clinicId/staff",
  isAuthenticated,
  isAdminOrStaff,
  validate({ params: getClinicStaffParamsSchema }),
  DoctorClinicController.getClinicStaffMembers
);

export { router as clinicRouter };
