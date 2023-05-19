import { Router } from "express";
import { verify } from "../middlewares/verify-token";
import noteRouter from "./note.router";
import userRouter from "./user.router";

const router = Router();

router.use("/notes", verify, noteRouter);
router.use("/auth", userRouter);

export default router;
