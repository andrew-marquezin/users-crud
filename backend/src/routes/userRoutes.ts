import { Router } from "express";
import { UserController } from "../controllers/userController";

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:id', userController.getUserById);

userRouter.post('/', userController.createUser);

userRouter.put('/:id', userController.update);

userRouter.delete('/', userController.delete);

export default userRouter;