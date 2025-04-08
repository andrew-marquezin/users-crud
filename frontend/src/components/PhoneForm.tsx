import { DeleteOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row
} from "antd";

export default function PhoneForm() {
  return (
    <Form.List name="phoneNumbers">
      {(fields, { add, remove }) => (
        <Row gutter={16}>
          {fields.map(({ key, name, ...restField }) => (
            <Col xs={24} sm={12} md={12} lg={8} key={key}>
              <Card style={{ marginBottom: 16 }}>
                <Form.Item
                  {...restField}
                  label="Number"
                  name={[name, 'number']}
                >
                  <Input placeholder="(11) 92345-6789" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="Type"
                  name={[name, 'type']}
                >
                  <Input placeholder="Mobile" />
                </Form.Item>
                <Button
                  color="danger"
                  variant="filled"
                  onClick={() => remove(name)}
                >
                  <DeleteOutlined />
                </Button>
              </Card>
            </Col>
          ))}
          <Col>
            <Form.Item>
              <Button type="dashed" onClick={() => add()}>
                Add phone number
              </Button>
            </Form.Item>
          </Col>
        </Row>
      )}
    </Form.List>
  )
}