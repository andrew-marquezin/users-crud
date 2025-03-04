import mongoose, { Schema } from "mongoose";

// interface User {
//   firstName: string;
//   lastName: string;
//   phoneNumbers: {
//     number: string;
//     type: string;
//   }[];
//   email: string;
//   adresses: {
//     street: string;
//     city: string;
//     state: string;
//   }[]
// }

const userScema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  documentNumber: { type: String, required: true },
})

export const UserModel = mongoose.model('User', userScema);