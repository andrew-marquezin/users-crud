export type AddressType = {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export type AddressInputDTO = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export type PhoneType = {
  id?: string;
  number?: string;
  type?: string;
}

export type PhoneInputDTO = {
  number: string;
  type: string;
}

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  addresses: AddressType[];
  phoneNumbers: PhoneType[];
  dateOfBirth: string;
  email: string;
  documentNumber: string;
}

export type UserInputDTO = {
  _id?: string;
  firstName: string;
  lastName: string;
  addresses: AddressInputDTO[];
  phoneNumbers: PhoneInputDTO[];
  dateOfBirth: Date;
  email: string;
  documentNumber: string;
}