import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export const verify = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.header("Authorization");
  if (!auth) return res.status(401).send("Access denied!!!");
  const token = auth.split(" ")[1];
  if (!token) return res.status(401).send("Access denied!!!");
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    next();
  } catch (err) {
    return res.status(400).send("Invalid token!!!");
  }
};
