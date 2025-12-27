import { Router } from "express";
import { isAdmin, isAuthenticated } from "../middlewares/auth.middleware";
import { ClinicController } from "../controllers/clinic.controller";
import { validate } from "../middlewares/schema.validate.middleware";
import { createClinicSchema, getClinicsSchema } from "../schemas/clinic.schema";

const router: Router = Router();

router.post(
  "/",
  isAuthenticated,
  isAdmin,
  validate(createClinicSchema),
  ClinicController.createClinic
);

router.get(
  "/",
  isAuthenticated,
  validate(getClinicsSchema),
  ClinicController.getClinics
);

export { router as clinicRouter };
