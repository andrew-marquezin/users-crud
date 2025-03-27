import mongoose from "mongoose";

export interface IAddress {
  _id?: mongoose.Types.ObjectId;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IPhoneNumbers {
  _id?: mongoose.Types.ObjectId;
  number: string;
  type: string;
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  address: IAddress[];
  phoneNumbers: IPhoneNumbers[];
  dateOfBirth: Date;
  email: string;
  documentNumber: string;
}

export interface UpdateUserDto {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  documentNumber: string;
}