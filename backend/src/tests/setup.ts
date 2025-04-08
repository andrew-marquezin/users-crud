import mongoose from "mongoose"
import { UserModel } from "../models/userModel"
import { connectDB } from "../utils/connectDatabase"

async function cleanDatabase() {
  try {
    await UserModel.deleteMany({})
    console.log('Database cleaned')
  } catch (e) {
    console.error(e.message)
  }
}

export function setup() {
  beforeAll(async () => {
    await connectDB()
    await cleanDatabase()
  });
  afterAll(async () => {
    await cleanDatabase()
    await mongoose.connection.close()
  });
}