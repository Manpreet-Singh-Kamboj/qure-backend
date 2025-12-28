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

router.post(
  "/register",
  validate({ body: registerSchema }),
  AuthController.register
);
router.post("/login", validate({ body: loginSchema }), AuthController.login);
router.post("/logout", validate({ body: logoutSchema }), AuthController.logout);
router.get("/me", isAuthenticated, AuthController.getProfile);
router.post(
  "/refresh-token",
  validate({ body: refreshTokenSchema }),
  AuthController.refreshToken
);

export { router as authRouter };
