import {Router} from "express";
import noteRouter from "./note.router";
import userRouter from "./user.router";

const router = Router()

router.use('/notes', noteRouter)
router.use('/user', userRouter)

export default router