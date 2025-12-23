import { Router } from "express";
import { validate } from "../middlewares/schema.validate";
import { registerSchema } from "../schemas/auth.schema";
import { AuthController } from "../controllers/auth.controller";

const router: Router = Router();

router.post("/register", validate(registerSchema), AuthController.register);

export { router as authRouter };
