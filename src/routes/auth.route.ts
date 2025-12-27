import { Router } from "express";
import { validate } from "../middlewares/schema.validate.middleware";
import {
  loginSchema,
  logoutSchema,
  refreshTokenSchema,
  registerSchema,
} from "../schemas/auth.schema";
import { AuthController } from "../controllers/auth.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";

const router: Router = Router();

router.post("/register", validate(registerSchema), AuthController.register);
router.post("/login", validate(loginSchema), AuthController.login);
router.post("/logout", validate(logoutSchema), AuthController.logout);
router.get("/me", isAuthenticated, AuthController.getProfile);
router.post(
  "/refresh-token",
  validate(refreshTokenSchema),
  AuthController.refreshToken
);

export { router as authRouter };
