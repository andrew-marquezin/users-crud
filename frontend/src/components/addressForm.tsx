import { DeleteOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row
} from "antd";

export default function AddressForm() {
  return (
    <Form.List name="addresses">
      {(fields, { add, remove }) => (
        <Row gutter={16}>
          {fields.map(({ key, name, ...restField }) => (
            <Col xs={24} sm={12} md={12} lg={8} key={key}>
              <Card style={{ marginBottom: 16 }}>
                <Form.Item
                  {...restField}
                  label="Street"
                  name={[name, 'street']}
                >
                  <Input placeholder="Av. Analice Sakatauskas" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="City"
                  name={[name, 'city']}
                >
                  <Input placeholder="Osasco" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="State"
                  name={[name, 'state']}
                >
                  <Input placeholder="São Paulo" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="Zip Code"
                  name={[name, 'zipCode']}
                >
                  <Input placeholder="12345-678" />
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
                Add address
              </Button>
            </Form.Item>
          </Col>
        </Row>
      )}
    </Form.List>
  )
}