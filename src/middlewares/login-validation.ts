import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { UserInput } from "../models/user.model";
import UserController from "../controllers/user.controller";

export const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password }: UserInput = req.body;
  const user = await UserController.getUser({ username });
  if (user) {
    // checking if the password is correct
    const validPass = await bcrypt.compare(password, user.password);

    if (validPass) {
      req.body.userId = user.id;
      next();
    } else res.status(400).send("Invalid Username or Password!!!");
  } else res.status(400).send("Invalid Username or Password!!!");
};
