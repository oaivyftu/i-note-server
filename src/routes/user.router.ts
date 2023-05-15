import { NextFunction, Request, Response, Router } from "express";
import UserController from "../controllers/user.controller";
import { UserInput } from "../models/user.model";

const userRouter = Router()

userRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  const payload: UserInput = req.body
  const user = await UserController.getUser(payload)
  if (!user) {
    res.status(404).send(user)
  } else {
    res.status(200).send(user)
  }
})

userRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const payload: UserInput = req.body
  const user = await UserController.create(payload)
  res.status(201).send(user)
})

export default userRouter
