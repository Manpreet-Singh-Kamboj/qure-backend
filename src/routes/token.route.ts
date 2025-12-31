import { Router } from "express";
import { TokenController } from "../controllers/token.controller.js";
import { isAuthenticated, isPatient } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/schema.validate.middleware.js";
import { generateTokenForClinicSchema } from "../schemas/token.schema.js";

const router: Router = Router();

router.post(
  "/",
  isAuthenticated,
  isPatient,
  validate({ body: generateTokenForClinicSchema }),
  TokenController.generateTokenForClinic
);

export { router as tokenRouter };
