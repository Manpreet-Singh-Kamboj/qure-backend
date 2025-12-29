import { Router } from "express";
import { TokenController } from "../controllers/token.controller";
import { isAuthenticated, isPatient } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/schema.validate.middleware";
import { generateTokenForClinicSchema } from "../schemas/token.schema";

const router: Router = Router();

router.post(
  "/",
  isAuthenticated,
  isPatient,
  validate({ body: generateTokenForClinicSchema }),
  TokenController.generateTokenForClinic
);

export { router as tokenRouter };
