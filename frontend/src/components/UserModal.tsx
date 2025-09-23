import {
  // Typography,
  Input,
  Form,
  Button,
  Row,
  Col,
  DatePicker,
  Modal,
} from "antd";
import dayjs from "dayjs";
import { normalizeDocumentNumber } from "../utils/Normalizers";
import { validateDocumentNumberInput } from "../utils/Validators";
import { useEffect } from "react";
import { UserInputDTO, UserType } from "../types/UserType";

interface UserModalProps {
  visible: boolean;
  onFinish: (values: UserInputDTO) => void;
  onCancel: () => void;
  initialData?: UserType | null;
}

export default function UserModal(
  { visible, onFinish, onCancel, initialData }: UserModalProps
) {
  const [form] = Form.useForm();
  const isEditMode = !!initialData;

  // Populate form fields when initialData changes
  useEffect(() => {
    if (visible) {
      if (isEditMode) {
        form.setFieldsValue(initialData)
      } else {
        form.resetFields();
      }
    }
  }, [form, initialData, visible, isEditMode]);

  const handleOk = () => { }

  return (
    <div>
      <Modal
        open={visible}
        title="test modal"
        onCancel={onCancel}
        footer={[
          <Button key="back" onClick={onCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            {isEditMode ? 'Save' : 'Create'}
          </Button>,
        ]}
        destroyOnClose
      >
        <Form
          form={form}
          name="userForm"
          onFinish={onFinish}
          // requiredMark={false}
          validateTrigger="onBlur"
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
                rules={[
                  { required: true, message: 'Please input your birth date!' },
                ]}
              >
                <DatePicker
                  format={{
                    format: 'DD/MM/YYYY',
                    type: 'mask',
                  }}
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
        </Form>
      </Modal>
    </div>
  )
}