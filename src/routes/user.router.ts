import { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserController from "../controllers/user.controller";
import { loginValidation } from "../middlewares/login-validation";
import { registerValidation } from "../middlewares/register-validation";

const userRouter = Router();

userRouter.post(
  "/login",
  loginValidation,
  async (req: Request, res: Response, next: NextFunction) => {
    // Create and assign a JWT
    const token = jwt.sign({ id: req.body.userId }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res
      .header("Authorization", `Bearer ${token}`)
      .send({ userId: req.body.userId, token });
  }
);

userRouter.post(
  "/register",
  registerValidation,
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const user = await UserController.create({ username, password: hashedPassword });
      res.status(201).send(user);
    } catch (e) {
      const error = e as Error;
      res.status(400).send(error.message);
    }
  }
);

export default userRouter;
