import { Request, Response, Router } from "express";

const userRouter = Router();

userRouter.get('/', (_req: Request, res: Response) => {
  res.json({ response: "This is the user 'GET' endpoint" });
})

userRouter.get('/:id', (_req: Request, res: Response) => {
  res.json({ response: "This is the user 'GET' but only one endpoint" });
})

// userRouter.get('/', (_req: Request, res: Response) => {
//   res.json({ response: "This is the user 'GET' endpoint" });
// })

// userRouter.get('/', (_req: Request, res: Response) => {
//   res.json({ response: "This is the user 'GET' endpoint" });
// })

// userRouter.get('/', (_req: Request, res: Response) => {
//   res.json({ response: "This is the user 'GET' endpoint" });
// })

export default userRouter;