import { User, UserInput, UserOutput } from "../models/user.model";

export default {
  async getUser(payload: UserInput): Promise<User | null> {
    const { username, password } = payload
    const userOpt = {
      where: {
        username,
        password
      },
      attributes: ["username", "password"]
    }
    return await User.findOne(userOpt)
  },
  async create(payload: UserInput): Promise<UserOutput>{
    return await User.create(payload)
  }
}
