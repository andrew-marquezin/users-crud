import mongoose, { Document, Schema } from "mongoose";

interface IAddress extends Document {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface IUser extends Document {
  firstName: string;
  lastName: string;
  address: IAddress;
  dateOfBirth: Date;
  email: string;
  documentNumber: string;
}

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
})

const userScema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: addressSchema,
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  documentNumber: { type: String, required: true },
})

export const UserModel = mongoose.model<IUser>('User', userScema);