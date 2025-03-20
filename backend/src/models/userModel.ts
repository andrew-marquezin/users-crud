import mongoose, { Document, Schema } from "mongoose";

interface IAddress extends Document {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface IPhoneNumbers extends Document {
  number: string;
  type: string;
}

interface IUser extends Document {
  firstName: string;
  lastName: string;
  address: IAddress;
  phoneNumbers: IPhoneNumbers[];
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

const phoneNumbersSchema = new Schema({
  number: { type: String, required: true },
  type: { type: String, required: true },
})

const userScema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: [addressSchema],
  phoneNumbers: [phoneNumbersSchema],
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  documentNumber: { type: String, required: true },
})

export const UserModel = mongoose.model<IUser>('User', userScema);