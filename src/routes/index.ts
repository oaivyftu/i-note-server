import {Router} from "express";
import noteRouter from "./note.router";
import userRouter from "./user.router";
import { verify } from "../middlewares/verify-token";

const router = Router()

router.use('/notes', verify, noteRouter)
router.use('/auth', userRouter)

export default router
