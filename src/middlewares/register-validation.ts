import { Request, Response, NextFunction } from "express";
import { User, UserInput } from "../models/user.model";

export const registerValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username }: Pick<UserInput, "username"> = req.body;
  // checking to see if the user is already registered
  const userExists = await User.findOne({ where: { username } });
  if (userExists) res.status(400).send("Username already exists!!!");
  else next();
};
