import { Router } from "express";
import { UserController } from "../controllers/userController";

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.getAll);

userRouter.get('/:id', userController.getOne);

userRouter.post('/', userController.create);

userRouter.put('/:id', userController.update);

userRouter.delete('/:id', userController.delete);

export default userRouter;