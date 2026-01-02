import { Router } from "express";
import { TokenController } from "../controllers/token.controller.js";
import { isAuthenticated, isPatient } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/schema.validate.middleware.js";
import {
  deleteTokenForClinicSchema,
  generateTokenForClinicSchema,
  getTokenForPatientSchema,
} from "../schemas/token.schema.js";

const router: Router = Router();

router.post(
  "/",
  isAuthenticated,
  isPatient,
  validate({ body: generateTokenForClinicSchema }),
  TokenController.generateTokenForClinic
);

router.delete(
  "/:tokenId",
  isAuthenticated,
  isPatient,
  validate({ params: deleteTokenForClinicSchema }),
  TokenController.deleteTokenForClinic
);

router.get(
  "/:patientId",
  isAuthenticated,
  isPatient,
  validate({ params: getTokenForPatientSchema }),
  TokenController.getTokenForPatient
);

export { router as tokenRouter };
