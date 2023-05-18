import { NextFunction, Request, Response, Router } from "express";
import NoteController from "../controllers/note.controller";
import { NoteInput } from "../models/note.model";
import noteController from "../controllers/note.controller";

const noteRouter = Router()

noteRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.query
  const notes = await NoteController.getAll(Number(userId))

  res.status(200).send(notes)
})

noteRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const payload: NoteInput = req.body

  const result = await NoteController.create(payload)
  return res.status(201).send(result)
})

noteRouter.put('/:noteId', async (req: Request, res: Response, next: NextFunction) => {
  const noteId = Number(req.params.noteId)
  const payload: NoteInput = req.body

  const result = await noteController.update(noteId, payload)
  return res.status(200).send(result)
})

noteRouter.delete('/:noteId', async (req: Request, res: Response, next: NextFunction) => {
  const noteId = Number(req.params.noteId)

  const result = await noteController.delete(noteId)
  return res.status(204).send(result)
})

export default noteRouter
