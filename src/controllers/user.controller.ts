import { User, UserInput, UserOutput } from "../models/user.model";

export default {
  async getUser(payload: Pick<UserInput, "username">): Promise<User | null> {
    const { username } = payload
    const userOpt = {
      where: {
        username
      },
      attributes: ["id", "username", "password"]
    }
    return await User.findOne(userOpt)
  },
  async create(payload: UserInput): Promise<UserOutput | unknown> {
    try {
      return await User.create(payload)
    } catch (e) {
      const error = e as Error
      throw Error(error.message)
    }
  }
}
