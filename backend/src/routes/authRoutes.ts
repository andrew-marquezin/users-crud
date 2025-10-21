import { Router } from "express";
import { AuthController } from "../controllers/authController";

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/validate', authController.validate.bind(authController));

export default authRouter;