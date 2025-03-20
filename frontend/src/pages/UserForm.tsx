import React, { useState } from "react"
import {
  Typography,
  Input,
  Form,
  Button,
  Row,
  Col,
} from "antd"
import { AddressInputDTO, PhoneInputDTO, UserInputDTO } from "../types/UserType"

const emptyFields = {
  firstName: '',
  lastName: '',
  addresses: [],
  phoneNumbers: [],
  email: '',
  documentNumber: '',
}

const { Title } = Typography;

export default function UserForm() {
  const [userData, setUserData] = useState<UserInputDTO>(emptyFields);
  const [addressesState, setAdressesState] = useState<AddressInputDTO[]>([]);
  const [phonesState, setPhonesState] = useState<PhoneInputDTO[]>([]);

  const [form] = Form.useForm();

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
      <Title level={2}>User Form</Title>
      <Form
        form={form}
        name="userForm"
        onFinish={handleSubmit}
        style={{ maxWidth: '500' }}
      >
        <Row>
          <Col>
            <Form.Item
              name="firstName"
              label="First Name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder="Phillip" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}