import { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import UserController from "../controllers/user.controller";
import { UserInput } from "../models/user.model";
import { loginValidation } from "../middlewares/login-validation";
import bcrypt from "bcryptjs";

const userRouter = Router()

userRouter.post('/login', loginValidation, async (req: Request, res: Response, next: NextFunction) => {
  // Create and assign a JWT
  const token = jwt.sign({ id: req.body.userId }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
  res.header('Authorization', `Bearer ${token}`).send({ userId: req.body.userId, token });
})

userRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await UserController.create({ username, password: hashedPassword })
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default userRouter
