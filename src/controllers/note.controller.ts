import { Note, NoteInput, NoteOutput } from "../models/note.model";

export default {
  async getAll(userId: number) {
    return await Note.findAll({
      order: [
        ['updatedAt', 'DESC']
      ],
      where: {
        userId
      },
      attributes: ["id", "content", "text", "createdAt", "updatedAt"]
    })
  },
  async create(payload: NoteInput): Promise<NoteOutput>{
    return await Note.create(payload)
  },
  async update(noteId: number, payload: Partial<NoteInput>): Promise<NoteOutput> {
    const note = await Note.findByPk(noteId)
    if (!note) {
      throw new Error('Note is not found')
    }

    return await note.update(payload)
  },
  async delete(noteId: number) {
    const deletedNoteNumber = await Note.destroy({
      where: {
        id: noteId
      }
    })

    return !!deletedNoteNumber
  }
}
