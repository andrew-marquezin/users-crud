import {
  Typography,
  Input,
  Form,
  Button,
  Row,
  Col,
  DatePicker,
} from "antd"
import dayjs from "dayjs"
import { normalizeDocumentNumber } from "../utils/normalizers";
import { validateDocumentNumberInput } from "../utils/validators";
import { UserInputDTO } from "../types/UserType"
import AddressForm from "../components/addressForm";
import PhoneForm from "../components/phoneForm";

const { Title } = Typography;

export default function UserForm() {

  const [form] = Form.useForm();

  const onFinish = (e: UserInputDTO) => {
    e = { ...e, documentNumber: e.documentNumber.replace(/\D/g, '') }
    console.log(e)
  }

  return (
    <div>
      <Title level={2}>User Form</Title>
      <Form
        form={form}
        name="userForm"
        onFinish={onFinish}
        requiredMark={false}
        validateTrigger="onBlur"
        initialValues={{ addresses: [], phoneNumbers: [] }}
        style={{ maxWidth: '500' }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12} lg={8}>
            <Form.Item
              name="firstName"
              label="First Name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true, message: 'Please input your first name!' },
                { max: 50 },
              ]}
            >
              <Input placeholder="Phillip" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <Form.Item
              name="lastName"
              label="Last Name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true, message: 'Please input your last name!' },
                { max: 50 },
              ]}
            >
              <Input placeholder="Smith" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <Form.Item
              name="dateOfBirth"
              label="Birth Date"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              getValueProps={(value) => ({ value: value && dayjs(value, 'DD/MM/YYYY') })}
              normalize={(value) => value && value.format('DD-MM-YYYY')}
              rules={[
                { required: true, message: 'Please input your birth date!' },
              ]}
            >
              <DatePicker
                format="DD/MM/YYYY"
                style={{ width: "100%" }}
                disabledDate={
                  (current) => current && current > dayjs().endOf('day')
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <Form.Item
              name="documentNumber"
              label="Document Number"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              normalize={normalizeDocumentNumber}
              rules={[
                { required: true, message: 'Please input your document number!' },
                { validator: validateDocumentNumberInput, message: 'Invalid CPF!' },
              ]}
            >
              <Input
                placeholder="123.456.789-00"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={48} md={36} lg={8}>
            <Form.Item
              name="email"
              label="Email"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Invalid email!' },
                { max: 50 },
              ]}
            >
              <Input type="email" placeholder="example@example.com" />
            </Form.Item>
          </Col>
        </Row>

        <Title level={4}>Addresses</Title>
        <AddressForm />

        <Title level={4}>Phone Numbers</Title>
        <PhoneForm />

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}