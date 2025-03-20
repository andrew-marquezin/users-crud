import React, { useState } from "react"
import { AddressInputDTO, PhoneInputDTO, UserInputDTO } from "../types/UserType"
import TextInput from "../components/TextInput"
import SubmitBtn from "../components/SubmitBtn";

const emptyFields = {
  firstName: '',
  lastName: '',
  addresses: [],
  phoneNumbers: [],
  email: '',
  documentNumber: '',
}

export default function UserForm() {
  const [userData, setUserData] = useState<UserInputDTO>(emptyFields);
  const [addressesState, setAdressesState] = useState<AddressInputDTO[]>([]);
  const [phonesState, setPhonesState] = useState<PhoneInputDTO[]>([]);

  const addPhoneNumber = () => {
    setPhonesState([...phonesState, {
      number: '',
      type: '',
    }])
  }

  const handleUpdatePhone = (field: keyof PhoneInputDTO, value: string, index: number) => {
    const newPhones = [...phonesState];
    newPhones[index][field] = value;
    setPhonesState(newPhones);
  }

  const addAddress = () => {
    setAdressesState([...addressesState, {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    }]);
  }

  const handleUpdateAddress = (field: keyof AddressInputDTO, value: string, index: number) => {
    const newAddresses = [...addressesState];
    newAddresses[index][field] = value;
    setAdressesState(newAddresses);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData({
      ...userData,
      addresses: addressesState,
      phoneNumbers: phonesState,
    });
    console.log('User submitted');
    setUserData(emptyFields);
  }

  return (
    <div>
      <h2>User Form</h2>
      <form
        onSubmit={handleSubmit}
      >
        <TextInput
          label="First Name"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <TextInput
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <TextInput
          label="Document Number"
          name="documentNumber"
          value={userData.documentNumber}
          onChange={handleChange}
        />
        <div className="addresses">
          <p>Adresses</p>
          {addressesState.map((address, index) => (
            <div key={index}>
              <TextInput
                label="Street"
                name="street"
                value={address.street}
                onChange={(e) => handleUpdateAddress('street', e.target.value, index)}
              />
              <TextInput
                label="City"
                name="city"
                value={address.city}
                onChange={(e) => handleUpdateAddress('city', e.target.value, index)}
              />
              <TextInput
                label="State"
                name="state"
                value={address.state}
                onChange={(e) => handleUpdateAddress('state', e.target.value, index)}
              />
              <TextInput
                label="Zip Code"
                name="zipCode"
                value={address.zipCode}
                onChange={(e) => handleUpdateAddress('zipCode', e.target.value, index)}
              />
              <br />
            </div>
          ))}
          <button
            type="button"
            onClick={addAddress}
          >
            Add Address
          </button>
        </div>
        <div className="phones">
          <p>Phones</p>
          {phonesState.map((phone, index) => (
            <div key={index}>
              <TextInput
                label="Number"
                name="number"
                value={phone.number}
                onChange={(e) => handleUpdatePhone('number', e.target.value, index)}
              />
              <TextInput
                label="Type"
                name="type"
                value={phone.type}
                onChange={(e) => handleUpdatePhone('type', e.target.value, index)}
              />
              <br />
            </div>
          ))}
          <button
            type="button"
            onClick={addPhoneNumber}
          >
            Add Phone
          </button>
        </div>
        <SubmitBtn />
      </form>
    </div>
  )
}