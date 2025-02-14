import mongoose, { Schema } from "mongoose";

const userScema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  documentNumber: { type: String, required: true },
})

export const UserModel = mongoose.model('User', userScema);