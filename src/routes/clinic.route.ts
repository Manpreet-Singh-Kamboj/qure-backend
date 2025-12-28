import { Router } from "express";
import {
  isAdmin,
  isAdminOrStaff,
  isAuthenticated,
  isStaff,
} from "../middlewares/auth.middleware";
import { ClinicController } from "../controllers/clinic.controller";
import { validate } from "../middlewares/schema.validate.middleware";
import {
  createClinicSchema,
  createClinicStaffBodySchema,
  createClinicStaffParamsSchema,
  getClinicSchema,
  getClinicsSchema,
  getClinicStaffParamsSchema,
} from "../schemas/clinic.schema";

const router: Router = Router();

router.post(
  "/",
  isAuthenticated,
  isAdmin,
  validate({ body: createClinicSchema }),
  ClinicController.createClinic
);

router.get(
  "/",
  isAuthenticated,
  validate({ body: getClinicsSchema }),
  ClinicController.getClinics
);

router.get(
  "/:clinicId",
  isAuthenticated,
  validate({ params: getClinicSchema }),
  ClinicController.getClinic
);

router.post(
  "/:clinicId/staff",
  isAuthenticated,
  isAdmin,
  validate({
    params: createClinicStaffParamsSchema,
    body: createClinicStaffBodySchema,
  }),
  ClinicController.createClinicStaff
);

router.get(
  "/:clinicId/staff",
  isAuthenticated,
  isAdminOrStaff,
  validate({ params: getClinicStaffParamsSchema }),
  ClinicController.getClinicStaffMembers
);

export { router as clinicRouter };
