import { useState } from "react"
import { UserInputDTO } from "../types/UserType"
import TextInput from "../components/TextInput"
import SubmitBtn from "../components/SubmitBtn";

const emptyFields = {
  firstName: '',
  lastName: '',
  email: '',
  documentNumber: '',
}

export default function UserForm() {
  const [userData, setUserData] = useState<UserInputDTO>(emptyFields);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    console.log('User submitted');
    setUserData(emptyFields);
  }

  return (
    <div>
      <h1>User Form</h1>
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
        <SubmitBtn />
      </form>
    </div>
  )
}